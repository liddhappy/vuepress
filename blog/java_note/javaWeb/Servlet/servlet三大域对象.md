---
title: Servlet三大域对象
date: 2020-11-21
categories:
  - JavaWeb
tags:
  - Servlet
---

> ### 域对象的作用:保存数据,获取数据,共享数据.

## Servlet 三大域对象

| 对象名称    | 对象的类型         |
| ----------- | ------------------ |
| request     | HttpServletRequest |
| session     | HttpSession        |
| application | ServletContext     |

## request

> ##### 生命周期：

**创建**：客户端向服务器发送一次请求,服务器就会创建 request 对象.
**销毁**：服务器对这次请求作出响应后就会销毁 request 对象.
**有效**：仅在当前请求中有效。

> ##### 作用：

**① 获取表单提交参数：** request.getParameter(）

> //从 login.jsp 中获取用户名和密码
> String username = request.getParameter(“username”);
> String password = request.getParameter(“password”);
> String imageText = request.getParameter(“imageText”);

**② 传值到表单：** request.setAttribute（）

> if(user == null) {
> //用户名和密码不匹配
> request.setAttribute(“msg”, “用户名和密码不匹配!”);
> return “/jsp/login.jsp”;
> }

## session

> ##### 生命周期：

**创建**：服务器端第一次调用 getSession();(保存在服务器内存中)
**销毁**： 1.非正常关闭服务器(正常关闭 session 会序列化，再次启动服务器 session 会被反序列化)；
2.session 过期了默认 30 分钟. 3.手动调用 session.invalidate();
**注意**:关闭浏览器再次访问会找不到 session 的会话 id 而不是 session 被销毁了。
**有效**：用户打开浏览器会话开始，直到关闭浏览器会话才会结束。一次会话期间只会创建一个 session 对象。

> ##### 作用：

**① 读取生成的验证码信息：**

> // 图片的验证码
> String imageMsg = (String) request.getSession().getAttribute(“imageMsg”);

**② 用户保持登录状态：**

> //登录成功 保存用户登录状态
> request.getSession().setAttribute(“user”, user)；

**③ 购物车物品保存：**

> //将 cart 放入 session 中
> request.getSession().setAttribute(“cart”, cart);

## application

> ##### 生命周期：

**创建**：服务器启动的时候,服务器为每个 WEB 应用创建一个属于该 web 项目的对象 ServletContext 类.
**销毁**：服务器关闭或者项目从服务器中移除的时候.
**有效**：此信息在整个服务器上被保留。

## 区别

> **request:** 每一次请求都是一个新的 request 对象,如果在 web 组件之间需要共享同一个请求中的数据,只能使用请求转发.
> **session:** 每一次会话都是一个新的 session 对象,如果如果需要在一次会话中的多个请求之间需要共享数据,只能使用 session.
> **application:** 应用对象,Tomcat 启动到关闭,表示一个应用,在一个应用中有且只有一个 application 对象,作用于整个 Web 应用,可以实现多次会话之间的数据共享.

## 共同点

**1.设置作用域中的共享数据（保存数据）**

> 作用域对象.setAttribute(String name,Object value);

**2.获取作用域中的共享数据（获取数据）**

> Object value=作用域对象.getAttribute(String name);

**3.删除作用域中的指定的共享数据（删除数据）**

> 作用域对象.removeAttribute(String name);
