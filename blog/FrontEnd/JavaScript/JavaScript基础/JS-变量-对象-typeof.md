---
title: JS 变量 typeof 转换
date: 2019-07-31 14:20:24
tags:
  - JavaScript
categories:
  - FrontEnd
---

## 数组

var arr = [1,2,3,4,5,6,7,”abc”,undefined];

## 对象 object

面向对象的编程方法  
var obj = {
里面存属性和方法  
key 属性名：value 属性值;  
}  
在{}面用。属性与属性之间用逗号隔开  
//属性值可以双引号或单引号；属性名是为了方便找到他，只是一个辅助

## typeof 操作符

```javascript
能返回的六种数据类型（区分数字类型）
number、  string、  boolean、  undefined、     object、      function
1,NaN       "1"      false    undefined   对象，数组，null   function
```

## 显示类型转换

### Number(mix) 是想把里面的东西转换成数字

null --> 0  
true --> 1  
转换不成的就是 NaN

### parseInt(string,radix)

parse 是转化，Int 是整型，整数，目的是把里面转换成整数

```javascript
true-- > NaN;
null-- > NaN;
'123.ujhg'-- > 123;
```

parseInt 从数字类开始看，看到非数字类为止，返回原来的数
是直接去掉小数，不是四舍五入

var num = parseInt(demo ,radix); //radix 是基底的意思  
radix 写成 16，系统会认为是以 16 进制为基底， 10（一零）是 16 进制的一零，是以 16 进制为基底，把他转成为 10 进制的数字（就是 16），上面是以目标进制为基底，
转换成十进制（radix 范围是 2-36）

```javascript
    eg. 10,16 --> 16
        10,8 --> 8
        "a" --> 10
        "aj" --> 10 //a被当成数，j是非数字
```

### parseFloat(string)转换成浮点数字，就是正常小数

```javascript
true-- > NaN;
null-- > NaN;
123e-- > 123;
(123.123).asd-- > 123.123;
```

parseFloat 从数字类开始看，看到除了第一个点以外的非数字类为截止，返回前面的数

### toString（radix）

想把谁转换成字符串，就写成谁.toString()，上面是想把 demo 转换成 toString，写成  
demo.toString()  
undefined 和 null 不能用 toString

```javascript
var num = demo.toString(8);
```

这里的 radix 意思是以十进制为基底，转换成目标进制（即 8 进制）,转换后获得还是 string

### String(mix)转换成字符串，写什么都成了字符串

### Boolean()转换成布尔值 false 和 true

null,NaN ,undefined,""(空串) --> false

## 隐式转换

```javascript
isNaN()
Number("abc")  ----> NaN ---> true

++/--和+/-（一元正负）
Number()

+
有字符就String()

- * / %
Number()

&& || !

< > <= >=
有数字相比较的，就会隐士类型转换成数字类型
两个字符比较ASCⅡ
 10>100>0 挨个·计算--> false > 0 --> false

== !=
```

## 不转换

```javascript
=== !==
绝对等于和绝对不等于
NaN === NaN   --> false

typeof（typeof（undefined））返回的的是string  六种类型都返回string
```
