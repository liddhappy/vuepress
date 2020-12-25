---
title: JSTL
date: 2020-11-21
categories:
  - JavaWeb
tags:
  - JSP
---

## **JSTL** 标签库

JSTL 标签库全称是指 `JSP Standard Tag Library JSP`标准标签库。是一个不断完善的开放源代码的 JSP 标签库。

EL 表达式主要是为了替换 jsp 中的表达式脚本，而标签库则是为了替换代码脚本。这样使得整个 jsp 页面变得更佳简洁。

JSTL 由五个不同功能的标签库组成。

| 功能范围             | URI                                    | 前缀  |
| -------------------- | -------------------------------------- | ----- |
| 核心标签库**--**重点 | **http://java.sun.com/jsp/jstl/core**  | **c** |
| 格式化               | http://java.sun.com/jsp/jstl/fmt       | fmt   |
| 函数                 | http://java.sun.com/jsp/jstl/functions | fn    |
| 数据库(不使用)       | http://java.sun.com/jsp/jstl/sql       | sql   |
| XML(不使用)          | http://java.sun.com/jsp/jstl/xml       | x     |

在 jsp 标签库中使用 taglib 指令引入标签库

CORE 标签库

```jsp
<%@ taglib prefix=*"c"* uri=*"http://java.sun.com/jsp/jstl/core"* %>
```

XML 标签库

```jsp
<%@ taglib prefix=*"x"* uri=*"http://java.sun.com/jsp/jstl/xml"* %>
```

FMT 标签库

```jsp
<%@ taglib prefix=*"fmt"* uri=*"http://java.sun.com/jsp/jstl/fmt"* %>
```

SQL 标签库

```jsp
<%@ taglib prefix=*"sql"* uri=*"http://java.sun.com/jsp/jstl/sql"* %>
```

FUNCTIONS 标签库

```jsp
<%@ taglib prefix=*"fn"* uri=*"http://java.sun.com/jsp/jstl/functions"* %>
```

### a) JSTL\*\* 标签库的使用步骤

1、先导入 jstl 标签库的 jar 包。

taglibs-standard-impl-1.2.1.jar taglibs-standard-spec-1.2.1.jar

2、第二步，使用 taglib 指令引入标签库。

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```

### **b)core** 核心库使用

#### **i.** **<c:set />**（使用很少）

```jsp
<%-- i.<c:set /> 作用：set 标签可以往域中保存数据 域对象.setAttribute(key,value);
scope 属性设置保存到哪个域 page 表示 PageContext 域（默认值）
request 表示 Request 域 session 表示 Session 域
application 表示 ServletContext 域
var 属性设置 key 是多少 value 属性设置值 --%>
保存之前：${ sessionScope.abc } <br>
<c:set scope="session" var="abc" value="abcValue"/>
保存之后：${ sessionScope.abc } <br>
```

作用：set 标签可以往域中保存数据

#### **ii.** <c:if />

if 标签用来做 if 判断。

```jsp
<%--ii.<c:if />
if 标签用来做 if 判断。
test 属性表示判断的条件（使用 EL 表达式输出） --%>
<c:if test="${ 12 == 12 }">
<h1>12 等于 12</h1>
</c:if>
<c:if test="${ 12 != 12 }">
<h1>12 不等于 12</h1>
</c:if>
```

#### **iii.** <c:choose><c:when> <c:otherwise>标签

作用：多路判断。跟 switch ... case .... default 非常接近

```jsp
    <%-- iii.<c:choose> <c:when> <c:otherwise>标签
    作用：多路判断。跟 switch ... case .... default 非常接近 choose 标签开始选择判断 when 标签表示每一种判断情况
    test 属性表示当前这种判断情况的值 otherwise 标签表示剩下的情况
    <c:choose> <c:when> <c:otherwise>标签使用时需要注意的点：
    1、标签里不能使用 html 注释，要使用 jsp 注释
    2、when 标签的父标签一定要是 choose 标签 --%>
    <% request.setAttribute("height", 180); %><c:choose> <%-- 这是 html 注释 --%>
    <c:when test="${ requestScope.height > 190 }">
        <h2>小巨人</h2>
        </c:when>
    <c:when test="${ requestScope.height > 180 }">
        <h2>很高</h2>
    </c:when>
    <c:when test="${ requestScope.height > 170 }">
        <h2>还可以</h2>
    </c:when>
    <c:otherwise>
        <c:choose>
            <c:when test="${requestScope.height > 160}">
                <h3>大于 160</h3>
                </c:when>
            <c:when test="${requestScope.height > 150}">
                <h3>大于 150</h3>
                </c:when>
            <c:when test="${requestScope.height > 140}">
                <h3>大于 140</h3>
            </c:when> <c:otherwise> 其他小于 140 </c:otherwise>
        </c:choose>
    </c:otherwise>
</c:choose>
```

#### **iv. <c:forEach />** 作用：遍历输出使用。

**1.** 遍历 **1** 到 **10**，输出示例代码：

```jsp
  <%--1.遍历 1 到 10，
  输出 begin 属性设置开始的索引
  end 属性设置结束的索引
  var 属性表示循环的变量(也是当前正在遍历到的数据)
  for (int i = 1; i < 10; i++) --%>
    <table border="1"><c:forEach begin="1" end="10" var="i">
        <tr>
            <td>第${i}行</td>
        </tr>
    </c:forEach></table>
```

**2.** 遍历 **Object** 数组示例代码：

```jsp
    <%-- 2.遍历 Object 数组 for (Object item: arr)
    items 表示遍历的数据源（遍历的集合）
    var 表示当前遍历到的数据 --%>
    <% request.setAttribute("arr", new String[]{"18610541354", "18688886666", "18699998888"}); %>
    <c:forEach items="${ requestScope.arr }" var="item">
    ${ item } <br>
    </c:forEach>
```

**3.** 遍历 **Map** 集合示例代码：

```jsp
<% Map<String,Object> map = new HashMap<String, Object>();
map.put("key1", "value1");
map.put("key2", "value2"); map.put("key3", "value3");
// for ( Map.Entry<String,Object> entry : map.entrySet()) { // }
request.setAttribute("map", map); %>
<c:forEach items="${ requestScope.map }" var="entry">
<h1>${entry.key} = ${entry.value}</h1>
</c:forEach>
```

**4.** 遍历 **List** 集合**---list** 中存放 **Student** 类，有属性：编号，用户名，密码，年龄，

电话信息

Student 类：

```java
public class Student { //4.编号，用户名，密码，年龄，电话信息
private Integer id;
private String username;
private String password;
private Integer age;
private String phone;}
```

示例代码：

```jsp
   <%--4.遍历 List 集合---list 中存放 Student 类，有属性：编号，用户名，密码，年龄，电话信息--%> <% List<Student> studentList = new ArrayList<Student>();
    for (int i = 1; i <= 10; i++) {
        studentList.add(new Student(i, "username" + i, "pass" + i, 18 + i, "phone" + i));
    }
    request.setAttribute("stus", studentList); %>
    <table>
        <tr>
            <th>编号</th>
            <th>用户名</th>
            <th>密码</th>
            <th>年龄</th>
            <th>电话</th>
            <th>操作</th>
        </tr>
        <%--items 表示遍历的集合 var 表示遍历到的数据 begin 表示遍历的开始索引值 end 表示结束的索引值 step 属性表示遍历的步长值 varStatus 属性表示当前遍历到的数据的状态 for（int i = 1; i < 10; i+=2） --%>
        <c:forEach begin="2" end="7" step="2" varStatus="status" items="${requestScope.stus}" var="stu">
            <tr>
                <td>${stu.id}</td>
                <td>${stu.username}</td>
                <td>${stu.password}</td>
                <td>${stu.age}</td>
                <td>${stu.phone}</td>
                <td>${status.step}</td>
            </tr>
        </c:forEach></table>
```
