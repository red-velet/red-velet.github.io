import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as t,a as s}from"./app-KXX3jVXZ.js";const i={},r=s('<h1 id="数据链路层面试题收集" tabindex="-1"><a class="header-anchor" href="#数据链路层面试题收集" aria-hidden="true">#</a> 数据链路层面试题收集</h1><h3 id="_1、数据链路层的主要功能是什么" tabindex="-1"><a class="header-anchor" href="#_1、数据链路层的主要功能是什么" aria-hidden="true">#</a> 1、数据链路层的主要功能是什么？</h3><details class="hint-container details"><summary>数据链路层的主要功能是什么？</summary><blockquote><p>是什么：</p></blockquote><p>数据链路层是OSI模型中的第二层，它位于物理层之上，网络层之下。</p><p>数据链路层是实现这些规程或协议的硬件和软件加上物理线路。</p><blockquote><p>主要功能：</p></blockquote><p>它的主要功能也是由它的位置衍生而来：</p><ul><li>对于下层的物理层，因为物理层解决了在不同物理机之间传输比特流的问题，而且物理层是真正的实体的物理线路，但是这里就有问题：①这里就会出现不同传输介质、设备和协议的差异 ②不同物理机之间当然可以传输比特流，插个线就行，但是如果线多了呢？不知道目的地，是个瞎子 <ul><li>所以就抽离出了一条用于<strong>数据传输</strong>的<strong>逻辑通道</strong>，屏蔽下层不同设备、介质和协议的差异，在此层制定统一协议，让设备完成，从而让上层感知不到下层差异，这就和我们的接口和子类的关系，接口指定规范，子类有不同的实现，但是使用时会进行动态的选择，是多态的体现。</li><li>在数据传输过程中，上层的数据被封装成数据链路层的帧，添加必要的控制信息（如地址、校验和等），使得数据可以在物理介质上传输。</li></ul></li><li>数据链路层使用物理地址（比如MAC地址）来标识网络设备，确保数据帧被正确发送到目标设备，而不是广播到整个网络。</li><li>对于上层的网络层而言，数据链路层将来自网络层的数据包封装成数据帧，在发送端添加帧头和帧尾等控制信息，以便在物理介质上传输。在接收端，它负责解封装数据帧，提取数据包，然后传递给网络层。</li><li>对于不同设备间的数据链路层而言，数据链路层通过流量控制机制，确保发送方和接收方之间的数据传输速率匹配，防止过载或丢失数据的情况发生，其次通过校验和、CRC（循环冗余校验）等技术来检测和纠正在传输过程中产生的错误，保证数据的完整性。</li></ul></details><h3 id="_2、什么是mac地址-它与ip地址有何区别" tabindex="-1"><a class="header-anchor" href="#_2、什么是mac地址-它与ip地址有何区别" aria-hidden="true">#</a> 2、什么是MAC地址？它与IP地址有何区别？</h3><details class="hint-container details"><summary>什么是MAC地址？它与IP地址有何区别？</summary><p>MAC地址（Media Access Control Address）是数据链路层（OSI模型中的第二层）中使用的硬件地址，用于唯一标识网络设备（如网卡、路由器、交换机等）在局域网中的身份。它是由厂商预先分配给网络设备的，通常由48位二进制数（通常表示为十六进制）组成，被编码在网络接口卡上。</p><p>MAC地址是一个全球唯一的标识符，用于识别网络设备。它通常以6个十六进制数对的形式表示，例如：00:1A:2B:3C:4D:5E。</p><p>而IP地址（Internet Protocol Address）是网络层（OSI模型中的第三层）中使用的逻辑地址，用于标识网络上的设备或主机。IP地址是在网络通信中用来识别和定位设备的数字标签。IP地址通常分为IPv4和IPv6两种格式。IPv4地址是一个32位二进制数，通常以点分十进制的形式表示，例如：192.168.0.1。而IPv6地址则采用128位地址，通常表示为一系列的十六进制数字和字母。</p><p>主要区别在于：MAC地址用于局域网内部设备之间的通信，而IP地址则用于在全球范围内定位和连接设备。</p><p>因为我们的网络比较大，不再是拘于物理层和数据链路层的局域网了，而是更大的广域网、互联网。而在这个更大的网络中，如果我们要是信息送达给对方，单靠数据链路层的<code>mac地址</code>寻址是不够的，因为：</p><ol><li>数据是在不同设备间进行传输的，一直经历帧的封装的解封，这个过程中，<strong>帧的<code>mac地址</code>是不断变化的</strong>，例如A –&gt; D，要经过B、C两个路由器，那么最后达到D的数据中的<code>mac地址</code>就是C的<code>mac地址</code>，所以说当源端和目的端<strong>位于不同网络</strong>的时候，<strong>直接通信是不可行的（找不到对方）</strong>，此时就需要由<strong>网络层</strong>解决。</li><li>所以<strong>我们需要一个不变的地址</strong>，那就是本层网络层的<code>IP地址</code>。</li></ol></details><h3 id="_3、数据帧的结构是怎样的" tabindex="-1"><a class="header-anchor" href="#_3、数据帧的结构是怎样的" aria-hidden="true">#</a> 3、数据帧的结构是怎样的？</h3><details class="hint-container details"><summary>数据帧的结构是怎样的？</summary><p>数据帧是在数据链路层中用于封装和传输数据的基本单位。不同的数据链路层协议有不同的帧结构，其中一些常见的数据帧包括：</p><blockquote><p>以太网数据帧：</p></blockquote><ul><li><strong>前导码（Preamble）：</strong> 7字节的前导码，用于同步时钟和准备接收帧。</li><li><strong>帧起始标志（Start Frame Delimiter）：</strong> 1字节，标志帧的开始。</li><li><strong>目标 MAC 地址（Destination MAC Address）：</strong> 6字节，指示接收方的MAC地址。</li><li><strong>源 MAC 地址（Source MAC Address）：</strong> 6字节，表示发送方的MAC地址。</li><li><strong>类型/长度字段（Type/Length Field）：</strong> 2字节，指示数据的类型或长度。</li><li><strong>数据部分（Data）：</strong> 46-1500字节，实际要传输的数据。</li><li><strong>帧校验序列（Frame Check Sequence，FCS）：</strong> 4字节，使用CRC校验算法计算的校验值，用于检测数据传输过程中是否发生错误。</li></ul><blockquote><p>PPP 帧：点对点连接的协议</p></blockquote><ul><li><strong>帧起始标志（Flag）：</strong> 1字节，标志帧的开始。</li><li><strong>地址字段（Address）：</strong> 1字节，通常为0xFF。</li><li><strong>控制字段（Control）：</strong> 1字节，指定控制信息。</li><li><strong>协议字段（Protocol）：</strong> 2字节，表示数据的类型。</li><li><strong>数据部分（Data）：</strong> 实际传输的数据。</li><li><strong>帧校验序列（Frame Check Sequence，FCS）：</strong> 4字节，校验数据帧是否有误。</li></ul><blockquote><p>802.1Q VLAN 帧：在局域网中实现虚拟局域网（VLAN），其结构在以太网帧的基础上增加了VLAN标签</p></blockquote><ul><li><strong>VLAN标签：</strong> 4字节，包括标签协议标识、优先级、C标志、S标志、VLAN ID等字段。</li><li><strong>其余部分保持以太网帧的结构，包括目标MAC地址、源MAC地址、类型/长度字段、数据和FCS。</strong></li></ul></details><h3 id="_4、流控制和差错控制是什么-你能列举一些常见的流控制和差错控制协议吗" tabindex="-1"><a class="header-anchor" href="#_4、流控制和差错控制是什么-你能列举一些常见的流控制和差错控制协议吗" aria-hidden="true">#</a> 4、流控制和差错控制是什么？你能列举一些常见的流控制和差错控制协议吗？</h3><details class="hint-container details"><summary>流量控制和差错控制是什么？你能列举一些常见的流控制和差错控制协议吗？</summary><p>流量控制并不是数据链路层所特有的功能，许多高层协议中也提供流量控功能，只不过流量控制的对象不同而已。</p><blockquote><p>流量控制是什么？</p></blockquote><p>对发送端数据传输速率的控制，使其数据发送速率不超过接收端所能承受的数据接收能力。</p><blockquote><p>流量控制考虑什么方面？</p></blockquote><ol><li>发送端的数据<strong>发送速度与接收端的数据接收速度要匹配</strong>，否则接收端来不及接收就会造成数据在传输过程中的丢失。</li><li>发送端的数据<strong>发送速度要与线路上的承载速率（与线路信道带宽有关）相匹配</strong>，否则也会造成数据在传输过程中的丢失。</li></ol><blockquote><p>流量控制常见实现？</p></blockquote><p>（Ⅰ）基于反馈的流量控制方案</p><p>差错控制中的“<strong>自动重发请求</strong>”，停止-等待协议/自动请求重传，就是基于反馈的流量控制。</p><p><strong>XON/XOFF（继续/停止）</strong>：</p><ol><li>接收端认为<strong>不能继续接收数据</strong>时（也就是接收端的<strong>缓存空间满了</strong>或者<strong>接近满</strong>时），接收端会向发送端发送一个<strong>XOFF控制字符</strong></li><li>当发送端收到对应的XOFF控制字符时就<strong>停止数据的继续发送</strong>；</li><li>当接收端可以<strong>继续接收数据</strong>时，接收端会再向发送端发送一个<strong>XON控制字符</strong></li><li>发送端收到这个控制字符后就知道可以<strong>恢复数据发送</strong>了，继续发送数据，一直这么循环下去。</li></ol><p>（Ⅱ）基于速率的流量控制方案</p><p>基于<strong>窗口滑动机制</strong>的<strong>速率控制方，<strong>差错控制中的回退N帧协议</strong>和</strong>选择重传协议就是基于速率的流量控制</p><p><strong>收发双方维持收发窗口N</strong>：</p><p>假设发送端<strong>缓存空间大小为3个帧</strong>，那么发送端连着发了3个帧后，缓存空间满了，就要停止，等待接收端的确认，当发送端收到接收端对前两个帧的确认后，发送端将前两个帧从缓存空间中删去，再发送两个帧，此时缓存空间又满了，又要等待确认.....如此循环下去。</p><blockquote><p>差错控制是什么？</p></blockquote><p>因为<strong>帧在传输过程中可能出现错误</strong>，而差错控制是一种机制，用于检测和纠正数据传输中可能产生的错误（损坏或丢失），以确保数据的完整性和正确性。</p><blockquote><p>差错控制常见实现？</p></blockquote><ul><li><p><strong>循环冗余校验（CRC，Cyclic Redundancy Check）：</strong> 根据帧内的FCS来进行校验的，用于检测数据传输过程中的错误。接收方使用CRC校验算法验证接收到的数据是否存在损坏,。</p><ol><li>收发双方：约定好一个生成多项式<code>G(x)</code>= 用来<strong>作为除数</strong>的<strong>二进制比特串</strong>（或多项式）</li><li>发送方： <ul><li>基于<strong>待发送的数据（原始帧）和生成多项式(上面选定的除)*<em>进行计算(**二进制除法运算**)得到差错检测码*</em>【冗余码FCS】</strong></li><li>将其添加到待传输数据的后面一起传输</li></ul></li><li>接收方：通过<strong>生成多项式(上面选定的除)</strong> 和【冗余码FCS】来计算收到的数据是否产生了误码</li><li>假设比特串为n位，那么在原始帧后面加上<strong>n-1个0</strong>，并用<strong>二进制除法</strong>除以该<strong>比特串</strong>，最后的余数就是<strong>FCS校验码</strong>，将FCS校验码放在原始帧最后，<strong>接收端</strong>拿到数据后，用<strong>二进制除法</strong>除以<strong>比特串</strong>，若余数为0，则没有差错，反之有差错。</li></ol></li><li><p><strong>奇偶校验（Parity Check）：</strong></p><ul><li><p>实现：</p><ul><li>发送端：在待发送的传输的二进制<strong>代码最后专门设置1个奇偶校验位</strong>，用它<strong>控制这组代码中1的个数为奇数或偶数</strong>（具体是偶数还是奇数，要视所采用的是偶校验还是奇校验）</li><li>接收端：看里面的“1”的个数是否仍<strong>与原来一样的奇数或偶数</strong>，来确定数据传输的正确性。</li></ul></li><li><p>问题：</p><ul><li><p>如果有奇数个位发生误码，则奇偶性发生变化，可以检查出误码；如果有偶数个位发生误码，则奇偶性不发生变化，不能检查出误码(漏检)</p></li><li><p>所以奇偶校验方法只可以用来检查<strong>单个码元错误</strong>，<strong>检错能力较差</strong>，所以一般只用于本身<strong>误码率较低</strong>的环境</p></li></ul></li></ul></li></ul></details><h3 id="_5、数据链路层中的封装、透明传输和可靠传输是什么" tabindex="-1"><a class="header-anchor" href="#_5、数据链路层中的封装、透明传输和可靠传输是什么" aria-hidden="true">#</a> 5、数据链路层中的封装、透明传输和可靠传输是什么？</h3><details class="hint-container details"><summary>数据链路层中的封装、透明传输和可靠传输是什么？</summary><blockquote><p>封装：</p></blockquote><p>封装是指将来自更高层的数据添加到数据链路层的帧中的过程。在数据传输过程中，上层的数据被封装成数据链路层的帧，添加必要的控制信息（如地址、校验和等），使得数据可以在物理介质上传输。每个数据链路层协议都有其特定的帧格式和封装规则，以确保在网络中正确传输数据。</p><blockquote><p>透明传输：</p></blockquote><p>透明传输指的是数据链路层对于传输的数据是透明的，不会对数据内容进行修改或解释，你给我一块我就传一块，但是实现这就要保证：</p><ul><li>我的理解就是数据链路层要对上层数据是透明的，它就要识别上层数据，不能误读，因为在帧的有效数据当中，<strong>可能出现和帧定界的控制字符一样的字符，为了防止将这些字符当中帧定界的字符，错误的处理帧，所以我们采方法使得数据当中可能出现的控制字符“SOH”和“EOT”在接收端不被解释为控制字符</strong></li></ul><p>在数据链路层传输数据时，它应该是透明的，无论传输的是文本、图像、音频还是其他类型的数据，数据链路层都不对其内容进行解释或处理。这种透明性确保了在传输过程中不会损坏或改变数据的含义。</p><blockquote><p>可靠传输：</p></blockquote><p>可靠传输指的是数据链路层确保数据在传输过程中能够可靠地到达目的地的能力。数据链路层实现可靠传输的方式包括错误检测和纠正、流控制、重传机制等。它能够检测并纠正可能出现的传输错误，并且确保数据按顺序到达目的地，以保证传输的完整性和正确性。</p></details><h3 id="_6、以太网协议是怎样运作的" tabindex="-1"><a class="header-anchor" href="#_6、以太网协议是怎样运作的" aria-hidden="true">#</a> 6、以太网协议是怎样运作的？</h3><details class="hint-container details"><summary>以太网协议是怎样运作的？</summary><p><strong>以太网/以太网协议</strong>是一种计算机局域网技术。执行IEEE 802.3技术标准，它规定了物理层的连线、电子信号和介质访问层协议。它采用CSMA/CD（带冲突检测的载波侦听多路访问）来实现多个设备在同一信道上进行数据传输。其工作流程包括四个步骤：</p><ol><li><strong>先听后发：</strong> 发送设备在发送数据前先侦听信道，若空闲则发送数据，否则等待。</li><li><strong>边听边发：</strong> 发送设备在发送数据的同时持续侦听信道，若有冲突则停止发送。</li><li><strong>冲突停止：</strong> 发送设备若检测到信道上有冲突，则立即停止发送并发送干扰信号通知其他设备。</li><li><strong>延迟重发：</strong> 发送设备在停止发送后，等待一段随机时间后再次尝试发送数据，直至成功或达到最大重试次数。</li></ol><p>以太网协议简单、灵活、高效，但在信道负载较高时容易发生冲突，影响传输效率。其发展历史分为经典以太网和交换式以太网两个阶段。交换式以太网通过交换机等设备提高了信道利用率和传输速率，已成为主流的以太网技术。</p></details><h3 id="_7、什么是虚拟局域网-vlan-它的作用是什么" tabindex="-1"><a class="header-anchor" href="#_7、什么是虚拟局域网-vlan-它的作用是什么" aria-hidden="true">#</a> 7、什么是虚拟局域网（VLAN）？它的作用是什么？</h3><details class="hint-container details"><summary>什么是虚拟局域网（VLAN）？它的作用是什么？</summary><blockquote><p>什么是VLAN：</p></blockquote><p>VLAN是通过软件的方式实现的，把局域网进行流量隔离，将一个局域网划分成多个虚拟的、逻辑上独立的子网络，即使这些子网络可能跨越不同的物理位置、交换机或路由器，因为传统的网络设置中，它们都连接到同一个物理的网络交换机上，共享相同的网络资源和广播域。</p><ul><li>广播流量会跨越整个机构网络（ARP、RIP、DHCP协议）一个单位的不同部门共享一个局域网，对安全不利，所以引入了VLAN。</li></ul><p>想象一栋大楼里的不同办公室和部门组成了一个大的局域网。现在，通过VLAN技术，可以将这个大的局域网划分成多个虚拟的、逻辑上独立的子网，就像是这栋大楼中的各个部门实际上在逻辑上组成了各自独立的小区域。</p><p>比方说，这栋大楼有财务部门、市场部门和技术部门。在传统的网络设置中，它们都连接到同一个物理的网络交换机上，共享相同的网络资源和广播域。但通过VLAN，可以将它们划分为三个不同的虚拟网络（VLAN）：</p><ol><li><p><strong>财务部门VLAN：</strong> 财务部门的计算机、打印机和其他设备连接到同一个VLAN中，这个VLAN只允许财务部门内部的设备相互通信，对其他VLAN的设备不可见。</p></li><li><p><strong>市场部门VLAN：</strong> 同样地，市场部门的设备被划分到一个独立的VLAN中，让市场部门内部的设备可以相互通信，与其他VLAN隔离开来。</p></li><li><p><strong>技术部门VLAN：</strong> 技术部门也有自己的VLAN，其中的设备可以相互通信，但与其他VLAN中的设备隔离。</p></li></ol><blockquote><p>VLAN原理：</p></blockquote><ol><li><p><strong>基于端口：</strong> 交换机中除了转发表，还存在一张VLAN表，记录了各个端口号和它对应的VLAN号</p><ul><li>VLAN 可以基于交换机的端口进行划分。每个交换机端口都被指派到一个特定的 VLAN 上。当数据流经某个端口时，交换机知道该数据属于哪个 VLAN，并且只转发到同一 VLAN 的其他端口。</li></ul></li><li><p>**基于 MAC 地址：**VALN表中记录的是各个MAC地址和它对应的VLAN号</p><ul><li>VLAN 也可以根据设备的 MAC 地址进行划分。在交换机的 VLAN 表中，记录了不同 MAC 地址对应的 VLAN 号。这种方法可以让同一 VLAN 下的设备即使连接到不同的端口，也能够彼此通信。</li></ul></li><li><p><strong>基于 IP 地址：</strong> 可以进行跨路由器扩展</p><ul><li>VLAN 也能够基于 IP 地址进行扩展。通常在更高层次的网络设备（如路由器）上实现，允许不同的 VLAN 跨越不同的网络设备。这样，即使 VLAN 跨越了路由器等设备，仍然可以实现不同 VLAN 下设备之间的通信。</li></ul></li></ol></details><h3 id="_8、交换机和集线器有哪些区别-交换机与路由器的区别又是什么" tabindex="-1"><a class="header-anchor" href="#_8、交换机和集线器有哪些区别-交换机与路由器的区别又是什么" aria-hidden="true">#</a> 8、交换机和集线器有哪些区别？交换机与路由器的区别又是什么？</h3><details class="hint-container details"><summary>交换机和集线器有哪些区别？交换机与路由器的区别又是什么？</summary><blockquote><p>交换机（Switch）和集线器（Hub）的区别：</p></blockquote><ol><li><p><strong>工作原理：</strong></p><ul><li><strong>集线器（Hub）：</strong> 将所有连接到它的设备组成一个广播域，收到的数据包会广播给所有端口，所有设备都能看到并处理这些数据包。</li><li><strong>交换机（Switch）：</strong> 它有智能的转发能力，能够学习设备的 MAC 地址，并根据目的地 MAC 地址将数据包只转发到目标设备所在的端口，从而减少了网络中不必要的广播和冲突。</li></ul></li><li><p><strong>数据处理：</strong></p><ul><li><strong>集线器：</strong> 不具备数据过滤能力，所有数据包都会被广播到所有端口，增加了网络中的冲突和干扰。</li><li><strong>交换机：</strong> 有存储转发功能，能够在不同端口之间建立直接连接，只将数据包发送到目标设备，减少了网络中的冲突，提高了效率。</li></ul></li><li><p><strong>性能和速度：</strong></p><ul><li><strong>集线器：</strong> 在网络中传输速度相对较慢，因为所有设备共享带宽，且无法同时进行数据传输。</li><li><strong>交换机：</strong> 具有更高的性能，因为它能够在不同端口之间直接连接，实现了数据的并行传输，每个端口之间的数据传输不会相互影响。</li></ul></li></ol><blockquote><p>交换机（Switch）和路由器（Router）的区别：</p></blockquote><ol><li><p><strong>作用：</strong></p><ul><li><strong>交换机：</strong> 主要用于局域网内部的数据交换和转发，通过 MAC 地址实现设备间的通信。</li><li><strong>路由器：</strong> 用于连接不同网络，并在这些网络间转发数据，根据 IP 地址进行数据包的传输，实现不同网络之间的通信。</li></ul></li><li><p><strong>工作层次：</strong></p><ul><li><strong>交换机：</strong> 在数据链路层（第二层）操作，主要处理 MAC 地址。</li><li><strong>路由器：</strong> 在网络层（第三层）操作，主要处理 IP 地址。</li></ul></li><li><p><strong>广播域和隔离性：</strong></p><ul><li><strong>交换机：</strong> 在同一 VLAN 内部广播域是连通的，设备可直接通信；不同 VLAN 间需要路由器才能通信。</li><li><strong>路由器：</strong> 能够分隔不同的广播域（不同的子网），只有经过它才能在不同的子网之间进行通信。</li></ul></li></ol><p>总体来说，交换机更适用于局域网内部设备的连接和数据交换，而路由器则连接不同的网络，并能控制不同网络之间的数据流向。集线器在现代网络中已经很少使用，因为交换机的性能和功能更优。</p></details><h3 id="_9、在数据链路层中-csma-cd是什么-在哪种网络中使用" tabindex="-1"><a class="header-anchor" href="#_9、在数据链路层中-csma-cd是什么-在哪种网络中使用" aria-hidden="true">#</a> 9、在数据链路层中，CSMA/CD是什么？在哪种网络中使用？</h3><details class="hint-container details"><summary>在数据链路层中，CSMA/CD是什么？在哪种网络中使用？</summary><p>CSMA/CD 是“载波监听多点接入/碰撞检测”（Carrier Sense Multiple Access with Collision Detection）的缩写，是一种用于控制多个设备在共享传输介质上进行数据传输的协议。</p><blockquote><p>工作原理：</p></blockquote><ol><li><p><strong>载波监听（Carrier Sense）：</strong> 设备在发送数据之前会监听传输介质（例如，电缆或光纤），以检测是否有其他设备正在发送数据。如果传输介质闲置，设备就可以开始发送数据。</p></li><li><p><strong>多点接入（Multiple Access）：</strong> 多个设备共享同一个传输介质。因此，如果多个设备同时尝试发送数据，可能会发生数据碰撞。</p></li><li><p><strong>碰撞检测（Collision Detection）：</strong> 如果两个设备同时发送数据，它们的信号会在传输介质上发生碰撞。CSMA/CD协议允许设备检测到这种碰撞并立即停止发送，然后执行一种退避算法，以减少冲突再次发生的可能性。</p></li></ol><blockquote><p>使用场景：</p></blockquote><p>CSMA/CD 主要用于以太网局域网中。在传统的以太网中，所有设备连接到同一个共享传输介质（例如集线器），它们通过CSMA/CD协议来协调数据的发送，避免碰撞并处理任何发生的碰撞情况。然而，现代的以太网通常使用交换机，而不是集线器，因为交换机能够提供更好的性能和碰撞的避免，所以CSMA/CD在现代网络中的使用已经减少。</p></details><h3 id="_10、解释一下半双工与全双工通信的区别" tabindex="-1"><a class="header-anchor" href="#_10、解释一下半双工与全双工通信的区别" aria-hidden="true">#</a> 10、解释一下半双工与全双工通信的区别</h3><details class="hint-container details"><summary>解释一下半双工与全双工通信的区别是什么？</summary><p>半双工和全双工是两种不同的通信模式，它们的区别在于设备进行通信时能否同时发送和接收数据：</p><blockquote><p>半双工通信：</p></blockquote><ul><li><p><strong>定义：</strong> 在半双工通信中，设备可以在不同时间段内进行发送和接收数据，但不能同时进行发送和接收。</p></li><li><p><strong>工作原理：</strong> 当设备发送数据时，它不能立即接收来自同一通信链路的响应数据。只有当设备停止发送并切换到接收模式时，才能接收来自其他设备的数据。这种通信方式就像单行道交通，一边通行时另一边必须等待。</p></li><li><p><strong>示例：</strong> 对讲机就是典型的半双工设备。当一个人在说话时，其他人必须等待，无法同时说话。</p></li><li><p>半双工通信只能单向进行数据传输，设备需要在发送和接收之间切换；</p></li></ul><blockquote><p>全双工通信：</p></blockquote><ul><li><p><strong>定义：</strong> 在全双工通信中，设备能够同时进行发送和接收数据，即设备能够在同一时间内进行双向通信。</p></li><li><p><strong>工作原理：</strong> 设备可以同时发送和接收数据，允许实时的双向通信。这种通信方式就像是双向的双车道，两个方向的车辆可以同时行驶而不会相互干扰。</p></li><li><p><strong>示例：</strong> 典型的全双工设备包括大多数现代网络设备，例如双向无线电通信、以太网交换机和路由器等。在这些设备中，可以同时进行双向通信而不会出现冲突。</p></li><li><p>而全双工通信允许设备同时进行双向数据传输，提供了更高效的通信能力。</p></li></ul></details><h3 id="_11、arp协议是用来做什么的-它的作用是什么" tabindex="-1"><a class="header-anchor" href="#_11、arp协议是用来做什么的-它的作用是什么" aria-hidden="true">#</a> 11、ARP协议是用来做什么的？它的作用是什么？</h3><details class="hint-container details"><summary>ARP协议是用来做什么的？它的作用是什么？</summary><p>ARP（地址解析协议）是一个位于网络层和数据链路层之间的协议，是用于解析IP地址与MAC地址之间对应关系的协议。它的主要作用是在局域网中根据已知的IP地址查找对应的MAC地址。</p><blockquote><p>作用：</p></blockquote><ol><li><p><strong>IP地址到MAC地址的映射：</strong> ARP协议用于在局域网中确定一个IP地址对应的MAC地址。当一台设备需要发送数据到另一台设备时，它需要知道目标设备的MAC地址才能将数据帧发送到正确的位置。</p></li><li><p><strong>动态获取MAC地址：</strong> ARP协议允许设备在需要通信时动态地获取目标设备的MAC地址。当设备知道目标设备的IP地址但不知道其MAC地址时，会发送ARP请求广播以获取对应的MAC地址。</p></li><li><p><strong>缓存机制提高效率：</strong> 为了避免在每次通信时都进行ARP请求，设备通常会在本地维护一个ARP缓存表，将已知的IP地址和MAC地址对应关系存储一段时间。这样可以提高通信效率，避免多次ARP请求。</p></li><li><p><strong>局域网内部通信：</strong> ARP协议主要用于在同一局域网内解析IP地址到MAC地址的映射关系，而不涉及跨越路由器等设备的通信。</p></li></ol><blockquote><p>地址解析协议ARP属于TCP/IP体系结构的网际层，其作用是已知设备所分配到的IP地址，使用ARP协议可以通过该IP地址获取到设备的MAC地址，ARP协议只能在一段链路或一个网络上使用，不能全链路，只能跨链路</p></blockquote><p>数据的发送需要经过链路，仅仅知道IP地址是无法在数据链路层实现传输的，因此我们需要得到IP地址与MAC地址的对应关系，即地址解析。</p><ol><li>每台主机都会有一个ARP高速缓存表，记录有IP地址与MAC地址的对应关系</li><li>初始ARP高速缓存表为空，假设此时B知道C的IP地址，准备发送信息，但是由于不知道C的MAC地址，因此无法封装数据帧，所以此时会广播一个ARP请求报文(封装在MAC帧中，目的地址为广播地址FF-FF-FF-FF-FF-FF)， <ul><li>内容如下： <ul><li>我的IP地址是：xxx ；我的MAC地址是：XXX；我想知道C主机的MAC地址是多少？这个广播帧会被该广播域的所有主机收到</li><li>A主机收到后交由上层处理，发现B问的不是他，所以不予理会，C收到后交由上层处理，发现这个IP地址正是自己，因此首先将B的MAC地址和IP地址的对应关系记录到自己的高速缓存表中，接着返回给ARP响应报文(封装在MAC帧中，目的地址为B的MAC地址)，其中包含自己的MAC地址</li></ul></li></ul></li></ol><p>ARP高速缓存条目有静态与动态两种类型</p><ul><li>动态：代表是通过广播自动获取的条目，生命周期默认为两分钟</li><li>静态：是手工设置的条目，不同操作系统下的生命周期不同。</li></ul></details><h3 id="_13、hdlc协议在数据链路层中有什么作用" tabindex="-1"><a class="header-anchor" href="#_13、hdlc协议在数据链路层中有什么作用" aria-hidden="true">#</a> 13、HDLC协议在数据链路层中有什么作用？</h3><details class="hint-container details"><summary>HDLC协议在数据链路层中有什么作用？</summary><ul><li>常见的两种广域网数据链路层协议是 <strong>PPP 协议</strong>和 HDLC 协议</li></ul><p>HDLC（High-Level Data Link Control，高级数据链路控制）协议是一种在数据链路层中常见的通信协议，它具有以下作用和功能：</p><ol><li><p><strong>数据封装：</strong> HDLC协议能够将上层数据封装为数据帧，添加必要的控制信息，如帧起始和结束标志、地址、控制字段以及帧校验序列等，以便在数据链路上传输。</p></li><li><p><strong>数据传输和同步：</strong> HDLC协议负责在物理介质上传输数据帧，并确保发送和接收双方的数据同步和正确传输。它通过帧的同步字段来确保帧的边界以及数据的准确接收。</p></li><li><p><strong>流量控制：</strong> HDLC支持基本的流量控制机制，允许发送方根据接收方的能力来控制数据的发送速率，以避免接收方无法处理过多的数据而发生数据丢失。</p></li><li><p><strong>错误检测和纠错：</strong> HDLC在数据帧中使用循环冗余检验（CRC）等技术来检测数据传输过程中可能发生的错误，并在需要时进行纠正。</p></li><li><p><strong>连接管理：</strong> 它提供了连接管理功能，可以建立、维护和终止数据链路连接，确保通信的可靠性和有效性。</p></li></ol><p>总的来说，HDLC协议在数据链路层中起到了数据封装、传输、同步、流量控制、错误检测与纠正以及连接管理等多种作用，帮助确保数据的可靠传输和通信的稳定性。</p></details>',25),n=[r];function e(a,g){return o(),t("div",null,n)}const u=l(i,[["render",e],["__file","cn-datalink.html.vue"]]);export{u as default};
