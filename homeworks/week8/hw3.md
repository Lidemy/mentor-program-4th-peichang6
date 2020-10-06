## 什麼是 Ajax？

Ajax (Asynchronous JavaScript and XML)
可以不用換頁拿到想要的資料。
因為在伺服器和瀏覽器之間交換的資料大量減少，伺服器回應更快了。
## 用 Ajax 與我們用表單送出資料的差別在哪？

回傳 response 時， 使用 Ajax 伺服器可以投過瀏覽器直接把 response 傳給 JavaScript ，不會換頁 ; 用表單送出後，伺服器會先把 response 給瀏覽器， 瀏覽器會直接 render 此 response ，然後跳轉頁面。
所以最大區別是：表單傳送的方式需要重新整理頁面，而Ajax可以在不重新整理頁面的情況下執行資料請求或者提交資料等操作，

## JSONP 是什麼？
JSON with Padding, 
因為 script 標籤不受同源政策限制，可以利用這個特性做跨網域請求。

## 要如何存取跨網域的 API？
在 response 的 header 加上 Access-Control-Allow-Origin 來允許跨網域的 request 存取

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
第四週是使用 node.js，等於直接用作業系統發出 request 給 server，就算不同網域也可以存取到東西。
這週我們是用瀏覽器上的 JavaScript 透過瀏覽器發出 request 給 server，但因瀏覽器有同源政策的限制，當我們要存取跨網域的資源時，需要透過 CROS來解決跨網域的問題。

