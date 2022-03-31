/*!
 * news_mobile 1.28.04+20220210 - 20220224 15:55:14
 *
 * Copyright (c) 2022
 * Licensed under the NAVER license.
 */
/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */
(function(b,a){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=b.document?a(b,true):function(c){if(!c.document){throw new Error("jQuery requires a window with a document")
}return a(c)
}
}else{a(b)
}}(typeof window!=="undefined"?window:this,function(window,noGlobal){var arr=[];
var slice=arr.slice;
var concat=arr.concat;
var push=arr.push;
var indexOf=arr.indexOf;
var class2type={};
var toString=class2type.toString;
var hasOwn=class2type.hasOwnProperty;
var support={};
var document=window.document,version="2.1.4",jQuery=function(selector,context){return new jQuery.fn.init(selector,context)
},rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase()
};
jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,selector:"",length:0,toArray:function(){return slice.call(this)
},get:function(num){return num!=null?(num<0?this[num+this.length]:this[num]):slice.call(this)
},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);
ret.prevObject=this;
ret.context=this.context;
return ret
},each:function(callback,args){return jQuery.each(this,callback,args)
},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem)
}))
},slice:function(){return this.pushStack(slice.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(i){var len=this.length,j=+i+(i<0?len:0);
return this.pushStack(j>=0&&j<len?[this[j]]:[])
},end:function(){return this.prevObject||this.constructor(null)
},push:push,sort:arr.sort,splice:arr.splice};
jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;
if(typeof target==="boolean"){deep=target;
target=arguments[i]||{};
i++
}if(typeof target!=="object"&&!jQuery.isFunction(target)){target={}
}if(i===length){target=this;
i--
}for(;
i<length;
i++){if((options=arguments[i])!=null){for(name in options){src=target[name];
copy=options[name];
if(target===copy){continue
}if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;
clone=src&&jQuery.isArray(src)?src:[]
}else{clone=src&&jQuery.isPlainObject(src)?src:{}
}target[name]=jQuery.extend(deep,clone,copy)
}else{if(copy!==undefined){target[name]=copy
}}}}}return target
};
jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg)
},noop:function(){},isFunction:function(obj){return jQuery.type(obj)==="function"
},isArray:Array.isArray,isWindow:function(obj){return obj!=null&&obj===obj.window
},isNumeric:function(obj){return !jQuery.isArray(obj)&&(obj-parseFloat(obj)+1)>=0
},isPlainObject:function(obj){if(jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false
}if(obj.constructor&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false
}return true
},isEmptyObject:function(obj){var name;
for(name in obj){return false
}return true
},type:function(obj){if(obj==null){return obj+""
}return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj
},globalEval:function(code){var script,indirect=eval;
code=jQuery.trim(code);
if(code){if(code.indexOf("use strict")===1){script=document.createElement("script");
script.text=code;
document.head.appendChild(script).parentNode.removeChild(script)
}else{indirect(code)
}}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase)
},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase()
},each:function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);
if(args){if(isArray){for(;
i<length;
i++){value=callback.apply(obj[i],args);
if(value===false){break
}}}else{for(i in obj){value=callback.apply(obj[i],args);
if(value===false){break
}}}}else{if(isArray){for(;
i<length;
i++){value=callback.call(obj[i],i,obj[i]);
if(value===false){break
}}}else{for(i in obj){value=callback.call(obj[i],i,obj[i]);
if(value===false){break
}}}}return obj
},trim:function(text){return text==null?"":(text+"").replace(rtrim,"")
},makeArray:function(arr,results){var ret=results||[];
if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr)
}else{push.call(ret,arr)
}}return ret
},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i)
},merge:function(first,second){var len=+second.length,j=0,i=first.length;
for(;
j<len;
j++){first[i++]=second[j]
}first.length=i;
return first
},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;
for(;
i<length;
i++){callbackInverse=!callback(elems[i],i);
if(callbackInverse!==callbackExpect){matches.push(elems[i])
}}return matches
},map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[];
if(isArray){for(;
i<length;
i++){value=callback(elems[i],i,arg);
if(value!=null){ret.push(value)
}}}else{for(i in elems){value=callback(elems[i],i,arg);
if(value!=null){ret.push(value)
}}}return concat.apply([],ret)
},guid:1,proxy:function(fn,context){var tmp,args,proxy;
if(typeof context==="string"){tmp=fn[context];
context=fn;
fn=tmp
}if(!jQuery.isFunction(fn)){return undefined
}args=slice.call(arguments,2);
proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)))
};
proxy.guid=fn.guid=fn.guid||jQuery.guid++;
return proxy
},now:Date.now,support:support});
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase()
});
function isArraylike(obj){var length="length" in obj&&obj.length,type=jQuery.type(obj);
if(type==="function"||jQuery.isWindow(obj)){return false
}if(obj.nodeType===1&&length){return true
}return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1) in obj
}var Sizzle=
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true
}return 0
},MAX_NEGATIVE=1<<31,hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){var i=0,len=list.length;
for(;
i<len;
i++){if(list[i]===elem){return i
}}return -1
},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),attributes="\\["+whitespace+"*("+characterEncoding+")(?:"+whitespace+"*([*^$|!~]?=)"+whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|.*)\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={ID:new RegExp("^#("+characterEncoding+")"),CLASS:new RegExp("^\\.("+characterEncoding+")"),TAG:new RegExp("^("+characterEncoding.replace("w","w*")+")"),ATTR:new RegExp("^"+attributes),PSEUDO:new RegExp("^"+pseudos),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),bool:new RegExp("^(?:"+booleans+")$","i"),needsContext:new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-65536;
return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+65536):String.fromCharCode(high>>10|55296,high&1023|56320)
},unloadHandler=function(){setDocument()
};
try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);
arr[preferredDoc.childNodes.length].nodeType
}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els))
}:function(target,els){var j=target.length,i=0;
while((target[j++]=els[i++])){}target.length=j-1
}}
}function Sizzle(selector,context,results,seed){var match,elem,m,nodeType,i,groups,old,nid,newContext,newSelector;
if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context)
}context=context||document;
results=results||[];
nodeType=context.nodeType;
if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results
}if(!seed&&documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){elem=context.getElementById(m);
if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);
return results
}}else{return results
}}else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);
return results
}}}else{if(match[2]){push.apply(results,context.getElementsByTagName(selector));
return results
}else{if((m=match[3])&&support.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));
return results
}}}}if(support.qsa&&(!rbuggyQSA||!rbuggyQSA.test(selector))){nid=old=expando;
newContext=context;
newSelector=nodeType!==1&&selector;
if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);
if((old=context.getAttribute("id"))){nid=old.replace(rescape,"\\$&")
}else{context.setAttribute("id",nid)
}nid="[id='"+nid+"'] ";
i=groups.length;
while(i--){groups[i]=nid+toSelector(groups[i])
}newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;
newSelector=groups.join(",")
}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));
return results
}catch(qsaError){}finally{if(!old){context.removeAttribute("id")
}}}}}return select(selector.replace(rtrim,"$1"),context,results,seed)
}function createCache(){var keys=[];
function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()]
}return(cache[key+" "]=value)
}return cache
}function markFunction(fn){fn[expando]=true;
return fn
}function assert(fn){var div=document.createElement("div");
try{return !!fn(div)
}catch(e){return false
}finally{if(div.parentNode){div.parentNode.removeChild(div)
}div=null
}}function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;
while(i--){Expr.attrHandle[arr[i]]=handler
}}function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE);
if(diff){return diff
}if(cur){while((cur=cur.nextSibling)){if(cur===b){return -1
}}}return a?1:-1
}function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type===type
}
}function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();
return(name==="input"||name==="button")&&elem.type===type
}
}function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;
return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;
while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j])
}}})
})
}function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context
}support=Sizzle.support={};
isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;
return documentElement?documentElement.nodeName!=="HTML":false
};
setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc;
if(doc===document||doc.nodeType!==9||!doc.documentElement){return document
}document=doc;
docElem=doc.documentElement;
parent=doc.defaultView;
if(parent&&parent!==parent.top){if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false)
}else{if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler)
}}}documentIsHTML=!isXML(doc);
support.attributes=assert(function(div){div.className="i";
return !div.getAttribute("className")
});
support.getElementsByTagName=assert(function(div){div.appendChild(doc.createComment(""));
return !div.getElementsByTagName("*").length
});
support.getElementsByClassName=rnative.test(doc.getElementsByClassName);
support.getById=assert(function(div){docElem.appendChild(div).id=expando;
return !doc.getElementsByName||!doc.getElementsByName(expando).length
});
if(support.getById){Expr.find.ID=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);
return m&&m.parentNode?[m]:[]
}};
Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);
return function(elem){return elem.getAttribute("id")===attrId
}
}
}else{delete Expr.find.ID;
Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);
return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");
return node&&node.value===attrId
}
}
}Expr.find.TAG=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag)
}else{if(support.qsa){return context.querySelectorAll(tag)
}}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);
if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem)
}}return tmp
}return results
};
Expr.find.CLASS=support.getElementsByClassName&&function(className,context){if(documentIsHTML){return context.getElementsByClassName(className)
}};
rbuggyMatches=[];
rbuggyQSA=[];
if((support.qsa=rnative.test(doc.querySelectorAll))){assert(function(div){docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a><select id='"+expando+"-\f]' msallowcapture=''><option selected=''></option></select>";
if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")")
}if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")")
}if(!div.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=")
}if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked")
}if(!div.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]")
}});
assert(function(div){var input=doc.createElement("input");
input.setAttribute("type","hidden");
div.appendChild(input).setAttribute("name","D");
if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=")
}if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled")
}div.querySelectorAll("*,:x");
rbuggyQSA.push(",.*:")
})
}if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){support.disconnectedMatch=matches.call(div,"div");
matches.call(div,"[s!='']:x");
rbuggyMatches.push("!=",pseudos)
})
}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));
rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));
hasCompare=rnative.test(docElem.compareDocumentPosition);
contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;
return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16))
}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true
}}}return false
};
sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=true;
return 0
}var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;
if(compare){return compare
}compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;
if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===doc||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return -1
}if(b===doc||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1
}return sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0
}return compare&4?-1:1
}:function(a,b){if(a===b){hasDuplicate=true;
return 0
}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];
if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0
}else{if(aup===bup){return siblingCheck(a,b)
}}cur=a;
while((cur=cur.parentNode)){ap.unshift(cur)
}cur=b;
while((cur=cur.parentNode)){bp.unshift(cur)
}while(ap[i]===bp[i]){i++
}return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0
};
return doc
};
Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements)
};
Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem)
}expr=expr.replace(rattributeQuotes,"='$1']");
if(support.matchesSelector&&documentIsHTML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);
if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret
}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0
};
Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context)
}return contains(context,elem)
};
Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem)
}var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;
return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null
};
Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg)
};
Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;
hasDuplicate=!support.detectDuplicates;
sortInput=!support.sortStable&&results.slice(0);
results.sort(sortOrder);
if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i)
}}while(j--){results.splice(duplicates[j],1)
}}sortInput=null;
return results
};
getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;
if(!nodeType){while((node=elem[i++])){ret+=getText(node)
}}else{if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent
}else{for(elem=elem.firstChild;
elem;
elem=elem.nextSibling){ret+=getText(elem)
}}}else{if(nodeType===3||nodeType===4){return elem.nodeValue
}}}return ret
};
Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(match){match[1]=match[1].replace(runescape,funescape);
match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);
if(match[2]==="~="){match[3]=" "+match[3]+" "
}return match.slice(0,4)
},CHILD:function(match){match[1]=match[1].toLowerCase();
if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0])
}match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));
match[5]=+((match[7]+match[8])||match[3]==="odd")
}else{if(match[3]){Sizzle.error(match[0])
}}return match
},PSEUDO:function(match){var excess,unquoted=!match[6]&&match[2];
if(matchExpr.CHILD.test(match[0])){return null
}if(match[3]){match[2]=match[4]||match[5]||""
}else{if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);
match[2]=unquoted.slice(0,excess)
}}return match.slice(0,3)
}},filter:{TAG:function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();
return nodeNameSelector==="*"?function(){return true
}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName
}
},CLASS:function(className){var pattern=classCache[className+" "];
return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"")
})
},ATTR:function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);
if(result==null){return operator==="!="
}if(!operator){return true
}result+="";
return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false
}
},CHILD:function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";
return first===1&&last===0?function(elem){return !!elem.parentNode
}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;
if(parent){if(simple){while(dir){node=elem;
while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false
}}start=dir=type==="only"&&!start&&"nextSibling"
}return true
}start=[forward?parent.firstChild:parent.lastChild];
if(forward&&useCache){outerCache=parent[expando]||(parent[expando]={});
cache=outerCache[type]||[];
nodeIndex=cache[0]===dirruns&&cache[1];
diff=cache[0]===dirruns&&cache[2];
node=nodeIndex&&parent.childNodes[nodeIndex];
while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];
break
}}}else{if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1]
}else{while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff]
}if(node===elem){break
}}}}}diff-=last;
return diff===first||(diff%first===0&&diff/first>=0)
}}
},PSEUDO:function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);
if(fn[expando]){return fn(argument)
}if(fn.length>1){args=[pseudo,pseudo,"",argument];
return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;
while(i--){idx=indexOf(seed,matched[i]);
seed[idx]=!(matches[idx]=matched[i])
}}):function(elem){return fn(elem,0,args)
}
}return fn
}},pseudos:{not:markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));
return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;
while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem)
}}}):function(elem,context,xml){input[0]=elem;
matcher(input,null,xml,results);
input[0]=null;
return !results.pop()
}
}),has:markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0
}
}),contains:markFunction(function(text){text=text.replace(runescape,funescape);
return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1
}
}),lang:markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang)
}lang=lang.replace(runescape,funescape).toLowerCase();
return function(elem){var elemLang;
do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();
return elemLang===lang||elemLang.indexOf(lang+"-")===0
}}while((elem=elem.parentNode)&&elem.nodeType===1);
return false
}
}),target:function(elem){var hash=window.location&&window.location.hash;
return hash&&hash.slice(1)===elem.id
},root:function(elem){return elem===docElem
},focus:function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex)
},enabled:function(elem){return elem.disabled===false
},disabled:function(elem){return elem.disabled===true
},checked:function(elem){var nodeName=elem.nodeName.toLowerCase();
return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected)
},selected:function(elem){if(elem.parentNode){elem.parentNode.selectedIndex
}return elem.selected===true
},empty:function(elem){for(elem=elem.firstChild;
elem;
elem=elem.nextSibling){if(elem.nodeType<6){return false
}}return true
},parent:function(elem){return !Expr.pseudos.empty(elem)
},header:function(elem){return rheader.test(elem.nodeName)
},input:function(elem){return rinputs.test(elem.nodeName)
},button:function(elem){var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type==="button"||name==="button"
},text:function(elem){var attr;
return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text")
},first:createPositionalPseudo(function(){return[0]
}),last:createPositionalPseudo(function(matchIndexes,length){return[length-1]
}),eq:createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument]
}),even:createPositionalPseudo(function(matchIndexes,length){var i=0;
for(;
i<length;
i+=2){matchIndexes.push(i)
}return matchIndexes
}),odd:createPositionalPseudo(function(matchIndexes,length){var i=1;
for(;
i<length;
i+=2){matchIndexes.push(i)
}return matchIndexes
}),lt:createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;
for(;
--i>=0;
){matchIndexes.push(i)
}return matchIndexes
}),gt:createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;
for(;
++i<length;
){matchIndexes.push(i)
}return matchIndexes
})}};
Expr.pseudos.nth=Expr.pseudos.eq;
for(i in {radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i)
}for(i in {submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i)
}function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;
Expr.setFilters=new setFilters();
tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];
if(cached){return parseOnly?0:cached.slice(0)
}soFar=selector;
groups=[];
preFilters=Expr.preFilter;
while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar
}groups.push((tokens=[]))
}matched=false;
if((match=rcombinators.exec(soFar))){matched=match.shift();
tokens.push({value:matched,type:match[0].replace(rtrim," ")});
soFar=soFar.slice(matched.length)
}for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();
tokens.push({value:matched,type:type,matches:match});
soFar=soFar.slice(matched.length)
}}if(!matched){break
}}return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0)
};
function toSelector(tokens){var i=0,len=tokens.length,selector="";
for(;
i<len;
i++){selector+=tokens[i].value
}return selector
}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;
return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml)
}}}:function(elem,context,xml){var oldCache,outerCache,newCache=[dirruns,doneName];
if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true
}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});
if((oldCache=outerCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2])
}else{outerCache[dir]=newCache;
if((newCache[2]=matcher(elem,context,xml))){return true
}}}}}}
}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;
while(i--){if(!matchers[i](elem,context,xml)){return false
}}return true
}:matchers[0]
}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;
for(;
i<len;
i++){Sizzle(selector,contexts[i],results)
}return results
}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;
for(;
i<len;
i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);
if(mapped){map.push(i)
}}}}return newUnmatched
}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter)
}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector)
}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;
if(matcher){matcher(matcherIn,matcherOut,context,xml)
}if(postFilter){temp=condense(matcherOut,postMap);
postFilter(temp,[],context,xml);
i=temp.length;
while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem)
}}}if(seed){if(postFinder||preFilter){if(postFinder){temp=[];
i=matcherOut.length;
while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem))
}}postFinder(null,(matcherOut=[]),temp,xml)
}i=matcherOut.length;
while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem)
}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);
if(postFinder){postFinder(null,results,matcherOut,xml)
}else{push.apply(results,matcherOut)
}}})
}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext
},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1
},implicitRelative,true),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));
checkContext=null;
return ret
}];
for(;
i<len;
i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)]
}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);
if(matcher[expando]){j=++i;
for(;
j<len;
j++){if(Expr.relative[tokens[j].type]){break
}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens))
}matchers.push(matcher)
}}return elementMatcher(matchers)
}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find.TAG("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;
if(outermost){outermostContext=context!==document&&context
}for(;
i!==len&&(elem=elems[i])!=null;
i++){if(byElement&&elem){j=0;
while((matcher=elementMatchers[j++])){if(matcher(elem,context,xml)){results.push(elem);
break
}}if(outermost){dirruns=dirrunsUnique
}}if(bySet){if((elem=!matcher&&elem)){matchedCount--
}if(seed){unmatched.push(elem)
}}}matchedCount+=i;
if(bySet&&i!==matchedCount){j=0;
while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml)
}if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results)
}}}setMatched=condense(setMatched)
}push.apply(results,setMatched);
if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results)
}}if(outermost){dirruns=dirrunsUnique;
outermostContext=contextBackup
}return unmatched
};
return bySet?markFunction(superMatcher):superMatcher
}compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];
if(!cached){if(!match){match=tokenize(selector)
}i=match.length;
while(i--){cached=matcherFromTokens(match[i]);
if(cached[expando]){setMatchers.push(cached)
}else{elementMatchers.push(cached)
}}cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));
cached.selector=selector
}return cached
};
select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));
results=results||[];
if(match.length===1){tokens=match[0]=match[0].slice(0);
if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find.ID(token.matches[0].replace(runescape,funescape),context)||[])[0];
if(!context){return results
}else{if(compiled){context=context.parentNode
}}selector=selector.slice(tokens.shift().value.length)
}i=matchExpr.needsContext.test(selector)?0:tokens.length;
while(i--){token=tokens[i];
if(Expr.relative[(type=token.type)]){break
}if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);
selector=seed.length&&toSelector(tokens);
if(!selector){push.apply(results,seed);
return results
}break
}}}}(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,rsibling.test(selector)&&testContext(context.parentNode)||context);
return results
};
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;
support.detectDuplicates=!!hasDuplicate;
setDocument();
support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1
});
if(!assert(function(div){div.innerHTML="<a href='#'></a>";
return div.firstChild.getAttribute("href")==="#"
})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2)
}})
}if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";
div.firstChild.setAttribute("value","");
return div.firstChild.getAttribute("value")===""
})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue
}})
}if(!assert(function(div){return div.getAttribute("disabled")==null
})){addHandle(booleans,function(elem,name,isXML){var val;
if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null
}})
}return Sizzle
})(window);
jQuery.find=Sizzle;
jQuery.expr=Sizzle.selectors;
jQuery.expr[":"]=jQuery.expr.pseudos;
jQuery.unique=Sizzle.uniqueSort;
jQuery.text=Sizzle.getText;
jQuery.isXMLDoc=Sizzle.isXML;
jQuery.contains=Sizzle.contains;
var rneedsContext=jQuery.expr.match.needsContext;
var rsingleTag=(/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
var risSimple=/^.[^:#\[\.,]*$/;
function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return !!qualifier.call(elem,i,elem)!==not
})
}if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not
})
}if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not)
}qualifier=jQuery.filter(qualifier,elements)
}return jQuery.grep(elements,function(elem){return(indexOf.call(qualifier,elem)>=0)!==not
})
}jQuery.filter=function(expr,elems,not){var elem=elems[0];
if(not){expr=":not("+expr+")"
}return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1
}))
};
jQuery.fn.extend({find:function(selector){var i,len=this.length,ret=[],self=this;
if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;
i<len;
i++){if(jQuery.contains(self[i],this)){return true
}}}))
}for(i=0;
i<len;
i++){jQuery.find(selector,self[i],ret)
}ret=this.pushStack(len>1?jQuery.unique(ret):ret);
ret.selector=this.selector?this.selector+" "+selector:selector;
return ret
},filter:function(selector){return this.pushStack(winnow(this,selector||[],false))
},not:function(selector){return this.pushStack(winnow(this,selector||[],true))
},is:function(selector){return !!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length
}});
var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context){var match,elem;
if(!selector){return this
}if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){match=[null,selector,null]
}else{match=rquickExpr.exec(selector)
}if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;
jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match])
}else{this.attr(match,context[match])
}}}return this
}else{elem=document.getElementById(match[2]);
if(elem&&elem.parentNode){this.length=1;
this[0]=elem
}this.context=document;
this.selector=selector;
return this
}}else{if(!context||context.jquery){return(context||rootjQuery).find(selector)
}else{return this.constructor(context).find(selector)
}}}else{if(selector.nodeType){this.context=this[0]=selector;
this.length=1;
return this
}else{if(jQuery.isFunction(selector)){return typeof rootjQuery.ready!=="undefined"?rootjQuery.ready(selector):selector(jQuery)
}}}if(selector.selector!==undefined){this.selector=selector.selector;
this.context=selector.context
}return jQuery.makeArray(selector,this)
};
init.prototype=jQuery.fn;
rootjQuery=jQuery(document);
var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};
jQuery.extend({dir:function(elem,dir,until){var matched=[],truncate=until!==undefined;
while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break
}matched.push(elem)
}}return matched
},sibling:function(n,elem){var matched=[];
for(;
n;
n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n)
}}return matched
}});
jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;
return this.filter(function(){var i=0;
for(;
i<l;
i++){if(jQuery.contains(this,targets[i])){return true
}}})
},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;
for(;
i<l;
i++){for(cur=this[i];
cur&&cur!==context;
cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);
break
}}}return this.pushStack(matched.length>1?jQuery.unique(matched):matched)
},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1
}if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0])
}return indexOf.call(this,elem.jquery?elem[0]:elem)
},add:function(selector,context){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),jQuery(selector,context))))
},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector))
}});
function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur
}jQuery.each({parent:function(elem){var parent=elem.parentNode;
return parent&&parent.nodeType!==11?parent:null
},parents:function(elem){return jQuery.dir(elem,"parentNode")
},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until)
},next:function(elem){return sibling(elem,"nextSibling")
},prev:function(elem){return sibling(elem,"previousSibling")
},nextAll:function(elem){return jQuery.dir(elem,"nextSibling")
},prevAll:function(elem){return jQuery.dir(elem,"previousSibling")
},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until)
},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until)
},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem)
},children:function(elem){return jQuery.sibling(elem.firstChild)
},contents:function(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes)
}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);
if(name.slice(-5)!=="Until"){selector=until
}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched)
}if(this.length>1){if(!guaranteedUnique[name]){jQuery.unique(matched)
}if(rparentsprev.test(name)){matched.reverse()
}}return this.pushStack(matched)
}
});
var rnotwhite=(/\S+/g);
var optionsCache={};
function createOptions(options){var object=optionsCache[options]={};
jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true
});
return object
}jQuery.Callbacks=function(options){options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);
var memory,fired,firing,firingStart,firingLength,firingIndex,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;
fired=true;
firingIndex=firingStart||0;
firingStart=0;
firingLength=list.length;
firing=true;
for(;
list&&firingIndex<firingLength;
firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;
break
}}firing=false;
if(list){if(stack){if(stack.length){fire(stack.shift())
}}else{if(memory){list=[]
}else{self.disable()
}}}},self={add:function(){if(list){var start=list.length;
(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);
if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg)
}}else{if(arg&&arg.length&&type!=="string"){add(arg)
}}})
})(arguments);
if(firing){firingLength=list.length
}else{if(memory){firingStart=start;
fire(memory)
}}}return this
},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;
while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);
if(firing){if(index<=firingLength){firingLength--
}if(index<=firingIndex){firingIndex--
}}}})
}return this
},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length)
},empty:function(){list=[];
firingLength=0;
return this
},disable:function(){list=stack=memory=undefined;
return this
},disabled:function(){return !list
},lock:function(){stack=undefined;
if(!memory){self.disable()
}return this
},locked:function(){return !stack
},fireWith:function(context,args){if(list&&(!fired||stack)){args=args||[];
args=[context,args.slice?args.slice():args];
if(firing){stack.push(args)
}else{fire(args)
}}return this
},fire:function(){self.fireWith(this,arguments);
return this
},fired:function(){return !!fired
}};
return self
};
jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state
},always:function(){deferred.done(arguments).fail(arguments);
return this
},then:function(){var fns=arguments;
return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];
deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);
if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify)
}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments)
}})
});
fns=null
}).promise()
},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise
}},deferred={};
promise.pipe=promise.then;
jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];
promise[tuple[1]]=list.add;
if(stateString){list.add(function(){state=stateString
},tuples[i^1][2].disable,tuples[2][2].lock)
}deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);
return this
};
deferred[tuple[0]+"With"]=list.fireWith
});
promise.promise(deferred);
if(func){func.call(deferred,deferred)
}return deferred
},when:function(subordinate){var i=0,resolveValues=slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;
values[i]=arguments.length>1?slice.call(arguments):value;
if(values===progressValues){deferred.notifyWith(contexts,values)
}else{if(!(--remaining)){deferred.resolveWith(contexts,values)
}}}
},progressValues,progressContexts,resolveContexts;
if(length>1){progressValues=new Array(length);
progressContexts=new Array(length);
resolveContexts=new Array(length);
for(;
i<length;
i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues))
}else{--remaining
}}}if(!remaining){deferred.resolveWith(resolveContexts,resolveValues)
}return deferred.promise()
}});
var readyList;
jQuery.fn.ready=function(fn){jQuery.ready.promise().done(fn);
return this
};
jQuery.extend({isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++
}else{jQuery.ready(true)
}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return
}jQuery.isReady=true;
if(wait!==true&&--jQuery.readyWait>0){return
}readyList.resolveWith(document,[jQuery]);
if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");
jQuery(document).off("ready")
}}});
function completed(){document.removeEventListener("DOMContentLoaded",completed,false);
window.removeEventListener("load",completed,false);
jQuery.ready()
}jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();
if(document.readyState==="complete"){setTimeout(jQuery.ready)
}else{document.addEventListener("DOMContentLoaded",completed,false);
window.addEventListener("load",completed,false)
}}return readyList.promise(obj)
};
jQuery.ready.promise();
var access=jQuery.access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;
if(jQuery.type(key)==="object"){chainable=true;
for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw)
}}else{if(value!==undefined){chainable=true;
if(!jQuery.isFunction(value)){raw=true
}if(bulk){if(raw){fn.call(elems,value);
fn=null
}else{bulk=fn;
fn=function(elem,key,value){return bulk.call(jQuery(elem),value)
}
}}if(fn){for(;
i<len;
i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)))
}}}}return chainable?elems:bulk?fn.call(elems):len?fn(elems[0],key):emptyGet
};
jQuery.acceptData=function(owner){return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType)
};
function Data(){Object.defineProperty(this.cache={},0,{get:function(){return{}
}});
this.expando=jQuery.expando+Data.uid++
}Data.uid=1;
Data.accepts=jQuery.acceptData;
Data.prototype={key:function(owner){if(!Data.accepts(owner)){return 0
}var descriptor={},unlock=owner[this.expando];
if(!unlock){unlock=Data.uid++;
try{descriptor[this.expando]={value:unlock};
Object.defineProperties(owner,descriptor)
}catch(e){descriptor[this.expando]=unlock;
jQuery.extend(owner,descriptor)
}}if(!this.cache[unlock]){this.cache[unlock]={}
}return unlock
},set:function(owner,data,value){var prop,unlock=this.key(owner),cache=this.cache[unlock];
if(typeof data==="string"){cache[data]=value
}else{if(jQuery.isEmptyObject(cache)){jQuery.extend(this.cache[unlock],data)
}else{for(prop in data){cache[prop]=data[prop]
}}}return cache
},get:function(owner,key){var cache=this.cache[this.key(owner)];
return key===undefined?cache:cache[key]
},access:function(owner,key,value){var stored;
if(key===undefined||((key&&typeof key==="string")&&value===undefined)){stored=this.get(owner,key);
return stored!==undefined?stored:this.get(owner,jQuery.camelCase(key))
}this.set(owner,key,value);
return value!==undefined?value:key
},remove:function(owner,key){var i,name,camel,unlock=this.key(owner),cache=this.cache[unlock];
if(key===undefined){this.cache[unlock]={}
}else{if(jQuery.isArray(key)){name=key.concat(key.map(jQuery.camelCase))
}else{camel=jQuery.camelCase(key);
if(key in cache){name=[key,camel]
}else{name=camel;
name=name in cache?[name]:(name.match(rnotwhite)||[])
}}i=name.length;
while(i--){delete cache[name[i]]
}}},hasData:function(owner){return !jQuery.isEmptyObject(this.cache[owner[this.expando]]||{})
},discard:function(owner){if(owner[this.expando]){delete this.cache[owner[this.expando]]
}}};
var data_priv=new Data();
var data_user=new Data();
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/([A-Z])/g;
function dataAttr(elem,key,data){var name;
if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();
data=elem.getAttribute(name);
if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data
}catch(e){}data_user.set(elem,key,data)
}else{data=undefined
}}return data
}jQuery.extend({hasData:function(elem){return data_user.hasData(elem)||data_priv.hasData(elem)
},data:function(elem,name,data){return data_user.access(elem,name,data)
},removeData:function(elem,name){data_user.remove(elem,name)
},_data:function(elem,name,data){return data_priv.access(elem,name,data)
},_removeData:function(elem,name){data_priv.remove(elem,name)
}});
jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;
if(key===undefined){if(this.length){data=data_user.get(elem);
if(elem.nodeType===1&&!data_priv.get(elem,"hasDataAttrs")){i=attrs.length;
while(i--){if(attrs[i]){name=attrs[i].name;
if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));
dataAttr(elem,name,data[name])
}}}data_priv.set(elem,"hasDataAttrs",true)
}}return data
}if(typeof key==="object"){return this.each(function(){data_user.set(this,key)
})
}return access(this,function(value){var data,camelKey=jQuery.camelCase(key);
if(elem&&value===undefined){data=data_user.get(elem,key);
if(data!==undefined){return data
}data=data_user.get(elem,camelKey);
if(data!==undefined){return data
}data=dataAttr(elem,camelKey,undefined);
if(data!==undefined){return data
}return
}this.each(function(){var data=data_user.get(this,camelKey);
data_user.set(this,camelKey,value);
if(key.indexOf("-")!==-1&&data!==undefined){data_user.set(this,key,value)
}})
},null,value,arguments.length>1,null,true)
},removeData:function(key){return this.each(function(){data_user.remove(this,key)
})
}});
jQuery.extend({queue:function(elem,type,data){var queue;
if(elem){type=(type||"fx")+"queue";
queue=data_priv.get(elem,type);
if(data){if(!queue||jQuery.isArray(data)){queue=data_priv.access(elem,type,jQuery.makeArray(data))
}else{queue.push(data)
}}return queue||[]
}},dequeue:function(elem,type){type=type||"fx";
var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type)
};
if(fn==="inprogress"){fn=queue.shift();
startLength--
}if(fn){if(type==="fx"){queue.unshift("inprogress")
}delete hooks.stop;
fn.call(elem,next,hooks)
}if(!startLength&&hooks){hooks.empty.fire()
}},_queueHooks:function(elem,type){var key=type+"queueHooks";
return data_priv.get(elem,key)||data_priv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){data_priv.remove(elem,[type+"queue",key])
})})
}});
jQuery.fn.extend({queue:function(type,data){var setter=2;
if(typeof type!=="string"){data=type;
type="fx";
setter--
}if(arguments.length<setter){return jQuery.queue(this[0],type)
}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);
jQuery._queueHooks(this,type);
if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type)
}})
},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type)
})
},clearQueue:function(type){return this.queue(type||"fx",[])
},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements])
}};
if(typeof type!=="string"){obj=type;
type=undefined
}type=type||"fx";
while(i--){tmp=data_priv.get(elements[i],type+"queueHooks");
if(tmp&&tmp.empty){count++;
tmp.empty.add(resolve)
}}resolve();
return defer.promise(obj)
}});
var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var cssExpand=["Top","Right","Bottom","Left"];
var isHidden=function(elem,el){elem=el||elem;
return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem)
};
var rcheckableType=(/^(?:checkbox|radio)$/i);
(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");
input.setAttribute("type","radio");
input.setAttribute("checked","checked");
input.setAttribute("name","t");
div.appendChild(input);
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;
div.innerHTML="<textarea>x</textarea>";
support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue
})();
var strundefined=typeof undefined;
support.focusinBubbles="onfocusin" in window;
var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;
function returnTrue(){return true
}function returnFalse(){return false
}function safeActiveElement(){try{return document.activeElement
}catch(err){}}jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=data_priv.get(elem);
if(!elemData){return
}if(handler.handler){handleObjIn=handler;
handler=handleObjIn.handler;
selector=handleObjIn.selector
}if(!handler.guid){handler.guid=jQuery.guid++
}if(!(events=elemData.events)){events=elemData.events={}
}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!==strundefined&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined
}
}types=(types||"").match(rnotwhite)||[""];
t=types.length;
while(t--){tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){continue
}special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
special=jQuery.event.special[type]||{};
handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);
if(!(handlers=events[type])){handlers=events[type]=[];
handlers.delegateCount=0;
if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false)
}}}if(special.add){special.add.call(elem,handleObj);
if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid
}}if(selector){handlers.splice(handlers.delegateCount++,0,handleObj)
}else{handlers.push(handleObj)
}jQuery.event.global[type]=true
}},remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=data_priv.hasData(elem)&&data_priv.get(elem);
if(!elemData||!(events=elemData.events)){return
}types=(types||"").match(rnotwhite)||[""];
t=types.length;
while(t--){tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true)
}continue
}special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
handlers=events[type]||[];
tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");
origCount=j=handlers.length;
while(j--){handleObj=handlers[j];
if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);
if(handleObj.selector){handlers.delegateCount--
}if(special.remove){special.remove.call(elem,handleObj)
}}}if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle)
}delete events[type]
}}if(jQuery.isEmptyObject(events)){delete elemData.handle;
data_priv.remove(elem,"events")
}},trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];
cur=tmp=elem=elem||document;
if(elem.nodeType===3||elem.nodeType===8){return
}if(rfocusMorph.test(type+jQuery.event.triggered)){return
}if(type.indexOf(".")>=0){namespaces=type.split(".");
type=namespaces.shift();
namespaces.sort()
}ontype=type.indexOf(":")<0&&"on"+type;
event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);
event.isTrigger=onlyHandlers?2:3;
event.namespace=namespaces.join(".");
event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
event.result=undefined;
if(!event.target){event.target=elem
}data=data==null?[event]:jQuery.makeArray(data,[event]);
special=jQuery.event.special[type]||{};
if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return
}if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;
if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode
}for(;
cur;
cur=cur.parentNode){eventPath.push(cur);
tmp=cur
}if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window)
}}i=0;
while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;
handle=(data_priv.get(cur,"events")||{})[event.type]&&data_priv.get(cur,"handle");
if(handle){handle.apply(cur,data)
}handle=ontype&&cur[ontype];
if(handle&&handle.apply&&jQuery.acceptData(cur)){event.result=handle.apply(cur,data);
if(event.result===false){event.preventDefault()
}}}event.type=type;
if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&jQuery.acceptData(elem)){if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){tmp=elem[ontype];
if(tmp){elem[ontype]=null
}jQuery.event.triggered=type;
elem[type]();
jQuery.event.triggered=undefined;
if(tmp){elem[ontype]=tmp
}}}}return event.result
},dispatch:function(event){event=jQuery.event.fix(event);
var i,j,ret,matched,handleObj,handlerQueue=[],args=slice.call(arguments),handlers=(data_priv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};
args[0]=event;
event.delegateTarget=this;
if(special.preDispatch&&special.preDispatch.call(this,event)===false){return
}handlerQueue=jQuery.event.handlers.call(this,event,handlers);
i=0;
while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;
j=0;
while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;
event.data=handleObj.data;
ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);
if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();
event.stopPropagation()
}}}}}if(special.postDispatch){special.postDispatch.call(this,event)
}return event.result
},handlers:function(event,handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;
if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;
cur!==this;
cur=cur.parentNode||this){if(cur.disabled!==true||event.type!=="click"){matches=[];
for(i=0;
i<delegateCount;
i++){handleObj=handlers[i];
sel=handleObj.selector+" ";
if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length
}if(matches[sel]){matches.push(handleObj)
}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches})
}}}}if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)})
}return handlerQueue
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode
}return event
}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button;
if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;
doc=eventDoc.documentElement;
body=eventDoc.body;
event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);
event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0)
}if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)))
}return event
}},fix:function(event){if(event[jQuery.expando]){return event
}var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];
if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{}
}copy=fixHook.props?this.props.concat(fixHook.props):this.props;
event=new jQuery.Event(originalEvent);
i=copy.length;
while(i--){prop=copy[i];
event[prop]=originalEvent[prop]
}if(!event.target){event.target=document
}if(event.target.nodeType===3){event.target=event.target.parentNode
}return fixHook.filter?fixHook.filter(event,originalEvent):event
},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){this.focus();
return false
}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();
return false
}},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();
return false
}},_default:function(event){return jQuery.nodeName(event.target,"a")
}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result
}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});
if(bubble){jQuery.event.trigger(e,null,elem)
}else{jQuery.event.dispatch.call(elem,e)
}if(e.isDefaultPrevented()){event.preventDefault()
}}};
jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false)
}};
jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props)
}if(src&&src.type){this.originalEvent=src;
this.type=src.type;
this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse
}else{this.type=src
}if(props){jQuery.extend(this,props)
}this.timeStamp=src&&src.timeStamp||jQuery.now();
this[jQuery.expando]=true
};
jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;
this.isDefaultPrevented=returnTrue;
if(e&&e.preventDefault){e.preventDefault()
}},stopPropagation:function(){var e=this.originalEvent;
this.isPropagationStopped=returnTrue;
if(e&&e.stopPropagation){e.stopPropagation()
}},stopImmediatePropagation:function(){var e=this.originalEvent;
this.isImmediatePropagationStopped=returnTrue;
if(e&&e.stopImmediatePropagation){e.stopImmediatePropagation()
}this.stopPropagation()
}};
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;
if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;
ret=handleObj.handler.apply(this,arguments);
event.type=fix
}return ret
}}
});
if(!support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true)
};
jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=data_priv.access(doc,fix);
if(!attaches){doc.addEventListener(orig,handler,true)
}data_priv.access(doc,fix,(attaches||0)+1)
},teardown:function(){var doc=this.ownerDocument||this,attaches=data_priv.access(doc,fix)-1;
if(!attaches){doc.removeEventListener(orig,handler,true);
data_priv.remove(doc,fix)
}else{data_priv.access(doc,fix,attaches)
}}}
})
}jQuery.fn.extend({on:function(types,selector,data,fn,one){var origFn,type;
if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;
selector=undefined
}for(type in types){this.on(type,selector,data,types[type],one)
}return this
}if(data==null&&fn==null){fn=selector;
data=selector=undefined
}else{if(fn==null){if(typeof selector==="string"){fn=data;
data=undefined
}else{fn=data;
data=selector;
selector=undefined
}}}if(fn===false){fn=returnFalse
}else{if(!fn){return this
}}if(one===1){origFn=fn;
fn=function(event){jQuery().off(event);
return origFn.apply(this,arguments)
};
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++)
}return this.each(function(){jQuery.event.add(this,types,fn,data,selector)
})
},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1)
},off:function(types,selector,fn){var handleObj,type;
if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;
jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);
return this
}if(typeof types==="object"){for(type in types){this.off(type,selector,types[type])
}return this
}if(selector===false||typeof selector==="function"){fn=selector;
selector=undefined
}if(fn===false){fn=returnFalse
}return this.each(function(){jQuery.event.remove(this,types,fn,selector)
})
},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this)
})
},triggerHandler:function(type,data){var elem=this[0];
if(elem){return jQuery.event.trigger(type,data,elem,true)
}}});
var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
wrapMap.optgroup=wrapMap.option;
wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;
wrapMap.th=wrapMap.td;
function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem
}function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;
return elem
}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);
if(match){elem.type=match[1]
}else{elem.removeAttribute("type")
}return elem
}function setGlobalEval(elems,refElements){var i=0,l=elems.length;
for(;
i<l;
i++){data_priv.set(elems[i],"globalEval",!refElements||data_priv.get(refElements[i],"globalEval"))
}}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;
if(dest.nodeType!==1){return
}if(data_priv.hasData(src)){pdataOld=data_priv.access(src);
pdataCur=data_priv.set(dest,pdataOld);
events=pdataOld.events;
if(events){delete pdataCur.handle;
pdataCur.events={};
for(type in events){for(i=0,l=events[type].length;
i<l;
i++){jQuery.event.add(dest,type,events[type][i])
}}}}if(data_user.hasData(src)){udataOld=data_user.access(src);
udataCur=jQuery.extend({},udataOld);
data_user.set(dest,udataCur)
}}function getAll(context,tag){var ret=context.getElementsByTagName?context.getElementsByTagName(tag||"*"):context.querySelectorAll?context.querySelectorAll(tag||"*"):[];
return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret
}function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();
if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked
}else{if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue
}}}jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);
if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);
srcElements=getAll(elem);
for(i=0,l=srcElements.length;
i<l;
i++){fixInput(srcElements[i],destElements[i])
}}if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);
destElements=destElements||getAll(clone);
for(i=0,l=srcElements.length;
i<l;
i++){cloneCopyEvent(srcElements[i],destElements[i])
}}else{cloneCopyEvent(elem,clone)
}}destElements=getAll(clone,"script");
if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"))
}return clone
},buildFragment:function(elems,context,scripts,selection){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;
for(;
i<l;
i++){elem=elems[i];
if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem)
}else{if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem))
}else{tmp=tmp||fragment.appendChild(context.createElement("div"));
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();
wrap=wrapMap[tag]||wrapMap._default;
tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap[2];
j=wrap[0];
while(j--){tmp=tmp.lastChild
}jQuery.merge(nodes,tmp.childNodes);
tmp=fragment.firstChild;
tmp.textContent=""
}}}}fragment.textContent="";
i=0;
while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)!==-1){continue
}contains=jQuery.contains(elem.ownerDocument,elem);
tmp=getAll(fragment.appendChild(elem),"script");
if(contains){setGlobalEval(tmp)
}if(scripts){j=0;
while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem)
}}}}return fragment
},cleanData:function(elems){var data,elem,type,key,special=jQuery.event.special,i=0;
for(;
(elem=elems[i])!==undefined;
i++){if(jQuery.acceptData(elem)){key=elem[data_priv.expando];
if(key&&(data=data_priv.cache[key])){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type)
}else{jQuery.removeEvent(elem,type,data.handle)
}}}if(data_priv.cache[key]){delete data_priv.cache[key]
}}}delete data_user.cache[elem[data_user.expando]]
}}});
jQuery.fn.extend({text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value
}})
},null,value,arguments.length)
},append:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);
target.appendChild(elem)
}})
},prepend:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);
target.insertBefore(elem,target.firstChild)
}})
},before:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this)
}})
},after:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling)
}})
},remove:function(selector,keepData){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;
for(;
(elem=elems[i])!=null;
i++){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem))
}if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"))
}elem.parentNode.removeChild(elem)
}}return this
},empty:function(){var elem,i=0;
for(;
(elem=this[i])!=null;
i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));
elem.textContent=""
}}return this
},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;
deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;
return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents)
})
},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;
if(value===undefined&&elem.nodeType===1){return elem.innerHTML
}if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");
try{for(;
i<l;
i++){elem=this[i]||{};
if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));
elem.innerHTML=value
}}elem=0
}catch(e){}}if(elem){this.empty().append(value)
}},null,value,arguments.length)
},replaceWith:function(){var arg=arguments[0];
this.domManip(arguments,function(elem){arg=this.parentNode;
jQuery.cleanData(getAll(this));
if(arg){arg.replaceChild(elem,this)
}});
return arg&&(arg.length||arg.nodeType)?this:this.remove()
},detach:function(selector){return this.remove(selector,true)
},domManip:function(args,callback){args=concat.apply([],args);
var fragment,first,scripts,hasScripts,node,doc,i=0,l=this.length,set=this,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);
if(isFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return this.each(function(index){var self=set.eq(index);
if(isFunction){args[0]=value.call(this,index,self.html())
}self.domManip(args,callback)
})
}if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,false,this);
first=fragment.firstChild;
if(fragment.childNodes.length===1){fragment=first
}if(first){scripts=jQuery.map(getAll(fragment,"script"),disableScript);
hasScripts=scripts.length;
for(;
i<l;
i++){node=fragment;
if(i!==iNoClone){node=jQuery.clone(node,true,true);
if(hasScripts){jQuery.merge(scripts,getAll(node,"script"))
}}callback.call(this[i],node,i)
}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;
jQuery.map(scripts,restoreScript);
for(i=0;
i<hasScripts;
i++){node=scripts[i];
if(rscriptType.test(node.type||"")&&!data_priv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){if(jQuery._evalUrl){jQuery._evalUrl(node.src)
}}else{jQuery.globalEval(node.textContent.replace(rcleanScript,""))
}}}}}}return this
}});
jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;
for(;
i<=last;
i++){elems=i===last?this:this.clone(true);
jQuery(insert[i])[original](elems);
push.apply(ret,elems.get())
}return this.pushStack(ret)
}
});
var iframe,elemdisplay={};
function actualDisplay(name,doc){var style,elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=window.getDefaultComputedStyle&&(style=window.getDefaultComputedStyle(elem[0]))?style.display:jQuery.css(elem[0],"display");
elem.detach();
return display
}function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];
if(!display){display=actualDisplay(nodeName,doc);
if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
doc=iframe[0].contentDocument;
doc.write();
doc.close();
display=actualDisplay(nodeName,doc);
iframe.detach()
}elemdisplay[nodeName]=display
}return display
}var rmargin=(/^margin/);
var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");
var getStyles=function(elem){if(elem.ownerDocument.defaultView.opener){return elem.ownerDocument.defaultView.getComputedStyle(elem,null)
}return window.getComputedStyle(elem,null)
};
function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;
computed=computed||getStyles(elem);
if(computed){ret=computed.getPropertyValue(name)||computed[name]
}if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name)
}if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;
minWidth=style.minWidth;
maxWidth=style.maxWidth;
style.minWidth=style.maxWidth=style.width=ret;
ret=computed.width;
style.width=width;
style.minWidth=minWidth;
style.maxWidth=maxWidth
}}return ret!==undefined?ret+"":ret
}function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){delete this.get;
return
}return(this.get=hookFn).apply(this,arguments)
}}
}(function(){var pixelPositionVal,boxSizingReliableVal,docElem=document.documentElement,container=document.createElement("div"),div=document.createElement("div");
if(!div.style){return
}div.style.backgroundClip="content-box";
div.cloneNode(true).style.backgroundClip="";
support.clearCloneStyle=div.style.backgroundClip==="content-box";
container.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
container.appendChild(div);
function computePixelPositionAndBoxSizingReliable(){div.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
div.innerHTML="";
docElem.appendChild(container);
var divStyle=window.getComputedStyle(div,null);
pixelPositionVal=divStyle.top!=="1%";
boxSizingReliableVal=divStyle.width==="4px";
docElem.removeChild(container)
}if(window.getComputedStyle){jQuery.extend(support,{pixelPosition:function(){computePixelPositionAndBoxSizingReliable();
return pixelPositionVal
},boxSizingReliable:function(){if(boxSizingReliableVal==null){computePixelPositionAndBoxSizingReliable()
}return boxSizingReliableVal
},reliableMarginRight:function(){var ret,marginDiv=div.appendChild(document.createElement("div"));
marginDiv.style.cssText=div.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
marginDiv.style.marginRight=marginDiv.style.width="0";
div.style.width="1px";
docElem.appendChild(container);
ret=!parseFloat(window.getComputedStyle(marginDiv,null).marginRight);
docElem.removeChild(container);
div.removeChild(marginDiv);
return ret
}})
}})();
jQuery.swap=function(elem,options,callback,args){var ret,name,old={};
for(name in options){old[name]=elem.style[name];
elem.style[name]=options[name]
}ret=callback.apply(elem,args||[]);
for(name in options){elem.style[name]=old[name]
}return ret
};
var rdisplayswap=/^(none|table(?!-c[ea]).+)/,rnumsplit=new RegExp("^("+pnum+")(.*)$","i"),rrelNum=new RegExp("^([+-])=("+pnum+")","i"),cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"];
function vendorPropName(style,name){if(name in style){return name
}var capName=name[0].toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;
while(i--){name=cssPrefixes[i]+capName;
if(name in style){return name
}}return origName
}function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);
return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value
}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;
for(;
i<4;
i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles)
}if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles)
}if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles)
}}else{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);
if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles)
}}}return val
}function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";
if(val<=0||val==null){val=curCSS(elem,name,styles);
if(val<0||val==null){val=elem.style[name]
}if(rnumnonpx.test(val)){return val
}valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);
val=parseFloat(val)||0
}return(val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px"
}function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;
for(;
index<length;
index++){elem=elements[index];
if(!elem.style){continue
}values[index]=data_priv.get(elem,"olddisplay");
display=elem.style.display;
if(show){if(!values[index]&&display==="none"){elem.style.display=""
}if(elem.style.display===""&&isHidden(elem)){values[index]=data_priv.access(elem,"olddisplay",defaultDisplay(elem.nodeName))
}}else{hidden=isHidden(elem);
if(display!=="none"||!hidden){data_priv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"))
}}}for(index=0;
index<length;
index++){elem=elements[index];
if(!elem.style){continue
}if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none"
}}return elements
}jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");
return ret===""?"1":ret
}}}},cssNumber:{columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":"cssFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return
}var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;
name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];
if(value!==undefined){type=typeof value;
if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name));
type="number"
}if(value==null||value!==value){return
}if(type==="number"&&!jQuery.cssNumber[origName]){value+="px"
}if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit"
}if(!hooks||!("set" in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value
}}else{if(hooks&&"get" in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret
}return style[name]
}},css:function(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);
name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];
if(hooks&&"get" in hooks){val=hooks.get(elem,true,extra)
}if(val===undefined){val=curCSS(elem,name,styles)
}if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name]
}if(extra===""||extra){num=parseFloat(val);
return extra===true||jQuery.isNumeric(num)?num||0:val
}return val
}});
jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra)
}):getWidthOrHeight(elem,name,extra)
}},set:function(elem,value,extra){var styles=extra&&getStyles(elem);
return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0)
}}
});
jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return jQuery.swap(elem,{display:"inline-block"},curCSS,[elem,"marginRight"])
}});
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];
for(;
i<4;
i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0]
}return expanded
}};
if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber
}});
jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;
if(jQuery.isArray(name)){styles=getStyles(elem);
len=name.length;
for(;
i<len;
i++){map[name[i]]=jQuery.css(elem,name[i],false,styles)
}return map
}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name)
},name,value,arguments.length>1)
},show:function(){return showHide(this,true)
},hide:function(){return showHide(this)
},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide()
}return this.each(function(){if(isHidden(this)){jQuery(this).show()
}else{jQuery(this).hide()
}})
}});
function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing)
}jQuery.Tween=Tween;
Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;
this.prop=prop;
this.easing=easing||"swing";
this.options=options;
this.start=this.now=this.cur();
this.end=end;
this.unit=unit||(jQuery.cssNumber[prop]?"":"px")
},cur:function(){var hooks=Tween.propHooks[this.prop];
return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this)
},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];
if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration)
}else{this.pos=eased=percent
}this.now=(this.end-this.start)*eased+this.start;
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(hooks&&hooks.set){hooks.set(this)
}else{Tween.propHooks._default.set(this)
}return this
}};
Tween.prototype.init.prototype=Tween.prototype;
Tween.propHooks={_default:{get:function(tween){var result;
if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop]
}result=jQuery.css(tween.elem,tween.prop,"");
return !result||result==="auto"?0:result
},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween)
}else{if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit)
}else{tween.elem[tween.prop]=tween.now
}}}}};
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now
}}};
jQuery.easing={linear:function(p){return p
},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2
}};
jQuery.fx=Tween.prototype.init;
jQuery.fx.step={};
var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts&&parts[3]||(jQuery.cssNumber[prop]?"":"px"),start=(jQuery.cssNumber[prop]||unit!=="px"&&+target)&&rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;
if(start&&start[3]!==unit){unit=unit||start[3];
parts=parts||[];
start=+target||1;
do{scale=scale||".5";
start=start/scale;
jQuery.style(tween.elem,prop,start+unit)
}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations)
}if(parts){start=tween.start=+start||+target||0;
tween.unit=unit;
tween.end=parts[1]?start+(parts[1]+1)*parts[2]:+parts[2]
}return tween
}]};
function createFxNow(){setTimeout(function(){fxNow=undefined
});
return(fxNow=jQuery.now())
}function genFx(type,includeWidth){var which,i=0,attrs={height:type};
includeWidth=includeWidth?1:0;
for(;
i<4;
i+=2-includeWidth){which=cssExpand[i];
attrs["margin"+which]=attrs["padding"+which]=type
}if(includeWidth){attrs.opacity=attrs.width=type
}return attrs
}function createTween(value,prop,animation){var tween,collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;
for(;
index<length;
index++){if((tween=collection[index].call(animation,prop,value))){return tween
}}}function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=data_priv.get(elem,"fxshow");
if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");
if(hooks.unqueued==null){hooks.unqueued=0;
oldfire=hooks.empty.fire;
hooks.empty.fire=function(){if(!hooks.unqueued){oldfire()
}}
}hooks.unqueued++;
anim.always(function(){anim.always(function(){hooks.unqueued--;
if(!jQuery.queue(elem,"fx").length){hooks.empty.fire()
}})
})
}if(elem.nodeType===1&&("height" in props||"width" in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];
display=jQuery.css(elem,"display");
checkDisplay=display==="none"?data_priv.get(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;
if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){style.display="inline-block"
}}if(opts.overflow){style.overflow="hidden";
anim.always(function(){style.overflow=opts.overflow[0];
style.overflowX=opts.overflow[1];
style.overflowY=opts.overflow[2]
})
}for(prop in props){value=props[prop];
if(rfxtypes.exec(value)){delete props[prop];
toggle=toggle||value==="toggle";
if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true
}else{continue
}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop)
}else{display=undefined
}}if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden" in dataShow){hidden=dataShow.hidden
}}else{dataShow=data_priv.access(elem,"fxshow",{})
}if(toggle){dataShow.hidden=!hidden
}if(hidden){jQuery(elem).show()
}else{anim.done(function(){jQuery(elem).hide()
})
}anim.done(function(){var prop;
data_priv.remove(elem,"fxshow");
for(prop in orig){jQuery.style(elem,prop,orig[prop])
}});
for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);
if(!(prop in dataShow)){dataShow[prop]=tween.start;
if(hidden){tween.end=tween.start;
tween.start=prop==="width"||prop==="height"?1:0
}}}}else{if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display
}}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;
for(index in props){name=jQuery.camelCase(index);
easing=specialEasing[name];
value=props[index];
if(jQuery.isArray(value)){easing=value[1];
value=props[index]=value[0]
}if(index!==name){props[name]=value;
delete props[index]
}hooks=jQuery.cssHooks[name];
if(hooks&&"expand" in hooks){value=hooks.expand(value);
delete props[name];
for(index in value){if(!(index in props)){props[index]=value[index];
specialEasing[index]=easing
}}}else{specialEasing[name]=easing
}}}function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem
}),tick=function(){if(stopped){return false
}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;
for(;
index<length;
index++){animation.tweens[index].run(percent)
}deferred.notifyWith(elem,[animation,percent,remaining]);
if(percent<1&&length){return remaining
}else{deferred.resolveWith(elem,[animation]);
return false
}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);
animation.tweens.push(tween);
return tween
},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;
if(stopped){return this
}stopped=true;
for(;
index<length;
index++){animation.tweens[index].run(1)
}if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd])
}else{deferred.rejectWith(elem,[animation,gotoEnd])
}return this
}}),props=animation.props;
propFilter(props,animation.opts.specialEasing);
for(;
index<length;
index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);
if(result){return result
}}jQuery.map(props,createTween,animation);
if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation)
}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));
return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
}jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;
props=["*"]
}else{props=props.split(" ")
}var prop,index=0,length=props.length;
for(;
index<length;
index++){prop=props[index];
tweeners[prop]=tweeners[prop]||[];
tweeners[prop].unshift(callback)
}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback)
}else{animationPrefilters.push(callback)
}}});
jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};
opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;
if(opt.queue==null||opt.queue===true){opt.queue="fx"
}opt.old=opt.complete;
opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this)
}if(opt.queue){jQuery.dequeue(this,opt.queue)
}};
return opt
};
jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback)
},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);
if(empty||data_priv.get(this,"finish")){anim.stop(true)
}};
doAnimation.finish=doAnimation;
return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation)
},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;
delete hooks.stop;
stop(gotoEnd)
};
if(typeof type!=="string"){gotoEnd=clearQueue;
clearQueue=type;
type=undefined
}if(clearQueue&&type!==false){this.queue(type||"fx",[])
}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=data_priv.get(this);
if(index){if(data[index]&&data[index].stop){stopQueue(data[index])
}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index])
}}}for(index=timers.length;
index--;
){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);
dequeue=false;
timers.splice(index,1)
}}if(dequeue||!gotoEnd){jQuery.dequeue(this,type)
}})
},finish:function(type){if(type!==false){type=type||"fx"
}return this.each(function(){var index,data=data_priv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;
data.finish=true;
jQuery.queue(this,type,[]);
if(hooks&&hooks.stop){hooks.stop.call(this,true)
}for(index=timers.length;
index--;
){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);
timers.splice(index,1)
}}for(index=0;
index<length;
index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this)
}}delete data.finish
})
}});
jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];
jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback)
}
});
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback)
}
});
jQuery.timers=[];
jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;
fxNow=jQuery.now();
for(;
i<timers.length;
i++){timer=timers[i];
if(!timer()&&timers[i]===timer){timers.splice(i--,1)
}}if(!timers.length){jQuery.fx.stop()
}fxNow=undefined
};
jQuery.fx.timer=function(timer){jQuery.timers.push(timer);
if(timer()){jQuery.fx.start()
}else{jQuery.timers.pop()
}};
jQuery.fx.interval=13;
jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval)
}};
jQuery.fx.stop=function(){clearInterval(timerId);
timerId=null
};
jQuery.fx.speeds={slow:600,fast:200,_default:400};
jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;
type=type||"fx";
return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);
hooks.stop=function(){clearTimeout(timeout)
}
})
};
(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));
input.type="checkbox";
support.checkOn=input.value!=="";
support.optSelected=opt.selected;
select.disabled=true;
support.optDisabled=!opt.disabled;
input=document.createElement("input");
input.value="t";
input.type="radio";
support.radioValue=input.value==="t"
})();
var nodeHook,boolHook,attrHandle=jQuery.expr.attrHandle;
jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1)
},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name)
})
}});
jQuery.extend({attr:function(elem,name,value){var hooks,ret,nType=elem.nodeType;
if(!elem||nType===3||nType===8||nType===2){return
}if(typeof elem.getAttribute===strundefined){return jQuery.prop(elem,name,value)
}if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();
hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:nodeHook)
}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name)
}else{if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret
}else{elem.setAttribute(name,value+"");
return value
}}}else{if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret
}else{ret=jQuery.find.attr(elem,name);
return ret==null?undefined:ret
}}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);
if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;
if(jQuery.expr.match.bool.test(name)){elem[propName]=false
}elem.removeAttribute(name)
}}},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;
elem.setAttribute("type",value);
if(val){elem.value=val
}return value
}}}}});
boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name)
}else{elem.setAttribute(name,name)
}return name
}};
jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;
attrHandle[name]=function(elem,name,isXML){var ret,handle;
if(!isXML){handle=attrHandle[name];
attrHandle[name]=ret;
ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;
attrHandle[name]=handle
}return ret
}
});
var rfocusable=/^(?:input|select|textarea|button)$/i;
jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1)
},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name]
})
}});
jQuery.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;
if(!elem||nType===3||nType===8||nType===2){return
}notxml=nType!==1||!jQuery.isXMLDoc(elem);
if(notxml){name=jQuery.propFix[name]||name;
hooks=jQuery.propHooks[name]
}if(value!==undefined){return hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined?ret:(elem[name]=value)
}else{return hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null?ret:elem[name]
}},propHooks:{tabIndex:{get:function(elem){return elem.hasAttribute("tabindex")||rfocusable.test(elem.nodeName)||elem.href?elem.tabIndex:-1
}}}});
if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;
if(parent&&parent.parentNode){parent.parentNode.selectedIndex
}return null
}}
}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this
});
var rclass=/[\t\r\n\f]/g;
jQuery.fn.extend({addClass:function(value){var classes,elem,cur,clazz,j,finalValue,proceed=typeof value==="string"&&value,i=0,len=this.length;
if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className))
})
}if(proceed){classes=(value||"").match(rnotwhite)||[];
for(;
i<len;
i++){elem=this[i];
cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):" ");
if(cur){j=0;
while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" "
}}finalValue=jQuery.trim(cur);
if(elem.className!==finalValue){elem.className=finalValue
}}}}return this
},removeClass:function(value){var classes,elem,cur,clazz,j,finalValue,proceed=arguments.length===0||typeof value==="string"&&value,i=0,len=this.length;
if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className))
})
}if(proceed){classes=(value||"").match(rnotwhite)||[];
for(;
i<len;
i++){elem=this[i];
cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):"");
if(cur){j=0;
while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>=0){cur=cur.replace(" "+clazz+" "," ")
}}finalValue=value?jQuery.trim(cur):"";
if(elem.className!==finalValue){elem.className=finalValue
}}}}return this
},toggleClass:function(value,stateVal){var type=typeof value;
if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value)
}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal)
})
}return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),classNames=value.match(rnotwhite)||[];
while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className)
}else{self.addClass(className)
}}}else{if(type===strundefined||type==="boolean"){if(this.className){data_priv.set(this,"__className__",this.className)
}this.className=this.className||value===false?"":data_priv.get(this,"__className__")||""
}}})
},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;
for(;
i<l;
i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true
}}return false
}});
var rreturn=/\r/g;
jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];
if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];
if(hooks&&"get" in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret
}ret=elem.value;
return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret
}return
}isFunction=jQuery.isFunction(value);
return this.each(function(i){var val;
if(this.nodeType!==1){return
}if(isFunction){val=value.call(this,i,jQuery(this).val())
}else{val=value
}if(val==null){val=""
}else{if(typeof val==="number"){val+=""
}else{if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+""
})
}}}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];
if(!hooks||!("set" in hooks)||hooks.set(this,val,"value")===undefined){this.value=val
}})
}});
jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");
return val!=null?val:jQuery.trim(jQuery.text(elem))
}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;
for(;
i<max;
i++){option=options[i];
if((option.selected||i===index)&&(support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();
if(one){return value
}values.push(value)
}}return values
},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;
while(i--){option=options[i];
if((option.selected=jQuery.inArray(option.value,values)>=0)){optionSet=true
}}if(!optionSet){elem.selectedIndex=-1
}return values
}}}});
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0)
}}};
if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value
}
}});
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name)
}
});
jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver)
},bind:function(types,data,fn){return this.on(types,null,data,fn)
},unbind:function(types,fn){return this.off(types,null,fn)
},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn)
},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn)
}});
var nonce=jQuery.now();
var rquery=(/\?/);
jQuery.parseJSON=function(data){return JSON.parse(data+"")
};
jQuery.parseXML=function(data){var xml,tmp;
if(!data||typeof data!=="string"){return null
}try{tmp=new DOMParser();
xml=tmp.parseFromString(data,"text/xml")
}catch(e){xml=undefined
}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data)
}return xml
};
var rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,prefilters={},transports={},allTypes="*/".concat("*"),ajaxLocation=window.location.href,ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];
function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;
dataTypeExpression="*"
}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];
if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";
(structure[dataType]=structure[dataType]||[]).unshift(func)
}else{(structure[dataType]=structure[dataType]||[]).push(func)
}}}}
}function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);
function inspect(dataType){var selected;
inspected[dataType]=true;
jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);
if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);
inspect(dataTypeOrTransport);
return false
}else{if(seekingTransport){return !(selected=dataTypeOrTransport)
}}});
return selected
}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*")
}function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};
for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key]
}}if(deep){jQuery.extend(true,target,deep)
}return target
}function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;
while(dataTypes[0]==="*"){dataTypes.shift();
if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type")
}}if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);
break
}}}if(dataTypes[0] in responses){finalDataType=dataTypes[0]
}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;
break
}if(!firstDataType){firstDataType=type
}}finalDataType=finalDataType||firstDataType
}if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType)
}return responses[finalDataType]
}}function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();
if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv]
}}current=dataTypes.shift();
while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response
}if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType)
}prev=current;
current=dataTypes.shift();
if(current){if(current==="*"){current=prev
}else{if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];
if(!conv){for(conv2 in converters){tmp=conv2.split(" ");
if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];
if(conv){if(conv===true){conv=converters[conv2]
}else{if(converters[conv2]!==true){current=tmp[0];
dataTypes.unshift(tmp[1])
}}break
}}}}if(conv!==true){if(conv&&s["throws"]){response=conv(response)
}else{try{response=conv(response)
}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current}
}}}}}}}return{state:"success",data:response}
}jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target)
},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;
url=undefined
}options=options||{};
var transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,parts,fireGlobals,i,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;
if(state===2){if(!responseHeaders){responseHeaders={};
while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2]
}}match=responseHeaders[key.toLowerCase()]
}return match==null?null:match
},getAllResponseHeaders:function(){return state===2?responseHeadersString:null
},setRequestHeader:function(name,value){var lname=name.toLowerCase();
if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;
requestHeaders[name]=value
}return this
},overrideMimeType:function(type){if(!state){s.mimeType=type
}return this
},statusCode:function(map){var code;
if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]]
}}else{jqXHR.always(map[jqXHR.status])
}}return this
},abort:function(statusText){var finalText=statusText||strAbort;
if(transport){transport.abort(finalText)
}done(0,finalText);
return this
}};
deferred.promise(jqXHR).complete=completeDeferred.add;
jqXHR.success=jqXHR.done;
jqXHR.error=jqXHR.fail;
s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");
s.type=options.method||options.type||s.method||s.type;
s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];
if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());
s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))))
}if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional)
}inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);
if(state===2){return jqXHR
}fireGlobals=jQuery.event&&s.global;
if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart")
}s.type=s.type.toUpperCase();
s.hasContent=!rnoContent.test(s.type);
cacheURL=s.url;
if(!s.hasContent){if(s.data){cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+s.data);
delete s.data
}if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+nonce++):cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++
}}if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL])
}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL])
}}if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType)
}jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);
for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i])
}if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort()
}strAbort="abort";
for(i in {success:1,error:1,complete:1}){jqXHR[i](s[i])
}transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);
if(!transport){done(-1,"No Transport")
}else{jqXHR.readyState=1;
if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s])
}if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout")
},s.timeout)
}try{state=1;
transport.send(requestHeaders,done)
}catch(e){if(state<2){done(-1,e)
}else{throw e
}}}function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;
if(state===2){return
}state=2;
if(timeoutTimer){clearTimeout(timeoutTimer)
}transport=undefined;
responseHeadersString=headers||"";
jqXHR.readyState=status>0?4:0;
isSuccess=status>=200&&status<300||status===304;
if(responses){response=ajaxHandleResponses(s,jqXHR,responses)
}response=ajaxConvert(s,response,jqXHR,isSuccess);
if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");
if(modified){jQuery.lastModified[cacheURL]=modified
}modified=jqXHR.getResponseHeader("etag");
if(modified){jQuery.etag[cacheURL]=modified
}}if(status===204||s.type==="HEAD"){statusText="nocontent"
}else{if(status===304){statusText="notmodified"
}else{statusText=response.state;
success=response.data;
error=response.error;
isSuccess=!error
}}}else{error=statusText;
if(status||!statusText){statusText="error";
if(status<0){status=0
}}}jqXHR.status=status;
jqXHR.statusText=(nativeStatusText||statusText)+"";
if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR])
}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error])
}jqXHR.statusCode(statusCode);
statusCode=undefined;
if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error])
}completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);
if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);
if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop")
}}}return jqXHR
},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json")
},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script")
}});
jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;
callback=data;
data=undefined
}return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback})
}
});
jQuery._evalUrl=function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true})
};
jQuery.fn.extend({wrapAll:function(html){var wrap;
if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i))
})
}if(this[0]){wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){wrap.insertBefore(this[0])
}wrap.map(function(){var elem=this;
while(elem.firstElementChild){elem=elem.firstElementChild
}return elem
}).append(this)
}return this
},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i))
})
}return this.each(function(){var self=jQuery(this),contents=self.contents();
if(contents.length){contents.wrapAll(html)
}else{self.append(html)
}})
},wrap:function(html){var isFunction=jQuery.isFunction(html);
return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html)
})
},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes)
}}).end()
}});
jQuery.expr.filters.hidden=function(elem){return elem.offsetWidth<=0&&elem.offsetHeight<=0
};
jQuery.expr.filters.visible=function(elem){return !jQuery.expr.filters.hidden(elem)
};
var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;
function buildParams(prefix,obj,traditional,add){var name;
if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v)
}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add)
}})
}else{if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add)
}}else{add(prefix,obj)
}}}jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);
s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value)
};
if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional
}if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value)
})
}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add)
}}return s.join("&").replace(r20,"+")
};
jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");
return elements?jQuery.makeArray(elements):this
}).filter(function(){var type=this.type;
return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type))
}).map(function(i,elem){var val=jQuery(this).val();
return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")}
}):{name:elem.name,value:val.replace(rCRLF,"\r\n")}
}).get()
}});
jQuery.ajaxSettings.xhr=function(){try{return new XMLHttpRequest()
}catch(e){}};
var xhrId=0,xhrCallbacks={},xhrSuccessStatus={0:200,1223:204},xhrSupported=jQuery.ajaxSettings.xhr();
if(window.attachEvent){window.attachEvent("onunload",function(){for(var key in xhrCallbacks){xhrCallbacks[key]()
}})
}support.cors=!!xhrSupported&&("withCredentials" in xhrSupported);
support.ajax=xhrSupported=!!xhrSupported;
jQuery.ajaxTransport(function(options){var callback;
if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr(),id=++xhrId;
xhr.open(options.type,options.url,options.async,options.username,options.password);
if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i]
}}if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType)
}if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest"
}for(i in headers){xhr.setRequestHeader(i,headers[i])
}callback=function(type){return function(){if(callback){delete xhrCallbacks[id];
callback=xhr.onload=xhr.onerror=null;
if(type==="abort"){xhr.abort()
}else{if(type==="error"){complete(xhr.status,xhr.statusText)
}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,typeof xhr.responseText==="string"?{text:xhr.responseText}:undefined,xhr.getAllResponseHeaders())
}}}}
};
xhr.onload=callback();
xhr.onerror=callback("error");
callback=xhrCallbacks[id]=callback("abort");
try{xhr.send(options.hasContent&&options.data||null)
}catch(e){if(callback){throw e
}}},abort:function(){if(callback){callback()
}}}
}});
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){jQuery.globalEval(text);
return text
}}});
jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false
}if(s.crossDomain){s.type="GET"
}});
jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,callback;
return{send:function(_,complete){script=jQuery("<script>").prop({async:true,charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();
callback=null;
if(evt){complete(evt.type==="error"?404:200,evt.type)
}});
document.head.appendChild(script[0])
},abort:function(){if(callback){callback()
}}}
}});
var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;
jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));
this[callback]=true;
return callback
}});
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");
if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;
if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName)
}else{if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName
}}s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called")
}return responseContainer[0]
};
s.dataTypes[0]="json";
overwritten=window[callbackName];
window[callbackName]=function(){responseContainer=arguments
};
jqXHR.always(function(){window[callbackName]=overwritten;
if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;
oldCallbacks.push(callbackName)
}if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0])
}responseContainer=overwritten=undefined
});
return"script"
}});
jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null
}if(typeof context==="boolean"){keepScripts=context;
context=false
}context=context||document;
var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];
if(parsed){return[context.createElement(parsed[1])]
}parsed=jQuery.buildFragment([data],context,scripts);
if(scripts&&scripts.length){jQuery(scripts).remove()
}return jQuery.merge([],parsed.childNodes)
};
var _load=jQuery.fn.load;
jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments)
}var selector,type,response,self=this,off=url.indexOf(" ");
if(off>=0){selector=jQuery.trim(url.slice(off));
url=url.slice(0,off)
}if(jQuery.isFunction(params)){callback=params;
params=undefined
}else{if(params&&typeof params==="object"){type="POST"
}}if(self.length>0){jQuery.ajax({url:url,type:type,dataType:"html",data:params}).done(function(responseText){response=arguments;
self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText)
}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR])
})
}return this
};
jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn)
}
});
jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem
}).length
};
var docElem=window.document.documentElement;
function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView
}jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};
if(position==="static"){elem.style.position="relative"
}curOffset=curElem.offset();
curCSSTop=jQuery.css(elem,"top");
curCSSLeft=jQuery.css(elem,"left");
calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;
if(calculatePosition){curPosition=curElem.position();
curTop=curPosition.top;
curLeft=curPosition.left
}else{curTop=parseFloat(curCSSTop)||0;
curLeft=parseFloat(curCSSLeft)||0
}if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset)
}if(options.top!=null){props.top=(options.top-curOffset.top)+curTop
}if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft
}if("using" in options){options.using.call(elem,props)
}else{curElem.css(props)
}}};
jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i)
})
}var docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.ownerDocument;
if(!doc){return
}docElem=doc.documentElement;
if(!jQuery.contains(docElem,elem)){return box
}if(typeof elem.getBoundingClientRect!==strundefined){box=elem.getBoundingClientRect()
}win=getWindow(doc);
return{top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft}
},position:function(){if(!this[0]){return
}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};
if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect()
}else{offsetParent=this.offsetParent();
offset=this.offset();
if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset()
}parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);
parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true)
}return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)}
},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||docElem;
while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent
}return offsetParent||docElem
})
}});
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;
jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);
if(val===undefined){return win?win[prop]:elem[method]
}if(win){win.scrollTo(!top?val:window.pageXOffset,top?val:window.pageYOffset)
}else{elem[method]=val
}},method,val,arguments.length,null)
}
});
jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);
return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed
}})
});
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");
return access(this,function(elem,type,value){var doc;
if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name]
}if(elem.nodeType===9){doc=elem.documentElement;
return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name])
}return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra)
},type,chainable?margin:undefined,chainable,null)
}
})
});
jQuery.fn.size=function(){return this.length
};
jQuery.fn.andSelf=jQuery.fn.addBack;
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery
})
}var _jQuery=window.jQuery,_$=window.$;
jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$
}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery
}return jQuery
};
if(typeof noGlobal===strundefined){window.jQuery=window.$=jQuery
}return jQuery
}));
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports==="object"){a(require("jquery"))
}else{a(jQuery)
}}}(function(f){var a=/\+/g;
function d(i){return b.raw?i:encodeURIComponent(i)
}function g(i){return b.raw?i:decodeURIComponent(i)
}function h(i){return d(b.json?JSON.stringify(i):String(i))
}function c(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")
}try{i=decodeURIComponent(i.replace(a," "));
return b.json?JSON.parse(i):i
}catch(j){}}function e(j,i){var k=b.raw?j:c(j);
return f.isFunction(i)?i(k):k
}var b=f.cookie=function(q,p,v){if(p!==undefined&&!f.isFunction(p)){v=f.extend({},b.defaults,v);
if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();
u.setTime(+u+r*86400000)
}return(document.cookie=[d(q),"=",h(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))
}var w=q?undefined:{};
var s=document.cookie?document.cookie.split("; "):[];
for(var o=0,m=s.length;
o<m;
o++){var n=s[o].split("=");
var j=g(n.shift());
var k=n.join("=");
if(q&&q===j){w=e(k,p);
break
}if(!q&&(k=e(k))!==undefined){w[j]=k
}}return w
};
b.defaults={};
f.removeCookie=function(j,i){if(f.cookie(j)===undefined){return false
}f.cookie(j,"",f.extend({},i,{expires:-1}));
return !f.cookie(j)
}
}));
/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
(function(a9,ah,aW,z){var s=["","webkit","moz","MS","ms","o"];
var C=ah.createElement("div");
var V="function";
var Q=Math.round;
var ae=Math.abs;
var ba=Date.now;
function j(bq,br,bp){return setTimeout(G(bq,bp),br)
}function Z(bp,br,bq){if(Array.isArray(bp)){bn(bp,bq[br],bq);
return true
}return false
}function bn(bs,br,bq){var bp;
if(!bs){return
}if(bs.forEach){bs.forEach(br,bq)
}else{if(bs.length!==z){bp=0;
while(bp<bs.length){br.call(bq,bs[bp],bp,bs);
bp++
}}else{for(bp in bs){bs.hasOwnProperty(bp)&&br.call(bq,bs[bp],bp,bs)
}}}}function aG(bp,bs,bt){var br=Object.keys(bs);
var bq=0;
while(bq<br.length){if(!bt||(bt&&bp[br[bq]]===z)){bp[br[bq]]=bs[br[bq]]
}bq++
}return bp
}function D(bp,bq){return aG(bp,bq,true)
}function E(bt,br,bq){var bp=br.prototype,bs;
bs=bt.prototype=Object.create(bp);
bs.constructor=bt;
bs._super=bp;
if(bq){aG(bs,bq)
}}function G(br,bp){return function bq(){return br.apply(bp,arguments)
}
}function aj(bq,bp){if(typeof bq==V){return bq.apply(bp?bp[0]||z:z,bp)
}return bq
}function aE(bq,bp){return(bq===z)?bp:bq
}function aF(br,bp,bq){bn(aS(bp),function(bs){br.addEventListener(bs,bq,false)
})
}function L(br,bp,bq){bn(aS(bp),function(bs){br.removeEventListener(bs,bq,false)
})
}function m(bq,bp){while(bq){if(bq==bp){return true
}bq=bq.parentNode
}return false
}function i(bq,bp){return bq.indexOf(bp)>-1
}function aS(bp){return bp.trim().split(/\s+/g)
}function y(bs,br,bq){if(bs.indexOf&&!bq){return bs.indexOf(br)
}else{var bp=0;
while(bp<bs.length){if((bq&&bs[bp][bq]==br)||(!bq&&bs[bp]===br)){return bp
}bp++
}return -1
}}function W(bp){return Array.prototype.slice.call(bp,0)
}function bd(bw,bt,bs){var br=[];
var bp=[];
var bq=0;
while(bq<bw.length){var bv=bt?bw[bq][bt]:bw[bq];
if(y(bp,bv)<0){br.push(bw[bq])
}bp[bq]=bv;
bq++
}if(bs){if(!bt){br=br.sort()
}else{br=br.sort(function bu(by,bx){return by[bt]>bx[bt]
})
}}return br
}function an(bt,bs){var br,bu;
var bp=bs[0].toUpperCase()+bs.slice(1);
var bq=0;
while(bq<s.length){br=s[bq];
bu=(br)?br+bp:bs;
if(bu in bt){return bu
}bq++
}return z
}var r=1;
function aH(){return r++
}function I(bp){var bq=bp.ownerDocument;
return(bq.defaultView||bq.parentWindow)
}var t=/mobile|tablet|ip(ad|hone|od)|android/i;
var b=("ontouchstart" in a9);
var ad=an(a9,"PointerEvent")!==z;
var ay=b&&t.test(navigator.userAgent);
var aC="touch";
var o="pen";
var N="mouse";
var R="kinect";
var bi=25;
var a4=1;
var a0=2;
var f=4;
var u=8;
var ax=1;
var k=2;
var A=4;
var ac=8;
var a1=16;
var be=k|A;
var aw=ac|a1;
var M=be|aw;
var af=["x","y"];
var am=["clientX","clientY"];
function a(bq,br){var bp=this;
this.manager=bq;
this.callback=br;
this.element=bq.element;
this.target=bq.options.inputTarget;
this.domHandler=function(bs){if(aj(bq.options.enable,[bq])){bp.handler(bs)
}};
this.init()
}a.prototype={handler:function(){},init:function(){this.evEl&&aF(this.element,this.evEl,this.domHandler);
this.evTarget&&aF(this.target,this.evTarget,this.domHandler);
this.evWin&&aF(I(this.element),this.evWin,this.domHandler)
},destroy:function(){this.evEl&&L(this.element,this.evEl,this.domHandler);
this.evTarget&&L(this.target,this.evTarget,this.domHandler);
this.evWin&&L(I(this.element),this.evWin,this.domHandler)
}};
function v(br){var bq;
var bp=br.options.inputClass;
if(bp){bq=bp
}else{if(ad){bq=aN
}else{if(ay){bq=au
}else{if(!b){bq=av
}else{bq=bg
}}}}return new (bq)(br,at)
}function at(bu,bt,br){var bq=br.pointers.length;
var bs=br.changedPointers.length;
var bp=(bt&a4&&(bq-bs===0));
var bv=(bt&(f|u)&&(bq-bs===0));
br.isFirst=!!bp;
br.isFinal=!!bv;
if(bp){bu.session={}
}br.eventType=bt;
a5(bu,br);
bu.emit("hammer.input",br);
bu.recognize(br);
bu.session.prevInput=br
}function a5(bs,bx){var bv=bs.session;
var by=bx.pointers;
var bw=by.length;
if(!bv.firstInput){bv.firstInput=n(bx)
}if(bw>1&&!bv.firstMultiple){bv.firstMultiple=n(bx)
}else{if(bw===1){bv.firstMultiple=false
}}var br=bv.firstInput;
var bt=bv.firstMultiple;
var bq=bt?bt.center:br.center;
var bp=bx.center=P(by);
bx.timeStamp=ba();
bx.deltaTime=bx.timeStamp-br.timeStamp;
bx.angle=ap(bq,bp);
bx.distance=bj(bq,bp);
ar(bv,bx);
bx.offsetDirection=aK(bx.deltaX,bx.deltaY);
bx.scale=bt?e(bt.pointers,by):1;
bx.rotation=bt?bc(bt.pointers,by):0;
X(bv,bx);
var bu=bs.element;
if(m(bx.srcEvent.target,bu)){bu=bx.srcEvent.target
}bx.target=bu
}function ar(bt,br){var bq=br.center;
var bu=bt.offsetDelta||{};
var bp=bt.prevDelta||{};
var bs=bt.prevInput||{};
if(br.eventType===a4||bs.eventType===f){bp=bt.prevDelta={x:bs.deltaX||0,y:bs.deltaY||0};
bu=bt.offsetDelta={x:bq.x,y:bq.y}
}br.deltaX=bp.x+(bq.x-bu.x);
br.deltaY=bp.y+(bq.y-bu.y)
}function X(bt,bw){var bz=bt.lastInterval||bw,bs=bw.timeStamp-bz.timeStamp,bq,bx,bu,bv;
if(bw.eventType!=u&&(bs>bi||bz.velocity===z)){var br=bz.deltaX-bw.deltaX;
var bp=bz.deltaY-bw.deltaY;
var by=T(bs,br,bp);
bx=by.x;
bu=by.y;
bq=(ae(by.x)>ae(by.y))?by.x:by.y;
bv=aK(br,bp);
bt.lastInterval=bw
}else{bq=bz.velocity;
bx=bz.velocityX;
bu=bz.velocityY;
bv=bz.direction
}bw.velocity=bq;
bw.velocityX=bx;
bw.velocityY=bu;
bw.direction=bv
}function n(bq){var bp=[];
var br=0;
while(br<bq.pointers.length){bp[br]={clientX:Q(bq.pointers[br].clientX),clientY:Q(bq.pointers[br].clientY)};
br++
}return{timeStamp:ba(),pointers:bp,center:P(bp),deltaX:bq.deltaX,deltaY:bq.deltaY}
}function P(br){var bq=br.length;
if(bq===1){return{x:Q(br[0].clientX),y:Q(br[0].clientY)}
}var bp=0,bt=0,bs=0;
while(bs<bq){bp+=br[bs].clientX;
bt+=br[bs].clientY;
bs++
}return{x:Q(bp/bq),y:Q(bt/bq)}
}function T(bq,bp,br){return{x:bp/bq||0,y:br/bq||0}
}function aK(bp,bq){if(bp===bq){return ax
}if(ae(bp)>=ae(bq)){return bp>0?k:A
}return bq>0?ac:a1
}function bj(bs,br,bq){if(!bq){bq=af
}var bp=br[bq[0]]-bs[bq[0]],bt=br[bq[1]]-bs[bq[1]];
return Math.sqrt((bp*bp)+(bt*bt))
}function ap(bs,br,bq){if(!bq){bq=af
}var bp=br[bq[0]]-bs[bq[0]],bt=br[bq[1]]-bs[bq[1]];
return Math.atan2(bt,bp)*180/Math.PI
}function bc(bq,bp){return ap(bp[1],bp[0],am)-ap(bq[1],bq[0],am)
}function e(bq,bp){return bj(bp[0],bp[1],am)/bj(bq[0],bq[1],am)
}var aT={mousedown:a4,mousemove:a0,mouseup:f};
var B="mousedown";
var w="mousemove mouseup";
function av(){this.evEl=B;
this.evWin=w;
this.allow=true;
this.pressed=false;
a.apply(this,arguments)
}E(av,a,{handler:function S(bq){var bp=aT[bq.type];
if(bp&a4&&bq.button===0){this.pressed=true
}if(bp&a0&&bq.which!==1){bp=f
}if(!this.pressed||!this.allow){return
}if(bp&f){this.pressed=false
}this.callback(this.manager,bp,{pointers:[bq],changedPointers:[bq],pointerType:N,srcEvent:bq})
}});
var aI={pointerdown:a4,pointermove:a0,pointerup:f,pointercancel:u,pointerout:u};
var F={2:aC,3:o,4:N,5:R};
var a8="pointerdown";
var g="pointermove pointerup pointercancel";
if(a9.MSPointerEvent){a8="MSPointerDown";
g="MSPointerMove MSPointerUp MSPointerCancel"
}function aN(){this.evEl=a8;
this.evWin=g;
a.apply(this,arguments);
this.store=(this.manager.session.pointerEvents=[])
}E(aN,a,{handler:function a3(bu){var bs=this.store;
var bw=false;
var br=bu.type.toLowerCase().replace("ms","");
var bt=aI[br];
var bp=F[bu.pointerType]||bu.pointerType;
var bq=(bp==aC);
var bv=y(bs,bu.pointerId,"pointerId");
if(bt&a4&&(bu.button===0||bq)){if(bv<0){bs.push(bu);
bv=bs.length-1
}}else{if(bt&(f|u)){bw=true
}}if(bv<0){return
}bs[bv]=bu;
this.callback(this.manager,bt,{pointers:bs,changedPointers:[bu],pointerType:bp,srcEvent:bu});
if(bw){bs.splice(bv,1)
}}});
var ai={touchstart:a4,touchmove:a0,touchend:f,touchcancel:u};
var aL="touchstart";
var aP="touchstart touchmove touchend touchcancel";
function x(){this.evTarget=aL;
this.evWin=aP;
this.started=false;
a.apply(this,arguments)
}E(x,a,{handler:function aM(bq){var bp=ai[bq.type];
if(bp===a4){this.started=true
}if(!this.started){return
}var br=c.call(this,bq,bp);
if(bp&(f|u)&&br[0].length-br[1].length===0){this.started=false
}this.callback(this.manager,bp,{pointers:br[0],changedPointers:br[1],pointerType:aC,srcEvent:bq})
}});
function c(br,bq){var bp=W(br.touches);
var bs=W(br.changedTouches);
if(bq&(f|u)){bp=bd(bp.concat(bs),"identifier",true)
}return[bp,bs]
}var aQ={touchstart:a4,touchmove:a0,touchend:f,touchcancel:u};
var aA="touchstart touchmove touchend touchcancel";
function au(){this.evTarget=aA;
this.targetIds={};
a.apply(this,arguments)
}E(au,a,{handler:function U(bq){var bp=aQ[bq.type];
var br=aB.call(this,bq,bp);
if(!br){return
}this.callback(this.manager,bp,{pointers:br[0],changedPointers:br[1],pointerType:aC,srcEvent:bq})
}});
function aB(bv,bu){var bq=W(bv.touches);
var bp=this.targetIds;
if(bu&(a4|a0)&&bq.length===1){bp[bq[0].identifier]=true;
return[bq,bq]
}var br,bt,bw=W(bv.changedTouches),bx=[],bs=this.target;
bt=bq.filter(function(by){return m(by.target,bs)
});
if(bu===a4){br=0;
while(br<bt.length){bp[bt[br].identifier]=true;
br++
}}br=0;
while(br<bw.length){if(bp[bw[br].identifier]){bx.push(bw[br])
}if(bu&(f|u)){delete bp[bw[br].identifier]
}br++
}if(!bx.length){return
}return[bd(bt.concat(bx),"identifier",true),bx]
}function bg(){a.apply(this,arguments);
var bp=G(this.handler,this);
this.touch=new au(this.manager,bp);
this.mouse=new av(this.manager,bp)
}E(bg,a,{handler:function a2(bq,bt,bs){var bp=(bs.pointerType==aC),br=(bs.pointerType==N);
if(bp){this.mouse.allow=false
}else{if(br&&!this.mouse.allow){return
}}if(bt&(f|u)){this.mouse.allow=true
}this.callback(bq,bt,bs)
},destroy:function l(){this.touch.destroy();
this.mouse.destroy()
}});
var ao=an(C.style,"touchAction");
var bl=ao!==z;
var bm="compute";
var ak="auto";
var bh="manipulation";
var h="none";
var aY="pan-x";
var aX="pan-y";
function bk(bp,bq){this.manager=bp;
this.set(bq)
}bk.prototype={set:function(bp){if(bp==bm){bp=this.compute()
}if(bl){this.manager.element.style[ao]=bp
}this.actions=bp.toLowerCase().trim()
},update:function(){this.set(this.manager.options.touchAction)
},compute:function(){var bp=[];
bn(this.manager.recognizers,function(bq){if(aj(bq.options.enable,[bq])){bp=bp.concat(bq.getTouchAction())
}});
return bo(bp.join(" "))
},preventDefaults:function(bp){if(bl){return
}var br=bp.srcEvent;
var bt=bp.offsetDirection;
if(this.manager.session.prevented){br.preventDefault();
return
}var bu=this.actions;
var bv=i(bu,h);
var bq=i(bu,aX);
var bs=i(bu,aY);
if(bv||(bq&&bt&be)||(bs&&bt&aw)){return this.preventSrc(br)
}},preventSrc:function(bp){this.manager.session.prevented=true;
bp.preventDefault()
}};
function bo(br){if(i(br,h)){return h
}var bq=i(br,aY);
var bp=i(br,aX);
if(bq&&bp){return aY+" "+aX
}if(bq||bp){return bq?aY:aX
}if(i(br,bh)){return bh
}return ak
}var aa=1;
var al=2;
var ag=4;
var aO=8;
var q=aO;
var K=16;
var aJ=32;
function J(bp){this.id=aH();
this.manager=null;
this.options=D(bp||{},this.defaults);
this.options.enable=aE(this.options.enable,true);
this.state=aa;
this.simultaneous={};
this.requireFail=[]
}J.prototype={defaults:{},set:function(bp){aG(this.options,bp);
this.manager&&this.manager.touchAction.update();
return this
},recognizeWith:function(bp){if(Z(bp,"recognizeWith",this)){return this
}var bq=this.simultaneous;
bp=ab(bp,this);
if(!bq[bp.id]){bq[bp.id]=bp;
bp.recognizeWith(this)
}return this
},dropRecognizeWith:function(bp){if(Z(bp,"dropRecognizeWith",this)){return this
}bp=ab(bp,this);
delete this.simultaneous[bp.id];
return this
},requireFailure:function(bp){if(Z(bp,"requireFailure",this)){return this
}var bq=this.requireFail;
bp=ab(bp,this);
if(y(bq,bp)===-1){bq.push(bp);
bp.requireFailure(this)
}return this
},dropRequireFailure:function(bq){if(Z(bq,"dropRequireFailure",this)){return this
}bq=ab(bq,this);
var bp=y(this.requireFail,bq);
if(bp>-1){this.requireFail.splice(bp,1)
}return this
},hasRequireFailures:function(){return this.requireFail.length>0
},canRecognizeWith:function(bp){return !!this.simultaneous[bp.id]
},emit:function(bq){var bp=this;
var bs=this.state;
function br(bt){bp.manager.emit(bp.options.event+(bt?a7(bs):""),bq)
}if(bs<aO){br(true)
}br();
if(bs>=aO){br(true)
}},tryEmit:function(bp){if(this.canEmit()){return this.emit(bp)
}this.state=aJ
},canEmit:function(){var bp=0;
while(bp<this.requireFail.length){if(!(this.requireFail[bp].state&(aJ|aa))){return false
}bp++
}return true
},recognize:function(bp){var bq=aG({},bp);
if(!aj(this.options.enable,[this,bq])){this.reset();
this.state=aJ;
return
}if(this.state&(q|K|aJ)){this.state=aa
}this.state=this.process(bq);
if(this.state&(al|ag|aO|K)){this.tryEmit(bq)
}},process:function(bp){},getTouchAction:function(){},reset:function(){}};
function a7(bp){if(bp&K){return"cancel"
}else{if(bp&aO){return"end"
}else{if(bp&ag){return"move"
}else{if(bp&al){return"start"
}}}}return""
}function aZ(bp){if(bp==a1){return"down"
}else{if(bp==ac){return"up"
}else{if(bp==k){return"left"
}else{if(bp==A){return"right"
}}}}return""
}function ab(br,bp){var bq=bp.manager;
if(bq){return bq.get(br)
}return br
}function az(){J.apply(this,arguments)
}E(az,J,{defaults:{pointers:1},attrTest:function(bp){var bq=this.options.pointers;
return bq===0||bp.pointers.length===bq
},process:function(bq){var bs=this.state;
var br=bq.eventType;
var bp=bs&(al|ag);
var bt=this.attrTest(bq);
if(bp&&(br&u||!bt)){return bs|K
}else{if(bp||bt){if(br&f){return bs|aO
}else{if(!(bs&al)){return al
}}return bs|ag
}}return aJ
}});
function p(){az.apply(this,arguments);
this.pX=null;
this.pY=null
}E(p,az,{defaults:{event:"pan",threshold:10,pointers:1,direction:M},getTouchAction:function(){var bp=this.options.direction;
var bq=[];
if(bp&be){bq.push(aX)
}if(bp&aw){bq.push(aY)
}return bq
},directionTest:function(br){var bs=this.options;
var bq=true;
var bv=br.distance;
var bt=br.direction;
var bp=br.deltaX;
var bu=br.deltaY;
if(!(bt&bs.direction)){if(bs.direction&be){bt=(bp===0)?ax:(bp<0)?k:A;
bq=bp!=this.pX;
bv=Math.abs(br.deltaX)
}else{bt=(bu===0)?ax:(bu<0)?ac:a1;
bq=bu!=this.pY;
bv=Math.abs(br.deltaY)
}}br.direction=bt;
return bq&&bv>bs.threshold&&bt&bs.direction
},attrTest:function(bp){return az.prototype.attrTest.call(this,bp)&&(this.state&al||(!(this.state&al)&&this.directionTest(bp)))
},emit:function(bp){this.pX=bp.deltaX;
this.pY=bp.deltaY;
var bq=aZ(bp.direction);
if(bq){this.manager.emit(this.options.event+bq,bp)
}this._super.emit.call(this,bp)
}});
function a6(){az.apply(this,arguments)
}E(a6,az,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[h]
},attrTest:function(bp){return this._super.attrTest.call(this,bp)&&(Math.abs(bp.scale-1)>this.options.threshold||this.state&al)
},emit:function(bq){this._super.emit.call(this,bq);
if(bq.scale!==1){var bp=bq.scale<1?"in":"out";
this.manager.emit(this.options.event+bp,bq)
}}});
function aR(){J.apply(this,arguments);
this._timer=null;
this._input=null
}E(aR,J,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[ak]
},process:function(bq){var br=this.options;
var bt=bq.pointers.length===br.pointers;
var bp=bq.distance<br.threshold;
var bs=bq.deltaTime>br.time;
this._input=bq;
if(!bp||!bt||(bq.eventType&(f|u)&&!bs)){this.reset()
}else{if(bq.eventType&a4){this.reset();
this._timer=j(function(){this.state=q;
this.tryEmit()
},br.time,this)
}else{if(bq.eventType&f){return q
}}}return aJ
},reset:function(){clearTimeout(this._timer)
},emit:function(bp){if(this.state!==q){return
}if(bp&&(bp.eventType&f)){this.manager.emit(this.options.event+"up",bp)
}else{this._input.timeStamp=ba();
this.manager.emit(this.options.event,this._input)
}}});
function aD(){az.apply(this,arguments)
}E(aD,az,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[h]
},attrTest:function(bp){return this._super.attrTest.call(this,bp)&&(Math.abs(bp.rotation)>this.options.threshold||this.state&al)
}});
function aU(){az.apply(this,arguments)
}E(aU,az,{defaults:{event:"swipe",threshold:10,velocity:0.65,direction:be|aw,pointers:1},getTouchAction:function(){return p.prototype.getTouchAction.call(this)
},attrTest:function(bp){var br=this.options.direction;
var bq;
if(br&(be|aw)){bq=bp.velocity
}else{if(br&be){bq=bp.velocityX
}else{if(br&aw){bq=bp.velocityY
}}}return this._super.attrTest.call(this,bp)&&br&bp.direction&&bp.distance>this.options.threshold&&ae(bq)>this.options.velocity&&bp.eventType&f
},emit:function(bp){var bq=aZ(bp.direction);
if(bq){this.manager.emit(this.options.event+bq,bp)
}this.manager.emit(this.options.event,bp)
}});
function aq(){J.apply(this,arguments);
this.pTime=false;
this.pCenter=false;
this._timer=null;
this._input=null;
this.count=0
}E(aq,J,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[bh]
},process:function(br){var bt=this.options;
var bw=br.pointers.length===bt.pointers;
var bq=br.distance<bt.threshold;
var bs=br.deltaTime<bt.time;
this.reset();
if((br.eventType&a4)&&(this.count===0)){return this.failTimeout()
}if(bq&&bs&&bw){if(br.eventType!=f){return this.failTimeout()
}var bv=this.pTime?(br.timeStamp-this.pTime<bt.interval):true;
var bu=!this.pCenter||bj(this.pCenter,br.center)<bt.posThreshold;
this.pTime=br.timeStamp;
this.pCenter=br.center;
if(!bu||!bv){this.count=1
}else{this.count+=1
}this._input=br;
var bp=this.count%bt.taps;
if(bp===0){if(!this.hasRequireFailures()){return q
}else{this._timer=j(function(){this.state=q;
this.tryEmit()
},bt.interval,this);
return al
}}}return aJ
},failTimeout:function(){this._timer=j(function(){this.state=aJ
},this.options.interval,this);
return aJ
},reset:function(){clearTimeout(this._timer)
},emit:function(){if(this.state==q){this._input.tapCount=this.count;
this.manager.emit(this.options.event,this._input)
}}});
function O(bq,bp){bp=bp||{};
bp.recognizers=aE(bp.recognizers,O.defaults.preset);
return new bf(bq,bp)
}O.VERSION="2.0.4";
O.defaults={domEvents:false,touchAction:bm,enable:true,inputTarget:null,inputClass:null,preset:[[aD,{enable:false}],[a6,{enable:false},["rotate"]],[aU,{direction:be}],[p,{direction:be},["swipe"]],[aq],[aq,{event:"doubletap",taps:2},["tap"]],[aR]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};
var H=1;
var aV=2;
function bf(bq,bp){bp=bp||{};
this.options=D(bp,O.defaults);
this.options.inputTarget=this.options.inputTarget||bq;
this.handlers={};
this.session={};
this.recognizers=[];
this.element=bq;
this.input=v(this);
this.touchAction=new bk(this,this.options.touchAction);
Y(this,true);
bn(bp.recognizers,function(bs){var br=this.add(new (bs[0])(bs[1]));
bs[2]&&br.recognizeWith(bs[2]);
bs[3]&&br.requireFailure(bs[3])
},this)
}bf.prototype={set:function(bp){aG(this.options,bp);
if(bp.touchAction){this.touchAction.update()
}if(bp.inputTarget){this.input.destroy();
this.input.target=bp.inputTarget;
this.input.init()
}return this
},stop:function(bp){this.session.stopped=bp?aV:H
},recognize:function(bt){var bu=this.session;
if(bu.stopped){return
}this.touchAction.preventDefaults(bt);
var bp;
var bq=this.recognizers;
var bs=bu.curRecognizer;
if(!bs||(bs&&bs.state&q)){bs=bu.curRecognizer=null
}var br=0;
while(br<bq.length){bp=bq[br];
if(bu.stopped!==aV&&(!bs||bp==bs||bp.canRecognizeWith(bs))){bp.recognize(bt)
}else{bp.reset()
}if(!bs&&bp.state&(al|ag|aO)){bs=bu.curRecognizer=bp
}br++
}},get:function(bp){if(bp instanceof J){return bp
}var bq=this.recognizers;
for(var br=0;
br<bq.length;
br++){if(bq[br].options.event==bp){return bq[br]
}}return null
},add:function(bp){if(Z(bp,"add",this)){return this
}var bq=this.get(bp.options.event);
if(bq){this.remove(bq)
}this.recognizers.push(bp);
bp.manager=this;
this.touchAction.update();
return bp
},remove:function(bp){if(Z(bp,"remove",this)){return this
}var bq=this.recognizers;
bp=this.get(bp);
bq.splice(y(bq,bp),1);
this.touchAction.update();
return this
},on:function(bq,br){var bp=this.handlers;
bn(aS(bq),function(bs){bp[bs]=bp[bs]||[];
bp[bs].push(br)
});
return this
},off:function(bq,br){var bp=this.handlers;
bn(aS(bq),function(bs){if(!br){delete bp[bs]
}else{bp[bs].splice(y(bp[bs],br),1)
}});
return this
},emit:function(br,bs){if(this.options.domEvents){d(br,bs)
}var bp=this.handlers[br]&&this.handlers[br].slice();
if(!bp||!bp.length){return
}bs.type=br;
bs.preventDefault=function(){bs.srcEvent.preventDefault()
};
var bq=0;
while(bq<bp.length){bp[bq](bs);
bq++
}},destroy:function(){this.element&&Y(this,false);
this.handlers={};
this.session={};
this.input.destroy();
this.element=null
}};
function Y(bq,br){var bp=bq.element;
bn(bq.options.cssProps,function(bt,bs){bp.style[an(bp.style,bs)]=br?bt:""
})
}function d(bp,bq){var br=ah.createEvent("Event");
br.initEvent(bp,true,true);
br.gesture=bq;
bq.target.dispatchEvent(br)
}aG(O,{INPUT_START:a4,INPUT_MOVE:a0,INPUT_END:f,INPUT_CANCEL:u,STATE_POSSIBLE:aa,STATE_BEGAN:al,STATE_CHANGED:ag,STATE_ENDED:aO,STATE_RECOGNIZED:q,STATE_CANCELLED:K,STATE_FAILED:aJ,DIRECTION_NONE:ax,DIRECTION_LEFT:k,DIRECTION_RIGHT:A,DIRECTION_UP:ac,DIRECTION_DOWN:a1,DIRECTION_HORIZONTAL:be,DIRECTION_VERTICAL:aw,DIRECTION_ALL:M,Manager:bf,Input:a,TouchAction:bk,TouchInput:au,MouseInput:av,PointerEventInput:aN,TouchMouseInput:bg,SingleTouchInput:x,Recognizer:J,AttrRecognizer:az,Tap:aq,Pan:p,Swipe:aU,Pinch:a6,Rotate:aD,Press:aR,on:aF,off:L,each:bn,merge:D,extend:aG,inherit:E,bindFn:G,prefixed:an});
if(typeof define==V&&define.amd){define(function(){return O
})
}else{if(typeof module!="undefined"&&module.exports){module.exports=O
}else{a9[aW]=O
}}})(window,document,"Hammer");
(function(b,a){typeof exports==="object"&&typeof module!=="undefined"?module.exports=a():typeof define==="function"&&define.amd?define(a):b.moment=a()
}(this,function(){var bI;
function bu(){return bI.apply(null,arguments)
}function aw(en){bI=en
}function J(en){return Object.prototype.toString.call(en)==="[object Array]"
}function dN(en){return en instanceof Date||Object.prototype.toString.call(en)==="[object Date]"
}function a3(en,eq){var ep=[],eo;
for(eo=0;
eo<en.length;
++eo){ep.push(eq(en[eo],eo))
}return ep
}function cO(eo,en){return Object.prototype.hasOwnProperty.call(eo,en)
}function eh(eo,en){for(var ep in en){if(cO(en,ep)){eo[ep]=en[ep]
}}if(cO(en,"toString")){eo.toString=en.toString
}if(cO(en,"valueOf")){eo.valueOf=en.valueOf
}return eo
}function dD(ep,eq,en,eo){return Q(ep,eq,en,eo,true).utc()
}function bY(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false}
}function aQ(en){if(en._pf==null){en._pf=bY()
}return en._pf
}function ag(en){if(en._isValid==null){var eo=aQ(en);
en._isValid=!isNaN(en._d.getTime())&&eo.overflow<0&&!eo.empty&&!eo.invalidMonth&&!eo.invalidWeekday&&!eo.nullInput&&!eo.invalidFormat&&!eo.userInvalidated;
if(en._strict){en._isValid=en._isValid&&eo.charsLeftOver===0&&eo.unusedTokens.length===0&&eo.bigHour===undefined
}}return en._isValid
}function cd(eo){var en=dD(NaN);
if(eo!=null){eh(aQ(en),eo)
}else{aQ(en).userInvalidated=true
}return en
}function y(en){return en===void 0
}var cn=bu.momentProperties=[];
function o(er,eq){var en,ep,eo;
if(!y(eq._isAMomentObject)){er._isAMomentObject=eq._isAMomentObject
}if(!y(eq._i)){er._i=eq._i
}if(!y(eq._f)){er._f=eq._f
}if(!y(eq._l)){er._l=eq._l
}if(!y(eq._strict)){er._strict=eq._strict
}if(!y(eq._tzm)){er._tzm=eq._tzm
}if(!y(eq._isUTC)){er._isUTC=eq._isUTC
}if(!y(eq._offset)){er._offset=eq._offset
}if(!y(eq._pf)){er._pf=aQ(eq)
}if(!y(eq._locale)){er._locale=eq._locale
}if(cn.length>0){for(en in cn){ep=cn[en];
eo=eq[ep];
if(!y(eo)){er[ep]=eo
}}}return er
}var cJ=false;
function dK(en){o(this,en);
this._d=new Date(en._d!=null?en._d.getTime():NaN);
if(cJ===false){cJ=true;
bu.updateOffset(this);
cJ=false
}}function bJ(en){return en instanceof dK||(en!=null&&en._isAMomentObject!=null)
}function cL(en){if(en<0){return Math.ceil(en)
}else{return Math.floor(en)
}}function cl(en){var ep=+en,eo=0;
if(ep!==0&&isFinite(ep)){eo=cL(ep)
}return eo
}function bz(es,er,eo){var en=Math.min(es.length,er.length),ep=Math.abs(es.length-er.length),et=0,eq;
for(eq=0;
eq<en;
eq++){if((eo&&es[eq]!==er[eq])||(!eo&&cl(es[eq])!==cl(er[eq]))){et++
}}return et+ep
}function b8(){}var be={};
var ct;
function cQ(en){return en?en.toLowerCase().replace("_","-"):en
}function cs(es){var eq=0,eo,er,en,ep;
while(eq<es.length){ep=cQ(es[eq]).split("-");
eo=ep.length;
er=cQ(es[eq+1]);
er=er?er.split("-"):null;
while(eo>0){en=ak(ep.slice(0,eo).join("-"));
if(en){return en
}if(er&&er.length>=eo&&bz(ep,er,true)>=eo-1){break
}eo--
}eq++
}return null
}function ak(en){var ep=null;
if(!be[en]&&(typeof module!=="undefined")&&module&&module.exports){try{ep=ct._abbr;
require("./locale/"+en);
cf(ep)
}catch(eo){}}return be[en]
}function cf(eo,en){var ep;
if(eo){if(y(en)){ep=q(eo)
}else{ep=b7(eo,en)
}if(ep){ct=ep
}}return ct._abbr
}function b7(eo,en){if(en!==null){en.abbr=eo;
be[eo]=be[eo]||new b8();
be[eo].set(en);
cf(eo);
return be[eo]
}else{delete be[eo];
return null
}}function q(eo){var en;
if(eo&&eo._locale&&eo._locale._abbr){eo=eo._locale._abbr
}if(!eo){return ct
}if(!J(eo)){en=ak(eo);
if(en){return en
}eo=[eo]
}return cs(eo)
}var ci={};
function bM(ep,en){var eo=ep.toLowerCase();
ci[eo]=ci[eo+"s"]=ci[en]=ep
}function ck(en){return typeof en==="string"?ci[en]||ci[en.toLowerCase()]:undefined
}function c9(ep){var eo={},en,eq;
for(eq in ep){if(cO(ep,eq)){en=ck(eq);
if(en){eo[en]=ep[eq]
}}}return eo
}function aJ(en){return en instanceof Function||Object.prototype.toString.call(en)==="[object Function]"
}function dv(en,eo){return function(ep){if(ep!=null){dO(this,en,ep);
bu.updateOffset(this,eo);
return this
}else{return d3(this,en)
}}
}function d3(eo,en){return eo.isValid()?eo._d["get"+(eo._isUTC?"UTC":"")+en]():NaN
}function dO(eo,en,ep){if(eo.isValid()){eo._d["set"+(eo._isUTC?"UTC":"")+en](ep)
}}function dT(en,ep){var eo;
if(typeof en==="object"){for(eo in en){this.set(eo,en[eo])
}}else{en=ck(en);
if(aJ(this[en])){return this[en](ep)
}}return this
}function bV(es,er,eo){var eq=""+Math.abs(es),ep=er-eq.length,en=es>=0;
return(en?(eo?"+":""):"-")+Math.pow(10,Math.max(0,ep)).toString().substr(1)+eq
}var bs=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
var br=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
var bq={};
var aO={};
function b3(eo,ep,en,er){var eq=er;
if(typeof er==="string"){eq=function(){return this[er]()
}
}if(eo){aO[eo]=eq
}if(ep){aO[ep[0]]=function(){return bV(eq.apply(this,arguments),ep[1],ep[2])
}
}if(en){aO[en]=function(){return this.localeData().ordinal(eq.apply(this,arguments),eo)
}
}}function ah(en){if(en.match(/\[[\s\S]/)){return en.replace(/^\[|\]$/g,"")
}return en.replace(/\\/g,"")
}function bd(ep){var eq=ep.match(bs),en,eo;
for(en=0,eo=eq.length;
en<eo;
en++){if(aO[eq[en]]){eq[en]=aO[eq[en]]
}else{eq[en]=ah(eq[en])
}}return function(es){var er="";
for(en=0;
en<eo;
en++){er+=eq[en] instanceof Function?eq[en].call(es,ep):eq[en]
}return er
}
}function T(en,eo){if(!en.isValid()){return en.localeData().invalidDate()
}eo=bi(eo,en.localeData());
bq[eo]=bq[eo]||bd(eo);
return bq[eo](en)
}function bi(eq,en){var eo=5;
function ep(er){return en.longDateFormat(er)||er
}br.lastIndex=0;
while(eo>=0&&br.test(eq)){eq=eq.replace(br,ep);
br.lastIndex=0;
eo-=1
}return eq
}var ar=/\d/;
var aq=/\d\d/;
var ap=/\d{3}/;
var ao=/\d{4}/;
var an=/[+-]?\d{6}/;
var af=/\d\d?/;
var bS=/\d\d\d\d?/;
var dx=/\d\d\d\d\d\d?/;
var ae=/\d{1,3}/;
var ad=/\d{1,4}/;
var ac=/[+-]?\d{1,6}/;
var p=/\d+/;
var v=/[+-]?\d+/;
var bk=/Z|[+-]\d\d:?\d\d/gi;
var ca=/Z|[+-]\d\d(?::?\d\d)?/gi;
var ec=/[+-]?\d+(\.\d{1,3})?/;
var aL=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
var aF={};
function aS(en,eo,ep){aF[en]=aJ(eo)?eo:function(er,eq){return(er&&ep)?ep:eo
}
}function bh(eo,en){if(!cO(aF,eo)){return new RegExp(cM(eo))
}return aF[eo](en._strict,en._locale)
}function cM(en){return bN(en.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(eo,es,er,eq,ep){return es||er||eq||ep
}))
}function bN(en){return en.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")
}var h={};
function bv(eo,eq){var en,ep=eq;
if(typeof eo==="string"){eo=[eo]
}if(typeof eq==="number"){ep=function(er,es){es[eq]=cl(er)
}
}for(en=0;
en<eo.length;
en++){h[eo[en]]=ep
}}function M(en,eo){bv(en,function(ep,es,eq,er){eq._w=eq._w||{};
eo(ep,eq._w,eq,er)
})
}function s(ep,en,eo){if(en!=null&&cO(h,ep)){h[ep](en,eo._a,eo,ep)
}}var ed=0;
var j=1;
var dM=2;
var d0=3;
var c7=4;
var W=5;
var bl=6;
var bO=7;
var i=8;
function bj(en,eo){return new Date(Date.UTC(en,eo+1,0)).getUTCDate()
}b3("M",["MM",2],"Mo",function(){return this.month()+1
});
b3("MMM",0,0,function(en){return this.localeData().monthsShort(this,en)
});
b3("MMMM",0,0,function(en){return this.localeData().months(this,en)
});
bM("month","M");
aS("M",af);
aS("MM",af,aq);
aS("MMM",function(eo,en){return en.monthsShortRegex(eo)
});
aS("MMMM",function(eo,en){return en.monthsRegex(eo)
});
bv(["M","MM"],function(en,eo){eo[j]=cl(en)-1
});
bv(["MMM","MMMM"],function(en,er,eo,ep){var eq=eo._locale.monthsParse(en,ep,eo._strict);
if(eq!=null){er[j]=eq
}else{aQ(eo).invalidMonth=en
}});
var bC=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
var F="January_February_March_April_May_June_July_August_September_October_November_December".split("_");
function aD(en,eo){return J(this._months)?this._months[en.month()]:this._months[bC.test(eo)?"format":"standalone"][en.month()]
}var dl="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
function aP(en,eo){return J(this._monthsShort)?this._monthsShort[en.month()]:this._monthsShort[bC.test(eo)?"format":"standalone"][en.month()]
}function cF(eo,es,en){var ep,er,eq;
if(!this._monthsParse){this._monthsParse=[];
this._longMonthsParse=[];
this._shortMonthsParse=[]
}for(ep=0;
ep<12;
ep++){er=dD([2000,ep]);
if(en&&!this._longMonthsParse[ep]){this._longMonthsParse[ep]=new RegExp("^"+this.months(er,"").replace(".","")+"$","i");
this._shortMonthsParse[ep]=new RegExp("^"+this.monthsShort(er,"").replace(".","")+"$","i")
}if(!en&&!this._monthsParse[ep]){eq="^"+this.months(er,"")+"|^"+this.monthsShort(er,"");
this._monthsParse[ep]=new RegExp(eq.replace(".",""),"i")
}if(en&&es==="MMMM"&&this._longMonthsParse[ep].test(eo)){return ep
}else{if(en&&es==="MMM"&&this._shortMonthsParse[ep].test(eo)){return ep
}else{if(!en&&this._monthsParse[ep].test(eo)){return ep
}}}}}function az(en,eo){var ep;
if(!en.isValid()){return en
}if(typeof eo==="string"){eo=en.localeData().monthsParse(eo);
if(typeof eo!=="number"){return en
}}ep=Math.min(en.date(),bj(en.year(),eo));
en._d["set"+(en._isUTC?"UTC":"")+"Month"](eo,ep);
return en
}function dZ(en){if(en!=null){az(this,en);
bu.updateOffset(this,true);
return this
}else{return d3(this,"Month")
}}function bo(){return bj(this.year(),this.month())
}var cK=aL;
function cN(en){if(this._monthsParseExact){if(!cO(this,"_monthsRegex")){cP.call(this)
}if(en){return this._monthsShortStrictRegex
}else{return this._monthsShortRegex
}}else{return this._monthsShortStrictRegex&&en?this._monthsShortStrictRegex:this._monthsShortRegex
}}var dQ=aL;
function cu(en){if(this._monthsParseExact){if(!cO(this,"_monthsRegex")){cP.call(this)
}if(en){return this._monthsStrictRegex
}else{return this._monthsRegex
}}else{return this._monthsStrictRegex&&en?this._monthsStrictRegex:this._monthsRegex
}}function cP(){function es(eu,et){return et.length-eu.length
}var er=[],en=[],eq=[],eo,ep;
for(eo=0;
eo<12;
eo++){ep=dD([2000,eo]);
er.push(this.monthsShort(ep,""));
en.push(this.months(ep,""));
eq.push(this.months(ep,""));
eq.push(this.monthsShort(ep,""))
}er.sort(es);
en.sort(es);
eq.sort(es);
for(eo=0;
eo<12;
eo++){er[eo]=bN(er[eo]);
en[eo]=bN(en[eo]);
eq[eo]=bN(eq[eo])
}this._monthsRegex=new RegExp("^("+eq.join("|")+")","i");
this._monthsShortRegex=this._monthsRegex;
this._monthsStrictRegex=new RegExp("^("+en.join("|")+")$","i");
this._monthsShortStrictRegex=new RegExp("^("+er.join("|")+")$","i")
}function cj(en){var ep;
var eo=en._a;
if(eo&&aQ(en).overflow===-2){ep=eo[j]<0||eo[j]>11?j:eo[dM]<1||eo[dM]>bj(eo[ed],eo[j])?dM:eo[d0]<0||eo[d0]>24||(eo[d0]===24&&(eo[c7]!==0||eo[W]!==0||eo[bl]!==0))?d0:eo[c7]<0||eo[c7]>59?c7:eo[W]<0||eo[W]>59?W:eo[bl]<0||eo[bl]>999?bl:-1;
if(aQ(en)._overflowDayOfYear&&(ep<ed||ep>dM)){ep=dM
}if(aQ(en)._overflowWeeks&&ep===-1){ep=bO
}if(aQ(en)._overflowWeekday&&ep===-1){ep=i
}aQ(en).overflow=ep
}return en
}function cG(en){if(bu.suppressDeprecationWarnings===false&&(typeof console!=="undefined")&&console.warn){console.warn("Deprecation warning: "+en)
}}function dA(eo,en){var ep=true;
return eh(function(){if(ep){cG(eo+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error()).stack);
ep=false
}return en.apply(this,arguments)
},en)
}var O={};
function eb(en,eo){if(!O[en]){cG(eo);
O[en]=true
}}bu.suppressDeprecationWarnings=false;
var k=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
var ax=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
var cb=/Z|[+-]\d\d(?::?\d\d)?/;
var cm=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,false],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,false],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,false],["YYYYDDD",/\d{7}/]];
var bX=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]];
var bw=/^\/?Date\((\-?\d+)/i;
function w(eo){var es,eq,eu=eo._i,et=k.exec(eu)||ax.exec(eu),ev,en,er,ep;
if(et){aQ(eo).iso=true;
for(es=0,eq=cm.length;
es<eq;
es++){if(cm[es][1].exec(et[1])){en=cm[es][0];
ev=cm[es][2]!==false;
break
}}if(en==null){eo._isValid=false;
return
}if(et[3]){for(es=0,eq=bX.length;
es<eq;
es++){if(bX[es][1].exec(et[3])){er=(et[2]||" ")+bX[es][0];
break
}}if(er==null){eo._isValid=false;
return
}}if(!ev&&er!=null){eo._isValid=false;
return
}if(et[4]){if(cb.exec(et[4])){ep="Z"
}else{eo._isValid=false;
return
}}eo._f=en+(er||"")+(ep||"");
bx(eo)
}else{eo._isValid=false
}}function aR(eo){var en=bw.exec(eo._i);
if(en!==null){eo._d=new Date(+en[1]);
return
}w(eo);
if(eo._isValid===false){delete eo._isValid;
bu.createFromInputFallback(eo)
}}bu.createFromInputFallback=dA("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(en){en._d=new Date(en._i+(en._useUTC?" UTC":""))
});
function ds(eu,en,es,er,et,eq,ep){var eo=new Date(eu,en,es,er,et,eq,ep);
if(eu<100&&eu>=0&&isFinite(eo.getFullYear())){eo.setFullYear(eu)
}return eo
}function cU(eo){var en=new Date(Date.UTC.apply(null,arguments));
if(eo<100&&eo>=0&&isFinite(en.getUTCFullYear())){en.setUTCFullYear(eo)
}return en
}b3("Y",0,0,function(){var en=this.year();
return en<=9999?""+en:"+"+en
});
b3(0,["YY",2],0,function(){return this.year()%100
});
b3(0,["YYYY",4],0,"year");
b3(0,["YYYYY",5],0,"year");
b3(0,["YYYYYY",6,true],0,"year");
bM("year","y");
aS("Y",v);
aS("YY",af,aq);
aS("YYYY",ad,ao);
aS("YYYYY",ac,an);
aS("YYYYYY",ac,an);
bv(["YYYYY","YYYYYY"],ed);
bv("YYYY",function(en,eo){eo[ed]=en.length===2?bu.parseTwoDigitYear(en):cl(en)
});
bv("YY",function(en,eo){eo[ed]=bu.parseTwoDigitYear(en)
});
bv("Y",function(en,eo){eo[ed]=parseInt(en,10)
});
function c5(en){return dk(en)?366:365
}function dk(en){return(en%4===0&&en%100!==0)||en%400===0
}bu.parseTwoDigitYear=function(en){return cl(en)+(cl(en)>68?1900:2000)
};
var cc=dv("FullYear",false);
function co(){return dk(this.year())
}function aX(eo,er,eq){var en=7+er-eq,ep=(7+cU(eo,0,en).getUTCDay()-er)%7;
return -ep+en-1
}function bg(eq,eo,ep,ew,eu){var ev=(7+ep-ew)%7,en=aX(eq,ew,eu),es=1+7*(eo-1)+ev+en,et,er;
if(es<=0){et=eq-1;
er=c5(et)+es
}else{if(es>c5(eq)){et=eq+1;
er=es-c5(eq)
}else{et=eq;
er=es
}}return{year:et,dayOfYear:er}
}function dL(er,et,es){var ep=aX(er.year(),et,es),eq=Math.floor((er.dayOfYear()-ep-1)/7)+1,en,eo;
if(eq<1){eo=er.year()-1;
en=eq+x(eo,et,es)
}else{if(eq>x(er.year(),et,es)){en=eq-x(er.year(),et,es);
eo=er.year()+1
}else{eo=er.year();
en=eq
}}return{week:en,year:eo}
}function x(eo,er,ep){var en=aX(eo,er,ep),eq=aX(eo+1,er,ep);
return(c5(eo)-en+eq)/7
}function dt(eo,en,ep){if(eo!=null){return eo
}if(en!=null){return en
}return ep
}function aE(eo){var en=new Date(bu.now());
if(eo._useUTC){return[en.getUTCFullYear(),en.getUTCMonth(),en.getUTCDate()]
}return[en.getFullYear(),en.getMonth(),en.getDate()]
}function f(er){var es,eq,ep=[],eo,en;
if(er._d){return
}eo=aE(er);
if(er._w&&er._a[dM]==null&&er._a[j]==null){cx(er)
}if(er._dayOfYear){en=dt(er._a[ed],eo[ed]);
if(er._dayOfYear>c5(en)){aQ(er)._overflowDayOfYear=true
}eq=cU(en,0,er._dayOfYear);
er._a[j]=eq.getUTCMonth();
er._a[dM]=eq.getUTCDate()
}for(es=0;
es<3&&er._a[es]==null;
++es){er._a[es]=ep[es]=eo[es]
}for(;
es<7;
es++){er._a[es]=ep[es]=(er._a[es]==null)?(es===2?1:0):er._a[es]
}if(er._a[d0]===24&&er._a[c7]===0&&er._a[W]===0&&er._a[bl]===0){er._nextDay=true;
er._a[d0]=0
}er._d=(er._useUTC?cU:ds).apply(null,ep);
if(er._tzm!=null){er._d.setUTCMinutes(er._d.getUTCMinutes()-er._tzm)
}if(er._nextDay){er._a[d0]=24
}}function cx(ep){var es,en,eo,eq,ev,et,eu,er;
es=ep._w;
if(es.GG!=null||es.W!=null||es.E!=null){ev=1;
et=4;
en=dt(es.GG,ep._a[ed],dL(dq(),1,4).year);
eo=dt(es.W,1);
eq=dt(es.E,1);
if(eq<1||eq>7){er=true
}}else{ev=ep._locale._week.dow;
et=ep._locale._week.doy;
en=dt(es.gg,ep._a[ed],dL(dq(),ev,et).year);
eo=dt(es.w,1);
if(es.d!=null){eq=es.d;
if(eq<0||eq>6){er=true
}}else{if(es.e!=null){eq=es.e+ev;
if(es.e<0||es.e>6){er=true
}}else{eq=ev
}}}if(eo<1||eo>x(en,ev,et)){aQ(ep)._overflowWeeks=true
}else{if(er!=null){aQ(ep)._overflowWeekday=true
}else{eu=bg(en,eo,eq,ev,et);
ep._a[ed]=eu.year;
ep._dayOfYear=eu.dayOfYear
}}}bu.ISO_8601=function(){};
function bx(ep){if(ep._f===bu.ISO_8601){w(ep);
return
}ep._a=[];
aQ(ep).empty=true;
var es=""+ep._i,er,eo,ev,eq,eu,en=es.length,et=0;
ev=bi(ep._f,ep._locale).match(bs)||[];
for(er=0;
er<ev.length;
er++){eq=ev[er];
eo=(es.match(bh(eq,ep))||[])[0];
if(eo){eu=es.substr(0,es.indexOf(eo));
if(eu.length>0){aQ(ep).unusedInput.push(eu)
}es=es.slice(es.indexOf(eo)+eo.length);
et+=eo.length
}if(aO[eq]){if(eo){aQ(ep).empty=false
}else{aQ(ep).unusedTokens.push(eq)
}s(eq,eo,ep)
}else{if(ep._strict&&!eo){aQ(ep).unusedTokens.push(eq)
}}}aQ(ep).charsLeftOver=en-et;
if(es.length>0){aQ(ep).unusedInput.push(es)
}if(aQ(ep).bigHour===true&&ep._a[d0]<=12&&ep._a[d0]>0){aQ(ep).bigHour=undefined
}ep._a[d0]=dB(ep._locale,ep._a[d0],ep._meridiem);
f(ep);
cj(ep)
}function dB(en,ep,eq){var eo;
if(eq==null){return ep
}if(en.meridiemHour!=null){return en.meridiemHour(ep,eq)
}else{if(en.isPM!=null){eo=en.isPM(eq);
if(eo&&ep<12){ep+=12
}if(!eo&&ep===12){ep=0
}return ep
}else{return ep
}}}function c3(en){var er,ep,eq,eo,es;
if(en._f.length===0){aQ(en).invalidFormat=true;
en._d=new Date(NaN);
return
}for(eo=0;
eo<en._f.length;
eo++){es=0;
er=o({},en);
if(en._useUTC!=null){er._useUTC=en._useUTC
}er._f=en._f[eo];
bx(er);
if(!ag(er)){continue
}es+=aQ(er).charsLeftOver;
es+=aQ(er).unusedTokens.length*10;
aQ(er).score=es;
if(eq==null||es<eq){eq=es;
ep=er
}}eh(en,ep||er)
}function aG(en){if(en._d){return
}var eo=c9(en._i);
en._a=a3([eo.year,eo.month,eo.day||eo.date,eo.hour,eo.minute,eo.second,eo.millisecond],function(ep){return ep&&parseInt(ep,10)
});
f(en)
}function aa(en){var eo=new dK(cj(a7(en)));
if(eo._nextDay){eo.add(1,"d");
eo._nextDay=undefined
}return eo
}function a7(eo){var en=eo._i,ep=eo._f;
eo._locale=eo._locale||q(eo._l);
if(en===null||(ep===undefined&&en==="")){return cd({nullInput:true})
}if(typeof en==="string"){eo._i=en=eo._locale.preparse(en)
}if(bJ(en)){return new dK(cj(en))
}else{if(J(ep)){c3(eo)
}else{if(ep){bx(eo)
}else{if(dN(en)){eo._d=en
}else{b1(eo)
}}}}if(!ag(eo)){eo._d=null
}return eo
}function b1(eo){var en=eo._i;
if(en===undefined){eo._d=new Date(bu.now())
}else{if(dN(en)){eo._d=new Date(+en)
}else{if(typeof en==="string"){aR(eo)
}else{if(J(en)){eo._a=a3(en.slice(0),function(ep){return parseInt(ep,10)
});
f(eo)
}else{if(typeof(en)==="object"){aG(eo)
}else{if(typeof(en)==="number"){eo._d=new Date(en)
}else{bu.createFromInputFallback(eo)
}}}}}}}function Q(eq,er,en,ep,eo){var es={};
if(typeof(en)==="boolean"){ep=en;
en=undefined
}es._isAMomentObject=true;
es._useUTC=es._isUTC=eo;
es._l=en;
es._i=eq;
es._f=er;
es._strict=ep;
return aa(es)
}function dq(ep,eq,en,eo){return Q(ep,eq,en,eo,false)
}var cg=dA("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var en=dq.apply(null,arguments);
if(this.isValid()&&en.isValid()){return en<this?this:en
}else{return cd()
}});
var dH=dA("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var en=dq.apply(null,arguments);
if(this.isValid()&&en.isValid()){return en>this?this:en
}else{return cd()
}});
function ei(ep,eq){var eo,en;
if(eq.length===1&&J(eq[0])){eq=eq[0]
}if(!eq.length){return dq()
}eo=eq[0];
for(en=1;
en<eq.length;
++en){if(!eq[en].isValid()||eq[en][ep](eo)){eo=eq[en]
}}return eo
}function n(){var en=[].slice.call(arguments,0);
return ei("isBefore",en)
}function a1(){var en=[].slice.call(arguments,0);
return ei("isAfter",en)
}var b4=function(){return Date.now?Date.now():+(new Date())
};
function dc(es){var eu=c9(es),et=eu.year||0,eo=eu.quarter||0,ep=eu.month||0,en=eu.week||0,ex=eu.day||0,ev=eu.hour||0,er=eu.minute||0,ew=eu.second||0,eq=eu.millisecond||0;
this._milliseconds=+eq+ew*1000+er*60000+ev*3600000;
this._days=+ex+en*7;
this._months=+ep+eo*3+et*12;
this._data={};
this._locale=q();
this._bubble()
}function S(en){return en instanceof dc
}function ba(en,eo){b3(en,0,0,function(){var eq=this.utcOffset();
var ep="+";
if(eq<0){eq=-eq;
ep="-"
}return ep+bV(~~(eq/60),2)+eo+bV(~~(eq)%60,2)
})
}ba("Z",":");
ba("ZZ","");
aS("Z",ca);
aS("ZZ",ca);
bv(["Z","ZZ"],function(en,ep,eo){eo._useUTC=true;
eo._tzm=m(ca,en)
});
var dW=/([\+\-]|\d\d)/gi;
function m(es,eo){var eq=((eo||"").match(es)||[]);
var en=eq[eq.length-1]||[];
var er=(en+"").match(dW)||["-",0,0];
var ep=+(er[1]*60)+cl(er[2]);
return er[0]==="+"?ep:-ep
}function al(en,eo){var ep,eq;
if(eo._isUTC){ep=eo.clone();
eq=(bJ(en)||dN(en)?+en:+dq(en))-(+ep);
ep._d.setTime(+ep._d+eq);
bu.updateOffset(ep,false);
return ep
}else{return dq(en).local()
}}function au(en){return -Math.round(en._d.getTimezoneOffset()/15)*15
}bu.updateOffset=function(){};
function cW(en,eq){var ep=this._offset||0,eo;
if(!this.isValid()){return en!=null?this:NaN
}if(en!=null){if(typeof en==="string"){en=m(ca,en)
}else{if(Math.abs(en)<16){en=en*60
}}if(!this._isUTC&&eq){eo=au(this)
}this._offset=en;
this._isUTC=true;
if(eo!=null){this.add(eo,"m")
}if(ep!==en){if(!eq||this._changeInProgress){b(this,dz(en-ep,"m"),1,false)
}else{if(!this._changeInProgress){this._changeInProgress=true;
bu.updateOffset(this,true);
this._changeInProgress=null
}}}return this
}else{return this._isUTC?ep:au(this)
}}function cR(en,eo){if(en!=null){if(typeof en!=="string"){en=-en
}this.utcOffset(en,eo);
return this
}else{return -this.utcOffset()
}}function aC(en){return this.utcOffset(0,en)
}function cT(en){if(this._isUTC){this.utcOffset(0,en);
this._isUTC=false;
if(en){this.subtract(au(this),"m")
}}return this
}function bG(){if(this._tzm){this.utcOffset(this._tzm)
}else{if(typeof this._i==="string"){this.utcOffset(m(bk,this._i))
}}return this
}function aj(en){if(!this.isValid()){return false
}en=en?dq(en).utcOffset():0;
return(this.utcOffset()-en)%60===0
}function at(){return(this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset())
}function d(){if(!y(this._isDSTShifted)){return this._isDSTShifted
}var eo={};
o(eo,this);
eo=a7(eo);
if(eo._a){var en=eo._isUTC?dD(eo._a):dq(eo._a);
this._isDSTShifted=this.isValid()&&bz(eo._a,en.toArray())>0
}else{this._isDSTShifted=false
}return this._isDSTShifted
}function cX(){return this.isValid()?!this._isUTC:false
}function bt(){return this.isValid()?this._isUTC:false
}function c2(){return this.isValid()?this._isUTC&&this._offset===0:false
}var N=/(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;
var b2=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
function dz(ep,es){var et=ep,er=null,eo,eq,en;
if(S(ep)){et={ms:ep._milliseconds,d:ep._days,M:ep._months}
}else{if(typeof ep==="number"){et={};
if(es){et[es]=ep
}else{et.milliseconds=ep
}}else{if(!!(er=N.exec(ep))){eo=(er[1]==="-")?-1:1;
et={y:0,d:cl(er[dM])*eo,h:cl(er[d0])*eo,m:cl(er[c7])*eo,s:cl(er[W])*eo,ms:cl(er[bl])*eo}
}else{if(!!(er=b2.exec(ep))){eo=(er[1]==="-")?-1:1;
et={y:ef(er[2],eo),M:ef(er[3],eo),d:ef(er[4],eo),h:ef(er[5],eo),m:ef(er[6],eo),s:ef(er[7],eo),w:ef(er[8],eo)}
}else{if(et==null){et={}
}else{if(typeof et==="object"&&("from" in et||"to" in et)){en=bp(dq(et.from),dq(et.to));
et={};
et.ms=en.milliseconds;
et.M=en.months
}}}}}}eq=new dc(et);
if(S(ep)&&cO(ep,"_locale")){eq._locale=ep._locale
}return eq
}dz.fn=dc.prototype;
function ef(ep,en){var eo=ep&&parseFloat(ep.replace(",","."));
return(isNaN(eo)?0:eo)*en
}function c0(ep,en){var eo={milliseconds:0,months:0};
eo.months=en.month()-ep.month()+(en.year()-ep.year())*12;
if(ep.clone().add(eo.months,"M").isAfter(en)){--eo.months
}eo.milliseconds=+en-+(ep.clone().add(eo.months,"M"));
return eo
}function bp(ep,en){var eo;
if(!(ep.isValid()&&en.isValid())){return{milliseconds:0,months:0}
}en=al(en,ep);
if(ep.isBefore(en)){eo=c0(ep,en)
}else{eo=c0(en,ep);
eo.milliseconds=-eo.milliseconds;
eo.months=-eo.months
}return eo
}function aH(eo,en){return function(es,er){var eq,ep;
if(er!==null&&!isNaN(+er)){eb(en,"moment()."+en+"(period, number) is deprecated. Please use moment()."+en+"(number, period).");
ep=es;
es=er;
er=ep
}es=typeof es==="string"?+es:es;
eq=dz(es,er);
b(this,eq,eo);
return this
}
}function b(ep,es,er,eq){var eo=es._milliseconds,et=es._days,en=es._months;
if(!ep.isValid()){return
}eq=eq==null?true:eq;
if(eo){ep._d.setTime(+ep._d+eo*er)
}if(et){dO(ep,"Date",d3(ep,"Date")+et*er)
}if(en){az(ep,d3(ep,"Month")+en*er)
}if(eq){bu.updateOffset(ep,et||en)
}}var bP=aH(1,"add");
var aB=aH(-1,"subtract");
function bL(et,en){var eq=et||dq(),ep=al(eq,this).startOf("day"),es=this.diff(ep,"days",true),er=es<-6?"sameElse":es<-1?"lastWeek":es<0?"lastDay":es<1?"sameDay":es<2?"nextDay":es<7?"nextWeek":"sameElse";
var eo=en&&(aJ(en[er])?en[er]():en[er]);
return this.format(eo||this.localeData().calendar(er,this,dq(eq)))
}function cS(){return new dK(this)
}function b9(eo,en){var ep=bJ(eo)?eo:dq(eo);
if(!(this.isValid()&&ep.isValid())){return false
}en=ck(!y(en)?en:"millisecond");
if(en==="millisecond"){return +this>+ep
}else{return +ep<+this.clone().startOf(en)
}}function d9(eo,en){var ep=bJ(eo)?eo:dq(eo);
if(!(this.isValid()&&ep.isValid())){return false
}en=ck(!y(en)?en:"millisecond");
if(en==="millisecond"){return +this<+ep
}else{return +this.clone().endOf(en)<+ep
}}function dJ(ep,eo,en){return this.isAfter(ep,en)&&this.isBefore(eo,en)
}function ce(eo,en){var eq=bJ(eo)?eo:dq(eo),ep;
if(!(this.isValid()&&eq.isValid())){return false
}en=ck(en||"millisecond");
if(en==="millisecond"){return +this===+eq
}else{ep=+eq;
return +(this.clone().startOf(en))<=ep&&ep<=+(this.clone().endOf(en))
}}function d2(eo,en){return this.isSame(eo,en)||this.isAfter(eo,en)
}function d7(eo,en){return this.isSame(eo,en)||this.isBefore(eo,en)
}function B(eq,ep,en){var es,er,et,eo;
if(!this.isValid()){return NaN
}es=al(eq,this);
if(!es.isValid()){return NaN
}er=(es.utcOffset()-this.utcOffset())*60000;
ep=ck(ep);
if(ep==="year"||ep==="month"||ep==="quarter"){eo=dF(this,es);
if(ep==="quarter"){eo=eo/3
}else{if(ep==="year"){eo=eo/12
}}}else{et=this-es;
eo=ep==="second"?et/1000:ep==="minute"?et/60000:ep==="hour"?et/3600000:ep==="day"?(et-er)/86400000:ep==="week"?(et-er)/604800000:et
}return en?eo:cL(eo)
}function dF(eo,en){var es=((en.year()-eo.year())*12)+(en.month()-eo.month()),ep=eo.clone().add(es,"months"),eq,er;
if(en-ep<0){eq=eo.clone().add(es-1,"months");
er=(en-ep)/(ep-eq)
}else{eq=eo.clone().add(es+1,"months");
er=(en-ep)/(eq-ep)
}return -(es+er)
}bu.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";
function dm(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}function b5(){var en=this.clone().utc();
if(0<en.year()&&en.year()<=9999){if(aJ(Date.prototype.toISOString)){return this.toDate().toISOString()
}else{return T(en,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
}}else{return T(en,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
}}function cB(eo){var en=T(this,eo||bu.defaultFormat);
return this.localeData().postformat(en)
}function de(eo,en){if(this.isValid()&&((bJ(eo)&&eo.isValid())||dq(eo).isValid())){return dz({to:this,from:eo}).locale(this.locale()).humanize(!en)
}else{return this.localeData().invalidDate()
}}function da(en){return this.from(dq(),en)
}function V(eo,en){if(this.isValid()&&((bJ(eo)&&eo.isValid())||dq(eo).isValid())){return dz({from:this,to:eo}).locale(this.locale()).humanize(!en)
}else{return this.localeData().invalidDate()
}}function av(en){return this.to(dq(),en)
}function el(eo){var en;
if(eo===undefined){return this._locale._abbr
}else{en=q(eo);
if(en!=null){this._locale=en
}return this
}}var u=dA("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(en){if(en===undefined){return this.localeData()
}else{return this.locale(en)
}});
function df(){return this._locale
}function bF(en){en=ck(en);
switch(en){case"year":this.month(0);
case"quarter":case"month":this.date(1);
case"week":case"isoWeek":case"day":this.hours(0);
case"hour":this.minutes(0);
case"minute":this.seconds(0);
case"second":this.milliseconds(0)
}if(en==="week"){this.weekday(0)
}if(en==="isoWeek"){this.isoWeekday(1)
}if(en==="quarter"){this.month(Math.floor(this.month()/3)*3)
}return this
}function dP(en){en=ck(en);
if(en===undefined||en==="millisecond"){return this
}return this.startOf(en).add(1,(en==="isoWeek"?"week":en)).subtract(1,"ms")
}function X(){return +this._d-((this._offset||0)*60000)
}function bf(){return Math.floor(+this/1000)
}function cw(){return this._offset?new Date(+this):this._d
}function c8(){var en=this;
return[en.year(),en.month(),en.date(),en.hour(),en.minute(),en.second(),en.millisecond()]
}function dg(){var en=this;
return{years:en.year(),months:en.month(),date:en.date(),hours:en.hours(),minutes:en.minutes(),seconds:en.seconds(),milliseconds:en.milliseconds()}
}function cC(){return this.isValid()?this.toISOString():"null"
}function dR(){return ag(this)
}function c4(){return eh({},aQ(this))
}function b6(){return aQ(this).overflow
}function ea(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}
}b3(0,["gg",2],0,function(){return this.weekYear()%100
});
b3(0,["GG",2],0,function(){return this.isoWeekYear()%100
});
function L(eo,en){b3(0,[eo,eo.length],0,en)
}L("gggg","weekYear");
L("ggggg","weekYear");
L("GGGG","isoWeekYear");
L("GGGGG","isoWeekYear");
bM("weekYear","gg");
bM("isoWeekYear","GG");
aS("G",v);
aS("g",v);
aS("GG",af,aq);
aS("gg",af,aq);
aS("GGGG",ad,ao);
aS("gggg",ad,ao);
aS("GGGGG",ac,an);
aS("ggggg",ac,an);
M(["gggg","ggggg","GGGG","GGGGG"],function(en,eq,eo,ep){eq[ep.substr(0,2)]=cl(en)
});
M(["gg","GG"],function(en,eq,eo,ep){eq[ep]=bu.parseTwoDigitYear(en)
});
function a5(en){return bZ.call(this,en,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)
}function dj(en){return bZ.call(this,en,this.isoWeek(),this.isoWeekday(),1,4)
}function cE(){return x(this.year(),1,4)
}function z(){var en=this.localeData()._week;
return x(this.year(),en.dow,en.doy)
}function bZ(en,eo,eq,es,er){var ep;
if(en==null){return dL(this,es,er).year
}else{ep=x(en,es,er);
if(eo>ep){eo=ep
}return aK.call(this,en,eo,eq,es,er)
}}function aK(ep,eo,er,et,es){var eq=bg(ep,eo,er,et,es),en=cU(eq.year,0,eq.dayOfYear);
this.year(en.getUTCFullYear());
this.month(en.getUTCMonth());
this.date(en.getUTCDate());
return this
}b3("Q",0,"Qo","quarter");
bM("quarter","Q");
aS("Q",ar);
bv("Q",function(en,eo){eo[j]=(cl(en)-1)*3
});
function bA(en){return en==null?Math.ceil((this.month()+1)/3):this.month((en-1)*3+this.month()%3)
}b3("w",["ww",2],"wo","week");
b3("W",["WW",2],"Wo","isoWeek");
bM("week","w");
bM("isoWeek","W");
aS("w",af);
aS("ww",af,aq);
aS("W",af);
aS("WW",af,aq);
M(["w","ww","W","WW"],function(en,eq,eo,ep){eq[ep.substr(0,1)]=cl(en)
});
function a4(en){return dL(en,this._week.dow,this._week.doy).week
}var bB={dow:0,doy:6};
function U(){return this._week.dow
}function cD(){return this._week.doy
}function A(en){var eo=this.localeData().week(this);
return en==null?eo:this.add((en-eo)*7,"d")
}function t(en){var eo=dL(this,1,4).week;
return en==null?eo:this.add((en-eo)*7,"d")
}b3("D",["DD",2],"Do","date");
bM("date","D");
aS("D",af);
aS("DD",af,aq);
aS("Do",function(eo,en){return eo?en._ordinalParse:en._ordinalParseLenient
});
bv(["D","DD"],dM);
bv("Do",function(en,eo){eo[dM]=cl(en.match(af)[0],10)
});
var bU=dv("Date",true);
b3("d",0,"do","day");
b3("dd",0,0,function(en){return this.localeData().weekdaysMin(this,en)
});
b3("ddd",0,0,function(en){return this.localeData().weekdaysShort(this,en)
});
b3("dddd",0,0,function(en){return this.localeData().weekdays(this,en)
});
b3("e",0,0,"weekday");
b3("E",0,0,"isoWeekday");
bM("day","d");
bM("weekday","e");
bM("isoWeekday","E");
aS("d",af);
aS("e",af);
aS("E",af);
aS("dd",aL);
aS("ddd",aL);
aS("dddd",aL);
M(["dd","ddd","dddd"],function(en,eq,eo,ep){var er=eo._locale.weekdaysParse(en,ep,eo._strict);
if(er!=null){eq.d=er
}else{aQ(eo).invalidWeekday=en
}});
M(["d","e","E"],function(en,eq,eo,ep){eq[ep]=cl(en)
});
function aW(eo,en){if(typeof eo!=="string"){return eo
}if(!isNaN(eo)){return parseInt(eo,10)
}eo=en.weekdaysParse(eo);
if(typeof eo==="number"){return eo
}return null
}var H="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
function ai(en,eo){return J(this._weekdays)?this._weekdays[en.day()]:this._weekdays[this._weekdays.isFormat.test(eo)?"format":"standalone"][en.day()]
}var l="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
function E(en){return this._weekdaysShort[en.day()]
}var a8="Su_Mo_Tu_We_Th_Fr_Sa".split("_");
function dX(en){return this._weekdaysMin[en.day()]
}function bn(er,es,en){var eo,eq,ep;
if(!this._weekdaysParse){this._weekdaysParse=[];
this._minWeekdaysParse=[];
this._shortWeekdaysParse=[];
this._fullWeekdaysParse=[]
}for(eo=0;
eo<7;
eo++){eq=dq([2000,1]).day(eo);
if(en&&!this._fullWeekdaysParse[eo]){this._fullWeekdaysParse[eo]=new RegExp("^"+this.weekdays(eq,"").replace(".",".?")+"$","i");
this._shortWeekdaysParse[eo]=new RegExp("^"+this.weekdaysShort(eq,"").replace(".",".?")+"$","i");
this._minWeekdaysParse[eo]=new RegExp("^"+this.weekdaysMin(eq,"").replace(".",".?")+"$","i")
}if(!this._weekdaysParse[eo]){ep="^"+this.weekdays(eq,"")+"|^"+this.weekdaysShort(eq,"")+"|^"+this.weekdaysMin(eq,"");
this._weekdaysParse[eo]=new RegExp(ep.replace(".",""),"i")
}if(en&&es==="dddd"&&this._fullWeekdaysParse[eo].test(er)){return eo
}else{if(en&&es==="ddd"&&this._shortWeekdaysParse[eo].test(er)){return eo
}else{if(en&&es==="dd"&&this._minWeekdaysParse[eo].test(er)){return eo
}else{if(!en&&this._weekdaysParse[eo].test(er)){return eo
}}}}}}function dE(eo){if(!this.isValid()){return eo!=null?this:NaN
}var en=this._isUTC?this._d.getUTCDay():this._d.getDay();
if(eo!=null){eo=aW(eo,this.localeData());
return this.add(eo-en,"d")
}else{return en
}}function R(en){if(!this.isValid()){return en!=null?this:NaN
}var eo=(this.day()+7-this.localeData()._week.dow)%7;
return en==null?eo:this.add(en-eo,"d")
}function b0(en){if(!this.isValid()){return en!=null?this:NaN
}return en==null?this.day()||7:this.day(this.day()%7?en:en-7)
}b3("DDD",["DDDD",3],"DDDo","dayOfYear");
bM("dayOfYear","DDD");
aS("DDD",ae);
aS("DDDD",ap);
bv(["DDD","DDDD"],function(en,ep,eo){eo._dayOfYear=cl(en)
});
function aU(en){var eo=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/86400000)+1;
return en==null?eo:this.add((en-eo),"d")
}function cZ(){return this.hours()%12||12
}b3("H",["HH",2],0,"hour");
b3("h",["hh",2],0,cZ);
b3("hmm",0,0,function(){return""+cZ.apply(this)+bV(this.minutes(),2)
});
b3("hmmss",0,0,function(){return""+cZ.apply(this)+bV(this.minutes(),2)+bV(this.seconds(),2)
});
b3("Hmm",0,0,function(){return""+this.hours()+bV(this.minutes(),2)
});
b3("Hmmss",0,0,function(){return""+this.hours()+bV(this.minutes(),2)+bV(this.seconds(),2)
});
function dG(en,eo){b3(en,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),eo)
})
}dG("a",true);
dG("A",false);
bM("hour","h");
function G(eo,en){return en._meridiemParse
}aS("a",G);
aS("A",G);
aS("H",af);
aS("h",af);
aS("HH",af,aq);
aS("hh",af,aq);
aS("hmm",bS);
aS("hmmss",dx);
aS("Hmm",bS);
aS("Hmmss",dx);
bv(["H","HH"],d0);
bv(["a","A"],function(en,ep,eo){eo._isPm=eo._locale.isPM(en);
eo._meridiem=en
});
bv(["h","hh"],function(en,ep,eo){ep[d0]=cl(en);
aQ(eo).bigHour=true
});
bv("hmm",function(en,eq,eo){var ep=en.length-2;
eq[d0]=cl(en.substr(0,ep));
eq[c7]=cl(en.substr(ep));
aQ(eo).bigHour=true
});
bv("hmmss",function(en,er,eo){var eq=en.length-4;
var ep=en.length-2;
er[d0]=cl(en.substr(0,eq));
er[c7]=cl(en.substr(eq,2));
er[W]=cl(en.substr(ep));
aQ(eo).bigHour=true
});
bv("Hmm",function(en,eq,eo){var ep=en.length-2;
eq[d0]=cl(en.substr(0,ep));
eq[c7]=cl(en.substr(ep))
});
bv("Hmmss",function(en,er,eo){var eq=en.length-4;
var ep=en.length-2;
er[d0]=cl(en.substr(0,eq));
er[c7]=cl(en.substr(eq,2));
er[W]=cl(en.substr(ep))
});
function bK(en){return((en+"").toLowerCase().charAt(0)==="p")
}var bD=/[ap]\.?m?\.?/i;
function ay(en,eo,ep){if(en>11){return ep?"pm":"PM"
}else{return ep?"am":"AM"
}}var bW=dv("Hours",true);
b3("m",["mm",2],0,"minute");
bM("minute","m");
aS("m",af);
aS("mm",af,aq);
bv(["m","mm"],c7);
var d8=dv("Minutes",false);
b3("s",["ss",2],0,"second");
bM("second","s");
aS("s",af);
aS("ss",af,aq);
bv(["s","ss"],W);
var bc=dv("Seconds",false);
b3("S",0,0,function(){return ~~(this.millisecond()/100)
});
b3(0,["SS",2],0,function(){return ~~(this.millisecond()/10)
});
b3(0,["SSS",3],0,"millisecond");
b3(0,["SSSS",4],0,function(){return this.millisecond()*10
});
b3(0,["SSSSS",5],0,function(){return this.millisecond()*100
});
b3(0,["SSSSSS",6],0,function(){return this.millisecond()*1000
});
b3(0,["SSSSSSS",7],0,function(){return this.millisecond()*10000
});
b3(0,["SSSSSSSS",8],0,function(){return this.millisecond()*100000
});
b3(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1000000
});
bM("millisecond","ms");
aS("S",ae,ar);
aS("SS",ae,aq);
aS("SSS",ae,ap);
var aZ;
for(aZ="SSSS";
aZ.length<=9;
aZ+="S"){aS(aZ,p)
}function cz(en,eo){eo[bl]=cl(("0."+en)*1000)
}for(aZ="S";
aZ.length<=9;
aZ+="S"){bv(aZ,cz)
}var by=dv("Milliseconds",false);
b3("z",0,0,"zoneAbbr");
b3("zz",0,0,"zoneName");
function d4(){return this._isUTC?"UTC":""
}function dC(){return this._isUTC?"Coordinated Universal Time":""
}var cI=dK.prototype;
cI.add=bP;
cI.calendar=bL;
cI.clone=cS;
cI.diff=B;
cI.endOf=dP;
cI.format=cB;
cI.from=de;
cI.fromNow=da;
cI.to=V;
cI.toNow=av;
cI.get=dT;
cI.invalidAt=b6;
cI.isAfter=b9;
cI.isBefore=d9;
cI.isBetween=dJ;
cI.isSame=ce;
cI.isSameOrAfter=d2;
cI.isSameOrBefore=d7;
cI.isValid=dR;
cI.lang=u;
cI.locale=el;
cI.localeData=df;
cI.max=dH;
cI.min=cg;
cI.parsingFlags=c4;
cI.set=dT;
cI.startOf=bF;
cI.subtract=aB;
cI.toArray=c8;
cI.toObject=dg;
cI.toDate=cw;
cI.toISOString=b5;
cI.toJSON=cC;
cI.toString=dm;
cI.unix=bf;
cI.valueOf=X;
cI.creationData=ea;
cI.year=cc;
cI.isLeapYear=co;
cI.weekYear=a5;
cI.isoWeekYear=dj;
cI.quarter=cI.quarters=bA;
cI.month=dZ;
cI.daysInMonth=bo;
cI.week=cI.weeks=A;
cI.isoWeek=cI.isoWeeks=t;
cI.weeksInYear=z;
cI.isoWeeksInYear=cE;
cI.date=bU;
cI.day=cI.days=dE;
cI.weekday=R;
cI.isoWeekday=b0;
cI.dayOfYear=aU;
cI.hour=cI.hours=bW;
cI.minute=cI.minutes=d8;
cI.second=cI.seconds=bc;
cI.millisecond=cI.milliseconds=by;
cI.utcOffset=cW;
cI.utc=aC;
cI.local=cT;
cI.parseZone=bG;
cI.hasAlignedHourOffset=aj;
cI.isDST=at;
cI.isDSTShifted=d;
cI.isLocal=cX;
cI.isUtcOffset=bt;
cI.isUtc=c2;
cI.isUTC=c2;
cI.zoneAbbr=d4;
cI.zoneName=dC;
cI.dates=dA("dates accessor is deprecated. Use date instead.",bU);
cI.months=dA("months accessor is deprecated. Use month instead",dZ);
cI.years=dA("years accessor is deprecated. Use year instead",cc);
cI.zone=dA("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",cR);
var a=cI;
function P(en){return dq(en*1000)
}function cq(){return dq.apply(null,arguments).parseZone()
}var bR={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};
function K(ep,eq,eo){var en=this._calendar[ep];
return aJ(en)?en.call(eq,eo):en
}var dh={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};
function ch(en){var eo=this._longDateFormat[en],ep=this._longDateFormat[en.toUpperCase()];
if(eo||!ep){return eo
}this._longDateFormat[en]=ep.replace(/MMMM|MM|DD|dddd/g,function(eq){return eq.slice(1)
});
return this._longDateFormat[en]
}var ab="Invalid date";
function dI(){return this._invalidDate
}var bE="%d";
var a9=/\d{1,2}/;
function dV(en){return this._ordinal.replace("%d",en)
}function cY(en){return en
}var dU={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};
function bT(eq,ep,eo,er){var en=this._relativeTime[eo];
return(aJ(en))?en(eq,ep,eo,er):en.replace(/%d/i,eq)
}function di(ep,en){var eo=this._relativeTime[ep>0?"future":"past"];
return aJ(eo)?eo(en):eo.replace(/%s/i,en)
}function db(en){var ep,eo;
for(eo in en){ep=en[eo];
if(aJ(ep)){this[eo]=ep
}else{this["_"+eo]=ep
}}this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+(/\d{1,2}/).source)
}var cA=b8.prototype;
cA._calendar=bR;
cA.calendar=K;
cA._longDateFormat=dh;
cA.longDateFormat=ch;
cA._invalidDate=ab;
cA.invalidDate=dI;
cA._ordinal=bE;
cA.ordinal=dV;
cA._ordinalParse=a9;
cA.preparse=cY;
cA.postformat=cY;
cA._relativeTime=dU;
cA.relativeTime=bT;
cA.pastFuture=di;
cA.set=db;
cA.months=aD;
cA._months=F;
cA.monthsShort=aP;
cA._monthsShort=dl;
cA.monthsParse=cF;
cA._monthsRegex=dQ;
cA.monthsRegex=cu;
cA._monthsShortRegex=cK;
cA.monthsShortRegex=cN;
cA.week=a4;
cA._week=bB;
cA.firstDayOfYear=cD;
cA.firstDayOfWeek=U;
cA.weekdays=ai;
cA._weekdays=H;
cA.weekdaysMin=dX;
cA._weekdaysMin=a8;
cA.weekdaysShort=E;
cA._weekdaysShort=l;
cA.weekdaysParse=bn;
cA.isPM=bK;
cA._meridiemParse=bD;
cA.meridiem=ay;
function aN(er,eo,eq,es){var en=q();
var ep=dD().set(es,eo);
return en[eq](ep,er)
}function dy(es,eo,er,eq,et){if(typeof es==="number"){eo=es;
es=undefined
}es=es||"";
if(eo!=null){return aN(es,eo,er,et)
}var ep;
var en=[];
for(ep=0;
ep<eq;
ep++){en[ep]=aN(es,ep,er,et)
}return en
}function em(eo,en){return dy(eo,en,"months",12,"month")
}function bQ(eo,en){return dy(eo,en,"monthsShort",12,"month")
}function aI(eo,en){return dy(eo,en,"weekdays",7,"day")
}function ee(eo,en){return dy(eo,en,"weekdaysShort",7,"day")
}function D(eo,en){return dy(eo,en,"weekdaysMin",7,"day")
}cf("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(ep){var en=ep%10,eo=(cl(ep%100/10)===1)?"th":(en===1)?"st":(en===2)?"nd":(en===3)?"rd":"th";
return ep+eo
}});
bu.lang=dA("moment.lang is deprecated. Use moment.locale instead.",cf);
bu.langData=dA("moment.langData is deprecated. Use moment.localeData instead.",q);
var dS=Math.abs;
function Y(){var en=this._data;
this._milliseconds=dS(this._milliseconds);
this._days=dS(this._days);
this._months=dS(this._months);
en.milliseconds=dS(en.milliseconds);
en.seconds=dS(en.seconds);
en.minutes=dS(en.minutes);
en.hours=dS(en.hours);
en.months=dS(en.months);
en.years=dS(en.years);
return this
}function a2(er,eo,ep,eq){var en=dz(eo,ep);
er._milliseconds+=eq*en._milliseconds;
er._days+=eq*en._days;
er._months+=eq*en._months;
return er._bubble()
}function a6(en,eo){return a2(this,en,eo,1)
}function c1(en,eo){return a2(this,en,eo,-1)
}function dY(en){if(en<0){return Math.floor(en)
}else{return Math.ceil(en)
}}function cp(){var ep=this._milliseconds;
var ev=this._days;
var en=this._months;
var er=this._data;
var eu,eq,et,es,eo;
if(!((ep>=0&&ev>=0&&en>=0)||(ep<=0&&ev<=0&&en<=0))){ep+=dY(ej(en)+ev)*86400000;
ev=0;
en=0
}er.milliseconds=ep%1000;
eu=cL(ep/1000);
er.seconds=eu%60;
eq=cL(eu/60);
er.minutes=eq%60;
et=cL(eq/60);
er.hours=et%24;
ev+=cL(et/24);
eo=cL(g(ev));
en+=eo;
ev-=dY(ej(eo));
es=cL(en/12);
en%=12;
er.days=ev;
er.months=en;
er.years=es;
return this
}function g(en){return en*4800/146097
}function ej(en){return en*146097/4800
}function d1(eo){var eq;
var en;
var ep=this._milliseconds;
eo=ck(eo);
if(eo==="month"||eo==="year"){eq=this._days+ep/86400000;
en=this._months+g(eq);
return eo==="month"?en:en/12
}else{eq=this._days+Math.round(ej(this._months));
switch(eo){case"week":return eq/7+ep/604800000;
case"day":return eq+ep/86400000;
case"hour":return eq*24+ep/3600000;
case"minute":return eq*1440+ep/60000;
case"second":return eq*86400+ep/1000;
case"millisecond":return Math.floor(eq*86400000)+ep;
default:throw new Error("Unknown unit "+eo)
}}}function cr(){return(this._milliseconds+this._days*86400000+(this._months%12)*2592000000+cl(this._months/12)*31536000000)
}function dr(en){return function(){return this.as(en)
}
}var ek=dr("ms");
var C=dr("s");
var cV=dr("m");
var r=dr("h");
var du=dr("d");
var dd=dr("w");
var dp=dr("M");
var aY=dr("y");
function a0(en){en=ck(en);
return this[en+"s"]()
}function bH(en){return function(){return this._data[en]
}
}var e=bH("milliseconds");
var aV=bH("seconds");
var am=bH("minutes");
var I=bH("hours");
var aT=bH("days");
var d6=bH("months");
var bm=bH("years");
function dw(){return cL(this.days()/7)
}var cv=Math.round;
var c6={s:45,m:45,h:22,d:26,M:11};
function Z(eo,eq,ep,er,en){return en.relativeTime(eq||1,!!ep,eo,er)
}function cH(er,eo,ev){var ep=dz(er).abs();
var ew=cv(ep.as("s"));
var eq=cv(ep.as("m"));
var eu=cv(ep.as("h"));
var ex=cv(ep.as("d"));
var en=cv(ep.as("M"));
var es=cv(ep.as("y"));
var et=ew<c6.s&&["s",ew]||eq<=1&&["m"]||eq<c6.m&&["mm",eq]||eu<=1&&["h"]||eu<c6.h&&["hh",eu]||ex<=1&&["d"]||ex<c6.d&&["dd",ex]||en<=1&&["M"]||en<c6.M&&["MM",en]||es<=1&&["y"]||["yy",es];
et[2]=eo;
et[3]=+er>0;
et[4]=ev;
return Z.apply(null,et)
}function aM(en,eo){if(c6[en]===undefined){return false
}if(eo===undefined){return c6[en]
}c6[en]=eo;
return true
}function c(ep){var en=this.localeData();
var eo=cH(this,!ep,en);
if(ep){eo=en.pastFuture(+this,eo)
}return en.postformat(eo)
}var aA=Math.abs;
function d5(){var ex=aA(this._milliseconds)/1000;
var ey=aA(this._days);
var ep=aA(this._months);
var er,ew,et;
er=cL(ex/60);
ew=cL(er/60);
ex%=60;
er%=60;
et=cL(ep/12);
ep%=12;
var eo=et;
var eu=ep;
var en=ey;
var es=ew;
var eq=er;
var ez=ex;
var ev=this.asSeconds();
if(!ev){return"P0D"
}return(ev<0?"-":"")+"P"+(eo?eo+"Y":"")+(eu?eu+"M":"")+(en?en+"D":"")+((es||eq||ez)?"T":"")+(es?es+"H":"")+(eq?eq+"M":"")+(ez?ez+"S":"")
}var dn=dc.prototype;
dn.abs=Y;
dn.add=a6;
dn.subtract=c1;
dn.as=d1;
dn.asMilliseconds=ek;
dn.asSeconds=C;
dn.asMinutes=cV;
dn.asHours=r;
dn.asDays=du;
dn.asWeeks=dd;
dn.asMonths=dp;
dn.asYears=aY;
dn.valueOf=cr;
dn._bubble=cp;
dn.get=a0;
dn.milliseconds=e;
dn.seconds=aV;
dn.minutes=am;
dn.hours=I;
dn.days=aT;
dn.weeks=dw;
dn.months=d6;
dn.years=bm;
dn.humanize=c;
dn.toISOString=d5;
dn.toString=d5;
dn.toJSON=d5;
dn.locale=el;
dn.localeData=df;
dn.toIsoString=dA("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",d5);
dn.lang=u;
b3("X",0,0,"unix");
b3("x",0,0,"valueOf");
aS("x",v);
aS("X",ec);
bv("X",function(en,ep,eo){eo._d=new Date(parseFloat(en,10)*1000)
});
bv("x",function(en,ep,eo){eo._d=new Date(cl(en))
});
bu.version="2.11.1";
aw(dq);
bu.fn=a;
bu.min=n;
bu.max=a1;
bu.now=b4;
bu.utc=dD;
bu.unix=P;
bu.months=em;
bu.isDate=dN;
bu.locale=cf;
bu.invalid=cd;
bu.duration=dz;
bu.isMoment=bJ;
bu.weekdays=aI;
bu.parseZone=cq;
bu.localeData=q;
bu.isDuration=S;
bu.monthsShort=bQ;
bu.weekdaysMin=D;
bu.defineLocale=b7;
bu.weekdaysShort=ee;
bu.normalizeUnits=ck;
bu.relativeTimeThreshold=aM;
bu.prototype=a;
var cy=bu;
return cy
}));
(function sortableModule(a){if(typeof define==="function"&&define.amd){define(a)
}else{if(typeof module!="undefined"&&typeof module.exports!="undefined"){module.exports=a()
}else{window.Sortable=a()
}}})(function sortableFactory(){if(typeof window==="undefined"||!window.document){return function a4(){throw new Error("Sortable.js requires a window with a document")
}
}var at,p,Y,q,H,aR,m,al,ap,X,c,aP,aJ,aS,z,aG,aQ=[],aL=false,G=false,ah=false,J=[],a,aw,av,aN,aC,aH,o,N,aU=false,ax=false,aY,aW,ak,k=[],aa,F=/\s+/g,aO="Sortable"+(new Date).getTime(),ar=window,Z=ar.document,a1=ar.parseInt,aE=ar.setTimeout,aK=ar.jQuery||ar.Zepto,S=ar.Polymer,ao={capture:false,passive:false},V=!!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie|iemobile)/i),L=!!navigator.userAgent.match(/Edge/i),r=!!navigator.userAgent.match(/firefox/i),u=!!(navigator.userAgent.match(/safari/i)&&!navigator.userAgent.match(/chrome/i)&&!navigator.userAgent.match(/android/i)),U=!!(navigator.userAgent.match(/iP(ad|od|hone)/i)),w=U,az=L||V?"cssFloat":"float",aT=("draggable" in Z.createElement("div")),n=(function(){if(V){return false
}var a5=Z.createElement("x");
a5.style.cssText="pointer-events:auto";
return a5.style.pointerEvents==="auto"
})(),O=false,y=false,T=Math.abs,a0=Math.min,t=Math.max,B=[],aB=function(a6,bg){var a5=i(a6),bf=a1(a5.width)-a1(a5.paddingLeft)-a1(a5.paddingRight)-a1(a5.borderLeftWidth)-a1(a5.borderRightWidth),ba=W(a6,0,bg),a8=W(a6,1,bg),be=ba&&i(ba),bd=a8&&i(a8),bc=be&&a1(be.marginLeft)+a1(be.marginRight)+g(ba).width,a7=bd&&a1(bd.marginLeft)+a1(bd.marginRight)+g(a8).width;
if(a5.display==="flex"){return a5.flexDirection==="column"||a5.flexDirection==="column-reverse"?"vertical":"horizontal"
}if(a5.display==="grid"){return a5.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal"
}if(ba&&be["float"]!=="none"){var a9=be["float"]==="left"?"left":"right";
return a8&&(bd.clear==="both"||bd.clear===a9)?"vertical":"horizontal"
}return(ba&&(be.display==="block"||be.display==="flex"||be.display==="table"||be.display==="grid"||bc>=bf&&a5[az]==="none"||a8&&a5[az]==="none"&&bc+a7>bf)?"vertical":"horizontal")
},f=function(a6,bc){for(var a7=0;
a7<J.length;
a7++){if(K(J[a7])){continue
}var a8=g(J[a7]),a5=J[a7][aO].options.emptyInsertThreshold,a9=a6>=(a8.left-a5)&&a6<=(a8.right+a5),ba=bc>=(a8.top-a5)&&bc<=(a8.bottom+a5);
if(a5&&a9&&ba){return J[a7]
}}},ai=function(bc,ba,a8,a9,be){var a5=g(a8),a7=a9==="vertical"?a5.left:a5.top,bd=a9==="vertical"?a5.right:a5.bottom,a6=a9==="vertical"?bc:ba;
return a7<a6&&a6<bd
},x=function(a8,a6,a7){var be=a8===at&&aa||g(a8),bd=a6===at&&aa||g(a6),bf=a7==="vertical"?be.left:be.top,ba=a7==="vertical"?be.right:be.bottom,a9=a7==="vertical"?be.width:be.height,a5=a7==="vertical"?bd.left:bd.top,bg=a7==="vertical"?bd.right:bd.bottom,bc=a7==="vertical"?bd.width:bd.height;
return(bf===a5||ba===bg||(bf+a9/2)===(a5+bc/2))
},C=function(a6,a5){if(!a6||!a6.getBoundingClientRect){return R()
}var a7=a6;
var a9=false;
do{if(a7.clientWidth<a7.scrollWidth||a7.clientHeight<a7.scrollHeight){var a8=i(a7);
if(a7.clientWidth<a7.scrollWidth&&(a8.overflowX=="auto"||a8.overflowX=="scroll")||a7.clientHeight<a7.scrollHeight&&(a8.overflowY=="auto"||a8.overflowY=="scroll")){if(!a7||!a7.getBoundingClientRect||a7===Z.body){return R()
}if(a9||a5){return a7
}a9=true
}}}while(a7=a7.parentNode);
return R()
},R=function(){if(V){return Z.documentElement
}else{return Z.scrollingElement
}},ae=function(a6,a5,a7){a6.scrollLeft+=a5;
a6.scrollTop+=a7
},ay=D(function(bk,a8,be,a5){if(a8.scroll){var bq=be?be[aO]:window,bz=a8.scrollSensitivity,bs=a8.scrollSpeed,bh=bk.clientX,bf=bk.clientY,bg=R(),bu=false;
if(ap!==be){au();
al=a8.scroll;
X=a8.scrollFn;
if(al===true){al=C(be,true);
ap=al
}}var by=0;
var bA=al;
do{var a7=bA,a6=g(a7),bl=a6.top,bd=a6.bottom,a9=a6.left,bx=a6.right,bp=a6.width,bn=a6.height,bj,bt,bi,bo,bm,bc,ba,bw,bv;
bj=a7.scrollWidth;
bt=a7.scrollHeight;
bi=i(a7);
bw=a7.scrollLeft;
bv=a7.scrollTop;
if(a7===bg){bc=bp<bj&&(bi.overflowX==="auto"||bi.overflowX==="scroll"||bi.overflowX==="visible");
ba=bn<bt&&(bi.overflowY==="auto"||bi.overflowY==="scroll"||bi.overflowY==="visible")
}else{bc=bp<bj&&(bi.overflowX==="auto"||bi.overflowX==="scroll");
ba=bn<bt&&(bi.overflowY==="auto"||bi.overflowY==="scroll")
}bo=bc&&(T(bx-bh)<=bz&&(bw+bp)<bj)-(T(a9-bh)<=bz&&!!bw);
bm=ba&&(T(bd-bf)<=bz&&(bv+bn)<bt)-(T(bl-bf)<=bz&&!!bv);
if(!aQ[by]){for(var br=0;
br<=by;
br++){if(!aQ[br]){aQ[br]={}
}}}if(aQ[by].vx!=bo||aQ[by].vy!=bm||aQ[by].el!==a7){aQ[by].el=a7;
aQ[by].vx=bo;
aQ[by].vy=bm;
clearInterval(aQ[by].pid);
if(a7&&(bo!=0||bm!=0)){bu=true;
aQ[by].pid=setInterval((function(){if(a5&&this.layer===0){A.active._emulateDragOver(true);
A.active._onTouchMove(aC,true)
}var bB=aQ[this.layer].vy?aQ[this.layer].vy*bs:0;
var bC=aQ[this.layer].vx?aQ[this.layer].vx*bs:0;
if("function"===typeof(X)){if(X.call(bq,bC,bB,bk,aC,aQ[this.layer].el)!=="continue"){return
}}ae(aQ[this.layer].el,bC,bB)
}).bind({layer:by}),24)
}}by++
}while(a8.bubbleScroll&&bA!==bg&&(bA=C(bA,false)));
aL=bu
}},30),au=function(){aQ.forEach(function(a5){clearInterval(a5.pid)
});
aQ=[]
},l=function(a6){function a7(ba,a9){return function(bh,bg,bc,bd){var bf=bh.options.group.name&&bg.options.group.name&&bh.options.group.name===bg.options.group.name;
if(ba==null&&(a9||bf)){return true
}else{if(ba==null||ba===false){return false
}else{if(a9&&ba==="clone"){return ba
}else{if(typeof ba==="function"){return a7(ba(bh,bg,bc,bd),a9)(bh,bg,bc,bd)
}else{var be=(a9?bh:bg).options.group.name;
return(ba===true||(typeof ba==="string"&&ba===be)||(ba.join&&ba.indexOf(be)>-1))
}}}}}
}var a8={};
var a5=a6.group;
if(!a5||typeof a5!="object"){a5={name:a5}
}a8.name=a5.name;
a8.checkPull=a7(a5.pull,true);
a8.checkPut=a7(a5.put);
a8.revertClone=a5.revertClone;
a6.group=a8
},ad=function(a5){if(!at||!at.parentNode){return
}at.parentNode[aO]&&at.parentNode[aO]._computeIsAligned(a5)
},Q=function(){if(!n&&Y){i(Y,"display","none")
}},ag=function(){if(!n&&Y){i(Y,"display","")
}};
Z.addEventListener("click",function(a5){if(ah){a5.preventDefault();
a5.stopPropagation&&a5.stopPropagation();
a5.stopImmediatePropagation&&a5.stopImmediatePropagation();
ah=false;
return false
}},true);
var E=function(a5){if(at){a5=a5.touches?a5.touches[0]:a5;
var a8=f(a5.clientX,a5.clientY);
if(a8){var a7={};
for(var a6 in a5){a7[a6]=a5[a6]
}a7.target=a7.rootEl=a8;
a7.preventDefault=void 0;
a7.stopPropagation=void 0;
a8[aO]._onDragOver(a7)
}}};
function A(a8,a6){if(!(a8&&a8.nodeType&&a8.nodeType===1)){throw"Sortable: `el` must be HTMLElement, not "+{}.toString.call(a8)
}this.el=a8;
this.options=a6=aA({},a6);
a8[aO]=this;
var a9={group:null,sort:true,disabled:false,store:null,handle:null,scroll:true,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:true,draggable:/[uo]l/i.test(a8.nodeName)?">li":">*",swapThreshold:1,invertSwap:false,invertedSwapThreshold:null,removeCloneOnHide:true,direction:function(){return aB(a8,this.options)
},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:true,animation:0,easing:null,setData:function(bc,ba){bc.setData("Text",ba.textContent)
},dropBubble:false,dragoverBubble:false,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:false,touchStartThreshold:a1(window.devicePixelRatio,10)||1,forceFallback:false,fallbackClass:"sortable-fallback",fallbackOnBody:false,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:A.supportPointer!==false&&("PointerEvent" in window),emptyInsertThreshold:5};
for(var a5 in a9){!(a5 in a6)&&(a6[a5]=a9[a5])
}l(a6);
for(var a7 in this){if(a7.charAt(0)==="_"&&typeof this[a7]==="function"){this[a7]=this[a7].bind(this)
}}this.nativeDraggable=a6.forceFallback?false:aT;
if(this.nativeDraggable){this.options.touchStartThreshold=1
}if(a6.supportPointer){M(a8,"pointerdown",this._onTapStart)
}else{M(a8,"mousedown",this._onTapStart);
M(a8,"touchstart",this._onTapStart)
}if(this.nativeDraggable){M(a8,"dragover",this);
M(a8,"dragenter",this)
}J.push(this.el);
a6.store&&a6.store.get&&this.sort(a6.store.get(this)||[])
}A.prototype={constructor:A,_computeIsAligned:function(a5){var a8;
if(Y&&!n){Q();
a8=Z.elementFromPoint(a5.clientX,a5.clientY);
ag()
}else{a8=a5.target
}a8=j(a8,this.options.draggable,this.el,false);
if(y){return
}if(!at||at.parentNode!==this.el){return
}var a7=this.el.children;
for(var a6=0;
a6<a7.length;
a6++){if(j(a7[a6],this.options.draggable,this.el,false)&&a7[a6]!==a8){a7[a6].sortableMouseAligned=ai(a5.clientX,a5.clientY,a7[a6],this._getDirection(a5,null),this.options)
}}if(!j(a8,this.options.draggable,this.el,true)){o=null
}y=true;
aE(function(){y=false
},30)
},_getDirection:function(a5,a6){return(typeof this.options.direction==="function")?this.options.direction.call(this,a5,a6,at):this.options.direction
},_onTapStart:function(bg){if(!bg.cancelable){return
}var ba=this,a8=this.el,bh=this.options,a5=bh.preventOnFilter,bd=bg.type,a9=bg.touches&&bg.touches[0],bc=(a9||bg).target,a7=bg.target.shadowRoot&&((bg.path&&bg.path[0])||(bg.composedPath&&bg.composedPath()[0]))||bc,a6=bh.filter,bf,be;
P(a8);
if(at){return
}if(/mousedown|pointerdown/.test(bd)&&bg.button!==0||bh.disabled){return
}if(a7.isContentEditable){return
}bc=j(bc,bh.draggable,a8,false);
if(m===bc){return
}bf=aD(bc);
be=aD(bc,bh.draggable);
if(typeof a6==="function"){if(a6.call(this,bg,bc,this)){aX(ba,a7,"filter",bc,a8,a8,bf,undefined,be);
a5&&bg.cancelable&&bg.preventDefault();
return
}}else{if(a6){a6=a6.split(",").some(function(bi){bi=j(a7,bi.trim(),a8,false);
if(bi){aX(ba,bi,"filter",bc,a8,a8,bf,undefined,be);
return true
}});
if(a6){a5&&bg.cancelable&&bg.preventDefault();
return
}}}if(bh.handle&&!j(a7,bh.handle,a8,false)){return
}this._prepareDragStart(bg,a9,bc,bf,be)
},_handleAutoScroll:function(a6,bc){if(!at||!this.options.scroll){return
}var a5=a6.clientX,ba=a6.clientY,a7=Z.elementFromPoint(a5,ba),a9=this;
if(bc||L||V||u){ay(a6,a9.options,a7,bc);
var a8=C(a7,true);
if(aL&&(!a||a5!==aw||ba!==av)){a&&clearInterval(a);
a=setInterval(function(){if(!at){return
}var bd=C(Z.elementFromPoint(a5,ba),true);
if(bd!==a8){a8=bd;
au();
ay(a6,a9.options,a8,bc)
}},10);
aw=a5;
av=ba
}}else{if(!a9.options.bubbleScroll||C(a7,true)===R()){au();
return
}ay(a6,a9.options,C(a7,false),false)
}},_prepareDragStart:function(bc,a6,a9,ba,bd){var a7=this,a5=a7.el,bf=a7.options,be=a5.ownerDocument,a8;
if(a9&&!at&&(a9.parentNode===a5)){H=a5;
at=a9;
p=at.parentNode;
aR=at.nextSibling;
m=a9;
z=bf.group;
c=ba;
aJ=bd;
aN={target:at,clientX:(a6||bc).clientX,clientY:(a6||bc).clientY};
this._lastX=(a6||bc).clientX;
this._lastY=(a6||bc).clientY;
at.style["will-change"]="all";
at.style.transition="";
at.style.transform="";
a8=function(){a7._disableDelayedDragEvents();
if(!r&&a7.nativeDraggable){at.draggable=true
}a7._triggerDragStart(bc,a6);
aX(a7,H,"choose",at,H,H,c,undefined,aJ);
aZ(at,bf.chosenClass,true)
};
bf.ignore.split(",").forEach(function(bg){d(at,bg.trim(),v)
});
M(be,"dragover",E);
M(be,"mousemove",E);
M(be,"touchmove",E);
M(be,"mouseup",a7._onDrop);
M(be,"touchend",a7._onDrop);
M(be,"touchcancel",a7._onDrop);
if(r&&this.nativeDraggable){this.options.touchStartThreshold=4;
at.draggable=true
}if(bf.delay&&(bf.delayOnTouchOnly?a6:true)&&(!this.nativeDraggable||!(L||V))){M(be,"mouseup",a7._disableDelayedDrag);
M(be,"touchend",a7._disableDelayedDrag);
M(be,"touchcancel",a7._disableDelayedDrag);
M(be,"mousemove",a7._delayedDragTouchMoveHandler);
M(be,"touchmove",a7._delayedDragTouchMoveHandler);
bf.supportPointer&&M(be,"pointermove",a7._delayedDragTouchMoveHandler);
a7._dragStartTimer=aE(a8,bf.delay)
}else{a8()
}}},_delayedDragTouchMoveHandler:function(a5){var a6=a5.touches?a5.touches[0]:a5;
if(t(T(a6.clientX-this._lastX),T(a6.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))){this._disableDelayedDrag()
}},_disableDelayedDrag:function(){at&&v(at);
clearTimeout(this._dragStartTimer);
this._disableDelayedDragEvents()
},_disableDelayedDragEvents:function(){var a5=this.el.ownerDocument;
aV(a5,"mouseup",this._disableDelayedDrag);
aV(a5,"touchend",this._disableDelayedDrag);
aV(a5,"touchcancel",this._disableDelayedDrag);
aV(a5,"mousemove",this._delayedDragTouchMoveHandler);
aV(a5,"touchmove",this._delayedDragTouchMoveHandler);
aV(a5,"pointermove",this._delayedDragTouchMoveHandler)
},_triggerDragStart:function(a5,a7){a7=a7||(a5.pointerType=="touch"?a5:null);
if(!this.nativeDraggable||a7){if(this.options.supportPointer){M(Z,"pointermove",this._onTouchMove)
}else{if(a7){M(Z,"touchmove",this._onTouchMove)
}else{M(Z,"mousemove",this._onTouchMove)
}}}else{M(at,"dragend",this);
M(H,"dragstart",this._onDragStart)
}try{if(Z.selection){a2(function(){Z.selection.empty()
})
}else{window.getSelection().removeAllRanges()
}}catch(a6){}},_dragStarted:function(a7,a5){G=false;
if(H&&at){if(this.nativeDraggable){M(Z,"dragover",this._handleAutoScroll);
M(Z,"dragover",ad)
}var a6=this.options;
!a7&&aZ(at,a6.dragClass,false);
aZ(at,a6.ghostClass,true);
i(at,"transform","");
A.active=this;
a7&&this._appendGhost();
aX(this,H,"start",at,H,H,c,undefined,aJ,undefined,a5)
}else{this._nulling()
}},_emulateDragOver:function(a7){if(aC){if(this._lastX===aC.clientX&&this._lastY===aC.clientY&&!a7){return
}this._lastX=aC.clientX;
this._lastY=aC.clientY;
Q();
var a8=Z.elementFromPoint(aC.clientX,aC.clientY);
var a6=a8;
while(a8&&a8.shadowRoot){a8=a8.shadowRoot.elementFromPoint(aC.clientX,aC.clientY);
if(a8===a6){break
}a6=a8
}if(a6){do{if(a6[aO]){var a5;
a5=a6[aO]._onDragOver({clientX:aC.clientX,clientY:aC.clientY,target:a8,rootEl:a6});
if(a5&&!this.options.dragoverBubble){break
}}a8=a6
}while(a6=a6.parentNode)
}at.parentNode[aO]._computeIsAligned(aC);
ag()
}},_onTouchMove:function(bf,a6){if(aN){var bi=this.options,a9=bi.fallbackTolerance,bc=bi.fallbackOffset,a7=bf.touches?bf.touches[0]:bf,ba=Y&&am(Y),be=Y&&ba&&ba.a,bd=Y&&ba&&ba.d,a5=w&&ak&&e(ak),bh=((a7.clientX-aN.clientX)+bc.x)/(be||1)+(a5?(a5[0]-k[0]):0)/(be||1),bg=((a7.clientY-aN.clientY)+bc.y)/(bd||1)+(a5?(a5[1]-k[1]):0)/(bd||1),a8=bf.touches?"translate3d("+bh+"px,"+bg+"px,0)":"translate("+bh+"px,"+bg+"px)";
if(!A.active&&!G){if(a9&&a0(T(a7.clientX-this._lastX),T(a7.clientY-this._lastY))<a9){return
}this._onDragStart(bf,true)
}!a6&&this._handleAutoScroll(a7,true);
aH=true;
aC=a7;
i(Y,"webkitTransform",a8);
i(Y,"mozTransform",a8);
i(Y,"msTransform",a8);
i(Y,"transform",a8);
bf.cancelable&&bf.preventDefault()
}},_appendGhost:function(){if(!Y){var a5=this.options.fallbackOnBody?Z.body:H,a9=g(at,true,a5,!w),a8=i(at),a6=this.options;
if(w){ak=a5;
while(i(ak,"position")==="static"&&i(ak,"transform")==="none"&&ak!==Z){ak=ak.parentNode
}if(ak!==Z){var a7=g(ak,true);
a9.top-=a7.top;
a9.left-=a7.left
}if(ak!==Z.body&&ak!==Z.documentElement){if(ak===Z){ak=R()
}a9.top+=ak.scrollTop;
a9.left+=ak.scrollLeft
}else{ak=R()
}k=e(ak)
}Y=at.cloneNode(true);
aZ(Y,a6.ghostClass,false);
aZ(Y,a6.fallbackClass,true);
aZ(Y,a6.dragClass,true);
i(Y,"box-sizing","border-box");
i(Y,"margin",0);
i(Y,"top",a9.top);
i(Y,"left",a9.left);
i(Y,"width",a9.width);
i(Y,"height",a9.height);
i(Y,"opacity","0.8");
i(Y,"position",(w?"absolute":"fixed"));
i(Y,"zIndex","100000");
i(Y,"pointerEvents","none");
a5.appendChild(Y)
}},_onDragStart:function(a5,a9){var a8=this;
var a7=a5.dataTransfer;
var a6=a8.options;
q=h(at);
q.draggable=false;
q.style["will-change"]="";
this._hideClone();
aZ(q,a8.options.chosenClass,false);
a8._cloneId=a2(function(){if(!a8.options.removeCloneOnHide){H.insertBefore(q,at)
}aX(a8,H,"clone",at)
});
!a9&&aZ(at,a6.dragClass,true);
if(a9){ah=true;
a8._loopId=setInterval(a8._emulateDragOver,50)
}else{aV(Z,"mouseup",a8._onDrop);
aV(Z,"touchend",a8._onDrop);
aV(Z,"touchcancel",a8._onDrop);
if(a7){a7.effectAllowed="move";
a6.setData&&a6.setData.call(a8,a7,at)
}M(Z,"drop",a8);
i(at,"transform","translateZ(0)")
}G=true;
a8._dragStartId=a2(a8._dragStarted.bind(a8,a9,a5));
M(Z,"selectstart",a8);
if(u){i(Z.body,"user-select","none")
}},_onDragOver:function(bl){var a6=this.el,bv=bl.target,bf,bm,a7,bc=this.options,bi=bc.group,bh=A.active,a9=(z===bi),bu=bc.sort,bo=this;
if(O){return
}function bq(bw){if(bw){if(a9){bh._hideClone()
}else{bh._showClone(bo)
}if(bh){aZ(at,aG?aG.options.ghostClass:bh.options.ghostClass,false);
aZ(at,bc.ghostClass,true)
}if(aG!==bo&&bo!==A.active){aG=bo
}else{if(bo===A.active){aG=null
}}bf&&bo._animate(bf,at);
bv&&bm&&bo._animate(bm,bv)
}if((bv===at&&!at.animated)||(bv===a6&&!bv.animated)){o=null
}if(!bc.dragoverBubble&&!bl.rootEl&&bv!==Z){bo._handleAutoScroll(bl);
at.parentNode[aO]._computeIsAligned(bl);
!bw&&E(bl)
}!bc.dragoverBubble&&bl.stopPropagation&&bl.stopPropagation();
return true
}function bg(){aX(bo,H,"change",bv,a6,H,c,aD(at),aJ,aD(at,bc.draggable),bl)
}if(bl.preventDefault!==void 0){bl.cancelable&&bl.preventDefault()
}aH=true;
bv=j(bv,bc.draggable,a6,true);
if(at.contains(bl.target)||bv.animated){return bq(false)
}if(bv!==at){ah=false
}if(bh&&!bc.disabled&&(a9?bu||(a7=!H.contains(at)):(aG===this||((this.lastPutMode=z.checkPull(this,bh,at,bl))&&bi.checkPut(this,bh,at,bl))))){var a8=this._getDirection(bl,bv);
bf=g(at);
if(a7){this._hideClone();
p=H;
if(aR){H.insertBefore(at,aR)
}else{H.appendChild(at)
}return bq(true)
}var a5=K(a6);
if(!a5||aM(bl,a8,a6)&&!a5.animated){if(a5&&a6===bl.target){bv=a5
}if(bv){bm=g(bv)
}if(a9){bh._hideClone()
}else{bh._showClone(this)
}if(ac(H,a6,at,bf,bv,bm,bl,!!bv)!==false){a6.appendChild(at);
p=a6;
aa=null;
bg();
return bq(true)
}}else{if(bv&&bv!==at&&bv.parentNode===a6){var bt=0,bn,bd=bv.sortableMouseAligned,bk=at.parentNode!==a6,be=a8==="vertical"?"top":"left",bs=af(bv,"top")||af(at,"top"),bp=bs?bs.scrollTop:void 0;
if(o!==bv){aY=null;
bn=g(bv)[be];
aU=false
}if(x(at,bv,a8)&&bd||bk||bs||bc.invertSwap||aY==="insert"||aY==="swap"){if(aY!=="swap"){ax=bc.invertSwap||bk
}bt=s(bl,bv,a8,bc.swapThreshold,bc.invertedSwapThreshold==null?bc.swapThreshold:bc.invertedSwapThreshold,ax,o===bv);
aY="swap"
}else{bt=aF(bv);
aY="insert"
}if(bt===0){return bq(false)
}aa=null;
o=bv;
N=bt;
bm=g(bv);
var bj=bv.nextElementSibling,ba=false;
ba=bt===1;
var br=ac(H,a6,at,bf,bv,bm,bl,ba);
if(br!==false){if(br===1||br===-1){ba=(br===1)
}O=true;
aE(aI,30);
if(a9){bh._hideClone()
}else{bh._showClone(this)
}if(ba&&!bj){a6.appendChild(at)
}else{bv.parentNode.insertBefore(at,ba?bj:bv)
}if(bs){ae(bs,0,bp-bs.scrollTop)
}p=at.parentNode;
if(bn!==undefined&&!ax){aW=T(bn-g(bv)[be])
}bg();
return bq(true)
}}}if(a6.contains(at)){return bq(false)
}}return false
},_animate:function(a5,bc){var a9=this.options.animation;
if(a9){var ba=g(bc);
if(bc===at){aa=ba
}if(a5.nodeType===1){a5=g(a5)
}if((a5.left+a5.width/2)!==(ba.left+ba.width/2)||(a5.top+a5.height/2)!==(ba.top+ba.height/2)){var a7=am(this.el),a8=a7&&a7.a,a6=a7&&a7.d;
i(bc,"transition","none");
i(bc,"transform","translate3d("+(a5.left-ba.left)/(a8?a8:1)+"px,"+(a5.top-ba.top)/(a6?a6:1)+"px,0)");
this._repaint(bc);
i(bc,"transition","transform "+a9+"ms"+(this.options.easing?" "+this.options.easing:""));
i(bc,"transform","translate3d(0,0,0)")
}(typeof bc.animated==="number")&&clearTimeout(bc.animated);
bc.animated=aE(function(){i(bc,"transition","");
i(bc,"transform","");
bc.animated=false
},a9)
}},_repaint:function(a5){return a5.offsetWidth
},_offMoveEvents:function(){aV(Z,"touchmove",this._onTouchMove);
aV(Z,"pointermove",this._onTouchMove);
aV(Z,"dragover",E);
aV(Z,"mousemove",E);
aV(Z,"touchmove",E)
},_offUpEvents:function(){var a5=this.el.ownerDocument;
aV(a5,"mouseup",this._onDrop);
aV(a5,"touchend",this._onDrop);
aV(a5,"pointerup",this._onDrop);
aV(a5,"touchcancel",this._onDrop);
aV(Z,"selectstart",this)
},_onDrop:function(a5){var a7=this.el,a6=this.options;
G=false;
aL=false;
ax=false;
aU=false;
clearInterval(this._loopId);
clearInterval(a);
au();
I();
clearTimeout(this._dragStartTimer);
b(this._cloneId);
b(this._dragStartId);
aV(Z,"mousemove",this._onTouchMove);
if(this.nativeDraggable){aV(Z,"drop",this);
aV(a7,"dragstart",this._onDragStart);
aV(Z,"dragover",this._handleAutoScroll);
aV(Z,"dragover",ad)
}if(u){i(Z.body,"user-select","")
}this._offMoveEvents();
this._offUpEvents();
if(a5){if(aH){a5.cancelable&&a5.preventDefault();
!a6.dropBubble&&a5.stopPropagation()
}Y&&Y.parentNode&&Y.parentNode.removeChild(Y);
if(H===p||(aG&&aG.lastPutMode!=="clone")){q&&q.parentNode&&q.parentNode.removeChild(q)
}if(at){if(this.nativeDraggable){aV(at,"dragend",this)
}v(at);
at.style["will-change"]="";
aZ(at,aG?aG.options.ghostClass:this.options.ghostClass,false);
aZ(at,this.options.chosenClass,false);
aX(this,H,"unchoose",at,p,H,c,null,aJ,null,a5);
if(H!==p){aP=aD(at);
aS=aD(at,a6.draggable);
if(aP>=0){aX(null,p,"add",at,p,H,c,aP,aJ,aS,a5);
aX(this,H,"remove",at,p,H,c,aP,aJ,aS,a5);
aX(null,p,"sort",at,p,H,c,aP,aJ,aS,a5);
aX(this,H,"sort",at,p,H,c,aP,aJ,aS,a5)
}aG&&aG.save()
}else{if(at.nextSibling!==aR){aP=aD(at);
aS=aD(at,a6.draggable);
if(aP>=0){aX(this,H,"update",at,p,H,c,aP,aJ,aS,a5);
aX(this,H,"sort",at,p,H,c,aP,aJ,aS,a5)
}}}if(A.active){if(aP==null||aP===-1){aP=c;
aS=aJ
}aX(this,H,"end",at,p,H,c,aP,aJ,aS,a5);
this.save()
}}}this._nulling()
},_nulling:function(){H=at=p=Y=aR=q=m=al=ap=aQ.length=a=aw=av=aN=aC=aH=aP=c=o=N=aa=aG=z=A.active=null;
B.forEach(function(a5){a5.checked=true
});
B.length=0
},handleEvent:function(a5){switch(a5.type){case"drop":case"dragend":this._onDrop(a5);
break;
case"dragenter":case"dragover":if(at){this._onDragOver(a5);
aj(a5)
}break;
case"selectstart":a5.preventDefault();
break
}},toArray:function(){var a5=[],a9,a8=this.el.children,a7=0,ba=a8.length,a6=this.options;
for(;
a7<ba;
a7++){a9=a8[a7];
if(j(a9,a6.draggable,this.el,false)){a5.push(a9.getAttribute(a6.dataIdAttr)||aq(a9))
}}return a5
},sort:function(a5){var a6={},a7=this.el;
this.toArray().forEach(function(ba,a8){var a9=a7.children[a8];
if(j(a9,this.options.draggable,a7,false)){a6[ba]=a9
}},this);
a5.forEach(function(a8){if(a6[a8]){a7.removeChild(a6[a8]);
a7.appendChild(a6[a8])
}})
},save:function(){var a5=this.options.store;
a5&&a5.set&&a5.set(this)
},closest:function(a6,a5){return j(a6,a5||this.options.draggable,this.el,false)
},option:function(a6,a7){var a5=this.options;
if(a7===void 0){return a5[a6]
}else{a5[a6]=a7;
if(a6==="group"){l(a5)
}}},destroy:function(){var a5=this.el;
a5[aO]=null;
aV(a5,"mousedown",this._onTapStart);
aV(a5,"touchstart",this._onTapStart);
aV(a5,"pointerdown",this._onTapStart);
if(this.nativeDraggable){aV(a5,"dragover",this);
aV(a5,"dragenter",this)
}Array.prototype.forEach.call(a5.querySelectorAll("[draggable]"),function(a6){a6.removeAttribute("draggable")
});
this._onDrop();
J.splice(J.indexOf(this.el),1);
this.el=a5=null
},_hideClone:function(){if(!q.cloneHidden){i(q,"display","none");
q.cloneHidden=true;
if(q.parentNode&&this.options.removeCloneOnHide){q.parentNode.removeChild(q)
}}},_showClone:function(a5){if(a5.lastPutMode!=="clone"){this._hideClone();
return
}if(q.cloneHidden){if(H.contains(at)&&!this.options.group.revertClone){H.insertBefore(q,at)
}else{if(aR){H.insertBefore(q,aR)
}else{H.appendChild(q)
}}if(this.options.group.revertClone){this._animate(at,q)
}i(q,"display","");
q.cloneHidden=false
}}};
function j(a7,a5,a6,a8){if(a7){a6=a6||Z;
do{if(a5!=null&&(a5[0]===">"?a7.parentNode===a6&&ab(a7,a5):ab(a7,a5))||a8&&a7===a6){return a7
}if(a7===a6){break
}}while(a7=an(a7))
}return null
}function an(a5){return(a5.host&&a5!==Z&&a5.host.nodeType)?a5.host:a5.parentNode
}function aj(a5){if(a5.dataTransfer){a5.dataTransfer.dropEffect="move"
}a5.cancelable&&a5.preventDefault()
}function M(a6,a7,a5){a6.addEventListener(a7,a5,V?false:ao)
}function aV(a6,a7,a5){a6.removeEventListener(a7,a5,V?false:ao)
}function aZ(a7,a5,a8){if(a7&&a5){if(a7.classList){a7.classList[a8?"add":"remove"](a5)
}else{var a6=(" "+a7.className+" ").replace(F," ").replace(" "+a5+" "," ");
a7.className=(a6+(a8?" "+a5:"")).replace(F," ")
}}}function i(a6,a8,a7){var a5=a6&&a6.style;
if(a5){if(a7===void 0){if(Z.defaultView&&Z.defaultView.getComputedStyle){a7=Z.defaultView.getComputedStyle(a6,"")
}else{if(a6.currentStyle){a7=a6.currentStyle
}}return a8===void 0?a7:a7[a8]
}else{if(!(a8 in a5)&&a8.indexOf("webkit")===-1){a8="-webkit-"+a8
}a5[a8]=a7+(typeof a7==="string"?"":"px")
}}}function am(a6){var a7="";
do{var a5=i(a6,"transform");
if(a5&&a5!=="none"){a7=a5+" "+a7
}}while(a6=a6.parentNode);
if(window.DOMMatrix){return new DOMMatrix(a7)
}else{if(window.WebKitCSSMatrix){return new WebKitCSSMatrix(a7)
}else{if(window.CSSMatrix){return new CSSMatrix(a7)
}}}}function d(a5,a7,a8){if(a5){var a9=a5.getElementsByTagName(a7),a6=0,ba=a9.length;
if(a8){for(;
a6<ba;
a6++){a8(a9[a6],a6)
}}return a9
}return[]
}function aX(a7,bf,a5,bi,a6,a8,be,bg,bd,ba,a9){a7=(a7||bf[aO]);
var bc,bj=a7.options,bh="on"+a5.charAt(0).toUpperCase()+a5.substr(1);
if(window.CustomEvent&&!V&&!L){bc=new CustomEvent(a5,{bubbles:true,cancelable:true})
}else{bc=Z.createEvent("Event");
bc.initEvent(a5,true,true)
}bc.to=a6||bf;
bc.from=a8||bf;
bc.item=bi||bf;
bc.clone=q;
bc.oldIndex=be;
bc.newIndex=bg;
bc.oldDraggableIndex=bd;
bc.newDraggableIndex=ba;
bc.originalEvent=a9;
bc.pullMode=aG?aG.lastPutMode:undefined;
if(bf){bf.dispatchEvent(bc)
}if(bj[bh]){bj[bh].call(a7,bc)
}}function ac(ba,a7,a8,bf,bh,a5,bc,be){var bg,a9=ba[aO],bd=a9.options.onMove,a6;
if(window.CustomEvent&&!V&&!L){bg=new CustomEvent("move",{bubbles:true,cancelable:true})
}else{bg=Z.createEvent("Event");
bg.initEvent("move",true,true)
}bg.to=a7;
bg.from=ba;
bg.dragged=a8;
bg.draggedRect=bf;
bg.related=bh||a7;
bg.relatedRect=a5||g(a7);
bg.willInsertAfter=be;
bg.originalEvent=bc;
ba.dispatchEvent(bg);
if(bd){a6=bd.call(a9,bg,bc)
}return a6
}function v(a5){a5.draggable=false
}function aI(){O=false
}function W(a9,a8,a5){var ba=0,a7=0,a6=a9.children;
while(a7<a6.length){if(a6[a7].style.display!=="none"&&a6[a7]!==Y&&a6[a7]!==at&&j(a6[a7],a5.draggable,a9,false)){if(ba===a8){return a6[a7]
}ba++
}a7++
}return null
}function K(a5){var a6=a5.lastElementChild;
while(a6&&(a6===Y||i(a6,"display")==="none")){a6=a6.previousElementSibling
}return a6||null
}function aM(be,a9,a7){var bd=g(K(a7)),a5=a9==="vertical"?be.clientY:be.clientX,a8=a9==="vertical"?be.clientX:be.clientY,ba=a9==="vertical"?bd.bottom:bd.right,a6=a9==="vertical"?bd.left:bd.top,bf=a9==="vertical"?bd.right:bd.bottom,bc=10;
return(a9==="vertical"?(a8>bf+bc||a8<=bf&&a5>ba&&a8>=a6):(a5>ba&&a8>a6||a5<=ba&&a8>bf+bc))
}function s(bk,bd,a8,a9,be,bg,bl){var a5=g(bd),a7=a8==="vertical"?bk.clientY:bk.clientX,bh=a8==="vertical"?a5.height:a5.width,bc=a8==="vertical"?a5.top:a5.left,ba=a8==="vertical"?a5.bottom:a5.right,bf=g(at),a6=false;
if(!bg){if(bl&&aW<bh*a9){if(!aU&&(N===1?(a7>bc+bh*be/2):(a7<ba-bh*be/2))){aU=true
}if(!aU){var bj=a8==="vertical"?bf.top:bf.left,bi=a8==="vertical"?bf.bottom:bf.right;
if(N===1?(a7<bc+aW):(a7>ba-aW)){return N*-1
}}else{a6=true
}}else{if(a7>bc+(bh*(1-a9)/2)&&a7<ba-(bh*(1-a9)/2)){return aF(bd)
}}}a6=a6||bg;
if(a6){if(a7<bc+(bh*be/2)||a7>ba-(bh*be/2)){return((a7>bc+bh/2)?1:-1)
}}return 0
}function aF(a7){var a5=aD(at),a6=aD(a7);
if(a5<a6){return 1
}else{return -1
}}function aq(a7){var a8=a7.tagName+a7.className+a7.src+a7.href+a7.textContent,a5=a8.length,a6=0;
while(a5--){a6+=a8.charCodeAt(a5)
}return a6.toString(36)
}function aD(a7,a5){var a6=0;
if(!a7||!a7.parentNode){return -1
}while(a7&&(a7=a7.previousElementSibling)){if((a7.nodeName.toUpperCase()!=="TEMPLATE")&&a7!==q&&(!a5||ab(a7,a5))){a6++
}}return a6
}function ab(a7,a5){if(!a5){return
}a5[0]===">"&&(a5=a5.substring(1));
if(a7){try{if(a7.matches){return a7.matches(a5)
}else{if(a7.msMatchesSelector){return a7.msMatchesSelector(a5)
}else{if(a7.webkitMatchesSelector){return a7.webkitMatchesSelector(a5)
}}}}catch(a6){return false
}}return false
}var a3;
function D(a6,a5){return function(){if(!a3){var a7=arguments,a8=this;
a3=aE(function(){if(a7.length===1){a6.call(a8,a7[0])
}else{a6.apply(a8,a7)
}a3=void 0
},a5)
}}
}function I(){clearTimeout(a3);
a3=void 0
}function aA(a7,a6){if(a7&&a6){for(var a5 in a6){if(a6.hasOwnProperty(a5)){a7[a5]=a6[a5]
}}}return a7
}function h(a5){if(S&&S.dom){return S.dom(a5).cloneNode(true)
}else{if(aK){return aK(a5).clone(true)[0]
}else{return a5.cloneNode(true)
}}}function P(a7){B.length=0;
var a6=a7.getElementsByTagName("input");
var a5=a6.length;
while(a5--){var a8=a6[a5];
a8.checked&&B.push(a8)
}}function a2(a5){return aE(a5,0)
}function b(a5){return clearTimeout(a5)
}function g(a9,a8,a6,be){if(!a9.getBoundingClientRect&&a9!==ar){return
}var bc,bd,ba,a5,bj,bk,a7;
if(a9!==ar&&a9!==R()){bc=a9.getBoundingClientRect();
bd=bc.top;
ba=bc.left;
a5=bc.bottom;
bj=bc.right;
bk=bc.height;
a7=bc.width
}else{bd=0;
ba=0;
a5=window.innerHeight;
bj=window.innerWidth;
bk=window.innerHeight;
a7=window.innerWidth
}if(be&&a9!==ar){a6=a6||a9.parentNode;
if(!V){do{if(a6&&a6.getBoundingClientRect&&i(a6,"transform")!=="none"){var bg=a6.getBoundingClientRect();
bd-=bg.top+a1(i(a6,"border-top-width"));
ba-=bg.left+a1(i(a6,"border-left-width"));
a5=bd+bc.height;
bj=ba+bc.width;
break
}}while(a6=a6.parentNode)
}}if(a8&&a9!==ar){var bf=am(a6||a9),bi=bf&&bf.a,bh=bf&&bf.d;
if(bf){bd/=bh;
ba/=bi;
a7/=bi;
bk/=bh;
a5=bd+bk;
bj=ba+a7
}}return{top:bd,left:ba,bottom:a5,right:bj,width:a7,height:bk}
}function af(a8,a6){var a7=C(a8,true),a5=g(a8)[a6];
while(a7){var ba=g(a7)[a6],a9;
if(a6==="top"||a6==="left"){a9=a5>=ba
}else{a9=a5<=ba
}if(!a9){return a7
}if(a7===R()){break
}a7=C(a7,false)
}return false
}function e(ba){var bc=0,a9=0,a7=R();
if(ba){do{var a6=am(ba),a8=a6.a,a5=a6.d;
bc+=ba.scrollLeft*a8;
a9+=ba.scrollTop*a5
}while(ba!==a7&&(ba=ba.parentNode))
}return[bc,a9]
}M(Z,"touchmove",function(a5){if((A.active||G)&&a5.cancelable){a5.preventDefault()
}});
A.utils={on:M,off:aV,css:i,find:d,is:function(a6,a5){return !!j(a6,a5,a6,false)
},extend:aA,throttle:D,closest:j,toggleClass:aZ,clone:h,index:aD,nextTick:a2,cancelNextTick:b,detectDirection:aB,getChild:W};
A.create=function(a6,a5){return new A(a6,a5)
};
A.version="1.9.0";
return A
});
(function(a){if(typeof define==="function"&&define.amd){define(["jquery","moment"],a)
}else{if(typeof exports==="object"){a(require("jquery"),require("moment"))
}else{a(jQuery,moment)
}}}(function(c,e){var b="clndr";
var a="<div class='clndr-controls'><div class='clndr-control-button'><span class='clndr-previous-button'>previous</span></div><div class='month'><%= month %> <%= year %></div><div class='clndr-control-button rightalign'><span class='clndr-next-button'>next</span></div></div><table class='clndr-table' border='0' cellspacing='0' cellpadding='0'><thead><tr class='header-days'><% for(var i = 0; i < daysOfTheWeek.length; i++) { %><td class='header-day'><%= daysOfTheWeek[i] %></td><% } %></tr></thead><tbody><% for(var i = 0; i < numberOfRows; i++){ %><tr><% for(var j = 0; j < 7; j++){ %><% var d = j + i * 7; %><td class='<%= days[d].classes %>'><div class='day-contents'><%= days[d].day %></div></td><% } %></tr><% } %></tbody></table>";
var d={events:[],ready:null,extras:null,render:null,moment:null,weekOffset:0,constraints:null,forceSixRows:null,selectedDate:null,doneRendering:null,daysOfTheWeek:null,multiDayEvents:null,startWithMonth:null,dateParameter:"date",template:a,showAdjacentMonths:true,trackSelectedDate:false,adjacentDaysChangeMonth:false,ignoreInactiveDaysInSelection:null,lengthOfTime:{days:null,interval:1,months:null},clickEvents:{click:null,today:null,nextYear:null,nextMonth:null,nextInterval:null,previousYear:null,onYearChange:null,previousMonth:null,onMonthChange:null,previousInterval:null,onIntervalChange:null},targets:{day:"day",empty:"empty",nextButton:"clndr-next-button",todayButton:"clndr-today-button",previousButton:"clndr-previous-button",nextYearButton:"clndr-next-year-button",previousYearButton:"clndr-previous-year-button"},classes:{past:"past",today:"today",event:"event",inactive:"inactive",selected:"selected",lastMonth:"last-month",nextMonth:"next-month",adjacentMonth:"adjacent-month"},};
function f(i,h){this.element=i;
this.options=c.extend(true,{},d,h);
if(this.options.moment){e=this.options.moment
}this.constraints={next:true,today:true,previous:true,nextYear:true,previousYear:true};
if(this.options.events.length){if(this.options.multiDayEvents){this.options.events=this.addMultiDayMomentObjectsToEvents(this.options.events)
}else{this.options.events=this.addMomentObjectToEvents(this.options.events)
}}if(this.options.lengthOfTime.months||this.options.lengthOfTime.days){if(this.options.lengthOfTime.months){this.options.lengthOfTime.days=null;
if(this.options.lengthOfTime.startDate){this.intervalStart=e(this.options.lengthOfTime.startDate).startOf("month")
}else{if(this.options.startWithMonth){this.intervalStart=e(this.options.startWithMonth).startOf("month")
}else{this.intervalStart=e().startOf("month")
}}this.intervalEnd=e(this.intervalStart).add(this.options.lengthOfTime.months,"months").subtract(1,"days");
this.month=this.intervalStart.clone()
}else{if(this.options.lengthOfTime.days){if(this.options.lengthOfTime.startDate){this.intervalStart=e(this.options.lengthOfTime.startDate).startOf("day")
}else{this.intervalStart=e().weekday(0).startOf("day")
}this.intervalEnd=e(this.intervalStart).add(this.options.lengthOfTime.days-1,"days").endOf("day");
this.month=this.intervalStart.clone()
}}}else{this.month=e().startOf("month");
this.intervalStart=e(this.month);
this.intervalEnd=e(this.month).endOf("month")
}if(this.options.startWithMonth){this.month=e(this.options.startWithMonth).startOf("month");
this.intervalStart=e(this.month);
this.intervalEnd=e(this.month).endOf("month")
}if(this.options.constraints){if(this.options.constraints.startDate){var j=e(this.options.constraints.startDate);
if(this.intervalStart.isBefore(j,"month")){this.intervalStart.set("month",j.month()).set("year",j.year());
this.month.set("month",j.month()).set("year",j.year())
}}if(this.options.constraints.endDate){var g=e(this.options.constraints.endDate);
if(this.intervalEnd.isAfter(g,"month")){this.intervalEnd.set("month",g.month()).set("year",g.year());
this.month.set("month",g.month()).set("year",g.year())
}}}this._defaults=d;
this._name=b;
this.init()
}f.prototype.init=function(){this.daysOfTheWeek=this.options.daysOfTheWeek||[];
if(!this.options.daysOfTheWeek){this.daysOfTheWeek=[];
for(var g=0;
g<7;
g++){this.daysOfTheWeek.push(e().weekday(g).format("dd").charAt(0))
}}if(this.options.weekOffset){this.daysOfTheWeek=this.shiftWeekdayLabels(this.options.weekOffset)
}if(!c.isFunction(this.options.render)){this.options.render=null;
if(typeof _==="undefined"){throw new Error("Underscore was not found. Please include underscore.js OR provide a custom render function.")
}else{this.compiledClndrTemplate=_.template(this.options.template)
}}c(this.element).html("<div class='clndr'></div>");
this.calendarContainer=c(".clndr",this.element);
this.bindEvents();
this.render();
if(this.options.ready){this.options.ready.apply(this,[])
}};
f.prototype.shiftWeekdayLabels=function(h){var j=this.daysOfTheWeek;
for(var g=0;
g<h;
g++){j.push(j.shift())
}return j
};
f.prototype.createDaysObject=function(j,p){var k=[],m=j.clone(),n=p.diff(j,"days"),q,h,l,g,t,r;
this._currentIntervalStart=j.clone();
this.eventsLastMonth=[];
this.eventsNextMonth=[];
this.eventsThisInterval=[];
if(this.options.events.length){this.eventsThisInterval=c(this.options.events).filter(function(){var i=this._clndrStartDateObject.isAfter(p),u=this._clndrEndDateObject.isBefore(j);
if(u||i){return false
}else{return true
}}).toArray();
if(this.options.showAdjacentMonths){q=j.clone().subtract(1,"months").startOf("month");
h=q.clone().endOf("month");
l=p.clone().add(1,"months").startOf("month");
g=l.clone().endOf("month");
this.eventsLastMonth=c(this.options.events).filter(function(){var u=this._clndrEndDateObject.isBefore(q);
var i=this._clndrStartDateObject.isAfter(h);
if(u||i){return false
}else{return true
}}).toArray();
this.eventsNextMonth=c(this.options.events).filter(function(){var u=this._clndrEndDateObject.isBefore(l);
var i=this._clndrStartDateObject.isAfter(g);
if(u||i){return false
}else{return true
}}).toArray()
}}if(!this.options.lengthOfTime.days){t=m.weekday()-this.options.weekOffset;
if(t<0){t+=7
}if(this.options.showAdjacentMonths){for(var o=0;
o<t;
o++){var s=e([j.year(),j.month(),o-t+1]);
k.push(this.createDayObject(s,this.eventsLastMonth))
}}else{for(var o=0;
o<t;
o++){k.push(this.calendarDay({classes:this.options.targets.empty+" "+this.options.classes.lastMonth}))
}}}r=j.clone();
while(r.isBefore(p)||r.isSame(p,"day")){k.push(this.createDayObject(r.clone(),this.eventsThisInterval));
r.add(1,"days")
}if(!this.options.lengthOfTime.days){while(k.length%7!==0){if(this.options.showAdjacentMonths){k.push(this.createDayObject(r.clone(),this.eventsNextMonth))
}else{k.push(this.calendarDay({classes:this.options.targets.empty+" "+this.options.classes.nextMonth}))
}r.add(1,"days")
}}if(this.options.forceSixRows&&k.length!==42){while(k.length<42){if(this.options.showAdjacentMonths){k.push(this.createDayObject(r.clone(),this.eventsNextMonth));
r.add(1,"days")
}else{k.push(this.calendarDay({classes:this.options.targets.empty+" "+this.options.classes.nextMonth}))
}}}return k
};
f.prototype.createDayObject=function(r,o){var n=0,t=this,h=e(),q=[],m="",p={isToday:false,isInactive:false,isAdjacentMonth:false},i,k,s;
if(!r.isValid()&&r.hasOwnProperty("_d")&&r._d!=undefined){r=e(r._d)
}for(n;
n<o.length;
n++){var g=o[n]._clndrStartDateObject,l=o[n]._clndrEndDateObject;
if((r.isSame(g,"day")||r.isAfter(g,"day"))&&(r.isSame(l,"day")||r.isBefore(l,"day"))){q.push(o[n])
}}if(h.format("YYYY-MM-DD")==r.format("YYYY-MM-DD")){m+=(" "+this.options.classes.today);
p.isToday=true
}if(r.isBefore(h,"day")){m+=(" "+this.options.classes.past)
}if(q.length){m+=(" "+this.options.classes.event)
}if(!this.options.lengthOfTime.days){if(this._currentIntervalStart.month()>r.month()){m+=(" "+this.options.classes.adjacentMonth);
p.isAdjacentMonth=true;
this._currentIntervalStart.year()===r.year()?m+=(" "+this.options.classes.lastMonth):m+=(" "+this.options.classes.nextMonth)
}else{if(this._currentIntervalStart.month()<r.month()){m+=(" "+this.options.classes.adjacentMonth);
p.isAdjacentMonth=true;
this._currentIntervalStart.year()===r.year()?m+=(" "+this.options.classes.nextMonth):m+=(" "+this.options.classes.lastMonth)
}}}if(this.options.constraints){k=e(this.options.constraints.endDate);
i=e(this.options.constraints.startDate);
if(this.options.constraints.startDate&&r.isBefore(i)){m+=(" "+this.options.classes.inactive);
p.isInactive=true
}if(this.options.constraints.endDate&&r.isAfter(k)){m+=(" "+this.options.classes.inactive);
p.isInactive=true
}}if(!r.isValid()&&r.hasOwnProperty("_d")&&r._d!=undefined){r=e(r._d)
}s=e(this.options.selectedDate);
if(this.options.selectedDate&&r.isSame(s,"day")){m+=(" "+this.options.classes.selected)
}m+=" calendar-day-"+r.format("YYYY-MM-DD");
m+=" calendar-dow-"+r.weekday();
return this.calendarDay({date:r,day:r.date(),events:q,properties:p,classes:this.options.targets.day+m})
};
f.prototype.render=function(){var o={},m=null,h=null,g=this.intervalEnd.clone().add(1,"years"),r=this.intervalStart.clone().subtract(1,"years"),u,j,s,p,l;
this.calendarContainer.empty();
if(this.options.lengthOfTime.days){u=this.createDaysObject(this.intervalStart.clone(),this.intervalEnd.clone());
o={days:u,months:[],year:null,month:null,eventsLastMonth:[],eventsNextMonth:[],eventsThisMonth:[],extras:this.options.extras,daysOfTheWeek:this.daysOfTheWeek,intervalEnd:this.intervalEnd.clone(),numberOfRows:Math.ceil(u.length/7),intervalStart:this.intervalStart.clone(),eventsThisInterval:this.eventsThisInterval}
}else{if(this.options.lengthOfTime.months){j=[];
l=0;
p=[];
for(n=0;
n<this.options.lengthOfTime.months;
n++){var k=this.intervalStart.clone().add(n,"months");
var t=k.clone().endOf("month");
var u=this.createDaysObject(k,t);
p.push(this.eventsThisInterval);
j.push({days:u,month:k})
}for(n in j){l+=Math.ceil(j[n].days.length/7)
}o={days:[],year:null,month:null,months:j,eventsThisMonth:[],numberOfRows:l,extras:this.options.extras,intervalEnd:this.intervalEnd,intervalStart:this.intervalStart,daysOfTheWeek:this.daysOfTheWeek,eventsLastMonth:this.eventsLastMonth,eventsNextMonth:this.eventsNextMonth,eventsThisInterval:p,}
}else{u=this.createDaysObject(this.month.clone().startOf("month"),this.month.clone().endOf("month"));
s=this.month;
o={days:u,months:[],intervalEnd:null,intervalStart:null,year:this.month.year(),eventsThisInterval:null,extras:this.options.extras,month:this.month.format("MMMM"),daysOfTheWeek:this.daysOfTheWeek,eventsLastMonth:this.eventsLastMonth,eventsNextMonth:this.eventsNextMonth,numberOfRows:Math.ceil(u.length/7),eventsThisMonth:this.eventsThisInterval}
}}if(!this.options.render){this.calendarContainer.html(this.compiledClndrTemplate(o))
}else{this.calendarContainer.html(this.options.render.apply(this,[o]))
}if(this.options.constraints){for(var q in this.options.targets){if(q!=this.options.targets.day){this.element.find("."+this.options.targets[q]).toggleClass(this.options.classes.inactive,false)
}}for(var n in this.constraints){this.constraints[n]=true
}if(this.options.constraints.startDate){h=e(this.options.constraints.startDate)
}if(this.options.constraints.endDate){m=e(this.options.constraints.endDate)
}if(h&&(h.isAfter(this.intervalStart)||h.isSame(this.intervalStart,"day"))){this.element.find("."+this.options.targets.previousButton).toggleClass(this.options.classes.inactive,true);
this.constraints.previous=!this.constraints.previous
}if(m&&(m.isBefore(this.intervalEnd)||m.isSame(this.intervalEnd,"day"))){this.element.find("."+this.options.targets.nextButton).toggleClass(this.options.classes.inactive,true);
this.constraints.next=!this.constraints.next
}if(h&&h.isAfter(r)){this.element.find("."+this.options.targets.previousYearButton).toggleClass(this.options.classes.inactive,true);
this.constraints.previousYear=!this.constraints.previousYear
}if(m&&m.isBefore(g)){this.element.find("."+this.options.targets.nextYearButton).toggleClass(this.options.classes.inactive,true);
this.constraints.nextYear=!this.constraints.nextYear
}if((h&&h.isAfter(e(),"month"))||(m&&m.isBefore(e(),"month"))){this.element.find("."+this.options.targets.today).toggleClass(this.options.classes.inactive,true);
this.constraints.today=!this.constraints.today
}}if(this.options.doneRendering){this.options.doneRendering.apply(this,[])
}};
f.prototype.bindEvents=function(){var i=this,l=c(this.element),g=this.options.targets,k=i.options.classes,j=(this.options.useTouchEvents===true)?"touchstart":"click",h=j+".clndr";
l.off(h,"."+g.day).off(h,"."+g.empty).off(h,"."+g.nextButton).off(h,"."+g.todayButton).off(h,"."+g.previousButton).off(h,"."+g.nextYearButton).off(h,"."+g.previousYearButton);
l.on(h,"."+g.day,function(n){var m=c(n.currentTarget),o;
if(i.options.clickEvents.click){o=i.buildTargetObject(n.currentTarget,true);
i.options.clickEvents.click.apply(i,[o])
}if(i.options.adjacentDaysChangeMonth){if(m.is("."+k.lastMonth)){i.backActionWithContext(i)
}else{if(m.is("."+k.nextMonth)){i.forwardActionWithContext(i)
}}}if(i.options.trackSelectedDate){if(i.options.ignoreInactiveDaysInSelection&&m.hasClass(k.inactive)){return
}i.options.selectedDate=i.getTargetDateString(n.currentTarget);
m.siblings().removeClass(k.selected).end().addClass(k.selected)
}});
l.on(h,"."+g.empty,function(n){var m=c(n.currentTarget),o;
if(i.options.clickEvents.click){o=i.buildTargetObject(n.currentTarget,false);
i.options.clickEvents.click.apply(i,[o])
}if(i.options.adjacentDaysChangeMonth){if(m.is("."+k.lastMonth)){i.backActionWithContext(i)
}else{if(m.is("."+k.nextMonth)){i.forwardActionWithContext(i)
}}}});
data={context:this};
l.on(h,"."+g.todayButton,data,this.todayAction).on(h,"."+g.nextButton,data,this.forwardAction).on(h,"."+g.previousButton,data,this.backAction).on(h,"."+g.nextYearButton,data,this.nextYearAction).on(h,"."+g.previousYearButton,data,this.previousYearAction)
};
f.prototype.buildTargetObject=function(k,j){var i={date:null,events:[],element:k};
var g,h;
if(j){g=this.getTargetDateString(k);
i.date=(g)?e(g):null;
if(this.options.events){if(this.options.multiDayEvents){h=function(){var l=i.date.isSame(this._clndrStartDateObject,"day");
var o=i.date.isAfter(this._clndrStartDateObject,"day");
var n=i.date.isSame(this._clndrEndDateObject,"day");
var m=i.date.isBefore(this._clndrEndDateObject,"day");
return(l||o)&&(n||m)
}
}else{h=function(){var l=this._clndrStartDateObject.format("YYYY-MM-DD");
return l==g
}
}i.events=c.makeArray(c(this.options.events).filter(h))
}}return i
};
f.prototype.getTargetDateString=function(h){var g=h.className.indexOf("calendar-day-");
if(g!==-1){return h.className.substring(g+13,g+23)
}return null
};
f.prototype.triggerEvents=function(v,u){var q=v.options.lengthOfTime,j=v.options.clickEvents,n={end:v.intervalEnd,start:v.intervalStart},k=[e(v.intervalStart),e(v.intervalEnd)],g=[e(v.month)],s,p,m,o,l,h,i,t,r;
o=n.start.isAfter(u.start)&&(Math.abs(n.start.month()-u.start.month())==1||u.start.month()===11&&n.start.month()===0);
l=n.start.isBefore(u.start)&&(Math.abs(u.start.month()-n.start.month())==1||u.start.month()===0&&n.start.month()===11);
h=n.start.month()!==u.start.month()||n.start.year()!==u.start.year();
s=n.start.year()-u.start.year()===1||n.end.year()-u.end.year()===1;
p=u.start.year()-n.start.year()===1||u.end.year()-n.end.year()===1;
m=n.start.year()!==u.start.year();
if(q.days||q.months){i=n.start.isAfter(u.start);
t=n.start.isBefore(u.start);
r=i||t;
if(i&&j.nextInterval){j.nextInterval.apply(v,k)
}if(t&&j.previousInterval){j.previousInterval.apply(v,k)
}if(r&&j.onIntervalChange){j.onIntervalChange.apply(v,k)
}}else{if(o&&j.nextMonth){j.nextMonth.apply(v,g)
}if(l&&j.previousMonth){j.previousMonth.apply(v,g)
}if(h&&j.onMonthChange){j.onMonthChange.apply(v,g)
}if(s&&j.nextYear){j.nextYear.apply(v,g)
}if(p&&j.previousYear){j.previousYear.apply(v,g)
}if(m&&j.onYearChange){j.onYearChange.apply(v,g)
}}};
f.prototype.back=function(h){var k=null,g=(arguments.length>1)?arguments[1]:this,i=g.options.lengthOfTime,j={withCallbacks:false},l={end:g.intervalEnd.clone(),start:g.intervalStart.clone()};
h=c.extend(true,{},j,h);
if(!g.constraints.previous){return g
}if(!i.days){g.intervalStart.subtract(i.interval,"months").startOf("month");
g.intervalEnd=g.intervalStart.clone().add(i.months||i.interval,"months").subtract(1,"days").endOf("month");
g.month=g.intervalStart.clone()
}else{g.intervalStart.subtract(i.interval,"days").startOf("day");
g.intervalEnd=g.intervalStart.clone().add(i.days-1,"days").endOf("day");
g.month=g.intervalStart.clone()
}g.render();
if(h.withCallbacks){g.triggerEvents(g,l)
}return g
};
f.prototype.backAction=function(h){var g=h.data.context;
g.backActionWithContext(g)
};
f.prototype.backActionWithContext=function(g){g.back({withCallbacks:true},g)
};
f.prototype.previous=function(g){return this.back(g)
};
f.prototype.forward=function(h){var g=(arguments.length>1)?arguments[1]:this,i=g.options.lengthOfTime,j={withCallbacks:false},k={end:g.intervalEnd.clone(),start:g.intervalStart.clone()};
h=c.extend(true,{},j,h);
if(!g.constraints.next){return g
}if(g.options.lengthOfTime.days){g.intervalStart.add(i.interval,"days").startOf("day");
g.intervalEnd=g.intervalStart.clone().add(i.days-1,"days").endOf("day");
g.month=g.intervalStart.clone()
}else{g.intervalStart.add(i.interval,"months").startOf("month");
g.intervalEnd=g.intervalStart.clone().add(i.months||i.interval,"months").subtract(1,"days").endOf("month");
g.month=g.intervalStart.clone()
}g.render();
if(h.withCallbacks){g.triggerEvents(g,k)
}return g
};
f.prototype.forwardAction=function(h){var g=h.data.context;
g.forwardActionWithContext(g)
};
f.prototype.forwardActionWithContext=function(g){g.forward({withCallbacks:true},g)
};
f.prototype.next=function(g){return this.forward(g)
};
f.prototype.previousYear=function(h){var g=(arguments.length>1)?arguments[1]:this,i={withCallbacks:false},j={end:g.intervalEnd.clone(),start:g.intervalStart.clone()};
h=c.extend(true,{},i,h);
if(!g.constraints.previousYear){return g
}g.month.subtract(1,"year");
g.intervalStart.subtract(1,"year");
g.intervalEnd.subtract(1,"year");
g.render();
if(h.withCallbacks){g.triggerEvents(g,j)
}return g
};
f.prototype.previousYearAction=function(h){var g=h.data.context;
g.previousYear({withCallbacks:true},g)
};
f.prototype.nextYear=function(h){var g=(arguments.length>1)?arguments[1]:this,i={withCallbacks:false},j={end:g.intervalEnd.clone(),start:g.intervalStart.clone()};
h=c.extend(true,{},i,h);
if(!g.constraints.nextYear){return g
}g.month.add(1,"year");
g.intervalStart.add(1,"year");
g.intervalEnd.add(1,"year");
g.render();
if(h.withCallbacks){g.triggerEvents(g,j)
}return g
};
f.prototype.nextYearAction=function(h){var g=h.data.context;
g.nextYear({withCallbacks:true},g)
};
f.prototype.today=function(h){var g=(arguments.length>1)?arguments[1]:this,i=g.options.lengthOfTime,j={withCallbacks:false},k={end:g.intervalEnd.clone(),start:g.intervalStart.clone()};
h=c.extend(true,{},j,h);
g.month=e().startOf("month");
if(i.days){if(i.startDate){g.intervalStart=e().weekday(i.startDate.weekday()).startOf("day")
}else{g.intervalStart=e().weekday(0).startOf("day")
}g.intervalEnd=g.intervalStart.clone().add(i.days-1,"days").endOf("day")
}else{g.intervalStart=e().startOf("month");
g.intervalEnd=g.intervalStart.clone().add(i.months||i.interval,"months").subtract(1,"days").endOf("month")
}if(!g.intervalStart.isSame(k.start)||!g.intervalEnd.isSame(k.end)){g.render()
}if(h.withCallbacks){if(g.options.clickEvents.today){g.options.clickEvents.today.apply(g,[e(g.month)])
}g.triggerEvents(g,k)
}};
f.prototype.todayAction=function(h){var g=h.data.context;
g.today({withCallbacks:true},g)
};
f.prototype.setMonth=function(i,g){var h=this.options.lengthOfTime,j={end:this.intervalEnd.clone(),start:this.intervalStart.clone()};
if(h.days||h.months){console.log("You are using a custom date interval. Use Clndr.setIntervalStart(startDate) instead.");
return this
}this.month.month(i);
this.intervalStart=this.month.clone().startOf("month");
this.intervalEnd=this.intervalStart.clone().endOf("month");
this.render();
if(g&&g.withCallbacks){this.triggerEvents(this,j)
}return this
};
f.prototype.setYear=function(h,g){var i={end:this.intervalEnd.clone(),start:this.intervalStart.clone()};
this.month.year(h);
this.intervalEnd.year(h);
this.intervalStart.year(h);
this.render();
if(g&&g.withCallbacks){this.triggerEvents(this,i)
}return this
};
f.prototype.setIntervalStart=function(g,h){var i=this.options.lengthOfTime,j={end:this.intervalEnd.clone(),start:this.intervalStart.clone()};
if(!i.days&&!i.months){console.log("You are using a custom date interval. Use Clndr.setIntervalStart(startDate) instead.");
return this
}if(i.days){this.intervalStart=e(g).startOf("day");
this.intervalEnd=this.intervalStart.clone().add(i-1,"days").endOf("day")
}else{this.intervalStart=e(g).startOf("month");
this.intervalEnd=this.intervalStart.clone().add(i.months||i.interval,"months").subtract(1,"days").endOf("month")
}this.month=this.intervalStart.clone();
this.render();
if(h&&h.withCallbacks){this.triggerEvents(this,j)
}return this
};
f.prototype.setEvents=function(g){if(this.options.multiDayEvents){this.options.events=this.addMultiDayMomentObjectsToEvents(g)
}else{this.options.events=this.addMomentObjectToEvents(g)
}this.render();
return this
};
f.prototype.addEvents=function(g){if(this.options.multiDayEvents){this.options.events=c.merge(this.options.events,this.addMultiDayMomentObjectsToEvents(g))
}else{this.options.events=c.merge(this.options.events,this.addMomentObjectToEvents(g))
}this.render();
return this
};
f.prototype.removeEvents=function(h){for(var g=this.options.events.length-1;
g>=0;
g--){if(h(this.options.events[g])==true){this.options.events.splice(g,1)
}}this.render();
return this
};
f.prototype.addMomentObjectToEvents=function(j){var h=0,g=this;
for(h;
h<j.length;
h++){j[h]._clndrStartDateObject=e(j[h][g.options.dateParameter]);
j[h]._clndrEndDateObject=e(j[h][g.options.dateParameter])
}return j
};
f.prototype.addMultiDayMomentObjectsToEvents=function(l){var k=0,j=this,h=j.options.multiDayEvents;
for(k;
k<l.length;
k++){var g=l[k][h.endDate],m=l[k][h.startDate];
if(!g&&!m){l[k]._clndrEndDateObject=e(l[k][h.singleDay]);
l[k]._clndrStartDateObject=e(l[k][h.singleDay])
}else{l[k]._clndrEndDateObject=e(g||m);
l[k]._clndrStartDateObject=e(m||g)
}}return l
};
f.prototype.calendarDay=function(g){var h={day:"",date:null,events:[],classes:this.options.targets.empty};
return c.extend({},h,g)
};
f.prototype.destroy=function(){var g=c(this.calendarContainer);
g.parent().data("plugin_clndr",null);
this.options=d;
g.empty().remove();
this.element=null
};
c.fn.clndr=function(g){var h;
if(this.length>1){throw new Error("CLNDR does not support multiple elements yet. Make sure your clndr selector returns only one element.")
}if(!this.length){throw new Error("CLNDR cannot be instantiated on an empty selector.")
}if(!this.data("plugin_clndr")){h=new f(this,g);
this.data("plugin_clndr",h);
return h
}return this.data("plugin_clndr")
}
}));
"use strict";
(function(d,l,a){var e=a[l]={};
var f=a[d];
var c={jQuery:{url:"http://jquery.com/"},Hammer:{url:"http://hammerjs.github.io/"},Outlayer:{url:"https://github.com/metafizzy/outlayer/"}};
var m=["[egjs] The {{name}} library must be loaded before {{componentName}}.",'[egjs] For AMD environment (like RequireJS), "{{name}}" must be declared, which is required by {{componentName}}.',"[egjs] The {{index}} argument of {{componentName}} is missing.\r\nDownload {{name}} from [{{url}}].","[egjs] The {{name}} parameter of {{componentName}} is not valid.\r\nPlease check and try again.","[egjs] The {{index}} argument of {{componentName}} is undefined.\r\nPlease check and try again."];
var j=["1st","2nd","3rd"];
function b(o){return o>2?(o+1)+"th":j[o]
}function h(q,p){var o;
for(o in p){q=q.replace(new RegExp("{{"+o+"}}","gi"),p[o])
}return q
}function n(y,x){var v=0;
var u=x.length;
var B=[];
var C=[];
var s=a.require;
var A;
var r;
var p;
var q;
var t;
var z;
var w;
var o;
for(;
v<u;
v++){r=x[v];
p={index:b(v),name:r,componentName:y};
q=typeof x[v]==="string";
t=x[v]===undefined;
z=q&&(A=c[x[v]]);
w=q&&A&&!a[x[v]];
o=w&&s&&s.specified(x[v]);
if(!q&&!t){C.push(r);
continue
}if(o&&s.defined(x[v])){r=s(x[v]);
C.push(r);
continue
}if(o&&!s.defined(x[v])){p.url=A.url;
B.push(h(m[0],p));
continue
}if(w&&s&&!s.specified(x[v])){p.url=A.url;
B.push(h(m[1],p));
continue
}if(w&&!s){p.url=A.url;
B.push(h(m[2],p));
continue
}if(z&&a[x[v]]){r=a[x[v]];
C.push(r);
continue
}if(q&&!A){B.push(h(m[3],p));
continue
}if(x[v]===undefined){B.push(h(m[4],p));
continue
}}return[C,B]
}function k(o){return o.charAt(0).toUpperCase()+o.slice(1)
}function g(q){var t=k(q);
var s;
var o;
if(!(e[t]&&e[t].prototype._events)){return false
}if(f.fn[q]){throw new Error(t+" has already registered. so "+l+"."+t+" can`t register for plugin.")
}f.fn[q]=function(w){var v;
var u;
if(typeof w==="string"){v=this.data(l+"-"+q);
u=v[w].apply(v,Array.prototype.slice.call(arguments,1));
return u===v?this:u
}if(w===undefined||f.isPlainObject(w)){this.data(l+"-"+q,new e[t](this,w||{}))
}return this
};
o={trigger:"trigger",add:"on",remove:"off"};
s=e[t].prototype._events();
for(var r in s){for(var p in o){f.event.special[q+":"+s[r]]={};
f.event.special[q+":"+s[r]][p]=(function(u){return function(v,w){f(this).data(l+"-"+q)[u](v.type,u==="trigger"?w:v.handler);
return false
}
})(o[p])
}}}var i=function(o){if(a.console&&a.console.warn){i=function(p){a.console.warn(p)
}
}else{i=function(p){}
}i(o)
};
e.module=function(q,r,p){var o=n(q,r);
if(o[1].length){i(o[1].join("\r\n"))
}else{p.apply(a,o[0]);
g(q)
}}
})("jQuery","eg",window);
eg.module("eg",["jQuery",eg,window],function(g,i,c){var h=c.requestAnimationFrame||c.webkitRequestAnimationFrame||c.mozRequestAnimationFrame||c.msRequestAnimationFrame;
var f=c.cancelAnimationFrame||c.webkitCancelAnimationFrame||c.mozCancelAnimationFrame||c.msCancelAnimationFrame;
if(h&&!f){var a={};
var d=h;
h=function(m){function l(){if(a[k]){m()
}}var k=d(l);
a[k]=true;
return k
};
f=function(k){delete a[k]
}
}else{if(!(h&&f)){h=function(k){return c.setTimeout(k,16)
};
f=c.clearTimeout
}}function e(m,l,n,k){var o=m.hook[l];
if(o){k=o.apply(m,n)
}m[l]=function(){var p=m.hook[l];
if(p){return p.apply(m,n)
}return k
};
return k
}i.VERSION="0.0.3";
i.hook={};
var j={browser:[{criteria:"PhantomJS",identity:"PhantomJS"},{criteria:/Edge/,identity:"Edge",versionSearch:"Edge"},{criteria:/MSIE|Trident|Windows Phone/,identity:"IE",versionSearch:"IEMobile|MSIE|rv"},{criteria:/SAMSUNG|SamsungBrowser/,identity:"SBrowser",versionSearch:"Chrome"},{criteria:/Chrome|CriOS/,identity:"Chrome"},{criteria:/Android/,identity:"default"},{criteria:/iPhone|iPad/,identity:"Safari",versionSearch:"Version"},{criteria:"Apple",identity:"Safari",versionSearch:"Version"},{criteria:"Firefox",identity:"Firefox"}],os:[{criteria:/Windows Phone|Windows NT/,identity:"Window",versionSearch:"Windows Phone|Windows NT"},{criteria:"Windows 2000",identity:"Window",versionAlias:"5.0"},{criteria:/iPhone|iPad/,identity:"iOS",versionSearch:"iPhone OS|CPU OS"},{criteria:"Mac",versionSearch:"OS X",identity:"MAC"},{criteria:/Android/,identity:"Android"}],webview:[{criteria:/iPhone|iPad/,browserVersionSearch:"Version",webviewBrowserVersion:/-1/},{criteria:/iPhone|iPad|Android/,webviewToken:/NAVER|DAUM|; wv/}],defaultString:{browser:{version:"-1",name:"default"},os:{version:"-1",name:"unknown"}}};
var b={getBrowserName:function(k){return this.getIdentityStringFromArray(k,j.defaultString.browser)
},getBrowserVersion:function(m){var l;
var k;
if(!m){return
}k=this.getBrowserRule(m).versionSearch||m;
l=this.extractBrowserVersion(k,this.ua);
return l
},extractBrowserVersion:function(k,o){var m=j.defaultString.browser.version;
var p;
var l;
var n=(new RegExp("("+k+")","i")).exec(o);
if(!n){return m
}l=n.index;
k=n[0];
if(l>-1){p=l+k.length+1;
m=o.substring(p).split(" ")[0].replace(/_/g,".").replace(/\;|\)/g,"")
}return m
},getOSName:function(k){return this.getIdentityStringFromArray(k,j.defaultString.os)
},getOSVersion:function(p){var m=this.ua;
var l=this.getOSRule(p)||{};
var n=j.defaultString.os.version;
var r;
var o;
var q;
var k;
if(!p){return
}if(l.versionAlias){return l.versionAlias
}o=l.versionSearch||p;
q=new RegExp("("+o+")\\s([\\d_\\.]+|\\d_0)","i");
k=q.exec(m);
if(k){r=q.exec(m)[2].replace(/_/g,".").replace(/\;|\)/g,"")
}return r||n
},getOSRule:function(k){return this.getRule(j.os,k)
},getBrowserRule:function(k){return this.getRule(j.browser,k)
},getRule:function(n,p){var o;
var m;
for(var k=0,l;
l=n[k];
k++){o=l.criteria;
m=new RegExp(l.identity,"i").test(p);
if(o?m&&this.isMatched(this.ua,o):m){return l
}}},getIdentityStringFromArray:function(n,m){for(var k=0,l;
l=n[k];
k++){if(this.isMatched(this.ua,l.criteria)){return l.identity||m.name
}}return m.name
},isMatched:function(k,l){return l&&l.test?!!l.test(k):k.indexOf(l)>-1
},isWebview:function(){var n=this.ua;
var k=j.webview;
var o=false;
var l;
for(var m=0,p;
p=k[m];
m++){if(!this.isMatched(n,p.criteria)){continue
}l=this.extractBrowserVersion(p.browserVersionSearch,n);
if(this.isMatched(n,p.webviewToken)||this.isMatched(l,p.webviewBrowserVersion)){o=true;
break
}}return o
}};
b.create=function(k){b.ua=k;
var l={os:{},browser:{}};
l.browser.name=b.getBrowserName(j.browser);
l.browser.version=b.getBrowserVersion(l.browser.name);
l.os.name=b.getOSName(j.os);
l.os.version=b.getOSVersion(l.os.name);
l.browser.webview=b.isWebview();
l.browser.name=l.browser.name.toLowerCase();
l.os.name=l.os.name.toLowerCase();
return l
};
i.agent=function(k){var l=b.create(k||navigator.userAgent);
return e(this,"agent",[l],l)
};
i.translate=function(k,m,l){l=l||false;
return"translate"+(l?"3d(":"(")+k+","+m+(l?",0)":")")
};
i.isHWAccelerable=function(){var k=false;
var o=i.agent();
var p=o.os.version;
var n=o.browser.name;
var m=o.browser.version;
var l;
if(n.indexOf("chrome")!==-1){k=m>="25"
}else{if(/ie|edge|firefox|safari|inapp/.test(n)){k=true
}else{if(o.os.name.indexOf("android")!==-1){l=(b.ua.match(/\(.*\)/)||[null])[0];
k=(p>="4.1.0"&&!/EK-GN120|SM-G386F/.test(l))||(p>="4.0.3"&&/SHW-|SHV-|GT-|SCH-|SGH-|SPH-|LG-F160|LG-F100|LG-F180|LG-F200|EK-|IM-A|LG-F240|LG-F260/.test(l)&&!/SHW-M420|SHW-M200|GT-S7562/.test(l))
}}}return e(this,"isHWAccelerable",[k,o],k)
};
i.isTransitional=function(){var k=false;
var m=i.agent();
var l=m.browser.name;
if(/chrome|firefox/.test(l)){k=true
}else{switch(m.os.name){case"ios":k=/safari|inapp/.test(l)&&parseInt(m.os.version,10)<6;
break;
case"window":k=l.indexOf("safari")!==-1||(l.indexOf("ie")!==-1&&parseInt(m.browser.nativeVersion,10)>=10);
break;
default:k=/chrome|firefox|safari/.test(l);
break
}}return e(this,"isTransitional",[k,m],k)
};
i._hasClickBug=function(){var l=this.agent();
var k=l.os.name==="ios";
return e(this,"_hasClickBug",[k,l],k)
};
i.requestAnimationFrame=function(k){return h(k)
};
i.cancelAnimationFrame=function(k){f(k)
};
i.DIRECTION_NONE=1;
i.DIRECTION_LEFT=2;
i.DIRECTION_RIGHT=4;
i.DIRECTION_UP=8;
i.DIRECTION_DOWN=16;
i.DIRECTION_HORIZONTAL=i.DIRECTION_LEFT|i.DIRECTION_RIGHT;
i.DIRECTION_VERTICAL=i.DIRECTION_UP|i.DIRECTION_DOWN;
i.DIRECTION_ALL=i.DIRECTION_HORIZONTAL|i.DIRECTION_VERTICAL;
g.extend(g.easing,{easeOutCubic:function(k){return 1-Math.pow(1-k,3)
}})
});
eg.module("rotate",["jQuery",eg,window,document],function(f,i,a,k){var h=-1;
var b=null;
var c=null;
var e=i.agent();
var g=/android|ios/.test(e.os.name);
var d=function(){var n;
if((e.os.name==="android"&&e.os.version==="2.1")){n="resize"
}else{n="onorientationchange" in a?"orientationchange":"resize"
}d=function(){return n
};
return n
};
function j(){var o=d();
var p;
var q;
var n;
if(o==="resize"){p=k.documentElement.clientWidth;
if(h===-1){n=p<k.documentElement.clientHeight
}else{if(p<h){n=true
}else{if(p===h){n=b
}else{n=false
}}}h=p
}else{q=a.orientation;
if(q===0||q===180){n=true
}else{if(q===90||q===-90){n=false
}}}return n
}function m(){var n=j();
if(g){if(b!==n){b=n;
f(a).trigger("rotate")
}}}function l(q){var n=d();
var o;
var p;
if(n==="resize"){a.setTimeout(function(){m()
},0)
}else{o=300;
if(e.os.name==="android"){p=k.documentElement.clientWidth;
if(q.type==="orientationchange"&&p===h){a.setTimeout(function(){l(q)
},500);
return false
}h=p
}a.clearTimeout(c);
c=a.setTimeout(function(){m()
},o)
}}f.event.special.rotate={setup:function(){h=k.documentElement.clientWidth;
f(a).on(d(),l)
},teardown:function(){f(a).off(d(),l)
},trigger:function(n){n.isVertical=b
}};
return{orientationChange:d,isVertical:j,triggerRotate:m,handler:l}
});
eg.module("scrollEnd",["jQuery",eg,window],function(e,r,j){var a;
var o=false;
var h=3;
var p=2;
var q=1;
var i=0;
var g=250;
var f=k();
e.event.special.scrollend={setup:function(){n()
},teardown:function(){l()
}};
function k(){var v=p;
var u=r.agent();
var t=u.os;
var w=parseInt(t.version,10);
var s=u.browser;
if(t.name==="ios"){if(s.webview===true||w<=7){v=i
}}return v
}function n(){e(j).on("scroll",b);
e(j).on("orientationchange",d)
}function d(){o=true
}function b(){if(o){o=false;
return
}switch(f){case i:m();
break;
case p:c();
break
}}function m(){e(j).trigger("scrollend",{top:j.pageYOffset,left:j.pageXOffset})
}function c(){clearTimeout(a);
a=setTimeout(function(){if(o){o=false;
return
}m()
},g)
}function l(){e(j).off("scroll",b);
e(j).off("orientationchange",d)
}return{getDeviceType:k,CHROME:h,TIMERBASE:p,TOUCHBASE:q,SCROLLBASE:i}
});
eg.module("animate",["jQuery",window],function(g,c){var p="Float32Array" in window;
var b=c.WebKitCSSMatrix||c.MSCSSMatrix||c.OCSSMatrix||c.MozMatrix||c.CSSMatrix;
function l(s){s=s.split(")");
var t=g.trim;
var w=-1;
var v=s.length-1;
var y;
var q;
var r;
var u=p?new Float32Array(6):[];
var z=p?new Float32Array(6):[];
var x=p?new Float32Array(6):[1,0,0,1,0,0];
u[0]=u[3]=x[0]=x[3]=1;
u[1]=u[2]=u[4]=u[5]=0;
while(++w<v){y=s[w].split("(");
q=t(y[0]);
r=y[1];
z[0]=z[3]=1;
z[1]=z[2]=z[4]=z[5]=0;
switch(q){case"translateX":z[4]=parseInt(r,10);
break;
case"translateY":z[5]=parseInt(r,10);
break;
case"translate":r=r.split(",");
z[4]=parseInt(r[0],10);
z[5]=parseInt(r[1]||0,10);
break;
case"rotate":r=e(r);
z[0]=Math.cos(r);
z[1]=Math.sin(r);
z[2]=-Math.sin(r);
z[3]=Math.cos(r);
break;
case"scaleX":z[0]=+r;
break;
case"scaleY":z[3]=r;
break;
case"scale":r=r.split(",");
z[0]=r[0];
z[3]=r.length>1?r[1]:r[0];
break;
case"skewX":z[2]=Math.tan(e(r));
break;
case"skewY":z[1]=Math.tan(e(r));
break;
case"matrix":r=r.split(",");
z[0]=r[0];
z[1]=r[1];
z[2]=r[2];
z[3]=r[3];
z[4]=parseInt(r[4],10);
z[5]=parseInt(r[5],10);
break
}x[0]=u[0]*z[0]+u[2]*z[1];
x[1]=u[1]*z[0]+u[3]*z[1];
x[2]=u[0]*z[2]+u[2]*z[3];
x[3]=u[1]*z[2]+u[3]*z[3];
x[4]=u[0]*z[4]+u[2]*z[5]+u[4];
x[5]=u[1]*z[4]+u[3]*z[5]+u[5];
u=[x[0],x[1],x[2],x[3],x[4],x[5]]
}return x
}function e(q){return ~q.indexOf("deg")?parseInt(q,10)*(Math.PI*2/360):~q.indexOf("grad")?parseInt(q,10)*(Math.PI/200):parseFloat(q)
}function h(t,s){var r=t;
var q=t.match(/([0-9]*)%/);
if(q&&q.length>=1){r=s*(parseFloat(q[1])/100)+"px"
}else{if(t.indexOf("px")===-1){r=t+"px"
}}return r
}function k(t,s,C){var u;
var A="";
var y=t.split(")");
for(var x=0,z=y.length-1;
x<z;
x++){var r=y[x];
if((u=r.match(/(translate([XYZ]|3d)?|rotate)\(([^)]*)/))&&u.length>1){if(u[1]==="rotate"){if(u[3].indexOf("deg")===-1){r=u[1]+"("+u[3]+"deg"
}}else{switch(u[2]){case"X":r=u[1]+"("+h(u[3],s);
break;
case"Y":r=u[1]+"("+h(u[3],C);
break;
case"Z":break;
default:var B=u[3].split(",");
var q=[s,C,100];
for(var w=0,v=B.length;
w<v;
w++){B[w]=h(B[w],q[w])
}r=u[1]+"("+B.join(",");
break
}}}r=" "+r+")";
A+=r
}A=A.replace("%","").replace("+=","");
return A
}function j(r){var q=r.match(/(-*[\d|\.]+)(px|deg|rad)*/);
if(q&&q.length>=1){return{num:parseFloat(q[1]),unit:q[2]}
}}function o(s){var w=s.split(")");
var u=[];
for(var t=0,q=w.length-1;
t<q;
t++){var r=i(w[t]);
r[1]=g.map(r[1],j);
u.push(r)
}return function v(z){var x="";
var y=0;
g.each(u,function(B){if(u[B][0]==="scale"){y=1
}var A=g.map(u[B][1],function(C){var D=C.num;
y===1&&(D=D-1);
return(y+D*z)+(C.unit||"")
}).join(",");
x+=u[B][0]+"("+A+") "
});
return x
}
}function a(r,u,t){var s=t.indexOf("+=")>=0;
var v;
var q;
t=k(t,parseFloat(g.css(r,"width"))||0,parseFloat(g.css(r,"height"))||0);
if(s){v=(!u||u==="none")?"matrix(1, 0, 0, 1, 0, 0)":u;
q=o(t)
}else{v=f(u);
q=f(t);
if(v[1].length<q[1].length){v=n(v)
}else{if(v[1].length>q[1].length){q=n(q)
}}}return function(C){var w=[];
var y="";
if(s){y=v+q(C);
return y
}if(C===1){y=d(q)
}else{for(var z=0,A,B,x=v[1].length;
z<x;
z++){A=parseFloat(v[1][z]);
B=parseFloat(q[1][z]);
w.push(A+(B-A)*C)
}y=d([v[0],w])
}return y
}
}function d(s){var q;
var r=[];
if(g.isArray(s)){q=s[0];
return q+"("+s[1].join(m(q)+",")+m(q)+")"
}else{for(q in s){r.push(q)
}return g.map(r,function(t){return t+"("+s[t]+m(t)+")"
}).join(" ")
}}function m(q){return q.indexOf("translate")>=0?"px":q.indexOf("rotate")>=0?"deg":""
}function i(u){var r=u.match(/(\b\w+?)\((\s*[^\)]+)/);
var s;
var t;
var q=["",""];
if(r&&r.length>2){s=r[1];
t=r[2].split(",");
t=g.map(t,function(w){return g.trim(w)
});
q=[g.trim(s),t]
}return q
}function f(q){var r=[];
if(!q||q==="none"){return["matrix",["1","0","0","1","0","0"]]
}r=b?i(new b(q).toString()):["matrix",l(q)];
if(q.indexOf("3d")>=0&&r[0].indexOf("3d")<0){r=n(r)
}return r
}function n(q){var r=q[0];
var s=q[1];
if(r==="matrix3d"){return q
}return[r+"3d",[s[0],s[1],"0","0",s[2],s[3],"0","0","0","0","1","0",s[4],s[5],"0","1"]]
}g.fx.step.transform=function(q){q.rateFn=q.rateFn||a(q.elem,q.start,q.end);
g.style(q.elem,"transform",q.rateFn(q.pos))
};
return{toMatrix:f,toMatrix3d:n}
});
eg.module("css",["jQuery",document],function(f,g){if(!f.cssHooks){throw (new Error("jQuery 1.4.3+ is needed for this plugin to work"))
}if(f.fn&&f.fn.jquery&&f.fn.jquery.replace(/\./,"")>="18"){return
}var b=["Webkit","Moz","O","ms"];
var a=["transitionProperty","transitionDuration","transition","transform","transitionTimingFunction"];
var e=(function(){var k=(g.head||g.getElementsByTagName("head")[0]).style;
for(var l=0,j=b.length;
l<j;
l++){if(b[l]+"Transition" in k){return b[l]
}}})();
if(!e){return
}var d=function(l){var j=l.charAt(0).toUpperCase()+l.slice(1);
var i=e+j;
var k=e==="ms"?"Ms"+j:i;
f.cssHooks[j]=f.cssHooks[e.toLowerCase()+j]=f.cssHooks[l]={get:function(n,m){return m?f.css(n,k):n.style[i]
},set:function(m,n){m.style[i]=n
}}
};
for(var h=0,c=a.length;
h<c;
h++){d(a[h])
}return{vendorPrefix:e,setCssHooks:d}
});
eg.module("persist",["jQuery",eg,window,document],function(f,v,m,u){var c=m.performance;
var h=m.history;
var b=m.location;
var t=m.navigator.userAgent;
var d=m.JSON;
var j="___persist___";
var e="KEY"+j;
var q=f(m);
var n=q.attr(j)===true;
var a=(c&&c.navigation&&(c.navigation.type===(c.navigation.TYPE_BACK_FORWARD||2)));
var g="replaceState" in h&&"state" in h;
var o=(function(){if(!g){if("sessionStorage" in m){var w="__tmp__"+j;
sessionStorage.setItem(w,j);
return sessionStorage.getItem(w)===j?sessionStorage:localStorage
}else{return m.localStorage
}}})();
if(!g&&!o||(!d&&!console.warn("The JSON object is not supported in your browser.\nFor work around use polyfill which can be found at:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#Polyfill"))){return
}function p(w){n=n||(w.originalEvent&&w.originalEvent.persisted);
if(!n&&a){q.trigger("persist")
}else{r()
}}function r(){k(null)
}function l(){var w;
var x={};
if(g){w=h.state;
if(typeof w==="string"&&w!=="null"){try{x=d.parse(w);
if(jQuery.type(x)!=="object"||x instanceof Array){throw new Error("Window.history is not valid form for persist.")
}}catch(y){console.warn(y.message)
}}return x
}else{w=o.getItem(b.href+j);
return(w&&w.length>0)?d.parse(w):{}
}}function s(x){var w=l()[x];
if(w==="null"||typeof w==="undefined"){w=null
}return w
}function k(w){if(g){h.replaceState(d.stringify(w),u.title,b.href)
}else{if(w){o.setItem(b.href+j,d.stringify(w))
}else{o.removeItem(b.href+j)
}}w?q.attr(j,true):q.attr(j,null)
}function i(x,y){var w=l();
w[x]=y;
k(w)
}f.persist=function(y){var w;
var x;
if(typeof y==="string"){w=y;
x=arguments.length===2?arguments[1]:null
}else{w=e;
x=arguments.length===1?y:null
}x&&i(w,x);
return s(w)
};
f.persist.isNeeded=function(){var x=v.agent(t).os;
var w=true;
if(x.name==="ios"||(x.name==="android"&&parseFloat(x.version)<4.4)){w=false
}f.persist.isNeeded=function(){return w
};
return w
};
!a&&r();
f.event.special.persist={setup:function(){q.on("pageshow",p)
},teardown:function(){q.off("pageshow",p)
},trigger:function(w){w.state=s(e)
}};
return{isBackForwardNavigated:a,onPageshow:p,reset:r,getState:l,setState:k,persist:f.persist,isNeeded:f.persist.isNeeded,GLOBALKEY:e}
});
eg.module("class",[eg],function(a){a.Class=function(c){var b=function b(){if(typeof c.construct==="function"){c.construct.apply(this,arguments)
}};
b.prototype=c;
b.prototype.constructor=b;
return b
};
a.Class.extend=function(f,g){var d=function d(){f.apply(this,arguments);
if(typeof g.construct==="function"){g.construct.apply(this,arguments)
}};
var c=function(){};
c.prototype=f.prototype;
var b=new c();
for(var e in g){b[e]=g[e]
}b.constructor=d;
d.prototype=b;
return d
}
});
eg.module("component",[eg],function(a){a.Component=a.Class({construct:function(){this.eventHandler={}
},option:function(c,d){if(arguments.length>=2){this.options[c]=d;
return this
}if(typeof c==="string"){return this.options[c]
}if(arguments.length===0){return this.options
}for(var b in c){this.options[b]=c[b]
}return this
},trigger:function(d,f){f=f||{};
var g=this.eventHandler[d]||[];
var j=g.length>0;
if(!j){return true
}g=g.concat();
f.eventType=d;
var b=false;
var k=[f];
var c;
var e;
var h;
f.stop=function(){b=true
};
if((e=arguments.length)>2){k=k.concat(Array.prototype.slice.call(arguments,2,e))
}for(c=0;
h=g[c];
c++){h.apply(this,k)
}return !b
},hasOn:function(b){return !!this.eventHandler[b]
},on:function(b,c){if(typeof b==="object"&&typeof c==="undefined"){var f=b;
var d;
for(d in f){this.on(d,f[d])
}return this
}else{if(typeof b==="string"&&typeof c==="function"){var e=this.eventHandler[b];
if(typeof e==="undefined"){e=this.eventHandler[b]=[]
}e.push(c)
}}return this
},off:function(c,h){if(arguments.length===0){this.eventHandler={};
return this
}if(typeof h==="undefined"){if(typeof c==="string"){this.eventHandler[c]=undefined;
return this
}else{var f=c;
for(var d in f){this.off(d,f[d])
}return this
}}var e=this.eventHandler[c];
if(e){var b;
var g;
for(b=0,g;
g=e[b];
b++){if(g===h){e=e.splice(b,1);
break
}}}return this
},instance:function(){return this
}})
});
eg.module("visible",["jQuery",eg,document],function(c,b,d){var a={change:"change"};
b.Visible=b.Class.extend(b.Component,{_events:function(){return a
},construct:function(f,e){this.options={targetClass:"check_visible",expandSize:0};
c.extend(this.options,e);
this._wrapper=c(f)[0]||d;
if(this._wrapper.nodeType&&this._wrapper.nodeType===1){this._getAreaRect=this._getWrapperRect
}else{this._getAreaRect=this._getWindowRect
}this._targets=[];
this._timer=null;
this._supportElementsByClassName=(function(){var h=d.createElement("div");
var g;
if(!h.getElementsByClassName){return false
}g=h.getElementsByClassName("dummy");
h.innerHTML="<span class='dummy'></span>";
return g.length===1
})();
this.refresh()
},refresh:function(){if(this._supportElementsByClassName){this._targets=this._wrapper.getElementsByClassName(this.options.targetClass);
this.refresh=function(){return this
}
}else{this.refresh=function(){this._targets=c(this._wrapper).find("."+this.options.targetClass).get();
return this
}
}return this.refresh()
},check:function(e){if(typeof e==="undefined"){e=-1
}clearTimeout(this._timer);
if(e<0){this._check()
}else{this._timer=setTimeout(c.proxy(function(){this._check();
this._timer=null
},this),e)
}return this
},_getWrapperRect:function(){return this._wrapper.getBoundingClientRect()
},_getWindowRect:function(){return{top:0,left:0,bottom:d.documentElement.clientHeight||d.body.clientHeight,right:d.documentElement.clientWidth||d.body.clientWidth}
},_reviseElements:function(f,e){if(this._supportElementsByClassName){this._reviseElements=function(){return true
}
}else{this._reviseElements=function(h,g){if(!c(h).hasClass(this.options.targetClass)){h.__VISIBLE__=null;
this._targets.splice(g,1);
return false
}return true
}
}return this._reviseElements(f,e)
},_check:function(){var g=parseInt(this.options.expandSize,10);
var m=[];
var h=[];
var f=this._getAreaRect();
f=c.extend({},f);
f.top-=g;
f.left-=g;
f.bottom+=g;
f.right+=g;
for(var j=this._targets.length-1,l,k,e,n;
l=this._targets[j];
j--){k=l.getBoundingClientRect();
if(this._reviseElements(l,j)){n=!!l.__VISIBLE__;
l.__VISIBLE__=e=!(k.bottom<f.top||f.bottom<k.top||k.right<f.left||f.right<k.left);
(n!==e)&&(e?m:h).unshift(l)
}}this.trigger(a.change,{visible:m,invisible:h})
},destroy:function(){this.off();
this._targets=[];
this._wrapper=this._timer=null
}});
b.Visible._events=function(){return a
}
});
eg.module("movableCoord",["jQuery",eg,"Hammer"],function(d,c,b){var a=("ontouchstart" in window);
c.MovableCoord=c.Class.extend(c.Component,{construct:function(e){this.options={min:[0,0],max:[100,100],bounce:[10,10,10,10],margin:[0,0,0,0],circular:[false,false,false,false],easing:d.easing.easeOutCubic,maximumDuration:Infinity,deceleration:0.0006};
this._reviseOptions(e);
this._status={grabOutside:false,curHammer:null,moveDistance:null,animationParam:null,prevented:false};
this._hammers={};
this._pos=[this.options.min[0],this.options.min[1]];
this._subOptions={};
this._raf=null;
this._animationEnd=d.proxy(this._animationEnd,this);
this._panmove=d.proxy(this._panmove,this);
this._panend=d.proxy(this._panend,this)
},bind:function(h,f){var g=d(h);
var i=g.data(c.MovableCoord.KEY);
var j={direction:c.DIRECTION_ALL,scale:[1,1],thresholdAngle:45,interruptable:true,inputType:["touch","mouse"]};
d.extend(j,f);
var e=this._convertInputType(j.inputType);
if(!e){return this
}if(i){this._hammers[i].get("pan").set({direction:j.direction})
}else{i=Math.round(Math.random()*new Date().getTime());
this._hammers[i]=this._createHammer(g.get(0),j,e);
g.data(c.MovableCoord.KEY,i)
}return this
},_createHammer:function(h,j,f){try{var g=new b.Manager(h,{recognizers:[[b.Tap,{time:30000}],[b.Pan,{direction:j.direction,threshold:0},["tap"]]],cssProps:{},inputClass:f});
return g.on("hammer.input",d.proxy(function(k){if(k.isFirst){this._subOptions=j;
this._status.curHammer=g;
this._panstart(k)
}},this)).on("panstart panmove",this._panmove).on("panend tap",this._panend)
}catch(i){}},_convertInputType:function(f){var g=false;
var e=false;
f=f||[];
d.each(f,function(j,h){switch(h){case"mouse":e=true;
break;
case"touch":g=a;
break
}});
if(g){return b.TouchInput
}if(e){return b.MouseInput
}return null
},unbind:function(g){var f=d(g);
var e=f.data(c.MovableCoord.KEY);
if(e){this._hammers[e].destroy();
delete this._hammers[e];
f.data(c.MovableCoord.KEY,null)
}return this
},_grab:function(){if(this._status.animationParam){this._pos=this._getCircularPos(this._pos);
this._triggerChange(this._pos,true);
this._status.animationParam=null;
this._raf&&c.cancelAnimationFrame(this._raf);
this._raf=null
}},_getCircularPos:function(h,f,e,g){f=f||this.options.min;
e=e||this.options.max;
g=g||this.options.circular;
if(g[0]&&h[1]<f[1]){h[1]=(h[1]-f[1])%(e[1]-f[1]+1)+e[1]
}if(g[1]&&h[0]>e[0]){h[0]=(h[0]-f[0])%(e[0]-f[0]+1)+f[0]
}if(g[2]&&h[1]>e[1]){h[1]=(h[1]-f[1])%(e[1]-f[1]+1)+f[1]
}if(g[3]&&h[0]<f[0]){h[0]=(h[0]-f[0])%(e[0]-f[0]+1)+e[0]
}h[0]=+h[0].toFixed(5),h[1]=+h[1].toFixed(5);
return h
},_isOutside:function(g,f,e){return g[0]<f[0]||g[1]<f[1]||g[0]>e[0]||g[1]>e[1]
},_isOutToOut:function(h,f,g,e){return(h[0]<g[0]||h[0]>e[0]||h[1]<g[1]||h[1]>e[1])&&(f[0]<g[0]||f[0]>e[0]||f[1]<g[1]||f[1]>e[1])
},_panstart:function(f){if(!this._subOptions.interruptable&&this._status.prevented){return
}this._setInterrupt(true);
var g=this._pos;
this._grab();
this.trigger("hold",{pos:g.concat(),hammerEvent:f});
this._status.moveDistance=g.concat();
this._status.grabOutside=this._isOutside(g,this.options.min,this.options.max)
},_panmove:function(n){if(!this._isInterrupting()||!this._status.moveDistance){return
}var m;
var s;
var j;
var p=this._pos;
var i=this.options.min;
var q=this.options.max;
var u=this.options.bounce;
var g=this.options.margin;
var r=this._subOptions.direction;
var f=this._subOptions.scale;
var t=this._getDirection(n.angle);
var h=[g[0]+u[0],g[1]+u[1],g[2]+u[2],g[3]+u[3]];
var o=false;
var l=this._status.curHammer.session.prevInput;
if(l){n.offsetX=n.deltaX-l.deltaX;
n.offsetY=n.deltaY-l.deltaY
}else{n.offsetX=n.offsetY=0
}if(r===c.DIRECTION_ALL||(r&c.DIRECTION_HORIZONTAL&&t&c.DIRECTION_HORIZONTAL)){this._status.moveDistance[0]+=(n.offsetX*f[0]);
o=true
}if(r===c.DIRECTION_ALL||(r&c.DIRECTION_VERTICAL&&t&c.DIRECTION_VERTICAL)){this._status.moveDistance[1]+=(n.offsetY*f[1]);
o=true
}if(o){n.srcEvent.preventDefault();
n.srcEvent.stopPropagation()
}n.preventSystemEvent=o;
p[0]=this._status.moveDistance[0];
p[1]=this._status.moveDistance[1];
p=this._getCircularPos(p,i,q);
if(this._status.grabOutside&&!this._isOutside(p,i,q)){this._status.grabOutside=false
}if(this._status.grabOutside){s=i[0]-h[3],j=q[0]+h[1],m=p[0];
p[0]=m>j?j:(m<s?s:m);
s=i[1]-h[0],j=q[1]+h[2],m=p[1];
p[1]=m>j?j:(m<s?s:m)
}else{var k=this._initSlope();
if(p[1]<i[1]){m=(i[1]-p[1])/(h[0]*k);
p[1]=i[1]-this._easing(m)*h[0]
}else{if(p[1]>q[1]){m=(p[1]-q[1])/(h[2]*k);
p[1]=q[1]+this._easing(m)*h[2]
}}if(p[0]<i[0]){m=(i[0]-p[0])/(h[3]*k);
p[0]=i[0]-this._easing(m)*h[3]
}else{if(p[0]>q[0]){m=(p[0]-q[0])/(h[1]*k);
p[0]=q[0]+this._easing(m)*h[1]
}}}this._triggerChange(p,true,n)
},_panend:function(i){var k=this._pos;
if(!this._isInterrupting()||!this._status.moveDistance){return
}if(i.type==="tap"){this._setInterrupt(false);
this.trigger("release",{depaPos:k.concat(),destPos:k.concat(),hammerEvent:i||null})
}else{var h=this._subOptions.direction;
var j=this._subOptions.scale;
var g=Math.abs(i.velocityX);
var f=Math.abs(i.velocityY);
!(h&c.DIRECTION_HORIZONTAL)&&(g=0);
!(h&c.DIRECTION_VERTICAL)&&(f=0);
this._animateBy(this._getNextOffsetPos([g*(i.deltaX<0?-1:1)*j[0],f*(i.deltaY<0?-1:1)*j[1]]),this._animationEnd,false,null,i)
}this._status.moveDistance=null
},_isInterrupting:function(){return this._subOptions.interruptable||this._status.prevented
},_getDirection:function(f){var e=this._subOptions.thresholdAngle;
if(e<0||e>90){return c.DIRECTION_NONE
}f=Math.abs(f);
return f>e&&f<180-e?c.DIRECTION_VERTICAL:c.DIRECTION_HORIZONTAL
},_animationEnd:function(){var g=this._pos;
var f=this.options.min;
var e=this.options.max;
this._animateTo([Math.min(e[0],Math.max(f[0],g[0])),Math.min(e[1],Math.max(f[1],g[1]))],d.proxy(this.trigger,this,"animationEnd"),true,null)
},_getNextOffsetPos:function(f){var e=Math.sqrt(f[0]*f[0]+f[1]*f[1]);
var g=Math.abs(e/-this.options.deceleration);
return[f[0]/2*g,f[1]/2*g]
},_getDurationFromPos:function(g){var e=Math.sqrt(g[0]*g[0]+g[1]*g[1]);
var f=Math.sqrt(e/this.options.deceleration*2);
return f<100?0:f
},_animateBy:function(i,k,f,h,g){var j=this._pos;
return this._animateTo([j[0]+i[0],j[1]+i[1]],k,f,h,g)
},_getPointOfIntersection:function(m,i){var k=this.options.circular;
var n=this.options.bounce;
var f=this.options.min;
var j=this.options.max;
var g=[f[0]-n[3],f[1]-n[0]];
var e=[j[0]+n[1],j[1]+n[2]];
var l;
var h;
i=[i[0],i[1]];
l=i[0]-m[0],h=i[1]-m[1];
if(!k[3]){i[0]=Math.max(g[0],i[0])
}if(!k[1]){i[0]=Math.min(e[0],i[0])
}i[1]=l?m[1]+h/l*(i[0]-m[0]):i[1];
if(!k[0]){i[1]=Math.max(g[1],i[1])
}if(!k[2]){i[1]=Math.min(e[1],i[1])
}i[0]=h?m[0]+l/h*(i[1]-m[1]):i[0];
return i
},_isCircular:function(h,f,g,e){return(h[0]&&f[1]<g[1])||(h[1]&&f[0]>e[0])||(h[2]&&f[1]>e[1])||(h[3]&&f[0]<g[0])
},_animateTo:function(f,m,h,j,i){var l=this._pos;
var g=this._getPointOfIntersection(l,f);
var k={depaPos:l.concat(),destPos:g,hammerEvent:i||null};
if(!h&&i){this.trigger("release",k)
}this._afterReleaseProcess(k,m,h,j)
},_afterReleaseProcess:function(g,t,o,j){var q=this._pos;
var l=this.options.min;
var r=this.options.max;
var s=this.options.circular;
var i=this._isCircular(s,g.destPos,l,r);
var p=this._isOutToOut(q,g.destPos,l,r)?q:g.destPos;
var e=[Math.abs(p[0]-q[0]),Math.abs(p[1]-q[1])];
var h;
j=j===null?this._getDurationFromPos(e):j;
j=this.options.maximumDuration>j?j:this.options.maximumDuration;
var k=d.proxy(function(v){this._status.animationParam=null;
q[0]=Math.round(p[0]);
q[1]=Math.round(p[1]);
q=this._getCircularPos(q,l,r,s);
!v&&this._setInterrupt(false);
t()
},this);
if(e[0]===0&&e[1]===0){return k(!o)
}h={duration:j,depaPos:q.concat(),destPos:p,isBounce:o,isCircular:i,done:k,hammerEvent:g.hammerEvent};
var m=this.trigger("animationStart",h);
if(i&&!m){throw new Error("You can't stop the 'animation' event when 'circular' is true.")
}h.depaPos=q;
h.startTime=new Date().getTime();
this._status.animationParam=h;
if(m){if(h.duration){var f=this._status.animationParam;
var u=this;
(function n(){u._raf=null;
if(u._frame(f)>=1){return k(true)
}u._raf=c.requestAnimationFrame(n)
})()
}else{this._triggerChange(h.destPos,false);
k(!o)
}}},_frame:function(h){var g=new Date()-h.startTime;
var e=this._easing(g/h.duration);
var j=[h.depaPos[0],h.depaPos[1]];
for(var f=0;
f<2;
f++){(j[f]!==h.destPos[f])&&(j[f]+=(h.destPos[f]-j[f])*e)
}j=this._getCircularPos(j);
this._triggerChange(j,false);
return e
},_reviseOptions:function(e){var f;
d.each(["bounce","margin","circular"],function(h,g){f=e[g];
if(f!=null){if(d.isArray(f)){if(f.length===2){e[g]=[f[0],f[1],f[0],f[1]]
}else{e[g]=[f[0],f[1],f[2],f[3]]
}}else{if(/string|number|boolean/.test(typeof f)){e[g]=[f,f,f,f]
}else{e[g]=null
}}}});
d.extend(this.options,e)
},_triggerChange:function(h,g,f){this._pos=h.concat();
this.trigger("change",{pos:h.concat(),holding:g,hammerEvent:f||null})
},get:function(){return this._pos.concat()
},setTo:function(f,k,i){this._grab();
var j=this._pos.concat();
var h=this.options.circular;
var g=this.options.min;
var e=this.options.max;
if(f===j[0]&&k===j[1]){return this
}this._setInterrupt(true);
if(f!==j[0]){if(!h[3]){f=Math.max(g[0],f)
}if(!h[1]){f=Math.min(e[0],f)
}}if(k!==j[1]){if(!h[0]){k=Math.max(g[1],k)
}if(!h[2]){k=Math.min(e[1],k)
}}if(i){this._animateTo([f,k],this._animationEnd,false,i)
}else{this._pos=this._getCircularPos([f,k]);
this._triggerChange(this._pos,false);
this._setInterrupt(false)
}return this
},setBy:function(e,g,f){return this.setTo(e!=null?this._pos[0]+e:this._pos[0],g!=null?this._pos[1]+g:this._pos[1],f)
},_easing:function(e){if(e>1){return 1
}else{return this.options.easing(e,e,0,1,1)
}},_initSlope:function(){var g=this.options.easing;
var f=false;
var e;
for(e in d.easing){if(d.easing[e]===g){f=!~e.indexOf("Out");
break
}}return f?g(0.9999,0.9999,0,1,1)/0.9999:g(0.00001,0.00001,0,1,1)/0.00001
},_setInterrupt:function(e){!this._subOptions.interruptable&&(this._status.prevented=e)
},destroy:function(){this.off();
for(var e in this._hammers){this._hammers[e].destroy();
this._hammers[e]=null
}}});
c.MovableCoord.KEY="__MOVABLECOORD__"
});
eg.module("flicking",["jQuery",eg,window,document,eg.MovableCoord],function(d,g,a,h,b){var f={beforeFlickStart:"beforeFlickStart",beforeRestore:"beforeRestore",flick:"flick",flickEnd:"flickEnd",restore:"restore"};
var c=h.documentElement.style;
c="transform" in c||"webkitTransform" in c;
var e=a.CSS&&a.CSS.supports&&a.CSS.supports("will-change","transform");
var i=g.agent().os;
i=i.name==="android"&&/^2\./.test(i.version);
g.Flicking=g.Class.extend(g.Component,{_events:function(){return f
},construct:function(k,j){this.$wrapper=d(k);
d.extend(this.options={hwAccelerable:g.isHWAccelerable(),prefix:"eg-flick",deceleration:0.0006,horizontal:true,circular:false,previewPadding:[0,0],threshold:40,duration:100,panelEffect:d.easing.easeOutCubic,defaultIndex:0,inputType:["touch","mouse"]},j);
var l=this.options.previewPadding;
if(typeof l==="number"){l=this.options.previewPadding=[l,l]
}else{if(l.constructor!==Array){l=this.options.previewPadding=[0,0]
}}this._conf={panel:{$list:[],index:0,no:0,size:0,count:0,origCount:0,changed:false,animating:false,minCount:l[0]+l[1]>0?5:3},touch:{holdPos:[0,0],destPos:[0,0],distance:0,direction:null},customEvent:{},useLayerHack:this.options.hwAccelerable&&!e,dirData:[],indexToMove:0,triggerFlickEvent:true,$dummyAnchor:null};
d([["LEFT","RIGHT"],["DOWN","UP"]][+!this.options.horizontal]).each(d.proxy(function(n,m){this._conf.dirData.push(g["DIRECTION_"+m])
},this));
!g._hasClickBug()&&(this._setPointerEvents=function(){});
this._build();
this._bindEvents();
this._applyPanelsCss();
this._arrangePanels();
this.options.hwAccelerable&&e&&this._setHint();
this._adjustContainerCss("end")
},_build:function(){var j=this._conf.panel;
var r=this.options;
var l=j.$list=this.$wrapper.children();
var q=r.previewPadding.concat();
var o=r.prefix;
var k=r.horizontal;
var m=j.count=j.origCount=l.length;
var p=[j.size=this.$wrapper[k?"width":"height"]()-(q[0]+q[1]),"100%"];
var n;
this.$wrapper.css({padding:(k?"0 "+q.reverse().join("px 0 "):q.join("px 0 "))+"px",overflow:"hidden"});
this._getDataByDirection(p);
l.addClass(o+"-panel").css({position:"absolute",width:p[0],height:p[1],top:0,left:0});
n="position:relative;z-index:2000;width:100%;height:100%;"+(!k?"top:"+q[0]+"px;":"");
this.$container=l.wrapAll("<div class='"+o+"-container' style='"+n+"' />").parent();
if(this._addClonePanels()){m=j.count=(j.$list=this.$container.children()).length
}this._mcInst=new b({min:[0,0],max:this._getDataByDirection([j.size*(m-1),0]),margin:0,circular:false,easing:r.panelEffect,deceleration:r.deceleration}).bind(this.$wrapper,{scale:this._getDataByDirection([-1,0]),direction:g["DIRECTION_"+(k?"HORIZONTAL":"VERTICAL")],interruptable:false,inputType:r.inputType});
this._setDefaultPanel(r.defaultIndex)
},_addClonePanels:function(){var k=this._conf.panel;
var n=k.origCount;
var j=k.minCount-n;
var l=k.$list;
var m;
if(this.options.circular&&n<k.minCount){m=l.clone();
while(m.length<j){m=m.add(l.clone())
}return this.$container.append(m)
}},_movePanelPosition:function(m,j){var k=this._conf.panel;
var n=k.$list.toArray();
var l;
l=n.splice(j?0:k.count-m,m);
k.$list=d(j?n.concat(l):l.concat(n))
},_setDefaultPanel:function(k){var j=this._conf.panel;
var m=j.count-1;
var l;
if(this.options.circular){if(k>0&&k<=m){this._movePanelPosition(k,true)
}this._movePanelPosition(this._getBasePositionIndex(),false);
j.no=k
}else{if(k>0&&k<=m){j.index=k;
l=[-(j.size*k),0];
this._setTranslate(l);
this._setMovableCoord("setTo",[Math.abs(l[0]),Math.abs(l[1])],true,0)
}}},_arrangePanels:function(l,o){var k=this._conf;
var j=k.panel;
var n=k.touch;
var m=k.dirData;
if(this.options.circular){k.triggerFlickEvent=false;
if(l){o&&(n.direction=m[+!Boolean(o>0)]);
this._arrangePanelPosition(n.direction,o)
}j.index=this._getBasePositionIndex();
k.triggerFlickEvent=!!this._setMovableCoord("setTo",[j.size*j.index,0],true,0)
}this._applyPanelsPos()
},_applyPanelsPos:function(){this._conf.panel.$list.each(d.proxy(this._applyPanelsCss,this))
},_setMoveStyle:(function(){return c?function(j,k){j.css("transform",g.translate(k[0],k[1],this._conf.useLayerHack))
}:function(j,k){j.css({left:k[0],top:k[1]})
}
})(),_applyPanelsCss:function(){var j=this._conf;
var k="__dummy_anchor";
if(i){j.$dummyAnchor=d("."+k);
!j.$dummyAnchor.length&&this.$wrapper.append(j.$dummyAnchor=d("<a href='javascript:void(0);' class='"+k+"' style='position:absolute;height:0px;width:0px;'>"));
this._applyPanelsCss=function(m,l){var n=this._getDataByDirection([(this._conf.panel.size*m)+"px",0]);
d(l).css({left:n[0],top:n[1]})
}
}else{this._applyPanelsCss=function(m,l){var n=this._getDataByDirection([c?(100*m)+"%":(this._conf.panel.size*m)+"px",0]);
this._setMoveStyle(d(l),n)
}
}},_adjustContainerCss:function(p,n){var m=this._conf;
var j=m.panel;
var r=this.options;
var k=r.horizontal;
var q=r.previewPadding[0];
var l=this.$container;
var o;
if(i){if(!n){n=[-j.size*j.index,0]
}if(p==="start"){l=l[0].style;
o=parseInt(l[k?"left":"top"],10);
if(k){o&&(l.left=0)
}else{o!==q&&(l.top=q+"px")
}this._setTranslate([-n[+!r.horizontal],0])
}else{if(p==="end"){!k&&(n[0]+=q);
n=this._getCoordsValue(n);
l.css({left:n.x,top:n.y,transform:g.translate(0,0,m.useLayerHack)});
m.$dummyAnchor[0].focus()
}}}},_setMovableCoord:function(m,l,j,k){j&&this._getDataByDirection(l);
return this._mcInst[m](l[0],l[1],k)
},_setHint:function(){var j="transform";
this.$container.css("willChange",j);
this._conf.panel.$list.css("willChange",j)
},_getDataByDirection:function(j){!this.options.horizontal&&j.reverse();
return j
},_arrangePanelPosition:function(k,l){var j=k===this._conf.dirData[0];
this._movePanelPosition(Math.abs(l||1),j)
},_getBasePositionIndex:function(){var j=this._conf.panel;
return j.index=Math.floor(j.count/2-0.1)
},_bindEvents:function(){this._mcInst.on({hold:d.proxy(this._holdHandler,this),change:d.proxy(this._changeHandler,this),release:d.proxy(this._releaseHandler,this),animationStart:d.proxy(this._animationStartHandler,this),animationEnd:d.proxy(this._animationEndHandler,this)})
},_holdHandler:function(j){this._conf.touch.holdPos=j.pos;
this._conf.panel.changed=false;
this._adjustContainerCss("start",j.pos)
},_changeHandler:function(k){var l=k.pos;
var j=null;
this._setPointerEvents(k);
this._conf.triggerFlickEvent&&(j=this._triggerEvent(f.flick,{pos:k.pos,holding:k.holding}));
(j||j===null)&&this._setTranslate([-l[+!this.options.horizontal],0])
},_releaseHandler:function(m){var o=this._conf.touch;
var n=m.destPos;
var l=+!this.options.horizontal;
var k=o.holdPos[l];
var j=this._conf.panel.size;
o.distance=m.depaPos[l]-o.holdPos[l];
o.direction=this._conf.dirData[+!Boolean(o.holdPos[l]<m.depaPos[l])];
n[l]=Math.max(k-j,Math.min(k,n[l]));
o.destPos[l]=n[l]=Math.round(n[l]/j)*j;
o.distance===0&&this._adjustContainerCss("end");
this._setPointerEvents()
},_animationStartHandler:function(l){var k=this._conf;
var j=k.panel;
var m={depaPos:l.depaPos,destPos:l.destPos};
j.animating=true;
if(this._setPhaseValue("start",m)===false){l.stop()
}l.hammerEvent&&(l.duration=this.options.duration);
l.destPos[+!this.options.horizontal]=j.size*(j.index+this._conf.indexToMove);
if(this._isMovable()){k.customEvent.restore=false
}else{k.customEvent.restore=this._triggerEvent(f.beforeRestore,m);
if(!k.customEvent.restore){l.stop();
j.animating=false
}}},_animationEndHandler:function(){var j=this._conf.panel;
this._setPhaseValue("end");
j.animating=false;
this._conf.customEvent.restore&&this._triggerEvent(f.restore)
},_setPhaseValue:function(k,n){var m=this._conf;
var l=this.options;
var j=m.panel;
if(k==="start"&&(j.changed=this._isMovable())){m.indexToMove===0&&this._setPanelNo();
if(!this._triggerEvent(f.beforeFlickStart,n)){return j.changed=j.animating=false
}}else{if(k==="end"){if(l.circular&&j.changed){this._arrangePanels(true,m.indexToMove)
}!i&&this._setTranslate([-j.size*j.index,0]);
m.touch.distance=m.indexToMove=0;
j.changed&&this._triggerEvent(f.flickEnd)
}}!(k==="start"&&n===undefined)&&this._adjustContainerCss(k)
},_setPanelNo:function(j){var k=this._conf.panel;
var m=k.origCount-1;
var l=this._conf.touch.direction===this._conf.dirData[0]?1:-1;
if(j){k.index-=l;
k.no-=l
}else{k.index+=l;
k.no+=l
}if(k.no>m){k.no=0
}else{if(k.no<0){k.no=m
}}},_setPointerEvents:function(j){var l=this.$container.css("pointerEvents");
var k;
if(j&&j.holding&&j.hammerEvent&&j.hammerEvent.preventSystemEvent&&l!=="none"){k="none"
}else{if(!j&&l!=="auto"){k="auto"
}}k&&this.$container.css("pointerEvents",k)
},_getCoordsValue:function(j){this._getDataByDirection(j);
return{x:this._getUnitValue(j[0]),y:this._getUnitValue(j[1])}
},_setTranslate:function(k){var j=this.options;
if(!c&&!j.horizontal){k[0]+=j.previewPadding[0]
}k=this._getCoordsValue(k);
this._setMoveStyle(this.$container,[k.x,k.y])
},_getUnitValue:function(k){var j=/(?:[a-z]{2,}|%)$/;
return(parseInt(k,10)||0)+(String(k).match(j)||"px")
},_isMovable:function(){return Math.abs(this._conf.touch.distance)>=this.options.threshold
},_triggerEvent:function(k,l){var j=this._conf.panel;
return this.trigger(k,l=d.extend({eventType:k,index:j.index,no:j.no,direction:this._conf.touch.direction},l))
},_getElement:function(r,l,k){var j=this._conf.panel;
var s=this.options.circular;
var q=j.index;
var m=r===this._conf.dirData[0];
var t=null;
var p;
var n;
var o;
if(k){p=j.count;
n=q
}else{p=j.origCount;
n=j.no
}o=n;
if(m){if(n<p-1){n++
}else{if(s){n=0
}}}else{if(n>0){n--
}else{if(s){n=p-1
}}}if(o!==n){t=l?d(j.$list[m?q+1:q-1]):n
}return t
},_setValueToMove:function(j){this._conf.touch.distance=this.options.threshold+1;
this._conf.touch.direction=this._conf.dirData[+!j]
},_getNumValue:function(k,j){return isNaN(k=parseInt(k,10))?j:k
},getIndex:function(j){return this._conf.panel[j?"index":"no"]
},getElement:function(){var j=this._conf.panel;
return d(j.$list[j.index])
},getNextElement:function(){return this._getElement(this._conf.dirData[0],true)
},getNextIndex:function(j){return this._getElement(this._conf.dirData[0],false,j)
},getAllElements:function(){return this._conf.panel.$list
},getPrevElement:function(){return this._getElement(this._conf.dirData[1],true)
},getPrevIndex:function(j){return this._getElement(this._conf.dirData[1],false,j)
},getTotalCount:function(j){return this._conf.panel[j?"count":"origCount"]
},isPlaying:function(){return this._conf.panel.animating
},_movePanel:function(l,m){var j=this._conf.panel;
var k=this.options;
if(j.animating){return
}m=this._getNumValue(m,k.duration);
this._setValueToMove(l);
if(k.circular||this[l?"getNextIndex":"getPrevIndex"]()!=null){this._movePanelByPhase("setBy",[j.size*(l?1:-1),0],m)
}return this
},_movePanelByPhase:function(l,j,k){!k&&this._setPhaseValue("start");
this._setMovableCoord(l,j,true,k);
!k&&this._setPhaseValue("end")
},next:function(j){return this._movePanel(true,j)
},prev:function(j){return this._movePanel(false,j)
},moveTo:function(p,o){var k=this._conf.panel;
var l=this.options;
var j=k.index;
var q=0;
var m;
var n;
p=this._getNumValue(p);
if(typeof p!=="number"||p>=k.origCount||p===k.no||k.animating){return this
}o=this._getNumValue(o,l.duration);
n=l.circular||p>=0&&p<k.origCount;
if(l.circular){m=[j,k.count-(j+1)];
if(p>k.no){q=p-k.no;
if(q>m[1]){q=-(m[0]+1-(q-m[1]))
}}else{q=-(k.no-p);
if(Math.abs(q)>m[0]){q=m[1]+1-(Math.abs(q)-m[0])
}}k.no=p;
this._conf.indexToMove=q;
this._setValueToMove(q>0);
this._movePanelByPhase("setBy",[k.size*q,0],o)
}else{if(n){k.no=k.index=p;
this._movePanelByPhase("setTo",[k.size*p,0],o)
}}return this
},resize:function(){var l=this._conf;
var j=l.panel;
var m=j.size=this.$wrapper.width();
var k=[m*(j.count-1),0];
this.$container.width(k[0]+m);
j.$list.css("width",m);
this._mcInst.options.max=k;
this._setMovableCoord("setTo",[m*j.index,0],true,0);
if(i){this._applyPanelsPos();
this._adjustContainerCss("end")
}return this
},restore:function(){var k=this._conf;
var j=k.panel;
var l=this._getDataByDirection(this._mcInst.get())[0];
if(l%j.size){this._setPanelNo(true);
this._setMovableCoord("setTo",[j.size*j.index,0],true,0);
this._adjustContainerCss("end")
}return this
}})
});
eg.module("infiniteGrid",["jQuery",eg,window,"Outlayer"],function(c,l,a,f){if(!f){l.InfiniteGrid=l.Class({});
return
}var h=!!a.addEventListener;
var k=h?"":"on";
var d=h?"addEventListener":"attachEvent";
var b=h?"removeEventListener":"detachEvent";
function m(n,o){n[d](k+"load",o,true);
n[d](k+"error",o,true)
}function e(n,o){n[b](k+"load",o,true);
n[b](k+"error",o,true)
}function j(q,o,p){var n;
c.each(p,function(s,r){n=o[r];
if(n!=null){if(c.isArray(n)){q[r]=c.merge([],n)
}else{if(c.isPlainObject(n)){q[r]=c.extend(true,{},n)
}else{q[r]=n
}}}});
return q
}var i=f.create("InfiniteGrid");
c.extend(i.prototype,{_resetLayout:function(){if(!this._isLayoutInited){this._registGroupKey(this.options.defaultGroupKey,this.items)
}this.element.style.width=null;
this.getSize();
this._measureColumns()
},_getContainerSize:function(){return{height:Math.max.apply(Math,this._appendCols),width:this.size.innerWidth}
},_getItemLayoutPosition:function(o){if(this._equalItemSize){o.size=this._equalItemSize
}else{o.getSize()
}(o.isAppend==null)&&(o.isAppend=true);
var r;
var n;
var q=o.isAppend;
var p=q?this._appendCols:this._prependCols;
r=Math[q?"min":"max"].apply(Math,p);
n=c.inArray(r,p);
p[n]=r+(q?o.size.outerHeight:-o.size.outerHeight);
return{x:this.columnWidth*n,y:q?r:r-o.size.outerHeight}
},resetLayout:function(){this._resetLayout();
this._isLayoutInited=true
},updateCols:function(t){var p=t?this._appendCols:this._prependCols;
var o=this.getColItems(t);
var s=this._isFitted||t?0:this._getMinY(o);
var q=0;
var n=p.length;
var r;
for(;
q<n;
q++){if(r=o[q]){p[q]=r.position.y+(t?r.size.outerHeight:-s)
}else{p[q]=0
}}return s
},_getMinY:function(n){return Math.min.apply(Math,c.map(n,function(o){return o?o.position.y:0
}))
},_measureColumns:function(){var p=this.size.innerWidth;
var o=this._getColumnWidth();
var q=p/o;
var n=o-p%o;
q=Math.max(Math[n&&n<1?"round":"floor"](q),1);
this._appendCols=[];
this._prependCols=[];
while(q--){this._appendCols.push(0);
this._prependCols.push(0)
}},_getColumnWidth:function(){var o=this.items[0]&&this.items[0].element;
var n;
if(o){n=getSize(o)
}else{n={outerWidth:0,outerHeight:0}
}this.options.isEqualSize&&(this._equalItemSize=n);
this.columnWidth=n.outerWidth||this.size.outerWidth;
return this.columnWidth
},_getColIdx:function(n){return parseInt(n.position.x/parseInt(this.columnWidth,10),10)
},getColItems:function(r){var o=this._appendCols.length;
var p=new Array(o);
var t;
var n;
var s=0;
var q=r?this.items.length-1:0;
while(t=this.items[q]){n=this._getColIdx(t);
if(!p[n]){p[n]=t;
if(++s===o){return p
}}q+=r?-1:1
}return p
},clone:function(o,n){j(o,n,["_equalItemSize","_appendCols","_prependCols","columnWidth","size","options"]);
o.items=o.items||[];
o.items.length=n.items.length;
c.each(n.items,function(p){o.items[p]=j(o.items[p]||{},n.items[p],["position","size","isAppend","groupKey"])
});
return o
},itemize:function(p,o){var n=this._itemize(p);
this._registGroupKey(o,n);
return n
},_registGroupKey:function(o,q){if(o!=null){var p=0;
var n;
while(n=q[p++]){n.groupKey=o
}}},destroy:function(){this.off();
f.prototype.destroy.apply(this)
}});
var g={layoutComplete:"layoutComplete"};
l.InfiniteGrid=l.Class.extend(l.Component,{_events:function(){return g
},construct:function(o,n){var p=c.extend({isEqualSize:false,defaultGroupKey:null,count:30},n);
p.transitionDuration=0;
p.isInitLayout=false;
p.isResizeBound=false;
this.core=new i(o,p).on(g.layoutComplete,c.proxy(this._onlayoutComplete,this));
this.$global=c(a);
this._reset();
this.core.$element.children().length>0&&this.layout();
this._onResize=c.proxy(this._onResize,this);
this.$global.on("resize",this._onResize)
},_onResize:function(){if(this.resizeTimeout){clearTimeout(this.resizeTimeout)
}var n=this;
function o(){n.core.element.style.width=null;
n.core.needsResizeLayout()&&n.layout();
delete n.resizeTimeout
}this.resizeTimeout=setTimeout(o,100)
},getStatus:function(){var n=[];
var o;
for(o in this){if(this.hasOwnProperty(o)&&/^_/.test(o)){n.push(o)
}}return{core:this.core.clone({},this.core),data:j({},this,n),html:this.core.$element.html(),cssText:this.core.element.style.cssText}
},setStatus:function(n){this.core.element.style.cssText=n.cssText;
this.core.$element.html(n.html);
this.core.items=this.core.itemize(this.core.$element.children().toArray());
this.core.clone(this.core,n.core);
c.extend(this,n.data);
return this
},isProcessing:function(){return this._isProcessing
},isRecycling:function(){return this.core.options.count>0&&this._isRecycling
},getGroupKeys:function(){var n=[];
if(this.core._isLayoutInited){var o=0;
var p;
while(p=this.core.items[o++]){n.push(p.groupKey)
}}return n
},layout:function(){this._isProcessing=true;
this._isAppendType=true;
var o=0;
var n;
while(n=this.core.items[o++]){n.isAppend=true
}this.core.layout();
return this
},append:function(o,n){if(this._isProcessing||o.length===0){return
}this._isProcessing=true;
if(!this._isRecycling){this._isRecycling=(this.core.items.length+o.length)>=this.core.options.count
}this._insert(o,n,true);
return o.length
},prepend:function(o,n){if(!this.isRecycling()||this._removedContent===0||this._isProcessing||o.length===0){return
}this._isProcessing=true;
this._fit();
if(o.length-this._removedContent>0){o=o.slice(o.length-this._removedContent)
}this._insert(o,n,false);
return o.length
},clear:function(){this.core.$element.empty();
this.core.items.length=0;
this._reset();
this.layout();
return this
},_getTopItem:function(){var o=null;
var n=Infinity;
c.each(this.core.getColItems(false),function(q,p){if(p&&p.position.y<n){n=p.position.y;
o=p
}});
return o
},getTopElement:function(){var n=this._getTopItem();
return n&&n.element
},_getBottomItem:function(){var o=null;
var n=-Infinity;
c.each(this.core.getColItems(true),function(q,p){if(p&&p.position.y+p.size.outerHeight>n){n=p.position.y+p.size.outerHeight;
o=p
}});
return o
},getBottomElement:function(){var n=this._getBottomItem();
return n&&n.element
},_onlayoutComplete:function(o){var p=0;
var n=this._isAppendType;
if(n===false){this._isFitted=false;
this._fit(true);
p=o.length>this.core.items.length?0:this.core.items[o.length].position.y
}this._reset(true);
this.trigger(g.layoutComplete,{target:o.concat(),isAppend:n,distance:p})
},_insert:function(n,v,s){if(n.length===0){return
}this._isAppendType=s;
var p=0;
var u;
var r=this.core.itemize(n,v);
while(u=r[p++]){u.isAppend=s
}if(s){this.core.items=this.core.items.concat(r)
}else{this.core.items=r.concat(this.core.items.slice(0));
r=r.reverse()
}if(this.isRecycling()){this._adjustRange(s,n)
}var q=this.core.$element.children().length===0;
this.core.$element[s?"append":"prepend"](n);
q&&this.core.resetLayout();
var t=this._checkImageLoaded(n);
var o=t.length;
o>0?this._waitImageLoaded(r,t):this.core.layoutItems(r,true)
},_adjustRange:function(s,n){var t=this.core.items.length-this.core.options.count;
var r;
var u;
if(t<=0||(u=this._getDelimiterIndex(s,t))<0){return
}if(s){r=this.core.items.slice(0,u);
this.core.items=this.core.items.slice(u);
this._isFitted=false
}else{r=this.core.items.slice(u);
this.core.items=this.core.items.slice(0,u)
}var q=0;
var v;
var o;
var p=n instanceof c?"index":"indexOf";
while(v=r[q++]){o=v.element;
u=n[p](o);
if(u!==-1){n.splice(u,1)
}else{o.parentNode.removeChild(o)
}}this._removedContent+=s?r.length:-r.length
},_getDelimiterIndex:function(r,u){var o=this.core.items.length;
var s;
var n=0;
var q=r?u-1:o-u;
var t=q+(r?1:-1);
var p=this.core.items[q].groupKey;
if(p!=null&&p===this.core.items[t].groupKey){if(r){for(s=q;
s>0;
s--){if(p!==this.core.items[s].groupKey){break
}}n=s===0?-1:s+1
}else{for(s=q;
s<o;
s++){if(p!==this.core.items[s].groupKey){break
}}n=s===o?-1:s
}}else{n=r?t:q
}return n
},_fit:function(q){if(this.core.options.count<=0){this._fit=function(){return false
};
this._isFitted=true;
return false
}if(this._isFitted){return false
}var p;
var n;
var o=0;
var r=this.core.updateCols();
while(p=this.core.items[o++]){p.position.y-=r;
q&&p.css({top:p.position.y+"px"})
}this.core.updateCols(true);
n=this.core._getContainerSize().height;
q&&this.core._setContainerMeasure(n,false);
this._isFitted=true;
return true
},fit:function(){var n=this._getTopItem();
var o=n?n.position.y:0;
this._fit(true);
return o
},_reset:function(n){if(!n){this._isFitted=true;
this._isRecycling=false;
this._removedContent=0
}this._isAppendType=null;
this._isProcessing=false
},_checkImageLoaded:function(o){var n=[];
c(o).each(function(q,p){if(p.nodeName==="IMG"){!p.complete&&n.push(p)
}else{if(p.nodeType&&(p.nodeType===1||p.nodeType===9||p.nodeType===11)){n=n.concat(c(p).find("img").filter(function(s,r){return !r.complete
}).toArray())
}}});
return n
},_waitImageLoaded:function(o,r){var n=this.core;
var q=r.length;
var p;
if(h){p=function(){q--;
if(q<=0){e(n.element,p);
n.layoutItems(o,true)
}};
m(this.core.element,p)
}else{p=function(s){q--;
e(s.srcElement,p);
if(q<=0){n.layoutItems(o,true)
}};
c.each(r,function(t,s){m(s,p)
})
}},destroy:function(){if(this.core){this.core.destroy();
this.core=null
}this.$global.off("resize",this._onResize);
this.off()
}})
});
/*!

 handlebars v4.0.2

Copyright (C) 2011-2015 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
(function webpackUniversalModuleDefinition(a,b){if(typeof exports==="object"&&typeof module==="object"){module.exports=b()
}else{if(typeof define==="function"&&define.amd){define([],b)
}else{if(typeof exports==="object"){exports.Handlebars=b()
}else{a.Handlebars=b()
}}}})(this,function(){return(function(a){var b={};
function c(e){if(b[e]){return b[e].exports
}var d=b[e]={exports:{},id:e,loaded:false};
a[e].call(d.exports,d,d.exports,c);
d.loaded=true;
return d.exports
}c.m=a;
c.c=b;
c.p="";
return c(0)
})([function(c,s,e){var a=e(1)["default"];
s.__esModule=true;
var g=e(2);
var d=a(g);
var b=e(21);
var n=a(b);
var h=e(22);
var o=e(27);
var i=e(28);
var j=a(i);
var p=e(25);
var r=a(p);
var l=e(20);
var k=a(l);
var q=d["default"].create;
function m(){var t=q();
t.compile=function(u,v){return o.compile(u,v,t)
};
t.precompile=function(u,v){return o.precompile(u,v,t)
};
t.AST=n["default"];
t.Compiler=o.Compiler;
t.JavaScriptCompiler=j["default"];
t.Parser=h.parser;
t.parse=h.parse;
return t
}var f=m();
f.create=m;
k["default"](f);
f.Visitor=r["default"];
f["default"]=f;
s["default"]=f;
c.exports=s["default"]
},function(b,a){a["default"]=function(c){return c&&c.__esModule?c:{"default":c}
};
a.__esModule=true
},function(b,s,d){var p=d(3)["default"];
var a=d(1)["default"];
s.__esModule=true;
var r=d(4);
var g=p(r);
var q=d(18);
var h=a(q);
var l=d(6);
var n=a(l);
var m=d(5);
var c=p(m);
var f=d(19);
var o=p(f);
var j=d(20);
var i=a(j);
function k(){var t=new g.HandlebarsEnvironment();
c.extend(t,g);
t.SafeString=h["default"];
t.Exception=n["default"];
t.Utils=c;
t.escapeExpression=c.escapeExpression;
t.VM=o;
t.template=function(u){return o.template(u,t)
};
return t
}var e=k();
e.create=k;
i["default"](e);
e["default"]=e;
s["default"]=e;
b.exports=s["default"]
},function(b,a){a["default"]=function(e){if(e&&e.__esModule){return e
}else{var c={};
if(e!=null){for(var d in e){if(Object.prototype.hasOwnProperty.call(e,d)){c[d]=e[d]
}}}c["default"]=e;
return c
}};
a.__esModule=true
},function(e,v,g){var c=g(1)["default"];
v.__esModule=true;
v.HandlebarsEnvironment=k;
var n=g(5);
var t=g(6);
var f=c(t);
var h=g(7);
var w=g(15);
var m=g(17);
var d=c(m);
var u="4.0.2";
v.VERSION=u;
var q=7;
v.COMPILER_REVISION=q;
var s={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};
v.REVISION_CHANGES=s;
var p="[object Object]";
function k(z,y,x){this.helpers=z||{};
this.partials=y||{};
this.decorators=x||{};
h.registerDefaultHelpers(this);
w.registerDefaultDecorators(this)
}k.prototype={constructor:k,logger:d["default"],log:d["default"].log,registerHelper:function o(x,y){if(n.toString.call(x)===p){if(y){throw new f["default"]("Arg not supported with multiple helpers")
}n.extend(this.helpers,x)
}else{this.helpers[x]=y
}},unregisterHelper:function i(x){delete this.helpers[x]
},registerPartial:function j(y,x){if(n.toString.call(y)===p){n.extend(this.partials,y)
}else{if(typeof x==="undefined"){throw new f["default"]("Attempting to register a partial as undefined")
}this.partials[y]=x
}},unregisterPartial:function r(x){delete this.partials[x]
},registerDecorator:function b(x,y){if(n.toString.call(x)===p){if(y){throw new f["default"]("Arg not supported with multiple decorators")
}n.extend(this.decorators,x)
}else{this.decorators[x]=y
}},unregisterDecorator:function a(x){delete this.decorators[x]
}};
var l=d["default"].log;
v.log=l;
v.createFrame=n.createFrame;
v.logger=d["default"]
},function(d,g){g.__esModule=true;
g.extend=l;
g.indexOf=m;
g.escapeExpression=i;
g.isEmpty=h;
g.createFrame=o;
g.blockParams=k;
g.appendContextPath=e;
var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"};
var a=/[&<>"'`=]/g,f=/[&<>"'`=]/;
function p(q){return n[q]
}function l(s){for(var r=1;
r<arguments.length;
r++){for(var q in arguments[r]){if(Object.prototype.hasOwnProperty.call(arguments[r],q)){s[q]=arguments[r][q]
}}}return s
}var c=Object.prototype.toString;
g.toString=c;
var b=function b(q){return typeof q==="function"
};
if(b(/x/)){g.isFunction=b=function(q){return typeof q==="function"&&c.call(q)==="[object Function]"
}
}g.isFunction=b;
var j=Array.isArray||function(q){return q&&typeof q==="object"?c.call(q)==="[object Array]":false
};
g.isArray=j;
function m(t,s){for(var r=0,q=t.length;
r<q;
r++){if(t[r]===s){return r
}}return -1
}function i(q){if(typeof q!=="string"){if(q&&q.toHTML){return q.toHTML()
}else{if(q==null){return""
}else{if(!q){return q+""
}}}q=""+q
}if(!f.test(q)){return q
}return q.replace(a,p)
}function h(q){if(!q&&q!==0){return true
}else{if(j(q)&&q.length===0){return true
}else{return false
}}}function o(q){var r=l({},q);
r._parent=q;
return r
}function k(r,q){r.path=q;
return r
}function e(q,r){return(q?q+".":"")+r
}},function(c,a){a.__esModule=true;
var d=["description","fileName","lineNumber","message","name","number","stack"];
function b(j,i){var k=i&&i.loc,f=undefined,h=undefined;
if(k){f=k.start.line;
h=k.start.column;
j+=" - "+f+":"+h
}var g=Error.prototype.constructor.call(this,j);
for(var e=0;
e<d.length;
e++){this[d[e]]=g[d[e]]
}if(Error.captureStackTrace){Error.captureStackTrace(this,b)
}if(k){this.lineNumber=f;
this.column=h
}}b.prototype=new Error();
a["default"]=b;
c.exports=a["default"]
},function(e,s,f){var c=f(1)["default"];
s.__esModule=true;
s.registerDefaultHelpers=o;
var a=f(8);
var m=c(a);
var k=f(9);
var d=c(k);
var g=f(10);
var r=c(g);
var i=f(11);
var b=c(i);
var n=f(12);
var p=c(n);
var l=f(13);
var h=c(l);
var j=f(14);
var q=c(j);
function o(t){m["default"](t);
d["default"](t);
r["default"](t);
b["default"](t);
p["default"](t);
h["default"](t);
q["default"](t)
}},function(b,a,d){a.__esModule=true;
var c=d(5);
a["default"]=function(e){e.registerHelper("blockHelperMissing",function(h,g){var f=g.inverse,i=g.fn;
if(h===true){return i(this)
}else{if(h===false||h==null){return f(this)
}else{if(c.isArray(h)){if(h.length>0){if(g.ids){g.ids=[g.name]
}return e.helpers.each(h,g)
}else{return f(this)
}}else{if(g.data&&g.ids){var j=c.createFrame(g.data);
j.contextPath=c.appendContextPath(g.data.contextPath,g.name);
g={data:j}
}return i(h,g)
}}}})
};
b.exports=a["default"]
},function(c,a,f){var d=f(1)["default"];
a.__esModule=true;
var e=f(5);
var b=f(6);
var g=d(b);
a["default"]=function(h){h.registerHelper("each",function(k,v){if(!v){throw new g["default"]("Must pass iterator to #each")
}var t=v.fn,o=v.inverse,q=0,s="",p=undefined,l=undefined;
if(v.data&&v.ids){l=e.appendContextPath(v.data.contextPath,v.ids[0])+"."
}if(e.isFunction(k)){k=k.call(this)
}if(v.data){p=e.createFrame(v.data)
}function m(w,i,j){if(k[w]==null){return
}if(p){p.key=w;
p.index=i;
p.first=i===0;
p.last=!!j;
if(l){p.contextPath=l+w
}}s=s+t(k[w],{data:p,blockParams:e.blockParams([k[w],w],[l+w,null])})
}if(k&&typeof k==="object"){if(e.isArray(k)){for(var n=k.length;
q<n;
q++){m(q,q,q===k.length-1)
}}else{var r=undefined;
for(var u in k){if(k.hasOwnProperty(u)){if(r!==undefined){m(r,q-1)
}r=u;
q++
}}if(r!==undefined){m(r,q-1,true)
}}}if(q===0){s=o(this)
}return s
})
};
c.exports=a["default"]
},function(c,a,e){var d=e(1)["default"];
a.__esModule=true;
var b=e(6);
var f=d(b);
a["default"]=function(g){g.registerHelper("helperMissing",function(){if(arguments.length===1){return undefined
}else{throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')
}})
};
c.exports=a["default"]
},function(b,a,d){a.__esModule=true;
var c=d(5);
a["default"]=function(e){e.registerHelper("if",function(g,f){if(c.isFunction(g)){g=g.call(this)
}if(!f.hash.includeZero&&!g||c.isEmpty(g)){return f.inverse(this)
}else{return f.fn(this)
}});
e.registerHelper("unless",function(g,f){return e.helpers["if"].call(this,g,{fn:f.inverse,inverse:f.fn,hash:f.hash})
})
};
b.exports=a["default"]
},function(b,a){a.__esModule=true;
a["default"]=function(c){c.registerHelper("log",function(){var e=[undefined],d=arguments[arguments.length-1];
for(var f=0;
f<arguments.length-1;
f++){e.push(arguments[f])
}var g=1;
if(d.hash.level!=null){g=d.hash.level
}else{if(d.data&&d.data.level!=null){g=d.data.level
}}e[0]=g;
c.log.apply(c,e)
})
};
b.exports=a["default"]
},function(b,a){a.__esModule=true;
a["default"]=function(c){c.registerHelper("lookup",function(e,d){return e&&e[d]
})
};
b.exports=a["default"]
},function(b,a,d){a.__esModule=true;
var c=d(5);
a["default"]=function(e){e.registerHelper("with",function(g,f){if(c.isFunction(g)){g=g.call(this)
}var h=f.fn;
if(!c.isEmpty(g)){var i=f.data;
if(f.data&&f.ids){i=c.createFrame(f.data);
i.contextPath=c.appendContextPath(f.data.contextPath,f.ids[0])
}return h(g,{data:i,blockParams:c.blockParams([g],[i&&i.contextPath])})
}else{return f.inverse(this)
}})
};
b.exports=a["default"]
},function(d,c,g){var f=g(1)["default"];
c.__esModule=true;
c.registerDefaultDecorators=e;
var b=g(16);
var a=f(b);
function e(h){a["default"](h)
}},function(b,a,d){a.__esModule=true;
var c=d(5);
a["default"]=function(e){e.registerDecorator("inline",function(j,i,f,h){var g=j;
if(!i.partials){i.partials={};
g=function(n,l){var m=f.partials;
f.partials=c.extend({},m,i.partials);
var k=j(n,l);
f.partials=m;
return k
}
}i.partials[h.args[0]]=h.fn;
return g
})
};
b.exports=a["default"]
},function(c,a){a.__esModule=true;
var b={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function e(g){if(typeof g==="string"){var f=b.methodMap.indexOf(g.toLowerCase());
if(f>=0){g=f
}else{g=parseInt(g,10)
}}return g
},log:function d(j){j=b.lookupLevel(j);
if(typeof console!=="undefined"&&b.lookupLevel(b.level)<=j){var i=b.methodMap[j];
if(!console[i]){i="log"
}for(var f=arguments.length,h=Array(f>1?f-1:0),g=1;
g<f;
g++){h[g-1]=arguments[g]
}console[i].apply(console,h)
}}};
a["default"]=b;
c.exports=a["default"]
},function(b,a){a.__esModule=true;
function c(d){this.string=d
}c.prototype.toString=c.prototype.toHTML=function(){return""+this.string
};
a["default"]=c;
b.exports=a["default"]
},function(b,q,e){var p=e(3)["default"];
var a=e(1)["default"];
q.__esModule=true;
q.checkRevision=k;
q.template=n;
q.wrapProgram=h;
q.resolvePartial=j;
q.invokePartial=r;
q.noop=f;
var i=e(5);
var d=p(i);
var l=e(6);
var c=a(l);
var m=e(4);
function k(u){var t=u&&u[0]||1,w=m.COMPILER_REVISION;
if(t!==w){if(t<w){var s=m.REVISION_CHANGES[w],v=m.REVISION_CHANGES[t];
throw new c["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+s+") or downgrade your runtime to an older version ("+v+").")
}else{throw new c["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+u[1]+").")
}}}function n(C,w){if(!w){throw new c["default"]("No environment passed to template")
}if(!C||!C.main){throw new c["default"]("Unknown template object: "+typeof C)
}C.main.decorator=C.main_d;
w.VM.checkRevision(C.compiler);
function D(H,K,I){if(I.hash){K=d.extend({},K,I.hash);
if(I.ids){I.ids[0]=true
}}H=w.VM.resolvePartial.call(this,H,K,I);
var E=w.VM.invokePartial.call(this,H,K,I);
if(E==null&&w.compile){I.partials[I.name]=w.compile(H,C.compilerOptions,w);
E=I.partials[I.name](K,I)
}if(E!=null){if(I.indent){var G=E.split("\n");
for(var J=0,F=G.length;
J<F;
J++){if(!G[J]&&J+1===F){break
}G[J]=I.indent+G[J]
}E=G.join("\n")
}return E
}else{throw new c["default"]("The partial "+I.name+" could not be compiled when running in runtime-only mode")
}}var s={strict:function B(F,E){if(!(E in F)){throw new c["default"]('"'+E+'" not defined in '+F)
}return F[E]
},lookup:function t(H,F){var E=H.length;
for(var G=0;
G<E;
G++){if(H[G]&&H[G][F]!=null){return H[G][F]
}}},lambda:function x(F,E){return typeof F==="function"?F.call(E):F
},escapeExpression:d.escapeExpression,invokePartial:D,fn:function A(F){var E=C[F];
E.decorator=C[F+"_d"];
return E
},programs:[],program:function v(G,J,F,I,K){var E=this.programs[G],H=this.fn(G);
if(J||K||I||F){E=h(this,G,H,J,F,I,K)
}else{if(!E){E=this.programs[G]=h(this,G,H)
}}return E
},data:function u(E,F){while(E&&F--){E=E._parent
}return E
},merge:function z(G,E){var F=G||E;
if(G&&E&&G!==E){F=d.extend({},E,G)
}return F
},noop:w.VM.noop,compilerInfo:C.compiler};
function y(G){var F=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];
var I=F.data;
y._setup(F);
if(!F.partial&&C.useData){I=o(G,I)
}var J=undefined,H=C.useBlockParams?[]:undefined;
if(C.useDepths){if(F.depths){J=G!==F.depths[0]?[G].concat(F.depths):F.depths
}else{J=[G]
}}function E(K){return""+C.main(s,K,s.helpers,s.partials,I,H,J)
}E=g(C.main,E,s,F.depths||[],I,H);
return E(G,F)
}y.isTop=true;
y._setup=function(E){if(!E.partial){s.helpers=s.merge(E.helpers,w.helpers);
if(C.usePartial){s.partials=s.merge(E.partials,w.partials)
}if(C.usePartial||C.useDecorators){s.decorators=s.merge(E.decorators,w.decorators)
}}else{s.helpers=E.helpers;
s.partials=E.partials;
s.decorators=E.decorators
}};
y._child=function(E,G,F,H){if(C.useBlockParams&&!F){throw new c["default"]("must pass block params")
}if(C.useDepths&&!H){throw new c["default"]("must pass parent depths")
}return h(s,E,C[E],G,0,F,H)
};
return y
}function h(s,u,v,x,t,w,z){function y(B){var A=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];
var C=z;
if(z&&B!==z[0]){C=[B].concat(z)
}return v(s,B,s.helpers,s.partials,A.data||x,w&&[A.blockParams].concat(w),C)
}y=g(v,y,s,z,x,w);
y.program=u;
y.depth=z?z.length:0;
y.blockParams=t||0;
return y
}function j(s,u,t){if(!s){if(t.name==="@partial-block"){s=t.data["partial-block"]
}else{s=t.partials[t.name]
}}else{if(!s.call&&!t.name){t.name=s;
s=t.partials[s]
}}return s
}function r(s,u,t){t.partial=true;
if(t.ids){t.data.contextPath=t.ids[0]||t.data.contextPath
}var v=undefined;
if(t.fn&&t.fn!==f){v=t.data["partial-block"]=t.fn;
if(v.partials){t.partials=d.extend({},t.partials,v.partials)
}}if(s===undefined&&v){s=v
}if(s===undefined){throw new c["default"]("The partial "+t.name+" could not be found")
}else{if(s instanceof Function){return s(u,t)
}}}function f(){return""
}function o(s,t){if(!t||!("root" in t)){t=t?m.createFrame(t):{};
t.root=s
}return t
}function g(u,x,s,y,w,v){if(u.decorator){var t={};
x=u.decorator(x,t,s,y&&y[0],w,v,y);
d.extend(x,t)
}return x
}},function(b,a){(function(c){a.__esModule=true;
a["default"]=function(f){var d=typeof c!=="undefined"?c:window,e=d.Handlebars;
f.noConflict=function(){if(d.Handlebars===f){d.Handlebars=e
}}
};
b.exports=a["default"]
}.call(a,(function(){return this
}())))
},function(c,a){a.__esModule=true;
var e={helpers:{helperExpression:function d(g){return g.type==="SubExpression"||(g.type==="MustacheStatement"||g.type==="BlockStatement")&&!!(g.params&&g.params.length||g.hash)
},scopedId:function f(g){return(/^\.|this\b/.test(g.original))
},simpleId:function b(g){return g.parts.length===1&&!e.helpers.scopedId(g)&&!g.depth
}}};
a["default"]=e;
c.exports=a["default"]
},function(c,e,b){var m=b(1)["default"];
var g=b(3)["default"];
e.__esModule=true;
e.parse=d;
var h=b(23);
var i=m(h);
var f=b(24);
var l=m(f);
var a=b(26);
var k=g(a);
var n=b(5);
e.parser=i["default"];
var j={};
n.extend(j,k);
function d(o,p){if(o.type==="Program"){return o
}i["default"].yy=j;
j.locInfo=function(r){return new j.SourceLocation(p&&p.srcName,r)
};
var q=new l["default"](p);
return q.accept(i["default"].parse(o))
}},function(c,b){var a=(function(){var j={trace:function f(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition_plus0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,1],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function e(p,q,k,r,s,t,m){var n=t.length-1;
switch(s){case 1:return t[n-1];
break;
case 2:this.$=r.prepareProgram(t[n]);
break;
case 3:this.$=t[n];
break;
case 4:this.$=t[n];
break;
case 5:this.$=t[n];
break;
case 6:this.$=t[n];
break;
case 7:this.$=t[n];
break;
case 8:this.$=t[n];
break;
case 9:this.$={type:"CommentStatement",value:r.stripComment(t[n]),strip:r.stripFlags(t[n],t[n]),loc:r.locInfo(this._$)};
break;
case 10:this.$={type:"ContentStatement",original:t[n],value:t[n],loc:r.locInfo(this._$)};
break;
case 11:this.$=r.prepareRawBlock(t[n-2],t[n-1],t[n],this._$);
break;
case 12:this.$={path:t[n-3],params:t[n-2],hash:t[n-1]};
break;
case 13:this.$=r.prepareBlock(t[n-3],t[n-2],t[n-1],t[n],false,this._$);
break;
case 14:this.$=r.prepareBlock(t[n-3],t[n-2],t[n-1],t[n],true,this._$);
break;
case 15:this.$={open:t[n-5],path:t[n-4],params:t[n-3],hash:t[n-2],blockParams:t[n-1],strip:r.stripFlags(t[n-5],t[n])};
break;
case 16:this.$={path:t[n-4],params:t[n-3],hash:t[n-2],blockParams:t[n-1],strip:r.stripFlags(t[n-5],t[n])};
break;
case 17:this.$={path:t[n-4],params:t[n-3],hash:t[n-2],blockParams:t[n-1],strip:r.stripFlags(t[n-5],t[n])};
break;
case 18:this.$={strip:r.stripFlags(t[n-1],t[n-1]),program:t[n]};
break;
case 19:var l=r.prepareBlock(t[n-2],t[n-1],t[n],t[n],false,this._$),o=r.prepareProgram([l],t[n-1].loc);
o.chained=true;
this.$={strip:t[n-2].strip,program:o,chain:true};
break;
case 20:this.$=t[n];
break;
case 21:this.$={path:t[n-1],strip:r.stripFlags(t[n-2],t[n])};
break;
case 22:this.$=r.prepareMustache(t[n-3],t[n-2],t[n-1],t[n-4],r.stripFlags(t[n-4],t[n]),this._$);
break;
case 23:this.$=r.prepareMustache(t[n-3],t[n-2],t[n-1],t[n-4],r.stripFlags(t[n-4],t[n]),this._$);
break;
case 24:this.$={type:"PartialStatement",name:t[n-3],params:t[n-2],hash:t[n-1],indent:"",strip:r.stripFlags(t[n-4],t[n]),loc:r.locInfo(this._$)};
break;
case 25:this.$=r.preparePartialBlock(t[n-2],t[n-1],t[n],this._$);
break;
case 26:this.$={path:t[n-3],params:t[n-2],hash:t[n-1],strip:r.stripFlags(t[n-4],t[n])};
break;
case 27:this.$=t[n];
break;
case 28:this.$=t[n];
break;
case 29:this.$={type:"SubExpression",path:t[n-3],params:t[n-2],hash:t[n-1],loc:r.locInfo(this._$)};
break;
case 30:this.$={type:"Hash",pairs:t[n],loc:r.locInfo(this._$)};
break;
case 31:this.$={type:"HashPair",key:r.id(t[n-2]),value:t[n],loc:r.locInfo(this._$)};
break;
case 32:this.$=r.id(t[n-1]);
break;
case 33:this.$=t[n];
break;
case 34:this.$=t[n];
break;
case 35:this.$={type:"StringLiteral",value:t[n],original:t[n],loc:r.locInfo(this._$)};
break;
case 36:this.$={type:"NumberLiteral",value:Number(t[n]),original:Number(t[n]),loc:r.locInfo(this._$)};
break;
case 37:this.$={type:"BooleanLiteral",value:t[n]==="true",original:t[n]==="true",loc:r.locInfo(this._$)};
break;
case 38:this.$={type:"UndefinedLiteral",original:undefined,value:undefined,loc:r.locInfo(this._$)};
break;
case 39:this.$={type:"NullLiteral",original:null,value:null,loc:r.locInfo(this._$)};
break;
case 40:this.$=t[n];
break;
case 41:this.$=t[n];
break;
case 42:this.$=r.preparePath(true,t[n],this._$);
break;
case 43:this.$=r.preparePath(false,t[n],this._$);
break;
case 44:t[n-2].push({part:r.id(t[n]),original:t[n],separator:t[n-1]});
this.$=t[n-2];
break;
case 45:this.$=[{part:r.id(t[n]),original:t[n]}];
break;
case 46:this.$=[];
break;
case 47:t[n-1].push(t[n]);
break;
case 48:this.$=[t[n]];
break;
case 49:t[n-1].push(t[n]);
break;
case 50:this.$=[];
break;
case 51:t[n-1].push(t[n]);
break;
case 58:this.$=[];
break;
case 59:t[n-1].push(t[n]);
break;
case 64:this.$=[];
break;
case 65:t[n-1].push(t[n]);
break;
case 70:this.$=[];
break;
case 71:t[n-1].push(t[n]);
break;
case 78:this.$=[];
break;
case 79:t[n-1].push(t[n]);
break;
case 82:this.$=[];
break;
case 83:t[n-1].push(t[n]);
break;
case 86:this.$=[];
break;
case 87:t[n-1].push(t[n]);
break;
case 90:this.$=[];
break;
case 91:t[n-1].push(t[n]);
break;
case 94:this.$=[];
break;
case 95:t[n-1].push(t[n]);
break;
case 98:this.$=[t[n]];
break;
case 99:t[n-1].push(t[n]);
break;
case 100:this.$=[t[n]];
break;
case 101:t[n-1].push(t[n]);
break
}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{13:40,15:[1,20],17:39},{20:42,56:41,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:45,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:48,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:42,56:49,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:50,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,51]},{72:[1,35],86:52},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:53,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:54,38:56,39:[1,58],43:57,44:[1,59],45:55,47:[2,54]},{28:60,43:61,44:[1,59],47:[2,56]},{13:63,15:[1,20],18:[1,62]},{15:[2,48],18:[2,48]},{33:[2,86],57:64,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:65,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:66,47:[1,67]},{30:68,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:69,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:70,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:71,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:75,33:[2,80],50:72,63:73,64:76,65:[1,44],69:74,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,80]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,51]},{20:75,53:81,54:[2,84],63:82,64:76,65:[1,44],69:83,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:84,47:[1,67]},{47:[2,55]},{4:85,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:86,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:87,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:88,47:[1,67]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:75,33:[2,88],58:89,63:90,64:76,65:[1,44],69:91,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:92,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:93,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,31:94,33:[2,60],63:95,64:76,65:[1,44],69:96,70:77,71:78,72:[1,79],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,66],36:97,63:98,64:76,65:[1,44],69:99,70:77,71:78,72:[1,79],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,22:100,23:[2,52],63:101,64:76,65:[1,44],69:102,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,92],62:103,63:104,64:76,65:[1,44],69:105,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,106]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:107,72:[1,108],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,109],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,110]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:56,39:[1,58],43:57,44:[1,59],45:112,46:111,47:[2,76]},{33:[2,70],40:113,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,114]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:75,63:116,64:76,65:[1,44],67:115,68:[2,96],69:117,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,118]},{32:119,33:[2,62],74:120,75:[1,121]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:122,74:123,75:[1,121]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,124]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,125]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,109]},{20:75,63:126,64:76,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:75,33:[2,72],41:127,63:128,64:76,65:[1,44],69:129,70:77,71:78,72:[1,79],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,130]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,131]},{33:[2,63]},{72:[1,133],76:132},{33:[1,134]},{33:[2,69]},{15:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:135,74:136,75:[1,121]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,138],77:[1,137]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,139]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],55:[2,55],57:[2,20],61:[2,57],74:[2,81],83:[2,85],87:[2,18],91:[2,89],102:[2,53],105:[2,93],111:[2,19],112:[2,77],117:[2,97],120:[2,63],123:[2,69],124:[2,12],136:[2,75],137:[2,32]},parseError:function g(l,k){throw new Error(l)
},parse:function i(v){var C=this,s=[0],L=[null],x=[],M=this.table,l="",w=0,J=0,n=0,u=2,z=1;
this.lexer.setInput(v);
this.lexer.yy=this.yy;
this.yy.lexer=this.lexer;
this.yy.parser=this;
if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={}
}var m=this.lexer.yylloc;
x.push(m);
var o=this.lexer.options&&this.lexer.options.ranges;
if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError
}function B(p){s.length=s.length-2*p;
L.length=L.length-p;
x.length=x.length-p
}function A(){var p;
p=C.lexer.lex()||1;
if(typeof p!=="number"){p=C.symbols_[p]||p
}return p
}var I,E,q,H,N,y,G={},D,K,k,t;
while(true){q=s[s.length-1];
if(this.defaultActions[q]){H=this.defaultActions[q]
}else{if(I===null||typeof I=="undefined"){I=A()
}H=M[q]&&M[q][I]
}if(typeof H==="undefined"||!H.length||!H[0]){var F="";
if(!n){t=[];
for(D in M[q]){if(this.terminals_[D]&&D>2){t.push("'"+this.terminals_[D]+"'")
}}if(this.lexer.showPosition){F="Parse error on line "+(w+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+t.join(", ")+", got '"+(this.terminals_[I]||I)+"'"
}else{F="Parse error on line "+(w+1)+": Unexpected "+(I==1?"end of input":"'"+(this.terminals_[I]||I)+"'")
}this.parseError(F,{text:this.lexer.match,token:this.terminals_[I]||I,line:this.lexer.yylineno,loc:m,expected:t})
}}if(H[0] instanceof Array&&H.length>1){throw new Error("Parse Error: multiple actions possible at state: "+q+", token: "+I)
}switch(H[0]){case 1:s.push(I);
L.push(this.lexer.yytext);
x.push(this.lexer.yylloc);
s.push(H[1]);
I=null;
if(!E){J=this.lexer.yyleng;
l=this.lexer.yytext;
w=this.lexer.yylineno;
m=this.lexer.yylloc;
if(n>0){n--
}}else{I=E;
E=null
}break;
case 2:K=this.productions_[H[1]][1];
G.$=L[L.length-K];
G._$={first_line:x[x.length-(K||1)].first_line,last_line:x[x.length-1].last_line,first_column:x[x.length-(K||1)].first_column,last_column:x[x.length-1].last_column};
if(o){G._$.range=[x[x.length-(K||1)].range[0],x[x.length-1].range[1]]
}y=this.performAction.call(G,l,J,w,this.yy,H[1],L,x);
if(typeof y!=="undefined"){return y
}if(K){s=s.slice(0,-1*K*2);
L=L.slice(0,-1*K);
x=x.slice(0,-1*K)
}s.push(this.productions_[H[1]][0]);
L.push(G.$);
x.push(G._$);
k=M[s[s.length-2]][s[s.length-1]];
s.push(k);
break;
case 3:return true
}}return true
}};
var d=(function(){var m={EOF:1,parseError:function o(C,B){if(this.yy.parser){this.yy.parser.parseError(C,B)
}else{throw new Error(C)
}},setInput:function n(B){this._input=B;
this._more=this._less=this.done=false;
this.yylineno=this.yyleng=0;
this.yytext=this.matched=this.match="";
this.conditionStack=["INITIAL"];
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};
if(this.options.ranges){this.yylloc.range=[0,0]
}this.offset=0;
return this
},input:function x(){var C=this._input[0];
this.yytext+=C;
this.yyleng++;
this.offset++;
this.match+=C;
this.matched+=C;
var B=C.match(/(?:\r\n?|\n).*/g);
if(B){this.yylineno++;
this.yylloc.last_line++
}else{this.yylloc.last_column++
}if(this.options.ranges){this.yylloc.range[1]++
}this._input=this._input.slice(1);
return C
},unput:function v(D){var B=D.length;
var C=D.split(/(?:\r\n?|\n)/g);
this._input=D+this._input;
this.yytext=this.yytext.substr(0,this.yytext.length-B-1);
this.offset-=B;
var F=this.match.split(/(?:\r\n?|\n)/g);
this.match=this.match.substr(0,this.match.length-1);
this.matched=this.matched.substr(0,this.matched.length-1);
if(C.length-1){this.yylineno-=C.length-1
}var E=this.yylloc.range;
this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:C?(C.length===F.length?this.yylloc.first_column:0)+F[F.length-C.length].length-C[0].length:this.yylloc.first_column-B};
if(this.options.ranges){this.yylloc.range=[E[0],E[0]+this.yyleng-B]
}return this
},more:function t(){this._more=true;
return this
},less:function y(B){this.unput(this.match.slice(B))
},pastInput:function r(){var B=this.matched.substr(0,this.matched.length-this.match.length);
return(B.length>20?"...":"")+B.substr(-20).replace(/\n/g,"")
},upcomingInput:function z(){var B=this.match;
if(B.length<20){B+=this._input.substr(0,20-B.length)
}return(B.substr(0,20)+(B.length>20?"...":"")).replace(/\n/g,"")
},showPosition:function u(){var B=this.pastInput();
var C=new Array(B.length+1).join("-");
return B+this.upcomingInput()+"\n"+C+"^"
},next:function q(){if(this.done){return this.EOF
}if(!this._input){this.done=true
}var H,F,C,E,D,B;
if(!this._more){this.yytext="";
this.match=""
}var I=this._currentRules();
for(var G=0;
G<I.length;
G++){C=this._input.match(this.rules[I[G]]);
if(C&&(!F||C[0].length>F[0].length)){F=C;
E=G;
if(!this.options.flex){break
}}}if(F){B=F[0].match(/(?:\r\n?|\n).*/g);
if(B){this.yylineno+=B.length
}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:B?B[B.length-1].length-B[B.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+F[0].length};
this.yytext+=F[0];
this.match+=F[0];
this.matches=F;
this.yyleng=this.yytext.length;
if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]
}this._more=false;
this._input=this._input.slice(F[0].length);
this.matched+=F[0];
H=this.performAction.call(this,this.yy,this,I[E],this.conditionStack[this.conditionStack.length-1]);
if(this.done&&this._input){this.done=false
}if(H){return H
}else{return
}}if(this._input===""){return this.EOF
}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})
}},lex:function k(){var B=this.next();
if(typeof B!=="undefined"){return B
}else{return this.lex()
}},begin:function l(B){this.conditionStack.push(B)
},popState:function p(){return this.conditionStack.pop()
},_currentRules:function A(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules
},topState:function s(){return this.conditionStack[this.conditionStack.length-2]
},pushState:function l(B){this.begin(B)
}};
m.options={};
m.performAction=function w(G,C,F,B){function D(I,H){return C.yytext=C.yytext.substr(I,C.yyleng-H)
}var E=B;
switch(F){case 0:if(C.yytext.slice(-2)==="\\\\"){D(0,1);
this.begin("mu")
}else{if(C.yytext.slice(-1)==="\\"){D(0,1);
this.begin("emu")
}else{this.begin("mu")
}}if(C.yytext){return 15
}break;
case 1:return 15;
break;
case 2:this.popState();
return 15;
break;
case 3:this.begin("raw");
return 15;
break;
case 4:this.popState();
if(this.conditionStack[this.conditionStack.length-1]==="raw"){return 15
}else{C.yytext=C.yytext.substr(5,C.yyleng-9);
return"END_RAW_BLOCK"
}break;
case 5:return 15;
break;
case 6:this.popState();
return 14;
break;
case 7:return 65;
break;
case 8:return 68;
break;
case 9:return 19;
break;
case 10:this.popState();
this.begin("raw");
return 23;
break;
case 11:return 55;
break;
case 12:return 60;
break;
case 13:return 29;
break;
case 14:return 47;
break;
case 15:this.popState();
return 44;
break;
case 16:this.popState();
return 44;
break;
case 17:return 34;
break;
case 18:return 39;
break;
case 19:return 51;
break;
case 20:return 48;
break;
case 21:this.unput(C.yytext);
this.popState();
this.begin("com");
break;
case 22:this.popState();
return 14;
break;
case 23:return 48;
break;
case 24:return 73;
break;
case 25:return 72;
break;
case 26:return 72;
break;
case 27:return 87;
break;
case 28:break;
case 29:this.popState();
return 54;
break;
case 30:this.popState();
return 33;
break;
case 31:C.yytext=D(1,2).replace(/\\"/g,'"');
return 80;
break;
case 32:C.yytext=D(1,2).replace(/\\'/g,"'");
return 80;
break;
case 33:return 85;
break;
case 34:return 82;
break;
case 35:return 82;
break;
case 36:return 83;
break;
case 37:return 84;
break;
case 38:return 81;
break;
case 39:return 75;
break;
case 40:return 77;
break;
case 41:return 72;
break;
case 42:return 72;
break;
case 43:return"INVALID";
break;
case 44:return 5;
break
}};
m.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
m.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[6],inclusive:false},raw:{rules:[3,4,5],inclusive:false},INITIAL:{rules:[0,1,44],inclusive:true}};
return m
})();
j.lexer=d;
function h(){this.yy={}
}h.prototype=j;
j.Parser=h;
return new h()
})();
b.__esModule=true;
b["default"]=a
},function(b,c,a){var j=a(1)["default"];
c.__esModule=true;
var e=a(25);
var k=j(e);
function d(){var l=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
this.options=l
}d.prototype=new k["default"]();
d.prototype.Program=function(t){var v=!this.options.ignoreStandalone;
var p=!this.isRootSeen;
this.isRootSeen=true;
var u=t.body;
for(var s=0,q=u.length;
s<q;
s++){var w=u[s],m=this.accept(w);
if(!m){continue
}var o=f(u,s,p),r=h(u,s,p),n=m.openStandalone&&o,y=m.closeStandalone&&r,x=m.inlineStandalone&&o&&r;
if(m.close){g(u,s,true)
}if(m.open){i(u,s,true)
}if(v&&x){g(u,s);
if(i(u,s)){if(w.type==="PartialStatement"){w.indent=/([ \t]+$)/.exec(u[s-1].original)[1]
}}}if(v&&n){g((w.program||w.inverse).body);
i(u,s)
}if(v&&y){g(u,s);
i((w.inverse||w.program).body)
}}return t
};
d.prototype.BlockStatement=d.prototype.DecoratorBlock=d.prototype.PartialBlockStatement=function(r){this.accept(r.program);
this.accept(r.inverse);
var n=r.program||r.inverse,l=r.program&&r.inverse,m=l,q=l;
if(l&&l.chained){m=l.body[0].program;
while(q.chained){q=q.body[q.body.length-1].program
}}var o={open:r.openStrip.open,close:r.closeStrip.close,openStandalone:h(n.body),closeStandalone:f((m||n).body)};
if(r.openStrip.close){g(n.body,null,true)
}if(l){var p=r.inverseStrip;
if(p.open){i(n.body,null,true)
}if(p.close){g(m.body,null,true)
}if(r.closeStrip.open){i(q.body,null,true)
}if(!this.options.ignoreStandalone&&f(n.body)&&h(m.body)){i(n.body);
g(m.body)
}}else{if(r.closeStrip.open){i(n.body,null,true)
}}return o
};
d.prototype.Decorator=d.prototype.MustacheStatement=function(l){return l.strip
};
d.prototype.PartialStatement=d.prototype.CommentStatement=function(m){var l=m.strip||{};
return{inlineStandalone:true,open:l.open,close:l.close}
};
function f(l,n,m){if(n===undefined){n=l.length
}var p=l[n-1],o=l[n-2];
if(!p){return m
}if(p.type==="ContentStatement"){return(o||!m?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(p.original)
}}function h(l,n,m){if(n===undefined){n=-1
}var p=l[n+1],o=l[n+2];
if(!p){return m
}if(p.type==="ContentStatement"){return(o||!m?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(p.original)
}}function g(m,o,l){var p=m[o==null?0:o+1];
if(!p||p.type!=="ContentStatement"||!l&&p.rightStripped){return
}var n=p.value;
p.value=p.value.replace(l?/^\s+/:/^[ \t]*\r?\n?/,"");
p.rightStripped=p.value!==n
}function i(m,o,l){var p=m[o==null?m.length-1:o-1];
if(!p||p.type!=="ContentStatement"||!l&&p.leftStripped){return
}var n=p.value;
p.value=p.value.replace(l?/\s+$/:/[ \t]+$/,"");
p.leftStripped=p.value!==n;
return p.leftStripped
}c["default"]=d;
b.exports=c["default"]
},function(c,y,e){var a=e(1)["default"];
y.__esModule=true;
var t=e(6);
var d=a(t);
function x(){this.parents=[]
}x.prototype={constructor:x,mutating:false,acceptKey:function q(B,A){var C=this.accept(B[A]);
if(this.mutating){if(C&&!x.prototype[C.type]){throw new d["default"]('Unexpected node type "'+C.type+'" found when accepting '+A+" on "+B.type)
}B[A]=C
}},acceptRequired:function u(B,A){this.acceptKey(B,A);
if(!B[A]){throw new d["default"](B.type+" requires "+A)
}},acceptArray:function v(C){for(var B=0,A=C.length;
B<A;
B++){this.acceptKey(C,B);
if(!C[B]){C.splice(B,1);
B--;
A--
}}},accept:function f(B){if(!B){return
}if(!this[B.type]){throw new d["default"]("Unknown type: "+B.type,B)
}if(this.current){this.parents.unshift(this.current)
}this.current=B;
var A=this[B.type](B);
this.current=this.parents.shift();
if(!this.mutating||A){return A
}else{if(A!==false){return B
}}},Program:function w(A){this.acceptArray(A.body)
},MustacheStatement:n,Decorator:n,BlockStatement:h,DecoratorBlock:h,PartialStatement:z,PartialBlockStatement:function b(A){z.call(this,A);
this.acceptKey(A,"program")
},ContentStatement:function s(){},CommentStatement:function m(){},SubExpression:n,PathExpression:function g(){},StringLiteral:function p(){},NumberLiteral:function r(){},BooleanLiteral:function l(){},UndefinedLiteral:function o(){},NullLiteral:function k(){},Hash:function i(A){this.acceptArray(A.pairs)
},HashPair:function j(A){this.acceptRequired(A,"value")
}};
function n(A){this.acceptRequired(A,"path");
this.acceptArray(A.params);
this.acceptKey(A,"hash")
}function h(A){n.call(this,A);
this.acceptKey(A,"program");
this.acceptKey(A,"inverse")
}function z(A){this.acceptRequired(A,"name");
this.acceptArray(A.params);
this.acceptKey(A,"hash")
}y["default"]=x;
c.exports=y["default"]
},function(d,h,c){var q=c(1)["default"];
h.__esModule=true;
h.SourceLocation=l;
h.id=b;
h.stripFlags=g;
h.stripComment=o;
h.preparePath=f;
h.prepareMustache=k;
h.prepareRawBlock=n;
h.prepareBlock=p;
h.prepareProgram=j;
h.preparePartialBlock=m;
var e=c(6);
var a=q(e);
function i(r,t){t=t.path?t.path.original:t;
if(r.path.original!==t){var s={loc:r.path.loc};
throw new a["default"](r.path.original+" doesn't match "+t,s)
}}function l(s,r){this.source=s;
this.start={line:r.first_line,column:r.first_column};
this.end={line:r.last_line,column:r.last_column}
}function b(r){if(/^\[.*\]$/.test(r)){return r.substr(1,r.length-2)
}else{return r
}}function g(r,s){return{open:r.charAt(2)==="~",close:s.charAt(s.length-3)==="~"}
}function o(r){return r.replace(/^\{\{~?\!-?-?/,"").replace(/-?-?~?\}\}$/,"")
}function f(y,w,A){A=this.locInfo(A);
var u=y?"@":"",B=[],x=0,t="";
for(var z=0,v=w.length;
z<v;
z++){var s=w[z].part,r=w[z].original!==s;
u+=(w[z].separator||"")+s;
if(!r&&(s===".."||s==="."||s==="this")){if(B.length>0){throw new a["default"]("Invalid path: "+u,{loc:A})
}else{if(s===".."){x++;
t+="../"
}}}else{B.push(s)
}}return{type:"PathExpression",data:y,depth:x,parts:B,original:u,loc:A}
}function k(z,t,v,w,s,y){var x=w.charAt(3)||w.charAt(2),r=x!=="{"&&x!=="&";
var u=/\*/.test(w);
return{type:u?"Decorator":"MustacheStatement",path:z,params:t,hash:v,escaped:r,strip:s,loc:this.locInfo(y)}
}function n(r,u,v,t){i(r,v);
t=this.locInfo(t);
var s={type:"Program",body:u,strip:{},loc:t};
return{type:"BlockStatement",path:r.path,params:r.params,hash:r.hash,program:s,openStrip:{},inverseStrip:{},closeStrip:{},loc:t}
}function p(w,v,x,z,s,y){if(z&&z.path){i(w,z)
}var t=/\*/.test(w.open);
v.blockParams=w.blockParams;
var u=undefined,r=undefined;
if(x){if(t){throw new a["default"]("Unexpected inverse block on decorator",x)
}if(x.chain){x.program.body[0].closeStrip=z.strip
}r=x.strip;
u=x.program
}if(s){s=u;
u=v;
v=s
}return{type:t?"DecoratorBlock":"BlockStatement",path:w.path,params:w.params,hash:w.hash,program:v,inverse:u,openStrip:w.strip,inverseStrip:r,closeStrip:z&&z.strip,loc:this.locInfo(y)}
}function j(r,u){if(!u&&r.length){var t=r[0].loc,s=r[r.length-1].loc;
if(t&&s){u={source:t.source,start:{line:t.start.line,column:t.start.column},end:{line:s.end.line,column:s.end.column}}
}}return{type:"Program",body:r,strip:{},loc:u}
}function m(s,r,u,t){i(s,u);
return{type:"PartialBlockStatement",name:s.path,params:s.params,hash:s.hash,program:r,openStrip:s.strip,closeStrip:u&&u.strip,loc:this.locInfo(t)}
}},function(d,J,j){var S=j(1)["default"];
J.__esModule=true;
J.Compiler=x;
J.precompile=R;
J.compile=k;
var Q=j(6);
var t=S(Q);
var b=j(5);
var a=j(21);
var e=S(a);
var p=[].slice;
function x(){}x.prototype={compiler:x,equals:function w(U){var T=this.opcodes.length;
if(U.opcodes.length!==T){return false
}for(var W=0;
W<T;
W++){var X=this.opcodes[W],V=U.opcodes[W];
if(X.opcode!==V.opcode||!v(X.args,V.args)){return false
}}T=this.children.length;
for(var W=0;
W<T;
W++){if(!this.children[W].equals(U.children[W])){return false
}}return true
},guid:0,compile:function k(U,V){this.sourceNode=[];
this.opcodes=[];
this.children=[];
this.options=V;
this.stringParams=V.stringParams;
this.trackIds=V.trackIds;
V.blockParams=V.blockParams||[];
var W=V.knownHelpers;
V.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true,lookup:true};
if(W){for(var T in W){if(T in W){V.knownHelpers[T]=W[T]
}}}return this.accept(U)
},compileProgram:function o(U){var W=new this.compiler(),T=W.compile(U,this.options),V=this.guid++;
this.usePartial=this.usePartial||T.usePartial;
this.children[V]=T;
this.useDepths=this.useDepths||T.useDepths;
return V
},accept:function f(U){if(!this[U.type]){throw new t["default"]("Unknown type: "+U.type,U)
}this.sourceNode.unshift(U);
var T=this[U.type](U);
this.sourceNode.shift();
return T
},Program:function P(U){this.options.blockParams.unshift(U.blockParams);
var T=U.body,W=T.length;
for(var V=0;
V<W;
V++){this.accept(T[V])
}this.options.blockParams.shift();
this.isSimple=W===1;
this.blockParams=U.blockParams?U.blockParams.length:0;
return this
},BlockStatement:function O(W){g(W);
var U=W.program,T=W.inverse;
U=U&&this.compileProgram(U);
T=T&&this.compileProgram(T);
var V=this.classifySexpr(W);
if(V==="helper"){this.helperSexpr(W,U,T)
}else{if(V==="simple"){this.simpleSexpr(W);
this.opcode("pushProgram",U);
this.opcode("pushProgram",T);
this.opcode("emptyHash");
this.opcode("blockValue",W.path.original)
}else{this.ambiguousSexpr(W,U,T);
this.opcode("pushProgram",U);
this.opcode("pushProgram",T);
this.opcode("emptyHash");
this.opcode("ambiguousBlockValue")
}}this.opcode("append")
},DecoratorBlock:function r(U){var T=U.program&&this.compileProgram(U.program);
var W=this.setupFullMustacheParams(U,T,undefined),V=U.path;
this.useDecorators=true;
this.opcode("registerDecorator",W.length,V.original)
},PartialStatement:function K(W){this.usePartial=true;
var V=W.program;
if(V){V=this.compileProgram(W.program)
}var Y=W.params;
if(Y.length>1){throw new t["default"]("Unsupported number of partial arguments: "+Y.length,W)
}else{if(!Y.length){if(this.options.explicitPartialContext){this.opcode("pushLiteral","undefined")
}else{Y.push({type:"PathExpression",parts:[],depth:0})
}}}var X=W.name.original,U=W.name.type==="SubExpression";
if(U){this.accept(W.name)
}this.setupFullMustacheParams(W,V,undefined,true);
var T=W.indent||"";
if(this.options.preventIndent&&T){this.opcode("appendContent",T);
T=""
}this.opcode("invokePartial",U,X,T);
this.opcode("append")
},PartialBlockStatement:function G(T){this.PartialStatement(T)
},MustacheStatement:function z(T){this.SubExpression(T);
if(T.escaped&&!this.options.noEscape){this.opcode("appendEscaped")
}else{this.opcode("append")
}},Decorator:function h(T){this.DecoratorBlock(T)
},ContentStatement:function i(T){if(T.value){this.opcode("appendContent",T.value)
}},CommentStatement:function y(){},SubExpression:function H(U){g(U);
var T=this.classifySexpr(U);
if(T==="simple"){this.simpleSexpr(U)
}else{if(T==="helper"){this.helperSexpr(U)
}else{this.ambiguousSexpr(U)
}}},ambiguousSexpr:function u(X,V,U){var Y=X.path,W=Y.parts[0],T=V!=null||U!=null;
this.opcode("getContext",Y.depth);
this.opcode("pushProgram",V);
this.opcode("pushProgram",U);
Y.strict=true;
this.accept(Y);
this.opcode("invokeAmbiguous",W,T)
},simpleSexpr:function E(T){var U=T.path;
U.strict=true;
this.accept(U);
this.opcode("resolvePossibleLambda")
},helperSexpr:function q(W,U,T){var Y=this.setupFullMustacheParams(W,U,T),X=W.path,V=X.parts[0];
if(this.options.knownHelpers[V]){this.opcode("invokeKnownHelper",Y.length,V)
}else{if(this.options.knownHelpersOnly){throw new t["default"]("You specified knownHelpersOnly, but used the unknown helper "+V,W)
}else{X.strict=true;
X.falsy=true;
this.accept(X);
this.opcode("invokeHelper",Y.length,X.original,e["default"].helpers.simpleId(X))
}}},PathExpression:function c(U){this.addDepth(U.depth);
this.opcode("getContext",U.depth);
var T=U.parts[0],W=e["default"].helpers.scopedId(U),V=!U.depth&&!W&&this.blockParamIndex(T);
if(V){this.opcode("lookupBlockParam",V,U.parts)
}else{if(!T){this.opcode("pushContext")
}else{if(U.data){this.options.data=true;
this.opcode("lookupData",U.depth,U.parts,U.strict)
}else{this.opcode("lookupOnContext",U.parts,U.falsy,U.strict,W)
}}}},StringLiteral:function l(T){this.opcode("pushString",T.value)
},NumberLiteral:function C(T){this.opcode("pushLiteral",T.value)
},BooleanLiteral:function M(T){this.opcode("pushLiteral",T.value)
},UndefinedLiteral:function m(){this.opcode("pushLiteral","undefined")
},NullLiteral:function N(){this.opcode("pushLiteral","null")
},Hash:function B(W){var V=W.pairs,U=0,T=V.length;
this.opcode("pushHash");
for(;
U<T;
U++){this.pushParam(V[U].value)
}while(U--){this.opcode("assignToHash",V[U].key)
}this.opcode("popHash")
},opcode:function D(T){this.opcodes.push({opcode:T,args:p.call(arguments,1),loc:this.sourceNode[0].loc})
},addDepth:function s(T){if(!T){return
}this.useDepths=true
},classifySexpr:function I(W){var X=e["default"].helpers.simpleId(W.path);
var Y=X&&!!this.blockParamIndex(W.path.parts[0]);
var V=!Y&&e["default"].helpers.helperExpression(W);
var Z=!Y&&(V||X);
if(Z&&!V){var T=W.path.parts[0],U=this.options;
if(U.knownHelpers[T]){V=true
}else{if(U.knownHelpersOnly){Z=false
}}}if(V){return"helper"
}else{if(Z){return"ambiguous"
}else{return"simple"
}}},pushParams:function L(V){for(var U=0,T=V.length;
U<T;
U++){this.pushParam(V[U])
}},pushParam:function F(W){var V=W.value!=null?W.value:W.original||"";
if(this.stringParams){if(V.replace){V=V.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")
}if(W.depth){this.addDepth(W.depth)
}this.opcode("getContext",W.depth||0);
this.opcode("pushStringParam",V,W.type);
if(W.type==="SubExpression"){this.accept(W)
}}else{if(this.trackIds){var U=undefined;
if(W.parts&&!e["default"].helpers.scopedId(W)&&!W.depth){U=this.blockParamIndex(W.parts[0])
}if(U){var T=W.parts.slice(1).join(".");
this.opcode("pushId","BlockParam",U,T)
}else{V=W.original||V;
if(V.replace){V=V.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")
}this.opcode("pushId",W.type,V)
}}this.accept(W)
}},setupFullMustacheParams:function A(W,U,T,V){var X=W.params;
this.pushParams(X);
this.opcode("pushProgram",U);
this.opcode("pushProgram",T);
if(W.hash){this.accept(W.hash)
}else{this.opcode("emptyHash",V)
}return X
},blockParamIndex:function n(U){for(var X=0,T=this.options.blockParams.length;
X<T;
X++){var V=this.options.blockParams[X],W=V&&b.indexOf(V,U);
if(V&&W>=0){return[X,W]
}}}};
function R(V,W,X){if(V==null||typeof V!=="string"&&V.type!=="Program"){throw new t["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+V)
}W=W||{};
if(!("data" in W)){W.data=true
}if(W.compat){W.useDepths=true
}var U=X.parse(V,W),T=new X.Compiler().compile(U,W);
return new X.JavaScriptCompiler().compile(T,W)
}function k(T,V,W){if(V===undefined){V={}
}if(T==null||typeof T!=="string"&&T.type!=="Program"){throw new t["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+T)
}if(!("data" in V)){V.data=true
}if(V.compat){V.useDepths=true
}var Y=undefined;
function X(){var ab=W.parse(T,V),aa=new W.Compiler().compile(ab,V),Z=new W.JavaScriptCompiler().compile(aa,V,undefined,true);
return W.template(Z)
}function U(Z,aa){if(!Y){Y=X()
}return Y.call(this,Z,aa)
}U._setup=function(Z){if(!Y){Y=X()
}return Y._setup(Z)
};
U._child=function(Z,ab,aa,ac){if(!Y){Y=X()
}return Y._child(Z,ab,aa,ac)
};
return U
}function v(U,T){if(U===T){return true
}if(b.isArray(U)&&b.isArray(T)&&U.length===T.length){for(var V=0;
V<U.length;
V++){if(!v(U[V],T[V])){return false
}}return true
}}function g(U){if(!U.path.parts){var T=U.path;
U.path={type:"PathExpression",data:false,depth:0,parts:[T.original+""],original:T.original+"",loc:T.loc}
}}},function(g,ag,p){var ap=p(1)["default"];
ag.__esModule=true;
var E=p(4);
var al=p(6);
var I=ap(al);
var b=p(5);
var Y=p(29);
var J=ap(Y);
function j(ar){this.value=ar
}function c(){}c.prototype={nameLookup:function O(at,ar){if(c.isValidJavaScriptVariableName(ar)){return[at,".",ar]
}else{return[at,"[",JSON.stringify(ar),"]"]
}},depthedLookup:function P(ar){return[this.aliasable("container.lookup"),'(depths, "',ar,'")']
},compilerInfo:function z(){var at=E.COMPILER_REVISION,ar=E.REVISION_CHANGES[at];
return[at,ar]
},appendToBuffer:function an(au,ar,at){if(!b.isArray(au)){au=[au]
}au=this.source.wrap(au,ar);
if(this.environment.isSimple){return["return ",au,";"]
}else{if(at){return["buffer += ",au,";"]
}else{au.appendToBuffer=true;
return au
}}},initializeBuffer:function aj(){return this.quotedString("")
},compile:function q(aw,aF,at,az){this.environment=aw;
this.options=aF;
this.stringParams=this.options.stringParams;
this.trackIds=this.options.trackIds;
this.precompile=!az;
this.name=this.environment.name;
this.isChild=!!at;
this.context=at||{decorators:[],programs:[],environments:[]};
this.preamble();
this.stackSlot=0;
this.stackVars=[];
this.aliases={};
this.registers={list:[]};
this.hashes=[];
this.compileStack=[];
this.inlineStack=[];
this.blockParams=[];
this.compileChildren(aw,aF);
this.useDepths=this.useDepths||aw.useDepths||aw.useDecorators||this.options.compat;
this.useBlockParams=this.useBlockParams||aw.useBlockParams;
var aB=aw.opcodes,ax=undefined,aD=undefined,ay=undefined,av=undefined;
for(ay=0,av=aB.length;
ay<av;
ay++){ax=aB[ay];
this.source.currentLocation=ax.loc;
aD=aD||ax.loc;
this[ax.opcode].apply(this,ax.args)
}this.source.currentLocation=aD;
this.pushSource("");
if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new I["default"]("Compile completed with content left on stack")
}if(!this.decorators.isEmpty()){this.useDecorators=true;
this.decorators.prepend("var decorators = container.decorators;\n");
this.decorators.push("return fn;");
if(az){this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()])
}else{this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n");
this.decorators.push("}\n");
this.decorators=this.decorators.merge()
}}else{this.decorators=undefined
}var aC=this.createFunctionContext(az);
if(!this.isChild){var aA={compiler:this.compilerInfo(),main:aC};
if(this.decorators){aA.main_d=this.decorators;
aA.useDecorators=true
}var ar=this.context;
var au=ar.programs;
var aE=ar.decorators;
for(ay=0,av=au.length;
ay<av;
ay++){if(au[ay]){aA[ay]=au[ay];
if(aE[ay]){aA[ay+"_d"]=aE[ay];
aA.useDecorators=true
}}}if(this.environment.usePartial){aA.usePartial=true
}if(this.options.data){aA.useData=true
}if(this.useDepths){aA.useDepths=true
}if(this.useBlockParams){aA.useBlockParams=true
}if(this.options.compat){aA.compat=true
}if(!az){aA.compiler=JSON.stringify(aA.compiler);
this.source.currentLocation={start:{line:1,column:0}};
aA=this.objectLiteral(aA);
if(aF.srcName){aA=aA.toStringWithSourceMap({file:aF.destName});
aA.map=aA.map&&aA.map.toString()
}else{aA=aA.toString()
}}else{aA.compilerOptions=this.options
}return aA
}else{return aC
}},preamble:function X(){this.lastContext=0;
this.source=new J["default"](this.options.srcName);
this.decorators=new J["default"](this.options.srcName)
},createFunctionContext:function am(at){var ay="";
var ax=this.stackVars.concat(this.registers.list);
if(ax.length>0){ay+=", "+ax.join(", ")
}var aw=0;
for(var ar in this.aliases){var au=this.aliases[ar];
if(this.aliases.hasOwnProperty(ar)&&au.children&&au.referenceCount>1){ay+=", alias"+ ++aw+"="+ar;
au.children[0]="alias"+aw
}}var az=["container","depth0","helpers","partials","data"];
if(this.useBlockParams||this.useDepths){az.push("blockParams")
}if(this.useDepths){az.push("depths")
}var av=this.mergeSource(ay);
if(at){az.push(av);
return Function.apply(this,az)
}else{return this.source.wrap(["function(",az.join(","),") {\n  ",av,"}"])
}},mergeSource:function C(ax){var av=this.environment.isSimple,au=!this.forceBuffer,ar=undefined,at=undefined,aw=undefined,ay=undefined;
this.source.each(function(az){if(az.appendToBuffer){if(aw){az.prepend("  + ")
}else{aw=az
}ay=az
}else{if(aw){if(!at){ar=true
}else{aw.prepend("buffer += ")
}ay.add(";");
aw=ay=undefined
}at=true;
if(!av){au=false
}}});
if(au){if(aw){aw.prepend("return ");
ay.add(";")
}else{if(!at){this.source.push('return "";')
}}}else{ax+=", buffer = "+(ar?"":this.initializeBuffer());
if(aw){aw.prepend("return buffer + ");
ay.add(";")
}else{this.source.push("return buffer;")
}}if(ax){this.source.prepend("var "+ax.substring(2)+(ar?"":";\n"))
}return this.source.merge()
},blockValue:function d(at){var au=this.aliasable("helpers.blockHelperMissing"),av=[this.contextName(0)];
this.setupHelperArgs(at,0,av);
var ar=this.popStack();
av.splice(1,0,ar);
this.push(this.source.functionCall(au,"call",av))
},ambiguousBlockValue:function T(){var ar=this.aliasable("helpers.blockHelperMissing"),au=[this.contextName(0)];
this.setupHelperArgs("",0,au,true);
this.flushInline();
var at=this.topStack();
au.splice(1,0,at);
this.pushSource(["if (!",this.lastHelper,") { ",at," = ",this.source.functionCall(ar,"call",au),"}"])
},appendContent:function f(ar){if(this.pendingContent){ar=this.pendingContent+ar
}else{this.pendingLocation=this.source.currentLocation
}this.pendingContent=ar
},append:function aa(){if(this.isInline()){this.replaceStack(function(at){return[" != null ? ",at,' : ""']
});
this.pushSource(this.appendToBuffer(this.popStack()))
}else{var ar=this.popStack();
this.pushSource(["if (",ar," != null) { ",this.appendToBuffer(ar,undefined,true)," }"]);
if(this.environment.isSimple){this.pushSource(["else { ",this.appendToBuffer("''",undefined,true)," }"])
}}},appendEscaped:function m(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))
},getContext:function A(ar){this.lastContext=ar
},pushContext:function t(){this.pushStackLiteral(this.contextName(this.lastContext))
},lookupOnContext:function aq(av,au,ar,aw){var at=0;
if(!aw&&this.options.compat&&!this.lastContext){this.push(this.depthedLookup(av[at++]))
}else{this.pushContext()
}this.resolvePath("context",av,at,au,ar)
},lookupBlockParam:function B(at,ar){this.useBlockParams=true;
this.push(["blockParams[",at[0],"][",at[1],"]"]);
this.resolvePath("context",ar,1)
},lookupData:function o(au,at,ar){if(!au){this.pushStackLiteral("data")
}else{this.pushStackLiteral("container.data(data, "+au+")")
}this.resolvePath("data",at,0,true,ar)
},resolvePath:function Q(av,ax,au,aw,at){var ay=this;
if(this.options.strict||this.options.assumeObjects){this.push(V(this.options.strict&&at,this,ax,av));
return
}var ar=ax.length;
for(;
au<ar;
au++){this.replaceStack(function(aA){var az=ay.nameLookup(aA,ax[au],av);
if(!aw){return[" != null ? ",az," : ",aA]
}else{return[" && ",az]
}})
}},resolvePossibleLambda:function af(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])
},pushStringParam:function ao(ar,at){this.pushContext();
this.pushString(at);
if(at!=="SubExpression"){if(typeof ar==="string"){this.pushString(ar)
}else{this.pushStackLiteral(ar)
}}},emptyHash:function x(ar){if(this.trackIds){this.push("{}")
}if(this.stringParams){this.push("{}");
this.push("{}")
}this.pushStackLiteral(ar?"undefined":"{}")
},pushHash:function R(){if(this.hash){this.hashes.push(this.hash)
}this.hash={values:[],types:[],contexts:[],ids:[]}
},popHash:function N(){var ar=this.hash;
this.hash=this.hashes.pop();
if(this.trackIds){this.push(this.objectLiteral(ar.ids))
}if(this.stringParams){this.push(this.objectLiteral(ar.contexts));
this.push(this.objectLiteral(ar.types))
}this.push(this.objectLiteral(ar.values))
},pushString:function k(ar){this.pushStackLiteral(this.quotedString(ar))
},pushLiteral:function H(ar){this.pushStackLiteral(ar)
},pushProgram:function v(ar){if(ar!=null){this.pushStackLiteral(this.programExpression(ar))
}else{this.pushStackLiteral(null)
}},registerDecorator:function K(av,au){var ar=this.nameLookup("decorators",au,"decorator"),at=this.setupHelperArgs(au,av);
this.decorators.push(["fn = ",this.decorators.functionCall(ar,"",["fn","props","container",at])," || fn;"])
},invokeHelper:function Z(aw,ar,au){var ay=this.popStack(),at=this.setupHelper(aw,ar),ax=au?[at.name," || "]:"";
var av=["("].concat(ax,ay);
if(!this.options.strict){av.push(" || ",this.aliasable("helpers.helperMissing"))
}av.push(")");
this.push(this.source.functionCall(av,"call",at.callParams))
},invokeKnownHelper:function n(au,ar){var at=this.setupHelper(au,ar);
this.push(this.source.functionCall(at.name,"call",at.callParams))
},invokeAmbiguous:function ak(ar,aw){this.useRegister("helper");
var ax=this.popStack();
this.emptyHash();
var at=this.setupHelper(0,ar,aw);
var au=this.lastHelper=this.nameLookup("helpers",ar,"helper");
var av=["(","(helper = ",au," || ",ax,")"];
if(!this.options.strict){av[0]="(helper = ";
av.push(" != null ? helper : ",this.aliasable("helpers.helperMissing"))
}this.push(["(",av,at.paramsInit?["),(",at.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",at.callParams)," : helper))"])
},invokePartial:function S(at,av,ar){var aw=[],au=this.setupParams(av,1,aw);
if(at){av=this.popStack();
delete au.name
}if(ar){au.indent=JSON.stringify(ar)
}au.helpers="helpers";
au.partials="partials";
au.decorators="container.decorators";
if(!at){aw.unshift(this.nameLookup("partials",av,"partial"))
}else{aw.unshift(av)
}if(this.options.compat){au.depths="depths"
}au=this.objectLiteral(au);
aw.push(au);
this.push(this.source.functionCall("container.invokePartial","",aw))
},assignToHash:function i(at){var av=this.popStack(),ar=undefined,au=undefined,ax=undefined;
if(this.trackIds){ax=this.popStack()
}if(this.stringParams){au=this.popStack();
ar=this.popStack()
}var aw=this.hash;
if(ar){aw.contexts[at]=ar
}if(au){aw.types[at]=au
}if(ax){aw.ids[at]=ax
}aw.values[at]=av
},pushId:function e(at,ar,au){if(at==="BlockParam"){this.pushStackLiteral("blockParams["+ar[0]+"].path["+ar[1]+"]"+(au?" + "+JSON.stringify("."+au):""))
}else{if(at==="PathExpression"){this.pushString(ar)
}else{if(at==="SubExpression"){this.pushStackLiteral("true")
}else{this.pushStackLiteral("null")
}}}},compiler:c,compileChildren:function F(ar,av){var ax=ar.children,az=undefined,ay=undefined;
for(var aw=0,at=ax.length;
aw<at;
aw++){az=ax[aw];
ay=new this.compiler();
var au=this.matchExistingProgram(az);
if(au==null){this.context.programs.push("");
au=this.context.programs.length;
az.index=au;
az.name="program"+au;
this.context.programs[au]=ay.compile(az,av,this.context,!this.precompile);
this.context.decorators[au]=ay.decorators;
this.context.environments[au]=az;
this.useDepths=this.useDepths||ay.useDepths;
this.useBlockParams=this.useBlockParams||ay.useBlockParams
}else{az.index=au;
az.name="program"+au;
this.useDepths=this.useDepths||az.useDepths;
this.useBlockParams=this.useBlockParams||az.useBlockParams
}}},matchExistingProgram:function s(av){for(var au=0,at=this.context.environments.length;
au<at;
au++){var ar=this.context.environments[au];
if(ar&&ar.equals(av)){return au
}}},programExpression:function G(ar){var au=this.environment.children[ar],at=[au.index,"data",au.blockParams];
if(this.useBlockParams||this.useDepths){at.push("blockParams")
}if(this.useDepths){at.push("depths")
}return"container.program("+at.join(", ")+")"
},useRegister:function W(ar){if(!this.registers[ar]){this.registers[ar]=true;
this.registers.list.push(ar)
}},push:function ae(ar){if(!(ar instanceof j)){ar=this.source.wrap(ar)
}this.inlineStack.push(ar);
return ar
},pushStackLiteral:function l(ar){this.push(new j(ar))
},pushSource:function u(ar){if(this.pendingContent){this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation));
this.pendingContent=undefined
}if(ar){this.source.push(ar)
}},replaceStack:function a(az){var ax=["("],ar=undefined,aw=undefined,au=undefined;
if(!this.isInline()){throw new I["default"]("replaceStack on non-inline")
}var ay=this.popStack(true);
if(ay instanceof j){ar=[ay.value];
ax=["(",ar];
au=true
}else{aw=true;
var at=this.incrStack();
ax=["((",this.push(at)," = ",ay,")"];
ar=this.topStack()
}var av=az.call(this,ar);
if(!au){this.popStack()
}if(aw){this.stackSlot--
}this.push(ax.concat(av,")"))
},incrStack:function U(){this.stackSlot++;
if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)
}return this.topStackName()
},topStackName:function ai(){return"stack"+this.stackSlot
},flushInline:function ah(){var av=this.inlineStack;
this.inlineStack=[];
for(var au=0,at=av.length;
au<at;
au++){var aw=av[au];
if(aw instanceof j){this.compileStack.push(aw)
}else{var ar=this.incrStack();
this.pushSource([ar," = ",aw,";"]);
this.compileStack.push(ar)
}}},isInline:function w(){return this.inlineStack.length
},popStack:function h(ar){var au=this.isInline(),at=(au?this.inlineStack:this.compileStack).pop();
if(!ar&&at instanceof j){return at.value
}else{if(!au){if(!this.stackSlot){throw new I["default"]("Invalid stack pop")
}this.stackSlot--
}return at
}},topStack:function D(){var ar=this.isInline()?this.inlineStack:this.compileStack,at=ar[ar.length-1];
if(at instanceof j){return at.value
}else{return at
}},contextName:function ad(ar){if(this.useDepths&&ar){return"depths["+ar+"]"
}else{return"depth"+ar
}},quotedString:function y(ar){return this.source.quotedString(ar)
},objectLiteral:function r(ar){return this.source.objectLiteral(ar)
},aliasable:function ac(at){var ar=this.aliases[at];
if(ar){ar.referenceCount++;
return ar
}ar=this.aliases[at]=this.source.wrap(at);
ar.aliasable=true;
ar.referenceCount=1;
return ar
},setupHelper:function ab(aw,au,at){var av=[],ax=this.setupHelperArgs(au,aw,av,at);
var ar=this.nameLookup("helpers",au,"helper");
return{params:av,paramsInit:ax,name:ar,callParams:[this.contextName(0)].concat(av)}
},setupParams:function M(au,ay,aw){var aD={},aB=[],aC=[],at=[],ar=!aw,av=undefined;
if(ar){aw=[]
}aD.name=this.quotedString(au);
aD.hash=this.popStack();
if(this.trackIds){aD.hashIds=this.popStack()
}if(this.stringParams){aD.hashTypes=this.popStack();
aD.hashContexts=this.popStack()
}var ax=this.popStack(),aA=this.popStack();
if(aA||ax){aD.fn=aA||"container.noop";
aD.inverse=ax||"container.noop"
}var az=ay;
while(az--){av=this.popStack();
aw[az]=av;
if(this.trackIds){at[az]=this.popStack()
}if(this.stringParams){aC[az]=this.popStack();
aB[az]=this.popStack()
}}if(ar){aD.args=this.source.generateArray(aw)
}if(this.trackIds){aD.ids=this.source.generateArray(at)
}if(this.stringParams){aD.types=this.source.generateArray(aC);
aD.contexts=this.source.generateArray(aB)
}if(this.options.data){aD.data="data"
}if(this.useBlockParams){aD.blockParams="blockParams"
}return aD
},setupHelperArgs:function L(au,aw,av,at){var ar=this.setupParams(au,aw,av);
ar=this.objectLiteral(ar);
if(at){this.useRegister("options");
av.push("options");
return["options=",ar]
}else{if(av){av.push(ar);
return""
}else{return ar
}}}};
(function(){var ar=("break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false").split(" ");
var av=c.RESERVED_WORDS={};
for(var au=0,at=ar.length;
au<at;
au++){av[ar[au]]=true
}})();
c.isValidJavaScriptVariableName=function(ar){return !c.RESERVED_WORDS[ar]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(ar)
};
function V(ay,aw,ax,av){var at=aw.popStack(),au=0,ar=ax.length;
if(ay){ar--
}for(;
au<ar;
au++){at=aw.nameLookup(at,ax[au],av)
}if(ay){return[aw.aliasable("container.strict"),"(",at,", ",aw.quotedString(ax[au]),")"]
}else{return at
}}ag["default"]=c;
g.exports=ag["default"]
},function(b,x,d){x.__esModule=true;
var p=d(5);
var g=undefined;
try{if(false){var s=require("source-map");
g=s.SourceNode
}}catch(h){}if(!g){g=function(y,z,A,B){this.src="";
if(B){this.add(B)
}};
g.prototype={add:function r(y){if(p.isArray(y)){y=y.join("")
}this.src+=y
},prepend:function w(y){if(p.isArray(y)){y=y.join("")
}this.src=y+this.src
},toStringWithSourceMap:function e(){return{code:this.toString()}
},toString:function u(){return this.src
}}
}function c(B,z,D){if(p.isArray(B)){var A=[];
for(var C=0,y=B.length;
C<y;
C++){A.push(z.wrap(B[C],D))
}return A
}else{if(typeof B==="boolean"||typeof B==="number"){return B+""
}}return B
}function k(y){this.srcFile=y;
this.source=[]
}k.prototype={isEmpty:function q(){return !this.source.length
},prepend:function w(y,z){this.source.unshift(this.wrap(y,z))
},push:function l(y,z){this.source.push(this.wrap(y,z))
},merge:function i(){var y=this.empty();
this.each(function(z){y.add(["  ",z,"\n"])
});
return y
},each:function f(z){for(var A=0,y=this.source.length;
A<y;
A++){z(this.source[A])
}},empty:function o(){var y=this.currentLocation||{start:{}};
return new g(y.start.line,y.start.column,this.srcFile)
},wrap:function n(y){var z=arguments.length<=1||arguments[1]===undefined?this.currentLocation||{start:{}}:arguments[1];
if(y instanceof g){return y
}y=c(y,this,z);
return new g(z.start.line,z.start.column,this.srcFile,y)
},functionCall:function v(z,y,A){A=this.generateList(A);
return this.wrap([z,y?"."+y+"(":"(",A,")"])
},quotedString:function m(y){return'"'+(y+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'
},objectLiteral:function t(C){var B=[];
for(var z in C){if(C.hasOwnProperty(z)){var A=c(C[z],this);
if(A!=="undefined"){B.push([this.quotedString(z),":",A])
}}}var y=this.generateList(B);
y.prepend("{");
y.add("}");
return y
},generateList:function a(z){var A=this.empty();
for(var B=0,y=z.length;
B<y;
B++){if(B){A.add(",")
}A.add(c(z[B],this))
}return A
},generateArray:function j(y){var z=this.generateList(y);
z.prepend("[");
z.add("]");
return z
}};
x["default"]=k;
b.exports=x["default"]
}])
});
/*! iScroll v5.2.0-snapshot ~ (c) 2008-2017 Matteo Spinelli ~ http://cubiq.org/license */
(function(d,a,c){var f=d.requestAnimationFrame||d.webkitRequestAnimationFrame||d.mozRequestAnimationFrame||d.oRequestAnimationFrame||d.msRequestAnimationFrame||function(g){d.setTimeout(g,1000/60)
};
var b=(function(){var k={};
var l=a.createElement("div").style;
var i=(function(){var p=["t","webkitT","MozT","msT","OT"],n,o=0,m=p.length;
for(;
o<m;
o++){n=p[o]+"ransform";
if(n in l){return p[o].substr(0,p[o].length-1)
}}return false
})();
function j(m){if(i===false){return false
}if(i===""){return m
}return i+m.charAt(0).toUpperCase()+m.substr(1)
}k.getTime=Date.now||function g(){return new Date().getTime()
};
k.extend=function(o,n){for(var m in n){o[m]=n[m]
}};
k.addEvent=function(p,o,n,m){p.addEventListener(o,n,!!m)
};
k.removeEvent=function(p,o,n,m){p.removeEventListener(o,n,!!m)
};
k.prefixPointerEvent=function(m){return d.MSPointerEvent?"MSPointer"+m.charAt(7).toUpperCase()+m.substr(8):m
};
k.momentum=function(s,o,p,m,t,u){var n=s-o,q=c.abs(n)/p,v,r;
u=u===undefined?0.0006:u;
v=s+(q*q)/(2*u)*(n<0?-1:1);
r=q/u;
if(v<m){v=t?m-(t/2.5*(q/8)):m;
n=c.abs(v-s);
r=n/q
}else{if(v>0){v=t?t/2.5*(q/8):0;
n=c.abs(s)+v;
r=n/q
}}return{destination:c.round(v),duration:r}
};
var h=j("transform");
k.extend(k,{hasTransform:h!==false,hasPerspective:j("perspective") in l,hasTouch:"ontouchstart" in d,hasPointer:!!(d.PointerEvent||d.MSPointerEvent),hasTransition:j("transition") in l});
k.isBadAndroid=(function(){var m=d.navigator.appVersion;
if(/Android/.test(m)&&!(/Chrome\/\d/.test(m))){var n=m.match(/Safari\/(\d+.\d)/);
if(n&&typeof n==="object"&&n.length>=2){return parseFloat(n[1])<535.19
}else{return true
}}else{return false
}})();
k.extend(k.style={},{transform:h,transitionTimingFunction:j("transitionTimingFunction"),transitionDuration:j("transitionDuration"),transitionDelay:j("transitionDelay"),transformOrigin:j("transformOrigin"),touchAction:j("touchAction")});
k.hasClass=function(n,o){var m=new RegExp("(^|\\s)"+o+"(\\s|$)");
return m.test(n.className)
};
k.addClass=function(n,o){if(k.hasClass(n,o)){return
}var m=n.className.split(" ");
m.push(o);
n.className=m.join(" ")
};
k.removeClass=function(n,o){if(!k.hasClass(n,o)){return
}var m=new RegExp("(^|\\s)"+o+"(\\s|$)","g");
n.className=n.className.replace(m," ")
};
k.offset=function(m){var o=-m.offsetLeft,n=-m.offsetTop;
while(m=m.offsetParent){o-=m.offsetLeft;
n-=m.offsetTop
}return{left:o,top:n}
};
k.preventDefaultException=function(o,n){for(var m in n){if(n[m].test(o[m])){return true
}}return false
};
k.extend(k.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3});
k.extend(k.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(m){return m*(2-m)
}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(m){return c.sqrt(1-(--m*m))
}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(n){var m=4;
return(n=n-1)*n*((m+1)*n+m)+1
}},bounce:{style:"",fn:function(m){if((m/=1)<(1/2.75)){return 7.5625*m*m
}else{if(m<(2/2.75)){return 7.5625*(m-=(1.5/2.75))*m+0.75
}else{if(m<(2.5/2.75)){return 7.5625*(m-=(2.25/2.75))*m+0.9375
}else{return 7.5625*(m-=(2.625/2.75))*m+0.984375
}}}}},elastic:{style:"",fn:function(m){var n=0.22,o=0.4;
if(m===0){return 0
}if(m==1){return 1
}return(o*c.pow(2,-10*m)*c.sin((m-n/4)*(2*c.PI)/n)+1)
}}});
k.tap=function(o,m){var n=a.createEvent("Event");
n.initEvent(m,true,true);
n.pageX=o.pageX;
n.pageY=o.pageY;
o.target.dispatchEvent(n)
};
k.click=function(o){var n=o.target,m;
if(!(/(SELECT|INPUT|TEXTAREA)/i).test(n.tagName)){m=a.createEvent(d.MouseEvent?"MouseEvents":"Event");
m.initEvent("click",true,true);
m.view=o.view||d;
m.detail=1;
m.screenX=n.screenX||0;
m.screenY=n.screenY||0;
m.clientX=n.clientX||0;
m.clientY=n.clientY||0;
m.ctrlKey=!!o.ctrlKey;
m.altKey=!!o.altKey;
m.shiftKey=!!o.shiftKey;
m.metaKey=!!o.metaKey;
m.button=0;
m.relatedTarget=null;
m._constructed=true;
n.dispatchEvent(m)
}};
k.getTouchAction=function(m,o){var n="none";
if(m==="vertical"){n="pan-y"
}else{if(m==="horizontal"){n="pan-x"
}}if(o&&n!="none"){n+=" pinch-zoom"
}return n
};
k.getRect=function(m){if(m instanceof SVGElement){var n=m.getBoundingClientRect();
return{top:n.top,left:n.left,width:n.width,height:n.height}
}else{return{top:m.offsetTop,left:m.offsetLeft,width:m.offsetWidth,height:m.offsetHeight}
}};
return k
})();
function e(j,g){this.wrapper=typeof j=="string"?a.querySelector(j):j;
this.scroller=this.wrapper.children[0];
this.scrollerStyle=this.scroller.style;
this.options={disablePointer:!b.hasPointer,disableTouch:b.hasPointer||!b.hasTouch,disableMouse:b.hasPointer||b.hasTouch,startX:0,startY:0,scrollY:true,directionLockThreshold:5,momentum:true,bounce:true,bounceTime:600,bounceEasing:"",preventDefault:true,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:true,useTransition:true,useTransform:true,bindToWrapper:typeof d.onmousedown==="undefined"};
for(var h in g){this.options[h]=g[h]
}this.translateZ=this.options.HWCompositing&&b.hasPerspective?" translateZ(0)":"";
this.options.useTransition=b.hasTransition&&this.options.useTransition;
this.options.useTransform=b.hasTransform&&this.options.useTransform;
this.options.eventPassthrough=this.options.eventPassthrough===true?"vertical":this.options.eventPassthrough;
this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault;
this.options.scrollY=this.options.eventPassthrough=="vertical"?false:this.options.scrollY;
this.options.scrollX=this.options.eventPassthrough=="horizontal"?false:this.options.scrollX;
this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough;
this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold;
this.options.bounceEasing=typeof this.options.bounceEasing=="string"?b.ease[this.options.bounceEasing]||b.ease.circular:this.options.bounceEasing;
this.options.resizePolling=this.options.resizePolling===undefined?60:this.options.resizePolling;
if(this.options.tap===true){this.options.tap="tap"
}if(!this.options.useTransition&&!this.options.useTransform){if(!(/relative|absolute/i).test(this.scrollerStyle.position)){this.scrollerStyle.position="relative"
}}this.x=0;
this.y=0;
this.directionX=0;
this.directionY=0;
this._events={};
this._init();
this.refresh();
this.scrollTo(this.options.startX,this.options.startY);
this.enable()
}e.prototype={version:"5.2.0-snapshot",_init:function(){this._initEvents()
},destroy:function(){this._initEvents(true);
clearTimeout(this.resizeTimeout);
this.resizeTimeout=null;
this._execEvent("destroy")
},_transitionEnd:function(g){if(g.target!=this.scroller||!this.isInTransition){return
}this._transitionTime();
if(!this.resetPosition(this.options.bounceTime)){this.isInTransition=false;
this._execEvent("scrollEnd")
}},_start:function(i){if(b.eventType[i.type]!=1){var h;
if(!i.which){h=(i.button<2)?0:((i.button==4)?1:2)
}else{h=i.button
}if(h!==0){return
}}if(!this.enabled||(this.initiated&&b.eventType[i.type]!==this.initiated)){return
}if(this.options.preventDefault&&!b.isBadAndroid&&!b.preventDefaultException(i.target,this.options.preventDefaultException)){i.preventDefault()
}var g=i.touches?i.touches[0]:i,j;
this.initiated=b.eventType[i.type];
this.moved=false;
this.distX=0;
this.distY=0;
this.directionX=0;
this.directionY=0;
this.directionLocked=0;
this.startTime=b.getTime();
if(this.options.useTransition&&this.isInTransition){this._transitionTime();
this.isInTransition=false;
j=this.getComputedPosition();
this._translate(c.round(j.x),c.round(j.y));
this._execEvent("scrollEnd")
}else{if(!this.options.useTransition&&this.isAnimating){this.isAnimating=false;
this._execEvent("scrollEnd")
}}this.startX=this.x;
this.startY=this.y;
this.absStartX=this.x;
this.absStartY=this.y;
this.pointX=g.pageX;
this.pointY=g.pageY;
this._execEvent("beforeScrollStart")
},_move:function(l){if(!this.enabled||b.eventType[l.type]!==this.initiated){return
}if(this.options.preventDefault){l.preventDefault()
}var n=l.touches?l.touches[0]:l,i=n.pageX-this.pointX,h=n.pageY-this.pointY,m=b.getTime(),g,o,k,j;
this.pointX=n.pageX;
this.pointY=n.pageY;
this.distX+=i;
this.distY+=h;
k=c.abs(this.distX);
j=c.abs(this.distY);
if(m-this.endTime>300&&(k<10&&j<10)){return
}if(!this.directionLocked&&!this.options.freeScroll){if(k>j+this.options.directionLockThreshold){this.directionLocked="h"
}else{if(j>=k+this.options.directionLockThreshold){this.directionLocked="v"
}else{this.directionLocked="n"
}}}if(this.directionLocked=="h"){if(this.options.eventPassthrough=="vertical"){l.preventDefault()
}else{if(this.options.eventPassthrough=="horizontal"){this.initiated=false;
return
}}h=0
}else{if(this.directionLocked=="v"){if(this.options.eventPassthrough=="horizontal"){l.preventDefault()
}else{if(this.options.eventPassthrough=="vertical"){this.initiated=false;
return
}}i=0
}}i=this.hasHorizontalScroll?i:0;
h=this.hasVerticalScroll?h:0;
g=this.x+i;
o=this.y+h;
if(g>0||g<this.maxScrollX){g=this.options.bounce?this.x+i/3:g>0?0:this.maxScrollX
}if(o>0||o<this.maxScrollY){o=this.options.bounce?this.y+h/3:o>0?0:this.maxScrollY
}this.directionX=i>0?-1:i<0?1:0;
this.directionY=h>0?-1:h<0?1:0;
if(!this.moved){this._execEvent("scrollStart")
}this.moved=true;
this._translate(g,o);
if(m-this.startTime>300){this.startTime=m;
this.startX=this.x;
this.startY=this.y
}},_end:function(l){if(!this.enabled||b.eventType[l.type]!==this.initiated){return
}if(this.options.preventDefault&&!b.preventDefaultException(l.target,this.options.preventDefaultException)){l.preventDefault()
}var n=l.changedTouches?l.changedTouches[0]:l,i,h,k=b.getTime()-this.startTime,g=c.round(this.x),q=c.round(this.y),p=c.abs(g-this.startX),o=c.abs(q-this.startY),j=0,m="";
this.isInTransition=0;
this.initiated=0;
this.endTime=b.getTime();
if(this.resetPosition(this.options.bounceTime)){return
}this.scrollTo(g,q);
if(!this.moved){if(this.options.tap){b.tap(l,this.options.tap)
}if(this.options.click){b.click(l)
}this._execEvent("scrollCancel");
return
}if(this._events.flick&&k<200&&p<100&&o<100){this._execEvent("flick");
return
}if(this.options.momentum&&k<300){i=this.hasHorizontalScroll?b.momentum(this.x,this.startX,k,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:g,duration:0};
h=this.hasVerticalScroll?b.momentum(this.y,this.startY,k,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:q,duration:0};
g=i.destination;
q=h.destination;
j=c.max(i.duration,h.duration);
this.isInTransition=1
}if(g!=this.x||q!=this.y){if(g>0||g<this.maxScrollX||q>0||q<this.maxScrollY){m=b.ease.quadratic
}this.scrollTo(g,q,j,m);
return
}this._execEvent("scrollEnd")
},_resize:function(){var g=this;
clearTimeout(this.resizeTimeout);
this.resizeTimeout=setTimeout(function(){g.refresh()
},this.options.resizePolling)
},resetPosition:function(h){var g=this.x,i=this.y;
h=h||0;
if(!this.hasHorizontalScroll||this.x>0){g=0
}else{if(this.x<this.maxScrollX){g=this.maxScrollX
}}if(!this.hasVerticalScroll||this.y>0){i=0
}else{if(this.y<this.maxScrollY){i=this.maxScrollY
}}if(g==this.x&&i==this.y){return false
}this.scrollTo(g,i,h,this.options.bounceEasing);
return true
},disable:function(){this.enabled=false
},enable:function(){this.enabled=true
},refresh:function(){b.getRect(this.wrapper);
this.wrapperWidth=this.wrapper.clientWidth;
this.wrapperHeight=this.wrapper.clientHeight;
var g=b.getRect(this.scroller);
this.scrollerWidth=g.width;
this.scrollerHeight=g.height;
this.maxScrollX=this.wrapperWidth-this.scrollerWidth;
this.maxScrollY=this.wrapperHeight-this.scrollerHeight;
this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0;
this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0;
if(!this.hasHorizontalScroll){this.maxScrollX=0;
this.scrollerWidth=this.wrapperWidth
}if(!this.hasVerticalScroll){this.maxScrollY=0;
this.scrollerHeight=this.wrapperHeight
}this.endTime=0;
this.directionX=0;
this.directionY=0;
if(b.hasPointer&&!this.options.disablePointer){this.wrapper.style[b.style.touchAction]=b.getTouchAction(this.options.eventPassthrough,true);
if(!this.wrapper.style[b.style.touchAction]){this.wrapper.style[b.style.touchAction]=b.getTouchAction(this.options.eventPassthrough,false)
}}this.wrapperOffset=b.offset(this.wrapper);
this._execEvent("refresh");
this.resetPosition()
},on:function(h,g){if(!this._events[h]){this._events[h]=[]
}this._events[h].push(g)
},off:function(i,h){if(!this._events[i]){return
}var g=this._events[i].indexOf(h);
if(g>-1){this._events[i].splice(g,1)
}},_execEvent:function(j){if(!this._events[j]){return
}var h=0,g=this._events[j].length;
if(!g){return
}for(;
h<g;
h++){this._events[j][h].apply(this,[].slice.call(arguments,1))
}},scrollBy:function(g,j,h,i){g=this.x+g;
j=this.y+j;
h=h||0;
this.scrollTo(g,j,h,i)
},scrollTo:function(g,k,i,j){j=j||b.ease.circular;
this.isInTransition=this.options.useTransition&&i>0;
var h=this.options.useTransition&&j.style;
if(!i||h){if(h){this._transitionTimingFunction(j.style);
this._transitionTime(i)
}this._translate(g,k)
}else{this._animate(g,k,i,j.fn)
}},scrollToElement:function(i,k,g,n,m){i=i.nodeType?i:this.scroller.querySelector(i);
if(!i){return
}var l=b.offset(i);
l.left-=this.wrapperOffset.left;
l.top-=this.wrapperOffset.top;
var h=b.getRect(i);
var j=b.getRect(this.wrapper);
if(g===true){g=c.round(h.width/2-j.width/2)
}if(n===true){n=c.round(h.height/2-j.height/2)
}l.left-=g||0;
l.top-=n||0;
l.left=l.left>0?0:l.left<this.maxScrollX?this.maxScrollX:l.left;
l.top=l.top>0?0:l.top<this.maxScrollY?this.maxScrollY:l.top;
k=k===undefined||k===null||k==="auto"?c.max(c.abs(this.x-l.left),c.abs(this.y-l.top)):k;
this.scrollTo(l.left,l.top,k,m)
},_transitionTime:function(i){if(!this.options.useTransition){return
}i=i||0;
var g=b.style.transitionDuration;
if(!g){return
}this.scrollerStyle[g]=i+"ms";
if(!i&&b.isBadAndroid){this.scrollerStyle[g]="0.0001ms";
var h=this;
f(function(){if(h.scrollerStyle[g]==="0.0001ms"){h.scrollerStyle[g]="0s"
}})
}},_transitionTimingFunction:function(g){this.scrollerStyle[b.style.transitionTimingFunction]=g
},_translate:function(g,h){if(this.options.useTransform){this.scrollerStyle[b.style.transform]="translate("+g+"px,"+h+"px)"+this.translateZ
}else{g=c.round(g);
h=c.round(h);
this.scrollerStyle.left=g+"px";
this.scrollerStyle.top=h+"px"
}this.x=g;
this.y=h
},_initEvents:function(g){var h=g?b.removeEvent:b.addEvent,i=this.options.bindToWrapper?this.wrapper:d;
h(d,"orientationchange",this);
h(d,"resize",this);
if(this.options.click){h(this.wrapper,"click",this,true)
}if(!this.options.disableMouse){h(this.wrapper,"mousedown",this);
h(i,"mousemove",this);
h(i,"mousecancel",this);
h(i,"mouseup",this)
}if(b.hasPointer&&!this.options.disablePointer){h(this.wrapper,b.prefixPointerEvent("pointerdown"),this);
h(i,b.prefixPointerEvent("pointermove"),this);
h(i,b.prefixPointerEvent("pointercancel"),this);
h(i,b.prefixPointerEvent("pointerup"),this)
}if(b.hasTouch&&!this.options.disableTouch){h(this.wrapper,"touchstart",this);
h(i,"touchmove",this);
h(i,"touchcancel",this);
h(i,"touchend",this)
}h(this.scroller,"transitionend",this);
h(this.scroller,"webkitTransitionEnd",this);
h(this.scroller,"oTransitionEnd",this);
h(this.scroller,"MSTransitionEnd",this)
},getComputedPosition:function(){var h=d.getComputedStyle(this.scroller,null),g,i;
if(this.options.useTransform){h=h[b.style.transform].split(")")[0].split(", ");
g=+(h[12]||h[4]);
i=+(h[13]||h[5])
}else{g=+h.left.replace(/[^-\d.]/g,"");
i=+h.top.replace(/[^-\d.]/g,"")
}return{x:g,y:i}
},_animate:function(p,o,j,g){var m=this,l=this.x,k=this.y,h=b.getTime(),n=h+j;
function i(){var q=b.getTime(),s,r,t;
if(q>=n){m.isAnimating=false;
m._translate(p,o);
if(!m.resetPosition(m.options.bounceTime)){m._execEvent("scrollEnd")
}return
}q=(q-h)/j;
t=g(q);
s=(p-l)*t+l;
r=(o-k)*t+k;
m._translate(s,r);
if(m.isAnimating){f(i)
}}this.isAnimating=true;
i()
},handleEvent:function(g){switch(g.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(g);
break;
case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(g);
break;
case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(g);
break;
case"orientationchange":case"resize":this._resize();
break;
case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(g);
break;
case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(g);
break;
case"keydown":this._key(g);
break;
case"click":if(this.enabled&&!g._constructed){g.preventDefault();
g.stopPropagation()
}break
}}};
e.utils=b;
if(typeof module!="undefined"&&module.exports){module.exports=e
}else{if(typeof define=="function"&&define.amd){define(function(){return e
})
}else{d.IScroll=e
}}})(window,document,Math);
(function(a,c){var d="news";
var b=a[d]||{};
a[d]=c(a,b,a.jQuery);
a[d].version="1.28.04+20220210"
}(this,function(aw,Z,ar,v){var z=function(){this._bIsActivating=false
};
z.prototype={constructor:z,activate:function(){if(true===this.isActivating()){return this
}this._onActivate();
this._setIsActivating(true);
return this
},deactivate:function(){if(false===this.isActivating()){return this
}this._onDeactivate();
this._setIsActivating(false);
return this
},isActivating:function(){return this._bIsActivating
},_setIsActivating:function(aH){this._bIsActivating=aH
},_onActivate:function(){},_onDeactivate:function(){}};
var X=function(){this._htCustomEvent={}
};
X.prototype={constructor:X,on:function(aH,aI){if(v===this._getCustomEvent(aH)){this._htCustomEvent[aH]=[]
}this._htCustomEvent[aH].push(aI);
return this
},off:function(aH,aJ){var aI=this._getCustomEvent(aH);
if(v===aI){return false
}aI=ar.grep(aI,function(aL,aK){if(aL===aJ){return false
}return true
});
return this
},offAll:function(aH){if(v===aH){this._offAllEvent();
return
}if(v===this._getCustomEvent(aH)){return
}this._offAllSpecificEventGroup(aH);
return this
},_triggerEvent:function(aJ,aI){var aH=this._getCustomEvent(aJ);
if(v===aH){return false
}ar.each(aH,function(aK,aL){aL(aI)
})
},_offAllSpecificEventGroup:function(aH){this._htCustomEvent[aH]=[]
},_offAllEvent:function(){this._htCustomEvent={}
},_getCustomEvent:function(aH){return this._htCustomEvent[aH]
}};
var aA=Z.makeClass=function(aH){function aK(){B.apply(this);
if(typeof this.$constructor==="function"){this.$constructor.apply(this,arguments)
}}ar.extend(true,aK,aH.$static);
delete aH.$static;
var aJ=function(){};
aJ.prototype=B.prototype;
aK.prototype=new aJ();
aK.prototype.constructor=aK;
var aI=aH.init;
aH.init=function(){this.deactivate();
return(true===ar.isFunction(aI))?aI.apply(this,arguments):this
};
ar.extend(true,aK.prototype,aH);
return aK
};
function B(){this._htConfig=this.constructor._DEFAULT_CONFIG;
X.apply(this);
z.apply(this)
}ar.extend(B.prototype,X.prototype,z.prototype,{setConfig:function(aH){this._htConfig=ar.extend(true,{},this.constructor._DEFAULT_CONFIG,aH);
return this
}});
var ac=Z.Cookie=aA({$static:{_oInstance:null,getInstance:function(aH){if(null===this._oInstance){this._oInstance=new this();
this._oInstance._$constructor.apply(this._oInstance,arguments)
}return this._oInstance
}},$constructor:function(){},_$constructor:function(aI,aH){this._nExpires=aI||365;
this._sDomain=aH
},setItem:function(aK,aL,aI,aH,aJ){return ar.cookie(aK,aL,{expires:aI||this._nExpires,domain:aH,path:aJ||"/"})
},getItem:function(aH){return ar.cookie(aH)||null
},removeItem:function(aJ,aH,aI){return ar.removeCookie(aJ,{domain:aH,path:aI||"/"})
}});
var F=Z.ElementInViewportDetecter=aA({$constructor:function(aI,aH){this._welTarget=ar(aI);
this._fnViewHandler=aH;
this._startDetection()
},isVisibleInViewport:function(){return this._welTarget.is(":visible")&&news.Util.isExistInViewport(this._welTarget[0])
},_startDetection:function(){news.ScreenChangeDetecter.getInstance().on("scrollOrResize",ar.proxy(this._visibleCheck,this))
},_visibleCheck:function(){if(this.isVisibleInViewport()){this._fnViewHandler({el:this._welTarget[0]})
}}});
var aD=Z.ImageLazyLoader=aA({$static:{_DEFAULT_CONFIG:{sSrcAttributeName:"data-src"}},$constructor:function(aH){this.setConfig(aH)
},load:function(aK,aJ){var aH=this;
var aI={fnLoad:function(){},fnError:function(){},fnLoadAll:function(){}};
aH._welImgList=ar(aK);
aH._nResponseImgCount=this._welImgList.length;
aH._htCallback=ar.extend(aI,aJ);
if(aH===aH._checkCallLoadAll()){return
}this._welImgList.each(function(aL,aM){var aN=ar(aM);
aN.on({load:ar.proxy(aH._successCallback,aH),error:ar.proxy(aH._errorCallback,aH)});
aN.attr("src",aN.attr(aH._htConfig.sSrcAttributeName))
})
},_checkCallLoadAll:function(){if(0===this._nResponseImgCount){this._htCallback.fnLoadAll(this._welImgList);
return true
}},_executeCallback:function(aH,aJ){var aI=ar(aH);
aJ(aI);
this._nResponseImgCount--;
this._checkCallLoadAll();
aI.removeAttr(this._htConfig.sSrcAttributeName);
aI.off({load:this._successCallback,error:this._errorCallback})
},_successCallback:function(aH){this._executeCallback(aH.currentTarget,this._htCallback.fnLoad)
},_errorCallback:function(aH){this._executeCallback(aH.currentTarget,this._htCallback.fnError)
}});
var G=Z.JsLoader=aA({$static:{_DEFAULT_CONFIG:{sCharSet:"utf-8"},_LOADED_URL:{}},$constructor:function(){this._aLoadingUrl=[];
this._fnCallback=null;
this._nLoadedCount=0;
this._fnOnLoad=ar.proxy(this._onLoad,this)
},load:function(aH,aI){this._aLoadingUrl=aH;
this._fnCallback=aI||ar.noop;
this._nLoadedCount=0;
this._load();
return this
},abort:function(){this._fnCallback=ar.noop
},_load:function(){var aH=this._aLoadingUrl[this._nLoadedCount];
if(true===this._isAlreadyLoaded(aH)){this._onLoadAfter();
return
}this._performLoad(aH)
},_isAlreadyLoaded:function(aI){var aH=document.createElement("script");
aH.setAttribute("src",aI);
return true===this.constructor._LOADED_URL[aH.getAttribute("src")]
},_onLoad:function(aI){var aH=aI.currentTarget;
if(false===this._isReallyLoad(aH)){return
}this._addLoadedUrl(aH);
this._removeListener(aH);
this._onLoadAfter()
},_onLoadAfter:function(){this._updateLoadedCount();
if(false===this._isAllLoaded()){this._load();
return
}this._fnCallback()
},_isAllLoaded:function(){var aH=this._nLoadedCount;
return v===this._aLoadingUrl[aH]
},_updateLoadedCount:function(){this._nLoadedCount=this._nLoadedCount+1
},_addLoadedUrl:function(aH){this.constructor._LOADED_URL[aH.getAttribute("src")]=true
},_removeListener:function(aH){if(null===aH.removeEventListener){aH.removeEventListener("load",this._fnOnLoad,false);
return
}if(null===aH.detachEvent){aH.detachEvent("onreadystatechange",this._fnOnLoad)
}},_isReallyLoad:function(aH){if(v===aH.readyState){return true
}return("complete"===aH.readyState||"loaded"===aH.readyState)
},_performLoad:function(aI){var aH=document.createElement("script");
aH.setAttribute("type","text/javascript");
aH.setAttribute("charset",this._htConfig.sCharSet);
aH.setAttribute("src",aI);
this._attachOnloadEvent(aH);
document.getElementsByTagName("head")[0].appendChild(aH)
},_attachOnloadEvent:function(aH){if(null===aH.attachEvent){aH.attachEvent("onreadystatechange",this._fnOnLoad);
return
}aH.addEventListener("load",this._fnOnLoad,false)
}});
var P=Z.ReadingObserver=aA({$static:{_RELATED_ARTICLE_HEIGHT:270,_READING_TIME_WEIGHT:0.015,_HIT_URL:"/hit.json",_RECORD_URL:"/read.json",_oInstance:null,_DEFAULT_CONFIG:{sRecordPrefixUrl:"https://s.news.naver.com/article",sContentBottomSelector:"#adw_da",sOfficeId:null,sArticleId:null,sSectionId:null,sArticleType:null},getInstance:function(){if(null===this._oInstance){this._oInstance=new this();
this._oInstance._$constructor.apply(this._oInstance,arguments)
}return this._oInstance
}},$constructor:function(){},_$constructor:function(aH){this.setConfig(aH);
this._initProperty()
},start:function(){this._saveEnterArticle();
this._observeReadingComplete()
},_initProperty:function(){this._nConnectTime=this._getTime();
this._bRecorded=false;
this._nScrollCount=0;
this._nBackgroundCount=0;
this._nContentHeight=this._getContentHeight();
this._nMinimumScrollCount=this._getMinimumScrollCount();
this._nAboutReadingTime=this._getAboutReadingTime()
},_observeReadingComplete:function(){ar(aw).on("scroll",ar.proxy(this._scrollEnd,this))
},_scrollEnd:function(){if(this._bRecorded){return
}this._nScrollCount++;
this._checkReadStatus();
setTimeout(ar.proxy(this._reconfirm,this),3000);
this._nBackgroundCount++
},_getAboutReadingTime:function(){var aH=ar(this._htConfig.sContentsSelector).text();
var aI=ar(".link_news").text();
return((aH.length-aI.length)*P._READING_TIME_WEIGHT)*1000
},_checkReadStatus:function(){if(this._isPassedContents()&&this._isTimeOver()&&this._isScrollCountOver()){this._saveReadingComplete()
}},_getContentHeight:function(){var aH=ar(this._htConfig.sContentBottomSelector).offset().top;
var aI=document.documentElement.clientHeight;
return aH-P._RELATED_ARTICLE_HEIGHT-aI
},_getMinimumScrollCount:function(){return(this._nContentHeight/document.documentElement.clientHeight)
},_isPassedContents:function(){return this._getScrollTop()>=this._nContentHeight
},_isTimeOver:function(){return(this._nConnectTime+this._nAboutReadingTime)<=this._getTime()
},_isScrollCountOver:function(){return this._nScrollCount>=this._nMinimumScrollCount
},_saveReadingComplete:function(){new Image().src=this._htConfig.sRecordPrefixUrl+P._RECORD_URL+this._getRecordingParam();
this._bRecorded=true
},_saveEnterArticle:function(){new Image().src=this._htConfig.sRecordPrefixUrl+P._HIT_URL+this._getRecordingParam()
},_getRecordingParam:function(){return"?"+ar.param({officeId:this._htConfig.sOfficeId,articleId:this._htConfig.sArticleId,sectionId:this._htConfig.sSectionId,articleType:this._htConfig.sArticleId,hitRefererType:this._htConfig.sHitRefererType,gdid:this._htConfig.sGdid})
},_reconfirm:function(){this._nBackgroundCount--;
if(this._bRecorded||this._nBackgroundCount>0){return
}this._checkReadStatus()
},_getScrollTop:function(){return ar(document).scrollTop()
},_getTime:function(){return new Date().getTime()
}});
var M=Z.ReloadedScreenTopMover=aA({$static:{_oInstance:null,getInstance:function(){if(null===this._oInstance){this._oInstance=new this();
this._oInstance._$constructor.apply(this._oInstance,arguments)
}return this._oInstance
}},$constructor:function(){},_$constructor:function(){},init:function(){if(v===aw.performance){this._moveTop();
return
}if(aw.performance.navigation.type===(aw.performance.navigation.TYPE_RELOAD||1)){this._moveTop()
}},_moveTop:function(){setTimeout(news.Util.movePageTop,400)
}});
var aB=Z.ScreenChangeDetecter=aA({$static:{_oInstance:null,getInstance:function(){if(null===this._oInstance){this._oInstance=new this();
this._oInstance._$constructor.apply(this._oInstance,arguments)
}return this._oInstance
}},$constructor:function(){},_$constructor:function(){this._welDocument=ar(document);
this._htCurrentScrollPotion=this._getScrollPosition();
this._initEvents()
},_getScrollPosition:function(){return{top:this._welDocument.scrollTop(),left:this._welDocument.scrollLeft()}
},_initEvents:function(){this._welDocument.on("scroll",ar.proxy(this._onScrollHandler,this));
if(news.Util.getAgentInfo().bMobileOrTablet){ar(aw).on("rotate",ar.proxy(this._onResizeHandler,this));
return
}this._welDocument.on("resize",ar.proxy(this._onResizeHandler,this))
},_onScrollHandler:function(aH){this._triggerEvent("scroll",aH);
this._triggerScrollChangedEvent(aH)
},_onResizeHandler:function(aH){this._triggerEvent("resize",aH);
this._triggerScrollChangedEvent(aH)
},_triggerScrollChangedEvent:function(aI){var aH=this._htCurrentScrollPotion;
var aL=this._getScrollPosition();
var aJ;
var aK;
aJ=(aH.top!==aL.top||aH.left!==aL.left);
aK={htPrevPosition:aH,htNewPosition:aL,bScrollChanged:aJ,wejQueryEvent:aI};
if(aJ){this._triggerEvent("scrollChanged",aK);
this._htCurrentScrollPotion=aL
}this._triggerEvent("scrollOrResize",aK)
}});
var aE=Z.Util={_nPreScreenWidth:-1,_sOrientationChangeEventName:"",getUniqueId:function(){return Math.random().toString(36).substr(2)
},formatNumberWithCommas:function(aH){var aI=String(aH).split(".");
aI[0]=aI[0].replace(/(\d)(?=(?:\d{3})+(?!\d))/g,"$1,");
return aI.join(".")
},doHistoryBack:function(){var aH=this.getAgentInfo().bIsNaverApp;
var aI="naverapp://closewindow";
if(1===history.length&&aH){location.href=aI;
return
}history.back();
setTimeout(function(){if(aH){location.href=aI
}},600)
},escapeHtmlChar:function(aH){return aH.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
},getViewPortSize:function(){var aI=document.documentElement.clientWidth;
var aH=document.documentElement.clientHeight;
return{nWidth:aI,nHeight:aH}
},getAgentInfo:function(){return E.getInstance().get()
},setNotFoundImage:function(aK){var aJ=ar(aK);
var aI=aJ.width();
var aH;
if(52===aI){aH="https://mimgnews.pstatic.net/image/news/m/2011/renew/preparing_52x52.png"
}else{if(72===aI){aH="https://mimgnews.pstatic.net/image/news/m/2011/renew/preparing_72x72.png"
}else{if(92===aI){aH="https://mimgnews.pstatic.net/image/news/m/2011/renew/preparing_92x70.png"
}else{if(97===aI){aH="https://mimgnews.pstatic.net/image/news/m/2011/renew/preparing_97x60.png"
}else{if(115===aI){aH="https://ssl.pstatic.net/static.news/image/news/m/2012/06/tmp_230_160.jpg"
}else{if(430===aI){aH="https://ssl.pstatic.net/static.news/image/news/m/2012/06/tmp_600_260.jpg"
}else{if(230===aI){aH="https://ssl.pstatic.net/static.news/image/news/m/2012/06/tmp_230_254.jpg"
}else{aH="https://mimgnews.pstatic.net/image/news/m/2011/renew/preparing_97x60.png"
}}}}}}}aJ.attr("src",aH);
aJ.removeAttr("onerror")
},showNoImg:function(aH){aH.onerror=null;
aH.src="http://static.news.naver.net/image/news/2016/noimage_220x150.png";
aH.alt="이미지 준비중"
},loadLazyImg:function(aH){ar(aH).find("[data-src]").each(function(aI,aJ){ar(aJ).attr("src",ar(aJ).attr("data-src"));
ar(aJ).attr("data-src",null)
})
},logout:function(aH){if(confirm("로그아웃 하시겠습니까?")){document.location.href=aH
}},movePageTop:function(){aw.scrollTo(0,0)
},isExistInViewport:function(aK){var aH=ar(aK);
var aJ=ar(aw).scrollTop();
var aL=aJ+aw.innerHeight;
var aM=aH.offset().top;
var aI=aM+aH.height();
if(aM>aL||aI<aJ){return false
}return true
},_getOrientationChangeEventName:function(){if(""!==this._sOrientationChangeEventName){return this._sOrientationChangeEventName
}if(("android"===aE.getAgentInfo().sOsName&&"2.1"===aE.getAgentInfo().sOsVersion)){this._sOrientationChangeEventName="resize"
}else{this._sOrientationChangeEventName="onorientationchange" in aw?"orientationchange":"resize"
}return this._sOrientationChangeEventName
},isDeviceVertical:function(){var aI;
var aJ;
var aH;
if("resize"!==aE._getOrientationChangeEventName()){aJ=aw.orientation;
if(aJ===0||aJ===180){aH=true
}else{if(aJ===90||aJ===-90){aH=false
}}return aH
}aI=document.documentElement.clientWidth;
if(-1===aE._nPreScreenWidth){aH=aI<document.documentElement.clientHeight
}else{if(aI<aE._nPreScreenWidth){aH=true
}else{if(aI===aE._nPreScreenWidth){aH=aE._nPreScreenWidth
}else{aH=false
}}}aE._nPreScreenWidth=aI;
return aH
},getMinValueInArray:function(aH){return Math.min.apply(Math,aH)
},getMinValueIndexInArray:function(aH){return ar.inArray(this.getMinValueInArray(aH),aH)
},getMaxValueInArray:function(aH){return Math.max.apply(Math,aH)
},getMaxValueIndexInArray:function(aH){return ar.inArray(this.getMaxValueInArray(aH),aH)
},extractMultilineStr:function(aI){if(typeof aI!=="function"){return aI
}var aJ=/\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)\s*\*\//;
var aH=aJ.exec(aI.toString())[1];
return aH||""
},getTemplateRenderer:function(aH){return Handlebars.compile(this.extractMultilineStr(aH))
},isHWAccelerable:function(){var aI=aE.getAgentInfo();
var aH=parseFloat(aI.sOsVersion);
if("android"===aI.sOsName&&4===aH){return false
}return eg.isHWAccelerable()
},preventTapHighlight:function(aH){ar(aH).addClass("egjs_no_tap_highlight")
},getEventListenerOption:function(){var aI=false;
var aH=null;
try{aH=Object.defineProperty({},"passive",{get:function(){aI={capture:false,passive:false}
}});
aw.addEventListener("test",null,aH);
aw.removeEventListener("test",null,aH)
}catch(aJ){}return aI
},getMainChannelLink:function(){if(document.cookie.indexOf("MM_NEW=1")!==-1){return"https://m.naver.com/naverapp/?cmd=onMenu&menuCode=NEWS"
}else{if(document.cookie.indexOf("MM_NEW=2")!==-1){return"https://m.naver.com/naverapp/?cmd=onMenu&menuCode=NEWS&version=5"
}else{return"https://m.naver.com/naverapp/?cmd=onMenu&menuCode=NEWS&hash=MM_news_channel"
}}},goMainChannel:function(){aw.location=this.getMainChannelLink()
},doAfterLoadEnd:function(aJ,aI){var aH="onpageshow" in aw?"pageshow":"load";
aJ=aJ||function(){};
aI=aI||function(){};
jQuery(aw).on(aH,function(aK){try{if(Boolean(aK.originalEvent.persisted)){aI();
return
}}catch(aL){}aJ()
})
},setFontSizeClassToBody:function(){var aH=Number(new ac().getItem("NFS"))||1;
var aI=aH-1;
if(aI>0){ar("body").addClass("bfsize"+aI)
}},getNavigationInfo:function(){var aI={notSupport:false,navigate:false,reload:false,backForward:false};
try{var aH=aw.performance.navigation;
aI={navigate:aH.type===(aH.TYPE_NAVIGATE||0),reload:aH.type===(aH.TYPE_RELOAD||1),backForward:aH.type===(aH.TYPE_BACK_FORWARD||2)}
}catch(aJ){aI.notSupport=true
}return aI
},getKorPostposition:function(aK,aJ,aH){return aI()?aJ:aH;
function aI(){var aM=aK.charCodeAt(aK.length-1);
var aL=(aM-44032)%28;
return aL!==0
}}};
var E=aA({$static:{_oInstance:null,getInstance:function(){if(null===this._oInstance){this._oInstance=new this();
this._oInstance._$constructor.apply(this._oInstance,arguments)
}return this._oInstance
}},$constructor:function(){},_$constructor:function(){this._initProperty()
},get:function(){if(null!==this._htAgentInfo){return this._htAgentInfo
}var aI=this._egjsAgent.browser;
var aH=this._egjsAgent.os;
var aJ=navigator.userAgent;
this._htAgentInfo={sOsName:aH.name,sOsVersion:aH.version,sBrowserName:aI.name,sBrowserVersion:aI.version,bWebview:aI.webview,bMobileOrTablet:this._isMobileOrTablet(),bMobile:this._isMobile(),bTablet:this._isTablet(),bIsAndroid:aH.name==="android",bIsIos:aH.name==="ios",bIsNaverApp:/NAVER\(/g.test(aJ),bIsLiveViewer:aJ.indexOf("NewsLiveViewer")>-1};
return this._htAgentInfo
},_initProperty:function(){this._htAgentInfo=null;
this._egjsAgent=eg.agent()
},_isMobileOrTablet:function(){return(this._egjsAgent.browser.name!=="edge"&&(this._checkInUserAgent("Mobile")||this._checkInUserAgent("Android")||this._checkInUserAgent("Nokia")||this._checkInUserAgent("webOS")||this._checkInUserAgent("Opera Mini")||this._checkInUserAgent("Opera Mobile")||this._checkInUserAgent("BlackBerry")||(this._checkInUserAgent("Windows")&&this._checkInUserAgent("PPC"))||this._checkInUserAgent("Smartphone")||this._checkInUserAgent("IEMobile")))
},_isMobile:function(){return(this._isMobileOrTablet()&&!this._checkInUserAgent("iPad")&&!this._checkInUserAgent("Tablet"))
},_isTablet:function(){return(this._checkInUserAgent("iPad")||this._checkInUserAgent("Tablet")||this._checkInUserAgent("SHW-M180")||this._checkInUserAgent("SHW-M380"))
},_checkInUserAgent:function(aH){return navigator.userAgent.indexOf(aH)>-1
}});
var T={IMG_BEFORE_LOADING:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"};
var g=Z.AnchorHelper=new (aA({$constructor:function(){this._onTouchStart=ar.proxy(this._onTouchStart,this);
this._retryTimerId=null
},anchorTo:function(aH,aJ){var aK=ar(aH);
if(aK.get(0)===v){return
}if(Boolean(aJ)===false){aJ=0
}var aI=new Date().getTime();
var aL=5000;
this._attachEvent();
this._performScrollTo(aK,aJ,aL,aI)
},_attachEvent:function(){ar(document).on("touchstart",this._onTouchStart)
},_detachEvent:function(){ar(document).off("touchstart",this._onTouchStart)
},_onTouchStart:function(){this._clearRetryTimer();
this._detachEvent()
},_performScrollTo:function(aL,aK,aM,aI){var aH=this._getTargetScrollTop(aL,aK);
var aJ=arguments;
aw.scrollTo(0,aH);
this._retryTimerId=setTimeout(ar.proxy(function(){var aN=new Date().getTime();
var aO=aN-aI;
if(aO>aM){this._detachEvent();
return
}this._performScrollTo.apply(this,aJ)
},this),10)
},_clearRetryTimer:function(){clearTimeout(this._retryTimerId)
},_getTargetScrollTop:function(aI,aH){return aI.offset().top-parseInt(aI.css("marginTop")||0,10)-aH
}}))();
var a=Z.ClickDelegator={_QUERY_ID_ATTR_NAME:"data-query-id",on:function(aI,aJ,aH){ar(document).on("click",this._getSelector(aI,aH),aJ);
return this
},off:function(aI,aJ,aH){ar(document).off("click",this._getSelector(aI,aH),aJ);
return this
},_getSelector:function(aI,aH){if(!aH){return aI
}return["["+this._QUERY_ID_ATTR_NAME+"="+this._getQueryId(aH)+"]",aI].join(" ")
},_getQueryId:function(aH){var aI=ar(aH);
if(!aI.attr(this._QUERY_ID_ATTR_NAME)){aI.attr(this._QUERY_ID_ATTR_NAME,"_"+aE.getUniqueId())
}return aI.attr(this._QUERY_ID_ATTR_NAME)
}};
(function(){var aI={contains:function(aL,aK,aJ){if(aL.indexOf(aK)!==-1){return aJ.fn(this)
}return aJ.inverse(this)
},and:function(aL,aK,aJ){if(aL&&aK){return aJ.fn(this)
}else{return aJ.inverse(this)
}},notAnd:function(aL,aK,aJ){if(!aL&&!aK){return aJ.fn(this)
}else{return aJ.inverse(this)
}},sum:function(){var aK=0;
for(var aJ=0;
aJ<arguments.length-1;
aJ++){aK+=(arguments[aJ]-0)
}return aK
},gt:function(aK,aL,aJ){if(aK>aL){return aJ.fn(this)
}else{return aJ.inverse(this)
}},gte:function(aK,aL,aJ){if(aK>=aL){return aJ.fn(this)
}else{return aJ.inverse(this)
}},is:function(aK,aL,aJ){if(aK===aL){return aJ.fn(this)
}else{return aJ.inverse(this)
}},isnt:function(aK,aL,aJ){if(aK!==aL){return aJ.fn(this)
}else{return aJ.inverse(this)
}},lt:function(aK,aL,aJ){if(aK<aL){return aJ.fn(this)
}else{return aJ.inverse(this)
}},lte:function(aK,aL,aJ){if(aK<=aL){return aJ.fn(this)
}else{return aJ.inverse(this)
}},or:function(aL,aK,aJ){if(aL||aK){return aJ.fn(this)
}else{return aJ.inverse(this)
}}};
aI.ifeq=aI.is;
for(var aH in aI){if(aI.hasOwnProperty(aH)){Handlebars.registerHelper(aH,aI[aH])
}}})();
var f=Z.HistoryAssistor=(function(aH){return new aH()
})(aA({$constructor:function(){ar(aw).on({popstate:ar.proxy(this._onHistoryChange,this)})
},push:function(aH){if(this._isSameCurrentUrl(aH)){this.replace(aH);
return
}try{aw.history.pushState(history.state,document.title,aH)
}catch(aI){location.href=aH
}},replace:function(aH){try{aw.history.replaceState(history.state,document.title,aH)
}catch(aI){if(this._isSameCurrentUrl(aH)){location.replace(location.href)
}else{location.replace(aH)
}}},getUrlInfo:function(aH){var aI=(aH)?(function(){var aJ=document.createElement("a");
aJ.href=aH;
return aJ
})():location;
return{paths:aI.pathname.substr("1").split("/"),queryMap:this._convertQueryToMap(aI.search.substr("1")),hashMap:this._convertQueryToMap(aI.hash.substr("1"))}
},_onHistoryChange:function(aH){this._triggerEvent("changeHistory")
},_convertQueryToMap:function(aI){var aH=aI.split("&");
var aJ={};
ar.each(aH,function(aK,aL){var aO=aL.split("=");
var aM=aO[0];
var aN=aO[1];
if(aM){aJ[aM]=aN
}});
return aJ
},_isSameCurrentUrl:function(aH){var aI=document.createElement("a");
aI.href=aH;
return location.href===aI.href
}}));
var am=Z.Html5AudioPlayer=aA({$constructor:function(){this._initProperty();
this._initInnerElement();
this._initEvent()
},play:function(aH){this.pause();
if(""===aH){this._playStop();
return
}this._bLoading=true;
this._bPlaying=false;
if(this._elAudio.src!==aH){this._elAudio.src=aH;
this._elAudio.load();
this._checkDelayLoading()
}else{this._elAudio.currentTime=0;
this._elAudio.play()
}},resume:function(){this._bLoading=true;
this._bPlaying=false;
try{this._elAudio.play()["catch"](function(aI){})
}catch(aH){}},pause:function(){if(this._bLoading||this._bPlaying){this._elAudio.pause();
this._playStop()
}},stop:function(){this._elAudio.src="";
this._elAudio.load();
this._bLoading=false;
this._bPlaying=false;
this._playStop()
},canPlayMp3:function(){return(""!==this._elAudio.canPlayType("audio/mpeg;"))
},_initProperty:function(){this._bPlaying=false;
this._bLoading=false;
this._nTimeout=null
},_initInnerElement:function(){var aH=ar("<audio>");
var aJ=ar("<div id='nhn_html_stack'>");
var aI=(document.createDocumentFragment)?document.createDocumentFragment():document.createElement("div");
ar(aI).html(aJ);
aJ.html(aH);
this._elAudio=aH[0]
},_initEvent:function(){ar(this._elAudio).on({canplay:ar.proxy(this._playAfterLoad,this),play:ar.proxy(this._playStart,this),ended:ar.proxy(this._playEnd,this),error:ar.proxy(this._playWait,this),waiting:ar.proxy(this._playWait,this)})
},_playAfterLoad:function(){if(0.1>this._elAudio.volume){this._elAudio.volume=1
}this._elAudio.play()
},_playStart:function(){this._bLoading=false;
this._bPlaying=true;
this._triggerEvent("start")
},_playStop:function(){this._bLoading=false;
this._bPlaying=false;
this._triggerEvent("stop")
},_playEnd:function(){this._bLoading=false;
this._bPlaying=false;
this._triggerEvent("end")
},_playWait:function(){this._elAudio.pause();
this._playStop()
},_clearTimeout:function(){if(this._nTimeout!==null){clearTimeout(this._nTimeout);
this._nTimeout=null
}},_checkDelayLoading:function(){var aH=this;
this._clearTimeout();
this._nTimeout=setTimeout(function(){if(aH._bLoading&&!aH._bPlaying){alert("로딩이 지연되었습니다.\n다시 시도해 주시기 바랍니다.");
aH._playStop()
}},30000)
}});
var J=Z.Loading={_LOADING_SELECTOR:"._loading",_HTML:['<img class="_loading"','src="https://ssl.pstatic.net/static.news/image/news/m/2016/02/24/loading.gif"','alt="로딩중" width="32" height="8"','style="position:absolute;top:50%;left:50%;margin-left:-16px;margin-top:-8px;">'].join(" "),paintTo:function(aI,aJ){var aH=ar(this._HTML);
this.removeFrom(aI);
if(aJ){this._setTop(aH,aJ)
}ar(aI).get(0).innerHTML="";
ar(aI).append(aH)
},appendTo:function(aJ,aK,aH){if(false===Boolean(aH)){this.removeFrom(aJ)
}var aI=ar(this._HTML).appendTo(aJ);
if(aK){this._setTop(aI,aK)
}},removeFrom:function(aH){ar(aH).find(this._LOADING_SELECTOR).remove()
},_setTop:function(aI,aH){ar(aI).css("top",aH)
}};
var R=Z.LoginAssistor={_URL_LOGIN_PAGE:"https://nid.naver.com/nidlogin.login?svctype=262144",_URL_LOGIN_PAGE_PC:"https://nid.naver.com/nidlogin.login",_COOKIE:"NID_SES",goLoginPage:function(){location.href=this._URL_LOGIN_PAGE
},isLoginUser:function(){return Boolean(ac.getInstance().getItem(this._COOKIE))
},goLoginPageByAgent:function(){if(news.Util.getAgentInfo().bMobileOrTablet){location.href=this._URL_LOGIN_PAGE
}else{location.href=this._URL_LOGIN_PAGE_PC
}}};
var V={open:function(aH,aI){aH.removeClass(aI);
this.lockScroll()
},close:function(aH,aI){aH.addClass(aI);
this.unlockScroll()
},lockScroll:function(){document.addEventListener("touchmove",this._onTouchMove,aE.getEventListenerOption())
},unlockScroll:function(){document.removeEventListener("touchmove",this._onTouchMove,aE.getEventListenerOption())
},_onTouchMove:function(aH){aH.preventDefault()
}};
var aC=Z.ScrollPreventor={activate:function(){ar("body, html").css({height:"100%",overflow:"hidden"});
if(document.addEventListener){document.addEventListener("touchmove",this._onMove,aE.getEventListenerOption())
}},deactivate:function(){ar("body, html").css({height:"",overflow:""});
if(document.removeEventListener){document.removeEventListener("touchmove",this._onMove,aE.getEventListenerOption())
}},_onMove:function(aH){aH.preventDefault()
}};
var t={_REMOVE_TAP_HIGHLIGHT_STYLE_HTML:aE.getTemplateRenderer('<style type="text/css" class="_remove_tap_highlight_style"> ._remove_tap_highlight {-webkit-tap-highlight-color: rgba(0,0,0,0) !important;} </style>'),removeTapHighlight:function(aH){this._applyStyleTag();
ar(aH).addClass("_remove_tap_highlight")
},_applyStyleTag:function(){var aH=ar("._remove_tap_highlight_style");
if(v===aH[0]){ar("head").append(this._REMOVE_TAP_HIGHLIGHT_STYLE_HTML)
}}};
var aG=Z.UserStorage=aA({$constructor:function(aH){this._sNamespace=(aH.sNamespace)?aH.sNamespace+"_":"";
this._sStorageName=aH.sStorageType||"sessionStorage";
this._oStorage=this._getStorage(aH.bUseCookieForNotStorageSupport)
},_getStorage:function(aH){if(this._isSupport()){return aw[this._sStorageName]
}if(false===aH){return L
}return ac.getInstance(("localStorage"===this._sStorageName)?365:0)
},_isSupport:function(){try{var aH=aw[this._sStorageName];
aH.setItem("test","1");
aH.removeItem("test");
return true
}catch(aI){return false
}},setItem:function(aH,aI){this._oStorage.setItem(this._getRealKey(aH),aI)
},getItem:function(aH){return this._oStorage.getItem(this._getRealKey(aH))
},removeItem:function(aH){this._oStorage.removeItem(this._getRealKey(aH))
},_getRealKey:function(aH){return this._sNamespace+aH
}});
var L={_oStorage:{},setItem:function(aH,aI){this._oStorage[aH]=aI
},getItem:function(aH){return this._oStorage[aH]||null
},removeItem:function(aH){delete this._oStorage[aH]
}};
var ap=Z.LayerAutoCloseManager=aA({$static:{_INSTANCE:null,getInstance:function(){if(null===this._INSTANCE){this._INSTANCE=new this()._$constructor()
}return this._INSTANCE
}},$constructor:function(){},_$constructor:function(){this._oCurrentVisibleLayer=null;
ar(document).on("click",ar.proxy(this._onClickDocument,this));
return this
},setCurrentVisibleLayer:function(aH){if(this._isDifferentCurrentVisibleLayer(aH)){this._closeCurrentVisibleLayer()
}this._oCurrentVisibleLayer=aH
},_onClickDocument:function(aI){var aH=aI.target;
if(false===this._hasCurrentVisibleLayer()){return
}if(this._oCurrentVisibleLayer.isAutoCloseExceptionEl(aH)){return
}this._closeCurrentVisibleLayer();
this._unsetCurrentVisibleLayer()
},_closeCurrentVisibleLayer:function(){if(this._hasCurrentVisibleLayer()){this._oCurrentVisibleLayer.close()
}},_hasCurrentVisibleLayer:function(){return Boolean(this._oCurrentVisibleLayer)
},_isDifferentCurrentVisibleLayer:function(aH){return this._oCurrentVisibleLayer&&this._oCurrentVisibleLayer!==aH
},_unsetCurrentVisibleLayer:function(){this._oCurrentVisibleLayer=null
}});
var af=Z.HistoryManager=aA({$static:{htStateType:{FIRST:1,BACK:2,REFRESH:3},_IS_SUPPORT:(function(){try{aw.sessionStorage.setItem("test",1);
aw.sessionStorage.getItem("test");
aw.sessionStorage.removeItem("test");
return true
}catch(aH){return false
}})(),_oInstance:null,getInstance:function(){if(null===this._oInstance){this._oInstance=new this();
this._oInstance._$constructor.apply(this._oInstance,arguments)
}return this._oInstance
}},$constructor:function(){},_$constructor:function(){this._nCurrentState=null
},init:function(aJ,aH){var aK;
var aI;
this._sReferrerHistoryName=aJ+"_referrer";
this._sCurrentHistoryName=aJ+"_currrent";
this._sReferrer=aH;
this._currentUrl=aw.location.href;
aK=this._getHistoryUrl(this._sReferrerHistoryName);
aI=this._getHistoryUrl(this._sCurrentHistoryName);
if(null===aK||null===aI){this._initStorage();
this._nCurrentState=af.htStateType.FIRST;
return
}this._oReferrerHistory=new N(aK);
this._oCurrentHistory=new N(aI);
this._checkHistory();
return this
},getState:function(){return this._nCurrentState
},_checkHistory:function(){if(true===this._isAccessFromBack()){this._removeLastInfoInStorage();
this._nCurrentState=af.htStateType.BACK
}else{if(true===this._isAccessFromRefresh()){this._nCurrentState=af.htStateType.REFRESH
}else{if(true===this._isAccessFromMain()){this._initStorage();
this._nCurrentState=af.htStateType.FIRST
}else{this._addCurrentInfoToStorage();
this._nCurrentState=af.htStateType.FIRST
}}}},_getHistoryUrl:function(aH){if(false===this.constructor._IS_SUPPORT){return null
}return aw.sessionStorage.getItem(aH)
},_saveHistory:function(aI,aH){if(false===this.constructor._IS_SUPPORT){return
}aw.sessionStorage.setItem(this._sReferrerHistoryName,aI);
aw.sessionStorage.setItem(this._sCurrentHistoryName,aH)
},_initStorage:function(){this._saveHistory(this._sReferrer,this._currentUrl)
},_removeLastInfoInStorage:function(){this._oReferrerHistory.pop();
this._oCurrentHistory.pop();
this._saveHistory(this._oReferrerHistory,this._oCurrentHistory)
},_addCurrentInfoToStorage:function(){this._oReferrerHistory.push(this._sReferrer);
this._oCurrentHistory.push(this._currentUrl);
this._saveHistory(this._oReferrerHistory,this._oCurrentHistory)
},_isAccessFromBack:function(){var aH=this._currentUrl;
var aJ=this._oReferrerHistory.get();
var aI=this._oCurrentHistory.get();
if(!this._sReferrer&&(aH===aJ)){return true
}if((aH===aJ)&&(this._oCurrentHistory.getSize()>1)&&(aH===this._oCurrentHistory.get(-1))&&(aI!==this._sReferrer)){return true
}return false
},_isAccessFromRefresh:function(){var aI=this._oReferrerHistory.get();
var aH=this._oCurrentHistory.get();
return(aI===this._sReferrer)&&(aH===this._currentUrl)
},_isAccessFromMain:function(){return this._sReferrer.indexOf("m.naver.com")!==-1
}});
var N=aA({$static:{SPLIT_MARK:"@||@"},$constructor:function(aH){if(""===aH||v===aH){this._aData=[]
}else{this._aData=aH.split(this.constructor.SPLIT_MARK)
}},push:function(aH){this._aData.push(aH)
},get:function(aH){var aI=this._aData.length-1;
if(v===aH||null===aH){return this._aData[aI]
}if(aH<0){return this._aData[aI+aH]
}return this._aData[aH]
},pop:function(){return this._aData.pop()
},getSize:function(){return this._aData.length
},toString:function(){return this._aData.join(this.constructor.SPLIT_MARK)
}});
var ao=Z.DatePickerCalendar=aA({$static:{_DATE_TITLE_SELECTOR:"._date_title",_OPEN_CALENDER_BTN_SELECTOR:"._open_calendar_btn",_CLOSE_CALENDER_BTN_SELECTOR:"._close_calendar_btn",_PREV_DAY_BTN_SELECTOR:"._prev_day_btn",_NEXT_DAY_BTN_SELECTOR:"._next_day_btn",_TODAY_BTN_SELECTOR:"._today_btn",_DAY_BTN_SELCTOR:"._day_btn",_PREV_MONTH_BTN_CLASS:"_prev_month_btn",_NEXT_MONTH_BTN_CLASS:"_next_month_btn",_DEFAULT_CONFIG:{sCurrentDate:moment().format("YYYYMMDD"),aDayNames:["일","월","화","수","목","금","토"],htNavigationableDateRange:{start:"20150101",end:moment().format("YYYYMMDD")},sDateTitleTpl:'{{year}}.{{month}}.{{date}}.{{day}}<button class="ico_cal">달력보기</button>',sCalendarTpl:aE.extractMultilineStr('<div class="cal"> <div class="cal_h"> <h2> <span class="bt_mm">{{year}}.{{month}}</span><a href="#" onclick="nclk(event, \'cal.ctoday\', \'\', \'\')" class="bt_td _today_btn">오늘</a> <a href="javascript:;" onclick="nclk(event, \'cal.prev\', \'\', \'\')" class="cal_prev_btn _prev_month_btn"><span>이전달</span></a> <a href="javascript:;" onclick="nclk(event, \'cal.next\', \'\', \'\')" class="cal_next_btn _next_month_btn"><span>다음달</span></a> </h2> </div> <table style="width:100%" class="cal_b"> <caption class="u_hc">캘린더</caption> <colgroup span="7" style="width:14%"></colgroup> <thead> <tr> {{#each daysOfTheWeek}} <th scope="col">{{this}}</th> {{/each}} </tr> </thead> <tbody> {{#each days}} {{#if isSunday}} <tr> {{/if}} <td class="{{classes}}"><a href="#" class="_day_btn" data-date="{{sDate}}" onclick="nclk(event, \'cal.cdate\',\'\',\'\');">{{day}}</a></td> {{#if isSatday}} </tr> {{/if}} {{/each}} </tbody> </table> <button type="button" onclick="nclk(event, \'cal.cclose\', \'\', \'\')" class="clse _close_calendar_btn"><span class="u_hc">닫기</span></button> </div>'),htHandelers:{fnOnChangeDay:ar.noop}}},$constructor:function(aI,aH){this.setConfig(aH);
this._welWrapper=ar(aI);
this._welCalendarWrapper=ar("._calendar_layer");
this._welDateWrapper=ar("._date_layer");
this._fnCalendarTpl=Handlebars.compile(this._htConfig.sCalendarTpl);
this._fnDateTitleTpl=Handlebars.compile(this._htConfig.sDateTitleTpl);
this._oNavigationableStartDate=moment(this._htConfig.htNavigationableDateRange.start);
this._oNavigationableEndDate=moment(this._htConfig.htNavigationableDateRange.end);
this._oSelectedDate=moment(this._htConfig.sCurrentDate);
this._initCalendar();
this._renderDateTitle();
this._welWrapper.on("click",ao._OPEN_CALENDER_BTN_SELECTOR,ar.proxy(this._onClickOpenCalendar,this));
this._welWrapper.on("click",ao._CLOSE_CALENDER_BTN_SELECTOR,ar.proxy(this._onClickCloseCalendar,this));
this._welWrapper.on("click",ao._PREV_DAY_BTN_SELECTOR,ar.proxy(this._onClickPrevDay,this));
this._welWrapper.on("click",ao._NEXT_DAY_BTN_SELECTOR,ar.proxy(this._onClickNextDay,this));
this._welWrapper.on("click",ao._TODAY_BTN_SELECTOR,ar.proxy(this._onClickSelectToday,this));
this._welWrapper.on("click",ao._DAY_BTN_SELCTOR,ar.proxy(this._onClickDate,this));
this._updateStateDateControlBtn()
},openCalendar:function(){this._updateCalendar();
this._welDateWrapper.hide();
this._welCalendarWrapper.show();
this._triggerEvent("open")
},closeCalendar:function(){this._welDateWrapper.show();
this._welCalendarWrapper.hide();
this._triggerEvent("close")
},nextDay:function(){this._oSelectedDate.add(1,"days");
if(false===this._isAvailableDate(this._oSelectedDate)){this._oSelectedDate.subtract(1,"days");
return
}this._updateCalendar()
},prevDay:function(){this._oSelectedDate.subtract(1,"days");
if(false===this._isAvailableDate(this._oSelectedDate)){this._oSelectedDate.add(1,"days");
return
}this._updateCalendar()
},selectToday:function(){this._oSelectedDate=moment();
this._updateCalendar();
this.closeCalendar()
},_onClickSelectToday:function(aH){aH.preventDefault();
this.selectToday()
},_onClickPrevDay:function(aH){aH.preventDefault();
this.prevDay()
},_onClickNextDay:function(aH){aH.preventDefault();
this.nextDay()
},_onClickCloseCalendar:function(aH){aH.preventDefault();
this.closeCalendar()
},_onClickOpenCalendar:function(aH){aH.preventDefault();
this.openCalendar()
},_initCalendar:function(){this._welCalendarWrapper.hide();
this._oCalendar=this._welCalendarWrapper.clndr({startWithMonth:moment(),daysOfTheWeek:this._htConfig.aDayNames,targets:{nextButton:this.constructor._NEXT_MONTH_BTN_CLASS,previousButton:this.constructor._PREV_MONTH_BTN_CLASS},classes:{selected:this._htConfig.sSelectedDayClass,lastMonth:this._htConfig.sPrevMonthDaysClass,nextMonth:this._htConfig.sNextMonthDaysClass},constraints:{startDate:this._htConfig.htNavigationableDateRange.start,endDate:this._htConfig.htNavigationableDateRange.end},render:ar.proxy(this._renderCalendar,this),clickEvents:{onMonthChange:ar.proxy(this._onChangeMonthInCalendar,this)}})
},_onClickDate:function(aJ){var aI=aJ.currentTarget;
var aH=moment(aI.getAttribute("data-date"));
aJ.preventDefault();
if(false===this._isAvailableDate(aH)){return false
}this._oSelectedDate=aH;
this._updateCalendar();
this.closeCalendar()
},_onChangeMonthInCalendar:function(aH){this._updateStateDateControlBtn(aH);
this._selectDay()
},_renderCalendar:function(aH){aH.days.forEach(function(aI){if(aI.date.day()===0){aI.isSunday=true
}else{if(aI.date.day()===6){aI.isSatday=true
}}aI.sDate=aI.date.format("YYYY-MM-DD")
});
aH.month=moment(aH.month,"MMM").format("MM");
return this._fnCalendarTpl(aH)
},_updateCalendar:function(){this._renderDateTitle();
this._oCalendar.setYear(this._oSelectedDate.format("YYYY"));
this._oCalendar.setMonth(this._oSelectedDate.format("MMM"));
this._selectDay();
this._updateStateDateControlBtn()
},_updateStateDateControlBtn:function(aL){var aM=aL||this._oSelectedDate;
var aK=this._htConfig.sControlBtnDisableClass;
var aJ=this._welWrapper.find("."+ao._PREV_MONTH_BTN_CLASS);
var aI=this._welWrapper.find("."+ao._NEXT_MONTH_BTN_CLASS);
var aN=this._welWrapper.find(ao._PREV_DAY_BTN_SELECTOR);
var aH=this._welWrapper.find(ao._NEXT_DAY_BTN_SELECTOR);
aJ.removeClass(aK);
aI.removeClass(aK);
aN.removeClass(aK);
aH.removeClass(aK);
if(aM.isSame(this._oNavigationableStartDate,"day")){aN.addClass(aK)
}if(aM.isSame(this._oNavigationableEndDate,"day")){aH.addClass(aK)
}if(aM.isSame(this._oNavigationableStartDate,"month")){aJ.addClass(aK)
}if(aM.isSame(this._oNavigationableEndDate,"month")){aI.addClass(aK)
}},_selectDay:function(){var aH=this._htConfig.sSelectedDayClass;
var aI=".calendar-day-"+this._oSelectedDate.format("YYYY-MM-DD");
this._oCalendar.element.find("."+aH).removeClass(aH);
this._oCalendar.element.find(aI).addClass(aH);
this._htConfig.htHandelers.fnOnChangeDay(this._oSelectedDate)
},_renderDateTitle:function(){var aH=this._fnDateTitleTpl(this._getSelectedDateInfo());
this._welWrapper.find(ao._DATE_TITLE_SELECTOR).html(aH)
},_getSelectedDateInfo:function(){return{year:this._oSelectedDate.format("YYYY"),month:this._oSelectedDate.format("MM"),date:this._oSelectedDate.format("DD"),day:this._htConfig.aDayNames[this._oSelectedDate.day()]}
},_isAvailableDate:function(aH){return false===aH.isBefore(this._oNavigationableStartDate,"day")&&false===aH.isAfter(this._oNavigationableEndDate,"day")
}});
var l=Z.DragAndDropSort=aA({$constructor:function(aI,aH){this._welWrapper=ar(aI);
this._bLimitX=aH.bLimitX;
this._bLimitY=aH.bLimitY;
this._nTimerIdForDragOverBugFix=null;
this._oTouchCoordPaddingMapInDragEl={};
this._oSortable=new Sortable(this._welWrapper[0],{scroll:(v===aH.bUseAutoScroll)?true:aH.bUseAutoScroll,handle:aH.sHandle,draggable:aH.draggable,scrollSensitivity:aH.nScrollSensitivity||50,scrollSpeed:aH.nScrollSpeed||30,forceFallback:true,onStart:aH.fnOnStart,onEnd:aH.fnOnEnd,onMove:function(aJ){var aK=this.options.draggable.replace(/[\.#]/,"");
if(aJ.related.classList.contains(aK)===false){return false
}},onUpdate:aH.fnOnUpdate});
this._oSortable._prepareDragStart=ar.proxy(this._prepareDragStart,this);
this._oSortable._onDragStart=ar.proxy(this._onDragStart,this);
this._oSortable._onTouchMove=ar.proxy(this._onTouchMove,this);
this._oSortable._onDrop=ar.proxy(this._onDrop,this)
},destroy:function(){this._oSortable.destroy();
this._oSortable=null
},_prepareDragStart:function(aH,aI,aJ){aI=aI||aH;
if(aI){this._oTouchCoordPaddingMapInDragEl=this._getTouchCoordPaddingMapInDragEl(aJ,aI.clientX,aI.clientY)
}this._executeSuperMethod("_prepareDragStart",arguments)
},_onTouchMove:function(aH){var aI;
var aJ={preventDefault:function(){aH.preventDefault()
}};
if(aH.touches){aJ.touches=[ar.extend({},aH.touches[0])];
aI=aJ.touches[0]
}else{aI=aJ;
aI.clientX=aH.clientX;
aI.clientY=aH.clientY
}if(this._bLimitX){aI.clientX=this._getLimitedTouchCoord("X",aI)
}if(this._bLimitY){aI.clientY=this._getLimitedTouchCoord("Y",aI)
}this._oSortable._appendGhost();
this._executeSuperMethod("_onTouchMove",[aJ])
},_onDragStart:function(){clearTimeout(this._nTimerIdForDragOverBugFix);
this._executeSuperMethod("_onDragStart",arguments)
},_onDrop:function(){var aI=(0===arguments.length);
var aH=this;
this._executeSuperMethod("_onDrop",arguments);
this._nTimerIdForDragOverBugFix=setTimeout(function(){if(aI){return
}aH._executeSuperMethod("_onDrop")
},50)
},_getLimitedTouchCoord:function(aJ,aK){var aI=this._welWrapper[0].getBoundingClientRect();
var aH={top:aI.top+this._oTouchCoordPaddingMapInDragEl.top,bottom:aI.bottom-this._oTouchCoordPaddingMapInDragEl.bottom,left:aI.left+this._oTouchCoordPaddingMapInDragEl.left,right:aI.right-this._oTouchCoordPaddingMapInDragEl.right};
if("Y"===aJ){if(aK.clientY<aH.top){return aH.top
}if(aK.clientY>aH.bottom){return aH.bottom
}return aK.clientY
}if(aK.clientX<aH.left){return aH.left
}if(aK.clientX>aH.right){return aH.right
}return aK.clientX
},_getTouchCoordPaddingMapInDragEl:function(aH,aJ,aI){var aK=aH.getBoundingClientRect();
return{top:aI-aK.top,bottom:(aK.top+aK.height)-aI,left:aJ-aK.left,right:(aK.left+aK.width)-aJ}
},_executeSuperMethod:function(aH,aI){Sortable.prototype[aH].apply(this._oSortable,aI||[])
}});
var C=Z.InfiniteButtonList=aA({$static:{_DEFAULT_CONFIG:{sRequestUrl:null,sRequestBtnSelector:"#requestMoreNews",sRequestMoreSelector:"#moreNews",sRequestNoMoreSelector:"#noMoreNews",sNavigationSelector:"#navigationArea",sMoveTopBtnSelector:".u_pg_top",sProgressSelector:"#progress",fnAfterLoad:null}},$constructor:function(aK,aH){this.setConfig(aH);
this._welListWrap=ar(aK);
this._welNavigation=ar(this._htConfig.sNavigationSelector);
this._nPage=2;
var aJ=ar.persist()||{};
if(aJ.list){try{this._welListWrap[0].innerHTML=aJ.list;
this._welNavigation[0].innerHTML=aJ.moreNavigation;
this._nPage=aJ.page;
aw.scrollTo(0,aJ.scrollTop)
}catch(aI){}}this._initInnerElement();
this._initEvent()
},_initInnerElement:function(){this._welRequestNoMore=ar(this._htConfig.sRequestNoMoreSelector);
this._welProgress=ar(this._htConfig.sProgressSelector)
},_initEvent:function(){var aH=this;
this._welNavigation.on("click",this._htConfig.sRequestBtnSelector,function(aI){aI.preventDefault();
aH._loadMoreContens()
});
this._welNavigation.on("click",this._htConfig.sMoveTopBtnSelector,function(aI){aI.preventDefault();
news.Util.movePageTop()
});
ar(document.body).on("click","a",ar.proxy(this._onClickBody,this))
},_onClickBody:function(){ar.persist({list:this._welListWrap[0].innerHTML,moreNavigation:this._welNavigation[0].innerHTML,page:this._nPage,scrollTop:ar(aw).scrollTop()})
},_loadMoreContens:function(){var aH=this;
this._welProgress.show();
ar.get(this._htConfig.sRequestUrl,{page:this._nPage},function(aI){aH._appendMoreContents(aI)
})
},_appendMoreContents:function(aI){var aJ;
var aH=ar(this._htConfig.sRequestMoreSelector);
if(aH.length>0){aH.remove()
}if(this._welRequestNoMore.length>0){this._welRequestNoMore.remove()
}aJ=aI.split("<!--#DELIMITER#-->");
this._welListWrap.append(aJ[0]);
this._welNavigation.append(aJ[1]);
if("function"===typeof this._htConfig.fnAfterLoad){this._htConfig.fnAfterLoad()
}this._nPage++
}});
var o=Z.LayerToggler=aA({$constructor:function(){this._onClickToggleBtn=ar.proxy(this._onClickToggleBtn,this);
this._onClickCloseBtn=ar.proxy(this._onClickCloseBtn,this);
this._onClickDocument=this._onClickDocument.bind(this)
},init:function(aH){this.deactivate();
this._useLayerAutoCloseWhenFocusOut=aH.useLayerAutoCloseWhenFocusOut!==false;
this._toggleBtnSelector=aH.toggleBtnSelector;
this._closeBtnSelector=aH.closeBtnSelector;
this._layerCloseClass=aH.layerCloseClass||null;
this._layerSelector=aH.layerSelector;
this._wrapper=ar(aH.wrapper);
this.activate();
return this
},_onActivate:function(){if(!this._wrapper){return
}a.on(this._toggleBtnSelector,this._onClickToggleBtn,this._wrapper);
a.on(this._closeBtnSelector,this._onClickCloseBtn,this._wrapper);
if(this._useLayerAutoCloseWhenFocusOut){ar(document).on("click",this._onClickDocument)
}},_onDeactivate:function(){a.off(this._toggleBtnSelector,this._onClickToggleBtn,this._wrapper);
a.off(this._closeBtnSelector,this._onClickCloseBtn,this._wrapper);
ar(document).off("click",this._onClickDocument)
},open:function(){if(this._layerCloseClass){this._getLayer().removeClass(this._layerCloseClass)
}else{this._getLayer().show()
}},close:function(){if(this._layerCloseClass){this._getLayer().addClass(this._layerCloseClass)
}else{this._getLayer().hide()
}},_onClickCloseBtn:function(){this.close()
},_onClickToggleBtn:function(){if(this._isVisible()){this.close();
return
}this.open()
},_onClickDocument:function(aH){var aI=aH.target;
if(this._isVisible()===false){return
}if(this._isRelatedLayer(aI)===false){this.close()
}},_isRelatedLayer:function(aH){var aJ=Boolean(ar(aH).closest(this._toggleBtnSelector)[0]);
var aI=Boolean(ar(aH).closest(this._layerSelector)[0]);
return(aJ||aI)&&ar.contains(this._wrapper.get(0),aH)
},_isVisible:function(){if(this._layerCloseClass){return this._getLayer().hasClass(this._layerCloseClass)===false
}return this._getLayer().css("display")!=="none"
},_getLayer:function(){return this._wrapper.find(this._layerSelector)
}});
var aj=Z.MoveTopButton=aA({$constructor:function(aH){this._welTopBtn=ar(aH||"#goTop");
if(0===this._welTopBtn.length){return
}this._welTopBtn.on("click",ar.proxy(this._onClickTopBtn,this));
news.ScreenChangeDetecter.getInstance().on("scrollChanged",ar.proxy(this._onScrollChanged,this))
},_onClickTopBtn:function(aH){aH.preventDefault();
aE.movePageTop()
},_onScrollChanged:function(aH){this._changeVisible(aH.htNewPosition.top>1)
},_changeVisible:function(aH){this._welTopBtn.toggleClass("show",aH)
}});
var at=Z.NoticeModalPopup=aA({$static:{_DISPLAYED_COOKIE_VALUE:"1"},$constructor:function(){this._fnOnClickCloseBtn=ar.proxy(this._onClickCloseBtn,this)
},init:function(aH){this._sCssClassForHide=aH.sCssClassForHide||null;
this._sSelectorCloseBtn=aH.sSelectorCloseBtn;
this._sDisplayedCookieKey=aH.sDisplayedCookieKey;
this._nCookieExpiresDay=aH.nCookieExpiresDay||730;
this._welWrap=ar(aH.wrapper);
return this
},_onActivate:function(){this._welWrap.on("click",this._sSelectorCloseBtn,this._fnOnClickCloseBtn)
},_onDeactivate:function(){this._welWrap.off("click",this._sSelectorCloseBtn,this._fnOnClickCloseBtn)
},_onClickCloseBtn:function(aH){aH.preventDefault();
this.hide()
},show:function(){if(this.isAlreadyShowed()){return
}V.lockScroll();
if(this._sCssClassForHide){this._welWrap.removeClass(this._sCssClassForHide)
}else{this._welWrap.css("display","block")
}this.activate()
},hide:function(){ar.cookie(this._sDisplayedCookieKey,this.constructor._DISPLAYED_COOKIE_VALUE,{expires:this._nCookieExpiresDay});
if(this._sCssClassForHide){this._welWrap.addClass(this._sCssClassForHide)
}else{this._welWrap.css("display","none")
}V.unlockScroll();
this.deactivate()
},isAlreadyShowed:function(){return v!==ar.cookie(this._sDisplayedCookieKey)
}});
var ah=Z.Scroll=aA({$constructor:function(aI,aH){if(!aH){aH={}
}this._welWrapper=ar(aI);
this._centerAlignmentBy=aH.centerAlignmentBy||document;
IScroll.utils.isBadAndroid=false;
this._oIScroll=null;
this._initIScroll(aH&&aH.bScrollY)
},scrollTo:function(aI,aH,aJ){aI=(this._oIScroll.maxScrollX>aI)?this._oIScroll.maxScrollX:aI;
aI=(aI>0)?0:aI;
aH=(this._oIScroll.maxScrollY>aH)?this._oIScroll.maxScrollY:aH;
aH=(aH>0)?0:aH;
this._oIScroll.scrollTo(aI,aH,aJ)
},scrollBy:function(aI,aH,aJ){this._oIScroll.scrollTo((aI)?this._oIScroll.x+aI:0,(aH)?this._oIScroll.y+aH:0,aJ)
},scrollElToCenter:function(aI,aK){var aH=ar(aI);
var aJ;
aJ=aH.parent().offset().left-aH.offset().left;
aJ+=parseInt((this._getWidthOfCenterAlignment()-aH.width())/2,10);
this.scrollTo(Math.min(0,aJ),0,aK||0)
},getCurrentPosition:function(){return{x:this._oIScroll.x,y:this._oIScroll.y}
},disable:function(){this._oIScroll.disable();
return this
},enable:function(){this._oIScroll.enable();
return this
},refresh:function(){this._oIScroll.refresh();
return this
},destroy:function(){this._oIScroll.destroy()
},_initIScroll:function(aH){var aI={useTransform:true,HWCompositing:aE.isHWAccelerable(),useTransition:eg.isTransitional()};
aI.disablePointer=true;
aI.disableTouch=false;
aI.disableMouse=false;
this._welWrapper.css("touch-action","pan-y pinch-zoom");
if(aH){aI.scrollX=false;
aI.scrollY=true;
aI.eventPassthrough="horizontal"
}else{aI.scrollX=true;
aI.scrollY=false;
aI.eventPassthrough="vertical"
}this._welWrapper.css({height:this._welWrapper.height(),position:"relative",overflow:"hidden"}).children().css("position","absolute");
if(aH){this._welWrapper.css("height","100%")
}this._fixTapHighlightBug();
this._oIScroll=new IScroll(this._welWrapper[0],aI);
this._oIScroll.on("scrollEnd",ar.proxy(this._onScrollEnd,this))
},_onScrollEnd:function(){this._triggerEvent("scrollEnd",{welWrapper:this._welWrapper,x:this._oIScroll.x,y:this._oIScroll.y})
},_getWidthOfCenterAlignment:function(){return(this._centerAlignmentBy===document)?aE.getViewPortSize().nWidth:ar(this._centerAlignmentBy).width()
},_fixTapHighlightBug:function(){var aI=aE.getAgentInfo();
var aH=aI.bIsNaverApp&&"android"===aI.sOsName&&"4.4.2"===aI.sOsVersion;
if(aH){t.removeTapHighlight(this._welWrapper)
}}});
var h=Z.TileInfiniteScrollList=aA({$static:{_DEFAULT_CONFIG:{sTileSelector:"._item",nTilePadding:6,fnGetTileWidth:function(aI,aJ){var aH=aI.parent().width();
var aK=24;
return(aH-aK)/aJ
},fnAfterAppend:function(){},fnAfterRender:function(){}},_HORIZONTAL_TILE_COUNT:{htMobile:{nVertical:2,nHorizontal:3},htTablet:{nVertical:3,nHorizontal:4}}},$constructor:function(aH,aI){this.setConfig(aI);
this._welWrapper=ar(aH);
this._welTileWrapper=this._welWrapper.find(this._htConfig.sTileWrapperSelector);
this._initProperty();
this._initSubElement();
if(v!==this._htConfig.htData){this.addTiles(this._htConfig.htData)
}this._initEvent();
this._restorePageFromPersist()
},_initProperty:function(){var aH=this;
this._htNoneSizeImageMap={};
this._bWaitingMoreContensReponse=false;
this._nCurrentPage=2;
this._htHorizontalTileCount=news.Util.getAgentInfo().bTablet?h._HORIZONTAL_TILE_COUNT.htTablet:h._HORIZONTAL_TILE_COUNT.htMobile;
this._nTileWidth=this._getTileWidth();
this._fnTileTpl=Handlebars.compile(this._htConfig.sTileTpl);
this._oTileLayout=new news.TileLayout(this._welTileWrapper[0],{nTileWidth:this._nTileWidth}).on("build",function(){aH._htConfig.fnAfterAppend(aH._welTiles)
})
},_initSubElement:function(){this._welPersistContent=this._welWrapper.find(this._htConfig.sPersistWrapperSelector);
this._welMoreRequestTrigger=ar(this._htConfig.sMoreRequestTriggerTpl);
this._welPersistContent.after(this._welMoreRequestTrigger)
},addTiles:function(aH){this._appendTileToWrapper(aH);
this._buildLayout();
this._welMoreRequestTrigger.css("top",this._welTileWrapper.height())
},_getTileWidth:function(){var aH=news.Util.isDeviceVertical()?this._htHorizontalTileCount.nVertical:this._htHorizontalTileCount.nHorizontal;
return this._htConfig.fnGetTileWidth(this._welTileWrapper,aH)
},_initEvent:function(){this._setRefreshByRotateEvent();
this._setRequestMoreEvent()
},_refresh:function(){var aH=this._getTileWidth();
if(aH!==this._nTileWidth){this._oTileLayout.setConfig({nTileWidth:aH});
this._nTileWidth=aH;
this._resizeImg()
}this._oTileLayout.build(null,true)
},_resizeImg:function(){var aI=this._welTiles.find("img");
var aH=this._getTileImageWidth();
aI.each(function(aK,aL){var aM=aL.width;
var aJ=aL.height;
aL.width=aH;
aL.height=aH*aJ/aM
})
},_convertImgSize:function(aH){var aI=this._getTileImageWidth();
aH.forEach(function(aK,aJ){aK=aK||{};
aK.cw=aI;
aK.ch=aI*aK.h/aK.w
});
return aH
},_getTileImageWidth:function(){return(this._nTileWidth-(this._htConfig.nTilePadding*2))
},_appendTileToWrapper:function(aI){var aH=this;
var aJ=[];
var aK=this._convertImgSize(aI);
aK.forEach(function(aL){aJ.push(aH._fnTileTpl(aL))
});
this._welTileWrapper.css("visibility","hidden").append(aJ);
this._welTiles=this._welTileWrapper.find(this._htConfig.sTileSelector);
this._reloadNoneSizeImage()
},_reloadNoneSizeImage:function(){var aH=this;
var aJ=this._welTiles.find("img");
var aI=this._getTileImageWidth();
aJ.filter(function(aL,aM){var aK=parseInt(aM.getAttribute("height"),10);
return true===isNaN(aK)||aK<=0
}).each(function(aK,aL){aH._htNoneSizeImageMap[aL.src]=aL;
aL.onload=function(){aL.width=aI;
aL.height=aI*(this.naturalHeight||this.height)/(this.naturalWidth||this.width);
delete aH._htNoneSizeImageMap[aL.src]
};
aL.onerror=function(){delete aH._htNoneSizeImageMap[aL.src]
}
})
},_buildLayout:function(){var aH=this;
if(Object.keys(this._htNoneSizeImageMap).length>0){setTimeout(function(){aH._buildLayout()
},30);
return
}this._oTileLayout.build(this._welTiles);
this._welTileWrapper.css("visibility","visible");
this._htConfig.fnAfterRender(this._welTileWrapper.find(this._welTiles))
},_restorePageFromPersist:function(){var aH;
var aJ;
var aI=news.Util.getAgentInfo();
if("android"!==aI.sOsName||(parseFloat(aI.sOsVersion)<4.4&&"chrome"!==aI.sBrowserName)){this._welPersistContent.show();
return
}ar("body").on("click","a, .u_hssbt",ar.proxy(this._linkClickEventHandler,this));
aH=ar.persist();
if(aH){this._welPersistContent.html(aH.sContents).show();
this._nCurrentPage=aH.nPage;
if(aH.nTileWrapperHeight>0){this._welTileWrapper=this._welWrapper.find(this._htConfig.sTileWrapperSelector);
this._oTileLayout._welWrapper=this._welWrapper.find(this._htConfig.sTileWrapperSelector)
}aJ=setInterval(function(){aw.scrollTo(0,aH.nScrollTop);
if(ar(aw).scrollTop()===aH.nScrollTop){clearInterval(aJ)
}},25)
}},_setRefreshByRotateEvent:function(){ar(aw).on("rotate",ar.proxy(this._refresh,this))
},_setRequestMoreEvent:function(){var aI=ar.proxy(this._requestMoreContents,this);
var aH=new news.ElementInViewportDetecter(this._welMoreRequestTrigger[0],aI);
ar(aw).on("pageshow",function(aK){var aJ=(aK.originalEvent.persisted)?500:0;
setTimeout(function(){if(aH.isVisibleInViewport()){aI()
}},aJ)
})
},_linkClickEventHandler:function(){ar.persist({sContents:this._welPersistContent.html(),nPage:this._nCurrentPage,nScrollTop:ar(aw).scrollTop(),nTileWrapperHeight:this._welTileWrapper.height()})
},_requestMoreContents:function(){var aH=this;
var aI={cid:this._htConfig.sCid,page:this._nCurrentPage};
if(true===this._bWaitingMoreContensReponse){return
}this._bWaitingMoreContensReponse=true;
this._welMoreRequestTrigger.find("img").show();
nclk(this._welWrapper[0],"hot.load","",this._nCurrentPage);
ar.ajax({method:"post",url:this._htConfig.sMoreRequestUrl,data:aI,contentType:"application/json",success:function(aJ){aH._welMoreRequestTrigger.find("img").hide();
if(!aJ||0===aJ.length){aH._welMoreRequestTrigger.hide();
return
}aH.addTiles(aJ)
},complete:function(){aH._bWaitingMoreContensReponse=false
}});
this._nCurrentPage++
}});
var ai=Z.TileLayout=aA({$static:{_DEFAULT_CONFIG:{nTileWidth:0}},$constructor:function(aH,aI){this.setConfig(aI);
this._welWrapper=ar(aH);
this._initProperty()
},_initProperty:function(){this._nBuiltTileCount=0;
this._aLastTileBottomPosition=[];
this._nTileWidth=0;
this._nHorizontalTileCount=0
},build:function(aJ,aH){var aK=this._welWrapper.width();
var aI=this._htConfig.nTileWidth||aK;
var aL=Math.floor(aK/aI);
if(aJ){this._welTiles=ar(aJ)
}if(this._welTiles.length===this._nBuiltTileCount&&aI===this._nTileWidth&&aL===this._nHorizontalTileCount){return
}if(aH){this._initProperty()
}this._nTileWidth=aI;
this._nHorizontalTileCount=aL;
this._buildTiles();
this._nBuiltTileCount=this._welTiles.length;
this._welWrapper.height(news.Util.getMaxValueInArray(this._aLastTileBottomPosition));
this._triggerEvent("build");
return this
},_buildTiles:function(){var aP=this;
var aH=this._nHorizontalTileCount;
var aI=this._nTileWidth;
for(var aL=this._nBuiltTileCount;
aL<this._welTiles.length;
aL++){var aK=this._welTiles.eq(aL);
var aO;
var aN;
var aJ;
var aM;
if(aL<aH){aP._aLastTileBottomPosition[aL]=0;
aO=aL
}else{aO=news.Util.getMinValueIndexInArray(aP._aLastTileBottomPosition)
}aN=aP._aLastTileBottomPosition[aO];
aJ=(aO%aH)*aI;
if(aK[0].style.height){aK.css("height","auto")
}aM=aK.height();
aK.css({position:"absolute",top:aN,left:aJ,width:aI,height:aM});
aP._aLastTileBottomPosition[aO]=(aN+aM)
}}});
var q=Z.Toggler=aA({$static:{_DEFAULT_CONFIG:{bPreventDefault:true,sEventName:"click"}},$constructor:function(aH,aI){this.setConfig(aI);
this._welWrapper=ar(aH);
this._initEvent()
},_initEvent:function(){var aI=this._htConfig.sEventName;
var aH=this._htConfig.sItemSelector;
this._welWrapper.on(aI,aH,ar.proxy(this._toggle,this))
},_toggle:function(aI){var aH=ar(aI.target);
if(this._htConfig.bPreventDefault){aI.preventDefault()
}this._htConfig.fnToggle(aH)
}});
var y=Z.Flicking=aA({$static:{REGEXP_CONTENT_INDEX_URL_QUERY:/[?&]?contextIndex=([0-9])/},$constructor:function(aH,aI){this._welWrap=ar(aH);
this._welFlicking=this._welWrap.find("._flicking");
this._welContentsForCircular=aI.welContents;
this._persistContentIndexKey="flickingIndex:"+this._welWrap[0].className.replace(/\s/gi,"_");
this._sNextNClkCode=aI.sNextNClkCode;
this._sPrevNClkCode=aI.sPrevNClkCode;
aI.htListeners=aI.htListeners||{};
this._nMaxContentsCount=(this._welContentsForCircular)?this._welContentsForCircular.length:this._welFlicking.find(".flick-panel").length;
this._nCurrentIndex=this._getDefaultContentIndex(aI.nStartIndex);
this._welFlicking.height("100%");
this._flicking=new eg.Flicking(this._welFlicking,{defaultIndex:this._nCurrentIndex,circular:true,deceleration:0.004,duration:100,previewPadding:aI.nPreviewPadding||0}).on("flickEnd",ar.proxy(this._onFlickEnd,this,aI.htListeners.flickEnd));
if(aI.htListeners){this._flicking.on({flick:aI.htListeners.flick,restore:aI.htListeners.restore,beforeFlickStart:aI.htListeners.beforeFlickStart,beforeRestore:aI.htListeners.beforeRestore})
}if(this._welContentsForCircular){this._updatePanel(true)
}if(aI.sNextBtnSelector&&aI.sPrevBtnSelector){new aF(this._welWrap,{nextBtnSelector:aI.sNextBtnSelector,prevBtnSelector:aI.sPrevBtnSelector}).on("clickNextBtn",ar.proxy(this._onClickNextBtn,this)).on("clickPrevBtn",ar.proxy(this._onClickPrevBtn,this))
}if(aI.sNavDotAreaSelector){this._dotPaging=new r(this._welWrap,{navDotAreaSelector:aI.sNavDotAreaSelector,contentLength:this._nMaxContentsCount,navDotTpl:aI.sNavDotTpl||' <span class="pg_num"></span> ',navDotOnClassName:aI.sOnNavDotClassName||"on"});
this._dotPaging.select(this.getCurrentIndex())
}ar(aw).on("rotate",ar.proxy(this._onRotate,this))
},getElement:function(){return this._flicking.getElement()
},getCurrentIndex:function(){return this._nCurrentIndex
},moveTo:function(aH,aI){this._flicking.moveTo(aH,aI)
},_onFlickEnd:function(aI,aH){this._nCurrentIndex=aH.no;
this._saveContentIndexForHistoryBack();
if(this._welContentsForCircular){this._updatePanel()
}if(this._dotPaging){this._dotPaging.select(this.getCurrentIndex())
}if(aI){aI(aH)
}this._fireNclk(aH.direction)
},_onClickNextBtn:function(){this._flicking.next()
},_onClickPrevBtn:function(){this._flicking.prev()
},_onRotate:function(){setTimeout(ar.proxy(function(){this._flicking.resize()
},this),50)
},_updatePanel:function(aJ){var aI=this._welContentsForCircular.eq(this._nCurrentIndex);
var aH=this._welContentsForCircular.eq(this._getNextContentIndex());
var aK=this._welContentsForCircular.eq(this._getPrevContentIndex());
if(true===aJ){this._flicking.getElement().html(aI.html())
}this._flicking.getNextElement().html(aH.html());
this._flicking.getPrevElement().html(aK.html())
},_saveContentIndexForHistoryBack:function(){ar.persist(this._persistContentIndexKey,String(this._nCurrentIndex))
},_getDefaultContentIndex:function(aI){var aJ=this._getContextIndexParam();
var aH=ar.persist(this._persistContentIndexKey);
if(null!==aH){return this._getValidIndex(aH)
}if(null!==aJ){return this._getValidIndex(aJ)
}return this._getValidIndex(aI)||0
},_getValidIndex:function(aH){var aJ=parseInt(aH,10);
var aI=this._nMaxContentsCount-1;
if(isNaN(aJ)){return 0
}if(aJ<0){return 0
}if(aJ>aI){return aI
}return aJ
},_getPrevContentIndex:function(){var aH=this._nCurrentIndex-1;
if(aH<0){return this._nMaxContentsCount-1
}return aH
},_getNextContentIndex:function(){var aH=this._nCurrentIndex+1;
if(aH>=this._nMaxContentsCount){return 0
}return aH
},_getContextIndexParam:function(){var aH=document.location.href.match(this.constructor.REGEXP_CONTENT_INDEX_URL_QUERY)||[];
var aI=parseInt(aH[1]);
return(isNaN(aI))?null:aI
},_fireNclk:function(aI){var aH;
switch(aI){case eg.DIRECTION_LEFT:aH=this._sNextNClkCode;
break;
case eg.DIRECTION_RIGHT:aH=this._sPrevNClkCode;
break
}if(aH){nclk(this._welFlicking[0],aH,"","")
}}});
var r=aA({$constructor:function(aI,aH){this._welWrapper=ar(aI);
this._welNavDotArea=this._welWrapper.find(aH.navDotAreaSelector);
this._dotSize=aH.contentLength;
this._navDotTpl=aH.navDotTpl||' <span class="pg_num"></span> ';
this._navDotOnClassName=aH.navDotOnClassName||"on";
this._paintNavDot()
},select:function(aK){var aH=this._welNavDotArea.children();
var aJ=aH.eq(aK);
var aI=this._navDotOnClassName;
aH.removeClass(aI);
aJ.addClass(aI)
},_paintNavDot:function(){if(0!==this._welNavDotArea.children().length){return
}var aH=this._dotSize;
var aK=[];
var aJ;
for(var aI=0;
aI<aH;
aI++){aJ=ar(this._navDotTpl).text(aI+1);
aK.push(" "+aJ[0].outerHTML+" ")
}this._welNavDotArea.html(aK)
}});
var aF=aA({$constructor:function(aI,aH){this.deactivate();
this._welWrapper=ar(aI);
this._welNextBtn=this._welWrapper.find(aH.nextBtnSelector);
this._welPrevBtn=this._welWrapper.find(aH.prevBtnSelector);
this._onClickNextBtnListener=ar.proxy(this._onClickNextBtn,this);
this._onClickPrevBtnListener=ar.proxy(this._onClickPrevBtn,this);
this.activate()
},_onActivate:function(){this._welNextBtn.on("click",this._onClickNextBtnListener);
this._welPrevBtn.on("click",this._onClickPrevBtnListener)
},_onDeactivate:function(){this._welNextBtn.off("click",this._onClickNextBtnListener);
this._welPrevBtn.off("click",this._onClickPrevBtnListener)
},_onClickNextBtn:function(){this._triggerEvent("clickNextBtn")
},_onClickPrevBtn:function(){this._triggerEvent("clickPrevBtn")
}});
var au=Z.IssueTimeline=aA({$static:{_BASE_TEMPLATE:aE.getTemplateRenderer('<header role="banner" class="timelineview_header _header"></header> <div class="timelineview_graph _timeline_graph"> <div class="tigr_scroll_area _graph_scroll"> <ul class="tigr_inner _graph_stage"> </ul> </div> </div> <div class="timelineview_card_wrap _article_list"> <div class="_list_stage"> </div> <p class="timelineview_info">기사는 날짜별 댓글 많은 순으로 정렬되며, 일부만 제공합니다.</p> </div>'),_LOAD_ERROR_MESSAGE:"일시적으로 데이터를 불러올 수 없습니다.\n불편을 드린점 사과드리며, 잠시 후 다시 시도해주시기 바랍니다."},$constructor:function(aJ,aH){this._onNeedLoad=ar.proxy(this._onNeedLoad,this);
this._onLoad=ar.proxy(this._onLoad,this);
this._onClickGraph=ar.proxy(this._onClickGraph,this);
aE.setFontSizeClassToBody();
aJ.html(this.constructor._BASE_TEMPLATE());
this._persist=new d(aJ[0]);
var aI=this._persist.getGraphRawData()||aH.graphData;
var aK=this._persist.isPersisted();
this._persist.setGraphRawDataToSave(aI);
if(aK){this._persist.restore();
this._persist.removePersistData()
}this._$header=aJ.find("._header");
this._$graph=aJ.find("._timeline_graph");
this._$article=aJ.find("._article_list");
this._lastLoadedData={};
this._isLoadingData=false;
this._header=new ae();
this._graph=new A().on("needLoad",this._onNeedLoad).on("load",this._onLoad).on("click",this._onClickGraph);
this._article=new U().on("needLoad",this._onNeedLoad).on("load",this._onLoad);
this._floating=new S();
this._header.init(this._$header,(aK)?null:(function(){try{var aL=aI.data;
return{title:aL.title,infoMessage:aL.infoMessage,dateRange:{start:aL.dailyCount[aL.dailyCount.length-1].date,end:aL.dailyCount[0].date}}
}catch(aM){return{}
}})());
this._graph.init(this._$graph,{data:aI,loadSize:aH.loadSize,isPersisted:aK});
this._article.init(this._$article,{groupId:aH.groupId,loadSize:aH.loadSize,isPersisted:aK});
this._floating.init(this._$header,this._$graph,this._$article);
if(aK===false){this._load(null,aH.articleInitData)
}aE.doAfterLoadEnd(ar.proxy(function(){aE.loadLazyImg(this._$article)
},this))
},_load:function(aH,aI){if(this._isUnloadable()){return
}this._changeToUnloadable();
this._floating.deactivate();
this._graph.load(aH);
if(aI){this._onLoad({dataName:"article",loadedData:aI.data})
}else{this._article.load(aH)
}},_onNeedLoad:function(aH){this._load(aH.dateQuery)
},_onClickGraph:function(aH){this._floating.makeFixedThisTimeScroll();
this._scrollToAnchorTarget(aH.anchorTargetSelector)
},_onLoad:function(aJ){this._setLastLoadedData(aJ.dataName,aJ.loadedData);
if(this._isAllLoaded()===false){return
}var aI=this._isValidLoadedData();
var aH=this._article.isContentEmpty();
if(aI){this._graph.render(this._getLastLoadedData("graph"));
this._article.render(this._getLastLoadedData("article"))
}else{if(aH){this._graph.onFailLoad();
this._article.onFailLoad();
alert(this.constructor._LOAD_ERROR_MESSAGE)
}else{this._graph.onFailLoad();
this._article.onFailLoad()
}}if(aI&&aH){this._$graph.addClass("is_animated");
this._$article.addClass("is_animated");
setTimeout(ar.proxy(function(){this._$graph.removeClass("is_animated");
this._$article.removeClass("is_animated")
},this),1000)
}this._emptyLastLoadedData();
this._changeToLoadable();
setTimeout(ar.proxy(function(){this._floating.activate()
},this),50);
if(aI){setTimeout(ar.proxy(function(){this._graph.loadIfLeftEnd()
},this),0)
}},_isAllLoaded:function(){return Boolean(this._getLastLoadedData("graph"))&&Boolean(this._getLastLoadedData("article"))
},_isValidLoadedData:function(){var aH=this._getLastLoadedData("graph");
var aJ=this._getLastLoadedData("article").dailyArticles;
try{var aK=aH.length-1;
if(aH.length===0&&(aJ===v||aJ.length===0)){return true
}return(aH[0].date===aJ[0].date)&&(aH[aK].date===aJ[aK].date)
}catch(aI){return false
}},_getLastLoadedData:function(aH){return this._lastLoadedData[aH]
},_setLastLoadedData:function(aH,aI){this._lastLoadedData[aH]=aI
},_emptyLastLoadedData:function(){this._lastLoadedData={}
},_changeToLoadable:function(){this._isLoadingData=false
},_changeToUnloadable:function(){this._isLoadingData=true
},_scrollToAnchorTarget:function(aI){var aH=ar(aI).offset().top;
aw.scrollTo(0,aH-this._floating.getFixedHeight())
},_isUnloadable:function(){return this._isLoadingData
}});
var U=aA({$static:{_TEMPLATE:aE.getTemplateRenderer('{{#each this}} {{#yearTitle}} <em class="timelineview_year_badge">{{../yearTitle}}</em> {{/yearTitle}} <div class="timelineview_card _group" id="{{itemId}}" {{{dataNextReqDate}}}> <h3 class="tica_day">{{dateTitle}}</h3> {{#if titles}} <div class="tica_keyword_area"> {{#titles}} <em class="tica_keyword">{{{this}}}</em> {{/titles}} </div> {{/if}} <ul class="tica_list"> {{#each articles}} {{#if @first}} <li class="tica_item" onclick="nclk(event,\'autohot.top\', \'\', \'\');"> {{#thumbnailAttr}} <div class="tica_thumb"> <a href="{{../link}}" class="tica_thumb_link"> <img {{{../thumbnailAttr}}} width="108" height="74" alt="{{../title}}" loading="lazy" onerror="showNoImage(this)"> {{! 뉴스모바일 서버에서 구현된 함수 }} {{#../isVideo}} <span class="tica_ic_vod"><em class="blind">동영상 뉴스</em></span> {{/../isVideo}} {{#../playTime}} <span class="r_playtime"><em class="blind">재생시간</em><span class="r_time">{{this}}</span></span> {{/../playTime}} </a> </div> {{/thumbnailAttr}} <div class="tica_text"> <a href="{{link}}" class="tica_title_link"> <strong class="tica_title">{{{title}}}</strong> </a> <div class="tica_source _rcount" {{{dataComment}}}> <span class="tica_press">{{officeName}}</span> </div> </div> </li> {{else}} <li class="tica_item {{moreItemClass}}" onclick="nclk(event,\'autohot.sub\', \'\', \'\');"> <a href="{{link}}" class="tica_link_area"> <span class="tica_press">{{officeName}}</span> <strong class="tica_title">{{{title}}}</strong> </a> </li> {{/if}} {{/each}} </ul> {{#hasMoreItem}} <div class="_more_toggle_btn"> <button type="button" class="tica_more _show_btn" onclick="nclk(event,\'autohot.open\', \'\', \'\');">더보기</button> <button type="button" class="tica_more is_off _hide_btn is_hidden" onclick="nclk(event,\'autohot.close\', \'\', \'\');">닫기</button> </div> {{/hasMoreItem}} </div> {{/each}}')},$constructor:function(){this._onScroll=ar.proxy(this._onScroll,this);
this._onClickMoreToggleBtn=ar.proxy(this._onClickMoreToggleBtn,this);
this._commentCount=news.CommentCountPainterToList.getInstance()
},init:function(aI,aH){this.deactivate();
this._api="/issueTimeline/"+aH.groupId+"/articles/day";
this._loadSize=aH.loadSize;
this._$wrapper=aI;
this._$listStage=this._$wrapper.find("._list_stage");
this._$lastGroup=null;
this._isNoMoreContent=false;
this._isFirstRender=this.isContentEmpty();
this._loading=J;
this._renderHelper=c;
if(aH.isPersisted){this._initForPersist();
this.activate()
}return this
},_initForPersist:function(){this._updateLastGroup()
},_onActivate:function(){ar(document).on("scroll",this._onScroll);
a.on("._more_toggle_btn",this._onClickMoreToggleBtn,this._$wrapper)
},_onDeactivate:function(){ar(document).off("scroll",this._onScroll);
a.off("._more_toggle_btn",this._onClickMoreToggleBtn,this._$wrapper)
},load:function(aI){var aH={days:this._loadSize};
aI=aI||this._getLastDate();
if(aI){aH.before=aI
}this._appendLoading();
ar.getJSON(this._api,aH).done(ar.proxy(function(aJ){this._triggerOnLoadEvent(aJ.data)
},this)).fail(ar.proxy(function(){this._triggerOnLoadEvent([])
},this))
},render:function(aI){var aH=this._redefineDataForRender(aI);
this._removeLoading();
if(aH.length<this._loadSize){this._isNoMoreContent=true
}if(aH.length===0){return
}this._appendArticle(aH);
this._updateLastGroup();
if(this._isFirstRender){aE.doAfterLoadEnd(ar.proxy(function(){this._commentCount.renderCommentCount({elWrapper:this._$listStage})
},this))
}else{this._commentCount.renderCommentCount({elWrapper:this._$listStage})
}this._isFirstRender=false
},isContentEmpty:function(){return this._$listStage.children().length===0
},onFailLoad:function(){this._removeLoading()
},_onScroll:function(){if(this._isNoMoreContent){return
}if(this._isVisibleLastGroup()){this._triggerEvent("needLoad",{dateQuery:this._getLastDate()})
}},_onClickMoreToggleBtn:function(aH){var aI=ar(aH.currentTarget);
if(this._isHideBtn(aI)){this._closeMoreItem(aI)
}else{this._showMoreItem(aI)
}},_appendArticle:function(aH){this._$listStage.append(this.constructor._TEMPLATE(aH))
},_updateLastGroup:function(){this._$lastGroup=this._$listStage.find("._group").last()
},_closeMoreItem:function(aH){aH.parent().find("._more_item").addClass("is_hidden");
aH.find("._show_btn").removeClass("is_hidden");
aH.find("._hide_btn").addClass("is_hidden")
},_showMoreItem:function(aH){aH.parent().find("._more_item").removeClass("is_hidden");
aH.find("._show_btn").addClass("is_hidden");
aH.find("._hide_btn").removeClass("is_hidden")
},_redefineDataForRender:function(aH){var aN=aH.dailyArticles;
if(aN===v){return[]
}var aM=6;
var aI=this._renderHelper.TODAY_DATE;
var aK=[];
var aL=(ar.proxy(function(){var aO=this._getLastDate();
return(aO)?aO.split("-")[0]:null
},this))();
var aJ=this._isFirstRender;
aN.forEach(function(aQ,aR){var aS=aQ.date;
var aP=aS.split("-");
var aO={itemId:aS,yearTitle:(function(){if(aL===null){return null
}var aT=aP[0];
return aL===aT?null:aT+"년"
})(),dateTitle:(function(){if(aS===aI){return"오늘"
}var aV=aP[1];
var aT=aP[2];
var aW=["일","월","화","수","목","금","토"];
var aU=new Date(aP[0],Number(aV)-1,Number(aT));
return aV+"월"+aT+"일 "+aW[aU.getDay()]+"요일"
})(),titles:(Boolean(aQ.title))?this._renderHelper.splitTitle(aQ.title):null,dataNextReqDate:(aN[aR+1]===v)?'data-next-req-date="'+aS+'"':null,hasMoreItem:aQ.articles.length>=aM,articles:[]};
aQ.articles.forEach(function(aV,aT){var aU=aV.type==="2";
aO.articles.push({link:aV.link,thumbnailAttr:(function(){var aY=(Boolean(aV.thumbnail))?aV.thumbnail:null;
try{var aX=(aY.indexOf("?")>-1)?"&":"?";
if(aH.useOfullfillThumbnail&&aU===false){aY=aY+aX+"type=ofullfill216_148"
}else{aY=aY+aX+"type=nf216_148"
}}catch(aW){return null
}return(aJ&&aR>=2&&aT===0)?'src="'+T.IMG_BEFORE_LOADING+'" data-src="'+aY+'"':'src="'+aY+'"'
})(),isVideo:aU,playTime:(function(){if(Boolean(aV.videoPlayTime)===false||aU===false){return null
}var a0=aV.videoPlayTime;
var aX=Math.floor(a0/(60*60));
var aZ=Math.floor((a0%3600)/60);
var a1=(a0%60).toFixed(0);
var aY=function(a2){return a2<10?"0"+a2:String(a2)
};
var aW=aY(aZ)+":"+aY(a1);
if(aX>0){aW=aY(aX)+":"+aW
}return aW
})(),title:aV.title,officeName:aV.officeName,moreItemClass:(aO.hasMoreItem&&aT+1>4)?"_more_item is_hidden":null,dataComment:(aT===0)?'data-comment=\'{"gno":"news'+aV.officeId+","+aV.articleId+'","type":"hotissue"}\'':null})
});
aK.push(aO);
aL=aP[0]
},this);
return aK
},_isVisibleLastGroup:function(){return !this._$lastGroup||aE.isExistInViewport(this._$lastGroup[0])
},_isHideBtn:function(aH){return aH.find("._hide_btn").hasClass("is_hidden")===false
},_appendLoading:function(){if(this._$lastGroup===null){return
}this._$lastGroup.css("position","relative");
this._loading.appendTo(this._$lastGroup);
this.deactivate()
},_removeLoading:function(){this._loading.removeFrom(this._$lastGroup);
this.activate()
},_getLastDate:function(){return this._$listStage.find("[data-next-req-date]").last().attr("data-next-req-date")||null
},_triggerOnLoadEvent:function(aH){this._triggerEvent("load",{dataName:"article",loadedData:aH||[]})
}});
var S=aA({$constructor:function(){this._onScroll=ar.proxy(this._onScroll,this)
},init:function(aH,aI,aJ){this.deactivate();
this._$header=aH;
this._$graph=aI;
this._$graphFixed=aI.find(":first");
this._$article=aJ;
this._headerThreshold=this._$graph.offset().top-this._getFixedHeightOf(this._$header);
this._graphThreshold=this._$article.offset().top;
this._fixedHeight=this._getFixedHeightOf(this._$header)+this._getFixedHeightOf(this._$graph);
this._scrollThreshold=10;
this._lastStateChangedTopOfGraph=ar(aw).scrollTop();
this._isFixedThisTimeScroll=false;
this.activate();
return this
},_onActivate:function(){ar(aw).on("scroll",this._onScroll)
},_onDeactivate:function(){ar(aw).off("scroll",this._onScroll)
},makeFixedThisTimeScroll:function(){this._isFixedThisTimeScroll=true
},getFixedHeight:function(){return this._fixedHeight
},_onScroll:function(){var aN=aw.pageYOffset;
var aL=this._lastStateChangedTopOfGraph;
var aK=Math.abs(aL-aN);
var aJ=aK>=this._scrollThreshold;
var aM=(aJ&&aN>aL);
var aI=(aJ&&aN<aL);
var aO=aN>this._headerThreshold;
var aH=aN>this._graphThreshold;
if(aJ===false){return
}this._updateLastStateChangedTopOfGraph();
if(this._isFixedThisTimeScroll){this._changeToFixed("header");
this._changeToFixed("graph");
this._showGraph();
this._isFixedThisTimeScroll=false;
return
}if(aO){this._changeToFixed("header")
}else{this._changeToStatic("header")
}if(aH){this._changeToFixed("graph")
}else{this._changeToStatic("graph")
}if(aM||aH===false){this._hideGraph()
}if(aH&&aI){this._showGraph()
}},_changeToFixed:function(aH){switch(aH){case"header":this._$header.addClass("is_fixed");
break;
case"graph":this._$graph.addClass("is_fixed");
break
}},_changeToStatic:function(aH){switch(aH){case"header":this._$header.removeClass("is_fixed");
break;
case"graph":this._$graph.removeClass("is_fixed");
break
}},_showGraph:function(){this._$graphFixed.addClass("is_shown")
},_hideGraph:function(){this._$graphFixed.removeClass("is_shown")
},_updateLastStateChangedTopOfGraph:function(){this._lastStateChangedTopOfGraph=aw.pageYOffset
},_getFixedHeightOf:function(aH){var aJ=(aH===this._$header)?"header":"graph";
var aK=aH.hasClass("is_fixed");
this._changeToFixed(aJ);
var aI=parseInt(aH.children(":first").css("height"));
if(aK===false){this._changeToStatic(aJ)
}return aI
}});
var A=aA({$static:{_TEMPLATE:aE.getTemplateRenderer('{{#each this}} <li class="tigr_box {{todayClass}}" {{{nextReqDate}}}> <a href="javascript:;" class="tigr_link_box _anchor_link" data-hash="#{{date}}" onclick="nclk(event,\'autohot.date\', \'\', \'\');"> <dl> <dt>{{x}}</dt> <dd> <span class="tigr_bar" style="height:{{barHeight}}"> <span class="tigr_bar_fill {{barClass}}"></span> <span class="tigr_bar_num"><em>{{count}}</em>건</span> </span> </dd> </dl> </a> </li> {{/each}}')},$constructor:function(){this._onRotate=ar.proxy(this._onRotate,this);
this._onScrollEnd=ar.proxy(this._onScrollEnd,this);
this._onClickAnchorLink=ar.proxy(this._onClickAnchorLink,this)
},init:function(aI,aH){this.deactivate();
try{if(Boolean(aH.data.success)===false||aH.data.data.dailyCount.length===0){return this
}}catch(aJ){return this
}this._datas=aH.data.data.dailyCount;
this._dateDatas=ar.map(this._datas,function(aL,aK){return aL.date
});
this._loadSize=aH.loadSize;
this._displayableMaxCount=this._getDisplayableMaxCountFrom(this._datas);
this._$scroll=aI.find("._graph_scroll");
this._$graphStage=aI.find("._graph_stage");
this._isNoMoreContent=false;
this._loading=J;
this._renderHelper=c;
if(aH.isPersisted){this._initForPersist();
this.activate()
}return this
},_initForPersist:function(){var aH=this._$scroll.find(":first").css("transform").replace(/[^0-9\-.,]/g,"").split(",");
var aI=parseInt(aH[4])||10000;
this._scroll=new ah(this._$scroll[0]);
this._scroll.scrollTo(aI,0)
},_initAfterFirstLoad:function(){this._scroll=new ah(this._$scroll[0]);
this._scroll.scrollTo(-10000,0)
},_onActivate:function(){ar(aw).on("rotate",this._onRotate);
a.on("._anchor_link",this._onClickAnchorLink,this._$graphStage);
if(this._scroll){this._scroll.enable().on("scrollEnd",this._onScrollEnd)
}},_onDeactivate:function(){ar(aw).off("rotate",this._onRotate);
a.off("._anchor_link",this._onClickAnchorLink,this._$graphStage);
this._scroll.disable().off("scrollEnd",this._onScrollEnd)
},_onClickAnchorLink:function(aI){var aH=ar(aI.currentTarget);
aI.preventDefault();
this._triggerEvent("click",{anchorTargetSelector:aH.attr("data-hash")})
},load:function(aH){this._appendLoading();
var aI=this._fetch(aH||this._getLastDate());
this._triggerEvent("load",{dataName:"graph",loadedData:aI})
},loadIfLeftEnd:function(){var aH=this._$scroll.width()*-1;
if(this._isNoMoreContent){return
}if(this._scroll.getCurrentPosition().x>=aH){this._triggerEvent("needLoad",{dateQuery:this._getLastDate()})
}},render:function(aM){var aL=null;
var aJ=this._$graphStage.width();
var aI=null;
try{aL=this._scroll.getCurrentPosition().x
}catch(aK){}var aH=this._redefineDataForRender(aM);
if(aH.length<this._loadSize){this._isNoMoreContent=true
}if(aH.length===0){this._removeLoading();
return
}this._$graphStage.prepend(this.constructor._TEMPLATE(aH));
if(!this._scroll){this._initAfterFirstLoad();
this._removeLoading();
return
}aI=((this._$graphStage.width()-aJ)*-1)+aL;
this._scroll.refresh();
this._scroll.scrollTo(aI,0);
if(parseInt(aL)===0){setTimeout(ar.proxy(function(){this._scroll.scrollBy(50,0,500);
this._removeLoading()
},this),30)
}else{this._removeLoading()
}},onFailLoad:function(){this._removeLoading()
},_onScrollEnd:function(){this.loadIfLeftEnd()
},_onRotate:function(){this.loadIfLeftEnd()
},_redefineDataForRender:function(aI){if(aI.length===0){return[]
}var aK=this._displayableMaxCount;
var aJ=this._renderHelper.TODAY_DATE;
var aH=ar.map(aI,function(aM,aL){var aP=aM.count;
var aO=(function(){var aR=aM.date.split("-");
var aS=aR[1];
var aQ=aR[2];
return(aM.date===aJ)?"오늘":aS+"."+aQ+"."
})();
var aN=(function(){return(aP>=aK)?"100%":Math.round((aP/aK)*100)+"%"
})();
return{date:aM.date,x:aO,todayClass:(aO==="오늘")?"is_today":null,barHeight:aN,barClass:(function(){var aQ=parseInt(aN,10);
if(aQ<=24){return"step1"
}if(aQ<=49){return"step2"
}if(aQ<=74){return"step3"
}return"step4"
})(),count:(aP<=aK)?String(aP):aK+"+",nextReqDate:(aI[aL+1]===v)?'data-next-req-date="'+aM.date+'"':null}
});
return aH.reverse()
},_fetch:function(aH){var aJ=(aH)?(this._dateDatas.indexOf(aH)+1):0;
var aI=aJ+this._loadSize;
return this._datas.slice(aJ,aI)||[]
},_appendLoading:function(){this._loading.appendTo(this._$scroll);
this.deactivate()
},_removeLoading:function(){setTimeout(ar.proxy(function(){this._loading.removeFrom(this._$scroll);
this.activate()
},this),200)
},_getLastDate:function(){return this._$graphStage.find("[data-next-req-date]").first().attr("data-next-req-date")||null
},_getDisplayableMaxCountFrom:function(aI){var aH=(function(){var aJ=ar.map(aI,function(aL,aK){return aL.count
});
return aE.getMaxValueInArray(aJ)
})();
if(aH>=300){return 300
}else{if(aH>=200){return 200
}else{return 100
}}}});
var d=aA({$constructor:function(aH){this.deactivate();
this._onClickLink=ar.proxy(this._onClickLink,this);
this._persistTarget=aH;
this.activate();
return this
},_onActivate:function(){ar(document).on("click",'a[href^="http"]',this._onClickLink)
},_onDeactivate:function(){ar(document).off("click",'a[href^="http"]',this._onClickLink)
},setGraphRawDataToSave:function(aH){this._graphRawDataToSave=aH
},isPersisted:function(){return Boolean(this._getPersistedData("content"))
},restore:function(){var aH=this._getPersistedData();
if(aH.content){this._persistTarget.innerHTML=aH.content;
aw.scrollTo(0,aH.scrollTop)
}},getGraphRawData:function(){return this._getPersistedData("graphRawData")
},removePersistData:function(){ar.persist({})
},_onClickLink:function(){ar.persist({content:this._persistTarget.innerHTML,graphRawData:this._graphRawDataToSave,scrollTop:ar(aw).scrollTop()})
},_getPersistedData:function(aH){var aI=ar.persist()||{};
if(aH){return aI[aH]
}return aI
}});
var c={TODAY_DATE:(function(){var aI=new Date();
var aK=aI.getFullYear();
var aH=String(aI.getMonth()+1);
var aJ=String(aI.getDate());
return aK+"-"+((aH.length===1)?"0"+aH:aH)+"-"+((aJ.length===1)?"0"+aJ:aJ)
})(),splitTitle:function(aI){var aH=aI.split("#");
return aH.map(function(aK,aJ){return aK.replace(/^\s+|\s+$/g,"")
}).filter(function(aJ){return Boolean(aJ)
})
}};
var ae=aA({$static:{_TEMPLATE:aE.getTemplateRenderer('<div class="tihe_inner"> <h1 class="tihe_title"><span class="blind">타임라인 뉴스</span></h1> <a href="javascript:;" class="tihe_btn_close _back_btn" onclick="nclk(event,\'autohot.x\', \'\', \'\');"><span class="blind">닫기</span></a> <div class="tihe_keyword_wrap"> <h2 class="tihe_keyword_area"> {{#titles}} <span class="tihe_keyword">{{{this}}}</span> {{/titles}} </h2> <div class="tihe_date"><em>{{range}}</em><button type="button" class="tihe_btn_info _info_toggle_btn" onclick="nclk(event,\'autohot.infor\', \'\', \'\');"><span class="blind">안내</span></button> <div class="tihe_layer _info_layer is_hidden" onclick="nclk(event,\'autohot.inforx\', \'\', \'\');"> <p>{{infoMessage}}</p> <button type="button" class="tihe_btn_layer_close"><span class="blind">레이어 닫기</span></button> </div> </div> </div> </div>')},$constructor:function(){this._renderHelper=c;
this._infoLayer=new p();
this._onClickBackBtn=ar.proxy(this._onClickBackBtn,this)
},init:function(aI,aH){this.deactivate();
this._$wrapper=aI;
if(aH){this._render(aH)
}this._$backBtn=this._$wrapper.find("._back_btn");
this._infoLayer.init(this._$wrapper);
this.activate();
return this
},_onActivate:function(){this._infoLayer.activate();
this._$backBtn.on("click",this._onClickBackBtn)
},_onDeactivate:function(){this._infoLayer.deactivate();
this._$backBtn.off("click",this._onClickBackBtn)
},_onClickBackBtn:function(){aE.doHistoryBack()
},_render:function(aH){this._$wrapper[0].innerHTML=this.constructor._TEMPLATE({titles:this._renderHelper.splitTitle(aH.title),infoMessage:aH.infoMessage,range:(function(){var aJ=aH.dateRange;
var aK=aJ.start.split("-");
var aI=aJ.end.split("-");
return(aK[0]===aI[0])?aK[1]+"."+aK[2]+" - "+aI[1]+"."+aI[2]:aK[0]+"."+aK[1]+"."+aK[2]+" - "+aI[0]+"."+aI[1]+"."+aI[2]
})()})
}});
var p=aA({$constructor:function(){this._onClickToggleBtn=ar.proxy(this._onClickToggleBtn,this);
this._onClickLayer=ar.proxy(this._onClickLayer,this)
},init:function(aH){this.deactivate();
this._$toggleBtn=aH.find("._info_toggle_btn");
this._$layer=aH.find("._info_layer");
return this
},_onActivate:function(){this._$toggleBtn.on("click",this._onClickToggleBtn);
this._$layer.on("click",this._onClickLayer)
},_onDeactivate:function(){this._$toggleBtn.off("click",this._onClickToggleBtn);
this._$layer.off("click",this._onClickLayer)
},_onClickToggleBtn:function(){this._$layer.toggleClass("is_hidden")
},_onClickLayer:function(){this._close()
},_close:function(){this._$layer.addClass("is_hidden")
}});
var D=Z.OpinionInfiniteScroll=aA({$static:{_TEMPLATE_BY_PAGE:{writer:aE.getTemplateRenderer('{{#each contentList}} <div class="columnist_item"> <a href="/hotissue/main?sid1=110&cid={{id}}" class="columnist_photo"> <img src="{{typicalImageUrl}}?type=f120_120" alt="" width="60" height="60" onerror="showNoImage(this)"> </a> {{#each itemArticles}} <a href="{{linkUrl}}" class="columnist_title"> <div class="columnist_whos"> <strong class="tx_name">{{../title}}</strong> {{#if ../checkUpdate}} <span class="tx_up">UP</span> {{/if}} </div> <p class="columnist_headline">{{title}}</p> <div class="columnist_data"> <em class="columnist_press">{{officeName}}</em> <em class="columnist_date">{{serviceTime.yearMonthDay}}</em> </div> </a> {{/each}} <div class="columnist_subscribe is_preparing _my_feed_wrapper"> <div class="subscribe_wrap" data-use-follow-layer="0"> <a href="javascript:;" class="subscribe is_preparing _my_feed_btn" data-subscribeChannelName="{{subscribeChannelName}}" data-subscribeChannelKey="{{subscribeChannelKey}}" data-subscribeName="{{subscribeName}}" data-clickcode-follow="{{subscribeClickCodeFollow}}" data-clickcode-unfollow="{{subscribeClickCodeUnfollow}}"> <span class="subscribe_ico"><span class="_txt">구독</span></span> </a> </div> <div class="columnist_subscribe_desc _my_feed_follower_count" data-subscribechannelkey="{{subscribeChannelKey}}" style="display:none;"><em class="columnist_subscribe_count _txt" data-use-bold="true">0</em>명</div> </div> </div> {{/each}}')}},$constructor:function(aI,aH){this._welWrapper=ar(aI);
this._welMoreLoad=this._welWrapper.find("._opinion_more_load");
this._welContentList=this._welWrapper.find("._opinion_infinite_list");
this._welPersistContent=this._welWrapper.find(".__persist_content");
this._welFooter=ar("._global_footer");
this._welOpinionMenu=ar("._opinion_menu");
this._sMoreRequestUrl=aH.sMoreRequestUrl;
this._htMoreRequestParams=aH.htMoreRequestParams;
this._bWaitingMoreContensReponse=false;
this._bLastPage=false;
ar(aw).on("pageshow",ar.proxy(this._onPageShow,this));
this._fnContentItemTemplate=this.constructor._TEMPLATE_BY_PAGE[aH.sPageType];
this._oMoreBtnInViewportDetecter=new news.ElementInViewportDetecter(this._welMoreLoad[0],ar.proxy(this._requestMoreContents,this));
if(aH.oMyFeedConfig){this._oMyFeed=new news.MyFeed().init(aH.oMyFeedConfig).activate()
}this._restorePageFromPersist();
news.ReloadedScreenTopMover.getInstance().init()
},_onPageShow:function(aH){setTimeout(ar.proxy(function(){if(this._oMoreBtnInViewportDetecter.isVisibleInViewport()){this._requestMoreContents()
}},this),(aH.originalEvent.persisted)?500:0)
},_restorePageFromPersist:function(){var aI=news.Util.getAgentInfo();
var aH;
var aJ;
if("android"!==aI.sOsName||0===this._welPersistContent.length||(4.4>parseFloat(aI.sOsVersion)&&"chrome"!==aI.sBrowserName)){return
}ar("body").on("click","a, .u_hssbt",ar.proxy(this._setPersistPage,this));
aH=ar.persist();
if(!aH){return
}this._htMoreRequestParams.page=aH.nPage;
this._bLastPage=aH._bLastPage;
this._welPersistContent.html(aH.sContentsHtml);
this._welWrapper.show();
aJ=setInterval(function(){aw.scrollTo(0,aH.nScrollTop);
if(ar(aw).scrollTop()===aH.nScrollTop){clearInterval(aJ)
}},25)
},_setPersistPage:function(){ar.persist({sContentsHtml:this._welPersistContent.html(),nPage:this._htMoreRequestParams.page,nScrollTop:ar(aw).scrollTop(),bLastPage:this._bLastPage})
},_requestMoreContents:function(){var aH=this;
if(true===this._bLastPage){this._hideMoreLoadSensorEl();
return
}if(true===this._bWaitingMoreContensReponse){return
}this._bWaitingMoreContensReponse=true;
this._showLoading();
ar.ajax({method:"get",url:this._sMoreRequestUrl,data:this._htMoreRequestParams,contentType:"application/json",success:function(aK){var aI=aK.message;
var aJ=aI.contents;
aH._bWaitingMoreContensReponse=false;
aH._hideLoading();
if(false===aI.success){aH._hideMoreLoadSensorEl();
return
}aH._appendMoreContents(aJ);
if(aH._oMyFeed){aH._oMyFeed.updateView()
}aH._bLastPage=aJ.pageNavigation.lastPage;
if(0===aJ.articles.length||true===aH._bLastPage){aH._hideMoreLoadSensorEl();
aH._showFooter()
}}})
},_appendMoreContents:function(aI){var aH=this._fnContentItemTemplate({contentList:aI.articles});
this._welContentList.append(aH);
this._htMoreRequestParams.page=aI.pageNavigation.page+1;
this._showMoreLoadSensorEl()
},_showFooter:function(){this._welFooter.show();
if(this._welOpinionMenu!==null){this._welOpinionMenu.show()
}},_showMoreLoadSensorEl:function(){this._welMoreLoad.show()
},_hideMoreLoadSensorEl:function(){this._welMoreLoad.hide()
},_showLoading:function(){this._welMoreLoad.find("img").show()
},_hideLoading:function(){this._welMoreLoad.find("img").hide()
}});
var Q=Z.PhotoViewer=aA({$static:{_PHOTO_VIEWER_ICON_HTML:'<span class="nbd_btnz _photo_viewer_btn" onclick=\'nclk(event,"art.phplus","", "");\'>원본보기</span>'},$constructor:function(aH){this._welWrapper=ar(aH);
this._initPhotoViewerBtn();
this._initEvent()
},_initPhotoViewerBtn:function(){this._welWrapper.find("img").each(function(aH,aI){var aJ=ar(aI);
if(aJ.closest(".is_small").length>0||aJ.closest("._reporter__one__photoinner").length>0){return
}aJ.after(Q._PHOTO_VIEWER_ICON_HTML)
})
},_initEvent:function(){this._welWrapper.on("click","._photo_viewer_btn",ar.proxy(this._movePhotoViewer,this))
},_movePhotoViewer:function(aH){var aI=ar(aH.currentTarget).prev();
var aJ=aI.attr("src").split("?")[0];
aJ=encodeURI(aJ);
location.href="https://m.photoviewer.naver.com/image?source="+aJ+"&nclicks=art.phplus&tapToBack=false"
}});
var O=Z.SearchHeaderToolbar=aA({$constructor:function(aH){ar(aH).find("._back_btn").on("click",ar.proxy(this._onClickBackBtn,this))
},_onClickBackBtn:function(aH){aH.preventDefault();
aE.doHistoryBack()
}});
var an=Z.SectionInfiniteScroll=aA({$static:{_DEFAULT_CONFIG:{sNclkPrefix:"",fnAfterRestore:function(){}},NEWS_GROUP_TPL:'<div class="r_group"><div class="r_group_lft"></div><div class="r_group_rgt"></div><div class="r_group_cl"></div></div>',NEWS_LIST_TPL:'<div class="r_sect_box"><div class="r_main_box"><ul class="r_news_normal">{{#each newsList}}<li class="_rcount" data-comment=\'{"gno":"news{{officeId}},{{articleId}}","nclicks":"{{nclkprefix}}.cardcmt"}\'><a class="r_news_drw" href="{{linkUrl}}" onclick="nclk(event,\'{{nclkprefix}}.card\',\'00000{{item.officeId}}_00000000000000{{articleId}}\',\'{{@index}}\');">{{#if imageUrl}}<div class="r_news_im"><img src="{{imageUrl}}?type=nf154_120" width="77" height="60" alt="{{title}}">{{#if videoType}}<span class="r_ico r_vod">동영상뉴스</span>{{/if}}</div>{{/if}}<div class="r_news_tx"><span class="r_news_tit"><strong>{{{title}}}</strong></span><span class="r_ico_b r_modify"><b>{{serviceTimeForCardList}}</b></span><em class="r_press"><b>{{officeName}}</b></em></div></a></li>{{/each}}</ul></div></div>'},$constructor:function(aH,aI){this.setConfig(aI);
this._welWrapper=ar(aH);
this._initProperty();
this._initSubElement();
this._enableGroupComponent();
this._setRequestMoreEvent();
this._welLoadingProgress.remove();
this._welPersistContents.show();
this._welMoreContensArea.show();
this._restorePageFromPersist();
news.ReloadedScreenTopMover.getInstance().init()
},_initProperty:function(){this._nCurrentPage=this._welWrapper.find(".r_group").length;
this._bWaitingMoreContensReponse=false;
this._fnNewsListTpl=Handlebars.compile(an.NEWS_LIST_TPL)
},_initSubElement:function(){this._welMoreContensArea=ar(this._htConfig.sMoreLoadTriggerSelector);
this._welPersistContents=this._welWrapper.find(".__persist_content");
this._welLoadingProgress=this._welWrapper.find("._loading")
},_enableGroupComponent:function(){for(var aH=1;
aH<=this._nCurrentPage;
aH++){this._welWrapper.find("[data-groupindex="+aH+"]").show()
}},_restorePageFromPersist:function(){var aI=news.Util.getAgentInfo();
var aH;
var aK;
var aJ;
if("android"!==aI.sOsName||(4.4>parseFloat(aI.sOsVersion)&&"chrome"!==aI.sBrowserName)){return
}ar("body").on("click","a, .u_hssbt",ar.proxy(this._setPersistPage,this));
aH=ar.persist();
if(aH){this._welPersistContents.html(aH.sContents);
this._htConfig.fnAfterRestore();
this._nCurrentPage=aH.nPage;
this._htConfig.htMoreRequestParams.itemId=aH.sItemId;
this._htConfig.htMoreRequestParams.componentId=aH.sComponentId;
aK=aH.nScrollTop+this._welPersistContents.offset().top-aH.nOffsetTop;
aJ=setInterval(function(){aw.scrollTo(0,aK);
if(ar(aw).scrollTop()===aK){clearInterval(aJ)
}},25)
}},_setPersistPage:function(){ar.persist({sContents:this._welPersistContents.html(),sItemId:this._htConfig.htMoreRequestParams.itemId,sComponentId:this._htConfig.htMoreRequestParams.componentId,nPage:this._nCurrentPage,nScrollTop:ar(aw).scrollTop(),nOffsetTop:this._welPersistContents.offset().top})
},_setRequestMoreEvent:function(){var aI=ar.proxy(this._requestMoreContents,this);
var aH=new news.ElementInViewportDetecter(this._welMoreContensArea[0],aI);
ar(aw).on("pageshow",function(aK){var aJ=(aK.originalEvent.persisted)?500:0;
setTimeout(function(){if(aH.isVisibleInViewport()){aI()
}},aJ)
})
},_requestMoreContents:function(){var aI=this;
var aJ=this._htConfig.htMoreRequestParams;
var aH={sectionId:aJ.sSectionId,componentId:aJ.sComponentId,itemId:aJ.sItemId};
if(true===this._bWaitingMoreContensReponse){return
}nclk(this._welWrapper[0],this._htConfig.sNclkPrefix+".scroll","",aI._nCurrentPage);
this._bWaitingMoreContensReponse=true;
this._welMoreContensArea.find("img").show();
ar.ajax({method:"post",url:this._htConfig.sMoreRequestUrl,data:aH,contentType:"application/json",success:function(aM){var aK=aM.message;
var aL=aK.contents.articles;
aI._welMoreContensArea.find("img").hide();
if(true!==aK.success||0===aL.length){aI._welMoreContensArea.hide();
return
}aI._nCurrentPage++;
aI._appendMoreContents(aK.contents);
aJ.sItemId=aL[aL.length-1].itemId;
aJ.sComponentId=aK.contents.componentId
},complete:function(){aI._bWaitingMoreContensReponse=false
}})
},_appendMoreContents:function(aI){var aH=ar(an.NEWS_GROUP_TPL);
var aJ=this._welWrapper.find("[data-groupindex="+(this._nCurrentPage)+"]");
aH.find(".r_group_lft").html(this._fnNewsListTpl({newsList:aI.articles.slice(0,10),nclkprefix:this._htConfig.sNclkPrefix}));
aH.find(".r_group_rgt").html(this._fnNewsListTpl({newsList:aI.articles.slice(10,20),nclkprefix:this._htConfig.sNclkPrefix}));
if(0!==aJ.length){aJ.show().before(aH)
}else{this._welPersistContents.append(aH)
}news.CommentCountPainterToList.getInstance().renderCommentCount({elWrapper:aH[0]})
}});
var ay=Z.TvPressListFlat=aA({$constructor:function(aI,aH){this.setConfig(aH);
this._welWrapper=ar(aI);
this._initEvent()
},_initEvent:function(){var aH=this;
this._welWrapper.on("click",this._htConfig.sTvPressItemSelector,function(aI){aH._saveSelectedTvPressInfo(ar(aI.currentTarget))
})
},_saveSelectedTvPressInfo:function(aH){var aI=aH.attr("menuId");
this._saveTvProgramListToCookie("TvHome_SelectedTvProgramList",aI);
if(aH.children().hasClass("on")){this._saveTvProgramListToCookie("Onair_SelectedTvProgramList",aI)
}else{this._saveTvProgramListToCookie("Replay_SelectedTvProgramList",aI)
}},_saveTvProgramListToCookie:function(aL,aJ){var aK=ar.cookie(aL);
var aH;
var aI;
if(v===aK){aK=aJ
}else{aH=aK.split(",");
aI=aH.indexOf(aJ);
if(aI>=0){aH.splice(aI,1)
}aH.unshift(aJ);
aK=aH.join(",")
}ar.cookie(aL,aK)
}});
var w=Z.AutoSummary=aA({$static:{_OPEN_CSS_CLASS:"autosummary_active",_SUMMARY_LOAD_ERROR:"자동 요약문을 불러오는데 실패했습니다.",_TITLE_TEMPLATE:aE.getTemplateRenderer('<strong class="media_end_head_autosummary_layer_tit">{{title}}</strong>')},$constructor:function(){this._oFeedbackUIAssistor=new al();
this._oLayerAutoCloseManager=ap.getInstance();
this._oLayerForAutoCloseManager={close:ar.proxy(function(){this._closeLayer()
},this),isAutoCloseExceptionEl:ar.proxy(function(aH){var aI=this._$wrapper[0];
return(aI===aH)||ar.contains(aI,aH)
},this)};
this._oLayerHeightAdjuster=new n();
this._fnOnClickToggleBtn=ar.proxy(this._onClickToggleBtn,this);
this._fnOnClickCloseButton=ar.proxy(this._onClickCloseButton,this);
this._fnOnClickViewOriginButton=ar.proxy(this._onClickViewOriginButton,this)
},init:function(aH){this.deactivate();
this._apiUrl=aH.apiUrl;
this._abortAjax();
this._$ajax=null;
this._$wrapper=ar("._auto_summary_wrapper");
this._$summaryContents=this._$wrapper.find("._auto_summary_contents");
this._$contentsBody=this._$wrapper.find("._contents_body");
this._oFeedbackUIAssistor.init(this._$wrapper,aH.feedbackDataList);
this._oLayerHeightAdjuster.init(this._$summaryContents,this._$contentsBody.parent());
this.activate();
return this
},_onActivate:function(){a.on("._toggle_btn",this._fnOnClickToggleBtn,this._$wrapper);
a.on("._close_button",this._fnOnClickCloseButton,this._$summaryContents).on("._view_origin_button",this._fnOnClickViewOriginButton,this._$summaryContents)
},_onDeactivate:function(){a.off("._toggle_btn",this._fnOnClickToggleBtn,this._$wrapper);
a.off("._close_button",this._fnOnClickCloseButton,this._$summaryContents).off("._view_origin_button",this._fnOnClickViewOriginButton,this._$summaryContents)
},confirmApplyFeedback:function(){if(R.isLoginUser()===false){return true
}return this._oFeedbackUIAssistor.confirmApplyFeedback()
},_onClickToggleBtn:function(aH){aH.preventDefault();
if(this._isClosedLayer()){this._openLayer();
return
}this._closeLayer()
},_onClickCloseButton:function(aH){aH.preventDefault();
this._closeLayer()
},_onClickViewOriginButton:function(aH){aH.preventDefault();
this._closeLayer()
},_paintSummary:function(){J.paintTo(this._$contentsBody,"10%");
this._oLayerHeightAdjuster.initStyle();
this._abortAjax();
this._$ajax=ar.ajax({url:(this._apiUrl.indexOf("?")>-1)?this._apiUrl+"&t="+new Date().getTime():this._apiUrl+"?t="+new Date().getTime(),context:this}).fail(function(aH,aJ,aI){if("abort"===aJ){return
}this._$contentsBody.html(this.constructor._SUMMARY_LOAD_ERROR)
}).done(function(aH){this._$contentsBody.html(aH.summary);
this._$contentsBody.prepend(this.constructor._TITLE_TEMPLATE({title:aH.title}));
this._oFeedbackUIAssistor.show();
this._oLayerHeightAdjuster.adjustHeight()
})
},_openLayer:function(){this._paintSummary();
ar("html").addClass(this.constructor._OPEN_CSS_CLASS);
this._oLayerAutoCloseManager.setCurrentVisibleLayer(this._oLayerForAutoCloseManager)
},_closeLayer:function(){ar("html").removeClass(this.constructor._OPEN_CSS_CLASS);
this._oFeedbackUIAssistor.hide()
},_isClosedLayer:function(){return false===this._$summaryContents.is(":visible")
},_abortAjax:function(){if(this._$ajax){this._$ajax.abort()
}}});
var al=aA({$static:{_FEEDBACK_CONFIRM_MESSAGE:"선택하신 의견을 반영하겠습니까?"},$constructor:function(){},init:function(aI,aH){this._isAlreadyFeedback=(function(){var aJ=ar.grep(aH,function(aK){return aK.isReacted
})[0];
return Boolean(aJ)
})();
this._$FeedbackWrapper=ar(aI).find("._autosummary_feedback");
this._$FeedbackUi=this._$FeedbackWrapper.find("._feedback_ui");
this._$DoneMessage=this._$FeedbackWrapper.find("._done_message");
if(this._isAlreadyFeedback){this._destroy()
}else{this.hide();
this._showFeedbackUI()
}return this
},confirmApplyFeedback:function(){if(confirm(this.constructor._FEEDBACK_CONFIRM_MESSAGE)){this._showDoneMessage();
return true
}return false
},show:function(){if(this._$FeedbackWrapper){this._$FeedbackWrapper.css("display","block")
}},hide:function(){if(this._$FeedbackWrapper){this._$FeedbackWrapper.css("display","none")
}},_showDoneMessage:function(){this._hideFeedbackUI();
this._$DoneMessage.css("display","block")
},_showFeedbackUI:function(){this._hideDoneMessage();
this._$FeedbackUi.css("display","block")
},_hideFeedbackUI:function(){this._$FeedbackUi.css("display","none")
},_hideDoneMessage:function(){this._$DoneMessage.css("display","none")
},_destroy:function(){this._$FeedbackWrapper.remove();
this._$FeedbackWrapper=null;
this._$FeedbackUi=null;
this._$DoneMessage=null
}});
var n=aA({$static:{_SCROLL_CLASS:"media_end_head_autosummary_layer_scroll"},$init:function(){},init:function(aI,aH){this._welSummaryLayer=aI;
this._welContents=aH
},initStyle:function(){this._welSummaryLayer.css("height","");
this._removeScroll()
},adjustHeight:function(){var aI=this._welContents;
var aH=aI.clone();
if(this._isFitViewport()){return
}aI.parent().append(aH.css({visibility:"hidden",bottom:"auto"}));
if(aH.height()<aI.height()){this._welSummaryLayer.height(this._welSummaryLayer.height()-(aI.height()-aH.height()))
}else{this._applyScroll()
}aH.remove()
},_isFitViewport:function(){return this._welSummaryLayer.width()>=aE.getViewPortSize().nWidth
},_applyScroll:function(){this._welSummaryLayer.addClass(this.constructor._SCROLL_CLASS)
},_removeScroll:function(){this._welSummaryLayer.removeClass(this.constructor._SCROLL_CLASS)
}});
var av=Z.ChannelPlugin=aA({$static:{_SELECTOR_FOLLOW_BTN:"._channel_plugin_follow_btn",_ATTR_CHANNEL_ID:"data-channel-id",_ATTR_TOGGLE_CLASS_NAME:"data-toggle-class",_ATTR_CHANNEL_TYPE:"data-channel-type",_ATTR_CHANNEL_NAME:"data-channel-name",_ATTR_CLICKCODE_FOLLOW:"data-clickcode-follow",_ATTR_CLICKCODE_UNFOLLOW:"data-clickcode-unfollow",_API_CHECK_FOLLOW_STATUS:"/proxy/is-following-cp-channel",_API_FOLLOW:"/proxy/follow-cp-channel",_API_UNFOLLOW:"/proxy/unfollow-cp-channel",},$constructor:function(){this._fnOnClickFollowBtn=ar.proxy(this._onClickFollowBtn,this);
this._oSimpleGuideLayer=new I();
this._oNonLoginModal=new ag()
},init:function(aH){this.deactivate();
this._wrapper=ar(aH.wrapper||document);
this._channelPluginApiDomain=aH.channelPluginApiDomain;
if(!this._channelPluginApiDomain){throw new Error("channelPluginApiDomain is required.")
}this._oSimpleGuideLayer.init(this._wrapper,this.constructor._SELECTOR_FOLLOW_BTN,aH.followLayerAutoCloseMs);
this._oNonLoginModal.init({nclickPrefix:aH.nclickPrefix});
if(R.isLoginUser()){this._checkFollowStatus()
}this.activate();
return this
},_onDeactivate:function(){this._wrapper.off("click",this.constructor._SELECTOR_FOLLOW_BTN,this._fnOnClickFollowBtn);
this._oSimpleGuideLayer.deactivate();
this._oNonLoginModal.deactivate()
},_onActivate:function(){this._wrapper.on("click",this.constructor._SELECTOR_FOLLOW_BTN,this._fnOnClickFollowBtn);
this._oSimpleGuideLayer.activate();
this._oNonLoginModal.activate()
},_onClickFollowBtn:function(aI){var aH=ar(aI.currentTarget);
var aJ=aH.attr(this.constructor._ATTR_CHANNEL_ID);
aI.preventDefault();
if(this._isFollowRequest(aH)){this._follow(aJ,aH);
this._fireClickLog(aI,aH,"follow")
}else{this._unfollow(aJ,aH);
this._fireClickLog(aI,aH,"unfollow")
}},_updateView:function(){this._checkFollowStatus()
},_checkFollowStatus:function(){var aH=this;
ar(this.constructor._SELECTOR_FOLLOW_BTN).each(function(){var aI=ar(this);
var aJ=aI.attr(aH.constructor._ATTR_CHANNEL_ID);
ar.ajax({method:"get",url:aH._channelPluginApiDomain+aH.constructor._API_CHECK_FOLLOW_STATUS+"?channelId="+aJ,success:function(aK){var aL=aK.following;
aH._updateFollowStatus(aI,aL)
},error:function(aM,aK,aL){if(400===aM.status&&"ChannelOwnerHasNotFollowingStatusException"===aM.responseJSON.error.type){aI.hide()
}else{if(412===aM.status&&"FollowRequesterMustHaveOwnChannelException"===aM.responseJSON.error.type){aI.hide()
}}},dataType:"json",timeout:500,xhrFields:{withCredentials:true}})
})
},_updateFollowStatus:function(aI,aH){var aJ=ar(aI);
var aK=aJ.attr(this.constructor._ATTR_TOGGLE_CLASS_NAME);
if(Boolean(aH)===true){aJ.addClass(aK)
}else{aJ.removeClass(aK)
}},_follow:function(aJ,aI){var aH=this;
if(!R.isLoginUser()){this._oNonLoginModal.open(function(){R.goLoginPageByAgent()
});
return
}ar.ajax({method:"post",url:aH._channelPluginApiDomain+aH.constructor._API_FOLLOW,data:JSON.stringify({channelId:aJ}),success:function(){aH._updateView();
aH._showGuideLayer(aI,true)
},error:function(aM,aK,aL){if(401===aM.status){aH._oNonLoginModal.open(function(){R.goLoginPageByAgent()
})
}else{if(409===aM.status&&"ChannelAlreadyFollowException"===aM.responseJSON.error.type){aH._updateView()
}}},contentType:"application/json",timeout:500,xhrFields:{withCredentials:true}})
},_unfollow:function(aJ,aI){var aH=this;
if(!R.isLoginUser()){this._oNonLoginModal.open(function(){R.goLoginPageByAgent()
});
return
}ar.ajax({method:"post",url:aH._channelPluginApiDomain+aH.constructor._API_UNFOLLOW,data:JSON.stringify({channelId:aJ}),success:function(){aH._updateView();
aH._showGuideLayer(aI,false)
},error:function(aM,aK,aL){if(401===aM.status){aH._oNonLoginModal.open(function(){R.goLoginPageByAgent()
})
}else{if(409===aM.status&&"ChannelAlreadyFollowException"===aM.responseJSON.error.type){aH._updateView()
}}},contentType:"application/json",timeout:500,xhrFields:{withCredentials:true}})
},_isFollowRequest:function(aH){var aI=ar(aH);
var aJ=aI.attr(this.constructor._ATTR_TOGGLE_CLASS_NAME);
return false===aI.hasClass(aJ)
},_showGuideLayer:function(aH,aI){this._oSimpleGuideLayer.show(this._getGuideLayerWrapper(aH),aH.attr(this.constructor._ATTR_CHANNEL_TYPE),aH.attr(this.constructor._ATTR_CHANNEL_NAME),aI)
},_getGuideLayerWrapper:function(aH){return aH.parent()
},_fireClickLog:function(aJ,aI,aH){var aK=null;
if("follow"===aH){aK=aI.attr(this.constructor._ATTR_CLICKCODE_FOLLOW)
}else{aK=aI.attr(this.constructor._ATTR_CLICKCODE_UNFOLLOW)
}if(v===aK){return
}nclk(aJ,aK,"","")
},});
var I=aA({$static:{_SELECTOR_GUIDE_LAYER:"._channel_follow_layer",_SELECTOR_CLOSE_BTN:"._channel_follow_layer_close",_ATTR_USE_FOLLOW_LAYER:"data-use-follow-layer",_ATTR_AUTO_CLOSE_TIMER_ID:"data-follow-layer-auto-close-timer-id",_CLASS_HIDE:"is_hidden",_TEMPLATE:aE.getTemplateRenderer('<div class="press_channel_subscribe_layer _channel_follow_layer"> <button class="press_channel_subscribe_layer_btn _channel_follow_layer_close"><span class="blind">닫기</span></button> {{{sMessage}}} </div>'),_TEXT_FOLLOW:{BLOG:"<p><em>{{sChannelName}}</em> 추가하였습니다. 블로그 이웃목록에서 확인할 수 있습니다.</p>",POST:"<p><em>{{sChannelName}}</em>를 팔로우 합니다.</p>",NAVER_TV:"<p><em>{{sChannelName}}</em> 채널을 구독합니다.</p>"},_TEXT_UNFOLLOW:{BLOG:"<p>이웃을 끊었습니다.</p>",POST:"<p><em>{{sChannelName}}</em>의 팔로우가 취소되었습니다.</p>",NAVER_TV:"<p><em>{{sChannelName}}</em> 채널 구독을 취소하였습니다.</p>"}},$constructor:function(){this._fnOnClickCloseBtn=ar.proxy(this._onClickCloseBtn,this);
this._oLayerAutoCloseManager=ap.getInstance()
},init:function(aJ,aI,aH){this._welWrapper=aJ;
this._sToggleBtnSelector=aI;
this._autoCloseMs=aH||null;
return this
},_onActivate:function(){this._welWrapper.on("click",this.constructor._SELECTOR_CLOSE_BTN,this._fnOnClickCloseBtn)
},_onDeactivate:function(){this._welWrapper.off("click",this.constructor._SELECTOR_CLOSE_BTN,this._fnOnClickCloseBtn)
},_onClickCloseBtn:function(aI){var aH=ar(aI.target);
aI.preventDefault();
this._hideWithGuideLayerChild(aH)
},show:function(aL,aJ,aH,aK){this._hideAll();
if(false===this._useFollowLayer(aL)){return
}this._renderGuideLayer(aL,aJ,aH,aK);
var aI=aL.find(this.constructor._SELECTOR_GUIDE_LAYER);
aI.removeClass(this.constructor._CLASS_HIDE);
this._activateAutoClose(aI);
this._oLayerAutoCloseManager.setCurrentVisibleLayer(this)
},_activateAutoClose:function(aJ){if(this._autoCloseMs===null){return
}var aI=this;
var aH=setTimeout(function(){aI._performHideGuideLayer(aJ)
},this._autoCloseMs);
aJ.attr(this.constructor._ATTR_AUTO_CLOSE_TIMER_ID,aH)
},hide:function(aI){var aH=this;
aI.find(this.constructor._SELECTOR_GUIDE_LAYER).each(function(aJ,aK){aH._performHideGuideLayer(aK)
})
},close:function(){this._hideAll()
},isAutoCloseExceptionEl:function(aI){var aJ=Boolean(ar(aI).closest(this._sToggleBtnSelector)[0]);
var aH=Boolean(ar(aI).closest(this.constructor._SELECTOR_GUIDE_LAYER)[0]);
return aJ||aH
},_renderGuideLayer:function(aL,aK,aI,aM){var aH=aL.find(this.constructor._SELECTOR_GUIDE_LAYER)[0];
var aJ=aM?this.constructor._TEXT_FOLLOW[aK]:this.constructor._TEXT_UNFOLLOW[aK];
if(aJ){if(v===aH){aL.append(this.constructor._TEMPLATE({sMessage:aJ.replace("{{sChannelName}}",aI)}))
}else{ar(aH).replaceWith(this.constructor._TEMPLATE({sMessage:aJ.replace("{{sChannelName}}",aI)}))
}}},_hideAll:function(){this.hide(this._welWrapper)
},_hideWithGuideLayerChild:function(aI){var aH=aI.parents(this.constructor._SELECTOR_GUIDE_LAYER);
this._performHideGuideLayer(aH)
},_performHideGuideLayer:function(aI){var aH=ar(aI);
clearTimeout(aH.attr(this.constructor._ATTR_AUTO_CLOSE_TIMER_ID));
aH.addClass(this.constructor._CLASS_HIDE)
},_useFollowLayer:function(aH){return"0"!==aH.attr(this.constructor._ATTR_USE_FOLLOW_LAYER)
}});
var ag=aA({$static:{_SELECTOR_YES_BTN:"._btn_yes",_SELECTOR_NO_BTN:"._btn_no",_CLASS_CLOSE:"is_hidden",_NCLICK_SUFFIX:".alert",_TEMPLATE:aE.getTemplateRenderer('<div class="subscribe_dimmed _channel_plugin_non_login_modal is_hidden"> <div class="subscribe_alert"> <p class="subscribe_alert_p _message">로그인이 필요합니다.<br>로그인 후 이용하시겠습니까?</p> <div class="subscribe_alert_btns"> <a href="#" class="subscribe_alert_btn _btn_yes">예</a> <a href="#" class="subscribe_alert_btn _btn_no">아니오</a> </div> </div> </div>'),},$constructor:function(){this._fnOnClickYesBtn=ar.proxy(this._onClickYesBtn,this);
this._fnOnClickNoBtn=ar.proxy(this._onClickNoBtn,this)
},init:function(aH){this._welModalWrapper=ar("._channel_plugin_non_login_modal");
if(v===this._welModalWrapper[0]){ar("body").append(this.constructor._TEMPLATE());
this._welModalWrapper=ar("._channel_plugin_non_login_modal")
}this._fnCallbackForYesBtn=ar.noop;
this.nclickPrefix=aH.nclickPrefix;
return this
},_onActivate:function(){this._welModalWrapper.on("click",this.constructor._SELECTOR_YES_BTN,this._fnOnClickYesBtn);
this._welModalWrapper.on("click",this.constructor._SELECTOR_NO_BTN,this._fnOnClickNoBtn)
},_onDeactivate:function(){this._welModalWrapper.off("click",this.constructor._SELECTOR_YES_BTN,this._fnOnClickYesBtn);
this._welModalWrapper.off("click",this.constructor._SELECTOR_NO_BTN,this._fnOnClickNoBtn)
},open:function(aH){this._fnCallbackForYesBtn=aH;
V.open(this._welModalWrapper,this.constructor._CLASS_CLOSE)
},hide:function(){V.close(this._welModalWrapper,this.constructor._CLASS_CLOSE)
},_onClickYesBtn:function(aH){aH.preventDefault();
this._fireClickLog(aH);
this._fnCallbackForYesBtn()
},_onClickNoBtn:function(aH){aH.preventDefault();
this._fireClickLog(aH);
this.hide()
},_fireClickLog:function(aH){var aI=this.nclickPrefix+this.constructor._NCLICK_SUFFIX;
nclk(aH,aI,"","")
},});
var k=Z.ChannelSubscription=aA({$static:{_SELECTOR_FOLLOW_BTN:"._channel_follow_btn",_CLASS_FOLLOWING:"on",_CLASS_PREPARING:"is_preparing",_TEXT_SELECTOR:"._txt",_TEXT_FOLLOWING:"언론사 구독중",_TEXT_FOLLOW:"언론사 구독",_ATTR_SUBSCRIBE_ID:"data-subscribe-key",_ATTR_CLICK_CODE:"data-click-code",_ATTR_BTN_TEXT:"data-btn-text",_COOKIE_FOR_CHECK_API_READY:"NNB"},$constructor:function(){this._onClickFollowBtnListener=ar.proxy(this._onClickFollowBtn,this);
this._helpLayer=new aa()
},init:function(aH){this._$wrapper=ar(aH.wrapper||document.body);
this._api=aH.api;
this._uhv=null;
this.updateView();
this._helpLayer.init(this._$wrapper);
return this
},_onActivate:function(){this._$wrapper.on("click",this.constructor._SELECTOR_FOLLOW_BTN,this._onClickFollowBtnListener)
},_onDeactivate:function(){this._$wrapper.off("click",this.constructor._SELECTOR_FOLLOW_BTN,this._onClickFollowBtnListener)
},updateView:function(){this._checkFollowState()
},_onClickFollowBtn:function(aI){var aJ=ar(aI.currentTarget);
var aK=this._getSubscribeId(aJ);
var aH=this._getSubscribeWrapper(aJ);
aI.preventDefault();
if(this._isPreparing(aJ)){return
}if(this._isFollowRequest(aJ)){this._follow({oid:aK,uhv:this._uhv},aJ);
this._helpLayer.showFollowLayer(aH);
this._fireClickLog(aI,aJ,"follow");
return
}this._unfollow({officeId:aK,uhv:this._uhv},aJ);
this._helpLayer.showUnfollowLayer(aH);
this._fireClickLog(aI,aJ,"unfollow")
},_checkFollowState:function(){var aH=this;
if(v===this._api.check){return
}if(this._isApiReady()===false){setTimeout(function(){aH._checkFollowState()
},1000);
return
}var aI=ar(this.constructor._SELECTOR_FOLLOW_BTN).map(function(aJ,aK){var aL=ar(aK);
return aH._getSubscribeId(aL)
}).get();
if(aI.length===0){return
}ar.ajax({url:this._api.check,data:{channelKeys:aI.join(",")},method:"GET",context:this,xhrFields:{withCredentials:true}}).done(function(aJ){try{this._uhv=aJ.uhv;
this._updateFollowState(aJ.channelKeys)
}catch(aK){}}).fail(function(aJ,aK){this._updateFollowState([])
})
},_updateFollowState:function(aI){var aH=this;
ar(this.constructor._SELECTOR_FOLLOW_BTN).each(function(){var aK=ar(this);
var aJ=aH._getSubscribeId(aK);
aK.removeClass(aH.constructor._CLASS_PREPARING);
if(-1===ar.inArray(aJ,aI)){aH._changeStateTo("follow",aK)
}else{aH._changeStateTo("following",aK)
}})
},_follow:function(aH,aI){this._changeStateTo("following",aI);
ar.ajax({url:this._api.follow,data:aH,method:"POST",context:this,xhrFields:{withCredentials:true}}).done(function(aJ){try{if(aJ===true){this._triggerEvent("follow",{channelKey:this._getSubscribeId(aI)});
return
}this._changeStateTo("follow",aI)
}catch(aK){}})
},_unfollow:function(aH,aI){this._changeStateTo("follow",aI);
ar.ajax({url:this._api.unfollow,data:aH,method:"POST",context:this,xhrFields:{withCredentials:true}}).done(function(aJ){try{if(aJ===true){this._triggerEvent("unfollow",{channelKey:this._getSubscribeId(aI)});
return
}this._changeStateTo("following",aI)
}catch(aK){}})
},_changeStateTo:function(aJ,aK){var aI=aK.find(this.constructor._TEXT_SELECTOR);
var aH=this._getBtnTextMap(aK);
if("following"===aJ){aK.addClass(this.constructor._CLASS_FOLLOWING);
aI.text(aH.following);
return
}aK.removeClass(this.constructor._CLASS_FOLLOWING);
aI.text(aH.follow)
},_isFollowRequest:function(aH){return false===aH.hasClass(this.constructor._CLASS_FOLLOWING)
},_isPreparing:function(aH){return aH.hasClass(this.constructor._CLASS_PREPARING)
},_fireClickLog:function(aI,aL,aH){var aJ=(aL.attr(this.constructor._ATTR_CLICK_CODE)||"").split("/");
var aK=("follow"===aH)?aJ[0]:aJ[1];
if(Boolean(aK)===false){return
}nclk(aI,aK,"","")
},_getBtnTextMap:function(aH){var aI=(aH.attr(this.constructor._ATTR_BTN_TEXT)||"").split("/");
return{follow:aI[0]||this.constructor._TEXT_FOLLOW,following:aI[1]||this.constructor._TEXT_FOLLOWING}
},_getSubscribeId:function(aH){return aH.attr(this.constructor._ATTR_SUBSCRIBE_ID)||null
},_getSubscribeWrapper:function(aH){return aH.parent()
},_isApiReady:function(){return Boolean(ar.cookie(this.constructor._COOKIE_FOR_CHECK_API_READY))
}});
var aa=aA({$static:{_FOLLOW_LAYER_SELECTOR:"._follow_layer",_UNFOLLOW_LAYER_SELECTOR:"._unfollow_layer",_VISIBLE_LAYER_CLASS:"_channel_subscription_layer_on",_AUTO_CLOSE_TIMER_ID_ATTR:"data-auto-close-timer-id",_AUTO_CLOSE_MS_MAP:{follow:3000,unfollow:2000}},$constructor:function(){},init:function(aH){this._$wrapper=ar(aH);
this._hide(this._$wrapper);
return this
},showFollowLayer:function(aI){var aH=aI.find(this.constructor._FOLLOW_LAYER_SELECTOR);
this._show(aI,aH,this.constructor._AUTO_CLOSE_MS_MAP.follow)
},showUnfollowLayer:function(aI){var aH=aI.find(this.constructor._UNFOLLOW_LAYER_SELECTOR);
this._show(aI,aH,this.constructor._AUTO_CLOSE_MS_MAP.unfollow)
},_show:function(aI,aH,aJ){this._hide(aI);
aH.css("display","").addClass(this.constructor._VISIBLE_LAYER_CLASS);
this._activateAutoClose(aI,aJ)
},_hide:function(aI){var aH=aI.find("."+this.constructor._VISIBLE_LAYER_CLASS);
clearTimeout(aI.attr(this.constructor._AUTO_CLOSE_TIMER_ID_ATTR));
aH.css("display","none").removeClass(this.constructor._VISIBLE_LAYER_CLASS)
},_activateAutoClose:function(aJ,aK){var aI=this;
var aH=setTimeout(function(){aI._hide(aJ)
},aK);
aJ.attr(this.constructor._AUTO_CLOSE_TIMER_ID_ATTR,aH)
}});
var W=Z.CommentCountPainterToList=aA({$static:{_TEMPLATES:{"default":'<a href="{{linkDomain}}/comment/list?gno=news{{oid}}%2C{{aid}}&oid={{oid}}&aid={{aid}}&tabFocusDisabled=true" class="r_ico_b r_cmt _template"{{#if nclk}} onclick="nclk(event,\'{{nclk}}\',\'\',\'\');"{{/if}}>{{count}}<span class="r_symbol">+</span></a>',headline:'<a href="{{linkDomain}}/comment/list?gno=news{{oid}}%2C{{aid}}&oid={{oid}}&aid={{aid}}&tabFocusDisabled=true" class="ico_cmt cmt _template"{{#if nclk}} onclick="nclk(event,\'{{nclk}}\',\'\',\'\');"{{/if}}>{{count}}<span class="symbol">+</span></a>',hotissue:'<a href="https://n.news.naver.com/article/comment/{{oid}}/{{aid}}" class="tica_comment"><i class="tica_ico_comment"><span class="blind">댓글 수</span></i>{{count}}+</a>',hotevent:'<a href="{{linkDomain}}/hotissue/group/comment/list?cid={{params.cid}}&gno={{params.gno}}&tabFocusDisabled=true">{{params.title}}<span class="cmt_num"><span class="cmt_inr">{{count}}</span></span></a>',countOnly:"{{count}}",press:'<a href="{{linkDomain}}/article/comment/{{oid}}/{{aid}}?tabFocusDisabled=true&{{queryUrl}}" class="ico_cmt cmt _template"{{#if nclk}} onclick="nclk(event,\'{{nclk}}\',\'\',\'\');"{{/if}}>{{count}}<span class="symbol">+</span></a>',pressHomeCard:'<a href="{{linkDomain}}/article/comment/{{oid}}/{{aid}}" class="r_ico_b r_cmt" {{#if nclk}} onclick="nclk(event,\'{{nclk}}\',\'\',\'\');"{{/if}}>{{count}}<span class="r_symbol"><span class="blind">이상</span>+</span></a>'},_oInstance:null,getInstance:function(){if(null===this._oInstance){this._oInstance=new this();
this._oInstance._$constructor.apply(this._oInstance,arguments)
}return this._oInstance
}},$constructor:function(){},_$constructor:function(){},renderCommentCount:function(aK){if(typeof aK==="undefined"){aK={}
}var aM=ar(aK.elWrapper||document);
var aN=aK.sApiUrl||"/commonComment/listCount";
var aI=aK.sRenderElementClass||"_rcount";
var aH=aK.sCommentDataName||"comment";
var aL=aK.linkDomainMap||{};
var aJ=this._getCommentCountInfo(aM,aI,aH,aL);
this._requestCommentCount(aN,aJ)
},_getCommentCountInfo:function(aM,aJ,aI,aK){var aL="."+aJ+"[data-"+aI+"]";
var aH={renderElementClass:aJ,infoByGno:{}};
aM.find(aL).each(function(aN,aS){var aR=ar(aS);
var aP=aR.data(aI);
var aQ=aP.gno;
var aO=aP;
aR.removeClass(aJ);
if(v!==aQ&&10<=aQ.length){aO.el=aS;
aO.type=aP.type||"default";
aO.linkDomain=aK[aO.type]||"";
if(aH.infoByGno[aQ]){aH.infoByGno[aQ].push(aO)
}else{aH.infoByGno[aQ]=[aO]
}return true
}return false
});
return aH
},_requestCommentCount:function(aK,aH){var aI=this;
var aJ=jQuery.map(aH.infoByGno,function(aM,aL){return aL
}).join(";");
if(aJ===""){return
}ar.ajax({method:"post",url:aK,timeout:3000,data:{gnos:aJ},success:function(aL){aI._updateCommentCount(aL.message.result,aH)
}})
},_updateCommentCount:function(aI,aH){var aJ=aH.infoByGno;
aI.forEach(function(aN,aL){var aM=aJ[aN.gno]||[];
aM.forEach(function(aO){aK.apply(this,[aO,aN])
},this)
},this);
function aK(aL,aM){var aN=ar(aL.el);
if(aN.get(0)===v){return
}aN.removeClass(aH.renderElementClass);
if("function"===typeof aL.callback){aL.callback(aN,aM);
return
}this._injectCommentCountHtml(aN,aL,aM)
}},_injectCommentCountHtml:function(aJ,aI,aH){var aK;
if(null===aH.onOff||null===aH.count||0>aH.count){return
}aK=this._getCommentCountHtml(aI,aH);
if(""===aK){return
}aJ.append(aK)
},_getCommentCountHtml:function(aK,aH){var aJ;
var aL;
var aI;
aL=this._getCommentCountForRender(aK.type,aH.count);
if(-1===aL){return""
}aJ=aH.gno.replace("news","").split(",");
aI=W._TEMPLATES[aK.type];
aI=Handlebars.compile(aI);
return aI({oid:aJ[0],aid:aJ[1],count:aE.formatNumberWithCommas(aL),nclk:aK.nclicks,queryUrl:aK.queryUrl,params:aK.params,linkDomain:aK.linkDomain})
},_getCommentCountForRender:function(aH,aI){if("hotevent"===aH||"countOnly"===aH){return aI
}if(aI<10){return -1
}if(aI<30){return 10
}if(aI<50){return 30
}if(aI<100){return 50
}if(aI<10000){return parseInt(aI/100,10)*100
}if(aI<100000){return parseInt(aI/1000,10)*1000
}return 99999
}});
var i=Z.FontResizeButton=aA({$static:{_FONT_SIZE_COOKIE_DOMAIN:".naver.com",_COOKIE_KEY:"NFS",_FONT_SIZE_CLASS_PREFIX:"fs",_CONFIG_ON_CLASS:"media_end_head_fontsize_is_on",_OPTION_SELECTED_CLASS:"media_end_head_fontsize_option_is_on",_OPTION_VALUE_DATA_ATTR:"data-value",_OPTION_SELECTOR:"._opt"},$constructor:function(){this._welWrapper=ar("._font_size_config_wrapper");
this._welConfigToggleBtn=this._welWrapper.find("._font_size_config_toggle_btn");
this._welFontSizeSettingTarget=ar("._font_size_setting_target");
this._oCookie=news.Cookie.getInstance();
this._oLayerAutoCloseManager=ap.getInstance();
this._welConfigToggleBtn.on("click",ar.proxy(this._onClickConfigToggleBtn,this));
this._welWrapper.on("click",this.constructor._OPTION_SELECTOR,ar.proxy(this._onClickFontSizeOption,this));
this._selectOption(this._getDefaultOptionWel())
},close:function(){this._hideConfig()
},isAutoCloseExceptionEl:function(aH){var aI=this._welWrapper[0];
return ar.contains(aI,aH)||aI===aH
},_onClickConfigToggleBtn:function(aH){aH.preventDefault();
if(this._isOnConfig()){this._hideConfig();
return
}this._showConfig()
},_onClickFontSizeOption:function(aH){aH.preventDefault();
this._selectOption(aH.currentTarget,true);
this._hideConfig()
},_selectOption:function(aJ,aH){var aK=ar(aJ);
var aI=this._getOptionValue(aK);
this._deselectPrevSelectedOptions();
aK.addClass(this.constructor._OPTION_SELECTED_CLASS);
this._applyFontSize(aI);
if(aH===true){this._saveFontSize(aI)
}},_deselectPrevSelectedOptions:function(){this._welWrapper.find("."+this.constructor._OPTION_SELECTED_CLASS).removeClass(this.constructor._OPTION_SELECTED_CLASS)
},_applyFontSize:function(aI){var aH=this._welFontSizeSettingTarget.attr("class").replace(new RegExp(this.constructor._FONT_SIZE_CLASS_PREFIX+"\\d"),"");
this._welFontSizeSettingTarget.attr("class",aH);
this._welFontSizeSettingTarget.addClass(this.constructor._FONT_SIZE_CLASS_PREFIX+aI)
},_saveFontSize:function(aH){this._oCookie.setItem(this.constructor._COOKIE_KEY,aH,3600,this.constructor._FONT_SIZE_COOKIE_DOMAIN)
},_getDefaultOptionWel:function(){var aH=this._oCookie.getItem(this.constructor._COOKIE_KEY);
return this._getSafelyOptionWelByValue(aH)
},_isOnConfig:function(){return this._welWrapper.hasClass(this.constructor._CONFIG_ON_CLASS)
},_showConfig:function(){this._welWrapper.addClass(this.constructor._CONFIG_ON_CLASS);
this._oLayerAutoCloseManager.setCurrentVisibleLayer(this)
},_hideConfig:function(){this._welWrapper.removeClass(this.constructor._CONFIG_ON_CLASS)
},_getOptionValue:function(aH){return Number(ar(aH).attr(this.constructor._OPTION_VALUE_DATA_ATTR))
},_getSafelyOptionWelByValue:function(aI){var aH=this._getOptionWelByValue(aI);
return(aH[0])?aH:this._getFirstOptionWel()
},_getFirstOptionWel:function(){return this._welWrapper.find(this.constructor._OPTION_SELECTOR).eq(0)
},_getOptionWelByValue:function(aI){var aH=this.constructor._OPTION_SELECTOR+"["+this.constructor._OPTION_VALUE_DATA_ATTR+"="+aI+"]";
return this._welWrapper.find(aH)
}});
var ak=Z.JournalistProfileMoreBtn=aA({$static:{_MORE_BTN_HIDDEN_CLASS:"is_hidden",_EXPAND_CONTENTS_CLASS:"is_more"},$constructor:function(aH){this._welWrapper=ar(aH);
this._welProfile=this._welWrapper.find("._journalist_profile");
if(!this._welProfile[0]){this._welProfile={height:function(){return 0
},addClass:function(){},removeClass:function(){}}
}this._welProfileAward=this._welWrapper.find("._journalist_profile_award");
if(!this._welProfileAward[0]){this._welProfileAward={height:function(){return 0
},addClass:function(){},removeClass:function(){}}
}this._welMoreBtn=this._welWrapper.find("._journalist_profile_more_btn");
this._welMoreBtn.on("click",ar.proxy(this._onClickMoreBtn,this));
ar(aw).on("rotate",ar.proxy(this._onRotate,this));
this._showMoreBtnIfNeed()
},_onClickMoreBtn:function(aH){aH.preventDefault();
if(this._isExpanded()){this._collapse()
}else{this._expand()
}},_onRotate:function(){this._showMoreBtnIfNeed()
},_collapse:function(){this._welProfile.removeClass(this.constructor._EXPAND_CONTENTS_CLASS);
this._welMoreBtn.removeClass(this.constructor._EXPAND_CONTENTS_CLASS)
},_expand:function(){this._welProfile.addClass(this.constructor._EXPAND_CONTENTS_CLASS);
this._welMoreBtn.addClass(this.constructor._EXPAND_CONTENTS_CLASS)
},_isExpanded:function(){return this._welMoreBtn.hasClass(this.constructor._EXPAND_CONTENTS_CLASS)
},_showMoreBtnIfNeed:function(){var aH=this._isExpanded();
this._collapse();
this._hideMoreBtn();
if(this._hasHiddenContents()){this._showMoreBtn()
}if(aH){this._expand()
}else{this._collapse()
}},_showMoreBtn:function(){this._welMoreBtn.removeClass(this.constructor._MORE_BTN_HIDDEN_CLASS)
},_hideMoreBtn:function(){this._welMoreBtn.addClass(this.constructor._MORE_BTN_HIDDEN_CLASS)
},_hasHiddenContents:function(){var aI=(this._welProfileAward.is&&this._welProfileAward.is(":visible"))?this._welProfileAward.height():0;
var aH=this._welProfile.height()+aI;
return aH!==this._getOriginalHeight()
},_getOriginalHeight:function(){var aH=0;
if(this._isExpanded()){aH=this._welProfile.height()+this._welProfileAward.height()
}else{this._expand();
aH=this._welProfile.height()+this._welProfileAward.height();
this._collapse()
}return aH
}});
var x=Z.Lnb=aA({$static:{_SELECTED_ITEM_CLASS:"is_active",_SELECTED_ITEM_LINK_ATTR:"aria-selected"},$constructor:function(aH){this._welWrapper=ar(aH);
if(v===this._welWrapper[0]){return
}this._welScroll=this._welWrapper.find("._scroll");
this._oLnbScroll=new ah(this._welScroll[0]);
ar(aw).on("rotate",ar.proxy(this._onRotate,this));
this._selectDefaultMenu();
this._moveSelectedItemToCenter()
},_onRotate:function(){this._oLnbScroll.refresh();
this._moveSelectedItemToCenter()
},_moveSelectedItemToCenter:function(){var aH=this._getCurrentItem();
this._oLnbScroll.scrollElToCenter(aH[0])
},_selectDefaultMenu:function(){if(this._getCurrentItem()){return
}var aH=this._welScroll.find("li")[0];
this._selectItem(aH)
},_selectItem:function(aH){ar(aH).addClass(this.constructor._SELECTED_ITEM_CLASS).find("a").eq(0).attr(this.constructor._SELECTED_ITEM_LINK_ATTR,"true")
},_getCurrentItem:function(){var aH=this._welWrapper.find("."+this.constructor._SELECTED_ITEM_CLASS);
return(aH[0])?aH:null
}});
var az=Z.MyFeed=aA({$static:{_SELECTOR_FOLLOW_BTN:"._my_feed_btn",_SELECTOR_MY_FEED_WRAPPER:"._my_feed_wrapper",_SELECTOR_MY_FEED_EXTENSION_WRAPPER:"._my_feed_extension_wrapper",_CLASS_FOLLOWING:"on",_CLASS_DISABLE:"is_preparing",_TEXT_SELECTOR:"._txt",_TEXT_FOLLOWING:"구독중",_TEXT_FOLLOW:"구독",_ATTR_SUBSCRIBE_CHANNEL_NAME:"data-subscribeChannelName",_ATTR_SUBSCRIBE_KEY:"data-subscribeChannelKey",_ATTR_SUBSCRIBE_NAME:"data-subscribeName",_ATTR_CLICKCODE_FOLLOW:"data-clickcode-follow",_ATTR_CLICKCODE_UNFOLLOW:"data-clickcode-unfollow",_ATTR_BTN_TEXT:"data-btn-text",_API_FOLLOW:"/myfeed/subscribe",_API_UNFOLLOW:"/myfeed/unsubscribe",_MSG_FAIL_FOLLOW:"통신 에러입니다.",getMyFeedUrl:function(aJ){var aI=ac.getInstance();
var aH=aI.getItem("MM_NEW");
if(aJ===false){return"https://m-mysub.naver.com/news"
}if(aH==="1"){return"https://m.naver.com/naverapp/?cmd=onMenu&menuCode=NEWS"
}else{if(aH==="2"){return"https://m.naver.com/naverapp/?cmd=onMenu&menuCode=NEWS&version=5"
}else{return"https://m.naver.com/naverapp/?cmd=onMenu&menuCode=NEWS&hash=MM_news_channel"
}}}},$constructor:function(){this._fnOnClickFollowBtn=ar.proxy(this._onClickFollowBtn,this);
this._oSimpleGuideLayer=new aq();
this._oCancelModal=new b()
},init:function(aH){this._welWrapper=ar(aH.wrapper||document);
this._sApiCheckFollowState=aH.sApiCheckFollowState;
this._sServiceType=aH.sServiceType||"news";
this._oSimpleGuideLayer.init(this._welWrapper,aH.myFeedUrl&&(this._sServiceType==="news")?aH.myFeedUrl:az.getMyFeedUrl(this._sServiceType==="news"),this.constructor._SELECTOR_FOLLOW_BTN,aH.followLayerAutoCloseMs,aH.isPressFollowGuideLayer,aH.isShowPressFollowButton,aH.onRenderSimpleGuideLayer);
this._oCancelModal.init();
if(aH.sApiFollowerCount){this._oFollowerCount=new Y(this._welWrapper,{sAttrSubscribeKey:this.constructor._ATTR_SUBSCRIBE_KEY,sApiFollowerCount:aH.sApiFollowerCount})
}else{this._oFollowerCount={check:ar.noop,update:ar.noop,bold:ar.noop,unbold:ar.noop}
}if(aH.sApiRecommandationJournalist){this._oRecommandationJournalist=new ab(this._welWrapper,{sApiRecommandationJournalist:aH.sApiRecommandationJournalist})
}else{this._oRecommandationJournalist={show:ar.noop}
}this.updateView();
return this
},_onActivate:function(){this._welWrapper.on("click",this.constructor._SELECTOR_FOLLOW_BTN,this._fnOnClickFollowBtn);
this._oSimpleGuideLayer.activate()
},_onDeactivate:function(){this._welWrapper.off("click",this.constructor._SELECTOR_FOLLOW_BTN,this._fnOnClickFollowBtn);
this._oSimpleGuideLayer.deactivate();
this._oCancelModal.deactivate()
},updateView:function(){this._checkFollowState();
this._oFollowerCount.check()
},_onClickFollowBtn:function(aI){var aH=ar(aI.currentTarget);
var aJ={channelKey:aH.attr(this.constructor._ATTR_SUBSCRIBE_KEY)||null};
aI.preventDefault();
if(this._isDisabled(aH)){return
}if(this._isFollowRequest(aH)){this._follow(aJ,aH);
this._fireClickLog(aI,aH,"follow");
return
}this._unfollow(aJ,aH);
this._fireClickLog(aI,aH,"unfollow")
},_checkFollowState:function(){if(v===this._sApiCheckFollowState){return
}var aH=this;
var aI=this._welWrapper.find(this.constructor._SELECTOR_FOLLOW_BTN).map(function(aJ,aL){var aK=ar(aL);
if(aH._isUpdatedFollowState(aK)){return
}return aK.attr(aH.constructor._ATTR_SUBSCRIBE_KEY)
}).get();
if(0===aI.length){return
}ar.getJSON(aH._sApiCheckFollowState,{channelKeys:aI.join(",")},function(aJ){aH._updateFollowState(aJ.channelKeys)
}).fail(function(aJ,aK){aH._updateFollowState([])
})
},_updateFollowState:function(aH){var aI=this;
this._welWrapper.find(this.constructor._SELECTOR_FOLLOW_BTN).each(function(){var aK=ar(this);
var aJ=aK.attr(aI.constructor._ATTR_SUBSCRIBE_KEY);
if(aI._isUpdatedFollowState(aK)){return
}aK.removeClass(aI.constructor._CLASS_DISABLE);
if(-1===ar.inArray(aJ,aH)){aI._changeStateTo("follow",aK)
}else{aI._changeStateTo("following",aK)
}})
},_follow:function(aJ,aI){var aH=this;
if(!R.isLoginUser()){R.goLoginPageByAgent();
return
}this._changeStateTo("following",aI);
this._oSimpleGuideLayer.show(this._getGuideLayerWrapper(aI),(ar.proxy(function(){var aK=aI.attr(this.constructor._ATTR_SUBSCRIBE_CHANNEL_NAME);
if(aK==="JOURNALIST"&&ar.inArray(this._sServiceType,["spo","ent"])>-1){aK="JOURNALIST_FOR_ENT_SPORTS"
}return aK
},this))(),aI.attr(this.constructor._ATTR_SUBSCRIBE_NAME));
ar.post(this.constructor._API_FOLLOW,aJ,function(aK){if("SUCCESS"===aK.message){aH._oFollowerCount.update(aK.count,aH._getMyFeedWrapper(aI));
aH._oRecommandationJournalist.show(aH._getMyFeedExtensionWrapper(aI));
return
}aH._changeStateTo("follow",aI);
aH._hideFollowNotice(aI);
if("UNAUTHORIZED"===aK.message){R.goLoginPageByAgent();
return
}alert(aH.constructor._MSG_FAIL_FOLLOW)
},"json")
},_unfollow:function(aI,aH){this._hideFollowNotice(aH);
if(!R.isLoginUser()){R.goLoginPageByAgent();
return
}this._oCancelModal.open(aH.attr(this.constructor._ATTR_SUBSCRIBE_CHANNEL_NAME),aH.attr(this.constructor._ATTR_SUBSCRIBE_NAME),ar.proxy(this._performUnfollow,this,aI,aH))
},_performUnfollow:function(aJ,aI){var aH=this;
this._oCancelModal.hide();
this._changeStateTo("follow",aI);
ar.post(this.constructor._API_UNFOLLOW,aJ,function(aK){if("SUCCESS"===aK.message){aH._oFollowerCount.update(aK.count,aH._getMyFeedWrapper(aI));
return
}aH._changeStateTo("following",aI);
if("UNAUTHORIZED"===aK.message){R.goLoginPageByAgent();
return
}alert(aH.constructor._MSG_FAIL_FOLLOW)
},"json")
},_changeStateTo:function(aL,aJ){var aK=this._getMyFeedWrapper(aJ);
var aI=aJ.find(this.constructor._TEXT_SELECTOR);
var aH=this._getBtnTextMap(aJ);
if("following"===aL){aJ.addClass(this.constructor._CLASS_FOLLOWING);
aI.text(aH.following);
this._oFollowerCount.bold(aK);
return
}aJ.removeClass(this.constructor._CLASS_FOLLOWING);
aI.text(aH.follow);
this._oFollowerCount.unbold(aK)
},_getGuideLayerWrapper:function(aH){return aH.parent()
},_getMyFeedWrapper:function(aH){return aH.parents(this.constructor._SELECTOR_MY_FEED_WRAPPER)
},_getMyFeedExtensionWrapper:function(aH){return aH.parents(this.constructor._SELECTOR_MY_FEED_EXTENSION_WRAPPER)
},_isFollowRequest:function(aH){return false===aH.hasClass(this.constructor._CLASS_FOLLOWING)
},_isUpdatedFollowState:function(aH){return false===this._isDisabled(aH)
},_isDisabled:function(aH){return aH.hasClass(this.constructor._CLASS_DISABLE)
},_hideFollowNotice:function(aH){this._oSimpleGuideLayer.hide(this._getGuideLayerWrapper(aH))
},_fireClickLog:function(aJ,aI,aH){var aK=null;
if("follow"===aH){aK=aI.attr(this.constructor._ATTR_CLICKCODE_FOLLOW)
}else{aK=aI.attr(this.constructor._ATTR_CLICKCODE_UNFOLLOW)
}if(v===aK){return
}nclk(aJ,aK,"","")
},_getBtnTextMap:function(aH){var aI=(aH.attr(this.constructor._ATTR_BTN_TEXT)||"").split("/");
return{follow:aI[0]||this.constructor._TEXT_FOLLOW,following:aI[1]||this.constructor._TEXT_FOLLOWING}
}});
var Y=aA({$static:{_SELECTOR_FOLLOWER_COUNT:"._my_feed_follower_count",_SELECTOR_FOLLOWER_COUNT_TXT:"._txt",_USE_BOLD_OPTION_DATA_ATTR:"data-use-bold",_COUNT_TXT_BOLD_CLASS:"on",_UPDATED_CLASS:"_is_updated"},$constructor:function(aI,aH){this._welWrapper=ar(aI);
this._sAttrSubscribeKey=aH.sAttrSubscribeKey;
this._sApiFollowerCount=aH.sApiFollowerCount;
return this
},bold:function(aJ){if(!aJ){return
}var aH=aJ.find(this.constructor._SELECTOR_FOLLOWER_COUNT);
var aI=this._getCountTxtWel(aH);
if(this._isUsableBold(aI)){aH.addClass(this.constructor._COUNT_TXT_BOLD_CLASS)
}},unbold:function(aJ){if(!aJ){return
}var aH=aJ.find(this.constructor._SELECTOR_FOLLOWER_COUNT);
var aI=this._getCountTxtWel(aH);
if(this._isUsableBold(aI)){aH.removeClass(this.constructor._COUNT_TXT_BOLD_CLASS)
}},check:function(){var aI=this._sAttrSubscribeKey;
var aH=this._welWrapper.find(this.constructor._SELECTOR_FOLLOWER_COUNT).filter(ar.proxy(function(aL,aJ){var aK=ar(aJ);
if(this._isAlreadyUpdated(aK)||v===aK.attr(aI)){return false
}return true
},this));
if(0===aH.length){return
}ar.getJSON(this._sApiFollowerCount,{channelKeys:aH.map(function(){return ar(this).attr(aI)
}).get().join(",")},ar.proxy(function(aK){if("SUCCESS"!==aK.message){return
}var aJ=this;
var aL={};
ar.each(aK.result,function(aN,aM){aL[aM.channelKey]=aM.count
});
aH.each(function(){var aN=ar(this);
var aM=aL[aN.attr(aI)];
aJ._update(aM,aN)
})
},this))
},update:function(aH,aJ){var aI=aJ.find(this.constructor._SELECTOR_FOLLOWER_COUNT);
if(!aI[0]||aI.length>1){return
}this._update(aH,aI)
},_update:function(aI,aJ){var aH=aJ.attr("data-display-zero-count")==="true";
if(aH||aI>0){aJ.find(this.constructor._SELECTOR_FOLLOWER_COUNT_TXT).text(aE.formatNumberWithCommas(aI));
aJ.show()
}else{aJ.hide()
}this._setUpdatedFlag(aJ)
},_getCountTxtWel:function(aH){return(aH)?aH.find(this.constructor._SELECTOR_FOLLOWER_COUNT_TXT):v
},_isAlreadyUpdated:function(aH){return aH.hasClass(this.constructor._UPDATED_CLASS)
},_setUpdatedFlag:function(aH){return aH.addClass(this.constructor._UPDATED_CLASS)
},_isUsableBold:function(aH){return(aH)?"true"===aH.attr(this.constructor._USE_BOLD_OPTION_DATA_ATTR):false
}});
var ab=aA({$static:{_SELECTOR_LIST:"._recommandation_journalist ._list",_SELECTOR_WRAPPER:"._recommandation_journalist",_CLASS_SHOW:"media_journalistcard_recommend_is_on",_TEMPLATE_LIST_ITEM:aE.getTemplateRenderer('{{#each list}} <li class="media_journalistcard_recommend_item _my_feed_wrapper"> <div class="media_journalistcard_recommend_item_inner"> <a href="{{reporterUrl}}" class="media_journalistcard_recommend_item_link" onclick="nclk(event,\'art.bmmore\',\'\',\'\');"> <span class="media_journalistcard_recommend_img_wrap {{#if noProfile}} media_journalistcard_recommend_img_wrap_is_empty {{/if}}"><img src="{{imageUrl}}?type=nf90_90" width="45" height="45" alt="{{reporterName}}" class="media_journalistcard_recommend_img"></span> <em class="media_journalistcard_recommend_name">{{reporterName}}</em> </a> <span class="media_journalistcard_recommend_subscribe _my_feed_follower_count" data-subscribeChannelKey="{{channelKey}}" {{#unless feedCount}}style="display:none"{{/unless}}>구독자 <em class="_txt">{{feedCount}}</em></span> <div class="subscribe_wrap" data-use-follow-layer="0"> <a href="#" class="subscribe _my_feed_btn {{#is subscribeYn \'Y\'}}on{{/is}}" data-subscribeChannelName="JOURNALIST" data-subscribeChannelKey="{{channelKey}}" data-subscribeName="{{reporterName}}" data-clickcode-follow="art.bmsubs" data-clickcode-unfollow="art.bmunsubs"> <span class="subscribe_ico"><span class="_txt">{{#is subscribeYn \'Y\'}}구독중{{else}}구독{{/is}}</span></span> </a> </div> </div> </li> {{/each}}')},$constructor:function(aI,aH){this._sApi=aH.sApiRecommandationJournalist;
aI.on("click","._recommandation_journalist ._btn_close",ar.proxy(function(aJ){aJ.preventDefault();
this._hide(aJ.currentTarget)
},this));
return this
},show:function(aH){var aI=aH.find(this.constructor._SELECTOR_LIST);
if(!aI[0]){return
}if(aI.find("li")[0]){this._performShow(aI);
return
}ar.getJSON(this._sApi,ar.proxy(function(aJ){aJ=aJ.message;
if(!aJ.success||!aJ.result){return
}if(aJ.result.length<3){return
}this._paint(aI,aJ.result);
this._performShow(aI)
},this))
},_paint:function(aH,aI){ar.each(aI,function(aJ,aK){aK.feedCount=(aK.feedCount)?aE.formatNumberWithCommas(aK.feedCount):0
});
aH[0].innerHTML=this.constructor._TEMPLATE_LIST_ITEM({list:aI})
},_performShow:function(aH){this._getWrapper(aH).addClass(this.constructor._CLASS_SHOW)
},_hide:function(aH){this._getWrapper(aH).removeClass(this.constructor._CLASS_SHOW)
},_getWrapper:function(aH){return ar(aH).parents(this.constructor._SELECTOR_WRAPPER)
}});
var aq=aA({$static:{_SELECTOR_GUIDE_LAYER:"._my_feed_guide_layer",_SELECTOR_CLOSE_BTN:"._btn_my_feed_guide_close",_ATTR_USE_FOLLOW_LAYER:"data-use-follow-layer",_ATTR_AUTO_CLOSE_TIMER_ID:"data-follow-layer-auto-close-timer-id",_CLASS_HIDE:"is_hidden",_TEMPLATE:aE.getTemplateRenderer('<div class="subscribe_guide _my_feed_guide_layer is_hidden" style="-webkit-transform:translateZ(0);"> {{#isPressFollowGuideLayer}} <a href="{{sMyFeedUrl}}"><p class="subscribe_guide_p _btn_go_my_news">{{{sMessage}}}</p></a> {{#isShowPressFollowButton}} <div class="subscribe_guide_footer"> <small class="subscribe_footer_desc">기자의 언론사도 함께 구독해 보세요.</small> {{! 실제 언론사 구독 버튼은 MyFeed() > onRenderSimpleGuideLayer callback에 의해 추가됩니다. }} <div class="subscribe_guide_btn_wrapper"></div> </div> {{/isShowPressFollowButton}} {{/isPressFollowGuideLayer}} {{^isPressFollowGuideLayer}} <p class="subscribe_guide_p">{{{sMessage}}}</p> <div class="subscribe_guide_btns"> <a href="{{sMyFeedUrl}}" class="subscribe_guide_btn _btn_go_my_news">{{goLinkText}}</a> </div> {{/isPressFollowGuideLayer}} <a href="#" class="subscribe_guide_close _btn_my_feed_guide_close">닫기</a> </div>'),_MESSAGE_TAG_MAP:{JOURNALIST:"<em>{{sFeedName}} 기자</em>의 기사는 <br> <em>언론사편집판</em>에서 볼 수 있습니다",JOURNALIST_FOR_ENT_SPORTS:"<em>{{sFeedName}} 기자</em>의 기사를 <br><em>구독</em> 관리 페이지에서 확인할 수 있습니다.",HOT_SERIES:'<em class="subscribe_guide_p_serialtitle">{{sFeedName}}</em>의 기사를<br>네이버 <em>언론사편집판</em>에서 보실 수 있습니다.',FRONT_PAGE:"<em>{{sFeedName}}</em>의 1면 기사를 <br>네이버 <em>MY뉴스</em>에서 보실 수 있습니다.",OASIS:"재미와 감동이 있는 <em>오아시스 뉴스</em>를 <br>네이버 <em>MY뉴스</em>에서 보실 수 있습니다."},_LINK_TEXT_MAP:{JOURNALIST:"언론사편집판 바로가기",JOURNALIST_FOR_ENT_SPORTS:"구독관리 바로가기",HOT_SERIES:"언론사편집판 바로가기",FRONT_PAGE:"MY뉴스 바로가기",OASIS:"구독관리 바로가기"}},$constructor:function(){this._fnOnClickCloseBtn=ar.proxy(this._onClickCloseBtn,this);
this._onClickGoMyNewsBtn=ar.proxy(this._onClickGoMyNewsBtn,this);
this._oLayerAutoCloseManager=ap.getInstance();
this._cookie=ac.getInstance()
},init:function(aN,aH,aM,aJ,aL,aI,aK){this._welWrapper=aN;
this._sMyFeedUrl=aH;
this._sToggleBtnSelector=aM;
this._autoCloseMs=aJ||null;
this._isPressFollowGuideLayer=(aL===true);
this._isShowPressFollowButton=(aI===true);
this._onRenderSimpleGuideLayer=aK;
return this
},_onActivate:function(){this._welWrapper.on("click",this.constructor._SELECTOR_CLOSE_BTN,this._fnOnClickCloseBtn);
this._welWrapper.on("click","._btn_go_my_news",this._onClickGoMyNewsBtn)
},_onDeactivate:function(){this._welWrapper.off("click",this.constructor._SELECTOR_CLOSE_BTN,this._fnOnClickCloseBtn);
this._welWrapper.off("click","._btn_go_my_news",this._onClickGoMyNewsBtn)
},_onClickGoMyNewsBtn:function(){var aH=new Date();
aH.setTime(aH.getTime()+(10*1000));
this._cookie.setItem("MM_MYNEWS_NUDGE_EXPOSURE","1",aH,".naver.com")
},_onClickCloseBtn:function(aI){var aH=ar(aI.target);
aI.preventDefault();
this._hideWithGuideLayerChild(aH)
},show:function(aK,aJ,aH){this._hideAll();
if(false===this._useFollowLayer(aK)){return
}this._renderGuideLayer(aK,aJ,aH);
var aI=aK.find(this.constructor._SELECTOR_GUIDE_LAYER);
aI.removeClass(this.constructor._CLASS_HIDE);
this._activateAutoClose(aI);
this._oLayerAutoCloseManager.setCurrentVisibleLayer(this)
},_activateAutoClose:function(aJ){if(this._autoCloseMs===null){return
}var aI=this;
var aH=setTimeout(function(){aI._performHideGuideLayer(aJ)
},this._autoCloseMs);
aJ.attr(this.constructor._ATTR_AUTO_CLOSE_TIMER_ID,aH)
},hide:function(aI){var aH=this;
aI.find(this.constructor._SELECTOR_GUIDE_LAYER).each(function(aJ,aK){aH._performHideGuideLayer(aK)
})
},close:function(){this._hideAll()
},isAutoCloseExceptionEl:function(aI){var aJ=Boolean(ar(aI).closest(this._sToggleBtnSelector)[0]);
var aH=Boolean(ar(aI).closest(this.constructor._SELECTOR_GUIDE_LAYER)[0]);
return aJ||aH
},_renderGuideLayer:function(aJ,aI,aH){if(v!==aJ.find(this.constructor._SELECTOR_GUIDE_LAYER)[0]){return
}aJ.append(this.constructor._TEMPLATE({sMessage:this.constructor._MESSAGE_TAG_MAP[aI].replace("{{sFeedName}}",aH),sMyFeedUrl:this._sMyFeedUrl,goLinkText:this.constructor._LINK_TEXT_MAP[aI],isPressFollowGuideLayer:this._isPressFollowGuideLayer,isShowPressFollowButton:this._isShowPressFollowButton}));
if(this._onRenderSimpleGuideLayer){this._onRenderSimpleGuideLayer()
}},_hideAll:function(){this.hide(this._welWrapper)
},_hideWithGuideLayerChild:function(aI){var aH=aI.parents(this.constructor._SELECTOR_GUIDE_LAYER);
this._performHideGuideLayer(aH)
},_performHideGuideLayer:function(aI){var aH=ar(aI);
clearTimeout(aH.attr(this.constructor._ATTR_AUTO_CLOSE_TIMER_ID));
aH.addClass(this.constructor._CLASS_HIDE)
},_useFollowLayer:function(aH){return"0"!==aH.attr(this.constructor._ATTR_USE_FOLLOW_LAYER)
}});
var b=aA({$static:{_SELECTOR_YES_BTN:"._btn_yes",_SELECTOR_NO_BTN:"._btn_no",_SELECTOR_MESSAGE:"._message",_CLASS_CLOSE:"is_hidden",_TEMPLATE:aE.getTemplateRenderer('<div class="subscribe_dimmed _my_feed_cancel_modal is_hidden"> <div class="subscribe_alert"> <p class="subscribe_alert_p _message"></p> <div class="subscribe_alert_btns"> <a href="#" class="subscribe_alert_btn _btn_yes">예</a> <a href="#" class="subscribe_alert_btn _btn_no">아니오</a> </div> </div> </div>'),_MESSAGE_TAG_MAP:{FRONT_PAGE:'{{sFeedName}}의 1면 기사<br> 구독을 취소하시겠습니까? <span class="subscribe_alert_p_dsc">해당 기사는 <em>구독</em>에서 제외됩니다.</span>',JOURNALIST:'{{sFeedName}} 기자의 기사<br> 구독을 취소하시겠습니까? <span class="subscribe_alert_p_dsc"><em>구독</em>에서 해당 기자의 기사가 제외됩니다.</span>',OASIS:'오아시스 뉴스<br> 구독을 취소하시겠습니까? <span class="subscribe_alert_p_dsc">해당 기사는 <em>구독</em>에서 제외됩니다.</span>',HOT_SERIES:'<span class="subscribe_alert_p_serialtitle">{{sFeedName}}</span><br>연재 구독을 취소하시겠습니까? <span class="subscribe_alert_p_dsc">해당 기사는 <em>구독</em>에서 제외됩니다.</span>',PRESSHOME:"{{sFeedName}} 언론사 구독을<br>취소하시겠습니까?",}},$constructor:function(){this._fnOnClickYesBtn=ar.proxy(this._onClickYesBtn,this);
this._fnOnClickNoBtn=ar.proxy(this._onClickNoBtn,this)
},init:function(){this._welModalWrapper=ar("._my_feed_cancel_modal");
if(v===this._welModalWrapper[0]){ar("body").append(this.constructor._TEMPLATE());
this._welModalWrapper=ar("._my_feed_cancel_modal")
}this._fnCallbackForYesBtn=ar.noop;
return this
},_onActivate:function(){this._welModalWrapper.on("click",this.constructor._SELECTOR_YES_BTN,this._fnOnClickYesBtn);
this._welModalWrapper.on("click",this.constructor._SELECTOR_NO_BTN,this._fnOnClickNoBtn)
},_onDeactivate:function(){this._welModalWrapper.off("click",this.constructor._SELECTOR_YES_BTN,this._fnOnClickYesBtn);
this._welModalWrapper.off("click",this.constructor._SELECTOR_NO_BTN,this._fnOnClickNoBtn)
},open:function(aJ,aH,aI){this._fnCallbackForYesBtn=aI;
this._updateMessage(aJ,aH);
V.open(this._welModalWrapper,this.constructor._CLASS_CLOSE);
this.activate()
},hide:function(){V.close(this._welModalWrapper,this.constructor._CLASS_CLOSE);
this.deactivate()
},_onClickYesBtn:function(aH){aH.preventDefault();
this._fnCallbackForYesBtn()
},_onClickNoBtn:function(aH){aH.preventDefault();
this.hide()
},_updateMessage:function(aI,aH){this._welModalWrapper.find(this.constructor._SELECTOR_MESSAGE).html(this.constructor._MESSAGE_TAG_MAP[aI].replace("{{sFeedName}}",aH))
}});
var K=Z.NewspaperArticleList=aA({$static:{_FIXED_HEADER_SELECTORS:["._press_float","._press_tab_scroll"],_SECTION_START_PAGE_SELECTOR:"._start_page",_EMPTY_HTML:aE.getTemplateRenderer('<div class="offc_page_empty_alert_wrap"> <p class="offc_page_empty_alert">발행된 종이신문이 없거나<br>신문게재 정보가 입력되지 않았습니다.</p> <div>'),_ARTICLE_LIST_TPL:aE.getTemplateRenderer('{{#sectionList}} <div class="brick-house _brick_gid_wrapper"> <div class="brick-vowel _brick_column"> {{! 첫 번째 column 에만 출력. column 별 배치는 서버에서 별도로 처리된다. }} {{#paperList}} <div class="newspaper_brick_item {{#isStartPaper}}_start_page{{/isStartPaper}}"> <div class="newspaper_wrp {{#isMainPaper}}type_main{{/isMainPaper}}"> <div class="newspaper_inner"> <h3> <span class="page_notation"><em>{{paperName}}</em>면</span> {{#sectionName}}<span class="page_section">{{.}}</span>{{/sectionName}} </h3> <ul class="newspaper_article_lst"> {{#articleList}} <li> {{#if isFirst}} {{#if isWideImage}} <a href="{{url}}" onclick="nclk(event,\'pap.alist\',\'\',\'\');"> <div class="newspaper_img_frame"> <img src="{{thumnailImgUrl}}?type=nf600_340" alt="{{title}}" onerror="showNoImage(this)"> </div> <div class="newspaper_txt_box"> <strong>{{{title}}}</strong> <p>{{{contents}}}</p> </div> </a> {{/if}} {{#if isNormalImage}} <a class="article_lst--with_image" href="{{url}}"" onclick="nclk(event,\'pap.alist\',\'\',\'\');"> <div class="newspaper_img_frame"> <img src="{{thumnailImgUrl}}?type=nf264_176" width="132" height="88" alt="{{title}}" onerror="showNoImage(this)"> </div> <div class="newspaper_txt_box"> <strong>{{{title}}}</strong> <p>{{{contents}}}</p> </div> </a> {{/if}} {{#if isNoImage}} <a href="{{url}}"" onclick="nclk(event,\'pap.alist\',\'\',\'\');"> <div class="newspaper_txt_box"> <strong>{{{title}}}</strong> <p>{{{contents}}}</p> </div> </a> {{/if}} {{/if}} {{^if isFirst}} <a class="article_lst--title_only" href="{{url}}" onclick="nclk(event,\'pap.alist\',\'\',\'\');"> <strong>{{{title}}}</strong> </a> {{/if}} </li> {{/articleList}} </ul> </div> </div> </div> {{/paperList}} </div> <div class="brick-vowel _brick_column"></div> </div> <div class="quick_select_page"> <h4 class="u_skip">페이지 바로가기</h4> <div class="_page_navi_scroll" style="width:100%"> <div> {{#sectionNavigationList}} <a href="javascript:;" onclick="nclk(event,\'pap.apage\',\'\',\'\');">{{name}}</a> {{/sectionNavigationList}} </div> </div> <span class="blur_bar blur_fir" style="display:none"></span><span class="blur_bar blur_last"></span> </div> {{#subscribeInfo}} <div class="office_subscribe"> <p class="office_subscribe_txt">지금 보고 계신 <strong>{{officeName}}</strong>{{officeNamePostposition}} 신문으로 구독해보세요.</p> <div class="office_subscribe_link_wrap"> {{#if phoneNumberAsUrl}} <a href="{{phoneNumberAsUrl}}" class="office_subscribe_link"> <i class="office_subscribe_icon">전화</i> <span>구독문의</span> </a> {{/if}} {{#if phoneNumberAsNumber}} <a href="tel:{{phoneNumberAsNumber}}" class="office_subscribe_link"> <i class="office_subscribe_icon">전화</i> {{#if subscribeUrl}} {{! url 이 있다면, phoneNumber 는 노출 X }} <span>구독문의</span> {{/if}} {{^if subscribeUrl}} {{! url 이 없다면, 공간 여유가 있으므로 phoneNumber 도 노출 }} <strong>구독문의</strong> <span class="office_subscribe_num">{{phoneNumberAsNumber}}</span> {{/if}} </a> {{/if}} {{#subscribeUrl}} <a href="{{.}}" class="office_subscribe_link"> <span>신청 바로가기</span><i class="office_subscribe_arrow"></i> </a> {{/subscribeUrl}} </div> </div> {{/subscribeInfo}} {{/sectionList}}')},$constructor:function(aH,aI){this._welWrapper=ar(aH);
this._contentApi="/api/press/"+aI.sOfficeId+"/newspaper";
this._articleDomain=aI.sLinkDomain;
this._onRender=aI.onRender;
this._welDateTitle=this._welWrapper.find("._date_title");
this._welArticleListWrap=this._welWrapper.find("._persist_wrap");
this._sCurrentDate=(ar.persist()||{}).sDate||aI.sCurrentDate||moment().format("YYYYMMDD");
new news.DatePickerCalendar("._date_picker_calendar",{sSelectedDayClass:"cal_today",sPrevMonthDaysClass:"calendar-prev-mon",sNextMonthDaysClass:"calendar-next-mon",sControlBtnDisableClass:"dim",sCurrentDate:this._sCurrentDate,htHandelers:{fnOnChangeDay:ar.proxy(this._onChangeDay,this)}});
this._oPageNavigation=new ax(this._welWrapper).on("clickPage",ar.proxy(this._onClickPage,this));
this._util=aE;
this._$ajaxArticle=null;
ar("body").on("click","a, .u_hssbt",ar.proxy(this._savePersistContents,this));
this._initPageNavigation()
},getCurrentDate:function(){return this._sCurrentDate
},_onChangeDay:function(aH){var aI=aH.format("YYYYMMDD");
if(this._sCurrentDate===aI){return
}this._sCurrentDate=aI;
this._loadArticle(aI)
},_onClickPage:function(aH){aw.scrollTo(0,this._getTopOffsetOfPage(aH.nPageIndex))
},_getTopOffsetOfPage:function(aI){var aH=this._getTopPaddingForPageScrollTo();
return this._welWrapper.find(this.constructor._SECTION_START_PAGE_SELECTOR).eq(aI).offset().top-aH
},_loadArticle:function(aI){var aH=this;
if(this._$ajaxArticle){this._$ajaxArticle.abort()
}this._$ajaxArticle=ar.getJSON(this._contentApi,{date:aI},function(aJ){if(0===aJ.newspaperOfficeMainPerPaper.length){aH._renderEmptyText();
return
}aH._renderArticleList(aH._buildContentsTemplateData(aJ))
})
},_buildContentsTemplateData:function(aL){var aJ=this._util;
var aI=this._sCurrentDate;
var aK=this._articleDomain;
return{sectionList:aM()};
function aM(){var aR=aH();
var aO={};
aL.pageInfoList.forEach(function(aS){aO[aS.paperNumber]=aS
});
var aQ=[];
var aP=[];
aL.newspaperOfficeMainPerPaper.forEach(function(aT,aS){var aU=aT.newspaperOfficeMain||[];
if(!aU[0]){return
}var aV=(aS===0)&&(aU[0].viewType==="A");
aP.push({paperName:aT.paperNumber,sectionName:aO[aT.paperNumber].sectionName,isStartPaper:aT.startOfPage,isMainPaper:aV,articleList:aU.map(function(aX,aW){aX.isFirst=aW===0;
aX.url=aK+("/article/newspaper/{{officeId}}/{{articleId}}?date="+aI).replace("{{officeId}}",aX.officeId).replace("{{articleId}}",aX.articleId);
if(aX.isFirst){aX.isWideImage=aV&&aX.thumnailImgUrl&&aX.viewType==="A";
aX.isNormalImage=aX.thumnailImgUrl&&!aX.isWideImage;
aX.isNoImage=!aX.isWideImage&&!aX.isNormalImage
}return aX
})});
if(aT.endOfPage){aQ.push((function(){var aW=aQ.length===0;
return{paperList:aP,sectionNavigationList:aR,subscribeInfo:aW&&aN()}
})());
aP=[]
}});
return aQ
}function aH(){try{var aO=aL.navigation.newspaperNumberGroupList;
return aO.map(function(aQ){return{name:aQ.startNum+"-"+aQ.endNum}
})
}catch(aP){return[]
}}function aN(){var aP=aL.officePhoneNumberSubscribe||"";
var aQ=aP.indexOf("//")>-1;
var aO=aL.officeUrlSubscribe;
if(aP||aO){return{officeName:aL.officeName,officeNamePostposition:aJ.getKorPostposition(aL.officeName,"을","를"),phoneNumberAsUrl:aQ&&aP,phoneNumberAsNumber:!aQ&&(aP||null),subscribeUrl:aO||null}
}else{return null
}}},_renderEmptyText:function(){this._welArticleListWrap.html(K._EMPTY_HTML)
},_renderArticleList:function(aH){var aI=K._ARTICLE_LIST_TPL(aH);
this._welArticleListWrap.html(aI);
if(this._onRender){this._onRender()
}this._initPageNavigation()
},_savePersistContents:function(){ar.persist({sDate:this._sCurrentDate,sContents:this._welArticleListWrap.html(),sDateTitle:this._welDateTitle.html()})
},_initPageNavigation:function(){this._oPageNavigation.init()
},_getTopPaddingForPageScrollTo:function(){var aH=0;
jQuery.each(this.constructor._FIXED_HEADER_SELECTORS,function(aI,aJ){aH=aH+ar(aJ).outerHeight()
});
return aH
}});
var ax=aA({$static:{_PAGING_WRAP_SELECTOR:".quick_select_page",_SCROLL_SELECTOR:"._page_navi_scroll",_SELECTED_PAGE_CLASS:"is_selected"},$constructor:function(aH){this._welWrapper=aH;
this._fnOnPagingScrollEnd=ar.proxy(this._onPagingScrollEnd,this);
this._welWrapper.on("click",this.constructor._SCROLL_SELECTOR+" a",ar.proxy(this._onClickPage,this));
ar(aw).on("scrollend",ar.proxy(this._onWindowScrollEnd,this))
},init:function(){this._aActivatedScroll=[];
this._aElScrolledPagingWrapper=[];
this._initPageNavigation()
},_onWindowScrollEnd:function(){this._alignSelectedPageOutOfViewport()
},_onClickPage:function(aH){aH.preventDefault();
this._triggerEvent("clickPage",{nPageIndex:ar(aH.currentTarget).index()})
},_onPagingScrollEnd:function(aH){var aI=aH.welWrapper.parent(this.constructor._PAGING_WRAP_SELECTOR);
this._addToScrolledPagingWrapperPool(aI)
},_addToScrolledPagingWrapperPool:function(aI){var aH=aI[0];
if(-1===ar.inArray(aH,this._aElScrolledPagingWrapper)){this._aElScrolledPagingWrapper.push(aH)
}},_alignSelectedPageOutOfViewport:function(){var aH=this;
this._aElScrolledPagingWrapper=ar.grep(this._aElScrolledPagingWrapper,function(aI){if(true===aE.isExistInViewport(aI)){return true
}aH._alignSelectedPageToCenter(ar(aI));
return false
})
},_initPageNavigation:function(){var aI=this._welWrapper.find(this.constructor._PAGING_WRAP_SELECTOR);
var aH=this;
this._destroyAllScrollComponent();
aI.each(function(aK,aJ){var aL=ar(aJ);
aH._alignPageNavigationToCenter(aL);
aH._applyScrollUi(aL)
})
},_applyScrollUi:function(aJ){var aH=aJ.find(this.constructor._SCROLL_SELECTOR)[0];
var aI=this._getPagingIndex(aJ);
this._aActivatedScroll[aI]=new ah(aH).on("scrollEnd",this._fnOnPagingScrollEnd);
this._selectPage(aJ,aI)
},_selectPage:function(aI,aH){aI.find("a").eq(aH).addClass(this.constructor._SELECTED_PAGE_CLASS);
this._alignSelectedPageToCenter(aI)
},_alignSelectedPageToCenter:function(aI){var aH=aI.find("."+this.constructor._SELECTED_PAGE_CLASS)[0];
this._getScrollComponent(aI).scrollElToCenter(aH)
},_destroyAllScrollComponent:function(){var aH=this;
ar.each(this._aActivatedScroll,function(aJ,aI){aH._destroyScroll(aJ)
})
},_alignPageNavigationToCenter:function(aJ){var aH=aJ.find(this.constructor._SCROLL_SELECTOR);
var aI=aH.find(":first");
aI.css("min-width","100%")
},_destroyScroll:function(aI){var aH=this._aActivatedScroll[aI];
if(v===aH){return
}aH.destroy();
this._aActivatedScroll[aI]=v
},_getScrollComponent:function(aI){var aH=this._getPagingIndex(aI);
return this._aActivatedScroll[aH]
},_getPagingIndex:function(aH){return aH.index(this.constructor._PAGING_WRAP_SELECTOR)
}});
var s=Z.NewspaperHeadlineList=aA({$static:{_EMPTY_HTML:aE.getTemplateRenderer('<div class="offc_page_empty_alert_wrap"> <p class="offc_page_empty_alert">발행된 종이신문이 없거나<br>신문게재 정보가 입력되지 않았습니다.</p> </div>'),_CHANNEL_SUBSCRIBE_TPL:aE.getTemplateRenderer('<div class="offc_ct_subscribeinfo"> <div class="subscribe_wrap"> <a href="javascript:;" class="subscribe is_preparing _channel_follow_btn {{#if channelSubscribe.isDisabled}}is_disabled{{/if}}" data-subscribe-key="{{subscribeChannelKey}}" data-click-code="pre.usubs/pre.unsubs" data-btn-text="언론사 구독/언론사 구독중"><span class="subscribe_ico"><span class="_txt">언론사 구독</span></span></a> <a href="{{channelSubscribe.goUrl}}" class="subscribe_layer _follow_layer" onclick="nclk(event,\'pre.usubsgo\',\'\',\'\');" style="display:none"> <span class="subscribe_layer_text"><strong>{{subscribeChannelTitle}}</strong> 언론사 구독되었습니다. <br>메인 뉴스판에서 {{subscribeChannelTitle}} 주요뉴스를 <br> 볼 수 있습니다.</span> <span class="subscribe_layer_link">보러가기</span> </a> <p class="subscribe_layer _unfollow_layer" style="display:none;"> <span class="subscribe_layer_text"><strong>{{subscribeChannelTitle}}</strong> 언론사 구독 해지되었습니다.</span> </p> </div> </div>'),_HEADLINE_LIST_TPL:aE.getTemplateRenderer('{{#if isShowOfficeChannelBanner }} <div class="notice_subscribe _office_channel_banner"> <a href="https://m.naver.com/" class="notice_subscribe_ct"> <div class="notice_subscribe_ct_text"> <h4 class="notice_subscribe_h"><i>신문 1면을 구독</i>하셨던 분들은 네이버 메인에서 언론사 주요 뉴스를 함께 보실 수 있습니다.</h4> <p class="notice_subscribe_p">메인 바로가기</p> </div> </a> <button class="notice_subscribe_close _office_channel_banner_close">닫기</button> </div> {{/if}} <h2 class="u_skip">언론사별 게재정보 보기</h2> <ul class="offc_lst _headline_list"> {{#each newspaperHeadlineList}} {{#if displayable}} <li class="offc_item _draggable" data-id="{{office.id}}"> <div class="offc_ct"> <div class="offc_heading_box"> <h3> <a href="{{../articleBodyDomain}}/press/{{office.id}}" onclick="nclk(event, \'paplist.abanner\', \'\', \'\')"> <div class="offc_logo_wrap"> <img src="{{office.logo.imgUrl}}" height="32" alt="{{office.name}}" class="offc_logo light_type" onerror="showNoImage(this, \'removeParent\')"> <img src="{{office.logo.imgUrl}}" height="32" alt="{{office.name}}" class="offc_logo dark_type" onerror="showNoImage(this, \'removeParent\')"> </div> <span class="offc_logo_text">{{office.name}}</span> </a> </h3> <span class="info_wrap"> {{#if totalCount}} <span class="info">총<em>{{totalCount}}</em>면</span> {{/if}} {{#if office.eveningOffice}} <span class="info">석간</span> {{/if}} </span> {{#if brotherOffice}} <div class="additional_offc"> <a href="{{../articleBodyDomain}}/press/{{brotherOffice.id}}" onclick="nclk(event, \'paplist.abanner\', \'\', \'\')"> <div class="offc_logo_wrap"> <img src="{{brotherOffice.logo.imgUrl}}" height="32" alt="{{brotherOffice.name}}" class="offc_logo light_type" onerror="showNoImage(this, \'removeParent\')"> <img src="{{brotherOffice.logo.imgUrl}}" height="32" alt="{{brotherOffice.name}}" class="offc_logo dark_type" onerror="showNoImage(this, \'removeParent\')"> </div> <span class="offc_logo_text">{{brotherOffice.name}}</span> </a> </div> {{/if}} {{{channelSubscribeHtml}}} </div> <div class="offc_content_box"> {{#if thumnailImgUrl}} <div class="offc_content_img"> <img src="{{thumnailImgUrl}}?type=nf220_150" width="110" alt="" onerror="showNoImage(this)"> </div> {{/if}} <div class="offc_content_txt {{#if office.engTextOffice}} offc_content_eng {{/if}}"> <strong class="title">{{{title}}}</strong> <p>{{{subContent}}}</p> </div> </div> <a href="{{../articleBodyDomain}}/press/{{office.id}}/newspaper?date={{../currentDate}}#lnb" class="offc_ct_wraplink" onclick="nclk(event,\'paplist.alist\',\'{{office.id}}\',\'\');"></a> <h4 class="u_vc">언론사 순서조정</h4> <button type="button" class="offc_drag_ctrl _offc_drag_handle"><span class="u_skip">드래그로 위치이동</span></button> </div> </li> {{! 발행된 종이신문이 없거나, 신문게재 정보가 입력되지 않은 경우 }} {{else}} <li class="offc_item _is_unissued" data-id="{{office.id}}"> <div class="offc_ct"> <div class="offc_heading_box"> <h3> <a href="{{../articleBodyDomain}}/press/{{office.id}}" onclick="nclk(event, \'paplist.abanner\', \'\', \'\')"> <div class="offc_logo_wrap"> <img src="{{office.logo.imgUrl}}" height="32" alt="{{office.name}}" class="offc_logo light_type" onerror="showNoImage(this, \'removeParent\')"> <img src="{{office.logo.imgUrl}}" height="32" alt="{{office.name}}" class="offc_logo dark_type" onerror="showNoImage(this, \'removeParent\')"> </div> <span class="offc_logo_text">{{office.name}}</span> </a> </h3> <span class="info_wrap"> {{#if office.eveningOffice}} <span class="info">석간</span> {{/if}} </span> {{#if brotherOffice}} <div class="additional_offc"> <a href="{{../articleBodyDomain}}/press/{{brotherOffice.id}}" onclick="nclk(event, \'paplist.abanner\', \'\', \'\')"> <div class="offc_logo_wrap"> <img src="{{brotherOffice.logo.imgUrl}}" height="32" alt="{{brotherOffice.name}}" class="offc_logo light_type" onerror="showNoImage(this, \'removeParent\')"> <img src="{{brotherOffice.logo.imgUrl}}" height="32" alt="{{brotherOffice.name}}" class="offc_logo dark_type" onerror="showNoImage(this, \'removeParent\')"> </div> <span class="offc_logo_text">{{brotherOffice.name}}</span> </a> </div> {{/if}} {{{channelSubscribeHtml}}} </div> <p class="offc_empty_alert">발행된 종이신문이 없거나<br>신문게재 정보가 입력되지 않았습니다.</p> </div> </li> {{/if}} {{/each}} </ul>'),_OFFICE_CHANNEL_BANNER_COOKIE:"showOfficeChannelBannerCountV2",_ARTICLE_BODY_DOMAIN:"https://media.naver.com"},$constructor:function(aH,aJ){var aI=ar.persist()||{};
this._sCurrentDate=aI.sDate||aJ.sCurrentDate||moment().format("YYYYMMDD");
this._welWrapper=ar(aH);
this._welContentsWrapper=this._welWrapper.find("._headline_content");
this._welDateTitle=this._welWrapper.find("._date_title");
this._useChannelBanner=(aJ.useChannelBanner!==false);
this._channelSubscribe={isDisabled:(aJ.isDisabledChannelSubscribe===true),goUrl:aJ.channelSubscribeConfig.goUrl};
new ao("._date_picker_calendar",{sSelectedDayClass:"cal_today",sPrevMonthDaysClass:"calendar-prev-mon",sNextMonthDaysClass:"calendar-next-mon",sControlBtnDisableClass:"dim",sCurrentDate:this._sCurrentDate,htHandelers:{fnOnChangeDay:ar.proxy(this._onChangeDay,this)}}).on("open",ar.proxy(this._onOpenCalendar,this)).on("close",ar.proxy(this._onCloseCalendar,this));
this._allPressLayer=new e();
this._allPressLayer.init({paperDate:this._sCurrentDate});
this._channelSubscription=new news.ChannelSubscription().init(aJ.channelSubscribeConfig).on("follow",ar.proxy(this._onSubscribe,this)).activate();
this._oNewspaperOrderModel=j.getInstance();
this._oDragAndDropSort=null;
this._ajax=null;
if(this._useChannelBanner){this._showGuideModalPopup();
this._applyOfficeChannelBannerBtn()
}this._initSortable();
this._setOriginalOrderIndexToUnissuedItem();
ar("body").on("click","a",ar.proxy(this._onClickForPersist,this))
},_initSortable:function(){var aH=this._welContentsWrapper.find("._headline_list");
if(null!==this._oDragAndDropSort){this._oDragAndDropSort.destroy()
}if(0===aH.length){return false
}this._oDragAndDropSort=new news.DragAndDropSort("._headline_list",{sHandle:"._offc_drag_handle",draggable:"._draggable",bLimitX:true,bLimitY:true,nScrollSensitivity:120,fnOnUpdate:ar.proxy(this._onUpdateDragAndDropSort,this)})
},_onOpenCalendar:function(){this._allPressLayer.hideOpenBtn()
},_onCloseCalendar:function(){this._allPressLayer.showOpenBtn()
},_onChangeDay:function(aI){var aH=aI.format("YYYYMMDD");
if(this._sCurrentDate===aH){return
}this._sCurrentDate=aH;
this._loadHeadlineList(aH);
this._allPressLayer.setPaperDate(this._sCurrentDate)
},_onUpdateDragAndDropSort:function(aH){this._saveItemOrder();
nclk(aH,"pre.move","","")
},_onSubscribe:function(aH){this._oNewspaperOrderModel.insertToFirst(aH.channelKey)
},_onClickForPersist:function(){ar.persist({sDate:this._sCurrentDate,sContents:this._welContentsWrapper.html(),sDateTitle:this._welDateTitle.html()})
},_showGuideModalPopup:function(){new at().init({wrapper:"._office_channel_guide_wrapper",sCssClassForHide:"is_hidden",sSelectorCloseBtn:"._btn_close",sDisplayedCookieKey:"newsPaperOfficeChannelGuideLayerV2",nCookieExpiresDay:730}).show()
},_saveItemOrder:function(aJ){var aI=[];
var aH=[];
this._welContentsWrapper.find("li[data-id]").each(function(aL,aK){if(ar(aK).hasClass("_is_unissued")&&ar(aK).attr("data-original-order-index")){aH.push(aK);
return
}aI.push(ar(aK).data("id"))
});
aH.forEach(function(aK){var aL=ar(aK).attr("data-original-order-index");
if(aL){aI.splice(Number(aL),0,ar(aK).data("id"))
}});
this._oNewspaperOrderModel.setOrderList(aI)
},_loadHeadlineList:function(aH){var aI=this;
if(this._ajax){this._ajax.abort()
}this._ajax=ar.get("/newspaper/headlineList?date="+aH,function(aJ){var aK=("string"===typeof aJ)?ar.parseJSON(aJ):aJ;
aI._renderHeadlineList(aK[0])
})
},_renderHeadlineList:function(aH){if(false===aH.displayable){this._renderEmptyContents();
return false
}aH.newspaperHeadlineList.forEach(function(aI){aI.channelSubscribe={isDisabled:this._channelSubscribe.isDisabled,goUrl:this._channelSubscribe.goUrl};
if(aI.canSubscribe===false){aI.channelSubscribe.isDisabled=true
}aI.channelSubscribeHtml=this.constructor._CHANNEL_SUBSCRIBE_TPL(aI)
},this);
aH.isShowOfficeChannelBanner=this._checkShowOfficeChannelBanner();
aH.articleBodyDomain=this.constructor._ARTICLE_BODY_DOMAIN;
this._welContentsWrapper.html(s._HEADLINE_LIST_TPL(aH));
this._setOriginalOrderIndexToUnissuedItem();
this._channelSubscription.updateView();
this._initSortable()
},_renderEmptyContents:function(){this._welContentsWrapper.html(s._EMPTY_HTML)
},_checkShowOfficeChannelBanner:function(){if(this._useChannelBanner===false){return false
}if(!!ar.cookie(s._OFFICE_CHANNEL_BANNER_COOKIE)){var aH=parseInt(ar.cookie(s._OFFICE_CHANNEL_BANNER_COOKIE),10);
if(aH<2){return true
}else{return false
}}else{return true
}},_applyOfficeChannelBannerBtn:function(){this._welContentsWrapper.on("click","._office_channel_banner_close",ar.proxy(this._closeOfficeChannelBanner,this))
},_closeOfficeChannelBanner:function(){var aH=0;
if(!!ar.cookie(s._OFFICE_CHANNEL_BANNER_COOKIE)){aH=parseInt(ar.cookie(s._OFFICE_CHANNEL_BANNER_COOKIE),10)
}aH=aH+1;
ar.cookie(s._OFFICE_CHANNEL_BANNER_COOKIE,aH,{expires:730});
this._welContentsWrapper.find("._office_channel_banner").hide()
},_setOriginalOrderIndexToUnissuedItem:function(){var aH=this._oNewspaperOrderModel;
ar("._is_unissued").each(function(){var aJ=ar(this).attr("data-id");
var aI=aH.getOrderIndex(aJ);
if(aI!==false){ar(this).attr("data-original-order-index",aI)
}})
}});
var e=aA({$static:{_SCROLL_SELECTOR:"._scroll",_OPEN_BTN_WRAPPER_HIDDEN_CLASS:"is_hidden",_USER_SELECTED_PAPER_DATE_ATTR:"data-paper-date"},$constructor:function(){this._onClickOpenBtnListener=ar.proxy(this._onClickOpenBtn,this);
this._onClickCloseBtnListener=ar.proxy(this._onClickCloseBtn,this);
this._onRotateListener=ar.proxy(this._onRotate,this)
},init:function(aH){this._$openLayerBtnWrapper=ar("._all_press_layer_open_btn_wrapper");
this._$openBtn=this._$openLayerBtnWrapper.find("._btn");
this._$layer=ar("._all_press_layer");
this._$layerDimmed=ar("._all_press_layer_dimmed");
this._$pressLinks=this._$layer.find("._press_list").find("a");
this._$closeBtn=this._$layer.find("._close_btn");
this._paperDate=aH.paperDate;
this._scroll=null;
this.activate()
},_onActivate:function(){this._$openBtn.on("click",this._onClickOpenBtnListener);
this._$closeBtn.on("click",this._onClickCloseBtnListener);
ar(aw).on("rotate",this._onRotateListener)
},_onDeactivate:function(){this._$openBtn.off("click",this._onClickOpenBtnListener);
this._$closeBtn.off("click",this._onClickCloseBtnListener);
ar(aw).off("rotate",this._onRotateListener)
},showOpenBtn:function(){this._$openLayerBtnWrapper.removeClass(this.constructor._OPEN_BTN_WRAPPER_HIDDEN_CLASS)
},hideOpenBtn:function(){this._$openLayerBtnWrapper.addClass(this.constructor._OPEN_BTN_WRAPPER_HIDDEN_CLASS)
},setPaperDate:function(aH){this._paperDate=aH
},_onClickOpenBtn:function(){this._openLayer()
},_onClickCloseBtn:function(){this._closeLayer()
},_onRotate:function(){if(this._scroll){this._scroll.refresh()
}},_openLayer:function(){this._$layer.css("display","");
this._$layerDimmed.css("display","");
if(this._scroll===null){this._scroll=new ah(this._$layer.find(this.constructor._SCROLL_SELECTOR),{bScrollY:true})
}this._scroll.refresh().enable();
this._updatePressUrl();
aC.activate()
},_closeLayer:function(){this._$layer.css("display","none");
this._$layerDimmed.css("display","none");
this._scroll.disable();
aC.deactivate()
},_updatePressUrl:function(){var aH=this._paperDate;
this._$pressLinks.each(function(aI,aL){var aJ=aL.getAttribute("href");
var aK=aJ.replace(/date\=([0-9]+)?/,"date="+aH);
aL.setAttribute("href",aK)
})
}});
var j=aA({$static:{_INSTANCE:null,_ITEM_ORDER_COOKIE_KEY:"newsPaperOrder",getInstance:function(){if(null===this._INSTANCE){this._INSTANCE=new this()._$constructor()
}return this._INSTANCE
}},$constructor:function(){},_$constructor:function(){this._oCookie=ac.getInstance();
return this
},insertToFirst:function(aI){var aH=ar.grep(this._getOrderedIdList(),function(aJ){return aI!==aJ
});
if(aH[0]){aH.unshift(aI)
}else{aH=[aI]
}this.setOrderList(aH)
},getOrderIndex:function(aI){var aH=this._getOrderedIdList().indexOf(aI);
return aH>-1?aH:false
},setOrderList:function(aH){this._oCookie.setItem(this.constructor._ITEM_ORDER_COOKIE_KEY,aH.join(","))
},_getOrderedIdList:function(){var aH=this._oCookie.getItem(this.constructor._ITEM_ORDER_COOKIE_KEY);
return aH?aH.split(","):[]
}});
var H=Z.PressHomeProfile=aA({$static:{_ATTR_OFFICEID:"data-officeid",_ATTR_CLICKCODE_TOGGLE_OPEN:"data-clickcode-toggle-open",_ATTR_CLICKCODE_TOGGLE_CLOSE:"data-clickcode-toggle-close",_TEMPLATE_STATISTICS:aE.getTemplateRenderer('{{#statistics}} <div class="pp_datalab_title"> <h5 class="pp_datalab_h">이용자 통계</h5> <div class="pp_datalab_date">{{period}}</div> </div> <div class="pp_datalab_both"> <div class="pp_datalab_left"> <ul class="pp_datalab_bar"> {{#each ageStatList}} <li class="pdb_item"> <div class="pdb_bar"><div class="pdb_bar_value {{rankClass}}" style="height:{{percent}}%;"><span class="blind">{{percent}}%</span>{{#rank}}<span class="pdb_bar_text">{{this}}<span class="blind">위</span></span>{{/rank}}</div></div> <div class="pdb_legend">{{age}}<span class="pdb_legend_unit">대</span>{{#if isSixty}}<span class="pdb_legend_over">↑</span>{{/if}}</div> </li> {{/each}} </ul> </div> <div class="pp_datalab_right"> <div class="pp_datalab_donut _gender_chart"> </div> <div class="pp_datalab_donutlegend _gender_chart_legend"> <span class="pp_datalab_donutlegend_item as_blue _male">남자</span> <span class="pp_datalab_donutlegend_item as_red">여자</span> </div> </div> </div> {{/statistics}}')},$constructor:function(){this._loading=news.Loading;
this._billboard=null;
this._onClickToggleProfileBtn=ar.proxy(this._onClickToggleProfileBtn,this);
this._onClickToggleChannelGroupBtn=ar.proxy(this._onClickToggleChannelGroupBtn,this)
},init:function(aH){this.deactivate();
this._wrapper=ar("._press_more_profile");
this._statisticsWrapper=ar("._press_more_statistics");
this._toggleProfileBtn=ar("._toggle_profile_btn");
this._billboardChartLibUrl=aH.billboardChartLibUrl;
this._templateData=aH.templateData;
this.activate();
return this
},_onActivate:function(){this._toggleProfileBtn.on("click",this._onClickToggleProfileBtn);
a.on("._group_channel_button",this._onClickToggleChannelGroupBtn,this._wrapper)
},_onDeactivate:function(){this._toggleProfileBtn.off("click",this._onClickToggleProfileBtn);
a.off("._group_channel_button",this._onClickToggleChannelGroupBtn,this._wrapper)
},_onClickToggleProfileBtn:function(aH){var aI=ar(aH.currentTarget);
if(this._isProfileHidden()){this._showProfile();
this._fireClickLog(aH,aI,"open")
}else{this._hideProfile();
this._fireClickLog(aH,aI,"close")
}if(this._isProfileHidden()===false&&this._isStatisticsContentEmpty()){this._refineTemplateData();
this._statisticsWrapper.get(0).innerHTML=this.constructor._TEMPLATE_STATISTICS(this._templateData)
}this._triggerEvent("toggleProfile");
if(this._isNotUseDataArea()){return
}if(this._isProfileHidden()===false){this._loading.paintTo(this._getGenderChartWrapper());
this._arrangeGenderChartLegendOrder();
new news.JsLoader().load([this._billboardChartLibUrl],ar.proxy(this._renderGenderChart,this))
}},_renderGenderChart:function(){var aH=this._getGenderChartWrapper();
this._loading.removeFrom(aH);
if(this._isProfileHidden()){return
}if(this._billboard===null){this._billboard=bb
}this._billboard.generate({bindto:aH,size:{height:120},padding:{top:0,right:0,bottom:0,left:0},data:{type:"donut",columns:[["male",this._templateData.statistics.genderStatMap.male],["female",this._templateData.statistics.genderStatMap.female]],colors:{male:"#4978f4",female:"#e95f7c"}},donut:{width:14.5,label:{show:true,ratio:0.36,threshold:0,format:ar.proxy(function(aK,aJ,aI){return Math.round(aJ*100)+"%"
},this)},padAngle:0.05},legend:{show:false},interaction:{enabled:false}})
},_arrangeGenderChartLegendOrder:function(){var aI=this._templateData.statistics.genderStatMap;
if(aI.male>aI.female){var aH=this._wrapper.find("._gender_chart_legend");
aH.find("._male").appendTo(aH)
}},_onClickToggleChannelGroupBtn:function(aH){var aJ=ar(aH.currentTarget);
var aI=aJ.closest("._representative_channel_item").find("._child_channel_list");
if(this._isChildChannelListHidden(aJ,aI)){this._showChannelList(aJ,aI);
this._fireClickLog(aH,aJ,"open")
}else{this._hideChannelList(aJ,aI);
this._fireClickLog(aH,aJ,"close")
}this._triggerEvent("toggleProfile")
},_showProfile:function(){this._wrapper.removeClass("is_hidden");
this._toggleProfileBtn.addClass("is_active")
},_hideProfile:function(){this._wrapper.addClass("is_hidden");
this._toggleProfileBtn.removeClass("is_active")
},_showChannelList:function(aH,aI){aH.addClass("is_opened");
aI.addClass("is_opened")
},_hideChannelList:function(aH,aI){aH.removeClass("is_opened");
aI.removeClass("is_opened")
},_isProfileHidden:function(){return this._wrapper.hasClass("is_hidden")
},_isStatisticsContentEmpty:function(){return this._statisticsWrapper.get(0)&&this._isContentEmpty(this._statisticsWrapper.get(0))
},_isChildChannelListHidden:function(aH,aI){return !aH.hasClass("is_opened")&&!aI.hasClass("is_opened")
},_isContentEmpty:function(aH){return ar.trim(aH.innerHTML)===""
},_isNotUseDataArea:function(){return this._getGenderChartWrapper()===v
},_getGenderChartWrapper:function(){return this._wrapper.find("._gender_chart").get(0)
},_refineTemplateData:function(){var aH=this._templateData;
(function(){if(!aH.statistics){return
}if(aH.statistics.hasSameTopRank){ar.each(aH.statistics.ageStatList,function(aI,aJ){if(aJ.rank===1){aJ.rankClass="is_1"
}else{aJ.rank=null
}})
}else{ar.each(aH.statistics.ageStatList,function(aI,aJ){if(aJ.rank===1){aJ.rankClass="is_1"
}else{if(aJ.rank===2){aJ.rankClass="is_2"
}else{aJ.rank=null
}}})
}ar.each(aH.statistics.ageStatList,function(aI,aJ){aJ.isSixty=(aJ.age==="60")
})
})()
},_fireClickLog:function(aJ,aI,aH){var aK;
var aL=aI.attr(this.constructor._ATTR_OFFICEID);
if("open"===aH){aK=aI.attr(this.constructor._ATTR_CLICKCODE_TOGGLE_OPEN)
}else{aK=aI.attr(this.constructor._ATTR_CLICKCODE_TOGGLE_CLOSE)
}if(v===aK){return
}nclk(aJ,aK,aL,"")
}});
var u=Z.ReactionCheerDecorator=aA({$static:{_CHEER_MODULE_SELECTOR:"._reaction_cheer_module",_CHEER_BTN_SELECTOR:'a[data-type="cheer"]',_CHEER_BTN_LABEL_SELECTOR:"._label",_DISABLED_STYLE_CLASS:"is_preparing",_CHEERED_BTN_CLASS:"on",_CHEER_BTN_LABEL_MAP:{on:"응원완료",off:"응원해요"}},$constructor:function(){this._oNotice=new ad(this.constructor._CHEER_MODULE_SELECTOR)
},init:function(){ar.each(ar.makeArray(ar(this.constructor._CHEER_MODULE_SELECTOR)),ar.proxy(function(aK,aI){var aJ=ar(aI);
var aH=this._getCheerBtn(aJ);
this._removeDisabledStyle(aH);
this._initCheerBtnState(aH)
},this));
return this
},updateByClick:function(aH){ar.each(aH.targets,ar.proxy(function(aJ,aI){var aK=ar(aI);
if(false===this._isCheerBtn(aK)){return
}if(this._isCheered(aK)){this._changeCheerBtnLabel("on",aK);
this._showNotice(aK)
}else{this._changeCheerBtnLabel("off",aK);
this._hideNotice()
}},this))
},_initCheerBtnState:function(aH){if(this._isCheered(aH)){this._changeCheerBtnLabel("on",aH)
}else{this._changeCheerBtnLabel("off",aH)
}},_changeCheerBtnLabel:function(aJ,aH){var aI=this.constructor._CHEER_BTN_LABEL_MAP[aJ];
aH.find(this.constructor._CHEER_BTN_LABEL_SELECTOR).text(aI)
},_removeDisabledStyle:function(aH){return aH.removeClass(this.constructor._DISABLED_STYLE_CLASS)
},_showNotice:function(aH){this._oNotice.show(this._getCheerModuleWrapper(aH))
},_hideNotice:function(){this._oNotice.hide()
},_isCheerBtn:function(aH){var aJ=aH.parent();
var aI=this._getCheerBtn(aJ);
return v!==aI[0]
},_isCheered:function(aH){return aH.hasClass(this.constructor._CHEERED_BTN_CLASS)
},_getCheerModuleWrapper:function(aH){return aH.closest(this.constructor._CHEER_MODULE_SELECTOR)
},_getCheerBtn:function(aH){return aH.find(this.constructor._CHEER_BTN_SELECTOR)
}});
var ad=aA({$static:{_NOTICE_SELECTOR:"._reaction_cheer_notice",_NOTICE_HIDDEN_CLASS:"is_hidden",_ACTIVATE_AUTO_HIDE_DELAY_MS:2500,_AUTO_HIDE_ANIMATION_OPTION:{duration:250,easing:"linear"}},$constructor:function(aH){this._sWrapperSelector=aH;
this._nTimerIdForAutoHide=null;
this._oLayerAutoCloseManager=ap.getInstance()
},show:function(aI){var aH=this._getNotice(aI);
this.hide();
aH.css("display","").removeClass(this.constructor._NOTICE_HIDDEN_CLASS);
this._activateAutoHide(aH);
this._oLayerAutoCloseManager.setCurrentVisibleLayer(this)
},hide:function(){var aI=ar(document);
var aH=this._getNotice(aI);
this._cancelAutoHide();
aH.addClass(this.constructor._NOTICE_HIDDEN_CLASS)
},close:function(){this.hide()
},isAutoCloseExceptionEl:function(aH){return Boolean(ar(aH).closest(this._sWrapperSelector)[0])
},_activateAutoHide:function(aH){this._cancelAutoHide();
this._nTimerIdForAutoHide=setTimeout(ar.proxy(function(){this._hideByFadeOut(aH)
},this),this.constructor._ACTIVATE_AUTO_HIDE_DELAY_MS)
},_cancelAutoHide:function(){clearTimeout(this._nTimerIdForAutoHide)
},_hideByFadeOut:function(aH){aH.fadeOut(this.constructor._AUTO_HIDE_ANIMATION_OPTION)
},_getNotice:function(aH){return aH.find(this.constructor._NOTICE_SELECTOR)
}});
var m=Z.SectionHomeClusteringViewOption=aA({$static:{_ON_COOKIE_ATTR:"data-on-cookie",_BTN_ON_OFF_TEXT_ATTR:"data-btn-on-off-text",_ON_OFF_STATE_ATTR:"aria-pressed",_CLICK_CODE_ATTR:"data-click-code",_OPTION_BTN_SELECTOR:"._clustering_view_option_btn",isOn:function(){return ar(this._OPTION_BTN_SELECTOR).attr(this._ON_OFF_STATE_ATTR)==="true"
}},$constructor:function(){this._fnOnClickOptionBtn=ar.proxy(this._onClickOptionBtn,this)
},init:function(){this.deactivate();
this._welOptionBtn=ar(this.constructor._OPTION_BTN_SELECTOR);
this._initBtnToLastState();
this.activate();
return this
},_onActivate:function(){this._welOptionBtn.on("click",this._fnOnClickOptionBtn)
},_onDeactivate:function(){this._welOptionBtn.off("click",this._fnOnClickOptionBtn)
},_onClickOptionBtn:function(aH){this._toggleOption(aH);
location.reload()
},_initBtnToLastState:function(){var aH=this._getCookieOnInfo();
if(ar.cookie(aH.key)===aH.value){this._select();
return
}this._deselect()
},_toggleOption:function(aH){if(this.constructor.isOn()){this._deselect();
this._removeState();
this._fireClickCode(aH,"off");
return
}this._select();
this._saveState();
this._fireClickCode(aH,"on")
},_select:function(){this._welOptionBtn.attr(this.constructor._ON_OFF_STATE_ATTR,"true").text(this._getBtnOnOffText().on)
},_deselect:function(){this._welOptionBtn.attr(this.constructor._ON_OFF_STATE_ATTR,"false").text(this._getBtnOnOffText().off)
},_isOn:function(){return this._welOptionBtn.attr(this.constructor._ON_OFF_STATE_ATTR)==="true"
},_saveState:function(){var aH=this._getCookieOnInfo();
ar.cookie(aH.key,aH.value,{expires:365*10,path:"/"})
},_removeState:function(){var aH=this._getCookieOnInfo();
ar.removeCookie(aH.key,{path:"/"})
},_fireClickCode:function(aJ,aK){var aL=this._welOptionBtn.attr(this.constructor._CLICK_CODE_ATTR).split("/");
var aI=(aK==="on")?aL[0]:aL[1];
var aH=aJ||this._welOptionBtn[0];
nclk(aH,aI,"","")
},_getCookieOnInfo:function(){var aH=this._welOptionBtn.attr(this.constructor._ON_COOKIE_ATTR).split("/");
return{key:aH[0],value:aH[1]}
},_getBtnOnOffText:function(){var aH=this._welOptionBtn.attr(this.constructor._BTN_ON_OFF_TEXT_ATTR).split("/");
return{on:aH[0],off:aH[1]}
}});
ar.ajaxSetup({timeout:15000});
return Z
}));GnbHelper={attachClick:function(b){for(;
b;
b=b.parentNode){if(!b.className){continue
}if(b.className==="Ngnb_group"){return
}}if(document.querySelector(".Ngnb_group .gnb_lyr_opened")){try{gnbAllLayerClose()
}catch(a){}}}};
GnbFloatingManager={FIXED_CLASS:"is_fixed",FLOATING_OFFSET:50,init:function(){this._assign()
},_assign:function(){this._document=document;
this._header=this._document.querySelector(".news_header");
this._browserHeight=this._document.documentElement.clientHeight;
this._scrollTop=0;
this._bindEvents()
},_bindEvents:function(){window.addEventListener("scroll",this._windowScrollEventHandler.bind(this));
window.addEventListener("resize",this._windowResizeEventHandler.bind(this))
},_windowScrollEventHandler:function(){var a=this._getWindowScrollTop();
if(a<=(this._scrollTop+this.FLOATING_OFFSET)){this._header.classList.remove(this.FIXED_CLASS)
}else{this._header.classList.add(this.FIXED_CLASS)
}},_windowResizeEventHandler:function(){this._browserHeight=this._document.documentElement.clientHeight
},_getWindowScrollTop:function(){return window.pageYOffset||(this._document.documentElement||this._document.body).scrollTop||0
},setScrollTop:function(a){this._scrollTop=a
}};
GlobalMPUrlManager={SELECTOR_NAME:"data-mpurl",MOBILE_KEY:"m",PC_KEY:"p",init:function(){this.applyMobilePcUrl()
},getElements:function(){return document.querySelectorAll("["+this.SELECTOR_NAME+"]")
},applyMobilePcUrl:function(){var a=this;
this.getElements().forEach(function(d){try{var b=d.getAttribute(a.SELECTOR_NAME);
var c=JSON.parse(b);
if(isMobileDevice()){d.href=c[a.MOBILE_KEY]
}else{d.href=c[a.PC_KEY]
}}catch(f){}})
}};function parseMultilineStrFunction(a){var b=/\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)\s*\*\//;
var c=b.exec(a.toString())[1];
return c||""
}function escapeHtmlChar(a){return a.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
}function shuffle(d){var b;
var a;
for(var c=d.length-1;
c>0;
c--){b=Math.floor(Math.random()*(c+1));
a=d[c];
d[c]=d[b];
d[b]=a
}}function convertNodeListToArray(a){return Array.apply(null,a)
}function cloneDeep(a){return JSON.parse(JSON.stringify(a))
}function getOffset(a){var b=a.getBoundingClientRect();
return{top:b.top+window.pageYOffset,left:b.left+window.pageXOffset}
}function getHeight(c){var b=c.style.cssText;
var a;
c.style.display="block";
c.style.visibility="hidden";
a=c.offsetHeight;
c.style.cssText=b;
return a
}function loadImage(c,a){var b=convertNodeListToArray(c.querySelectorAll("img["+a+"]"));
b.forEach(function(d){var e=d.getAttribute(a);
if(e!==null){d.setAttribute("src",e);
d.removeAttribute(a)
}})
};function AsideFixed(l){var q=l;
if(!q||q.offsetHeight===0){return
}var u=q.querySelector("._aside_content");
j();
var t=(function(){var w;
s();
w=u.offsetTop;
j();
return w
})();
var k=getHeight(u);
var r=a();
var o=getOffset(u).top+k;
var b=t+k;
var e;
var h;
var p;
i();
n();
f();
return{activate:f,deactivate:c};
function f(){window.addEventListener("scroll",n);
window.addEventListener("resize",g)
}function c(){window.removeEventListener("scroll",n);
window.removeEventListener("resize",g)
}function g(){i();
n()
}function n(){var y=window.pageYOffset;
var x=y+e;
var w=getOffset(q).top+getHeight(q);
if(y<=r){j();
return
}if(o>=w){return
}if(p&&v()===false&&y>r){s()
}if(h&&d()===false&&x>=o){m()
}(function(){var z=(d()&&x>=w)||(v()&&y+b>=w);
if(z){q.classList.add("is_stop_fixing")
}else{q.classList.remove("is_stop_fixing")
}})()
}function v(){return q.classList.contains("is_fixing_at_top")
}function d(){return q.classList.contains("is_fixing_at_bottom")
}function s(){q.classList.remove("is_fixing_at_bottom");
q.classList.add("is_fixing_at_top")
}function m(){q.classList.remove("is_fixing_at_top");
q.classList.add("is_fixing_at_bottom")
}function j(){q.classList.remove("is_fixing_at_top");
q.classList.remove("is_fixing_at_bottom");
q.classList.remove("is_stop_fixing")
}function i(){var w;
e=document.documentElement.clientHeight;
w=e-t;
h=k>w;
p=h===false
}function a(){var z=document.querySelector("._float_lnb");
if(z){try{return GnbFloatingManager.FLOATING_OFFSET
}catch(y){return 50
}}var x=document.querySelector("._start_floating");
var w=document.querySelector("._press_float");
if(x&&w){try{return(getOffset(x).top-getHeight(w))-1
}catch(y){return 249
}}if(document.querySelector("._press_tv_float_header")||document.querySelector("._press_section_all_float_header")){return 0
}return 0
}};function parseMultilineStrFunction(a){var b=/\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)\s*\*\//;
var c=b.exec(a.toString())[1];
return c||""
}function escapeHtmlChar(a){return a.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
}function shuffle(d){var b;
var a;
for(var c=d.length-1;
c>0;
c--){b=Math.floor(Math.random()*(c+1));
a=d[c];
d[c]=d[b];
d[b]=a
}}function convertNodeListToArray(a){return Array.apply(null,a)
}function cloneDeep(a){return JSON.parse(JSON.stringify(a))
}function getOffset(a){var b=a.getBoundingClientRect();
return{top:b.top+window.pageYOffset,left:b.left+window.pageXOffset}
}function getHeight(c){var b=c.style.cssText;
var a;
c.style.display="block";
c.style.visibility="hidden";
a=c.offsetHeight;
c.style.cssText=b;
return a
}function loadImage(c,a){var b=convertNodeListToArray(c.querySelectorAll("img["+a+"]"));
b.forEach(function(d){var e=d.getAttribute(a);
if(e!==null){d.setAttribute("src",e);
d.removeAttribute(a)
}})
};
(function(){window.delegate=c;
window.undelegate=b;
var a=[];
function c(g,i,d,j){var f=(window.jQuery||(window.jindo&&jindo.$Element))(g);
var h=f.on||f.delegate;
a.push({el:g,event:i,selector:d,originalListener:j,attachedListener:e});
h.apply(f,[i,d,e]);
function e(k){j({currentTarget:k.element||k.currentTarget,preventDefault:function(){k.preventDefault?k.preventDefault():k.stopDefault()
}})
}}function b(f,g,d,h){var e=(window.jQuery||(window.jindo&&jindo.$Element))(f);
var i=e.off||e.undelegate;
a=a.filter(function(k){var j=k.el===f&&k.event===g&&k.selector===d&&k.originalListener===h;
if(j){i.apply(e,[g,d,k.attachedListener])
}return j===false
})
}})();
function BrowserStorage(b){var d=(b.namespace)?b.namespace+"_":"";
var i=(b.storageType==="session")?"sessionStorage":"localStorage";
var f=c();
return{setItem:e,getItem:j,removeItem:h};
function e(k,l){f.setItem(g(k),l)
}function j(k){return f.getItem(g(k))
}function h(k){f.removeItem(g(k))
}function g(k){return d+k
}function c(){if(a()){return window[i]
}return{_storage:{},setItem:function(k,l){this._storage[k]=l
},getItem:function(k){return this._storage[k]||null
},removeItem:function(k){delete this._storage[k]
}}
}function a(){try{var l=window[i];
l.setItem("test","1");
l.removeItem("test");
return true
}catch(k){return false
}}};
(typeof window.nhn==="undefined")&&(nhn={});
nhn.mobile=nhn.mobile||{};
nhn.mobile.ac=nhn.mobile.ac||{};
nhn.mobile.kh=nhn.mobile.kh||{};
nhn.mobile.ac.$=(function(a){function c(e){e=e||this.el;
if(e){if(typeof HTMLElement==="object"){return e instanceof HTMLElement
}else{return(typeof e==="object")&&(e.nodeType===1)&&(typeof e.nodeName==="string")
}}else{return false
}}function b(j,g,k){var i=[],h,f,e;
for(h in g){i.push(encodeURIComponent(h)+"="+encodeURIComponent(g[h]))
}f="jsonp"+Math.round(+new Date()+Math.random()*1000001);
j=j.substr(0,j.length-1)+f+"&"+i.join("&");
window[f]=function(l){k(l);
delete window[f];
document.head.removeChild(e);
e=null
};
e=this._elScript=document.createElement("script");
e.setAttribute("type","text/javascript");
e.setAttribute("src",j);
document.head.appendChild(e);
return{abort:function(){if(e){window[f]=function(){delete window[f]
};
document.head.removeChild(e);
e=null
}}}
}function d(h,f){var e=arguments.callee,g=null;
if(!(this instanceof e)){return new e(h,f)
}if(h instanceof e){return h
}else{if(c(h)||h===document||h===window){g=h
}else{g=f?f.querySelector(h):document.querySelector(h)
}}this.el=g
}d.prototype=a;
d.prototype.constructor=d;
d.prototype.isElement=c;
d.getJSON=b;
return d
})({on:function(a,b){this.el.addEventListener(a,b);
return this
},off:function(a,b){this.el.removeEventListener(a,b);
return this
},show:function(){this.el.style.display="block";
return this
},hide:function(){this.el.style.display="none";
return this
},is:function(a){if(a===":visible"){return this.el.style.display!=="none"
}},html:function(a){if(typeof a==="undefined"){return this.el.innerHTML
}else{this.el.innerHTML=a;
return this
}},text:function(a){if(typeof a==="undefined"){return this.el.textContent
}else{this.el.textContent=a+"";
return this
}},hasClass:function(a){return(" "+this.el.className+" ").indexOf(" "+a+" ")>-1
},addClass:function(b){var a=this.el.className;
if(!this.hasClass(b)){this.el.className=a?a+" "+b:b
}return this
},removeClass:function(b){var a;
if(this.hasClass(b)){a=new RegExp("(\\s|^)"+b+"(\\s|$)");
this.el.className=this.el.className.replace(a," ").replace(/^\s+|\s+$/g,"")
}return this
},get:function(a){return this.el
},append:function(a){var b=document.createElement("div");
b.innerHTML=a;
this.el.appendChild(b.firstChild);
return this
}});
nhn.mobile.ac.createClass=function(a){var b=function b(){if(a.construct instanceof Function){a.construct.apply(this,arguments)
}};
b.prototype=a;
b.prototype.constructor=b;
b.extend=nhn.mobile.ac.extend;
return b
};
nhn.mobile.ac.extend=function(a){var b=this,c=function c(){b.apply(this,arguments);
if(a.construct instanceof Function){a.construct.apply(this,arguments)
}},e,d,f;
e=function(){};
e.prototype=b.prototype;
d=new e();
for(f in a){if(a.hasOwnProperty(f)){d[f]=a[f]
}}c.prototype=d;
c.prototype.constructor=c;
c.extend=arguments.callee;
return c
};
nhn.mobile.ac.Component=nhn.mobile.ac.createClass({construct:function(){this._htHandler={};
this._htOption={}
},option:function(d,b){var c,a;
switch(typeof d){case"undefined":c={};
for(a in this._htOption){c[a]=this._htOption[a]
}return c;
case"string":if(typeof b==="undefined"){return this._htOption[d]
}else{this._htOption[d]=b
}break;
case"object":for(a in d){this._htOption[a]=d[a]
}break
}return this
},fire:function(h,c){c=c||{};
var e=this._htHandler[h]||[],b=e.length>0,a,d,g,f;
if(!b){return true
}e=e.concat();
c.sType=h;
if(typeof c._aExtend==="undefined"){c._aExtend=[];
c.stop=function(){if(c._aExtend.length>0){c._aExtend[c._aExtend.length-1].bCanceled=true
}}
}c._aExtend.push({sType:h,bCanceled:false});
a=[c];
g=arguments.length;
for(d=2;
d<g;
d++){a.push(arguments[d])
}for(d=0;
(f=e[d]);
d++){f.apply(this,a)
}return !c._aExtend.pop().bCanceled
},on:function(d,b){var a;
if(arguments.length===1){for(a in arguments[0]){this.on(a,arguments[0][a])
}return this
}var c=this._htHandler[d];
if(typeof c==="undefined"){c=this._htHandler[d]=[]
}c.push(b);
return this
},off:function(e,c){var a,b,d;
if(arguments.length===1){for(a in arguments[0]){this.off(a,arguments[0][a])
}return this
}d=this._htHandler[e];
if(d){for(a=0;
(b=d[a]);
a++){if(b===c){d=d.splice(a,1);
break
}}}return this
},offAll:function(c){var a=this._htHandler,b;
if(arguments.length){if(typeof a[c]==="undefined"){return this
}delete a[c];
return this
}for(b in a){delete a[b]
}return this
},callback:function(d,b,a,c){(typeof d==="string")&&(d=this[d]);
b=b||this;
return function(){var e=arguments.length?Array.prototype.slice.call(arguments):[];
a&&(e=a.concat(e));
c&&(e=e.concat(c));
return d.apply(b,e)
}
},getCookie:function(e){var a=document.cookie.split(/\s*;\s*/),d=a.length,c=new RegExp("^(\\s*"+e+"\\s*=)"),f,b;
for(b=0;
b<d;
b++){f=a[b];
if(c.test(f)){return decodeURIComponent(f.substr(RegExp.$1.length))
}}return null
},setCookie:function(e,f,d,a,b){var c="";
d&&(c="; expires="+(new Date((new Date()).getTime()+d*1000*60*60*24)).toGMTString());
a||(a="");
b||(b="/");
document.cookie=e+"="+encodeURIComponent(f)+c+"; path="+b+(a?"; domain="+a:"")
},isAndroid:function(){return/Android/.test(navigator.userAgent)
},isIOS:function(){return/iPhone|iPad|iPod/.test(navigator.userAgent)
},isIPad:function(){return/iPad/.test(navigator.userAgent)
},getOSVersion:function(){var a=navigator.userAgent,b=null;
if(this.isAndroid()){aMatchResult=a.match(/Android ([\d|\.]+)/);
if(aMatchResult!==null&&aMatchResult[1]!==undefined){b=aMatchResult[1]
}}else{if(this.isIOS()){aMatchResult=a.match(/(iPhone )?OS ([\d|_]+)/);
if(aMatchResult!==null&&aMatchResult[2]!==undefined){b=String(aMatchResult[2]).split("_").join(".")
}}}return b
},isMobileDevice:function(){return/(iPad|Mobile|Android|Nokia|webOS|BlackBerry|Opera Mini)/.test(navigator.userAgent)
}});
(function(a){nhn.mobile.ac.Data=nhn.mobile.ac.Component.extend({construct:function(b){this.option({sQueryKey:"q"});
this.option(b||{});
this.oAC=null;
this.oView=null;
this._oJSON=null
},request:function(d){var b,d,c;
this._oJSON&&this._oJSON.abort();
if(!this.oAC.isUse()){(d)?this.oView.show():this.oView.hide();
return
}d=this._sQuery=d.replace(/^\s+/g,"");
if(!d){this.oView.paint({query:[],answer:[],data:[]},d);
return
}if(!this._htCache){this._htCache={}
}else{if(this._htCache[d]&&this._htCache.hasOwnProperty(d)){this.oView.paint(this._htCache[d],d);
return
}}c=this.option("htAPIParam");
c[this.option("sQueryKey")]=d;
this._oJSON=a.getJSON(this.option("sAPIURL")+"?_callback=?",c,this.callback("_handleJSON",this,[d]))
},setRelatedObject:function(b){this.oAC=b.oAC;
this.oView=b.oView
},_handleJSON:function(k,h){var c,f;
try{c=[];
for(var d=0;
d<h.items.length;
d++){c[d]=[];
f=h.items[d];
if(f.length>0){for(var b=0;
b<f.length;
b++){c[d][b]=(f[b].length===1)?f[b][0]:f[b]
}}}this._htCache[k]={query:h.query,answer:h.answer,noresult:h.noresult,partial_match:h.partial_match,corrected_query:h.corrected_query,data:c};
this.oView.paint(this._htCache[k],k)
}catch(g){console.error(g);
try{this.oView.paint({query:[],answer:[],data:[]},k)
}catch(g){console.error(g)
}}}})
})(window.jQuery||nhn.mobile.ac.$);
(function(a){nhn.mobile.ac.Input=nhn.mobile.ac.Component.extend({construct:function(b){this.option(b||{});
this.elInput=b.elInput;
this.elClearBtn=b.elClearBtn;
if(this.elClearBtn){this._$elClearBtn=a(this.elClearBtn)
}this.elSubmitBtn=b.elSubmitBtn;
this._sValue=this.getValue();
this._bMustFocused=false;
this.oAC=null;
this.oData=null;
this._attachEvent()
},getValue:function(){return this.elInput.value
},setValue:function(b){this.elInput.value=this._sValue=b;
return this
},change:function(){this.oData.request(this.getValue());
return this
},focus:function(){this._bIsAndroidLT3_0()&&(this._bMustFocused=true);
this.elInput.focus();
return this
},blur:function(){this.elInput.blur();
return this
},setPlaceholderText:function(b){this.elInput.setAttribute("placeholder",b);
return this
},isComponentElement:function(b){return b===this.elInput||b===this.elClearBtn||b===this.elSubmitBtn
},setRelatedObject:function(b){this.oAC=b.oAC;
this.oData=b.oData;
return this
},isFocused:function(){return !!this._bIsFocused
},_attachEvent:function(){var c=a(document),b=this.isMobileDevice()?"touchstart":"mousedown";
a(this.elInput).on("focus",this.callback("_onFocus")).on("blur",this.callback("_onBlur")).on(this.isIOS()?"keyup":"input",this.callback("_onInput"));
c.on(b,this.callback("_onDocumentMouseDown")).on("click",this.callback("_onDocumentClick"));
this._bIsAndroidLT3_0()&&c.on(b,this.callback("_onDocumentMouseDown4AndroidLT3_0"))
},_bIsAndroidLT3_0:function(){return this.isAndroid()&&this.getOSVersion()<"3.0"
},_fireChangeEvent:function(){var b=this.getValue();
if(this.oAC.fire("change",{sValue:b})){this.oData.request(b)
}},_onFocus:function(b){if(this.oAC.fire("focus")){this._bIsFocused=true;
(this.elClearBtn&&this.getValue())&&this._$elClearBtn.show();
this.getValue()&&this.oData.request(this.getValue());
this.oAC.fire("focused")
}},_onBlur:function(b){if(this._bMustFocused||this._bIsTouchAtClearBtn){return
}if(this.oAC.fire("blur",{bIsTouchAtSWElement:this._bIsTouchAtSWElement})){this._bIsFocused=false;
if(this.elClearBtn&&!this.getValue()){this._$elClearBtn.hide()
}this.oAC.fire("blurred")
}},_onInput:function(b){if(this._sValue!==this.getValue()){this._sValue=this.getValue();
this._fireChangeEvent()
}},_onClearBtnClick:function(b){this._bIsTouchAtSWElement=this._bIsTouchAtClearBtn=false;
if(this.oAC.fire("clear")){this.elInput.focus();
this.elInput.value="";
this._fireChangeEvent();
this._bIsAndroidLT3_0()&&(this._bMustFocused=true)
}},_onDocumentMouseDown:function(b){this._bIsTouchAtClearBtn=this.elClearBtn&&this.elClearBtn.contains(b.target);
if(this._bIsTouchAtClearBtn||(this.elSubmitBtn&&this.elSubmitBtn.contains(b.target))){this._bIsTouchAtSWElement=true
}else{this._bIsTouchAtSWElement=false
}},_onDocumentClick:function(b){this._bIsTouchAtClearBtn&&this._onClearBtnClick()
},_onDocumentMouseDown4AndroidLT3_0:function(b){this._bMustFocused=false
}})
})(window.jQuery||nhn.mobile.ac.$);
(function(a){nhn.mobile.ac.View=nhn.mobile.ac.Component.extend({construct:function(b){this.option({sListSelector:"ul",nEllipsis:30,nDisplay:10});
this.option(b||{});
this.el=b.el;
this._$el=a(b.el);
this.oAC=null;
this.oInput=null
},toggle:function(){if(this.isShown()){this.hide()
}else{this.show()
}},show:function(){if(this.isShown()){return
}if(this.oAC.fire("show")){this._$el.show();
this.oAC.fire("shown")
}},hide:function(){if(!this.isShown()){return
}if(this.oAC.fire("hide")){this._$el.hide();
this.oAC.fire("hided")
}},isShown:function(){return this._$el.is(":visible")
},setRelatedObject:function(b){this.oAC=b.oAC;
this.oInput=b.oInput
},paint:function(b){},select:function(b){},extendKeyword:function(b){},use:function(){},unuse:function(){}})
})(window.jQuery||nhn.mobile.ac.$);
nhn.mobile.ac.Autocomplete=nhn.mobile.ac.Component.extend({construct:function(a){this.option({sCookieName:"autocomplete",sCookieDomain:"naver.com"});
this.option(a||{});
this.oInput=a.oInput;
this.oData=a.oData;
this.oView=a.oView;
this.oInput.setRelatedObject({oAC:this,oData:a.oData,oView:a.oView});
this.oData.setRelatedObject({oAC:this,oView:a.oView});
this.oView.setRelatedObject({oAC:this,oInput:a.oInput});
this._bUse=this._initUse()
},request:function(){this.oData.request(this.oInput.getValue())
},show:function(){this.oView.show()
},hide:function(){this.oView.hide()
},isShown:function(){return this.oView.isShown()
},select:function(a){this.oView.select(a)
},extendKeyword:function(a){this.oView.extendKeyword(a)
},use:function(){if(this.fire("use")){this.setCookie(this.option("sCookieName"),"use",21900,this.option("sCookieDomain"));
this._bUse=true;
this.oView.use()
}},unuse:function(){if(this.fire("unuse")){this.setCookie(this.option("sCookieName"),"unuse",21900,this.option("sCookieDomain"));
this._bUse=false;
this.oView.unuse()
}},setUse:function(a){this._bUse=a;
if(a){this.oView.use()
}else{this.hide();
this.oView.unuse()
}},isUse:function(){return this._bUse
},_initUse:function(){var b=this.getCookie(this.option("sCookieName")),a=true;
b&&(a=(b==="use"));
!a&&this.oView.unuse();
return a
}});
nhn.mobile.ac.Autocomplete.VERSION="3.1.5";
window.SearchAutoComplete=SearchAutoComplete;
function SearchAutoComplete(y){var m=parseMultilineStrFunction(function(){
/*!@preserve
<form
    {{#isMobile}}action="https://m.search.naver.com/search.naver"{{/isMobile}}
    {{#isPc}}action="https://search.naver.com/search.naver"{{/isPc}}
    class="_search_form" method="get" role="search" target="_blank" accept-charset="utf-8">
    {{#isMobile}}
        <input type="hidden" name="where" value="m_news">
        <input type="hidden" name="ie" value="utf8">
        <input type="hidden" name="sm" value="mns_hty">
    {{/isMobile}}
    {{#isPc}}
        <input type="hidden" name="where" value="news">
        <input type="hidden" name="ie" value="utf8">
        <input type="hidden" name="sm" value="nws_hty">
    {{/isPc}}
    <div id="u_hs" class="u_hs ">
        <div class="u_hsw">
            <div class="u_itw">
                <input type="search" name="query" title="검색어 입력" 
                       class="u_it _search_input"
                       placeholder="뉴스 검색" maxlength="255" autocomplete="off">
                {{! 자동완성 module nhn.mobile.ac.merged.js 에서도 컨트롤하는 것으로 반드시 display:none/block; 으로 해야 한다}}
                <button type="button"
                        class="u_clrt _search_input_clear_btn {{#newsP}}nclicks(gnb.schincl){{/newsP}}"
                        {{#newsM}}onclick="nclk(event,'gnb.schincl','','');"{{/newsM}}
                        {{#newsOne}}data-clk="gnb.schincl"{{/newsOne}}
                        style="display:none;">입력 내용 삭제</button>
                <button type="submit"
                    class="u_hssbt u_hssbt_ss _submit_btn {{#newsP}}nclicks(gnb.schn){{/newsP}}"
                    {{#newsM}}onclick="nclk(event,'gnb.schn','','');"{{/newsM}}
                    {{#newsOne}}data-clk="gnb.schn"{{/newsOne}}><span class="u_vc">뉴스검색</span></button>
            </div>
        </div>
        <button type="submit"
            class="u_hssbt_us _total_search_btn {{#newsP}}nclicks(gnb.nx){{/newsP}}"
            {{#newsM}}onclick="nclk(event,'gnb.nx','','');"{{/newsM}}
            {{#newsOne}}data-clk="gnb.nx"{{/newsOne}}>통합검색</button>
        <button type="button"
            class="u_hssbt_close _close_btn {{#newsP}}nclicks(gnb.schclose){{/newsP}}"
            {{#newsM}}onclick="nclk(event,'gnb.schclose','','');"{{/newsM}}
            {{#newsOne}}data-clk="gnb.schclose"{{/newsOne}}>닫기</button>
    </div>
    <div class="u_atcp_wrap">
        <div class="u_sggt_wrap2 _search_history is_hidden">
            <div class="sggt_fixer">
                <div class="sggt_header"><h2 class="tit">최근 검색어<a
                    {{#isMobile}}
                    href="https://m.help.naver.com/support/contents/contentsView.nhn?contentsNo=4029&lang=ko"
                    {{/isMobile}}
                    {{#isPc}}
                    href="https://help.naver.com/support/search/searchResultHelp.help?searchText=%EC%B5%9C%EA%B7%BC%EA%B2%80%EC%83%89%EC%96%B4"
                    {{/isPc}}
                    class="imsc ico_help" target="_blank">도움말</a></h2></div>
                <div class="sggt_container _contents"></div>
                <div class="sggt_footer">
                    <span class="side_opt_area">
                        <span class="opt_del _btn_remove_all"><a href="javascript:;">전체삭제</a></span>
                        <span class="opt_off _btn_toggle_onoff"><a href="javascript:;"
                            {{#newsP}}class="nclicks(gnb.saveoff)"{{/newsP}}
                            {{#newsM}}onclick="nclk(event,'gnb.saveoff','','');"{{/newsM}}
                            {{#newsOne}}data-clk="gnb.saveoff"{{/newsOne}}>자동저장 <span class="txt_off">끄기</span><span class="txt_on">켜기</span></a></span>
                        <span class="opt_help"><a
                            {{#isMobile}}
                            href="https://m.help.naver.com/support/contents/contentsView.nhn?contentsNo=4029&lang=ko"
                            {{/isMobile}}
                            {{#isPc}}
                            href="https://help.naver.com/support/search/searchResultHelp.help?searchText=%EC%B5%9C%EA%B7%BC%EA%B2%80%EC%83%89%EC%96%B4"
                            {{/isPc}}
                            {{#newsP}}class="nclicks(gnb.help)"{{/newsP}}
                            {{#newsM}}onclick="nclk(event,'gnb.help','','');"{{/newsM}}
                            {{#newsOne}}data-clk="gnb.help"{{/newsOne}}
                            target="_blank">도움말</a></span>
                    </span>
                </div>
            </div>
        </div>
        {{! 반드시 "display:none;" 으로 해야함 }}
        <div class="u_atcp_area _search_autocomplete" style="display:none;"> 
            <ul title="자동완성" class="u_atcp u_atcp_at _autocomplete_list"></ul>
            <div class="u_atcp_fc">
                <button type="button" class="u_atcp_fcb _autocomplete_toggle_btn">자동완성 끄기</button>
                <span class="u_atcp_dv">|</span>
                <a
                    {{#isMobile}}
                    href="https://m.help.naver.com/support/service/main.help?serviceNo=5627"
                    {{/isMobile}}
                    {{#isPc}}
                    href="https://help.naver.com/support/service/main.help?serviceNo=605&categoryNo=1987"
                    {{/isPc}}
                    class="u_atcp_fcb" target="_blank">도움말</a>
                <span class="u_atcp_dv">|</span>
                <a
                    {{#isMobile}}
                    href="https://m.help.naver.com/support/contents/contentsView.help?contentsNo=8950"
                    {{/isMobile}}
                    {{#isPc}}
                    href="https://help.naver.com/support/contents/contents.help?serviceNo=605&categoryNo=18215"
                    {{/isPc}}
                    class="u_atcp_report" target="_blank">신고</a>
            </div>
        </div>
    </div>
</form>
*/
return true
});
var f=y.isMobile?"https://m.search.naver.com/search.naver?ie=utf8&sm=mns_hty":"https://search.naver.com/search.naver?ie=utf8&sm=nws_hty";
var s=y.content;
var G=y.contentToggleBtn;
if(!s||!G){return
}n(y.isMobile,y.nClickType);
var K=s.querySelector("._close_btn");
var t=document.querySelector("html");
var J=s.querySelector("._search_form");
var E=s.querySelector("._submit_btn");
var z=s.querySelector("._search_input_clear_btn");
var L=s.querySelector("._total_search_btn");
var a=new nhn.mobile.ac.Input({elInput:s.querySelector("._search_input"),elClearBtn:z});
var v=new nhn.mobile.ac.Data({sAPIURL:"https://mac.search.naver.com/mobile/ac",sQueryKey:"q",htAPIParam:{frm:"mobile_news",q_enc:"UTF-8",st:"1",r_format:"json",r_enc:"UTF-8",r_unicode:"0",t_koreng:"1"}});
var b=new nhn.mobile.ac._SearchAutoCompleteList({el:s.querySelector("._search_autocomplete"),sListSelector:"._autocomplete_list",nDisplay:10}).on("clickInputQueryChangeBtn",B).on("clickSuggestionItem",c).on("paint",x);
var e=new nhn.mobile.ac.Autocomplete({oInput:a,oData:v,oView:b,sCookieName:"autocomplte",sCookieDomain:""}).on("change",i).on("use",g).on("unuse",q).on("focus",D);
var H=_SearchAutoCompleteToolbar(s.querySelector("._search_autocomplete"),{clickAutoCompleteOnBtn:d,clickAutoCompleteOffBtn:p});
var j=RecentSearchHistory(s.querySelector("._search_history"),{clickItem:function(M){o(M)
}});
G.addEventListener("click",l);
K.addEventListener("click",w);
J.addEventListener("submit",F);
L.addEventListener("click",A);
document.addEventListener("touchmove",I);
document.addEventListener("click",function(O){var N=O.target||null;
var M=s.contains(N)===false&&G.contains(N)===false&&(N&&N.offsetParent!==null);
if(M){u()
}});
if(e.isUse()){H.changeAutoCompleteToggleBtnType("off")
}else{H.changeAutoCompleteToggleBtnType("on")
}if(""===a.getValue()){j.show()
}function l(){var M=s.classList.contains("is_hidden");
if(M){r()
}else{u()
}}function w(){u()
}function I(M){a.blur()
}function x(M){b.performPaint(M.oAutoCompleteData,j.getHistoryData(),M.sInputQuery)
}function F(){C()
}function D(){h()
}function d(){e.use();
a.change()
}function p(){e.unuse()
}function g(){a.change();
b.showSuggestionList()
}function q(){b.hideSuggestionList()
}function B(M){a.setValue(M.sNewQuery).change().focus()
}function c(M){o(M.sSelectedQuery)
}function i(){k();
h()
}function A(M){M.preventDefault();
C();
window.open(f+"&query="+encodeURIComponent(a.getValue()),"_blank")
}function h(){if(""===a.getValue()){j.show();
b.hide();
return
}j.hide()
}function k(){if(""===a.getValue()){z.style.display="none";
return
}z.style.display=""
}function C(){j.add(a.getValue());
j.updateView()
}function o(M){a.setValue(M);
E.click()
}function r(){s.classList.remove("is_hidden");
t.classList.add("is_search_opened");
a.focus()
}function u(){s.classList.add("is_hidden");
t.classList.remove("is_search_opened");
a._onClearBtnClick()
}function n(M,R){var N=m;
M?P("isMobile"):P("isPc");
P(R);
O();
Q();
s.innerHTML=N;
function P(S){var T="{{#"+S+"}}([\\s\\S]+?){{\\/"+S+"}}";
N=N.replace(new RegExp(T,"g"),"$1")
}function Q(){N=N.replace(/{{#.+?}}[\s\S]+?{{\/.+?}}/g,"")
}function O(){N=N.replace(/{{![\s\S]+?}}/g,"")
}}};
(function(){var e=nhn.mobile.ac.$;
var c=parseMultilineStrFunction(function(){
/*!@preserve
<li class="u_atcp_l" data-query="{=sQueryInDataAttr}">
    <a href="javascript:;" class="u_atcp_a u_atcp_av _btn_select"><div class="u_atcp_ap">{=sSuggestion}</div></a>
    <button type="button" class="u_atcp_add _input_query_change_btn" style="{=sCssQueryChangeBtnDisplay}"><span class="u_atcp_addb"><span class="u_vc">추가</span></span></button>
</li>
*/
return true
});
var f=parseMultilineStrFunction(function(){
/*!@preserve
<li class="u_atcp_l u_atcp_lsc" data-query="{=sQueryInDataAttr}">
    <a href="javascript:;" class="u_atcp_a u_atcp_av _btn_select"><div class="u_atcp_ap">{=sSuggestion}</div></a>
    <span class="u_atcp_date">{=sDate}</span>
    <button type="button" class="u_atcp_add _input_query_change_btn" style="{=sCssQueryChangeBtnDisplay}"><span class="u_atcp_addb"><span class="u_vc">추가</span></span></button>
</li>
*/
return true
});
var d='<mark class="u_atcp_mk">{=sText}</mark>';
var b="data-query";
var a=3;
nhn.mobile.ac._SearchAutoCompleteList=nhn.mobile.ac.View.extend({construct:function(g){this._nAutoCompleteDisplayMax=g.nDisplay;
this._welAutocompleteWrap=this._$el;
this._welList=e(this.option("sListSelector"),this._welAutocompleteWrap.get(0));
delegate(this._welAutocompleteWrap.get(0),"click","._btn_select",this._onClickItem.bind(this));
delegate(this._welAutocompleteWrap.get(0),"click","._input_query_change_btn",this._onClickInputQueryChangeBtn.bind(this))
},paint:function(h,g){if(""===g){return
}this.fire("paint",{oAutoCompleteData:h,sInputQuery:g})
},performPaint:function(n,m,l){var k=Array.prototype.concat.apply([],n.data);
var j=[];
var g=[];
var i=[];
var h=this;
m.forEach(function(p,o){if(p.sQuery.indexOf(l)===-1){return
}g.push(h._getItemHtml("history",p,l));
j.push(p.sQuery);
if(j.length>=a){return false
}});
k.forEach(function(p,o){if(j.indexOf(p)>=0){return
}i.push(h._getItemHtml("autocomplete",{sQuery:p},l));
if(i.length>=h._nAutoCompleteDisplayMax){return false
}});
if((0===g.length)&&(0===i.length)){this._welList.html("");
this.hide()
}else{this._welList.html(g.concat(i).join("\n"));
this.show()
}},showSuggestionList:function(){this._welList.show()
},hideSuggestionList:function(){this._welList.hide()
},hide:function(){this._welAutocompleteWrap.hide()
},show:function(){this._welAutocompleteWrap.show()
},_onClickInputQueryChangeBtn:function(g){g.preventDefault();
this.fire("clickInputQueryChangeBtn",{sNewQuery:this._getItemDataQuery(g.currentTarget)})
},_onClickItem:function(g){g.preventDefault();
this.fire("clickSuggestionItem",{sSelectedQuery:this._getItemDataQuery(g.currentTarget)})
},_getItemHtml:function(k,i,j){var h=i.sQuery;
var g=(h===j)?"display:none;":"";
if("history"===k){return f.replace("{=sQueryInDataAttr}",escapeHtmlChar(h)).replace("{=sDate}",i.sDate).replace("{=sSuggestion}",this._highlightQuery(h,j)).replace("{=sCssQueryChangeBtnDisplay}",g)
}if("autocomplete"===k){return c.replace("{=sQueryInDataAttr}",escapeHtmlChar(h)).replace("{=sSuggestion}",this._highlightQuery(h,j)).replace("{=sCssQueryChangeBtnDisplay}",g)
}},_highlightQuery:function(j,n){var o=new RegExp("[.*+?|()\\[\\]{}\\\\]","g");
var h=n.match(/\S/g);
var k=[];
var l;
var p=h.length;
for(l=0;
l<p;
l++){k.push(h[l].replace(/\S/,"["+h[l].toLowerCase().replace(o,"\\$&")+"|"+h[l].toUpperCase().replace(o,"\\$&")+"] ").replace(/[\s]+/g,"[\\s]*"))
}var m=j.replace(new RegExp("("+k.join("")+")","g"),"{=sBeHighlighted}");
var g=RegExp.$1;
return escapeHtmlChar(m).replace(/{\=sBeHighlighted}/g,d.replace("{=sText}",escapeHtmlChar(g)))
},_getItemDataQuery:function(g){return g.parentNode.getAttribute(b)
}})
})();
function _SearchAutoCompleteToolbar(h,d){var f="자동완성 켜기";
var g="자동완성 끄기";
var b="자동완성 기능을\n사용 중지 하시겠습니까?";
var a=h.querySelector("._autocomplete_toggle_btn");
a.addEventListener("click",c);
return{changeAutoCompleteToggleBtnType:e};
function e(i){if(i==="on"){a.innerText=f;
return
}a.innerText=g
}function c(j){var i=j.currentTarget;
if(f===i.innerText){d.clickAutoCompleteOnBtn();
e("off");
return
}if(confirm(b)){d.clickAutoCompleteOffBtn();
e("on")
}}};
function RecentSearchHistory(d,p){var c="search_history_off";
var m="1";
var b=_RecentSearchHistoryContents(d,{clickItem:function(s){p.clickItem(s)
},clickDeleteBtn:function(s){k.remove(s);
j()
}});
var r=_RecentSearchHistoryToolbar(d,{clickOnBtn:f,clickOffBtn:n,clickRemoveAllbtn:a});
var k=_RecentSearchHistoryStorage();
var l=BrowserStorage({storageType:"local"});
j();
return{show:o,hide:g,add:h,getHistoryData:i,updateView:j};
function o(){d.classList.remove("is_hidden")
}function g(){d.classList.add("is_hidden")
}function h(s){if(false===e()){return
}k.add(s)
}function i(){if(false===e()){return[]
}return k.getHistoryData()
}function a(){k.clear();
j()
}function f(){l.removeItem(c);
j()
}function n(){l.setItem(c,m);
j()
}function j(){if(false===e()){b.paintTurnOff();
q("hide");
r.changeToggleBtnType("on");
return
}r.changeToggleBtnType("off");
if(false===k.hasHistory()){b.paintNoHistory();
q("hide");
return
}b.paint(k.getHistoryData());
q("show")
}function e(){return m!==l.getItem(c)
}function q(s){if("show"===s){r.changeRemoveBtnVisible("show");
return
}r.changeRemoveBtnVisible("hide")
}};
function _RecentSearchHistoryContents(b,f){var e=parseMultilineStrFunction(function(){
/*!@preserve
<ul class="kwd_lst">
    {{itemListHtml}}
</ul>
*/
return true
});
var n=parseMultilineStrFunction(function(){
/*!@preserve
<li class="type_date" data-query="{{sQuery}}">
    <a href="javascript:;" class="kwd _btn_select"><span class="fix">{{sQuery}}</span></a><em class="date">{{sDate}}.</em><a href="javascript:;" class="bt_del _btn_remove"><span class="imsc">삭제</span></a>
</li>
*/
return true
});
var l='<div class="kwd_info kwd_off imsc_bf">최근 검색어 저장 기능이<br>꺼져 있습니다.</div>';
var m='<div class="kwd_info kwd_none imsc_bf">최근 검색 기록이 없습니다.</div>';
var a="data-query";
var g=b.querySelector("._contents");
delegate(g,"click","._btn_select",d);
delegate(g,"click","._btn_remove",c);
return{paint:i,paintNoHistory:j,paintTurnOff:k};
function i(p){var o=p.map(function(q){return n.replace(/{{sQuery}}/g,escapeHtmlChar(q.sQuery)).replace("{{sDate}}",q.sDate)
});
g.innerHTML=e.replace("{{itemListHtml}}",o.join("\n"))
}function j(){g.innerHTML=m
}function k(){g.innerHTML=l
}function c(q){var o=q.currentTarget;
var p=o.parentNode;
q.preventDefault();
p.parentNode.removeChild(p);
f.clickDeleteBtn(h(o))
}function d(o){o.preventDefault();
f.clickItem(h(o.currentTarget))
}function h(o){var p=o.parentNode;
return p.getAttribute(a)
}};
function _RecentSearchHistoryToolbar(a,b){var f="opt_on";
var c="opt_off";
var e="최근검색어 저장 기능을\n사용 중지하시겠습니까?";
var k="최근검색어를 모두\n삭제하시겠습니까?";
var d=a.querySelector("._btn_toggle_onoff");
var g=a.querySelector("._btn_remove_all");
d.addEventListener("click",h);
g.addEventListener("click",i);
return{changeToggleBtnType:l,changeRemoveBtnVisible:j};
function l(n){var m=(n==="on")?f:c;
d.classList.remove(f);
d.classList.remove(c);
d.className=m+" "+d.className
}function j(m){if("show"===m){g.classList.remove("is_hidden");
return
}g.classList.add("is_hidden")
}function i(m){m.preventDefault();
if(false===confirm(k)){return
}j("hide");
b.clickRemoveAllbtn()
}function h(m){m.preventDefault();
if(d.classList.contains(f)){l("off");
b.clickOnBtn();
return
}if(confirm(e)){l("on");
b.clickOffBtn()
}}};
function _RecentSearchHistoryStorage(){var k="search_history";
var c=20;
var m="|";
var b="&";
var d=BrowserStorage({storageType:"local"});
var j=null;
return{add:l,remove:f,clear:g,hasHistory:e,getHistoryData:a};
function l(n){n=n.trim();
if(""===n){return
}f(n);
i([{sQuery:n,sDate:(function(){var p=new Date();
var q=("0"+(p.getMonth()+1)).slice(-2);
var o=("0"+p.getDate()).slice(-2);
return q+"."+o
})()}].concat(a()))
}function f(n){n=n.trim();
i(a().filter(function(o){return n!==o.sQuery
}))
}function g(){i([])
}function e(){return null!==h()
}function a(){var n=m;
var q=b;
var p;
var o;
if(null!==j){return j
}p=h();
o=(null===p)?[]:p.split(q);
j=o.map(function(s){var r=s.split(n);
return{sQuery:decodeURIComponent(r[0]),sDate:r[1]}
});
return j
}function i(o){var n=m;
var p=b;
j=null;
if(undefined===o[0]){d.removeItem(k);
return
}d.setItem(k,o.slice(0,c).map(function(q){return encodeURIComponent(q.sQuery)+n+q.sDate
}).join(p))
}function h(){var n=d.getItem(k);
return(null===n||""===n)?null:n
}};
