/* 加微信转化组件 —— 高数站专用（数据站用的是 app.js 里的 DB.mountWx）
   两个位置：① 首页首屏顶部大卡 ② 所有页面吸底悬浮条
   为什么要自成一份：高数站没引 app.js，且配色体系不同（橘色 #F97316） */
(function () {
  'use strict';

  var WX_ID = 'shang_an_baaa';
  var WX_TAGS = ['报课优惠', '资料领取', '志愿填报', '学习陪伴'];
  var WX_SUB = '报课优惠 · 资料领取 · 志愿填报 · 学习陪伴';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // 复制三层兜底：clipboard API → execCommand → 选中号码让用户长按
  // 微信内置浏览器经常直接拒 clipboard，只写第一层等于按钮点了没反应
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
        var s = window.getSelection();
        s.removeAllRanges();
        s.addRange(r);
        btn.textContent = '长按号码';
        setTimeout(function () { btn.textContent = label; }, 2400);
      });
    });
  }

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

  function mount() {
    if (document.querySelector('.wxbar')) return;

    var hero = document.querySelector('.hero');
    var hasHeroCard = false;
    if (hero && hero.parentNode && !document.querySelector('.wxhero')) {
      hero.parentNode.insertBefore(buildHero(), hero);
      hasHeroCard = true;
    }

    var bar = buildBar();
    document.body.appendChild(bar);
    document.body.classList.add('has-wxbar');

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

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
