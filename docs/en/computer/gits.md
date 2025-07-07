---
article: true
title: Git Tutorial
--- 

> [!caution]
> This tutorial is only for people who has the code basis.
> For any consequence, the author is not responsible.

> [!warning]
> This page haven't been completed.

This article provides part of using tutorial and command explaination for Git.

<!-- more -->

## Config
- View the global configuration `git config -l --global`
- Modify the configuration `git config [option] <config> <custom>`
- Use the SSH key `git config --global user.signingkey ~/.ssh/id_ed25519.pub`

## Start a repository
- Clone an existing repository `git clone <remote-repo>`
- Create a new repository
    1. Initialize the git project `git init`
    2. Keep track of project files `git add ./*`
    3. Commit the project files `git commit * -m 'Initialization'`
    4. Create a remote repository on Github/other website and copy the domain
    5. Record the domain of the remote repository `git remote add <remote-repo> <name>`
    6. Push files to the remote repository `git push`


## Remote repository management
- Record new remote repository `git remote add <remote-repo> <repo-name>`
- View all remote repository `git remote show`
- 


## Branch Management
- Create and switch to the branch `git checkout -b <new-branch>`
- Switch to branch `git switch <branch>`


## Work Flow
1. Pull newest update `git pull`
2. View current branch `git branch -v`
3. (Optional) Create and switch to the branch `git checkout -b <new-branch>`
5. Work
6. Add the files to staging area `git add .`
7. Commit the files `git commit -m "message"`
8. Push the local branch to remote repository `git push <name> <branch>`
9. Pull Request