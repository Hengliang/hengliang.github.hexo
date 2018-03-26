---
title: 'Hexo Tricks'
date: 2016-05-21 22:12:38
tags:
  - hexo
---


<style>
    span.notice {
        color: #FE007F;
    }
    .posts-expand .fancybox img {
        margin: 0;
    }

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

`Hexo`是一个基于`Node.js`的静态博客框架，由[`@tommy351`](https://twitter.com/tommy351)创建，按其对自己的描述就是：

> A fast, simple & powerful blog framework

本文只会介绍`Hexo`一些个性化设置的方法，至于如何使用`Hexo`搭建独立博客可以参考[这篇文章](http://www.jianshu.com/p/973e718e3096)。同时，在开始使用`Hexo`之前，强烈推荐先阅读一下[`Hexo Docs`](https://hexo.io/zh-cn/docs/index.html)，该文档可以让你对怎样使用`Hexo`有一个比较全面清晰的概念。

<span class="notice">[**注意**]</span> 以下内容基于[`NexT Theme`](http://theme-next.iissnan.com/) & [`Github`](https://github.com)演绎 😉

## ✔︎ README.md

首次使用`hexo d -g`发布到`Github`之后，会发现项目的首页出了文件列表，下面的介绍说明还是空白的。按照`Github`的规则，我们在项目根目录下添加`README.md`就好了。但是，如果在`Github`页面上使用`Create new file`创建`README.md`的话，在你下一次`Hexo`发布时会发现`README.md`会被删除掉。

正确的方法就是在`source`目录下创建`README.md`，这样就没有问题啦。

## ✔ Favicon.ico

接下来，选择一个自己喜欢的图片作为博客的`Favicon`吧，参考[这里](http://theme-next.iissnan.com/faqs.html#favicon)。

> ![Mario's Favicon](http://7xrkrd.com1.z0.glb.clouddn.com/mario-favicon.png)

## ✔ 404.html

当访问博客不存在的地址时，默认会显示`Github`的`404`页面，如果你觉得这样不符合心意，也可以设置自己的`404`，过程非常简单。我们只需在`source`目录下新建一个`404.html`文件就可以了，内容可以自定义，也可以使用[腾讯公益404页面](http://theme-next.iissnan.com/theme-settings.html#volunteer-404)。

需要注意，自定义`404`页面只能用于顶级域名(如`techoffee.me`)，而对于`GitHub`的二级域名(如`hengliang.github.io`)是不起作用的。另外，在使用`hexo server`本机调试时也没有作用，此时访问不存在的页面只会显示找不到指定路径。

> Cannot GET /nothing/

## ✔ 使用`HTML`标签

因为`Markdown`本身理念就是简洁，所以对于繁杂的细节排版并不合适。例如，调整某个字体的大小或者颜色。但是在`Hexo`中使用`Markdown`写作时，如果有特殊的排版需求，我们则可以通过`HTML`标签来实现。例如上面“注意”二字，正是使用了以下的`HTML`标签。

```html
<style>
    span.notice {
        color: #FE007F;
    }
</style>

<span class="notice">[**注意**]</span>
```

所以，如果想在文章中插入自己的视频，除了使用`Hexo`插件，也可以使用`<video>`标签。

## ✔ 使用KeyStroke样式

参考正上方技巧，填加`HTML`元素`kbd`的样式，参考自[`StackExchange`](https://meta.stackexchange.com/questions/70356/key-stroke-combination-markdown)。

```html
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
```

然后在文章中输入

```html
<kbd>K</kbd><kbd>E</kbd><kbd>Y</kbd>
<kbd>S</kbd><kbd>T</kbd><kbd>R</kbd><kbd>O</kbd><kbd>K</kbd><kbd>E</kbd>
```

效果如下：

<kbd>K</kbd><kbd>E</kbd><kbd>Y</kbd>
<kbd>S</kbd><kbd>T</kbd><kbd>R</kbd><kbd>O</kbd><kbd>K</kbd><kbd>E</kbd>

## ✔ 使用页内跳转

在阅读文章时，我们会引用一些资料，通常我们会在引用的内容后放置`页面内引用`标记来关联实际的资料地址，在`Hexo`中可以按以下方式使用`页面内引用`。

效果：点击`页面内标记`跳转至`文章底部原始资料地址`

```html
// 文章内引用标记
// - `<sup>`: 上标`HTML`元素标记
// - `[1](#1)`: 页面内标记
图片收纳应用<sup>[1](#1)</sup>

// 文章底部原始资料地址(注意`id`要与对应的页面内标记相同)
更多Mac工具可以查看：<span id="1">[Mac奇妙工具清单](/mac/tools)</span>
```

## ✔ 使用第三方服务

作为一个博客的管理者，当然不是只写写文章就什么都不管啦。例如，我们需要关注每篇文章大家的反应，需要知道每天博客的访问量是多少，需要让自己的文章能够被更多分享。幸运的是，`NexT Theme`已经集成了一部分这些服务，具体可以参考[`NexT第三方服务集成`](http://theme-next.iissnan.com/third-party-services.html)。

## ✔ `Hexo`资源列表

最后，善用以下的资源，会让你遇见更好的`Hexo` 😋

- [Hexo Docs](https://hexo.io/zh-cn/docs/index.html): `Hexo`官方文档，介绍了`Hexo`的使用方式与内部细节。
- [Hexo Plugins](https://hexo.io/plugins/): `Hexo`官方插件库
- [Hexo Themes](https://hexo.io/themes/): `Hexo`官方主题库
- [图灵社区Hexo文章合集](http://www.ituring.com.cn/minibook/29442)
- [NexT FAQ](http://theme-next.iissnan.com/faqs.html)