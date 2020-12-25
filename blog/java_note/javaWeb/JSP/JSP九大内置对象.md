---
title: JSP九大内置对象
date: 2020-11-21
categories:
  - JavaWeb
tags:
  - JSP
---

JSP 之九大内置对象

Servlet 和 JSP 中输出数据都需要使用 out 对象。Servlet 中的 out 对象是通过 getWriter()方法获取的。而 JSP 中没有定义 out 对象却可以直接使用。这是因为 out 是 JSO 的内置隐藏对象。JSP 中的常见的 9 个内置隐藏对象如下
![alt](.\picture\JSP内置对象.png)

### 1、request 对象：

request 对象是 javax.servlet.httpServletRequest 类型的对象。 该对象代表了客户端的请求信息，主要用于接受通过 HTTP 协议传送到服务器的数据。（包括头信息、系统信息、请求方式以及请求参数等）。

**request 对象的作用域为一次请求**

是客户端对服务器发出的请求。客户端的请求信息被封装在 request 对象中，通过它发送请求给服务器。它是 HttpServletRequest 类的实例。**作用域为 request(用户请求期**）。

```
常用方法：

1. object getAttribute(String name) 返回指定属性的属性值（常用）

2. Enumeration getAttributeNames() 返回所有可用属性名的枚举

3. String getCharacterEncoding() 返回字符编码方式（常用）

4. int getContentLength() 返回请求体的长度（以字节数）

5. String getContentType() 得到请求体的MIME类型

6. ServletInputStream getInputStream() 得到请求体中一行的二进制流

7. String getParameter(String name) 返回name指定参数的参数值（常用）

8. Enumeration getParameterNames() 返回可用参数名的枚举

9. String[] getParameterValues(String name) 返回包含参数name的所有值的数组

10. String getProtocol() 返回请求用的协议类型及版本号

11. String getScheme() 返回请求用的计划名,如:http.https及ftp等

12. String getServerName() 返回接受请求的服务器主机名

13. int getServerPort() 返回服务器接受此请求所用的端口号

14. BufferedReader getReader() 返回解码过了的请求体

15. String getRemoteAddr() 返回发送此请求的客户端IP地址

16. String getRemoteHost() 返回发送此请求的客户端主机名

17. void setAttribute(String key,Object obj) 设置属性的属性值（常用）

18. String getRealPath(String path) 返回一虚拟路径的真实路径

```

### 2、response 对象：

response 代表的是对客户端的响应，主要是将 JSP 容器处理过的对象传回到客户端。

**response 对象也具有作用域，它只在 JSP 页面内有效。**

服务器收到客户端请求后做出的响应。它是 HttpServletResponse 类的实例。作用域为 page（页面执行期）。

```
常用方法：

1. String getCharacterEncoding() 返回响应用的是何种字符编码 （常用）

2. ServletOutputStream getOutputStream() 返回响应的一个二进制输出流

3. PrintWriter getWriter() 返回可以向客户端输出字符的一个对象

4. void setContentLength(int len) 设置响应头长度

5. void setContentType(String type) 设置响应的MIME类型

6. sendRedirect(java.lang.String location) 重新定向客户端的请求 （常用）

```

### 3、session 对象

session 对象是由服务器自动创建的与用户请求相关的对象。服务器为每个用户都生成一个 session 对象，用于保存该用户的信息，跟踪用户的操作状态。session 对象内部使用 Map 类来保存数据，因此保存数据的格式为 “Key/value”。 session 对象的 value 可以使复杂的对象类型，而不仅仅局限于字符串类型。

是客户端与服务器的一次会话，从客户连到服务器的一个 WebApplication 开始，直到客户端与服务器断开连接为止。它是 HttpSession 类的实例。**作用域 session(会话期）**。

```
常用方法：

1. long getCreationTime() 返回SESSION创建时间

2. public String getId() 返回SESSION创建时JSP引擎为它设的惟一ID号 （常用）

3. long getLastAccessedTime() 返回此SESSION里客户端最近一次请求时间

4. int getMaxInactiveInterval() 返回两次请求间隔多长时间此SESSION被取消(ms)

5. String[] getValueNames() 返回一个包含此SESSION中所有可用属性的数组 （常用）

6. void invalidate() 取消SESSION，使SESSION不可用 （常用）

7. boolean isNew() 返回服务器创建的一个SESSION,客户端是否已经加入

8. void removeValue(String name) 删除SESSION中指定的属性

9. void setMaxInactiveInterval() 设置两次请求间隔多长时间此SESSION被取消(ms)

```

### 4、out 对象

out 对象用于在 Web 浏览器内输出信息，并且管理应用服务器上的输出缓冲区。在使用 out 对象输出数据时，可以对数据缓冲区进行操作，及时清除缓冲区中的残余数据，为其他的输出让出缓冲空间。待数据输出完毕后，要及时关闭输出流。

out 对象是 JspWriter 类的实例,是向客户端输出内容常用的对象 。**作用域为 page（页面执行期）**

```
常用方法：

1. void clear() 清除缓冲区的内容

2. void clearBuffer() 清除缓冲区的当前内容

3. void flush() 清空流

4. int getBufferSize() 返回缓冲区以字节数的大小，如不设缓冲区则为0

5. int getRemaining() 返回缓冲区还剩余多少可用

6. boolean isAutoFlush() 返回缓冲区满时，是自动清空还是抛出异常

7. void close() 关闭输出流

```

### 5、page 对象

page 对象代表 JSP 本身，只有在 JSP 页面内才是合法的。 page 隐含对象本质上包含当前 Servlet 接口引用的变量，类似于 Java 编程中的 this 指针。

page 对象就是指向当前 JSP 页面本身，有点象类中的 this 指针，它是 java.lang.Object 类的实例 。“page” 对象代表了正在运行的由 JSP 文件产生的类对象，不建议一般读者使用。 **作用域 page**

```
常用方法：

1. class getClass 返回此Object的类 （常用）

2. int hashCode() 返回此Object的hash码

3. boolean equals(Object obj) 判断此Object是否与指定的Object对象相等 （常用）

4. void copy(Object obj) 把此Object拷贝到指定的Object对象中

5. Object clone() 克隆此Object对象

6. String toString() 把此Object对象转换成String类的对象 （常用）

7. void notify() 唤醒一个等待的线程

8. void notifyAll() 唤醒所有等待的线程

9. void wait(int timeout) 使一个线程处于等待直到timeout结束或被唤醒

10. void wait() 使一个线程处于等待直到被唤醒

11. void enterMonitor() 对Object加锁

12. void exitMonitor() 对Object开锁

```

### 6、application 对象

application 对象可将信息保存在服务器中，直到服务器关闭，否则 application 对象中保存的信息会在整个应用中都有效。与 session 对象相比，application 对象生命周期更长，类似于系统的“全局变量”。

实现了用户间数据的共享，可存放全局变量。它开始于服务器的启动，直到服务器的关闭，在此期间，此对象将一直存在；这样在用户的前后连接或不同用户之间的连接中，可以对此对象的同一属性进行操作；在任何地方对此对象属性的操作，都将影响到其他用户对此的访问。服务器的启动和关闭决定了 application 对象的生命。它是 ServletContext 类的实例。**作用域 application**

```
常用方法：

1. Object getAttribute(String name) 返回给定名的属性值 （常用）

2. Enumeration getAttributeNames() 返回所有可用属性名的枚举

3. void setAttribute(String name,Object obj) 设定属性的属性值 （常用）

4. void removeAttribute(String name) 删除一属性及其属性值 （常用）

5. String getServerInfo() 返回JSP(SERVLET)引擎名及版本号

6. String getRealPath(String path) 返回一虚拟路径的真实路径

7. ServletContext getContext(String uripath) 返回指定WebApplication的application对象

8. int getMajorVersion() 返回服务器支持的Servlet API的最大版本号

9. int getMinorVersion() 返回服务器支持的Servlet API的最大版本号

10. String getMimeType(String file) 返回指定文件的MIME类型

11. URL getResource(String path) 返回指定资源(文件及目录)的URL路径 （常用）

12. InputStream getResourceAsStream(String path) 返回指定资源的输入流

13. RequestDispatcher getRequestDispatcher(String uripath) 返回指定资源的RequestDispatcher对象 （常用）

14. Servlet getServlet(String name) 返回指定名的Servlet （常用）

15. Enumeration getServlets() 返回所有Servlet的枚举

16. Enumeration getServletNames() 返回所有Servlet名的枚举

17. void log(String msg) 把指定消息写入Servlet的日志文件

18. void log(Exception exception,String msg) 把指定异常的栈轨迹及错误消息写入Servlet的日志文件

19. void log(String msg,Throwable throwable) 把栈轨迹及给出的Throwable异常的说明信息 写入Servlet的日志文件
123456789101112131415161718192021222324252627282930313233343536373839
```

### 7、pageContext 对象

pageContext 对象的作用是取得任何范围的参数，通过它可以获取 JSP 页面的 out、request、reponse、session、application 等对象。pageContext 对象的创建和初始化都是由容器来完成的，在 JSP 页面中可以直接使用 pageContext 对象。

提供了对 JSP 页面内所有的对象及名字空间的访问，也就是说他可以访问到本页所在的 SESSION，也可以取本页面所在的 application 的某一属性值，他相当于页面中所有功能的集大成者，它的本类名也叫 pageContext。**作用域 Pageconfig 对象**

```
常用方法：

1. JspWriter getOut() 返回当前客户端响应被使用的JspWriter流(out)

2. HttpSession getSession() 返回当前页中的HttpSession对象(session)

3. Object getPage() 返回当前页的Object对象(page)

4. ServletRequest getRequest() 返回当前页的ServletRequest对象(request) （常用）

5. ServletResponse getResponse() 返回当前页的ServletResponse对象(response) （常用）

6. Exception getException() 返回当前页的Exception对象(exception)

7. ServletConfig getServletConfig() 返回当前页的ServletConfig对象(config)

8. ServletContext getServletContext() 返回当前页的ServletContext对象(application)

9. void setAttribute(String name,Object attribute) 设置属性及属性值 （常用）

10. void setAttribute(String name,Object obj,int scope) 在指定范围内设置属性及属性值 （常用）

11. public Object getAttribute(String name) 取属性的值 （常用）

12. Object getAttribute(String name,int scope) 在指定范围内取属性的值 （常用）

13. public Object findAttribute(String name) 寻找一属性,返回起属性值或NULL

14. void removeAttribute(String name) 删除某属性 （常用）

15. void removeAttribute(String name,int scope) 在指定范围删除某属性 （常用）

16. int getAttributeScope(String name) 返回某属性的作用范围

17. Enumeration getAttributeNamesInScope(int scope) 返回指定范围内可用的属性名枚举

18. void release() 释放pageContext所占用的资源

19. void forward(String relativeUrlPath) 使当前页面重导到另一页面

20. void include(String relativeUrlPath) 在当前位置包含另一文件

```

### 8、config 对象

config 对象的主要作用是取得服务器的配置信息。通过 pageConext 对象的 getServletConfig() 方法可以获取一个 config 对象。当一个 Servlet 初始化时，容器把某些信息通过 config 对象传递给这个 Servlet。 开发者可以在 web.xml 文件中为应用程序环境中的 Servlet 程序和 JSP 页面提供初始化参数。

config 对象是在一个 Servlet 初始化时，JSP 引擎向它传递信息用的，此信息包括 Servlet 初始化时所要用到的参数（通过属性名和属性值构成）以及服务器的有关信息（通过传递一个 ServletContext 对象）。**作用域 Page**

```
常用方法：

1. ServletContext getServletContext() 返回含有服务器相关信息的ServletContext对象

2. String getInitParameter(String name) 返回初始化参数的值

3. Enumeration getInitParameterNames() 返回Servlet初始化所需所有参数的枚举
```

### 9、exception 对象

exception 对象的作用是显示异常信息，只有在包含 isErrorPage=“true” 的页面中才可以被使用，在一般的 JSP 页面中使用该对象将无法编译 JSP 文件。excepation 对象和 Java 的所有对象一样，都具有系统提供的继承结构。exception 对象几乎定义了所有异常情况。在 Java 程序中，可以使用 try/catch 关键字来处理异常情况； 如果在 JSP 页面中出现没有捕获到的异常，就会生成 exception 对象，并把 exception 对象传送到在 page 指令中设定的错误页面中，然后在错误页面中处理相应的 exception 对象。

是一个例外对象，当一个页面在运行过程中发生了例外，就产生这个对象。如果一个 JSP 页面要应用此对象，就必须把 isErrorPage 设为 true，否则无法编译。他实际上是 java.lang.Throwable 的对象.**作用域 page**

```
1. String getMessage() 返回描述异常的消息

2. String toString() 返回关于异常的简短描述消息

3. void printStackTrace() 显示异常及其栈轨迹

4. Throwable FillInStackTrace() 重写异常的执行栈轨迹
```
