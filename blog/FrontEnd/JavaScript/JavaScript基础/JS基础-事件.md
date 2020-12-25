---
title: JS基础 事件
tags:
  - JavaScript
  - DOM
  - DOM事件
categories:
  - FrontEnd
date: 2019-11-04 21:29:18
---

先来几个链接
[事件介绍 MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)

[addEventListener() MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

[事件参考 MDN](https://developer.mozilla.org/zh-CN/docs/Web/Events)

## 绑定事件

### on+类型(句柄)

1. 兼容性好
2. 同一事件只能绑定一次(后面覆盖前面)
3. 基本等同于在行间写`on`+类型属性
4. 不推荐使用

```javascript
div.onclick = function() {
  console.log('不推荐使用');
};
```

```html
<div onclick="alert('手欠?');">点我试试</div>
```

### EventTarget.addEventListener()

1. IE9 以下不兼容
2. 可以绑定多个事件(前提是事件用的函数地址不一样)

[addEventListener() MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

```javascript
btn.addEventListener('click', click, false);
function click() {
  alert('点击了按钮');
}
```

### obj.attachEvent()

1. IE 特有属性
2. 可以绑定多个事件

```javascript
btn.attachEvent('onclick', click);
```

## 运行环境(this)

1. `on + type` 的 `this` 是调用的 Element 自己
2. `addEventListener`同上
3. `attachEvent` 指向 window(必要时需要手动修改 this)

## 解除事件绑定

每一种绑定有对应的解除方法

1. `on+type` 直接赋值空函数,例如 `onclick = null;`
2. `removeEventListener('同样的事件',同样的函数地址,对应布尔)`;
3. `detachEvent('on'+事件,函数)`

注意:绑定的匿名函数,不能够解除掉
