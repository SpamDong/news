function Aside(e){var a=parseMultilineStrFunction(function(){
/*!@preserve
<div class="news_common_aside _contents" style="visibility:hidden;"> {{! loading 노출 후 show }}
    {{#isNews}}
    <div class="subscriptionlist">
        {{#displaySubscriptionInfo}}
            {{^press.isError}}
            <div class="s_wrap">
                <div class="s_title">
                    <a href="{{pressSettingUrl}}"
                        onclick="nclk(event, '{{clickCode.press.title}}', '', '')"
                        class="s_title_link">
                        <h5 class="s_h">구독 언론사</h5>
                        <span class="s_count">{{press.count}}</span>
                    </a>
                </div>
                {{#press.hasListItem}}
                <div class="_press_list"></div> {{! 출력은 _AsideList 에서 }}
                {{/press.hasListItem}}
                {{^press.hasListItem}}
                <p class="s_error">관심있는 언론사를 구독해 보세요.</p>
                {{/press.hasListItem}}
            </div>
            {{/press.isError}}
            {{^journalistSeries.isError}}
            <div class="s_wrap">
                <div class="s_title">
                    <a href="{{journalistSettingUrl}}"
                        onclick="nclk(event, '{{clickCode.journalistSeries.title}}', '', '')"
                        class="s_title_link">
                        <h5 class="s_h">구독 기자 <i class="s_dot"></i> 연재</h5>
                        <span class="s_count">{{journalistSeries.count}}</span>
                    </a>
                </div>
                {{> JOURNALIST_SERIES_INFO_LAYER}}
                {{#journalistSeries.hasListItem}}
                <div class="_journalist_series_list"></div>
                {{/journalistSeries.hasListItem}}
                {{^journalistSeries.hasListItem}}
                <p class="s_error">관심있는 기자, 연재를 구독해 보세요.</p>
                {{/journalistSeries.hasListItem}}
            </div>
            {{/journalistSeries.isError}}
        {{/displaySubscriptionInfo}}
        {{^displaySubscriptionInfo}}
            {{^otherPressList.isError}}
            <div class="s_wrap">
                <div class="s_title">
                    <h5 class="s_h">다른 언론사 보기</h5>
                </div>
                <div class="_other_press_list"></div>
            </div>
            {{/otherPressList.isError}}
        {{/displaySubscriptionInfo}}
        <a href="{{pressSettingUrl}}"
            onclick="nclk(event, '{{clickCode.setting}}', '', '')"
            class="s_settingbutton">구독 설정</a>
    </div>
    {{/isNews}}
    {{#isEnterSports}}
        {{^journalist.isError}}
        <div class="subscriptionlist">
            <div class="s_wrap">
                <div class="s_title">
                    <a href="{{journalistSettingUrl}}"
                        onclick="nclk(event, '{{clickCode.journalist.title}}', '', '')"
                        class="s_title_link">
                        <h5 class="s_h">구독 기자</h5>
                        <span class="s_count">{{journalist.count}}</span>
                    </a>
                </div>
                {{> JOURNALIST_SERIES_INFO_LAYER}}
                {{#journalist.hasListItem}}
                <div class="_journalist_list"></div>
                {{/journalist.hasListItem}}
                {{^journalist.hasListItem}}
                <p class="s_error">관심있는 기자를 구독해보세요.</p>
                {{/journalist.hasListItem}}
            </div>
            <a href="{{journalistSettingUrl}}"
                onclick="nclk(event, '{{clickCode.setting}}', '', '')"
                class="s_settingbutton">구독 설정</a>
        </div>
        {{/journalist.isError}}
        {{#otherPressList.hasListItem}}
        <div class="subscriptionlist">
            <div class="s_wrap">
                <div class="s_title">
                    <h5 class="s_h">다른 언론사 보기</h5>
                </div>
                <div class="_other_press_list"></div>
            </div>
        </div>
        {{/otherPressList.hasListItem}}
    {{/isEnterSports}}
    <div class="qrcodelist">
        <h5 class="q_h">모바일에서 만나보세요</h5>
        <ul class="q_list">
            <li class="q_item">
                <a href="https://contents.premium.naver.com" class="q_item_a">
                    <div class="q_item_thumb">
                        <img src="https://ssl.pstatic.net/static.news/image/news/m/2021/11/04/qrcodeimg_premium.png"
                             onerror="showNoImage(this)"
                             class="q_item_img" alt="네이버 프리미엄 QR">
                    </div>
                    <div class="q_item_text">프리미엄</div>
                </a>
            </li>
        </ul>
    </div>
</div>
*/
return true
});
var f=parseMultilineStrFunction(function(){
/*!@preserve
<div class="s_desc _journalist_series_info_layer">
    <button type="button"
        onclick="nclk(event, '{{clickCode.journalistSeriesTooltip.toggle}}', '', '')"
        class="s_desc_button _toggle_btn">노출 기준</button>
    <div class="s_desc_layer _layer is_hidden">
        <button type="button"
            onclick="nclk(event, '{{clickCode.journalistSeriesTooltip.close}}', '', '')"
            class="s_desc_close _close_btn">닫기</button>
        <p class="s_desc_p">동일한 확률(랜덤)로 최대 30개 정렬됩니다. 구독 설정 페이지에서 추가로 볼 수 있습니다.</p>
    </div>
</div>
*/
return true
});
var g=$("._aside_wrapper");
$.ajax(e).done(function(i){try{var h=c(i.result);
d(h);
if($("._journalist_series_info_layer")[0]){LayerToggler({wrapper:$("._journalist_series_info_layer"),toggleBtnSelector:"._toggle_btn",layerSelector:"._layer",closeBtnSelector:"._close_btn",layerCloseClass:"is_hidden"})
}b();
var k=Loading();
g.css("position","relative");
k.appendTo(g,"10%");
setTimeout(function(){g.find("._contents").css("visibility","");
g.css("position","");
k.removeFrom(g)
},200)
}catch(j){}});
function d(h){g.get(0).innerHTML=Mustache.render(a,h,{JOURNALIST_SERIES_INFO_LAYER:f});
_AsideItemList($("._press_list"),{data:h.press,max:70,displayCount:8,isRandom:false});
_AsideItemList($("._journalist_series_list"),{data:h.journalistSeries,max:30,displayCount:6,isRandom:true});
_AsideItemList($("._journalist_list"),{data:h.journalist,max:30,displayCount:3,isRandom:true});
_AsideItemList($("._other_press_list"),{data:h.otherPressList,max:70,displayCount:8,isRandom:true})
}function b(){h();
setTimeout(h,2000);
function h(){window.top.postMessage({type:"setIframeSize",height:document.body.offsetHeight},"*")
}}function c(j){var h={};
switch(j.type){case"News":h={press:{link:"rig.setmedia",refresh:"rig.mediaref",title:"rig.setmediatit"},journalistSeries:{link:"rig.setserart",refresh:"rig.serartref",title:"rig.setserarttit"},journalistSeriesTooltip:{toggle:"rig.serarttooltip",close:"rig.serarttooltipcl"},otherPressList:{link:"rig.yetmedia",refresh:"rig.yetmediaref"},setting:"rig.editset"};
j.isNews=true;
j.press=i(j.press);
j.press.clickCode=h.press;
j.journalistSeries=i(j.journalistSeries);
j.journalistSeries.clickCode=h.journalistSeries;
break;
case"Entertain":case"Sports":case"EnterSports":h={journalist:{link:"rig.essetserart",refresh:"rig.esserartref",title:"rig.essetserartit"},journalistSeriesTooltip:{toggle:"rig.esserarttooltip",close:"rig.esserarttooltipcl"},otherPressList:{link:"rig.esyetmedia",refresh:"rig.esyetmediaref"},setting:"rig.eseditset"};
j.isEnterSports=true;
j.journalist=i(j.journalist);
j.journalist.clickCode=h.journalist;
break
}j.otherPressList=i(j.otherPressList);
j.otherPressList.clickCode=h.otherPressList;
j.clickCode=h;
if(j.isNews){j.displaySubscriptionInfo=j.press.hasListItem||j.journalistSeries.hasListItem
}if(j.isNews&&!j.displaySubscriptionInfo&&!j.otherPressList.hasListItem){j.displaySubscriptionInfo=true
}function i(l){var k=l||{};
k.isError=Array.isArray(k.list)===false;
k.hasListItem=!k.isError&&k.list.length>0;
return k
}return j
}};function _AsideItemList(a,b){var j=parseMultilineStrFunction(function(){
/*!@preserve
<ul class="s_list _list">
    {{> itemList}}
</ul>
{{#hasMoreItem}}
<button type="button"
    onclick="nclk(event, '{{clickCode.refresh}}', '', '')"
    class="s_refreshbutton _refresh_btn">새로보기</button>
{{/hasMoreItem}}
*/
return true
});
var k=parseMultilineStrFunction(function(){
/*!@preserve
{{#list}}
<li class="s_item">
    <a href="{{url}}" class="s_item_a" onclick="nclk(event, '{{clickCode.link}}', '', '')">
        <div class="s_item_thumb">
            <img src="{{thumb}}" class="s_item_img" alt="" onerror="showNoImage(this)">
        </div>
        <div class="s_item_text">{{name}}</div>
    </a>
</li>
{{/list}}
*/
return true
});
var d=b.data;
if(!a[0]||d.isError){return
}var g=b.displayCount;
var f=(function(){var l=d.list.slice(0);
if(b.isRandom){shuffle(l)
}return l.slice(0,b.max)
})();
var c=f.slice(0);
var e=1;
a.html(Mustache.render(j,{list:h(e),hasMoreItem:f.length>g,clickCode:d.clickCode},{itemList:k}));
a.find("._refresh_btn").on("click",function(){var m=e+1;
var l=h(m);
if(l.length<g){c=l.concat(f);
e=1
}else{e=m
}i()
});
function i(){var l=Mustache.render(k,{list:h(e),clickCode:d.clickCode});
a.find("._list").html(l)
}function h(m){var n=(m-1)*g;
var l=m*g;
return c.slice(n,l)
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
};function LayerToggler(f){var p=f.toggleBtnSelector;
var k=f.layerCloseClass||null;
var n=f.layerSelector;
var l=f.useLayerAutoCloseWhenFocusOut!==false;
var d=$(f.wrapper);
h();
return{activate:h,deactivate:e,open:j,close:m};
function h(){d.find(p).on("click",g);
d.find(f.closeBtnSelector).on("click",c);
if(l){$(document).on("click",a)
}}function e(){d.find(p).off("click",g);
d.find(f.closeBtnSelector).off("click",c);
$(document).off("click",a)
}function j(){if(k){b().removeClass(k)
}else{b().show()
}}function m(){if(k){b().addClass(k)
}else{b().hide()
}}function c(){m()
}function g(){if(i()){m();
return
}j()
}function a(q){var r=q.target;
if(i()===false){return
}if(o(r)===false){m()
}}function o(q){var s=Boolean($(q).closest(p)[0]);
var r=Boolean($(q).closest(n)[0]);
return(s||r)&&$.contains(d.get(0),q)
}function i(){if(k){return b().hasClass(k)===false
}return b().css("display")!=="none"
}function b(){return d.find(n)
}};function Loading(){var g=['<img class="_loading"','src="https://ssl.pstatic.net/static.news/image/news/m/2016/02/24/loading.gif"','alt="로딩중" width="32" height="8"','style="position:absolute;top:50%;left:50%;margin-left:-16px;margin-top:-8px;z-index:10000;">'].join(" ");
var e='<div class="_loading_keep_height" style="position:relative;">&nbsp;</div>';
return{paintTo:d,paintToKeepPrevHeight:c,appendTo:b,removeFrom:a};
function d(i,h){var j=$(g);
a(i);
if(h){f(j,h)
}$(i).get(0).innerHTML=j.get(0).outerHTML
}function c(k,l,j){var m=$(k);
var h=$(e);
h.height(i());
m.html("");
m.append(h);
d(h,l);
function i(){var n=m.height();
if((n===0)&&j){n=j
}return n
}}function b(k,i,h){if(false===Boolean(h)){a(k)
}var j=$(g).appendTo(k);
if(i){f(j,i)
}}function a(h){$(h).find("._loading_keep_height").remove();
$(h).find("._loading").remove()
}function f(i,h){$(i).css("top",h)
}};