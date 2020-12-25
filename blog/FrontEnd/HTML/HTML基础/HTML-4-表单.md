---
title: HTML 第四节 Form 表单
date: 2019-07-20 22:32:04
categories:
- HTML
tags: 
- HTML
---

HTML 表单用于收集用户输入。  

`<form>` 元素定义 HTML 表单：  

form有两个属性用于和后端链接：  
`action`  
规定在提交表单时所用的 HTTP 方法(GET 或 POST),POST 的安全性更加，因为在页面地址栏中被提交的数据是不可见的。   
`method`   
定义在提交表单时执行的动作。向服务器提交表单的通常做法是使用提交按钮。
通常，表单会被提交到 web 服务器上的网页。  

不在html的范畴，暂时只做了解。  

## 表单组件

表单元素指的是不同类型的 input 元素、复选框、单选按钮、提交按钮等等。

### input元素

输入类型是由类型属性（type）定义的。大多数经常被用到的输入类型如下：

1. 输入框 `type="text"`  
   
   ```html
    <form>
        <p>
    First name: <input type="text" name="firstname">
        </p>
    </form>
   ```

2. 密码框 `type="password"`
3. 单选按钮 `type="radio"`
4. 复选框 `type="checkbox"`
5. 提交按钮 `type="submit"`
6. 重置按钮 `type="reset"`

> input除了type属性，还有两个必须的属性name和value   

输入框和密码框的value可以不写，其默认是输入的内容，当然也可以提前设置

```html
    <input type="text" name="a" value="这里面有内容">
```

![alt](./HTML-4-表单/input-text.png)  

> 注意：  
同一组的单选按钮，name 取值一定要一致，这样同一组的单选按钮才可以起到单选的作用。看下面例子：

```html
<form>
<p>你生活在哪个国家？</p>
<input type="radio" name="country" value="China" checked="checked">中国<br />
<input type="radio" name="country" value="the USA">美国
</form>
```

> 当设置 checked="checked" 时，该选项被默认选中。

### 下拉列表

```html
<form>
    <select>
        <option>北京</option>
        <option>上海</option>
        <option>广州</option>
    </select>
<form>
```

`<option></option>`中间是value值  
`<option>`可以加value，提交时默认提交此value值。  