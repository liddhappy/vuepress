---
title: JSP四大域对象
date: 2020-11-21
categories:
  - JavaWeb
tags:
  - JSP
---

| 对象类型    | 对象类             | 作用域                                                     |
| :---------- | ------------------ | ---------------------------------------------------------- |
| pageContext | PageContextImpl    | 当前 jsp 页面范围内有效                                    |
| request     | HttpServletRequest | 一次请求内有效                                             |
| session     | HttpSession        | 一次会话范围内有效（打开浏览器访问服务器，直到关闭浏览器） |
| application | ServletContext     | 整个 web 工程范围内有效(只要 web 工程不停止，数据都在)     |

## pageContext

> ##### 有效：当前页面（最小的一个），超过这个页面就不能够使用。
>
> ##### 作用：

**① 在当前页面和当前页面中的标签共享数据：**

> void setAttribute(String name, Object value)；
> Object getAttrbiute(String name, Object value)；
> void removeAttribute(String name, Object value)；

**② 全域：** pageContext.findAttribute(“内容”)在四个域中搜索数据

> 自动搜索数据顺序:page 域->request 域->session 域->application 域(context 域)

**③ 代理其他域对象：**通过 pageContext 向 request、session、application 对象中存取数据

> void setAttribute(String name, Object value, int scope)：在指定范围中添加数据；
> Object getAttribute(String name, int scope)：获取指定范围的数据；
> void removeAttribute(String name, int scope)：移除指定范围的数据

**④ 获取其他内置对象：**通过 pageContext 对象获取其它 8 个内置对象（pageContext 对象本身也属于 jsp 9 大内置对象之一）

> void setAttribute(String name, Object value, int scope)：在指定范围中添加数据；
> Object getAttribute(String name, int scope)：获取指定范围的数据；
> void removeAttribute(String name, int scope)：移除指定范围的数据

**⑤ 获取其他内置对象：**通过 pageContext 对象获取其它 8 个内置对象（pageContext 对象本身也属于 jsp 9 大内置对象之一）

> JspWriter getOut()：获取 out 内置对象；
> ServletConfig getServletConfig()：获取 config 内置对象；
> Object getPage()：获取 page 内置对象；
> ServletRequest getRequest()：获取 request 内置对象；
> ServletResponse getResponse()：获取 response 内置对象；
> HttpSession getSession()：获取 session 内置对象；
> ServletContext getServletContext()：获取 application 内置对象；
> Exception getException()：获取 exception 内置对象；

## request

> ##### 有效：一 JSP 网页发出请求到另一个 JSP 网页之间，随后这个属性就失效。
>
> ##### 作用：

**① 设置 request 范围的数据：**

> <%request.setAttribute(“name”,”xxx”);request.setAttribute(“age”,12);%>

**② 获取 request 范围的数据：**

> //获取购物项 ci 的 product.cid 属性
> \${ci.product.pid }

**③ 获取部署的应用程序名：**

> \${pageContext.request.contextPath }/user
> 相当于 pageContext.getRequest().getContextPath()

## session

> ##### 有效：一段用户持续和服务器所连接的时间，但与服务器断线后，这个属性就无效。比如断网或者关闭浏览器。
>
> ##### 作用：

**获取 session：**

> //已知 user 已经在 session 当中，现取出 user 来判断是否为空
> emptyuser//为空则显示登录按钮 emptyuser//为空则显示登录按钮{not empty user }//不为空则显示“xxx，你好”
> //也可以用来判断购物车是否为空
> \${empty cart || empty cart.cartItems } //为空则显示“亲，你的购物车空空如也，请到处逛逛吧~~~”

## application

> ##### 有效：在服务器一开始执行服务，到服务器关闭为止。它的范围最大，生存周期最长。
>
> ##### 作用：设值与取值
