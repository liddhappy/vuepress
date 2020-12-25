---
title: HTML 第三节 列表 图片 锚点
date: 2019-07-20 22:32:03
categories:
- HTML
tags: 
- HTML
---

## 图片

```html
    <img src="test.jpg" alt="猫咪">
```

> src 是 source 的缩写，img 的地址分：  
1）网上 url  
2）本地的绝对路径  
3）本地的相对路径    

### 属性

下面属性都是可选，非必须。  

1. title 图片提示符

`title="这里写提示语"`  
![alt](./HTML-3-列表,图片及锚点/img-title.png)  

2. alt 图片占位符

`alt="这里写替换信息"`  
![alt](./HTML-3-列表,图片及锚点/img-alt.png)  

3. 图片大小

`height="100%" width="100%"`  

单位 %（百分比）和 px（像素），需要保持原长宽比例只设置其中一个属性即可。  

通常使用css进行该操作，所以这里暂时不做介绍。  

## 锚点

```html
<a href = “https://www.baidu.com”>www.taobao.com</a>
```

href 是 hyperText reference 超文本引用  

`<a>`是 anchor --> 锚，定在某个点（默认用于置顶） 
`<a></a>`之间可以是文字，也可以是图片`<img>`,甚至其他任何内容(但不能嵌套a标签)  

a标签有以下作用
> 1）超链接  
2）锚点  
3）打电话，发邮件  
4）协议限定符  

### 1.超链接

```html
    <a href = "https://www.baidu.com">www.taobao.com</a>
```

这个地址展示给用户是淘宝，实际给浏览器看的地址是百度  

`target = "_blank"` 作用是在新的标签页打开

### 2.锚点定位

```html
    <a href="#demo2">demo2</a>
    <a href="#demo1">demo1</a>
    br*100
    <div id="demo2" style="background-color: blue; width: 100px; height: 100px;"></div>
    br*100
    <div id="demo1" style="width:100px; height:100px; background-color: blanchedalmond"></div>
```

点击demo2就会跳转到id="demo2"的方块。  
`href=""`就会默认跳转到顶部。
目录的功能就是这样实现的。

### 3.打电话 发邮件

```html
    <a href="tel:10086">给辣鸡打电话</a>
    <a href="mailto:123456@qq.com">给辣鸡发邮件</a>
```

   除此还有发短信等功能，主要用于移动端。   

### 4.协议限定符 

```html
<a href="javascript:alert('测试')">哈哈</a>
```

`href="javascript:"` 接上js代码，点击锚点就会强制执行javascript。   

```html
    <a href="javascript:while(1){alert('让你手欠')}">点我试试呀！！</a>
```

当超链接为空,且不想用`#`占位时(不想点击链接回到顶部)可以使用`javascript:;`占位  

## 列表

### 有序列表

```html
    <ol>
    <li>marvel</li>
    <li>速 8</li>
    <li>返老孩童</li>
    <li>了不起的盖茨比</li>
    </ol>
```

如果写成：`<ol type = "1">` 就以 ABC 排序， 改成 a，就以 abc 排序  
此处的 type 值只有五个：数字，大写英文 A，小写英文 b，罗马数字大写 I，罗马数字小写 i  
英文 可以 27 进制(即z后是aa)  

写成`<ol type = "1" reversed = "reversed">` 就是倒序  
如果想从第 2 个开始排序，就写`<ol type = "1" start = "2">`  
如果想从第 117 个开始排序，就写`<ol type = "i" start = "117">`,想从第几个开始排，start 里面写数字几   

### 无序列表

```html
    <ul type = "disc">
    <li>草莓</li>
    <li>苹果</li>
    <li>橙子</li>
    </ul>
```

无序列表只有`type`这一个属性  
> 如 type = "disc" 意思是 discircle，实心圆  
如 type = "square" 意思是 square，实心方块  
如 type = "circle" 意思是 circle，圈(空心圆)   

#### 重点

ul 和 li 是一个很好的天生父子结构(柜子与抽屉)，可以做导航栏  

具体操作需要学习css