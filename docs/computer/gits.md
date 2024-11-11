# Git教程

> [!info]
> 本教程仅供具有一定代码基础的爱好者学习借鉴
> 若对powershell等交互方式不熟悉, 请自行学习
> 对于执行任何本教程未包含操作所造成的后果, 作者不予负责

> [!warning]
> 本页面尚未编辑完成

## 初始化仓库
- 克隆已有仓库 `git clone <remote-repo>`
- 新建仓库
    1. 初始化git项目 `git init`
    2. 在托管网站新建仓库并记录远程仓库地址
    3. 添加远程仓库地址 `git remote add <remote-repo> <repo-name>`


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
9. 若需合并至其他分支，请访问远程仓库提出 Pull Request