---
title: node模块和ES6模块的导出导入
tags:
  - JavaScript
  - nodejs
categories:
  - FrontEnd
  - ES6
date: 2020-01-14 13:53:46
---

## 前言

Javascript 程序本来很小——在早期，它们大多被用来执行独立的脚本任务，在你的 web 页面需要的地方提供一定交互，所以一般不需要多大的脚本。过了几年，我们现在有了运行大量 Javascript 脚本的复杂程序，还有一些被用在其他环境（例如 Node.js）。

因此，近年来，有必要开始考虑提供一种将 JavaScript 程序拆分为可按需导入的单独模块的机制。Node.js 已经提供这个能力很长时间了，还有很多的 Javascript 库和框架 已经开始了模块的使用（例如， `CommonJS` 和基于 `AMD` 的其他模块系统 如 `RequireJS`, 以及最新的 `Webpack` 和 `Babel`）。

好消息是，最新的浏览器开始原生支持模块功能了，and this is what this article is all about. 这会是一个好事情 — 浏览器能够最优化加载模块，使它比使用库更有效率，做额外的客户端进程和 round trips。

## node 模块系统

```javascript
var hello = require('./hello');
hello.world();
```

上面代码指从`hello.js`(默认后缀.js)中导入模块并命名为 hello

```javascript
exports.world = function() {
  console.log('Hello World');
};
```

上面的代码就是`hello.js`中对 world 方法的导出

有时候我们只是想把一个对象封装到模块中，格式如下：

```javascript
module.exports = function() {
  // ...
};
```

例如:

```javascript
//hello.js
function Hello() {
  var name;
  this.setName = function(thyName) {
    name = thyName;
  };
  this.sayHello = function() {
    console.log('Hello ' + name);
  };
}
module.exports = Hello;
```

这样就可以直接获取到这个对象了

```javascript
//main.js
var Hello = require('./hello');
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();
```

### 结语

`module.exports = Hello;`  
`main.js`导入的是 Hello 这个构造函数(对象)

而`exports.world = function(){}`  
`main.js`导入的是 exports 这个对象,world 只不过是 exports 上的方法

> exports 和 module.exports 的使用
> 如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似 class，包含了很多属性和方法)，就用 module.exports。

## ES6 模块导出导入

### 导出 export

[MDN 导出](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export)

### 导入 import

[MDN 导入](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)
