window.PAPERS = window.PAPERS || {}
window.PAPERS['2023'] = {
  year: 2023,
  full: 150,
  minutes: 120,
  note: '2023 年卷的题量与分值和 2022 完全一致，但计算量偏大，第 19、22、24、25 题都容易在中间步骤失分。',
  sections: [
    {
      name: '一、单项选择题',
      note: '本大题共 8 小题，每小题 4 分，共 32 分．在每小题给出的四个选项中，只有一项是符合题目要求的．',
      items: [
        {
          no: 1,
          stem: String.raw`$x=1$ 是函数 $\dfrac{x^{2}+ax+b}{x-a}$ 的第一类间断点，则 $ab=$（　　）`,
          options: [String.raw`$-2$`, String.raw`$-1$`, '$1$', '$2$'],
          answer: 'A',
          solution: String.raw`$x=1$ 处函数无定义，须由分母产生，故 $a=1$．
第一类（可去）间断点要求 $\lim\limits_{x\to 1}$ 存在，分子在 $x=1$ 必须为零：$1+a+b=0$，代入 $a=1$ 得 $b=-2$．
所以 $ab=1\times(-2)=-2$．选 A．`
        },
        {
          no: 2,
          stem: String.raw`设函数 $f(x)=\dfrac{e^{x}-1}{x}$，若当 $x\to 0$ 时，$f(x)-\lim\limits_{x\to 0}f(x)$ 是 $ax^{k}$ 的等价无穷小，则 $a,k$ 的值依次为（　　）`,
          options: [String.raw`$2,\ 1$`, String.raw`$1,\ 2$`, String.raw`$\dfrac{1}{2},\ 1$`, String.raw`$\dfrac{1}{2},\ 2$`],
          answer: 'C',
          solution: String.raw`先求 $\lim\limits_{x\to 0}\dfrac{e^{x}-1}{x}=1$，于是
$$f(x)-\lim_{x\to 0}f(x)=\frac{e^{x}-1}{x}-1=\frac{e^{x}-1-x}{x}$$
而 $e^{x}-1-x\sim\dfrac{x^{2}}{2}$，故上式 $\sim\dfrac{x^{2}/2}{x}=\dfrac{x}{2}$．
所以 $a=\dfrac12,\ k=1$．选 C．`
        },
        {
          no: 3,
          stem: String.raw`设函数 $y=f(x)$ 的微分 $\mathrm{d}y=\dfrac{1}{x+1}\,\mathrm{d}x$，则 $f^{(2023)}(0)=$（　　）`,
          options: [String.raw`$-2022$`, String.raw`$2022!$`, String.raw`$-2023$`, '$2023$'],
          answer: 'B',
          solution: String.raw`由 $\mathrm{d}y=\dfrac{1}{x+1}\mathrm{d}x$ 得 $f'(x)=\dfrac{1}{x+1}=(x+1)^{-1}$．
逐次求导归纳：$f^{(n)}(x)=(-1)^{n-1}\dfrac{(n-1)!}{(x+1)^{n}}$．
取 $n=2023$、$x=0$：$f^{(2023)}(0)=(-1)^{2022}\cdot 2022!=2022!$．选 B．`
        },
        {
          no: 4,
          stem: String.raw`若 $f(x)$ 的一个原函数为 $\sin 2x$，则 $f'(1)=$（　　）`,
          options: [String.raw`$2\cos 2$`, String.raw`$-\dfrac{1}{2}\cos 2$`, String.raw`$-2\sin 2$`, String.raw`$-4\sin 2$`],
          answer: 'D',
          solution: String.raw`原函数求导得被积函数：$f(x)=(\sin 2x)'=2\cos 2x$．
再求导：$f'(x)=-4\sin 2x$，故 $f'(1)=-4\sin 2$．选 D．`
        },
        {
          no: 5,
          stem: String.raw`设二元函数 $f(u,v)$ 具有连续偏导数，且满足 $f(x+y,x-y)=x^{2}-y^{2}$，则 $f'_{u}(2,0)$ 与 $f'_{v}(2,0)$ 依次为（　　）`,
          options: [String.raw`$2,\ -2$`, String.raw`$2,\ 2$`, String.raw`$0,\ 2$`, String.raw`$4,\ 0$`],
          answer: 'C',
          solution: String.raw`注意 $x^{2}-y^{2}=(x+y)(x-y)$．令 $u=x+y,\ v=x-y$，则
$$f(u,v)=uv$$
于是 $f'_{u}=v,\ f'_{v}=u$．在 $(u,v)=(2,0)$ 处：$f'_{u}(2,0)=0$，$f'_{v}(2,0)=2$．选 C．`
        },
        {
          no: 6,
          stem: String.raw`若级数 $\sum\limits_{n=1}^{\infty}\dfrac{(-1)^{n}}{n^{p}}$ 收敛，而级数 $\sum\limits_{n=1}^{\infty}\dfrac{1}{p^{n}}$ 发散，则（　　）`,
          options: [String.raw`$0<p<1$`, String.raw`$0<p\le 1$`, String.raw`$p>1$`, String.raw`$p\ge 1$`],
          answer: 'B',
          solution: String.raw`第一个条件：$\sum\dfrac{(-1)^{n}}{n^{p}}$ 是交错 $p$ 级数，收敛的充要条件是 $p>0$．
第二个条件：$\sum\dfrac{1}{p^{n}}=\sum\left(\dfrac1p\right)^{n}$ 是等比级数，公比 $\dfrac1p$，发散要求 $\left|\dfrac1p\right|\ge 1$，即 $p\le 1$（$p>0$ 时等价于 $0<p\le 1$）．
两个条件同时成立：$0<p\le 1$．选 B．`
        },
        {
          no: 7,
          stem: String.raw`设 $A=\begin{pmatrix}a&1&1\\ 1&a&1\\ 1&1&a\end{pmatrix}$，若 $A$ 的秩为 $2$，则 $a=$（　　）`,
          options: [String.raw`$-2$`, String.raw`$-1$`, '$0$', '$1$'],
          answer: 'A',
          solution: String.raw`这类矩阵的行列式有现成公式：$|A|=(a+2)(a-1)^{2}$．
秩为 $2$ 说明 $|A|=0$，得 $a=1$ 或 $a=-2$．
代回检验：$a=1$ 时三行全为 $(1,1,1)$，秩为 $1$，不合；$a=-2$ 时存在非零二阶子式，秩为 $2$．
故 $a=-2$．选 A．`
        },
        {
          no: 8,
          stem: String.raw`若向量组 $\alpha_{1},\alpha_{2},\alpha_{3}$ 线性无关，$k$ 为非零实数，则向量 $\alpha_{1}+k\alpha_{2},\ \alpha_{2}+k\alpha_{3},\ \alpha_{3}+k\alpha_{1}$ 线性相关的充分必要条件是（　　）`,
          options: [String.raw`$k\ne 1$`, String.raw`$k\ne -1$`, String.raw`$k=1$`, String.raw`$k=-1$`],
          answer: 'D',
          solution: String.raw`把新向量组用 $(\alpha_{1},\alpha_{2},\alpha_{3})$ 表示，系数矩阵为
$$C=\begin{pmatrix}1&0&k\\ k&1&0\\ 0&k&1\end{pmatrix}$$
因 $\alpha_{1},\alpha_{2},\alpha_{3}$ 线性无关，新向量组线性相关 $\iff |C|=0$．
$|C|=1+k^{3}$，令 $1+k^{3}=0$ 得 $k=-1$．选 D．`
        }
      ]
    },
    {
      name: '二、填空题',
      note: '本大题共 6 小题，每小题 4 分，共 24 分．',
      items: [
        {
          no: 9,
          stem: String.raw`设 $f(x)=x\sin\dfrac{1}{x}+\dfrac{1}{x}\sin 2x-\lim\limits_{x\to 0}f(x)$，则 $\lim\limits_{x\to 0}f(x)=$ ________．`,
          answer: '$1$',
          solution: String.raw`记 $A=\lim\limits_{x\to 0}f(x)$，方程两边同取 $x\to 0$ 的极限：
$x\sin\dfrac1x\to 0$（有界量乘无穷小），$\dfrac{\sin 2x}{x}\to 2$，常数 $A$ 不变．
故 $A=0+2-A$，即 $2A=2$，$A=1$．`
        },
        {
          no: 10,
          stem: String.raw`设直线 $y=3x+m$ 是曲线 $\begin{cases}x=t^{2}-t+1\\ y=t^{2}+t-1\end{cases}$ 的一条切线，则 $m=$ ________．`,
          answer: String.raw`$-2$`,
          solution: String.raw`$\dfrac{\mathrm{d}x}{\mathrm{d}t}=2t-1$，$\dfrac{\mathrm{d}y}{\mathrm{d}t}=2t+1$，故切线斜率 $\dfrac{2t+1}{2t-1}$．
令 $\dfrac{2t+1}{2t-1}=3$，得 $2t+1=6t-3$，$t=1$．
切点为 $x=1,\ y=1$，代入 $y=3x+m$ 得 $1=3+m$，$m=-2$．`
        },
        {
          no: 11,
          stem: String.raw`设 $f(x)$ 是可导的奇函数，且 $\lim\limits_{n\to\infty}n\,f\!\left(\dfrac{2}{n}\right)=1$，则 $f'(0)=$ ________．`,
          answer: String.raw`$\dfrac{1}{2}$`,
          solution: String.raw`奇函数在 $0$ 处有定义则可导时 $f(0)=0$，于是
$$n f\!\left(\frac2n\right)=2\cdot\frac{f\!\left(\frac2n\right)-f(0)}{\frac2n}\longrightarrow 2f'(0)$$
由 $2f'(0)=1$ 得 $f'(0)=\dfrac12$．`
        },
        {
          no: 12,
          stem: String.raw`设 $y=\displaystyle\int_{1}^{x}\frac{1}{\sqrt{1+t^{3}}}\,\mathrm{d}t$，则 $\left.\dfrac{\mathrm{d}y}{\mathrm{d}x}\right|_{x=1}=$ ________．`,
          answer: String.raw`$\dfrac{\sqrt{2}}{2}$`,
          solution: String.raw`由变上限积分求导：$\dfrac{\mathrm{d}y}{\mathrm{d}x}=\dfrac{1}{\sqrt{1+x^{3}}}$．
取 $x=1$ 得 $\dfrac{1}{\sqrt2}=\dfrac{\sqrt2}{2}$．`
        },
        {
          no: 13,
          stem: String.raw`若幂级数 $\sum\limits_{n=1}^{\infty}\dfrac{(x+1)^{n}}{n\,a^{n}}$ 的收敛域为 $[-3,1)$，则常数 $a=$ ________．`,
          answer: '$2$',
          solution: String.raw`由 $\lim\limits_{n\to\infty}\left|\dfrac{a_{n+1}}{a_n}\right|=\dfrac{1}{|a|}$ 得收敛半径 $R=|a|$，收敛区间为 $(-1-|a|,\,-1+|a|)$．
已知收敛域左端点为 $-3$，故 $-1-|a|=-3$，$|a|=2$，$a=\pm 2$．
检验端点：$a=2$ 时 $x=-3$ 处为 $\sum\dfrac{(-2)^{n}}{n2^{n}}=\sum\dfrac{(-1)^{n}}{n}$ 收敛，$x=1$ 处为 $\sum\dfrac1n$ 发散，正好是 $[-3,1)$；
$a=-2$ 时 $x=-3$ 处为 $\sum\dfrac{(-2)^n}{n(-2)^n}=\sum\dfrac1n$ 发散，不合．
故 $a=2$．`
        },
        {
          no: 14,
          stem: String.raw`设 $A,B$ 均为 $3$ 阶方阵，且 $|A|=4$，$AB=\begin{pmatrix}2&1&0\\ 1&3&0\\ 0&0&4\end{pmatrix}$，则 $|B|=$ ________．`,
          answer: '$5$',
          solution: String.raw`先算 $|AB|$．按第三行展开：$|AB|=4\cdot\begin{vmatrix}2&1\\1&3\end{vmatrix}=4\times(6-1)=20$．
又 $|AB|=|A||B|=4|B|$，故 $4|B|=20$，$|B|=5$．`
        }
      ]
    },
    {
      name: '三、计算题',
      note: '本大题共 8 小题，每小题 8 分，共 64 分．答题应写出演算步骤．',
      items: [
        {
          no: 15,
          stem: String.raw`求极限 $\lim\limits_{x\to 0}\dfrac{x\sin x+2\cos x-2}{x^{2}-x^{2}\cos x}$．`,
          answer: String.raw`$-\dfrac{1}{6}$`,
          solution: String.raw`分母：$x^{2}(1-\cos x)\sim x^{2}\cdot\dfrac{x^{2}}{2}=\dfrac{x^{4}}{2}$．
分子用泰勒展开到 $x^{4}$：
$$x\sin x=x\left(x-\frac{x^{3}}{6}+o(x^{3})\right)=x^{2}-\frac{x^{4}}{6}+o(x^{4})$$
$$2\cos x=2\left(1-\frac{x^{2}}{2}+\frac{x^{4}}{24}+o(x^{4})\right)=2-x^{2}+\frac{x^{4}}{12}+o(x^{4})$$
分子 $=x^{2}-\dfrac{x^{4}}{6}+2-x^{2}+\dfrac{x^{4}}{12}-2+o(x^{4})=-\dfrac{x^{4}}{12}+o(x^{4})$．
故原式 $=\lim\limits_{x\to 0}\dfrac{-x^{4}/12}{x^{4}/2}=-\dfrac16$．`
        },
        {
          no: 16,
          stem: String.raw`已知 $\displaystyle\int xf(x)\,\mathrm{d}x=x^{2}\arctan x+C$，求 $\displaystyle\int f(x)\,\mathrm{d}x$．`,
          answer: String.raw`$2x\arctan x-\dfrac{1}{2}\ln(1+x^{2})+C$`,
          solution: String.raw`两边求导：$xf(x)=2x\arctan x+\dfrac{x^{2}}{1+x^{2}}$，故
$$f(x)=2\arctan x+\frac{x}{1+x^{2}}$$
直接积分：
$$\int f(x)\mathrm{d}x=2\int\arctan x\,\mathrm{d}x+\int\frac{x}{1+x^{2}}\mathrm{d}x$$
$$=2\left(x\arctan x-\int\frac{x}{1+x^{2}}\mathrm{d}x\right)+\frac12\ln(1+x^{2})$$
$$=2x\arctan x-\ln(1+x^{2})+\frac12\ln(1+x^{2})+C=2x\arctan x-\frac12\ln(1+x^{2})+C$$
验算：求导得 $2\arctan x+\dfrac{2x}{1+x^{2}}-\dfrac{x}{1+x^{2}}=2\arctan x+\dfrac{x}{1+x^{2}}=f(x)$．`
        },
        {
          no: 17,
          stem: String.raw`求定积分 $\displaystyle\int_{0}^{\sqrt{2}}\frac{x^{2}}{\sqrt{4-x^{2}}}\,\mathrm{d}x$．`,
          answer: String.raw`$\dfrac{\pi}{2}-1$`,
          solution: String.raw`令 $x=2\sin t$，$\mathrm{d}x=2\cos t\,\mathrm{d}t$；$x=0$ 时 $t=0$，$x=\sqrt2$ 时 $t=\dfrac{\pi}{4}$．
$$\int_{0}^{\sqrt2}\frac{x^{2}}{\sqrt{4-x^{2}}}\mathrm{d}x=\int_{0}^{\pi/4}\frac{4\sin^{2}t}{2\cos t}\cdot2\cos t\,\mathrm{d}t=4\int_{0}^{\pi/4}\sin^{2}t\,\mathrm{d}t$$
$$=4\cdot\frac12\int_{0}^{\pi/4}(1-\cos 2t)\mathrm{d}t=2\left[t-\frac{\sin 2t}{2}\right]_{0}^{\pi/4}=2\left(\frac{\pi}{4}-\frac12\right)=\frac{\pi}{2}-1$$`
        },
        {
          no: 18,
          stem: String.raw`设 $z=z(x,y)$ 是由方程 $z^{3}-3xz+6y=1$ 所确定的函数，求 $\left.\dfrac{\partial^{2}z}{\partial x\partial y}\right|_{\substack{x=0\\ y=0}}$．`,
          answer: '$2$',
          solution: String.raw`$x=y=0$ 时 $z^{3}=1$，取 $z=1$，此时 $F_{z}=3z^{2}-3x=3\ne 0$，隐函数存在且可微．
令 $F=z^{3}-3xz+6y-1$，$F_{x}=-3z$，$F_{y}=6$，$F_{z}=3z^{2}-3x$：
$$\frac{\partial z}{\partial x}=-\frac{F_x}{F_z}=\frac{3z}{3z^{2}-3x}=\frac{z}{z^{2}-x},\qquad \frac{\partial z}{\partial y}=-\frac{6}{3z^{2}-3x}=\frac{-2}{z^{2}-x}$$
再对 $y$ 求偏导（注意 $z$ 是 $y$ 的函数）：
$$\frac{\partial^{2}z}{\partial x\partial y}=\frac{z_y(z^{2}-x)-z(2zz_y-0)}{(z^{2}-x)^{2}}=\frac{z_y\,(-x-z^{2})}{(z^{2}-x)^{2}}$$
在 $(0,0)$ 处 $z=1,\ z_y=\dfrac{-2}{1-0}=-2$，代入得
$$\frac{\partial^{2}z}{\partial x\partial y}\bigg|_{(0,0)}=\frac{(-2)\cdot(-1)}{1^{2}}=2$$`
        },
        {
          no: 19,
          stem: String.raw`已知 $y=xe^{x}$ 为微分方程 $y''+py'+qy=-e^{x}$ 的一个特解，求该微分方程满足初始条件 $\left.y\right|_{x=0}=1$，$\left.y'\right|_{x=0}=2$ 的特解．`,
          answer: String.raw`$y=e^{x}+xe^{x}$`,
          solution: String.raw`由 $y=xe^{x}$ 得 $y'=e^{x}(x+1)$，$y''=e^{x}(x+2)$，代入方程：
$$e^{x}(x+2)+pe^{x}(x+1)+qxe^{x}=-e^{x}$$
两边除以 $e^{x}$ 并合并同类项：
$$x(1+p+q)+(2+p)=-1$$
比较系数：$1+p+q=0$，$2+p=-1$，解得 $p=-3,\ q=2$．
方程为 $y''-3y'+2y=-e^{x}$．特征方程 $r^{2}-3r+2=0$，$r=1,2$，齐次通解 $Y=C_{1}e^{x}+C_{2}e^{2x}$．
通解 $y=C_{1}e^{x}+C_{2}e^{2x}+xe^{x}$．由 $y(0)=C_{1}+C_{2}=1$，
$$y'=C_{1}e^{x}+2C_{2}e^{2x}+e^{x}(x+1),\qquad y'(0)=C_{1}+2C_{2}+1=2$$
得 $C_{1}+2C_{2}=1$，与 $C_{1}+C_{2}=1$ 联立解得 $C_{2}=0,\ C_{1}=1$．
所求特解 $y=e^{x}+xe^{x}$．`
        },
        {
          no: 20,
          stem: String.raw`计算二重积分 $\iint\limits_{D}(2y-\cos x)\,\mathrm{d}x\mathrm{d}y$，其中 $D$ 为由曲线 $y=\cos x\ \left(0\le x\le\dfrac{\pi}{2}\right)$ 与两直线 $x=\dfrac{\pi}{2}$、$y=1$ 所围成的封闭区域．`,
          answer: String.raw`$\dfrac{\pi}{2}-1$`,
          solution: String.raw`区域：$0\le x\le\dfrac{\pi}{2}$，$\cos x\le y\le 1$．先对 $y$ 积分：
$$\iint\limits_{D}(2y-\cos x)\mathrm{d}x\mathrm{d}y=\int_{0}^{\pi/2}\mathrm{d}x\int_{\cos x}^{1}(2y-\cos x)\,\mathrm{d}y$$
内层 $=\left[y^{2}-y\cos x\right]_{\cos x}^{1}=\left(1-\cos x\right)-\left(\cos^{2}x-\cos^{2}x\right)=1-\cos x$．
故原式 $=\displaystyle\int_{0}^{\pi/2}(1-\cos x)\mathrm{d}x=\left[x-\sin x\right]_{0}^{\pi/2}=\frac{\pi}{2}-1$．`
        },
        {
          no: 21,
          stem: String.raw`设 $A=\begin{pmatrix}0&1&1\\ 2&2&2\\ -1&-1&-1\end{pmatrix}$，求矩阵 $X$，使 $AX=A-X$．`,
          answer: String.raw`$X=\begin{pmatrix}-1&1&1\\ 2&0&0\\ -1&0&0\end{pmatrix}$`,
          solution: String.raw`由 $AX=A-X$ 得 $AX+X=A$，即 $(A+E)X=A$．
$$A+E=\begin{pmatrix}1&1&1\\ 2&3&2\\ -1&-1&0\end{pmatrix},\qquad |A+E|=1\cdot(0+2)-1\cdot(0+2)+1\cdot(-2+3)=1\ne 0$$
故 $A+E$ 可逆，$X=(A+E)^{-1}A$．按列求解 $(A+E)x_{j}=a_{j}$（$a_j$ 为 $A$ 的第 $j$ 列）：
第一列 $a_{1}=(0,2,-1)^{T}$：解得 $x_{1}=(-1,2,-1)^{T}$；
第二、三列均为 $a_{2}=a_{3}=(1,2,-1)^{T}$：解得 $x_{2}=x_{3}=(1,0,0)^{T}$．
$$X=\begin{pmatrix}-1&1&1\\ 2&0&0\\ -1&0&0\end{pmatrix}$$
验算 $AX=\begin{pmatrix}1&0&0\\0&2&2\\0&-1&-1\end{pmatrix}=A-X$，成立．`
        },
        {
          no: 22,
          stem: String.raw`问 $\lambda$ 为何值时，线性方程组 $\begin{cases}x_{1}-2x_{2}=1\\ 2x_{1}-3x_{2}+x_{3}=\lambda+1\\ x_{1}-x_{2}+x_{3}=\lambda^{2}\end{cases}$ 有解？并求其解．`,
          answer: String.raw`$\lambda=0$ 或 $\lambda=1$；$\lambda=0$ 时 $(-1-2t,\,-1-t,\,t)^{T}$，$\lambda=1$ 时 $(1-2t,\,-t,\,t)^{T}$，$t$ 为任意常数`,
          solution: String.raw`系数行列式
$$\begin{vmatrix}1&-2&0\\2&-3&1\\1&-1&1\end{vmatrix}=1\cdot(-3+1)-(-2)\cdot(2-1)+0=-2+2=0$$
故系数矩阵奇异，需用增广矩阵判断．
$$\left(\begin{array}{ccc|c}1&-2&0&1\\2&-3&1&\lambda+1\\1&-1&1&\lambda^{2}\end{array}\right)\xrightarrow{\substack{r_2-2r_1\\ r_3-r_1}}\left(\begin{array}{ccc|c}1&-2&0&1\\0&1&1&\lambda-1\\0&1&1&\lambda^{2}-1\end{array}\right)\xrightarrow{r_3-r_2}\left(\begin{array}{ccc|c}1&-2&0&1\\0&1&1&\lambda-1\\0&0&0&\lambda^{2}-\lambda\end{array}\right)$$
有解的充要条件是 $\lambda^{2}-\lambda=0$，即 $\lambda=0$ 或 $\lambda=1$．
当 $\lambda=0$：$x_{2}+x_{3}=-1$，$x_{1}=1+2x_{2}$．令 $x_{3}=t$，得 $x_{2}=-1-t$，$x_{1}=-1-2t$，
解为 $(-1-2t,\,-1-t,\,t)^{T}$．
当 $\lambda=1$：$x_{2}+x_{3}=0$，$x_{1}=1+2x_{2}$．令 $x_{3}=t$，得 $x_{2}=-t$，$x_{1}=1-2t$，
解为 $(1-2t,\,-t,\,t)^{T}$．`
        }
      ]
    },
    {
      name: '四、证明题',
      note: '本大题共 10 分．答题应写出证明步骤．',
      items: [
        {
          no: 23,
          stem: String.raw`证明：当 $x>0$ 时，$\sin x+\cos x>1+x-x^{2}$．`,
          answer: '见解析',
          solution: String.raw`令 $f(x)=\sin x+\cos x-1-x+x^{2}$，$x\ge 0$，则 $f(0)=0$．
$$f'(x)=\cos x-\sin x-1+2x,\qquad f'(0)=1-0-1+0=0$$
$$f''(x)=-\sin x-\cos x+2=2-(\sin x+\cos x)=2-\sqrt{2}\sin\left(x+\frac{\pi}{4}\right)\ge 2-\sqrt2>0$$
所以 $f'$ 在 $[0,+\infty)$ 上单调增加，当 $x>0$ 时 $f'(x)>f'(0)=0$；
进而 $f$ 在 $[0,+\infty)$ 上单调增加，当 $x>0$ 时 $f(x)>f(0)=0$．
即 $\sin x+\cos x>1+x-x^{2}$．证毕．`
        }
      ]
    },
    {
      name: '五、综合题',
      note: '本大题共 2 小题，每小题 10 分，共 20 分．答题应写出演算步骤．',
      items: [
        {
          no: 24,
          stem: String.raw`设函数 $f(x)=\dfrac{ax^{2}+2x-1}{x^{2}+bx+1}$，已知直线 $x=1$ 与 $y=0$ 为曲线 $y=f(x)$ 的渐近线，求：
（1）常数 $a,b$ 的值；
（2）曲线 $y=f(x)$ 的凹凸区间与拐点．`,
          answer: String.raw`（1）$a=0,\ b=-2$；（2）凸区间 $\left(-\infty,-\dfrac12\right)$，凹区间 $\left(-\dfrac12,1\right)$ 与 $(1,+\infty)$，拐点 $\left(-\dfrac12,-\dfrac89\right)$`,
          solution: String.raw`（1）$x=1$ 是垂直渐近线，说明 $x\to 1$ 时 $f(x)\to\infty$，即分母在 $x=1$ 为零：
$$1+b+1=0\ \Longrightarrow\ b=-2$$
$y=0$ 是水平渐近线，说明 $\lim\limits_{x\to\infty}f(x)=0$．分母为二次，只有分子次数更低才成立，故 $a=0$．
此时 $f(x)=\dfrac{2x-1}{x^{2}-2x+1}=\dfrac{2x-1}{(x-1)^{2}}$．
（2）令 $u=x-1$，则 $f=\dfrac{2u+1}{u^{2}}=\dfrac{2}{u}+\dfrac{1}{u^{2}}$，
$$f'=-\frac{2}{u^{2}}-\frac{2}{u^{3}},\qquad f''=\frac{4}{u^{3}}+\frac{6}{u^{4}}=\frac{4u+6}{u^{4}}$$
$u\ne 0$ 时 $u^{4}>0$，$f''$ 的符号由 $4u+6$ 决定：
$u<-\dfrac32$（即 $x<-\dfrac12$）时 $f''<0$，曲线为凸；
$-\dfrac32<u<0$（即 $-\dfrac12<x<1$）与 $u>0$（即 $x>1$）时 $f''>0$，曲线为凹．
$f''=0$ 得 $u=-\dfrac32$，此时 $f=\dfrac{-3+1}{9/4}=-\dfrac89$，拐点为 $\left(-\dfrac12,-\dfrac89\right)$．`
        },
        {
          no: 25,
          stem: String.raw`设 $f(x)$ 是定义在 $(-\infty,+\infty)$ 上的正值连续函数，且 $f(0)=1$，$D$ 为曲线 $y=f(x)$ 与直线 $x=0$、$x=t\ (t>0)$ 及 $x$ 轴所围成的曲边梯形，$D$ 的面积为 $A(t)$，$D$ 绕 $y$ 轴旋转所形成的旋转体的体积记为 $V(t)$，已知 $A(t)=\dfrac12-\dfrac12 f(t)$，求 $\lim\limits_{t\to+\infty}V(t)$．`,
          answer: String.raw`$\dfrac{\pi}{2}$`,
          solution: String.raw`由 $A(t)=\displaystyle\int_{0}^{t}f(x)\mathrm{d}x=\frac12-\frac12 f(t)$，两边对 $t$ 求导：
$$f(t)=-\frac12 f'(t)\ \Longrightarrow\ f'(t)=-2f(t)$$
解得 $f(t)=Ce^{-2t}$，由 $f(0)=1$ 得 $C=1$，即 $f(t)=e^{-2t}$．
（回代验证：$\int_0^t e^{-2x}\mathrm{d}x=\dfrac{1-e^{-2t}}{2}=\dfrac12-\dfrac12f(t)$，符合．）
绕 $y$ 轴旋转用柱壳法：
$$V(t)=2\pi\int_{0}^{t}xf(x)\,\mathrm{d}x=2\pi\int_{0}^{t}xe^{-2x}\,\mathrm{d}x$$
分部积分：$\displaystyle\int xe^{-2x}\mathrm{d}x=-\frac{x}{2}e^{-2x}-\frac14 e^{-2x}$，故
$$\int_{0}^{t}xe^{-2x}\mathrm{d}x=\left[-\frac{x}{2}e^{-2x}-\frac14e^{-2x}\right]_{0}^{t}=\frac14-\frac{t}{2}e^{-2t}-\frac14e^{-2t}$$
$$V(t)=2\pi\left(\frac14-\frac{t}{2}e^{-2t}-\frac14e^{-2t}\right)$$
令 $t\to+\infty$，指数项全部趋于 $0$，故 $\lim\limits_{t\to+\infty}V(t)=2\pi\cdot\dfrac14=\dfrac{\pi}{2}$．`
        }
      ]
    }
  ]
}
