## 請簡單解釋什麼是 Single Page Application
Single Page Application，單頁式應用，意即再不換頁的情況下，在網頁上執行任何動作，也就是不會在等待期間出現空白的畫面，因為全部的動作都是在同一個頁面上發生。
SPA 是使用 AJAX 非同步請求去獲取資料，在資料回來後僅更新部份頁面，而不是發送請求到 Server， Server 再回傳新的頁面。


## SPA 的優缺點為何
優點：  
* 當你訪問 SPA 時，瀏覽器會先下載整個應用程式的資料。因此，接下來只有新的資料會在瀏覽器及伺服器間傳輸，所以速度跟響應能力會較 MPA 好。
* 使用者更佳的體驗
* 


缺點：使用 搜尋引擎會找不到該網頁，或是只看到一堆程式碼。因為 SPA 使用 JavaScript 執行，它只在使用者互動後才載入內容。因此，當網路爬蟲試圖在搜尋引擎中索引頁面時，SPA 看起來就像一個沒有內容的空頁面。解決方法是第一次先在 server side render，之後的操作都改用 client side render，就可以保證搜尋引擎也能爬到完整的 HTML。

### **參考資料**
[Single-Page Apps vs Multi-Page Apps: What To Choose For Web Development](https://www.thirdrocktechkno.com/blog/single-page-apps-vs-multi-page-apps-what-to-choose-for-web-development/)
[（中譯版本）](https://www.mdeditor.tw/pl/pGDD/zh-tw)  
[前後端分離與 SPA](https://blog.techbridge.cc/2017/09/16/frontend-backend-mvc/)  
 [跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](https://medium.com/@hulitw/introduction-mvc-spa-and-ssr-545c941669e9)
## 這週這種後端負責提供只輸出資料的 API，前端一律都用 Ajax 串接的寫法，跟之前透過 PHP 直接輸出內容的留言板有什麼不同？
透過 AJAX 串 API 的寫法，網頁不用重新從 server 端載入整個渲染一遍，串 API 的寫法， Server 只需要傳送資料給客戶端，客戶端收到資料後在前端進行處理，對 Server 的負擔依賴較小。
而用 PHP 後端輸出內容的話，資料跟 HTML 在 server 端渲染完後送給瀏覽器撈資料及處理資料都在 Server 端進行。