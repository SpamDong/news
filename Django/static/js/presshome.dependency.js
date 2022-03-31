var PressHomeMainManager={Floating:news.makeClass({$static:{ID:1},$constructor:function(a,b){b=b||{};
this._id=this.constructor.ID++;
this._welWrapper=$(b.wrapper||document);
this._sFloatSelector=a;
this._sFloatingClassName=b.sFloatingClassName||"is_fixed";
this._sAfterContentSelector=b.sAfterContentSelector;
this._sFixedContentSelector=b.sFixedContentSelector;
this._bIncludePadding=b.bIncludePadding||false;
this._nBoundary=b.nBoundary;
this._fnBoundary=b.fnBoundary;
this._onInitialize=b.onInitialize;
this._onComputeScrollTop=b.onComputeScrollTop;
this._onStartFloating=b.onStartFloating;
this._onStopFloating=b.onStopFloating;
this.isFloating=false;
if(this._sAfterContentSelector===undefined&&this._nBoundary===undefined&&this._fnBoundary===undefined){throw new Error("[Floating] nBoundary 혹은 _fnBoundary 혹은 sAfterContentSelector 가 꼭 필요합니다.")
}this.activate()
},_onActivate:function(){this._welFloatingArea=this._welWrapper.find(this._sFloatSelector);
this._welAfterContentArea=this._welWrapper.find(this._sAfterContentSelector);
this._welFixedContentArea=this._welWrapper.find(this._sFixedContentSelector);
this.updateBoundary();
if(this._onInitialize){this._onInitialize(this)
}$(window).bind("scroll.floating"+this._id,$.proxy(this.onScroll,this));
this.onScroll()
},_onDeactivate:function(){$(window).unbind("scroll.floating"+this._id)
},getHeight:function(){return this._welFloatingArea.height()+this._welFixedContentArea.height()
},computeBoundary:function(){var d=this._welAfterContentArea.offset().top;
var a=this._welAfterContentArea.height();
if(this._bIncludePadding){var b=parseFloat(this._welAfterContentArea.css("padding-top"));
var c=parseFloat(this._welAfterContentArea.css("padding-bottom"));
return d+a+b+c
}return d+a
},onScroll:function(b){var c=$(document).scrollTop();
var a=true;
if(c>=this._nBoundary){if(this._onComputeScrollTop){a=this._onComputeScrollTop()
}if(a){this.startFloating();
return
}}this.stopFloating()
},updateBoundary:function(){if(this._sAfterContentSelector!=undefined){this._nBoundary=this.computeBoundary()
}if(this._fnBoundary!=undefined){this._nBoundary=this._fnBoundary()
}},startFloating:function(){this._welFloatingArea.addClass(this._sFloatingClassName);
this._welFixedContentArea.addClass(this._sFloatingClassName);
this.isFloating=true;
if(this._onStartFloating){this._onStartFloating()
}},stopFloating:function(){this._welFloatingArea.removeClass(this._sFloatingClassName);
this._welFixedContentArea.removeClass(this._sFloatingClassName);
this.isFloating=false;
if(this._onStopFloating){this._onStopFloating()
}}}),ChannelFollowerCount:news.makeClass({$constructor:function(a,b){this._welWrapper=$(a);
this._welFollowerLabel=$("._follower_label");
this._officeId=b.officeId;
if(this._officeId==null){throw new Error("[ChannelFollowerCount] officeId는 필수옵션 입니다.")
}this._channelFollowerUrl=b.channelBannerUrl||"/press/{officeId}/channel/followers.json";
this._channelFollowerUrl=this._channelFollowerUrl.replace("{officeId}",this._officeId);
this.fetchChannelFollowerCount()
},fetchChannelFollowerCount:function(){this.oPromise=$.getJSON(this._channelFollowerUrl,null).then($.proxy(this.onChannelFollowerCountSuccess,this))
},onChannelFollowerCountSuccess:function(a){if(!a){return
}this._followerCount=a.followerCount;
return this._followerCount
},renderFollowerCount:function(a){if(this._followerCount>0){this._welWrapper.text(this.addComma(a)).show();
this._welFollowerLabel.show()
}},incrementAndRenderFollowerCount:function(){this._followerCount=this._followerCount||0;
this._followerCount++;
this.renderFollowerCount(this._followerCount)
},decrementAndRenderFollowerCount:function(){this._followerCount=this._followerCount||0;
this._followerCount--;
if(this._followerCount==0){this._welWrapper.hide();
return
}this.renderFollowerCount(this._followerCount)
},addComma:function(b){var a=b;
if(typeof(b)=="number"){a=String(b)
}return a.replace(/(\d)(?=(\d{3})+$)/g,"$1,")
},}),ChannelSubscribeButton:news.makeClass({$static:{WEL_BUTTONS:{},CHANNEL_INFO:{},_COOKIE_FOR_CHECK_API_READY:"NNB",_COOKIE_FOR_CHECK_NOTIFICATION_DENY:"NOTIFICATION_DENY"},$constructor:function(a,b){this._welWrapper=$(a);
this._officeId=b.officeId;
this._channelBannerUrl=b.channelBannerUrl||"/channel/channelBanner.json";
this._addChannelUrl=b.addChannelUrl||"/channel/addOrMoveFirstChannelAjax";
this._removeChannelUrl=b.removeChannelUrl||"/channel/removeChannel";
this._notificationUrl=b.notificationUrl||"/channel/setNotification";
this._buttonClassName=b.buttonClassName;
this._nclk_add=b.nclk_add;
this._nclk_remove=b.nclk_remove;
this._nclk_info=b.nclk_info;
this._needNotificationButton=b.needNotificationButton;
this._needNotificationConfirm=b.needNotificationConfirm;
this.onAddChannelSuccess=b.onAddChannelSuccess;
this.onRemoveChannelSuccess=b.onRemoveChannelSuccess;
this.refreshFetchChannelInfo=(b.refreshFetchChannelInfo===true);
if(this._officeId==null){throw new Error("[ChannelSubscribeButton] officeId는 필수옵션 입니다.")
}this._fnChannelTemplate=this.initializeFollowTemplate();
this._fnNotificationConfirmTemplate=this.initializeNotificationConfirmTemplate();
this._fnNotificationTemplate=this.initializeNotificationTemplate();
this._fnNoLoginLayerTemplate=b.noLoginLayerTemplate?b.noLoginLayerTemplate():null;
this._fnCommonLayerTempalte=b.commonLayerTemplate?b.commonLayerTemplate():null;
this._fnAlertLayerTempalte=this.initializeAlertLayerTempalte();
if(!this.constructor.CHANNEL_INFO[this._officeId]||this.refreshFetchChannelInfo){this.fetchChannelInfo()
}else{this.constructor.CHANNEL_INFO[this._officeId].then($.proxy(this.onChannelSubscribeSuccess,this))
}},initializeFollowTemplate:function(){return news.Util.getTemplateRenderer(function(){
/*!@preserve
                    {{#if follow}}
                    <button type="button" class="{{buttonClassName}} is_disabled _channel_add"><span>구독중</span></button>
                    {{else}}
                    <button type="button" class="{{buttonClassName}} _channel_add"><span>구독</span></button>
                    {{/if}}
                    */
return true
})
},initializeNotificationConfirmTemplate:function(){return news.Util.getTemplateRenderer(function(){
/*!@preserve
                    <div id="_press_hd_subscribe_layer_wrap" class="press_hd_subscribe_layer_wrap is_hidden">
                        <div class="press_hd_subscribe_dimmed"></div>
                        <div class="press_hd_subscribe_layer is_single">
                            <strong class="phsl_ok">구독완료</strong>
                            <div class="phsl_text">
                                <p class="press_hd_subscribe_layer_title">{{name}} 뉴스를 <br><em>알림</em>으로 받아 보시겠습니까?</p>
                                <p class="press_hd_subscribe_layer_text">언론사의 주요 콘텐츠를 <br>네이버에서 빠르게 확인할 수 있습니다.</p>
                            </div>
                            <div class="press_hd_subscribe_layer_btns">
                                <button type="button" class="press_hd_subscribe_layer_btn _btn_no" onclick="nclk(event,'hom.pushno',{{officeId}},'')">닫기</button>
                                <button type="button" class="press_hd_subscribe_layer_btn _btn_yes as_em" onclick="nclk(event,'hom.pushyes',{{officeId}},'')">알림받기</button>
                            </div>
                        </div>
                    </div>
                    */
return true
})
},initializeNotificationTemplate:function(){return news.Util.getTemplateRenderer(function(){
/*!@preserve
                    <div id="_press_hd_notification_btnwrap" class="press_hd_notification_btnwrap {{#unless follow}}is_hidden{{/unless}}">
                        {{#if notification}}
                        <button type="button" class="press_hd_notification_btn"><span class="blind">알람 설정됨</span></button>
                        {{else}}
                        <button type="button" class="press_hd_notification_btn is_off"><span class="blind">알람 해제됨</span></button>
                        {{/if}}
                        <div class="phnb_tooltip is_hidden">
                            <p class="phnb_p">언론사의 <em class="phnb_em">주요 콘텐츠</em>를 받아보세요.</p>
                            <button type="button" class="phnb_close" onclick="nclk(event,'hom.pushclose',{{officeId}},'')">닫기</button>
                        </div>
                    </div>
                    */
return true
})
},initializeAlertLayerTempalte:function(){return news.Util.getTemplateRenderer(function(){
/*!@preserve
                    <div class="press_toast _notificationAlert" style="display:none">
                        <p class="pa_item"><span class="pa_press">{{name}}</span><span class="pa_text">언론사 알림 설정을 취소하였습니다.</span></p>
                    </div>
                    */
return true
})
},fetchChannelInfo:function(){var a=this;
if(this._isApiReady()===false){setTimeout(function(){a.fetchChannelInfo()
},1000);
return
}this.constructor.CHANNEL_INFO[this._officeId]=$.getJSON(this._channelBannerUrl,{oid:this._officeId,_:new Date().getTime()},$.proxy(this.onChannelSubscribeSuccess,this))
},onChannelSubscribeSuccess:function(a){if(!a||!a.name){return
}a.buttonClassName=this._buttonClassName;
a.officeId=this._officeId;
a.nclk_info=this._nclk_info;
this._welWrapper.prepend(this._fnChannelTemplate(a));
if(a.login){this._welWrapper.append(this._fnAlertLayerTempalte(a))
}else{if(this._fnNoLoginLayerTemplate!=null){this._welWrapper.append(this._fnNoLoginLayerTemplate(a))
}if(news.Util.getAgentInfo().bIsLiveViewer){this._welWrapper.hide()
}}if(this._fnCommonLayerTempalte!=null){this._welWrapper.append(this._fnCommonLayerTempalte(a))
}this.addButton(this._welWrapper.find("._channel_add"));
this._welWrapper.on("click","._channel_add",$.proxy(function(c){var b=$(c.currentTarget);
if(b.hasClass("is_disabled")){if(this._nclk_remove!=null){nclk(c,this._nclk_remove,this._officeId,"")
}$.post(this._removeChannelUrl,{officeId:this._officeId,uhv:a.uhv},$.proxy(function(f){if(f){if(this.onRemoveChannelSuccess){this.onRemoveChannelSuccess()
}this.getButtons().removeClass("is_disabled");
this.getButtons().find("span").text("구독");
var d=this._welWrapper.find("._afterRemove");
if(d){d.show();
setTimeout(function(){d.hide()
},2000)
}const e=$("#_press_hd_notification_btnwrap");
e&&e.addClass("is_hidden")
}},this))
}else{if(this._nclk_add!=null){nclk(c,this._nclk_add,this._officeId,"")
}$.post(this._addChannelUrl,{oid:this._officeId,uhv:a.uhv},$.proxy(function(h){if(h){if(this.onAddChannelSuccess){this.onAddChannelSuccess()
}this.getButtons().addClass("is_disabled");
this.getButtons().find("span").text("구독중");
var d=this._welWrapper.find("._afterAdd");
if(d){d.show();
setTimeout(function(){d.hide()
},3000)
}if(a.login){var g=$(".NAVER_APP_LIVE_VIEWER").length>0;
const f=$("#_press_hd_subscribe_layer_wrap");
if(!g){f&&f.removeClass("is_hidden")
}const e=$("#_press_hd_notification_btnwrap");
e&&e.removeClass("is_hidden")
}}},this))
}},this));
if(this._needNotificationConfirm){this._welWrapper.append(this._fnNotificationConfirmTemplate(a));
this._welNotificationConfirmLayer=this._welWrapper.find("#_press_hd_subscribe_layer_wrap");
this._welNotificationConfirmLayer.on("click",".press_hd_subscribe_layer_btn",$.proxy(function(b){this._welNotificationConfirmLayer.addClass("is_hidden")
},this));
this._welNotificationConfirmLayer.on("click","._btn_yes",$.proxy(function(b){$.post(this._notificationUrl,{officeIds:this._officeId,uhv:a.uhv,all:true},$.proxy(function(d){if(d===true){const c=$(".press_hd_notification_btnwrap");
if(c){c.find(".press_hd_notification_btn").removeClass("is_off");
c.find(".phnb_tooltip").addClass("is_hidden");
this._showNotificationAlert("언론사 알림 설정하였습니다.")
}}},this))
},this));
this._welNotificationConfirmLayer.on("click","._btn_no",$.proxy(function(c){const b=$(".press_hd_notification_btnwrap");
if(b){b.find(".press_hd_notification_btn").addClass("is_off");
b.find(".phnb_tooltip").addClass("is_hidden")
}$.post(this._notificationUrl,{officeIds:this._officeId,uhv:a.uhv,all:false})
},this))
}if(this._needNotificationButton&&a.login){this._welNotification=$(this._fnNotificationTemplate(a)).insertAfter(this._welWrapper);
this._welNotification.on("click",".press_hd_notification_btn",$.proxy(function(d){var b=$(d.currentTarget);
var c=false;
if(b.hasClass("is_off")){nclk(d,"hom.pushon",this._officeId,"");
c=true
}else{nclk(d,"hom.pushoff",this._officeId,"")
}$.post(this._notificationUrl,{officeIds:this._officeId,uhv:a.uhv,all:c},$.proxy(function(e){if(e===true){if(c){b.removeClass("is_off");
this._welNotification.find(".phnb_tooltip").addClass("is_hidden");
this._showNotificationAlert("언론사 알림 설정하였습니다.")
}else{b.addClass("is_off");
this._showNotificationAlert("언론사 알림 설정을 취소하였습니다.")
}}},this))
},this));
this._welNotification.on("click",".phnb_close",$.proxy(function(c){var b=$(c.currentTarget);
b.parents(".phnb_tooltip").addClass("is_hidden");
$.cookie(this.constructor._COOKIE_FOR_CHECK_NOTIFICATION_DENY,1,{expires:30})
},this));
if(a.follow===true&&a.notification!==true&&$.cookie(this.constructor._COOKIE_FOR_CHECK_NOTIFICATION_DENY)==null&&!news.Util.getAgentInfo().bIsLiveViewer){this._welNotification.find(".phnb_tooltip").removeClass("is_hidden")
}}},_showNotificationAlert:function(b){const a=this._welWrapper.find("._notificationAlert");
a.find(".pa_text").text(b);
a.show();
setTimeout(function(){a.hide()
},3000)
},addButton:function(a){if(!this.constructor.WEL_BUTTONS[this._officeId]){this.constructor.WEL_BUTTONS[this._officeId]=$()
}$.merge(this.constructor.WEL_BUTTONS[this._officeId],a);
return this.constructor.WEL_BUTTONS[this._officeId]
},getButtons:function(){return this.constructor.WEL_BUTTONS[this._officeId]
},_isApiReady:function(){return Boolean($.cookie(this.constructor._COOKIE_FOR_CHECK_API_READY))
}}),HistoryBackButton:news.makeClass({$constructor:function(a,b){b=b||{};
this._welWrapper=$(b.wrapper||document);
this._welWrapper.on("click",a,$.proxy(this.onBackButtonClick,this))
},onBackButtonClick:function(a){news.Util.doHistoryBack();
return false
}}),DotClickableFlicking:news.makeClass({$constructor:function(a,b){b=b||{};
this._welWrapper=$(document);
this._flicking=new news.Flicking(a,b);
this._welDotArea=$(b.sNavDotAreaSelector);
this._welDots=this._welDotArea.children();
this._welDotArea.on("click",">",$.proxy(this.onNavClick,this))
},onNavClick:function(b){var a=this._welDots.index(b.currentTarget);
this._flicking.moveTo(a)
},}),MoreSectionArticle:news.makeClass({$constructor:function(c,b){var a=this;
b=b||{};
a._sWrapperClass=c;
a._sMoreLoadBarClass=b.sMoreLoadBarClass||"._load_more_section_article";
a._sMoreUrl=b.sMoreUrl||"/newsflash/{oid}/{sid}";
a._sDomain=b.sDomain||"";
a._sCommentLinkDomain=b.sCommentLinkDomain||"";
a._welWrapper=$(c||document);
a._welMoreLoadBar=a._welWrapper.find(a._sMoreLoadBarClass);
new news.ElementInViewportDetecter(a._welMoreLoadBar,$.proxy(a.onLoadBarDetected,a));
a._isFetching=false;
a._welMoreLoadImage=a._welMoreLoadBar.find("img").hide();
a._isSecondSectionAll=b.isSecondSectionAll;
a._sSecondSectionMoreUrl=b.sSecondSectionMoreUrl||"/newsflash/{oid}/{sid}/{secondSid}";
this._fnArticleListTemplate=news.Util.getTemplateRenderer(function(){
/*!@preserve
                        {{#each list}}
                            {{#if this.isFirstItem}}
                            <div class="press_edit_news">
                                <ul class="press_edit_news_list as_5item_separator">
                            {{/if}}
                                    {{#if this.textType}}
                                    <li class="press_edit_news_item as_no_thumb _rcount" data-comment='{"gno":"news{{this.officeId}},{{this.articleId}}","type":"press","queryUrl":"sid={{../sectionId}}"}' data-service-datetime="{{this.serviceTimeForMoreApi}}">
                                    {{else}}
                                        {{#if this.thumbnail}}
                                    <li class="press_edit_news_item as_thumb _rcount" data-comment='{"gno":"news{{this.officeId}},{{this.articleId}}","type":"press","queryUrl":"sid={{../sectionId}}"}' data-service-datetime="{{this.serviceTimeForMoreApi}}">
                                        {{else}}
                                    <li class="press_edit_news_item as_no_thumb _rcount" data-comment='{"gno":"news{{this.officeId}},{{this.articleId}}","type":"press","queryUrl":"sid={{../sectionId}}"}' data-service-datetime="{{this.serviceTimeForMoreApi}}">
                                        {{/if}}
                                    {{/if}}
                                        <a href="{{this.linkUrl}}" class="press_edit_news_link">
                                            {{#if this.thumbnail}}
                                                <span class="press_edit_news_thumb">
                                                    <img src="{{this.thumbnail}}" width="106" height="70" alt="" onerror="showNoImage(this)">
                                                {{#if this.videoType}}
                                                    <span class="r_ico r_vod"><em class="blind">동영상 뉴스</em></span>
                                                {{/if}}
                                                </span>
                                            {{/if}}
                                            <span class="press_edit_news_text">
                                                <span class="press_edit_news_title">{{{this.title}}}</span>
                                                <span class="r_ico_b r_modify {{this.serviceTimeForCardListCss}}"><b>{{this.serviceTimeForCardList}}</b></span>
                                            </span>
                                        </a>
                                    </li>
                            {{#if this.isLastItem}}
                                </ul>
                            </div>
                            {{/if}}
                        {{/each}}
                    */
return true
})
},onLoadBarDetected:function(h){var i=$(h.el);
var a=i.parents(this._sWrapperClass);
var d=a.data("office-id");
var g=a.data("section-id");
var c=a.data("section-lnb-id");
var j=a.find("li:last").data("service-datetime");
var b={before:j};
if(this._isFetching){return
}this._welMoreLoadImage.show();
this._isFetching=true;
var k=this._sMoreUrl.replace("{oid}",d).replace("{sid}",c);
if(this._isSecondSectionAll){var f=a.data("second-sid");
k=this._sSecondSectionMoreUrl.replace("{oid}",d).replace("{sid}",g).replace("{secondSid}",f)
}$.getJSON(k,b,$.proxy(this.onLoadMoreArticleSuccess,this,i,g))
},onLoadMoreArticleSuccess:function(d,c,e){var b=this;
var a=news.Util.getAgentInfo().bMobileOrTablet;
this._welMoreLoadImage.show();
this._isFetching=false;
if(!e||!e.list||e.list.length==0){d.hide();
return
}$(e.list).map(function(f,g){return g
}).each(function(f,g){g.thumbnail=b.toCroppingImageUrl(g.thumbnail,"nf212_140");
g.isFirstItem=(f%10===0);
g.isLastItem=(f%10===9)||(f===e.list.length-1);
if(!a&&g.pcLinkUrl&&g.pcLinkUrl!==""){g.linkUrl=g.pcLinkUrl
}else{g.linkUrl=g.linkUrl+"?sid="+c
}});
e.sectionId=c;
e.domain=this._sDomain;
d.before(this._fnArticleListTemplate(e));
news.CommentCountPainterToList.getInstance().renderCommentCount({linkDomainMap:{press:b._sCommentLinkDomain,pressHomeCard:b._sCommentLinkDomain}})
},toCroppingImageUrl:function(a,b){try{if(a.indexOf("?")){return a.replace("?","?type="+b+"&")
}return a+"?type="+b
}catch(c){return a
}}}),PressHomeTab:news.makeClass({$constructor:function(b,c){var a=this;
c=c||{};
a._welWrapper=$(c.wrapper||document);
a._welTabButtons=$(b);
a._aPanels=undefined;
a._oPanels={};
a._isScrollAndFlickingInitialized=c.isScrollAndFlickingInitialized;
if(c.onTabClick){a._onTabClickCallback=c.onTabClick
}a._welTabButtons.each(function(e,f){var d=$(f).attr("href");
var g=$(d);
a._oPanels[d]=g
});
a._welWrapper.on("click",b,$.proxy(this.onTabClick,this))
},getTabButtons:function(){return this._welTabButtons
},onTabClick:function(b){var a=$(b.currentTarget);
this.selectTab(a);
if(this._onTabClickCallback){this._onTabClickCallback(b)
}return false
},selectTab:function(a){this._welTabButtons.parent().attr("aria-selected",false);
a.parent().attr("aria-selected",true);
var b=a.attr("href");
this.selectPanel(b)
},getPanels:function(){var a=this;
if(a._aPanels!==undefined){return a._aPanels
}a._aPanels=$();
$.each(a._oPanels,function(b,c){$.merge(a._aPanels,c)
});
return a._aPanels
},hidePanels:function(){return this.getPanels().hide()
},showPanel:function(a){return this._oPanels[a].show()
},selectPanel:function(a){this.hidePanels();
return this.showPanel(a)
},}),Ranking:news.makeClass({$constructor:function(b,a){a=a||{};
this._welWrapper=$(a.wrapper||document);
this._welRankingWrapper=this._welWrapper.find(b);
this._sRankingPanelListSelector=a.sRankingPanelListSelector||"._ranking_panel_list";
this._sDescriptionSelector=a.sDescriptionSelector||"._ranking_description";
this._welDescription=this._welRankingWrapper.find(this._sDescriptionSelector);
this._welRankingPanelList=this._welRankingWrapper.find(this._sRankingPanelListSelector).children();
if(this._welRankingPanelList.length<2){this.setDescription(0);
return
}this._sTabSelector=a.sTabSelector||"._ranking_tab_button";
this._sNavDotAreaSelector=a.sNavDotAreaSelector||"._ranking_nav_items";
this._sNavDotAreaChildren=this._welRankingWrapper.find(this._sNavDotAreaSelector).children();
this._sOnNavDotClassName=a.sOnNavDotClassName||"is_selected";
this.setDescription(this.getSelectedNo());
this._welWrapper.on("click",this._sTabSelector,$.proxy(this.onTabClick,this))
},onTabClick:function(b){var d=$(b.currentTarget);
var c=d.parent().hasClass(this._sOnNavDotClassName);
if(c){return
}var a=parseInt(d.data("flicking-index"),10);
this.setTabSelected(a);
this.setDescription(a);
this._welRankingPanelList.attr("hidden",true);
this._welRankingPanelList[a].removeAttribute("hidden")
},setTabSelected:function(a){var b=this._welRankingWrapper.find(this._sNavDotAreaSelector).children();
b.removeClass(this._sOnNavDotClassName);
b.eq(a).addClass(this._sOnNavDotClassName)
},setDescription:function(a){this._welDescription.html(this._welRankingPanelList.eq(a).data("ranking-description"))
},getSelectedNo:function(){for(var a=0;
a<this._sNavDotAreaChildren.length;
a++){var b=$(this._sNavDotAreaChildren[a]);
if(b.hasClass(this._sOnNavDotClassName)){return a
}}return 0
}}),AutoRecommendAiRS:news.makeClass({_AIRS_RENDERING_URL:"/airs/autorecommend",$constructor:function(b,a){a=a||{};
this._officeId=a.sOfficeId||"";
this._templateType=a.sTemplateType||"";
this._gdids=a.sGdids||"";
this._welWrapper=$(a.wrapper||document);
this._welAutoRecommendWrapper=this._welWrapper.find(b);
this._welAutoRecommendAreaSelector=".as_representation_airs";
this.apiParams={officeId:this._officeId,templateType:this._templateType,gdids:this._gdids};
if(this._officeId===""||this._templateType===""){return
}this.updateAutoRecommendContent()
},updateAutoRecommendContent:function(){$.ajax({url:this._AIRS_RENDERING_URL,type:"GET",dataType:"html",data:this.apiParams}).done($.proxy(function(c,a){var b=(c!=null)?c:"";
if(b.length>100){this._welAutoRecommendPenal=this._welAutoRecommendWrapper.find(this._welAutoRecommendAreaSelector);
this._welAutoRecommendPenal.replaceWith(b);
this._welAutoRecommendPenal=this._welAutoRecommendWrapper.find(this._welAutoRecommendAreaSelector);
this._welAutoRecommendPenal.replaceWith(b)
}},this))
},}),AutoRecommend:news.makeClass({$constructor:function(d,b){b=b||{};
this._welWrapper=$(b.wrapper||document);
this._welAutoRecommendWrapper=this._welWrapper.find(d);
this._welAutoRecommendInner=this._welAutoRecommendWrapper.find("._auto_recommend_news_inner");
this._welFlickingChildren=this._welAutoRecommendWrapper.find("._flicking").children();
this._welPrevBtn=this._welAutoRecommendWrapper.find("._representation_prev_btn");
this._welNextBtn=this._welAutoRecommendWrapper.find("._representation_next_btn");
if(this._welFlickingChildren.length<2){return
}for(var a=0;
a<this._welFlickingChildren.length;
a++){var c=this._welFlickingChildren[a];
c.removeAttribute("hidden")
}this._flicking=new news.Flicking(this._welAutoRecommendWrapper,{sNavDotAreaSelector:"._representation_nav_items",sNavDotTpl:'<button type="button" role="tab" aria-selected="true" class="pg_num"></button>',sOnNavDotClassName:"pg_num_on",sPrevBtnSelector:"._representation_prev_btn",sNextBtnSelector:"._representation_next_btn",htListeners:{flickEnd:$.proxy(this.onFlickEnd,this)}});
this._welPrevBtn.css("z-index","2100");
this._welNextBtn.css("z-index","2100");
$(window).on("resize",$.proxy(this.onResize,this));
this.updateFlickingHeight()
},onFlickEnd:function(a){this.updateFlickingHeight()
},onResize:function(a){this._flicking._flicking.resize();
this.updateFlickingHeight()
},updateFlickingHeight:function(){this._welAutoRecommendInner.height(this._flicking.getElement().children().outerHeight(true))
},}),HasMoreList:news.makeClass({$constructor:function(a,b){b=b||{};
this._welWrapper=$(b.wrapper||document);
this._sTargetWrapper=a;
this._welTargetWrapper=this._welWrapper.find(this._sTargetWrapper);
this._sMoreAreaSelector=b.sMoreAreaSelector;
this._welMoreArea=this._welTargetWrapper.find(this._sMoreAreaSelector);
this._sMoreButtonSelector=b.sMoreButtonSelector;
this._welMoreButton=this._welMoreArea.find(this._sMoreButtonSelector);
this._onMoreArticleShow=b.onMoreArticleShow;
this._welMoreArea.on("click",this._sMoreButtonSelector,$.proxy(this.onMoreButtonClick,this));
this._sMoreFoldButtonSelector=b.sMoreFoldButtonSelector;
this._welMoreFoldButton=this._welMoreArea.find(this._sMoreFoldButtonSelector);
this._welMoreArea.on("click",this._sMoreFoldButtonSelector,$.proxy(this.onMoreFoldButtonClick,this));
this._welMoreFoldButton.detach();
this._count=this._welMoreArea.data("count");
this._moreCount=this._welMoreArea.data("moreCount")
},onMoreButtonClick:function(){var c=this._welMoreArea.parent(this._sTargetWrapper);
var b=c.find(".press_edit_news_item.is_hidden");
var a=$(b.splice(0,this._moreCount));
a.find("._es_pc_link_hidden").removeClass("_es_pc_link_hidden").addClass("_es_pc_link");
PressHomeMainManager.EnterSportsLinkChanger();
a.removeClass("is_hidden");
if(b.length<=0){this._welMoreButton.detach()
}this._welMoreArea.prepend(this._welMoreFoldButton);
if(this._onMoreArticleShow){this._onMoreArticleShow(a,this._moreCount)
}},onMoreFoldButtonClick:function(){var b=this._welMoreArea.parent(this._sTargetWrapper);
var a=b.find(".press_edit_news_item");
$(a.splice(this._count)).addClass("is_hidden");
this._welMoreFoldButton.detach();
this._welMoreArea.append(this._welMoreButton)
}}),PressHomeList:news.makeClass({$constructor:function(a){a=a||{};
this._welWrapper=$(a.wrapper||"._press_list_wrap");
this._pressHomePopup=a.pressHomePopup;
this._sCategoryWrapperSelector=a.sCategoryWrapper||"._category_wrapper";
this._sCategoryScrollSelector=a.sCategoryScrollSelector||"._category_list_scroll";
this._sCategoryListSelector=a.sCategoryListSelector||"._press_category";
this._sCategoryLeftBtnSelector=a.sCategoryLeftBtnSelector||"._category_left_btn";
this._sCategoryRightBtnSelector=a.sCategoryRightBtnSelector||"._category_right_btn";
var b="on";
this._sViewType=this._welWrapper.data("view-type");
if(this._sViewType=="DEPTH2"){this._sCategorySelectedAppendElement='<span class="blind">선택됨</span>';
b="is_active"
}this._sCategorySelectedClassName=a.sCategorySelectedClassName||b;
this._sPressListSelector=a.sPressListSelector||"._press_list";
this._welCategoryList=this._welWrapper.find(this._sCategoryListSelector);
this._welPressList=this._welWrapper.find(this._sPressListSelector);
this._welCategoryWrapper=this._welWrapper.find(this._sCategoryWrapperSelector);
this._welScrollArea=this._welWrapper.find(this._sCategoryScrollSelector);
this._welCategoryNavBtn=this._welWrapper.find(this._sCategoryLeftBtnSelector+","+this._sCategoryRightBtnSelector);
if(this._welScrollArea.length>0){this._categoryListScroll=new news.Scroll(this._sCategoryScrollSelector,{centerAlignmentBy:$(this._sCategoryScrollSelector).get(0)})
}this._welWrapper.on("click",this._sCategoryListSelector+" a",$.proxy(this.onCategoryClick,this));
this._welCategoryNavBtn.on("click",$.proxy(this.onCategoryNavClick,this));
if(a.selectedOfficeId!=null){this.getCategoryOfOffice(a.selectedOfficeId)
}},getCategoryIndex:function(a){if(a===undefined){a=this._welCategoryList.filter(".on").get(0)
}return this._welCategoryList.index(a)
},getCategoryOfOffice:function(d){var c=this._welPressList.find("a[data-office-id="+d+"]").data("category");
var b=this._welCategoryList.filter(':contains("'+c+'")');
var a=this.getCategoryIndex(b);
this.selectCategory(a)
},onCategoryClick:function(c){var b=$(c.currentTarget).parents(this._sCategoryListSelector);
var a=this.getCategoryIndex(b);
this.selectCategory(a)
},onCategoryNavClick:function(c){var b=$(c.currentTarget);
var a=this.getCategoryIndex();
if(b.hasClass(this._sCategoryLeftBtnSelector.replace(".",""))){this.selectCategory(a-1)
}else{this.selectCategory(a+1)
}},selectCategory:function(b){this._welCategoryList.removeClass(this._sCategorySelectedClassName);
var a=this._welCategoryList.eq(b).addClass(this._sCategorySelectedClassName);
if(this._sViewType=="DEPTH2"){this._welCategoryList.find(".blind").remove();
this._welCategoryList.eq(b).append(this._sCategorySelectedAppendElement)
}if(b===0){this._welCategoryWrapper.addClass("as_right").removeClass("as_left")
}else{if(b===(this._welCategoryList.length-1)){this._welCategoryWrapper.addClass("as_left").removeClass("as_right")
}else{this._welCategoryWrapper.removeClass("as_left").removeClass("as_right")
}}this._categoryListScroll.scrollElToCenter(a);
this._welPressList.hide();
this._welPressList.eq(b).css("display","");
if(this._pressHomePopup){this._pressHomePopup.scrollRefresh()
}}}),PressListPopup:news.makeClass({$constructor:function(a,b){b=b||{};
this._pressListPopupUrl=b.pressListPopupUrl||"/press/popup";
this._selectedOfficeId=b.selectedOfficeId;
this._welWrapper=$(b.wrapper||document.body);
this._welHtmlAndBody=$("html,body");
this._welDimmedLayer=$('<div class="press_dimmed"></div>');
this._onFetchPressListSuccess=$.proxy(this.onFetchPressListSuccess,this);
this._welWrapper.on("click",a,$.proxy(this.onPressButtonClick,this));
this._welWrapper.on("click","._press_list_close_btn",$.proxy(this.onCloseButtonClick,this));
this._scroll=null;
$(window).on("rotate",$.proxy(this.scrollRefresh,this))
},onPressButtonClick:function(){if(this._welModalLayer){this.showModalLayer();
return
}this.fetchPressListLayer()
},showModalLayer:function(){this._welModalLayer.show();
this._welDimmedLayer.show();
if(this._scroll===null){this._scroll=new news.Scroll($("._press_layer").find("._scroll_y"),{bScrollY:true})
}this._scroll.refresh().enable();
this._welHtmlAndBody.addClass("is_stop_scroll_mobile")
},hideModalLayer:function(){this._welModalLayer.hide();
this._welDimmedLayer.hide();
this._scroll.disable();
this._welHtmlAndBody.removeClass("is_stop_scroll_mobile")
},scrollRefresh:function(){if(this._scroll){this._scroll.refresh()
}},onCloseButtonClick:function(a){nclk(a,"hom.close",this._selectedOfficeId,"");
this.hideModalLayer()
},fetchPressListLayer:function(){return $.ajax({url:this._pressListPopupUrl,success:this._onFetchPressListSuccess})
},onFetchPressListSuccess:function(a){this._welModalLayer=$(a);
this._welWrapper.append(this._welModalLayer);
this._welWrapper.append(this._welDimmedLayer);
new PressHomeMainManager.PressHomeList({selectedOfficeId:this._selectedOfficeId,pressHomePopup:this});
this.showModalLayer()
}}),MoveTopButton:news.makeClass({$constructor:function(a,b){this._welTopBtn=$(a||"#goTop");
if(0===this._welTopBtn.length){return
}b=b||{};
this._callback=b.onClickTopBtn;
this._welTopBtn.on("click",$.proxy(this._onClickTopBtn,this));
news.ScreenChangeDetecter.getInstance().on("scrollChanged",$.proxy(this._onScrollChanged,this))
},_onClickTopBtn:function(a){a.preventDefault();
news.Util.movePageTop();
if(this._callback){this._callback(a)
}},_onScrollChanged:function(a){this._changeVisible(a.htNewPosition.top>1)
},_changeVisible:function(a){this._welTopBtn.toggleClass("show",a)
}}),ModalPopup:news.makeClass({$constructor:function(a,b){b=b||{};
this._welWrapper=$(b.wrapper||document);
this._welModalLayer=this._welWrapper.find(a);
this._sOpenButtonSelector=b.sOpenButtonSelector;
this._sCloseButtonSelector=b.sCloseButtonSelector;
this._onModalShow=b.onModalShow;
this._onModalHide=b.onModalHide;
this._dimBackground=b.dimBackground;
this._welWrapper.on("click",this._sOpenButtonSelector,$.proxy(this.onOpenButtonClick,this));
this._welWrapper.on("click",this._sCloseButtonSelector,$.proxy(this.onCloseButtonClick,this))
},onOpenButtonClick:function(a){this._welModalLayer.show();
if(this._dimBackground){if(this._welDimmedLayer===undefined){this._welDimmedLayer=$('<div class="press_dimmed"></div>');
this._welModalLayer.after(this._welDimmedLayer)
}this._welDimmedLayer.show()
}if(this._onModalShow){this._onModalShow(a)
}},onCloseButtonClick:function(a){this._welModalLayer.hide();
if(this._dimBackground){this._welDimmedLayer.hide()
}if(this._onModalHide){this._onModalHide(a)
}},}),ButtonListener:news.makeClass({$constructor:function(a,b){b=b||{};
this._welWrapper=$(b.wrapper||document);
this._onClick=b.onClick;
this._sOfficeId=b.officeId;
this._welWrapper.on("click",a,$.proxy(this.onButtonClick,this))
},onButtonClick:function(a){if(this._onClick){return this._onClick(a)
}}}),NaverTvLive:news.makeClass({$static:{_COOKIE_FOR_CHECK_CELLULAR_ALERT:"CELLULAR_ALERT_SHOW"},$constructor:function(a,b){this._sWrapperSelector=a;
this._welWrapper=$(a);
this._welViewCountarea=this._welWrapper.find("._view_count_area");
this._welLikeCountarea=this._welWrapper.find("._like_count_area");
this.sPlayerArea="_player_area"||b.sPlayerArea;
this._staticResourceDomain=b.staticResourceDomain||"";
this._welPlayerArea=this._welWrapper.find("#"+this.sPlayerArea);
this.oJsLoader=new news.JsLoader().setConfig({sCharSet:"utf-8"});
b=b||{};
this._naverTvLiveViewCountUrl=b.naverTvLiveViewCountUrl||"/api/press/live/count.json";
this._commonLikeCountUrl=b.commonLikeCountUrl||"/api/press/like/count.json";
this._bUseFloating=b.useFloating;
if(this._bUseFloating==undefined){this._bUseFloating=true
}this._nClientWidth=document.documentElement.clientWidth;
this.sLiveId=this._welWrapper.data("live-id");
this.sLiveNo=this._welWrapper.data("live-no");
this.sNaverTvApiDomain=this._welWrapper.data("naver-tv-api-domain");
this.playerCountryCode="KR";
this.playbackUrl="https://api.tv.naver.com/api/open/live/v2/player/playback?countryCode="+this.playerCountryCode+"&liveId="+this.sLiveId;
this.pollingStatusUrl="https://api.tv.naver.com/api/open/live/v2/player/pollingStatus?liveId="+this.sLiveId;
this.watchingCpUrl="https://api.tv.naver.com/api/open/live/v2/player/watchingCp?countryCode="+this.playerCountryCode+"&liveId="+this.sLiveId;
this.gladParamUrl="https://api.tv.naver.com/api/open/live/v2/player/gladParam?liveId="+this.sLiveId;
if(this.sLiveId==null){throw new Error("[NaverTvLive] live-id 는 필수입니다.")
}this.loadCss();
this.initPlayer();
if(this._welViewCountarea.length>0){this.fetchViewCount()
}this.sLikeServiceId=this._welWrapper.data("like-service-id");
this.sLikeContentsId=this._welWrapper.data("like-contents-id");
if(this.sLikeServiceId!=null&&this.sLikeContentsId!=null){this.fetchLikeCount()
}if(this._bUseFloating&&this._nClientWidth<640){$(window).on("rotate",$.proxy(this.onRotateDevice,this))
}},setCookieLteDataAlert:function(){if($.cookie(this.constructor._COOKIE_FOR_CHECK_CELLULAR_ALERT)==null){var a=new Date();
a.setTime(a.getTime()+(3*60*60*1000));
$.cookie(this.constructor._COOKIE_FOR_CHECK_CELLULAR_ALERT,1,{expires:a})
}},onPlay:function(){this.setCookieLteDataAlert();
this.getFloating().activate()
},onSuspend:function(){this.getFloating().stopFloating();
this.getFloating().deactivate()
},onRotateDevice:function(a){this.getFloating().onScroll()
},getFloating:function(){var a=this;
if(!this._floating){this._floating=new PressHomeMainManager.Floating(a._sWrapperSelector,{fnBoundary:function(){return a._welWrapper.offset().top
},onComputeScrollTop:function(){if(news.Util.isDeviceVertical()===false){return false
}if(a.player.played&&a.player.played.length>0){return true
}return false
},onStartFloating:function(){a._welPlayerArea.css("z-index",3000)
},onStopFloating:function(){a._welPlayerArea.css("z-index","")
}})
}return this._floating
},fetchViewCount:function(){var a={liveId:this.sLiveId};
$.getJSON(this._naverTvLiveViewCountUrl,a,$.proxy(this.onViewCountSuccess,this))
},onViewCountSuccess:function(a){if(a&&a.viewCount){this._welViewCountarea.text(this.addComma(a.viewCount)).show()
}},fetchLikeCount:function(){var a={serviceId:this.sLikeServiceId,contentsId:this.sLikeContentsId};
$.getJSON(this._commonLikeCountUrl,a,$.proxy(this.onLikeCountSuccess,this))
},onLikeCountSuccess:function(a){if(a&&a.likeCount){this._welLikeCountarea.text(this.addComma(a.likeCount)).show()
}},scrollToPlayerArea:function(){$(window).scrollTop(this._welWrapper.offset().top-90)
},onPlayerInitialized:function(){if(!this.isBackForward()&&location.hash.indexOf("live")>-1){if(news.Util.getAgentInfo().bMobileOrTablet){this.player.addEventListener("loadedmetadata",$.proxy(this.scrollToPlayerArea,this))
}else{this.scrollToPlayerArea()
}}if(this._bUseFloating&&this._nClientWidth<640&&news.Util.getAgentInfo().bMobileOrTablet){this.player.addEventListener("play",$.proxy(this.onPlay,this));
this.player.addEventListener("suspend",$.proxy(this.onSuspend,this))
}},loadCss:function(){var a=this._staticResourceDomain+"/css/generated/presshomelive/live_pc.css";
if(news.Util.getAgentInfo().bMobileOrTablet){a=this._staticResourceDomain+"/css/generated/presshomelive/live_mobile.css"
}$("head").append('<link rel="stylesheet" type="text/css" href="'+a+'" />')
},initPlayer:function(){var a=this._staticResourceDomain+"/js/generated";
if(news.Util.getAgentInfo().bMobileOrTablet){this.oJsLoader.load([a+"/prismplayer-mobile.min.js"],$.proxy(function(){this.initLivePlayer(true)
},this));
return
}this.oJsLoader.load([a+"/prismplayer-pc.min.js"],$.proxy(this.initLivePlayer,this))
},livePlayerSendRequest:function(a){return $.ajax({url:a,type:"GET",dataType:"json"})
},livePlayerAddVideoTrackEventListner:function(){this.player.videoTracks.addEventListener("change",function(a){var c=a.track.label;
var b;
if(c=="270p"){b="prs_live.270"
}else{if(c=="360p"){b="prs_live.360"
}else{if(c=="480p"){b="prs_live.480"
}else{if(c=="720p"){b="prs_live.720"
}else{if(c=="1080p"){b="prs_live.1080"
}}}}}if(b){nclk(this,b,"","")
}})
},livePlayerAddResizeEventListener:function(){window.addEventListener("resize",$.proxy(function(){this.player.adsController.resizeAd(this.player.clientWidth,this.player.clientHeight,"normal")
},this))
},initLivePlayer:function(e){var g=document.getElementById(this.sPlayerArea);
var c;
var b;
var f;
var a;
var h;
if(e){c=$(g).find("#liveMobileLayout");
b=naver.player.PrismMobilePlayer;
f="HTML5_MO";
a="mo";
if($.cookie(this.constructor._COOKIE_FOR_CHECK_CELLULAR_ALERT)!=null){$("#liveMobileLayout").attr("connection","")
}}else{c=$(g).find("#livePcLayout");
b=naver.player.PrismPCPlayer;
f="HTML5_PC";
a="pc"
}c.show();
this.player=b.upgrade(g);
this.player.volume=0.5;
this.livePlayerAddVideoTrackEventListner();
this.livePlayerAddResizeEventListener();
this.onPlayerInitialized();
if(!e){var d=$(".pzp-pc-ui-setting-intro-panel");
if(d&&d.length>1){d.eq(1).remove()
}}$.when(this.livePlayerSendRequest(this.playbackUrl),this.livePlayerSendRequest(this.gladParamUrl)).done($.proxy(function(k,n){if(n&&n.length>2&&n[1]==="success"){var m=n[0];
if(m.showAdvertise){var l=m.gladParam;
var j=new naver.player.GLADRequest();
j.setVideoScheduleInfo({videoAdScheduleId:l.videoAdScheduleId,divId:this.sPlayerArea,playerInfo:{playerType:f,locale:"ko"},scheduleParam:{},adRequestParam:{targeting:{},mediaParams:{pcmo:a,ac:f,sid:l.sid,vid:l.vid,calp:l.calp,cp:l.cp,chl:l.chl,cl:l.cl,svc:l.svc,cc:l.cc,v_theme:l.vtheme,ctry:l.ctry,areaId:"clip"}}});
j.setAdSchedulePolicy({pre:l.videoAdSchedulePolicy.pre,mid:l.videoAdSchedulePolicy.mid,post:l.videoAdSchedulePolicy.post});
this.player.adsController.environmentVars={"glad.applicationCode":f,"glad.pcmo":a};
this.player.adsController.srcObject=j
}}if(k&&k.length>2&&k[1]==="success"){var o=naver.player.LiveProvider;
h=o.fromJSON(k[0],{devt:f,countryCode:this.playerCountryCode,p2pEnabled:false,watchingApiUrl:this.watchingCpUrl,serviceId:2006,serviceTrackingId:"NAVERTV",serviceContentId:this.sLiveNo});
this.player.srcObject=h
}},this));
var i=this;
setInterval(function(){$.ajax({url:i.pollingStatusUrl,type:"GET",dataType:"json"}).done(function(j){if(h&&!$.isEmptyObject(j)){h.updateLiveStatus(j)
}})
},60*1000)
},onMobilePlayerEventOccur:function(b){var a;
var e;
var d;
if(b==="custom_open"){e=arguments[3];
a=e.encodingOption.height;
d=e.callEventType;
if(d=="doPlay"||d=="changeResolution"){if(confirm("고화질 이상은 네이버TV앱으로 재생합니다. 해당 앱이 없으면 앱스토어로 이동합니다. Wi-Fi가 아닌 경우 데이터 과금에 각별히 주의하세요.")){this.openNaverTvApp(a)
}}else{this.openNaverTvApp(a)
}}else{if(b==="nclick"){var f=arguments[3];
var c;
if(f=="rmc.resplay270p"){c="prs_live.270"
}else{if(f=="rmc.resplay360p"){c="prs_live.360"
}else{if(f=="rmc.resplay480p"){c="prs_live.480"
}else{if(f=="rmc.resplay720p"){c="prs_live.720"
}else{if(f=="rmc.resplay1080p"){c="prs_live.1080"
}}}}}if(c){nclk(this,c,"","")
}}}},openNaverTvApp:function(a){if(news.Util.getAgentInfo().sOsName=="ios"){if(parseFloat(news.Util.getAgentInfo().sOsVersion)>=9){url="https://ul.tv.naver.com/universal/listen.nlc_play?schemeVersion=1&liveType=0&liveId="+this.sLiveId;
if(a){url+="&qualityId="+a+"p"
}window.open(url,"_blank")
}}else{url="intent://nlc_play?minAppVersion=2030&serviceId=12010&title=&video="+(a||270)+"&liveId="+this.sLiveId+"&liveType=0&liveStatus=1#Intent;scheme=naverplayer;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.naverplayer;end";
window.open(url,"_blank")
}},addComma:function(b){var a=b;
if(typeof(b)=="number"){a=String(b)
}return a.replace(/(\d)(?=(\d{3})+$)/g,"$1,")
},isBackForward:function(){var b=false;
try{b=(window.performance.navigation.type===(window.performance.navigation.TYPE_BACK_FORWARD||2))
}catch(a){}return b
}}),NaverTvLiveViewCount:news.makeClass({$constructor:function(a,b){this._sWrapperSelector=a;
this._welWrapper=$(a);
b=b||{};
this.sLiveId=this._welWrapper.data("live-id");
this.sNaverTvApiDomain=this._welWrapper.data("naver-tv-api-domain");
this._naverTvLiveViewCountUrl=b.naverTvLiveViewCountUrl||"/api/press/live/count.json";
if(this._welWrapper.length>0&&this.sLiveId!=null){this.fetchViewCount()
}},fetchViewCount:function(){var a={liveId:this.sLiveId};
$.getJSON(this._naverTvLiveViewCountUrl,a,$.proxy(this.onViewCountSuccess,this))
},onViewCountSuccess:function(a){if(a&&a.viewCount){this._welWrapper.text(this.addComma(a.viewCount)).show()
}},addComma:function(b){var a=b;
if(typeof(b)=="number"){a=String(b)
}return a.replace(/(\d)(?=(\d{3})+$)/g,"$1,")
},}),LiveTalk:news.makeClass({$constructor:function(b,d,a,c){this.config={bLogin:news.LoginAssistor.isLoginUser(),htEventHandler:{},htMessage:{template:{list_empty:"첫 번째 TALK을 작성해보세요!",write_placeholder:"TALK을 남겨보세요."}},nIndexSize:10,nPageSize:10,nReplyPageSize:5,sApiDomain:"https://apis.naver.com/commentBox/cbox",sCountry:"KR",sCssId:"news_talk_w",sCssUrl:"",sDomain:"https://ssl.pstatic.net/static.cbox",sHelp:"down",sId:b,sLanguage:"ko",sObjectId:d,sPageType:"mobile",sTemplateId:"talk",sTicket:a};
$.extend(this.config,c);
(function(f){window.__htCboxOption=f;
var e=document.createElement("script");
e.type="text/javascript";
e.charset="utf-8";
e.src=f.sDomain+"/js/cbox.core.js?v="+Math.floor(new Date().getTime()/1200000);
(document.head||document.getElementsByTagName("head")[0]).appendChild(e)
})(this.config)
}}),NaverTvAppLiveViewer:news.makeClass({$constructor:function(a,b){this._welWrapper=$(a);
this._oConfig=b;
this._welLoading=$(".press_loading")
},initLiveAppViewer:function(){window.inapphome.playVideoNewsLive(JSON.stringify(this._oConfig))
},showWebViewer:function(){this._welLoading.hide();
this._welWrapper.show();
document.querySelector("html").classList.remove("NAVER_APP_LIVE_VIEWER")
}}),EnterSportsLinkChanger:(function(){if(news.Util.getAgentInfo().bMobileOrTablet){return function(){}
}else{return function(){$("._es_pc_link").map(function(b,c){var a=c.getAttribute("data-pc-link");
if(a){c.setAttribute("href",a)
}c.classList.remove("._es_pc_link")
})
}
}})()};
var PressHomeRankingManager=news.makeClass({$static:{_WEEK_DAY_STRING:["일","월","화","수","목","금","토"],_TYPE_MAP:{popular:{articleTemplate:"popularRankingArticleTemplate",articleListAPI:"/api/press/{officeId}/ranking?type=popular&date={date}",postprocessData:"articleList"},comment:{articleTemplate:"commentRankingArticleTemplate",articleListAPI:"/api/press/{officeId}/ranking?type=comment&date={date}",postprocessData:"articleList"},section:{articleTemplate:"sectionRankingArticleTemplate",articleListAPI:"/api/press/{officeId}/ranking?type=section&date={date}",postprocessData:"sectionList"}},_PERSIST_KEY:"presshome_rankingpage"},$constructor:function(d,f,b){this._typeConstructor(d,f);
this.pressRankingHome=$(".press_ranking_home");
this.criteriaDescriptionBox=this.pressRankingHome.find(".press_ranking_desc");
var c=(b.startServiceDate)?b.startServiceDate:"20000101";
this.serviceStartDate=this._makeDateFromString(c);
var e=new Date();
this.today=new Date(e.getFullYear(),e.getMonth(),e.getDate());
var a=this.pressRankingHome.find(".press_ranking_date");
this.initDate=a.attr("data-init-date");
this.date=this._makeDateFromString(this.initDate);
this.rankingDateStrongTag=a.find("strong");
this.rankingPrevDateButton=a.find(".button_date_prev");
this.rankingNextDateButton=a.find(".button_date_next");
this.onNextDate=$.proxy(this._onNextDate,this);
this.onPrevDate=$.proxy(this._onPrevDate,this);
this.rankingNextDateButton.bind("click",this.onNextDate);
this.rankingPrevDateButton.bind("click",this.onPrevDate);
this._setDateNavString(this.date);
this._updateButtonState(this.date);
this._initPersist();
PressHomeMainManager.EnterSportsLinkChanger()
},_typeConstructor:function(b,d){var c=this.constructor._TYPE_MAP[b]||{};
var a=c.articleTemplate;
this.articleListTemplateEngine=Handlebars.compile($("#"+a).html());
this.articleListAPI=(c.articleListAPI||"").replace("{officeId}",d);
this.postProcessListData=(c.postprocessData==="articleList")?this._postprocessArticleListData:this._postprocessSectionListData
},_initPersist:function(){var c=$.persist(this.constructor._PERSIST_KEY);
var a=this.pressRankingHome;
if(c){var b=this._makeDateFromString(c.rankingDate);
this._updateArticleData(b,function(){a.find(".press_ranking_box").show()
})
}else{a.find(".press_ranking_box").show()
}$("body").on("click","a",$.proxy(function(){$.persist(this.constructor._PERSIST_KEY,{rankingDate:this._makeStringFromDate(this.date)})
},this))
},_onNextDate:function(){var a=new Date(this.date);
a.setDate(this.date.getDate()+1);
if(a.getTime()<=this.today.getTime()){this._updateArticleData(a)
}},_onPrevDate:function(){var a=new Date(this.date);
a.setDate(this.date.getDate()-1);
if(a.getTime()>=this.serviceStartDate.getTime()){this._updateArticleData(a)
}},_makeDateFromString:function(b){var c=b.substring(0,4);
var d=b.substring(4,6);
var a=b.substring(6,8);
return new Date(c,parseInt(d)-1,a)
},_makeStringFromDate:function(c){var d=c.getFullYear();
var e=c.getMonth()+1;
var b=c.getDate();
var a=function(f){return((f<10)?"0":"")+f.toString()
};
return d+a(e)+a(b)
},_setDateNavString:function(c){var d=c.getFullYear();
var e=c.getMonth()+1;
var a=c.getDate();
var b=this.constructor._WEEK_DAY_STRING[c.getDay()];
var f=[d,e,a,b].join(". ");
this.rankingDateStrongTag.text(f)
},_updateButtonState:function(b){var a=new Date(b);
a.setDate(a.getDate()-1);
var c=new Date(b);
c.setDate(c.getDate()+1);
if(a.getTime()<this.serviceStartDate.getTime()){this.rankingPrevDateButton.addClass("is_disabled");
this.rankingPrevDateButton.attr("disabled","")
}else{this.rankingPrevDateButton.removeClass("is_disabled");
this.rankingPrevDateButton.removeAttr("disabled")
}if(c.getTime()>this.today.getTime()){this.rankingNextDateButton.addClass("is_disabled");
this.rankingNextDateButton.attr("disabled","")
}else{this.rankingNextDateButton.removeClass("is_disabled");
this.rankingNextDateButton.removeAttr("disabled")
}},_postprocessArticleListData:function(a,b){return{popularArticleList:a,isEmptyArticleList:a.length<1,showRankingNewsError:a.length<20&&a.length!==10,showRankingViews:b}
},_postprocessSectionListData:function(b,a){return{sectionList:b,isEmptySectionList:b.length<1,showRankingViews:a}
},_updateArticleData:function(b,c){var a=$.ajax({url:this.articleListAPI.replace("{date}",this._makeStringFromDate(b)),type:"GET",dataType:"json"}).done($.proxy(function(e){this.criteriaDescriptionBox.find("p").html(e.criteriaDescription);
var d=(e.articleList)?e.articleList:[];
var f=this.postProcessListData(d,e.showRankingViews);
var g=this.articleListTemplateEngine(f);
this._updateButtonState(b);
this._setDateNavString(b);
this.date=b;
this.pressRankingHome.find(".press_ranking_box").remove();
this.pressRankingHome.find(".press_ranking_empty_alert").remove();
$(g).insertAfter(this.criteriaDescriptionBox);
PressHomeMainManager.EnterSportsLinkChanger()
},this));
if(typeof(c)==="function"){a.always(c)
}}});
function parseMultilineStrFunction(a){var b=/\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)\s*\*\//;
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
function ScrollForNative(f,q){var k=$(f);
if(!k[0]){return
}var l=k.find("._next_btn");
var g=k.find("._prev_btn");
var o=k.find("._scroller")[0];
var r=(q&&q.scrollDistanceRate)||0.9;
var a=q&&q.onApplyScrollNavState;
n();
d();
return{activate:d,deactivate:c,next:j,prev:j,scrollTo:b,scrollBy:m};
function d(){l.on("click",p);
g.on("click",h)
}function c(){l.off("click",p);
g.off("click",h)
}function m(s){this.scrollTo(o.scrollLeft+s)
}function b(s){$(o).stop().animate({scrollLeft:s},250,function(){n()
})
}function p(){j()
}function h(){i()
}function j(){b(o.scrollLeft+e())
}function i(){b(o.scrollLeft-e())
}function n(){var v=Math.ceil(o.scrollLeft);
var t=o.scrollWidth-o.offsetWidth;
var s=v<=0;
var u=v>=t;
if(a){a(s,u,g,l)
}else{g.attr("disabled",s);
l.attr("disabled",u)
}}function e(){return o.offsetWidth*r
}};
function BrickGrid(c,d){var g=$(c);
var i=g.find("._brick_column");
var b=e();
var j=[];
(function(){var m=i.eq(0).children().toArray();
var n=h(m);
var l=n(b);
if(b>1){f(l)
}i.each(function(o){if(o===0){j[o]=[m];
return
}if(o===(b-1)){j[o]=l;
return
}var p=o+1;
j[o]=n(p)
})
})();
$(window).on("resize",a);
function a(){var l=b;
var m=e();
if(l!==m){b=m;
k()
}}function k(){var m=b-1;
var l=j[m];
f(l)
}function f(n){var l=i.filter(":visible");
g.css("height",g.height());
i.css("display","none");
l.each(function(o){var p=n[o];
m(this,p)
});
i.css("display","");
g.css("height","");
function m(p,o){o.forEach(function(q){p.appendChild(q)
})
}}function h(n){var o=n.map(function(p){return{el:p,height:p.offsetHeight}
});
return function(G){var H=l(o,G)||o;
var y=[];
var p={};
H.forEach(function(L,K){var J=L.staticPosition;
if(J){p[J.column+":"+J.row]=L;
return
}y.push(L)
});
var u=y.length;
var B=m(0,G);
var r=m([],G);
var F;
var s;
var w;
var x;
var I;
var q;
var z;
var v;
for(var A=0;
A<u;
A++){F=C(B);
s=F+1;
w=r[F].length+1;
x=s+":"+w;
I=y[A];
q=I.el;
z=I.height;
v=p[x];
if(v){q=v.el;
z=v.height;
delete p[x]
}r[F].push(q);
B[F]+=z;
if(v){A=A-1
}}for(var t in p){try{D(p[t]);
delete p[t]
}catch(E){}}return r;
function D(L){var J=L.staticPosition.column-1;
var K=L.staticPosition.row-1;
r[J][K]=L.el
}function C(K){var J=Math.min.apply(null,K);
return K.indexOf(J)
}};
function m(q,p){return Array.apply(null,Array(p)).map(function(){return Array.isArray(q)?q.slice(0):q
})
}function l(r,q){if(!d){return null
}var p=cloneDeep(r);
p.forEach(function(t,s){t.el=r[s].el
});
return d(p,q)||null
}}function e(){return i.filter(":visible").length
}};
function BrickGridForMultiple(a){$(a).each(function(b,c){BrickGrid(c)
})
};
ArticleUtils={scrollToTitle:function(){var a=jindo.$Element("articleTitle");
if(!a){return
}window.scrollTo(0,a.offset().top)
}};
SocialCommentUtils={sSocialCommentId:"social-comment",nLoadCheckLimit:5,nLoadCheckCount:0,nLoadCheckDelayTime:50,pPathPattern:/\/comment\//,scrollToTop:function(){var b=document.location.href;
var a=jindo.$Element(this.sSocialCommentId);
if(!this.pPathPattern.test(b)||!a||this.nLoadCheckCount>=this.nLoadCheckLimit){return
}this._scrollToTopCheck(a)
},_scrollToTopCheck:function(b){if(!b.html()){this.nLoadCheckCount++;
var a=this;
setTimeout(function(){a._scrollToTopCheck(b)
},a.nLoadCheckDelayTime);
return
}setTimeout(function(){window.scrollTo(0,b.offset().top)
},300)
}};
MainCommonUtils={getMainChannelLink:function(){if(document.cookie.indexOf("MM_NEW=1")!==-1){return"https://m.naver.com/naverapp/?cmd=onMenu&menuCode=NEWS"
}else{if(document.cookie.indexOf("MM_NEW=2")!==-1){return"https://m.naver.com/naverapp/?cmd=onMenu&menuCode=NEWS&version=5"
}else{return"https://m.naver.com/naverapp/?cmd=onMenu&menuCode=NEWS&hash=MM_news_channel"
}}},goMainChannel:function(){window.location=this.getMainChannelLink()
}};
function isDarkShareLayer(){return document.querySelector("html").className.indexOf("DARK_THEME")>-1&&window.matchMedia("(prefers-color-scheme: dark)").matches
};
GnbHelper={attachClick:function(b){for(;
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
}};
