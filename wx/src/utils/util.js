
function getCurrentTime() {
  var keep = '';
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  var rand = Math.round(Math.random() * 899 + 100);
  keep = y + '' + m + '' + d + '' + h + '' + f + '' + s;
  return keep; //20160614134947
}

/*
函数：格式化日期
参数：formatStr-格式化字符串
d：将日显示为不带前导零的数字，如1
dd：将日显示为带前导零的数字，如01
ddd：将日显示为缩写形式，如Sun
dddd：将日显示为全名，如Sunday
M：将月份显示为不带前导零的数字，如一月显示为1
MM：将月份显示为带前导零的数字，如01
MMM：将月份显示为缩写形式，如Jan
MMMM：将月份显示为完整月份名，如January
yy：以两位数字格式显示年份
yyyy：以四位数字格式显示年份
h：使用12小时制将小时显示为不带前导零的数字，注意||的用法
hh：使用12小时制将小时显示为带前导零的数字
H：使用24小时制将小时显示为不带前导零的数字
HH：使用24小时制将小时显示为带前导零的数字
m：将分钟显示为不带前导零的数字
mm：将分钟显示为带前导零的数字
s：将秒显示为不带前导零的数字
ss：将秒显示为带前导零的数字
l：将毫秒显示为不带前导零的数字
ll：将毫秒显示为带前导零的数字
tt：显示am/pm
TT：显示AM/PM
返回：格式化后的日期
*/
function format (formatStr,dates) {
  var date = dates;
  /*
  函数：填充0字符
  参数：value-需要填充的字符串, length-总长度
  返回：填充后的字符串
  new Date().format("yyyy-MM-dd hh:mm:ss")
  */
  var zeroize = function (value, length) {
    if (!length) {
      length = 2;
    }
    value = new String(value);
    for (var i = 0, zeros = ''; i < (length - value.length); i++) {
      zeros += '0';
    }
    return zeros + value;
  };
  return formatStr.replace(/"[^"]*"|'[^']*'|\b(?:d{1,5}|M{1,4}|yy(?:yy)?|([hHmstT])\1?|[lLZ])\b/g, function($0) {
    switch ($0) {
      case 'd': return date.getDate();
      case 'dd': return zeroize(date.getDate());
      case 'ddd': return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][date.getDay()];
      case 'dddd': return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
      case 'ddddd': return ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][date.getDay()];
      case 'dddddd': return ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][date.getDay()];
      case 'M': return date.getMonth() + 1;
      case 'MM': return zeroize(date.getMonth() + 1);
      case 'MMM': return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
      case 'MMMM': return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
      case 'yy': return new String(date.getFullYear()).substr(2);
      case 'yyyy': return date.getFullYear();
      case 'h': return date.getHours() % 12 || 12;
      case 'hh': return zeroize(date.getHours() % 12 || 12);
      case 'H': return date.getHours();
      case 'HH': return zeroize(date.getHours());
      case 'm': return date.getMinutes();
      case 'mm': return zeroize(date.getMinutes());
      case 's': return date.getSeconds();
      case 'ss': return zeroize(date.getSeconds());
      case 'l': return date.getMilliseconds();
      case 'll': return zeroize(date.getMilliseconds());
      case 'tt': return date.getHours() < 12 ? 'am' : 'pm';
      case 'TT': return date.getHours() < 12 ? 'AM' : 'PM';
    }
  });
}

function objLength(input) {
  var type = toString(input);
  var length = 0;
  if (type != "[object Object]") {
    //throw "输入必须为对象{}！"
  } else {
    for (var key in input) {
      if (key != "number") {
        length++;
      }

    }
  }
  return length;
}
//验证是否是手机号码
function vailPhone(number) {
  let flag = false;
  let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
  if (number.length != 11) {
    flag = flag;
  }else if (!myreg.test(number)) {
    flag = flag;
  }else{
    flag = true;
  }
  return flag;
}
//验证是否西班牙手机(6开头 9位数)
function ifSpanish(number) {
  let flag = false;
  let myreg = /^([6|7|9]{1}(\d+){8})$/;
  if (number.length != 9) {
    flag = flag;
  } else if (!myreg.test(number)) {
    flag = flag;
  } else {
    flag = true;
  }
  return flag;
}
//浮点型除法
function div(a, b) {
  var c, d, e = 0,
    f = 0;
  try {
    e = a.toString().split(".")[1].length;
  } catch (g) { }
  try {
    f = b.toString().split(".")[1].length;
  } catch (g) { }
  return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
}

//浮点型加法函数
function accAdd(arg1, arg2) {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return ((arg1 * m + arg2 * m) / m).toFixed(2);
}

//浮点型乘法
function mul(a, b) {
  var c = 0,
    d = a.toString(),
    e = b.toString();
  try {
    c += d.split(".")[1].length;
  } catch (f) { }
  try {
    c += e.split(".")[1].length;
  } catch (f) { }
  return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}


//浮点型减法函数
function accSub(arg1,arg2){
  var r1,r2,m,n;
  try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
  try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
  m=Math.pow(10,Math.max(r1,r2));
  //last modify by deeka
  //动态控制精度长度
  n=(r1>=r2)?r1:r2;
  return ((arg1*m-arg2*m)/m).toFixed(n);
}


// 遍历对象属性和值
function displayProp(obj) {
  var names = "";
  for (var name in obj) {
    names += name + obj[name];
  }
  return names;
}
// 去除字符串所有空格
function sTrim(text) {
  return text.replace(/\s/ig, '')
}
//去除所有:
function replaceMaohao(txt) {
  return txt.replace(/\:/ig, '')
}
//转换星星分数
function convertStarArray(score) {
  //1 全星,0 空星,2半星
  var arr = []
  for (var i = 1; i <= 5; i++) {
    if (score >= i) {
      arr.push(1)
    } else if (score > i-1 && score < i + 1) {
      arr.push(2)
    } else {
      arr.push(0)
    }
  }
  return arr
}

//分享
function sharePage(url) {

}

// 倒计时
function countdown(start_time, end_time) {
  var start_time = start_time;//开始时间
  var end_time = end_time;//结束时间
  var usedTime = end_time - start_time;  //两个时间戳相差的毫秒数
  var hours = Math.floor(usedTime / ( 3600 * 1000));//相差的小时数

  var leave1 = usedTime % ( 3600 * 1000);    //计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave1 / (60 * 1000));   //计算出分钟数

  var leave2 = leave1 % (60 * 1000); //计算分钟后剩下的毫秒数
  var s = Math.floor(leave2 / 1000);   //计算相差秒数

  return {h: hours, minutes: minutes, s: s };
}

function isArray(obj) {
  return (typeof obj==='object')&&obj.constructor==Array;
}
function isString(obj) {
  return (typeof str==='string')&&str.constructor==String;
}
function isNumber(obj) {
  return (typeof obj==='number')&&obj.constructor==Number;
}
function isDate(obj) {
  return (typeof obj==='object')&&obj.constructor==Date;
}
function isFunction(obj){
  return (typeof obj==='function')&&obj.constructor==Function;
}
function isObject(obj){
  return (typeof obj==='object')&&obj.constructor==Object;
}

function isEmptyOrNull(obj,value){
  if(obj === ''){
    return false
  }else if(obj === null){
    return false
  }else if(obj === undefined){
    return false
  }else{
    return value
  }

  // if(isString(obj)){
  //
  // }
  //
  // if(isNumber(obj)){
  //
  // }
  //
  // if(isDate(obj)){
  //
  // }
  //
  // if(isFunction(obj)){
  //
  // }
  //
  // if(isArray(obj)){
  //
  // }
  //
  // if(obj === ''){
  //
  // }
  //
  // if(obj === ''){
  //
  // }
  // console.log(isString(obj))
  // console.log(isNumber(obj))
  // console.log(isDate(obj))
  // console.log(isFunction(obj))
  // console.log(isObject(obj))
  // console.log(isArray(obj))
}


module.exports = {
  getCurrentTime: getCurrentTime,
  format:format,
  objLength: objLength,
  displayProp: displayProp,
  sTrim: sTrim,
  replaceMaohao: replaceMaohao,
  vailPhone: vailPhone,
  ifSpanish: ifSpanish,
  div: div,
  mul: mul,
  accAdd: accAdd,
  accSub:accSub,
  convertStarArray: convertStarArray,
  countdown: countdown,
  isEmptyOrNull:isEmptyOrNull
};
