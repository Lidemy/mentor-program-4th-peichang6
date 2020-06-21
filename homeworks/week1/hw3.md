## 教你朋友 CLI


**CLI, Command Line Interface** 照字面翻就是命令行介面，是一個純文字應用程式，用來當作是跟電腦溝通的介面，可以編輯、下載或是處理電腦中文件檔案等等。 大多數的人習慣用的是 **GUI, Graphical User Interface** 圖形化使用者介面，可以較方便使用，因為不需要記住指令也可以操作。但 CLI 比 GUI 節省系統的資源，所以 CLI 操作起來也比較快。

##### 現在就來教 h0w 哥一些基本指令吧
---
* pwd (print working directory)： 顯示目前所在位置。
* ls (list)： 列出現在資料夾下的檔案
  ls -al ： 可列出檔案不同形式細節
* cd (change directory) : 切換資料夾
  cd .. : 回到上一層
* man (manual) : 使用說明手冊，按 q 可離開
* touch : 建立檔案， 如果是已存在的檔案則是更改時間
* rm (remove) : 刪除
  rmdir : 刪除沒有檔案的資料夾
  rm -r <資料夾名> : 可以刪除資料夾及其底下所有檔案
  rm -f <資料夾名>： 強制刪除
* mkdir (make directory) : 可以建立資料夾
* mv (move) : 移動檔案 ` $ move 檔案 / 絕對路徑`
* mv (move) : 改名 ` $ move 原檔名 新檔名`
* cp (copy) : 複製
* cp -r 資料夾1 資料夾2 :複製資料夾 1 到資料夾 2
* vim : 文字編輯器
        i 進入編輯模式
        esc 進入普通模式
        :q 退出
       :wq 存檔後退出
       :q! 不存檔直接退出
* cat : 可直接看到檔案內容，不需進入 vim
* grep： 抓取特定關鍵字 `$ grep 字串 檔名`
* wget : 下載檔案

##### h0w 哥的願望
***用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案***

---
1. 打開 Terminal 應用程式
2. 建立叫作 wifi 的資料夾 
    ```  
    $ mkdir wifi
    ```
4. 進入 wifi 資料夾
    ```
    $ cd wifi
    ```
5. 建立叫作 afu.js 的檔案
    ```
    $ touch afu.js
    ```
