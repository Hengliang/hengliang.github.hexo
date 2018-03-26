---
title: ECLIPSE熟手尝试IDEA实践指南
tags:
  - programming
  - eclipse
  - idea
  - ide
date: 2017-07-10 01:12:00
---


<style>
kbd {
    display: inline-block;
    margin: 0 .1em;
    padding: .1em .6em;
    font-family: Arial,"Helvetica Neue",Helvetica,sans-serif;
    font-size: 11px;
    line-height: 1.4;
    color: #242729;
    text-shadow: 0 1px 0 #FFF;
    background-color: #e1e3e5;
    border: 1px solid #adb3b9;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(12,13,14,0.2), 0 0 0 2px #FFF inset;
    white-space: nowrap;
}
</style>

[Advantages of IDE](What are the advantages of Eclipse IDE?)

名词解释

- [Eclipse](https://www.eclipse.org/users/)
- [IDEA](https://www.jetbrains.com/idea/)

其实一开始关于是否要使用`IDEA`，我是很拒绝的。首先是`Eclipse`我已经使用了很多年，非常顺手。其次，在繁重的开发进度之下，更换一个顺手的`IDE`，短期内必然影响效率，对于业务目标，这个动作显得无关紧要。因此，虽然`IDEA`名声在外，我也早有耳闻，尽管还有时被同事挑战`Eclipse`丑陋无比，并且在`Macbook`上无论怎么优化都存在的卡顿感，我还是会“强烈”的维护`Eclipse`的“尊严”。只到我看见同事使用`IDEA`码速如飞，在给一个方法传字符串显示如下情景时，那一刻我触动了，感觉有那么一丝美妙。

![Method Argument Tips](/resources/images/blog/eclipse-to-idea/method-argument-tips.png)

没错，就是传参如果是字面量，`IDEA`会在参数前自动附上参数定义的名称，这感觉太棒啦。现在回想，其实对于字面量写上注释会更好，毕竟使用`Sublime Text`打开也是需要能够准确理解该传参意义的，不过至少`IDEA`的用户很爽了。

当然，这里不是给`IDEA`说好话的，但我作为一个老`Eclipse`用户，在尝试了一个多月的`IDEA`之后，也算趟了一些坑，下面就分享给大家，绝对可以作为优雅的从`Eclipse`切换到`IDEA`的参考指南。总的来说，`IDEA`在`MacOS`上的表现是胜过`Eclipse`的，其他平台我暂没对比过，正在使用`Eclipse`的`Java`开发者们，如果有兴趣，推荐尝试一下`IDEA`，保证不亏。


## 第一步：乾坤大挪移

啥？乾坤大挪移！？其实就是换个工具。但是换工具可不简单，原来的工具使用得越是熟练，切换初期越是难受，肯定会发牢骚为什么这个功能都没有，或者是为什么要这么麻烦才能使用。这些我认为还算是好的，也就是个肌肉记忆的过程，伤害的也就是自己而已。但如果正好恰巧在繁忙的工作中，不留神使用了一个在新工具上不熟悉但和老工具很相似的功能，而造成了一些不可逆的错误，那才是最要命的。所以我非常强烈建议数据库客户端不要随便换，顺手就好，不要问我为啥知道这些🤣

上面说了那么多，其实是为了制造一些“恐慌”，哈哈，好让大家认真看看接下来的内容。说真的，这些注意事项绝对会让你从`Eclipse`切换`IDEA`的过程流畅很多，亲测有效。

开始之前，记住如何使用`IDEA`设置的秘诀：

- 打开设置窗口：<kbd>⌘,</kbd>
- 使用左上角**搜索**快速设置`IDEA`

### 快捷键设置

相信这件事情不用解释，风骚操作的前提是吧。
首先，设置`Keymap`：复制 `Eclipse (Mac OS X)`，再设置如下快捷键与`Eclipse`一致（同样建议使用`Keymap`中的搜索功能，下面的条目都是可以直接搜索出来的）

 - Code Complete: <kbd>⌥/</kbd>
 - Implementation: <kbd>⌘ Button 1 Click</kbd>（快速进入实现类）
 - Replace: <kbd>⌘F</kbd>
 - Refactor: <kbd>⌥⌘R</kbd>
 - Generate: <kbd>⌘N</kbd>

除了上面需要手动修改的快捷键，`IDEA`还有一些快捷键：

- Workspace搜索：<kbd>⌃H</kbd>
- Search Everywhere：Double Clike <kbd>Shift</kbd>

## 第二步：葵花宝典

操作方式搞定，接下来就是个性化啦，主要包括`主题`设置与`插件`设置两部分内容。

### 主题设置

`IDEA`主题分为`Workspace主题`与`Editor主题`两部分，`Workspace主题`只能通过主题插件来改变，例如文件图标，IDE框架颜色，Tab设置等。

![Material Theme Plugin View](/resources/images/blog/eclipse-to-idea/material-theme-plugin-view.png)

`Editor主题`则简单很多，在[ColorThemes](http://color-themes.com/)下载一个喜欢的主题，然后`Import`即可。

主题推荐如下，好不好试过才知道哟😏

- Wordspace主题：[`Material Theme`](https://plugins.jetbrains.com/plugin/8006-material-theme-ui)
- Editor主题：[`Ladies Night 2`](http://color-themes.com/?view=theme&id=566065a4ddacef1b003edb63)（ColorThemes人气王还是有道理的）
- 字体：Mac上推荐用[`Anonymous`](https://www.fontsquirrel.com/fonts/anonymous-pro)

### 插件设置

工欲善其事，必先利其器，`IDEA`社区有很多高质插件可供使用，这里只推荐一个。

- `Save Actions`：`IDEA`默认是`自动保存`的，但是并没有像`Eclipse`设置保存动作的功能。例如，保存时自动去除多余空行，自动添加`@Override`标注，整理`import`引用等等，这些行为需要通过安装`Save Actions`插件实现。

![Save Action Plugin View](/resources/images/blog/eclipse-to-idea/save-action-plugin-view.png)

## 第三步：左右互搏

标题名字随便起的，这里想说的是，`IDE`只是工具，我们自己用得顺手就好，它们都有各自的优缺点，喜欢就好，也不是每个人都爱好折腾工具的对吧，要不怎么大神都总是用`神之编辑器`或者`编辑器之神`呢。

下面简单列了一些关于`Eclipse`和`IDEA`各自独有的小特点，某些特殊场景还是挺使用的。

### Eclipse Pros

- Checkstyle Plugin：能够直接指定按目录执行`Checkstyle`检查
- Code Template：支持导入代码模版，`IDEA`暂不支持
- Multiple Projects：多项目支持，可以很方便的供用`Workspace Settings`

### IDEA Pros

- Decompiler：初始安装的插件`Java Bytecode Decompiler`，支持反编译Class文件，查看第三方无附加源码的Lib非常方便
- Markdown Support：初始安装的插件`Markdown Support`，支持`md`文件即时可视编辑
- 自动转译粘贴的字符串中的冒号：向字符串中粘贴`{"idea":"awesome"}`，或自动转译成`{\"idea\":\"awesome\"}`，使用`JSON`时非常方便


以上就是我使用`IDEA`的一些记录，希望对你有所帮助。

## [Update]2017-11-29

- `JetBrains`推出了关于它家工具的一篮子解决方案，强烈推荐：[JetBrains ToolBox](https://www.jetbrains.com/toolbox/)
![JetBrains ToolBox](/resources/images/blog/eclipse-to-idea/jetbrains-toolbox.png)
- `IDEA`的查找(<kbd>⌃H</kbd>)太好用啦，可以直接在查找结果理修改代码，这对重构改名即方便又安心 💯

## [Update]2017-12-02

- 在`IDEA`中`Editor`下方的面包屑非常好用，在代码逻辑层级中跳转和查看很方便也很直观