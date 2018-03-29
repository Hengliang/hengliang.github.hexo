---
title: Geeker Album
date: 2018-03-29 00:00:00
description: Pictures/Photos for Geekers. <br/> 与极客和编程有关的相册
keywords: geek, geeker, album, gallery
tags: geek, picture
---

<style>
.techoffee.album {
  text-align: center;
}
.techoffee.album br {
  text-align: center;
  margin: 0;
  padding: 0;
}
.techoffee.album .title {
  text-align: center;
  margin: 0;
  padding: 0;
  border-bottom: 1px dashed #ccc;
}
.techoffee.album .pic {
  display: inline-block;
  text-align: center;
  width: 45%;
  margin: 5px;
  box-shadow: #777 2px 3px 8px;
  cursor: pointer;
}
.techoffee.album .pic .description {
  /* display: none; */
  font-size: 10px;
}
.techoffee.album .pic img {
  margin: 0;
}
</style>


<div id="techoffeeAlbum" class="techoffee album"><p class="title">/// 点击在新窗口查看大图 ///</p>
  <div class="pic"><img src="/resources/images/album/frontend-build-progress.png" /><div class="description">The evolution of Homo Frontendalis. Source:blog.qmo.io</div></div>

  <div class="pic" style="visibility:hidden"></div>
</div>

<script>
window.onload = function (){
  $(".techoffee.album .pic").click(function (){
    window.open($(this).find('img').attr('src'));
    console.log($(this).attr('src'))
	});
}
</script>