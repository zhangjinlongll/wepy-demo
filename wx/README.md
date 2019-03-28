### 安装（更新） wepy 命令行工具。
	npm install wepy-cli -g

### 安装依赖包
	npm install

### 开发实时编译。
	npm run dev

### 生产压缩
	npm run build //上传代码时，请先执行此命令，否则会提示包体积过大


### 开发使用说明(重要)

1、使用微信开发者工具-->添加项目，项目目录请选择dist目录。

2、微信开发者工具-->项目-->关闭ES6转ES5。 <font color=red>重要：漏掉此项会运行报错。</font> 

3、微信开发者工具-->项目-->关闭上传代码时样式自动补全。  <font color=red>重要：某些情况下漏掉此项也会运行报错。</font> 

4、微信开发者工具-->项目-->关闭代码压缩上传。  <font color=red>重要：开启后，会导致真机computed, props.sync 等等属性失效。</font> 



### wepy开发文档地址
	https://tencent.github.io/wepy/

### 小程序开发文档
	http://mp.weixin.qq.com/debug/wxadoc/dev/

### 演示地址

打开微信扫一扫

<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/qr.jpg" width="200" height="200"/> 

    
### 目录结构

    ├── api
    │   └── api.js              //接口
    ├── app.wpy                 //入口文件
    ├── components                  //组件
    │   ├── alert.wpy               //自定义授权组件
    │   ├── bomb_screen.wpy         //首页优惠券弹窗组件
    │   ├── contactus_screen.wpy    //联系我们组件
    │   ├── bomb_screen.wpy         //首页弹窗组件
    │   ├── dialog.wpy              //邀请码组件
    │   ├── dialog_img.wpy          //下单成功提示组件
    │   ├── freightRules.wpy        //运费规则组件
    │   ├── images_content.wpy      //图片预览组件
    │   ├── product_list.wpy        //产品列表示组件
    │   ├── rentRules.wpy           //租金规则组件
    │   ├── select_default.wpy      //去签约下拉组件
    │   ├── select_paymoney.wpy     //支付信息展示组件
    │   ├── select_payType.wpy      //支付选择支付方式组件
    │   ├── shoppingCars.wpy        //购物车弹窗组件
    │   ├── common              //公共组件
    │   │   ├── bottomLoadMore.wpy      //底部加载更多组件
    │   │   ├── placeholder.wpy         //空列表显示组件
    │   │   ├── wepy-sign-time.wpy      //签到组件
    │   │   └── wepy-swipe-delete.wpy   //左滑删除组件
    ├── images                  //图片文件夹-- 大文件图片需远程请求本地可以压缩为模糊图片
    ├── pages                   //页面
    │   ├── common              //公共页面
    │   │   ├── address_list.wpy         //地址列表
    │   │   ├── edit_address.wpy         //编辑地址
    │   │   ├── location_search.wpy      //地址搜索
    │   │   └── map_location.wpy         //地图
    │   ├── main              //公共页面
    │   │   ├── authorization.wpy         //授权界面
    │   │   ├── home.wpy                  //首页
    │   │   ├── login.wpy                 //登录
    │   │   ├── mine.wpy                  //我的
    │   │   ├── order.wpy                 //订单
    │   │   ├── product_detail.wpy        //设备详情
    │   │   └── web_sign.wpy              //h5 web页面，签约和合同
    │   ├── mine              //公共页面
    │   │   ├── company_authentication.wpy        //企业认证
    │   │   ├── company_authentication_info.wpy   //企业认证详情
    │   │   ├── coupon_list.wpy                   //优惠券列表
    │   │   ├── my_info.wpy                       //我的信息
    │   │   ├── personal_authentication.wpy       //个人认证
    │   │   ├── personal_authentication_info.wpy  //个人认证详情
    │   │   └── coupon_rule.wpy                   //优惠券规则
    │   ├── order              //公共页面
    │   │   ├── create_sign_person.wpy         //创建进退场签约人
    │   │   ├── device_detail_list.wpy         //订单设备使用详情列表
    │   │   ├── order_detail.wpy               //订单详情
    │   │   ├── order_pay_result.wpy           //订单支付结果页
    │   │   ├── order_sign_result.wpy          //订单签约结果页
    │   │   ├── order_start_pay.wpy            //订单支付页面
    │   │   ├── pay_coupon_list.wpy            //支付优惠券列表
    │   │   ├── place_order.wpy                //下单
    │   │   ├── show_order_pic.wpy             //进退场图片展示
    │   │   └── upload_setfile.wpy             //上传支付凭证
    │   ├── share              //公共页面
    │   │   ├── coupon_share.wpy              //地址列表
    │   │   └── red_packet_share.wpy          //红包分享页面
    ├── plugins                 //插件
    │   └── wxParse             //富文本
    │       ├── html2json.js
    │       ├── htmlparser.js
    │       ├── showdown.js
    │       ├── wxDiscode.js
    │       ├── wxParse.js
    │       ├── wxParse.wxml
    │       └── wxParse.wxss    
    ├── styles                  //样式
    │   ├── base.less
    │   ├── icon.less           // 图标文件
    │   └── style.less
    └── utils                   //工具类
        ├── constant.js             //常量
        ├── app_config.js           //腾讯分析平台 和 高德 key
        ├── color.js                //腾讯分析平台 和 高德 主题色
        ├── md5.js                  //md5
        ├── notif_const.js          //通知组件常量
        ├── tip.js                  //提示弹框组件
        ├── util.js                 //工具
        ├── ZNAnalytics_Web.js      //众能信息采集工具
        └── wxRequest.js            //ajax请求



### 部分功能截图


<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG263.jpeg" width="365" height="619" /> 	<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG264.jpeg" width="365" height="619"/> 


<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG265.jpeg" width="365" height="619"/> 		<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG266.jpeg" width="365" height="619"/> 

<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG267.jpeg" width="365" height="619"/>		 <img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG268.jpeg" width="365" height="619"/> 

<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG269.jpeg" width="365" height="619"/>		 <img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG270.jpeg" width="365" height="619"/> 


<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG271.jpeg" width="365" height="619"/>		 <img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG272.jpeg" width="365" height="619"/> 

<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG273.jpeg" width="365" height="619"/>		 <img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG274.jpeg" width="365" height="619"/> 

<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG275.jpeg" width="365" height="619"/> 



### 说明

此小程序借助于wepy进行高度的组件封装，仅供学习参考。喜欢就动手点个star吧~^o^~

### 如需帮助或咨询请加
qq:490844594

### 友情赞助
如果本项目对你有较大的帮助，可以对我打赏，否则不需要，随便放个二维码，看看有没有对我特别好的小伙伴 ~ 哈哈


<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG276.jpg" width="400" height="400"/> 

