"use strict";$(function(){var s=$id("mirror"),i=$id("zoom"),l=$id("bigimg"),n=$tag("img",l)[0];s.onmousemove=function(t){t=t||window.event,i.style.display="block",l.style.display="block";var e=document.documentElement.scrollTop||document.body.scrollTop,o=t.clientX-s.offsetLeft-i.offsetWidth/2,f=t.clientY-s.offsetTop-i.offsetHeight/2+e;o<0&&(o=0),f<0&&(f=0),o>s.offsetWidth-i.offsetWidth&&(o=s.offsetWidth-i.offsetWidth),f>s.offsetHeight-i.offsetHeight&&(f=s.offsetHeight-i.offsetHeight),n.style.left=-2*o+"px",n.style.top=-2*f+"px",i.style.left=o+"px",i.style.top=f+"px"},s.onmouseleave=function(){i.style.display=l.style.display="none"}});