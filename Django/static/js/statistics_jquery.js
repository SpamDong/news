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
(function(f){var h,d,g=f.document;
if(typeof BMR==="undefined"){BMR={}
}if(BMR.v){return
}h={v:"t5",cN:"BMR=",bU:"",aL:function(a,b){if(f.addEventListener){f.addEventListener(a,b,false)
}else{if(f.attachEvent){f.attachEvent("on"+a,b)
}}},sT:function(){h.sC({s:new Date().getTime(),r:g.URL.replace(/#.*/,""),r2:g.referrer.replace(/#.*/,"")})
},eU:function(a){return encodeURIComponent(a)
},sC:function(b){var a="",c;
for(c in b){if(b.hasOwnProperty(c)){a+="&"+h.eU(c)+"="+h.eU(b[c])
}}a=a.replace(/^&/,"");
g.cookie=h.cN+a+"; path=/; domain="+f.location.hostname.replace(/.*?([^.]+\.[^.]+)\.?$/,"$1").toLowerCase()
},gC:function(){var c,e=g.cookie+";",i,l,a,b={};
if(!((c=e.indexOf(h.cN))>=0)){return null
}c+=h.cN.length;
i=e.substring(c,e.indexOf(";",c)).split("&");
if(i.length===0){return null
}for(c=0,l=i.length;
c<l;
c++){a=i[c].split("=");
a.push("");
b[decodeURIComponent(a[0])]=decodeURIComponent(a[1])
}return b
},run:function(a){if(!a){return
}var b=function(){if(h.sT){h.sT.call()
}h.sT=null
};
h.bU=a;
if("onpagehide" in f){h.aL("pagehide",b)
}else{h.aL("unload",b);
h.aL("beforeunload",b)
}h.aL(("onpageshow" in f)?"pageshow":"load",function(){h.done.call()
})
},done:function(){var c,e,j=g.URL.replace(/#.*/,""),a=r2=g.referrer.replace(/#.*/,""),b=h.gC();
h.sC({});
if(b!=null){a=b.r;
if(a==r2&&(a!=b.r2||a!=j)){e=new Date().getTime()-parseInt(b.s,10);
j=h.bU+"?v="+h.v+"&t="+e+"&u="+h.eU(j)+"&r="+h.eU(a);
(new Image()).src=j
}}}};
for(d in h){if(h.hasOwnProperty(d)){BMR[d]=h[d]
}}}(window));
(function(z){var t={nnb:true};
var u="v0.6.0";
var h={};
var g={};
var C={};
var n=0;
function s(G){if(!window.lcs_SerName){window.lcs_SerName="lcs.naver.com"
}var H="";
var K;
var J;
var M=document;
var F=window.location;
var N;
try{N=(F.protocol?F.protocol:"http:")+"//"+window.lcs_SerName+"/m?"
}catch(L){return
}try{H=N+"u="+encodeURIComponent(F.href)+"&e="+(M.referrer?encodeURIComponent(M.referrer):"")
}catch(L){}try{if(typeof h.i=="undefined"){h.i=""
}if(n<1){v();
if(t.nnb){q()
}h.ct=x();
j();
b();
m()
}for(K in g){if(typeof g[K]!=="function"){H+="&"+K+"="+encodeURIComponent(g[K])
}}for(K in h){J=h[K];
if(J!==undefined&&typeof J!=="function"){H+="&"+K+"="+encodeURIComponent(J)
}}if(n<1){for(K in C){J=C[K];
if(J){H+="&"+K+"="+encodeURIComponent(J)
}}}for(K in G){if((K.length>=3&&typeof G[K]!=="function")||K==="qy"){H+="&"+K+"="+encodeURIComponent(G[K])
}}if(!!G===false||!!G.pid===false){var E;
if(window.g_pid){E=g_pid
}else{E=i()
}H+="&pid="+encodeURIComponent(E)
}var D=new Date().getTime();
H+="&ts="+D;
H+="&EOU";
var I=document.createElement("img");
I.src=H;
I.onload=function(){I.onload=null;
return
};
n++
}catch(L){return
}}function a(E,D){try{if(E){h.i=E;
if(D){s(D)
}else{s()
}}}catch(F){}}function q(){try{var E=localStorage;
if(E){if(E.ls){var F=E.ls;
if(F.length==13){h.ls=F;
return
}}var D=f();
if(D!=null&&D!=""){E.ls=D;
h.ls=D
}}}catch(G){}}function v(){g.os=k();
g.ln=B();
g.sr=c();
g.pr=window.devicePixelRatio||1;
var D=o();
g.bw=D.bw;
g.bh=D.bh;
g.c=A();
g.j=d();
g.k=y()
}function k(){var D="";
try{navigator.platform?(D=navigator.platform):""
}catch(E){}return D
}function B(){var D="";
try{navigator.userLanguage?(D=navigator.userLanguage):navigator.language?(D=navigator.language):""
}catch(E){}return D
}function c(){var F="";
try{if(window.screen&&screen.width&&screen.height){F=screen.width+"x"+screen.height
}else{if(window.java||self.java){var D=java.awt.Toolkit.getDefaultToolkit().getScreenSize();
F=D.width+"x"+D.height
}}}catch(E){F=""
}return F
}function o(){var F=document;
var D={bw:"",bh:""};
try{D.bw=F.documentElement.clientWidth?F.documentElement.clientWidth:F.body.clientWidth;
D.bh=F.documentElement.clientHeight?F.documentElement.clientHeight:F.body.clientHeight
}catch(E){}return D
}function A(){var D="";
try{if(window.screen){D=screen.colorDepth?screen.colorDepth:screen.pixelDepth
}else{if(window.java||self.java){var F=java.awt.Toolkit.getDefaultToolkit().getColorModel().getPixelSize();
D=F
}}}catch(E){D=""
}return D
}function d(){var D="";
try{D=navigator.javaEnabled()?"Y":"N"
}catch(E){}return D
}function y(){var D="";
try{D=navigator.cookieEnabled?"Y":"N"
}catch(E){}return D
}function f(){try{var G=document.cookie;
var F,E,H,D=G.split(";");
for(H=0;
H<D.length;
H++){F=D[H].substr(0,D[H].indexOf("="));
E=D[H].substr(D[H].indexOf("=")+1);
F=F.replace(/^\s+|\s+$/g,"");
if(F=="NNB"){return unescape(E)
}}}catch(I){}}function x(){var I="";
try{var G=navigator.connection||navigator.mozConnection||navigator.webkitConnection;
if(G&&typeof G.type!="undefined"){switch(G.type){case G.CELL_2G:I="2g";
break;
case G.CELL_3G:I="3g";
break;
case G.CELL_4G:I="4g";
break;
case G.WIFI:I="wifi";
break;
case G.ETHERNET:I="eth";
break;
case G.UNKNOWN:I="unknown";
break;
case G.NONE:I="none";
break;
default:I=""
}}else{if(typeof blackberry!="undefined"&&typeof blackberry.network!="undefined"){var F=blackberry.network;
if(F=="Wi-Fi"){I="wifi"
}else{if(F=="3G"){I="3g"
}else{I=F
}}}else{var E=navigator.appName=="Microsoft Internet Explorer";
var D=navigator.userAgent.indexOf("MAC")>=0;
if(E&&!D&&J&&J.addBehavior){var J=document.body;
var L="";
var H=J.addBehavior("#default#clientCaps");
I=J.connectionType;
J.removeBehavior(H)
}}}}catch(K){console.warn(K)
}return I
}function j(){var G=window.performance||{};
if(G.timing){var F=G.timing;
for(var D in F){var E=F[D];
if(typeof E==="number"){C[D]=E
}}}}function b(){var F=window.performance||{};
try{if(F.getEntriesByType){var E=F.getEntriesByType("paint");
E.forEach(function(I,J,G){var H=I.name;
switch(H){case"first-paint":case"first-contentful-paint":C[H]=I.startTime;
break;
default:break
}})
}else{}}catch(D){console.warn(D)
}}function m(){var D=w();
if(D!==undefined){C.ngt=D
}}function w(){var D=window.performance||{};
if(D.navigation){return D.navigation.type
}return
}var r=null;
function e(){var H;
var D=localStorage.ls;
if(D){H=D
}else{var E;
E=navigator.userAgent+Math.random();
H=E
}var I=window.performance||{};
var G=location.href;
var F;
if(I.now){F=I.now()
}else{F=new Date().getTime()
}r=l.md5(H+G+F);
return r
}function i(){if(r===null){r=e()
}return r
}function p(){r=e();
return r
}var l={};
(function(S){function R(X,aa){var Z=(X&65535)+(aa&65535);
var Y=(X>>16)+(aa>>16)+(Z>>16);
return(Y<<16)|(Z&65535)
}function Q(X,Y){return(X<<Y)|(X>>>(32-Y))
}function L(ac,Z,Y,X,ab,aa){return R(Q(R(R(Z,ac),R(X,aa)),ab),Y)
}function D(Z,Y,ad,ac,X,ab,aa){return L((Y&ad)|(~Y&ac),Z,Y,X,ab,aa)
}function I(Z,Y,ad,ac,X,ab,aa){return L((Y&ac)|(ad&~ac),Z,Y,X,ab,aa)
}function O(Z,Y,ad,ac,X,ab,aa){return L(Y^ad^ac,Z,Y,X,ab,aa)
}function V(Z,Y,ad,ac,X,ab,aa){return L(ad^(Y|~ac),Z,Y,X,ab,aa)
}function F(ah,ac){ah[ac>>5]|=128<<ac%32;
ah[(((ac+64)>>>9)<<4)+14]=ac;
var Z;
var ab;
var aa;
var Y;
var X;
var ag=1732584193;
var af=-271733879;
var ae=-1732584194;
var ad=271733878;
for(Z=0;
Z<ah.length;
Z+=16){ab=ag;
aa=af;
Y=ae;
X=ad;
ag=D(ag,af,ae,ad,ah[Z],7,-680876936);
ad=D(ad,ag,af,ae,ah[Z+1],12,-389564586);
ae=D(ae,ad,ag,af,ah[Z+2],17,606105819);
af=D(af,ae,ad,ag,ah[Z+3],22,-1044525330);
ag=D(ag,af,ae,ad,ah[Z+4],7,-176418897);
ad=D(ad,ag,af,ae,ah[Z+5],12,1200080426);
ae=D(ae,ad,ag,af,ah[Z+6],17,-1473231341);
af=D(af,ae,ad,ag,ah[Z+7],22,-45705983);
ag=D(ag,af,ae,ad,ah[Z+8],7,1770035416);
ad=D(ad,ag,af,ae,ah[Z+9],12,-1958414417);
ae=D(ae,ad,ag,af,ah[Z+10],17,-42063);
af=D(af,ae,ad,ag,ah[Z+11],22,-1990404162);
ag=D(ag,af,ae,ad,ah[Z+12],7,1804603682);
ad=D(ad,ag,af,ae,ah[Z+13],12,-40341101);
ae=D(ae,ad,ag,af,ah[Z+14],17,-1502002290);
af=D(af,ae,ad,ag,ah[Z+15],22,1236535329);
ag=I(ag,af,ae,ad,ah[Z+1],5,-165796510);
ad=I(ad,ag,af,ae,ah[Z+6],9,-1069501632);
ae=I(ae,ad,ag,af,ah[Z+11],14,643717713);
af=I(af,ae,ad,ag,ah[Z],20,-373897302);
ag=I(ag,af,ae,ad,ah[Z+5],5,-701558691);
ad=I(ad,ag,af,ae,ah[Z+10],9,38016083);
ae=I(ae,ad,ag,af,ah[Z+15],14,-660478335);
af=I(af,ae,ad,ag,ah[Z+4],20,-405537848);
ag=I(ag,af,ae,ad,ah[Z+9],5,568446438);
ad=I(ad,ag,af,ae,ah[Z+14],9,-1019803690);
ae=I(ae,ad,ag,af,ah[Z+3],14,-187363961);
af=I(af,ae,ad,ag,ah[Z+8],20,1163531501);
ag=I(ag,af,ae,ad,ah[Z+13],5,-1444681467);
ad=I(ad,ag,af,ae,ah[Z+2],9,-51403784);
ae=I(ae,ad,ag,af,ah[Z+7],14,1735328473);
af=I(af,ae,ad,ag,ah[Z+12],20,-1926607734);
ag=O(ag,af,ae,ad,ah[Z+5],4,-378558);
ad=O(ad,ag,af,ae,ah[Z+8],11,-2022574463);
ae=O(ae,ad,ag,af,ah[Z+11],16,1839030562);
af=O(af,ae,ad,ag,ah[Z+14],23,-35309556);
ag=O(ag,af,ae,ad,ah[Z+1],4,-1530992060);
ad=O(ad,ag,af,ae,ah[Z+4],11,1272893353);
ae=O(ae,ad,ag,af,ah[Z+7],16,-155497632);
af=O(af,ae,ad,ag,ah[Z+10],23,-1094730640);
ag=O(ag,af,ae,ad,ah[Z+13],4,681279174);
ad=O(ad,ag,af,ae,ah[Z],11,-358537222);
ae=O(ae,ad,ag,af,ah[Z+3],16,-722521979);
af=O(af,ae,ad,ag,ah[Z+6],23,76029189);
ag=O(ag,af,ae,ad,ah[Z+9],4,-640364487);
ad=O(ad,ag,af,ae,ah[Z+12],11,-421815835);
ae=O(ae,ad,ag,af,ah[Z+15],16,530742520);
af=O(af,ae,ad,ag,ah[Z+2],23,-995338651);
ag=V(ag,af,ae,ad,ah[Z],6,-198630844);
ad=V(ad,ag,af,ae,ah[Z+7],10,1126891415);
ae=V(ae,ad,ag,af,ah[Z+14],15,-1416354905);
af=V(af,ae,ad,ag,ah[Z+5],21,-57434055);
ag=V(ag,af,ae,ad,ah[Z+12],6,1700485571);
ad=V(ad,ag,af,ae,ah[Z+3],10,-1894986606);
ae=V(ae,ad,ag,af,ah[Z+10],15,-1051523);
af=V(af,ae,ad,ag,ah[Z+1],21,-2054922799);
ag=V(ag,af,ae,ad,ah[Z+8],6,1873313359);
ad=V(ad,ag,af,ae,ah[Z+15],10,-30611744);
ae=V(ae,ad,ag,af,ah[Z+6],15,-1560198380);
af=V(af,ae,ad,ag,ah[Z+13],21,1309151649);
ag=V(ag,af,ae,ad,ah[Z+4],6,-145523070);
ad=V(ad,ag,af,ae,ah[Z+11],10,-1120210379);
ae=V(ae,ad,ag,af,ah[Z+2],15,718787259);
af=V(af,ae,ad,ag,ah[Z+9],21,-343485551);
ag=R(ag,ab);
af=R(af,aa);
ae=R(ae,Y);
ad=R(ad,X)
}return[ag,af,ae,ad]
}function P(Y){var Z;
var X="";
var aa=Y.length*32;
for(Z=0;
Z<aa;
Z+=8){X+=String.fromCharCode((Y[Z>>5]>>>Z%32)&255)
}return X
}function K(Y){var aa;
var X=[];
X[(Y.length>>2)-1]=undefined;
for(aa=0;
aa<X.length;
aa+=1){X[aa]=0
}var Z=Y.length*8;
for(aa=0;
aa<Z;
aa+=8){X[aa>>5]|=(Y.charCodeAt(aa/8)&255)<<aa%32
}return X
}function J(X){return P(F(K(X),X.length*8))
}function W(Z,ac){var Y;
var ab=K(Z);
var X=[];
var aa=[];
var ad;
X[15]=aa[15]=undefined;
if(ab.length>16){ab=F(ab,Z.length*8)
}for(Y=0;
Y<16;
Y+=1){X[Y]=ab[Y]^909522486;
aa[Y]=ab[Y]^1549556828
}ad=F(X.concat(K(ac)),512+ac.length*8);
return P(F(aa.concat(ad),512+128))
}function U(aa){var Z="0123456789abcdef";
var Y="";
var X;
var ab;
for(ab=0;
ab<aa.length;
ab+=1){X=aa.charCodeAt(ab);
Y+=Z.charAt((X>>>4)&15)+Z.charAt(X&15)
}return Y
}function M(X){return unescape(encodeURIComponent(X))
}function G(X){return J(M(X))
}function N(X){return U(G(X))
}function E(X,Y){return W(M(X),M(Y))
}function T(X,Y){return U(E(X,Y))
}function H(Y,Z,X){if(!Z){if(!X){return N(Y)
}return G(Y)
}if(!X){return T(Z,Y)
}return E(Z,Y)
}S.md5=H
})(l);
z.lcs_do=s;
z.lcs_do_gdid=a;
z.lcs_get_lpid=i;
z.lcs_update_lpid=p;
z.lcs_version=u
})(window);
/*!
 * ma 1.4.0 - 20210513 11:52:33
 *
 * Copyright (c) 2021
 * Licensed under the NAVER corp. license.
 */
(function(){function i(y){var w=y.$static;
function x(){this.$constructor.apply(this,arguments)
}if(w){for(var v in w){if(w.hasOwnProperty(v)){x[v]=w[v]
}}delete y.$static
}x.prototype=y;
x.prototype.constructor=x;
return x
}var p={};
(function(){p.on=function(x,v,w){if(x.addEventListener){x.addEventListener(v,w)
}else{x.attachEvent("on"+v,w)
}};
p.off=function(x,v,w){if(x.removeEventListener){x.removeEventListener(v,w)
}else{x.detachEvent("on"+v,w)
}}
})();
(function(){var x;
var w;
var v=[];
if(document.hidden!==undefined){x="hidden";
w="visibilitychange"
}else{if(document.msHidden!==undefined){x="msHidden";
w="msvisibilitychange"
}else{if(document.webkitHidden!==undefined){x="webkitHidden";
w="webkitvisibilitychange"
}}}p.onVisibilityChange=function(z){if(x===undefined){return
}function y(A){z(A,{isHidden:window.document[x]})
}v.push({originHandler:z,attachedHandler:y});
p.on(window.document,w,y)
};
p.offVisibilityChange=function(C){var B;
var z=[];
for(var A=0,y=v.length;
A<y;
A++){B=v[A];
if(B.originHandler===C){p.off(window.document,w,B.attachedHandler);
continue
}z.push(B)
}v=z
}
})();
var s=i({$static:{},$constructor:function(){},send:function(v,w){var x=JSON.stringify(w);
if(this._sendByBeacon(v,x)===false){this._sendByImg(v,x)
}},_sendByImg:function(w,x){var v=new Image();
v.onload=v.onerror=function(){v.onload=null;
v.onerror=null
};
v.src=w+"?d="+encodeURIComponent(x)
},_sendByBeacon:function(v,w){if(Boolean(navigator.sendBeacon)===false){return false
}return navigator.sendBeacon(v,w)
}});
function u(w,v){return function(){return w.apply(v,arguments)
}
}function t(){return window.pageYOffset||(document.documentElement||document.body).scrollTop||0
}function f(v){return v.offsetHeight
}function a(v){var w=v.getBoundingClientRect().top;
return w+t()
}function j(){return{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}
}function r(){var v=window.performance&&window.performance.navigation;
return(Boolean(v)===false)?false:v.type===v.TYPE_BACK_FORWARD
}function m(v){return JSON.parse(JSON.stringify(v))
}function q(){return(new Date()).getTime()
}var d=i({$constructor:function(){this._isActivating=false
},init:function(){this.deactivate();
this._watchedRanges=[];
this.activate();
return this
},activate:function(){this._isActivating=true;
return this
},deactivate:function(){this._isActivating=false;
return this
},update:function(w,v){if(this._isActivating===false){return
}var x=[w,w+v];
this._updateRanges(x)
},get:function(x){if(this._isActivating===false){return 0
}var z=0;
var w=this._watchedRanges.length;
var v=[];
for(var y=0;
y<w;
y++){v=this._watchedRanges[y];
z=z+(v[1]-v[0])
}return z/x
},_updateRanges:function(x){var B=this._watchedRanges.length;
var w=[];
var z=x;
var v=[];
var A=null;
for(var y=0;
y<B;
y++){v=this._watchedRanges[y];
A=this._mergeIfIsIntersection(v,z);
if(A){z=A
}else{w.push(v)
}}w.push(z);
this._watchedRanges=w
},_mergeIfIsIntersection:function(y,x){var w={start:y[0],end:y[1],};
var v={start:x[0],end:x[1],};
var z=(w.start<v.start?w:v);
var A=(z===w?v:w);
if(z.end<A.start){return null
}return[z.start,(z.end>A.end?z.end:A.end)]
}});
var l=i({$constructor:function(){this._isActivating=false
},init:function(){this.deactivate();
this._totalWatchSecond=0;
this.activate();
return this
},activate:function(){this._isActivating=true;
return this
},deactivate:function(){this._isActivating=false;
return this
},update:function(v){if(this._isActivating===false){return
}this._totalWatchSecond=this._totalWatchSecond+v
},get:function(){if(this._isActivating===false){return 0
}return this._totalWatchSecond
}});
var g=i({$static:{_READ_TIME_PER_CHARACTER:113,_MAIN_VIDEO_PERCENT_COMPARE_TO_TEXT:50,_TEXT_PERCENT_COMPARE_TO_MAIN_VIDEO:50},$constructor:function(){this._videoAppendObserver=new c();
this._watchTime=new l();
this._watchRate=new d();
this._onPlay=u(this._onPlay,this);
this._onPause=u(this._onPause,this);
this._onSeeked=u(this._onSeeked,this)
},init:function(v,w){this._deactivate();
if(document.querySelectorAll(v).length===0){return false
}if(document.querySelectorAll(v).length>=2){return false
}if(!w){return false
}this._textTotalReadSecond=(w*this.constructor._READ_TIME_PER_CHARACTER)/1000;
this._videoEl=null;
this._videoDurationSecond=0;
this._dateTimestampOnPlay=null;
this._videoSecondOnPlay=null;
this._videoAppendObserver.init({observerTarget:document.querySelector(v),onAppendVideo:u(function(x){this._videoEl=x;
this._activate();
this._watchTime.init();
this._watchRate.init();
p.on(x,"loadedmetadata",u(function(){this._videoDurationSecond=this._videoEl.duration
},this))
},this)});
return this
},_activate:function(){try{p.on(this._videoEl,"play",this._onPlay);
p.on(this._videoEl,"pause",this._onPause);
p.on(this._videoEl,"seeked",this._onSeeked)
}catch(v){}},_deactivate:function(){try{p.off(this._videoEl,"play",this._onPlay);
p.off(this._videoEl,"pause",this._onPause);
p.off(this._videoEl,"seeked",this._onSeeked);
this._watchTime.deactivate();
this._watchRate.deactivate()
}catch(v){}},isMainVideo:function(){if(!this._videoDurationSecond){return false
}return(this._videoDurationSecond/this._textTotalReadSecond)*100>=this.constructor._MAIN_VIDEO_PERCENT_COMPARE_TO_TEXT
},isTextContainVideoContent:function(){if(!this.isMainVideo()){return true
}return(this._textTotalReadSecond/this._videoDurationSecond)*100>=this.constructor._TEXT_PERCENT_COMPARE_TO_MAIN_VIDEO
},getWatchTimeMs:function(){this._updateLog();
return this._watchTime.get()*1000
},getWatchRate:function(){if(!this._videoDurationSecond){return 0
}this._updateLog();
return this._watchRate.get(this._videoDurationSecond)
},getVideoDurationSecond:function(){return this._videoDurationSecond
},_onPlay:function(){var v=this._videoEl.currentTime;
this._dateTimestampOnPlay=q();
this._videoSecondOnPlay=v
},_onPause:function(){this._updateLog()
},_onSeeked:function(){if(this._videoEl.paused){return
}this._onPause();
this._onPlay()
},_updateLog:function(){if(this._dateTimestampOnPlay===null||this._videoSecondOnPlay===null){return
}var v=this._getCurrentWatchedSecond();
this._watchTime.update(v);
this._watchRate.update(this._videoSecondOnPlay,v);
this._dateTimestampOnPlay=null;
this._videoSecondOnPlay=null
},_getCurrentWatchedSecond:function(){if(!this._dateTimestampOnPlay){return 0
}var v=q()-this._dateTimestampOnPlay;
return v/1000
}});
var c=i({$static:{},$constructor:function(){},init:function(w){var x=w.observerTarget;
var v=w.onAppendVideo;
this._disconnect();
this._observer=null;
this._timeoutIdForSetTimeoutObserver=null;
if(x.querySelector("video")){v(x.querySelector("video"));
return
}try{this._observe(x,v)
}catch(y){this._observeBySetTimeout(x,v)
}},_disconnect:function(){try{clearTimeout(this._timeoutIdForSetTimeoutObserver);
this._observer.disconnect()
}catch(v){}},_observe:function(v,w){this._observer=new MutationObserver(u(function(){var x=v.querySelector("video");
if(!x){return
}w(x);
this._disconnect()
},this));
this._observer.observe(v,{childList:true})
},_observeBySetTimeout:function(w,z){var x=q();
var v=10000;
var y=u(function(){this._timeoutIdForSetTimeoutObserver=setTimeout(function(){if(q()-x>=v){return
}var A=w.querySelector("video");
if(!A){y();
return
}z(A)
},200)
},this);
y()
}});
var h=i({$static:{_LIMIT_IDLE_TIME_FOR_ACTIVE_EXPIRE:1000*60},$constructor:function(){this._onScroll=u(this._onScroll,this);
this._onClick=u(this._onClick,this)
},init:function(){this._dt=0;
this._isActivating=true;
this._lastActivityStartTimestamp=q();
this._timerIdForActiveExpire=null;
p.on(window,"scroll",this._onScroll);
p.on(document,"click",this._onClick);
this._onActivate();
return this
},getDt:function(){this._updateDt();
return this._dt
},_onScroll:function(){this._onActivate()
},_onClick:function(){this._onActivate()
},_onActivate:function(){if(this._isActivating===false){this._isActivating=true;
this._lastActivityStartTimestamp=q()
}clearTimeout(this._timerIdForActiveExpire);
this._timerIdForActiveExpire=setTimeout(u(function(){this._updateDt()
},this),this.constructor._LIMIT_IDLE_TIME_FOR_ACTIVE_EXPIRE)
},_updateDt:function(){if(this._isActivating===false){return
}var v=0;
if(this._lastActivityStartTimestamp){v=q()-this._lastActivityStartTimestamp
}this._dt=this._dt+v;
this._isActivating=false;
this._lastActivityStartTimestamp=null
}});
var e=i({$static:{_LIMIT_IDLE_TIME_FOR_ACTIVE_EXPIRE:1000*60},$constructor:function(){},init:function(v){this._dt=0;
this._isCurrentScrollInContentBody=false;
this._bodyEntryStartTimestamp=null;
this._timerIdForActiveExpire=null;
this.update(v);
return this
},getDt:function(){this._calculateDt();
return this._dt
},update:function(x){var w=this._isCurrentScrollInContentBody;
var v=x;
if(v){this._resetActiveExpireTimer()
}if(v&&w===false){this._isCurrentScrollInContentBody=true;
this._bodyEntryStartTimestamp=q();
return
}if(w&&v===false){this._calculateDt()
}},_resetActiveExpireTimer:function(){clearTimeout(this._timerIdForActiveExpire);
this._timerIdForActiveExpire=setTimeout(u(function(){if(this._isCurrentScrollInContentBody){this._calculateDt()
}},this),this.constructor._LIMIT_IDLE_TIME_FOR_ACTIVE_EXPIRE)
},_calculateDt:function(){if(this._bodyEntryStartTimestamp===null){return
}var v=q()-this._bodyEntryStartTimestamp;
this._dt=this._dt+v;
this._isCurrentScrollInContentBody=false;
this._bodyEntryStartTimestamp=null
}});
var b=i({$static:{_READ_TIME_PER_CHARACTER:100},$constructor:function(){},init:function(v){this._contentBodyLength=v.contentBodyLength;
this._totalReadTime=(this._contentBodyLength*this.constructor._READ_TIME_PER_CHARACTER);
this._contentBodyHeight=0;
this._maxReadTimeWithoutScroll=0;
this.setContentBodyHeight(v.contentBodyHeight);
this._readStartTimestamp=null;
this._readStartScrollTop=null;
this._isCurrentScrollInArticleBody=false;
this._readRanges=[];
this.update(v.isScrollPositionInArticleBody);
return this
},update:function(v){var w=this._isCurrentScrollInArticleBody;
if(w){this._updateReadRanges(this._getPrevReadRange())
}this._updateReadProperties(v)
},setContentBodyHeight:function(v){this._contentBodyHeight=v;
this._maxReadTimeWithoutScroll=this._getMaxReadTimeWithoutScroll()
},getReadRatio:function(v){this.update(v);
var y=0;
var z=this._readRanges.length;
var w=[];
for(var x=0;
x<z;
x++){w=this._readRanges[x];
y=y+(w[1]-w[0])
}return y/this._contentBodyHeight
},_getPrevReadRange:function(){if(this._readStartScrollTop===null||this._readStartTimestamp===null){return null
}var y=q();
var w=y-this._readStartTimestamp;
if(w>this._maxReadTimeWithoutScroll){w=this._maxReadTimeWithoutScroll
}var x=(w/this._totalReadTime);
var v=this._contentBodyHeight*x;
return[this._readStartScrollTop,this._readStartScrollTop+v]
},_updateReadProperties:function(v){if(v){this._readStartTimestamp=q();
this._readStartScrollTop=t();
this._isCurrentScrollInArticleBody=true
}else{this._readStartTimestamp=null;
this._readStartScrollTop=null;
this._isCurrentScrollInArticleBody=false
}},_getMaxReadTimeWithoutScroll:function(){var v=j().height/this._contentBodyHeight;
return this._totalReadTime*v
},_updateReadRanges:function(B){var v=this._readRanges.length;
var x=[];
var z=B;
var w=[];
var A=null;
for(var y=0;
y<v;
y++){w=this._readRanges[y];
A=this._mergeIfIsIntersection(w,z);
if(A){z=A
}else{x.push(w)
}}x.push(z);
this._readRanges=x
},_mergeIfIsIntersection:function(y,x){var w={start:y[0],end:y[1],};
var v={start:x[0],end:x[1],};
var z=(w.start<v.start?w:v);
var A=(z===w?v:w);
if(z.end<A.start){return null
}return[z.start,(z.end>A.end?z.end:A.end)]
}});
var o=i({$static:{_ARTICLE_DISTANCE_RATE_IN_VIEWPORT:{START:0.5,END:0.4},_BYLINE_HEIGHT:250,_SCROLL_END_TIMEOUT:300},$constructor:function(){this._isActivating=false;
this._contentBodyDurationTime=new e();
this._contentBodyReadRatio=new b();
this._contentBodyHeightObserver=new n();
this._onScroll=u(this._onScroll,this);
this._onClick=u(this._onClick,this)
},init:function(v){this._deactivate();
if(Boolean(v)===false){return
}this._contentBodyEl=v;
this._timerIdForScrollEnd=null;
this._contentBodyScrollRange={start:null,end:null};
this._updateContentBodyScrollRange();
this._contentBodyDurationTime.init(this._isScrollInContentBody());
this._contentBodyReadRatio.init({contentBodyLength:this._contentBodyEl.innerText.length,contentBodyHeight:f(this._contentBodyEl),isScrollPositionInArticleBody:this._isScrollInContentBody()});
this._activate();
this._contentBodyHeightObserver.init({contentBodyEl:this._contentBodyEl,onChangeHeight:u(function(){try{this._updateContentBodyScrollRange();
this._contentBodyReadRatio.setContentBodyHeight(f(this._contentBodyEl))
}catch(w){}},this),});
return this
},_activate:function(){try{p.on(window,"scroll",this._onScroll);
p.on(document,"click",this._onClick);
this._isActivating=true
}catch(v){}},_deactivate:function(){try{p.off(window,"scroll",this._onScroll);
p.off(document,"click",this._onClick);
this._isActivating=false
}catch(v){}},isActivating:function(){return this._isActivating
},getDurationTime:function(){if(this._isActivating===false){return 0
}return this._contentBodyDurationTime.getDt()
},getReadRate:function(){if(this._isActivating===false){return 0
}return this._contentBodyReadRatio.getReadRatio(this._isScrollInContentBody())
},getLength:function(){if(this._isActivating===false){return 0
}return this._contentBodyEl.innerText.length
},_onScroll:function(){clearTimeout(this._timerIdForScrollEnd);
this._timerIdForScrollEnd=setTimeout(u(function(){this._updateDtInContentBody();
this._contentBodyReadRatio.update(this._isScrollInContentBody())
},this),this.constructor._SCROLL_END_TIMEOUT)
},_onClick:function(){this._updateDtInContentBody()
},_updateDtInContentBody:function(){this._contentBodyDurationTime.update(this._isScrollInContentBody())
},_updateContentBodyScrollRange:function(){var v=a(this._contentBodyEl);
this._contentBodyScrollRange={start:(u(function(){var x=this.constructor._ARTICLE_DISTANCE_RATE_IN_VIEWPORT.START;
var w=j().height*x;
return Math.max(v-w,0)
},this))(),end:(u(function(){var w=v+f(this._contentBodyEl);
var y=this.constructor._ARTICLE_DISTANCE_RATE_IN_VIEWPORT.END;
var z=this.constructor._BYLINE_HEIGHT;
var x=(j().height*y)+z;
return w-x
},this))()}
},_isScrollInContentBody:function(){var v=this._contentBodyScrollRange;
var w=t();
return(w>=v.start)&&(w<=v.end)
}});
var n=i({$static:{},$constructor:function(v){},init:function(v){var y=v.contentBodyEl;
var w=v.onChangeHeight;
this._clearTimeout();
this._timerIdForResizeObserverEventDelay=null;
try{this._observeResize(y,w)
}catch(x){setTimeout(function(){w()
},5000)
}},_observeResize:function(w,x){var v=new ResizeObserver(u(function(y){this._clearTimeout();
this._timerIdForResizeObserverEventDelay=setTimeout(function(){x()
},500)
},this));
v.observe(w);
setTimeout(function(){v.disconnect()
},10000)
},_clearTimeout:function(){try{clearTimeout(this._timerIdForResizeObserverEventDelay)
}catch(v){}}});
var k=new (i({$static:{_CONFIG:{}},$constructor:function(){this._sender=new s();
this._durationTime=new h();
this._contentBody=new o();
this._contentBodyMainVideo=new g();
this._onUnloadPage=u(this._onUnloadPage,this);
this._onTabVisibilityChange=u(this._onTabVisibilityChange,this)
},init:function(v){try{this._init(v)
}catch(w){}},_init:function(v){var w=m(v.data);
w.baseInfo.url=location.href;
w.baseInfo.referrer=document.referrer;
w.baseInfo.isBackForward=r()?1:0;
this._api=v.api;
this._baseDataForUnload=w;
this._isAlreadySendUnloadLog=false;
p.on(window,"beforeunload",this._onUnloadPage);
p.on(window,"pagehide",this._onUnloadPage);
p.on(window,"unload",this._onUnloadPage);
p.onVisibilityChange(this._onTabVisibilityChange);
this._durationTime.init();
if(v.contentBodyEl){this._contentBody.init(v.contentBodyEl);
this._contentBodyMainVideo.init(v.contentBodyVideoWrapperSelector,this._contentBody.getLength())
}this._sender.send(this._api,(function(){var x=m(w);
x.type="load";
return x
})())
},unload:function(){if(this._isAlreadySendUnloadLog){return
}this._isAlreadySendUnloadLog=true;
var v=this._baseDataForUnload;
v.type="unload";
v.baseInfo.durationTime=this._durationTime.getDt();
if(this._contentBody.isActivating()){v.extraInfo.contentBody={durationTime:this._contentBodyMainVideo.isMainVideo()?Math.max(this._contentBody.getDurationTime(),this._contentBodyMainVideo.getWatchTimeMs()):this._contentBody.getDurationTime(),readRatio:(u(function(){var x=this._contentBody.getReadRate();
var w=this._contentBodyMainVideo.getWatchRate();
if(this._contentBodyMainVideo.isMainVideo()===false){return x
}return this._contentBodyMainVideo.isTextContainVideoContent()?Math.max(w,x):w
},this))(),length:this._contentBody.getLength()};
v.extraInfo.contentBody.text={durationTime:this._contentBody.getDurationTime(),readRatio:this._contentBody.getReadRate()};
if(this._contentBodyMainVideo.isMainVideo()){v.extraInfo.contentBody.video={watchTime:this._contentBodyMainVideo.getWatchTimeMs(),watchRatio:this._contentBodyMainVideo.getWatchRate()}
}}this._sender.send(this._api,v)
},_onUnloadPage:function(){this.unload()
},_onTabVisibilityChange:function(w,v){if(v.isHidden){this.unload()
}}}))();
window.ma=k;
ma.version="1.4.0 (04/08 2021 17:20:20)"
})();
var historyManager={oStateType:{first:1,back:2,refresh:3},_state:null,init:function(c,a){this._sReferrerHistoryName=c+"_referrer";
this._sCurrentHistoryName=c+"_currrent";
this._sReferrer=a;
var d=window.sessionStorage.getItem(this._sReferrerHistoryName);
var b=window.sessionStorage.getItem(this._sCurrentHistoryName);
if(!d||!b){this._initStorage();
this._state=this.oStateType.first;
return
}this._definitionHistoryObject();
this._oReferrerHistory=new this._oHistory(d);
this._oCurrentHistory=new this._oHistory(b);
this._checkHistory()
},getState:function(){return this._state
},_checkHistory:function(){if(this._isBackEvent()){this._removeLastInfoInStorage();
this._state=this.oStateType.back
}else{if(this._isRefreshEvent()){this._state=this.oStateType.refresh
}else{if(this._isMainAccess()){this._initStorage();
this._state=this.oStateType.first
}else{this._addCurrentInfoToStorage();
this._state=this.oStateType.first
}}}},_setReferrerHistory:function(a){window.sessionStorage.setItem(this._sReferrerHistoryName,a)
},_setCurrentHistory:function(a){window.sessionStorage.setItem(this._sCurrentHistoryName,a)
},_initStorage:function(){this._setReferrerHistory(this._sReferrer);
this._setCurrentHistory(window.location.href)
},_removeLastInfoInStorage:function(){this._oReferrerHistory.pop();
this._oCurrentHistory.pop();
this._setReferrerHistory(this._oReferrerHistory.valueOf());
this._setCurrentHistory(this._oCurrentHistory.valueOf())
},_addCurrentInfoToStorage:function(){this._oReferrerHistory.add(this._sReferrer);
this._oCurrentHistory.add(window.location.href);
this._setReferrerHistory(this._oReferrerHistory.valueOf());
this._setCurrentHistory(this._oCurrentHistory.valueOf())
},_isBackEvent:function(){var b=this._oReferrerHistory.get();
var a=this._oCurrentHistory.get();
if(!this._sReferrer&&(window.location.href==b)){return true
}return(window.location.href==b)&&(this._oCurrentHistory.size()>1)&&(window.location.href==this._oCurrentHistory.get(this._oCurrentHistory.size()-2))&&(a!=this._sReferrer)
},_isRefreshEvent:function(){var b=this._oReferrerHistory.get();
var a=this._oCurrentHistory.get();
return(b==this._sReferrer)&&(a==window.location.href)
},_isMainAccess:function(){return this._sReferrer.indexOf("m.naver.com")>0
},_definitionHistoryObject:function(){this._oHistory=function(a){this._sSplitMark="@||@";
if((a=="")||!a){this._aData=[]
}else{this._aData=a.split(this._sSplitMark)
}};
this._oHistory.prototype.push=function(a){this._aData.push(a)
},this._oHistory.prototype.add=function(a){this.push(a)
},this._oHistory.prototype.get=function(a){if((a==undefined)||(a==null)){return this._aData[this._aData.length-1]
}return this._aData[a]
},this._oHistory.prototype.pop=function(){return this._aData.pop()
},this._oHistory.prototype.remove=function(){this.pop()
},this._oHistory.prototype.size=function(){return this._aData.length
},this._oHistory.prototype.valueOf=function(){return this._aData.join(this._sSplitMark)
}
}};
