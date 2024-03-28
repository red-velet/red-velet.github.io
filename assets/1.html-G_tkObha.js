const n=JSON.parse('{"key":"v-2b8e69de","path":"/docs/learning-road/bug/1.html","title":"FastJson、Jackson使用AOP切面进行日志打印异常","lang":"zh-CN","frontmatter":{"shortTitle":"FastJson、Jackson使用AOP切面进行日志打印异常","category":["Bug记录"],"date":"2023-02-09T00:00:00.000Z","isOriginal":true,"star":23},"headers":[{"level":2,"title":"一、概述","slug":"一、概述","link":"#一、概述","children":[{"level":3,"title":"1、问题详情","slug":"_1、问题详情","link":"#_1、问题详情","children":[]},{"level":3,"title":"2、问题原因","slug":"_2、问题原因","link":"#_2、问题原因","children":[]}]},{"level":2,"title":"二、解决","slug":"二、解决","link":"#二、解决","children":[{"level":3,"title":"1、问题定位","slug":"_1、问题定位","link":"#_1、问题定位","children":[]},{"level":3,"title":"2、解决办法","slug":"_2、解决办法","link":"#_2、解决办法","children":[]}]},{"level":2,"title":"3、效果实现","slug":"_3、效果实现","link":"#_3、效果实现","children":[]}],"git":{},"readingTime":{"minutes":2.68,"words":804},"filePathRelative":"docs/learning-road/bug/1.md","localizedDate":"2023年2月9日","excerpt":"<h1> FastJson、Jackson使用AOP切面进行日志打印异常</h1>\\n<h2> 一、概述</h2>\\n<h3> 1、问题详情</h3>\\n<blockquote>\\n<p>使用FastJson、Jackson进行日志打印时分别包如下错误：</p>\\n</blockquote>\\n<p><strong>源码</strong>：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">//fastjon</span>\\nlog<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">info</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"\\\\nRequest Info :{} \\\\n\\"</span>， <span class=\\"token constant\\">JSON</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">toJSONString</span><span class=\\"token punctuation\\">(</span>requestInfo<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">//jackson</span>\\nlog<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">info</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"\\\\nRequest Info :{} \\\\n\\"</span>， <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ObjectMapper</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">writeValueAsString</span><span class=\\"token punctuation\\">(</span>requestInfo<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"red-velet"}}');export{n as data};