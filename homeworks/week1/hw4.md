## 跟你朋友介紹 Git

菜哥提到的版本問題確實可以用 git來解決喔，讓我大致為你解釋 Git版本控制的概念及教你如何使用吧。

## 什麼是 Git & GitHub
Git 版本控制的程式  
Github 放 Git repository 的地方

## 版本控制流程

![how does it works](https://static.coderbridge.com/img/techbridge/images/kdchang/cs101/git-workflow.png)

**working directory** 是編輯笑話的工作資料夾   
**staging area** 暫存區  
**localrepo** 是你在自己電腦端放笑話的檔案庫   
**remoterepo** 遠端檔案庫，可以想成是 GitHub

一般來說菜哥在編輯笑話腳本會在 **working directory** 裡工作， 編輯完後存的檔案會先放在 **staging area**， 當你覺得這個版本沒問題後會 commit 到 **localrepo** 裡，但 Git 這個程式並不會自動幫你把遠端的檔案庫也更新，所以最後要自己手動 push 到 **remoterepo**。

## 實際操作
1. 建立一個菜哥笑話大集合的資料夾，並移動到其下，因為接下來這個資料夾會是我們做版本管理的工作區
2. **` git init `** 在工作資料夾下建立一個檔案庫。
3. **`ls -al`** 多了一個 .git 的檔案，我們可以開始對文件做版本管理了。

![git init](https://imgur.com/ng3bkRy)

4. 編輯完笑話後，存擋。
5. **`git status`** 檢視目前 git 狀態會發現檔案是在 untracked 的狀態下，也就是還沒進到 staging area 暫存區。

![status_untracked](https://imgur.com/o6hXChR)

6. **`git add`** 把檔案加入版本控制, 檔案已存入 staging area 暫存區

![staging area](https://imgur.com/tkd2z8C)

7. **`git commit -m`** 輸入對這個版本的簡單描述，可以記錄一下這版改了什麼
8. **`git log`** 查看版本進度，可以看到完整版本號碼，檔案已放在 localrepo

![localexpo](https://imgur.com/0WHielk)

到這邊為止，都是在自己的電腦這端操作，如果菜哥要把檔案分享給多人協作，可以丟到遠端 GitHub 的檔案庫去，步驟如下：

1. 申請 GitHub 帳號，並新增一個名稱為 joke 的 repository
2. 將已在 localrepo的檔案庫 push 到 GitHub 上. 

    ```
    $ git remote add origin https://github.com/bigtsai/joke.git 
    
    $ git push -u origin master```

### 如何管理協作夥伴桃貴的檔案呢？
1. **`git clone`** 請桃貴先複製菜哥的檔案庫到自己的電腦上
2. **`git checkout -b taogui`** 建一個自己的分支，等菜哥看過沒問題後再由他來合併。
3. **`git commit -am`** 把編輯好的檔案放到 localrepo
4. **`git push orgin`** 將檔案庫 push 到 GitHub上
5. 到 GitHub 上 發出 Pull requests 
6. 菜哥同意後就可以合併了
    

參考來源
[Git 與 Github 版本控制基本指令與操作入門教學](https://blog.techbridge.cc/2018/01/17/learning-programming-and-coding-with-python-git-and-github-tutorial/)

