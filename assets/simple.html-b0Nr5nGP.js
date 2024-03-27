import{_ as g}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as a,c as u,b as c,f as d,w as i,d as t,a as e,e as l}from"./app-lW-6uHYn.js";const p={},b=t("p",null,[t("strong",null,"计网前置知识扫盲")],-1),h=e('<h1 id="计算机网络前言" tabindex="-1"><a class="header-anchor" href="#计算机网络前言" aria-hidden="true">#</a> 计算机网络前言</h1><p><mark>计算机网络模型镇楼</mark></p><figure><img src="https://cloud.greennut.icu/blog/network/model.png" alt="图例-计算机网络模型" tabindex="0" loading="lazy"><figcaption>图例-计算机网络模型</figcaption></figure><h2 id="一、名词解析" tabindex="-1"><a class="header-anchor" href="#一、名词解析" aria-hidden="true">#</a> 一、名词解析</h2><h3 id="_1、各种网络" tabindex="-1"><a class="header-anchor" href="#_1、各种网络" aria-hidden="true">#</a> 1、各种网络</h3><figure><img src="https://cloud.greennut.icu/blog/network/gzwl.png" alt="图例-各种网络" tabindex="0" loading="lazy"><figcaption>图例-各种网络</figcaption></figure><h4 id="_1-网络" tabindex="-1"><a class="header-anchor" href="#_1-网络" aria-hidden="true">#</a> （1）网络</h4><blockquote><p>什么是网络：</p></blockquote><p><code>网络（Network）</code>由若干<code>结点（Node）</code>和连接这些结点的<code>链路（Link）</code>组成</p><h4 id="_2-互联网" tabindex="-1"><a class="header-anchor" href="#_2-互联网" aria-hidden="true">#</a> （2）互联网</h4><p>多个网络还可以通过路由器互连起来，这样就构成了一个覆盖范围更大的网络，即<code>互联网（互连网）</code>。</p><p>因此，<mark>互联网是网络的网络（Network of Networks）</mark></p><h4 id="_3-因特网" tabindex="-1"><a class="header-anchor" href="#_3-因特网" aria-hidden="true">#</a> （3）因特网</h4><p><code>因特网（Internet）</code>是<strong>世界上最大的互连网络</strong>【小写i的internet是通用名词，互连的网络都叫internet】</p><h3 id="_2、isp" tabindex="-1"><a class="header-anchor" href="#_2、isp" aria-hidden="true">#</a> 2、ISP</h3><blockquote><p>ISP:</p></blockquote><p><code>ISP(Internet Service Provider)</code>即因特网服务的提供者</p><blockquote><p>ISP的作用：</p></blockquote><ul><li>普通用户通过<code>ISP</code>接入因特网。</li><li><code>ISP</code>可以从因特网管理机构申请到成块的<code>IP</code>地址，同时拥有通信线路以及路由器等连网设备，任何机构和个人只要向<code>ISP</code>交纳规定的费用，就可以从<code>ISP</code>得到所需要的<code>IP</code>地址。互联网上的主机都必须有<code>IP</code>地址才能通信</li><li>如：中国移动、中国电信</li></ul><figure><img src="https://cloud.greennut.icu/blog/network/isp.png" alt="图例-ISP" tabindex="0" loading="lazy"><figcaption>图例-ISP</figcaption></figure><h3 id="_3、实体和协议" tabindex="-1"><a class="header-anchor" href="#_3、实体和协议" aria-hidden="true">#</a> 3、实体和协议</h3><blockquote><p>实体和对等实体：</p></blockquote><ul><li>实体：任何可发送或接收信息的硬件或软件进程</li><li>对等实体：收发双方相同层次中的实体</li></ul><figure><img src="https://cloud.greennut.icu/blog/network/st.png" alt="图例-实体和对等实体" tabindex="0" loading="lazy"><figcaption>图例-实体和对等实体</figcaption></figure><hr><blockquote><p>协议：控制两个对等实体进行逻辑通信的规则的集合</p></blockquote><p>协议三要素：</p><ul><li>语法：定义所交换信息的格式</li><li>语义：定义收发双方所要完成的操作</li><li>同步：定义收发双发的时序关系</li></ul><figure><img src="https://cloud.greennut.icu/blog/network/xy.png" alt="图例-协议" tabindex="0" loading="lazy"><figcaption>图例-协议</figcaption></figure><h3 id="_3、服务" tabindex="-1"><a class="header-anchor" href="#_3、服务" aria-hidden="true">#</a> 3、服务</h3><blockquote><p>详细图例：</p></blockquote><figure><img src="https://cloud.greennut.icu/blog/network/xxfw.png" alt="详细图例-服务" tabindex="0" loading="lazy"><figcaption>详细图例-服务</figcaption></figure><blockquote><p>服务</p></blockquote><p>在协议的控制下，两个对等实体间的逻辑通信使得本层能够向上一层提供服务。要实现本层协议，还需要使用下面一层所提供的服务。</p><ul><li>协议是 &quot;水平的&quot;，服务是 &quot;垂直的&quot;。</li><li>实体看得见相邻下层所提供的服务，但并不知道实现该服务的具体协议。也就是说，下面的协议对上面的实体是&quot;透明&quot;的。</li></ul><blockquote><p>服务访问点</p></blockquote><p>在同一系统中相邻两层的实体交换信息的逻辑接口，用于区分不同的服务类型。</p><ul><li>数据链路层的服务访问点为帧的 &quot;类型&quot; 字段。</li><li>网络层的服务访问点为P数据报首部中的 &quot;协议字段&quot;。</li><li>运输层的服务访问点为 &quot;端口号&quot;。</li></ul><blockquote><p>服务原语</p></blockquote><p>上层使用下层所提供的服务必须通过与下层交换一些命令，这些命令称为服务原语。</p><blockquote><p>协议数据单元</p></blockquote><p>对等层次之间传送的数据包称为该层的协议数据单元。</p><blockquote><p>服务数据单元</p></blockquote><p>同一系统内，层与层之间交换的数据包称为服务数据单元。</p><h2 id="二、数据交换方式" tabindex="-1"><a class="header-anchor" href="#二、数据交换方式" aria-hidden="true">#</a> 二、数据交换方式</h2><figure><img src="https://cloud.greennut.icu/blog/network/jhfs.png" alt="图例-三种交换方式" tabindex="0" loading="lazy"><figcaption>图例-三种交换方式</figcaption></figure><h3 id="_1、电路交换" tabindex="-1"><a class="header-anchor" href="#_1、电路交换" aria-hidden="true">#</a> 1、电路交换</h3><blockquote><p>电路交换怎么出现的？</p></blockquote><ul><li>电话交换机接通电话线的方式称为电路交换</li><li>从通信资源分配角度来看，交换(Switch)就是按照某种方式动态地分配传输线路的资源</li></ul><blockquote><p>电路交换三个步骤：</p></blockquote><ol><li><strong>建立连接</strong>：例如在使用电路交换打电话前，必须先拨号请求建立连接，当被叫用户听到电话交换机送来的拨号音并拿起电话后，从主叫端到被叫端就建立了一条连接，也就是一条专用的物理通路。这条连接保证了双方通话时所需的通信资源，而这些资源在双方通信中不会被其他用户占用（分配通信资源）</li><li><strong>通话</strong>：分配的资源始终被占用（一直占用通信资源）</li><li><strong>释放连接</strong>：归还通信资源</li></ol><figure><img src="https://cloud.greennut.icu/blog/network/dljh.png" alt="图例-电路交换" tabindex="0" loading="lazy"><figcaption>图例-电路交换</figcaption></figure><blockquote><p>优点和缺点：</p></blockquote><ul><li>优点 <ol><li>通信时延小：通信线路为通信双方专用的，数据直达</li><li>有序传输：通信双方只有一条专用通信线路，数据只在这一线路上传输，不存在失序问题</li><li>没有冲突，控制简单：不同的通信双方拥有不同的信道，不会出现争用物理通道的问题</li><li>适用范围广：适用于传输模拟信号，也适用于传输数字信号</li><li>实时性强：时延小所以实时性强</li></ol></li><li>缺点 <ol><li>建立连接时间长</li><li>线路独占，适用效率低</li><li>灵活性差：只要连接所建立的物理通路中的任何一点出现了故障，就必须重新拨号建立新的连接</li><li>难以规格化：不同类型、不同规格、不同速率的终端很难互相进行通信，也难以差错控制</li></ol></li></ul><h3 id="_2、分组交换" tabindex="-1"><a class="header-anchor" href="#_2、分组交换" aria-hidden="true">#</a> 2、分组交换</h3><blockquote><p>分组交换组成和流程：</p></blockquote><ol><li>发送方：①构建分组 ②发送分组</li><li>路由器：①缓存分组 ②转发分组</li><li>接收方：①接收分组 ②还原报文</li></ol><figure><img src="https://cloud.greennut.icu/blog/network/fangshifenzu.png" alt="图例-分组交换" tabindex="0" loading="lazy"><figcaption>图例-分组交换</figcaption></figure><blockquote><p>优点和缺点：</p></blockquote><ul><li>优点 <ol><li>无需建立连接<br> 线路利用率高<br> 简化存储管理：因为分组大小固定，管理起来就容易一些<br> 加速传输：因为分组是逐个传输，这样前一个交换机的转发操作与后一个交换机的存储操作可同时进行<br> 减少出错率和重复数据量：分组比报文小，因此出错概率也会比较小，即使出错也只需要重传出错的这一小部分即可</li></ol></li><li>缺点： <ol><li>引起了转发时延</li><li>需要传输额外信息量(分组头部信息)</li><li>当分组交换采用数据报服务时，可能会出现失序、丢失、重复分组。分组到达目的结点时，需要重新还原成原始报文，比较麻烦。</li><li>若分组交换采用虚电路服务，虽然没有分组失序问题，但有呼叫建立，数据传输和虚电路释放三个过程</li></ol></li></ul><h3 id="_3、报文交换" tabindex="-1"><a class="header-anchor" href="#_3、报文交换" aria-hidden="true">#</a> 3、报文交换</h3><blockquote><p>报文交换与分组交换类似，不过对报文没有限制大小，现如今多使用分组交换。</p></blockquote><blockquote><p>优点和缺点：</p></blockquote><ul><li>优点 <ol><li>无需建立连接</li><li>动态分配线路</li><li>提高线路可靠性：如果某条线路出现故障，会重新选择另一条线路</li><li>提高线路利用率：通信双方在不同的时间分段占用物理线路</li><li>提供多目标服务：一个报文可以同时发送给多个目的地址</li></ol></li><li>缺点 <ol><li>引起转发时延：报文在节点交换机上要经历存储转发的过程</li><li>需要较大的存储转发空间：因为报文大小没有限制</li><li>需要传输额外信息量：有头部等信息</li></ol></li></ul><h2 id="三、计算机网络" tabindex="-1"><a class="header-anchor" href="#三、计算机网络" aria-hidden="true">#</a> 三、计算机网络</h2><h3 id="_1、定义" tabindex="-1"><a class="header-anchor" href="#_1、定义" aria-hidden="true">#</a> 1、定义</h3><blockquote><p>计算机网络的最简单的定义是：一些互相连接的、自治的计算机的集合。</p></blockquote><ul><li>互连：是指计算机之间可以通过有线或无线的方式进行数据通信；</li><li>自治：是指独立的计算机，他有自己的硬件和软件，可以单独运行使用；</li><li>集合：是指至少需要两台计算机；</li></ul><blockquote><p>白话 - 计算机网络的较好的定义是：</p></blockquote><p>计算机网络主要是由一些<strong>通用的，可编程的硬件（一定包含有中央处理机CPU）互连</strong>而成的，而这些硬件并非专门用来实现某一特定目的（例如，传送数据或视频信号）。这些可编程的硬件能够用来<strong>传送多种不同类型的数据</strong>，并能<strong>支持广泛的和日益增长的应用</strong>。</p><ul><li>计算机网络所连接的硬件，并不限于一般的计算机，而是包括了智能手机等智能硬件。</li><li>计算机网络并非专门用来传送数据，而是能够支持很多种的应用（包括今后可能出现的各种应用）</li></ul><blockquote><p>自己的定义：</p></blockquote><ul><li>计算机网络是指通过通信设备和通信线路，将分布在不同地理位置的计算机、外围设备及用户连接起来，以实现数据和信息的共享、传输和处理的一种技术体系。</li><li>计算机网络是由多个计算机、服务器、网络设备和通信协议组成的互联网，它们通过网络传输协议来实现数据交换和通信。</li></ul><h3 id="_2、分类" tabindex="-1"><a class="header-anchor" href="#_2、分类" aria-hidden="true">#</a> 2、分类</h3><blockquote><p><strong>计算机网络的分类</strong>：</p></blockquote>',75),f=t("ul",null,[t("li",null,"电路交换网络"),t("li",null,"报文交换网络"),t("li",null,"分组交换网络")],-1),k=t("ul",null,[t("li",null,[t("p",null,"公用网：公用网是为了满足广大用户的需求，由政府或私营企业投资建设的，面向广大用户提供通信服务的网络。公用网是基础设施，是支撑信息化建设的重要组成部分。例如，互联网就是一个典型的公用网，用户通过互联网可以访问各种各样的信息，进行各种应用。")]),t("li",null,[t("p",null,"专用网：专用网是由某个特定单位、组织或个人自己建设的，主要用于满足自身信息传输和处理的需求的网络。专用网通常拥有一定的安全措施，保证数据的机密性和完整性。例如，公司内部的局域网、校园网等都属于专用网的范畴。")])],-1),q=t("ul",null,[t("li",null,"有线网络：有线网络使用物理电缆，如双绞线、同轴电缆、光纤等，作为数据传输的介质。这些介质可以传输高带宽、低延迟的数据信号，传输距离较远时，使用中继器等设备进行信号放大和衰减补偿。常见的有线网络包括以太网、ATM、令牌环等。"),t("li",null,"无线网络：无线网络使用无线电波，如无线局域网（Wi-Fi）、蓝牙、GSM/CDMA等，作为数据传输的介质。无线网络具有灵活性高、部署简单的优点，但其传输距离较短、传输速度较慢、易受到干扰等缺点。常见的无线网络包括无线局域网、蓝牙、移动通信网络等。")],-1),m=t("ul",null,[t("li",null,"广域网WAN：作用范围通常为几十到几千公里，因而有时也称为远程网（long haul network）。广域网是互联网的核心部分，其任务是通过长距离（例如，跨越不同的国家）运送主机所发送的数据。")],-1),x=t("ul",null,[t("li",null,[t("p",null,"城域网MAN：作用范围一般是一个城市，可跨越几个街区甚至整个城市")]),t("li",null,[t("p",null,"局域网LAN：一般用微型计算机或工作站通过高速通信线路相连（速率通常在 10 Mbit/s 以上），但地理上范围较小（1 km 左右）")]),t("li",null,[t("p",null,"个域网PAN：就是在个人工作的地方把个人使用的电子设备用无线技术连接起来的网络。")])],-1),_=t("p",null,"总线型、星型、环形、网状型、总线型",-1),v=t("figure",null,[t("img",{src:"https://cloud.greennut.icu/blog/network/tuopu.png",alt:"图例-拓扑结构",tabindex:"0",loading:"lazy"}),t("figcaption",null,"图例-拓扑结构")],-1),P=e(`<h3 id="_3、性能指标" tabindex="-1"><a class="header-anchor" href="#_3、性能指标" aria-hidden="true">#</a> 3、性能指标</h3><h4 id="_1-速率" tabindex="-1"><a class="header-anchor" href="#_1-速率" aria-hidden="true">#</a> （1）速率</h4><blockquote><p>比特：</p></blockquote><p><strong>计算机中数据量的单位</strong>，也是信息论中信息量的单位。一个比特就是二进制数字中的一个1或0。</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>#常用数据量单位
8 bit = 1 Byte
1KB = 1024Byte = 2^10Byte
1MB = 2048Byte = 2^20Byte
1GB = 4096Byte = 2^30Byte
1TB = 8192Byte = 2^40Byte
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>速率：</p></blockquote><p>速率是指连接在计算机网络上的主机在数字信道上传送比特的速率，也称为<strong>比特率或数据率。</strong></p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>#常用数据率单位
bit/s (b/s,bps)
1kb/s = 10^3 b/s
1Mb/s = 10^6 b/s
1Gb/s = 10^9 b/s
1Tb/s = 10^12 b/s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>例题：</p></blockquote><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>例：有一个待发送的数据块，大小为100MB,网卡的发送速率为100MbPs,则网卡发送完该数据块需要多长时间？
t=100Mbps/100MB
 = 100 * 2^20 * 8 bit / (100*10^6 bit/s)
 = 2^20 * 8 bit  / 10^6 bit/s 
 = 8.388608s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-带宽" tabindex="-1"><a class="header-anchor" href="#_2-带宽" aria-hidden="true">#</a> （2）带宽</h4><p>一条通信线路的 &quot;频带宽度&quot; 越宽，其所传输数据的 &quot;最高数据率&quot; 也越高。</p><blockquote><p>带宽在摸拟信号系统中的意义：</p></blockquote><ul><li>信号所包含的各种不同频率成分所占据的频率范围;</li><li>单位：Hz (kHz，MHz，GHz)</li></ul><blockquote><p>带宽在计算机网络中的意义</p></blockquote><ul><li>用来表示网络的通信线路所能传送数据的能力</li><li>网络带宽表示在单位时间内从网络中的某一点到另一点所能通过的 &quot;最高数据率&quot;；</li><li>单位：b/s (kb/s，Mb/s，Gb/s，Tb/s)</li></ul><h4 id="_3-吞吐量" tabindex="-1"><a class="header-anchor" href="#_3-吞吐量" aria-hidden="true">#</a> （3）吞吐量</h4><ul><li>吞吐量表示在单位时间内通过某个网络（或信道、接口）的数据量。</li><li>吞吐量被经常用于对现实世界中的网络的一种测量，以便知道实际上到底有多少数据量能够通过网络。</li><li>吞吐量受网络的带宽或额定速率的限制。</li></ul><figure><img src="https://cloud.greennut.icu/blog/network/ttl.png" alt="图例-吞吐量" tabindex="0" loading="lazy"><figcaption>图例-吞吐量</figcaption></figure><p>带宽1 Gb/s的以太网，代表其额定速率是1 Gb/s，这个数值也是该以太网的<strong>吞吐量的绝对上限值</strong>。因此，对于带宽1 Gb/s的以太网，可能实际吞吐量只有 700 Mb/s，甚至更低。</p><p><mark>注意：吞吐量还可以用每秒传送的字节数或帧数表示。</mark></p><h4 id="_4-时延" tabindex="-1"><a class="header-anchor" href="#_4-时延" aria-hidden="true">#</a> （4）时延</h4><p>时延时指数据（一个报文或分组，甚至比特）从网络（或链路）的一端传送到另一端所需的时间。</p><blockquote><p>网络时延由几部分组成：</p></blockquote><ul><li><p>发送时延：主机或路由器发送数据帧所需要的时间，也就是从发送数据帧的第一个比特算起，到该帧的最后一个比特发送完毕所需的时间。</p></li><li><p>传播时延：电磁波在信道中传播一定的距离需要花费的时间。</p></li><li><p>处理时延：主机或路由器在收到分组时要花费一定时间进行处理。</p></li><li><p>排队时延：分组在进过网络传输时，要经过许多路由器。但分组在进入路由器后要先在输入队列中排队等待处理，有时会把排队时延看成<strong>处理时延一部分</strong>。</p></li></ul><p><mark>总时延 = 发送时延 + 传播时延 + 处理时延 （处理时延 + 排队时延）</mark></p><figure><img src="https://cloud.greennut.icu/blog/network/sy.png" alt="图例-时延" tabindex="0" loading="lazy"><figcaption>图例-时延</figcaption></figure><h4 id="_5-时延带宽积" tabindex="-1"><a class="header-anchor" href="#_5-时延带宽积" aria-hidden="true">#</a> （5）时延带宽积</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>时延带宽积 = 传播时延 X 带宽
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cloud.greennut.icu/blog/network/skdcj.png" alt="图例-时延带宽积" tabindex="0" loading="lazy"><figcaption>图例-时延带宽积</figcaption></figure><ul><li>若发送端连续发送数据，则在所发送的第一个比特即将到达终点时，发送端就已经发送了时延带宽积个比特；</li><li>链路的时延带宽积又称为以北比特为单位的链路长度。</li></ul><h4 id="_6-往返时间" tabindex="-1"><a class="header-anchor" href="#_6-往返时间" aria-hidden="true">#</a> （6）往返时间</h4><p>互联网上的信息不仅仅单方向传输而是双向交互的。因此，我们有时很需要知道<strong>双向交互一次所需的时间(RTT)</strong>。</p><figure><img src="https://cloud.greennut.icu/blog/network/wfsj.png" alt="图例-往返时间" tabindex="0" loading="lazy"><figcaption>图例-往返时间</figcaption></figure><h4 id="_7-利用率" tabindex="-1"><a class="header-anchor" href="#_7-利用率" aria-hidden="true">#</a> （7）利用率</h4><figure><img src="https://cloud.greennut.icu/blog/network/lyl.png" alt="图例-利用率" tabindex="0" loading="lazy"><figcaption>图例-利用率</figcaption></figure><h4 id="_8-丢包率" tabindex="-1"><a class="header-anchor" href="#_8-丢包率" aria-hidden="true">#</a> （8）丢包率</h4><figure><img src="https://cloud.greennut.icu/blog/network/dbl.png" alt="图例-丢包率" tabindex="0" loading="lazy"><figcaption>图例-丢包率</figcaption></figure><h3 id="_4、体系结构" tabindex="-1"><a class="header-anchor" href="#_4、体系结构" aria-hidden="true">#</a> 4、体系结构</h3><blockquote><p>体系结构如下：</p></blockquote><ul><li>OSI 参考模型：由国际标准化组织（ISO）制定，共分为七层，包括物理层、数据链路层、网络层、传输层、会话层、表示层和应用层。</li><li>TCP/IP 参考模型：由美国国防部高级研究计划局（ARPA）制定，共分为四层，包括网络接口层、网络层、传输层和应用层。</li></ul><figure><img src="https://cloud.greennut.icu/blog/network/model.png" alt="图例-体系结构" tabindex="0" loading="lazy"><figcaption>图例-体系结构</figcaption></figure><blockquote><p>分层的必要性和各层需要解决的问题：</p></blockquote><p>计算机网络采用分层结构的设计方式，主要是为了将复杂的网络系统分解成若干个相对独立、易于理解和设计的模块，从而简化设计和管理。每一层负责不同的功能和任务，通过接口的方式与上下层进行交互和通信，从而实现了网络协议的标准化和互操作性。</p><p>:::details下面是各层需要解决的问题：</p><ol><li>物理层：负责传输比特流，主要解决物理传输介质、传输速率、传输距离、接口类型等问题。</li><li>数据链路层：负责将比特流组装成帧进行传输，主要解决帧的定界、差错检测、如何协调各主机争用总线（流量控制、访问控制）等问题： <ol><li>如何标识网络中的各主机（主机编址问题，例如MAC地址）</li><li>如何从信号所表示的一连串比特流中区分出地址和数据</li></ol></li><li>网络层：负责实现不同网络之间的数据传输，主要解决数据路由（如何进行路由选择问题）、网络地址分配（网络和主机共同编址的问题，例如IP地址）</li><li>运输层：负责端到端的数据传输，主要解决进程之间基于网络的通信问题，出现传输错误时，如何处理。</li><li>应用层：负责为应用程序提供数据传输服务，主要解决应用程序与网络之间的交互问题。</li></ol><p>:::</p><figure><img src="https://cloud.greennut.icu/blog/network/method.png" alt="每一层对应的任务" tabindex="0" loading="lazy"><figcaption>每一层对应的任务</figcaption></figure><blockquote><p>分层举例</p></blockquote><p><strong>解析：</strong></p><p>主机和Web服务器之间基于网络的通信，实际上是主机中的<strong>浏览器应用进程</strong>与Web服务器中的<strong>Web服务器应用进程</strong>之间基于<strong>网络的通信</strong></p><figure><img src="https://cloud.greennut.icu/blog/network/example1.png" alt="example1" tabindex="0" loading="lazy"><figcaption>example1</figcaption></figure><p><strong>体系结构的各层在整个过程中起到怎样的作用？</strong></p><p><strong>1、发送方发送</strong></p><figure><img src="https://cloud.greennut.icu/blog/network/fc2.png" alt="发送方发送" tabindex="0" loading="lazy"><figcaption>发送方发送</figcaption></figure><hr><blockquote><p>第一步：</p><ul><li><strong>应用层</strong>按照HTTP协议的规定构建一个<strong>HTTP请求报文</strong></li><li>应用层将<strong>HTTP请求报文</strong>交付给<strong>运输层</strong>处理</li></ul></blockquote><figure><img src="https://cloud.greennut.icu/blog/network/fc3.png" alt="第一步" tabindex="0" loading="lazy"><figcaption>第一步</figcaption></figure><hr><blockquote><p>第二步：</p><ul><li><strong>运输层</strong>给<strong>HTTP请求报文</strong>添加一个<strong>TCP首部</strong>，使之成为<strong>TCP报文段</strong></li><li><strong>TCP报文段的首部格式</strong>作用是区分应用进程以及实现可靠传输</li><li><strong>运输层</strong>将T<strong>CP报文段</strong>交付给<strong>网络层</strong>处理</li></ul></blockquote><figure><img src="https://cloud.greennut.icu/blog/network/fc4.png" alt="第二步" tabindex="0" loading="lazy"><figcaption>第二步</figcaption></figure><hr><blockquote><p>第三步：</p><ul><li><strong>网络层</strong>给<strong>TCP报文段</strong>添加一个<strong>IP首部</strong>，使之成为<strong>IP数据报</strong></li><li><strong>IP数据报的首部格式</strong>作用是使<strong>IP数据报</strong>可以在互联网传输，也就是被路由器转发</li><li><strong>网络层</strong>将<strong>IP数据报</strong>交付给<strong>数据链路层</strong>处理</li></ul></blockquote><figure><img src="https://cloud.greennut.icu/blog/network/fc5.png" alt="第三步" tabindex="0" loading="lazy"><figcaption>第三步</figcaption></figure><hr><blockquote><p>第四步：</p><ul><li><strong>数据链路层</strong>给<strong>IP数据报</strong>添加一个<strong>首部</strong>和一个<strong>尾部</strong>，使之成为<strong>帧</strong> （图示右边为首部，左边为尾部）</li><li>该<strong>首部</strong>的作用主要是为了让<strong>帧</strong>能够在一段链路上或一个网络上传输，能够被相应的目的主机接收</li><li>该<strong>尾部</strong>的作用是让目的主机检查所接收到的<strong>帧</strong>是否有误码</li><li><strong>数据链路层</strong>将<strong>帧</strong>交付给<strong>物理层</strong></li></ul></blockquote><figure><img src="https://cloud.greennut.icu/blog/network/fc6.png" alt="第四步" tabindex="0" loading="lazy"><figcaption>第四步</figcaption></figure><hr><blockquote><p>第五步：</p><ul><li><strong>物理层</strong>先将<strong>帧</strong>看做是<strong>比特流</strong>，这里的网络N1假设是以太网，所以<strong>物理层</strong>还会给该<strong>比特流</strong>前面添加<strong>前导码</strong></li><li><strong>前导码</strong>的作用是为了让目的主机做好接收帧的准备</li><li><strong>物理层</strong>将装有<strong>前导码</strong>的<strong>比特流</strong>变换成相应的<strong>信号</strong>发送给传输媒体</li></ul></blockquote><figure><img src="https://cloud.greennut.icu/blog/network/fc7.png" alt="第五步" tabindex="0" loading="lazy"><figcaption>第五步</figcaption></figure><hr><blockquote><p>第六步：<strong>信号</strong>通过<strong>传输媒体</strong>到达<strong>路由器</strong></p></blockquote><p><strong>2、路由器转发</strong></p><blockquote><p>存储-在路由器中</p></blockquote><ul><li><strong>物理层</strong>将<strong>信号</strong>变为<strong>比特流</strong>，然后去掉<strong>前导码</strong>后，将其交付给<strong>数据链路层</strong></li><li><strong>数据链路层</strong>将<strong>帧</strong>的<strong>首部</strong>和<strong>尾部</strong>去掉后，将其交付给<strong>网络层</strong>，这实际交付的是<strong>IP数据报</strong></li><li><strong>网络层</strong>解析<strong>IP数据报</strong>的<strong>首部</strong>，从中提取<strong>目的网络地址</strong></li></ul><figure><img src="https://cloud.greennut.icu/blog/network/luyou.png" alt="第六步" tabindex="0" loading="lazy"><figcaption>第六步</figcaption></figure><hr><blockquote><p>转发-在路由器中</p></blockquote><ul><li>提取<strong>目的网络地址</strong>后查找<strong>自身路由表</strong>。确定<strong>转发端口</strong>， 以便进行转发</li><li><strong>网络层</strong>将<strong>IP数据报</strong>交付给<strong>数据链路层</strong></li><li><strong>数据链路层</strong>给<strong>IP数据报</strong>添加一个<strong>首部</strong>和一个<strong>尾部</strong>，使之成为<strong>帧</strong></li><li><strong>数据链路层</strong>将帧交付给<strong>物理层</strong></li><li><strong>物理层</strong>先将<strong>帧</strong>看成<strong>比特流</strong>，这里的网络N2假设是以太网，所以<strong>物理层</strong>还会给该<strong>比特流</strong>前面添加<strong>前导码</strong></li><li>物理层将装有<strong>前导码</strong>的<strong>比特流</strong>变换成相应的<strong>信号</strong>发送给传输媒体，信号通过传输媒体到达<strong>Web服务器</strong></li></ul><figure><img src="https://cloud.greennut.icu/blog/network/luyou_out.png" alt="转发-在路由器中" tabindex="0" loading="lazy"><figcaption>转发-在路由器中</figcaption></figure><p><strong>3、接收方接收</strong></p><blockquote><p>和发送方（主机）发送过程的封装正好是反着来</p><p>在Web 服务器上</p><ul><li><strong>物理层</strong>将<strong>信号</strong>变换为<strong>比特流</strong>，然后去掉<strong>前导码</strong>后成为<strong>帧</strong>，交付给<strong>数据链路层</strong></li><li><strong>数据链路层</strong>将<strong>帧</strong>的<strong>首部</strong>和<strong>尾部</strong>去掉后成为<strong>IP数据报</strong>，将其交付给<strong>网络层</strong></li><li><strong>网络层</strong>将<strong>IP数据报</strong>的<strong>首部</strong>去掉后成为<strong>TCP报文段</strong>，将其交付给<strong>运输层</strong></li><li><strong>运输层</strong>将<strong>TCP报文段</strong>的<strong>首部</strong>去掉后成为<strong>HTTP请求报文</strong>，将其交付给<strong>应用层</strong></li><li><strong>应用层</strong>对<strong>HTTP请求报文</strong>进行<strong>解析</strong>，然后给主机发回<strong>响应报文</strong></li></ul><p><strong>发回响应报文的步骤和之前过程类似</strong></p></blockquote><figure><img src="https://cloud.greennut.icu/blog/network/fc8.png" alt="接收方接收" tabindex="0" loading="lazy"><figcaption>接收方接收</figcaption></figure>`,83);function y(w,z){const r=s("Tabs");return a(),u("div",null,[b,c(" more "),h,d(r,{id:"549",data:[{id:"按交换技术分类"},{id:"按使用者分类"},{id:"传输介质分类"},{id:"按覆盖范围分类"},{id:"按拓扑结构分类"}]},{title0:i(({value:o,isActive:n})=>[l("按交换技术分类")]),title1:i(({value:o,isActive:n})=>[l("按使用者分类")]),title2:i(({value:o,isActive:n})=>[l("传输介质分类")]),title3:i(({value:o,isActive:n})=>[l("按覆盖范围分类")]),title4:i(({value:o,isActive:n})=>[l("按拓扑结构分类")]),tab0:i(({value:o,isActive:n})=>[f]),tab1:i(({value:o,isActive:n})=>[k]),tab2:i(({value:o,isActive:n})=>[q]),tab3:i(({value:o,isActive:n})=>[m,x]),tab4:i(({value:o,isActive:n})=>[_,v]),_:1}),P])}const A=g(p,[["render",y],["__file","simple.html.vue"]]);export{A as default};
