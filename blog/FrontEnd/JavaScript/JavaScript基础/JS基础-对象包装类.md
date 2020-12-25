---
title: ES基础 对象包装类
tags:
  - JavaScript
categories:
  - FrontEnd
date: 2019-10-23 22:25:08
---

## 对象的创建方法

1. `var obj = {}` 对象字面量/对象直接量 plainObject
2. 构造函数
   1. 系统自带构造函数 `new Object()`
   2. 自定义构造函数 `new 构造函数()`

## 构造函数

- 构造函数通常采用大驼峰命名法
- 使用时需要使用关键词 new

```javascript
function Student(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.grade = 2017;
}

var stu = new Student('hanhan', 18, '男');
```

## 构造函数的基本原理

大概形式

1. 隐式的`var this = {}`
2. this.name = xxx;
3. 隐式的`return this;`

```javascript
function Student(name, age, sex) {
  //var this = {}
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.grade = 2017;
  //return this;
}

var stu = new Student('hanhan', 18, '男');
//可以直接用
console.log(new Student('xiaowang', 18, '女').name);
```

没用的小知识点
所以可以这样改

```javascript
function Student(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.grade = 2017;
  return {};
}

var stu = new Student('hanhan', 18, '男');
```

`new Student`始终是`{}`,但是改成`return 123;`这样的非对象,这个 return 会被忽略,任然使用`return this`

## 原始值-对象

例如:

```javascript
new Number(123);
new String('abc');
```

这些对象有直接的属性和方法,比如

```javascript
Number.MAX_VALUE;
```

还有实例化后的也有方法和属性,如

```javascript
let demo = new String('abcd').length;
```

abcd 是对象,有属性不难理解,但是下面的不用 new 呢

```javascript
let demo = 'abcd'.length;
//demo = 4;
```

但是原始值是没有方法的,具体看下面包装类

## 包装类

```javascript
var str = 'abcd';
```

```javascript
str.length = 2;
```

原始值没有属性,但系统会创建一个 abcd 对象
new String('abcd').length = 2;
完成操作后就立即删除
delete

```javascript
console.log(str);
```

所以 str 还是 abcd,而不是和数组一被截断
