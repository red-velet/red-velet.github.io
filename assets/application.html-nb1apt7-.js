import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as n,c as s,b as h,d as i,e as l,f as o,a as r}from"./app-yOESM-4p.js";const d={},c=i("p",null,[i("strong",null,"应用层位于最顶层，是为用户提供特定网络应用程序所需的服务和功能所产生的（电子邮件、文件传输、远程登录、网页浏览）。")],-1),u=r('<h1 id="计算机网络-–-应用层" tabindex="-1"><a class="header-anchor" href="#计算机网络-–-应用层" aria-hidden="true">#</a> 计算机网络 – 应用层</h1><h2 id="一、简介" tabindex="-1"><a class="header-anchor" href="#一、简介" aria-hidden="true">#</a> 一、简介</h2><h3 id="_1、主要任务" tabindex="-1"><a class="header-anchor" href="#_1、主要任务" aria-hidden="true">#</a> 1、主要任务</h3><blockquote><p>应用层的主要任务是什么？ 主要和什么有关</p></blockquote><ul><li><p>主要任务：是提供特定网络应用程序所需的服务和功能。它负责处理特定的应用需求，例如电子邮件、文件传输、远程登录、网页浏览等。应用层协议定义了应用程序之间的通信规则和数据交换的格式。</p></li><li><p>主要和用户应用程序有关。</p><ul><li>应用层协议定义了应用程序之间的通信规则和数据交换的格式，这些协议包括HTTP、FTP、SMTP等。</li><li>每个应用程序都使用特定的应用层协议来完成其特定功能。</li><li>应用层的任务是为用户提供所需的服务，使得用户能够方便地完成特定的网络任务，因此它主要与用户应用程序和用户需求相关联。</li></ul></li></ul><p>总的来说，应用层是网络中最直接面向用户的层次，它为用户提供了各种实用的网络服务，也是用户与网络之间交互的接口。</p><blockquote><p>应用层协议定义了什么</p></blockquote><ul><li>应用进程交换的报文类型 <ul><li>请求还是响应</li></ul></li><li>各种报文类型的语法 <ul><li>报文中的各个字段及其详细描述</li></ul></li><li>字段的语义 <ul><li>包含在字段中的信息的含义</li></ul></li><li>进程何时、如何发送报文，以及对报文进行响应的规则</li></ul><h3 id="_2、网络应用模型" tabindex="-1"><a class="header-anchor" href="#_2、网络应用模型" aria-hidden="true">#</a> 2、网络应用模型</h3><h4 id="_1-c-s模型" tabindex="-1"><a class="header-anchor" href="#_1-c-s模型" aria-hidden="true">#</a> （1）C/S模型</h4><blockquote><p><strong>客户/服务器方式 (C/S)</strong>：C/S方式强调了服务提供者和请求者之间的层次关系</p></blockquote><ul><li><p>在客户/服务器模型中，网络服务的提供者和网络服务的请求者分别扮演着不同的角色，它们之间存在明显的区别和层次。</p><ul><li><p>客户和服务器是指通信中所涉及的两个应用进程</p></li><li><p>客户/服务器方式所描述的是进程之间服务和被服务的关系</p></li><li><p>客户是服务请求方，服务器是服务提供方</p></li><li><p>服务器总是处于运行等待状态，并等待客户的服务请求。服务器具有固定端口号(例如HTTP服务器的默认端口号为80)，而运行服务器的主机也具有固定的IP地址</p></li></ul></li><li><p>通常情况下，有<strong>一个或多个服务器端（提供服务）和多个客户端（请求服务）相互交互</strong>，客户端向服务器请求服务或资源，服务器接收到请求后，进行相应的处理并将结果返回给客户端。</p></li><li><p>基于C/S方式的应用服务通常是服务集中型的，即应用服务集在网络中比客户计算机少得多的服务器计算机上由于一台服务器计算机要为多个客户机提供服务，在C/S应用中，常会出现服务器计算机跟不上众多客户机请求的情况,为此，在C/S应用中，常用计算机群集(或服务器场)构建一个强大的虚拟服务器.</p><ul><li>常见的例子包括<strong>Web应用，数据库服务</strong>等。</li></ul></li></ul><h4 id="_2-p2p模型" tabindex="-1"><a class="header-anchor" href="#_2-p2p模型" aria-hidden="true">#</a> （2）P2P模型</h4><blockquote><p><strong>对等方式 (P2P方式)</strong>：P2P方式强调了节点之间的对等关系，没有明确的服务提供者和请求者的区分</p></blockquote><ul><li><p>对等方式，也称为点对点方式，是指在网络中的各个节点（通常是计算机）之间具有相同的地位，<strong>彼此之间可以直接通信和共享资源，而无需依赖中央服务器</strong>。</p></li><li><p>在P2P网络中，<strong>每个节点既可以是资源的提供者，也可以是资源的请求者</strong>。所有节点都能够直接与其他节点通信，共享资源或者服务。</p></li><li><p>这种模型适用于需要大量资源共享和分布式处理的场景，如文件共享网络、实时通信等</p><ul><li>电驴，快播</li></ul></li></ul><h2 id="二、动态主机配置协议dhcp" tabindex="-1"><a class="header-anchor" href="#二、动态主机配置协议dhcp" aria-hidden="true">#</a> 二、动态主机配置协议DHCP</h2><h3 id="_1、概述" tabindex="-1"><a class="header-anchor" href="#_1、概述" aria-hidden="true">#</a> 1、概述</h3><h4 id="_1-dhcp是什么" tabindex="-1"><a class="header-anchor" href="#_1-dhcp是什么" aria-hidden="true">#</a> （1）DHCP是什么</h4><ul><li><strong>是什么</strong>：DHCP（Dynamic Host Configuration Protocol）是一种网络协议</li><li><strong>有什么用，解决什么问题</strong>：用于在计算机网络中自动分配IP地址和其他网络配置参数给设备。它的出现解决了手动配置网络参数的繁琐和容易出错的问题。</li><li><strong>功能</strong>： <ol><li><strong>自动分配IP地址</strong>：DHCP允许网络中的设备在连接到网络时自动获取IP地址，而无需手动配置。这使得网络管理变得更加高效，特别是在大型网络环境下。</li><li><strong>分配其他网络配置参数</strong>：除了IP地址，DHCP还可以自动分配子网掩码、默认网关、DNS服务器等网络配置信息，使设备能够顺利地进行通信。</li></ol></li></ul><h4 id="_2-dhcp和udp" tabindex="-1"><a class="header-anchor" href="#_2-dhcp和udp" aria-hidden="true">#</a> （2）DHCP和UDP</h4><ol><li><p><strong>DHCP与UDP的关系</strong>：</p><ul><li>DHCP是一种协议，用于自动分配IP地址和其他网络配置给主机。</li><li>DHCP使用UDP作为传输层协议来进行通信。</li></ul></li><li><p><strong>DHCP和UDP的端口号</strong>：</p><ul><li>DHCP服务器使用端口号67（UDP源端口）和端口号68（UDP目的端口）进行通信。</li><li>DHCP客户端使用端口号68（UDP源端口）和端口号67（UDP目的端口）进行通信。</li></ul><p>这些端口号是DHCP协议规定的默认端口号，用于标识DHCP客户端和服务器之间的通信。</p></li></ol><h3 id="_2、工作流程" tabindex="-1"><a class="header-anchor" href="#_2、工作流程" aria-hidden="true">#</a> 2、工作流程</h3><details class="hint-container details"><summary>DHCP的工作流程：</summary><ol><li><p><strong>DHCP发现（DHCP Discover）</strong>：</p><ul><li>客户端广播发送一个DHCP发现消息，请求可用的DHCP服务器。</li><li>源地址为0.0.0.0，目的地址为广播地址255.255.255.255。</li></ul></li><li><p><strong>DHCP提供（DHCP Offer）</strong>：</p><ul><li>DHCP服务器接收到广播后，如果有可用的IP地址，会向客户端发送DHCP提供消息，其中包含了IP地址和相关配置信息。</li><li>源地址为DHCP服务器的地址，目的地址为广播地址。</li></ul></li><li><p><strong>DHCP请求（DHCP Request）</strong>：</p><ul><li>客户端收到多个DHCP提供消息后，一般会选择第一个接收到的DHCP提供消息。</li><li>客户端向选定的DHCP服务器发送DHCP请求消息，请求分配IP地址。</li><li>源地址为0.0.0.0，目的地址为广播地址255.255.255.255。</li></ul></li><li><p><strong>DHCP确认（DHCP Acknowledgment）</strong>：</p><ul><li>DHCP服务器接收到客户端的请求后，验证事务ID是否相符。</li><li>若相符，DHCP服务器从地址池中分配一个IP地址，通过ARP协议确认此地址未被使用。</li><li>将新的IP地址封装在DHCP确认消息中，发送给客户端。</li><li>源地址为DHCP服务器的地址，目的地址为广播地址。</li></ul></li><li><p><strong>IP地址租用</strong>：</p><ul><li>客户端收到DHCP确认消息后，再次使用ARP协议确认IP地址是否可用，确认成功后将该IP地址应用，并开始使用。</li><li>客户端根据DHCP服务器提供的租约时长来使用IP地址。</li></ul></li><li><p><strong>IP地址续约</strong>：</p><ul><li>在租约过程中，客户端会在租约到达一定时长前（一般为租约时长的一半）向DHCP服务器发送续约请求，以获取新的租约。</li></ul></li><li><p><strong>IP地址释放</strong>：</p><ul><li>客户端可以随时向DHCP服务器发送释放请求，以释放其当前使用的IP地址。</li></ul></li></ol></details><p>这个流程描述了DHCP客户端和服务器之间交互的整个过程，包括了客户端寻找DHCP服务器、获取IP地址、使用和续约IP地址以及释放IP地址等步骤。</p><h2 id="三、域名系统dns" tabindex="-1"><a class="header-anchor" href="#三、域名系统dns" aria-hidden="true">#</a> 三、域名系统DNS</h2><h3 id="_1、概述-1" tabindex="-1"><a class="header-anchor" href="#_1、概述-1" aria-hidden="true">#</a> 1、概述</h3><h4 id="_1-dns" tabindex="-1"><a class="header-anchor" href="#_1-dns" aria-hidden="true">#</a> （1）DNS</h4><blockquote><p>DNS（Domain Name System - 域名系统）：</p></blockquote>',28),p={href:"http://www.example.com",target:"_blank",rel:"noopener noreferrer"},g=i("li",null,[i("p",null,"有什么作用：DNS它起到了互联网中类似“电话号码簿”的作用，使得我们可以通过易于记忆的域名来访问网站，而不必记住复杂的IP地址。")],-1),P=i("h4",{id:"_2-dns相关名词",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_2-dns相关名词","aria-hidden":"true"},"#"),l(" （2）DNS相关名词")],-1),T=i("blockquote",null,[i("p",null,"以下是DNS的一些重要概念：")],-1),_=i("strong",null,"域名",-1),f={href:"http://www.example.com",target:"_blank",rel:"noopener noreferrer"},b=i("li",null,[i("strong",null,"IP地址"),l("：是一个用于在互联网上唯一标识一个设备（例如服务器或路由器）的数字序列。")],-1),m=i("li",null,[i("strong",null,"域名服务器"),l("：也称为DNS服务器，是负责将域名解析为相应IP地址的服务器。")],-1),C=i("li",null,[i("strong",null,"域名解析"),l("：是指将一个域名转换为对应的IP地址的过程。")],-1),x=i("h3",{id:"_2、域名",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_2、域名","aria-hidden":"true"},"#"),l(" 2、域名")],-1),D={href:"http://www.google.com",target:"_blank",rel:"noopener noreferrer"},H=r('<ul><li><strong>顶级域名</strong><ul><li><strong>国家顶级域名</strong>：cn，us，uk</li><li><strong>通用顶级域名</strong>：com，net，org，gov，int，aero，museum，travel</li><li><strong>基础结构域名/反向域名</strong>：arpa</li></ul></li><li><strong>二级域名</strong><ul><li><strong>类别域名</strong>：ac，com，edu，gov，mil，net，org</li><li><strong>行政区域名</strong>：jx，hb，bj</li><li><strong>自己注册的</strong>：必须要全球唯一</li></ul></li><li><strong>三级域名</strong></li><li>四级域名</li><li>……</li></ul><blockquote><p>域名的注意事项：</p></blockquote><ol><li>域名不区分大小写</li><li>域名中的符号只能有 “-”</li><li>域名中的每一段称为一个<strong>标号</strong><ul><li>单个标号的长度不超过36个字符</li><li>整体域名不超过255个字符</li></ul></li></ol><h3 id="_3、域名服务器" tabindex="-1"><a class="header-anchor" href="#_3、域名服务器" aria-hidden="true">#</a> 3、域名服务器</h3><h4 id="_1-域名服务器分类" tabindex="-1"><a class="header-anchor" href="#_1-域名服务器分类" aria-hidden="true">#</a> （1）域名服务器分类</h4><figure><img src="http://sevencowcloud.chiou.icu/img/network/ymfwq.png" alt="图例-域名服务器" tabindex="0" loading="lazy"><figcaption>图例-域名服务器</figcaption></figure><ol><li><strong>根域名服务器</strong>：根域名服务器是最高层次的域名服务器，也是最重要的域名服务器。根域名服务器<strong>知道所有顶级域名服务器的域名和 IP地址</strong>。如果本地域名服务器无法对域名进行解析，就首先求助于根域名服务器。（<code>.com</code>等顶级域名服务器所在的地址）。</li><li><strong>顶级域名服务器</strong>：负责管理特定顶级域名下的次级域名信息，比如管理.com域名下的所有子域名（<code>.com</code>等 域名下的权威域名服务器列表。）。 <ul><li>顶级域名服务器负责管理在该服务器注册的所有二级域名。当收到 DNS 查询请求时，就给出相应的回答（可能是最后的结果，也可能是下一步需要查询的域名服务器的 IP 地址）。</li></ul></li><li><strong>权威域名服务器</strong>：负责一个区的域名服务器，负责知道管理 <code>google.com</code> 域名下的具体解析记录，如 <code>www.google.com</code> 对应的 IP 地址。 <ul><li>这就是前面已经讲过的负责一个区的域名服务器。当一个权限域名服务器还不能给出最后的查询回答时，就会告知发出查询请求的DNS客户，下一步应当找哪一个权威域名服务器。</li></ul></li><li><strong>本地域名服务器</strong>：本地域名服务器并上述的树状结构的DNS域名服务器，但是它对域名系统非常重要。当一个主机发出DNS查询请求时，这个查询请求报文就发送给本地域名服务器。每一个互联网服务提供者ISP都可以拥有一个本地域名服务器。</li></ol><h4 id="_2-域名解析方式" tabindex="-1"><a class="header-anchor" href="#_2-域名解析方式" aria-hidden="true">#</a> （2）域名解析方式</h4><div class="hint-container tip"><p class="hint-container-title">DNS协议使用**UPD**传输，是**无连接**的</p></div><blockquote><p>递归查询：本地域名服务器的查询请求层层转发到根服务器，最后得到所找域名的IP地址。</p></blockquote><figure><img src="http://sevencowcloud.chiou.icu/img/network/dgcx.png" alt="图例-递归查询" tabindex="0" loading="lazy"><figcaption>图例-递归查询</figcaption></figure><blockquote><p>迭代查询：每次查询所得的下一级域名服务器IP返回给本地域名服务器，本地域名服务器亲自动手。</p></blockquote><figure><img src="http://sevencowcloud.chiou.icu/img/network/ddcx.png" alt="图例-迭代查询" tabindex="0" loading="lazy"><figcaption>图例-迭代查询</figcaption></figure><h3 id="_4、dns解析过程" tabindex="-1"><a class="header-anchor" href="#_4、dns解析过程" aria-hidden="true">#</a> 4、DNS解析过程</h3><p>完整的DNS解析过程有以下几个步骤：</p><h4 id="_1-查看浏览器缓存" tabindex="-1"><a class="header-anchor" href="#_1-查看浏览器缓存" aria-hidden="true">#</a> （1）查看浏览器缓存</h4><p>当用户通过浏览器访问某域名时，浏览器首先会在自己的缓存中查找是否有该域名对应的 IP 地址（若曾经访问过该域名且没有清空缓存便存在）。</p><h4 id="_2-查看系统缓存" tabindex="-1"><a class="header-anchor" href="#_2-查看系统缓存" aria-hidden="true">#</a> （2）查看系统缓存</h4><p>当浏览器缓存中无域名对应 IP 则会自动检查用户计算机系统 Hosts 文件 DNS 缓存是否有该域名对应 IP。</p><h4 id="_3-查看路由器缓存" tabindex="-1"><a class="header-anchor" href="#_3-查看路由器缓存" aria-hidden="true">#</a> （3）查看路由器缓存</h4><p>当浏览器及系统缓存中均无域名对应 IP 则进入路由器缓存中检查，以上三步均为客服端的 DNS 缓存。</p><h4 id="_4-查看isp-dns-缓存" tabindex="-1"><a class="header-anchor" href="#_4-查看isp-dns-缓存" aria-hidden="true">#</a> （4）查看ISP DNS 缓存</h4><p>当在用户客服端查找不到域名对应 IP 地址，则将进入 ISP DNS 缓存中进行查询。比如你用的是电信的网络，则会进入电信的 DNS 缓存服务器中进行查找。</p><h4 id="_5-询问根域名服务器" tabindex="-1"><a class="header-anchor" href="#_5-询问根域名服务器" aria-hidden="true">#</a> （5）询问根域名服务器</h4>',24),S={href:"http://xn--bvs.com",target:"_blank",rel:"noopener noreferrer"},I=r('<h4 id="_6-询问顶级域名服务器" tabindex="-1"><a class="header-anchor" href="#_6-询问顶级域名服务器" aria-hidden="true">#</a> （6）询问顶级域名服务器</h4><p>顶级域名服务器收到请求后查看区域文件记录，若无记录则将其管辖范围内权威域名服务器的 IP 地址告诉本地 DNS 服务器。</p><h4 id="_7-询问权威域名-主域名-服务器" tabindex="-1"><a class="header-anchor" href="#_7-询问权威域名-主域名-服务器" aria-hidden="true">#</a> （7）询问权威域名（主域名）服务器</h4><p>权威域名服务器接收到请求后查询自己的缓存，如果没有则进入下一级域名服务器进行查找，并重复该步骤直至找到正确记录。</p><h4 id="_8-保存结果至缓存" tabindex="-1"><a class="header-anchor" href="#_8-保存结果至缓存" aria-hidden="true">#</a> （8）保存结果至缓存</h4><p>本地域名服务器把返回的结果保存到缓存，以备下一次使用，同时将该结果反馈给客户端，客户端通过这个 IP 地址即可访问目标Web服务器。至此，DNS递归查询的整个过程结束。</p><p>DNS系统承担着将域名解析成IP地址的重要作用，是计算机之间实现访问互联的关键和基础。因此，DNS解析的安全对于维持网络稳定运行至关重要。企业相关管理者和运营者一定要做好域名及域名解析的安全防护工作，定期进行数据扫描分析，启用全方位DNS风险监测，实时关注DNS运行状态，同时做好妥善的应急备份准备，一旦发现问题，出现故障，第一时间响应解决，才能将DNS故障风险及其带来的损失降至最低点。</p><h2 id="四、文件传输协议ftp" tabindex="-1"><a class="header-anchor" href="#四、文件传输协议ftp" aria-hidden="true">#</a> 四、文件传输协议FTP</h2><h3 id="_1、ftp是什么" tabindex="-1"><a class="header-anchor" href="#_1、ftp是什么" aria-hidden="true">#</a> 1、FTP是什么</h3><blockquote><p>FTP（File Transfer Protocol）：</p></blockquote><ol><li>FTP是一种用于在网络上<strong>进行文件传输的标准通信协议</strong>，用于提供不同种类主机系统（硬、软件体系等都可以不同）之间的文件传输能力。</li><li>FTP是基于<code>C/S</code>的协议，使用<code>TCP</code>实现可靠传输</li></ol><blockquote><p>FTP由什么组成：</p></blockquote><ol><li><strong>FTP服务器</strong>：依照FTP协议提供服务，进行文件传送的计算机</li><li><strong>FTP客户端</strong>：连接FTP服务器，遵循FTP协议与服务器传送文件的电脑</li><li>用户通过一个客户机程序连接至在远程计算机上运行的服务器程序进行文件传输</li></ol><blockquote><p>FTP有什么作用和应用：</p></blockquote><p>文件的上传、下载、增删改查、备份恢复、分享</p><ol><li><strong>文件上传和下载</strong>：FTP允许用户将文件从本地计算机上传至远程服务器，或者从远程服务器下载到本地计算机。 <ul><li>FTP的常见用途是在计算机之间传输文件，尤其是用于批量传输文件。FTP的另一个常见用途是让网站设计者将构成网站内容的大量文件批量上传到他们的Web服务器</li></ul></li><li><strong>文件管理</strong>：用户可以通过FTP在本地计算机和远程服务器之间进行文件和文件夹的管理，包括创建、删除、重命名等操作。 <ul><li>FTP提供交互式的访问，运行客户指明文件的类型与格式(如指明是否使用ASCII码)，并允许文件具有存取权限(如访问文件的用户必须经过授权，并输入有效的口令)</li></ul></li><li><strong>备份和恢复</strong>：通过FTP，用户可以轻松地将重要文件备份到远程服务器上，以防止本地数据丢失。</li><li><strong>共享文件</strong>：FTP也可用于在不同用户之间共享文件，只需提供相应的访问权限即可。 <ul><li>FTP屏蔽了各计算机系统的细节，因而适合于在异构网络中任意计算机之间传送文件</li></ul></li></ol><h3 id="_2、ftp的工作原理" tabindex="-1"><a class="header-anchor" href="#_2、ftp的工作原理" aria-hidden="true">#</a> 2、FTP的工作原理</h3><h4 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> （1）介绍</h4><p>FTP（File Transfer Protocol）的<strong>基本工作原理是基于客户端-服务器模型的</strong>，它<strong>使用两个独立的连接</strong>来完成文件传输：</p><ol><li><strong>控制连接</strong>（Control Connection）：用于传输控制信息，如用户认证、命令传输等。控制连接是持久的，在整个FTP会话期间保持打开状态。 <ul><li>用于<strong>传送控制命令</strong>的<code>TCP</code>连接在<strong>整个会话过程都保持开启状态</strong></li><li>例如：<strong>登录</strong>：用户通过用户名密码的方式登录到服务器，也可以通过匿名登陆访问公开共享的文件。</li></ul></li><li><strong>数据连接</strong>（Data Connection）：用于传输文件数据。每次需要传输文件时都会建立一个新的数据连接，传输完成后再关闭。 <ul><li>用于<strong>传送数据</strong>的<code>TCP</code>连接只会在<strong>有数据传送时开启，数据结束传送后就关闭</strong></li><li>数据连接的建立方式有两种模式： <ol><li><strong>主动模式（Active Mode）</strong>：在主动模式下，客户端会在随机的端口上监听，等待服务器连接。当需要传输文件时，服务器会通过控制连接告诉客户端在哪个端口上建立数据连接，客户端会在该端口上等待服务器的连接。</li><li><strong>被动模式（Passive Mode）</strong>：在被动模式下，服务器会在随机的端口上监听，等待客户端连接。当需要传输文件时，服务器会告诉客户端在哪个端口上建立数据连接，客户端会主动连接服务器的端口。</li></ol></li></ul></li></ol><h4 id="_2-传输过程" tabindex="-1"><a class="header-anchor" href="#_2-传输过程" aria-hidden="true">#</a> （2）传输过程</h4><details class="hint-container details"><summary>具体的传输过程如下：</summary><ol><li><p><strong>客户端连接到FTP服务器</strong>：客户端通过TCP连接（默认端口为21）连接到FTP服务器。</p></li><li><p><strong>客户端进行身份验证</strong>：客户端通过用户名和密码进行身份验证。</p></li><li><p><strong>客户端发送FTP命令</strong>：一旦连接建立并且用户通过了身份验证，客户端可以发送各种FTP命令来执行相应的操作，如上传、下载、删除等。</p></li><li><p><strong>建立数据连接</strong>：当需要传输文件时，客户端发送相应的FTP命令，服务器会在数据端口（默认端口20）上等待客户端建立数据连接。</p></li><li><p><strong>传输文件</strong>：一旦数据连接建立，文件的数据会通过数据连接传输。</p></li><li><p><strong>关闭数据连接</strong>：文件传输完成后，数据连接会被关闭。</p></li><li><p><strong>执行其他操作</strong>：客户端可以继续发送FTP命令执行其他操作，如上传更多文件、删除文件等。</p></li><li><p><strong>关闭控制连接</strong>：当会话结束时，控制连接会被关闭。</p></li></ol></details><figure><img src="http://sevencowcloud.chiou.icu/img/network/usexftp.png" alt="图例-xftp传输过程/工作流程" tabindex="0" loading="lazy"><figcaption>图例-xftp传输过程/工作流程</figcaption></figure><h3 id="_3、ftp和tcp" tabindex="-1"><a class="header-anchor" href="#_3、ftp和tcp" aria-hidden="true">#</a> 3、FTP和TCP</h3><p>FTP（File Transfer Protocol）是基于TCP/IP协议的应用层协议，它使用了TCP协议来实现可靠的文件传输。</p><p>具体来说：</p><ul><li><p>FTP使用TCP作为传输层协议，通过TCP提供的可靠数据传输服务来保证文件的正确传输。</p></li><li><p>FTP默认使用了两个端口：</p><ol><li>控制连接端口：默认为21，用于建立控制连接，传输控制信息（如命令、用户认证等）。</li><li>数据连接端口：默认为22，用于传输文件数据。</li></ol></li></ul><p>控制连接和数据连接共同构成了FTP会话，控制连接负责传输控制信息，而数据连接负责实际的文件传输。</p><p>总的来说，FTP是在TCP协议的基础上实现的文件传输协议，利用了TCP的可靠传输特性来确保文件的正确传输。</p><h2 id="五、电子邮件" tabindex="-1"><a class="header-anchor" href="#五、电子邮件" aria-hidden="true">#</a> 五、电子邮件</h2><h3 id="_1、电子邮件系统和电子邮件" tabindex="-1"><a class="header-anchor" href="#_1、电子邮件系统和电子邮件" aria-hidden="true">#</a> 1、电子邮件系统和电子邮件</h3><h4 id="_1-电子邮件系统" tabindex="-1"><a class="header-anchor" href="#_1-电子邮件系统" aria-hidden="true">#</a> （1）电子邮件系统</h4><p>电子邮件系统的三个主要组成构件：用户代理，邮件服务器，以及电子邮件所需的协议</p><ul><li>用户代理：用户与电子邮件系统的接口，又称为电子邮件客户端软件</li><li>邮件服务器：电子邮件系统的基础设施。因特网上所有的ISP都有邮件服务器，其功能是发送和接收邮件，同时还要负责维护用户的邮箱</li><li>协议：邮件<strong>发送</strong>协议(如SMTP)、邮件<strong>读取</strong>协议(如POP3，IMAP)</li></ul><h4 id="_2-电子邮件格式" tabindex="-1"><a class="header-anchor" href="#_2-电子邮件格式" aria-hidden="true">#</a> （2）电子邮件格式</h4><blockquote><p>电子邮件格式：首部 + 正文</p></blockquote><p><strong>首部</strong></p><ul><li>From（系统自动生成）：redvelet@qq.com</li><li>To（必须填入）：redvelet@163.com</li><li>Subject（可选）：电子邮件格式</li></ul><p><strong>主体</strong></p><ul><li>正文内容</li></ul><h3 id="_2、smtp" tabindex="-1"><a class="header-anchor" href="#_2、smtp" aria-hidden="true">#</a> 2、SMTP</h3><p><strong>SMTP（简单邮件传输协议）</strong>，SMTP是用于在网络上传输电子邮件的协议</p><h4 id="i-组成" tabindex="-1"><a class="header-anchor" href="#i-组成" aria-hidden="true">#</a> （Ⅰ）组成</h4><ul><li><strong>SMTP客户</strong>：负责发送邮件的SMTP进程</li><li><strong>SMTP服务器</strong>：负责接收邮件的进程</li><li>SMTP使用的<strong>端口号为25</strong></li></ul><h4 id="ii-工作流程" tabindex="-1"><a class="header-anchor" href="#ii-工作流程" aria-hidden="true">#</a> （Ⅱ）工作流程</h4><blockquote><p>SMTP工作流程：</p></blockquote><ul><li><strong>建立连接</strong></li><li>邮件发送</li><li>连接释放</li></ul><details class="hint-container details"><summary>SMTP详细工作流程：</summary><ol><li><p><strong>建立连接</strong>：</p><ul><li>发送方（邮件客户端）通过SMTP与邮件服务器（SMTP服务器）建立连接。</li><li>客户端使用TCP连接到服务器的25端口（默认SMTP端口）。</li></ul></li><li><p><strong>身份确认</strong>：</p><ul><li>客户端向服务器发送<code>HELO</code>命令，告知自己的SMTP服务器域名。</li><li>服务器回复应答代码250，表示服务就绪。</li></ul></li><li><p><strong>发件人确认</strong>：</p><ul><li>客户端使用<code>MAIL FROM:&lt;发件人地址&gt;</code>命令告知服务器发件人地址。</li><li>服务器回复应答代码250，表示发件人地址合法。</li></ul></li><li><p><strong>收件人确认</strong>：</p><ul><li>客户端使用<code>RCPT TO:&lt;收件人地址&gt;</code>命令告知服务器收件人地址。</li><li>服务器回复应答代码250，表示收件人地址合法。</li></ul></li><li><p><strong>准备发送邮件内容</strong>：</p><ul><li>客户端向服务器发送<code>DATA</code>命令，告知准备发送邮件内容。</li><li>服务器回复应答代码354，表示准备好接收邮件内容。</li></ul></li><li><p><strong>发送邮件内容</strong>：</p><ul><li>客户端发送邮件内容，包括邮件头和邮件正文。</li></ul></li><li><p><strong>结束邮件内容</strong>：</p><ul><li>客户端在发送完邮件内容后，使用<code>.</code>作为结束符，告知服务器邮件内容发送完毕。</li></ul></li><li><p><strong>邮件接收确认</strong>：</p><ul><li>服务器接收邮件内容后，返回应答代码250，表示邮件接收成功。</li></ul></li><li><p><strong>断开连接</strong>：</p><ul><li>客户端向服务器发送<code>QUIT</code>命令，告知准备断开连接。</li><li>服务器回复应答代码221，表示接受请求并主动断开连接。</li></ul></li></ol><p>需要注意的是，SMTP协议主要负责邮件的发送，而接收邮件则通常使用POP3（Post Office Protocol Version 3）或IMAP（Internet Message Access Protocol）协议。</p></details><h4 id="iii-smtp协议的缺点" tabindex="-1"><a class="header-anchor" href="#iii-smtp协议的缺点" aria-hidden="true">#</a> （Ⅲ）SMTP协议的缺点</h4><ul><li>SMTP不能传送可执行文件或者其他二进制对象</li><li>SMTP仅限于传送7位ASCII码，不能传送其他非英语国家的文字</li><li>SMTP服务器会拒绝超过一定长度的邮件</li></ul><h3 id="_3、mime拓展" tabindex="-1"><a class="header-anchor" href="#_3、mime拓展" aria-hidden="true">#</a> 3、MIME拓展</h3><p>MIME（Multipurpose Internet Mail Extensions）是对SMTP协议的一个重要扩展，它解决了SMTP在传送非ASCII码文本和多媒体邮件方面的局限性。</p><p>具体来说，MIME引入了以下功能：</p><ol><li><p><strong>传送二进制和多媒体数据</strong>：SMTP原始协议只能传送ASCII码文本，而MIME引入了一种机制，使得邮件可以包含二进制文件、图像、音频和视频等多媒体内容。</p></li><li><p><strong>字符编码</strong>：MIME定义了一种机制来处理非英语国家的文字，包括中文、俄文以及带有重音符号的法文或德文等。这样就可以确保在邮件中正确地传输和显示这些字符。</p></li><li><p><strong>邮件内容格式标准化</strong>：MIME定义了多种邮件内容的格式，例如文本、HTML、图像等，使得邮件客户端能够正确地解析和显示邮件内容。</p></li><li><p><strong>传输编码</strong>：MIME允许对邮件内容进行编码，以便在传输过程中不受邮件系统的修改。这保证了邮件内容的完整性。</p></li></ol><p>总的来说，MIME的引入大大扩展了电子邮件的功能，使其能够处理更多种类的信息，从简单的文本到复杂的多媒体内容。这也是为什么我们可以在电子邮件中收到包括图片、附件、网页链接等各种形式的信息。</p><h3 id="_4、pop" tabindex="-1"><a class="header-anchor" href="#_4、pop" aria-hidden="true">#</a> 4、POP</h3><p><strong>POP3（邮局协议3）</strong>，采用基于TCP连接的客户/服务器方式，并使用<code>110</code>端口号进行通信</p><ul><li>POP3 是一种简单、功能有限的邮件读取协议。</li><li>用户可以通过下载并删除或下载并保留的方式将邮件从邮件服务器下载到本地计算机。</li><li><strong>不允许用户在邮件服务器上进行邮件管理</strong>，例如创建文件夹、对邮件进行分类等。</li></ul><h4 id="_5、因特网邮件访问协议-imap" tabindex="-1"><a class="header-anchor" href="#_5、因特网邮件访问协议-imap" aria-hidden="true">#</a> 5、因特网邮件访问协议 IMAP</h4><p><strong>IMAP4（因特网邮件访问协议）</strong>，采用基于TCP连接的客户/服务器方式，并使用<code>143</code>端口号进行通信</p><ul><li>IMAP4 是一种功能更强大的邮件读取协议。</li><li>用户可以在本地计算机上操作邮件服务器中的邮箱，就像在本地操控一样。因此，IMAP 是一种联机协议。</li><li><strong>允许用户在邮件服务器上进行邮件管理</strong>，包括创建文件夹、分类管理等。</li></ul><h3 id="_5、基于万维网的电子邮件" tabindex="-1"><a class="header-anchor" href="#_5、基于万维网的电子邮件" aria-hidden="true">#</a> 5、基于万维网的电子邮件</h3><blockquote><p>基于万维网的电子邮件：使用浏览器登录电子邮箱来收发电子邮件</p></blockquote><ul><li><p><strong>用户代理</strong></p><ul><li>浏览器</li><li>通过<strong>HTTP协议</strong>与邮件服务器连接</li></ul></li><li><p><strong>邮件服务器</strong></p><ul><li>使用供应商的邮件服务器而不是自己的</li><li>邮件服务器之间的通信协议仍然为SMTP</li></ul></li><li><p>通过浏览器登录（提供用户名和口令）邮件服务器万维网网站就可以撰写、收发、阅读和管理电子邮件。</p><ul><li>这种工作模式与IMAP很类似，不同的是用户计算机无需安装专门的用户代理程序，只需要使用通用的万维网浏览器。</li><li>邮件服务器网站通常都提供非常强大和方便的邮件管理功能，用户可以在邮件服务器网站上管理和处理自己的邮件，而不需要将邮件下载到本地进行管理。</li><li>可以跨邮件服务器：代理和服务器之间采用SMTP、POP3，服务器和服务器之间采用HTTP</li></ul></li></ul><figure><img src="http://sevencowcloud.chiou.icu/img/network/image-20231031195543224.png" alt="图例-基于万维网的电子邮件" tabindex="0" loading="lazy"><figcaption>图例-基于万维网的电子邮件</figcaption></figure><h3 id="_6、总结" tabindex="-1"><a class="header-anchor" href="#_6、总结" aria-hidden="true">#</a> 6、总结</h3><figure><img src="http://sevencowcloud.chiou.icu/img/network/dzyjzj.png" alt="电子邮件总结" tabindex="0" loading="lazy"><figcaption>电子邮件总结</figcaption></figure><h2 id="六、万维网" tabindex="-1"><a class="header-anchor" href="#六、万维网" aria-hidden="true">#</a> 六、万维网</h2><h3 id="_1、介绍和组成" tabindex="-1"><a class="header-anchor" href="#_1、介绍和组成" aria-hidden="true">#</a> 1、介绍和组成</h3><h4 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> （1）概述</h4><blockquote><p>万维网：</p></blockquote><ul><li>万维网并非某种特殊的计算机网络。它是基于<strong>C/S</strong>的协议一个大规模的、联机式的信息储藏所，<strong>是运行在因特网上的一个分布式应用</strong></li><li>万维网利用网页之间的超链接将不同网站的网页链接成一张逻辑上的信息网</li></ul><h4 id="_2-组成" tabindex="-1"><a class="header-anchor" href="#_2-组成" aria-hidden="true">#</a> （2）组成</h4><blockquote><p>万维网组成：</p></blockquote>',74),k=i("strong",null,"统一资源定位符URL",-1),M=i("strong",null,"唯一地标识",-1),q={href:"https://www.chiou.com",target:"_blank",rel:"noopener noreferrer"},w=i("strong",null,"资源在万维网中的唯一标识",-1),F=i("ul",null,[i("li",null,[i("p",null,[l("组成方式："),i("code",null,"<协议>://<主机>:<端口>/<路径>")])]),i("li",null,[i("p",null,[i("code",null,"URL不区分大小写")])])],-1),N=r("<li><p><strong>文档</strong>：</p><ul><li><p><strong>超文本标记语言HTML</strong>：HTML是一种标记语言，用于创建网页的结构和内容。它通过标签定义文本的格式、链接、图像等元素。</p></li><li><p><strong>CSS（Cascading Style Sheets）</strong>：CSS是一种样式表语言，用于控制网页的外观和布局，包括字体、颜色、间距等样式。</p></li><li><p><strong>JavaScript</strong>：JavaScript是一种脚本语言，可以在浏览器中添加交互性和动态性。它可以用于处理用户输入、改变网页内容等。</p></li></ul></li><li><p><strong>超文本传输协议HTTP</strong>：HTTP是万维网上用于传输数据的协议，它定义了浏览器和Web服务器之间的通信规则。</p></li>",2),v=r('<h3 id="_2、超文本传输协议http" tabindex="-1"><a class="header-anchor" href="#_2、超文本传输协议http" aria-hidden="true">#</a> 2、超文本传输协议HTTP</h3><h4 id="_1-http的作用" tabindex="-1"><a class="header-anchor" href="#_1-http的作用" aria-hidden="true">#</a> （1）HTTP的作用</h4><blockquote><p>超文本传输协议HTTP：</p></blockquote><ul><li><code>HTTP</code>定义了： <ol><li>浏览器(即万维网进程)怎样向万维网服务器请求万维网文档</li><li>万维网服务器怎样把万维网文档传送给浏览器</li></ol></li></ul><h4 id="_2-http的报文结构" tabindex="-1"><a class="header-anchor" href="#_2-http的报文结构" aria-hidden="true">#</a> （2）HTTP的报文结构</h4><blockquote><p>HTTP报文分为请求报文和响应报文两种类型。</p></blockquote><ul><li><strong>请求报文</strong>：包括请求行、请求头部和请求主体 <ul><li>请求行 <ul><li>方法：GET、SET等</li><li>URL</li><li>版本：协议版本</li><li>换行标志</li></ul></li><li>首部行：说明浏览器等的一些信息</li></ul></li><li><strong>响应报文</strong>：包括状态行、响应头部和响应主体。 <ul><li>状态行 <ul><li>状态码+短语：404 NOT FOUND等</li><li>换行标志</li></ul></li><li>首部行</li></ul></li></ul><figure><img src="http://sevencowcloud.chiou.icu/img/network/httpdebaow.png" alt="图例-http报文结构" tabindex="0" loading="lazy"><figcaption>图例-http报文结构</figcaption></figure><blockquote><p>如下：</p></blockquote><figure><img src="http://sevencowcloud.chiou.icu/img/network/shuchu.png" alt="图例-GET请求的HTTP报文" tabindex="0" loading="lazy"><figcaption>图例-GET请求的HTTP报文</figcaption></figure><h4 id="_3-http的连接过程" tabindex="-1"><a class="header-anchor" href="#_3-http的连接过程" aria-hidden="true">#</a> （3）HTTP的连接过程</h4><ol><li>浏览器分析URL</li><li>浏览器向DNS请求解析IP地址</li><li>DNS解析出IP地址</li><li>浏览器与服务器建立TCP连接</li><li>浏览器发出取文件命令</li><li>服务器响应</li><li>释放TCP连接</li><li>浏览器显示</li></ol><h4 id="_4-http的特点" tabindex="-1"><a class="header-anchor" href="#_4-http的特点" aria-hidden="true">#</a> （4）HTTP的特点</h4><ol><li><p><mark>HTTP是无状态的</mark></p><ul><li><p>每一次连接是一样的</p></li><li><p>通过cookie识别用户，存储用户信息</p></li></ul></li><li><p><mark>HTTP采用<strong>TCP</strong>作为传输层协议</mark></p><ul><li><p>HTTP是面向连接的：采用TCP协议</p></li><li><p><strong>HTTP本身是无连接的</strong>：通信双方在交换HTTP报文之前不需要先建立HTTP连接</p></li></ul></li></ol><h4 id="_5-cookie状态" tabindex="-1"><a class="header-anchor" href="#_5-cookie状态" aria-hidden="true">#</a> （5）Cookie状态</h4><blockquote><p>COOKIE：提供了一种机制使得万维网服务器能够&quot;记住&quot;用户，而无需用户主动提供用户标识信息。也就是说，Cookie是一种对无状态的HTTP进行状态化的技术</p></blockquote><figure><img src="http://sevencowcloud.chiou.icu/img/network/cookieshow.png" alt="图例-Cookie工作原理" tabindex="0" loading="lazy"><figcaption>图例-Cookie工作原理</figcaption></figure><h3 id="_3、http1-0" tabindex="-1"><a class="header-anchor" href="#_3、http1-0" aria-hidden="true">#</a> 3、HTTP1.0</h3><ul><li>HTTP/1.0采用非持续连接方式 - 短连接。在该方式下，每次浏览器要请求一个文件都要与服务器建立TCP连接。 <ul><li>当收到响应后就立即关闭连接。每请求一个文档就要有两倍的RTT的开销。</li><li>若一个网页上有很多引用对象（例如图片等），那么请求每一个对象都需要花费2RTT的时间。</li><li>为了减小时延，浏览器通常会建立多个并行的TCP连接同时请求多个对象。但是，这会大量占用万维网服务器的资源，特别是万维网服务器往往要同时服务于大量客户的请求，这会使其负担很重。</li></ul></li></ul><h3 id="_4、http1-1" tabindex="-1"><a class="header-anchor" href="#_4、http1-1" aria-hidden="true">#</a> 4、HTTP1.1</h3><ul><li>HTTP/1.1采用持续连接方式。 <ul><li>在该方式下，万维网服务器在发送响应后仍然保持这条连接，使同一个客户（浏览器）和该服务器可以继续在这条连接上传送后续的HTTP请求报文和响应报文。这并不局限于传送同一个页面上引用的对象，而是只要这些文档都在同一个服务器上就可以实现。</li><li>HTTP/1.1的持续连接还可以使用流水线方式工作，即浏览器在收到HTTP的响应报文之前就能够连续发送多个请求报文 <ul><li>这样的一个接一个的请求报文到达服务器后，服务器就发回一个接一个的响应报文。这样就节省了很多往返时间，使TCP连接中的空闲时间减少，提高了下载文档的效率。</li></ul></li></ul></li></ul><h3 id="_5、http-2-0" tabindex="-1"><a class="header-anchor" href="#_5、http-2-0" aria-hidden="true">#</a> 5、HTTP/2.0</h3><p>HTTP/2.0是HTTP协议的下一代标准，它在性能和效率上做了很多改进。其中最显著的改进之一是引入了多路复用（Multiplexing）技术。</p><ul><li>在HTTP/1.x中，每个请求都需要在一个独立的TCP连接上进行传输，这可能会导致连接的浪费和效率低下。而HTTP/2.0允许在同一个连接上同时传输多个请求和响应，避免了建立多个连接的开销。</li><li>此外，HTTP/2.0还引入了头部压缩（Header Compression）技术，可以减小传输的数据量，特别是在发送大量的请求头信息时，可以显著降低网络延迟。</li></ul><p>这些优化措施使得HTTP/2.0相对于HTTP/1.x在性能上有了显著的提升，特别是对于现代复杂的网页和应用程序来说，它可以提供更快的加载速度和更高的性能表现。</p><h3 id="_6、万维网缓冲与代理服务器" tabindex="-1"><a class="header-anchor" href="#_6、万维网缓冲与代理服务器" aria-hidden="true">#</a> 6、万维网缓冲与代理服务器</h3><ul><li><p>如果原始服务器中的文档已经修改，但是代理服务器中仍然有缓存，那么主机访问文档时是否会访问到未修改的文档从而发送错误呢？</p><ul><li>如果原始服务器中的文档已经被修改，但代理服务器中仍然保留了旧版本的缓存，当主机访问文档时，代理服务器会检查缓存中的响应的对象的修改时间和有效日期字段。如果文档在代理服务器中未过期，代理服务器将直接返回缓存的响应报文，这可能会导致主机拿到的是过时的文档，而不是最新的版本。</li><li>然而，如果文档在代理服务器中已经过期或者被标记为无效，代理服务器会向原始服务器发送一个请求，同时在请求头部中包含一个名为&quot;If-modified-since&quot;的字段，其中记录了上次文档的修改时间。如果原始服务器中文档的修改时间与代理服务器缓存的文档的修改时间不一致，说明文档已经发生了变化，原始服务器将返回最新版本的文档。如果它们一致，原始服务器会返回一个状态码为304 Not Modified的响应，表示文档没有发生变化，此时代理服务器会使用它本地的缓存。</li><li>总结起来，如果原始服务器中的文档已经被修改，但代理服务器中仍然有缓存，主机访问文档时，会发送一个带有&quot;If-modified-since&quot;字段的请求给原始服务器，如果文档没有发生变化，原始服务器会返回一个状态码为304的响应，此时代理服务器会使用它本地的缓存，否则会获取最新版本的文档。</li></ul></li></ul>',27);function y(A,E){const e=a("ExternalLinkIcon");return n(),s("div",null,[c,h(" more "),u,i("ul",null,[i("li",null,[i("p",null,[l("是什么：是一种用于将域名（例如："),i("a",p,[l("www.example.com"),o(e)]),l("）转换为对应的IP地址的分布式系统。")])]),g]),P,T,i("ol",null,[i("li",null,[_,l("：是一个网站的人类可读形式的名称，例如："),i("a",f,[l("www.example.com"),o(e)]),l("。")]),b,m,C]),x,i("blockquote",null,[i("p",null,[l("域名："),i("a",D,[l("www.google.com"),o(e)])])]),H,i("p",null,[l("当以上均未完成，则进入根服务器进行查询。全球仅有 13 台根域名服务器，1 个主根域名服务器，其余 12 为辅根域名服务器。根域名收到请求后会查看区域文件记录，若无则将其管辖范围内顶级域名（"),i("a",S,[l("如.com"),o(e)]),l("、.cn等）服务器 IP 告诉本地 DNS 服务器。")]),I,i("ol",null,[i("li",null,[i("p",null,[k,l("：是一个用于标识资源位置的字符串，它可以"),M,l("一个网页、图片、视频等资源。例如，"),i("a",q,[l("https://www.chiou.com"),o(e)]),l(" 是一个网站的URL == "),w]),F]),N]),v])}const L=t(d,[["render",y],["__file","application.html.vue"]]);export{L as default};
