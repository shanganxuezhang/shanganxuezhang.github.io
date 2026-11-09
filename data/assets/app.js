/* 江苏专转本数据站 — 共用工具 */
(function () {
  'use strict';

  // ---------- 基础 ----------
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function fmtInt(n) {
    var v = Number(n) || 0;
    return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  function fmtMoney(n) {
    var v = Number(n) || 0;
    return v.toLocaleString('zh-CN');
  }
  function qs(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(location.search);
    return m ? decodeURIComponent(m[1]) : '';
  }

  // ---------- 专业大类固定顺序（按报考人数体量排，不要按字母） ----------
  var CATS = [
    '计算机类', '财经类', '管理类(文)', '管理类(理)', '电子信息类',
    '机械工程类', '美术设计类', '土木建筑类', '化工生物类', '医护类(理)',
    '医护类(文)', '文史类', '英语类', '教育类', '新闻传播类',
    '法学类', '食品类', '农林类', '日语类', '音乐类', '资源环境类'
  ];
  function catOrder(c) {
    var i = CATS.indexOf(c);
    return i < 0 ? 99 : i;
  }

  // ---------- 分批渲染（474 条一次塞进 DOM 手机会卡） ----------
  function paged(el, items, renderOne, step, moreBtn) {
    var i = 0;
    step = step || 40;
    el.innerHTML = '';
    function add() {
      var frag = document.createDocumentFragment();
      var end = Math.min(i + step, items.length);
      for (; i < end; i++) frag.appendChild(renderOne(items[i], i));
      el.appendChild(frag);
      if (moreBtn) {
        if (i < items.length) {
          moreBtn.style.display = '';
          moreBtn.textContent = '显示更多（还有 ' + (items.length - i) + ' 条）';
        } else {
          moreBtn.style.display = 'none';
        }
      }
    }
    add();
    if (moreBtn) moreBtn.onclick = add;
    return { addAll: function () { while (i < items.length) add(); } };
  }

  // ---------- 顶部返回 ----------
  function mountBack() {
    var b = document.querySelector('.topbar .back');
    if (!b) return;
    b.addEventListener('click', function () {
      if (history.length > 1) history.back();
      else location.href = 'index.html';
    });
  }

  // ---------- 类别 chip 渲染 ----------
  function renderChips(el, list, cur, onPick, allLabel) {
    var html = '<div class="chip' + (cur === '' ? ' on' : '') + '" data-c="">' + esc(allLabel || '全部') + '</div>';
    list.forEach(function (c) {
      html += '<div class="chip' + (c === cur ? ' on' : '') + '" data-c="' + esc(c) + '">' + esc(c) + '</div>';
    });
    el.innerHTML = html;
    el.querySelectorAll('.chip').forEach(function (ch) {
      ch.addEventListener('click', function () {
        el.querySelectorAll('.chip').forEach(function (x) { x.classList.remove('on'); });
        ch.classList.add('on');
        onPick(ch.getAttribute('data-c'));
      });
    });
  }

  // ---------- 加微信转化组件 ----------
  // 老板的要求：不放页脚（页脚没人看），要放最显眼的位置。
  // 两处：① 首页首屏顶部大卡（带 4 个好处）② 所有页面吸底悬浮条，滑到哪都在。
  var WX_ID = 'shang_an_baaa';
  var WX_TAGS = ['报课优惠', '资料领取', '志愿填报', '学习陪伴'];
  var WX_SUB = '报课优惠 · 资料领取 · 志愿填报 · 学习陪伴';

  // 复制：https 下优先用 clipboard API；微信内置浏览器经常不给权限，
  // 必须退回 execCommand，再不行就选中号码让用户长按复制（微信号是真实文本，长按一定能选）
  function legacyCopy(t) {
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = t;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, t.length);
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      ok ? resolve() : reject(new Error('copy failed'));
    });
  }
  function copyText(t) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(t).catch(function () { return legacyCopy(t); });
    }
    return legacyCopy(t);
  }

  // 给按钮绑复制，成功后原地反馈；被拦就把号码选中提示长按
  function bindCopy(btn, idEl) {
    var label = btn.textContent;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      copyText(WX_ID).then(function () {
        btn.textContent = '已复制✓';
        btn.classList.add('done');
        setTimeout(function () { btn.textContent = label; btn.classList.remove('done'); }, 1800);
      }).catch(function () {
        if (!idEl) return;
        var r = document.createRange();
        r.selectNodeContents(idEl);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(r);
        btn.textContent = '长按号码';
        setTimeout(function () { btn.textContent = label; }, 2400);
      });
    });
  }

  // ① 首屏大卡
  function buildHero() {
    var box = document.createElement('div');
    box.className = 'wxhero';
    box.innerHTML =
      '<div class="wxhero-top">' +
        '<span class="wxhero-ico">🎓</span>' +
        '<div class="wxhero-tt">' +
          '<div class="wxhero-t">加学长微信</div>' +
          '<div class="wxhero-s">转本这条路，有人带少走弯路</div>' +
        '</div>' +
      '</div>' +
      '<div class="wxhero-tags">' +
        WX_TAGS.map(function (t) { return '<span class="wxhero-tag">' + esc(t) + '</span>'; }).join('') +
      '</div>' +
      '<div class="wxhero-act">' +
        '<b class="wxhero-id">' + esc(WX_ID) + '</b>' +
        '<button class="wxhero-btn" type="button">复制微信号</button>' +
      '</div>';
    bindCopy(box.querySelector('.wxhero-btn'), box.querySelector('.wxhero-id'));
    return box;
  }

  // ② 吸底条
  function buildBar() {
    var bar = document.createElement('div');
    bar.className = 'wxbar';
    bar.innerHTML =
      '<div class="wxbar-ico">🎓</div>' +
      '<div class="wxbar-txt">' +
        '<div class="wxbar-l1">加微信 <b>' + esc(WX_ID) + '</b></div>' +
        '<div class="wxbar-l2">' + esc(WX_SUB) + '</div>' +
      '</div>' +
      '<button class="wxbar-btn" type="button">复制</button>';
    bindCopy(bar.querySelector('.wxbar-btn'), bar.querySelector('.wxbar-l1 b'));
    return bar;
  }

  function mountWx() {
    if (document.querySelector('.wxbar')) return;

    // 首屏大卡：只有带 hero 的首页才放；其它页面一进来就靠吸底条
    var hero = document.querySelector('.hero');
    var hasHeroCard = false;
    if (hero && !document.querySelector('.wxhero')) {
      hero.parentNode.insertBefore(buildHero(), hero);
      hasHeroCard = true;
    }

    var bar = buildBar();
    document.body.appendChild(bar);
    document.body.classList.add('has-wxbar');

    // 首屏有大卡时，先让用户看到大卡；大卡滚出视野再抬吸底条，避免同屏两块重复
    if (hasHeroCard) {
      var card = document.querySelector('.wxhero');
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
          bar.classList.toggle('on', !entries[0].isIntersecting);
        }, { threshold: 0 }).observe(card);
      } else {
        bar.classList.add('on');
      }
    } else {
      bar.classList.add('on');
    }
  }

  window.DB = {
    esc: esc, fmtInt: fmtInt, fmtMoney: fmtMoney, qs: qs,
    CATS: CATS, catOrder: catOrder,
    paged: paged, mountBack: mountBack, renderChips: renderChips,
    wx: WX_ID, mountWx: mountWx
  };

  // app.js 在 body 末尾加载，DOM 一般已就绪；仍兼容脚本被提前引用的情形
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { mountBack(); mountWx(); });
  } else {
    mountBack();
    mountWx();
  }
})();
