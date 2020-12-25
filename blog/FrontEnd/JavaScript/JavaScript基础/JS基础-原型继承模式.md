---
title: ES基础 原型继承模式(开发封装函数)
tags:
  - JavaScript
categories:
  - FrontEnd
date: 2019-10-25 23:24:40
---

## 基于原型的继承

封装的函数

```javascript
function inherit(Target, Origin) {
  function F() {}
  F.prototype = Origin.prototype;
  Target.prototype = new F();
}

//使用这个函数
Father.prototype.lastName = 'Yin';
function Father() {}
function Son() {}

inherit(Son, Father);
let son = new Son();
let father = new Father();
```

### 解释这个函数

当要两个构造函数使用一个原型时可以这样赋值

```javascript
Father.prototype.lastName = 'Yin';
//直接把Father的原型地址给Son
Son.prototype = Father.prototype;
function Father() {}
function Son() {}
```

这样的其实没啥问题,就是想给 Son 的原型单独设置一些属性时,因为两个是同一个地址,所以 Father 的值也会修改
采用上面封装的函数原理是这样的
Son 的原型是 new F 产生的,而 F 函数的原型是 Father 的原型(地址是一样的)
这样就断了 Son 和 Father 的直接联系,修改 Son 不会影响到 Father

## 进阶版

```javascript
function inherit(Target, Origin) {
  function F() {}
  F.prototype = Origin.prototype;
  Target.prototype = new F();
  Target.prototype.constuctor = Target;
  Target.prototype.uber = Origin.prototype;
}
```

新加了这两句

```javascript
Target.prototype.constuctor = Target;
Target.prototype.uber = Origin.prototype;
```

原因是,原来封装的函数

`son.__porto__`指向的是`Father()`,而不是`Son()`导致无法直接观察到他是怎么构造来的
然后,第二句记录一下真正继承于谁,以方便以后操作.(简称超类);

## 闭包的运用

```javascript
let inherit = (function() {
  var F = function() {};
  return function(Target, Origin) {
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constuctor = Target;
    Target.prototype.uber = Origin.prototype;
  };
})();
```

这样函数 F 就不会被发现(还是没明白有什么用啊)
