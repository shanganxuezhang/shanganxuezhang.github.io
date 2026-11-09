window.PAPERS = window.PAPERS || {}
window.PAPERS['2024'] = {
  year: 2024,
  full: 150,
  minutes: 120,
  note: '2024 年卷首次出现无穷比无穷型极限（第 15 题）和“给三个特解反求方程”（第 18 题），第 23 题要用两次罗尔定理。',
  sections: [
    {
      name: '一、单项选择题',
      note: '本大题共 8 小题，每小题 4 分，共 32 分．在每小题列出的选项中只有一项是符合题目要求的．',
      items: [
        {
          no: 1,
          stem: String.raw`设 $\alpha(x)=\cos x-1$，$\beta(x)=\sqrt{1+x^{2}}-1$，$\gamma(x)=e^{x}-1$，则当 $x\to 0$ 时（　　）`,
          options: [
            String.raw`$\alpha(x)$ 是 $\beta(x)$ 的同阶无穷小，$\beta(x)$ 是 $\gamma(x)$ 的高阶无穷小`,
            String.raw`$\alpha(x)$ 是 $\beta(x)$ 的高阶无穷小，$\beta(x)$ 是 $\gamma(x)$ 的同阶无穷小`,
            String.raw`$\alpha(x)$ 是 $\beta(x)$ 的同阶无穷小，$\beta(x)$ 是 $\gamma(x)$ 的同阶无穷小`,
            String.raw`$\alpha(x)$ 是 $\beta(x)$ 的高阶无穷小，$\beta(x)$ 是 $\gamma(x)$ 的高阶无穷小`
          ],
          answer: 'A',
          solution: String.raw`三个都用等价无穷小：
$$\alpha(x)=\cos x-1\sim-\frac{x^{2}}{2},\qquad \beta(x)=\sqrt{1+x^{2}}-1\sim\frac{x^{2}}{2},\qquad \gamma(x)=e^{x}-1\sim x$$
$\alpha$ 与 $\beta$ 都是 $\dfrac{x^{2}}{2}$ 阶，商趋于 $-1$，同阶；
$\beta$ 是二阶无穷小，$\gamma$ 是一阶，$\dfrac{\beta}{\gamma}\to 0$，故 $\beta$ 是 $\gamma$ 的高阶无穷小．
选 A．`
        },
        {
          no: 2,
          stem: String.raw`若函数 $f(x)=\dfrac{\sin 2x}{x}+2\lim\limits_{x\to 0}f(x)$，则 $\lim\limits_{x\to+\infty}f(x)=$（　　）`,
          options: [String.raw`$-4$`, String.raw`$-2$`, '$2$', '$4$'],
          answer: 'A',
          solution: String.raw`记 $A=\lim\limits_{x\to 0}f(x)$，则 $f(x)=\dfrac{\sin 2x}{x}+2A$．两边令 $x\to 0$：
$$A=\lim_{x\to 0}\frac{\sin 2x}{x}+2A=2+2A\ \Longrightarrow\ A=-2$$
于是 $f(x)=\dfrac{\sin 2x}{x}-4$，再令 $x\to+\infty$：$\dfrac{\sin 2x}{x}\to 0$（有界乘无穷小），
$$\lim_{x\to+\infty}f(x)=0-4=-4$$
选 A．注意两问的极限过程不同，第二问是 $x\to+\infty$，不是 $x\to 0$．`
        },
        {
          no: 3,
          stem: String.raw`若 $e^{-2x}$ 是函数 $f(x)$ 的一个原函数，则 $f''(x)=$（　　）`,
          options: [String.raw`$4e^{-2x}$`, String.raw`$-4e^{-2x}$`, String.raw`$8e^{-2x}$`, String.raw`$-8e^{-2x}$`],
          answer: 'D',
          solution: String.raw`原函数求导得 $f$：$f(x)=(e^{-2x})'=-2e^{-2x}$；
$$f'(x)=4e^{-2x},\qquad f''(x)=-8e^{-2x}$$
选 D．这类题每年都考，关键只记一条：$F(x)$ 是 $f(x)$ 的原函数 $\iff F'(x)=f(x)$．`
        },
        {
          no: 4,
          stem: String.raw`若 $f(x)=\ln(2x+1)$，则 $f^{(n)}(x)=$（　　）`,
          options: [
            String.raw`$\dfrac{(-1)^{n-1}\cdot 2^{n}\cdot(n-1)!}{(2x+1)^{n}}$`,
            String.raw`$\dfrac{(-1)^{n-1}\cdot 2^{n-1}\cdot(n-1)!}{(2x+1)^{n}}$`,
            String.raw`$\dfrac{(-1)^{n-1}\cdot 2^{n}\cdot(n-1)!}{(2x+1)^{n+1}}$`,
            String.raw`$\dfrac{(-1)^{n}\cdot 2^{n}\cdot(n-1)!}{(2x+1)^{n}}$`
          ],
          answer: 'A',
          solution: String.raw`逐次求导找规律：
$$f'(x)=\frac{2}{2x+1},\quad f''(x)=-\frac{2^{2}}{(2x+1)^{2}},\quad f'''(x)=\frac{2^{3}\cdot 2}{(2x+1)^{3}},\quad f^{(4)}(x)=-\frac{2^{4}\cdot 3!}{(2x+1)^{4}}$$
归纳得 $f^{(n)}(x)=\dfrac{(-1)^{n-1}\,2^{n}\,(n-1)!}{(2x+1)^{n}}$．选 A．
代 $n=1$ 校验：$(-1)^{0}\cdot 2\cdot 0!/(2x+1)=\dfrac{2}{2x+1}$，与 $f'$ 一致；
代 $n=2$：$(-1)^{1}\cdot 4\cdot 1!/(2x+1)^{2}=-\dfrac{4}{(2x+1)^{2}}$，也一致．`
        },
        {
          no: 5,
          stem: String.raw`下列级数收敛的是（　　）`,
          options: [
            String.raw`$\sum\limits_{n=1}^{\infty}\dfrac{n+1}{n^{2}+1}$`,
            String.raw`$\sum\limits_{n=1}^{\infty}\dfrac{(-1)^{n}+2}{n+2}$`,
            String.raw`$\sum\limits_{n=1}^{\infty}n\sin\dfrac{1}{n}$`,
            String.raw`$\sum\limits_{n=1}^{\infty}(-1)^{n}\sin\dfrac{1}{n}$`
          ],
          answer: 'D',
          solution: String.raw`A：$\dfrac{n+1}{n^{2}+1}\sim\dfrac{1}{n}$，与调和级数同阶，发散；
B：拆成 $\sum\dfrac{(-1)^{n}}{n+2}+\sum\dfrac{2}{n+2}$，前者收敛、后者发散，故发散；
C：$n\sin\dfrac1n\to 1\ne 0$，通项不趋于零，发散；
D：$\dfrac1n$ 递减趋于 $0$，由莱布尼茨判别法收敛．
选 D．`
        },
        {
          no: 6,
          stem: String.raw`设 $f(x,y)=2x^{3}-3x^{2}+y^{2}-2y$，则函数 $f(x,y)$（　　）`,
          options: [
            String.raw`在点 $(0,1)$ 处不取极值，在点 $(1,1)$ 处取极大值`,
            String.raw`在点 $(0,1)$ 处不取极值，在点 $(1,1)$ 处取极小值`,
            String.raw`在点 $(0,1)$ 处取极大值，在点 $(1,1)$ 处取极小值`,
            String.raw`在点 $(0,1)$ 处取极小值，在点 $(1,1)$ 处取极大值`
          ],
          answer: 'B',
          solution: String.raw`$$f_{x}=6x^{2}-6x=6x(x-1)=0\ \Rightarrow\ x=0\ \text{或}\ 1;\qquad f_{y}=2y-2=0\ \Rightarrow\ y=1$$
驻点：$(0,1)$、$(1,1)$．二阶偏导 $f_{xx}=12x-6$，$f_{yy}=2$，$f_{xy}=0$，记 $\Delta=f_{xx}f_{yy}-f_{xy}^{2}$．
在 $(0,1)$：$f_{xx}=-6$，$\Delta=-12<0$，不取极值；
在 $(1,1)$：$f_{xx}=6>0$，$\Delta=12>0$，取极小值．
选 B．`
        },
        {
          no: 7,
          stem: String.raw`矩阵 $\begin{pmatrix}1&1&1&1&1\\ 1&-1&2&-2&3\\ 1&1&4&4&9\\ 1&-1&8&-8&27\end{pmatrix}$ 的秩为（　　）`,
          options: ['$1$', '$2$', '$3$', '$4$'],
          answer: 'D',
          solution: String.raw`注意每一列的结构：自上而下依次是 $b^{0},b^{1},b^{2},b^{3}$，五列对应的底数为 $b=1,-1,2,-2,3$．
取前四列（底数 $1,-1,2,-2$），得到标准 $4$ 阶范德蒙德行列式，其值为 $\displaystyle\prod_{i<j}(b_{j}-b_{i})$：
$$D=\underbrace{(-2)}_{b_2-b_1}\cdot\underbrace{(1)}_{b_3-b_1}\cdot\underbrace{(-3)}_{b_4-b_1}\cdot\underbrace{(3)}_{b_3-b_2}\cdot\underbrace{(-1)}_{b_4-b_2}\cdot\underbrace{(-4)}_{b_4-b_3}=72\ne 0$$
四阶子式非零，矩阵又只有 $4$ 行，故秩为 $4$．选 D．`
        },
        {
          no: 8,
          stem: String.raw`设向量组 $\alpha_{1},\alpha_{2},\alpha_{3}$ 线性无关，则一定线性相关的向量组为（　　）`,
          options: [
            String.raw`$\alpha_{1}+\alpha_{2},\ \alpha_{2}+\alpha_{3},\ \alpha_{3}+\alpha_{1}$`,
            String.raw`$\alpha_{1}-\alpha_{2},\ \alpha_{2}-\alpha_{3},\ \alpha_{3}-\alpha_{1}$`,
            String.raw`$\alpha_{1},\ \alpha_{1}+\alpha_{2},\ \alpha_{1}+\alpha_{2}+\alpha_{3}$`,
            String.raw`$\alpha_{1},\ \alpha_{1}-\alpha_{2},\ \alpha_{1}-\alpha_{2}-\alpha_{3}$`
          ],
          answer: 'B',
          solution: String.raw`直接观察：B 中三者相加
$$(\alpha_{1}-\alpha_{2})+(\alpha_{2}-\alpha_{3})+(\alpha_{3}-\alpha_{1})=0$$
存在不全为零的系数 $(1,1,1)$ 使线性组合为零，故必线性相关．选 B．
其余三组都可验证系数矩阵行列式非零（分别为 $2,1,1$），故线性无关．
判断这类题的窍门：**首尾相接、首尾相消**的组合一定相关．`
        }
      ]
    },
    {
      name: '二、填空题',
      note: '本大题共 6 小题，每空 4 分，共 24 分．',
      items: [
        {
          no: 9,
          stem: String.raw`若 $x=1$ 是函数 $f(x)=\dfrac{x^{3}-ax}{x^{2}-x}$ 的第一类间断点，则 $\lim\limits_{x\to 0}f(x)=$ ________．`,
          answer: '$1$',
          solution: String.raw`$x=1$ 处分母为零，已是间断点；第一类（可去）要求分子同时为零：
$$1-a=0\ \Longrightarrow\ a=1$$
于是 $f(x)=\dfrac{x^{3}-x}{x^{2}-x}=\dfrac{x(x-1)(x+1)}{x(x-1)}=x+1\ (x\ne 0,1)$，
故 $\lim\limits_{x\to 0}f(x)=0+1=1$．`
        },
        {
          no: 10,
          stem: String.raw`设 $y=y(x)$ 是由参数方程 $\begin{cases}x=t^{2}+2t\\ y=t^{3}-3t\end{cases}$ 所确定的函数，若 $\left.\dfrac{\mathrm{d}y}{\mathrm{d}x}\right|_{t=t_{0}}=-\dfrac{3}{2}$，则 $t_{0}=$ ________．`,
          answer: '$0$',
          solution: String.raw`$\dfrac{\mathrm{d}x}{\mathrm{d}t}=2t+2$，$\dfrac{\mathrm{d}y}{\mathrm{d}t}=3t^{2}-3$，故
$$\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{3t^{2}-3}{2t+2}$$
令 $\dfrac{3t^{2}-3}{2t+2}=-\dfrac32$，即 $6t^{2}-6=-6t-6$，$6t^{2}+6t=0$，$t=0$ 或 $t=-1$．
$t=-1$ 时分母 $\mathrm{d}x/\mathrm{d}t=0$，导数不存在，舍去．故 $t_{0}=0$．`
        },
        {
          no: 11,
          stem: String.raw`设 $f(x)=\begin{cases}\dfrac{\ln(1+x^{2})}{x},&x\ne 0\\[4pt] 0,&x=0\end{cases}$，$y=f(\sin x)$，则 $\left.\dfrac{\mathrm{d}y}{\mathrm{d}x}\right|_{x=0}=$ ________．`,
          answer: '$1$',
          solution: String.raw`先求 $f'(0)$（分段点用定义）：
$$f'(0)=\lim_{x\to 0}\frac{f(x)-f(0)}{x}=\lim_{x\to 0}\frac{\ln(1+x^{2})}{x^{2}}=1$$
再由复合函数求导 $y'=f'(\sin x)\cos x$，取 $x=0$：
$$\left.y'\right|_{x=0}=f'(0)\cdot\cos 0=1\times 1=1$$`
        },
        {
          no: 12,
          stem: String.raw`若 $\displaystyle\int_{-\infty}^{a}e^{x}\,\mathrm{d}x=\int_{a}^{+\infty}e^{1-x}\,\mathrm{d}x$，则常数 $a=$ ________．`,
          answer: String.raw`$\dfrac{1}{2}$`,
          solution: String.raw`左边 $=\left[e^{x}\right]_{-\infty}^{a}=e^{a}$；右边 $=\left[-e^{1-x}\right]_{a}^{+\infty}=e^{1-a}$．
由 $e^{a}=e^{1-a}$ 得 $a=1-a$，$a=\dfrac12$．`
        },
        {
          no: 13,
          stem: String.raw`幂级数 $\sum\limits_{n=1}^{\infty}\dfrac{n^{n}}{3^{n}\cdot n!}(x-1)^{n}$ 的收敛半径为 ________．`,
          answer: String.raw`$\dfrac{3}{e}$`,
          solution: String.raw`$$\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_{n}}\right|=\lim_{n\to\infty}\frac{(n+1)^{n+1}}{3^{n+1}(n+1)!}\cdot\frac{3^{n}n!}{n^{n}}=\lim_{n\to\infty}\frac{(n+1)^{n}}{3n^{n}}=\frac{e}{3}$$
故收敛半径 $R=\dfrac{3}{e}$．
（这里用到重要极限 $\left(1+\dfrac1n\right)^{n}\to e$．）`
        },
        {
          no: 14,
          stem: String.raw`行列式 $\begin{vmatrix}1&0&0&2\\ 0&1&2&0\\ 0&3&4&0\\ 3&0&0&4\end{vmatrix}$ 的值为 ________．`,
          answer: '$4$',
          solution: String.raw`按第一行展开：
$$D=1\cdot\begin{vmatrix}1&2&0\\3&4&0\\0&0&4\end{vmatrix}+2\cdot(-1)^{1+4}\begin{vmatrix}0&1&2\\0&3&4\\3&0&0\end{vmatrix}$$
第一个：$=4\begin{vmatrix}1&2\\3&4\end{vmatrix}=4(4-6)=-8$；
第二个按第三行展开：$=3\cdot(-1)^{3+1}\begin{vmatrix}1&2\\3&4\end{vmatrix}=3(-2)=-6$．
故 $D=(-8)+2\cdot(-1)\cdot(-6)=-8+12=4$．`
        }
      ]
    },
    {
      name: '三、计算题',
      note: '本大题共 8 小题，每小题 8 分，共 64 分．',
      items: [
        {
          no: 15,
          stem: String.raw`求极限 $\lim\limits_{x\to\infty}x^{2}\left(\arctan x^{2}-\dfrac{\pi}{2}\right)$．`,
          answer: String.raw`$-1$`,
          solution: String.raw`令 $u=x^{2}$，$x\to\infty$ 时 $u\to+\infty$，于是原式 $=\lim\limits_{u\to+\infty}u\left(\arctan u-\dfrac{\pi}{2}\right)$．
利用恒等式 $\arctan u+\arctan\dfrac1u=\dfrac{\pi}{2}\ (u>0)$：
$$\arctan u-\frac{\pi}{2}=-\arctan\frac1u$$
故原式 $=\lim\limits_{u\to+\infty}-u\arctan\dfrac{1}{u}=-1$（因 $u\arctan\dfrac1u\to 1$）．`
        },
        {
          no: 16,
          stem: String.raw`求不定积分 $\displaystyle\int\frac{\sqrt{x+2}-1}{(x+3)\sqrt{x+2}}\,\mathrm{d}x$．`,
          answer: String.raw`$\ln(x+3)-2\arctan\sqrt{x+2}+C$`,
          solution: String.raw`令 $u=\sqrt{x+2}$，则 $x=u^{2}-2$，$\mathrm{d}x=2u\,\mathrm{d}u$，$x+3=u^{2}+1$：
$$\int\frac{u-1}{(u^{2}+1)u}\cdot 2u\,\mathrm{d}u=2\int\frac{u-1}{u^{2}+1}\,\mathrm{d}u=2\int\frac{u}{u^{2}+1}\mathrm{d}u-2\int\frac{\mathrm{d}u}{u^{2}+1}$$
$$=\ln(u^{2}+1)-2\arctan u+C=\ln(x+3)-2\arctan\sqrt{x+2}+C$$`
        },
        {
          no: 17,
          stem: String.raw`计算定积分 $\displaystyle\int_{0}^{1}\frac{x}{x+1}\sqrt{1-x^{2}}\,\mathrm{d}x$．`,
          answer: String.raw`$1-\dfrac{\pi}{4}$`,
          solution: String.raw`令 $x=\sin t$，$\mathrm{d}x=\cos t\,\mathrm{d}t$，$x:0\to 1$ 对应 $t:0\to\dfrac{\pi}{2}$：
$$\int_{0}^{\pi/2}\frac{\sin t}{1+\sin t}\cdot\cos t\cdot\cos t\,\mathrm{d}t=\int_{0}^{\pi/2}\frac{\sin t\cos^{2}t}{1+\sin t}\,\mathrm{d}t$$
用 $1-\sin^{2}t=\cos^{2}t$ 化简：$\dfrac{\sin t}{1+\sin t}=\dfrac{\sin t(1-\sin t)}{\cos^{2}t}$，故被积函数 $=\sin t-\sin^{2}t$．
$$\int_{0}^{\pi/2}\left(\sin t-\sin^{2}t\right)\mathrm{d}t=1-\frac{\pi}{4}$$
（$\int_{0}^{\pi/2}\sin t\,\mathrm{d}t=1$，$\int_{0}^{\pi/2}\sin^{2}t\,\mathrm{d}t=\dfrac{\pi}{4}$．）`
        },
        {
          no: 18,
          stem: String.raw`已知 $y=e^{3x}$，$y=e^{x}+e^{3x}$，$y=e^{2x}+e^{3x}$ 是某二阶常系数非齐次线性微分方程的三个特解，求该微分方程．`,
          answer: String.raw`$y''-3y'+2y=2e^{3x}$`,
          solution: String.raw`二阶非齐次方程的三个特解，两两之差是对应齐次方程的解：
$$y_{2}-y_{1}=e^{x},\qquad y_{3}-y_{1}=e^{2x}$$
故齐次方程有特征根 $r_{1}=1,\ r_{2}=2$，特征方程 $(r-1)(r-2)=0$，即 $r^{2}-3r+2=0$．
所以方程形如 $y''-3y'+2y=f(x)$．把 $y_{1}=e^{3x}$ 代入左边：
$$9e^{3x}-9e^{3x}+2e^{3x}=2e^{3x}$$
故所求方程为 $y''-3y'+2y=2e^{3x}$．
（代 $y_{2}$、$y_{3}$ 验证同样得到 $2e^{3x}$，一致．）`
        },
        {
          no: 19,
          stem: String.raw`设 $z=z(x,y)$ 是由方程 $\arctan(x+2y+3z)-xyz=0$ 所确定的函数，求全微分 $\left.\mathrm{d}z\right|_{(0,0)}$．`,
          answer: String.raw`$\left.\mathrm{d}z\right|_{(0,0)}=-\dfrac{1}{3}\mathrm{d}x-\dfrac{2}{3}\mathrm{d}y$`,
          solution: String.raw`$x=y=0$ 时 $\arctan(3z)=0$，得 $z=0$．
令 $F=\arctan(x+2y+3z)-xyz$，在 $(0,0,0)$ 处：
$$F_{x}=\frac{1}{1+(x+2y+3z)^{2}}-yz=1,\quad F_{y}=\frac{2}{1+(x+2y+3z)^{2}}-xz=2,\quad F_{z}=\frac{3}{1+(x+2y+3z)^{2}}-xy=3$$
$$z_{x}=-\frac{F_x}{F_z}=-\frac13,\qquad z_{y}=-\frac{F_y}{F_z}=-\frac23$$
故 $\mathrm{d}z=-\dfrac13\mathrm{d}x-\dfrac23\mathrm{d}y$．`
        },
        {
          no: 20,
          stem: String.raw`计算二次积分 $\displaystyle\int_{0}^{1}\mathrm{d}x\int_{x}^{1}\frac{\cos y-1}{y}\,\mathrm{d}y$．`,
          answer: String.raw`$\sin 1-1$`,
          solution: String.raw`原积分区域 $D=\{(x,y)\mid 0\le x\le 1,\ x\le y\le 1\}$，即 $y$ 型区域 $0\le y\le 1,\ 0\le x\le y$．
交换积分次序：
$$\int_{0}^{1}\mathrm{d}y\int_{0}^{y}\frac{\cos y-1}{y}\mathrm{d}x=\int_{0}^{1}\frac{\cos y-1}{y}\cdot y\,\mathrm{d}y=\int_{0}^{1}(\cos y-1)\mathrm{d}y$$
$$=\left[\sin y-y\right]_{0}^{1}=\sin 1-1$$
注意：内层对 $x$ 积分时 $\dfrac{\cos y-1}{y}$ 是常数，交换后 $y$ 正好被约掉，这是本题设计的关键．若硬按原次序积分，$\dfrac{\cos y}{y}$ 无初等原函数．`
        },
        {
          no: 21,
          stem: String.raw`设 $A=\begin{pmatrix}1&1\\ 1&2\end{pmatrix}$，$B=\begin{pmatrix}1&1&1\\ 0&1&1\\ 0&0&1\end{pmatrix}$，$C=\begin{pmatrix}1&3&4\\ 1&4&5\end{pmatrix}$，求矩阵 $X$，使 $AXB=C$．`,
          answer: String.raw`$X=\begin{pmatrix}1&1&1\\ 0&1&0\end{pmatrix}$`,
          solution: String.raw`$|A|=1\ne 0$，$|B|=1\ne 0$，都不可逆的担心不存在，$X=A^{-1}CB^{-1}$．
$$A^{-1}=\begin{pmatrix}2&-1\\ -1&1\end{pmatrix},\qquad B^{-1}=\begin{pmatrix}1&-1&0\\ 0&1&-1\\ 0&0&1\end{pmatrix}$$
先算
$$A^{-1}C=\begin{pmatrix}2&-1\\ -1&1\end{pmatrix}\begin{pmatrix}1&3&4\\ 1&4&5\end{pmatrix}=\begin{pmatrix}1&2&3\\ 0&1&1\end{pmatrix}$$
再右乘 $B^{-1}$：
$$X=\begin{pmatrix}1&2&3\\ 0&1&1\end{pmatrix}\begin{pmatrix}1&-1&0\\ 0&1&-1\\ 0&0&1\end{pmatrix}=\begin{pmatrix}1&1&1\\ 0&1&0\end{pmatrix}$$
验算：$AX=\begin{pmatrix}1&2&1\\ 1&3&1\end{pmatrix}$，$(AX)B=\begin{pmatrix}1&3&4\\1&4&5\end{pmatrix}=C$，成立．`
        },
        {
          no: 22,
          stem: String.raw`求方程组 $\begin{cases}x_{1}+x_{2}-2x_{3}=5\\ 2x_{1}+x_{2}-x_{3}+x_{4}=7\\ x_{1}+2x_{2}-5x_{3}-x_{4}=8\end{cases}$ 的通解．`,
          answer: String.raw`$x=s(-1,3,1,0)^{T}+t(-1,1,0,1)^{T}+(2,3,0,0)^{T}$，$s,t$ 为任意常数`,
          solution: String.raw`对增广矩阵作初等行变换：
$$\left(\begin{array}{cccc|c}1&1&-2&0&5\\2&1&-1&1&7\\1&2&-5&-1&8\end{array}\right)\xrightarrow{\substack{r_2-2r_1\\ r_3-r_1}}\left(\begin{array}{cccc|c}1&1&-2&0&5\\0&-1&3&1&-3\\0&1&-3&-1&3\end{array}\right)$$
$$\xrightarrow{r_3+r_2}\left(\begin{array}{cccc|c}1&1&-2&0&5\\0&-1&3&1&-3\\0&0&0&0&0\end{array}\right)\xrightarrow{r_1+r_2}\left(\begin{array}{cccc|c}1&0&1&1&2\\0&-1&3&1&-3\\0&0&0&0&0\end{array}\right)$$
即 $x_{1}=2-x_{3}-x_{4}$，$x_{2}=3+3x_{3}+x_{4}$，$x_{3},x_{4}$ 自由．
取 $x_{3}=x_{4}=0$ 得特解 $(2,3,0,0)^{T}$；
取 $(x_{3},x_{4})=(1,0)$ 得 $(-1,3,1,0)^{T}$，取 $(0,1)$ 得 $(-1,1,0,1)^{T}$．
通解 $x=s(-1,3,1,0)^{T}+t(-1,1,0,1)^{T}+(2,3,0,0)^{T}$．`
        }
      ]
    },
    {
      name: '四、证明题',
      note: '本题 10 分．',
      items: [
        {
          no: 23,
          stem: String.raw`设函数 $f(x)$ 在闭区间 $[0,1]$ 上连续，在开区间 $(0,1)$ 内可导，且 $f(0)=1$，$f(1)=0$，证明：
（1）在开区间 $(0,1)$ 内至少存在一点 $\eta$，使得 $f(\eta)=\eta$；
（2）在开区间 $(0,1)$ 内至少存在一点 $\xi$，使得 $\xi f'(\xi)+f(\xi)=2\xi$．`,
          answer: '见解析',
          solution: String.raw`（1）令 $g(x)=f(x)-x$，则 $g$ 在 $[0,1]$ 上连续，且
$$g(0)=f(0)-0=1>0,\qquad g(1)=f(1)-1=-1<0$$
由零点定理，存在 $\eta\in(0,1)$ 使 $g(\eta)=0$，即 $f(\eta)=\eta$．
（2）令 $F(x)=xf(x)-x^{2}$，则 $F$ 在 $[0,1]$ 上连续、$(0,1)$ 内可导，且
$$F'(x)=xf'(x)+f(x)-2x$$
—— 正是要证为零的式子．
由（1）知 $F(0)=0$ 且 $F(\eta)=\eta f(\eta)-\eta^{2}=\eta\cdot\eta-\eta^{2}=0$（用了 $f(\eta)=\eta$）．
在 $[0,\eta]$ 上对 $F$ 用罗尔定理，存在 $\xi\in(0,\eta)\subset(0,1)$ 使 $F'(\xi)=0$，
即 $\xi f'(\xi)+f(\xi)=2\xi$．证毕．`
        }
      ]
    },
    {
      name: '五、综合题',
      note: '本大题共 2 小题，每小题 10 分，共 20 分．',
      items: [
        {
          no: 24,
          stem: String.raw`设函数 $f(x)$ 满足 $f'(x)-f(x)=e^{x}(2x-4)$，且 $f(0)=5$，求：
（1）函数 $f(x)$ 的解析式；
（2）曲线 $y=f(x)$ 的凹凸区间与拐点．`,
          answer: String.raw`（1）$f(x)=e^{x}(x^{2}-4x+5)$；（2）凹区间 $(-\infty,-1)$、$(1,+\infty)$，凸区间 $(-1,1)$，拐点 $\left(-1,\dfrac{10}{e}\right)$、$(1,2e)$`,
          solution: String.raw`（1）一阶线性方程，积分因子 $e^{\int(-1)\mathrm{d}x}=e^{-x}$，两边乘以 $e^{-x}$：
$$\left(f(x)e^{-x}\right)'=2x-4\ \Longrightarrow\ f(x)e^{-x}=x^{2}-4x+C$$
$$f(x)=e^{x}(x^{2}-4x+C)$$
由 $f(0)=C=5$，故 $f(x)=e^{x}(x^{2}-4x+5)$．
（2）$f'(x)=e^{x}(x^{2}-4x+5)+e^{x}(2x-4)=e^{x}(x^{2}-2x+1)=e^{x}(x-1)^{2}$，
$$f''(x)=e^{x}(x-1)^{2}+2e^{x}(x-1)=e^{x}(x-1)(x+1)$$
$f''(x)=0$ 得 $x=\pm 1$；$e^{x}>0$，故 $f''$ 的符号由 $(x-1)(x+1)$ 决定：
$x<-1$ 或 $x>1$ 时 $f''>0$，曲线为凹；
$-1<x<1$ 时 $f''<0$，曲线为凸．
$f(-1)=e^{-1}(1+4+5)=\dfrac{10}{e}$，$f(1)=e(1-4+5)=2e$，
拐点为 $\left(-1,\dfrac{10}{e}\right)$ 与 $(1,2e)$．`
        },
        {
          no: 25,
          stem: String.raw`设连续函数 $f(x)$ 在区间 $[1,+\infty)$ 上单调增加，且 $f(1)=0$，曲线 $y=f(x)$ 与直线 $x=t\ (t>1)$ 及 $x$ 轴所围成的曲边三角形记为 $D_{t}$，已知 $D_{t}$ 的面积为 $t\ln t-t+1$，求当 $t=e$ 时，$D_{t}$ 绕 $x$ 轴旋转一周所形成的旋转体的体积．`,
          answer: String.raw`$\pi(e-2)$`,
          solution: String.raw`由题意 $A(t)=\displaystyle\int_{1}^{t}f(x)\mathrm{d}x=t\ln t-t+1$，两边对 $t$ 求导：
$$f(t)=\ln t+1-1=\ln t$$
（$f(t)=\ln t$ 在 $[1,+\infty)$ 上单调增加且 $f(1)=0$，与题设一致．）
绕 $x$ 轴旋转体积：
$$V=\pi\int_{1}^{e}\left(\ln x\right)^{2}\mathrm{d}x$$
分部积分两次可得 $\displaystyle\int(\ln x)^{2}\mathrm{d}x=x(\ln x)^{2}-2x\ln x+2x+C$，故
$$V=\pi\left[x(\ln x)^{2}-2x\ln x+2x\right]_{1}^{e}=\pi\left[(e-2e+2e)-(0-0+2)\right]=\pi(e-2)$$`
        }
      ]
    }
  ]
}
