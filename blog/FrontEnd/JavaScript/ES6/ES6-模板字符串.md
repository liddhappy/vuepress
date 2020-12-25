---
title: ES6 模板字符串
tags:
  - JavaScript
categories:
  - FrontEnd
  - ES6
date: 2020-01-11 18:22:26
---

## 语法

```javascript
`string text` //单行文本
`string text line 1
 string text line 2` //多行文本
`string text ${expression} string text`; //带表达式

tag`string text ${expression} string text`; //带标签的表达式,tag标签通常是函数
```

```javascript
`这是`一段很短的`文字` //模板字符串支持嵌套
```

```javascript
`1 + 3 = ${1 + 3}`; //使用${}插入表达式
```

注:

- 表达式,顾名思义就是简单的变量,函数调用,算数、逻辑计算,三目运算等等。切记不能使用 if,for 等高级语法
- 表示`时使用\转译

## 嵌套举例

**ES5**

```javascript
var classes = 'header';
classes += isLargeScreen()
  ? ''
  : item.isCollapsed
  ? ' icon-expander'
  : ' icon-collapser';
```

**ES6 嵌套**

```javascript
const classes = `header ${
  isLargeScreen() ? '' : `icon-${item.isCollapsed ? 'expander' : 'collapser'}`
}`;
```

## 带标签的模板字符串

### 参数 strings

**函数的第一个参数是字符串数组**

```javascript
function myTag(string) {
  console.log(string);
}
myTag`this  is a fish`;
//string = ['this is a fish'];
```

**模板中开头或者结尾有表达式**

```javascript
function myTag(string) {
  console.log(string);
}
var name = 'fish';
var prep = 'this';
myTag`${prep}  is a ${name}`;
//string = ["", "  is a ", ""]
```

模板中开头或者结尾有表达式,开头或者结尾会多一个`""`字符串

**总结**
从上面可以看出 string 数组中的元素由模板中的`${}`分割开

### 其余参数

```javascript
const person = 'Mike';
const age = 28;

function myTag(string, perAgr, ageAgr) {
  console.log(perAgr, ageAgr);
}
myTag`that ${person} is a ${age}`;
//'Mike' 28
```

注: perAgr, ageAgr 只是依次接受`${}`返回的结果,可以再看看下面例子

```javascript
const person = 'Mike';
const age = 28;

function myTag(string, a, b, c) {
  console.log(a, b, c);
}
myTag`that ${person} is ${age + 1} a ${1 + 4}`;
//'Mike' 29 5
```

### 原始字符串

在标签函数的第一个参数中，存在一个特殊的属性 raw ，我们可以通过它来访问模板字符串的原始字符串，而不经过特殊字符的替换。

```javascript
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// "string text line 1 \n string text line 2"
// \n没有被转译
```
