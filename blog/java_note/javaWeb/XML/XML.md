---
title: XML
date: 2020-11-21
categories:
  - FrontEnd
tags:
  - XML
---

## 概念

概念：Extensible Markup Language 可扩展标记语言

可扩展：标签都是自定义的。

W3C:万维网联盟

## 作用

xml 的主要作用有：

1. 用来保存数据，而且这种数据具有描述性
2. 它还可以作为项目的配置文件
3. 还可以作为网络传输数据的格式(json 为主)

## 语法

元素(标签)

html 标签

格式：`<标签名>封装数据 </标签名>`

单标签:<标签名/>

`<\*br>换行 <hr>水平线`

双标签：`<标签名>封装数据 </标签名>`

标签属性：基本属性和事件属性

标签要闭合

```xml
<users>
    <user id='1'>
        <name>zhangsan</name>
        <age>23</age>
        <gender>male</gender>
    </user>
    <user id='2'>
        <name>lisi</name>
        <age>24</age>
        <gender>remale</gender>

    </user>
</users>
```

XML 元素值得是从开始标签直到结束标签的部分

元素可以包含其他元素、文本或者两者的混合物。元素也可以拥有属性。

## 所有 XML 元素都须有关闭标签

在 HTML，经常会看到没有关闭标签的元素：

```xml
<p>This is a paragraph
<p>This is another paragraph
```

在 XML 中，省略关闭标签是非法的。所有元素都*必须*有关闭标签：

```xml
<p>This is a paragraph</p>
<p>This is another paragraph</p>
```

**注释：**您也许已经注意到 XML 声明没有关闭标签。这不是错误。声明不属于 XML 本身的组成部分。它不是 XML 元素，也不需要关闭标签。

## XML 标签对大小写敏感

XML 元素使用 XML 标签进行定义。

XML 标签对大小写敏感。在 XML 中，标签 `<Letter>` 与标签 `<letter>` 是不同的。

必须使用相同的大小写来编写打开标签和关闭标签：

```xml
<Message>这是错误的。</message>

<message>这是正确的。</message>
```

**注释：**打开标签和关闭标签通常被称为开始标签和结束标签。不论您喜欢哪种术语，它们的概念都是相同的。

## XML 必须正确地嵌套

在 HTML 中，常会看到没有正确嵌套的元素：

```xml
<b><i>This text is bold and italic</b></i>
```

在 XML 中，所有元素都*必须*彼此正确地嵌套：

```xml
<b><i>This text is bold and italic</i></b>
```

在上例中，正确嵌套的意思是：由于 `<i>` 元素是在 `<b>` 元素内打开的，那么它必须在 `<b>` 元素内关闭。

## XML 文档必须有根元素

XML 文档必须有一个元素是所有其他元素的*父元素*。该元素称为*根元素*。

根标签是唯一一个，且是顶尖元素。

```xml
<root>
  <child>
    <subchild>.....</subchild>
  </child>
</root>
```

## XML 的属性值须加引号

与 HTML 类似，XML 也可拥有属性（名称/值的对）。

在 XML 中，XML 的属性值须加引号。请研究下面的两个 XML 文档。第一个是错误的，第二个是正确的：

```xml
<note date=08/08/2008>
<to>George</to>
<from>John</from>
</note>
<note date="08/08/2008">
<to>George</to>
<from>John</from>
</note>
```

在第一个文档中的错误是，note 元素中的 date 属性没有加引号。

## 实体引用

在 XML 中，一些字符拥有特殊的意义。

如果你把字符 "<" 放在 XML 元素中，会发生错误，这是因为解析器会把它当作新元素的开始。

这样会产生 XML 错误：

```xml
<message>if salary < 1000 then</message>
```

为了避免这个错误，请用*实体引用*来代替 "<" 字符：

```xml
<message>if salary &lt; 1000 then</message>
```

在 XML 中，有 5 个预定义的实体引用：

| &lt;   | <   | 小于   |
| ------ | --- | ------ |
| &gt;   | >   | 大于   |
| &amp;  | &   | 和号   |
| &apos; | '   | 单引号 |
| &quot; | "   | 引号   |

**注释：**在 XML 中，只有字符 "<" 和 "&" 确实是非法的。大于号是合法的，但是用实体引用来代替它是一个好习惯。

## XML 中的注释

在 XML 中编写注释的语法与 HTML 的语法很相似：

```xml
<!-- This is a comment -->
```

## 在 XML 中，空格会被保留

HTML 会把多个连续的空格字符裁减（合并）为一个：

```xml
HTML:	Hello           my name is David.
输出:	Hello my name is David.
```

在 XML 中，文档中的空格不会被删节。

## XML 以 LF 存储换行

在 Windows 应用程序中，换行通常以一对字符来存储：回车符 (CR) 和换行符 (LF)。这对字符与打字机设置新行的动作有相似之处。在 Unix 应用程序中，新行以 LF 字符存储。而 Macintosh 应用程序使用 CR 来存储新行。

## 文本区域

CDTATA 格式：

```xml
<![CDATA[这里输入可以把你输入字符原样显示，不会解析xml]]>
```

## XML 解析

XML 是一种通用的数据交换格式,它的平台无关性、语言无关性、系统无关性、给数据集成与交互带来了极大的方便。XML 在不同的语言环境中解析方式都是一样的,只不过实现的语法不同而已。

XML 的解析方式分为四种：1、DOM 解析；2、SAX 解析；3、JDOM 解析；4、DOM4J 解析。其中前两种属于基础方法，是官方提供的平台无关的解析方式；后两种属于扩展方法，它们是在基础的方法上扩展出来的，只适用于 java 平台。

```xml
//XML例子： 　

<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book id="1">
        <name>冰与火之歌</name>
        <author>乔治马丁</author>
        <year>2014</year>
        <price>89</price>
    </book>
    <book id="2">
        <name>安徒生童话</name>
        <year>2004</year>
        <price>77</price>
        <language>English</language>
    </book>
</bookstore>
```

### 一、DOM 解析

DOM 的全称是 Document Object Model，也即文档对象模型。在应用程序中，基于 DOM 的 XML 分析器将一个 XML 文档转换成一个对象模型的集合（通常称 DOM 树），应用程序正是通过对这个对象模型的操作，来实现对 XML 文档数据的操作。通过 DOM 接口，应用程序可以在任何时候访问 XML 文档中的任何一部分数据，因此，这种利用 DOM 接口的机制也被称作随机访问机制。

DOM 接口提供了一种通过分层对象模型来访问 XML 文档信息的方式，这些分层对象模型依据 XML 的文档结构形成了一棵节点树。无论 XML 文档中所描述的是什么类型的信息，即便是制表数据、项目列表或一个文档，利用 DOM 所生成的模型都是节点树的形式。也就是说，DOM 强制使用树模型来访问 XML 文档中的信息。由于 XML 本质上就是一种分层结构，所以这种描述方法是相当有效的。

DOM 树所提供的随机访问方式给应用程序的开发带来了很大的灵活性，它可以任意地控制整个 XML 文档中的内容。然而，由于 DOM 分析器把整个 XML 文档转化成 DOM 树放在了内存中，因此，当文档比较大或者结构比较复杂时，对内存的需求就比较高。而且，对于结构复杂的树的遍历也是一项耗时的操作。所以，DOM 分析器对机器性能的要求比较高，实现效率不十分理想。不过，由于 DOM 分析器所采用的树结构的思想与 XML 文档的结构相吻合，同时鉴于随机访问所带来的方便，因此，DOM 分析器还是有很广泛的使用价值的。

优点：

1、形成了树结构，有助于更好的理解、掌握，且代码容易编写。

2、解析过程中，树结构保存在内存中，方便修改。

缺点：

1、由于文件是一次性读取，所以对内存的耗费比较大。

2、如果 XML 文件比较大，容易影响解析性能且可能会造成内存溢出。

```java
public class DOMTest {
    public static void main(String[] args) {
        //创建一个DocumentBuilderFactory的对象
        DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
        //创建一个DocumentBuilder的对象
        try {
            //创建DocumentBuilder对象
            DocumentBuilder db = dbf.newDocumentBuilder();
            //通过DocumentBuilder对象的parser方法加载books.xml文件到当前项目下
            Document document = db.parse("books.xml");
            //获取所有book节点的集合
            NodeList bookList = document.getElementsByTagName("book");
            //通过nodelist的getLength()方法可以获取bookList的长度
            System.out.println("一共有" + bookList.getLength() + "本书");
            //遍历每一个book节点
            for (int i = 0; i < bookList.getLength(); i++) {
                System.out.println("=================下面开始遍历第" + (i + 1) + "本书的内容=================");
                //通过 item(i)方法 获取一个book节点，nodelist的索引值从0开始
                Node book = bookList.item(i);
                //获取book节点的所有属性集合
                NamedNodeMap attrs = book.getAttributes();
                System.out.println("第 " + (i + 1) + "本书共有" + attrs.getLength() + "个属性");
                //遍历book的属性
                for (int j = 0; j < attrs.getLength(); j++) {
                    //通过item(index)方法获取book节点的某一个属性
                    Node attr = attrs.item(j);
                    //获取属性名
                    System.out.print("属性名：" + attr.getNodeName());
                    //获取属性值
                    System.out.println("--属性值" + attr.getNodeValue());
                }
                //解析book节点的子节点
                NodeList childNodes = book.getChildNodes();
                //遍历childNodes获取每个节点的节点名和节点值
                System.out.println("第" + (i+1) + "本书共有" +
                childNodes.getLength() + "个子节点");
                for (int k = 0; k < childNodes.getLength(); k++) {
                    //区分出text类型的node以及element类型的node
                    if (childNodes.item(k).getNodeType() == Node.ELEMENT_NODE) {
                        //获取了element类型节点的节点名
                        System.out.print("第" + (k + 1) + "个节点的节点名："
                        + childNodes.item(k).getNodeName());
                        //获取了element类型节点的节点值
                        System.out.println("--节点值是：" + childNodes.item(k).getFirstChild().getNodeValue());
                        //System.out.println("--节点值是：" + childNodes.item(k).getTextContent());
                    }
                }
                System.out.println("======================结束遍历第" + (i + 1) + "本书的内容=================");
            }
        } catch (ParserConfigurationException e) {
            e.printStackTrace();
        } catch (SAXException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

DOM
```

### 二、SAX 解析

SAX 的全称是 Simple APIs for XML，也即 XML 简单应用程序接口。与 DOM 不同，SAX 提供的访问模式是一种顺序模式，这是一种快速读写 XML 数据的方式。当使用 SAX 分析器对 XML 文档进行分析时，会触发一系列事件，并激活相应的事件处理函数，应用程序通过这些事件处理函数实现对 XML 文档的访问，因而 SAX 接口也被称作事件驱动接口。

优点：

1、采用事件驱动模式，对内存耗费比较小。

2、适用于只处理 XML 文件中的数据时。

缺点：

1、编码比较麻烦。

2、很难同时访问 XML 文件中的多处不同数据。

```java
public class SAXTest {
    /**
     * @param args
     */
    public static void main(String[] args) {
        //锟斤拷取一锟斤拷SAXParserFactory锟斤拷实锟斤拷
        SAXParserFactory factory = SAXParserFactory.newInstance();
        //通锟斤拷factory锟斤拷取SAXParser实锟斤拷
        try {
            SAXParser parser = factory.newSAXParser();
            //锟斤拷锟斤拷SAXParserHandler锟斤拷锟斤拷
            SAXParserHandler handler = new SAXParserHandler();
            parser.parse("books.xml", handler);
            System.out.println("~！~！~！共有" + handler.getBookList().size()
                    + "本书");
            for (Book book : handler.getBookList()) {
                System.out.println(book.getId());
                System.out.println(book.getName());
                System.out.println(book.getAuthor());
                System.out.println(book.getYear());
                System.out.println(book.getPrice());
                System.out.println(book.getLanguage());
                System.out.println("----finish----");
            }
        } catch (ParserConfigurationException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (SAXException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}

public class SAXParserHandler extends DefaultHandler {
    String value = null;
    Book book = null;
    private ArrayList<Book> bookList = new ArrayList<Book>();
    public ArrayList<Book> getBookList() {
        return bookList;
    }

    int bookIndex = 0;
    /**
     * 用来标识解析开始
     */
    @Override
    public void startDocument() throws SAXException {
        // TODO Auto-generated method stub
        super.startDocument();
        System.out.println("SAX解析开始");
    }

    /**
     * 用来标识解析结束
     */
    @Override
    public void endDocument() throws SAXException {
        // TODO Auto-generated method stub
        super.endDocument();
        System.out.println("SAX解析结束");
    }

    /**
     * 解析xml元素
     */
    @Override
    public void startElement(String uri, String localName, String qName,
            Attributes attributes) throws SAXException {
        //调用DefaultHandler类的startElement方法
        super.startElement(uri, localName, qName, attributes);
        if (qName.equals("book")) {
            bookIndex++;
            //创建一个book对象
            book = new Book();
            //开始解析book元素的属性
            System.out.println("======================开始遍历某一本书的内容=================");
            //不知道book元素下属性的名称以及个数，如何获取属性名以及属性值
            int num = attributes.getLength();
            for(int i = 0; i < num; i++){
                System.out.print("book元素的第" + (i + 1) +  "个属性名是："
                        + attributes.getQName(i));
                System.out.println("---属性值是：" + attributes.getValue(i));
                if (attributes.getQName(i).equals("id")) {
                    book.setId(attributes.getValue(i));
                }
            }
        }
        else if (!qName.equals("name") && !qName.equals("bookstore")) {
            System.out.print("节点名是：" + qName + "---");
        }
    }

    @Override
    public void endElement(String uri, String localName, String qName)
            throws SAXException {
        //调用DefaultHandler类的endElement方法
        super.endElement(uri, localName, qName);
        //判断是否针对一本书已经遍历结束
        if (qName.equals("book")) {
            bookList.add(book);
            book = null;
            System.out.println("======================结束遍历某一本书的内容=================");
        }
        else if (qName.equals("name")) {
            book.setName(value);
        }
        else if (qName.equals("author")) {
            book.setAuthor(value);
        }
        else if (qName.equals("year")) {
            book.setYear(value);
        }
        else if (qName.equals("price")) {
            book.setPrice(value);
        }
        else if (qName.equals("language")) {
            book.setLanguage(value);
        }
    }

    @Override
    public void characters(char[] ch, int start, int length)
            throws SAXException {
        // TODO Auto-generated method stub
        super.characters(ch, start, length);
        value = new String(ch, start, length);
        if (!value.trim().equals("")) {
            System.out.println("节点值是：" + value);
        }
    }
}

SAX
```

### 三、JDOM 解析

特征：

1、仅使用具体类，而不使用接口。

2、API 大量使用了 Collections 类。

```java
public class JDOMTest {
    private static ArrayList<Book> booksList = new ArrayList<Book>();
    /**
     * @param args
     */
    public static void main(String[] args) {
        // 进行对books.xml文件的JDOM解析
        // 准备工作
        // 1.创建一个SAXBuilder的对象
        SAXBuilder saxBuilder = new SAXBuilder();
        InputStream in;
        try {
            // 2.创建一个输入流，将xml文件加载到输入流中
            in = new FileInputStream("src/res/books.xml");
            InputStreamReader isr = new InputStreamReader(in, "UTF-8");
            // 3.通过saxBuilder的build方法，将输入流加载到saxBuilder中
            Document document = saxBuilder.build(isr);
            // 4.通过document对象获取xml文件的根节点
            Element rootElement = document.getRootElement();
            // 5.获取根节点下的子节点的List集合
            List<Element> bookList = rootElement.getChildren();
            // 继续进行解析
            for (Element book : bookList) {
                Book bookEntity = new Book();
                System.out.println("======开始解析第" + (bookList.indexOf(book) + 1)
                        + "书======");
                // 解析book的属性集合
                List<Attribute> attrList = book.getAttributes();
                // //知道节点下属性名称时，获取节点值
                // book.getAttributeValue("id");
                // 遍历attrList(针对不清楚book节点下属性的名字及数量)
                for (Attribute attr : attrList) {
                    // 获取属性名
                    String attrName = attr.getName();
                    // 获取属性值
                    String attrValue = attr.getValue();
                    System.out.println("属性名：" + attrName + "----属性值："
                            + attrValue);
                    if (attrName.equals("id")) {
                        bookEntity.setId(attrValue);
                    }
                }
                // 对book节点的子节点的节点名以及节点值的遍历
                List<Element> bookChilds = book.getChildren();
                for (Element child : bookChilds) {
                    System.out.println("节点名：" + child.getName() + "----节点值："
                            + child.getValue());
                    if (child.getName().equals("name")) {
                        bookEntity.setName(child.getValue());
                    }
                    else if (child.getName().equals("author")) {
                        bookEntity.setAuthor(child.getValue());
                    }
                    else if (child.getName().equals("year")) {
                        bookEntity.setYear(child.getValue());
                    }
                    else if (child.getName().equals("price")) {
                        bookEntity.setPrice(child.getValue());
                    }
                    else if (child.getName().equals("language")) {
                        bookEntity.setLanguage(child.getValue());
                    }
                }
                System.out.println("======结束解析第" + (bookList.indexOf(book) + 1)
                        + "书======");
                booksList.add(bookEntity);
                bookEntity = null;
                System.out.println(booksList.size());
                System.out.println(booksList.get(0).getId());
                System.out.println(booksList.get(0).getName());

            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (JDOMException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

JDOM
```

### 四、DOM4J 解析

特征：

1、JDOM 的一种智能分支，它合并了许多超出基本 XML 文档表示的功能。

2、它使用接口和抽象基本类方法。

3、具有性能优异、灵活性好、功能强大和极端易用的特点。

4、是一个开放源码的文件

```java
public class DOM4JTest {
    private static ArrayList<Book> bookList = new ArrayList<Book>();
    /**
     * @param args
     */
    public static void main(String[] args) {
        // 解析books.xml文件
        // 创建SAXReader的对象reader
        SAXReader reader = new SAXReader();
        try {
            // 通过reader对象的read方法加载books.xml文件,获取docuemnt对象。
            Document document = reader.read(new File("src/res/books.xml"));
            // 通过document对象获取根节点bookstore
            Element bookStore = document.getRootElement();
            // 通过element对象的elementIterator方法获取迭代器
            Iterator it = bookStore.elementIterator();
            // 遍历迭代器，获取根节点中的信息（书籍）
            while (it.hasNext()) {
                System.out.println("=====开始遍历某一本书=====");
                Element book = (Element) it.next();
                // 获取book的属性名以及 属性值
                List<Attribute> bookAttrs = book.attributes();
                for (Attribute attr : bookAttrs) {
                    System.out.println("属性名：" + attr.getName() + "--属性值："
                            + attr.getValue());
                }
                Iterator itt = book.elementIterator();
                while (itt.hasNext()) {
                    Element bookChild = (Element) itt.next();
                    System.out.println("节点名：" + bookChild.getName() + "--节点值：" + bookChild.getStringValue());
                }
                System.out.println("=====结束遍历某一本书=====");
            }
        } catch (DocumentException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}

DOM4J
```

### Final：比较总结

DOM4J 性能最好，连 Sun 的 JAXM 也在用 DOM4J。目前许多开源项目中大量采用 DOM4J，例如大名鼎鼎的 Hibernate 也用 DOM4J 来读取 XML 配置文件。如果不考虑可移植性，那就采用 DOM4J。

JDOM 和 DOM 在性能测试时表现不佳，在测试 10M 文档时内存溢出。在小文档情况下还值得考虑使用 DOM 和 JDOM。虽然 JDOM 的开发者已经说明他们期望在正式发行版前专注性能问题，但是从性能观点来看，它确实没有值得推荐之处。另外，DOM 仍是一个非常好的选择。DOM 实现广泛应用于多种编程语言。它还是许多其它与 XML 相关的标准的基础，因为它正式获得 W3C 推荐（与基于非标准的 Java 模型相对），所以在某些类型的项目中可能也需要它（如在 JavaScript 中使用 DOM）。

SAX 表现较好，这要依赖于它特定的解析方式－事件驱动。一个 SAX 检测即将到来的 XML 流，但并没有载入到内存（当然当 XML 流被读入时，会有部分文档暂时隐藏在内存中）。
