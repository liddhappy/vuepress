---
title: DOM操作 节点选择
tags:
  - JavaScript
  - DOM
categories:
  - FrontEnd
  - DOM
date: 2019-10-31 20:51:08
---

## document 选择

document 代表整个文档(在 html 之上)

DOM 获得的'数组'基本上都是类数组

[MDN document](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)

`.getElement`获得的是一个
`.getElements`获得的是一个类数组

1. document.getElementById(String id)
2. Document.getElementsByTagName()
3. document.getElementsByName()
4. Document.getElementsByClassName()
5. document.querySelector()
6. document.querySelectorAll()

注: `querySelectorAll`选择元素不会实时更新
`getElementsByTagName()`选择的元素会实时更新
`getElement`单个选择似乎是不能实时的,选一组好像是可以实时的

```javascript
let div = document.getElementsByTagName('div');
let demo = document.getElementsByClassName('demo')[0];
let div1 = document.querySelectorAll('div');
```

## 遍历节点树

[MDN Node](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)

- parentNode 父节点 (最顶端的是#document)
- childNodes 子节点们
- firstChild 第一个子节点
- lastChild 最后一个子节点
- nextSibling 后一个兄弟节点
- previousSibling 前一个兄弟节点

## 基于元素节点的遍历

- parentElement 父元素节点
- children 子元素节点们
- node.chlidElementCount === node.children.length (所有有卵用啊)
- Element.firstElementChild 第一个元素子节点
- lastElementChild 最后一个元素子节点
- nextElementSibling/previousElementSibling 后一个/前一个兄弟元素

## 节点的属性

[MDN Node](https://developer.mozilla.org/zh-CN/docs/Web/API/Node)

- nodeName 节点名称(只读)
- nodeValue 文本和注释节点的内容(可写)
- Node.nodeType 节点类型(返回的是节点类型的 Number 值),可上 mdn 查看具体
