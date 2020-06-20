## 交作業流程

1. 新增一個名稱為 week1 的 branch 
     ```
     $ git branch week1
     ```
     
2. 完成 week1 的作業


3.  確認 week1 的作業是不是都有編輯過，避免送出空白的作業

    ```
 $ git status
    ```
4. 確定把 week1 加入版本控制並建立一個新版本

    ```
    $ commit -am week1
    ```
5.  把 Local 端的 branch <week1> 更新到 GitHub 上 

    ```
    $ git push orgin week1
    ```
6. 在 GitHub 上點擊 Pull requests
7. 進去 Pull request 頁面後點擊 Compare & Pull requests, 把 week1 merge 到 master上
8. 到學習系統上的作業列表，放上 PR (Pull requests) 的連結，繳交作業
9. 等助教merge完後，把 GitHub上的 master 同步到 Local端。
    確認 iterm2 上位置回到 master 後，輸入指令
    
    ```
    $ git pull orgin master
    ```
10. 刪掉 Local 端的 branch week1

    ```
    $ git branch -d week1
    
    ```
    