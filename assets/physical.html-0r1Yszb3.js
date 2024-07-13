import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o,c as e,b as r,f as c,d as s,a as l,e as a}from"./app-KXX3jVXZ.js";const p={},m=s("p",null,[s("strong",null,"物理层是计算机网络体系结构中的底层层级，位于网络模型的最底部，它并非指具体的硬件设备，而是涉及数据传输的实际介质和信号传输的方式，是由实物所承载的。")],-1),g=l('<h1 id="计算机网络-物理层" tabindex="-1"><a class="header-anchor" href="#计算机网络-物理层" aria-hidden="true">#</a> 计算机网络-物理层</h1><h2 id="一、简介" tabindex="-1"><a class="header-anchor" href="#一、简介" aria-hidden="true">#</a> 一、简介</h2><blockquote><p><strong>物理层</strong>：</p></blockquote><ul><li>物理层是计算机网络体系结构中的底层层级，位于网络模型的最底部。</li><li>物理层并非指具体的硬件设备，而是涉及数据传输的实际介质和信号传输的方式，是由实物所承载的，所以作比喻的话，公路、汽车和飞机等承载货物（数据）的交通工具，就是物理层的象征。它包括以下几个方面 <ul><li><strong>传输介质</strong>：涉及传输数据所使用的介质，例如铜线、光纤、无线电波等。</li><li><strong>数据传输方式</strong>：包括串行传输（一位接一位地传输）和并行传输（多位同时传输）等不同的数据传输方式。</li><li><strong>数据编码</strong>：将数字数据转换成模拟信号或数字信号的过程，以便在传输介质上传输。这包括将数字信号转换成适合在传输媒介上传输的模拟信号或数字信号的过程。</li><li><strong>数据传输速率</strong>：确定数据传输的速率和时序，例如比特率（数据传输速率）和带宽（传输媒体的能力）等。</li></ul></li><li><strong>总结</strong>：考虑的是<strong>怎样才能在连接各种计算机的传输媒体上传输数据比特流</strong>。</li></ul><blockquote><p><strong>物理层的特点/特性</strong>：</p></blockquote><ul><li><strong>机械特性</strong>：指明接口所用接线器的<strong>形状</strong>和<strong>尺寸</strong>、<strong>引脚数目</strong>和<strong>排列</strong>、<strong>固定</strong>和<strong>锁定</strong>装置</li><li><strong>电气特性</strong>：指明在接口电缆的各条线上出现的<strong>电压范围</strong></li><li><strong>功能特性</strong>：指明某条线上出现的某一电平的<strong>电压表示何种意义</strong></li><li><strong>过程特性</strong>：指明对于不同功能的各种可能<strong>事件的出现顺序</strong></li></ul><p>四大特性包括了物理层相关内容的规范和定义，确保数据能够在物理层上以正确的方式进行传输</p><h2 id="二、基本任务" tabindex="-1"><a class="header-anchor" href="#二、基本任务" aria-hidden="true">#</a> 二、基本任务</h2><h3 id="_1、任务" tabindex="-1"><a class="header-anchor" href="#_1、任务" aria-hidden="true">#</a> 1、任务</h3><blockquote><p>根据物理层在体系结构中的功能，划分为具体的任务如下：</p></blockquote><ol><li><strong>比特传输</strong>：通过连接传输媒体在不同计算机上传输数据比特流(传送0和1)，进行双方的通信</li><li><strong>数据编码和解码</strong>： <ul><li>将数字数据转换成模拟信号或数字信号的过程，以便在传输介质上传输。</li><li>接收端对传输过来的信号进行解码，还原成数字数据。</li></ul></li><li><strong>传输介质管理</strong>：管理和利用各种传输介质，包括铜线、光纤、无线电波等，确保数据能够在介质中有效传输。</li><li><strong>信号的传输方式管理</strong>：管理不同的信号传输方式，例如串行传输和并行传输，以及调制技术的选择和应用。</li><li>传输速率控制：确定和控制数据传输的速率，包括比特率和带宽，以满足通信双方的需求和传输介质的限制。</li><li>物理层标准与协议：制定和遵循物理层标准和协议，确保不同设备之间的互操作性和兼容性，例如以太网、Wi-Fi等。</li></ol><h3 id="_2、传输媒体" tabindex="-1"><a class="header-anchor" href="#_2、传输媒体" aria-hidden="true">#</a> 2、传输媒体</h3><p>物理层的传输媒体/介质分为导引型和非导引型传输媒体。</p><blockquote><p><strong>具体图例</strong>：</p></blockquote>',14),h=l('<hr><blockquote><p>导引型传输媒体：有摸得到的实物进行传导信号的方式</p></blockquote><ul><li><strong>同轴电缆</strong>：电缆各层都是同轴心的，因此称同轴电缆 -（同轴电缆价格较贵且布线不够灵活和方便） <ol><li>基带同轴电缆(50Ω )：数字传输，过去用于局域网</li><li>宽带同轴电缆(75Ω)：模拟传输，目前主要用于有线电视</li></ol></li><li><strong>双绞线电缆</strong>：把两根互相绝缘的铜导线并排放在一起，然后按照一定规则绞合起来就构成了双绞线，这是一种古老且常用的传输媒体 <ol><li><strong>无屏蔽</strong>双绞线<code>UTP</code>电缆：①抵御部分来自外界的电磁波干扰 ②减少相邻导线的电磁干扰</li><li><strong>屏蔽</strong>双绞线<code>STP</code>电缆，其与<code>UTP</code>相比增加了金属丝编织的屏蔽层，提高了抗电磁干扰能力</li></ol></li><li><strong>光纤/光缆</strong>：通过光的反射进行传播，光纤很细，因此必须将其做成结实的光缆。一根光缆少则一根光纤，多则可包括数百根</li></ul><hr><blockquote><p>非导引型传输媒体：传导信号的东西摸不到</p></blockquote><ul><li><strong>无线电波</strong>：低频和中频频段用地面波传播；高频和甚高频靠电离层(地球上方<code>100~500</code>千米高空的带电离子层)反射</li><li><strong>微波</strong>：微波会穿透电离层进入宇宙，因此其不能通过电离层反射到很远的地方 <ul><li>地面微波接力通信：微波是<strong>直线传播</strong>的，而地球表面是个曲面，因此传播距离受到限制，一般只有<code>50KM</code>左右；如果采用<code>100</code>米高的天线塔，则传播距离可增大到<code>100</code>公里。<br> 为实现远距离通信，必须在一个微波通信信道的两个终端之间建立若干个中继站，<strong>中继站把前一阵送来的信号经过放大后再发送到下一站</strong></li></ul></li><li><strong>红外线</strong>：点对点无线传输、直线传播，<strong>中间不能有障碍物</strong>，传输距离短、传输速率低(<code>4Mb/s~16Mb/s</code>)</li><li>可见光：即光源作为信号源，前景好，暂时未被大范围应用</li></ul><h3 id="_3、传输方式" tabindex="-1"><a class="header-anchor" href="#_3、传输方式" aria-hidden="true">#</a> 3、传输方式</h3><h4 id="_1-串行传输" tabindex="-1"><a class="header-anchor" href="#_1-串行传输" aria-hidden="true">#</a> （1）串行传输</h4><ul><li>是指数据是<strong>1个比特1个比特依次发送</strong></li><li>发送端与接收端之间只用1条数据传输线即可（数据在传输线路上是串行传输）。</li><li>如下图：每次发送一个bit，每个bit依次发送</li></ul><figure><img src="https://cloud.greennut.icu/blog/network/chuanxing.png" alt="串行传输" tabindex="0" loading="lazy"><figcaption>串行传输</figcaption></figure><h4 id="_2-并行传输" tabindex="-1"><a class="header-anchor" href="#_2-并行传输" aria-hidden="true">#</a> （2）并行传输</h4><ul><li>是指<strong>一次发送n个比特而不是一个比特</strong></li><li>在发送端和接收端之间要有n条传输线路（一般使用在计算机内部【如CPU和内存】数据传输方式是并行传输）。</li><li>如下图：每次发送一个/n个字符，及每次发送n个比特</li></ul><figure><img src="https://cloud.greennut.icu/blog/network/bingxing.png" alt="并行传输" tabindex="0" loading="lazy"><figcaption>并行传输</figcaption></figure><h3 id="_4、传输模式" tabindex="-1"><a class="header-anchor" href="#_4、传输模式" aria-hidden="true">#</a> 4、传输模式</h3><blockquote><p><strong>串行传输存在的问题</strong>：</p></blockquote><p>串行传输接收端存在一个<strong>字符同步的问题</strong>：<strong>如何从串行数据比特流中正确地划分出发送的一个个字符</strong>。</p><ul><li><p>因为网络设备间大多数使用的是串行传输方式，所以在串行数据通信中数据的同步问题非常重要。</p></li><li><p><strong>发送端一位一位地把信息通过介质发往接收端，接收端必须识别信息的开始和结束，而且必须知道每一位的持续时间，只有这样，接收端才能从传输线路上正确地取出被传送的数据。</strong></p></li><li><p><strong>根据实现字符同步的方式不同</strong>：<strong>同步传输</strong>、<strong>异步传输</strong></p></li></ul><h4 id="_1-异步传输" tabindex="-1"><a class="header-anchor" href="#_1-异步传输" aria-hidden="true">#</a> （1）异步传输</h4><blockquote><p>异步传输：是指数据的传输不需要发送端和接收端之间保持严格的时钟同步</p></blockquote><ul><li>通信双方<strong>没有相同的时钟参考</strong>（也就是发送端和接收端<strong>不同时开始工作</strong>），但双方在数据<strong>传输速率上是同步的</strong>。即指每个字符之间是异步的，但一个字符内的每一位还是同步的。 <ul><li>异步传输<strong>以字符为独立的传输单位</strong>，字节间的时间间隔不是固定的。</li><li><strong>每个数据帧（每次传输的内容）都包含了足够的控制信息来确定数据的起始和结束</strong><ul><li>在发送每一字符代码的前面均加上一个“<strong>起始位</strong>”信号，用以标记一个字符的<strong>开始</strong>；</li><li>在一个字符代码的最后加上一个“<strong>停止位</strong>”信号，用以标记一个字符的<strong>结束</strong>。</li></ul></li></ul></li></ul><hr><h4 id="_2-同步传输" tabindex="-1"><a class="header-anchor" href="#_2-同步传输" aria-hidden="true">#</a> （2）同步传输</h4><blockquote><p>同步传输：同步传输是指数据的传输是在发送端和接收端之间保持时钟同步的情况下进行的。</p></blockquote><ul><li>通信双方 - 发送端和接收端通过共享一个时钟信号来保持同步。</li><li>数据块以稳定的比特流形式传输，字节之间没有间隔。</li><li>接收端在每个比特信号的中间时刻进行检测，以判别接收到的是比特0还是1。</li><li>为保持同步，需要采取方法使双方的<strong>时钟保持同步</strong>，可以采取外同步或内同步的方式。、 <ul><li>外同步：在收发双方之间加一条单独的时钟信号线</li><li>内同步：发送端将时钟同步信号编码到发送数据中一起传输(如曼彻斯特编码)</li></ul></li></ul><h3 id="_5、数据通信方式" tabindex="-1"><a class="header-anchor" href="#_5、数据通信方式" aria-hidden="true">#</a> 5、数据通信方式</h3><blockquote><p>单工/半双工/全双工：</p></blockquote><ul><li>单工通信：通信双方只有一个数据传输方向(无线电广播)</li><li>半双工通信：通信双方可以相互传输数据，但不能同时进行(对讲机)</li><li>全双工通信：通信双方可以同时发送和接收消息(电话)单工需要一条信道；其他的需要两条(一个方向一条)</li></ul><figure><img src="https://cloud.greennut.icu/blog/network/txfs.png" alt="数据通信方式" tabindex="0" loading="lazy"><figcaption>数据通信方式</figcaption></figure><h3 id="_6、编码" tabindex="-1"><a class="header-anchor" href="#_6、编码" aria-hidden="true">#</a> 6、编码</h3><blockquote><p><strong>什么是编码</strong>：</p></blockquote><ul><li>编码是将数字信号转换为另一种形式，以便在物理介质上传输。它通常是将数字比特序列转换为模拟信号或另一种数字信号，以适应特定的传输介质。 <ul><li>消息：包括文字、图片、音频和视频</li><li>数据：是运送消息的实体，计算机中的网卡将比特1和0变换成相应电信号发送到网线，即信号。</li><li>信号：是数据的电磁表现，由信源(网卡)发出的原始电信号称为基带信号，信号通过信道传输 <ul><li>数字基带信号：CPU和内存传输的信号</li><li>模拟基带信号：麦克风收到声音后转变的电信号 <ul><li>码元：构成信号的一种波形</li></ul></li></ul></li><li>总结：物理层传输的比特流0/1，但是实际传输还是通过信号传输，信号可以为电/光，编码则是进行转换，将数据通过这种方式的编码转换为0/1.</li></ul></li></ul><hr><blockquote><p>编码方式：不归零编码、归零编码、曼彻斯特编码、差分曼彻斯特编码</p></blockquote><ul><li>不归零编码：正电平代表比特1，负电平代表比特0。在整个码元时间内，电平不会出现零电平。 <ul><li>问题：这种编码方式如何区分连续几个相同电平呢？ <ul><li>通过发送方发送和接收方接收严格同步，并使用额外一根传输线来传输时钟信号，进行同步。</li></ul></li></ul></li><li>归零编码：每个码元传输结束后信号都要&quot;归零&quot;，所以接收方只要在信号归零后进行采样即可，不需要单独的时钟信号。 <ul><li>问题：归零编码把时钟信号用&quot;归零&quot;方式编码在了数据之内，这称为&quot;自同步&quot;信号 <ul><li>归零编码中的大部分数据带宽都用来传输&quot;归零&quot;而浪费掉了(编码效率低)</li></ul></li></ul></li><li>曼彻斯特编码：码元的中间时刻既表示时钟，又表示数据。根据正负跳变来区分比特 <ul><li>问题：具体如何根据跳变实现同步？ <ul><li>第一次数据跳变的时间记录下来【即半个码元的时间】，此后每过一个码元的时间就进行检测，根据跳变方向决定数据为0还是1。</li></ul></li></ul></li><li>差分曼彻斯特编码：跳变仅表示时钟 、码元开始处电平是否发生变化表示数据，以两码元的临界点区分是否发生变化。 <ul><li>比曼彻斯特变化少，更适合较高的传输速率</li></ul></li></ul><h3 id="_7、调制" tabindex="-1"><a class="header-anchor" href="#_7、调制" aria-hidden="true">#</a> 7、调制</h3><blockquote><p><strong>什么是调制</strong>：</p></blockquote><p>如果需要将信号在模拟信道传输，则需要使用调制</p><ul><li>调制：是指将数字信号转换为模拟信号，以便在传输介质上传输。调制涉及改变信号的某些特性（如频率、相位或幅度）以适应特定的传输介质 <ul><li>基本调制：一个码元对应一个比特，调幅（AM）、调频（FM）、调相（PM）</li><li>混合调制：一个码元对应多个比特，QAM-16（可以调制出<code>16</code>种码元(波形)）</li></ul></li></ul><hr><blockquote><p>编码和调制区别：</p></blockquote><p>在电话通信中，涉及到了<strong>编码</strong>和<strong>调制</strong>两个过程。</p><ol><li><p><strong>编码</strong>：</p><ul><li>当你说话时，声音被转换成模拟的声波信号。这是一个模拟信号，表示了声音的波形。</li></ul></li><li><p><strong>调制</strong>：</p><ul><li>模拟信号需要在电话线路或无线传输中传递。电话系统会将模拟信号转化为适合在电缆、光纤或空气中传输的信号，这就是调制的过程。通常，电话系统会使用调频调制（FM）或者其他调制技术将模拟信号转化为适合传输的信号。</li></ul></li><li><p><strong>传输</strong>：</p><ul><li>经过调制后的信号被发送到电话线路或者无线信道中。</li></ul></li><li><p><strong>解调</strong>：</p><ul><li>在接收端，接收到的信号需要被解调回原始的模拟信号。这是电话系统中的解调器（Modem）所做的工作。</li></ul></li><li><p><strong>解码</strong>：</p><ul><li>解调后的信号被转换回原始的声音信号。</li></ul></li></ol><p>这样，双方之间的通话就能实现，你们可以听到对方的声音。整个过程中，编码将声音转换成模拟信号，调制使其适合传输，解调和解码则将其还原成可听的声音。</p><h4 id="三、拓展" tabindex="-1"><a class="header-anchor" href="#三、拓展" aria-hidden="true">#</a> 三、拓展</h4><blockquote><p>信号的极限容量：计算信道传输的速率（极限、实际）</p></blockquote><ul><li>影响因素：码元传输速率（频率带宽）、信号传输距离、噪声干扰、传输媒体质量</li></ul><hr><blockquote><p>奈式准则和香农公式：</p></blockquote>',48),u=s("ul",null,[s("li",null,[s("strong",null,"混合调制"),a("：码元和比特的关系"),s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"每个码元可携带的比特数量(波特率)= "),s("mi",null,"l"),s("mi",null,"o"),s("msub",null,[s("mi",null,"g"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mtext",null,"码元数量"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," \\text{每个码元可携带的比特数量(波特率)= } log_2(\\text{码元数量}) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"每个码元可携带的比特数量"),s("span",{class:"mord"},"("),s("span",{class:"mord cjk_fallback"},"波特率"),s("span",{class:"mord"},")= ")]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"码元数量")]),s("span",{class:"mclose"},")")])])])])])])],-1),d=s("p",null,[s("strong",null,"不管采用何种调制技术，对于解题，我们只关心可以调制出不同基本波形（码元）的数量"),a("，设为X；则每个码元可携带的比特数量为log2X;")],-1),b=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"数据传输速率= 码元传输速率 * 每个码元可携带的比特数量")]),s("annotation",{encoding:"application/x-tex"}," \\text{数据传输速率= 码元传输速率 * 每个码元可携带的比特数量} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.75em"}}),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"数据传输速率"),s("span",{class:"mord"},"= "),s("span",{class:"mord cjk_fallback"},"码元传输速率"),s("span",{class:"mord"}," * "),s("span",{class:"mord cjk_fallback"},"每个码元可携带的比特数量")])])])])])],-1),k=s("hr",null,null,-1),x=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"数据传输速率=码元传输速率*"),s("mn",null,"1"),s("mi",null,"o"),s("msub",null,[s("mi",null,"g"),s("mn",null,"2")]),s("mi",null,"X")]),s("annotation",{encoding:"application/x-tex"}," \\text{数据传输速率=码元传输速率*} 1og_2X ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9444em","vertical-align":"-0.1944em"}}),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"数据传输速率"),s("span",{class:"mord"},"="),s("span",{class:"mord cjk_fallback"},"码元传输速率"),s("span",{class:"mord"},"*")]),s("span",{class:"mord"},"1"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"X")])])])])],-1),_=s("hr",null,null,-1),y=s("p",null,"奈式准则：",-1),f=s("ul",null,[s("li",null,[s("strong",null,"理想低通道的最高码元传输速率 = 2W Baud = 2W（码元/秒）")]),s("li",null,[s("strong",null,"理想带通道的最高码元传输速率 = W Baud = W（码元/秒）")])],-1),q=s("p",null,"香农公式：",-1),v=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"c"),s("mo",null,"="),s("mi",null,"W"),s("mo",null,"∗"),s("mi",null,"l"),s("mi",null,"o"),s("msub",null,[s("mi",null,"g"),s("mn",null,"2")]),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",null,"+"),s("mi",null,"S"),s("mi",{mathvariant:"normal"},"/"),s("mi",null,"N"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," c = W * log_2(1+S/N) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"c"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.13889em"}},"W"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mord"},"/"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"mclose"},")")])])])])],-1),w=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mtext",null,"信噪比="),s("mn",null,"10"),s("mo",null,"∗"),s("mi",null,"l"),s("mi",null,"o"),s("msub",null,[s("mi",null,"g"),s("mn",null,"10")]),s("mo",{stretchy:"false"},"("),s("mi",null,"S"),s("mi",{mathvariant:"normal"},"/"),s("mi",null,"N"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," \\text{信噪比=}10*log_{10} (S/N) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord text"},[s("span",{class:"mord cjk_fallback"},"信噪比"),s("span",{class:"mord"},"=")]),s("span",{class:"mord"},"10"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"10")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),s("span",{class:"mord"},"/"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"mclose"},")")])])])])],-1),M=l("<hr><blockquote><p>tip1：带通和低通</p></blockquote><p>在通信领域中，术语“理想带通信道”和“理想低通信道”中的“带通”和“低通”是关于信号频谱特性的描述。</p><ol><li><p><strong>理想带通信道（Ideal Bandpass Channel）</strong>：</p><ul><li><p><strong>带通</strong>（Bandpass）：这里的“带通”指的是通道只允许通过一定范围内的频率成分。换句话说，它只允许特定的频率范围通过，而剔除其他频率。</p></li><li><p><strong>理想带通信道</strong>是一个理想化的信道，它只允许特定的频率范围内的信号通过，并且不会引入干扰或失真。这种信道在频域上可以看作一个频率响应在一定范围内是非零的理想信道。</p></li><li><p><strong>应用</strong>：理想带通信道常用于模拟通信系统中，例如调制解调器通信系统。</p></li></ul></li><li><p><strong>理想低通信道（Ideal Lowpass Channel）</strong>：</p><ul><li><p><strong>低通</strong>（Lowpass）：这里的“低通”指的是通道允许低频成分通过，而剔除高频成分。</p></li><li><p><strong>理想低通信道</strong>是一个理想化的信道，它只允许低频信号通过，并在一定频率以上剔除所有的信号成分。</p></li><li><p><strong>应用</strong>：理想低通信道常用于数字通信系统中，例如数字传输系统和数据通信中。</p></li></ul></li></ol><p>总的来说，带通和低通描述了信道允许通过的频率范围。理想带通信道只允许特定频率范围内的信号通过，而理想低通信道只允许低频信号通过。这两种理想信道在实际应用中很难实现，但它们提供了通信系统设计和理论分析的重要基础。</p><blockquote><p>tip2：常见物理层设备</p></blockquote><ul><li>集线器（Hub）：用于将多个计算机连接到局域网上。</li><li>网卡（Network Interface Card）：将计算机与网络物理连接起来。</li><li>中继器（Repeater）：用于加强信号的传输距离。</li><li>调制解调器（Modem）：将数字信号转化为模拟信号，方便在电话线上传输。</li><li>光纤收发器（Optical Transceiver）：用于光纤的信号收发。</li><li>传输介质： <ul><li>物理层还涉及各种传输介质，包括电缆、光纤、无线电波等。这些介质是用来传输信号的通道，不同的介质具有不同的特性和传输速度</li></ul></li></ul>",7);function z(N,L){const t=i("Mermaid");return o(),e("div",null,[m,r(" more "),g,c(t,{id:"mermaid-150",code:"eJxLL0osyOB6smfBi32Tn66a9GTvZAVdXTuFp+v3PN0z9em8bhQZNYWXc+dhleLCrgFs1ISeF3u3PJ+y9fmeNqAJT/t7nu+e93zXfoRIayeQwYXLaLAhz6YvgGh5tnkRSMu+dRDG812Lni6ZBpQCm7z+xfJGoGlcAMJ8g+k="}),h,u,d,b,k,x,_,y,f,q,v,w,M])}const j=n(p,[["render",z],["__file","physical.html.vue"]]);export{j as default};