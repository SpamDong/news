var charSetByTextGNB = "";
try { 
	if(_NATE_SCRIPT_DATA.typeCharset != undefined){
		charSetByTextGNB = _NATE_SCRIPT_DATA.typeCharset;
	}
} catch(err) { 
	charSetByTextGNB = "";
}

(function(root, undefined) {
	var SETTING = {
		dataURL: _isHttpsProtocal() +  'common.nate.com/textGNB/getkeyword?c='+charSetByTextGNB,
		target: 'keywordRank', // container ID
		normalModeClass: 'area_rtkwd type_alone',
		overModeClass: 'area_rtkwd',
		rollingTime: 3, //3sec
		maxList: 10
	};

	var Utils = (function(){
		var loadFile = function(filename, filetype){
			var fileref;
			if (filetype=="js"){ //if filename is a external JavaScript file
				fileref=document.createElement('script')
				fileref.setAttribute("type","text/javascript")
				fileref.setAttribute("src", filename)
			}
			else if (filetype=="css"){ //if filename is an external CSS file
				fileref=document.createElement("link")
				fileref.setAttribute("rel", "stylesheet")
				fileref.setAttribute("type", "text/css")
				fileref.setAttribute("href", filename)
			}
			if (typeof fileref!="undefined")
			document.getElementsByTagName("head")[0].appendChild(fileref)
		}

		function triggerEvent(el,eventName){ // console.log('triggerEvent '+eventName);
			if(eventName == 'complete') eventName = 'contextmenu';
		    var event;
		    if(document.createEvent){
		        event = document.createEvent('HTMLEvents');
		        event.initEvent(eventName,true,true);
		    }else if(document.createEventObject){// IE < 9
		        event = document.createEventObject();
		        event.eventType = eventName;
		    }
		    event.eventName = eventName;
		    if(el.dispatchEvent){
		        el.dispatchEvent(event);
		    }else if(el.fireEvent){// IE < 9
		        try { 
		        	el.fireEvent('on'+event.eventType,event);// can trigger only real event (e.g. 'click') 
		    	} catch(err) {
		    		
		    	}
		    }else if(el[eventName]){
		        el[eventName]();
		    }else if(el['on'+eventName]){
		        el['on'+eventName]();
		    }
		}
		function addEvent(el,type,handler){
			if(type == 'complete') type = 'contextmenu';
		    if(el.addEventListener){
		        el.addEventListener(type,handler,false);
		    }else if(el.attachEvent){// IE < 9
		        el.attachEvent('on'+type,handler);
		    }else{
		        el['on'+type]=handler;
		    }
		}
		function removeEvent(el,type,handler){
		    if(el.removeventListener){
		        el.removeEventListener(type,handler,false);
		    }else if(el.detachEvent && htmlEvents['on'+type]){// IE < 9
		        el.detachEvent('on'+type,handler);
		    }else{
		        el['on'+type]=null;
		    }
		}
		function getElementsByClassName(el,className) {
			var result;
			try {
		        result = el.getElementsByClassName(className)[0];	
		    } catch (err) { 
		    	if(el.querySelector) {
		    		result = el.querySelector('div.'+className);
		    	} else {
		    		var result = [];
					var myclass = new RegExp('\\b'+className+'\\b');
					
					if ( el == undefined )
						el = document;
					
					var elem = el.getElementsByTagName('*');
					for (var i = 0; i < elem.length; i++) {
						var classes = elem[i].className;
						if (myclass.test(classes)) result.push(elem[i]);
					}
		    	}
		    }
		    return result;
		} 
		function getParent(el){
			if(el.parentElement) {
		        return el.parentElement;
		    } else if (el.parentNode) {
		        return el.parentNode;
		    } else {
		    	return false;
		    }
		}
		function getRealInternetExploreVersion() {
			var obj = document.createElement('div'),
				CLASSID = [
					'{45EA75A0-A269-11D1-B5BF-0000F8051515}', 	// Internet Explorer Help
					'{3AF36230-A269-11D1-B5BF-0000F8051515}',	// Offline Browsing Pack 
					'{89820200-ECBD-11CF-8B85-00AA005B4383}'
				],
				realVersion = '';
			try {
				obj.style.behavior = 'url(#default#clientcaps)';
			} catch(ex) {
				//console.log(ex.message);
			}
			for (var i = 0; i < CLASSID.length; i++) {
				try {
					realVersion = obj.getComponentVersion(CLASSID[i], 'componentid').replace(/,/g, '.');
				} catch(ex) {
					//console.log(ex.message);
				}
				if (realVersion) {
					break;
				}
			}
			return realVersion;
		}
		function contentLoaded(win, fn) {

			var done = false, top = true,

			doc = win.document,
			root = doc.documentElement,
			modern = doc.addEventListener,

			add = modern ? 'addEventListener' : 'attachEvent',
			rem = modern ? 'removeEventListener' : 'detachEvent',
			pre = modern ? '' : 'on',

			init = function(e) {
				if (e.type == 'readystatechange' && doc.readyState != 'complete') return;
				(e.type == 'load' ? win : doc)[rem](pre + e.type, init, false);
				if (!done && (done = true)) fn.call(win, e.type || e);
			},

			poll = function() {
				try { root.doScroll('left'); } catch(e) { setTimeout(poll, 50); return; }
				init('poll');
			};

			if (doc.readyState == 'complete') fn.call(win, 'lazy');
			else {
				if (!modern && root.doScroll) {
					try { top = !win.frameElement; } catch(e) { }
					if (top) poll();
				}
				doc[add](pre + 'DOMContentLoaded', init, false);
				doc[add](pre + 'readystatechange', init, false);
				win[add](pre + 'load', init, false);
			}

		}
		return {
			loadFile : loadFile, 
			triggerEvent : triggerEvent, 
			addEvent : addEvent, 
			removeEvent : removeEvent, 
			getElementsByClassName : getElementsByClassName, 
			getParent : getParent,
			getRealInternetExploreVersion : getRealInternetExploreVersion,
			contentLoaded : contentLoaded
		}
	})();

	var es = {
		Version: '1.0',

		Browser: {
			//IE:  !!(window.attachEvent && !window.opera) || (!!navigator.userAgent.match(/Trident.*rv\:11\./)),
			IE:  !!(window.attachEvent && !window.opera),
			IE11: !!navigator.userAgent.match(/Trident.*rv\:11\./),
			// IE7: false,
			IE7: Utils.getRealInternetExploreVersion().indexOf('7.0') > -1 || (document.documentMode == 7),
			// IE7: navigator.userAgent.indexOf('MSIE 7.0') > -1,
			Opera:  !!window.opera,
			WebKit: navigator.userAgent.indexOf('AppleWebKit/') > -1,
			Gecko:  navigator.userAgent.indexOf('Gecko') > -1 && navigator.userAgent.indexOf('KHTML') == -1,
			MobileSafari: !!navigator.userAgent.match(/Apple.*Mobile.*Safari/),
			Chrome: /Chrome/.test(navigator.userAgent)
		}
	};

	var Tween = function(){
		var _tweenTimer;
		var _targetValue;
		var _targetValue2;
		var _currentValue;
		var _currentValue2;
		var _target;
		var _timerName;
		var _timerCount = 0;

		function slideUp(target, currentValue, value) {
			_target = target;
			_targetValue = value;
			_currentValue = currentValue;
			
			clearTimeout(_tweenTimer);
			slideUpTween();
			// startTime();
		}

		function slideUpTween() { 
			_currentValue = _currentValue + 0.2 * (_targetValue - _currentValue);
			_target.style.top = _currentValue+'px';
			// _target.style.top = _targetValue+'px'; 
			// console.log('slideUpTween '+_targetValue+' '+_currentValue+' '+_target.style.top);
			_tweenTimer = setTimeout(function(){slideUpTween()}, 20);

			if(Math.abs(_currentValue - _targetValue) < 0.001 ) {
				clearTimeout(_tweenTimer);
				U.triggerEvent(_target, 'complete');
			}
		}

		function fade(target, currentValue, value, currentValue2) { 
			_target = target;
			_targetValue = value;
			_targetValue2 = 1;
			_currentValue = currentValue;
			_currentValue2 = currentValue2;
			
			clearTimeout(_tweenTimer);
			fadeTween();
			// startTime();
		}

		function fadeTween() {
			if(!es.Browser.IE && !es.Browser.IE11) {
	            _currentValue = _currentValue + 0.2 * (_targetValue - _currentValue);
				_currentValue2 = _currentValue2 + 0.4 * (_targetValue2 - _currentValue2);
				document.getElementById(_timerName).style.opacity = _currentValue;
				// _target.style.filter = Alpha(opacity=(_currentValue*100));
				if( _targetValue == 0 && _timerCount > 20) { 
					document.getElementById(_timerName).style.height = _currentValue2+'px';
				}

				if(Math.abs(_currentValue - _targetValue) < 0.01 ) {
					clearTimeout(_tweenTimer);
					if( _targetValue == 0 ) {
		                // _target.dispatchEvent(new Event('complete'));
		                U.triggerEvent(_target, 'complete');
					}
				} else {
					_tweenTimer = setTimeout(function(){fadeTween()}, 20);
				}
				_timerCount++;
	        } else { 
	        	clearTimeout(_tweenTimer);
				if( _targetValue == 0 ) {
					try {
						if(_target.parentElement) {
				            _target.parentElement.removeChild(_target);
				        } else if (_target.parentNode) {
				            _target.parentNode.removeChild(_target);
				        } else {
				        	_target.parent.removeChild(_target);
				        	// document.getElementById('web_nateon_notice').removeChild(_target);
				        }
					} catch(err) {}
				} else {
					document.getElementById(_timerName).style.opacity = 1;
				}
	        }
		}

		function stop() {
			clearTimeout(_tweenTimer);
		}
		return {
			getName : function() { return _timerName; }, // public getter
			setName : function(value) { _timerName = value; }, // public setter
			slideUp: slideUp,
			fade: fade,
			stop: stop
		}
	};

	var U = Utils;
	var SearchKeyword = (function(sk, window, undefined){
		var _position = 0;
		var _rankH = 22;
		var _count = 1;
		var _tween = new Tween();
		var _timer;
		var _timerCount = 1;
		var _onceTimer;

		var ranKDIV;
		var rankOL;
		var isOver = false;

		var init = function() {
			// console.log('SearchKeyword init');
			//load();
		};

		var load = function() {
			window.RSKS = {};
			RSKS.Init = onDataLoad;
			U.loadFile(SETTING.dataURL, 'js');
		};

		var onDataLoad = function() {
			// console.log('SearchKeyword onDataLoad');

			var rankData = (new Function("return " + arrHotRecent))();
			ranKDIV = document.getElementById(SETTING.target);
			var rankHtml = '<h3 class="nHide">실시간 검색어<span>beta</span></h3><div class="kwd_list"><ol>';
				rankHtml += makeList(rankData);
				rankHtml += '</ol></div>';
			ranKDIV.innerHTML = rankHtml;

			rankOL = ranKDIV.getElementsByTagName('OL')[0];
			U.addEvent(rankOL, 'complete', function(){ 
				// console.log('complete '+_count);
				if(_count > SETTING.maxList+1) {
					_position = 0;
					_count = 2;
					rankOL.style.top = '0px';
				}
			});
			
			ranKDIV.onmouseenter = function(event) { //console.log('onmouseenter');
				enter();
				ranKDIV.getElementsByTagName('LI')[_count-2].className += ' on';
			};

			ranKDIV.onmouseleave = function(event) { //console.log('onmouseleave');
				leave();
			};
			run();
		};

		var enter = function(){
			stop();
			// console.log(_count-1+" mouseover "+event.target.nodeName+" "+event.currentTarget.nodeName);
			ranKDIV.className = SETTING.overModeClass;
			ranKDIV.getElementsByTagName('H3')[0].className = '';
			ranKDIV.getElementsByTagName('OL')[0].style.top = '0px';
			rankOL.style.height = '220px';
			_position = 0;
			// _count = 1;
		};

		var out = function(event) { 
			if (event.keyCode==9) {  //console.log('out'+event.keyCode);
				setNextFocus(9, 'linkMail');
		        leave();
		    }
		};

		var leave = function(){
			// console.log(_count-1+" mouseout "+event.target.nodeName+" "+event.currentTarget.nodeName); 
			ranKDIV.className = SETTING.normalModeClass;
			ranKDIV.getElementsByTagName('H3')[0].className = 'nHide';
			rankOL.style.height = '280px';
			_position = getPosition(_count-1); 
			rankOL.style.top = _position+'px';
			for (var $i = 0; $i < 10; $i++) {
				ranKDIV.getElementsByTagName('LI')[$i].className = (ranKDIV.getElementsByTagName('LI')[$i].className).replace(' on', '');
			}
			run();
		};

		var setNextFocus = function(keyCode, focusTargetId) {
			if(event.keyCode==keyCode){
				event.preventDefault();
				document.getElementById(focusTargetId).focus(); 
				return false;
			}
		};

		var run = function() { // console.log('run '+_timerCount);
			if(_timerCount > 0) {
				var _prePosition = _position;
				_position = getPosition(_count);  //console.log(_count+' '+ _position);
				_tween.slideUp(rankOL, _prePosition, _position);

				_count = _count + 1;
			}
			_timer = setTimeout(function(){run()}, SETTING.rollingTime * 1000);
			_timerCount = _timerCount + 1;
		};

		var stop = function() {
			clearTimeout(_timer);
			_tween.stop();
			_timerCount = 0;
		};

		var getPosition = function(_count) {
			return ((es.Browser.IE7) ? _rankH+0 : _rankH ) * (_count-1) * -1; // console.log(_count);
		};
		
		function isHttpsProtocal() {
			var isHttps 	= true;
			
			try {		
				var arrAgent 	= ['windows nt 3', 'windows nt 4', 'windows nt 5', 'msie 4', 'msie 5', 'msie 6'];
		    	var clientAgent = navigator.userAgent.toLowerCase();
				
			    for (var i = 0; i < arrAgent.length; i++) {
			        if (clientAgent.indexOf(arrAgent[i]) > -1) {
			        	isHttps = false;
			        	break;
			        }
			    }
			} catch (e) {
				isHttps = true;
		    }
			
			return isHttps;
		};

		function makeList($data){ 
			var _text = '';
			var searchUrl 	= ((!isHttpsProtocal()) ? 'http://' : 'https://') + 'search.daum.net/nate?w=tot&amp;q=';
			for (var $i = 0; $i < 10; $i++) {
				var $val = $data[$i]; // console.log($val);
				var num = parseInt($val[0]) == SETTING.maxList ? '10' : '0' + $val[0];
				if($i < 9) _text += '<li class="rank'+ num +'"><p><span class="nHide">'+ $val[0] +'위/span><a onfocus="rollingNowPopularKeyword.enter();" href="' + searchUrl + escape($val[1]) +'" title="'+ $val[1] +'" onmousedown="NateTextGNB.clickStat(\'NCS01\');">'+ $val[1] +'</a></p></li>';
				else if($i == 9) _text += '<li class="rank'+ num +'"><p><span class="nHide">'+ $val[0] +'위/span><a onkeydown="rollingNowPopularKeyword.out(event);" href="' + searchUrl + escape($val[1]) +'" title="'+ $val[1] +'" onmousedown="NateTextGNB.clickStat(\'NCS01\');">'+ $val[1] +'</a></p></li>';
			}
			_text = _text + _text;
			return _text;
		};

		return {
			init : init,
			stop : stop,
			enter: enter,
			out: out,
			setNextFocus: setNextFocus
		}
	})(window.SearchKeyword = window.SearchKeyword || {}, window);
	U.contentLoaded(window, function() { SearchKeyword.init(); });
	root['rollingNowPopularKeywordUtlis'] = U;
	root['rollingNowPopularKeywordTween'] = Tween;
	root['rollingNowPopularKeyword'] = SearchKeyword;
})(window);