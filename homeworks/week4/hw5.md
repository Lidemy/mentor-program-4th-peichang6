## 請以自己的話解釋 API 是什麼
API 就是一個交換資料的介面，功能在於溝通。假設我們需要從某個網站拿取資料，透過 API 去傳送我們的 request，那網站要給我們所需要的資料時也是透過 API 來給我們 response 。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹

* 409 (Conflict) 表示請求與伺服器目前狀態衝突。衝突通常發生於 PUT 請求。如上傳一個已經有舊版本存在於伺服器的檔案而導致版本控制衝突時，會回復一個 409 錯誤。
* 413 (Payload Too Large)  例如: 上傳檔案至 Server 時，即可能超出大小限制，而使 Server 回應 413 (Payload Too Large)，且 Server 可能關閉連接，以防止 Client 繼續請求。
* 507 (Insufficient Storage) — 儲存空間不足。Server 無法儲存 用於完成請求的 表示 (representation)，因此請求方法無法執行於目標資源上。

#### 參考資料：

[HTTP 狀態碼 (Status Codes) 鄭中勝](https://notfalse.net/48/http-status-codes#413-Payload-Too-Large-8212)

[MDN HTTP 狀態碼](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status)
## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

說明 | Method | Path | 參數 | 範例
----|--------|------|-----|----
回傳所有餐廳資料| GET |  /restaurants | _limit:限制回傳資料數量	 | /restaurants?_limit=10
回傳單一餐廳資料| GET |  /restaurants/:id |  無 | /restaurants/:2
刪除餐廳 | DELETE | /restaurants/:id |  無 | 無  
新增餐廳 | POST | /restaurants |  無 | 無
更改餐廳 | PATCH | /restaurants/:id |  name: 餐廳名 | 無 