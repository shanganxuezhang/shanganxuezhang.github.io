window.PAPERS = window.PAPERS || {}
window.PAPERS['2026'] = {
  year: 2026,
  full: 150,
  minutes: 120,
  note: '2026 年整套卷的计算强度是近几年最高的：一元微分与一元积分两章合计 74 分，线代 28 分全部落在计算题里。第 8 题原卷印的是“线性无关”，与四个选项对不上，按选项反推应为“线性相关”，属印刷笔误。',
  sections: [
    {
      name: '一、单项选择题',
      note: '本大题共 8 小题，每小题 4 分，共 32 分．',
      items: [
        {
          no: 1,
          stem: String.raw`已知函数 $f(x)=x^{4}\sin\dfrac{1}{x}$，$g(x)=\sqrt{1+2x^{3}}-1$，则当 $x\to 0^{+}$ 时，函数 $f(x)$ 是 $g(x)$ 的（　　）无穷小`,
          options: ['高阶', '低阶', '同阶但不等价', '等价'],
          answer: 'A',
          solution: String.raw`先用等价无穷小定出 $g$ 的阶：
$$\sqrt{1+u}-1\sim\frac{u}{2}\ \Longrightarrow\ g(x)=\sqrt{1+2x^{3}}-1\sim\frac{1}{2}\cdot 2x^{3}=x^{3}$$
故 $g$ 是 $3$ 阶无穷小．再看 $f$：由 $|\sin|\le 1$ 得 $|f(x)|\le x^{4}$，即 $f$ 是 $4$ 阶无穷小．于是
$$\frac{f(x)}{g(x)}\sim\frac{x^{4}\sin\frac{1}{x}}{x^{3}}=x\sin\frac{1}{x}\longrightarrow 0\quad(x\to 0)$$
比值趋于 $0$，故 $f$ 是 $g$ 的**高阶**无穷小．选 A．`
        },
        {
          no: 2,
          stem: String.raw`点 $x=0$ 是函数 $f(x)=\begin{cases} e^{\frac{1}{x}}, & x<0 \\[2pt] 1, & x=0 \\[2pt] \dfrac{\tan x-\sin x}{x^{2}}, & x>0 \end{cases}$ 的（　　）`,
          options: ['可去间断点', '跳跃间断点', '无穷间断点', '连续点'],
          answer: 'A',
          solution: String.raw`分别求两侧极限．
左极限：$x\to 0^{-}$ 时 $\dfrac{1}{x}\to-\infty$，故 $e^{1/x}\to 0$．
右极限：$\tan x-\sin x=\tan x(1-\cos x)\sim x\cdot\dfrac{x^{2}}{2}=\dfrac{x^{3}}{2}$，故
$$\lim_{x\to 0^{+}}\frac{\tan x-\sin x}{x^{2}}=\lim_{x\to 0^{+}}\frac{x^{3}/2}{x^{2}}=0$$
两侧极限相等（都等于 $0$），说明极限存在；但 $f(0)=1$，与极限值不等，故为**可去间断点**．选 A．`
        },
        {
          no: 3,
          stem: String.raw`已知函数 $f(x)=\dfrac{1}{3-2x}$，则 $f^{(n)}(1)=$（　　）`,
          options: [
            String.raw`$\dfrac{2^{n}n!}{3^{n+1}}$`,
            String.raw`$\dfrac{(-1)^{n}2^{n}n!}{3^{n+1}}$`,
            String.raw`$(-1)^{n}2^{n}n!$`,
            String.raw`$2^{n}n!$`
          ],
          answer: 'D',
          solution: String.raw`写成负指数后逐个求导找规律：
$$f(x)=(3-2x)^{-1},\quad f'(x)=2(3-2x)^{-2},\quad f''(x)=2\cdot 2\cdot 2(3-2x)^{-3}$$
一般地
$$f^{(n)}(x)=2^{n}n!\,(3-2x)^{-(n+1)}$$
代入 $x=1$，此时 $3-2x=1$，$1^{-(n+1)}=1$，故
$$f^{(n)}(1)=2^{n}n!$$
选 D．注意选项 B 多乘了 $(-1)^{n}$，那是 $(3+2x)^{-1}$ 的结论，别混．`
        },
        {
          no: 4,
          stem: String.raw`曲线 $y=x^{2}\left(1-e^{\frac{1}{2x^{2}}}\right)$ 的渐近线方程为（　　）`,
          options: [String.raw`$y=\dfrac{1}{2}$`, String.raw`$y=-\dfrac{1}{2}$`, String.raw`$y=2$`, String.raw`$y=-2$`],
          answer: 'B',
          solution: String.raw`令 $t=\dfrac{1}{2x^{2}}$，则 $x\to\infty$ 时 $t\to 0^{+}$，且 $x^{2}=\dfrac{1}{2t}$．用 $e^{t}=1+t+\dfrac{t^{2}}{2}+\cdots$：
$$y=\frac{1}{2t}\left(1-e^{t}\right)=\frac{1}{2t}\left(-t-\frac{t^{2}}{2}-\cdots\right)=-\frac{1}{2}-\frac{t}{4}-\cdots\longrightarrow-\frac{1}{2}$$
故 $y=-\dfrac{1}{2}$ 是水平渐近线．选 B．
（严格说 $x\to 0$ 时 $y\to-\infty$，$x=0$ 也是垂直渐近线，但本题四个选项只考水平渐近线．）`
        },
        {
          no: 5,
          stem: String.raw`已知积分 $\displaystyle\int_{1}^{+\infty}xe^{-ax^{2}}dx=e^{-a}$，则 $a=$（　　）`,
          options: [String.raw`$-\dfrac{1}{2}$`, '$2$', String.raw`$\dfrac{1}{2}$`, '$-2$'],
          answer: 'C',
          solution: String.raw`先算原函数：$\displaystyle\int xe^{-ax^{2}}dx=-\frac{1}{2a}e^{-ax^{2}}+C$．于是
$$\int_{1}^{+\infty}xe^{-ax^{2}}dx=0-\left(-\frac{1}{2a}e^{-a}\right)=\frac{e^{-a}}{2a}$$
（上限为 $0$ 要求 $a>0$，否则积分发散．）令其等于 $e^{-a}$：
$$\frac{e^{-a}}{2a}=e^{-a}\ \Longrightarrow\ 2a=1\ \Longrightarrow\ a=\frac{1}{2}$$
选 C．`
        },
        {
          no: 6,
          stem: String.raw`下列级数中，绝对收敛的是（　　）`,
          options: [
            String.raw`$\displaystyle\sum_{n=1}^{\infty}(-1)^{n}\dfrac{1}{n}$`,
            String.raw`$\displaystyle\sum_{n=1}^{\infty}(-1)^{n}\dfrac{1}{n^{3}}$`,
            String.raw`$\displaystyle\sum_{n=1}^{\infty}(-1)^{n}\dfrac{1}{n^{2/3}}$`,
            String.raw`$\displaystyle\sum_{n=1}^{\infty}(-1)^{n}\sin\left(n\pi+\dfrac{2}{3n}\right)$`
          ],
          answer: 'B',
          solution: String.raw`逐个加绝对值看是否收敛：
A：加绝对值得 $\displaystyle\sum\frac{1}{n}$，调和级数**发散**，故原级数只是条件收敛．
B：加绝对值得 $\displaystyle\sum\frac{1}{n^{3}}$，$p=3>1$ **收敛**，故原级数绝对收敛．
C：加绝对值得 $\displaystyle\sum\frac{1}{n^{2/3}}$，$p=\frac{2}{3}\le 1$ **发散**．
D：由 $\sin(n\pi+\theta)=(-1)^{n}\sin\theta$ 得
$$(-1)^{n}\sin\left(n\pi+\frac{2}{3n}\right)=(-1)^{n}\cdot(-1)^{n}\sin\frac{2}{3n}=\sin\frac{2}{3n}\sim\frac{2}{3n}$$
它本身是个正项级数且发散，连收敛都谈不上．
故选 B．`
        },
        {
          no: 7,
          stem: String.raw`已知矩阵 $A=\begin{pmatrix} 1 & 3 \\ 2 & 6 \end{pmatrix}$，$B=\begin{pmatrix} 8 & 9 \\ 4 & 0 \end{pmatrix}$，则下列可逆的是（　　）`,
          options: [String.raw`$2A+B$`, String.raw`$A-2B$`, String.raw`$A^{2}B$`, String.raw`$AB^{2}$`],
          answer: 'B',
          solution: String.raw`先看 $A$：$|A|=1\cdot 6-3\cdot 2=0$，$A$ 不可逆．而
$$|A^{2}B|=|A|^{2}|B|=0,\qquad |AB^{2}|=|A||B|^{2}=0$$
故 C、D 都不可逆，排除．
再算 A、B：
$$2A+B=\begin{pmatrix}2&6\\4&12\end{pmatrix}+\begin{pmatrix}8&9\\4&0\end{pmatrix}=\begin{pmatrix}10&15\\8&12\end{pmatrix},\quad |2A+B|=120-120=0$$
$$A-2B=\begin{pmatrix}1&3\\2&6\end{pmatrix}-\begin{pmatrix}16&18\\8&0\end{pmatrix}=\begin{pmatrix}-15&-15\\-6&6\end{pmatrix},\quad |A-2B|=-90-90=-180\ne 0$$
故 $A-2B$ 可逆．选 B．`
        },
        {
          no: 8,
          stem: String.raw`已知向量组 $\alpha_{1},\alpha_{2},\alpha_{3}$ 线性无关，$\alpha_{1}+3\alpha_{2}+3\alpha_{3}$，$\alpha_{1}+4\alpha_{2}+5\alpha_{3}$，$2\alpha_{1}+k_{1}\alpha_{2}+k_{2}\alpha_{3}$ 线性无关，则下列式子成立的是（　　）`,
          options: [
            String.raw`$2k_{1}+k_{2}=6$`,
            String.raw`$2k_{1}-k_{2}=6$`,
            String.raw`$k_{1}+2k_{2}=6$`,
            String.raw`$2k_{2}-k_{1}=6$`
          ],
          answer: 'B',
          solution: String.raw`把三个新向量在基 $\alpha_{1},\alpha_{2},\alpha_{3}$ 下的坐标按行写成矩阵：
$$M=\begin{pmatrix}1&3&3\\1&4&5\\2&k_{1}&k_{2}\end{pmatrix}$$
由于 $\alpha_{1},\alpha_{2},\alpha_{3}$ 线性无关，三个新向量线性相关 $\Leftrightarrow |M|=0$．计算行列式（按第一行展开）：
$$|M|=1(4k_{2}-5k_{1})-3(k_{2}-10)+3(k_{1}-8)=4k_{2}-5k_{1}-3k_{2}+30+3k_{1}-24=k_{2}-2k_{1}+6$$
令 $|M|=0$ 得 $k_{2}-2k_{1}+6=0$，即 $2k_{1}-k_{2}=6$．选 B．
**关于原卷笔误**：题目印的是“线性无关”，但线性无关只能推出 $|M|\ne 0$，即 $2k_{1}-k_{2}\ne 6$，四个选项全是等式，一个都对不上．按选项反推，题干应为“线性**相关**”．考场上遇到这种，选唯一能对上选项的那个．`
        }
      ]
    },
    {
      name: '二、填空题',
      note: '本大题共 6 小题，每小题 4 分，共 24 分．',
      items: [
        {
          no: 9,
          stem: String.raw`已知函数 $f(x)$ 在 $x=1$ 处连续，且 $f(1)=3$，$\displaystyle\lim_{x\to 1}\frac{f^{2}(x)-f^{2}(1)}{x^{2}-1}=2$，则 $f'(1)=$ ______`,
          answer: String.raw`$\dfrac{2}{3}$`,
          solution: String.raw`平方差分解后拆成两个因子：
$$\frac{f^{2}(x)-f^{2}(1)}{x^{2}-1}=\frac{f(x)-f(1)}{x-1}\cdot\frac{f(x)+f(1)}{x+1}$$
当 $x\to 1$ 时，第一个因子 $\to f'(1)$（导数定义）；第二个因子由连续性得 $\dfrac{3+3}{1+1}=3$．故
$$3f'(1)=2\ \Longrightarrow\ f'(1)=\frac{2}{3}$$`
        },
        {
          no: 10,
          stem: String.raw`已知函数 $f(x)=\displaystyle\int_{1}^{x}\frac{e^{t}}{t}dt$，则 $f(x)$ 的拐点为 ______`,
          answer: String.raw`$(1,\,0)$`,
          solution: String.raw`变上限积分求导：
$$f'(x)=\frac{e^{x}}{x},\qquad f''(x)=\frac{e^{x}\cdot x-e^{x}\cdot 1}{x^{2}}=\frac{e^{x}(x-1)}{x^{2}}$$
定义域 $x>0$，故 $e^{x}>0$、$x^{2}>0$，$f''$ 的符号只由 $x-1$ 决定：$0<x<1$ 时 $f''<0$，$x>1$ 时 $f''>0$，凹凸性改变，所以 $x=1$ 是拐点横坐标．又 $f(1)=\displaystyle\int_{1}^{1}=0$，故拐点为 $(1,0)$．`
        },
        {
          no: 11,
          stem: String.raw`极限 $\displaystyle\lim_{x\to\infty}\left(\frac{x^{2}-1}{x^{2}+3}\right)^{x^{2}}=$ ______`,
          answer: String.raw`$e^{-4}$`,
          solution: String.raw`这是 $1^{\infty}$ 型．把底数写成 $1+u$ 的形式：
$$\frac{x^{2}-1}{x^{2}+3}=1-\frac{4}{x^{2}+3}$$
记 $u=-\dfrac{4}{x^{2}+3}\to 0$，原式 $=\lim\left[(1+u)^{1/u}\right]^{ux^{2}}$，而
$$\lim_{x\to\infty}ux^{2}=\lim_{x\to\infty}\frac{-4x^{2}}{x^{2}+3}=-4$$
故原式 $=e^{-4}$．`
        },
        {
          no: 12,
          stem: String.raw`已知微分方程 $y''-2\sqrt{a}\,y'+ay=0$ 满足初始条件 $y(0)=0,\ y'(0)=a$，则 $y(x)=$ ______`,
          answer: String.raw`$axe^{\sqrt{a}\,x}$`,
          solution: String.raw`特征方程
$$r^{2}-2\sqrt{a}\,r+a=0\ \Longrightarrow\ (r-\sqrt{a})^{2}=0$$
二重根 $r=\sqrt{a}$，通解 $y=(C_{1}+C_{2}x)e^{\sqrt{a}\,x}$．
由 $y(0)=C_{1}=0$ 得 $C_{1}=0$，于是 $y=C_{2}xe^{\sqrt{a}\,x}$，求导
$$y'=C_{2}\left(1+\sqrt{a}\,x\right)e^{\sqrt{a}\,x}$$
代入 $y'(0)=C_{2}=a$，故
$$y=axe^{\sqrt{a}\,x}$$`
        },
        {
          no: 13,
          stem: String.raw`幂级数 $\displaystyle\sum_{n=1}^{\infty}\frac{n\cos n}{3^{n}}x^{n}$ 的收敛半径为 ______`,
          answer: '$3$',
          solution: String.raw`记 $a_{n}=\dfrac{n\cos n}{3^{n}}$，用根值判别法．由于 $|\cos n|\le 1$，
$$\sqrt[n]{|a_{n}|}=\frac{\sqrt[n]{n}\,|\cos n|^{1/n}}{3}\le\frac{\sqrt[n]{n}}{3}\to\frac{1}{3}$$
（$\sqrt[n]{n}\to 1$．）故 $\varlimsup\sqrt[n]{|a_{n}|}=\dfrac{1}{3}$，收敛半径
$$R=\frac{1}{\varlimsup\sqrt[n]{|a_{n}|}}=3$$`
        },
        {
          no: 14,
          stem: String.raw`已知向量组 $\alpha_{1}=\begin{pmatrix}2\\0\\0\\0\end{pmatrix}$，$\alpha_{2}=\begin{pmatrix}1\\3\\0\\0\end{pmatrix}$，$\alpha_{3}=\begin{pmatrix}-1\\2\\k\\0\end{pmatrix}$，$\alpha_{4}=\begin{pmatrix}3\\-2\\4\\k^{2}+k\end{pmatrix}$，且 $\alpha_{1},\alpha_{2},\alpha_{3}$ 为极大线性无关组，则 $k=$ ______`,
          answer: String.raw`$-1$`,
          solution: String.raw`“$\alpha_{1},\alpha_{2},\alpha_{3}$ 是极大线性无关组”包含两层意思：

① **线性无关**：三个向量都是上三角形状，行列式 $=2\cdot 3\cdot k=6k$，无关要求 $6k\ne 0$，即 $k\ne 0$．

② **$\alpha_{4}$ 可由它们线性表示**：设 $\alpha_{4}=c_{1}\alpha_{1}+c_{2}\alpha_{2}+c_{3}\alpha_{3}$，比较第 4 个分量，
$$k^{2}+k=c_{1}\cdot 0+c_{2}\cdot 0+c_{3}\cdot 0=0$$
故 $k^{2}+k=0$，得 $k=0$ 或 $k=-1$．

结合 $k\ne 0$，舍去 $k=0$，得 $k=-1$．
（验证：$k=-1$ 时 $\alpha_{3}=(-1,2,-1,0)^{\mathrm T}$，$\alpha_{4}=(3,-2,4,0)^{\mathrm T}$ 确实落在前三者张成的空间里．）`
        }
      ]
    },
    {
      name: '三、计算题',
      note: '本大题共 8 小题，每小题 8 分，共 64 分．',
      items: [
        {
          no: 15,
          stem: String.raw`求极限 $\displaystyle\lim_{x\to 0}\frac{x\ln(1-x^{2})}{\sin x-x\cos x}$`,
          answer: '$-3$',
          solution: String.raw`分子、分母都是无穷小，用等价无穷小替换．
分子：$\ln(1-x^{2})\sim -x^{2}$，故 $x\ln(1-x^{2})\sim -x^{3}$．
分母：用泰勒展开
$$\sin x=x-\frac{x^{3}}{6}+o(x^{3}),\qquad x\cos x=x\left(1-\frac{x^{2}}{2}+o(x^{2})\right)=x-\frac{x^{3}}{2}+o(x^{3})$$
相减得
$$\sin x-x\cos x=\left(-\frac{1}{6}+\frac{1}{2}\right)x^{3}+o(x^{3})=\frac{x^{3}}{3}+o(x^{3})\sim\frac{x^{3}}{3}$$
于是
$$\lim_{x\to 0}\frac{x\ln(1-x^{2})}{\sin x-x\cos x}=\frac{-x^{3}}{x^{3}/3}=-3$$`
        },
        {
          no: 16,
          stem: String.raw`求不定积分 $\displaystyle\int(1+x)\arctan x\,dx$`,
          answer: String.raw`$\left(\dfrac{x^{2}}{2}+x+\dfrac{1}{2}\right)\arctan x-\dfrac{1}{2}\ln(1+x^{2})-\dfrac{x}{2}+C$`,
          solution: String.raw`拆成两项，各自分部积分．
第一项：$\displaystyle\int\arctan x\,dx=x\arctan x-\int\frac{x}{1+x^{2}}dx=x\arctan x-\frac{1}{2}\ln(1+x^{2})$．
第二项：取 $u=\arctan x$，$dv=x\,dx$，则 $v=\dfrac{x^{2}}{2}$，
$$\int x\arctan x\,dx=\frac{x^{2}}{2}\arctan x-\frac{1}{2}\int\frac{x^{2}}{1+x^{2}}dx$$
而 $\displaystyle\int\frac{x^{2}}{1+x^{2}}dx=\int\left(1-\frac{1}{1+x^{2}}\right)dx=x-\arctan x$，故
$$\int x\arctan x\,dx=\frac{x^{2}}{2}\arctan x-\frac{x}{2}+\frac{1}{2}\arctan x$$
两式相加：
$$\int(1+x)\arctan x\,dx=\left(\frac{x^{2}}{2}+x+\frac{1}{2}\right)\arctan x-\frac{1}{2}\ln(1+x^{2})-\frac{x}{2}+C$$`
        },
        {
          no: 17,
          stem: String.raw`已知函数 $f(x)$ 满足 $f(x)dx=d(\arcsin x)$，求定积分 $\displaystyle\int_{-\frac{1}{2}}^{\frac{1}{2}}\frac{x^{2}-x}{f(x)}dx$．`,
          answer: String.raw`$\dfrac{\pi}{24}-\dfrac{\sqrt{3}}{32}$`,
          solution: String.raw`由 $f(x)dx=d(\arcsin x)=\dfrac{dx}{\sqrt{1-x^{2}}}$ 得
$$f(x)=\frac{1}{\sqrt{1-x^{2}}}$$
于是 $\dfrac{x^{2}-x}{f(x)}=(x^{2}-x)\sqrt{1-x^{2}}$．积分区间 $[-\tfrac12,\tfrac12]$ 关于原点对称，拆成奇偶两部分：
$$\int_{-\frac12}^{\frac12}x\sqrt{1-x^{2}}\,dx=0\quad(\text{奇函数})$$
$$\int_{-\frac12}^{\frac12}x^{2}\sqrt{1-x^{2}}\,dx=2\int_{0}^{\frac12}x^{2}\sqrt{1-x^{2}}\,dx$$
令 $x=\sin t$，$dx=\cos t\,dt$，$t:0\to\dfrac{\pi}{6}$，则 $x^{2}\sqrt{1-x^{2}}dx=\sin^{2}t\cos^{2}t\,dt$：
$$2\int_{0}^{\frac{\pi}{6}}\sin^{2}t\cos^{2}t\,dt=2\cdot\frac{1}{4}\int_{0}^{\frac{\pi}{6}}\sin^{2}2t\,dt=\frac{1}{4}\int_{0}^{\frac{\pi}{6}}(1-\cos 4t)dt$$
$$=\frac{1}{4}\left[t-\frac{\sin 4t}{4}\right]_{0}^{\frac{\pi}{6}}=\frac{1}{4}\left(\frac{\pi}{6}-\frac{\sin\frac{2\pi}{3}}{4}\right)=\frac{1}{4}\left(\frac{\pi}{6}-\frac{\sqrt{3}}{8}\right)=\frac{\pi}{24}-\frac{\sqrt{3}}{32}$$`
        },
        {
          no: 18,
          stem: String.raw`已知函数 $f(x)$ 满足 $f'(x)+2xf(x)=0$，且 $f(0)=1$，求微分方程 $y'+(2x+1)y=f(x)$ 的通解．`,
          answer: String.raw`$y=e^{-x^{2}}+Ce^{-x^{2}-x}$`,
          solution: String.raw`**第一步，先解出 $f$．** 由 $f'(x)+2xf(x)=0$ 得（$f\ne 0$ 时可分离变量）
$$\frac{f'(x)}{f(x)}=-2x\ \Longrightarrow\ \ln|f(x)|=-x^{2}+C_{1}\ \Longrightarrow\ f(x)=Ce^{-x^{2}}$$
由 $f(0)=1$ 得 $C=1$，故 $f(x)=e^{-x^{2}}$．

**第二步，解 $y'+(2x+1)y=e^{-x^{2}}$．** 这是一阶线性方程，$P(x)=2x+1$，积分因子
$$\mu(x)=e^{\int(2x+1)dx}=e^{x^{2}+x}$$
两边乘 $\mu$ 得 $\left(ye^{x^{2}+x}\right)'=e^{-x^{2}}\cdot e^{x^{2}+x}=e^{x}$，积分：
$$ye^{x^{2}+x}=e^{x}+C\ \Longrightarrow\ y=e^{x-x^{2}-x}+Ce^{-x^{2}-x}=e^{-x^{2}}+Ce^{-x^{2}-x}$$
故通解为 $y=e^{-x^{2}}+Ce^{-x^{2}-x}$．`
        },
        {
          no: 19,
          stem: String.raw`已知函数 $z(x,y)=\dfrac{1}{x}f(x-2y,\,x^{2}y)$，求 $dz$．`,
          answer: String.raw`$dz=\left(-\dfrac{f}{x^{2}}+\dfrac{1}{x}f_{1}'+2yf_{2}'\right)dx+\left(-\dfrac{2}{x}f_{1}'+xf_{2}'\right)dy$`,
          solution: String.raw`记中间变量 $u=x-2y$，$v=x^{2}y$，则 $z=\dfrac{1}{x}f(u,v)$，$f_{1}'$、$f_{2}'$ 分别表示 $f$ 对第一、第二中间变量的偏导．

对 $x$ 求偏导（$\dfrac{1}{x}$ 也要对 $x$ 求导）：
$$\frac{\partial z}{\partial x}=-\frac{1}{x^{2}}f+\frac{1}{x}\left(f_{1}'\cdot\frac{\partial u}{\partial x}+f_{2}'\cdot\frac{\partial v}{\partial x}\right)=-\frac{f}{x^{2}}+\frac{1}{x}\left(f_{1}'\cdot 1+f_{2}'\cdot 2xy\right)$$
$$=-\frac{f}{x^{2}}+\frac{1}{x}f_{1}'+2yf_{2}'$$

对 $y$ 求偏导（$\dfrac{1}{x}$ 视为常数）：
$$\frac{\partial z}{\partial y}=\frac{1}{x}\left(f_{1}'\cdot(-2)+f_{2}'\cdot x^{2}\right)=-\frac{2}{x}f_{1}'+xf_{2}'$$

故
$$dz=\left(-\frac{f}{x^{2}}+\frac{1}{x}f_{1}'+2yf_{2}'\right)dx+\left(-\frac{2}{x}f_{1}'+xf_{2}'\right)dy$$`
        },
        {
          no: 20,
          stem: String.raw`求二重积分 $\displaystyle\iint_{D}xe^{y}\,dxdy$，其中区域 $D$ 是由曲线 $y=\ln(x+1)$ 以及直线 $y=-x$，$x=1$ 所围成．`,
          answer: String.raw`$\dfrac{2}{e}-\dfrac{1}{6}$`,
          solution: String.raw`**先定区域．** $y=\ln(x+1)$ 与 $y=-x$ 的交点：$x=0$ 时两者都等于 $0$；且 $\ln(x+1)+x$ 在 $x\ge 0$ 上单调增，故 $x>0$ 时 $\ln(x+1)>-x$．所以在 $0\le x\le 1$ 上，图形位于 $y=-x$ 与 $y=\ln(x+1)$ 之间：
$$D=\left\{(x,y)\ \middle|\ 0\le x\le 1,\ -x\le y\le\ln(x+1)\right\}$$
**按 $x$ 型化为累次积分：**
$$\iint_{D}xe^{y}dxdy=\int_{0}^{1}x\,dx\int_{-x}^{\ln(x+1)}e^{y}dy=\int_{0}^{1}x\left[e^{y}\right]_{-x}^{\ln(x+1)}dx$$
$$=\int_{0}^{1}x\left[(x+1)-e^{-x}\right]dx=\int_{0}^{1}(x^{2}+x)dx-\int_{0}^{1}xe^{-x}dx$$
前一项：$\left[\dfrac{x^{3}}{3}+\dfrac{x^{2}}{2}\right]_{0}^{1}=\dfrac{1}{3}+\dfrac{1}{2}=\dfrac{5}{6}$．
后一项分部积分：$\displaystyle\int_{0}^{1}xe^{-x}dx=\left[-xe^{-x}-e^{-x}\right]_{0}^{1}=\left(-\frac{1}{e}-\frac{1}{e}\right)-(-1)=1-\frac{2}{e}$．
相减：
$$\iint_{D}xe^{y}dxdy=\frac{5}{6}-\left(1-\frac{2}{e}\right)=\frac{2}{e}-\frac{1}{6}$$`
        },
        {
          no: 21,
          stem: String.raw`已知矩阵 $A=\begin{pmatrix} 2 & a & -1 \\ 1 & 1 & 0 \\ 1 & 3 & -2 \end{pmatrix}$．（1）已知矩阵 $A$ 的秩为 $2$，求 $a$ 的值；（2）若矩阵 $B$ 满足 $AB-B=E$（$E$ 为三阶单位矩阵），求矩阵 $B$．`,
          answer: String.raw`（1）$a=3$；（2）$B=\begin{pmatrix}0&1&0\\ \tfrac12&-\tfrac13&-\tfrac16\\ \tfrac12&0&-\tfrac12\end{pmatrix}$`,
          solution: String.raw`**（1）** 按第一行展开求行列式：
$$|A|=2\begin{vmatrix}1&0\\3&-2\end{vmatrix}-a\begin{vmatrix}1&0\\1&-2\end{vmatrix}+(-1)\begin{vmatrix}1&1\\1&3\end{vmatrix}=2(-2)-a(-2)-(3-1)=-4+2a-2=2a-6$$
秩为 $2$ 说明 $A$ 不满秩，故 $|A|=0$，得 $a=3$．此时左上角二阶子式 $\begin{vmatrix}2&3\\1&1\end{vmatrix}=-1\ne 0$，秩确实为 $2$，符合．

**（2）** 由 $AB-B=E$ 得 $(A-E)B=E$，即 $B=(A-E)^{-1}$（因为 $(A-E)B=E$ 已说明 $A-E$ 可逆）．代入 $a=3$：
$$A-E=\begin{pmatrix}1&3&-1\\1&0&0\\1&3&-3\end{pmatrix}$$
先求行列式：按第二行展开，只有 $a_{21}=1$，符号 $(-1)^{2+1}=-1$，
$$|A-E|=-1\cdot\begin{vmatrix}3&-1\\3&-3\end{vmatrix}=-1\cdot(-9+3)=6$$
再求伴随矩阵（各代数余子式）：
$$A_{11}=0,\ A_{12}=3,\ A_{13}=3;\qquad A_{21}=6,\ A_{22}=-2,\ A_{23}=0;\qquad A_{31}=0,\ A_{32}=-1,\ A_{33}=-3$$
伴随矩阵是代数余子式矩阵的转置：
$$(A-E)^{*}=\begin{pmatrix}0&6&0\\3&-2&-1\\3&0&-3\end{pmatrix}$$
故
$$B=\frac{1}{6}(A-E)^{*}=\begin{pmatrix}0&1&0\\ \frac{1}{2}&-\frac{1}{3}&-\frac{1}{6}\\ \frac{1}{2}&0&-\frac{1}{2}\end{pmatrix}$$
**验证**：直接乘一遍 $(A-E)B$，第一行 $(0+\frac32-\frac12,\ 1-1+0,\ 0-\frac12+\frac12)=(1,0,0)$；第二行 $(0,1,0)$；第三行 $(0,0,1)$，确为单位阵．`
        },
        {
          no: 22,
          stem: String.raw`已知方程组 $\begin{cases} x_{1}+x_{2}-x_{3}=-1 \\ 3x_{1}+4x_{2}-7x_{3}=4 \\ x_{1}+2x_{2}-\lambda x_{3}=\mu \\ 2x_{1}+3x_{2}-6x_{3}=\lambda \end{cases}$ 有解，其中 $\lambda,\mu$ 为常数，求方程组的解．`,
          answer: String.raw`$\lambda=5,\ \mu=6$，$X=k\begin{pmatrix}-3\\4\\1\end{pmatrix}+\begin{pmatrix}-8\\7\\0\end{pmatrix}$（$k$ 为任意常数）`,
          solution: String.raw`对增广矩阵作初等行变换，逐行消去第一列：
$$\bar{A}=\begin{pmatrix}1&1&-1&-1\\3&4&-7&4\\1&2&-\lambda&\mu\\2&3&-6&\lambda\end{pmatrix}\xrightarrow[r_4-2r_1]{r_2-3r_1,\ r_3-r_1}\begin{pmatrix}1&1&-1&-1\\0&1&-4&7\\0&1&1-\lambda&\mu+1\\0&1&-4&\lambda+2\end{pmatrix}$$
再用第 2 行消去下面两行的第二列：
$$\xrightarrow{r_3-r_2,\ r_4-r_2}\begin{pmatrix}1&1&-1&-1\\0&1&-4&7\\0&0&5-\lambda&\mu-6\\0&0&0&\lambda-5\end{pmatrix}$$
方程组有解要求 $r(A)=r(\bar{A})$．末行为 $(0,0,0\mid\lambda-5)$，故必须
$$\lambda-5=0\ \Longrightarrow\ \lambda=5$$
此时第三行为 $(0,0,0\mid\mu-6)$，同样必须 $\mu-6=0$，即 $\mu=6$．

代回得同解方程组
$$\begin{cases}x_{1}+x_{2}-x_{3}=-1\\ x_{2}-4x_{3}=7\end{cases}$$
$r(A)=2<3=n$，有无穷多解．令自由未知量 $x_{3}=k$，则
$$x_{2}=7+4k,\qquad x_{1}=-1-x_{2}+x_{3}=-1-(7+4k)+k=-8-3k$$
写成向量形式：
$$X=\begin{pmatrix}x_{1}\\x_{2}\\x_{3}\end{pmatrix}=\begin{pmatrix}-8-3k\\7+4k\\k\end{pmatrix}=k\begin{pmatrix}-3\\4\\1\end{pmatrix}+\begin{pmatrix}-8\\7\\0\end{pmatrix}\quad(k\text{ 为任意常数})$$`
        }
      ]
    },
    {
      name: '四、证明题',
      note: '本大题共 1 小题，共 10 分．',
      items: [
        {
          no: 23,
          stem: String.raw`证明：方程 $x^{5}-5x-6=0$ 在 $(-2,2)$ 内仅有一个实根．`,
          answer: '证明见解析（存在性用零点定理，唯一性用单调性 + 极值符号）',
          solution: String.raw`令 $f(x)=x^{5}-5x-6$，它是多项式，在 $[-2,2]$ 上连续、在 $(-2,2)$ 内可导，且
$$f'(x)=5x^{4}-5=5(x^{2}-1)(x^{2}+1)=5(x-1)(x+1)(x^{2}+1)$$

**① 存在性．** 取端点：
$$f(-2)=(-2)^{5}-5(-2)-6=-32+10-6=-28<0$$
$$f(2)=2^{5}-5\cdot 2-6=32-10-6=16>0$$
$f(-2)f(2)<0$，由零点定理，至少存在一点 $\xi\in(-2,2)$ 使 $f(\xi)=0$．

**② 唯一性．** 由 $f'(x)=0$ 得驻点 $x=-1$、$x=1$（$x^{2}+1>0$ 无实根）．列表判断单调性：

| 区间 | $(-2,-1)$ | $(-1,1)$ | $(1,2)$ |
|---|---|---|---|
| $f'(x)$ 符号 | $+$ | $-$ | $+$ |
| $f(x)$ | 单调增 | 单调减 | 单调增 |

两个极值：
$$f(-1)=-1+5-6=-2<0,\qquad f(1)=1-5-6=-10<0$$

**③ 分段看零点．**
· 在 $(-2,-1)$ 上 $f$ 单调增，从 $f(-2)=-28$ 增到 $f(-1)=-2$，全程为负，无零点；
· 在 $(-1,1)$ 上 $f$ 单调减，从 $-2$ 降到 $-10$，全程为负，无零点；
· 在 $(1,2)$ 上 $f$ 单调增，从 $f(1)=-10$ 增到 $f(2)=16$，由零点定理恰有一个零点；又因严格单调，零点唯一．

综上，方程 $x^{5}-5x-6=0$ 在 $(-2,2)$ 内仅有一个实根．$\blacksquare$`
        }
      ]
    },
    {
      name: '五、综合题',
      note: '本大题共 2 小题，每小题 10 分，共 20 分．',
      items: [
        {
          no: 24,
          stem: String.raw`已知函数 $y=y(x)$ 由参数方程 $\begin{cases} x=t^{5}+t+1 \\ y=e^{t}-et \end{cases}$ 所确定，求：（1）$\dfrac{dy}{dx}$ 及函数在 $t=0$ 处的切线；（2）$\left.\dfrac{d^{2}y}{dx^{2}}\right|_{t=0}$；（3）函数 $y(x)$ 的极值．`,
          answer: String.raw`（1）$\dfrac{dy}{dx}=\dfrac{e^{t}-e}{5t^{4}+1}$，切线 $y=(1-e)x+e$；（2）$1$；（3）极小值 $y(3)=0$，无极大值`,
          solution: String.raw`**（1）** 分别对 $t$ 求导：
$$\frac{dx}{dt}=5t^{4}+1>0,\qquad \frac{dy}{dt}=e^{t}-e$$
故
$$\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=\frac{e^{t}-e}{5t^{4}+1}$$
$t=0$ 时 $x=0+0+1=1$，$y=e^{0}-0=1$，切点 $(1,1)$；斜率
$$k=\left.\frac{dy}{dx}\right|_{t=0}=\frac{1-e}{1}=1-e$$
切线方程 $y-1=(1-e)(x-1)$，即
$$y=(1-e)x+e$$

**（2）** 二阶导用参数式公式 $\dfrac{d^{2}y}{dx^{2}}=\dfrac{d}{dt}\left(\dfrac{dy}{dx}\right)\Big/\dfrac{dx}{dt}$．先对商求导：
$$\frac{d}{dt}\left(\frac{e^{t}-e}{5t^{4}+1}\right)=\frac{e^{t}(5t^{4}+1)-(e^{t}-e)\cdot 20t^{3}}{(5t^{4}+1)^{2}}$$
再除以 $\dfrac{dx}{dt}=5t^{4}+1$：
$$\frac{d^{2}y}{dx^{2}}=\frac{e^{t}(5t^{4}+1)-20t^{3}(e^{t}-e)}{(5t^{4}+1)^{3}}$$
代入 $t=0$（此时 $5t^{4}+1=1$、$t^{3}=0$）：
$$\left.\frac{d^{2}y}{dx^{2}}\right|_{t=0}=\frac{1\cdot 1-0}{1^{3}}=1$$

**（3）** 令 $\dfrac{dy}{dx}=0$．分母 $5t^{4}+1>0$，故只需 $e^{t}-e=0$，得 $t=1$．此时
$$x=1+1+1=3,\qquad y=e-e\cdot 1=0$$
判断极值：$t<1$ 时 $e^{t}<e$，$\dfrac{dy}{dx}<0$；$t>1$ 时 $\dfrac{dy}{dx}>0$．又 $\dfrac{dx}{dt}>0$，$x$ 随 $t$ 严格递增，故 $x<3$ 时 $y'<0$、$x>3$ 时 $y'>0$，$y$ 在 $x=3$ 处取**极小值** $y=0$，无极大值．`
        },
        {
          no: 25,
          stem: String.raw`已知函数 $f(x)$ 的一个原函数为 $e^{x}(\sin x+\cos x)$，平面图形 $D$ 由曲线 $y=\dfrac{f'(x)}{f(x)}$ 与 $x$ 轴所围成，且 $x\in\left(0,\dfrac{\pi}{4}\right)$，求：（1）平面图形 $D$ 的面积；（2）平面图形 $D$ 绕 $x$ 轴旋转一周所成的旋转体体积．`,
          answer: String.raw`（1）$S=\dfrac{\pi}{4}-\dfrac{1}{2}\ln 2$；（2）$V_{x}=\pi(1-\ln 2)$`,
          solution: String.raw`**先求 $f$．** “$F(x)=e^{x}(\sin x+\cos x)$ 是 $f$ 的一个原函数”即 $F'(x)=f(x)$：
$$f(x)=\left[e^{x}(\sin x+\cos x)\right]'=e^{x}(\sin x+\cos x)+e^{x}(\cos x-\sin x)=2e^{x}\cos x$$
再求 $f'$：
$$f'(x)=2e^{x}\cos x-2e^{x}\sin x=2e^{x}(\cos x-\sin x)$$
于是
$$y=\frac{f'(x)}{f(x)}=\frac{2e^{x}(\cos x-\sin x)}{2e^{x}\cos x}=\frac{\cos x-\sin x}{\cos x}=1-\tan x$$

**（1）面积．** 在 $\left(0,\dfrac{\pi}{4}\right)$ 上 $\tan x<1$，故 $y=1-\tan x>0$，曲线全在 $x$ 轴上方：
$$S=\int_{0}^{\frac{\pi}{4}}(1-\tan x)dx=\left[x+\ln\cos x\right]_{0}^{\frac{\pi}{4}}$$
$$=\frac{\pi}{4}+\ln\frac{\sqrt{2}}{2}-(0+\ln 1)=\frac{\pi}{4}+\ln 2^{-\frac12}=\frac{\pi}{4}-\frac{1}{2}\ln 2$$

**（2）体积．** 绕 $x$ 轴旋转用圆盘法：
$$V_{x}=\pi\int_{0}^{\frac{\pi}{4}}(1-\tan x)^{2}dx=\pi\int_{0}^{\frac{\pi}{4}}\left(1-2\tan x+\tan^{2}x\right)dx$$
逐项积分：
$$\int_{0}^{\frac{\pi}{4}}1\,dx=\frac{\pi}{4},\qquad \int_{0}^{\frac{\pi}{4}}\tan x\,dx=\left[-\ln\cos x\right]_{0}^{\frac{\pi}{4}}=-\ln\frac{\sqrt2}{2}=\frac{1}{2}\ln 2$$
$$\int_{0}^{\frac{\pi}{4}}\tan^{2}x\,dx=\int_{0}^{\frac{\pi}{4}}\left(\sec^{2}x-1\right)dx=\left[\tan x-x\right]_{0}^{\frac{\pi}{4}}=1-\frac{\pi}{4}$$
合并：
$$\int_{0}^{\frac{\pi}{4}}(1-\tan x)^{2}dx=\frac{\pi}{4}-2\cdot\frac{1}{2}\ln 2+1-\frac{\pi}{4}=1-\ln 2$$
故
$$V_{x}=\pi(1-\ln 2)$$`
        }
      ]
    }
  ]
}
