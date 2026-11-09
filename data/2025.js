window.PAPERS = window.PAPERS || {}
window.PAPERS['2025'] = {
  year: 2025,
  full: 150,
  minutes: 120,
  note: '2025 年卷的计算量集中在第 16、17、21、24 题；第 8 题要同时用上“线性相关”和“线性无关”两个条件才能定出 k。',
  sections: [
    {
      name: '一、单项选择题',
      note: '本大题共 8 小题，每小题 4 分，共 32 分．',
      items: [
        {
          no: 1,
          stem: String.raw`$\lim\limits_{x\to\infty}\left[\dfrac{x^{2}}{(x-a)(x+b)}\right]^{x}=$（　　）`,
          options: [String.raw`$e^{a-b}$`, String.raw`$e^{b-a}$`, String.raw`$e^{\frac{a}{b}}$`, String.raw`$e^{-\frac{a}{b}}$`],
          answer: 'A',
          solution: String.raw`这是 $1^{\infty}$ 型．先化简底数：
$$\frac{x^{2}}{(x-a)(x+b)}=\frac{x^{2}}{x^{2}+(b-a)x-ab}=1-\frac{(b-a)x+ab}{x^{2}+(b-a)x-ab}=1+\frac{(a-b)x-ab}{x^{2}+(b-a)x-ab}$$
记 $u=\dfrac{(a-b)x-ab}{x^{2}+(b-a)x-ab}\to 0$，则原式 $=\lim\left[(1+u)^{\frac1u}\right]^{xu}=e^{\lim xu}$．
$$\lim_{x\to\infty}xu=\lim_{x\to\infty}\frac{(a-b)x^{2}-abx}{x^{2}+(b-a)x-ab}=a-b$$
故原式 $=e^{a-b}$．选 A．`
        },
        {
          no: 2,
          stem: String.raw`设 $f(x)=1-\cos(1-\cos x)$，$g(x)=\sin^{n}\left(\sin^{n}x\right)$，若当 $x\to 0$ 时，$f(x)$ 与 $g(x)$ 为同阶无穷小，则整数 $n=$（　　）`,
          options: ['$1$', '$2$', '$3$', '$4$'],
          answer: 'B',
          solution: String.raw`分别定阶．由 $1-\cos u\sim\dfrac{u^{2}}{2}$：
$$1-\cos x\sim\frac{x^{2}}{2}\ \Longrightarrow\ f(x)=1-\cos(1-\cos x)\sim\frac{1}{2}\left(\frac{x^{2}}{2}\right)^{2}=\frac{x^{4}}{8}$$
故 $f$ 是 $4$ 阶无穷小．
再看 $g$：内层 $\sin^{n}x\sim x^{n}$，外层 $\sin u\sim u$，取 $n$ 次方：
$$g(x)=\left[\sin\left(\sin^{n}x\right)\right]^{n}\sim\left(x^{n}\right)^{n}=x^{n^{2}}$$
同阶要求 $n^{2}=4$，而 $n$ 为正整数，故 $n=2$．选 B．`
        },
        {
          no: 3,
          stem: String.raw`设 $f(x)$ 在 $x_{0}$ 处可导，则 $\lim\limits_{x\to x_{0}}\dfrac{x_{0}f(x)-xf(x_{0})}{x-x_{0}}=$（　　）`,
          options: [
            String.raw`$x_{0}f'(x_{0})-f(x_{0})$`,
            String.raw`$f(x_{0})-x_{0}f'(x_{0})$`,
            String.raw`$f'(x_{0})-x_{0}f(x_{0})$`,
            String.raw`$x_{0}f(x_{0})-f'(x_{0})$`
          ],
          answer: 'A',
          solution: String.raw`拆项凑导数定义．令 $u=x-x_{0}$，则 $x=x_{0}+u$：
$$x_{0}f(x)-xf(x_{0})=x_{0}\left[f(x_{0}+u)-f(x_{0})\right]-u f(x_{0})$$
两边除以 $u=x-x_{0}$：
$$x_{0}\cdot\frac{f(x_{0}+u)-f(x_{0})}{u}-f(x_{0})\longrightarrow x_{0}f'(x_{0})-f(x_{0})$$
选 A．`
        },
        {
          no: 4,
          stem: String.raw`曲线 $y=x\sin\dfrac{1}{x-1}$ 的渐近线方程为（　　）`,
          options: ['$x=0$', '$y=0$', '$x=1$', '$y=1$'],
          answer: 'D',
          solution: String.raw`$x\to 1$ 时 $\sin\dfrac{1}{x-1}$ 在 $[-1,1]$ 内振荡无极限，$y$ 也在 $0$ 附近振荡、并不趋于无穷，故 $x=1$ 不是垂直渐近线（这是本题的陷阱）．
看 $x\to\infty$：
$$y=x\sin\frac{1}{x-1}=x\left[\frac{1}{x-1}+o\left(\frac{1}{x-1}\right)\right]=\frac{x}{x-1}+o(1)\to 1$$
故 $y=1$ 是水平渐近线．选 D．`
        },
        {
          no: 5,
          stem: String.raw`设 $f(x)=x\displaystyle\int_{0}^{x}\cos t^{2}\,\mathrm{d}t$，则 $f''(0)=$（　　）`,
          options: ['$0$', '$1$', '$2$', '$3$'],
          answer: 'C',
          solution: String.raw`$$f'(x)=\int_{0}^{x}\cos t^{2}\,\mathrm{d}t+x\cos x^{2}$$
$$f''(x)=\cos x^{2}+\cos x^{2}+x\cdot\left(-\sin x^{2}\right)\cdot 2x=2\cos x^{2}-2x^{2}\sin x^{2}$$
取 $x=0$：$f''(0)=2-0=2$．选 C．`
        },
        {
          no: 6,
          stem: String.raw`设 $k$ 为常数，则级数 $\sum\limits_{n=1}^{\infty}(-1)^{n}\sin^{k}\dfrac{1}{\sqrt{n}}$ 条件收敛的充分必要条件是（　　）`,
          options: [String.raw`$0<k\le 1$`, String.raw`$1<k<+\infty$`, String.raw`$0<k\le 2$`, String.raw`$2<k<+\infty$`],
          answer: 'C',
          solution: String.raw`记 $a_{n}=\sin^{k}\dfrac{1}{\sqrt n}$．当 $k>0$ 时 $a_{n}>0$ 且递减趋于 $0$，由莱布尼茨判别法原级数收敛．
再看绝对值级数：$a_{n}\sim\left(\dfrac{1}{\sqrt n}\right)^{k}=n^{-k/2}$，$\sum n^{-k/2}$ 收敛 $\iff \dfrac{k}{2}>1\iff k>2$．
条件收敛＝原级数收敛但绝对值级数发散，故 $0<k\le 2$．选 C．
（$k\le 0$ 时通项不趋于零，级数发散，所以下界是 $0$．）`
        },
        {
          no: 7,
          stem: String.raw`设 $A,B$ 为同阶方阵，且 $AB=A-B$，则一定可逆的矩阵为（　　）`,
          options: [
            String.raw`$A+E$ 与 $B+E$`,
            String.raw`$A+E$ 与 $B-E$`,
            String.raw`$A-E$ 与 $B+E$`,
            String.raw`$A-E$ 与 $B-E$`
          ],
          answer: 'B',
          solution: String.raw`把 $AB=A-B$ 移项重排成乘积形式：$AB-A+B=0$，两边同减 $E$：
$$AB-A+B-E=-E\ \Longrightarrow\ (A+E)(B-E)=-E$$
两矩阵之积等于 $-E$（可逆矩阵），故 $A+E$ 与 $B-E$ 都可逆．选 B．
这类题的固定套路：**把已知等式往“乘积＝非零常数倍单位阵”上凑**．`
        },
        {
          no: 8,
          stem: String.raw`设向量组 $\alpha_{1}=\begin{pmatrix}1\\0\\1\end{pmatrix}$，$\alpha_{2}=\begin{pmatrix}3\\k\\0\end{pmatrix}$，$\alpha_{3}=\begin{pmatrix}k\\k-1\\1\end{pmatrix}$ 线性相关，而向量组 $\beta_{1}=\begin{pmatrix}2\\-1\\1\end{pmatrix}$，$\beta_{2}=\begin{pmatrix}3\\-3\\4\end{pmatrix}$，$\beta_{3}=\begin{pmatrix}-5\\k\\0\end{pmatrix}$ 线性无关，则常数 $k=$（　　）`,
          options: [String.raw`$-3$`, String.raw`$-1$`, '$1$', '$3$'],
          answer: 'D',
          solution: String.raw`条件一：$\alpha$ 组线性相关 $\iff$ 行列式为零．
$$\begin{vmatrix}1&3&k\\0&k&k-1\\1&0&1\end{vmatrix}=1\cdot(k\cdot 1-0)-3\cdot(0-(k-1))+k\cdot(0-k)=-k^{2}+4k-3=-(k-1)(k-3)$$
故 $k=1$ 或 $k=3$．
条件二：$\beta$ 组线性无关 $\iff$ 行列式非零．
$$\begin{vmatrix}2&3&-5\\-1&-3&k\\1&4&0\end{vmatrix}=2(0-4k)-3(0-k)+(-5)(-4+3)=-8k+3k+5=-5k+5$$
$k\ne 1$ 时非零．
两个条件同时满足：$k=3$．选 D．`
        }
      ]
    },
    {
      name: '二、填空题',
      note: '本大题共 6 小题，每小题 4 分，共 24 分．',
      items: [
        {
          no: 9,
          stem: String.raw`若 $x=0$ 是函数 $f(x)=\begin{cases}\arctan\dfrac{1}{x},&x<0\\[6pt] \dfrac{\sin kx}{x},&x>0\end{cases}$ 的可去间断点，则常数 $k=$ ________．`,
          answer: String.raw`$-\dfrac{\pi}{2}$`,
          solution: String.raw`分别求两侧极限：
$$\lim_{x\to 0^{-}}\arctan\frac1x=-\frac{\pi}{2}\qquad(\text{因 }\tfrac1x\to-\infty)$$
$$\lim_{x\to 0^{+}}\frac{\sin kx}{x}=k$$
可去间断点要求左右极限相等，故 $k=-\dfrac{\pi}{2}$．`
        },
        {
          no: 10,
          stem: String.raw`设函数 $y=(2+\cos x)^{x}$，则 $\left.\mathrm{d}y\right|_{x=0}=$ ________．`,
          answer: String.raw`$\ln 3\cdot\mathrm{d}x$`,
          solution: String.raw`幂指函数取对数：$\ln y=x\ln(2+\cos x)$，两边求导：
$$\frac{y'}{y}=\ln(2+\cos x)+x\cdot\frac{-\sin x}{2+\cos x}$$
$x=0$ 时 $y=(2+1)^{0}=1$，$y'=1\cdot\left[\ln 3+0\right]=\ln 3$．
故 $\mathrm{d}y=\ln 3\,\mathrm{d}x$．`
        },
        {
          no: 11,
          stem: String.raw`设函数 $g(x)=f^{2}(2x-3)$，其中 $f(x)$ 是可导函数，若 $f'(3)=2$，$g'(3)=16$，则 $f(3)=$ ________．`,
          answer: '$2$',
          solution: String.raw`$$g'(x)=2f(2x-3)\cdot f'(2x-3)\cdot 2=4f(2x-3)f'(2x-3)$$
取 $x=3$：$g'(3)=4f(3)f'(3)=4f(3)\cdot 2=8f(3)$．
由 $8f(3)=16$ 得 $f(3)=2$．`
        },
        {
          no: 12,
          stem: String.raw`若 $x=0$ 是函数 $f(x)=(x+a)e^{x}$（其中 $a$ 为常数）的极值点，则曲线 $y=f(x)$ 的拐点坐标为 ________．`,
          answer: String.raw`$\left(-1,-\dfrac{2}{e}\right)$`,
          solution: String.raw`极值点必为驻点：
$$f'(x)=e^{x}+(x+a)e^{x}=(x+a+1)e^{x},\qquad f'(0)=a+1=0\ \Rightarrow\ a=-1$$
于是 $f(x)=(x-1)e^{x}$：
$$f'(x)=e^{x}+(x-1)e^{x}=xe^{x},\qquad f''(x)=e^{x}+xe^{x}=(x+1)e^{x}$$
$f''(x)=0$ 得 $x=-1$，且 $f''$ 在 $x=-1$ 两侧由负变正（$e^{x}>0$），确为拐点．
$f(-1)=(-2)e^{-1}=-\dfrac{2}{e}$，故拐点为 $\left(-1,-\dfrac{2}{e}\right)$．
提醒：$x=0$ 是极值点不是拐点（$f''(0)=1\ne 0$），**极值点和拐点是两件事**．`
        },
        {
          no: 13,
          stem: String.raw`设 $a,b$ 为常数，且 $a>0$，若幂级数 $\sum\limits_{n=1}^{\infty}\dfrac{a^{n}}{n}(x-b)^{n}$ 的收敛区间为 $(-3,5)$，则 $a-b=$ ________．`,
          answer: String.raw`$-\dfrac{3}{4}$`,
          solution: String.raw`$\lim\limits_{n\to\infty}\left|\dfrac{a_{n+1}}{a_{n}}\right|=\lim\dfrac{a^{n+1}/(n+1)}{a^{n}/n}=a$，故收敛半径 $R=\dfrac{1}{a}$．
收敛区间以 $x=b$ 为中心：$\left(b-\dfrac1a,\ b+\dfrac1a\right)=(-3,5)$．
于是 $b=1$，$\dfrac1a=4$，$a=\dfrac14$（$a>0$ 取正）．
$a-b=\dfrac14-1=-\dfrac34$．`
        },
        {
          no: 14,
          stem: String.raw`设矩阵 $X$ 满足方程 $\begin{pmatrix}2&-1\\-5&3\end{pmatrix}X=\begin{pmatrix}1&-3&2\\5&9&-4\end{pmatrix}$，则 $X=$ ________．`,
          answer: String.raw`$\begin{pmatrix}8&0&2\\15&3&2\end{pmatrix}$`,
          solution: String.raw`记 $P=\begin{pmatrix}2&-1\\-5&3\end{pmatrix}$，$|P|=6-5=1\ne 0$，$P^{-1}=\begin{pmatrix}3&1\\5&2\end{pmatrix}$．
$$X=P^{-1}\begin{pmatrix}1&-3&2\\5&9&-4\end{pmatrix}=\begin{pmatrix}3&1\\5&2\end{pmatrix}\begin{pmatrix}1&-3&2\\5&9&-4\end{pmatrix}$$
$$=\begin{pmatrix}3+5&-9+9&6-4\\5+10&-15+18&10-8\end{pmatrix}=\begin{pmatrix}8&0&2\\15&3&2\end{pmatrix}$$`
        }
      ]
    },
    {
      name: '三、计算题',
      note: '本大题共 8 小题，每小题 8 分，共 64 分．',
      items: [
        {
          no: 15,
          stem: String.raw`求极限 $\lim\limits_{x\to 0}\dfrac{x\displaystyle\int_{0}^{x}\left[\ln(e-t)-1\right]\mathrm{d}t}{\sqrt{1+x^{3}}-1}$．`,
          answer: String.raw`$-\dfrac{1}{e}$`,
          solution: String.raw`分母用等价无穷小：$\sqrt{1+x^{3}}-1\sim\dfrac{x^{3}}{2}$．
分子中的积分，注意被积函数 $g(t)=\ln(e-t)-1$ 满足 $g(0)=\ln e-1=0$，$g'(t)=-\dfrac{1}{e-t}$，$g'(0)=-\dfrac{1}{e}$，故
$$\int_{0}^{x}\left[\ln(e-t)-1\right]\mathrm{d}t\sim\int_{0}^{x}\left(-\frac{t}{e}\right)\mathrm{d}t=-\frac{x^{2}}{2e}$$
于是分子 $\sim x\cdot\left(-\dfrac{x^{2}}{2e}\right)=-\dfrac{x^{3}}{2e}$．
$$\text{原式}=\lim_{x\to 0}\frac{-x^{3}/(2e)}{x^{3}/2}=-\frac{1}{e}$$`
        },
        {
          no: 16,
          stem: String.raw`求不定积分 $\displaystyle\int\frac{x^{3}+4}{x^{2}\sqrt{4-x^{2}}}\,\mathrm{d}x$．`,
          answer: String.raw`$-\dfrac{(x+1)\sqrt{4-x^{2}}}{x}+C$`,
          solution: String.raw`把分子拆开：
$$\frac{x^{3}+4}{x^{2}\sqrt{4-x^{2}}}=\frac{x}{\sqrt{4-x^{2}}}+\frac{4}{x^{2}\sqrt{4-x^{2}}}$$
第一项：$\displaystyle\int\frac{x}{\sqrt{4-x^{2}}}\mathrm{d}x=-\sqrt{4-x^{2}}$．
第二项：令 $x=2\sin t$，$\mathrm{d}x=2\cos t\,\mathrm{d}t$，$\sqrt{4-x^{2}}=2\cos t$：
$$\int\frac{4}{4\sin^{2}t\cdot 2\cos t}\cdot 2\cos t\,\mathrm{d}t=\int\csc^{2}t\,\mathrm{d}t=-\cot t=-\frac{\sqrt{4-x^{2}}}{x}$$
故原式 $=-\sqrt{4-x^{2}}-\dfrac{\sqrt{4-x^{2}}}{x}+C=-\dfrac{(x+1)\sqrt{4-x^{2}}}{x}+C$．
（求导回验：恰好还原被积函数．）`
        },
        {
          no: 17,
          stem: String.raw`计算定积分 $\displaystyle\int_{0}^{1}\frac{x^{2}+\sqrt{x}}{x^{3}+1}\,\mathrm{d}x$．`,
          answer: String.raw`$\dfrac{1}{3}\ln 2+\dfrac{\pi}{6}$`,
          solution: String.raw`拆成两个积分，各用一种换元：
$$\int_{0}^{1}\frac{x^{2}}{x^{3}+1}\mathrm{d}x=\frac13\left[\ln(x^{3}+1)\right]_{0}^{1}=\frac{\ln 2}{3}$$
$$\int_{0}^{1}\frac{\sqrt{x}}{x^{3}+1}\mathrm{d}x\ \xrightarrow{\,u=\sqrt{x}\,}\ \int_{0}^{1}\frac{u}{u^{6}+1}\cdot 2u\,\mathrm{d}u=2\int_{0}^{1}\frac{u^{2}}{u^{6}+1}\mathrm{d}u$$
再令 $w=u^{3}$，$\mathrm{d}w=3u^{2}\mathrm{d}u$：
$$2\cdot\frac13\int_{0}^{1}\frac{\mathrm{d}w}{w^{2}+1}=\frac23\left[\arctan w\right]_{0}^{1}=\frac23\cdot\frac{\pi}{4}=\frac{\pi}{6}$$
故原式 $=\dfrac13\ln 2+\dfrac{\pi}{6}$．`
        },
        {
          no: 18,
          stem: String.raw`求微分方程 $(x+1)y'+y=x\cos x$ 满足初始条件 $y(0)=1$ 的特解．`,
          answer: String.raw`$y=\dfrac{x\sin x+\cos x}{x+1}$`,
          solution: String.raw`观察左边：$(x+1)y'+y=\left[(x+1)y\right]'$，于是方程变为
$$\left[(x+1)y\right]'=x\cos x$$
两边积分：$(x+1)y=\displaystyle\int x\cos x\,\mathrm{d}x=x\sin x+\cos x+C$（分部积分），故
$$y=\frac{x\sin x+\cos x+C}{x+1}$$
由 $y(0)=\dfrac{0+1+C}{1}=1$ 得 $C=0$．
所求特解 $y=\dfrac{x\sin x+\cos x}{x+1}$．`
        },
        {
          no: 19,
          stem: String.raw`已知 $z=z(x,y)$ 是由方程 $e^{z}-2xz-3yz=e$ 所确定的函数，求 $\left.\dfrac{\partial^{2}z}{\partial x\partial y}\right|_{\substack{x=0\\ y=0}}$．`,
          answer: String.raw`$\dfrac{6}{e^{2}}$`,
          solution: String.raw`$x=y=0$ 时 $e^{z}=e$，$z=1$．令 $F=e^{z}-2xz-3yz-e$，在 $(0,0,1)$ 处：
$$F_{x}=-2z=-2,\quad F_{y}=-3z=-3,\quad F_{z}=e^{z}-2x-3y=e$$
$$z_{x}=\frac{2}{e},\qquad z_{y}=\frac{3}{e}$$
写成一般式 $z_{x}=\dfrac{2z}{e^{z}-2x-3y}$，记 $D=e^{z}-2x-3y$，则 $D_{y}=e^{z}z_{y}-3$：
$$\frac{\partial^{2}z}{\partial x\partial y}=\frac{2\left(z_{y}D-zD_{y}\right)}{D^{2}}$$
代入 $(0,0,1)$：$z_{y}=\dfrac3e$，$D=e$，$D_{y}=e\cdot\dfrac3e-3=0$，
$$\frac{\partial^{2}z}{\partial x\partial y}\bigg|_{(0,0)}=\frac{2\left(\frac3e\cdot e-0\right)}{e^{2}}=\frac{6}{e^{2}}$$`
        },
        {
          no: 20,
          stem: String.raw`计算二重积分 $\iint\limits_{D}\left(x^{2}+\sin x\cos y\right)\mathrm{d}x\mathrm{d}y$，其中 $D$ 是由直线 $y=1-x$ 与 $y=1+x$ 及 $x$ 轴所围成的闭区域．`,
          answer: String.raw`$\dfrac{1}{6}$`,
          solution: String.raw`区域是三角形，顶点 $(0,1)$、$(1,0)$、$(-1,0)$，关于 $y$ 轴对称．
拆成两项，第二项利用对称性：
$\sin x\cos y$ 关于 $x$ 是奇函数（$\cos y$ 在 $x$ 对称下不变），区域关于 $y$ 轴对称，故
$$\iint\limits_{D}\sin x\cos y\,\mathrm{d}x\mathrm{d}y=0$$
只剩第一项．用 $x$ 型：$-1\le x\le 1$，$0\le y\le 1-|x|$：
$$\iint\limits_{D}x^{2}\mathrm{d}x\mathrm{d}y=\int_{-1}^{1}x^{2}\left(1-|x|\right)\mathrm{d}x=2\int_{0}^{1}x^{2}(1-x)\mathrm{d}x=2\left(\frac13-\frac14\right)=\frac16$$`
        },
        {
          no: 21,
          stem: String.raw`设 $A,B,C$ 为 $4$ 阶矩阵，满足 $AB=C$，已知 $|A|=3$，$C=\begin{pmatrix}1&1&0&1\\ 2&1&3&2\\ 3&2&4&2\\ 4&5&3&8\end{pmatrix}$，求 $|B|$．`,
          answer: String.raw`$-\dfrac{10}{3}$`,
          solution: String.raw`两边取行列式：$|AB|=|A||B|=|C|$，故 $|B|=\dfrac{|C|}{3}$．
计算 $|C|$，把第 1 行的倍数从其余各行中减去：
$$|C|=\begin{vmatrix}1&1&0&1\\0&-1&3&0\\0&-1&4&-1\\0&1&3&4\end{vmatrix}=1\cdot\begin{vmatrix}-1&3&0\\-1&4&-1\\1&3&4\end{vmatrix}$$
$$=(-1)(16+3)-3(-4+1)+0=-19+9=-10$$
故 $|B|=\dfrac{-10}{3}=-\dfrac{10}{3}$．`
        },
        {
          no: 22,
          stem: String.raw`已知非齐次线性方程组 $\begin{cases}x_{1}-x_{2}-x_{3}+3x_{4}=1\\ x_{1}-2x_{2}-4x_{3}+x_{4}=0\\ 2x_{1}-3x_{2}-4x_{3}+4x_{4}=1\\ x_{1}-3x_{2}-7x_{3}+kx_{4}=k\end{cases}$（其中 $k$ 为常数）有无穷多解，求其通解．`,
          answer: String.raw`$k=-1$，通解 $x=t(-5,-2,0,1)^{T}+(2,1,0,0)^{T}$，$t$ 为任意常数`,
          solution: String.raw`对增广矩阵作初等行变换：
$$\left(\begin{array}{cccc|c}1&-1&-1&3&1\\1&-2&-4&1&0\\2&-3&-4&4&1\\1&-3&-7&k&k\end{array}\right)\to\left(\begin{array}{cccc|c}1&-1&-1&3&1\\0&-1&-3&-2&-1\\0&-1&-2&-2&-1\\0&-2&-6&k-3&k-1\end{array}\right)$$
$$\to\left(\begin{array}{cccc|c}1&-1&-1&3&1\\0&-1&-3&-2&-1\\0&0&1&0&0\\0&0&0&k+1&k+1\end{array}\right)$$
有无穷多解要求系数矩阵与增广矩阵同秩且小于 $4$：须 $k+1=0$，即 $k=-1$．
此时 $x_{3}=0$，$-x_{2}-2x_{4}=-1\Rightarrow x_{2}=1-2x_{4}$，
$x_{1}=1+x_{2}+x_{3}-3x_{4}=1+(1-2x_{4})+0-3x_{4}=2-5x_{4}$．
令 $x_{4}=t$，通解 $x=t(-5,-2,0,1)^{T}+(2,1,0,0)^{T}$．`
        }
      ]
    },
    {
      name: '四、证明题',
      note: '本题 10 分．',
      items: [
        {
          no: 23,
          stem: String.raw`设函数 $f(x)$ 在闭区间 $[0,1]$ 上具有二阶导数，且 $f(0)=1$，$f(1)=0$，证明：
（1）在开区间 $(0,1)$ 内至少存在一点 $\xi$，使得 $f'(\xi)=\xi$；
（2）在开区间 $(0,1)$ 内至少存在一点 $\eta$，使得 $f'(\eta)+\eta f''(\eta)=-1$．`,
          answer: '见解析',
          solution: String.raw`（1）令 $F(x)=f(x)-\dfrac{x^{2}}{2}$，则 $F'(x)=f'(x)-x$，要证的就是 $F'$ 有零点．
$$F(0)=1>0,\qquad F(1)=0-\frac12=-\frac12<0$$
由零点定理，存在 $x_{0}\in(0,1)$ 使 $F(x_{0})=0$．又 $F(0)=0$，在 $[0,x_{0}]$ 上对 $F$ 用罗尔定理，
存在 $\xi\in(0,x_{0})\subset(0,1)$ 使 $F'(\xi)=0$，即 $f'(\xi)=\xi$．
（2）由拉格朗日中值定理，存在 $c\in(0,1)$ 使
$$f'(c)=\frac{f(1)-f(0)}{1-0}=-1$$
令 $G(x)=x\left[f'(x)+1\right]$，则
$$G'(x)=\left[f'(x)+1\right]+x f''(x)=f'(x)+x f''(x)+1$$
且 $G(0)=0\cdot[\cdots]=0$，$G(c)=c\left[f'(c)+1\right]=c\cdot(-1+1)=0$．
在 $[0,c]$ 上对 $G$ 用罗尔定理，存在 $\eta\in(0,c)\subset(0,1)$ 使 $G'(\eta)=0$，
即 $f'(\eta)+\eta f''(\eta)+1=0$，也就是 $f'(\eta)+\eta f''(\eta)=-1$．证毕．`
        }
      ]
    },
    {
      name: '五、综合题',
      note: '本大题共 2 题，每小题 10 分，共 20 分．',
      items: [
        {
          no: 24,
          stem: String.raw`设 $D$ 是由抛物线 $y=x^{2}$ 与 $y=(x-2)^{2}$ 及 $x$ 轴所围成的平面区域，求
（1）求 $D$ 的面积；
（2）求 $D$ 绕 $x$ 轴旋转一周所形成的旋转体的体积；
（3）求 $D$ 绕 $y$ 轴旋转一周所形成的旋转体的体积．`,
          answer: String.raw`（1）$\dfrac{2}{3}$；（2）$\dfrac{2\pi}{5}$；（3）$\dfrac{4\pi}{3}$`,
          solution: String.raw`两抛物线交于 $x^{2}=(x-2)^{2}\Rightarrow x=1$，交点 $(1,1)$．区域由 $0\le x\le 1$ 下的 $y=x^{2}$、$1\le x\le 2$ 下的 $y=(x-2)^{2}$ 以及 $x$ 轴围成．
（1）面积：
$$S=\int_{0}^{1}x^{2}\mathrm{d}x+\int_{1}^{2}(x-2)^{2}\mathrm{d}x=\frac13+\frac13=\frac23$$
（2）绕 $x$ 轴，两段都用圆盘法：
$$V_{x}=\pi\int_{0}^{1}\left(x^{2}\right)^{2}\mathrm{d}x+\pi\int_{1}^{2}(x-2)^{4}\mathrm{d}x=\frac{\pi}{5}+\frac{\pi}{5}=\frac{2\pi}{5}$$
（3）绕 $y$ 轴用柱壳法，两段分别套 $V=2\pi\displaystyle\int x\cdot(\text{高度})\,\mathrm{d}x$：
$$V_{y}=2\pi\int_{0}^{1}x\cdot x^{2}\,\mathrm{d}x+2\pi\int_{1}^{2}x(x-2)^{2}\,\mathrm{d}x$$
第一项 $=2\pi\cdot\dfrac14=\dfrac{\pi}{2}$；
第二项令 $u=x-2$，则 $x=u+2$，$u:-1\to 0$：
$$\int_{1}^{2}x(x-2)^{2}\mathrm{d}x=\int_{-1}^{0}(u+2)u^{2}\mathrm{d}u=\left[\frac{u^{4}}{4}+\frac{2u^{3}}{3}\right]_{-1}^{0}=0-\left(\frac14-\frac23\right)=\frac{5}{12}$$
故第二项 $=2\pi\cdot\dfrac{5}{12}=\dfrac{5\pi}{6}$，
$$V_{y}=\frac{\pi}{2}+\frac{5\pi}{6}=\frac{4\pi}{3}$$`
        },
        {
          no: 25,
          stem: String.raw`设二阶可导函数 $f(x)$ 满足方程 $f''(x)+2f'(x)+2f(x)=0$，且 $\lim\limits_{x\to 0}\dfrac{f(x)}{x}=1$，求 $\displaystyle\int_{0}^{+\infty}f(x)\,\mathrm{d}x$．`,
          answer: String.raw`$\dfrac{1}{2}$`,
          solution: String.raw`特征方程 $r^{2}+2r+2=0$，$r=-1\pm i$，通解
$$f(x)=e^{-x}\left(C_{1}\cos x+C_{2}\sin x\right)$$
由 $\lim\limits_{x\to 0}\dfrac{f(x)}{x}=1$ 存在且有限，必有 $f(0)=0$，且该极限就是 $f'(0)$，故 $f'(0)=1$．
$f(0)=C_{1}=0$，于是 $f(x)=C_{2}e^{-x}\sin x$；
$$f'(x)=C_{2}e^{-x}\left(\cos x-\sin x\right),\qquad f'(0)=C_{2}=1$$
故 $f(x)=e^{-x}\sin x$．
$$\int_{0}^{+\infty}e^{-x}\sin x\,\mathrm{d}x=\left[-\frac{e^{-x}}{2}\left(\sin x+\cos x\right)\right]_{0}^{+\infty}=0-\left(-\frac12\right)=\frac12$$`
        }
      ]
    }
  ]
}
