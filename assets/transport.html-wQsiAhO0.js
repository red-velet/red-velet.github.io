import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as g,o as u,c,b as d,f as r,w as n,d as l,a as e,e as t}from"./app-lW-6uHYn.js";const p={},h=l("p",null,[l("strong",null,"传输层的主要任务为运行在不同主机上的上层应用进程提供直接的通信服务")],-1),P=e('<h1 id="计算机网络-传输层" tabindex="-1"><a class="header-anchor" href="#计算机网络-传输层" aria-hidden="true">#</a> 计算机网络-传输层</h1><h2 id="一、简介" tabindex="-1"><a class="header-anchor" href="#一、简介" aria-hidden="true">#</a> 一、简介</h2><h3 id="_1、主要任务" tabindex="-1"><a class="header-anchor" href="#_1、主要任务" aria-hidden="true">#</a> 1、主要任务</h3><blockquote><p>传输层的任务是什么？</p></blockquote><p>传输层的主要任务是<mark>与下面的三层一起共同构建进行网络通信所需的线路和数据传输通道，为运行在不同主机上的上层应用进程提供直接的通信服务</mark>，向高层用户屏蔽了下面网络核心的细节（如网络拓扑、所采用的路由选择协议等)，它使应用进程看见的就好像是在两个传输层实体之间有一条端到端的逻辑通信信道。</p><ul><li>根据应用需求的不同，因特网的传输层为应用层提供了两种不同的运输协议，用于解决进程之间基于网络的通信问题 <ul><li><strong>面向连接的TCP、 无连接的UDP</strong></li></ul></li><li>传输层的数据单元是<mark>数据段</mark>，这个名称显然太容易混淆，于是在OSI/RM体系结构的传输层中还是把其中传输的数据单元称为<strong>TPDU</strong>（不过，在TCP/IP体系结构中，<strong>TCP的协议数据单元仍然为<mark>数据段</mark></strong>）。</li></ul><h3 id="_2、为什么需要" tabindex="-1"><a class="header-anchor" href="#_2、为什么需要" aria-hidden="true">#</a> 2、为什么需要</h3><blockquote><p>为什么需要传输层？</p></blockquote><p>因为仅靠网络层把数据传送到目的主机上还是不够的，还必须把它<strong>交给目的主机的应用进程</strong>，下面是详细解答：</p><ul><li><strong>物理层</strong>为数据通信提供<strong>实际的物理线路和通信信道</strong>，这是任何数据通信的基础；</li><li><strong>数据链路层</strong>为<strong>同一网络</strong>中（数据链路层的通信限于同一局域网中）的数据通信提供了<strong>虚拟的通信通道</strong>，可以根据<strong>不同链路类型</strong>对物理层的比特流进行<strong>帧封装和传输</strong>；</li><li>网络层为不同网络间的数据通信提供了<strong>数据包的路由、转发功能</strong>，把数据包<strong>从一个网络中的主机传送到位于另一网络中的目的主机上</strong>，其中需要选择传送的最佳路径。</li></ul><p><strong>既然网络层已把源主机上发出的数据包传送给了目的主机，那么为什么还需要设置一个传输层呢？</strong></p><ul><li>因为两台网络主机间的<strong>真正数据通信主体</strong>不是这两台主机，而是<strong>两台主机中的各种网络应用进程</strong>。因为在同一时刻，两主机间可以进行<strong>多个应用通信</strong>。</li><li>而这里的<strong>应用进程识别</strong>就要依靠<code>传输层</code>了，它就是通过“<strong>端口</strong>”将<strong>不同应用进程进行对应</strong>的。</li></ul><figure><img src="https://cloud.greennut.icu/blog/network/picwork.png" alt="传输层-简单工作流程" tabindex="0" loading="lazy"><figcaption>传输层-简单工作流程</figcaption></figure><ul><li>在传输层内部，完成这项任务的硬件或软件称为<strong>传输实体</strong>（transport entity）。 <ul><li>传输实体可能位于<strong>操作系统的内核</strong>，或者在一个<strong>独立的用户进程</strong>中，或者以一个<strong>链接库</strong>的形式被绑定在具体的网络应用中。</li></ul></li></ul><h3 id="_3、端到端的服务" tabindex="-1"><a class="header-anchor" href="#_3、端到端的服务" aria-hidden="true">#</a> 3、端到端的服务</h3><p>传输层的<strong>主要作用</strong>就是为它的上层提供<strong>端到端的数据传输服务</strong>。</p><blockquote><p>为什么叫<strong>端到端服务</strong>呢？</p></blockquote><ol><li>从<strong>物理的网络连接</strong>角度来讲的，即端到端是指<strong>网络通信的双方不是在同一链路上</strong>，<strong>不是点对点</strong>连接的；</li><li>从<strong>虚拟的传输连接</strong>角度来讲的，即端到端是指<strong>在用户看来两端的连接是直接进行的</strong>（其实并不是这样的），<strong>屏蔽了</strong>核心网络结构和各种子网间的<strong>差异</strong>。</li></ol><blockquote><p>点对点连接和端到端连接的区分？</p></blockquote><ol><li><code>点对点连接</code>就是通信双方<strong>直接通过电缆进行的连接</strong>，中间<strong>没有经过任何其他设备</strong>。 <ul><li>如上图的主机A与路由器1、主机B与路由器2</li><li><strong>点对点传输</strong>： <ul><li>源端可直接把数据<strong>传给与它直接相连的设备</strong>，在需要的时候又<strong>可把数据传给与之直接相连的下一台设备</strong>，通过一台台直接相连的设备，把数据传到接收端。很显然，这是一种<strong>接力传输方式，<strong>但是</strong>不可靠</strong>。</li></ul></li></ul></li><li><code>端到端连接</code>是<strong>两个终端系统之间的连接，体现在两个终端系统的连接中时要经过一个或多个设备</strong>。 <ul><li>如上图的主机A与主机B</li><li><strong>端到端传输</strong>： <ul><li>就是需要在两端所经过的线路上<strong>建立一条构建于网络层已搭建好的路由路径之上的虚拟传输连接</strong>（当然，这里仅是针对<strong>面向连接</strong>的传输层协议而讲的），以此来<strong>屏蔽所经网络类型或参数配置的不同</strong>，就像它们是直接相连的一样；链路建立后，源端就可以发送数据，直至数据发送完毕，接收端确认接收成功。</li><li>直到<strong>目的端收到数据为止</strong>，源端的设备<strong>一直要参与传输</strong>，因为只有在传输完成后，从源端到目的端所建立的虚拟传输连接才能**“拆除”<strong>，否则会中途中断数据的传输，因此是可靠传输</strong>。</li></ul></li></ul></li></ol><h3 id="_4、tsap和tpdu" tabindex="-1"><a class="header-anchor" href="#_4、tsap和tpdu" aria-hidden="true">#</a> 4、TSAP和TPDU</h3><p>在<code>OSI/RM</code>体系结构的传输层中，涉及两个非常重要的术语—<code>TSAP</code>（传输服务访问点）和<code>TPDU</code>（传输协议数据单元），它们贯穿整个传输层数据传输服务的始末。</p><h4 id="_1-tsap" tabindex="-1"><a class="header-anchor" href="#_1-tsap" aria-hidden="true">#</a> （1）TSAP</h4><blockquote><p>TSAP是什么？</p></blockquote><ul><li>TSAP是<strong>上层调用传输层服务</strong>，以及<strong>传输层为它的上层提供服务</strong>的<strong>逻辑接口。</strong></li><li>同一时间、同一对网络实体间的<strong>用户应用进程可能有多个</strong>，不能<strong>仅靠网络实体地址</strong>（即NSAP）来<strong>标注通信双方</strong>（因为此时通信的<strong>实体</strong>是<strong>各个应用进程</strong>，而不是通信双方主机），而必须借助传输层地址进行标识。TSAP相当于传输层的地址，<strong>不同的TSAP标识不同的会话或应用进程</strong>。</li></ul><blockquote><p>TSAP组成：</p></blockquote><p>为确保所有的<strong>传输地址在整个网络中是唯一</strong>的，因此将传输地址分成<strong>网络ID、主机ID、主机分配的端口</strong>三部分。</p><ul><li><code>端口</code>是<strong>传输层特定的属性，用来与应用进程进行一一对应的</strong>，所以说<strong>真正的传输层地址其实就是具体应用所占用的端口</strong>。</li></ul><h4 id="_2-tpdu" tabindex="-1"><a class="header-anchor" href="#_2-tpdu" aria-hidden="true">#</a> （2）TPDU</h4><blockquote><p>TPDU是什么？</p></blockquote><p><strong>TPDU</strong>与前面几章中介绍的<code>比特</code>、<code>帧</code>、 <code>分组</code><strong>是同类概念</strong>。</p><ul><li>OSI/RM体系结构的传输层中还是把其中传输的数据单元称为<strong>TPDU</strong></li><li>TCP/IP体系结构的传输层中还是把其中传输的数据单元称为<strong>数据段</strong></li></ul><figure><img src="https://cloud.greennut.icu/blog/network/tpdufzlct.png" alt="传输层数据 - 数据段 - 封装流程" tabindex="0" loading="lazy"><figcaption>传输层数据 - 数据段 - 封装流程</figcaption></figure><h3 id="_5、寻址与端口号" tabindex="-1"><a class="header-anchor" href="#_5、寻址与端口号" aria-hidden="true">#</a> 5、寻址与端口号</h3><blockquote><p>为什么要有端口号？</p></blockquote><ul><li>运行在计算机上的进程使用进程标识符PID来标志，但是因特网上的计算机并不是使用统一的操作系统，不同的操作系统(windows,Linux,Mac OS)，又使用不同格式的进程标识符，为了使运行不同操作系统的计算机的应用进程之间能进行网络通信，必须使用统一的方法对TCP/IP体系的应用进程进行标识，即端口号。</li></ul><blockquote><p>端口号的组成和含义：</p></blockquote><p><strong>端口</strong>（逻辑端口/软件端口）：是传输层的SAP，唯一标识主机中的应用进程</p><ul><li>端口号<strong>只有本地意义（端口号只是为了标识本计算机应用层中的各进程）</strong>，在因特网中不同计算机的相同端口是没有联系的</li><li>端口号长度为<code>16bit</code>，能表示<code>65536</code>个不同的端口号 <ul><li><strong>服务端使用的端口号</strong><ul><li><strong>熟知端口号</strong>（<code>0~1023</code>）：给TCP/IP最重要的一些应用程序/应用协议，所有用户都知道</li><li><strong>登记端口号</strong>（<code>1024~49151</code>）：为没有熟知端口号的应用程序使用的，使用时登记，如微软远程桌面使用的端口是3389</li></ul></li><li><strong>客户端使用的端口号/短暂端口号</strong>（<code>49152~65535</code>）：仅在客户进程运行时才动态选择，当服务器进程收到客户进程的报文时，就知道了客户进程所使用的的动态端口号。通信结束后，这个端口号可供其他客户进程以后使用</li></ul></li></ul><blockquote><p>常见端口号：</p></blockquote><table><thead><tr><th style="text-align:center;">应用程序</th><th style="text-align:center;">端口号</th></tr></thead><tbody><tr><td style="text-align:center;">FTP</td><td style="text-align:center;">21</td></tr><tr><td style="text-align:center;">TELNET</td><td style="text-align:center;">23</td></tr><tr><td style="text-align:center;">SMTP</td><td style="text-align:center;">25</td></tr><tr><td style="text-align:center;">DNS</td><td style="text-align:center;">53</td></tr><tr><td style="text-align:center;">TFTP</td><td style="text-align:center;">69</td></tr><tr><td style="text-align:center;">HTTP</td><td style="text-align:center;">80</td></tr><tr><td style="text-align:center;">SNMP</td><td style="text-align:center;">161</td></tr></tbody></table><blockquote><p>套接字（Socket）：</p></blockquote><ul><li><p>套接字就是：<strong>主机号</strong>+<strong>端口号</strong></p></li><li><p>在网络中采用发送方和接收方的<strong>套接字组合来识别端点</strong>，套接字<strong>唯一标识</strong>了网络中的一个<strong>主机</strong>（主机号）和它上面的一个<strong>进程</strong>（端口号）。</p></li></ul><h3 id="_6、复用和分用" tabindex="-1"><a class="header-anchor" href="#_6、复用和分用" aria-hidden="true">#</a> 6、复用和分用</h3><blockquote><p>复用和分用：</p></blockquote><details class="hint-container details"><summary>复用（Multiplexing）:</summary><p>应用层所有的应用进程都可以通过传输层再传输到网络层，也就是将多个上层应用程序的数据流合并为一个传输层数据流，以便在传输层和网络层之间传输。</p><ul><li><p>发送方的某些应用进程所发送的不同应用报文，<strong>在传输层使用UDP协议进行封装，这是UDP复用；若用TCP封装则称TCP复用</strong></p></li><li><p>传输层使用端口号区分不同进程，不管使用何种协议封装的报文，<strong>在网络层都需要使用IP协议封装成IP数据报，这是IP复用</strong>，数据报中协议字段的值用来表名封装的是何种协议数据单元</p><ul><li><p><strong>实现方式</strong>：复用可以通过端口号来实现。每个应用程序会被分配一个唯一的端口号，这样在传输层就可以区分不同应用程序的数据流。</p></li><li><p><strong>目的</strong>：复用允许多个应用程序同时使用网络传输层服务，从而在网络上传输它们的数据。<br> :::</p></li></ul></li></ul><details class="hint-container details"><summary>分用（Demultiplexing）：</summary><p>传输层从网络层收到数据后交付指明的应用进程，指在接收主机的传输层将从网络上接收到的数据流分解成多个上层应用程序的数据流。</p><ul><li><p>分用是根据协议字段的值，<strong>将IP数据报封装的协议数据单元上交传输层的过程叫IP分用</strong></p></li><li><p><strong>UDP根据端口号将数据交给应用进程叫做UDP分用，TCP根据端口号将数据交给应用进程叫做TCP分用</strong></p><ul><li><p><strong>实现方式</strong>：分用依赖于端口号，接收主机根据数据包中的目标端口号来将数据分发给相应的应用程序。</p></li><li><p><strong>目的</strong>：分用保证了数据能够正确地交付给目标应用程序，从而保持了端到端的通信。</p></li></ul></li></ul></details></details><p>总的来说，复用和分用是在传输层中确保多个应用程序能够同时使用网络传输层服务的重要机制。复用允许多个应用程序的数据流合并为一个传输层数据流，而分用则确保接收主机能够将传输层数据流分解为多个上层应用程序的数据流。这两个机制共同保证了网络通信的有效进行。</p><h2 id="二、tcp协议" tabindex="-1"><a class="header-anchor" href="#二、tcp协议" aria-hidden="true">#</a> 二、TCP协议</h2><h3 id="_1、tcp协议的特性" tabindex="-1"><a class="header-anchor" href="#_1、tcp协议的特性" aria-hidden="true">#</a> 1、TCP协议的特性</h3><blockquote><p>TCP的特点有哪些？</p></blockquote><ol><li><mark>TCP是面向连接（虚连接）的传输层协议</mark><ul><li>只有建立了连接才能开始通信</li><li>连接是逻辑连接，不是实际链路</li><li><strong>支持原因：</strong> TCP通过三次握手建立连接，确保通信双方的状态同步和连接的可靠性。这种连接导向的方式允许在数据传输前后进行数据完整性检查和确认，确保数据能够可靠地发送和接收。</li></ul></li><li><mark>仅支持单播传输，无法用于多播、广播</mark><ul><li><strong>支持原因：<strong>每一条TCP连接</strong>只能有两个端点</strong>，每一条TCP连接只能是点对点的</li></ul></li><li><mark>TCP提供可靠交付的服务，无差错、不丢失、不重复、按序到达</mark><ul><li><strong>支持原因：</strong> TCP的可靠性来自于序号、确认和重传机制。序号和确认保证了数据的有序传输，重传机制确保了即使出现丢失或损坏，数据也能被重新传输。</li></ul></li><li><mark>TCP提供全双工通信</mark><ul><li>发送缓存 <ul><li>准备发送的数据</li><li>已发送但尚未收到确认的数据</li></ul></li><li>接收缓存 <ul><li>按序到达但尚未被接受应用程序读取的数据</li><li>不按序到达的数据</li></ul></li></ul></li><li><mark>TCP面向字节流，而非报文流</mark><ul><li>TCP把应用程序交下来的数据看成仅仅是一连串的无结构的字节流</li><li>TCP将要传输的数据分成多个字节，以字节为单位传送</li><li>字节流传输使TCP更加灵活，可以处理不同大小的数据而不受消息边界的影响</li></ul></li><li><strong>传输单位为数据段，每次发送的TCP数据段大小和数据段数都是可变的</strong></li><li>TCP能保证可靠传输、流量控制、拥塞控制</li></ol><h3 id="_2、tcp的报文格式" tabindex="-1"><a class="header-anchor" href="#_2、tcp的报文格式" aria-hidden="true">#</a> 2、TCP的报文格式</h3><figure><img src="https://cloud.greennut.icu/blog/network/tcphead.png" alt="TCP的报文格式" tabindex="0" loading="lazy"><figcaption>TCP的报文格式</figcaption></figure><p>这是TCP协议头部的一些重要字段，它们承载了TCP通信过程中的关键信息。</p><blockquote><p>以下是这些字段的功能和作用：</p></blockquote>',55),b=l("p",null,[l("strong",null,"源端口、目的端口"),t("（16位，2B）：分别用于标识发送和接收TCP报文的应用程序，确保数据能够准确地交付到目的地的应用程序。")],-1),k=l("p",null,null,-1),m=l("p",null,[l("strong",null,"序号seq"),t("（32位，4B）：此报文段中所发送数据的"),l("mark",null,"第一个字节"),t("的序号")],-1),_=l("ul",null,[l("li",null,"在一个TCP连接中传送的字节流中的每一个字节都按顺序编号"),l("li",null,"而seq则用于标识TCP报文段中数据部分的起始字节位置，保证数据的顺序传递。")],-1),T=l("p",null,[l("strong",null,"确认号ack"),t("（32位，4B）：期望收到对方下一个报文段的"),l("mark",null,"第一个数据字节"),t("的序号")],-1),C=l("p",null,null,-1),f=l("ol",null,[l("li",null,[l("p",null,[l("strong",null,"数据偏移"),t("（4bit）："),l("mark",null,"以4B为单位"),t("，表示首部长度，即数据部分从哪里开始")])]),l("li",null,[l("p",null,[l("strong",null,"控制位"),t("（1bit）")]),l("ul",null,[l("li",null,[l("p",null,[l("strong",null,"紧急位URG"),t("：为"),l("code",null,"1"),t("时，表示该报文中有紧急数据，需要"),l("mark",null,"优先从TCP缓存队列中发送")])]),l("li",null,[l("p",null,[l("strong",null,"确认位ACK"),t("：为"),l("code",null,"1"),t("时，确认位才有效")])]),l("li",null,[l("p",null,[l("strong",null,"推送位PSH"),t("：为"),l("code",null,"1"),t("时，接收方尽快将消息交付到上层，不再等待缓冲区填满后才交付（与URG相对应）")])]),l("li",null,[l("p",null,[l("strong",null,"复位RST"),t("：为"),l("code",null,"1"),t("时，表示必须释放连接，然后再重新建立传输链接")])]),l("li",null,[l("p",null,[l("strong",null,"同步位SYN"),t("：为"),l("code",null,"1"),t("时，表示这个报文是一个连接建立的请求/接收报文")])]),l("li",null,[l("p",null,[l("strong",null,"终止位FIN"),t("：为"),l("code",null,"1"),t("时，表示此报文段"),l("mark",null,"发送方数据已发完"),t("，要求释放连接")])])])]),l("li",null,[l("p",null,[l("strong",null,"窗口"),t("（16位，2B）："),l("mark",null,"单位为字节（B）"),t("，表示己方的接收窗口大小，即允许对方发送的数据量：")]),l("p",{class:"katex-block"},[l("span",{class:"katex-display"},[l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[l("semantics",null,[l("mrow",null,[l("mn",null,"0"),l("mo",null,"∼"),l("msup",null,[l("mn",null,"2"),l("mn",null,"16")]),l("mo",null,"−"),l("mn",null,"1")]),l("annotation",{encoding:"application/x-tex"}," 0∼2^{16}−1 ")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"0"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"∼"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.9474em","vertical-align":"-0.0833em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},"2"),l("span",{class:"msupsub"},[l("span",{class:"vlist-t"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.8641em"}},[l("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[l("span",{class:"pstrut",style:{height:"2.7em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},[l("span",{class:"mord mtight"},"16")])])])])])])])]),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"−"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6444em"}}),l("span",{class:"mord"},"1")])])])])])]),l("li",null,[l("p",null,[l("strong",null,"检验和"),t("（16位，2B）：与UDP类似")]),l("ul",null,[l("li",null,"TCP的伪首部代表协议的字段为6")])]),l("li",null,[l("p",null,[l("strong",null,"紧急指针"),t("（16位，2B）：URG=1时才有意义，表明本报文中紧急数据的字节数")]),l("ul",null,[l("li",null,[l("p",null,"紧急数据从0开始")]),l("li",null,[l("p",null,"实际上指向的是紧急数据尾部的位置")])])])],-1),q=l("ol",null,[l("li",null,[l("p",null,[l("strong",null,"选项"),t("（长度可变）：最大报文段长度MSS、窗口扩大、时间戳、选择确认")])]),l("li",null,[l("p",null,[l("strong",null,"填充"),t("：使TCP首部长度为4B的整数倍")])])],-1),x=e('<h3 id="_3、tcp的连接管理" tabindex="-1"><a class="header-anchor" href="#_3、tcp的连接管理" aria-hidden="true">#</a> 3、TCP的连接管理</h3><blockquote><p>TCP连接的建立采用客户服务器方式</p><p>主动发起连接建立的应用进程叫做客户，而被动等待连接建立的应用进程叫服务器</p></blockquote><h4 id="_1-tcp连接的建立" tabindex="-1"><a class="header-anchor" href="#_1-tcp连接的建立" aria-hidden="true">#</a> （1）TCP连接的建立</h4><blockquote><p>TCP连接的建立采用的是三次握手方式.</p></blockquote><details class="hint-container details"><summary>三次握手方式.流程描述：</summary><ol><li>客户端<mark>发送连接请求报文段</mark>，无应用层数据 <ul><li>SYN=1</li><li>seq=x（随机产生）</li><li>ACK=0</li><li>ack无效</li></ul></li><li>服务器端为该TCP连接分配缓存和变量，并向客户端<mark>返回确认报文段</mark>，允许连接，无应用层数据 <ul><li>SYN=1</li><li>seq=y（随机）</li><li>ACK=1</li><li>ack=x+1</li></ul></li><li>客户端为该TCP连接分配缓存和变量，并向服务器端返回确认的确认，可以携带数据 <ul><li>SYN=0</li><li>seq=x+1</li><li>ACK=1</li><li>ack=y+1</li></ul></li></ol></details><figure><img src="https://cloud.greennut.icu/blog/network/scws.gif" alt="图例-三次握手" tabindex="0" loading="lazy"><figcaption>图例-三次握手</figcaption></figure><blockquote><p>chatgpt🤖：SYN洪泛攻击</p></blockquote><ul><li>SYN洪泛攻击是一种常见的网络攻击方式，针对TCP协议中的三次握手过程。</li><li>攻击者发送大量伪造的TCP连接请求（第一次握手的SYN数据包），但不完成后续的握手过程，导致服务器有大量挂起等待确认的TCP连接，消耗CPU和内存，进而导致死机。</li><li>解决方法： <ol><li><strong>SYN Cookie：</strong> 服务器可以启用SYN Cookie机制，它在握手阶段不会在连接表中保存信息，而是通过加密和计算检验和等方式临时存储信息。这样可以避免在握手阶段占用过多的资源。</li><li><strong>连接限制：</strong> 设置连接限制或阈值，当服务器达到一定的连接数时，暂时停止接受新的连接请求，或者采取其他限制措施。</li><li><strong>网络设备配置：</strong> 通过防火墙、负载均衡器等网络设备，配置规则来过滤恶意流量，识别和阻止大量伪造的连接请求。</li></ol></li></ul><h4 id="_2-tcp连接释放" tabindex="-1"><a class="header-anchor" href="#_2-tcp连接释放" aria-hidden="true">#</a> （2）TCP连接释放</h4><blockquote><p>TCP连接释放采用的是四次挥手方式.</p></blockquote><details class="hint-container details"><summary>四次挥手过程消息描述：</summary><p>参与一条TCP连接的两个进程中的<strong>任何一个</strong>都能终止该连接</p><ol><li>客户端发送<strong>连接释放报文段</strong>，停止发送数据，主动关闭TCP连接，转为<strong>FIN-WAIT-1</strong>状态 <ul><li>FIN=1</li><li>seq=u</li></ul></li><li>服务器端回送一个确认报文段，并转为<strong>CLOSE-WAIT</strong>状态；<strong>客户到服务器</strong>这个方向的连接就释放了（半关闭状态），客户端收到这个确认段后转为<strong>FIN-WAIT-2</strong>状态 <ul><li>ACK=1</li><li>seq=v</li><li>ack=u+1</li></ul></li><li>服务器端发完数据，就发出<strong>连接释放报文段</strong>，主动关闭TCP连接，转为<strong>LAST-ACK</strong>状态 <ul><li>FIN=1</li><li>seq=w</li><li>ACK=1</li><li>ack=u+1</li></ul></li><li>客户端回送一个确认报文段，转为<strong>TIME-WAIT</strong>状态，再等到时间等待计时器设置的2MSL（最长报文段寿命）后，连接彻底关闭 <ul><li>seq=u+1</li><li>ACK=1</li><li>ack=w+1</li></ul></li></ol></details><figure><img src="https://cloud.greennut.icu/blog/network/fourhs.gif" alt="图例-四次挥手" tabindex="0" loading="lazy"><figcaption>图例-四次挥手</figcaption></figure><p><strong>2MSL的意义</strong>：防止服务器端因为未收到客户端的确认报文段导致无法关闭</p><h3 id="_4、tcp的可靠传输" tabindex="-1"><a class="header-anchor" href="#_4、tcp的可靠传输" aria-hidden="true">#</a> 4、TCP的可靠传输</h3><blockquote><p><strong>可靠</strong>：保证接收方进程从缓存区读出的字节流与发送方发出的字节流是完全一样的</p></blockquote><ul><li>可靠传输是TCP的主要目的，而校验和、序列号、确认号、超时重传等机制是TCP使用的手段，用于实现可靠传输。这些机制一起工作，确保了数据的完整性和可靠性，以及网络的稳定性。</li></ul><h4 id="_1-校验" tabindex="-1"><a class="header-anchor" href="#_1-校验" aria-hidden="true">#</a> （1）校验</h4><p>与UDP类似，通过伪首部进行检验和校验</p><ul><li>TCP报文段包含一个校验和字段，用于检测报文在传输过程中是否发生了错误。</li></ul><h4 id="_2-序号" tabindex="-1"><a class="header-anchor" href="#_2-序号" aria-hidden="true">#</a> （2）序号</h4><p>为传输流中的每一个字节进行编号，将缓冲区中的字节组成若干个TCP段（数据报），通过确认号和序号的机制进行发送</p><ul><li>发送方将数据分割成小的报文段，并为每个报文段分配一个唯一的序列号。</li><li>接收方使用确认号来指示下一个期望接收的序列号。</li></ul><h4 id="_3-确认号" tabindex="-1"><a class="header-anchor" href="#_3-确认号" aria-hidden="true">#</a> （3）确认号</h4><p>接收方收到报文段后，返回确认字段，确认字段中的确认号为下一个期望收到的起始字节编号。</p><p><strong>捎带确认</strong>：接收方将确认字段捎带在自己要发送的数据中（ACK=1，使用相应的确认号即可）</p><p><strong>累计确认</strong>：只确认到<strong>第一个丢失</strong>为止的字节，而不需要一个一个地确认每个数据包。</p>',26),D=l("blockquote",null,[l("p",null,"TCP发送方缓存")],-1),U=l("figure",null,[l("img",{src:"https://cloud.greennut.icu/blog/network/cachefsf.png",alt:"发送方缓存",tabindex:"0",loading:"lazy"}),l("figcaption",null,"发送方缓存")],-1),y=l("p",null,null,-1),A=l("blockquote",null,[l("p",null,"TCP接收方缓存")],-1),w=l("figure",null,[l("img",{src:"https://cloud.greennut.icu/blog/network/cachejsf.png",alt:"接收方缓存",tabindex:"0",loading:"lazy"}),l("figcaption",null,"接收方缓存")],-1),v=l("p",null,null,-1),S=e('<hr><ul><li>此时接收方返回的确认号为4</li><li>7、8仍然正常接收</li><li>发送方重新发送4、5、6</li><li>接收方收到后返回的确认号为9</li></ul><h4 id="_4-重传" tabindex="-1"><a class="header-anchor" href="#_4-重传" aria-hidden="true">#</a> （4）重传</h4><p><mark>超时重传：TCP的发送方在规定的时间（重传时间RTTs）内没有收到确认就要重传已发送的报文段，RTTs本质是加权平均往返时间</mark></p><ul><li>重传时间过短：太长的数据报来不及发送完毕</li><li>重传时间过长：增加网络空闲时间，降低传输效率</li></ul><p>TCP采用自适应算法，<strong>动态改变</strong>重传时间RTTs</p><blockquote><p>冗余ACK（冗余确认）</p></blockquote><p>每当比期望序号大的失序报文段到达时，发送一个<strong>冗余ACK</strong>，指明下一个期待字节的序号</p><hr><details class="hint-container details"><summary>例题：</summary><blockquote><p>发送方已发送1，2，3，4，5报文段</p></blockquote><ul><li>接收方收到1，返回给1的确认（ACK=2）</li><li>接收方收到3，返回给1的确认（ACK=2，冗余ACK）</li><li>接收方收到4，返回给1的确认（ACK=2，冗余ACK）</li><li>接收方收到5，返回给1的确认（ACK=2，冗余ACK）</li><li>发送方收到3个对于报文段1的冗余ACK</li><li>发送方认定2丢失，重传2</li></ul></details><blockquote><p><strong>可靠传输的特点</strong>：</p></blockquote><ol><li><p><strong>数据按序交付</strong>：TCP会根据序列号确保接收方按照正确的顺序接收到数据，即使数据包乱序到达，也会在接收方重新排序后交付给应用层。</p></li><li><p><strong>数据完整性保证</strong>：TCP使用校验和和序列号等机制来保证数据在传输过程中的完整性，接收方可以检测到任何丢失或损坏的数据。</p></li><li><p><strong>重传机制</strong>：如果发送方没有收到接收方的确认信息，它会定时重传数据，确保数据的可靠传输。</p></li></ol><h3 id="_5、tcp的流量控制" tabindex="-1"><a class="header-anchor" href="#_5、tcp的流量控制" aria-hidden="true">#</a> 5、TCP的流量控制</h3><h4 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> （1）概述</h4><p><mark>流量控制</mark>就是让「发送方」根据「接收方」的实际接收能力控制发送的数据量，让发送方的发送速率不要太快，要让接收方来得及接收，以避免发送方发送速度过快导致接收方无法处理或缓存溢出的问题。</p><h4 id="_2-实现方式" tabindex="-1"><a class="header-anchor" href="#_2-实现方式" aria-hidden="true">#</a> （2）实现方式</h4><p>TCP利用<strong>滑动窗口</strong>机制实现流量控制。</p><ul><li>接收方根据自己的缓冲区大小，动态的通过窗口字段调整发送方发送窗口的大小。</li><li>发送方窗口大小取<strong>接收窗口rwnd</strong>和<strong>拥塞窗口cwnd</strong>的<strong>最小值</strong>。 <ul><li><strong>拥塞窗口</strong>：发送方根据自己估算的网络拥塞程度而设置的窗口值，反映网络当前容量</li><li>发送方发送完窗口内数据后需要等到确认报文才会滑动窗口并继续发送，若窗口内的某个值很久没有收到回答报文，则超时<strong>重传报文</strong></li><li><strong>实时调整</strong>：窗口大小可以实时调整，当接收方通过确认重传机制进行字节编号确认时，会连带着修改发送方的允许发送窗口大小，可以根据网络状况和接收方的处理能力来动态控制数据的发送速度。</li></ul></li></ul><details class="hint-container details"><summary>例题：</summary><blockquote><p>例：A向B发送数据，连接建立时，B的初始rwnd=400（B），设每一个报文段100B，报文段序号初始值为1</p><figure><img src="https://cloud.greennut.icu/blog/network/windowllkz.png" alt="图例-拥塞窗口" tabindex="0" loading="lazy"><figcaption>图例-拥塞窗口</figcaption></figure></blockquote><p>若接收方发送的允许发送的确认信息丢包，则此时会出现“死锁”情况，即发送方窗口大小仍然为0，无法发送数据；接收方一直等待发送方发送新数据，没有新的确认信息。</p><p><strong>解决方法</strong>：TCP为每一个连接设有一个持续计时器，只要TCP连接的一方收到对方的零窗口通知，就启动持续计时器。到时间则发送一个<strong>零窗口</strong>的<strong>探测报文段</strong>，并重置计时器时间。</p><ul><li><strong>滑动窗口过小</strong>：产生太多ACK</li><li><strong>滑动窗口过大</strong>：路由器发生拥挤，主机可能丢失分组</li></ul></details><blockquote><p>chatgpt🤖：零窗口探测报文</p></blockquote><p>零窗口探测报文的出现是为了解决TCP通信中可能出现的接收方窗口为零（Zero Window）的情况。</p><p>接收方窗口为零表示接收方暂时无法接收更多的数据，这可能由以下几个原因导致：</p><ol><li><p><strong>接收方处理能力不足</strong>：接收方的处理能力可能不足以及时处理收到的数据，导致其缓冲区满了。</p></li><li><p><strong>接收方应用程序忙碌</strong>：接收方的应用程序可能正在处理大量任务，无法及时处理新的数据，导致缓冲区满了。</p></li><li><p><strong>网络拥塞</strong>：在网络拥塞的情况下，数据包可能会丢失，接收方为了保证数据的完整性可能会将窗口大小设为零。</p></li><li><p><strong>接收方主动控制接收速率</strong>：接收方可能希望控制数据的接收速率，通过将窗口大小设为零来暂停数据的接收。</p></li><li><p><strong>死锁问题</strong>：在某些情况下，如果发送方一直等待接收方的窗口变为非零，可能会导致死锁。零窗口探测报文允许发送方主动探测接收方窗口的变化，避免了可能的死锁情况。</p></li></ol><p>零窗口探测报文的出现是为了及时解决这种情况，它的作用包括：</p><ol><li><p><strong>主动探测接收方窗口变化</strong>：发送方可以通过发送零窗口探测报文来主动询问接收方的窗口是否已经变为非零，从而及时恢复数据的传输。</p></li><li><p><strong>保持连接状态</strong>：零窗口探测报文可以避免连接在窗口为零的情况下被错误地认为是不活跃的，从而保持连接的活跃状态。</p></li><li><p>其次，零窗口探测报文也有超时重传机制</p></li></ol><p>总的来说，零窗口探测报文的出现是为了提升TCP通信的可靠性和效率，保证数据的及时传输，同时避免不必要的连接中断。</p><h3 id="_6、tcp的拥塞控制" tabindex="-1"><a class="header-anchor" href="#_6、tcp的拥塞控制" aria-hidden="true">#</a> 6、TCP的拥塞控制</h3><h4 id="_1-概述-1" tabindex="-1"><a class="header-anchor" href="#_1-概述-1" aria-hidden="true">#</a> （1）概述</h4><p>拥塞控制是一种网络流量控制的机制，其主要目的是避免在网络中发生拥塞，以保证网络的稳定性和吞吐量的合理分配。</p><ul><li>拥塞控制：<strong>全局性</strong>的控制</li><li>流量控制：端到端的控制</li></ul><p><strong>拥塞控制的意义</strong>：防止过多的数据注入到网络中</p><blockquote><p><strong>讨论前提</strong>：</p><ul><li>数据单方向传送，而另一个方向只传送确认</li><li>接收方总是有足够大的缓存空间（rwnd -&gt; ∞），因而发送窗口大小取决于拥塞程度</li></ul></blockquote><details class="hint-container details"><summary>拥塞控制的出现背景和原因：</summary><blockquote><p>拥塞控制的背景：</p></blockquote><p>在计算机网络中，当网络中的路由器、交换机等网络设备的处理能力不足以处理大量的数据流时，就会导致网络拥塞。</p><ul><li>前面的流量控制是避免「发送方」的数据填满「接收方」的缓存，但是并不知道网络的中发生了什么，一般来说，计算机网络都处在一个共享的环境。因此也有可能会因为其他主机之间的通信使得网络拥堵。</li><li><strong>在网络出现拥堵时，如果继续发送大量数据包，可能会导致数据包时延、丢失等，这时 TCP 就会重传数据，但是一重传就会导致网络的负担更重，于是会导致更大的延迟以及更多的丢包，这个情况就会进入恶性循环被不断地放大....</strong></li><li>所以，TCP 不能忽略网络上发生的事，它被设计成一个无私的协议，当网络发送拥塞时，TCP 会自我牺牲，降低发送的数据量，于是，就有了<strong>拥塞控制</strong>，控制的目的就是<strong>避免「发送方」的数据填满整个网络</strong>。为了在「发送方」调节所要发送数据的量，定义了一个叫做<strong>拥塞窗口</strong> 的概念。</li></ul><blockquote><p>拥塞控制的原因：</p></blockquote><p>原因：</p><ul><li><p><strong>不均衡的流量</strong>：可能有一些节点或链路的流量远远超过了其处理能力，导致拥塞。</p></li><li><p><strong>路由选择问题</strong>：不恰当的路由选择可能导致某些路径过于拥挤，造成拥塞。</p></li><li><p><strong>丢包和重传</strong>：在网络中丢失的数据包会导致重传，增加了网络的负担。</p></li><li><p><strong>缓冲区溢出</strong>：当网络设备的缓冲区已满时，新到达的数据包可能会被丢弃。</p></li><li><p><strong>网络拓扑变化</strong>：动态的网络拓扑变化可能导致数据包传输的不稳定性，可能引发拥塞。</p></li></ul></details><blockquote><p>chatgpt🤖：拥塞控制可以解决以下问题</p></blockquote><ol><li><p><strong>避免网络拥塞</strong>：通过监测网络状态，控制数据的发送速率，避免在网络中发生拥塞。</p></li><li><p><strong>提高网络性能</strong>：通过动态调整传输速率，可以使网络资源得到合理利用，提高网络的吞吐量。</p></li><li><p><strong>保证公平性</strong>：拥塞控制机制可以确保网络中的各个流量源公平地共享网络资源。</p></li></ol><p>总的来说，拥塞控制是为了保证网络稳定运行，避免拥塞发生，以及在拥塞发生时能够有效地应对和解决问题。通过动态调整数据发送速率和监测网络状态，拥塞控制可以保证网络的稳定性和吞吐量的合理分配。</p><h4 id="_2-实现方式-1" tabindex="-1"><a class="header-anchor" href="#_2-实现方式-1" aria-hidden="true">#</a> （2）实现方式</h4><blockquote><p>什么是慢开始门限ssthresh？ 什么是拥塞窗口？和发送窗口有什么关系呢？</p></blockquote><ul><li><strong>慢开始门限ssthresh</strong>是TCP拥塞控制算法中的一个阈值，用于控制拥塞窗口（cwnd）的大小。</li><li><strong>拥塞窗口 cwnd</strong>是发送方维护的一个的状态变量，它会根据<strong>网络的拥塞程度动态变化的</strong>，表示在不收到确认信息的情况下可以发送的数据量。</li></ul><p>我们在前面提到过发送窗口 <code>swnd</code> 和接收窗口 <code>rwnd</code> 是约等于的关系，那么由于加入了拥塞窗口的概念后，此时发送窗口的值是<code>swnd = min(cwnd, rwnd</code>)，也就是拥塞窗口和接收窗口中的最小值。</p><p>拥塞窗口 <code>cwnd</code> 变化的规则：</p><ul><li>只要网络中没有出现拥塞，<code>cwnd</code> 就会增大；</li><li>但网络中出现了拥塞，<code>cwnd</code> 就减少；</li></ul><blockquote><p>那么怎么知道当前网络是否出现了拥塞呢？</p></blockquote><p>其实只要「发送方」没有在规定时间内接收到 ACK 应答报文，也就是<strong>发生了超时重传，就会认为网络出现了拥塞。</strong></p><blockquote><p>拥塞控制有哪些控制算法？</p></blockquote><p><mark>拥塞控制主要是四个算法：慢开始、拥塞避免、快重传、快恢复</mark></p><h5 id="a-慢开始和拥塞避免" tabindex="-1"><a class="header-anchor" href="#a-慢开始和拥塞避免" aria-hidden="true">#</a> （a）慢开始和拥塞避免</h5><ol><li><strong>慢开始</strong>：<strong>拥塞窗口从1开始，根据应答报文大小来扩大拥塞窗口</strong>，如发送方窗口<code>2</code>，应答大小<code>2</code>，则下次发送大小为<code>4</code>，<strong>是指数性的增长</strong></li><li><strong>拥塞避免</strong>：<strong>拥塞窗口每次只扩大1</strong>，而不是向慢开始那样根据发送方的返回窗口进行增加。</li></ol><figure><img src="https://cloud.greennut.icu/blog/network/mksysbm.png" alt="图例-慢开始和拥塞避免" tabindex="0" loading="lazy"><figcaption>图例-慢开始和拥塞避免</figcaption></figure><h5 id="b-快重传和快恢复" tabindex="-1"><a class="header-anchor" href="#b-快重传和快恢复" aria-hidden="true">#</a> （b）快重传和快恢复</h5><ol><li><strong>快重传</strong>：使发送方尽快进行重传，而不是等待超时重传计时器超时再重传 <ul><li>要求接收方不用等待自己发送数据时才进行捎带确认，而是要立即发送确认</li><li>即使收到了失序的报文段(说明有一段丢失了)也要立即发出对已收到的报文段的重复确认</li><li>发送方一旦收到3个连续的重复确认，就将相应的报文段立即重传，而不是等该报文段的超时重传计时器超时再重传</li><li>对于个别丢失的报文段，发送方不会出现超时重传，也就不会误认为出现了拥塞。使用快重传可以使整个网络的吞吐量提高约20%</li></ul></li><li><strong>快恢复</strong>：发送方一旦收到3个重复确认，就知道现在只是丢失了个别报文段。也是不启动慢开始算法，而执行快恢复算法 <ul><li>发送方将慢开始门限ssthresh值和拥塞窗口cwnd值调整为当前窗口的一半，开始执行拥塞避免算法</li><li>也有的快恢复实现是把快恢复开始时的拥塞窗口cwnd值再增大一些，即等于新的ssthresh+3 <ul><li>既然发送方收到3个重复的确认，就表明有3个数据报文段已经离开了网络</li><li>这三个报文段不再消耗网络资源而是停留在接收方的接收缓存中</li><li>可见现在网络中不是堆积了报文段而是减少了3个报文段。因此可以适当把拥塞窗口扩大些</li></ul></li></ul></li></ol><figure><img src="https://cloud.greennut.icu/blog/network/kcckhf.png" alt="图例-快重传和快恢复" tabindex="0" loading="lazy"><figcaption>图例-快重传和快恢复</figcaption></figure><p>总结：</p><ol><li>当<code>cwnd &lt; ssthresh</code>时，使用慢开始算法</li><li>当<code>cwnd &gt; ssthresh</code>时，停止使用慢开始算法而改用拥塞避免算法</li><li>当<code>cwnd = ssthresh</code>时，既可使用慢开始算法，也可以使用拥塞避免算法</li></ol><h2 id="三、udp协议" tabindex="-1"><a class="header-anchor" href="#三、udp协议" aria-hidden="true">#</a> 三、UDP协议</h2><h3 id="_1、udp协议的特性" tabindex="-1"><a class="header-anchor" href="#_1、udp协议的特性" aria-hidden="true">#</a> 1、UDP协议的特性</h3><p><mark>UDP只在IP数据报服务之上增加了很少功能，即复用分用和差错检测功能。</mark></p><blockquote><p>UDP的主要特点</p></blockquote><ul><li><p><mark>UDP是无连接的</mark>：进行数据传输前是<strong>不需要建立专门的传输连接</strong>的，在数据发送结束时也<strong>无须释放连接</strong>了。</p></li><li><p><mark>UDP不保证可靠交付</mark>：不需要事先建立专门的传输连接的，所以它的传输是不可靠的（但会尽最大努力进行交付）</p><ul><li>分用时，找不到对应的目的端口号，就丢弃报文，并给<strong>发送方发送ICMP“端口不可达”差错报告报文</strong></li></ul></li><li><p><mark>UDP是面向报文的</mark>：适合一次性传输少量数据的网络应用</p><ul><li><p>应用层给UDP多长的报文，UDP就照样发送，即一次发一个完整报文，不做处理</p></li><li><p>UDP直接<strong>对应用层提交的报文进行封装、传输，但不拆分，也不合并，保留原来报文的边界</strong>。因此，UDP是<strong>报文流</strong>，而TCP是<strong>字节流</strong>。因为UDP不拆分报文，自然也就没有报文段之说，但UDP报文传输到网络层后，在网络层<strong>仍然可以根据网络的MTU值进行分割。</strong></p><figure><img src="https://cloud.greennut.icu/blog/network/mxbw.png" alt="图例-UDP面向报文" tabindex="0" loading="lazy"><figcaption>图例-UDP面向报文</figcaption></figure></li></ul></li><li><p><mark>UDP无拥塞控制，适合很多实时应用</mark>：使用UDP进行数据传输时<strong>不能进行流量控制和拥塞控制</strong>，因为这类数据传输的<strong>连续性要比数据的完整性更重要</strong>，允许数据在传输过程中有部分丢失，如IP电话、流媒体通信等。</p></li><li><p><mark>支持各种交互通信方式</mark>：TCP不支持组播、广播通信方式，只支持一对一的单播方式，但UDP<strong>支持各种通信方式</strong>，即可以是一对一、一对多、多对一和多对多的方式。</p></li><li><p><mark>UDP首部开销小</mark>：只包含8个字节，分布是源端口和目的端口，以及UDP长度和校验和</p></li></ul><blockquote><p>UDP的应用服务：</p></blockquote><p>计算机网络中有许多使用UDP的应用服务，如<strong>DNS、SNMP、DHCP和RIP</strong>等。</p><h3 id="_2、udp的报文格式" tabindex="-1"><a class="header-anchor" href="#_2、udp的报文格式" aria-hidden="true">#</a> 2、UDP的报文格式</h3><figure><img src="https://cloud.greennut.icu/blog/network/headudp.png" alt="图例-UDP的报文格式" tabindex="0" loading="lazy"><figcaption>图例-UDP的报文格式</figcaption></figure><p>这是UDP协议头部的一些重要字段，它们承载了UDP通信过程中的关键信息。</p><blockquote><p>以下是这些字段的功能和作用：</p></blockquote><ul><li><strong>首部字段</strong><ul><li><strong>源端口号</strong>（16位，2B）：可选填，当需要目的主机回应时使用</li><li><strong>目的端口号</strong>（16位，2B）：<strong>必要</strong>，目的进程的端口号</li><li><strong>UDP长度</strong>（16位，2B）：整个UDP数据报的长度（首部字段+数据字段）</li><li><strong>UDP检验和</strong>（16位，2B）：检测<strong>整个</strong>UDP数据报是否有错误</li></ul></li><li><strong>数据字段</strong></li></ul><h3 id="_3、udp的校验过程" tabindex="-1"><a class="header-anchor" href="#_3、udp的校验过程" aria-hidden="true">#</a> 3、UDP的校验过程</h3><h4 id="_1、伪首部" tabindex="-1"><a class="header-anchor" href="#_1、伪首部" aria-hidden="true">#</a> 1、伪首部</h4><p><mark>伪首部是用于计算UDP校验和的一个辅助数据结构，包含了一些关于IP头部的信息，只有在计算检验和时才出现， 不向下传送也不向上递交，用于确保UDP数据在传输过程中的完整性。</mark></p><figure><img src="https://cloud.greennut.icu/blog/network/weisb.png" alt="图例-伪首部" tabindex="0" loading="lazy"><figcaption>图例-伪首部</figcaption></figure><blockquote><p>伪首部模仿的是IP数据报的首部，结构如下：</p></blockquote><ul><li>源IP地址（32位）</li><li>目标IP地址（32位）</li><li>固定字段：0（8位）</li><li>协议字段：标识上层协议，UDP的协议号为17（8位）</li><li>UDP数据报长度（16位），包括UDP头部和数据部分的长度，<strong>不包括伪首部</strong></li></ul><h4 id="_2、校验过程" tabindex="-1"><a class="header-anchor" href="#_2、校验过程" aria-hidden="true">#</a> 2、校验过程</h4><ul><li>若不使用校验，则将校验和字段全部置0</li></ul><figure><img src="https://cloud.greennut.icu/blog/network/jytc.png" alt="校验过程" tabindex="0" loading="lazy"><figcaption>校验过程</figcaption></figure><blockquote><p>UDP校验填充</p></blockquote><p>下列是一种关于UDP校验和填充的过程，是对UDP数据报在发送和接收过程中进行完整性检查的方法。</p><p>这个过程包括了一些步骤，以保证数据在传输过程中的准确性和完整性：</p>',78),I=l("blockquote",null,[l("p",null,"发送方过程：")],-1),N=l("ol",null,[l("li",null,[l("strong",null,"添加伪首部"),t("：将IP头部的一部分信息（源IP地址、目标IP地址、协议类型、UDP长度等）作为伪首部与UDP头部一起使用。")]),l("li",null,[l("strong",null,"填充检验和字段"),t("：将UDP头部的检验和字段设置为全0。")]),l("li",null,[l("strong",null,"填充数据部分"),t("：使整个UDP数据报的长度成为4字节的整数倍，如果数据部分长度不是4字节的整数倍，则用全0填充。")]),l("li",null,[l("strong",null,"二进制反码求和"),t("：对伪首部+UDP头部+数据部分进行二进制反码求和，以16位（2字节）为一组进行求和。")]),l("li",null,[l("strong",null,"填入检验和字段"),t("：将求和的结果填入UDP头部的检验和字段中。如果结果全为0，则将检验和字段全部填为1。")]),l("li",null,[l("strong",null,"去掉伪首部"),t("：在发送之前，去掉添加的伪首部。")]),l("li",null,[l("strong",null,"发送"),t("：将填充后的UDP数据报发送出去。")])],-1),B=l("blockquote",null,[l("p",null,"接收方过程：")],-1),K=l("ol",null,[l("li",null,[l("strong",null,"添加伪首部"),t("：在接收到UDP数据报之后，重新添加伪首部。")]),l("li",null,[l("strong",null,"二进制反码求和"),t("：对伪首部+UDP头部+数据部分进行二进制反码求和。")]),l("li",null,[l("strong",null,"检查结果"),t("：如果结果全为1，则数据没有差错；否则，根据情况可以丢弃数据报，或者交由应用层处理，并附上差错警告。")])],-1),z=l("p",null,"这个过程基于对UDP数据报进行校验和的方法，校验和用于检测在传输过程中数据是否发生了改变或损坏。如果在计算校验和的过程中结果不全为0，则在接收端可能会发现数据有错误，并做出相应的处理。",-1);function M(R,Y){const s=g("Tabs");return u(),c("div",null,[h,d(" more "),P,r(s,{id:"616",data:[{id:"第一层"},{id:"第二层"},{id:"第三层"},{id:"第四层"},{id:"第五层"}]},{title0:n(({value:i,isActive:o})=>[t("第一层")]),title1:n(({value:i,isActive:o})=>[t("第二层")]),title2:n(({value:i,isActive:o})=>[t("第三层")]),title3:n(({value:i,isActive:o})=>[t("第四层")]),title4:n(({value:i,isActive:o})=>[t("第五层")]),tab0:n(({value:i,isActive:o})=>[b,k]),tab1:n(({value:i,isActive:o})=>[m,_]),tab2:n(({value:i,isActive:o})=>[T,C]),tab3:n(({value:i,isActive:o})=>[f]),tab4:n(({value:i,isActive:o})=>[q]),_:1}),x,r(s,{id:"1059",data:[{id:"TCP发送方缓存"},{id:"TCP接收方缓存"}]},{title0:n(({value:i,isActive:o})=>[t("TCP发送方缓存")]),title1:n(({value:i,isActive:o})=>[t("TCP接收方缓存")]),tab0:n(({value:i,isActive:o})=>[D,U,y]),tab1:n(({value:i,isActive:o})=>[A,w,v]),_:1}),S,r(s,{id:"1815",data:[{id:"发送方过程"},{id:"接受方过程"}]},{title0:n(({value:i,isActive:o})=>[t("发送方过程")]),title1:n(({value:i,isActive:o})=>[t("接受方过程")]),tab0:n(({value:i,isActive:o})=>[I,N]),tab1:n(({value:i,isActive:o})=>[B,K,z]),_:1})])}const E=a(p,[["render",M],["__file","transport.html.vue"]]);export{E as default};
