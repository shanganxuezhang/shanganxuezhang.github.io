window.PAPERS = window.PAPERS || {}
window.PAPERS['2022'] = {
  year: 2022,
  full: 150,
  minutes: 120,
  note: '本试卷为 2022 年江苏专转本改革后的第一份卷，题型结构从此固定下来，是后面几年的参照基准。',
  sections: [
    {
      name: '一、单项选择题',
      note: '本大题共 8 小题，每小题 4 分，共 32 分．在每小题给出的四个选项中，只有一项是符合题目要求的．',
      items: [
        {
          no: 1,
          stem: String.raw`要使函数 $f(x)=(1-x)^{\frac{2-x}{x}}$ 在区间 $(-1,1)$ 内连续，则应补充定义 $f(0)=$（　　）`,
          options: [String.raw`$e^{-2}$`, String.raw`$e^{-1}$`, String.raw`$e$`, String.raw`$e^{2}$`],
          answer: 'A',
          solution: String.raw`$\lim\limits_{x\to 0}(1-x)^{\frac{2-x}{x}}=e^{\lim\limits_{x\to 0}\frac{2-x}{x}\ln(1-x)}$．
因为 $\ln(1-x)\sim -x$，所以 $\frac{2-x}{x}\ln(1-x)\sim \frac{2-x}{x}\cdot(-x)=-(2-x)\to -2$．
故极限为 $e^{-2}$，补充定义 $f(0)=e^{-2}$ 即可连续．选 A．`
        },
        {
          no: 2,
          stem: String.raw`函数 $f(x)=\dfrac{\sin x}{x(x^{2}-1)}$ 的第二类间断点的个数为（　　）`,
          options: ['$0$', '$1$', '$2$', '$3$'],
          answer: 'C',
          solution: String.raw`间断点为 $x=0,\ x=\pm 1$．
$x\to 0$ 时 $\dfrac{\sin x}{x}\to 1$，$\dfrac{1}{x^{2}-1}\to -1$，极限为 $-1$，是可去间断点（第一类）；
$x\to 1$ 与 $x\to -1$ 时分子不为零、分母趋于零，函数趋于无穷，都是第二类间断点．
共 $2$ 个，选 C．`
        },
        {
          no: 3,
          stem: String.raw`设 $f'(1)=1$，且 $\lim\limits_{h\to 0}\dfrac{f(1-ah)-f(1+ah)}{h}=1$，则常数 $a$ 的值为（　　）`,
          options: [String.raw`$-1$`, String.raw`$-\dfrac{1}{2}$`, String.raw`$\dfrac{1}{2}$`, '$1$'],
          answer: 'B',
          solution: String.raw`分子 $=f(1)-ah\,f'(1)+o(h)-f(1)-ah\,f'(1)+o(h)=-2ah+o(h)$．
故 $\lim\limits_{h\to 0}\dfrac{-2ah+o(h)}{h}=-2a=1$，得 $a=-\dfrac{1}{2}$．选 B．`
        },
        {
          no: 4,
          stem: String.raw`设 $F(x)$ 为 $f(x)$ 的一个原函数，且 $f(x)$ 可导，则下列等式正确的是（　　）`,
          options: [
            String.raw`$\int \mathrm{d}F(x)=f(x)+C$`,
            String.raw`$\int \mathrm{d}f(x)=F(x)+C$`,
            String.raw`$\int F(x)\,\mathrm{d}x=f(x)+C$`,
            String.raw`$\int f(x)\,\mathrm{d}x=F(x)+C$`
          ],
          answer: 'D',
          solution: String.raw`原函数的定义就是 $\int f(x)\mathrm{d}x=F(x)+C$，故选 D．
至于 A，$\int \mathrm{d}F(x)=F(x)+C$，右边写成了 $f(x)$，错；B 同理错位；C 把原函数与被积函数弄反了．`
        },
        {
          no: 5,
          stem: String.raw`设 $\iint\limits_{D}\sqrt{x^{2}+y^{2}}\,\mathrm{d}x\mathrm{d}y=\pi$，其中 $D=\{(x,y)\mid x^{2}+y^{2}\le R^{2},\ x\ge 0\}$，则 $R$ 的值为（　　）`,
          options: ['$2$', String.raw`$\sqrt{2}$`, String.raw`$\sqrt{6}$`, String.raw`$\sqrt[3]{3}$`],
          answer: 'D',
          solution: String.raw`$D$ 是右半圆盘，用极坐标：$\theta\in\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right]$，$r\in[0,R]$．
$$\iint\limits_{D}\sqrt{x^{2}+y^{2}}\,\mathrm{d}x\mathrm{d}y=\int_{-\pi/2}^{\pi/2}\mathrm{d}\theta\int_{0}^{R}r\cdot r\,\mathrm{d}r=\pi\cdot\frac{R^{3}}{3}$$
由 $\dfrac{\pi R^{3}}{3}=\pi$ 得 $R^{3}=3$，$R=\sqrt[3]{3}$．选 D．`
        },
        {
          no: 6,
          stem: String.raw`下列级数条件收敛的是（　　）`,
          options: [
            String.raw`$\sum\limits_{n=1}^{\infty}\dfrac{\sin n}{n^{2}}$`,
            String.raw`$\sum\limits_{n=1}^{\infty}(-1)^{n}\sin\dfrac{1}{n^{2}}$`,
            String.raw`$\sum\limits_{n=1}^{\infty}(-1)^{n}\sin\dfrac{1}{\sqrt{n}}$`,
            String.raw`$\sum\limits_{n=1}^{\infty}(-1)^{n}\sin^{2}\dfrac{1}{n}$`
          ],
          answer: 'C',
          solution: String.raw`条件收敛＝本身收敛但绝对值级数发散．
A：$\left|\dfrac{\sin n}{n^{2}}\right|\le\dfrac{1}{n^{2}}$，绝对收敛；
B：$\left|(-1)^{n}\sin\dfrac{1}{n^{2}}\right|\sim\dfrac{1}{n^{2}}$，绝对收敛；
D：$\sin^{2}\dfrac{1}{n}\sim\dfrac{1}{n^{2}}$，绝对收敛；
C：$\dfrac{1}{\sqrt{n}}$ 单调递减趋于 $0$，由莱布尼茨判别法原级数收敛；而 $\sum\dfrac{1}{\sqrt n}$ 是 $p=\frac12<1$ 的 $p$ 级数，发散．
故 C 条件收敛．`
        },
        {
          no: 7,
          stem: String.raw`若矩阵 $A=\begin{pmatrix}-1&-1&3\\ 1&a&2\\ -1&0&2\end{pmatrix}$ 的秩为 $2$，则常数 $a$ 的值为（　　）`,
          options: [String.raw`$-4$`, String.raw`$-2$`, '$2$', '$4$'],
          answer: 'A',
          solution: String.raw`秩为 $2$ 说明 $|A|=0$．按第一行展开：
$$|A|=-1\cdot(2a-0)-(-1)\cdot(2+2)+3\cdot(0+a)=-2a+4+3a=a+4$$
令 $a+4=0$ 得 $a=-4$．此时二阶子式 $\begin{vmatrix}-1&-1\\1&-4\end{vmatrix}=4+1=5\ne 0$，秩确为 $2$．选 A．`
        },
        {
          no: 8,
          stem: String.raw`设 $D=\begin{vmatrix}1&1&0&0\\ 0&0&-1&-1\\ 1&-1&1&-1\\ 1&2&3&4\end{vmatrix}$，$M_{4j}$ 是 $D$ 中元素 $a_{4j}$ 的余子式，则 $M_{41}+M_{42}+M_{43}+M_{44}=$（　　）`,
          options: [String.raw`$-2$`, '$0$', '$1$', '$2$'],
          answer: 'B',
          solution: String.raw`逐个算出第四行的四个余子式：
$$M_{41}=\begin{vmatrix}1&0&0\\0&-1&-1\\-1&1&-1\end{vmatrix}=1\cdot(1+1)=2,\qquad M_{42}=\begin{vmatrix}1&0&0\\0&-1&-1\\1&1&-1\end{vmatrix}=2$$
$$M_{43}=\begin{vmatrix}1&1&0\\0&0&-1\\1&-1&-1\end{vmatrix}=1\cdot(0-1)-1\cdot(0+1)=-2,\qquad M_{44}=\begin{vmatrix}1&1&0\\0&0&-1\\1&-1&1\end{vmatrix}=-2$$
所以 $M_{41}+M_{42}+M_{43}+M_{44}=2+2-2-2=0$．选 B．`
        }
      ]
    },
    {
      name: '二、填空题',
      note: '本大题共 6 小题，每小题 4 分，共 24 分．',
      items: [
        {
          no: 9,
          stem: String.raw`$\lim\limits_{n\to\infty}\dfrac{\sin n}{n}=$ ________．`,
          answer: '$0$',
          solution: String.raw`$\left|\dfrac{\sin n}{n}\right|\le\dfrac{1}{n}\to 0$，由夹逼准则，极限为 $0$．`
        },
        {
          no: 10,
          stem: String.raw`设函数 $f(x)=\begin{cases}\dfrac{x^{2}}{\arctan x},&x\ne 0\\[4pt] 0,&x=0\end{cases}$，则 $f'(0)=$ ________．`,
          answer: '$1$',
          solution: String.raw`用导数定义：$f'(0)=\lim\limits_{x\to 0}\dfrac{f(x)-f(0)}{x}=\lim\limits_{x\to 0}\dfrac{x}{\arctan x}=1$（因 $\arctan x\sim x$）．`
        },
        {
          no: 11,
          stem: String.raw`设函数 $f(x)=\sin 3x$，则 $f^{(2022)}(0)=$ ________．`,
          answer: '$0$',
          solution: String.raw`$f^{(n)}(x)=3^{n}\sin\left(3x+\dfrac{n\pi}{2}\right)$．取 $n=2022$、$x=0$：
$$f^{(2022)}(0)=3^{2022}\sin\frac{2022\pi}{2}=3^{2022}\sin 1011\pi=0$$
（$\sin$ 的 $n$ 阶导以 $4$ 为周期，$2022=4\times 505+2$，直接得 $-3^{2022}\sin 0=0$．）`
        },
        {
          no: 12,
          stem: String.raw`若 $\int_{a}^{+\infty}2e^{-2x}\,\mathrm{d}x=e^{4}$，则常数 $a=$ ________．`,
          answer: String.raw`$-2$`,
          solution: String.raw`$\int_{a}^{+\infty}2e^{-2x}\mathrm{d}x=\left[-e^{-2x}\right]_{a}^{+\infty}=0+e^{-2a}=e^{-2a}$．
由 $e^{-2a}=e^{4}$ 得 $-2a=4$，$a=-2$．`
        },
        {
          no: 13,
          stem: String.raw`若幂级数 $\sum\limits_{n=1}^{\infty}\dfrac{n}{a^{n}}x^{n}$ 的收敛半径为 $2$，则幂级数 $\sum\limits_{n=1}^{\infty}a^{n}(x-1)^{n}$ 的收敛区间为 ________．`,
          answer: String.raw`$\left(\dfrac{1}{2},\dfrac{3}{2}\right)$`,
          solution: String.raw`对 $\sum\dfrac{n}{a^{n}}x^{n}$，由 $\lim\limits_{n\to\infty}\left|\dfrac{a_{n+1}}{a_{n}}\right|=\dfrac{1}{|a|}$ 得收敛半径 $|a|=2$．
于是 $\sum a^{n}(x-1)^{n}$ 的收敛半径为 $\dfrac{1}{|a|}=\dfrac{1}{2}$，收敛区间为 $\left|\,x-1\,\right|<\dfrac12$，即 $\left(\dfrac12,\dfrac32\right)$．`
        },
        {
          no: 14,
          stem: String.raw`若向量组 $\alpha_{1}=(1,0,2,0)$，$\alpha_{2}=(1,0,0,2)$，$\alpha_{3}=(0,1,1,1)$，$\alpha_{4}=(2,1,k,2)$ 线性相关，则 $k=$ ________．`,
          answer: '$4$',
          solution: String.raw`线性相关说明 $\alpha_{4}$ 可由前三个线性表示．设 $\alpha_{4}=m\alpha_{1}+n\alpha_{2}+p\alpha_{3}$，逐分量比较：
$$m+n=2,\quad p=1,\quad 2m+p=k,\quad 2n+p=2$$
由 $p=1$ 得 $2n=1$，$n=\dfrac12$，从而 $m=\dfrac32$，$k=2\cdot\dfrac32+1=4$．`
        }
      ]
    },
    {
      name: '三、计算题',
      note: '本大题共 8 小题，每小题 8 分，共 64 分．答题应写出演算步骤．',
      items: [
        {
          no: 15,
          stem: String.raw`求极限 $\lim\limits_{x\to 0}\dfrac{e^{\sin x}-\sin x-1}{x\sin x}$．`,
          answer: String.raw`$\dfrac{1}{2}$`,
          solution: String.raw`令 $t=\sin x$，则 $t\to 0$，且 $x\sin x\sim x^{2}\sim t^{2}$．
$$e^{t}=1+t+\frac{t^{2}}{2}+o(t^{2})\ \Longrightarrow\ e^{t}-t-1=\frac{t^{2}}{2}+o(t^{2})$$
故原式 $=\lim\limits_{t\to 0}\dfrac{\frac{t^{2}}{2}+o(t^{2})}{t^{2}}=\dfrac12$．`
        },
        {
          no: 16,
          stem: String.raw`求不定积分 $\int x\arctan\dfrac{1}{x}\,\mathrm{d}x$．`,
          answer: String.raw`$\dfrac{x^{2}}{2}\arctan\dfrac{1}{x}+\dfrac{x}{2}-\dfrac{1}{2}\arctan x+C$`,
          solution: String.raw`分部积分，取 $u=\arctan\dfrac1x$，$\mathrm{d}v=x\,\mathrm{d}x$，则 $\mathrm{d}u=-\dfrac{\mathrm{d}x}{1+x^{2}}$，$v=\dfrac{x^{2}}{2}$：
$$\int x\arctan\frac1x\,\mathrm{d}x=\frac{x^{2}}{2}\arctan\frac1x+\frac12\int\frac{x^{2}}{1+x^{2}}\,\mathrm{d}x$$
而 $\dfrac12\displaystyle\int\dfrac{x^{2}}{1+x^{2}}\mathrm{d}x=\dfrac12\displaystyle\int\left(1-\dfrac{1}{1+x^{2}}\right)\mathrm{d}x=\dfrac{x}{2}-\dfrac12\arctan x+C$．
所以原式 $=\dfrac{x^{2}}{2}\arctan\dfrac1x+\dfrac{x}{2}-\dfrac12\arctan x+C$．`
        },
        {
          no: 17,
          stem: String.raw`设 $f(x)=\begin{cases}\dfrac{x^{3}}{\sqrt{1+x^{2}}},&x<1\\[6pt] \dfrac{\sqrt{2x-1}}{\sqrt{2x-1}+1},&x\ge 1\end{cases}$，求定积分 $\int_{-1}^{5}f(x)\,\mathrm{d}x$．`,
          answer: String.raw`$2+\ln 2$`,
          solution: String.raw`在 $x=1$ 处断开：
$$\int_{-1}^{5}f(x)\mathrm{d}x=\int_{-1}^{1}\frac{x^{3}}{\sqrt{1+x^{2}}}\mathrm{d}x+\int_{1}^{5}\frac{\sqrt{2x-1}}{\sqrt{2x-1}+1}\mathrm{d}x$$
第一项被积函数是奇函数，区间对称，积分为 $0$．
第二项令 $u=\sqrt{2x-1}$，则 $x=\dfrac{u^{2}+1}{2}$，$\mathrm{d}x=u\,\mathrm{d}u$，$x:1\to5$ 对应 $u:1\to3$：
$$\int_{1}^{3}\frac{u}{u+1}\cdot u\,\mathrm{d}u=\int_{1}^{3}\left(u-1+\frac{1}{u+1}\right)\mathrm{d}u=\left[\frac{u^{2}}{2}-u+\ln(u+1)\right]_{1}^{3}$$
$$=\left(\frac92-3+\ln 4\right)-\left(\frac12-1+\ln 2\right)=2+\ln 2$$
故原式 $=2+\ln 2$．`
        },
        {
          no: 18,
          stem: String.raw`设 $z=z(x,y)$ 是由方程 $e^{z}=xy+yz+zx$ 所确定的函数，求全微分 $\mathrm{d}z$．`,
          answer: String.raw`$\mathrm{d}z=\dfrac{y+z}{e^{z}-x-y}\,\mathrm{d}x+\dfrac{x+z}{e^{z}-x-y}\,\mathrm{d}y$`,
          solution: String.raw`令 $F(x,y,z)=e^{z}-xy-yz-zx$，则
$$F_{x}=-(y+z),\qquad F_{y}=-(x+z),\qquad F_{z}=e^{z}-y-x$$
由隐函数求导公式 $\dfrac{\partial z}{\partial x}=-\dfrac{F_x}{F_z}$、$\dfrac{\partial z}{\partial y}=-\dfrac{F_y}{F_z}$：
$$\frac{\partial z}{\partial x}=\frac{y+z}{e^{z}-x-y},\qquad \frac{\partial z}{\partial y}=\frac{x+z}{e^{z}-x-y}$$
故 $\mathrm{d}z=\dfrac{y+z}{e^{z}-x-y}\mathrm{d}x+\dfrac{x+z}{e^{z}-x-y}\mathrm{d}y$．`
        },
        {
          no: 19,
          stem: String.raw`求微分方程 $y''+2y'-3y=4e^{x}$ 的通解．`,
          answer: String.raw`$y=C_{1}e^{-3x}+C_{2}e^{x}+xe^{x}$`,
          solution: String.raw`特征方程 $r^{2}+2r-3=0$，$(r+3)(r-1)=0$，$r_{1}=-3,\ r_{2}=1$，齐次通解 $Y=C_{1}e^{-3x}+C_{2}e^{x}$．
右端 $4e^{x}$ 中 $\lambda=1$ 是单特征根，故设特解 $y^{*}=Axe^{x}$：
$$y^{*}{}'=Ae^{x}(x+1),\qquad y^{*}{}''=Ae^{x}(x+2)$$
代入得 $Ae^{x}\left[(x+2)+2(x+1)-3x\right]=4Ae^{x}=4e^{x}$，$A=1$．
通解 $y=C_{1}e^{-3x}+C_{2}e^{x}+xe^{x}$．`
        },
        {
          no: 20,
          stem: String.raw`求二重积分 $\iint\limits_{D}xy\,\mathrm{d}x\mathrm{d}y$，其中 $D$ 为曲线 $y=\sqrt{x}$ 及直线 $x+y=2$、$x=0$ 所围成的闭区域．`,
          answer: String.raw`$\dfrac{7}{24}$`,
          solution: String.raw`先画区域：$y=\sqrt x$ 与 $x+y=2$ 交于 $(1,1)$．按 $x$ 型：$0\le x\le 1$，$\sqrt{x}\le y\le 2-x$．
$$\iint\limits_{D}xy\,\mathrm{d}x\mathrm{d}y=\int_{0}^{1}x\,\mathrm{d}x\int_{\sqrt{x}}^{2-x}y\,\mathrm{d}y=\frac12\int_{0}^{1}x\left[(2-x)^{2}-x\right]\mathrm{d}x$$
$$=\frac12\int_{0}^{1}\left(4x-5x^{2}+x^{3}\right)\mathrm{d}x=\frac12\left(2-\frac53+\frac14\right)=\frac12\cdot\frac{7}{12}=\frac{7}{24}$$`
        },
        {
          no: 21,
          stem: String.raw`设 $A=\begin{pmatrix}-1&1&0\\ -1&2&0\\ 1&1&-1\end{pmatrix}$，$B=\begin{pmatrix}2&2\\ 5&6\\ -1&0\end{pmatrix}$，求矩阵 $X$，使 $AX=B$．`,
          answer: String.raw`$X=\begin{pmatrix}1&2\\ 3&4\\ 5&6\end{pmatrix}$`,
          solution: String.raw`$|A|$ 按第三列展开：$|A|=-1\cdot\begin{vmatrix}-1&1\\-1&2\end{vmatrix}=-1\cdot(-1)=1\ne 0$，故 $A$ 可逆，$X=A^{-1}B$．
对 $(A\mid B)$ 作初等行变换：
$$\left(\begin{array}{ccc|cc}-1&1&0&2&2\\-1&2&0&5&6\\1&1&-1&-1&0\end{array}\right)\to\left(\begin{array}{ccc|cc}1&0&0&1&2\\0&1&0&3&4\\0&0&1&5&6\end{array}\right)$$
故 $X=\begin{pmatrix}1&2\\3&4\\5&6\end{pmatrix}$．验算：$AX$ 的三行分别为 $(2,2)$、$(5,6)$、$(-1,0)$，正是 $B$．`
        },
        {
          no: 22,
          stem: String.raw`求方程组 $\begin{cases}x_{1}+x_{2}+x_{3}-3x_{4}=6\\ x_{1}-5x_{2}+x_{3}+3x_{4}=-6\\ x_{1}-2x_{2}+2x_{3}-x_{4}=2\end{cases}$ 的通解．`,
          answer: String.raw`$x=k(1,1,1,1)^{T}+(2,2,2,0)^{T}$，$k$ 为任意常数`,
          solution: String.raw`对增广矩阵作初等行变换：
$$\left(\begin{array}{cccc|c}1&1&1&-3&6\\1&-5&1&3&-6\\1&-2&2&-1&2\end{array}\right)\to\left(\begin{array}{cccc|c}1&0&0&-1&2\\0&1&0&-1&2\\0&0&1&-1&2\end{array}\right)$$
即 $x_{1}=2+x_{4}$，$x_{2}=2+x_{4}$，$x_{3}=2+x_{4}$，$x_{4}$ 自由．
取 $x_{4}=0$ 得特解 $\xi=(2,2,2,0)^{T}$；齐次方程组的基础解系为 $(1,1,1,1)^{T}$．
通解 $x=k(1,1,1,1)^{T}+(2,2,2,0)^{T}$，$k$ 为任意常数．`
        }
      ]
    },
    {
      name: '四、证明题',
      note: '本大题 10 分．',
      items: [
        {
          no: 23,
          stem: String.raw`证明：当 $0<x<\dfrac{\pi}{4}$ 时，$\int_{0}^{x}e^{t}\cos t\,\mathrm{d}t>x$．`,
          answer: '见解析',
          solution: String.raw`令 $F(x)=\int_{0}^{x}e^{t}\cos t\,\mathrm{d}t-x$，$x\in\left[0,\dfrac{\pi}{4}\right]$，则 $F(0)=0$．
$$F'(x)=e^{x}\cos x-1,\qquad F'(0)=0$$
$$F''(x)=e^{x}(\cos x-\sin x)$$
当 $0<x<\dfrac{\pi}{4}$ 时 $\cos x>\sin x$，故 $F''(x)>0$，$F'$ 在 $\left[0,\dfrac{\pi}{4}\right]$ 上单调增加，从而 $F'(x)>F'(0)=0$．
于是 $F$ 在 $\left[0,\dfrac{\pi}{4}\right]$ 上单调增加，$F(x)>F(0)=0$，即 $\int_{0}^{x}e^{t}\cos t\,\mathrm{d}t>x$．证毕．`
        }
      ]
    },
    {
      name: '五、综合题',
      note: '本大题共 2 小题，每小题 10 分，共 20 分．',
      items: [
        {
          no: 24,
          stem: String.raw`设 $a$ 为大于 $0$ 的常数，$D$ 为由曲线 $y=ax^{3}\ (x\ge 0)$ 与直线 $y=ax$ 所围成的平面图形，$V_{x}$ 与 $V_{y}$ 分别为 $D$ 绕 $x$ 轴与 $y$ 轴旋转所形成的旋转体的体积，已知 $V_{x}=V_{y}$，求常数 $a$ 的值，并求此时 $D$ 的面积．`,
          answer: String.raw`$a=\dfrac{7}{5}$，面积 $S_{D}=\dfrac{7}{20}$`,
          solution: String.raw`两曲线交于 $x=0$ 与 $x=1$（$a>0$），在 $(0,1)$ 内 $ax>ax^{3}$．
绕 $x$ 轴（垫圈法）：
$$V_{x}=\pi\int_{0}^{1}\left[(ax)^{2}-(ax^{3})^{2}\right]\mathrm{d}x=\pi a^{2}\left(\frac13-\frac17\right)=\frac{4\pi a^{2}}{21}$$
绕 $y$ 轴（垫圈法，$y$ 从 $0$ 到 $a$，内半径 $\sqrt[3]{y/a}$，外半径 $y/a$）：
$$V_{y}=\pi\int_{0}^{a}\left[\left(\sqrt[3]{\frac{y}{a}}\right)^{2}-\left(\frac{y}{a}\right)^{2}\right]\mathrm{d}y=\pi a\left(\frac35-\frac13\right)=\frac{4\pi a}{15}$$
由 $V_{x}=V_{y}$ 得 $\dfrac{a}{21}=\dfrac{1}{15}$，即 $a=\dfrac{7}{5}$．
此时面积
$$S_{D}=\int_{0}^{1}(ax-ax^{3})\,\mathrm{d}x=a\left(\frac12-\frac14\right)=\frac{a}{4}=\frac{7}{20}$$`
        },
        {
          no: 25,
          stem: String.raw`设定义在 $(-\infty,+\infty)$ 上的函数 $f(x)$ 满足方程 $xf'(x)-4f(x)=2x^{3}$ 且 $f(2)=0$，求
（1）函数 $f(x)$ 的解析式；
（2）曲线 $y=f(x)$ 的凹凸区间与拐点．`,
          answer: String.raw`（1）$f(x)=x^{4}-2x^{3}$；（2）凹区间 $(-\infty,0)$、$(1,+\infty)$，凸区间 $(0,1)$，拐点 $(0,0)$、$(1,-1)$`,
          solution: String.raw`（1）$x\ne 0$ 时化为标准一阶线性方程：
$$f'(x)-\frac{4}{x}f(x)=2x^{2}$$
$$f(x)=e^{\int\frac{4}{x}\mathrm{d}x}\left[\int 2x^{2}e^{-\int\frac{4}{x}\mathrm{d}x}\mathrm{d}x+C\right]=x^{4}\left[\int 2x^{2}\cdot x^{-4}\mathrm{d}x+C\right]$$
$$=x^{4}\left[\int 2x^{-2}\mathrm{d}x+C\right]=x^{4}\left(-\frac{2}{x}+C\right)=Cx^{4}-2x^{3}$$
由 $f(2)=0$ 得 $16C-16=0$，$C=1$，故 $f(x)=x^{4}-2x^{3}$．
（2）$f'(x)=4x^{3}-6x^{2}$，$f''(x)=12x^{2}-12x=12x(x-1)$．
$f''(x)>0$ 当 $x<0$ 或 $x>1$；$f''(x)<0$ 当 $0<x<1$．
凹区间 $(-\infty,0)$ 与 $(1,+\infty)$，凸区间 $(0,1)$；拐点为 $(0,0)$ 与 $(1,-1)$．`
        }
      ]
    }
  ]
}
