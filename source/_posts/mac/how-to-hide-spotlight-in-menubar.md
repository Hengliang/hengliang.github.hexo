---
title: 'MacOS: How to hide the `Spotlight` icon in menubar'
date: 2017-12-10 16:47:20
tags:
  - mac
  - tricks
---

<style>
    img {
        margin: auto !important;
    }
</style>

![Mac Menubar](/resources/images/blog/mac/mac-menu-bar-101.png)

如上图，为什么一定要隐藏掉`Spotlight`在`Menubar`中的那么一个<kbd><i class="fa fa-search"></i></kbd>小图标呢？

![Why](/resources/images/blog/sticker/emotion/why-101.jpg)

因为正常来说，我们一般都会使用快捷键<kbd>^Space</kbd>呼出`Spotlight`，此时在`Menubar`上的小图标就略显多余。并且在黄金地段占用了一格关键的位置，要知道`Menubar`从来都是寸土寸金的好伐，实在令人心疼。这么充实的理由，难道不应该将其移除吗？

![It's TRUE](/resources/images/blog/sticker/emotion/it-is-true.png)

> Tips: `Spotlight`小图标是不能删掉的，只能通过障眼法将其移除到主流视线之外。


## ✎ Use Bartender

`Bartender`是一款简单好用的`Menubar`图标收纳应用<sup>[1](#1)</sup>，使用`Bartender3`可以将`Spotlight`轻松收纳到它的次级`Menubar`中。非常实用，强烈推荐。

![Bartender 3](/resources/images/blog/mac/bartender-3.png)

不知道`Bartender3`为什么要把主题换成绿色，而且还绿得发亮 😂

![Bartender 3 Menu Items](/resources/images/blog/mac/bartender-3-menu-items.png)

需要注意，使用`Bartender`管理系统图标时，可能会遇到`SIP`<sup>[2](#2)</sup>安全管理的问题，`Bartender3`已经自动安装了相关组件，`Bartender2`需要手动安装。

![Bartender System Component](/resources/images/blog/mac/bartender-2-2.png)

如果上面两个版本都不能在`Bartender`中看到系统图标选项，那么可以试试这个方法(笔者并没有试过😎)：

[Hide icon spotlight in El Capitan](https://stackoverflow.com/a/32921757)


## ✎ Hacking

如果不想使用任何工具来达到隐藏`Spotlight`图标的效果，也是有大神支招的，可以参考这个答案：

[How do I hide the Spotlight icon on Yosemite, but keep the Spotlight functionality?](https://apple.stackexchange.com/a/186849)

虽然答案中最后有注明还原方法，但是保险起见，在任何修改之前还是遵守一般守则记得备份吧！备份！备份！

## ✎ Menubar Tips

完成控制哪些图标可以显示之后，你肯定会问：怎么调整图标的位置呀？很简单，可以按住<kbd>⌘</kbd>，然后在`Memubar`上直接使用鼠标拖动来调整各个图标的位置就可以啦。

---

1. 更多Mac工具可以查看：<span id="1">[Mac奇妙工具清单](/mac/tools)</span>
2. <span id="2">[About System Integrity Protection on your Mac](https://support.apple.com/en-us/HT204899)</span>