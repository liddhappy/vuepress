---
title: JS基础 Date对象
tags:
  - JavaScript
  - Data
categories:
  - FrontEnd
date: 2019-11-02 21:05:10
---

创建一个 JavaScript Date 实例，该实例呈现时间中的某个时刻。Date 对象则基于 Unix Time Stamp，即自 1970 年 1 月 1 日（UTC）起经过的毫秒数。

[MDN Date 对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)

## 语法

```javascript
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```

一些例子,但建议不要用 Date 和其 parse 方法解析字符串(浏览器有差异),直接设置数值更有效

```javascript
var today = new Date();
var birthday = new Date('December 17, 1995 03:24:00');
var birthday = new Date('1995-12-17T03:24:00');
var birthday = new Date(1995, 11, 17);
var birthday = new Date(1995, 11, 17, 3, 24, 0);
```

注意:

- 不把它当构造函数而是直接调用时只是返回当前时间的字符串
- 参数 monthIndex 是从“0”开始计算的，这就意味着一月份为“0”，十二月份为“11”。
- 默认当地时间,国内也不用 UTC 时间

## 属性

- Date.prototype
  允许为 Date 对象添加属性。
- Date.length
  Date.length 的值是 7。这是该构造函数可接受的参数个数。

## 方法

- Date.now()
  返回自 1970-1-1 00:00:00 UTC（世界标准时间）至今所经过的毫秒数。
- Date.parse()
  解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数。
- 等等

## prototype 上的 get 方法

- getDate() 根据本地时间返回指定日期对象的月份中的第几天（1-31）
- getDay() 指定日期对象的星期中的第几天（0-6）
- getFullYear() 指定日期对象的年份（四位数年份时返回四位数字）
- getHours() 小时（0-23）
- getMilliseconds() 毫秒（0-999）
- getMinutes() 分钟（0-59）
- getMonth() 月份（0-11）
- getSeconds() 秒数（0-59）
- getTime() 获取时间戳

UTC 及其他方法不介绍了

## prototype 上的 set 方法

- setDate() 根据本地时间为指定的日期对象设置月份中的第几天
- setFullYear() 设置完整年份（四位数年份是四个数字）
- setHours() 设置小时数。
- setMilliseconds() 设置毫秒数
- setMinutes() 设置分钟数
- setMonth() 设置月份
- setSeconds() 设置秒数
- setTime() 设置时间戳

UTC 及其他方法不介绍了
