---
title: JDBC基本知识
date: 2020-12-1
categories:
  - MySQL
tags:
  - MySQL
---
==Java数据库连接，提供了一种与平台无关的用于执行SQL语句的标准javaAPI，可以方便实现多种关系型数据库的统一操作==

## JDBC驱动分类

- JDBC-ODBC桥驱动

![image-20201202170040054](./picture/image-20201202170040054.png)

ODBC是由微软提供的编程接口，JDBC也是模仿了ODBC的设计

- JDBC-本地驱动
  直接使用各个数据库生产商提供的JDBC驱动程序，因为只能应用在特定的数据库上，会丧失程序的可移植性，不过性能很高。
  JDBC-网络驱动

将JDBC转换为与DBMS无关的网络协议，之后又被某个服务器转换为一种DBMS协议，所用的具体协议取决于提供者，最为灵活

- 本地协议纯JDBC驱动
  将JDBC转换为DBMS所使用的网络协议。

- 主要操作类及接口
  常用的类与接口就是DriverManager、Connection、Statement、Result、PreparedStatement

## MySQL数据库

常用命令
创建数据库：`create database` 数据库名称 ;
删除数据库：`drop database ` 数据库名称 ;       
使用数据库：use 数据库名称 ;
创建数据库表：`create table` 表名( 字段名称1 字段类型[default 默认值] [约束], ...) ;
删除数据库表：`drop table `表名 ;
查看表结构：` desc`  表名称 ;   
查看全部数据库：`show databases` ;
查看一个数据库全部表： `show tables` ;

SQL语法基础（Structured Query Language，结构查询语句）强大的数据库语言
- DML-数据操作语言：检索或修改数据
- DDL-数据定义语言：定义数据的结构，创建、修改、删除
- DCL-数据控制语言：定义 数据库用户的权限

## 数据类型

整型数据

| **类型**       | **大小** | **范围（有符号）**                                                                                                                  | **范围（无符号）**                                                | **用途**        |
| -------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | --------------- |
| TINYINT        | 1 字节   | (-128，127)                                                                                                                         | (0，255)                                                          | 小整数值        |
| SMALLINT       | 2 字节   | (-32 768，32 767)                                                                                                                   | (0，65 535)                                                       | 大整数值        |
| MEDIUMINT      | 3 字节   | (-8 388 608，8 388 607)                                                                                                             | (0，16 777 215)                                                   | 大整数值        |
| INT 或 INTEGER | 4 字节   | (-2 147 483 648，2 147 483 647)                                                                                                     | (0，4 294 967 295)                                                | 大整数值        |
| BIGINT         | 8 字节   | (-9 233 372 036 854 775 808，9 223 372 036 854 775 807)                                                                             | (0，18 446 744 073 709 551 615)                                   | 极大整数值      |
| FLOAT          | 4 字节   | (-3.402 823 466 E+38，-1.175 494 351 E-38)，0，(1.175 494 351 E-38，3.402 823 466 351 E+38)                                         | 0，(1.175 494 351 E-38，3.402 823 466 E+38)                       | 单精度 浮点数值 |
| DOUBLE         | 8 字节   | (-1.797 693 134 862 315 7 E+308，-2.225 073 858 507 201 4 E-308)，0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) | 0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) | 双精度 浮点数值 |

时间日期类
| 类型      | 大小   | 范围                                                                                                                            | 格式                | 用途                     |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------ |
| DATE      | 3 字节 | 1000-01-01/9999-12-31                                                                                                           | YYYY-MM-DD          | 日期值                   |
| TIME      | 3 字节 | '-838:59:59'/'838:59:59'                                                                                                        | HH:MM:SS            | 时间值或持续时间         |
| YEAR      | 1 字节 | 1901/2155                                                                                                                       | YYYY                | 年份值                   |
| DATETIME  | 8 字节 | 1000-01-01 00:00:00/9999-12-31 23:59:59                                                                                         | YYYY-MM-DD HH:MM:SS | 混合日期和时间值         |
| TIMESTAMP | 4 字节 | 1970-01-01 00:00:00/2038 结束时间是第 2147483647 秒，北京时间 2038-1-19 11:14:07，格林尼治时间 2038 年 1 月 19 日 凌晨 03:14:07 | YYYYMMDD HHMMSS     | 混合日期和时间值，时间戳 |

字符串类型
| 类型       | 大小                 | 用途                            |
| ---------- | -------------------- | ------------------------------- |
| CHAR       | 0-255 字节           | 定长字符串                      |
| VARCHAR    | 0-65535 字节         | 变长字符串                      |
| TINYBLOB   | 0-255 字节           | 不超过 255 个字符的二进制字符串 |
| TINYTEXT   | 0-255 字节           | 短文本字符串                    |
| BLOB       | 0-65 535 字节        | 二进制形式的长文本数据          |
| TEXT       | 0-65 535 字节        | 长文本数据                      |
| MEDIUMBLOB | 0-16 777 215 字节    | 二进制形式的中等长度文本数据    |
| MEDIUMTEXT | 0-16 777 215 字节    | 中等长度文本数据                |
| LONGBLOB   | 0-4 294 967 295 字节 | 二进制形式的极大文本数据        |
| LONGTEXT   | 0-4 294 967 295 字节 | 极大文本数据                    |

- 插入数据：insert into 表名称( 字段 )   values(值...);
- 删除数据：delete from 表名称 [删除条件] ;  若无条件则清空表，条件如 “where id =1"
- 更新数据：update 表名称 set 字段1 =值 1 ...  [where 更新条件]
- 查询数据：select {*|colum alias} from 表名 [where ];  
- 模糊搜索：select * from table where name like '%m%' or password like '%m%' ;搜索姓名或密码含有m 的用户
  - 加入limit 限制语句，limit 0,5 ; 限制从第1-5行的记录

###  JDBC操作步骤

### 连接数据库

- 配置MySQL数据库的驱动程序
  下载 mysql-connector-java-5.1.39.zip，复制到jdk的所在处

```java
public class jdbc {
    public static final String DRIVER = "org.gjt.mm.mysql.Driver";

    public static void main(String[] args) {
        try {
            System.out.println(Class.forName(DRIVER));
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}  
```

 若能输出Class名，则已配置好了
==为什么调用Class.forName()，却没有newInstance();== 
`Class.forName() `加载了指定类后，若类中有静态初始化器，JVM必然会执行该类的静态代码段，而JDBC的Driver类都是会有static代码块  

- DriverManager
  - `getConnection(String url, String user ,String password) `：通过连接地址链接数据库，同时输入用户名和密码
- url：  jdbc:mysql://  ip地址 : 端口号/ 数据库名称
- jdbc协议：JDBC URL中的协议总是jdbc
- 子协议：驱动程序名或数据库连接机制（这种机制可由一个或多个驱动程序支持）的名称，如mysql
  子名称：一种标识数据库的方法，必须遵循”//主机名 : 端口/子协议"  的标准URL命名    约定
  Connection接口

## 执行数据库的更新操作

- Statement接口，通过Connection接口的`createStatement()`方法实例化，来操作数据

```java

    public static final String DRIVER = "org.gjt.mm.mysql.Driver";
    public static final String URL = "jdbc:mysql://localhost:3306/newsql";
    public static final String USERNAME = "root";

    public static void main(String[] args) throws Exception {
        Connection conn = null;
        Statement statement = null;
        String sql = "insert into newtable(name) values('ccw')";
        try {
            Class.forName(DRIVER); //加载驱动
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        conn = DriverManager.getConnection(URL, USERNAME, USERNAME);
        statement = conn.createStatement();
        statement.executeUpdate(sql);
        try {
            statement.close();     //先开后关闭，可以只关闭connection
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
```

 ### ResultSet接口

  接受所查询的记录，并显示内容，开发中要限制查询数量
  Statement接口的executeQuery() 方法，返回一个ResultSet对象

  ```java
  ResultSet rSet=statement.executeQuery(sql);
  while(rSet.next()){
  int id=rSet.getInt("id"); //int id=rSet.getInt(1);
  String name=rSet.getString("name"); //String name=rSet.getString(2);
  String sex=rSet.getString("sex"); //....
  System.out.println(id+name+sex);
  }
  ```

  




ResultSet的所有数据都可以通过getString()方法获得

 ### PreparedStatement接口
是Statement的子接口，属于预处理操作，与直接使用Statement不同的是，==是先在数据表中准备好了一条SQL语句，但是此SQL语句的具体内容暂时不设置，而是之后在进行设置，即占住此位置等待用户设置==

```java
String sql="insert into newtable(name,sex) values(?,?)";
pStatement=conn.prepareStatement(sql); //实例化
pStatement.setString(1, name);
pStatement.setString(2, sex);
pStatement.executeUpdate();
```

**注意：开发中不建议使用Statement来操作数据库，而是使用PreparedStatement，因为Statement是完整的SQL语句**

处理大数据对象——必须使用PreparedStatement
- CLOB：存储海量文字
- BLOB: 存储二进制数据
- 写入大对象数据——IO流的模式

- 读取大对象数据
- 处理CLOB
- 使用Clob操作比InputStream更加方便

```java
String sql="select name,note from bigtable where id =?";
pStatement=conn.prepareStatement(sql);
pStatement.setInt(1, 1);
ResultSet rs=pStatement.executeQuery();
while(rs.next()){
String name=rs.getString(1);
Clob clob=rs.getClob(2);
String note=clob.getSubString(1, (int)clob.length());
System.out.println(name+" "+note);
}
```

 - 处理BLOB
创建表：
```sql
create table userBlob(id int auto_increment primary key,name char(30), photo longblob) ;
```
存储图片
```java
String sql="insert into userblob(name, photo) values(?,?)";
pStatement=conn.prepareStatement(sql);
File file=new File("d:"+File.separator+"my.jpg");
InputStream input=new FileInputStream(file);
pStatement.setString(1, name);
pStatement.setBinaryStream(2, input);
pStatement.executeUpdate();
```

使用BLOB方法更加方便

```java
if(rSet.next()){
String name=rSet.getString(1);
Blob blob=rSet.getBlob(2);
FileOutputStream output=new FileOutputStream(newFile("d:"+File.separator+"you.jpg"));
output.write(blob.getBytes(1,(int)blob.length()));
output.close();
}
```


### CallableStatement接口
——主要调用数据库中的存储过程即为一种方法，可以调用， 传递参数  
```sql
delimiter // //这里是改变执行操作语句的分隔符，也就是将SQL语句的";"结尾符号改为"//"
drop procedure myproc //
create procedure myproc(IN p1 int, INOUT p2 int ,OUT p3 int)
begin
select p1,p2,p3 ;
set p1=10;
set p2=20;
set p3=30;
end
//
```

3个类型
IN（默认的类型）：表示只是将值传进来
INOUT：表示把值传递到过程中，可以保留过程对此值得修改值
OUT：可以不传递内容进来，过程中对此值得操作可以返回

```sql
String sql="{call myproc(?,?,?)}";
CallableStatement cstmt=conn.prepareCall(sql);
cstmt.setInt(1,70);
cstmt.setInt(2,80);
cstmt.registerOutParameter(2,Types.INTEGER);     //设置返回值类型
cstmt.registerOutParameter(3,Types.INTEGER);
cstmt.execute();
```



JDBC2.0
ResultSet的更新

设置ResultSet的类型：TYPER_XXX设置类型，表示是否可以滚动以及是否可以修改数据表的内容
设置CONCUR_XXX设置的都是并发性，并发性主要表示结果集是否是只读还是可以进行数据库更新
可滚动的结果集——现在想取结果集中任意位置的数据

```java
PreparedStatement pstmt=conn.prepareStatement(sql,ResultSet.TYPE_SCROLL SENSITIVE,ResultSet.CONCUR_READ_ONLY); 
```

使用结果集插入数据

```java
rs.insertRow(); //插入数据
...
rs.updateString("name","李华");
rs.movetoInsertRow(); //移动到可插入的行
ResultSet rs=pstmt.executeQuery();
PreparedStatement pstmt=conn.prepareStatement(sql,ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_UPDATE);
```

批处理

```java
for(int i=0;i<10;i++){
ps.setString(1,"ccw"+i );
ps.setString(2, "nan"+i);
ps.addBatch();
}
ps.executeBatch();  
```

