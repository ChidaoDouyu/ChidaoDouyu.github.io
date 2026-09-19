import{i as e,r as t,s as n}from"./app-B0icW1KO.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/computer/dsh.html","title":"DeepSeek Harness 使用方法","lang":"zh-CN","frontmatter":{"article":true,"title":"DeepSeek Harness 使用方法","description":"部署 单次使用 npx @deepseek-ai/dsh web 长期使用 可以考虑添加一个脚本用于快速启动 用例(Windows)： 桌面部署一个快捷方式指向 D:\\\\dsh.ps1内容为 命令 查看帮助 dsh -h 启动WebUI(可选: 指定端口) dsh web (--port 3080) 启动命令行对话 dsh chat 检查环境 dsh d...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DeepSeek Harness 使用方法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-09-19T18:39:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ChidaoDouyu\\",\\"url\\":\\"https://github.com/ChidaoDouyu\\",\\"email\\":\\"chidaodouyu@qq.com\\"}]}"],["meta",{"property":"og:url","content":"http://chidaodouyu.github.io/computer/dsh.html"}],["meta",{"property":"og:site_name","content":"迟到的博客"}],["meta",{"property":"og:title","content":"DeepSeek Harness 使用方法"}],["meta",{"property":"og:description","content":"部署 单次使用 npx @deepseek-ai/dsh web 长期使用 可以考虑添加一个脚本用于快速启动 用例(Windows)： 桌面部署一个快捷方式指向 D:\\\\dsh.ps1内容为 命令 查看帮助 dsh -h 启动WebUI(可选: 指定端口) dsh web (--port 3080) 启动命令行对话 dsh chat 检查环境 dsh d..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-09-19T18:39:07.000Z"}],["meta",{"property":"article:modified_time","content":"2026-09-19T18:39:07.000Z"}]]},"git":{"createdTime":1789843147000,"updatedTime":1789843147000,"contributors":[{"name":"ChidaoDouyu","username":"ChidaoDouyu","email":"3114680870@qq.com","commits":1,"url":"https://github.com/ChidaoDouyu"}]},"readingTime":{"minutes":3.73,"words":1120},"filePathRelative":"computer/dsh.md","excerpt":"","autoDesc":true}`),a={name:`dsh.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h2><ul><li>单次使用 <code>npx @deepseek-ai/dsh web</code></li><li>长期使用</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> @deepseek-ai/dsh</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 安装或更新(升级)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dsh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --version</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 验证安装</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dsh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> web</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 启动WebUI</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以考虑添加一个脚本用于快速启动<br> 用例(Windows)：<br> 桌面部署一个快捷方式指向</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;C:\\Program Files\\PowerShell\\7\\pwsh.exe&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -NoProfile</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -ExecutionPolicy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Bypass</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -File</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;D:\\dsh.ps1&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>D:\\dsh.ps1</code>内容为</p><div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:8;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span># ============================================================================</span></span>
<span class="line"><span># DeepSeek Harness 快捷启动脚本</span></span>
<span class="line"><span>#   作用：检查并更新全局 dsh npm 包，然后直接在当前窗口运行 dsh web。</span></span>
<span class="line"><span>#   说明：dsh 的运行与「控制台目录」无关；工作区在 Web 界面里切换。</span></span>
<span class="line"><span># ============================================================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 输出函数</span></span>
<span class="line"><span>function print {</span></span>
<span class="line"><span>    param(</span></span>
<span class="line"><span>        [Parameter(Position = 0)][string]$Text,</span></span>
<span class="line"><span>        [Parameter(Position = 1)][ConsoleColor]$Color = &#39;White&#39;,   # 颜色可省略，默认白色</span></span>
<span class="line"><span>        [switch]$NoNewline                                        # 加 -NoNewline 则输出后不换行</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    $stamp = Get-Date -Format &#39;yyyy-MM-dd HH:mm:ss&#39;</span></span>
<span class="line"><span>    if ($NoNewline) {</span></span>
<span class="line"><span>        Write-Host &quot;[$stamp]$step $Text&quot; -ForegroundColor $Color -NoNewline</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        Write-Host &quot;[$stamp]$step $Text&quot; -ForegroundColor $Color</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ----------------------------------------------------------------------------</span></span>
<span class="line"><span># 1) 检查全局 dsh 版本更新</span></span>
<span class="line"><span># ----------------------------------------------------------------------------</span></span>
<span class="line"><span>$step = &quot;[检查更新]&quot;</span></span>
<span class="line"><span>print &quot;正在检查全局 dsh 包更新 ...&quot; Cyan</span></span>
<span class="line"><span></span></span>
<span class="line"><span># $root : 全局 npm 包的安装根目录</span></span>
<span class="line"><span>$root = npm root -g 2&gt;$null</span></span>
<span class="line"><span># $pkgJson : 拼出「已安装的 dsh」的 package.json 路径</span></span>
<span class="line"><span>$pkgJson = Join-Path $root &#39;@deepseek-ai\\dsh\\package.json&#39;</span></span>
<span class="line"><span># $installedVer : 本地当前已安装的 dsh 版本；先置空，下面检测到再填</span></span>
<span class="line"><span>$installedVer = $null</span></span>
<span class="line"><span>if (Test-Path -LiteralPath $pkgJson) {          # 若该 package.json 存在</span></span>
<span class="line"><span>    # 读取其中的 &quot;version&quot; 字段作为本地版本</span></span>
<span class="line"><span>    $installedVer = (Get-Content -LiteralPath $pkgJson -Raw | ConvertFrom-Json).version</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># $latestVer : 向 npm 仓库查询的最新版本号；.Trim() 去掉首尾空白</span></span>
<span class="line"><span>$latestVer = (npm view @deepseek-ai/dsh version 2&gt;$null).Trim()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (-not $installedVer -or -not $latestVer) {</span></span>
<span class="line"><span>    # 情况 A：本地没安装 或 联网查不到最新版</span></span>
<span class="line"><span>    if (-not $installedVer) {</span></span>
<span class="line"><span>        print &quot;未检测到已安装的全局 dsh，将进行全新安装。&quot; Yellow</span></span>
<span class="line"><span>        $installedVer = &quot;未安装&quot;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        print &quot;无法获取最新版本号（可能无网络），跳过更新检查。&quot; Yellow</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>} elseif ($installedVer -ne $latestVer) {</span></span>
<span class="line"><span>    # 情况 B：本地版本 与 最新版 不同 → 发现更新</span></span>
<span class="line"><span>    print &quot;发现新版本: $installedVer -&gt; $latestVer，正在更新 ...&quot; Yellow</span></span>
<span class="line"><span>    npm install -g @deepseek-ai/dsh@latest      # 真正执行全局更新</span></span>
<span class="line"><span>    # $LASTEXITCODE : 上一条外部命令（npm）的退出码；0 表示成功</span></span>
<span class="line"><span>    if ($LASTEXITCODE -ne 0) {</span></span>
<span class="line"><span>        # 更新失败：问用户是否继续；输入 Q/q 则退出</span></span>
<span class="line"><span>        print &quot;全局 dsh 更新失败（退出码 $LASTEXITCODE），是否继续？&quot; Yellow</span></span>
<span class="line"><span>        $cont = Read-Host &quot;继续请按回车，退出请按 Q&quot;</span></span>
<span class="line"><span>        if ($cont -match &#39;^[Qq]&#39;) { exit 1 }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    print &quot;全局 dsh 已更新到 $latestVer。\`n&quot; Green</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>    # 情况 C：本地版本 == 最新版 → 已是最新，无需更新</span></span>
<span class="line"><span>    print &quot;全局 dsh 已是最新版本 ($installedVer)，无需更新。\`n&quot; Green</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ----------------------------------------------------------------------------</span></span>
<span class="line"><span># 2) 启动 dsh web（直接运行，输出原样透传；Ctrl+C 只停 npx，脚本继续执行下面代码）</span></span>
<span class="line"><span># ----------------------------------------------------------------------------</span></span>
<span class="line"><span>$step = &quot;[启动]&quot;</span></span>
<span class="line"><span>print &quot;正在启动 DeepSeek Harness Web ...\`n&quot; Cyan</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 本机 Ctrl+C 拦截器（用 Add-Type 编译，不依赖 PowerShell runspace，故不会崩溃）。</span></span>
<span class="line"><span># 作用：按 Ctrl+C 时对本进程返回“已处理”，避免 pwsh 中止整条脚本；</span></span>
<span class="line"><span>#       同时把标志置 1（CtrlGuard.WasCtrlC）供下方判断。</span></span>
<span class="line"><span>#       子进程 npx(dsh web) 是独立进程，仍会收到 Ctrl+C 从而停止。</span></span>
<span class="line"><span>if (-not (&#39;CtrlGuard&#39; -as [type])) {</span></span>
<span class="line"><span>    Add-Type -TypeDefinition @&#39;</span></span>
<span class="line"><span>using System;</span></span>
<span class="line"><span>using System.Runtime.InteropServices;</span></span>
<span class="line"><span>public static class CtrlGuard {</span></span>
<span class="line"><span>    private delegate bool HandlerRoutine(uint dwCtrlType);</span></span>
<span class="line"><span>    [DllImport(&quot;kernel32.dll&quot;)]</span></span>
<span class="line"><span>    private static extern bool SetConsoleCtrlHandler(HandlerRoutine handler, bool add);</span></span>
<span class="line"><span>    private static HandlerRoutine _handler;</span></span>
<span class="line"><span>    public static volatile int WasCtrlC;</span></span>
<span class="line"><span>    private static bool OnEvent(uint ctrlType) {</span></span>
<span class="line"><span>        if (ctrlType == 0 || ctrlType == 1) {   // CTRL_C_EVENT / CTRL_BREAK_EVENT</span></span>
<span class="line"><span>            WasCtrlC = 1;</span></span>
<span class="line"><span>            return true;                        // 已处理：本进程不被 Ctrl+C 中止</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public static void Enable()  { WasCtrlC = 0; if (_handler == null) { _handler = OnEvent; SetConsoleCtrlHandler(_handler, true); } }</span></span>
<span class="line"><span>    public static void Disable() { if (_handler != null) { SetConsoleCtrlHandler(_handler, false); _handler = null; } }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&#39;@</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[CtrlGuard]::Enable()</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>    $step = &quot;[dshweb]&quot;</span></span>
<span class="line"><span>    dsh web</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>finally {</span></span>
<span class="line"><span>    [CtrlGuard]::Disable()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ----------------------------------------------------------------------------</span></span>
<span class="line"><span># 3) Ctrl+C 处理：dsh 已停止 → 提示后自动关</span></span>
<span class="line"><span># ----------------------------------------------------------------------------</span></span>
<span class="line"><span>if ([CtrlGuard]::WasCtrlC -eq 1) {</span></span>
<span class="line"><span>    $step = &quot;[停止]&quot;</span></span>
<span class="line"><span>    Write-Host &quot;\`n&quot;</span></span>
<span class="line"><span>    print &quot;进程成功停止，脚本将在3秒后结束。&quot; Green</span></span>
<span class="line"><span>    Start-Sleep -Seconds 3</span></span>
<span class="line"><span>    exit 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ----------------------------------------------------------------------------</span></span>
<span class="line"><span># 4) 退出码判断</span></span>
<span class="line"><span># ----------------------------------------------------------------------------</span></span>
<span class="line"><span>$code = $LASTEXITCODE</span></span>
<span class="line"><span>if ($code -ne 0) {</span></span>
<span class="line"><span>    $step = &quot;[异常]&quot;</span></span>
<span class="line"><span>    print &quot;dsh web 异常退出（退出码 $code）。&quot; Yellow</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 检查 3080 端口当前是否已有进程在监听</span></span>
<span class="line"><span>    # （-ErrorAction SilentlyContinue 让查询失败时不报红）</span></span>
<span class="line"><span>    $listener = Get-NetTCPConnection -LocalPort 3080 -State Listen -ErrorAction SilentlyContinue</span></span>
<span class="line"><span>    if ($listener) {</span></span>
<span class="line"><span>        print &quot;检测到 3080 端口已被占用，可能已有 dsh web 在运行。&quot; Yellow</span></span>
<span class="line"><span>        print &quot;请先访问 http://127.0.0.1:3080 ，或关闭占用该端口的进程后再重试。&quot; Yellow</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        print &quot;常见原因：启动失败、配置错误或依赖问题。可查看上方错误信息排查。&quot; Yellow</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    print &quot;\`n按回车关闭窗口&quot; DarkGray -NoNewline; Read-Host  # 不追加冒号</span></span>
<span class="line"><span>    exit $code</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h2><p>查看帮助 <code>dsh -h</code><br> 启动WebUI(可选: 指定端口) <code>dsh web (--port 3080)</code><br> 启动命令行对话 <code>dsh chat</code><br> 检查环境 <code>dsh doctor</code><br> 添加插件 <code>dsh plugin --profile web add xxx</code><br> 更新(指定)插件 <code>dsh plugin --profile web update (xxx)</code></p>`,9)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};