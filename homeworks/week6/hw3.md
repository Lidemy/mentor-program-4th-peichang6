## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. ` <form> `<br>
做為表單的容器，裡面還會有不同用途的其他標籤來建構出完整的表單內容。  
action: 用來指定一個位址 (URL)，這個位址是告訴瀏覽器 (browser) 當 user 按送出表單後，要將表格的內容送去哪邊。
method: 用來指定資料傳輸時用的 HTTP 協議，最常用的是 get 或 post
`<form action="/formprocess.php" method="post">`這個例子中，我們建立了一個表單，且宣告這個表單的資料會被用 http post 的方法送到 "/formprocess.php" 這隻遠端程式。

2. `<script> `  
執行 JavaScript 程式碼
3. `<hr>`    
水平分隔線

參考資料：[https://www.fooish.com/html/](https://www.fooish.com/html/)

## 請問什麼是盒模型（box modal）
每個 html 的元素都是一個 Box Model， 主要裡包含了 margin, border, padding, contant，合在一起就是我們看到的網頁內容。示意圖如下：
![](https://static.coderbridge.com/img/peichang6/b6c89a36f37045a7866a81b95e8c5882.png)

**Box Model 排版跑掉怎麼辦?**  
可以使用box-sizing。 box-sizing的功能是用來調整區塊的內距與邊框計算方式，避免因為設定 padding 、 border 後，整個 div區塊大小都變了。  
content-box：預設值，實際寬高＝所設定的數值＋border＋padding

border-box：實際寬高＝所設定的數值(已包含border和padding)

所以一樣的參數下，content-box 看起來會比 border-box 還大。

參考資料：  
1. [CSS3 box-sizing 屬性
](https://www.wibibi.com/info.php?tid=CSS3_box-sizing_%E5%B1%AC%E6%80%A7)  
2. [讓控制版面更容易－CSS的box-sizing
](https://www.webdesigns.com.tw/CSS_box-sizing.asp)



## 請問 display: inline, block 跟 inline-block 的差別是什麼？
1. 
block，一個元素一行，可調整任何東西, div、p、h1 的 display 預設都是 block。
2. inline，元素都在同一行，無法調整寬高及邊距, span、a 的 display 預設都是 inline。調整 padding、margin 時只有跟左右的元素距離會動到，上下元素間不變。
3. inline-block，對外像 inline，可併排在同一行; 對內像 block，可調整任何屬性


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

1. static  
是所有元素的預設值
2. relative  
   設定 top、 bottom、 left、 right，可調整元素出現在相對於原本應該出.      現的位置上，但不會動到其他元素的位置。
3. fixed  
相對於瀏覽器做定位，更精確地說是相對於 viewport 做定位。
加上這個參數後，瀏覽器移到哪裡，都會固定出現在一樣的地方。
4. absolute  
往上找不是 static 的元素，即為參考點。
加上 absolute 後，該元素會從原本正常排列裡排除，下一個元素會遞補上來原本正常排列裡的位置，所以會改變其他元素的位置。


參考資料：  
1. [CSS relative? absolute? 傻傻分不清楚
](https://ithelp.ithome.com.tw/articles/10212202)  
2. [FE101 Part4：定位（position)](https://lidemy.com/courses/enrolled/390445)

