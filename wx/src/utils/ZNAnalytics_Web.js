/**
 * @file ZNAnalytics
 * @author ZhangMing
 * @createDate 2018-09-20 09:40:11
 * @desc 前端信息采集工具
 * @example
 var ZnAnalytics = new ZnAnalytics();
 ZnAnalytics.setAppId(1); // 赋值
 ZnAnalytics.getAppId(); //结果1 取值
 ZnAnalytics.sendAnalytics(function(res){
        // res 为收集的所有信息
        // 需要请求接口发送
    })
 */
;(function (undefined) {
    "use strict";
    let _global;
    // 插件构造函数 - 返回数组结构
    function ZnAnalytics(opt) {
      let that = this;
      if(window){
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/wechatdevtools /i) == 'wechatdevtools'  ){    //判断是否是微信环境
          //微信环境
          wx.miniProgram.getEnv(function(res) {
            if (res.miniprogram) {
              // 小程序环境下逻辑
              this._initial({
                appId: null, //String， 区分是哪个产品使用、商户端、客户端等
                uid: null,  //String 用户id
                openId: null,  //String  用户 wx id
                la: null, //double， 纬度
                lo: null, //double，经度
                os: null, // 系统版本号
                dev: null,//String， 机型 & 电脑型号
                sid: null,// String，session id Token
                mac: null, //String，mac地址
                ts: null,//发送的时间戳
                events: [],  //Array，事件信息-数组类型（event_id、事件名称、ts、请求路径、请求参数、请求结果） {event_id: 'order_pay',price: 1234.0, ts: 1233455667//事件的时间戳},
                url: null,//页面url，
                pageTitle: null,// 页面标题，
                referrer: null,// 来源url、referrer,上一跳url、referrer （referrer）
                px: null,// 分辨率，
                winWidth: null,// 屏幕宽度，
                winHeight: null,// 屏幕高度，
                enterTime: null,// 停留时间（离开/进入时间）
                leaveTime: null,// 停留时间（离开/进入时间）
                platform: 'wx', //web or wx or H5
                errors: [], // 错误信息收集
              });
            }else {
              //非小程序环境下逻辑
              this._initial({
                appId: null, //String， 区分是哪个产品使用、商户端、客户端等
                uid: null,  //String 用户id
                la: null, //double， 纬度
                lo: null, //double，经度
                os: null, // 系统版本号
                dev: null,//String， 机型 & 电脑型号
                sid: null,// String，session id Token
                mac: null, //String，mac地址
                ts: null,//发送的时间戳
                events: [],  //Array，事件信息-数组类型（event_id、事件名称、ts、请求路径、请求参数、请求结果） {event_id: 'order_pay',price: 1234.0, ts: 1233455667//事件的时间戳},
                url: null,//页面url，
                pageTitle: null,// 页面标题，
                referrer: null,// 来源url、referrer,上一跳url、referrer （referrer）
                px: null,// 分辨率，
                winWidth: null,// 屏幕宽度，
                winHeight: null,// 屏幕高度，
                enterTime: null,// 停留时间（离开/进入时间）
                leaveTime: null,// 停留时间（离开/进入时间）
                platform: 'mobile', //web or wx or H5
                errors: [], // 错误信息收集
              });
            }
          })
        }else{
          if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //移动端
            // that.setPlatform("mobile");
            this._initial({
              appId: null, //String， 区分是哪个产品使用、商户端、客户端等
              uid: null,  //String 用户id
              la: null, //double， 纬度
              lo: null, //double，经度
              os: null, // 系统版本号
              dev: null,//String， 机型 & 电脑型号
              sid: null,// String，session id Token
              mac: null, //String，mac地址
              ts: null,//发送的时间戳
              events: [],  //Array，事件信息-数组类型（event_id、事件名称、ts、请求路径、请求参数、请求结果） {event_id: 'order_pay',price: 1234.0, ts: 1233455667//事件的时间戳},
              url: null,//页面url，
              pageTitle: null,// 页面标题，
              referrer: null,// 来源url、referrer,上一跳url、referrer （referrer）
              px: null,// 分辨率，
              winWidth: null,// 屏幕宽度，
              winHeight: null,// 屏幕高度，
              enterTime: null,// 停留时间（离开/进入时间）
              leaveTime: null,// 停留时间（离开/进入时间）
              platform: 'mobile', //web or wx or H5
              errors: [], // 错误信息收集
            });
          }else{
            // that.setPlatform('web');
            this._initial({
              appId: null, //String， 区分是哪个产品使用、商户端、客户端等
              uid: null,  //String 用户id
              la: null, //double， 纬度
              lo: null, //double，经度
              os: null, // 系统版本号
              dev: null,//String， 机型 & 电脑型号
              sid: null,// String，session id Token
              mac: null, //String，mac地址
              ts: null,//发送的时间戳
              events: [],  //Array，事件信息-数组类型（event_id、事件名称、ts、请求路径、请求参数、请求结果） {event_id: 'order_pay',price: 1234.0, ts: 1233455667//事件的时间戳},
              url: null,//页面url，
              pageTitle: null,// 页面标题，
              referrer: null,// 来源url、referrer,上一跳url、referrer （referrer）
              px: null,// 分辨率，
              winWidth: null,// 屏幕宽度，
              winHeight: null,// 屏幕高度，
              enterTime: null,// 停留时间（离开/进入时间）
              leaveTime: null,// 停留时间（离开/进入时间）
              platform: 'web', //web or wx or H5
              errors: [], // 错误信息收集
            });
          }
        }
      }else{
        this._initial({
          appId: null, //String， 区分是哪个产品使用、商户端、客户端等
          uid: null,  //String 用户id
          la: null, //double， 纬度
          lo: null, //double，经度
          os: null, // 系统版本号
          dev: null,//String， 机型 & 电脑型号
          sid: null,// String，session id Token
          mac: null, //String，mac地址
          ts: null,//发送的时间戳
          events: [],  //Array，事件信息-数组类型（event_id、事件名称、ts、请求路径、请求参数、请求结果） {event_id: 'order_pay',price: 1234.0, ts: 1233455667//事件的时间戳},
          url: null,//页面url，
          pageTitle: null,// 页面标题，
          referrer: null,// 来源url、referrer,上一跳url、referrer （referrer）
          px: null,// 分辨率，
          winWidth: null,// 屏幕宽度，
          winHeight: null,// 屏幕高度，
          enterTime: null,// 停留时间（离开/进入时间）
          leaveTime: null,// 停留时间（离开/进入时间）
          platform: 'wx', //web or wx or H5
          errors: [], // 错误信息收集
        });
      }
      start(this);

      console.log(that)
    }

    function extend(o, n, override) {
        for (let key in n) {
            if (n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)) {
                o[key] = n[key];
            }
        }
        return o;
    }

    function start(_this) {
        let that = _this;
        let platform = that.getPlatform();
        if (platform === 'wx') {
          wx.getSystemInfo({
            success: function(res) {
              if(res.errMsg == 'getSystemInfo:ok'){
                that.setDev(res.brand+'_'+res.model+'_'+'微信版本号_'+res.version+'_System'+res.platform);
                that.setOs(res.system);
                that.setPx(res.pixelRatio);
                that.setWinWidth(res.screenWidth);
                that.setWinHeight(res.screenHeight);
              }
            }
          });

          wx.getLocation({
            // type:'wgs84',
            type:'gcj02',
            success: function(res) {
              if(res.errMsg == 'getLocation:ok'){
                that.setLa(res.latitude);
                that.setLo(res.longitude);
              }
            }
          });




        } else {
            let OsInfo = getOsInfo();
            let BrowerInfo = getBrowerInfo();
            that.setAppId('ZMS'); //暂无
            // that.setOs(OsInfo.version);
            that.setDev(OsInfo.name+'_Browser'+BrowerInfo.client.name+'_version:'+BrowerInfo.client.version+'_System'+OsInfo.version);
            that.setUrl({
                host: window.location.host, //返回url 的主机部分，例如：www.xxx.com
                hostname:window.location.hostname, //返回www.xxx.com
                href: window.location.href, //返回整个url字符串(在浏览器中就是完整的地址栏)，例如：www.xxx.com/index.php?class_id=3&id=2
                pathname:window.location.pathname, //返回/a/index.php或者/index.php
                protocol:window.location.protocol, //返回url 的协议部分，例如： http:，ftp:，maito:等等。
                port:window.location.port //url 的端口部分，如果采用默认的80端口，那么返回值并不是默认的80而是空字符
            });
            that.setPageTitle(window.document.title);
            that.setReferrer(window.document.referrer);
            that.setPx(screen.availWidth+'x'+screen.availHeight);
            that.setWinWidth(screen.width);
            that.setWinHeight(screen.height);
            that.setEnterTime(new Date().getTime());
        }
    }

    function getOsInfo() {
        var userAgent = navigator.userAgent.toLowerCase();
        var name = 'Unknown';
        var version = "Unknown";
        if (userAgent.indexOf("win") > -1) {
            name = "Windows";
            if (userAgent.indexOf("windows nt 5.0") > -1) {
                version = "Windows 2000";
            } else if (userAgent.indexOf("windows nt 5.1") > -1 || userAgent.indexOf("windows nt 5.2") > -1) {
                version = "Windows XP";
            } else if (userAgent.indexOf("windows nt 6.0") > -1) {
                version = "Windows Vista";
            } else if (userAgent.indexOf("windows nt 6.1") > -1 || userAgent.indexOf("windows 7") > -1) {
                version = "Windows 7";
            } else if (userAgent.indexOf("windows nt 6.2") > -1 || userAgent.indexOf("windows 8") > -1) {
                version = "Windows 8";
            } else if (userAgent.indexOf("windows nt 6.3") > -1) {
                version = "Windows 8.1";
            } else if (userAgent.indexOf("windows nt 6.2") > -1 || userAgent.indexOf("windows nt 10.0") > -1) {
                version = "Windows 10";
            } else {
                version = "Unknown";
            }
        } else if (userAgent.indexOf("iphone") > -1) {
            name = "Iphone";
        } else if (userAgent.indexOf("mac") > -1) {
            name = "Mac";
        } else if (userAgent.indexOf("x11") > -1 || userAgent.indexOf("unix") > -1 || userAgent.indexOf("sunname") > -1 || userAgent.indexOf("bsd") > -1) {
            name = "Unix";
        } else if (userAgent.indexOf("linux") > -1) {
            if (userAgent.indexOf("android") > -1) {
                name = "Android"
            } else {
                name = "Linux";
            }

        } else {
            name = "Unknown";
        }
        var os = new Object();
        os.name = name;
        os.version = version;
        return os;
        //document.write("系统：" + os.name + "版本:" + os.name)
    }

    function getBrowerInfo() {
        var Browser = Browser || (function (window) {
            var document = window.document,
                navigator = window.navigator,
                agent = navigator.userAgent.toLowerCase(),
                //IE8+支持.返回浏览器渲染当前文档所用的模式
                //IE6,IE7:undefined.IE8:8(兼容模式返回7).IE9:9(兼容模式返回7||8)
                //IE10:10(兼容模式7||8||9)
                IEMode = document.documentMode,
                //chorme
                chrome = window.chrome || false,
                System = {
                    //user-agent
                    agent: agent,
                    //是否为IE
                    isIE: /trident/.test(agent),
                    //Gecko内核
                    isGecko: agent.indexOf("gecko") > 0 && agent.indexOf("like gecko") < 0,
                    //webkit内核
                    isWebkit: agent.indexOf("webkit") > 0,
                    //是否为标准模式
                    isStrict: document.compatMode === "CSS1Compat",
                    //是否支持subtitle
                    supportSubTitle: function () {
                        return "track" in document.createElement("track");
                    },
                    //是否支持scoped
                    supportScope: function () {
                        return "scoped" in document.createElement("style");
                    },

                    //获取IE的版本号
                    ieVersion: function () {
                        var rMsie = /(msie\s|trident.*rv:)([\w.]+)/;
                        var ma = window.navigator.userAgent.toLowerCase()
                        var match = rMsie.exec(ma);
                        try {
                            return match[2];
                        } catch (e) {
//									console.log("error");
                            return IEMode;
                        }
                    },
                    //Opera版本号
                    operaVersion: function () {
                        try {
                            if (window.opera) {
                                return agent.match(/opera.([\d.]+)/)[1];
                            } else if (agent.indexOf("opr") > 0) {
                                return agent.match(/opr\/([\d.]+)/)[1];
                            }
                        } catch (e) {
//									console.log("error");
                            return 0;
                        }
                    }
                };

            try {
                //浏览器类型(IE、Opera、Chrome、Safari、Firefox)
                System.type = System.isIE ? "IE" :
                    window.opera || (agent.indexOf("opr") > 0) ? "Opera" :
                        (agent.indexOf("chrome") > 0) ? "Chrome" :
                            //safari也提供了专门的判定方式
                            window.openDatabase ? "Safari" :
                                (agent.indexOf("firefox") > 0) ? "Firefox" :
                                    'unknow';

                //版本号
                System.version = (System.type === "IE") ? System.ieVersion() :
                    (System.type === "Firefox") ? agent.match(/firefox\/([\d.]+)/)[1] :
                        (System.type === "Chrome") ? agent.match(/chrome\/([\d.]+)/)[1] :
                            (System.type === "Opera") ? System.operaVersion() :
                                (System.type === "Safari") ? agent.match(/version\/([\d.]+)/)[1] :
                                    "0";

                //浏览器外壳
                System.shell = function () {

                    if (agent.indexOf("edge") > 0) {
                        System.version = agent.match(/edge\/([\d.]+)/)[1] || System.version;
                        return "edge浏览器";
                    }
                    //遨游浏览器
                    if (agent.indexOf("maxthon") > 0) {
                        System.version = agent.match(/maxthon\/([\d.]+)/)[1] || System.version;
                        return "傲游浏览器";
                    }
                    //QQ浏览器
                    if (agent.indexOf("qqbrowser") > 0) {
                        System.version = agent.match(/qqbrowser\/([\d.]+)/)[1] || System.version;
                        return "QQ浏览器";
                    }

                    //搜狗浏览器
                    if (agent.indexOf("se 2.x") > 0) {
                        return '搜狗浏览器';
                    }

                    //Chrome:也可以使用window.chrome && window.chrome.webstore判断
                    if (chrome && System.type !== "Opera") {
                        var external = window.external,
                            clientInfo = window.clientInformation,
                            //客户端语言:zh-cn,zh.360下面会返回undefined
                            clientLanguage = clientInfo.languages;

                        //猎豹浏览器:或者agent.indexOf("lbbrowser")>0
                        if (external && 'LiebaoGetVersion' in external) {
                            return '猎豹浏览器';
                        }
                        //百度浏览器
                        if (agent.indexOf("bidubrowser") > 0) {
                            System.version = agent.match(/bidubrowser\/([\d.]+)/)[1] ||
                                agent.match(/chrome\/([\d.]+)/)[1];
                            return "百度浏览器";
                        }
                        //360极速浏览器和360安全浏览器
                        if (System.supportSubTitle() && typeof clientLanguage === "undefined") {
                            //object.key()返回一个数组.包含可枚举属性和方法名称
                            var storeKeyLen = Object.keys(chrome.webstore).length,
                                v8Locale = "v8Locale" in window;
                            return storeKeyLen > 1 ? '360极速浏览器' : '360安全浏览器';
                        }
                        return "Chrome";
                    }
                    return System.type;
                };

                //浏览器名称(如果是壳浏览器,则返回壳名称)
                System.name = System.shell();
                //对版本号进行过滤过处理
                //	System.version = System.versionFilter(System.version);

            } catch (e) {
//						console.log(e.message);
            }
            return {
                client: System
            };

        })(window);
        if (Browser.client.name == undefined || Browser.client.name == "") {
            Browser.client.name = "Unknown";
            Browser.client.version = "Unknown";
        } else if (Browser.client.version == undefined) {
            Browser.client.version = "Unknown";
        }
//				document.write(Browser.client.name + " " + Browser.client.version);
        return Browser;
    }

    ZnAnalytics.prototype = {
        constructor: this,
        _initial: function (opt) {
            // 默认参数
            let def = {
                appId: null, //String， 区分是哪个产品使用、商户端、客户端等
                uid: null,  //String 用户id
                la: null, //double， 纬度
                lo: null, //double，经度
                os: null, // 系统版本号
                dev: null,//String， 机型 & 电脑型号
                sid: null,// String，session id Token
                mac: null, //String，mac地址
                ts: null,//发送的时间戳
                events: [],  //Array，事件信息-数组类型（event_id、事件名称、ts、请求路径、请求参数、请求结果） {event_id: 'order_pay',price: 1234.0, ts: 1233455667//事件的时间戳},
                url: null,//页面url，
                pageTitle: null,// 页面标题，
                referrer: null,// 来源url、referrer,上一跳url、referrer （referrer）
                px: null,// 分辨率，
                winWidth: null,// 屏幕宽度，
                winHeight: null,// 屏幕高度，
                enterTime: null,// 停留时间（离开/进入时间）
                leaveTime: null,// 停留时间（离开/进入时间）
                platform: null, //web or wx or H5
                errors: [], // 错误信息收集
            };
            this.def = extend(def, opt, true);
            this.getDef();

        },

        // 获取appid
        getAppId: function () {
            return this.def.appId;
        },

        // 设置appid
        setAppId: function (value, cb) {
            let oldValue = this.getAppId();
            this.def.appId = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.appId;
        },

        // 获取uid
        getUid: function () {
            return this.def.uid;
        },

        // 设置uid
        setUid: function (value, cb) {
            let oldValue = this.getUid();
            this.def.uid = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.uid;
        },

        // 获取openId
        getOpenId: function () {
            return this.def.openId;
        },

        // 设置openId
        setOpenId: function (value, cb) {
            let oldValue = this.getOpenId();
            this.def.openId = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.openId;
        },

        // 获取维度
        getLa: function () {
            return this.def.la;
        },

        // 设置维度
        setLa: function (value, cb) {
            let oldValue = this.getLa();
            this.def.la = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.la;
        },

        // 获取经度
        getLo: function () {
            return this.def.lo;
        },

        // 设置经度
        setLo: function (value, cb) {
            let oldValue = this.getLo();
            this.def.lo = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.lo;
        },

        // 获取os
        getOs: function () {
            return this.def.os;
        },

        // 设置os
        setOs: function (value, cb) {
            let oldValue = this.getOs();
            this.def.os = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.os;
        },

        // 获取dev
        getDev: function () {
            return this.def.dev;
        },

        // 设置dev
        setDev: function (value, cb) {
            let oldValue = this.getDev();
            this.def.dev = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.dev;
        },

        // 获取sid
        getSid: function () {
            return this.def.sid;
        },

        // 设置sid
        setSid: function (value, cb) {
            let oldValue = this.getSid();
            this.def.sid = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.sid;
        },

        // 获取Mac
        getMac: function () {
            return this.def.mac;
        },

        // 设置Mac
        setMac: function (value, cb) {
            let oldValue = this.getMac();
            this.def.mac = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.mac;
        },

        // 获取Ts
        getTs: function () {
            return this.def.ts;
        },

        // 设置Ts
        setTs: function (value, cb) {
            let oldValue = this.getTs();
            this.def.ts = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.ts;
        },

        // 获取Events
        getEvents: function () {
            return this.def.events;
        },

        // 设置Events
        setEvents: function (params, cb) {
            let oldArr = this.getEvents();
            let isEdit = false;
            oldArr.forEach(item=>{
              if(item.event_id == params.event_id){
                item = params;
                isEdit = true;
              }
            });
            if(!isEdit){
              this.def.events.push(params);
            }
            if (cb) {
                cb.call(this, oldArr, this.def.events)
            }
            this.setLocal();
            return this.def.events;
        },

        setEmptyEvents: function () {
          this.def.events = [];
          this.setLocal();
          return this.def.events;
        },

        // 获取index event数组中某个对象
        getEventByIndex(index) {
            let arr = this.getEvents();
            return arr[index]
        },

        // 设置index event数组中某个对象
        setEventByIndex(index, params) {
            let arr = this.getEvents();
            return arr[index] = params;
        },

        // 获取页面url
        getUrl: function () {
            return this.def.url;
        },

        // 设置页面url
        setUrl: function (value, cb) {
            let oldValue = this.getUrl();
            this.def.url = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.url;
        },

        // 获取页面标题
        getPageTitle: function () {
            return this.def.pageTitle;
        },

        // 设置页面标题
        setPageTitle: function (value, cb) {
            let oldValue = this.getPageTitle();
            this.def.pageTitle = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.pageTitle;
        },

        // 获取  来源url、referrer,上一跳url、referrer （referrer）
        getReferrer: function () {
            return this.def.referrer;
        },

        // 设置  来源url、referrer,上一跳url、referrer （referrer）
        setReferrer: function (value, cb) {
            let oldValue = this.getReferrer();
            this.def.referrer = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.referrer;
        },

        // 获取分辨率
        getPx: function () {
            return this.def.px;
        },

        // 设置分辨率
        setPx: function (value, cb) {
            let oldValue = this.getPx();
            this.def.px = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.px;
        },

        // 获取屏幕宽度
        getWinWidth: function () {
            return this.def.winWidth;
        },

        // 设置屏幕宽度
        setWinWidth: function (value, cb) {
            let oldValue = this.getWinWidth();
            this.def.winWidth = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.winWidth;
        },

        // 获取屏幕高度
        getWinHeight: function () {
            return this.def.winHeight;
        },

        // 设置屏幕高度
        setWinHeight: function (value, cb) {
            let oldValue = this.getWinHeight();
            this.def.winHeight = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.winHeight;
        },

        // 获取停留时间（离开/进入时间）
        getEnterTime: function () {
            return this.def.enterTime;
        },

        // 设置停留时间（离开/进入时间）
        setEnterTime: function (value, cb) {
            let oldValue = this.getEnterTime();
            this.def.enterTime = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.enterTime;
        },

        // 获取停留时间（离开/进入时间）
        getLeaveTime: function () {
            return this.def.leaveTime;
        },

        // 设置停留时间（离开/进入时间）
        setLeaveTime: function (value, cb) {
            let oldValue = this.getLeaveTime();
            this.def.leaveTime = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.leaveTime;
        },

        // 获取平台
        getPlatform: function () {
            return this.def.platform;
        },

        // 设置微信平台
        setPlatform: function (value, cb) {
            let oldValue = this.getPlatform();
            this.def.platform = value;
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.platform;
        },

        // 获取 errors
        getErrors: function () {
            return this.def.errors;
        },

        // 设置 errors
        setErrors: function (value, cb) {
            let oldValue = this.getErrors();
            this.def.errors.push(value);
            if (cb) {
                cb.call(this, oldValue, value)
            }
            this.setLocal();
            return this.def.errors;
        },

        setEmptyErrors: function () {
          this.def.errors = [];
          this.setLocal();
          return this.def.errors;
        },


        // 获取所有参数
        getDef: function () {
           /* let platform = this.getPlatform();
            if (platform == 'web') {
                this.def = sessionStorage.getItem('analytices') ? JSON.parse(sessionStorage.getItem('analytices')) : this.def;
            } else if (platform == 'wx') {
                try {
                    this.def = wx.getStorageSync('analytices') || this.def;
                } catch (e) {
                    try {
                        this.def = wx.getStorageSync('analytices') || this.def;
                    } catch (e) {
                        wx.showModal({
                            content: '本地存储异常',
                            success: res => {
                                if (res.confirm) {
                                }
                            }
                        })
                    }
                }
            } else {
                this.def = sessionStorage.getItem('analytices') ? JSON.parse(sessionStorage.getItem('analytices')) : this.def;
            }*/
            return this.def
        },

        // 存在本地缓存中
        setLocal: function (cb) {
            let obj = this.def;
            let platform = this.getPlatform();
            if (platform === 'web') {
                this.setH5Local(obj);
            } else if (platform === 'wx') {
                this.setWxLocal(obj);
            } else {
                this.setH5Local(obj);
            }
            if (cb) {
                cb.call(obj);
            }
        },

        // h5本地缓存
        setH5Local(obj) {
            sessionStorage.setItem('analytices', JSON.stringify(obj));
        },

        // wx本地缓存
        setWxLocal(obj) {
            try {
                wx.setStorageSync('analytices', obj);
            } catch (e) {
                try {
                    wx.setStorageSync('analytices', obj);
                } catch (e) {
                    wx.showModal({
                        content: '本地存储异常',
                        success: res => {
                            if (res.confirm) {

                            }
                        }
                    })
                }
            }
        },

        // 发送并回调中调取接口
        sendAnalytics(cb) {
            try {
                this.setTs(new Date().getTime());
                let obj = this.getDef();
                if (cb) {
                    cb.call(this, obj);
                }
            } catch (e) {
                this.setErrors(e);
            }
        },

        /**
         * 根据index 删除event数组中某个对象
         * @param index
         * @returns {*} 新数组
         * @private
         */
        delEventByIndex(index) {
            let arr = this.getEvents();
            arr = arr.splice(index, 1);
            return this.setEvents(arr);
        },

        /**
         * 根据key Value 得到 obj
         * @param String key
         * @param String value
         * @returns Object {*} 对象
         * @private
         */
        getEventByName(key, value) {
            let arr = this.getEvents(), result = {};
            if (arr && arr.length > 0) {
                for (let i = 0; i < arr; i++) {
                    if (arr[i][key] == value) {
                        result = arr[i];
                    }
                }
            }
            return result;
        },

        // 设置events中某个name
        setEventByName(key, value, params) {
            let arr = this.getEvents(), result = {};
            if (arr && arr.length > 0) {
                for (let i = 0; i < arr; i++) {
                    if (arr[i][key] == value) {
                        arr[i] = params;
                    }
                }
            }
            this.setEvents(arr);
            return arr;
        },

        /**
         * 根据key value 得到下标
         * @param key
         * @param value
         * @private
         */
        getEventByNameReIndex(key, value) {
            let arr = this.getEvents(), index;
            if (arr && arr.length > 0) {
                for (let i = 0; i < arr; i++) {
                    if (arr[i][key] == value) {
                        index = i;
                    }
                }
            }
            return index;
        },

        /**
         * 根据下标删除 obj
         * @param number index
         * @returns array 新数组
         * @private
         */
        delEventByIndexReArr(index) {
            let idex = this.getEventByNameReIndex(index);
            return this.delEventByIndex(idex);
        },


    };

    _global = (function () {
        return this  || window?(0, eval)('this'):undefined;
    }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = ZnAnalytics;
    } else if (typeof define === "function" && define.amd) {
        define(function () {
            return ZnAnalytics;
        });
    } else {
        !('ZnAnalytics' in _global) && (_global.ZnAnalytics = ZnAnalytics);
    }

}());
