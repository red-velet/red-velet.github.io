import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c as o,b as p,d as n,e as s,f as c,a}from"./app-KXX3jVXZ.js";const r={},d=n("div",{style:{display:"flex","justify-content":"space-between"}},[n("div",{style:{"text-align":"left"}},[n("img",{src:"https://cloud.greennut.icu/blog/tool/installserversw.jpg",width:"200px",alt:"云服务器安装软件"})]),n("div",{style:{"text-align":"right"}},[n("strong",null," 教学：使用云服务器，进行各种软件的安装、配置、项目部署及远程连接（宝塔、Nginx、JDK、Mysql、Redis、Ffmpeg） ")])],-1),u=a(`<h1 id="云服务器-虚拟机安装宝塔及软件配置" tabindex="-1"><a class="header-anchor" href="#云服务器-虚拟机安装宝塔及软件配置" aria-hidden="true">#</a> 云服务器/虚拟机安装宝塔及软件配置</h1><h2 id="一、宝塔安装和配置" tabindex="-1"><a class="header-anchor" href="#一、宝塔安装和配置" aria-hidden="true">#</a> 一、宝塔安装和配置</h2><h3 id="_1、命令行安装" tabindex="-1"><a class="header-anchor" href="#_1、命令行安装" aria-hidden="true">#</a> 1、命令行安装</h3><blockquote><p><strong>使用终端模拟器-xshell远程连接服务器，运行下列命令</strong>：</p></blockquote><ol><li><strong>命令不需要换行，整行复制执行</strong></li><li><strong>运行过程中如有选择，输入<code>y</code>选择即可</strong></li><li><strong>安装完成牢记不要清除界面，界面会有临时的进入网站、用户名、密码</strong></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y wget &amp;&amp; wget -O install.sh http://download.bt.cn/install/install_6.0.sh &amp;&amp; sh install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>安装成功</strong>：</p><figure><img src="https://cloud.greennut.icu/blog/tool/image-20231217130539852.png" alt="安装成功效果" tabindex="0" loading="lazy"><figcaption>安装成功效果</figcaption></figure><blockquote><p><strong>设置安全组</strong>：云服务器实例 -&gt; 安全组 -&gt; 添加图中端口放行</p></blockquote><figure><img src="https://cloud.greennut.icu/blog/tool/image-20231217130716138.png" alt="阿里云服务器实例添加安全组端口" tabindex="0" loading="lazy"><figcaption>阿里云服务器实例添加安全组端口</figcaption></figure><ul><li><strong>如需开放其他软件的端口也是在此操作</strong>： <ul><li>例如：常用的mysql(3306)、redis(5379)、https(443)等等</li></ul></li></ul><blockquote><p><strong>使用外网地址和用户名密码进行登录：</strong></p></blockquote><ul><li>复制外网面板地址，输入用户名和密码访问即可</li></ul><h3 id="_2、应用设置" tabindex="-1"><a class="header-anchor" href="#_2、应用设置" aria-hidden="true">#</a> 2、应用设置</h3><h4 id="_2-1-更改面板设置" tabindex="-1"><a class="header-anchor" href="#_2-1-更改面板设置" aria-hidden="true">#</a> 2.1 更改面板设置</h4><blockquote><p><strong>修改默认用户名和密码</strong>：</p></blockquote><figure><img src="https://cloud.greennut.icu/blog/tool/image-20231217131622029.png" alt="宝塔面板设置-修改默认用户名和密码" tabindex="0" loading="lazy"><figcaption>宝塔面板设置-修改默认用户名和密码</figcaption></figure><blockquote><p><strong>宝塔安全设置</strong>：宝塔 –&gt; 安全 –&gt;系统防火墙 –&gt; 添加端口规则</p></blockquote><ul><li><strong>如需开放其他软件的端口也是在此操作</strong>： <ul><li>例如：常用的mysql(3306)、redis(5379)、https(443)等等</li></ul></li></ul><figure><img src="https://cloud.greennut.icu/blog/tool/image-20231217132024081.png" alt="宝塔安全设置-开放端口" tabindex="0" loading="lazy"><figcaption>宝塔安全设置-开放端口</figcaption></figure><h2 id="二、安装nginx" tabindex="-1"><a class="header-anchor" href="#二、安装nginx" aria-hidden="true">#</a> 二、安装Nginx</h2><h3 id="_1、安装" tabindex="-1"><a class="header-anchor" href="#_1、安装" aria-hidden="true">#</a> 1、安装</h3><p>宝塔里面软件商店搜索nginx（此处选中是nginx1.22版本），然后选择极速安装即可，安装完成让其显示在首页</p><h3 id="_2、设置配置文件" tabindex="-1"><a class="header-anchor" href="#_2、设置配置文件" aria-hidden="true">#</a> 2、设置配置文件</h3><blockquote><p>nginx.conf核心：</p></blockquote><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span>
    <span class="token punctuation">{</span>
    	<span class="token comment">#监听端口,网站默认打开自带80，但是会自动隐藏</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    	<span class="token comment">#将该服务器块与特定的域名（这里是localhost）相关联</span>
        <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>
		
    	<span class="token comment">#端口的反向代理：接受针对根路径的访问会被导航到此处</span>
        <span class="token directive"><span class="token keyword">location</span> /</span><span class="token punctuation">{</span>
          <span class="token comment">#导航到服务器的/server/front-end/vuepress-blog/dist目录下,默认使用index.html	</span>
          <span class="token directive"><span class="token keyword">root</span> /server/front-end/vuepress-blog/dist</span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    	<span class="token comment">#反向代理：接受针对以/api开头的请求会被导航到此处</span>
        <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span> 
        	<span class="token comment">#代理到服务器的http://localhost:7090/api地址</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:7090/api</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> x-forwarded-for  <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      
        <span class="token directive"><span class="token keyword">access_log</span>  /www/wwwlogs/access.log</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><blockquote><p><strong>nginx.conf</strong>：</p></blockquote><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span>  root</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_processes</span> auto</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">error_log</span>  /www/wwwlogs/nginx_error.log  crit</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">pid</span>        /www/server/nginx/logs/nginx.pid</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_rlimit_nofile</span> <span class="token number">51200</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">stream</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">log_format</span> tcp_format <span class="token string">&#39;<span class="token variable">$time_local|</span><span class="token variable">$remote_addr|</span><span class="token variable">$protocol</span>|<span class="token variable">$status</span>|<span class="token variable">$bytes_sent|</span><span class="token variable">$bytes_received|</span><span class="token variable">$session_time|</span><span class="token variable">$upstream_addr|</span><span class="token variable">$upstream_bytes_sent|</span><span class="token variable">$upstream_bytes_received|</span><span class="token variable">$upstream_connect_time</span>&#39;</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">access_log</span> /www/wwwlogs/tcp-access.log tcp_format</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">error_log</span> /www/wwwlogs/tcp-error.log</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">include</span> /www/server/panel/vhost/nginx/tcp/*.conf</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">events</span></span>
    <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">use</span> epoll</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">51200</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">multi_accept</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">http</span></span>
    <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">include</span> proxy.conf</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_names_hash_bucket_size</span> <span class="token number">512</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">client_header_buffer_size</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">large_client_header_buffers</span> <span class="token number">4</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">50m</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">sendfile</span>   <span class="token boolean">on</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">tcp_nopush</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">keepalive_timeout</span> <span class="token number">60</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">tcp_nodelay</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">fastcgi_connect_timeout</span> <span class="token number">300</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">fastcgi_send_timeout</span> <span class="token number">300</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">fastcgi_read_timeout</span> <span class="token number">300</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">fastcgi_buffer_size</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">fastcgi_buffers</span> <span class="token number">4</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">fastcgi_busy_buffers_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">fastcgi_temp_file_write_size</span> <span class="token number">256k</span></span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">fastcgi_intercept_errors</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">gzip_min_length</span>  <span class="token number">1k</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">gzip_buffers</span>     <span class="token number">4</span> <span class="token number">16k</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">gzip_http_version</span> 1.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">2</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">gzip_types</span>     text/plain application/javascript application/x-javascript text/javascript text/css application/xml</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">gzip_vary</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">gzip_proxied</span>   expired no-cache no-store private auth</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">gzip_disable</span>   <span class="token string">&quot;MSIE [1-6]\\.&quot;</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">limit_conn_zone</span> <span class="token variable">$binary_remote_addr</span> zone=perip:10m</span><span class="token punctuation">;</span>
		<span class="token directive"><span class="token keyword">limit_conn_zone</span> <span class="token variable">$server_name</span> zone=perserver:10m</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_tokens</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">access_log</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">server</span></span>
    <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> localhost</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span><span class="token punctuation">{</span>
          <span class="token directive"><span class="token keyword">root</span> /server/front-end/vuepress-blog/dist</span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span> 
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:7090/api</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> x-forwarded-for  <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">access_log</span>  /www/wwwlogs/access.log</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">include</span> /www/server/panel/vhost/nginx/*.conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><blockquote><p>测试在<code>/server/front-end/vuepress/dist</code>目录下创建<code>index.html</code>：</p></blockquote><ul><li>创建目录：<code>mkdir -p /server/front-end/vuepress/dist</code></li><li>创建index.html：<code>vim index.html</code>、添加内容、wq保存退出</li><li>在本地访问服务器地址即可</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>helloworld<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        helloworld
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cloud.greennut.icu/blog/tool/image-20231217134117732.png" alt="创建文件夹和index.html文件" tabindex="0" loading="lazy"><figcaption>创建文件夹和index.html文件</figcaption></figure><figure><img src="https://cloud.greennut.icu/blog/tool/image-20231217134053298.png" alt="本地访问效果" tabindex="0" loading="lazy"><figcaption>本地访问效果</figcaption></figure><h2 id="三、安装mysql" tabindex="-1"><a class="header-anchor" href="#三、安装mysql" aria-hidden="true">#</a> 三、安装Mysql</h2><h3 id="_1、安装-1" tabindex="-1"><a class="header-anchor" href="#_1、安装-1" aria-hidden="true">#</a> 1、安装</h3><p>宝塔里面软件商店搜索mysql（此处选中是5.7版本），然后选择极速安装即可，安装完成让其显示在首页</p><h3 id="_2、配置和远程连接" tabindex="-1"><a class="header-anchor" href="#_2、配置和远程连接" aria-hidden="true">#</a> 2、配置和远程连接</h3><blockquote><p><strong>查看root密码：宝塔界面 –&gt; 数据库 –&gt; mysql –&gt; root密码</strong></p></blockquote><figure><img src="https://cloud.greennut.icu/blog/tool/image-20231217134411384.png" alt="宝塔界面查看安装mysql的root密码" tabindex="0" loading="lazy"><figcaption>宝塔界面查看安装mysql的root密码</figcaption></figure><hr><blockquote><p><strong>终端登录mysql，授予用户远程连接的权限</strong>：<code>mysql -uroot -p</code></p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#开启访问权限 (mysql5.5)</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">PRIVILEGES</span> <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;你的密码&#39;</span> <span class="token keyword">WITH</span> <span class="token keyword">GRANT</span> <span class="token keyword">OPTION</span><span class="token punctuation">;</span>

<span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">PRIVILEGES</span> <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;Zz172425..&#39;</span> <span class="token keyword">WITH</span> <span class="token keyword">GRANT</span> <span class="token keyword">OPTION</span><span class="token punctuation">;</span>


<span class="token comment">#开启访问权限 本地/远程(mysql8.0)</span>
<span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">on</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> <span class="token string">&#39;root&#39;</span><span class="token variable">@&#39;%&#39;</span> identified <span class="token keyword">by</span> <span class="token string">&#39;你的密码&#39;</span><span class="token punctuation">;</span>

<span class="token comment">#刷新权限</span>
flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>

<span class="token comment">#退出</span>
<span class="token keyword">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><blockquote><p><strong>开放3306端口</strong>：宝塔 –&gt; 安全 –&gt;系统防火墙 –&gt; 添加端口规则</p></blockquote><ol><li>宝塔开放端口3306</li><li>云服务器开放端口3306</li></ol><hr><blockquote><p><strong>navicate远程连接</strong>：</p></blockquote><figure><img src="https://cloud.greennut.icu/blog/tool/image-20231217135128214.png" alt="navicate远程连接云服务器数据库" tabindex="0" loading="lazy"><figcaption>navicate远程连接云服务器数据库</figcaption></figure><h2 id="四、安装redis" tabindex="-1"><a class="header-anchor" href="#四、安装redis" aria-hidden="true">#</a> 四、安装Redis</h2><h3 id="_1、安装-2" tabindex="-1"><a class="header-anchor" href="#_1、安装-2" aria-hidden="true">#</a> 1、安装</h3><p>宝塔里面软件商店搜索redis（此处选中是7.2版本），然后选择极速安装即可，安装完成让其显示在首页</p><h3 id="_2、配置和远程连接-1" tabindex="-1"><a class="header-anchor" href="#_2、配置和远程连接-1" aria-hidden="true">#</a> 2、配置和远程连接</h3><blockquote><p>进行配置：开放端口：6379</p></blockquote><ul><li>阿里云安全组开放： 所有ip都可以访问 - <code>0.0.0.0/0</code> - 6379</li><li>宝塔界面 - 安全 - 端口规则 开放：所有ip都可以访问 -TCP - 6379</li><li>redis配置：<strong>bind-<code>0.0.0.0</code> 密码-requirepass-<code>你的密码</code></strong></li></ul><figure><img src="https://cloud.greennut.icu/blog/tool/image-20231217135825720.png" alt="配置redis设置" tabindex="0" loading="lazy"><figcaption>配置redis设置</figcaption></figure><hr><blockquote><p>another redis desktop manager远程连接：</p></blockquote><figure><img src="https://cloud.greennut.icu/blog/tool/image-20231217140153865.png" alt="远程连接redis" tabindex="0" loading="lazy"><figcaption>远程连接redis</figcaption></figure><figure><img src="https://cloud.greennut.icu/blog/tool/image-20231217140216678.png" alt="连接成功界面" tabindex="0" loading="lazy"><figcaption>连接成功界面</figcaption></figure><h2 id="五、安装jdk" tabindex="-1"><a class="header-anchor" href="#五、安装jdk" aria-hidden="true">#</a> 五、安装Jdk</h2><h3 id="_1、下载并解压" tabindex="-1"><a class="header-anchor" href="#_1、下载并解压" aria-hidden="true">#</a> 1、下载并解压</h3><h4 id="_1-下载" tabindex="-1"><a class="header-anchor" href="#_1-下载" aria-hidden="true">#</a> （1）下载</h4><p>需要注册Oracle账号</p>`,65),k={href:"https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html",-1),m=a(`<figure><img src="https://cloud.greennut.icu/blog/tool/image-20230401160141587.png" alt="oracle官网下载jdk" tabindex="0" loading="lazy"><figcaption>oracle官网下载jdk</figcaption></figure><p>下载完后使用xftp等工具将文件上传至Linux</p><h4 id="_2-解压" tabindex="-1"><a class="header-anchor" href="#_2-解压" aria-hidden="true">#</a> （2）解压</h4><p>（1）创建安装目录：<code>mkdir /usr/local/jdk</code>，上传安装包到此目录</p><p>（2）解压：<code>tar -zxvf jdk-8u171-linux-x64.tar.gz -C /usr/local/jdk</code></p><p>（3）进入解压后的目录：<code>cd /usr/local/jdk</code></p><figure><img src="https://cloud.greennut.icu/blog/tool/image-20230401160635916.png" alt="存放jdk" tabindex="0" loading="lazy"><figcaption>存放jdk</figcaption></figure><h3 id="_2、-配置环境变量" tabindex="-1"><a class="header-anchor" href="#_2、-配置环境变量" aria-hidden="true">#</a> 2、 配置环境变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#配置环境变量，使用vim命令修改/etc/profile文件</span>
<span class="token function">vim</span> /etc/profile

<span class="token comment">#在文件末尾加入如下配置</span>
<span class="token comment">#java环境变量</span>
<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/jdk/jdk1.8.0_171
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>

<span class="token comment">#重新加载profile.文件，使更改的配置立即生效</span>
<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cloud.greennut.icu/blog/tool/image-20230401161025802.png" alt="修改环境变量" tabindex="0" loading="lazy"><figcaption>修改环境变量</figcaption></figure><hr><figure><img src="https://cloud.greennut.icu/blog/tool/image-20230401161105301.png" alt="具体修改操作" tabindex="0" loading="lazy"><figcaption>具体修改操作</figcaption></figure><h3 id="_3、安装成功测试" tabindex="-1"><a class="header-anchor" href="#_3、安装成功测试" aria-hidden="true">#</a> 3、安装成功测试</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看java版本</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span>

<span class="token comment">#查看javac版本</span>
javac <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cloud.greennut.icu/blog/tool/image-20230401161218696.png" alt="测试安装效果" tabindex="0" loading="lazy"><figcaption>测试安装效果</figcaption></figure><h2 id="六、部署java项目" tabindex="-1"><a class="header-anchor" href="#六、部署java项目" aria-hidden="true">#</a> 六、部署Java项目</h2><p>假如服务器地址为47.21.36.122，则访问：47.21.36.122 == 47.21.36.122:80</p><h3 id="_1、前端部署" tabindex="-1"><a class="header-anchor" href="#_1、前端部署" aria-hidden="true">#</a> 1、前端部署</h3><ol><li>前端进行编译打包：如<code>npm run build</code></li><li>将打包的文件上传到服务器：例如打包后的<code>dist</code>目录上传到<code>/server/front-end/q-pan/dist</code></li><li>配置nginx反向代理： <ol><li>配置访问文件地址： <ul><li>例如配置-<code>/ --&gt; /server/front-end/q-pan/dist/</code></li><li>本地访问<code>47.21.36.122:80 –&gt; 47.21.36.122:80/server/front-end/q-pan/dist</code></li></ul></li><li>配置前端项目访问后端接口代理： <ul><li>例如配置-<code>/api --&gt; localhost:8081/api</code></li><li>本地访问<code>47.21.36.122:80/api –&gt; 47.21.36.122:8081/api</code></li></ul></li></ol></li></ol><h3 id="_2、后端部署" tabindex="-1"><a class="header-anchor" href="#_2、后端部署" aria-hidden="true">#</a> 2、后端部署</h3><ol><li>项目修改配置文件application.properties的数据库、redis等地址为云服务器地址</li><li>项目打jar包上传到具体目录：mvc package打包，或者idea图形化界面打包，将jar包上传服务器指定目录</li><li>进入上传的目录 <ul><li>后台启动运行：<code>nohup java -jar qpan-backend-1.0-SNAPSHOT.jar &amp;</code></li></ul></li></ol><h2 id="七、安装ffmpeg" tabindex="-1"><a class="header-anchor" href="#七、安装ffmpeg" aria-hidden="true">#</a> 七、安装Ffmpeg</h2><blockquote><p>1、安装所需软件</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> automake autoconf libtool gcc gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>2、安装epel 源</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> epel-release <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>3、安装第三方更新源</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> http://li.nux.ro/download/nux/dextop/el7/x86_64/nux-dextop-release-0-1.el7.nux.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>4、安装ffmpeg</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum repolist 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> ffmpeg ffmpeg-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>5、查看安装的版本</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ffmpeg <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,33);function g(b,h){const e=i("ExternalLinkIcon");return l(),o("div",null,[d,p(" more "),u,n("p",null,[n("a",k,[s("下载地址"),c(e)]),s("："),v]),m])}const w=t(r,[["render",g],["__file","baota.html.vue"]]);export{w as default};
