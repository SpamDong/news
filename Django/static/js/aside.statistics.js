window.g_ssc=window.g_ssc||"Mnews.v2";
window.nsc=window.g_ssc;
(function(b){var h=function(w,y,s,j,k,u,t){var p,q,A,x;
var z=w;
var n=w;
if("nodeType" in w&&w.nodeType>=1){z=window.event||w
}else{if(w){var v=w.srcElement||w.currentTarget||w.target;
if(v){n=h.findLink(v)
}}}if(!u){u=""
}x=h.gcp(n,z);
A=h.gl(y,s,j,x,"",0,h.st,u,t);
q=h.l(n,A);
h.sd(q);
return true
};
var a=b.ccsrv||"cc.naver.com";
var g=b.nsc||"decide.me";
h.vs="0.4.1";
h.md="cc";
h.pt=(window.location.protocol=="https:")?"https:":"http:";
h.ct=0;
h.ec=encodeURIComponent;
h.st=1;
function e(q,k,m,p,l,n){var j=b.g_nclk_proxy||"";
if(j&&q.href){q.href=j+h.ec(q.href)
}return h(q,k,m,p,l,n)
}function c(v,x,q,j,t,s){var n,p,z,w;
var y=v;
var k=v;
if("nodeType" in v&&v.nodeType>=1){y=window.event||v
}else{if(v){var u=v.srcElement||v.currentTarget||v.target;
if(u){k=h.findLink(u)
}}}if(!t){t=""
}w=h.gcp(k,y);
z=h.gl(x,q,j,w,"",0,h.st,t,s);
p=h.l(k,z);
h.sd(p);
return true
}h.findLink=function(j){var i=j;
while(i&&i.tagName!=="BODY"&&i.tagName!=="HTML"){if(i.tagName==="A"){break
}i=i.parentNode
}if(i.tagName!=="A"){i=j
}return i
};
h.l=function(m,j){var i,n,k;
if(m&&m.href){n=m.tagName.toLowerCase();
k=m.href.toLowerCase();
if(k&&k.indexOf(h.pt+"//"+a)==0){i=m.href
}else{if(k&&k.indexOf(h.pt+"//"+a)!=0&&n&&n!="img"){i=j+"&u="+h.ec(m.href)
}}return i
}return j+"&u=about%3Ablank"
};
h.sd=function(i,k){var m=0;
var p;
if(h.ct>0){var j=new Date().getTime();
i+="&nt="+j
}if(typeof k=="function"){m=1
}var n=new Image();
n.src=i;
n.onload=function(){if(p){clearTimeout(p)
}if(m){k()
}n.onload=null;
return
};
n.onerror=function(){if(p){clearTimeout(p)
}if(m){k()
}n.onerror=null;
return
};
if(m){p=setTimeout(function(){k()
},5000)
}h.ct++
};
h.gl=function(z,q,j,x,A,n,C,v,t){var B=b.g_ssc||"";
var w=b.g_query||"";
var k=b.lcs_get_lpid||null;
var y=b.g_pid||"";
var p=b.g_sid||"";
if(n==undefined){n=1
}if(C==undefined){C=1
}var o=h.pt+"//"+a+"/"+h.md+"?a="+z+"&r="+j+"&i="+q+"&m="+n;
if(C==1){if(B){o+="&ssc="+B
}if(w){o+="&q="+h.ec(w)
}if(p){o+="&s="+p
}if(t){o+="&p="+t
}else{if(y){o+="&p="+y
}else{if(k){o+="&p="+k()
}else{console.warn("'g_pid / lcs_get_lpid' is not exist.")
}}}}else{o+="&nsc="+g;
console.warn("[DEPRECATED] NSC mode")
}if(v){o+="&g="+v
}if(A){o+="&u="+h.ec(A)
}if(x){o+=x
}return o
};
h.al=function(k,j){var i=window;
if(i.addEventListener){i.addEventListener(k,j,false)
}else{if(i.attachEvent){i.attachEvent("on"+k,j)
}}};
h.oo="";
h.of="";
if("onpageshow" in window){h.al("pageshow",function(){h.oo.onclick=h.of
})
}h.go=function(k){var j;
var i=k.onclick;
k.onclick="";
h.oo=k;
h.of=i;
if(document.createEvent){j=document.createEvent("MouseEvents");
j.initMouseEvent("click",false,false,window,0,0,0,0,0,false,false,false,false,0,null);
k.dispatchEvent(j)
}else{if(document.createEventObject){k.fireEvent("onclick")
}else{if(MouseEvent){j=new MouseEvent("click",{bubbles:false,cancelable:false,view:window});
k.dispatchEvent(j)
}}}k.onclick=i
};
h.gsbw=function(){var k=document.createElement("p");
k.style.width="200px";
k.style.height="200px";
var l=document.createElement("div");
l.style.position="absolute";
l.style.top="0px";
l.style.left="0px";
l.style.visibility="hidden";
l.style.width="200px";
l.style.height="150px";
l.style.overflow="hidden";
l.appendChild(k);
document.body.appendChild(l);
var j=k.offsetWidth;
l.style.overflow="scroll";
var i=k.offsetWidth;
if(j==i){i=l.clientWidth
}document.body.removeChild(l);
return(j-i)
};
h.fp=function(j){var k=curtop=0;
try{if(j.offsetParent){do{k+=j.offsetLeft;
curtop+=j.offsetTop
}while(j=j.offsetParent)
}else{if(j.x||j.y){if(j.x){k+=j.x
}if(j.y){curtop+=j.y
}}}}catch(i){}return[k,curtop]
};
h.ws=function(k){if(!k){k=window
}var i=0;
if(k.innerWidth){i=k.innerWidth;
if(typeof(k.innerWidth)=="number"){var j=h.gsbw();
i=k.innerWidth-j
}}else{if(document.documentElement&&document.documentElement.clientWidth){i=document.documentElement.clientWidth
}else{if(document.body&&(document.body.clientWidth||document.body.clientHeight)){i=document.body.clientWidth
}}}return i
};
h.ci=function(q){var m=document.URL;
var o=q.parentNode;
var i;
var k;
var j;
if(o==null||o==undefined){return false
}while(1){if(o.nodeName.toLowerCase()=="#document"){if(o.parentWindow){i=o.parentWindow
}else{i=o.defaultView
}try{if(i.frameElement!=null&&i.frameElement!=undefined){if(i.frameElement.nodeName.toLowerCase()=="iframe"){k=i.frameElement.id;
if(!k){return false
}return k
}else{return false
}}else{return false
}}catch(n){return false
}}else{o=o.parentNode;
if(o==null||o==undefined){return false
}}}};
h.gcp=function(o,q){var s=-1;
var r=-1;
var u=-1;
var t=-1;
var j,i,m;
var k="";
var n=window.event?window.event:o;
if(q){n=q||window.event
}try{bw=h.ws(window);
m=h.ci(o);
if(m){var p=h.fp(document.getElementById(m));
if(n.clientX&&n.clientX!=undefined){j=document.body;
if(j.clientLeft&&j.clientTop){ifrSx=n.clientX-j.clientLeft;
ifrSy=n.clientY-j.clientTop
}else{ifrSx=n.clientX;
ifrSy=n.clientY
}}u=p[0]+ifrSx;
t=p[1]+ifrSy;
if(document.body&&(document.body.scrollTop||document.body.scrollLeft)){j=document.body;
s=u-j.scrollLeft;
r=t-j.scrollTop
}else{if(document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)){i=document.documentElement;
s=u-i.scrollLeft;
r=t-i.scrollTop
}else{s=u;
r=t
}}}else{if(n.clientX&&n.clientX!=undefined){j=document.body;
if(j.clientLeft&&j.clientTop){s=n.clientX-j.clientLeft;
r=n.clientY-j.clientTop
}else{s=n.clientX;
r=n.clientY
}}if(document.body&&(document.body.scrollTop||document.body.scrollLeft)){u=document.body.scrollLeft+(s<0?0:s);
t=document.body.scrollTop+(r<0?0:r)
}else{if(document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)){i=document.documentElement;
if(i.scrollLeft!=undefined){u=i.scrollLeft+(s<0?0:s)
}if(i.scrollTop!=undefined){t=i.scrollTop+(r<0?0:r)
}}else{u=(s<0?0:s);
t=(r<0?0:r)
}}if(n.pageX){u=n.pageX
}if(n.pageY){t=n.pageY
}}}catch(q){}if((u!=-1)&&(t!=-1)){k+="&px="+u+"&py="+t
}if((s!=-1)&&(r!=-1)){k+="&sx="+s+"&sy="+r
}return k
};
function d(j,l,n,k,m){window.location.href=h.gl(j,l,n,k,1,h.st,m)
}function f(k,n,p,q,o,m){var m=m||"about:blank";
var j=h.gl(k,n,p,m,0,h.st,o);
h.sd(j,q)
}b.nclk_proxy=e;
b.nclk=h;
b.nclk_v2=c;
b.nclkR=d;
b.nclkF=f
})(window);