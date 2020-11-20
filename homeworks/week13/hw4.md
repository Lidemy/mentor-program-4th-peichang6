## Webpack 是做什麼用的？可以不用它嗎？  
Webpack 是一套模組打包工具。  
在 Node.js 上可以使用 CommonJS 作為 JavaScript 語言的模塊化解決方案，也就是 `module.exports` 跟 `require`，但瀏覽器不支援這樣的模組機制。  
後來出現了 ES6 規範的標準化模組，也就是` import` 和 `export`，但支援度並不好，IE 就不支援。  
為了要解決瀏覽器原生的模組機制會碰到許多問題（相容性、無法兼容 npm 等等），可以使用 Webpack。  
Webpack 把模組的概念從 JavaScript 向外延伸，把「任何資源」都視成一個模組，不論是 CSS、SASS、圖片都可以被視為一個資源模組，可以透過不同的 loader 把各種資源載入到 Webpack 打包成一個 JavaScript 檔案。  
假設今天要開發的網站規模不大、不需要模組化開發方式或也不太需要使用 library，在這個情況下使用 webpack 反而有點多此一舉，我們應該根據專案的類型、規模大小來決定使用什麼工具。

參考資料：  
[webpack 新手教學之淺談模組化與 snowpack](https://blog.huli.tw/2020/01/21/webpack-newbie-tutorial/)  
[尋覓 webpack 鐵人賽系列](https://ithelp.ithome.com.tw/articles/10253358)
## gulp 跟 webpack 有什麼不一樣？
gulp 是任務管理工具，webpack 是模組打包工具。
gulp 本身做不到打包的個任務，但他有 webpack 的 plugin可以實現打包的功能。 
webpack 主要是做打包，在經過打包後可以支援原生不支援的東西，但有一些. task 是做不到的，例如：校正時間、定時 call api。

另外， gulp 比較偏向命令式的編寫設定，所有的編譯動作的邏輯都要自己編寫，webpack就偏向設定，設定清楚明瞭。

## CSS Selector 權重的計算方式為何？
**!important** > **inline style** > **ID** > **Class** > **Element** > *

 
 `＊` Universal selector：通用選擇器，針對全部的 html 做樣式編輯。
  `Element`: div, p, ul, li, header, footer...等  
  `Class`: `<div class="animal">`  在 css 裡編輯前面加 `.`
  `ID`: 如`<div id="div1">`，在 css 裡編輯前面加 `#`
  `inline style attribute`: 即在 html 裡寫上想要的樣式  
  `!important`: 權重最高，但 id的important 可覆蓋過 class的important，也就是說如果有兩個 important，就要看誰的權重高。  
  另外，psuedo-class(偽類)與attribute（屬性選擇器）的權重是跟 `Class`一樣。
  
  參考資料：  
  [Day20：小事之 CSS 權重 (css specificity)](https://ithelp.ithome.com.tw/articles/10196454)  
  [你对CSS权重真的足够了解吗？](https://juejin.im/post/6844903608199151630)
  
