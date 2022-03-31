(function OSVersion() {
  var userAgent = navigator.userAgent;
  
  var browserInfo = {};
  var browserMatch = {
    IE: /(?:MSIE |Trident\/.*; rv:)(\d+)/,
    IOS: /(?:iPhone|iPad).*(OS (\d+\_*){2,3})/,
    AOS: /(?:Android )(\d+\.?){2,3}/,
  };
  
  var exception = {
    IE: ['6', '7', '8', '9'],
    IOS: [''],
    AOS: [''],
  };
  var isException = null;
  
  for (browser in browserMatch) {
    var match = userAgent.match(browserMatch[browser]);

    if (match !== null) {
      var name = match[0].split(' ')[0];

      switch(true) {
        case (name === 'Trident/7.0;' || name === 'MSIE'):
          browserInfo.name = 'IE';
          browserInfo.Version = match[1];
          break;
        case name === 'Android' :
          browserInfo.name = 'AOS';
          browserInfo.Version = match[0].split(' ')[1];
          break;
        case (name === 'iPhone;' || name === 'iPad;') :
          browserInfo.name = 'IOS';
          browserInfo.Version = match[1].split(' ')[1];
          break;
      }

      for (target in exception) {
        if (browserInfo.name === target) isException = exception[target].every(function(exc) { return exc !== browserInfo.Version });
      }

      if (!isException && isException !== null) return OSUpdateInfo();
    }
  }

  return !isException;

  function OSUpdateInfo() {
    var contents = document.getElementById('contents');
    contents.setAttribute('class', 'unsupported-browser');
    contents.innerHTML = '';
    
    var browserInfo = document.createElement('div');
    browserInfo.setAttribute('class', 'browserInfo');

    var browserInfoInner = document.createElement('div');
    browserInfoInner.setAttribute('class', 'inner');

    var title = document.createElement('h2');
    title.innerText = '지원하지 않는 브라우저로 접근하셨습니다.'

    var context = document.createElement('p');
    context.innerText = 'Internet Explorer 10 이상으로 업데이트 해주시거나, 최신 버전의 Chrome과 Firefox에서 정상적으로 이용이 가능합니다.';
    
    var subContext = document.createElement('span');
    subContext.innerText = 'PC환경에 따라 OS (운영 체제)나 브라우저 업데이트가 불가능한 경우, 모바일 단말에서 서비스를 이용해 주시기 바랍니다.'

    var links = document.createElement('div');
    var linkForIE = document.createElement('a');
    linkForIE.setAttribute('href', 'https://support.microsoft.com/ko-kr/help/17621/internet-explorer-downloads');
    linkForIE.setAttribute('target', '_blank');
    linkForIE.setAttribute('title', '새창 열림');
    linkForIE.setAttribute('role', 'noopener');
    linkForIE.innerText = 'Internet Explorer 다운로드 센터';

    var linkForChrome = document.createElement('a');
    linkForChrome.setAttribute('href', 'https://www.google.com/intl/ko/chrome/')
    linkForChrome.setAttribute('target', '_blank');
    linkForChrome.setAttribute('title', '새창 열림');
    linkForChrome.setAttribute('role', 'noopener');
    linkForChrome.innerText = 'Chrome 웹 브라우저';

    var linkForFF = document.createElement('a')
    linkForFF.setAttribute('href', 'https://www.mozilla.org/ko/firefox/new/')
    linkForFF.setAttribute('target', '_blank');
    linkForFF.setAttribute('title', '새창 열림');
    linkForFF.setAttribute('role', 'noopener');
    linkForFF.innerText = 'Firefox 웹 브라우저';

    context.appendChild(subContext);

    links.appendChild(linkForIE);
    links.appendChild(linkForChrome);
    links.appendChild(linkForFF);

    browserInfoInner.appendChild(title);
    browserInfoInner.appendChild(context);
    browserInfoInner.appendChild(links);

    browserInfo.appendChild(browserInfoInner);
    
    contents.appendChild(browserInfo);
    contents.removeAttribute('class');
  }
})();
