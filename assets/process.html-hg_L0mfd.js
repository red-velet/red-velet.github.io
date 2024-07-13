import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as l,a as i}from"./app-KXX3jVXZ.js";const a={},e=i(`<h2 id="一、进程和线程" tabindex="-1"><a class="header-anchor" href="#一、进程和线程" aria-hidden="true">#</a> 一、进程和线程</h2><blockquote><p><strong>什么是程序、进程、线程，谈谈你的理解？</strong></p></blockquote><ul><li><strong>程序</strong>： <ol><li>程序是一组指令集合，用来指示计算机执行特定任务的。它们以某种特定的编程语言编写，可以是像Python、Java、C++等高级语言，也可以是机器语言（二进制代码）。</li><li>程序是静态的，它们只是存在于磁盘或内存中，直到被执行。</li></ol></li><li><strong>进程</strong>： <ol><li>进程是程序的动态存在的状态，是在计算机中执行时的实例。而且一个程序同时启动多个，也就是可以同时运行多个进程，每个进程都有自己的内存空间、资源（如CPU时间、文件句柄等）和状态，就和我们的Java中类与对象实例的关系，每个进程都被独立地管理，彼此之间不会干扰。</li><li>进程通常有两个任务：资源的分配和调度执行任务</li></ol></li><li><strong>线程</strong>： <ol><li>线程和进程是紧密相关的，线程是进程的一部分，是进程内的一个独立执行单元，线程之间共享进程的内存资源，且承担调度执行的任务。而引入线程主要就是用于执行调度任务的，用来提高并发度（上下文切换开销少-地址、资源、内核的切换）。</li><li>因为线程共享进程的资源，共享相同的地址空间。这种共享使得线程之间的通信更加直接和高效，可以通过共享内存等方式进行数据传递，而无需复杂的进程间通信机制。</li></ol></li></ul><hr><p>总体来说，举个不是很恰当的例子，程序就类似与我们的Java的类文件，它只有一个，是静态的文件，而进程就类似于对应类的对象实例，我们可以根据我们的类创建多个对象实例，同理一个程序可以启动多个进程，而线程是具体干活的，好比对象里面调用的方法，干不同的事情，调用不同的方法，他们之间的关系就类比与宅子-管家-仆人。</p><h3 id="_1、进程" tabindex="-1"><a class="header-anchor" href="#_1、进程" aria-hidden="true">#</a> 1、进程</h3><h4 id="_1-1-进程的定义" tabindex="-1"><a class="header-anchor" href="#_1-1-进程的定义" aria-hidden="true">#</a> 1.1 进程的定义</h4><blockquote><p><strong>进程的组成</strong>：程序段、数据段、PCB</p></blockquote><ul><li>程序段：进程的指令集合，包含了要执行的代码。 <ul><li>这部分通常是程序的二进制表示，存储在可执行文件中，当进程被加载到内存中执行时，程序段会被复制到进程的地址空间中。</li><li>多个进程的程序段是相同的，就类似与我们QQ安装目录下的EXE文件。</li></ul></li><li>数据段：运行过程中产生的数据库。 <ul><li>数据段包含了进程执行时所使用的全局和静态变量，以及其他与程序执行相关的数据，数据段也包括堆和栈，用于动态分配内存和管理函数调用。</li><li>每个进程的数据段是不同的。</li></ul></li><li>PCB：进程控制块是一种面向操作系统的数据结构，操作系统提供PCB来区分和管理不同的进程。 <ul><li>它存储了进程的详细信息，包括： <ul><li>进程的标识符（PID，Process ID）。</li><li>进程的状态（就绪、运行、阻塞等）。</li><li>进程的内存管理信息，如基址、界限等。</li></ul></li><li>每个进程都有一个对应的 PCB。</li></ul></li></ul><h4 id="_1-2-进程的的状态和转换" tabindex="-1"><a class="header-anchor" href="#_1-2-进程的的状态和转换" aria-hidden="true">#</a> 1.2 进程的的状态和转换</h4><blockquote><p><strong>进程间的状态</strong>：创建态、<strong>就绪态、运行态、阻塞态</strong>、终止态</p></blockquote><ul><li>创建态（Created）： <ul><li>进程被创建，但尚未被操作系统调度执行。在这个阶段，操作系统为进程分配资源，包括内存空间、标识符等。</li></ul></li><li><strong>就绪态（Ready）</strong>： <ul><li>进程已经准备好执行，等待被调度到处理器上执行。在这个状态下，进程已经获取了所有运行所需的资源，只需等待操作系统进行调度。</li></ul></li><li><strong>运行态（Running）</strong>： <ul><li>分配到时间片，进程被调度在处理器上执行。在这个状态下，进程正在执行其指令，占用处理器时间。一个系统中可能有多个处于运行态的进程，这取决于系统的调度算法。</li></ul></li><li><strong>阻塞态（Blocked）</strong>： <ul><li>进程因为等待某个事件发生而被阻塞。这可能是等待输入/输出完成、等待某个资源可用等。在阻塞态，进程不占用处理器时间，系统可以调度其他就绪态的进程，进入阻塞态是进程主动的。</li></ul></li><li>终止态（Terminated）： <ul><li>进程执行完成或由于某种原因被终止。在终止态，进程释放其占用的资源，包括内存空间、文件等。通常，操作系统会保留进程的最终状态和执行结果。</li></ul></li></ul><blockquote><p><strong>进程控制 / 进程状态转换的原理</strong>：</p></blockquote><p>原语：创建、终止、阻塞、唤醒、切换等原语指令。</p><p>原语：原语的执行具有原子性，即执行过程只能一气呵成，期间不允许被中断。可以用<code>“关中断指令”</code>和<code>“开中断指令”</code>这两个特权指令实现原子性</p><ul><li>CPU执行了关中断指令之后，就不再例行检查中断信号，直到执行开中断指令之后才会恢复检查。这样，关中断、开中断之间的这些指令序列就是不可被中断的，这就实现了“原子性”</li></ul><h4 id="_1-3-进程的通信" tabindex="-1"><a class="header-anchor" href="#_1-3-进程的通信" aria-hidden="true">#</a> 1.3 进程的通信</h4><p>IPC-进程的通信，两个进程之间产生数据交换，就类似于我们的文件分享，复制粘贴等操作。</p><blockquote><p><strong>进程间的通信</strong>：</p></blockquote><ul><li><strong>共享内存</strong>：通过设置一个共享空间，然后进行互斥访问进行通信。 <ol><li>基于数据结构的共享：比如共享空间里只能放一个长度为10的数组。这种共享方式速度慢、限制多，是一种低级通信方式</li><li>基于存储区的共享：在内存中画出一块共享存储区，数据的形式、存放位置都由进程控制，而不是操作系统。相比之下，这种共享方式速度更快，是一种高级通信方式。</li><li>Linux中共享内存： <ul><li>通过shm_open系统调用，申请一片共享内存区<code>int shm_open(…)</code>;</li><li>通过mmap系统调用，将共享内存区映射到进程自己的地址空间<code>void*mmap(…)</code>;</li></ul></li></ol></li><li><strong>消息传递</strong>：发送信息的进程将消息头写好，接受信息进程根据消息头读取信息或寻找信封是哪一个 <ul><li>进程间的数据交换以格式化的消息(Message)为单位。进程通过操作系统提供的<code>“发送消息/接收消息”</code>两个原语进行数据交换。</li></ul></li><li><strong>管道通信</strong>：<code>“管道”</code>是指用于连接读写进程的一个共享文件，又名pipe文件。其实就是在内存中开辟一个大小固定的缓冲区. <ol><li>管道只能采用半双工通信，某一时间段内只能实现单向的传输。如果要实现双向同时通信，则需要设置两个管道。</li><li>各进程要互斥地访问管道。</li><li>数据以字符流的形式写入管道，当管道写满时，写进程的write()系统调用将被阻塞，等待读进程将数据取走。当读进程将数据全部取走后，管道变空，此时读进程的read()系统调用将被阻塞。</li><li>如果没写满，就不允许读。如果没读空，就不允许写。</li><li>数据一旦被读出，就从管道中被抛弃，这就意味着读进程最多只能有一个，否则可能会有读错数据的情况。</li></ol></li></ul><h3 id="_2、线程" tabindex="-1"><a class="header-anchor" href="#_2、线程" aria-hidden="true">#</a> 2、线程</h3><h4 id="_2-1-线程的定义" tabindex="-1"><a class="header-anchor" href="#_2-1-线程的定义" aria-hidden="true">#</a> 2.1 线程的定义</h4><blockquote><p>线程的实现方式：</p></blockquote><ul><li><code>用户级线程</code>(User-Level Thread,UTL)：从用户视角看能看到的线程 <ul><li>用户级线程由应用程序通过线程库实现所有的线程管理工作都由应用程序负责（包括线程切换)用户级线程中，线程切换可以在用户态下即可完成，无需操作系统干预。在用户看来，是有多个线程。但是在操作系统内核看来，并意识不到线程的存在。（用户级线程对用户不透明，对操作系统透明)</li></ul></li><li><code>内核级线程</code>(Kernel-Level Thread, KTL)。内核级线程又称<code>内核支持的线程</code>：从操作系统内核视角看能看到的线程 <ul><li>内核级线程的管理工作由操作系统内核完成。线程调度、切换等工作都由内核负责，因此内核级线程的切换必然需要在核心态下才能完成。</li></ul></li></ul><h4 id="_2-2-线程的模型" tabindex="-1"><a class="header-anchor" href="#_2-2-线程的模型" aria-hidden="true">#</a> 2.2 线程的模型</h4><blockquote><p>多线程模型：</p></blockquote><ol><li><p>多对一模型（Many-to-One）：</p><ul><li>多个用户级线程映射到一个内核级线程。用户线程的管理和调度由用户空间的线程库负责，而操作系统只关注内核级线程。这种模型的好处是实现简单，但是如果一个线程阻塞，整个进程就会阻塞。</li></ul></li><li><p>一对一模型（One-to-One）：</p><ul><li>每个用户级线程都映射到一个内核级线程。这样，如果一个线程阻塞，其他线程仍然可以继续执行。这种模型提高了并发性，但也引入了更多的管理开销，因为每个线程都需要由操作系统进行管理。</li></ul></li><li><p><strong>多对多模型（Many-to-Many）</strong>：</p><ul><li>多个用户级线程映射到多个内核级线程。这种模型允许开发者创建更多的用户级线程，而操作系统可以在这些用户级线程和内核级线程之间进行动态映射。这提供了更大的灵活性和更好的性能，但也引入了更复杂的管理和调度。</li></ul></li><li><p>两级模型（Two-Level or Two-Tier）：</p><ul><li>这种模型结合了一对一和多对一模型的优点。在用户级别有多个轻量级线程，每个映射到一个内核级线程。这样，当一个用户级线程阻塞时，其他用户级线程仍然可以执行。</li></ul></li></ol><h4 id="_2-3-线程的状态和转换" tabindex="-1"><a class="header-anchor" href="#_2-3-线程的状态和转换" aria-hidden="true">#</a> 2.3 线程的状态和转换</h4><blockquote><p>线程的状态：</p></blockquote><ol><li><strong>创建（New）：</strong> 线程被创建，但尚未开始执行任务。这个状态可能在线程对象被实例化后但还未调用其 <code>start()</code> 方法时出现。</li><li><strong>运行（Running）：</strong> 线程正在执行任务的状态。</li><li><strong>就绪（Ready）：</strong> 线程准备好执行，等待分配处理器时间。</li><li><strong>阻塞（Blocked）：</strong> 线程在等待某个事件的发生，比如等待输入输出完成、等待锁的释放等。</li><li><strong>终止（Terminated）：</strong> 线程执行完任务，结束运行。</li></ol><blockquote><p>线程的状态转换：</p></blockquote><ol><li><strong>线程控制块（TCB）：</strong><ul><li>包含了线程的各种信息，如程序计数器（PC）、寄存器状态、堆栈指针等。TCB用于保存和管理线程的状态信息，在线程切换时，当前线程的TCB会保存，新线程的TCB会加载。</li></ul></li><li><strong>线程表（Thread Table）：</strong><ul><li>将多个线程的TCB组织成一张表，用于整体管理。线程表中可以包含每个线程的优先级信息、线程标识符（TID，类似于进程的PID）等。线程表是操作系统用于调度、分配资源的数据结构。</li></ul></li><li><strong>线程标识符（TID）：</strong><ul><li>类似于进程的进程标识符（PID），用于唯一标识一个线程。</li></ul></li><li><strong>堆栈指针（Stack Pointer）：</strong><ul><li>指向线程的堆栈，用于保存函数调用信息、局部变量等。堆栈是线程运行时保存临时数据的地方。</li></ul></li></ol><h2 id="二、处理机调度" tabindex="-1"><a class="header-anchor" href="#二、处理机调度" aria-hidden="true">#</a> 二、处理机调度</h2><h3 id="_1、概述" tabindex="-1"><a class="header-anchor" href="#_1、概述" aria-hidden="true">#</a> 1、概述</h3><blockquote><p><strong>什么是调度</strong>：</p></blockquote><p>调度是指操作系统在多任务环境下决定哪个进程可以使用处理器资源的过程。由于处理器资源是有限的，系统必须进行决策来合理地分配这些资源，以最大化系统的效率和性能，所谓调度就是调度算法。</p><p>调度算法通常考虑以下几个方面：</p><ol><li><p><strong>公平性：</strong> 确保每个进程都有机会使用处理器资源，避免某些进程长时间占用处理器而其他进程无法执行的情况。</p></li><li><p><strong>效率：</strong> 尽可能地减少上下文切换的次数，因为上下文切换会带来额外的开销。上下文切换是指保存并恢复进程状态所需的操作，当处理器从一个进程切换到另一个进程时发生。</p></li><li><p><strong>响应时间：</strong> 保证用户能够快速得到系统响应，尽量减少用户等待时间。</p></li><li><p><strong>吞吐量：</strong> 系统单位时间内完成的进程数量。有时候重视多少进程完成而非单个进程的响应时间。</p></li></ol><p>调度算法有多种，每种算法都有其优缺点和适用场景。常见的调度算法包括：</p><ul><li><p><strong>先来先服务（FCFS）：</strong> 按照进程到达的顺序进行调度，先到达的先执行，适用于简单场景，但可能会导致长作业等待时间过长。</p></li><li><p><strong>最短作业优先（SJF）：</strong> 选择执行时间最短的进程先执行，可以最大程度地减少平均等待时间，但可能会出现“饥饿”现象，即长作业始终得不到执行。</p></li><li><p><strong>优先级调度：</strong> 按照进程优先级进行调度，具有最高优先级的进程先执行。但要注意，高优先级进程可能会长时间占用处理器而导致低优先级进程饥饿。</p></li><li><p><strong>轮转调度（Round Robin）：</strong> 将处理器时间分成若干时间片，每个进程依次执行一个时间片，然后切换到下一个进程。这种方法确保公平性，并且能够有效避免长作业等待时间过长的问题，但可能会增加上下文切换的开销。</p></li></ul><p>不同的场景可能需要不同的调度算法，选择合适的算法可以提高系统的性能和效率。</p><hr><blockquote><p><strong>调度的三个层次</strong>：</p></blockquote><ol><li><strong>作业调度（Job Scheduling）：</strong> 高级调度 - 这是最高层次的调度，它负责从所有进入系统的作业中<strong>选择哪些作业进入内存</strong>，准备开始执行。这个层次的调度器负责决定哪些作业需要进入系统的队列，以及它们的优先级。 <ul><li>当作业调入内存时，会建立该作业的进程控制块（PCB），而当作业调出内存时，PCB就会被撤销。</li></ul></li><li><strong>内存调度（Memory Scheduling）：</strong> 中级调度- 位于高级调度和低级调度之间。其主要任务是<strong>管理内存中已经准备好运行的进程</strong>。中级调度决定哪些进程应该留在内存中，哪些应该暂时移到外存（即挂起或换出），以及何时将它们从外存调回内存。其目标是维持合理的内存利用率，确保内存中始终有足够的进程在执行，同时避免过多进程导致内存不足的情况。此外，中级调度也控制着进程的挂起和恢复，以更好地管理系统资源。</li><li><strong>进程调度（Process Scheduling）：</strong> 低级调度 - 这个层次的调度器负责<strong>决定哪个进程将获得CPU时间</strong>，并且在多个就绪态进程中进行选择，为其分配CPU资源。它处理内存中已经准备好运行的进程。</li></ol><hr><blockquote><p><strong>进程调度的时机</strong>：</p></blockquote><p>这里是关于进程调度的时机：</p><ol><li><p><strong>进程调度的主动条件：</strong></p><ul><li>进程主动放弃处理机</li><li>当前运行的进程正常终止</li><li>运行过程中发生异常而终止</li><li>进程主动请求阻塞（如等待 I/O）</li></ul></li><li><p><strong>进程调度的被动条件：</strong></p><ul><li>当前运行的进程分配的时间片用完</li><li>进程可以主动放弃处理机，当有更紧急的任务需要处理时，如 I/O 中断</li><li>有更高优先级的进程进入就绪队列，需要执行</li><li>任务需要处理时，系统会强行剥夺处理机（被动放弃）</li></ul></li><li><p><strong>不能进行进程调度与切换的情况：</strong></p><ul><li>进程在操作系统内核程序临界区中，因为临界区需要互斥执行</li><li>在处理中断的过程中，中断处理过程需要尽快完成，不适合进行进程切换</li><li>在原子操作过程中（原语），这些操作不可中断，需要一气呵成。例如修改 PCB 中程序状态标志，并将 PCB 放入相应队列。</li></ul></li></ol><hr><blockquote><p><strong>进程调度的方式</strong>：</p></blockquote><ol><li><p><strong>非剥夺调度方式</strong>（非抢占方式）：</p><ul><li>在这种方式下，只有在进程主动放弃处理机的情况下才会进行调度切换。</li><li>即使有更紧急的任务到达，当前运行的进程会继续占用处理机，直到该进程自愿释放处理机（例如终止或请求进入阻塞状态）。</li><li>系统不会强制暂停当前进程以分配处理机给其他进程。</li></ul></li><li><p><strong>剥夺调度方式</strong>（抢占方式）：</p><ul><li>在这种方式下，如果有一个更加重要或紧急的进程需要使用处理机，系统会立即暂停当前正在执行的进程，并将处理机分配给更重要或紧急的那个进程。</li><li>这种方式允许系统在运行中的进程未完成时强制暂停它，并将处理机分配给更紧急需要的进程。</li></ul></li></ol><hr><blockquote><p>进程的切换：</p></blockquote><ol><li><p><strong>狭义的进程调度</strong>：</p><ul><li>调度： <ul><li>指从就绪队列中选择一个要运行的进程。</li><li>可能是刚刚被暂停执行的进程，也可能是另一个进程。</li><li>不一定涉及进程的切换，而只是决定下一个运行的进程是哪一个。</li></ul></li><li><strong>进程切换</strong>： <ul><li>是指一个进程让出处理机，由另一个进程占用处理机的过程。</li><li>包含了对原来运行进程各种数据的保存和对新的进程各种数据的恢复。</li></ul></li></ul></li><li><p><strong>广义的进程调度</strong>：包括了选择一个进程和进程切换两个步骤。进程切换是在进行进程调度时可能发生的一部分，其中包括了保存当前运行进程的状态并恢复另一个进程的状态以使其可以继续执行。</p><ul><li>进程切换的过程主要涉及到对进程控制块（PCB）中的信息进行保存和恢复： <ol><li><strong>保存原进程的状态</strong>：保存原进程在执行时的各种数据，例如程序计数器、程序状态字、寄存器等，这些数据通常存储在进程控制块中。</li><li><strong>恢复新进程的状态</strong>：将新进程在进程控制块中保存的状态信息加载到处理机中，以使其可以继续执行。</li></ol></li></ul></li></ol><h3 id="_2、调度算法" tabindex="-1"><a class="header-anchor" href="#_2、调度算法" aria-hidden="true">#</a> 2、调度算法</h3><blockquote><p>先来先服务 (FCFS)：</p></blockquote><ol><li><strong>算法思想</strong>：按照进程/作业到达的顺序进行调度。</li><li><strong>算法规则</strong>：选择最先到达的进程/作业，优先执行。</li><li><strong>调度对象</strong>：通常用于进程调度。</li><li><strong>抢占/非抢占</strong>：FCFS是非抢占式调度算法。</li><li><strong>优点和缺点</strong>： <ul><li>优点：简单易实现，避免了优先级的复杂性。</li><li>缺点：可能导致长作业等待时间过长，效率不高。</li></ul></li></ol><blockquote><p>短作业优先 (SJF)：</p></blockquote><ol><li><strong>算法思想</strong>：选择执行时间最短的进程。</li><li><strong>算法规则</strong>：在就绪队列中选择估计执行时间最短的进程先执行。</li><li><strong>调度对象</strong>：通常用于进程调度。</li><li><strong>抢占/非抢占</strong>：可以是抢占式或非抢占式。</li><li><strong>优点和缺点</strong>： <ul><li>优点：平均等待时间最短，吞吐量较高。</li><li>缺点：可能会导致长作业长时间等待，可能产生饥饿现象。</li></ul></li></ol><blockquote><p>高响应比优先 (HRRN)：</p></blockquote><ol><li><strong>算法思想</strong>：综合考虑等待时间和服务时间，选择响应比最高的进程。</li><li><strong>算法规则</strong>：计算响应比（等待时间+服务时间）/ 服务时间，选择响应比最高的进程执行。</li><li><strong>调度对象</strong>：通常用于进程调度。</li><li><strong>抢占/非抢占</strong>：一般是非抢占式的。</li><li><strong>优点和缺点</strong>： <ul><li>优点：更加综合地考虑了等待时间和服务时间，避免了长作业等待。</li><li>缺点：需要计算响应比，算法相对复杂。</li></ul></li></ol><blockquote><p>时间片轮转：</p></blockquote><ol><li><strong>算法思想</strong>：将处理器时间划分为固定长度的时间片，每个进程在一个时间片内执行，如果未完成则被放入就绪队列末尾等待下一次轮到。</li><li><strong>算法规则</strong>：按照进程到达的顺序进行调度，每个进程执行一个时间片后，切换到下一个进程。</li><li><strong>调度对象</strong>：主要用于进程调度。</li><li><strong>抢占/非抢占</strong>：时间片轮转是非抢占式的，但可以通过时间片结束进行切换。</li><li><strong>优点和缺点</strong>： <ul><li>优点：公平性好，避免了长作业等待时间过长的情况。</li><li>缺点：对于长时间运行的进程，响应时间较长。</li></ul></li></ol><blockquote><p>优先级调度：</p></blockquote><ol><li><strong>算法思想</strong>：按照进程优先级进行调度，具有最高优先级的进程先执行。</li><li><strong>算法规则</strong>：根据进程的优先级决定执行顺序，高优先级的进程优先执行。</li><li><strong>调度对象</strong>：主要用于进程调度。</li><li><strong>抢占/非抢占</strong>：可以是抢占式或非抢占式，取决于是否允许更高优先级的进程抢占正在执行的进程。</li><li><strong>优点和缺点</strong>： <ul><li>优点：高优先级任务得到快速响应，适合实时性要求高的场景。</li><li>缺点：低优先级任务可能会长时间等待，存在饥饿问题。</li></ul></li></ol><blockquote><p>多级反馈队列调度：</p></blockquote><ol><li><strong>算法思想</strong>：采用多个就绪队列，每个队列拥有不同的优先级，优先级高的队列优先执行。</li><li><strong>算法规则</strong>：新到达的进程进入最高优先级队列，如果未完成执行，下次进入优先级稍低的队列，以此类推。</li><li><strong>调度对象</strong>：主要用于进程调度。</li><li><strong>抢占/非抢占</strong>：通常是非抢占式的，但可以通过进程主动放弃CPU来进行切换。</li><li><strong>优点和缺点</strong>： <ul><li>优点：综合考虑了长作业和短作业的处理，避免了长时间等待和饥饿现象。</li><li>缺点：队列切换开销较大，可能存在过多的进程调度问题。</li></ul></li></ol><blockquote><p>多级队列调度：</p></blockquote><ol><li><p><strong>算法思想</strong>：将就绪队列分为多个优先级不同的队列，按照进程的特性或优先级进行划分，以提高调度效率。</p></li><li><p><strong>算法规则</strong>：根据不同的队列优先级，采用不同的调度规则，例如高优先级队列可以采用短作业优先（SJF）调度，低优先级队列可能采用时间片轮转等。</p></li><li><p><strong>调度对象</strong>：多级队列调度算法主要用于进程调度，根据进程的特性将其分配到不同的队列中。</p></li><li><p><strong>抢占/非抢占</strong>：通常情况下，多级队列调度算法是非抢占式的，即一个进程开始执行后不会被其他进程抢占，除非进程主动放弃CPU。</p></li><li><p><strong>优点和缺点</strong>：</p><ul><li>优点：能够根据进程的特性和优先级进行灵活调度，提高了系统的效率和响应速度。</li><li>缺点：队列切换可能会带来一定的开销，如果不恰当地划分队列或选择调度策略，可能会导致性能下降。</li></ul></li></ol><h3 id="_3、拓展" tabindex="-1"><a class="header-anchor" href="#_3、拓展" aria-hidden="true">#</a> 3、拓展</h3><blockquote><p><strong>什么是饥饿问题</strong>：</p></blockquote><p>饥饿问题是指一个或多个进程永远无法获得所需的资源以执行或完成任务的情况。在资源分配中，可能出现某些情况使得某些进程无法获取所需的资源，进而无法继续执行，这种情况被称为饥饿。</p><p>饥饿问题通常出现在以下情况下：</p><ol><li><p><strong>优先级倾斜</strong>：高优先级的进程不断获取资源，导致低优先级进程无法获得足够的资源。</p></li><li><p><strong>资源独占</strong>：某些进程持有某些关键资源，不释放，导致其他进程无法获得这些资源。</p></li><li><p><strong>等待</strong>：进程等待某些资源的释放，但这些资源被其他进程持有，因此等待的进程无法继续执行。</p></li></ol><p>解决饥饿问题的方法通常包括：</p><ul><li><p><strong>公平性原则</strong>：确保资源分配是公平的，不偏袒某个特定的进程。</p></li><li><p><strong>优先级调度</strong>：合理分配进程的优先级，确保低优先级进程也能有机会获得资源。</p></li><li><p><strong>资源释放</strong>：确保进程在使用完资源后及时释放，避免长时间占用资源。</p></li><li><p><strong>资源预分配</strong>：提前为进程分配它们可能需要的资源，减少等待时间。</p></li></ul><p>通过以上方法，可以尽可能地避免饥饿问题，确保系统中的所有进程都能够获得它们所需的资源，避免长时间无法执行的情况。</p><h2 id="三、进程同步和互斥" tabindex="-1"><a class="header-anchor" href="#三、进程同步和互斥" aria-hidden="true">#</a> 三、进程同步和互斥</h2><h3 id="_1、进程同步" tabindex="-1"><a class="header-anchor" href="#_1、进程同步" aria-hidden="true">#</a> 1、进程同步</h3><blockquote><p><strong>什么是进程同步</strong>：</p></blockquote><p>进程同步指的是在多个并发执行的进程或线程之间，对它们的执行顺序或执行时机进行协调和控制，以确保它们能够以合适的顺序、正确的时间点或正确的方式执行某些特定的操作或任务。</p><ul><li>这种同步通常是为了避免出现竞争条件（多个进程争夺共享资源导致的问题）、数据不一致或死锁等问题。</li><li>它可以通过各种同步机制和工具来实现，比如临界区、信号量、互斥量、条件变量、事件等。这些机制可以帮助进程之间互相通信和协调，以确保在共享资源的使用或信息传递时，不会发生不可预知的错误或不一致的状态。</li></ul><hr><blockquote><p><strong>同步和异步</strong>：</p></blockquote><p><strong>同步：</strong></p><ul><li><strong>意义：</strong> 同步是指程序按照一定的顺序执行，一个操作完成后，下一个操作才会执行。在同步操作中，每个步骤都依赖于前一个步骤的完成。</li><li><strong>执行方式：</strong> 在同步操作中，一个进程执行某个任务时，它需要等待另一个进程或系统的响应，直到任务完成后才能继续执行下一个任务。这种方式确保了任务的有序性和可控性。</li></ul><p><strong>异步：</strong></p><ul><li><strong>意义：</strong> 异步是指一个操作的执行不依赖于其他操作的完成。在异步操作中，一个任务的执行不会阻塞其他任务的执行，它可以在后台进行而不干扰主流程的执行。</li><li><strong>执行方式：</strong> 在异步操作中，一个进程可以继续执行其他任务，即使某个任务尚未完成。它通常会通过回调函数、事件驱动机制或者消息队列来处理任务的结果。</li></ul><p><strong>简单解释：</strong></p><ul><li><strong>同步</strong>是按照固定的顺序逐步执行，每个步骤依赖于上一个步骤的完成。</li><li><strong>异步</strong>是不等待某个操作的完成，而是允许程序继续执行其他任务。</li></ul><p><strong>实例：</strong></p><ul><li>比如你在下载一个文件，如果是同步下载，你必须等待整个文件下载完成后才能进行其他操作；而异步下载允许你同时进行其他任务，下载过程在后台进行，你可以在下载的同时做其他事情。</li></ul><h3 id="_2、进程互斥" tabindex="-1"><a class="header-anchor" href="#_2、进程互斥" aria-hidden="true">#</a> 2、进程互斥</h3><h4 id="_2-1-概述" tabindex="-1"><a class="header-anchor" href="#_2-1-概述" aria-hidden="true">#</a> 2.1 概述</h4><blockquote><p><strong>什么是进程互斥</strong>：</p></blockquote><p>进程互斥是指在多道程序设计中，对共享资源进行访问时，为了确保数据的一致性和正确性，同一时间只允许一个进程访问共享资源的机制。</p><ul><li>这个机制的目的是防止多个进程同时修改共享资源导致数据混乱或错误。典型的共享资源包括内存区域、文件、数据库等。在进程互斥的情况下，如果一个进程正在对共享资源进行操作，其他进程就必须等待，直到当前进程释放了对资源的控制权。 <ul><li>两种资源的访问方式：互斥访问、同时访问</li></ul></li><li>为了实现进程互斥，通常会使用锁、信号量、互斥量等同步机制。这些机制可以确保在一个进程访问共享资源时，其他进程无法同时访问，从而避免了资源竞争和数据冲突的问题。</li></ul><blockquote><p><strong>临界区内容</strong>：</p></blockquote><ul><li><p><strong>entry section（进入区）</strong>：负责检查临界区是否可以进入，设置正在访问临界资源的标志（相当于上锁），阻止其他进程同时进入临界区。这一步骤用于协调多个进程对临界资源的访问，确保只有一个进程可以进入临界区。</p></li><li><p><strong>critical section（临界区）</strong>：包含<strong>访问临界资源的代码段</strong>。在这里对共享资源进行读取或修改。由于这是多个进程共享的关键区域，需要确保在同一时间只有一个进程可以执行其中的代码，以免造成数据混乱或错误。</p></li><li><p><strong>exit section（退出区）</strong>：负责解除正在访问临界资源的标志（相当于解锁），允许其他进程进入临界区。这一步骤标志着当前进程即将退出临界区，让其他进程有机会进入执行临界区代码。</p></li><li><p><strong>remainder section（剩余区）</strong>：在退出临界区后，处理剩余的代码段。这里是在进程不再访问临界资源时执行的代码。</p></li></ul><h4 id="_2-2-进程互斥的软件实现方法" tabindex="-1"><a class="header-anchor" href="#_2-2-进程互斥的软件实现方法" aria-hidden="true">#</a> 2.2 进程互斥的软件实现方法</h4><p>当然，以下是整合了描述和相关代码的内容：</p><blockquote><p>单标志法（单个标志）</p></blockquote><ul><li><strong>思想</strong>：使用一个标志来指示进程是否可以进入临界区。</li><li><strong>原理</strong>：进程试图进入临界区之前，先检查标志是否为可进入状态。如果可以进入，则将标志置为忙碌状态，进入临界区。当退出临界区时，将标志置为可进入状态。</li><li><strong>在进入区做了什么</strong>：检查标志状态，如果可进入，则将标志置为忙碌状态。</li><li><strong>在退出区做了什么</strong>：将标志置为可进入状态。</li><li>问题： <ul><li><strong>忙等待问题</strong>：如果进程不停地检查标志状态以确定是否可以进入临界区，可能会导致进程持续忙等待，占用大量的处理器时间。</li><li><strong>优先级反转</strong>：当高优先级进程试图进入临界区，但被低优先级进程持续占用，导致高优先级进程长时间等待，出现优先级反转问题。</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">SingleFlagMethod</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">enterCriticalSection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 忙等待，等待标志为可进入状态</span>
        <span class="token punctuation">}</span>
        flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 进入临界区</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">exitCriticalSection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 退出临界区，将标志置为可进入状态</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>双标志先检查</p></blockquote><ul><li><strong>思想</strong>：使用两个标志来确保互斥。</li><li><strong>原理</strong>：进程首先检查自己的标志，如果可以进入临界区，然后检查另一个进程的标志。如果对方不在临界区并且标志为可进入，则可以进入自己的临界区。</li><li><strong>在进入区做了什么</strong>：检查自己的标志状态，如果可以进入，则检查其他进程的标志状态。</li><li><strong>在退出区做了什么</strong>：将自己的标志置为可进入状态。</li><li>问题： <ul><li><strong>死锁风险</strong>：如果两个进程都在等待对方释放锁的同时，都拥有自己的锁，可能导致死锁。</li><li><strong>饥饿问题</strong>：如果一个进程一直被另一个进程占据，可能导致它一直无法进入临界区，产生饥饿问题。</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">TwoFlagFirstCheck</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> flagA <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> flagB <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">enterCriticalSectionA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        flagA <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>flagB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flagB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 进入临界区 A</span>
                flagA <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">exitCriticalSectionA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        flagA <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">enterCriticalSectionB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        flagB <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>flagA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flagA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 进入临界区 B</span>
                flagB <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">exitCriticalSectionB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        flagB <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>双标志后检查</p></blockquote><ul><li><strong>思想</strong>：也是使用两个标志来确保互斥。</li><li><strong>原理</strong>：进程首先将自己的标志置为忙碌状态，然后检查其他进程的标志。如果对方在临界区并且标志为忙碌，则等待。否则，可以进入自己的临界区。</li><li><strong>在进入区做了什么</strong>：将自己的标志置为忙碌状态，然后检查其他进程的标志状态。</li><li><strong>在退出区做了什么</strong>：将自己的标志置为可进入状态。 <ul><li>问题： <ul><li><strong>忙等待问题</strong>：类似于单标志法，如果进程不停地检查对方的标志状态以确定是否可以进入临界区，可能会导致持续的忙等待。</li><li><strong>优先级反转</strong>：在某些情况下，如果高优先级进程试图进入临界区，但被低优先级进程持续占用，同样可能出现优先级反转问题。</li></ul></li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">TwoFlagLaterCheck</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> flagA <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> flagB <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">enterCriticalSectionA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        flagA <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>flagB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            flagA <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>flagB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 忙等待，等待对方不再在临界区</span>
            <span class="token punctuation">}</span>
            flagA <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 进入临界区 A</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">exitCriticalSectionA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        flagA <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">enterCriticalSectionB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        flagB <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>flagA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            flagB <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>flagA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 忙等待，等待对方不再在临界区</span>
            <span class="token punctuation">}</span>
            flagB <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 进入临界区 B</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">exitCriticalSectionB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        flagB <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Peterson算法</p></blockquote><ul><li><p><strong>思想</strong>：通过设置共享的布尔变量和整数变量来实现两个进程的互斥。</p></li><li><p><strong>原理</strong>：使用一个turn变量记录当前轮到哪个进程执行，以及一个数组flags[]记录各进程的意愿。进程首先设置自己的flag为true，并将turn设置为对方的编号。然后检查对方是否有意愿进入临界区，如果有，则等待。如果没有，则进入自己的临界区。</p><ul><li><strong>在进入区做了什么</strong>：设置自己的flag和turn，然后检查对方的意愿。</li><li><strong>在退出区做了什么</strong>：清除自己的flag，允许对方进入。</li><li>问题： <ul><li><strong>有限适用性</strong>：Peterson算法仅适用于两个进程之间的互斥，扩展到更多进程时，复杂度增加，不够灵活。</li><li><strong>忙等待问题</strong>：算法中包含了忙等待的部分，可能导致进程持续消耗处理器时间。</li><li><strong>可扩展性问题</strong>：随着参与进程数量的增加，算法的复杂性和管理开销也会增加。</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></li></ul><p>class PetersonAlgorithm {<br> private volatile boolean flag[] = {false, false};<br> private volatile int turn = 0;</p><pre><code>public void enterCriticalSection(int process) {
    int other = 1 - process;
    flag[process] = true;
    turn = other;

    while (flag[other] &amp;&amp; turn == other) {
        // 忙等待，等待对方离开临界区
    }

    // 进入临界区 Process process
}

public void exitCriticalSection(int process) {
    flag[process] = false;
}
</code></pre><p>}</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>




#### 2.3 进程互斥的硬件实现方法

&gt; 中断屏蔽方法

- **原理**：在进入临界区之前，通过屏蔽（禁止）中断的方式防止其他进程打断当前进程，从而实现互斥。这样做可以确保在临界区内不会有其他进程打断当前进程。

- **优点**：
- 实现简单，直接利用硬件中断屏蔽的机制。
- 可以确保临界区代码的原子性，防止被中断打断。

- **缺点**：
- 可能导致系统响应性下降，因为一些重要的中断被禁止，例如时钟中断、I/O中断等。
- 可能导致死锁，如果某个进程在临界区内发生故障，并且无法释放锁。

&gt; TestAndSet(TS指令/TSL指令)

- **原理**：TestAndSet操作是一种原子操作，用于设置一个锁（或者说标志位）。它在一个操作中读取当前值并将其设置为新值，同时返回先前的值。通过这个操作，可以实现对共享资源的互斥访问。

- **优点**：
- 可以实现原子性的锁设置，避免了死锁的问题。
- 相对于中断屏蔽方法，TestAndSet更加灵活，不会导致系统级的中断问题。

- **缺点**：
- 忙等待问题，进程需要不断地轮询锁的状态，占用CPU资源。
- 可能存在优先级反转问题，高优先级的进程也需要等待低优先级的进程释放锁。

&gt; 硬件实现方法（Swap指令/XCHG指令）

- **原理**：使用特定的硬件指令来实现原子性操作，比如Swap指令或XCHG指令。这些指令允许在一个操作中交换两个内存位置的值，从而可以实现原子的锁定操作。

- **优点**：
- 可以实现原子操作，确保临界区的安全访问。
- 不同于软件方法，硬件实现方法不需要额外的软件支持，因此执行效率较高。

- **缺点**：
- 可能需要特定的硬件支持，不同架构之间的支持情况不同。
- 在某些情况下，仍然会存在忙等待和优先级反转问题。



### 3、互斥锁

互斥锁（Mutex Lock）是用来保护临界区（一次只能被一个线程访问的共享资源）的一种机制。当一个线程进入临界区时，它会尝试获取锁；一旦获取成功，其他线程就无法进入临界区，直到这个线程释放了锁。这种机制通过\`acquire()\`和\`release()\`函数来实现，它们确保在进入和退出临界区时锁的正确获取和释放。

- 互斥锁内部有一个布尔变量（例如\`available\`），表示锁当前是否可用。当锁是可用的时候，调用\`acquire()\`会成功获取锁，并将锁标记为不可用；如果一个进程尝试获取不可用的锁，它会被阻塞直到锁被释放。
- 互斥锁的主要缺点是忙等待（busy-waiting），也就是当一个进程在临界区内时，其他进程必须不断尝试获取锁，而不是进入睡眠状态等待。这会导致在多处理器系统中，多个线程不断循环调用\`acquire()\`，浪费 CPU 周期。

在多处理器系统中，互斥锁可以更有效地运行，因为一个线程可以在一个处理器上等待，不会影响其他线程的执行。但仍然存在忙等待的问题。

需要不断循环忙等的互斥锁也可以称为自旋锁（Spin Lock）。自旋锁不会进入睡眠状态，而是不断检查锁是否可用。一些指令和算法，比如 TSL 指令（Test and Set Lock）、swap 指令（交换指令）、单标志法等，被用于实现自旋锁的功能。自旋锁适用于临界区执行时间短暂的情况，避免了线程在睡眠和唤醒过程中的开销，但如果临界区执行时间较长，自旋锁可能会造成较大的性能损失。





### 4、信号量

&gt; 信号量机制：

- 信号量机制操作系统中用于实现进程同步和互斥的重要工具。

- 通过使用信号量，进程可以对共享资源的访问进行控制，避免多个进程同时访问或修改同一资源，从而确保数据的一致性和完整性。
- **信号量**本质上**是**一个计数器，可以用来表示系统中某种资源的数量。
  - 一个信号量可以是整数类型，也可以是更复杂的数据结构。
  - 比如，如果系统只有一台打印机可用，就可以用一个初值为1的信号量来表示打印机的可用性.
- **对信号量的操作**主要通过一对特殊的原语来完成，这对原语是操作系统提供的函数，用于对信号量进行操作。这些原语是不可中断的，确保操作的完整性。一般来说，这对原语包括wait(S)原语和signal(S)原语。
  - \`wait(S)\` 原语（或 P(S) 操作）用于申请资源或降低信号量的值。如果信号量的值大于零，则将其减一；否则，该操作会阻塞进程，直到信号量的值大于零为止。
  - \`signal(S)\` 原语（或 V(S) 操作）用于释放资源或增加信号量的值。它增加信号量的值，并唤醒因为等待该资源而被阻塞的进程。

这种机制使得进程可以通过对信号量的操作来实现对共享资源的控制和同步，确保在访问共享资源时的互斥性，从而避免竞态条件和数据不一致的问题。



#### 4.1 整数型信号量

**介绍：** 整数型信号量是一种基本的信号量形式，用于控制对共享资源的访问。其值是一个整数，表示可用资源的数量或某种状态的计数器。

**组成：** 只包含一个整数变量，用于表示可用资源的数量。

**使用方式：** 常用的操作包括 \`wait\`（也称为 \`P\` 操作）和 \`signal\`（也称为 \`V\` 操作）。

**伪代码示例：**

\`\`\`plaintext
定义整数型信号量 S，并初始化其值为某个初始值
int S = 1;

wait(S):
  while S &lt;= 0:
      // 等待直到资源可用
  S = S - 1

signal(S):
  S = S + 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>流程：</strong></p><ol><li>进程需要使用资源时，执行 <code>wait(S)</code> 操作，如果 <code>S</code> 的值小于等于 0，则进程会被阻塞等待，直到资源可用。</li><li>当资源可用时，<code>S</code> 的值减少，进程获得资源并继续执行。</li><li>使用完资源后，进程执行 <code>signal(S)</code> 操作，将资源释放，并唤醒可能在等待资源的其他进程。</li></ol><p><strong>优点：</strong></p><ul><li>实现简单，适用于基本的资源管理需求。</li><li>易于理解和实现。</li></ul><p><strong>缺点：</strong></p><ul><li>不满足“让权等待”原则，会发生“忙等”</li></ul><h4 id="_4-2-记录型信号量" tabindex="-1"><a class="header-anchor" href="#_4-2-记录型信号量" aria-hidden="true">#</a> 4.2 记录型信号量</h4><p><strong>介绍：</strong> 记录型信号量是一种复杂的信号量实现形式，除了资源数量计数器外，还包含其他额外信息，如等待队列。这种类型的信号量更为灵活，能够支持更复杂的资源管理和进程等待队列操作。</p><p><strong>组成：</strong> 通常包含一个值字段和一个等待队列字段，用于存储资源数量和等待资源的进程列表。</p><p><strong>使用方式：</strong> 类似整数型信号量，包含 <code>wait</code> 和 <code>signal</code> 操作，但记录型信号量能更灵活地管理资源和进程的等待状态。</p><p><strong>伪代码示例：</strong></p><div class="language-plaintext line-numbers-mode" data-ext="plaintext"><pre class="language-plaintext"><code>定义记录型信号量 S，并初始化其值和等待队列为空
typedef struct{
	int value;
	Struct process* L;
} semaphore;

wait(S):
    if S.value &lt;= 0:
        // 将进程加入等待队列
        将当前进程加入 S.L
        阻塞当前进程
    else:
        S.value = S.value - 1

signal(S):
    S.value = S.value + 1
    if S.L 不为空:
        // 从等待队列唤醒一个或多个进程
        从 S.L 中选择一个进程并唤醒它
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>流程：</strong></p><ol><li>当进程执行 <code>wait(S)</code> 操作时，如果资源不足（<code>S.value &lt;= 0</code>），则将进程加入等待队列并阻塞。否则，减少 <code>S.value</code>，进程获得资源并继续执行。</li><li>当资源被释放并执行 <code>signal(S)</code> 操作时，增加 <code>S.value</code> 的值。如果等待队列不为空，唤醒其中一个或多个等待的进程。</li></ol><p><strong>优点：</strong></p><ul><li>支持更复杂的资源管理和同步需求。</li><li>可以更灵活地控制进程的等待状态。</li></ul><p><strong>缺点：</strong></p><ul><li>实现相对复杂，容易引入错误。</li><li>对于简单的资源管理需求可能过于繁琐。</li></ul>`,134),o=[e];function t(r,p){return s(),l("div",null,o)}const d=n(a,[["render",t],["__file","process.html.vue"]]);export{d as default};
