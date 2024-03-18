import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as l,a as n,d as s,e}from"./app-yOESM-4p.js";const p={},o=n(`<h2 id="一、前置扫盲" tabindex="-1"><a class="header-anchor" href="#一、前置扫盲" aria-hidden="true">#</a> 一、前置扫盲</h2><h3 id="_1、数据结构分类" tabindex="-1"><a class="header-anchor" href="#_1、数据结构分类" aria-hidden="true">#</a> 1、数据结构分类</h3><h4 id="_1-1-逻辑结构-线性与非线性" tabindex="-1"><a class="header-anchor" href="#_1-1-逻辑结构-线性与非线性" aria-hidden="true">#</a> 1.1 逻辑结构：线性与非线性</h4><blockquote><p>tip：<strong>逻辑结构揭示了数据元素之间的逻辑关系</strong>。</p></blockquote><ul><li><p><strong>线性数据结构</strong>：元素间存在明确的顺序关系。</p><ol><li>数据按照一定顺序排列，其中元素之间存在一个对应关系，使得它们按照线性顺序排列。</li><li>每个元素都有且仅有一个前驱元素和一个后继元素，除了第一个和最后一个元素外。</li><li><strong>代表</strong>：数组、链表、栈、队列、哈希表。</li></ol></li><li><p><strong>非线性数据结构</strong>：元素不是按照序列排列的</p><ul><li>元素之间存在多对多的关系，其组织方式不受固定顺序的限制。</li><li>非线性数据结构中的元素不是按照序列排列的。</li><li><strong>代表</strong>：树、堆、图、哈希表。</li></ul></li></ul><hr><blockquote><p><strong>图例</strong>：</p></blockquote><figure><img src="http://sevencowcloud.chiou.icu/img/datastructure/sjjg.png" alt="常见线性数据结构和非线性数据结构" tabindex="0" loading="lazy"><figcaption>常见线性数据结构和非线性数据结构</figcaption></figure><h4 id="_1-2-物理结构-顺序与链式" tabindex="-1"><a class="header-anchor" href="#_1-2-物理结构-顺序与链式" aria-hidden="true">#</a> 1.2 物理结构：顺序与链式</h4><blockquote><p>tip：<strong>所有数据结构都是基于数组、链表或二者的组合实现的</strong></p></blockquote><ul><li><strong>连续空间存储（顺序）</strong>： <ol><li><strong>特点</strong>：数据元素存储在物理空间上是连续的，通过元素的物理地址和相对位置来访问数据。</li><li>优缺点： <ul><li><strong>优点：</strong> 随机访问速度快，存储效率高。</li><li><strong>缺点：</strong> 插入和删除操作可能涉及大量数据的移动，且需要预先分配连续的内存空间。</li></ul></li><li>代表：<strong>基于数组可实现</strong>：栈、队列、哈希表、树、堆、图、矩阵、张量（维度 ≥3 的数组）等。</li></ol></li><li><strong>分散空间存储（链式）</strong>： <ol><li><strong>特点</strong>：数据元素存储在物理空间上是分散的，通过指针来连接各个元素。</li><li>优缺点： <ul><li><strong>优点：</strong> 插入和删除操作相对容易，不需要连续的内存空间。</li><li><strong>缺点：</strong> 不支持快速的随机访问，需要遍历才能找到特定位置的元素。</li></ul></li><li>代表：<strong>基于链表可实现</strong>：栈、队列、哈希表、树、堆、图等。</li></ol></li></ul><hr><blockquote><p><strong>图例</strong>：</p></blockquote><figure><img src="http://sevencowcloud.chiou.icu/img/datastructure/cunchu.png" alt="顺序存储和分散存储" tabindex="0" loading="lazy"><figcaption>顺序存储和分散存储</figcaption></figure><h3 id="_2、算法效率评估" tabindex="-1"><a class="header-anchor" href="#_2、算法效率评估" aria-hidden="true">#</a> 2、算法效率评估</h3><blockquote><p>tip：算法的效率主要评估的是时间和空间，名词称为-<code>时间复杂度和空间复杂度</code>，但是不是统计具体的算法运行时间和使用空间，<strong>而是统计算法运行时间和使用空间随着数据量变大时的增长趋势，使用大O计数法表示</strong>。</p></blockquote><h4 id="_2-1-时间复杂度" tabindex="-1"><a class="header-anchor" href="#_2-1-时间复杂度" aria-hidden="true">#</a> 2.1 时间复杂度</h4><blockquote><p>例子：下列一段代码，分别使用两种方式统计时间复杂度。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">algorithm</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>  
    a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>  
    a <span class="token operator">=</span> a <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>  
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-1-1-统计具体时间" tabindex="-1"><a class="header-anchor" href="#_2-1-1-统计具体时间" aria-hidden="true">#</a> 2.1.1 统计具体时间</h5><ol><li><strong>确定运行平台</strong>，包括硬件配置、编程语言、系统环境等，这些因素都会影响代码的运行效率。</li><li><strong>评估各种计算操作所需的运行时间</strong>，假如加法操作 <code>+</code> 需要 1 ns ，乘法操作 <code>*</code> 需要 10 ns ，打印操作 <code>print()</code> 需要 5 ns 等。</li><li><strong>统计代码中所有的计算操作</strong>，并将所有操作的执行时间求和，从而得到运行时间。</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 在某运行平台下</span>
<span class="token keyword">void</span> <span class="token function">algorithm</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>  <span class="token comment">// 1 ns</span>
    a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 1 ns</span>
    a <span class="token operator">=</span> a <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>  <span class="token comment">// 10 ns</span>
    <span class="token comment">// 循环 n 次</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 1 ns ，每轮都要执行 i++</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 5 ns</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据以上方法，可以得到算法的运行时间为<code> (6n+12) ns</code> 。</p><div class="hint-container caution"><p class="hint-container-title">统计算法的运行时间既不合理也不现实</p><ol><li>预估时间和运行平台绑定，因为算法需要在各种不同的平台上运行。</li><li>很难获知每种操作的运行时间，这给预估过程带来了极大的难度。</li></ol></div><h5 id="_2-1-2-统计增长趋势" tabindex="-1"><a class="header-anchor" href="#_2-1-2-统计增长趋势" aria-hidden="true">#</a> 2.1.2 统计增长趋势</h5><p><code>“时间增长趋势(是算法运行时间随着数据量变大时的增长趋势)”</code>这个概念比较抽象，我们通过一个例子来加以理解。假设输入数据大小为 <code>n</code> ，给定三个算法 <code>A</code>、<code>B</code> 和 <code>C</code> ：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 算法 A 的时间复杂度：常数阶</span>
<span class="token keyword">void</span> <span class="token function">algorithm_A</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 算法 B 的时间复杂度：线性阶</span>
<span class="token keyword">void</span> <span class="token function">algorithm_B</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 算法 C 的时间复杂度：常数阶</span>
<span class="token keyword">void</span> <span class="token function">algorithm_C</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://sevencowcloud.chiou.icu/img/datastructure/image-20231217002752533.png" alt="A、B、C的时间增长趋势图" tabindex="0" loading="lazy"><figcaption>A、B、C的时间增长趋势图</figcaption></figure><ul><li>算法 <code>A</code> 只有 1 个打印操作，算法运行时间不随着<code> n</code>增大而增长。我们称此算法的时间复杂度为“<strong>常数阶</strong>”。</li><li>算法 <code>B</code> 中的打印操作需要循环 <code>n</code> 次，算法运行时间随着<code> n</code> 增大呈线性增长。此算法的时间复杂度被称为“<strong>线性阶</strong>”。</li><li>算法 <code>C</code> 中的打印操作需要循环 1000000 次，虽然运行时间很长，但它与输入数据大小<code>n</code> 无关。因此 <code>C</code> 的时间复杂度和 <code>A</code> 相同，仍为“<strong>常数阶</strong>”</li></ul><div class="hint-container tip"><p class="hint-container-title">相较于直接统计算法的运行时间，时间复杂度的特点：</p></div><ul><li><strong>时间复杂度能够有效评估算法效率</strong>。例如，算法 <code>B</code> 的运行时间呈线性增长，在 <code>n&gt;1</code> 时比算法 <code>A</code> 更慢，在<code>n&gt;1000000</code>时比算法 <code>C</code> 更慢。事实上，只要输入数据大小 n 足够大，复杂度为“常数阶”的算法一定优于“线性阶”的算法，这正是时间增长趋势的含义。</li><li><strong>时间复杂度的推算方法更简便</strong>。显然，运行平台和计算操作类型都与算法运行时间的增长趋势无关。因此在时间复杂度分析中，我们可以简单地将所有计算操作的执行时间视为相同的“单位时间”，从而将“计算操作运行时间统计”简化为“计算操作数量统计”，这样一来估算难度就大大降低了。</li><li><strong>时间复杂度也存在一定的局限性</strong>。例如，尽管算法 <code>A</code> 和 <code>C</code> 的时间复杂度相同，但实际运行时间差别很大。同样，尽管算法 <code>B</code> 的时间复杂度比 <code>C</code> 高，但在输入数据大小 <code>n</code> 较小时，算法 <code>B</code> 明显优于算法 <code>C</code> 。在这些情况下，我们很难仅凭时间复杂度判断算法效率的高低。当然，尽管存在上述问题，复杂度分析仍然是评判算法效率最有效且常用的方法。</li></ul><hr><blockquote><p><strong>具体计算方式</strong>：使用函数T(n)演变为O(n)表示。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">algorithm</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//每次调用函数执行的次数</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// +1</span>
    a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// +1</span>
    a <span class="token operator">=</span> a <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>  <span class="token comment">// +1</span>
    <span class="token comment">// 循环 n 次</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// +1（每轮都执行 i ++）</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// +1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设算法的操作数量是一个关于输入数据大小 <code>n</code> 的函数，记为<code>T(n)</code>，则以上函数的操作数量为</p>`,35),c=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mn",null,"3"),s("mo",null,"+"),s("mn",null,"2"),s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"}," T(n)=3+2n ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal"},"n")])])])])],-1),i=n(`<p><strong><code>T(n)</code>是一次函数，说明其运行时间的增长趋势是线性的，因此它的时间复杂度是线性阶，我们将线性阶的时间复杂度记为O(n)，这个数学符号称为「大O记号big-O notationJ,表示函数T(n)的「渐近上界asymptotic upper bound」。</strong></p><ul><li>代码的时间复杂度：线性阶时间复杂度</li><li>函数表示：T(n)=3+2n</li><li>线性阶表示：O(3+2n) <ul><li>输入的n不受控制，可以为任意数，而时间复杂度是很难计算准确的，所以统计的为最差情况的时间复杂度。</li><li>假如输入n的数趋近于∞（无穷），那么常数3可以忽略，同理系数2也可以忽略，无穷和2倍无穷不还是无穷吗</li><li>所以最终时间复杂度表示为：O(n)</li></ul></li></ul><hr><blockquote><p>总结：</p></blockquote><p><mark><strong>计数简化技巧：</strong></mark></p><ol><li><strong>忽略T(n) 中的常数项</strong>。因为它们都与 n 无关，所以对时间复杂度不产生影响。</li><li><strong>省略所有系数</strong>。例如，循环 2n 次、5n+1 次等，都可以简化记为 n 次，因为 n前面的系数对时间复杂度没有影响。</li><li><strong>循环嵌套时使用乘法</strong>。总操作数量等于外层循环和内层循环操作数量之积，每一层循环依然可以分别套用第 <code>1.</code> 点和第 <code>2.</code> 点的技巧。</li><li><strong>最差情况判断</strong>：当输入数最差情况为n，趋近于无穷大时，最高阶的项将发挥主导作用，其他项的影响都可以忽略。</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">algorithm</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// +1</span>
    a <span class="token operator">=</span> a <span class="token operator">+</span> n<span class="token punctuation">;</span>  <span class="token comment">// +1</span>
    <span class="token comment">// +5n</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token operator">*</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// +2n</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">*</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//加n+1</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"函数表示："),s("mi",null,"T"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mn",null,"2"),s("mo",null,"+"),s("mn",null,"5"),s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"2"),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mn",null,"2"),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",null,"+"),s("mn",null,"7"),s("mi",null,"n"),s("mo",null,"+"),s("mn",null,"3")]),s("annotation",{encoding:"application/x-tex"}," \\text{函数表示：}T(n)=2+5n+2n(n+1)=2n^2+7n+3 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"函数表示：")]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"T"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"5"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9474em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"7"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"3")])])])])],-1),m=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"当n->"),s("mi",{mathvariant:"normal"},"∞"),s("mtext",null,"，"),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mtext",null,"次方为主导，除去常数、系数、非主导项使用大O计数法表示："),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," \\text{当n->}\\infty\\text{，}n^2\\text{次方为主导，除去常数、系数、非主导项使用大O计数法表示：} O(n^2) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1141em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"当"),s("span",{class:"mord"},"n->")]),s("span",{class:"mord"},"∞"),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"，")]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"次方为主导，除去常数、系数、非主导项使用大"),s("span",{class:"mord"},"O"),s("span",{class:"mord cjk_fallback"},"计数法表示：")]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])])])],-1),u=s("hr",null,null,-1),d=s("blockquote",null,[s("p",null,[s("strong",null,"拓展"),e("：常见大O类型和图例")])],-1),k=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"时间复杂度："),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",null,"<"),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",null,"<"),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",null,"<"),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mi",null,"l"),s("mi",null,"o"),s("mi",null,"g"),s("mi",null,"n"),s("mo",{stretchy:"false"},")"),s("mo",null,"<"),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")"),s("mo",null,"<"),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mn",null,"2"),s("mi",null,"n")]),s("mo",{stretchy:"false"},")"),s("mo",null,"<"),s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},"!"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," \\text{时间复杂度：}O(1) < O(logn)<O(n)<O(nlogn)<O(n^2)<O(2^n)<O(n!) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"时间复杂度：")]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1141em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},"!)")])])])])],-1),g=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"时间复杂度：常数 阶<对数阶<线性阶<线性对数阶<平方阶<指数阶<阶层阶")]),s("annotation",{encoding:"application/x-tex"}," \\text{时间复杂度：常数 阶<对数阶<线性阶<线性对数阶<平方阶<指数阶<阶层阶} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7224em","vertical-align":"-0.0391em"}}),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"时间复杂度：常数"),s("span",{class:"mord"}," "),s("span",{class:"mord cjk_fallback"},"阶"),s("span",{class:"mord"},"<"),s("span",{class:"mord cjk_fallback"},"对数阶"),s("span",{class:"mord"},"<"),s("span",{class:"mord cjk_fallback"},"线性阶"),s("span",{class:"mord"},"<"),s("span",{class:"mord cjk_fallback"},"线性对数阶"),s("span",{class:"mord"},"<"),s("span",{class:"mord cjk_fallback"},"平方阶"),s("span",{class:"mord"},"<"),s("span",{class:"mord cjk_fallback"},"指数阶"),s("span",{class:"mord"},"<"),s("span",{class:"mord cjk_fallback"},"阶层阶")])])])])])],-1),h=n('<figure><img src="http://sevencowcloud.chiou.icu/img/datastructure/time_complexity_common_types-17027436972397.png" alt="常见大O类型和图例" tabindex="0" loading="lazy"><figcaption>常见大O类型和图例</figcaption></figure><ul><li>线性阶的操作数量相对于输入数据大小 n以线性级别增长。线性阶通常出现在单层循环中</li><li>平方阶的操作数量相对于输入数据大小 n 以平方级别增长。平方阶通常出现在嵌套循环中</li><li>生物学的“细胞分裂”是指数阶增长的典型例子：初始状态为 1 个细胞，分裂一轮后变为 2 个，分裂两轮后变为 4 个，以此类推，分裂 n 轮后有 2^n 个细胞，指数阶常出现于递归函数中。</li><li>对数阶反映了“每轮缩减到一半”的情况。设输入数据大小为 n ，由于每轮缩减到一半，因此循环次数是 log2⁡n ，即 2^n 的反函数。 <ul><li><img src="http://sevencowcloud.chiou.icu/img/datastructure/time_complexity_logarithmic-17027443777327.png" alt="time_complexity_logarithmic" tabindex="0" loading="lazy"><figcaption>time_complexity_logarithmic</figcaption></li></ul></li><li>线性对数阶常出现于嵌套循环中</li><li>阶乘阶对应数学上的“全排列”问题。给定 n 个互不重复的元素，求其所有可能的排列方案，方案数量为n!，常用于回溯。</li></ul><h4 id="_2-2-空间复杂度" tabindex="-1"><a class="header-anchor" href="#_2-2-空间复杂度" aria-hidden="true">#</a> 2.2 空间复杂度</h4><blockquote><p>tip：现在很发达了，内存没以前贵，直接跳过此处</p></blockquote><p>「空间复杂度 space complexity」用于衡量算法占用内存空间随着数据量变大时的增长趋势。这个概念与时间复杂度非常类似，只需将“运行时间”替换为“占用内存空间”。</p><p>算法在运行过程中使用的内存空间主要包括以下几种。</p><ul><li><strong>输入空间</strong>：用于存储算法的输入数据。</li><li><strong>暂存空间</strong>：用于存储算法在运行过程中的变量、对象、函数上下文等数据。</li><li><strong>输出空间</strong>：用于存储算法的输出数据。</li></ul><p>一般情况下，空间复杂度的统计范围是“暂存空间”加上“输出空间”。</p><p>暂存空间可以进一步划分为三个部分。</p><ul><li><strong>暂存数据</strong>：用于保存算法运行过程中的各种常量、变量、对象等。</li><li><strong>栈帧空间</strong>：用于保存调用函数的上下文数据。系统在每次调用函数时都会在栈顶部创建一个栈帧，函数返回后，栈帧空间会被释放。</li><li><strong>指令空间</strong>：用于保存编译后的程序指令，在实际统计中通常忽略不计。</li></ul>',10),v=[o,c,i,r,m,u,d,k,g,h];function b(y,f){return t(),l("div",null,v)}const w=a(p,[["render",b],["__file","simple.html.vue"]]);export{w as default};
