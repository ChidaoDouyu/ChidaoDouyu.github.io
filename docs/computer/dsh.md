---
article: true
title: DeepSeek Harness 使用方法
---

## 部署
- 单次使用 `npx @deepseek-ai/dsh web`
- 长期使用
```bash
npm install -g @deepseek-ai/dsh # 安装或更新(升级)
dsh --version # 验证安装
dsh web # 启动WebUI
```
可以考虑添加一个脚本用于快速启动
用例(Windows)：
桌面部署一个快捷方式指向
```bash
"C:\Program Files\PowerShell\7\pwsh.exe" -NoProfile -ExecutionPolicy Bypass -File "D:\dsh.ps1"
```
`D:\dsh.ps1`内容为
```
# ============================================================================
# DeepSeek Harness 快捷启动脚本
#   作用：检查并更新全局 dsh npm 包，然后直接在当前窗口运行 dsh web。
#   说明：dsh 的运行与「控制台目录」无关；工作区在 Web 界面里切换。
# ============================================================================

# 输出函数
function print {
    param(
        [Parameter(Position = 0)][string]$Text,
        [Parameter(Position = 1)][ConsoleColor]$Color = 'White',   # 颜色可省略，默认白色
        [switch]$NoNewline                                        # 加 -NoNewline 则输出后不换行
    )
    $stamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
    if ($NoNewline) {
        Write-Host "[$stamp]$step $Text" -ForegroundColor $Color -NoNewline
    } else {
        Write-Host "[$stamp]$step $Text" -ForegroundColor $Color
    }
}

# ----------------------------------------------------------------------------
# 1) 检查全局 dsh 版本更新
# ----------------------------------------------------------------------------
$step = "[检查更新]"
print "正在检查全局 dsh 包更新 ..." Cyan

# $root : 全局 npm 包的安装根目录
$root = npm root -g 2>$null
# $pkgJson : 拼出「已安装的 dsh」的 package.json 路径
$pkgJson = Join-Path $root '@deepseek-ai\dsh\package.json'
# $installedVer : 本地当前已安装的 dsh 版本；先置空，下面检测到再填
$installedVer = $null
if (Test-Path -LiteralPath $pkgJson) {          # 若该 package.json 存在
    # 读取其中的 "version" 字段作为本地版本
    $installedVer = (Get-Content -LiteralPath $pkgJson -Raw | ConvertFrom-Json).version
}

# $latestVer : 向 npm 仓库查询的最新版本号；.Trim() 去掉首尾空白
$latestVer = (npm view @deepseek-ai/dsh version 2>$null).Trim()

if (-not $installedVer -or -not $latestVer) {
    # 情况 A：本地没安装 或 联网查不到最新版
    if (-not $installedVer) {
        print "未检测到已安装的全局 dsh，将进行全新安装。" Yellow
        $installedVer = "未安装"
    } else {
        print "无法获取最新版本号（可能无网络），跳过更新检查。" Yellow
    }
} elseif ($installedVer -ne $latestVer) {
    # 情况 B：本地版本 与 最新版 不同 → 发现更新
    print "发现新版本: $installedVer -> $latestVer，正在更新 ..." Yellow
    npm install -g @deepseek-ai/dsh@latest      # 真正执行全局更新
    # $LASTEXITCODE : 上一条外部命令（npm）的退出码；0 表示成功
    if ($LASTEXITCODE -ne 0) {
        # 更新失败：问用户是否继续；输入 Q/q 则退出
        print "全局 dsh 更新失败（退出码 $LASTEXITCODE），是否继续？" Yellow
        $cont = Read-Host "继续请按回车，退出请按 Q"
        if ($cont -match '^[Qq]') { exit 1 }
    }
    print "全局 dsh 已更新到 $latestVer。`n" Green
} else {
    # 情况 C：本地版本 == 最新版 → 已是最新，无需更新
    print "全局 dsh 已是最新版本 ($installedVer)，无需更新。`n" Green
}

# ----------------------------------------------------------------------------
# 2) 启动 dsh web（直接运行，输出原样透传；Ctrl+C 只停 npx，脚本继续执行下面代码）
# ----------------------------------------------------------------------------
$step = "[启动]"
print "正在启动 DeepSeek Harness Web ...`n" Cyan

# 本机 Ctrl+C 拦截器（用 Add-Type 编译，不依赖 PowerShell runspace，故不会崩溃）。
# 作用：按 Ctrl+C 时对本进程返回“已处理”，避免 pwsh 中止整条脚本；
#       同时把标志置 1（CtrlGuard.WasCtrlC）供下方判断。
#       子进程 npx(dsh web) 是独立进程，仍会收到 Ctrl+C 从而停止。
if (-not ('CtrlGuard' -as [type])) {
    Add-Type -TypeDefinition @'
using System;
using System.Runtime.InteropServices;
public static class CtrlGuard {
    private delegate bool HandlerRoutine(uint dwCtrlType);
    [DllImport("kernel32.dll")]
    private static extern bool SetConsoleCtrlHandler(HandlerRoutine handler, bool add);
    private static HandlerRoutine _handler;
    public static volatile int WasCtrlC;
    private static bool OnEvent(uint ctrlType) {
        if (ctrlType == 0 || ctrlType == 1) {   // CTRL_C_EVENT / CTRL_BREAK_EVENT
            WasCtrlC = 1;
            return true;                        // 已处理：本进程不被 Ctrl+C 中止
        }
        return false;
    }
    public static void Enable()  { WasCtrlC = 0; if (_handler == null) { _handler = OnEvent; SetConsoleCtrlHandler(_handler, true); } }
    public static void Disable() { if (_handler != null) { SetConsoleCtrlHandler(_handler, false); _handler = null; } }
}
'@
}

[CtrlGuard]::Enable()
try {
    $step = "[dshweb]"
    dsh web
}
finally {
    [CtrlGuard]::Disable()
}

# ----------------------------------------------------------------------------
# 3) Ctrl+C 处理：dsh 已停止 → 提示后自动关
# ----------------------------------------------------------------------------
if ([CtrlGuard]::WasCtrlC -eq 1) {
    $step = "[停止]"
    Write-Host "`n"
    print "进程成功停止，脚本将在3秒后结束。" Green
    Start-Sleep -Seconds 3
    exit 0
}

# ----------------------------------------------------------------------------
# 4) 退出码判断
# ----------------------------------------------------------------------------
$code = $LASTEXITCODE
if ($code -ne 0) {
    $step = "[异常]"
    print "dsh web 异常退出（退出码 $code）。" Yellow

    # 检查 3080 端口当前是否已有进程在监听
    # （-ErrorAction SilentlyContinue 让查询失败时不报红）
    $listener = Get-NetTCPConnection -LocalPort 3080 -State Listen -ErrorAction SilentlyContinue
    if ($listener) {
        print "检测到 3080 端口已被占用，可能已有 dsh web 在运行。" Yellow
        print "请先访问 http://127.0.0.1:3080 ，或关闭占用该端口的进程后再重试。" Yellow
    } else {
        print "常见原因：启动失败、配置错误或依赖问题。可查看上方错误信息排查。" Yellow
    }

    print "`n按回车关闭窗口" DarkGray -NoNewline; Read-Host  # 不追加冒号
    exit $code
}

```

## 命令
查看帮助 `dsh -h`
启动WebUI(可选: 指定端口) `dsh web (--port 3080)`
启动命令行对话 `dsh chat`
检查环境 `dsh doctor`
添加插件 `dsh plugin --profile web add xxx`
更新(指定)插件 `dsh plugin --profile web update (xxx)`