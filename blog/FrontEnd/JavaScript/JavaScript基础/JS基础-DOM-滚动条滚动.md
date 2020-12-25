---
title: JS基础 DOM 滚动条滚动
tags:
  - JavaScript
  - DOM
categories:
  - FrontEnd
date: 2019-11-03 17:37:15
---

## window.scroll()/window.scrollTo()

滚动窗口至文档中的特定位置。

```javascript
window.scroll(x - coord, y - coord);
```

## window.scrollBy()

在窗口中按指定的偏移量滚动文档。

```javascript
window.scrollBy(x - coord, y - coord);
```

上面两个还有个使用 `options`参数,看兼容性不是很好,记录一下吧
