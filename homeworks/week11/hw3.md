## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫  
加密只要有解密的方法，就會得到原本的密碼（可逆）。
雜湊是多對一的關係，無法透過還原去找到密碼（不可逆的算法），
兩個不一樣的密碼對應到同一個雜湊，叫做碰撞。

經過雜湊後存入資料庫的密碼，就不會讓人知道原本的密碼是什麼了，增加安全性。

**參考資料：**  
[一次搞懂密碼學中的三兄弟 — Encode、Encrypt 跟 Hash](https://medium.com/starbugs/what-are-encoding-encrypt-and-hashing-4b03d40e7b0c)
[[淺談] 編碼(encoding) vs 加解密 vs 雜湊(Hash)](https://dotblogs.com.tw/daniel/2019/05/06/223004)

## `include`、`require`、`include_once`、`require_once` 的差別

include 、 incluse_once: 都是用來引入檔案，後者可避免重複引入，故建議用後者。引不到檔案會出現錯誤息，但程式**不會**停止。
require 、 require_once: 都是用來引入檔案，後者可避免重複引入，故建議用後者。引不到檔案會出現錯誤息，但程式**會**停止。

require() 通常来導入静態的内容（例如配置文件，全局變量等静態值），而 include() 则適合用来導入動態的程序代碼。

**參考資料：**  
[PHP 文件导入 require、require_once、include、include_once 区别](https://blog.mimvp.com/article/7510.html)

## 請說明 SQL Injection 的攻擊原理以及防範方法

攻擊原理：在輸入的字串之中夾帶SQL指令，在未防範下，那麼這些夾帶進去的惡意指令就會被資料庫伺服器誤認為是正常的SQL指令而執行，因此遭到破壞或是入侵，進而竊取資料。

防範方法： 使用 Prepared Statement，是一種用於資料庫查詢時的技術，使用時會在SQL指令中需要填寫數值的地方用參數代替。
先定義所有的 SQL code，之後再傳入每個 parameter。這樣的程式撰寫方式讓資料庫可以辨別出哪些是 SQL code，哪些是傳入的 parameter 或 data，使得惡意使用者即使輸入例如單引號等惡意的 input 也無法改變 query 的內容。

**參考資料：**  
[什麼是Prepared Statement，為什麼要使用它？](https://weikaiwei.com/web/what-is-prepared-statement/)  
[如何在 Java 網站應用程式中防範 SQL Injection](http://neuron.csie.ntust.edu.tw/homework/101/CC/homework/homework2-1/B9807002-1/B9807002.htm)



##  請說明 XSS 的攻擊原理以及防範方法

Cross-site scripting，跨網站指令碼。
允許惡意使用者將程式碼注入到網頁上，可以藉此偷走 cookie、身份...等。
攻擊者可以利用跨網站入侵字串漏洞，在受害者的瀏覽器執行腳本(script)，攔截使用者的sessions、破壞網站、插入惡意的內容、進行釣魚攻擊、甚至利用腳本惡意軟體。
防範方法： 使用 htmlspecialchars 來跳脫字元， `htmlspecialchars($str, ENT_QUOTES);`


## 請說明 CSRF 的攻擊原理以及防範方法

 Cross Site Request Forgery，跨站請求偽造，又稱作 one-click attack 。可以再使用者不知情的狀況下，透過一個連結帶上自己 cookie 或 session 存的通行證， 去送出自己不知情的請求。
 
防範方法：可以從多方面來看  
* 使用者的防禦：每次使用完網站就登出。  
* Server 的防禦：  

  1.  檢查 request 的 header 裡面的一個欄位叫做 referer，如果不是合法的 domain，直接 reject 掉即可。  
  2. 加上圖形驗證碼、簡訊驗證碼。（每執行一次就要打一次驗證碼，很麻煩）  
  3. 加上 CSRF token，需要把產生的 token 存放在 server 裡。  
  4. Double Submit Cookie，由 server 產生一組隨機的 token 並且加在 form 上面，當使用者按下 submit 的時候，server 比對 cookie 內的 csrftoken 與 form 裡面的 csrftoken，檢查是否有值並且相等，就知道是不是使用者發的了。  
  5. client side 的 Double Submit Cookie，由 client side 來生 csrf token。就不用跟 server api 有任何的互動。  
* browser 本身的防禦: SameSite cookie

**參考資料：**  
[讓我們來談談 CSRF](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)

  