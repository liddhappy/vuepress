---
title: ES基础 对象枚举和this
tags:
  - JavaScript
categories:
  - FrontEnd
date: 2019-10-26 23:06:26
---

## 枚举

### 使用 for in 循环

### hasOwnProperty

判断属性是不是对象的(返回 true),不包括从原型链上拿来的(返回 false)

### in

判断属性是否能够被对象使用到

```javascript
'name' in son;
//return true/false
```

## instanceof

- A 对象是不是 B 构造函数构造出来的
- 看 A 的原型链上有没有 B 的原型

```javascript
obj instanceof Son;
//return true/false
```

## 区分数组和对象的方法

- Object.prototype.toString()
- instanceof
- constructor

```javascript
obj.constructor;
obj instanceof Array;
Object.prototype.toString.call([1, 2, 3]);
```

## this

1. 函数预编译过程中`this -> window`
   AO 中会有`arguments`和`this`,`this`默认指向`window`,生成的对象会把`this`指向原型

```javascript
function test() {
  //let this = Object.create(test.prototype);
  console.log(this);
}
test();
```

2. 全局作用域里`this -> window`

3. `call()/apply()`可以改变`this`指向

4. obj.func(); func()里面的 this 指向 obj;

谁调用方法,this 就是指向谁.

### 小 demo

```javascript
var name = '222';
var a = {
  name: '111',
  say: function() {
    console.log(this.name);
  },
};
var fun = a.say;
fun();
a.say();
var b = {
  name: '333',
  say: function(fun) {
    fun();
  },
};
b.say(a.say);
b.say = a.say;
b.say();
```

第一个:`fun()`在全局中,this 是 window,所以答案是 222;
第二个:a.asy()是 a 去调用方法,所以答案是 111;
第三个:b 调用 b 中的 say,但是 say 只是执行 fun()而已,fun()是属于全局,所以答案是 222;
第四个:b 调用,this 指向 b,所以答案是 333;
