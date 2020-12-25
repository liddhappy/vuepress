---
title: CSS3grid属性和术语汇总
date: 2019-07-24 16:14:06
categories:
  - FrontEnd
tags:
  - CSS3
---

## 术语

| 中文       | 英文        |
| :--------- | ----------- |
| 网格       | Gird        |
| 网格线     | Gird lines  |
| 网格轨道   | Gird track  |
| 网格单元格 | Gird cell   |
| 网格区域   | Gird areas  |
| 网格间隙   | Gutters     |
| 网格轴     | Gird Axis   |
| 网格行     | Gird row    |
| 网格列     | Gird column |

## 属性

其中几个属性可以去 flex 查看

### 容器属性

| 属性名               | 简介                         | 值                                               |
| -------------------- | ---------------------------- | ------------------------------------------------ |
| grid-template-rows   | 网格行数,大小和名称          | none,长度,3 个 grid 函数,auto,min/max-content,fr |
| grid-template-column | 网格列数,大小和名称          | ~                                                |
| grid-template-areas  | 网格区域的特定命名           | string\|none                                     |
| grid-template        | 以上 3 个的简写              | 略                                               |
| grid-auto-rows       | 隐式创建的行轨道大小(高度)   | 长度,minmax(),auto,min/max-content,fr            |
| grid-auto-columns    | 隐式创建的网格纵向轨道的宽度 | ~                                                |
| grid-auto-flow       | 自动布局排列方式             | [ row \| column ] \|\| dense                     |
| grid                 | 以上 5 个的简写              | 略                                               |

### 项目属性

| 属性名            | 简介               | 值                              |
| ----------------- | ------------------ | ------------------------------- |
| grid-row-start    | 网格行开始位置     | [线名字\|线编码] \|\| 跨度,auto |
| grid-column-start | 网格列开始位置     | ~                               |
| grid-row-end      | 略                 | ~                               |
| grid-column-end   | 略                 | ~                               |
| grid-row          | 两种 row 的简写    | ~/~                             |
| grid-column       | 两种 column 的简写 | ~/~                             |
| grid-area         | 以上 4 种的简写    | 略                              |

## 对齐属性

### 容器属性

| 属性                       | 简介                                       |
| -------------------------- | ------------------------------------------ |
| align-content              | 各项交叉轴方向的空白(只有一行不起作用)     |
| align-items                | 属性定义项目在交叉轴上如何对齐             |
| justify-content            | 主轴项目之间的空格                         |
| place-content              | 简写<'align-content'> <'justify-content'>? |
| gird-row-gap/row-gap       | 行元素之间的间隙大小                       |
| gird-column-gap/column-gap | 用来设置元素列之间的间隔                   |
| gird-gap/gap               | 简写 <'row-gap'> <'column-gap'>?           |

### 项目属性

| 属性         | 简介                 |
| ------------ | -------------------- |
| align-self   | 单独定义 align-items |
| justify-self | 草案中               |

## 函数

### repeat()

用于定义重复片段

### minmax()

定义长宽范围

### fit-content()

设置最大范围的合适值
