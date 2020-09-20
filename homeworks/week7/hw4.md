## 什麼是 DOM？
Document Object Model的簡寫，中文為文件物件模型，建立目的是要讓各家瀏覽器有相同的文件物件模型標準。可以理解 DOM 是把一個 document 轉換成一個 object。可以當作 HTML 跟 JavaScript 之間的橋樑，讓我們可以用這個橋樑去改變畫面上的東西。在DOM的標準下，一份文件中所有的標籤，包括文字，都是一個物件，這些物件以文件定義的結構，形成了一個樹狀結構如圖：

		
圖片來源：[W3C DOM 簡介](https://openhome.cc/Gossip/JavaScript/W3CDOM.html)
## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
順序為   
1. 先捕獲，再冒泡   
2. 當事件傳到 target 本身，沒有分捕獲跟冒泡
捕獲： DOM 的事件在傳播時，會先從 window 開始往下傳遞到 target，這邊你如果加上事件的話，就會處於CAPTURING_PHASE，捕獲階段。
冒泡： 會從 target 一路傳回 window ，這時候叫做BUBBLING_PHASE，冒泡階段。
`addEventListener` 這函數其實有第三個參數，true代表把這個 listener 添加到捕獲階段，false或是沒有傳就代表把這個 listener 添加到冒泡階段。

## 什麼是 event delegation，為什麼我們需要它？
如果我們要對多個元素作一樣的事件時（比如說點擊按鈕後印出該按鈕的文字），可以利用 event delegation 事件代理機制，把事件放在他的 parent層，委託 parent 來觸發函式。這樣的機制可以減少 listner 的數量，也可以用來處理動態新增的事件。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
event.preventDefault()： 阻止預設行為，例如對超連結來說，就是阻止跳到要連結的網址; 對 submit 按鈕來說，就是阻止送出。
event.stopPropagation()：讓事件的傳遞不再繼續，加在哪邊，事件的傳遞就斷在哪裡，不會繼續往下傳遞。
preventDefault 跟 JavaScript 的事件傳遞「一點關係都沒有」，加上這一行之後，事件還是會繼續往下傳遞。
