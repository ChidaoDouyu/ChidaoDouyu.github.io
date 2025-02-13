# Git教程

> [!info]
> 本教程仅供具有一定代码基础的爱好者学习借鉴
> 若对powershell等交互方式不熟悉, 请自行学习
> 对于执行任何本教程未包含操作所造成的后果, 作者不予负责

> [!warning]
> 本页面尚未编辑完成

## 配置
- 查看全局配置 `git config -l --global`
- 修改配置 `git config [option] <config> <custom>`
- 使用ssh秘钥 `git config --global user.signingkey ~/.ssh/id_ed25519.pub`

## 初始化仓库
- 克隆已有仓库 `git clone <remote-repo>`
- 新建仓库
    1. 初始化git项目 `git init`
    2. 追踪项目文件 `git add ./*`
    3. 提交项目文件 `git commit * -m '初始化仓库'`
    4. 在托管网站(Github等)新建仓库并记录远程仓库地址
    5. 添加远程仓库地址 `git remote add <remote-repo> <name>`
    6. 推送仓库至远程仓库 `git push`


## 远程仓库管理
- 添加远程仓库地址 `git remote add <remote-repo> <repo-name>`
- 查看全部远程仓库地址 `git remote show`
- 


## 分支管理
- 新建并切换到分支 `git checkout -b <new-branch>`
- 切换到分支 `git switch <branch>`


## 工作流程
1. 拉取最新更新 `git pull`
2. 查看当前分支 `git branch -v`
3. (可选) 新建并切换到分支 `git checkout -b <new-branch>`
5. 进行工作
6. 添加文件至暂存区 `git add .`
7. 提交文件至本地库 `git commit -m "message"`
8. 推送本地分支至远程库 `git push <name> <branch>`
9. Pull Request