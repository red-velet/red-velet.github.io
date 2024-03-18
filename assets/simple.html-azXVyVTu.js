import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c,b as u,d as n,e as s,f as e,a}from"./app-yOESM-4p.js";const d={},r=n("div",{style:{display:"flex","justify-content":"space-between"}},[n("div",{style:{"text-align":"left"}}," Android学习前应该具备的前置知识 "),n("div",{style:{"text-align":"right"}},[n("strong",null," 包括软件的安装、环境的配置、第一个应用、调试方法等 ")])],-1),m=a('<h1 id="一、前置知识" tabindex="-1"><a class="header-anchor" href="#一、前置知识" aria-hidden="true">#</a> 一、前置知识</h1><h2 id="_1、发展历程" tabindex="-1"><a class="header-anchor" href="#_1、发展历程" aria-hidden="true">#</a> 1、发展历程</h2><blockquote><p><strong>介绍：</strong></p></blockquote><ul><li>Android之父：Andy Rubin</li><li>Android起源：基于Linux内核</li><li>所属公司：Google</li><li>第一部安卓手机：HTC</li><li>所属设备：手机、平板、车载等</li><li>Android开发语言：JVM语言（Java、Kotlin）</li></ul><h2 id="_2、配置环境" tabindex="-1"><a class="header-anchor" href="#_2、配置环境" aria-hidden="true">#</a> 2、配置环境</h2><blockquote><p><strong>安装Android Studio：</strong></p></blockquote><ul><li>记得勾选Android Virtual Device，然后一直next即可</li><li>默认安装C盘，如果需要安卓其他盘，请自行更改目录</li></ul><blockquote><p><strong>配置Android Studio：</strong></p></blockquote><ul><li>首次打开，选择自定义安装Customer Installer，可以自定义安装目录</li><li>其他点Next即可，碰到License Agreement，需要手动点击每个license，手动选择Accept</li><li>然后一直Next，等待下载完成</li></ul><blockquote><p><strong>创建第一个项目：</strong></p></blockquote><ul><li>New Project —&gt; Phone and Tablet —&gt; Empty Activity（默认kotlin） / Empty Views Activity（默认kotlin，可以修改为Java）</li><li>根据需要自行修改：</li><li>项目名、包名、保存位置、SDK版本（API版本-安卓系统版本）、编译配置</li></ul><figure><img src="http://sevencowcloud.chiou.icu/img/android/newProject11.png" alt="创建项目-Empty Activity" tabindex="0" loading="lazy"><figcaption>创建项目-Empty Activity</figcaption></figure><figure><img src="http://sevencowcloud.chiou.icu/img/android/newProject1.png" alt="创建项目-Empty Views Activity" tabindex="0" loading="lazy"><figcaption>创建项目-Empty Views Activity</figcaption></figure><blockquote><p><strong>创建安卓虚拟机：</strong></p></blockquote><ul><li>右侧Device Manager创建虚拟机，选择机器和版本，创建完成点击运行即可</li></ul><figure><img src="http://sevencowcloud.chiou.icu/img/android/newProject2.png" alt="创建安卓虚拟机" tabindex="0" loading="lazy"><figcaption>创建安卓虚拟机</figcaption></figure><blockquote><p><strong>启动过程中，出现下列问题：</strong></p></blockquote><ol><li>显示Sync Connect Time Out</li><li>项目目录结构没有图标显示，且代码文件也没有显示</li></ol><p><mark>💬 <strong>gradle的问题</strong>：需要下载对应的gradle，然后点击Try Again：</mark></p>',19),v=n("li",null,"打开项目的gradle目录：gradle-wrapper.properties",-1),k=n("li",null,[s("例如-"),n("code",null,"distributionUrl=https\\://services.gradle.org/distributions/gradle-8.2-bin.zip")],-1),g=n("li",null,[s("去下载"),n("code",null,"gradle-8.2-bin.zip"),s(" ，然后将文件移动至：")],-1),b=n("li",null,[n("code",null,"C:\\Users\\96946\\.gradle\\wrapper\\dists\\gradle-8.2-bin\\bbg7u40eoinfdyxsxr3z4i7ta\\")],-1),q={href:"https://services.gradle.org/distributions/",target:"_blank",rel:"noopener noreferrer"},h=a('<blockquote><p><strong>更新完后，点击运行的按钮运行，显示Hello World：</strong></p></blockquote><ol><li>程序成功启动在创建的安卓虚拟机上</li><li>目录结构有颜色了，代码有提示了</li><li>调试日志成功打印了</li></ol><figure><img src="http://sevencowcloud.chiou.icu/img/android/run.png" alt="依赖下载成功、运行成功" tabindex="0" loading="lazy"><figcaption>依赖下载成功、运行成功</figcaption></figure><blockquote><p>真机调试：PC与Android OS通过Android Debug Bridge进行通信</p></blockquote><ul><li>打开手机：开发者选项 —&gt; USB调试</li><li>插上数据线连接手机和电脑：选择传输类型 - 传输文件/Android Auto</li><li>根据提示，点击确定允许USB调试</li><li>Android Auto选择真机，点击运行，手机安卓发布的app，即可</li></ul><figure><img src="http://sevencowcloud.chiou.icu/img/android/phoneConnect.png" alt="真机调试" tabindex="0" loading="lazy"><figcaption>真机调试</figcaption></figure><figure><img src="http://sevencowcloud.chiou.icu/img/android/phoneShow.jpeg" alt="真机应用内容显示" tabindex="0" loading="lazy"><figcaption>真机应用内容显示</figcaption></figure><h2 id="_3、项目结构" tabindex="-1"><a class="header-anchor" href="#_3、项目结构" aria-hidden="true">#</a> 3、项目结构</h2>',8),_=a(`<blockquote><p><strong>app目录：</strong></p></blockquote><ul><li>java目录：存放Java源代码</li><li>res目录：存放静态资源（常量定义文件、应用名、布局、图标、主题）</li><li>manifests子目录：存放XML-<strong>清单文件</strong>，AndroidManifest.xml，是App的运行配置文件</li></ul><hr><blockquote><p><strong>Gradle目录：</strong></p></blockquote><ul><li><code>proguard-rues.pro</code>：该文件用于描述Java代码的混淆规则，防止源代码被反编译篡改泄漏</li><li><code>build.gradle</code>：该文件分为<strong>项目级与模块级两种</strong>，用于描述App工程的编译规则，引用了哪些插件、依赖，打包时，去哪个仓库下载对应的依赖。</li><li><code>settings.gradle</code>：该文件配置了需要编译哪些模块。初始内容为<code>include&#39;:app&#39;</code> ，表示只编译app模块，</li><li><code>gradle.properties</code>：该文件用于配置编译工程的命令行参数，一般无须改动。</li><li><code>local.properties</code>：项目的本地配置文件，它在工程编译时自动生成，用于描述开发者电脑的环境配置，包括SDK的本地路径、NDK的本地路径等。</li></ul><hr><details class="hint-container details"><summary>build.gradle配置文件注释：</summary><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token comment">// 应用插件声明，指定项目类型为 Android 应用</span>
plugins <span class="token punctuation">{</span>
    id <span class="token string">&#39;com.android.application&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Android 配置块，用于配置 Android 项目的构建和属性</span>
android <span class="token punctuation">{</span>
    <span class="token comment">// 定义项目的命名空间</span>
    namespace <span class="token string">&#39;com.example.myapplication&#39;</span>

    <span class="token comment">// 指定编译的 Android SDK 版本</span>
    compileSdk <span class="token number">34</span>

    <span class="token comment">// 默认配置块，包含应用程序的基本设置</span>
    defaultConfig <span class="token punctuation">{</span>
        <span class="token comment">// 应用程序的唯一标识符</span>
        applicationId <span class="token interpolation-string"><span class="token string">&quot;com.example.myapplication&quot;</span></span>

        <span class="token comment">// 最小支持的 Android 版本</span>
        minSdk <span class="token number">33</span>

        <span class="token comment">// 目标 Android 版本</span>
        targetSdk <span class="token number">34</span>

        <span class="token comment">// 应用程序的版本代码，用于区分不同的应用程序版本</span>
        versionCode <span class="token number">1</span>

        <span class="token comment">// 应用程序的版本名称，显示在应用商店等地方</span>
        versionName <span class="token interpolation-string"><span class="token string">&quot;1.0&quot;</span></span>

        <span class="token comment">// 指定测试运行器</span>
        testInstrumentationRunner <span class="token interpolation-string"><span class="token string">&quot;androidx.test.runner.AndroidJUnitRunner&quot;</span></span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 构建类型配置块，定义不同构建类型的设置</span>
    buildTypes <span class="token punctuation">{</span>
        release <span class="token punctuation">{</span>
            <span class="token comment">// 是否启用代码缩小（minification）</span>
            minifyEnabled <span class="token boolean">false</span>

            <span class="token comment">// 指定 Proguard 配置文件，用于代码混淆和优化</span>
            proguardFiles <span class="token function">getDefaultProguardFile</span><span class="token punctuation">(</span><span class="token string">&#39;proguard-android-optimize.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;proguard-rules.pro&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 编译选项配置块，指定源代码和目标代码的兼容性</span>
    compileOptions <span class="token punctuation">{</span>
        sourceCompatibility JavaVersion<span class="token punctuation">.</span>VERSION_1_8
        targetCompatibility JavaVersion<span class="token punctuation">.</span>VERSION_1_8
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 依赖声明块，指定项目所需的外部库和依赖关系</span>
dependencies <span class="token punctuation">{</span>
    <span class="token comment">// AndroidX AppCompat 库，提供向后兼容性支持</span>
    implementation <span class="token string">&#39;androidx.appcompat:appcompat:1.6.1&#39;</span>

    <span class="token comment">// Material Design 库，提供现代的 UI 设计元素</span>
    implementation <span class="token string">&#39;com.google.android.material:material:1.9.0&#39;</span>

    <span class="token comment">// ConstraintLayout 库，用于灵活而复杂的布局</span>
    implementation <span class="token string">&#39;androidx.constraintlayout:constraintlayout:2.1.4&#39;</span>

    <span class="token comment">// 单元测试 JUnit 库，用于编写和运行单元测试</span>
    testImplementation <span class="token string">&#39;junit:junit:4.13.2&#39;</span>

    <span class="token comment">// Android 测试扩展库，提供额外的测试功能</span>
    androidTestImplementation <span class="token string">&#39;androidx.test.ext:junit:1.1.5&#39;</span>

    <span class="token comment">// Espresso UI 测试库，用于编写可读性强的 UI 测试</span>
    androidTestImplementation <span class="token string">&#39;androidx.test.espresso:espresso-core:3.5.1&#39;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>AndroidManifest.xml清单文件注释：</summary><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token comment">&lt;!-- Android 清单文件，定义应用程序的基本信息和配置 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>manifest</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>tools</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/tools<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 应用程序的主体部分 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>application</span>
        <span class="token attr-name">&lt;!--</span> <span class="token attr-name">允许备份应用数据</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>
        android:allowBackup=&quot;true&quot;
        
        <span class="token comment">&lt;!-- 指定数据提取规则 --&gt;</span>
        android:dataExtractionRules=&quot;@xml/data_extraction_rules&quot;
        
        <span class="token comment">&lt;!-- 指定全备份规则 --&gt;</span>
        android:fullBackupContent=&quot;@xml/backup_rules&quot;
        
        <span class="token comment">&lt;!-- 应用程序的图标 --&gt;</span>
        android:icon=&quot;@mipmap/ic_launcher&quot;
        
        <span class="token comment">&lt;!-- 应用程序的名称 --&gt;</span>
        android:label=&quot;@string/app_name&quot;
        
        <span class="token comment">&lt;!-- 圆形图标 --&gt;</span>
        android:roundIcon=&quot;@mipmap/ic_launcher_round&quot;
        
        <span class="token comment">&lt;!-- 支持 RTL（Right To Left）文字排列顺序布局 --&gt;</span>
        android:supportsRtl=&quot;true&quot;
        
        <span class="token comment">&lt;!-- 应用程序的主题 --&gt;</span>
        android:theme=&quot;@style/Theme.MyApplication&quot;
        
        <span class="token comment">&lt;!-- 工具属性，指定目标 API 版本为 31 --&gt;</span>
        tools:targetApi=&quot;31&quot;&gt;

        <span class="token comment">&lt;!-- Activity是一个应用程序组件，提供一个屏幕，用户可以用来交互完成任务--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activity</span>
            <span class="token attr-name">&lt;!--</span> <span class="token attr-name">活动的类名</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>
            android:name=&quot;.MainActivity&quot;
            
            <span class="token comment">&lt;!-- 是否允许其他应用启动该活动 --&gt;</span>
            android:exported=&quot;true&quot;&gt;

            <span class="token comment">&lt;!-- 活动的意图过滤器 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>intent-filter</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!-- 指定活动为主要入口点 --&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>action</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.intent.action.MAIN<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

                <span class="token comment">&lt;!-- 指定活动为启动器 --&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>category</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.intent.category.LAUNCHER<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>intent-filter</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activity</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>application</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>manifest</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_4、界面显示和逻辑处理" tabindex="-1"><a class="header-anchor" href="#_4、界面显示和逻辑处理" aria-hidden="true">#</a> 4、界面显示和逻辑处理</h2><blockquote><p>Android使用：<strong>XML描绘应用界面，Java代码书写程序逻辑</strong></p></blockquote><ul><li><p>XML类似于HTML，Java类型与JS</p></li><li><p>好处：把App的界面设计与代码逻辑分开，进行<strong>解耦</strong></p><ol><li>使用XML文件描述APP界面，可以很方便地在Android Studio上预览界面效果。</li><li>一个界面布局可以被多处代码复用，反过来，一个Java代码也可能适配多个界面布局。</li></ol></li><li><p>默认：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>androidx.constraintlayout.widget.ConstraintLayout</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res/android<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>app</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/apk/res-auto<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>tools</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.android.com/tools<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>match_parent<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">tools:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.MainActivity<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextView</span>
        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap_content<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Hello World!<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">app:</span>layout_constraintBottom_toBottomOf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">app:</span>layout_constraintEnd_toEndOf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">app:</span>layout_constraintStart_toStartOf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">app:</span>layout_constraintTop_toTopOf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>parent<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>androidx.constraintlayout.widget.ConstraintLayout</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,11);function f(x,y){const i=t("ExternalLinkIcon"),l=t("Mermaid");return p(),c("div",null,[r,u(" more "),m,n("ul",null,[v,n("li",null,[s("查看distributionUrl的gradle版本： "),n("ul",null,[k,g,b,n("li",null,[s("下载地址："),n("a",q,[s("https://services.gradle.org/distributions/"),e(i)])])])])]),h,e(l,{id:"mermaid-244",code:"eJxLL0osyFAIceFSUHAMCHi5cOfz2et0de0UEgsKFNQU3IsSU3JSuThBPJBoVmJZIlC4KLUYSOYm5mWmpRaXFHNxQtSBlSSVZuak6AGNBQmoKRQU5aeXJhal6BaV5hTrAXlAMYgkiFOQWpIJNqs4taQkMy8doS8nPzkxB6KkCKSGCwDYuDm9"}),_])}const w=o(d,[["render",f],["__file","simple.html.vue"]]);export{w as default};
