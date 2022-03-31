var utils = {
  _ownKeys: function(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });

      keys.push.apply(keys, symbols);
    }
    return keys;
  },
  _objectSpread: function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        utils._ownKeys(Object(source), true).forEach(function (key) {
          utils._defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        utils._ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  },
  _defineProperty: function(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  },
  debounce: function (func, wait, immediate) {
    var timeout;

    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },
  getRandomIntInclusive: function (min, max, dec) {
    min = Math.ceil(min);
    max = Math.floor(max);

    if (!dec) return Math.floor(Math.random() * (max - min + 1)) + min;
    else return Math.random() * 1;
  },
  shuffleArray: function(array) {
    var result = [].concat(array);

    for (var i = result.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = result[i];
      result[i] = result[j];
      result[j] = temp;
    }

    return result;
  },
  dateFormat: function(convertTime, locale) {
    locale = locale || 'Asia/Seoul';
    return moment(convertTime).tz(locale).format();
  },
  isToday: function (time1, time2) {
    return time1.split('T')[0] === time2.split('T')[0];
  },
  convertTime: function(convertTime, format) {
    var time = new Date(convertTime);
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var date = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();

    if (date <= 9) date = '0' + date;
    if (month <= 9) month = '0' + month;
    if (hours <= 9) hours = '0' + hours;
    if (minutes <= 9) minutes = '0' + minutes;
    
    switch(format) {
      case 'HM' :
        return hours + ' : ' + minutes;
      case 'YMD' :
        return year +'-'+ month +'-'+ date;
      case 'YMDH' :
        return year +'-'+ month +'-'+ date +' '+ hours +':00:00';
      case 'YMDHM' :
        return year +'-'+ month +'-'+ date +' '+ hours +':'+ minutes +':00';
      case 'STANDARD' :
        return year +'.'+ month +'.'+ date +' '+ hours +':' + minutes +' ����' ;
    }
  },
  varOperator: function(operator, param1, param2) {
    switch(operator) {
      case 'prev':
        return param1 - param2;
      case 'next':
        return param1 + param2;
    }
  },
  RGBAToRGB: function(rgba) {
    var sep = rgba.indexOf(',') > -1 ? ',' : ' ';
    rgba = rgba.substr(5).split(')')[0].split(',');
                  
      var r = Math.round(((1 - rgba[3]) * 255) + (rgba[3] * rgba[0]));
      var g = Math.round(((1 - rgba[3]) * 255) + (rgba[3] * rgba[1]));
      var b = Math.round(((1 - rgba[3]) * 255) + (rgba[3] * rgba[2]));
  
      return 'rgb('+ r +','+g+','+b+')';
  },
  withCommas: function(v) {
    return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  ellipsisText: function(target, etc) {
    var targetText = target.innerHTML.split(' ');

    while (target.scrollHeight > target.offsetHeight) {
      targetText.pop();
      target.innerHTML = targetText.join(' ') + (etc || '...');
    }
  },
  CopyUrlToClipboard: function(target) {
	  var shareLinkUrl = document.querySelector(target);
    shareLinkUrl.select();
	  document.execCommand('copy');
    shareLinkUrl.blur();
    
    alert('��ũ�� Ŭ�����忡 �����Ͽ����ϴ�.'); 
  }
}
