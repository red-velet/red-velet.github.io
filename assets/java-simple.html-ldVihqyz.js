import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as e}from"./app-yOESM-4p.js";const l={},o=e(`<h1 id="java基础-面试题" tabindex="-1"><a class="header-anchor" href="#java基础-面试题" aria-hidden="true">#</a> Java基础-面试题</h1><h2 id="_1、基本类型和包装类型的区别" tabindex="-1"><a class="header-anchor" href="#_1、基本类型和包装类型的区别" aria-hidden="true">#</a> 1、基本类型和包装类型的区别</h2><details class="hint-container details"><summary>基本类型和包装类型的区别？</summary><blockquote><p>1、基本类型和包装类型的区别？</p></blockquote><p>相同点：都可以用作变量，无论是方法传递的参数还是当中成员变量</p><p>不同点：</p><ol><li>一个是基础数据类型，一个是引用数据类型 <ol><li>存储方式不同： <ol><li>基本类型：一般作为参数和代码块内的局部变量 - 栈的局部变量表中，如果是成员变量 - 堆，static修饰的 - 方法区</li><li>引用数据类型：堆，static修饰的 - 方法区</li></ol></li><li>所占的空间大小也不同：</li><li>初始化的默认值也不同：</li><li>比较方式也不同：</li></ol></li></ol><p>包装类的自动拆装箱：从字节码中，我们发现装箱其实就是调用了包装类的<code>valueOf()</code>方法，拆箱其实就是调用了 <code>xxxValue()</code>方法。</p></details><h2 id="_2、包装类的缓存机制" tabindex="-1"><a class="header-anchor" href="#_2、包装类的缓存机制" aria-hidden="true">#</a> 2、包装类的缓存机制</h2><details class="hint-container details"><summary>包装类的缓存机制？</summary><blockquote><p>2、包装类的缓存机制？</p></blockquote><ul><li>Integer：-128 ~ 127</li><li>Boolean：true / false</li><li>Character：127 &lt;=</li><li>两种浮点数类型的包装类 <code>Float</code>,<code>Double</code> 并没有实现缓存机制。</li></ul></details><h2 id="_3、成员变量与局部变量的区别" tabindex="-1"><a class="header-anchor" href="#_3、成员变量与局部变量的区别" aria-hidden="true">#</a> 3、成员变量与局部变量的区别</h2><details class="hint-container details"><summary>成员变量与局部变量的区别？</summary><blockquote><p>3、成员变量与局部变量的区别？</p></blockquote><ul><li>位置区别：成员变量 - 类里面，与方法同级；局部变量 - 方法内部 <ul><li>成员变量可以使用<code>public</code>,<code>private</code>,<code>static</code> 等修饰符所修饰，而局部变量不能被访问控制修饰符及 <code>static</code> 所修饰；但是，成员变量和局部变量都能被 <code>final</code> 所修饰。</li></ul></li><li><strong>存储方式</strong>：从变量在内存中的存储方式来看，如果成员变量是使用 <code>static</code> 修饰的，那么这个成员变量是属于类的，位于方法区，，如果没有使用 <code>static</code> 修饰，这个成员变量是属于实例的，存放在堆。局部变量则存在于栈内存的局部变量表。</li><li><strong>默认值</strong>：从变量是否有默认值来看，成员变量如果没有被赋初始值，则会自动以类型的默认值而赋值（一种情况例外:被 <code>final</code> 修饰的成员变量也必须显式地赋值），而局部变量则不会自动赋值。</li><li><strong>生存时间</strong>：从变量在内存中的生存时间上看，成员变量是对象的一部分，它随着对象的创建而存在，而局部变量随着方法的调用而自动生成，随着方法的调用结束而消亡。</li></ul></details><h2 id="_4、静态变量有什么作用" tabindex="-1"><a class="header-anchor" href="#_4、静态变量有什么作用" aria-hidden="true">#</a> 4、静态变量有什么作用</h2><details class="hint-container details"><summary>静态变量有什么作用？</summary><blockquote><p>4、静态变量有什么作用？</p></blockquote><p><code>static</code> 的主要作用是使成员变量或方法与类关联，而不是与类的实例关联。</p><ul><li>这意味着它们可以在没有创建类的实例的情况下被访问和调用。同时，静态成员也可以被所有该类的实例共享，可以用于存储类级别的信息，比如计数器、常量等。</li><li>静态变量只会被分配一次内存，即使创建多个对象，它们都共享同一份静态变量，这样可以节省内存。</li><li>可以通过类名访问，可以搭配final关键字，做常量</li></ul></details><h2 id="_5、字符型常量和字符串常量的区别" tabindex="-1"><a class="header-anchor" href="#_5、字符型常量和字符串常量的区别" aria-hidden="true">#</a> 5、字符型常量和字符串常量的区别</h2><details class="hint-container details"><summary>字符型常量和字符串常量的区别?</summary><blockquote><p>5、字符型常量和字符串常量的区别?</p></blockquote><ul><li><strong>形式</strong> : 字符常量是单引号引起的一个字符，字符串常量是双引号引起的 0 个或若干个字符。</li><li><strong>含义</strong> : 字符常量相当于一个整型值( ASCII 值),可以参加表达式运算; 字符串常量代表一个地址值(该字符串在内存中存放位置)。</li><li><strong>占内存大小</strong>：字符常量只占 2 个字节; 字符串常量占若干个字节。</li></ul><p>⚠️ 注意 <code>char</code> 在 Java 中占两个字节。</p></details><h2 id="_6、静态方法为什么不能调用非静态成员" tabindex="-1"><a class="header-anchor" href="#_6、静态方法为什么不能调用非静态成员" aria-hidden="true">#</a> 6、静态方法为什么不能调用非静态成员</h2><details class="hint-container details"><summary>静态方法为什么不能调用非静态成员?</summary><blockquote><p>6、静态方法为什么不能调用非静态成员?</p></blockquote><p>这个需要结合 JVM 的相关知识，主要原因如下：</p><ol><li>静态方法是属于类的，在类加载的时候就会分配内存，可以通过类名直接访问。而非静态成员属于实例对象，只有在对象实例化之后才存在，需要通过类的实例对象去访问。</li><li>在类的非静态成员不存在的时候静态方法就已经存在了，此时调用在内存中还不存在的非静态成员，属于非法操作。</li></ol></details><h2 id="_7、静态方法和实例方法有何不同" tabindex="-1"><a class="header-anchor" href="#_7、静态方法和实例方法有何不同" aria-hidden="true">#</a> 7、静态方法和实例方法有何不同</h2><details class="hint-container details"><summary>静态方法和实例方法有何不同？</summary><blockquote><p>7、静态方法和实例方法有何不同？</p></blockquote><ol><li>形式：静态方法 - static修饰，是属于类的，每个类就一份，在类加载的时候就会分配内存，可以通过类名直接访问，实例方法需要创建对应的实例对象才能调用，多个实例对象都有各自的实例方法。</li><li>调用方式：静态方法 - 类名点进行调用，实例方法需要创建实例对象，然后实例对象点进行调用</li><li>访问限制的区别：静态只能调用静态，实例都可以调用</li><li>生命周期：静态方法的生命周期和类相关，而实例方法与对应实例相关</li></ol></details><h2 id="_8、重载和重写有什么区别" tabindex="-1"><a class="header-anchor" href="#_8、重载和重写有什么区别" aria-hidden="true">#</a> 8、重载和重写有什么区别</h2><details class="hint-container details"><summary>重载和重写有什么区别？</summary><blockquote><p>8、重载和重写有什么区别？</p></blockquote><p>共同点：</p><ol><li><strong>都涉及到方法</strong>：重载和重写都与方法相关，可以在类中定义多个方法，它们的方法名相同但参数列表不同。</li><li><strong>都是多态的体现</strong>：重载和重写都是Java中多态的实现方式之一。多态是指同一个方法名可以在不同的类或者同一个类的不同方法中以不同的方式实现。 <ul><li>重载一个类中可以有多个同名方法。</li><li><strong>重写就是子类对父类方法的重新改造，外部样子不能改变，内部逻辑可以改变。</strong></li></ul></li></ol><p>不同点：</p><ol><li><strong>适用范围不同</strong>： <ul><li>重载（Overloading）指的是在同一个类中可以定义多个方法，它们的方法名相同但参数列表不同（参数的个数、类型、顺序不同），重载可以发生在同一个类中。</li><li>重写（Overriding）指的是子类可以定义与父类中同名、同参数列表的方法，用于覆盖父类中的方法，重写只发生在子类覆盖父类的方法的情况下。</li></ul></li><li><strong>方法签名不同</strong>： <ul><li>对于重载，方法名相同但参数列表必须不同（参数类型、个数、顺序）。</li><li>对于重写，方法名、参数列表必须相同，返回类型可以是子类的类型或者其子类型。</li></ul></li><li><strong>返回类型</strong>： <ul><li>对于重载，返回类型可以相同也可以不同，但是方法的参数列表必须不同。</li><li>对于重写，返回类型必须相同或是其子类。</li></ul></li><li><strong>运行时行为</strong>： <ul><li>对于重载，方法调用的解析在编译时发生，根据传入的参数类型来决定调用哪个方法。</li><li>对于重写，方法的调用在运行时通过动态绑定（动态分派）发生，根据实际对象的类型来决定调用哪个方法。</li></ul></li></ol></details><h2 id="_9、面向对象和面向过程的区别" tabindex="-1"><a class="header-anchor" href="#_9、面向对象和面向过程的区别" aria-hidden="true">#</a> 9、面向对象和面向过程的区别</h2><details class="hint-container details"><summary>面向对象和面向过程的区别？</summary><blockquote><p>9、面向对象和面向过程的区别？</p></blockquote><ul><li>面向过程把解决问题的过程拆成一个个方法，通过一个个方法的执行解决问题。</li><li>面向对象会先抽象出对象，然后用对象执行方法的方式解决问题。</li></ul><p>具体：例如平常一个人自己一个人要吃饭，需要买菜，洗菜，做饭，这个吃饭的过程，拆分为一个一个行为，一个个方法</p><p>而面向对象的话，就比如我们有了女朋友，再吃饭，我们可以把直接抽出为一个对象，我们还是要经过买菜，洗菜，做饭，这个吃饭的过程，我们把这些流程封装为对应的方法，女朋友要吃饭的时候可以之间调用我来进行做饭，可以体会到我的好处</p></details><h2 id="_10、面向对象三大特征" tabindex="-1"><a class="header-anchor" href="#_10、面向对象三大特征" aria-hidden="true">#</a> 10、面向对象三大特征</h2><details class="hint-container details"><summary>面向对象三大特征？</summary><blockquote><p>10、面向对象三大特征？</p></blockquote><p>封装、继承、多态：</p><ul><li><p>封装：把成员变量和具体的方法执行逻辑封装到一个具体类里面，以后的编码过程无需再关心对象内部的执行过程，而只面向这个对象本身，我们只需要知道这个对象可以为我提供便利，为我办事，这也就是基于面向对象编程的基础。</p></li><li><p>继承：核心目的就是用于实现代码的复用，通过继承，子类可以复用父类的方法，并可以通过super关键字直接调用，当然也能重写父类的方法，形成一种多态。当然继承也不是非常好的，如果我们一种使用继承，会使得类过于庞大，类结构过于复杂，所以我们也可以通过组合的方式来实现代码复用，可以把一个类当作成员变量给另一个类进行组合使用，组合优于继承</p><ul><li>组合： <ul><li><strong>松耦合，更灵活</strong>：组合可以降低类之间的耦合度。通过将对象作为成员变量引入，类之间的关系更加灵活，可以随时替换成员变量的实现，而不会影响其他部分的代码。</li><li><strong>更好的封装</strong>：通过组合，可以选择性地暴露对象的接口，从而更好地控制访问权限，避免不必要的继承导致的公共接口的暴露。</li></ul></li></ul></li><li><p>多态，顾名思义，表示一个对象具有多种的状态，就比如我们传入的参数是一个父类，那么其子类也能接收，又或者是一个接口有多个实现类。</p><ul><li>多态具体实现：有继承（接口、抽象类、类）、有重写、有父类引用执行子类对象。</li></ul></li></ul></details><h2 id="_11、接口和抽象类有什么共同点和区别" tabindex="-1"><a class="header-anchor" href="#_11、接口和抽象类有什么共同点和区别" aria-hidden="true">#</a> 11、接口和抽象类有什么共同点和区别</h2><details class="hint-container details"><summary>接口和抽象类有什么共同点和区别</summary><blockquote><p>11、接口和抽象类有什么共同点和区别？</p></blockquote><p>接口和抽象类是Java中两种用于实现多态性和封装的重要概念：</p><p><strong>共同点</strong>：</p><ul><li>接口和抽象类都不能被实例化，不能通过new关键字进行实例化。</li><li>接口和抽象类都可以包含抽象方法，没有方法体的方法。</li><li>都可以有默认实现的方法（Java 8 可以用 <code>default</code> 关键字在接口中定义默认方法）。</li></ul><p><strong>区别</strong>：</p><ul><li>抽象类是一个类，使用abstract class，并且的抽象方法需要使用abstract修饰，而接口是使用interface修饰，接口的抽象方法，默认就是抽象，不需要添加abstract。</li><li>对应抽象类而言，抽象类可以继承一个类，也可以实现接口，但是只能继承一个，但却可以实现多个，而接口只能继承，但是接口可以继承多个接口。</li><li>接口中的成员变量只能是 <code>public static final</code> 类型的，不能被修改且必须有初始值，而抽象类的成员变量默认 default，可在子类中被重新定义，也可被重新赋值。</li><li>抽象类可以有构造器，而接口没有，当继承自抽象类的自己进行实例化时，会调用父类的构造器进行父类的初始化</li><li>接口主要用于对类的行为进行约束，你实现了某个接口就具有了对应的行为。抽象类主要用于代码复用，强调的是所属关系。</li></ul></details><h2 id="_12、深拷贝和浅拷贝区别了解吗" tabindex="-1"><a class="header-anchor" href="#_12、深拷贝和浅拷贝区别了解吗" aria-hidden="true">#</a> 12、深拷贝和浅拷贝区别了解吗</h2><details class="hint-container details"><summary>深拷贝和浅拷贝区别了解吗？什么是引用拷贝？</summary><blockquote><p>12、深拷贝和浅拷贝区别了解吗？什么是引用拷贝？</p></blockquote><ul><li><strong>深拷贝</strong>：深拷贝会完全复制整个对象，包括这个对象所包含的内部对象，得到的是一个全新的对象。</li><li><strong>浅拷贝</strong>：浅拷贝会在堆上创建一个新的对象（区别于引用拷贝的一点），只拷贝当前对象，如果当前对象内部的属性是引用类型的话，浅拷贝会直接复制内部对象的引用地址，也就是说拷贝对象和原对象共用同一个内部对象。</li><li><strong>引用拷贝：</strong> 简单来说，引用拷贝就是两个不同的引用指向同一个对象。</li></ul></details><h2 id="_13、object-类的常见方法有哪些" tabindex="-1"><a class="header-anchor" href="#_13、object-类的常见方法有哪些" aria-hidden="true">#</a> 13、Object 类的常见方法有哪些</h2><details class="hint-container details"><summary>Object 类的常见方法有哪些？</summary><blockquote><p>13、Object 类的常见方法有哪些？</p></blockquote><p>11个常用方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * native 方法，用于返回当前运行时对象的 Class 对象，使用了 final 关键字修饰，故不允许子类重写。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，用于返回对象的哈希码，主要使用在哈希表中，比如 JDK 中的HashMap。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * 用于比较 2 个对象的内存地址是否相等，String 类对该方法进行了重写以用于比较字符串的值是否相等。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，用于创建并返回当前对象的一份拷贝。
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">native</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span>
<span class="token doc-comment comment">/**
 * 返回类的名字实例的哈希码的 16 进制的字符串。建议 Object 所有的子类都重写这个方法。
 */</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，并且不能重写。唤醒一个在此对象监视器上等待的线程(监视器相当于就是锁的概念)。如果有多个线程在等待只会任意唤醒一个。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，并且不能重写。跟 notify 一样，唯一的区别就是会唤醒在此对象监视器上等待的所有线程，而不是一个线程。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">notifyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native方法，并且不能重写。暂停线程的执行。注意：sleep 方法没有释放锁，而 wait 方法释放了锁 ，timeout 是等待时间。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token keyword">long</span> timeout<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
<span class="token doc-comment comment">/**
 * 多了 nanos 参数，这个参数表示额外时间（以纳秒为单位，范围是 0-999999）。 所以超时的时间还需要加上 nanos 纳秒。。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token keyword">long</span> timeout<span class="token punctuation">,</span> <span class="token keyword">int</span> nanos<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
<span class="token doc-comment comment">/**
 * 跟之前的2个wait方法一样，只不过该方法一直等待，没有超时时间这个概念
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
<span class="token doc-comment comment">/**
 * 实例被垃圾回收器回收的时候触发的操作
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_14、-和-equals-的区别" tabindex="-1"><a class="header-anchor" href="#_14、-和-equals-的区别" aria-hidden="true">#</a> 14、== 和 equals() 的区别</h2><details class="hint-container details"><summary>== 和 equals() 的区别</summary><blockquote><p>14、== 和 equals() 的区别？</p></blockquote></details><h2 id="_15、什么是hashcode" tabindex="-1"><a class="header-anchor" href="#_15、什么是hashcode" aria-hidden="true">#</a> 15、什么是hashCode()</h2><details class="hint-container details"><summary>什么是hashCode()？ 为什么要有hashCode()？那为什么不只提供 \`hashCode()\` 方法呢？那为什么两个对象有相同的 \`hashCode\` 值，它们也不一定是相等的？</summary><ol><li><code>hashCode()</code> 是 Java 中 <code>Object</code> 类的一个方法，用于返回对象的哈希码值。哈希码是一个整数，它代表了对象在内存中的地址或者说是对象的标识符。每个对象都有一个唯一的哈希码，即使它们的内容相同，哈希码也会不同。</li><li><code>hashCode()</code> 方法的存在是为了支持基于哈希表的数据结构，例如 <code>HashMap</code> 或 <code>HashSet</code>。这些数据结构在查找、插入等操作时依赖于哈希码来确定对象的存储位置，从而提高了操作的效率，而且先检验<code>hashCode</code>，这样我们就大大减少了 <code>equals</code> 的次数，相应就大大提高了执行速度。</li><li>虽然 <code>hashCode()</code> 方法对于基于哈希表的数据结构非常重要，但它仅仅是一个计算哈希码的方法，不提供确切的对象比较。实际上，在哈希表中，可能会出现不同对象具有相同哈希码的情况，这称为哈希冲突。因此，还需要提供 <code>equals()</code> 方法来确切地比较两个对象是否相等。</li><li>两个对象具有相同的 <code>hashCode</code> 值，这意味着它们在哈希表中可能会被放置到相同的位置。然而，哈希码只是一个指示，它并不一定能够唯一地标识一个对象。因此，即使两个对象的哈希码相同，它们的内容也可能是不同的，这种情况称为哈希码冲突。 <ul><li>因为<code>hashCode()</code>可以重写，假如我们有一个学生类，有两个属性id和name，我们重写<code>hashCode</code>，把id当<code>hashCode</code>，他们id全是1，但是姓名却不同，这样虽然<code>hashCode</code>相等，但是<code>equals</code>却不相等。</li><li>总的来说，<code>hashCode()</code> 提供了一种快速确定对象存储位置的方法，但它并不能保证对象的唯一性。因此，仍然需要使用 <code>equals()</code> 方法来确切地比较两个对象是否相等。</li></ul></li></ol></details><h2 id="_16、为什么重写-equals-时必须重写-hashcode-方法" tabindex="-1"><a class="header-anchor" href="#_16、为什么重写-equals-时必须重写-hashcode-方法" aria-hidden="true">#</a> 16、为什么重写 equals() 时必须重写 hashCode() 方法</h2><details class="hint-container details"><summary>为什么重写 equals() 时必须重写 hashCode() 方法？</summary><blockquote><p>16、为什么重写 equals() 时必须重写 hashCode() 方法？</p></blockquote><ol><li><p><code>equals()</code> 和 <code>hashCode()</code> 分别用于不同的目的：</p><ul><li><code>equals()</code> 用于确切地比较两个对象的内容是否相等。</li><li><code>hashCode()</code> 用于在哈希表等数据结构中确定对象的存储位置，以提高查找和插入的效率。</li></ul></li><li><p>重写 <code>equals()</code> 方法时，必须同时重写 <code>hashCode()</code> 方法的原因是：</p><ul><li><p><code>hashCode()</code> 和 <code>equals()</code> 是在哈希表等数据结构中配套使用的。在使用哈希表时，首先会根据对象的 <code>hashCode()</code> 值确定存储位置，然后再使用 <code>equals()</code> 方法来确切地比较对象是否相等。</p></li><li><p>如果两个对象在 <code>equals()</code> 方法中被认为相等，那么它们的 <code>hashCode()</code> 值也必须相等，以确保它们在哈希表中的存储位置一致，否则会导致对象在哈希表中无法正确地被检索。</p></li></ul></li></ol><p>总的来说，重写 <code>equals()</code> 方法时也要重写 <code>hashCode()</code> 方法，以保证对象在哈希表等数据结构中的正确性和性能。</p></details><p>17、重写 <code>equals()</code> 时没有重写 <code>hashCode()</code> 方法的话，使用 <code>HashMap</code> 可能会出现什么问题</p><details class="hint-container details"><summary>写 \`equals()\` 时没有重写 \`hashCode()\` 方法的话，使用 \`HashMap\` 可能会出现什么问题？</summary><blockquote><p>17、重写 <code>equals()</code> 时没有重写 <code>hashCode()</code> 方法的话，使用 <code>HashMap</code> 可能会出现什么问题？</p></blockquote><p>如果在使用 <code>HashMap</code> 或其他基于哈希表的数据结构时，重写了 <code>equals()</code> 方法但没有重写 <code>hashCode()</code> 方法，可能会导致以下问题：</p><ol><li><p><code>hashCode()</code> 相等，但 <code>equals()</code> 不相等。</p><ul><li>这会导致两个对象在哈希表中被放置到相同的位置，但由于 <code>equals()</code> 返回 <code>false</code>，它们被认为不相等。这将导致在查找时无法正确地找到相等的对象。</li></ul></li><li><p><code>hashCode()</code> 不相等，但 <code>equals()</code> 相等。</p><ul><li>这会导致两个对象在哈希表中被放置到不同的位置，但由于 <code>equals()</code> 返回 <code>true</code>，它们被认为相等。这将导致在查找时无法正确地找到相等的对象。</li></ul></li></ol><p>这两种情况都会破坏了哈希表的正确性和性能。因此，在实现自定义类时，通常需要同时重写 <code>hashCode()</code> 和 <code>equals()</code> 方法，以确保正确的行为。</p><hr><ol><li><p><strong>哈希冲突</strong>：由于没有重写 <code>hashCode()</code> 方法，对象的哈希码将由默认的 <code>Object</code> 类的实现决定，这可能导致相同内容的对象具有不同的哈希码，从而产生哈希冲突。这会影响到对象在哈希表中的存储位置。</p></li><li><p><strong>无法正确地检索对象</strong>：如果将该对象用作哈希表的键，并且在没有正确实现 <code>hashCode()</code> 的情况下使用 <code>get()</code> 方法，可能会导致无法正确地检索对象，即使它们在逻辑上是相等的。</p></li><li><p><strong>无法正确地删除对象</strong>：在使用 <code>remove()</code> 方法时，由于哈希码计算错误，可能无法准确地从哈希表中删除对象。</p></li><li><p><strong>导致内存泄漏</strong>：如果使用对象作为键，但在 <code>equals()</code> 方法中进行了复杂的比较操作，而没有实现 <code>hashCode()</code> 方法，可能会导致在哈希表中无法正常释放对象，从而导致内存泄漏。</p></li></ol><p>总的来说，重写 <code>equals()</code> 方法但没有重写 <code>hashCode()</code> 方法可能会破坏哈希表的正确性和性能。因此，在实现自定义类并将其用作哈希表的键时，通常需要同时重写 <code>hashCode()</code> 和 <code>equals()</code> 方法，以确保正确的行为。</p></details><h2 id="_18、string、stringbuffer、stringbuilder-的区别" tabindex="-1"><a class="header-anchor" href="#_18、string、stringbuffer、stringbuilder-的区别" aria-hidden="true">#</a> 18、String、StringBuffer、StringBuilder 的区别</h2><details class="hint-container details"><summary>String、StringBuffer、StringBuilder 的区别？</summary><blockquote><p>18、String、StringBuffer、StringBuilder 的区别？</p></blockquote><p>String、StringBuffer 和 StringBuilder 都属于Java.lang包下的处理字符串的类</p><p><strong>区别：</strong></p><ul><li><code>String</code> 是不可变的，被final修饰了，不能被继承，同时，内部维护的是一个private final修饰的char数组，但是没有提供/暴露修改这个字符串的方法，是线程安全的。任何对 <code>String</code> 的操作都会返回一个新的 <code>String</code> 对象。</li><li><code>StringBuffer</code> 和<code>StringBuilder</code> 都继承自<code>AbstractStringBuilder</code>，内部维护的是char数组，是可变的，但是StringBuffer的所有方法都是synchronized修饰的同步方法，每次只能一个线程访问，是线程安全的，但<code>StringBuilder</code>不是线程安全的，不适合在多线程环境下使用。</li></ul><p><strong>总结：</strong></p><ul><li><p>如果在多线程环境下需要对字符串进行操作，应该使用 <code>StringBuffer</code>。</p></li><li><p>在单线程环境下，如果需要频繁操作字符串，建议使用 <code>StringBuilder</code>，而在字符串内容基本不变的情况下，使用 <code>String</code> 即可。</p></li></ul><p><strong>Java 9 为何要将 <code>String</code> 的底层实现由 <code>char[]</code> 改成了 <code>byte[]</code> ?</strong></p><p>新版的 String 其实支持两个编码方案：Latin-1 和 UTF-16。如果字符串中包含的汉字没有超过 Latin-1 可表示范围内的字符，那就会使用 Latin-1 作为编码方案。Latin-1 编码方案下，<code>byte</code> 占一个字节(8 位)，<code>char</code> 占用 2 个字节（16），<code>byte</code> 相较 <code>char</code> 节省一半的内存空间。</p><p>JDK 官方就说了绝大部分字符串对象只包含 Latin-1 可表示的字符。</p></details><h2 id="_19、字符串拼接用-还是-stringbuilder" tabindex="-1"><a class="header-anchor" href="#_19、字符串拼接用-还是-stringbuilder" aria-hidden="true">#</a> 19、字符串拼接用+还是 StringBuilder</h2><details class="hint-container details"><summary>字符串拼接用“+” 还是 StringBuilder?</summary><blockquote><p>19、字符串拼接用“+” 还是 StringBuilder?</p></blockquote><p>本质都是StringBuilder的append()方法拼接，但是用处不同：</p><p>在循环内使用“+”进行字符串的拼接的话，存在比较明显的缺陷：<strong>编译器不会创建单个 <code>StringBuilder</code> 以复用，会导致创建过多的 <code>StringBuilder</code> 对象</strong>。</p></details><h2 id="_20、这句话创建了几个字符串对象" tabindex="-1"><a class="header-anchor" href="#_20、这句话创建了几个字符串对象" aria-hidden="true">#</a> 20、这句话创建了几个字符串对象</h2><details class="hint-container details"><summary>String s1 = new String(&quot;abc&quot;);这句话创建了几个字符串对象？String.intern() 方法有什么作用</summary><blockquote><p>20、String s1 = new String(&quot;abc&quot;);这句话创建了几个字符串对象？String.intern() 方法有什么作用?</p></blockquote><p>会创建 1 或 2 个字符串对象。</p><p>1、如果字符串常量池中不存在字符串对象“abc”的引用，那么它将首先在字符串常量池中创建，然后在堆空间中创建，因此将创建总共 2 个字符串对象。</p><p>2、<code>String.intern()</code> 是一个 native（本地）方法，其作用是将指定的字符串对象的引用保存在字符串常量池中，可以简单分为两种情况：</p><ul><li>如果字符串常量池中保存了对应的字符串对象的引用，就直接返回该引用。</li><li>如果字符串常量池中没有保存了对应的字符串对象的引用，那就在常量池中创建一个指向该字符串对象的引用并返回</li></ul></details><h2 id="_21、string-类型的变量和常量做-运算时发生了什么" tabindex="-1"><a class="header-anchor" href="#_21、string-类型的变量和常量做-运算时发生了什么" aria-hidden="true">#</a> 21、String 类型的变量和常量做+运算时发生了什么</h2><details class="hint-container details"><summary>String 类型的变量和常量做“+”运算时发生了什么？</summary><blockquote><p>21、String 类型的变量和常量做“+”运算时发生了什么？</p></blockquote><ul><li><p>常量和常量：<strong>对于编译期可以确定值的字符串，也就是常量字符串 ，jvm 会将其存入字符串常量池。并且，字符串常量拼接得到的字符串常量在编译阶段就已经被存放字符串常量池，这个得益于编译器的优化 - 常量折叠。</strong>】</p></li><li><p>常量和变量、变量和变量：<strong>引用的值在程序编译期是无法确定的，编译器无法对其进行优化。</strong></p><ul><li>对象引用和“+”的字符串拼接方式，实际上是通过 <code>StringBuilder</code> 调用 <code>append()</code> 方法实现的，拼接完成之后调用 <code>toString()</code> 得到一个 <code>String</code> 对象 。</li></ul></li></ul></details><h2 id="_22、java异常的体系介绍一下" tabindex="-1"><a class="header-anchor" href="#_22、java异常的体系介绍一下" aria-hidden="true">#</a> 22、Java异常的体系介绍一下?</h2><details class="hint-container details"><summary>Java异常的体系介绍一下 常用异常有哪些？ 说十个 处理异常主要注意什么？</summary><p>在 Java 中，所有的异常都有一个共同的祖先 <code>java.lang</code> 包中的 <code>Throwable</code> 类。<code>Throwable</code> 类有两个重要的子类:</p><ul><li><p><strong><code>Exception</code></strong> :程序本身可以处理的异常，可以通过 <code>catch</code> 来进行捕获。<code>Exception</code> 又可以分为：</p><ul><li><p>Checked Exception (受检查异常，必须处理) - 编译时异常</p><ul><li><p><strong>IOException</strong> 及其子类：</p><ul><li><code>FileNotFoundException</code></li><li><code>IOException</code></li><li><code>EOFException</code> 等</li></ul></li><li><p><strong>SQLException</strong>：与数据库操作相关的异常。</p></li><li><p><strong>ClassNotFoundException</strong>：当试图加载类但找不到对应的类文件时抛出。</p></li><li><p><strong>InterruptedException</strong>：当一个线程处于阻塞、等待或睡眠状态，但被另一个线程中断时抛出。</p></li><li><p><strong>CloneNotSupportedException</strong>：当试图克隆一个不支持克隆的对象时抛出。</p></li><li><p><strong>NoSuchMethodException</strong>：当试图调用一个不存在的方法时抛出。</p></li><li><p><strong>NoSuchFieldException</strong>：当试图访问一个不存在的字段时抛出。</p></li><li><p><strong>InstantiationException</strong> 和 <strong>IllegalAccessException</strong>：通常与反射相关，当试图实例化一个抽象类、接口或私有构造函数时抛出。</p></li><li><p><strong>ParseException</strong>：通常与日期解析相关，当无法解析字符串为指定格式的日期时抛出。</p></li><li><p><strong>MalformedURLException</strong>：当试图创建一个URL实例，但提供的URL格式不正确时抛出。</p></li></ul></li><li><p>Unchecked Exception (不受检查异常，可以不处理) - 运行时异常</p><ul><li><p><code>RuntimeException</code> 及其子类都统称为非受检查异常</p></li><li><p><code>ArithmeticException</code>（算术错误）</p></li><li><p><code>NullPointerException</code>(空指针错误)</p></li><li><p><code>ClassCastException</code>（类型转换错误）</p></li><li><p><code>ArrayIndexOutOfBoundsException</code>（数组越界错误）</p></li><li><p><code>IllegalArgumentException</code>(参数错误比如方法入参类型错误)</p></li><li><p><code>NumberFormatException</code>（字符串转换为数字格式错误，<code>IllegalArgumentException</code>的子类）</p></li><li><p><code>SecurityException</code> （安全错误比如权限不够）</p><p><code>UnsupportedOperationException</code>(不支持的操作错误比如重复创建同一用户)</p></li></ul></li></ul></li><li><p><strong><code>Error</code></strong>：<code>Error</code> 属于程序无法处理的错误 ，我们没办法通过 <code>catch</code> 来进行捕获不建议通过<code>catch</code>捕获 。例如 Java 虚拟机运行错误（<code>Virtual MachineError</code>）、虚拟机内存不够错误(<code>OutOfMemoryError</code>)、类定义错误（<code>NoClassDefFoundError</code>）等 。这些异常发生时，Java 虚拟机（JVM）一般会选择线程终止。</p><ul><li><p><strong>OutOfMemoryError</strong>：当JVM耗尽了可用的内存资源时抛出，导致无法继续执行程序。</p></li><li><p><strong>StackOverflowError</strong>：当一个线程递归调用的深度超过了JVM所能处理的范围时抛出，通常是因为调用栈溢出。</p></li><li><p><strong>NoClassDefFoundError</strong>：当试图加载类，但在运行时找不到类的定义时抛出。</p></li><li><p><strong>ExceptionInInitializerError</strong>：当一个类的静态初始化器（静态代码块）抛出异常时抛出，导致类无法被正确初始化。</p></li><li><p><strong>LinkageError</strong>：代表在链接阶段出现问题，通常是由于类版本不匹配、缺少依赖项等情况。</p></li><li><p><strong>VirtualMachineError</strong>：是所有错误的父类，用于表示与虚拟机操作有关的错误情况。</p></li><li><p><strong>AssertionError</strong>：通常由 <code>assert</code> 语句失败抛出，用于在测试代码中检查条件是否为真。</p></li><li><p><strong>InternalError</strong>：表示Java虚拟机发现了内部错误或不一致性。</p></li></ul><p>请注意，与编译时异常和运行时异常不同，<code>Error</code> 不是必须被捕获或抛出的，因为它们通常表示程序无法恢复的严重问题。通常情况下，最好的做法是让程序终止并记录错误信息以便调查。</p></li></ul><hr><ol><li>不要把异常定义为静态变量，因为这样会导致异常栈信息错乱。每次手动抛出异常，我们都需要手动 new 一个异常对象抛出。</li><li>建议抛出更加具体的异常比如字符串转换为数字格式错误的时候应该抛出<code>NumberFormatException</code>而不是其父类<code>IllegalArgumentException</code>。</li><li>抛出 / 打印的异常信息一定要有意义。</li><li>使用日志打印异常之后就不要再抛出异常了（两者不要同时存在一段代码逻辑中）。</li></ol></details><h2 id="_23、throwable有哪些常用方法" tabindex="-1"><a class="header-anchor" href="#_23、throwable有哪些常用方法" aria-hidden="true">#</a> 23、Throwable有哪些常用方法</h2><details class="hint-container details"><summary>Throwable有哪些常用方法？</summary><blockquote><p>23、Throwable有哪些常用方法？</p></blockquote><ul><li><p><code>void printStackTrace()</code>: 在控制台上打印 <code>Throwable</code> 对象封装的异常信息</p></li><li><p><code>String getMessage()</code>: 返回异常发生时的简要描述</p></li><li><p><code>String toString()</code>: 返回异常发生时的详细信息</p></li><li><p><code>String getLocalizedMessage()</code>: 返回异常对象的本地化信息。使用 <code>Throwable</code> 的子类覆盖这个方法，可以生成本地化信息。如果子类没有覆盖该方法，则该方法返回的信息与 <code>getMessage()</code>返回的结果相同</p></li></ul></details><h2 id="_24、try-catch-finally-使用介绍一下" tabindex="-1"><a class="header-anchor" href="#_24、try-catch-finally-使用介绍一下" aria-hidden="true">#</a> 24、try-catch-finally 使用介绍一下</h2><details class="hint-container details"><summary>try-catch-finally 使用介绍一下</summary><blockquote><p>24、try-catch-finally 使用介绍一下？</p></blockquote><ul><li><code>try</code>块：用于捕获异常。其后可接零个或多个 <code>catch</code> 块，如果没有 <code>catch</code> 块，则必须跟一个 <code>finally</code> 块。</li><li><code>catch</code>块：用于处理 try 捕获到的异常。</li><li><code>finally</code> 块：无论是否捕获或处理异常，<code>finally</code> 块里的语句都会被执行。当在 <code>try</code> 块或 <code>catch</code> 块中遇到 <code>return</code> 语句时，<code>finally</code> 语句块将在方法返回之前被执行。</li></ul><p><strong>注意：不要在 finally 语句块中使用 return!</strong></p><ul><li>当 try 语句和 finally 语句中都有 return 语句时，try 语句块中的 return 语句会被忽略，但是会执行 try 语句的return代码</li></ul><p>代码示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value <span class="token operator">+=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token comment">//输出：16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_25、finally-中的代码一定会执行吗" tabindex="-1"><a class="header-anchor" href="#_25、finally-中的代码一定会执行吗" aria-hidden="true">#</a> 25、finally 中的代码一定会执行吗</h2><details class="hint-container details"><summary>finally 中的代码一定会执行吗？</summary><blockquote><p>25、finally 中的代码一定会执行吗？</p></blockquote><ol><li>finally 之前程序所在的线程死亡。</li><li>finally 之前虚拟机被终止运行的话 - System.exit(1);</li><li>finally 之前关闭 CPU。</li></ol></details><h2 id="_26、什么是泛型" tabindex="-1"><a class="header-anchor" href="#_26、什么是泛型" aria-hidden="true">#</a> 26、什么是泛型</h2><details class="hint-container details"><summary>什么是泛型？有什么作用？泛型的使用方式有哪几种？</summary><blockquote><p>26、什么是泛型？有什么作用？泛型的使用方式有哪几种？</p></blockquote><p>泛型就是一种让程序能够处理各种不同类型的数据的方法。</p><ul><li>它就像一个容器，可以装不同类型的东西，但是在使用的时候，你可以告诉它具体装的是什么类型的东西，这样程序就能更加灵活和安全地处理数据。</li><li>比如，你可以有一个容器，可以装数字、文字或者其他东西，但你可以在使用的时候告诉它具体装的是什么，这样就不会出现类型混乱的问题。简单来说，泛型就是让程序更聪明地处理不同类型的数据。</li></ul><p>泛型（Generics）是一种在编程中提供更强大类型安全性的特性。它允许你在代码中定义类、接口、方法等时使用一个或多个类型参数，从而实现对类型的参数化。这样可以在编译时期提供更强的类型检查，并减少了在运行时出现类型错误的可能性。</p><p>泛型的作用：</p><ol><li><p><strong>类型安全性</strong>: 泛型可以在编译时期检查代码，防止类型不匹配的错误。这使得代码更加健壮和可靠。</p></li><li><p><strong>代码复用</strong>: 泛型代码可以适用于多种数据类型，减少了重复编写相似代码的工作量。</p></li><li><p><strong>抽象数据类型</strong>: 泛型可以用于定义通用的数据结构和算法，如列表、栈、队列等。</p></li><li><p><strong>库的通用性</strong>: 泛型使得库能够提供通用的数据结构和算法，可以被不同的数据类型使用。</p></li></ol><p>泛型的使用方式有以下几种：</p><ol><li><p><strong>泛型类（Generic Class）</strong>: 允许在类的定义中使用一个或多个类型参数。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyGenericClass</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">T</span> value<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">MyGenericClass</span><span class="token punctuation">(</span><span class="token class-name">T</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>泛型接口（Generic Interface）</strong>: 允许在接口的定义中使用一个或多个类型参数。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MyGenericInterface</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token class-name">T</span> <span class="token function">performAction</span><span class="token punctuation">(</span><span class="token class-name">T</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>泛型方法（Generic Method）</strong>: 允许在方法的定义中使用类型参数，不一定要在类或接口中定义。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">myGenericMethod</span><span class="token punctuation">(</span><span class="token class-name">T</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>泛型通配符（Wildcards）</strong>: 使用通配符来表示未知类型或者限制类型的上界或下界。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printList</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Number</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>总的来说，泛型提供了一种在编程中处理抽象类型的强大工具，能够在编译时期提供类型安全性，减少了运行时类型错误的可能性，同时也使得代码更具有通用性和复用性。</p></details><h2 id="_27、什么是反射" tabindex="-1"><a class="header-anchor" href="#_27、什么是反射" aria-hidden="true">#</a> 27、什么是反射</h2><details class="hint-container details"><summary>什么是反射</summary><blockquote><p>27、什么是反射？</p></blockquote><p>反射（Reflection）是一种在运行时动态获取类信息、调用对象方法、访问对象属性的能力。在许多编程语言中都有反射机制，例如Java、C#等。</p><ul><li>反射允许程序在运行时获取类的信息，比如类名、方法名、属性等，并且可以在运行时调用这些方法、访问这些属性。这样使得程序可以在运行时动态地进行操作，而不需要在编译时就确定好所有的类和方法。</li></ul><p>反射就是一种让程序在运行时“看见”并且操作自己的能力。就好像一个人在玩一个积木拼图游戏时，可以随时看着自己拼的图，也可以随时改变拼图的形状一样。反射让程序可以在运行时检查和修改自己的结构和行为，这让程序变得非常灵活。</p></details><h2 id="_27、反射的原理是什么" tabindex="-1"><a class="header-anchor" href="#_27、反射的原理是什么" aria-hidden="true">#</a> 27、反射的原理是什么</h2><details class="hint-container details"><summary>反射的原理是什么？</summary><blockquote><p>27、反射的原理是什么？</p></blockquote><p>反射的原理是依赖于底层虚拟机的机制的和在运行时通过反射API（例如在Java中是<code>java.lang.reflect</code>包）来操作程序的元信息（如类、方法、属性等）：</p><ul><li>在Java中，虚拟机会在加载类的时候生成相应的<code>Class</code>对象，这个对象包含了类的所有信息。反射API就是在这个基础上提供了一系列的方法来访问和操作这些信息。</li><li>在运行时可以通过反射机制-反射API来获取和操作</li></ul><p>在底层，实现反射通常涉及以下几个步骤：</p><ol><li><p><strong>获取类信息</strong>: 首先，程序通过类加载器加载一个类，并在内存中创建一个表示该类的<code>Class</code>对象。这个<code>Class</code>对象包含了该类的所有信息，如方法、属性等。</p></li><li><p><strong>获取成员信息</strong>: 通过<code>Class</code>对象可以获取到类的所有成员（字段和方法），包括公共的、私有的等。</p></li><li><p><strong>访问成员</strong>: 反射API提供了方法来访问类的成员，比如获取和设置属性的值，调用方法等。这可以绕过编译时的访问权限检查。</p></li><li><p><strong>创建对象实例</strong>: 反射可以通过<code>Class</code>对象来创建类的实例。</p></li><li><p><strong>调用方法</strong>: 反射可以动态地调用类的方法，包括公共的、私有的等。</p></li></ol><p>需要注意的是，由于<strong>反射的操作是在运行时进行的，相比直接调用代码，反射会带来一定的性能损耗</strong>。因此，在性能要求高的场景下，应该避免过度使用反射。</p></details><h2 id="_28、反射的应用场景有哪些" tabindex="-1"><a class="header-anchor" href="#_28、反射的应用场景有哪些" aria-hidden="true">#</a> 28、反射的应用场景有哪些</h2><details class="hint-container details"><summary>反射的应用场景有哪些？</summary><blockquote><p>28、反射的应用场景有哪些？</p></blockquote><ol><li><strong>动态代理</strong>: 反射可以用于创建动态代理，实现在运行时动态地生成代理类，对原有类进行增强，如动态代理设计模式。</li><li><strong>动态加载类</strong>: 可以在程序运行时动态加载一些类，例如插件系统，或者根据配置文件动态加载不同的实现。</li><li><strong>框架和库开发</strong>: 许多框架和库（比如Spring、Hibernate等）使用反射来实现各种功能，例如依赖注入、AOP、持久化等。</li><li><strong>配置文件处理</strong>: 可以通过反射来读取配置文件中的类名、方法名等信息，从而动态地创建对象或调用方法。</li></ol><p>总的来说，反射是一种非常强大的机制，可以让程序在运行时获取并操作类的信息，从而实现许多灵活和高级的功能。然而，由于反射的运行时性能开销相对较高，因此在使用时需要慎重考虑性能方面的影响。</p></details>`,59),i=[o];function t(c,d){return a(),s("div",null,i)}const u=n(l,[["render",t],["__file","java-simple.html.vue"]]);export{u as default};
