function draw_ndr(cp_url, br, ref, ref4) {
	var statimg = document.createElement("img");
	document.domain = 'nate.com';
	var param1 = 'n04';
	var param2 = '';
	var param3 = '';
	var param4 = (ref4 === undefined) ? '' : ref4;
	var date = new Date();

	if (typeof window['GetCookie'] === 'undefined') {
		GetCookie = function(name,escape){ 
		    var cname = name + "=";               
		    var dc = document.cookie;             
		 
		    if (dc.length > 0) {              
		     begin = dc.indexOf(cname);       
		        
		        if (begin != -1) {           
		         begin += cname.length;       
		         end = dc.indexOf(";", begin);
		 
		         if (end == -1) end = dc.length;
					if ( escape != null ) {
						return dc.substring(begin, end);
					} else {
						return unescape(dc.substring(begin, end));
					}
		        } 
		    }
		    return "";
		}
	}
	var u	= encodeURIComponent(GetCookie('UD2'));
	var l	= encodeURIComponent(GetCookie('ndr'));
	var p	= encodeURIComponent(GetCookie('pcid'));
	var u3	= encodeURIComponent(GetCookie('UD3'));
	var l3	= encodeURIComponent(GetCookie('ndrn'));
	
	if ( (/[&?]f=/).test(document.referrer) ) {
		if( (param4 = (/[&?]f=[^&]*/).exec(document.referrer)) != null) {
			param4 = param4[0];
			param4 = param4.replace(/[&?]f=/, '');
		}
	}

	if ( param4 == '' ) {
		// 이전 페이지에서 location.href로 이동한 경우엔 체크가 불가능합니다.
		// 회피 방법은 http://stackoverflow.com/questions/1890532/ie-has-empty-document-referrer-after-a-location-replace
		// 에 명시되어 있으나 이전 페이지의 모든 location.href 이동에 작업해 줘야 합니다.
		param4 = document.referrer;
		param4 = param4.replace(/(http:|https:|android-app:)\/\//, '');
		param4 = param4.replace(/\/.*/, '');
	}
	
	sUrl = document.location.href;
	if ( (/\/view\//).test(sUrl)  ) {
		var arrParam	= sUrl.split('/');
		var arrCnt		= arrParam.length-1;
		param3 = arrParam[arrCnt];
		
		if ( param3.indexOf("?") != -1 ) {
			var arrParam3	= param3.split('?');
			param3 = arrParam3[0];
		}
	}
	
	if(ref == 'view') {
		statimg.id = 'ndrNews';
	} else {
		statimg.id = 'ndr';
	}
	var statimgsrc =  cp_url ;
	if ( param1 || param2 || param3 || param4 || br  || u || l || p || u3 || l3 ) statimgsrc += '??';
	if ( param1 ) {	statimgsrc += 'ndrparam1=' + param1; }	else { statimgsrc += 'ndrparam1=' }
	if ( param2 ) { statimgsrc += '&ndrparam2=' + param2; } else { statimgsrc += '&ndrparam2=' }
	if ( param3 ) { statimgsrc += '&ndrparam3=' + param3; } else { statimgsrc += '&ndrparam3=' }
	if ( param4 ) { statimgsrc += '&ndrparam4=' + param4; } else { statimgsrc += '&ndrparam4=' }
	if ( br )	  {	statimgsrc += '&ndrbr=' + br; } 		else { statimgsrc += '&ndrbr='  }
	if ( u3 )	  {	statimgsrc += '&ndru3=' + u3;} 			else { statimgsrc += '&ndru3='}
	if ( l3 )	  {	statimgsrc += '&ndrl3=' + l3;} 			else { statimgsrc += '&ndrl3=' }

	statimgsrc += ']&temp=' + date.getTime();
	statimg.width = '0';
	statimg.height = '0';	
	statimg.alt = ' ';
	statimg.src = statimgsrc;
	statimg.cpurl = cp_url + '/';
	statimg.style.position = 'absolute';
	statimg.style.left = '0';
	statimg.style.bottom = '0';
	statimg.style.display = 'none';
	
	try {
		document.body.appendChild(statimg);
	} catch(e) {
		document.body.appendChild(statimg);
	}
	
	var test_statimgsrc =  statimg.src;
	if (test_statimgsrc.indexOf("news_ndr.nate.com/popup/ent/") >= 0 ) {
		test_statimgsrc = test_statimgsrc.replace("news_ndr.nate.com/popup/ent/", "news_ndr.nate.com/test/popup/ent/");

		if(test_statimgsrc.substring(0,8) == "https://") {
			return;
		}
		
		if(test_statimgsrc.substring(0,2) == "//")
			test_statimgsrc = "https:" + test_statimgsrc; 

		if(test_statimgsrc.substring(0,7) == "http://")
			test_statimgsrc = test_statimgsrc.replace("http://", "https://");

		i = new Image();
		i.src = test_statimgsrc;
	}	
}

function ndrclickwithid(pndrregionid, pndrpageid) {
        if ( pndrregionid == '' || pndrregionid == undefined ) {
                return;
        }

        var statClick  = "click_ndr.nate.com/??ndrpageid=" + pndrpageid  + "&ndrregionid=" + pndrregionid;
        var stamp=new Date().getTime();

        i = new Image();
        i.src = "//statclick.nate.com/stat/statclick.tiff?cp_url=[" + statClick + "]&r="+stamp;
}

function ndrclick(pndrregionid) {

	if ( pndrregionid == '' || pndrregionid == undefined ) {
		return;
	}

	var statClick  = "click_ndr.nate.com/??ndrpageid=NN1&ndrregionid=" + pndrregionid;
	var stamp=new Date().getTime();

	i = new Image();
	i.src = "//statclick.nate.com/stat/statclick.tiff?cp_url=[" + statClick + "]&r="+stamp;
}

function ndrclick2(pndrregionid) {

	if ( pndrregionid == '' || pndrregionid == undefined ) {
		return;
	}

	var statClick  = "click_ndr.nate.com/??ndrpageid=NN22&ndrregionid=" + pndrregionid;
	var stamp=new Date().getTime();

	i = new Image();
	i.src = "//statclick.nate.com/stat/statclick.tiff?cp_url=[" + statClick + "]&r="+stamp;
}

function spondrclick(ndrurl) {
	i = new Image();
	i.src = "//stat.nate.com/stat/stat.tiff?cp_url=[sports_ndr.news.nate.com/" + ndrurl + "/]";
}

function callolap(code) {

	if ( code == '' || code == undefined ) {
		return;
	}

	var olapUrl  = "news_ndr.nate.com" + code;
	i = new Image();
	i.src = "//stat.nate.com/stat/stat.tiff?cp_url=[" + olapUrl + "]";
	i.alt = 'olap';
}
