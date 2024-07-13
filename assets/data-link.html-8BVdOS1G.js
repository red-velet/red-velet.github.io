import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as r,c as o,b as t,d as l,a as n}from"./app-KXX3jVXZ.js";const s={},e=l("p",null,[l("strong",null,"数据链路层是OSI模型中的第二层，它位于物理层之上，是真正用于数据传输的逻辑通道")],-1),a=n('<h1 id="计算机网络-数据链路层" tabindex="-1"><a class="header-anchor" href="#计算机网络-数据链路层" aria-hidden="true">#</a> 计算机网络-数据链路层</h1><h2 id="一、简介" tabindex="-1"><a class="header-anchor" href="#一、简介" aria-hidden="true">#</a> 一、简介</h2><h3 id="_1、概述" tabindex="-1"><a class="header-anchor" href="#_1、概述" aria-hidden="true">#</a> 1、概述</h3><blockquote><p>数据链路层是什么？</p></blockquote><ul><li>数据链路层是OSI模型中的第二层，它位于物理层之上，是真正用于<strong>数据传输</strong>的<strong>逻辑通道</strong></li><li>例如：要在一条通信线路上传送数据，除了必须建立一条<strong>物理线路</strong>（物理层的功能）之外，还必须有一些<strong>规程</strong>或<strong>协议</strong>来<strong>控制这些数据的传输</strong>，以保证被传输数据的正确性。 <ul><li>实现这些规程或协议的硬件和软件加上物理线路就构成了<strong>数据链路层</strong>。</li></ul></li></ul><blockquote><p>数据链路层的功能/作用是什么？</p></blockquote><ol><li>在原始的、有差错的物理传输线路的基础上，采取<strong>差错检测、差错控制</strong>与<strong>流量控制</strong>等方法，将<strong>有差错的物理线路</strong>改进成<strong>逻辑上无差错的数据链路</strong>，以便向<strong>网络层</strong>提供高质量的服务。</li><li>就像我们乘坐高铁/火车，我们买票、进站、乘车、出站都要经历铁路部门的规则 <ol><li>买票-流量控制</li><li>进站出站检测、上车前后验票 - 差错检测</li></ol></li><li>数据链路层就是保证我们传输的数据能<strong>有序的、进出站</strong>，最终使这条数据通信之“路”发挥它本来的作用。</li></ol><blockquote><p>解决问题：</p></blockquote><ul><li><p><strong>通过数据链路层解析物理层发出去的信号怎么样选择、如何到达目的地</strong></p></li><li><p><strong>比特流的分界线</strong></p><ul><li><p><strong>链路(Link)</strong>：从一个结点到相邻结点的一段物理线路，中间没有任何其他交换结点</p></li><li><p><strong>数据链路(Data Link)</strong>：把实现通信协议的硬件和软件加到链路上，就构成了数据链路</p></li><li><p>数据链路层以<strong>帧</strong>为单位传输和处理数据</p></li></ul></li></ul><h3 id="_2、组成结构" tabindex="-1"><a class="header-anchor" href="#_2、组成结构" aria-hidden="true">#</a> 2、组成结构</h3><p>在数据链路层中，通常由两个子层组成：</p><ol><li><mark>介质访问控制子层（Media Access Control, MAC）</mark>： <ul><li>物理层相邻的是<strong>MAC子层</strong>，为LLC子层服务</li><li>与各种<strong>传输介质访问</strong>有关的问题都放在“MAC子层”来解决。其主要功能包括：<strong>数据帧的封装/卸装</strong>，<strong>帧的寻址和识别（<strong>通过MAC地址进行的</strong>）</strong>，<strong>帧的接收与发送</strong>，帧的<strong>差错控制</strong>、介质<strong>访问冲突控制</strong>等。</li></ul></li><li><mark>逻辑链路控制子层（Logical Link Control, LLC）</mark>： <ul><li>网络层相邻的是<strong>LLC子层</strong>，而LLC子层则是接受MAC子层服务，为网络层服务</li><li>数据链路层中与<strong>传输介质访问无关的问题</strong>都集中在LLC子层来解决，为网络层提供服务。其主要功能包括<strong>逻辑链路的建立和释放</strong>、提供与网络层的接口（也就是前面说到的SAP）、数据传输<strong>差错控制</strong>、给数据帧加上<strong>传输序列号</strong>等。</li><li>由于<strong>网络层</strong>上可能有<strong>许多种通信协议</strong>同时存在，而且每一种通信协议又<strong>可能同时与多个对象沟通</strong>，因此当LLC子层从MAC子层收到一个数据包时必须能够<strong>判断要送给网络层的是哪一个通信协议</strong>。为了达到这种功能，在LLC子层中提供了“数据链路层”的SAP，作为与“网络层”<strong>通信交互的接口</strong></li></ul></li></ol><figure><img src="https://cloud.greennut.icu/blog/network/LLCMAC.png" alt="介质访问控制子层和辑链路控制子层" tabindex="0" loading="lazy"><figcaption>介质访问控制子层和辑链路控制子层</figcaption></figure><p>逻辑链路控制子层提供了抽象和服务，而介质访问控制子层则管理实际的物理传输。这种层级结构使得数据链路层能够适应不同类型的物理介质和网络拓扑。</p><h3 id="_2、分类" tabindex="-1"><a class="header-anchor" href="#_2、分类" aria-hidden="true">#</a> 2、分类</h3><blockquote><p>数据链路层主要分为两类：</p></blockquote><p>1、<strong>点对点的数据链路层</strong>：核心问题 - 封装成帧、差错检测、可靠传输</p><ul><li>两个相邻节点的通过链路连接，没有第三者</li><li>应用：PPP协议，常用于广域网</li></ul><p>2、<strong>使用广播信道的数据链路层</strong>：确定目的主机问题、碰撞问题</p><ul><li>所有主机共享通信介质</li><li>应用：早期以太网、局域网</li><li>拓扑结构：星型（逻辑总线型）、总线型</li></ul><h2 id="二、数据链路层的功能" tabindex="-1"><a class="header-anchor" href="#二、数据链路层的功能" aria-hidden="true">#</a> 二、数据链路层的功能</h2><h3 id="_1、数据链路管理" tabindex="-1"><a class="header-anchor" href="#_1、数据链路管理" aria-hidden="true">#</a> 1、数据链路管理</h3><blockquote><p>什么是数据链路管理？</p></blockquote><p>在数据链路层中要形成一条<strong>更有利于数据传输的数据链路</strong>，而不是直接利用下面物理层中建立的物理链路，因为下面物理层中建立的物理链路有着很多传输介质的差异：</p><ul><li><p><strong>数据链路</strong>是由数据链路层中的<strong>LLC子层</strong>通过相应的<strong>通信规程</strong>（也就是通常所说的协议）<strong>建立并管理</strong>的。</p><ul><li><h6 id="主要过程包括-链路建立、链路保持、链路释放" tabindex="-1"><a class="header-anchor" href="#主要过程包括-链路建立、链路保持、链路释放" aria-hidden="true">#</a> <mark>主要过程包括：链路建立、链路保持、链路释放</mark></h6></li></ul></li><li><p>不同协议建立的数据链路，<strong>提供的服务类型也不同</strong>。</p></li></ul><blockquote><p>数据链路层的提供的服务类型：</p></blockquote><h4 id="a-有确认的面向连接服务" tabindex="-1"><a class="header-anchor" href="#a-有确认的面向连接服务" aria-hidden="true">#</a> （a）有确认的面向连接服务</h4><ul><li>提供服务时，必须先<strong>建立好双方通信连接</strong>；</li><li>提供服务时，必须要求对方<strong>确认后才进行</strong>。</li><li>独占链路，只有在当前数据传输完成，<strong>释放了链路</strong>后，其他用户才可能与<strong>同一个接收端进行数据传输</strong></li></ul><p>这种服务类型存在<strong>三个阶段</strong>，即数据链路建立、数据传输、数据链路释放</p><p>就像我们打电话，我们打电话给某个人时，首先就是要拿起电话拨号（相当于<strong>建立连接</strong>的过程），然后对方拿起电话，问一下看是不是打错了（这就是一个<code>确认</code>过程）。<strong>确认不是打错的电话后，双方 开始通话。</strong></p><h4 id="b-有确认的无连接服务" tabindex="-1"><a class="header-anchor" href="#b-有确认的无连接服务" aria-hidden="true">#</a> <strong>（b）有确认的无连接服务</strong></h4><ul><li><strong>不需要建立</strong>专门的数据链路</li><li>接收端在接收到的每一个数据帧时都<strong>向发送端确认</strong></li></ul><p><strong>事实上是因为这类服务所用的数据链路已建立起来，而且是永久存在的，所以不用另外建立，如局域网中的链路，就像寄快递，送快递的路线早就建立好了，我们只需要寄出去，等收件人确认就好了，不用关心快递运送的路线。</strong></p><h4 id="c-无确认的无连接服务" tabindex="-1"><a class="header-anchor" href="#c-无确认的无连接服务" aria-hidden="true">#</a> <strong>（c）无确认的无连接服务</strong></h4><ul><li><strong>不需要建立</strong>专门的数据链路</li><li>接收端在接收到的每一个数据帧时<strong>不需要向发送端确认</strong></li></ul><p><strong>这种服务类型看似不可靠，但它是建立在可靠的通信线路基础之上的，所以数据传输仍然是非常可靠的，就像公司内部的专线网络VPN。</strong></p><h3 id="_2、封装成帧和透明传输" tabindex="-1"><a class="header-anchor" href="#_2、封装成帧和透明传输" aria-hidden="true">#</a> <strong>2、封装成帧和透明传输</strong></h3><h4 id="a-封装成帧功能的含义" tabindex="-1"><a class="header-anchor" href="#a-封装成帧功能的含义" aria-hidden="true">#</a> （a）封装成帧功能的含义</h4><ol><li><p>在<strong>发送端</strong>，数据链路层是<mark>接收来自网络层的数据分组/数据包，是将来自网络层的数据分组封装成数据帧</mark>.</p></li><li><p>在<strong>接收端</strong>，数据链路层是<mark>接收来自物理层的比特流，将来自物理层的一个个比特流组装成数据帧</mark>.</p></li><li><p>封装成帧大多指：PPP帧、以太网MAC帧</p><ul><li><strong>🔺PPP帧</strong>、以太网MAC帧： <ul><li>MAC帧不需要帧定界符，在物理层发送前会添加前导码8个（前7个为时间同步码，后面1个字节为帧开始定界符）</li></ul></li></ul></li></ol><h4 id="b-数据包的帧封装原理" tabindex="-1"><a class="header-anchor" href="#b-数据包的帧封装原理" aria-hidden="true">#</a> （b）数据包的帧封装原理</h4><ol><li><mark>第一步</mark>：<strong>网络层的数据包</strong>到达数据链路层后加上数据链路层的<strong>协议头和协议尾</strong>就构成了一个<strong>数据帧</strong>。</li><li><mark>第二步</mark>：在每个<strong>数据帧</strong>的前部加上一个<strong>帧头部</strong>，在帧的结尾处加上一个<strong>帧尾部</strong>，把<strong>数据帧</strong>作为帧的<strong>数据部分</strong>，就构成了一个完整帧。 <ul><li>其中<strong>帧有大小限制</strong>，不同网络类型下不同。</li><li>帧头和帧尾就是作为帧的<strong>起始和结束标志</strong>，也就是<strong>帧边界。</strong></li></ul></li></ol><figure><img src="https://cloud.greennut.icu/blog/network/zhenfz.png" alt="帧封装流程" tabindex="0" loading="lazy"><figcaption>帧封装流程</figcaption></figure><h4 id="c-比特流的帧组装原理" tabindex="-1"><a class="header-anchor" href="#c-比特流的帧组装原理" aria-hidden="true">#</a> （c）比特流的帧组装原理</h4><ol><li>在<strong>发送端</strong>数据链路层中的<strong>帧到达物理层后</strong>就会<strong>以比特位为单位进行传输</strong>，发送端以比特位方式一位位地传输到接收端的物理层。</li><li><strong>接收端的物理层</strong>把比特流<strong>向数据链路层传输</strong>，到达后又要将<strong>比特流封装成数据帧</strong></li><li><mark>核心问题 - 帧同步问题</mark>：使<strong>接收端的数据链路层</strong>对从物理层传输而来的一串串比特流<strong>以帧为单位进行区分，怎么区分不同帧之间的定界问题。</strong></li></ol><blockquote><p>帧同步方法：</p></blockquote><p><strong>（Ⅰ）字节计数法</strong></p><p>以一个特殊字符<strong>代表一个帧的起始</strong>，并以一个专门的字段来<strong>标识当前帧内字节数</strong>。接收端通过<strong>对该特殊字符的识别</strong>从比特流中<strong>区分出每个帧的起始</strong>，并根据字节数，判断<strong>帧的结尾</strong></p><figure><img src="https://cloud.greennut.icu/blog/network/bytecount.png" alt="字节计数法" tabindex="0" loading="lazy"><figcaption>字节计数法</figcaption></figure><p><strong>（Ⅱ）字符填充的首尾定界符法</strong></p><ul><li>用一些特定的控制字符来定界一个帧的起始与结束，如在帧的头部<strong>加上了两个SYN控制字符</strong>，用于标识该帧的<strong>开始</strong>，在结束位置加了<strong>ETX控制字符</strong>，用于标识该<strong>帧的结束。</strong></li><li>如：BSC协议</li></ul><figure><img src="https://cloud.greennut.icu/blog/network/image-20231221153437808.png" alt="字符填充的首尾定界符法" tabindex="0" loading="lazy"><figcaption>字符填充的首尾定界符法</figcaption></figure><p><strong>（Ⅲ）比特填充的首尾定界符法</strong></p><ul><li>通过在帧头和帧尾各插入<strong>一个特定的比特串</strong>（如01111110）来标识一个数据帧的<strong>起始</strong>与<strong>结束</strong>。</li><li>如：SDLC、HDLC协议</li></ul><p><strong>（Ⅳ）违法编码法</strong></p><ul><li>在物理层采用<strong>特定的比特编码</strong>方法时采用。</li><li>例如，曼彻斯特编码方法，将数据<code>1</code>编码成<code>高-低</code>电平对，将数据<code>0</code>编码成<code>低-高</code>电平对。而<code>高-高</code>电平对和<code>低-低</code>电平对在数据比特中是违法的，因此可以<strong>借用这些违法编码序列</strong>来定界帧的<strong>起始与终止</strong>。</li></ul><p><strong>（Ⅴ）PPP同步传输协议</strong></p><p>面向字符传输，PPP帧结构如下</p><figure><img src="https://cloud.greennut.icu/blog/network/pppzhen.png" alt="PPP帧结构" tabindex="0" loading="lazy"><figcaption>PPP帧结构</figcaption></figure><ul><li><p>总共8个字节，帧头5个，帧尾3个。</p><ol><li><p><strong>标志(Flag)字段</strong>：值固定为<strong>01111110</strong>（<strong><code>0x7E</code></strong>），标志帧的起始或结束。</p></li><li><p><strong>协议(Protocol)字段</strong>：表示封装的是哪个网络层协议包表示PPP帧的定界符。</p></li><li><p><strong>地址(Address)字段</strong>：值为<code>0xFF</code>，目前没有特定作用，保留字段。</p></li><li><p><strong>控制(Control)字段</strong>：值为<code>0x03</code>，也是保留字段，目前没有特定作用。</p></li><li><p><strong>协议(Protocol)字段</strong>：指明帧的数据部分送交哪个协议处理。例如：</p><ul><li><code>0x0021</code> 表示数据部分为1P数据报（IP数据报）。</li><li><code>0xC021</code> 表示数据部分为LCP分组。</li><li><code>0x8021</code> 表示数据部分为NCP分组。</li></ul></li><li><p><strong>FCS（帧检验序列）字段</strong>：CRC计算出的校验位，用于检测帧在传输过程中是否发生了错误。</p></li></ol></li></ul><h4 id="d-透明传输" tabindex="-1"><a class="header-anchor" href="#d-透明传输" aria-hidden="true">#</a> （d）透明传输</h4><p>因为在帧的有效数据当中，<strong>可能出现和帧定界的控制字符一样的字符，为了防止将这些字符当中帧定界的字符，错误的处理帧，所以我们采方法使得数据当中可能出现的控制字符“SOH”和“EOT”在接收端不被解释为控制字符</strong></p><ul><li><strong>对于面向字节/字符的链路</strong><ul><li>发送方：帧头帧尾有标志位用来划分一个个帧，如果帧内部恰好也出现了标志位，则在第一次扫描时在标志位前面<strong>加一个转义字符帮助区分哪个是真正的帧头。考虑到转义字符也可能在帧内部出现，因此在转义字符前也加转义字符</strong>。</li><li>接收方：接到消息后但凡看到转义字符开头就会去掉转义字符并且对其后一个字符不做特殊处理</li></ul></li><li><strong>对于面向比特的链路</strong><ul><li>发送方：在发送前，对帧的数据部分进行扫描，<strong>每5个连续的比特1后就插入1个比特0</strong>，防止其与首部尾部的标志位混淆(<strong>零比特填充法</strong>)。</li><li>接收方接收时将每5个连续的比特1后面的0剔除即可</li></ul></li></ul><h3 id="_3、差错检测" tabindex="-1"><a class="header-anchor" href="#_3、差错检测" aria-hidden="true">#</a> 3、差错检测</h3><p><code>封装成帧</code>功能解决了<strong>帧同步问题</strong>，也就是接收端可以区分每个数据帧的起始和结束了，但是还没有解决<strong>数据正确传输</strong>的两方面问题。</p><ol><li>如果有<strong>帧出现了错误</strong>怎么办？—&gt; <mark>差错检测</mark></li><li>如果有<strong>帧丢失</strong>了怎么办？—&gt; <mark>可靠传输</mark></li></ol><hr><h4 id="i-奇偶校验码" tabindex="-1"><a class="header-anchor" href="#i-奇偶校验码" aria-hidden="true">#</a> （Ⅰ）奇偶校验码</h4><p>奇偶校验码(PCC)：根据被传输的一组二进制代码的数位中“1”的个数是奇数或偶数来进行校验的。</p><ul><li><p><mark>实现</mark>：</p><ul><li>发送端：在待发送的传输的二进制<strong>代码最后专门设置1个奇偶校验位</strong>，用它<strong>控制这组代码中1的个数为奇数或偶数</strong>（具体是偶数还是奇数，要视所采用的是偶校验还是奇校验）</li><li>接收端：看里面的“1”的个数是否仍<strong>与原来一样的奇数或偶数</strong>，来确定数据传输的正确性。</li></ul></li><li><p><mark>问题</mark>：</p><ul><li>如果有奇数个位发生误码，则奇偶性发生变化，可以检查出误码；如果有偶数个位发生误码，则奇偶性不发生变化，不能检查出误码(漏检)</li><li>所以奇偶校验方法只可以用来检查<strong>单个码元错误</strong>，<strong>检错能力较差</strong>，所以一般只用于本身<strong>误码率较低</strong>的环境</li></ul></li></ul><h4 id="ii-循环冗余校验" tabindex="-1"><a class="header-anchor" href="#ii-循环冗余校验" aria-hidden="true">#</a> （Ⅱ）循环冗余校验</h4><p>循环冗余校验(CRC)：根据帧内的FCS来进行校验的。</p><ul><li><mark>实现</mark>: <ol><li>收发双方：约定好一个生成多项式<code>G(x)</code>= 用来<strong>作为除数</strong>的<strong>二进制比特串</strong>（或多项式）</li><li>发送方： <ul><li>基于<strong>待发送的数据（原始帧）和生成多项式(上面选定的除)<strong>进行计算(<strong>二进制除法运算</strong>)得到差错检测码</strong>【冗余码FCS】</strong></li><li>将其添加到待传输数据的后面一起传输</li></ul></li><li>接收方：通过<strong>生成多项式(上面选定的除)</strong> 和【冗余码FCS】来计算收到的数据是否产生了误码</li><li>假设比特串为n位，那么在原始帧后面加上<strong>n-1个0</strong>，并用<strong>二进制除法</strong>除以该<strong>比特串</strong>，最后的余数就是<strong>FCS校验码</strong>，将FCS校验码放在原始帧最后，<strong>接收端</strong>拿到数据后，用<strong>二进制除法</strong>除以<strong>比特串</strong>，若余数为0，则没有差错，反之有差错。</li></ol></li></ul><h3 id="_4、可靠传输" tabindex="-1"><a class="header-anchor" href="#_4、可靠传输" aria-hidden="true">#</a> 4、可靠传输</h3><ul><li><strong>不可靠传输服务</strong>：仅仅丢弃有误码的帧，其他什么也不做</li><li><strong>可靠传输</strong>：想办法实现发送端发送什么，接收端就收到什么，可靠传输服务并<strong>不仅局限于数据链路层，其他各层均可选择实现可靠传输</strong>，是否使用可靠传输取决于应用需求。</li></ul><h4 id="i-停止-等待协议-自动请求重传" tabindex="-1"><a class="header-anchor" href="#i-停止-等待协议-自动请求重传" aria-hidden="true">#</a> （Ⅰ）停止-等待协议/自动请求重传</h4><blockquote><p>停止-等待协议SW（自动请求重传ARQ）：</p></blockquote><ul><li><p><mark>实现原理</mark>：发送方每发送一个数据分组后，就停止发送下一个数据分组，等待接收方的确认分组或否认分组，若收到确认分组，则继续发送下一个分组，若收到否认分组，则重复之前发送的那个数据分组。</p></li><li><p><mark>存在的问题</mark>：数据分组丢失、确认分组丢失、确认分组超时</p><ol><li>数据分组丢失的情况：超时重传</li><li>确认分组丢失、确认分组超时的情况：数据分组、确认分组进行编号，防止重复发送、重复确认</li></ol></li><li><p>总结：</p><ol><li><strong>接收端检测到数据分组有误码时，将其丢弃并等待发送方的超时重传</strong>。但对于误码率较高的点对点链路，为使发送方尽早重传，也可给发送方发送NAK分组</li><li>为了让接收方能够判断所收到的数据分组是否是重复的，需要<strong>给数据分组编号</strong>。由于停止-等待协议的停等特性，只需1个比特编号就够了，即编号0和1。</li><li>为了让发送方能够判断所收到的ACK分组是否是重复的，需要<strong>给ACK分组编号</strong>，所用比特数量与数据分组编号所用比特数量一样。数据链路层一般不会出现ACK分组迟到的情况，因此在数据链路层实现停止-等待协议可以不用给ACK分组编号。</li><li><strong>超时计时器设置的重传时间应仔细选择</strong>。一般可将重传时间选为略大于“从发送方到接收方的平均往返时间”。</li><li>使用卫星链路及重传时，信道利用率较低。</li></ol></li></ul><h4 id="ii-回退n帧协议" tabindex="-1"><a class="header-anchor" href="#ii-回退n帧协议" aria-hidden="true">#</a> （Ⅱ）回退N帧协议</h4><blockquote><p>回退N帧协议 (Go-Back-N) ：</p></blockquote><p>回退N帧协议是一种滑动窗口协议，用于实现可靠的数据传输。它允许发送方连续发送多个分组，而不必等待确认，接收方按序接收分组。</p><ul><li><mark>实现原理</mark>： <ul><li><p><strong>发送方窗口</strong>：发送方可以连续发送多个分组，窗口的大小为N。</p></li><li><p><strong>接收方窗口</strong>：接收方窗口大小为1，只能按序接收分组。</p></li><li><p><strong>确认分组</strong>：接收方只能发送最后一个正确接收的分组的确认，其他分组的确认将被丢弃。</p></li><li><p><strong>超时重传</strong>：发送方设置定时器，超时后会重新发送窗口内的所有分组。</p></li></ul></li><li>整个工作流程： <ol><li>发送方连续发送窗口内的分组。</li><li>接收方按序接收分组，发送确认。</li><li>如果接收方检测到分组失序，则丢弃后续分组，直到接收到正确的分组为止。</li><li>发送方根据接收到的确认信息移动发送窗口。</li><li>如果发送方未收到确认，或者收到了错误的确认，则超时重传窗口内的所有分组或者重传末尾帧确认后开始。</li></ol></li><li><strong>总结</strong>：回退N帧协议是一种常用的滑动窗口协议，适用于许多实时性要求不高，但需要高可靠性的网络通信场景。 <ul><li>适用于具有较高信道质量的网络环境，且丢包率较低的情况，充分利用了网络带宽，发送方可以连续发送多个分组。</li><li>如果丢失一个分组，会导致窗口内的所有分组都需要重传，可能会浪费带宽。</li></ul></li></ul><h4 id="iii-选择重传协议" tabindex="-1"><a class="header-anchor" href="#iii-选择重传协议" aria-hidden="true">#</a> （Ⅲ）选择重传协议</h4><blockquote><p>选择重传协议 (Selective Repeat, SR) ：</p></blockquote><p>是一种滑动窗口协议，用于实现可靠的数据传输。它允许发送方连续发送多个分组，接收方可以选择性地确认分组，同时允许接收方接收乱序的分组。</p><ul><li><p><mark>实现原理</mark>：</p><ul><li><p><strong>发送方窗口</strong>：发送方可以连续发送多个分组，窗口的大小为N。</p></li><li><p><strong>接收方窗口</strong>：接收方窗口大小为N，可以接收窗口内的分组。</p></li><li><p><strong>确认分组</strong>：接收方可以选择性地确认分组，只会确认已经正确接收的分组。</p></li><li><p><strong>超时重传</strong>：发送方为每个分组设置独立的定时器，超时后会重新发送相应的分组。</p></li></ul></li><li><p>整个工作流程：</p><ol><li>发送方连续发送窗口内的分组。</li><li>接收方按序接收分组，发送确认。</li><li>接收方可以选择性地确认分组，如果接收到的分组有误，则丢弃并不会发送确认。</li><li>发送方根据接收到的确认信息移动发送窗口。</li><li>如果发送方未收到确认，或者收到了错误的确认，则超时重传相应的分组。</li></ol></li><li><p><strong>总结</strong>：适用于具有一定信道质量的网络环境，可以容忍一定程度的丢包情况。</p><ul><li><p>充分利用了网络带宽，发送方可以连续发送多个分组。</p></li><li><p>允许接收方接收乱序的分组，提高了网络利用率。</p></li><li><p>发送方和接收方都需要维护更复杂的状态信息。</p></li></ul></li></ul><h3 id="_5、流量控制" tabindex="-1"><a class="header-anchor" href="#_5、流量控制" aria-hidden="true">#</a> 5、流量控制</h3><p><mark>流量控制并不是数据链路层所特有的功能，许多高层协议中也提供流量控功能，只不过流量控制的对象不同而已。比如，对于数据链路层来说控制的是相邻两节点之间数据链路上的流量，而对于传输层来说控制的是从源到最终目的端之间的流量。</mark></p><blockquote><p>流量控制：对发送端数据传输速率的控制，使其数据发送速率不超过接收端所能承受的数据接收能力。</p></blockquote><ol><li>发送端的数据<strong>发送速度与接收端的数据接收速度要匹配</strong>，否则接收端来不及接收就会造成数据在传输过程中的丢失。</li><li>发送端的数据<strong>发送速度要与线路上的承载速率（与线路信道带宽有关）相匹配</strong>，否则也会造成数据在传输过程中的丢失</li></ol><p>是考虑到在接收端还需要对来自物理层的比特流进行一系列的处理，如帧封装，向发送端发送返回确认帧等，所以通常是要使<strong>发送端的发送速率略小于接收端的数据处理能力</strong>。</p><blockquote><p>流量控制实现方法</p></blockquote><h4 id="i-基于反馈的流量控制方案" tabindex="-1"><a class="header-anchor" href="#i-基于反馈的流量控制方案" aria-hidden="true">#</a> （Ⅰ）基于反馈的流量控制方案</h4><p>差错控制中的“<strong>自动重发请求</strong>”就是基于反馈的流量控制。</p><p><strong>XON/XOFF（继续/停止）</strong>：</p><ol><li>接收端认为<strong>不能继续接收数据</strong>时（也就是接收端的<strong>缓存空间满了</strong>或者<strong>接近满</strong>时），接收端会向发送端发送一个<strong>XOFF控制字符</strong></li><li>当发送端收到对应的XOFF控制字符时就<strong>停止数据的继续发送</strong>；</li><li>当接收端可以<strong>继续接收数据</strong>时，接收端会再向发送端发送一个<strong>XON控制字符</strong></li><li>发送端收到这个控制字符后就知道可以<strong>恢复数据发送</strong>了，继续发送数据，一直这么循环下去。</li></ol><h4 id="ii-基于速率的流量控制方案" tabindex="-1"><a class="header-anchor" href="#ii-基于速率的流量控制方案" aria-hidden="true">#</a> （Ⅱ）基于速率的流量控制方案</h4><p>基于<strong>窗口滑动机制</strong>的<strong>速率控制方，<strong>差错控制中的</strong>回退N帧协议</strong>和<strong>选择重传协议</strong>就是基于速率的流量控制</p><p><strong>收发双方维持收发窗口N</strong>：</p><p>假设发送端<strong>缓存空间大小为3个帧</strong>，那么发送端连着发了3个帧后，缓存空间满了，就要停止，等待接收端的确认，当发送端收到接收端对前两个帧的确认后，发送端将前两个帧从缓存空间中删去，再发送两个帧，此时缓存空间又满了，又要等待确认.....如此循环下去。</p><h2 id="三、介质访问控制" tabindex="-1"><a class="header-anchor" href="#三、介质访问控制" aria-hidden="true">#</a> 三、介质访问控制</h2><h3 id="_1、概述-1" tabindex="-1"><a class="header-anchor" href="#_1、概述-1" aria-hidden="true">#</a> 1、概述</h3><blockquote><p>介质访问控制子层（MAC子层）：</p></blockquote><ul><li>是局域网体系结构中<strong>划分的子层</strong>，对于广播型网络（如以太局域网、WLAN）是非常重要的，因为它担负了两方面的主要职责： <ol><li>解决如何在局域网内<strong>寻址</strong>（也就是找到目的节点）</li><li>解决如何在多路通信中<strong>介质争用</strong>的现象。</li></ol></li></ul><blockquote><p>由于数据链路层主要分为两类：点对点的数据链路层、使用广播信道的数据链路层</p></blockquote><p>不同节点之间通过介质（信道）进行访问，在广播信道中所有主机共享通信介质，这就引发了一个共享信道争用的问题。而<mark>介质访问控制</mark>就是采取一定的措施，使两对节点之间的通信不会发生互相干扰，主要分为分为两种：</p><ol><li><p><strong>静态划分信道</strong></p><ul><li><strong>信道划分介质访问控制</strong>：频分多路复用、时分多路复用、波分多路复用、码分多路复用 <ul><li><strong>多路复用</strong>：将多个信号组合在一个信道上进行传输，到目的后再分离为多个信号，<strong>本质上</strong>是将广播信号变为多个点对点链路</li></ul></li></ul></li><li><p><strong>动态划分信道</strong></p><ul><li><strong>随机访问介质控制</strong>：随机介入控制协议（<code>CMSA/CD</code>、<code>CMSA/CA</code>等）</li><li><strong>轮询访问介质控制</strong>：轮询协议、令牌传递协议</li><li>我们把：如何协调多个发送和接收站点对一个共享传输媒体的占用的问题成为媒体接入控制<mark>MAC(Medium Access Control)</mark></li></ul></li></ol><h3 id="_2、信道划分介质控制" tabindex="-1"><a class="header-anchor" href="#_2、信道划分介质控制" aria-hidden="true">#</a> 2、信道划分介质控制</h3><h4 id="_1-静态划分信道" tabindex="-1"><a class="header-anchor" href="#_1-静态划分信道" aria-hidden="true">#</a> （1）静态划分信道</h4><h5 id="i-频分多路复用-fdm" tabindex="-1"><a class="header-anchor" href="#i-频分多路复用-fdm" aria-hidden="true">#</a> （Ⅰ）频分多路复用（FDM）</h5><p>各个用户分配不同的<strong>频带</strong>，之后始终使用相同的频带进行通信。</p><p>不同的用户在同样的时间占用不同的<strong>带宽</strong>（模拟信号角度的带宽）</p><ul><li>系统效率较高</li><li>实现简单</li></ul><h5 id="ii-时分多路复用-tdm" tabindex="-1"><a class="header-anchor" href="#ii-时分多路复用-tdm" aria-hidden="true">#</a> （Ⅱ）时分多路复用（TDM）</h5><p>将时间划分为等长的<strong>时分复用帧</strong>，每一帧划分为若干<strong>时隙</strong>。</p><p>每一个用户在一个TDM帧中占用固定序号的时隙。</p><blockquote><p>改进：统计时分复用（STDM）</p></blockquote><ul><li>使用集中器收集各个用户的数据，并按照先后顺序存入自己的缓存，之后按照先后顺序填充STDM帧，帧满即发送出去。</li><li>STDM帧大小小于连接在集中器上的用户数。</li></ul><h5 id="iii-波分多路复用-wdm" tabindex="-1"><a class="header-anchor" href="#iii-波分多路复用-wdm" aria-hidden="true">#</a> （Ⅲ）波分多路复用（WDM）</h5><ul><li>介质为光纤，原理类似于<strong>光的频分多路复用</strong>。</li></ul><h5 id="iv-码分多路复用-cdm" tabindex="-1"><a class="header-anchor" href="#iv-码分多路复用-cdm" aria-hidden="true">#</a> （Ⅳ）码分多路复用（CDM）</h5><p><strong>码分多址（CDMA）</strong>：将一个比特位用一组特定的<strong>码片</strong>发送，每一个用户拥有唯一的码片，用不同的码来区分不同的用户信号，允许同时传输多个信号。</p><ul><li>码片直接发送代表1，反码发送代表0。</li><li>对于各个用户的码片，要求其<strong>规格化内积等于0，且其自身的内积为1</strong></li></ul><blockquote><p>复用与多址的区别：</p></blockquote><ul><li><p>复用：是将单一媒体的频带资源划分成很多子信道，这些<strong>子信道之间相互独立，互不干扰</strong>。从媒体的整体频带资源上看，每个子信道只占用该媒体频带资源的一部分</p></li><li><p>多址：(更确切地应该称为多点接入)处理的是动态分配信道给用户。这在用户<strong>仅仅暂时性地占用信道</strong>的应用中是必须的，而所有的移动通信系统基本上都属于这种情况。相反，在信道永久地分配给用户的应用中，多址是不需要的(对于无线广播或电视广播站就是这样)</p></li></ul><h4 id="_2-动态划分信道" tabindex="-1"><a class="header-anchor" href="#_2-动态划分信道" aria-hidden="true">#</a> （2）动态划分信道</h4><h5 id="i-随机访问介质控制" tabindex="-1"><a class="header-anchor" href="#i-随机访问介质控制" aria-hidden="true">#</a> （Ⅰ）随机访问介质控制</h5><p>在随机接入中，所有站点通过竞争随机地在信道上发送数据，发送信息时占用<strong>全部带宽</strong>。</p><ul><li>如果恰巧有两个或更多的站点在同一时刻发送数据，则会发生碰撞（即冲突）。在发生冲突后，这些站点的发送都会失败。因此，这类协议需要解决如何尽量避免冲突以及在发生冲突后如何尽快恢复通信。</li></ul><blockquote><p>CMSA/CD协议：载波监听多址接入/碰撞检测 - 早期的双绞线，以太网，广播信道的有线局域网</p></blockquote><ol><li><p>多个站点连接在一条总线上，竞争使用总线进行通信。</p></li><li><p>每一个站在发送帧之前先要检测一下总线上是否有其他站点在发送帧</p><ul><li>如果检测到总线空闲，就立即发送帧。</li><li>若检测到总线忙，则继续检测并等待总线转为空闲。</li></ul></li><li><p>一旦发送帧，站点会边发送边监听总线，以检测是否发生碰撞。</p><ul><li>若发现碰撞，立即停止发送，然后进行退避（等待一段随机时间）后再次尝试发送。</li></ul><p>如果发送成功，站点等待总线转为空闲96比特时间后，再发送下一个帧。</p></li></ol><p><mark>以太网规定：</mark></p><ul><li><p>最小帧长为64字节，即512比特(512比特时间即为争用期)</p></li><li><p>最大帧长为1518-mac帧，vlan帧-1522</p></li><li><p>如果要发送的数据非常少，那么必须加入一些填充字节，使帧长不小于64字节，以太网的最小帧长确保了主机可在帧发送完成之前就检测到该帧的发送过程中是否遭遇了碰撞。</p></li></ul><hr><blockquote><p>CMSA/CA协议：载波监听多址接入/碰撞避免 - 广播信道的无线局域网</p></blockquote><ul><li>802.11无线局域网使用CSMA/CA协议，在CSMA的基础上增加了一个碰撞避免CA功能，而不再实现碰撞检测功能 <ul><li>由于不可能避免所有的碰撞，并且无线信道误码率较高，802.11标准还使用了数据链路层确认机制(停止-等待协议)来保证数据被正确接收</li><li>在无线局域网中，仍然可以使用载波监听多址接入CSMA，即在发送帧之前先对传输媒体进行载波监听。若发现有其他站在发送帧，就推迟发送以避免碰撞</li></ul></li></ul><p>在无线局域网中，不能使用碰撞检测CD，原因如下：</p><ol><li>由于无线信道的传输条件特殊，其信号强度的动态范围非常大，无线网卡上接收到的信号强度往往会远远小于发送信号的强度(可能差百万倍)。如果要在无线网卡上实现碰撞检测CD，对硬件的要求特别高。</li><li>即使能够在硬件上实现无线局域网的碰撞检测功能，但由于无线电波传播的特殊性(存在<strong>隐蔽站</strong>的问题-不相交)，进行碰撞检测的意义也不大。</li></ol><p>802.11的MAC层标准定义了两种不同的媒体接入控制方式：</p><ol><li><strong>分布式协调功能DCF</strong>：在DCF方式下，没有中心控制站点，每个站点使用CSMA/CA协议通过争用信道来获取发送权，这是802.11定义的默认方式</li><li><strong>点协调功能PCF</strong>：PCF方式使用集中控制的接入算法(一般在接入点AP实现集中控制)，是802.11定义的可选方式，在实际中较少使用</li></ol><hr><blockquote><p>名词拓展：</p></blockquote><ul><li><p><code>IFS</code>：802.11标准规定，所有的站点必须在持续检测到信道空闲一段指定时间后才能发送帧，这段时间称为帧间间隔</p></li><li><p><code>SIF</code>：这是最短的帧间间隔，用来分隔开属于一次对话的各帧。</p><ul><li><p>一个站点应当能够在这段时间内从发送方式切换到接收方式。</p></li><li><p>使用SIFS的帧类型由ACK帧、CTS帧、由过长的MAC帧分片后的数据帧、以及所有回答AP探询的帧和在PCF方式中接入点AP发送出的任何帧</p></li></ul></li><li><p><code>DIFS</code>：它比短帧间间隔SIFS要长得多，在DCF方式中用来发送数据帧和管理帧</p></li><li><p>信道预约：RTS、CTS</p></li></ul><blockquote><p>衍生问题：</p></blockquote><p>①为什么源站检测到信道空闲后，还需要等待DIFS时间才将帧发送呢？</p><p>​ 因为其他站此时可能有优先级更高的帧需要发送，因此有DIFS时间进行缓冲，若这个时间内没有高优先级的帧要发送，则说明信道是真正的空闲</p><p>②为什么目的站接收到帧后还需要等到SIFS时间才返回ACK确认帧呢？</p><p>​ SIFS是最短的帧间间隔，用来分割一次对话的各帧，在这个时间里由接收状态转变为发送状态</p><p>③当其他站要发送数据，但是发现此时信道正忙时就会退避一段时间，等信道不忙后再进行操作，接着等待DIFS时间(与①同理)，但为什么等待了DIFS时间后还要退避一段随机时间呢？</p><p>​ 因为可能有多个站点在信道忙时都想发送帧，因此它们都会被搁置直至信道不忙，在DIFS时间后他们会同时发送，而实际上多个站点同时发送数据会碰撞。因此需要一个随机时间将他们进行错峰发送。</p><hr><h5 id="ii-轮询访问介质控制" tabindex="-1"><a class="header-anchor" href="#ii-轮询访问介质控制" aria-hidden="true">#</a> （Ⅱ）轮询访问介质控制</h5><p>轮询访问：用户在发送数据前需要等待授权</p><blockquote><p>轮询协议：主结点轮流“邀请”从属结点发送数据。</p></blockquote><ul><li><p>一个中心节点负责协调和控制所有用户的访问，一个主节点以循环方式轮询每个站点，询问是否有数据要发送，只有被轮询到的站点才能发送数据。最大的缺点是可能存在单点故障问题，因为所有通信依赖于主站的正常运行。</p><ul><li><p><strong>缺点</strong>：</p><ul><li><p>单点故障（主节点故障则整个网络瘫痪），因为所有通信依赖于主站的正常运行</p></li><li><p>轮询开销</p></li><li><p>等待延时</p></li></ul></li></ul></li></ul><blockquote><p>令牌传递协议：</p></blockquote><p>控制由多个节点分散执行，每个节点在特定条件下可以自由接入，通过令牌传递，所有站点被连接成一个环形网络。</p><ul><li>一个特殊的控制锁（令牌）沿着环（网络）逐站传递。</li><li>只有接收到令牌的站点才有权发送数据，并在发送完数据后将令牌传递给下一个站点。 <ul><li>修改标志位，将令牌占用</li><li>将数据附加在令牌后，形成数据帧</li><li>再将令牌发送出去</li><li>令牌继续循环 <ol><li>目标主机将数据部分复制副本</li><li>非目标主机直接传走</li></ol></li><li>令牌再次回到发送主机 <ul><li>进行校验，若数据出错则再次发送</li><li>将数据移除，标志位复位，继续传送令牌</li></ul></li></ul></li><li>这种方法可以避免冲突，但如果令牌丢失或损坏，可能会导致通信中断。</li><li><strong>缺点</strong>： <ol><li>每一个主机能占用令牌的时间是有限的，没有传递完则需要等待下一轮循环到自己再继续发送</li><li>等待延迟</li><li>单点故障（一个节点故障则循环不能继续）</li></ol></li></ul><h2 id="四、局域网" tabindex="-1"><a class="header-anchor" href="#四、局域网" aria-hidden="true">#</a> 四、局域网</h2><h3 id="_1、概述-2" tabindex="-1"><a class="header-anchor" href="#_1、概述-2" aria-hidden="true">#</a> 1、概述</h3><p><strong>局域网（Local Area Network），简称LAN</strong>，是指在一个较小的地理范围（如所学校）内，将各种计算机、终端与外部设备等通过双绞线、同轴电缆等连接介质互相连接起来，组成资源和信息共享的计算机互联网络。</p><h4 id="_1-主要特点" tabindex="-1"><a class="header-anchor" href="#_1-主要特点" aria-hidden="true">#</a> （1）主要特点</h4><p>1、为一个单位所拥有，且地理范围和站点数目均有限。</p><p>2、所有站点共享较高的总带宽（即较高的数据传输速率)。</p><p>3、较低的时延和较低的误码率。</p><p>4、各站为平等关系而非主从关系。</p><p>5、能进行广播和组播。</p><h4 id="_2-三个要素" tabindex="-1"><a class="header-anchor" href="#_2-三个要素" aria-hidden="true">#</a> （2）三个要素</h4><p>局域网的特性主要由三个要素决定：拓扑结构、传输介质、介质访问控制方式，其中最重要的是介质访问控制方式，它决定着局域网的技术特性。</p><h4 id="_3-常见的局域网拓扑结构" tabindex="-1"><a class="header-anchor" href="#_3-常见的局域网拓扑结构" aria-hidden="true">#</a> （3）常见的局域网拓扑结构</h4><p>主要有以下4大类: ①星形结构;②环形结构;③总线形结构;④星形和总线形结合的复合型结构。</p><ul><li>局域网可以使用双绞线、铜缆和光纤等多种传输介质，其中双绞线为主流传输介质。</li><li>局域网的介质访问控制方法主要有CSMA/CD、令牌总线和令牌环，其中前两种方法主要用于总线形局域网，令牌 环主要用于环形局域网。</li><li>三种特殊的局域网拓扑实现如下: <ol><li><strong>以太网</strong>（目前使用范围最广的局域网)。 <ul><li>逻辑拓扑是总线形结构，物理拓扑是星形或拓展星形结构。</li></ul></li><li><strong>令牌环</strong>（Token Ring，IEEE 802.5)，不用了。逻辑拓扑是环形结构，物理拓扑是星形结构。</li><li>FDDI(光纤分布数字接口，IEEE 802.8)。逻辑拓扑是环形结构，物理拓扑是双环结构。</li><li><strong>WLAN</strong>（采用IEEE 802.11标准）：无线局域网</li><li>IEEE 802标准定义的局域网参考模型只对应于OSI参考模型的数据链路层和物理层，并将数据链路层拆分为两个子层：逻辑链路控制(LLC)子层和媒体接入控制(MAC)子层。 <ul><li>与接入传输媒体有关的内容都放在MAC子层：它向上层屏蔽对物理层访问的各种差异，提供对物理层的统一访问接口，主要功能包括: 组帧和拆卸帧、比特传输差错检测、 透明传输。</li><li>LLC子层：与传输媒体无关，它向网络层提供无确认无连接、面向连接、带确认无连接、高速传送4种不同的连接服务类型。</li><li>由于以太网在局域网市场中取得垄断地位，几乎成为局域网的代名词，而802委员会制定的LLC子层作用已经不大，因此现在许多网卡仅装有MAC协议而没有LLC协议。</li></ul></li></ol></li></ul><h3 id="_2、虚拟局域网" tabindex="-1"><a class="header-anchor" href="#_2、虚拟局域网" aria-hidden="true">#</a> 2、虚拟局域网</h3><p>虚拟局域网又称VLAN，由于<strong>传统的局域网缺乏流量隔离</strong>：广播流量会跨越整个机构网络（ARP、RIP、DHCP协议）一个单位的不同部门共享一个局域网，对安全不利，所以引入了VLAN。</p><blockquote><p>传统局域网带来的问题：</p></blockquote><ul><li><p><strong>广播风暴</strong>：大量广播消息可能导致网络拥塞。</p></li><li><p><strong>难以管理和维护</strong>：管理一个庞大的广播域会变得复杂。</p></li><li><p><strong>潜在的安全问题</strong>：所有设备处于同一个广播域，可能会有安全隐患。</p></li><li><p><strong>频繁的广播信息</strong>：TCP/IP协议栈中的许多协议都会使用广播，例如ARP、RIP、DHCP等。</p></li></ul><blockquote><p>VLAN原理：</p></blockquote><ol><li>将局域网内的设备划分成与物理位置无关的逻辑组的技术，VLAN是通过软件的方式实现的，因此节点的位置不受物理位置的限制</li><li>每个VLAN是一个单独的广播域/不同的子网</li><li><strong>实现</strong><ol><li><strong>基于端口</strong>：交换机中除了转发表，还存在一张VLAN表，记录了各个端口号和它对应的VLAN号</li><li><strong>基于MAC地址</strong>：VALN表中记录的是各个MAC地址和它对应的VLAN号</li><li><strong>基于IP地址</strong>：可以进行跨路由器扩展</li></ol></li><li><strong>不同组的VLAN之间通过将帧上附加相应的VLAN标签进行通信</strong>：</li></ol><figure><img src="https://cloud.greennut.icu/blog/network/vlan.png" alt="LAN和VALN格式" tabindex="0" loading="lazy"><figcaption>LAN和VALN格式</figcaption></figure><hr><p>交换机端口是VLAN的另一种实现方式，它通过在交换机上配置端口的成员关系来实现VLAN的划分和隔离。</p><ul><li><strong>Access Port</strong>：配置为特定VLAN，只能属于一个VLAN，用于连接终端设备。</li><li><strong>Trunk Port</strong>：可以传送多个VLAN的数据帧，通常用于连接交换机之间或交换机与路由器之间的链路。</li><li><strong>Hybrid Port</strong>：既可以属于一个VLAN，也可以传送多个VLAN的数据帧。</li></ul><p>交换机各端口的缺省VLAN ID：</p><ul><li>在思科交换机上称为Native VLAN，即本征VLAN。</li><li>在华为交换机上称为Port VLAN ID，即端口VLAN ID，简记为PVID。</li></ul><blockquote><p><strong>Access Port</strong>：</p></blockquote><p>Access端口的基本特性和工作原理：</p><ol><li><p><strong>Access端口</strong>通常用于连接用户计算机或其他终端设备。</p></li><li><p>Access端口只能属于一个VLAN。这意味着它会将连接到该端口的所有帧都归属于同一个VLAN。</p></li><li><p><strong>PVID(Port VLAN ID)</strong> 值是与端口所属VLAN的VID相同。默认情况下，PVID为1。</p></li><li><p>Access端口接收并处理“未打标签”的普通以太网MAC帧。如果一个帧来自一个Access端口，并且它没有VLAN标签，交换机会根据该端口的PVID为该帧打上相应的VLAN标签。</p></li><li><p>Access端口发送处理方法：如果帧中的VID与端口的PVID相等，交换机会将VLAN标签移除并将帧转发；否则，它将不会转发该帧。</p></li></ol><blockquote><p><strong>Trunk Port</strong>：</p></blockquote><p>Trunk端口的基本特性和工作原理：</p><ol><li><strong>Trunk端口一般用于交换机之间或交换机与路由器之间的互连</strong>。</li><li>Trunk端口可以属于多个VLAN。</li><li>用户可以设置Trunk端口的PVID值。默认情况下，Trunk端口的PVID值为1。</li><li>Trunk端口发送处理方法： <ul><li>对于VID等于PVID的帧，“去标签”再转发；</li><li>对于VID不等于PVID的帧，直接转发。</li></ul></li><li>Trunk端口接收处理方法：接收“未打标签”的帧，根据接收帧的端口的PVID给帧“打标签”，即插入4字节VLAN标记字段，字段中的VID取值与端口的PVID取值相等。</li></ol><p><mark>!!!互连的Trunk端口的PVlD值不等，可能会造成转发错误</mark></p><blockquote><p><strong>Hybrid Port</strong>：</p></blockquote><p>Hybrid端口的基本特性和工作原理：</p><ol><li><p><strong>Hybrid端口既可用于交换机之间或交换机与路由器之间的互连（与Trunk端口相似），也可用于交换机与用户计算机之间的互连（与Access端口相似）</strong>。</p></li><li><p>Hybrid端口可以属于多个VLAN（与Trunk端口相似）。</p></li><li><p>用户可以设置Hybrid端口的PVID值。默认情况下，Hybrid端口的PVID值为1（与Trunk端口相似）。</p></li><li><p>Hybrid端口发送处理方法（与Trunk端口不同）：</p><ul><li><p>查看帧的VID是否在端口的<strong>去标签列表</strong>中：</p><ul><li><p>若存在，则“去标签”后再转发；</p></li><li><p>若不存在，则直接转发。</p></li></ul></li></ul></li><li><p>Hybrid端口接收处理方法（与Trunk端口相似）：</p><ul><li>接收“未打标签”的帧，根据接收帧的端口的PVID给帧“打标签”，即插入4字节VLAN标记字段，字段中的VID取值与端口的PVID取值相等。</li><li>接收“已打标签的帧”。</li></ul></li></ol><h2 id="五、广域网" tabindex="-1"><a class="header-anchor" href="#五、广域网" aria-hidden="true">#</a> 五、广域网</h2><h3 id="_1、概述-3" tabindex="-1"><a class="header-anchor" href="#_1、概述-3" aria-hidden="true">#</a> 1、概述</h3><p>是连接不同地区局域网或城域网计算机通信的远程网。通常跨接很大的物理范围，所覆盖的范围从几十公里到几千公里，它能连接多个地区、城市和国家，或横跨几个洲并能提供远距离通信，形成国际性的远程网络。广域网的通信子网主要使用分组交换技术。</p><p>广域网（Wide Area Network，WAN）通常是指<strong>覆盖范围很广（远超一个城市的范围）的长距离网络</strong>，又称<strong>外网、公网</strong></p><ul><li>是因特网的核心部分，其任务是长距离运送主机所发送的数据。</li><li>连接广域网各结点交换机的链路都是<strong>高速链路</strong>，它可以是长达几千千米的光缆线路，也可以是长达几万千米的点对点卫星链路。</li><li>因此广域网首要考虑的问题是<strong>通信容量必须足够大</strong>，以便支持日益增长的通信量。</li><li>广域网不等于互联网，互联网可以连接不同类型的网络（既可以连接局域网，又可以连接广域网)，通常使用路由器来连接，广域网的通信子网主要使用分组交换技术。 <ul><li>结点交换机和路由器都用来转发分组，它们的工作原理也类似。 <ul><li><strong>结点交换机在单个网络中转发分组，功能是将分组存储并转发</strong></li><li><strong>路由器在多个网络构成的互联网中转发分组，功能是将分组存储并转发</strong></li></ul></li></ul></li></ul><figure><img src="https://cloud.greennut.icu/blog/network/2284395-20230413114053066-1681574352.png" alt="广域网" tabindex="0" loading="lazy"><figcaption>广域网</figcaption></figure><hr><h3 id="_2、广域网与局域网的比较" tabindex="-1"><a class="header-anchor" href="#_2、广域网与局域网的比较" aria-hidden="true">#</a> 2、广域网与局域网的比较</h3><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">广域网</th><th>局域网</th></tr></thead><tbody><tr><td style="text-align:center;">覆盖范围</td><td style="text-align:center;">范围很广，用于跨区域网络</td><td>范围较小，通常位于一个区域</td></tr><tr><td style="text-align:center;">连接方式</td><td style="text-align:center;">结点之间都是点到点连接，但为了提高网络的可靠性，一个结点<br>交换机往往与多个结点交换机相连</td><td>基本都采用多点接入技术</td></tr><tr><td style="text-align:center;">OSI模型层次</td><td style="text-align:center;">物理层、数据链路层、网络层</td><td>物理层、数据链路层、</td></tr><tr><td style="text-align:center;">相同点</td><td style="text-align:center;">都是互联网的重要组成构件，从互联网的角度上看，二者平等（不是包含关系）</td><td>连接到一个广域网或一个局域网上的主机在该网内进行通信时，只需要使用其网络的物理地址</td></tr><tr><td style="text-align:center;">主要侧重点</td><td style="text-align:center;">资源共享</td><td>数据传输</td></tr></tbody></table><ul><li>广域网中的一个重要问题是<strong>路由选择和分组转发</strong>。路由选择协议负责搜索分组从某个结点到目的结点的最佳传输路由，以便构造路由表，然后从路由表再构造出转发分组的转发表。<strong>分组是通过转发表进行转发的</strong>。</li><li>常见的两种广域网数据链路层协议是 <strong>PPP 协议</strong>和 HDLC 协议。</li></ul><h2 id="六、mac地址、ip地址、arp协议" tabindex="-1"><a class="header-anchor" href="#六、mac地址、ip地址、arp协议" aria-hidden="true">#</a> 六、MAC地址、IP地址、ARP协议</h2><h3 id="_1、mac地址" tabindex="-1"><a class="header-anchor" href="#_1、mac地址" aria-hidden="true">#</a> 1、MAC地址</h3><h4 id="_1-概念" tabindex="-1"><a class="header-anchor" href="#_1-概念" aria-hidden="true">#</a> （1）概念</h4><ul><li><mark>MAC地址位于数据链路层，也被称为硬件地址（物理地址），用于媒体接入控制 MAC</mark>，用于多个主机连接在同一个广播信道上，<strong>实现两个主机之间的通信</strong><ul><li>一般情况下，用户主机会包含两个网络适配器：有线局域网适配器（有线网卡）和无线局域网适配器 (无线网卡)。 <ul><li>每个网络适配器都有一个全球唯一的MAC地址。而交换机和路由器往往拥有更多的网络接口，所以 会拥有更多的MAC地址。</li></ul></li><li><mark>MAC地址是对网络上各接口的唯一标识，而不是对网络上各设备的唯一标识</mark></li></ul></li></ul><h4 id="_2-组成" tabindex="-1"><a class="header-anchor" href="#_2-组成" aria-hidden="true">#</a> （2）组成</h4><blockquote><p>IEEE 802 局域网中的MAC地址：</p></blockquote><p><strong>组成：由6个字节组成，共48位，通常以十六进制表示</strong></p><p>组合：MAC地址有<code>2^48</code>个可能的组合，这是一个非常大的数字，约等于<code>2.81 x 10^14</code>，也就是<code>280万亿</code>。</p><ul><li><p>前24位是由IEEE注册管理机构分配的组织唯一标识符（OU）</p></li><li><p>后24位是由获得该组织唯一标识符的厂商自行随意分配的网络接口标识符。</p></li><li><p>第一个字节的最高位（b1）用于指示地址的全球管理或本地管理。</p><ul><li>b1 = 0 表示全球管理。</li><li>b1 = 1 表示本地管理。</li></ul></li><li><p>第一个字节的次高位（b0）用于指示单播还是多播地址。</p><ul><li>b0 = 0 表示单播地址。</li><li>b0 = 1 表示多播地址。</li></ul></li></ul><hr><blockquote><p>单播、多播和广播MAC地址是用于在以太网网络中标识设备的特殊地址类型：</p></blockquote><ul><li><p><strong>单播（Unicast）MAC地址：一对一通信方式</strong></p><ul><li><strong>单播</strong>地址是用于将数据从一个发送者传递到一个特定的接收者的地址。</li><li>当设备发送数据帧时，目的地址部分包含的是接收者的MAC地址。</li><li>这意味着只有目标设备会接收到这个数据帧。</li></ul></li><li><p><strong>多播（Multicast）MAC地址：针对特定组的设备的一对多通信方式</strong></p><ul><li><p><strong>多播</strong>地址是用于将数据从一个发送者传递到一组特定的接收者的地址。</p></li><li><p>在MAC地址中，多播地址是一种特殊的地址，用于指示数据应传递给特定组中的设备。</p></li><li><p>多播地址的范围是在特定的范围内，而不是针对单个设备。</p></li><li><p>多播通信是一对多的通信方式，但只针对加入了特定多播组的设备。</p></li><li><p>b0是位是1则为多播地址。</p></li></ul></li><li><p><strong>广播（Broadcast）MAC地址：一对所有通信方式</strong></p><ul><li><p><strong>广播</strong>地址是用于将数据从一个发送者传递到同一广播信道上的所有设备的地址。</p></li><li><p>广播地址是一个特殊的地址，通常被用于向整个网络发送信息，以便所有设备都能接收到。</p></li><li><p>广播是一种一对所有的通信方式。</p></li></ul></li></ul><h3 id="_2、ip地址" tabindex="-1"><a class="header-anchor" href="#_2、ip地址" aria-hidden="true">#</a> 2、IP地址</h3><blockquote><p>IP地址是TCP/IP体系结构的网际层所使用的的地址</p></blockquote><ul><li>IP地址是Internet上的主机和路由器所使用的的地址，由两部分信息构成 <ul><li>网络编号：标识因特网上数以百万计的网络</li><li>主机编号：标识同一网络上不同主机(或路由器各接口)</li></ul></li><li>MAC地址不具备区分不同网络的功能，而IP地址可以通过网络号做到</li></ul><p>如果只是一个单独网络，不接入因特网，则使用MAC地址就足够了(这不是一般用户的应用方式)，如果主机所在的网络要接入因特网，则IP地址和MAC地址都需要使用</p><p>数据包转发过程中IP地址与MAC地址变换情况：</p><ul><li>数据报转发过程中源IP地址和目的IP地址保持不变</li><li>数据包转发过程中源MAC地址和目的MAC地址(由ARP协议获得)逐个链路改变</li></ul><h3 id="_3、arp协议" tabindex="-1"><a class="header-anchor" href="#_3、arp协议" aria-hidden="true">#</a> 3、ARP协议</h3><blockquote><p>地址解析协议ARP属于TCP/IP体系结构的网际层，其作用是已知设备所分配到的IP地址，使用ARP协议可以通过该IP地址获取到设备的MAC地址，ARP协议只能在一段链路或一个网络上使用，不能全链路，只能跨链路</p></blockquote><p>数据的发送需要经过链路，仅仅知道IP地址是无法在数据链路层实现传输的，因此我们需要得到IP地址与MAC地址的对应关系，即地址解析。</p><ol><li>每台主机都会有一个ARP高速缓存表，记录有IP地址与MAC地址的对应关系</li><li>初始ARP高速缓存表为空，假设此时B知道C的IP地址，准备发送信息，但是由于不知道C的MAC地址，因此无法封装数据帧，所以此时会广播一个ARP请求报文(封装在MAC帧中，目的地址为广播地址FF-FF-FF-FF-FF-FF)， <ul><li>内容如下： <ul><li>我的IP地址是：xxx ；我的MAC地址是：XXX；我想知道C主机的MAC地址是多少？这个广播帧会被该广播域的所有主机收到</li><li>A主机收到后交由上层处理，发现B问的不是他，所以不予理会，C收到后交由上层处理，发现这个IP地址正是自己，因此首先将B的MAC地址和IP地址的对应关系记录到自己的高速缓存表中，接着返回给ARP响应报文(封装在MAC帧中，目的地址为B的MAC地址)，其中包含自己的MAC地址</li></ul></li></ul></li></ol><p>ARP高速缓存条目有静态与动态两种类型</p><ul><li>动态：代表是通过广播自动获取的条目，生命周期默认为两分钟</li><li>静态：是手工设置的条目，不同操作系统下的生命周期不同。</li></ul><h2 id="六、常见设备" tabindex="-1"><a class="header-anchor" href="#六、常见设备" aria-hidden="true">#</a> 六、常见设备</h2><p>集线器、网桥、交换机</p><h3 id="_1、集线器" tabindex="-1"><a class="header-anchor" href="#_1、集线器" aria-hidden="true">#</a> 1、集线器</h3><blockquote><p>集线器HUB的主要功能是对接收到的信号进行再生整形放大，以扩大网络的传输距离，同时把所有节点集中在以它为中心的节点上。</p></blockquote><ul><li><strong>使用集线器的以太网在逻辑上仍是一个总线网，各站共享总线资源，使用的还是CSMA/CD协议</strong></li><li><strong>集线器只工作在物理层，它的每个接口仅简单地转发比特，不进行碰撞检测</strong>(由各站网卡检测)</li><li>集线器一般都有<strong>少量的容错能力和网络管理功能</strong>。 <ul><li>例如，若网络中某个网卡出了故障，不停地发送帧。此时，集线器可以检测到这个问题，在内部断开与出故障网卡的连线，使整个以太网仍然能正常工作</li></ul></li><li>集线器是<strong>半双工模式</strong>，收发不能同时进行，收到帧后会广播到除本身接口外的各个接口。</li></ul><h3 id="_2、网桥" tabindex="-1"><a class="header-anchor" href="#_2、网桥" aria-hidden="true">#</a> 2、网桥</h3><blockquote><p>网桥介绍：</p></blockquote><ol><li>网桥是<strong>两端口</strong>二层网络设备，用来连接<strong>不同网段</strong>的计算机网络设备，同时它又<strong>可隔离冲突域</strong>，因为它的<strong>两个端口不是共享一条背板总线</strong>（分别有一条<strong>独立的交换信道</strong>），比当时的集线器（Hub）性能更好（集线器上各端口都是<strong>共享同一条背板总线的</strong>）。</li><li>网桥除了可以<strong>扩展网络的物理连接范围</strong>外，还可以<strong>对MAC地址进行分区。<strong>但因为网桥只有</strong>两个端口</strong>，故一般两个端口都是连接<strong>集线器</strong>，每个物理网段的主机都连接到各自的集线器上。</li></ol><p>后来，网桥被具有更多端口、同时也可隔离冲突域的<strong>交换机（Switch）所取代</strong>。</p><h3 id="_3、交换机" tabindex="-1"><a class="header-anchor" href="#_3、交换机" aria-hidden="true">#</a> 3、交换机</h3><h4 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> （1）概述</h4><blockquote><p>交换机是一种负责转发信号的网络设备，可以为接入交换机的任意两个网络节点提供独享的电信号通路</p></blockquote><ul><li>以太网交换机通常由多个接口，每个接口都可以直接与一台主机或另一个以太网交换机相连。 <ul><li>一般都工作在<em><strong>全双工方式</strong></em></li></ul></li><li>以太网交换机具有并行性，能同时连通多对接口，使多对主机能同时通信，无碰撞(不使用CSMA/CD协议)</li><li>以太网交换机一般都具有多种速率的接口</li><li><strong>以太网交换机工作在数据链路层(也包括物理层)，它收到帧后，在帧交换表中查找帧的目的MAC地址所对应的接口号，然后通过该接口转发帧</strong></li><li>以太网交换机是一种即插即用的设备，其内部的帧交换表是通过自学习算法自动地逐渐建立起来的</li><li>交换机每个接口是一个独立的碰撞域</li></ul><blockquote><p>帧的两种转发方式：</p></blockquote><ol><li>存储转发</li><li>直通交换：采用基于硬件的交叉矩阵(交换时延非常小，但不检查是否有差错)</li></ol><h4 id="_2-自学习和转发帧流程" tabindex="-1"><a class="header-anchor" href="#_2-自学习和转发帧流程" aria-hidden="true">#</a> （2）自学习和转发帧流程</h4><p>以太网交换机收到帧后，会在帧交换表中查找帧的目的MAC地址对应的接口号，然后通过该接口转发帧。</p><p>以太网交换机是即插即用设备，刚上电启动时，内部的帧交换表是空的。随着网络中各主机间的通信，以太网交换机通过自学习算法逐渐建立起帧交换表。</p><blockquote><p><strong>自学习和转发帧的流程：</strong></p></blockquote><ol><li><p>收到帧后进行登记，登记的内容包括帧的源MAC地址及进入交换机的接口号。</p></li><li><p>根据帧的目的MAC地址和交换机的帧交换表对帧进行转发，分为以下三种情况：</p><ul><li><p><strong>明确转发</strong>：交换机知道应当从哪个（或哪些）接口转发该帧（单播、多播或广播）。</p></li><li><p><strong>盲目转发</strong>：交换机不知道应当从哪个端口转发帧，只能将其通过除进入交换机的接口外的其他所有接口转发（也称为泛洪）。</p></li><li><p><strong>明确丢弃</strong>：交换机知道不应该转发该帧，将其丢弃。</p></li></ul></li><li><p>帧交换表中的每条记录都有自己的有效时间，到期会被删除。这是因为可能发生以下情况：</p><ul><li><p>交换机的接口改接了另一台主机。</p></li><li><p>主机更换了网卡。</p></li></ul></li></ol><p>这个过程使得以太网交换机能够动态地学习网络中各设备的MAC地址，并根据这些学习到的信息，选择性地将数据帧转发到特定的接口，提高了网络的性能和效率。</p><h4 id="_3-stp生成树协议" tabindex="-1"><a class="header-anchor" href="#_3-stp生成树协议" aria-hidden="true">#</a> （3）STP生成树协议</h4><p>STP（Spanning Tree Protocol，生成树协议）是用于在以太网交换网络中防止环路的协议。它是一种链路层协议，可以确保在具有多个交换机的网络中，只有一条活动路径。</p><blockquote><p>以下是关于STP的一些基本信息：</p></blockquote><ol><li><p><strong>作用</strong>：防止网络中的环路，保证网络拓扑是一个树形结构，从而避免数据包在网络中无限循环。</p></li><li><p><strong>选择根桥</strong>：</p><ul><li><p>STP使用Bridge ID（桥标识）来选择网络中的根桥，Bridge ID由优先级和MAC地址组成，优先级越低越优先。</p></li><li><p>选择根桥后，网络中的所有交换机会选择一条到根桥的最短路径作为活动路径。</p></li></ul></li><li><p><strong>选择根端口</strong>：每个交换机选择到根桥的最短路径，其中选择的端口称为根端口。</p></li><li><p><strong>选择指定端口</strong>：对于每条链路，交换机中的一个端口会被选为指定端口，这是到达根桥的次短路径。</p></li><li><p><strong>阻塞端口</strong>：为了防止环路，STP会将一些端口设为阻塞状态，暂时不参与转发数据。</p></li><li><p><strong>定时机制</strong>：STP会定期发送BPDU（Bridge Protocol Data Unit）来保持拓扑信息的更新，以便在网络发生变化时适时调整。</p></li><li><p><strong>快速收敛</strong>：当网络发生故障或拓扑变化时，STP可以快速重新计算生成树，以保证网络尽快恢复正常。</p></li><li><p><strong>RSTP（Rapid Spanning Tree Protocol）</strong>：是STP的改进版本，提供了更快的收敛时间和更强的稳定性。</p></li></ol><p>STP是构建现代局域网的基础，它确保了网络拓扑的稳定性和可靠性。通过避免环路的产生，STP保证了数据在网络中的有效传输。</p>',253);function g(p,d){return r(),o("div",null,[e,t(" more "),a])}const c=i(s,[["render",g],["__file","data-link.html.vue"]]);export{c as default};
