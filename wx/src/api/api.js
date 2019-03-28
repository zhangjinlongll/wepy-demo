import {
  wxRequest,
  wxUploadFile,
  znSetStorageSync,
  znGetStorageSync
} from '../utils/wxRequest';
let env = "-test" //-dev 或者 -test

// let apiMall = 'http://api.zuul.dev.znlhzl.org'; //dev 联调环境
let apiMall =  'http://api.zuul.test.znlhzl.org';//测试环境
//   let apiMall =  'http://api.zuul.autotest.znlhzl.org';//自动化测试环境
// let apiMall = 'https://api.zuul.uat.znlhzl.cn';//预发布环境
// let apiMall = 'https://api.zuul.znlhzl.cn';//正式环境


//设置环境
const setApiMall =  (apiUrl) => {
  apiMall = apiUrl;
};

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */

//微信的jscode换取sessionKey
//const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/api/wechat/jscode2session");
//const user2session = (params) => wxRequest(params, apiMall + "/api/wechat/user2session?jsoncallback=?");

// 公共方法
const getCityList =  (params) => wxRequest(params, apiMall +'/api-tpi/api/city/list'); //获取城市列表
const getSessionInfo =  (params) => wxRequest(params, apiMall + '/api-sso/api/v1/cust/getSessionInfo');//获取微信注册用户的会话信息
const getCityInService = (params) => wxRequest(params, apiMall + '/api-sso/api/v1/cust/cityInService'); //匹配当前城市
const getFileId = (params) => wxRequest(params, apiMall + '/api-oss/upload/getFileId');//获取图片fileID
const uploadFinal = (params) => wxRequest(params, apiMall + '/api-oss/upload/uploadFinal');//上传图片的唯一标识
const getshowImage = (params) => wxRequest(params, apiMall + '/api-oss/upload/getUrl');//获取图片url

const getCityInfo =(params) => wxRequest(params, 'http://restapi.amap.com/v3/geocode/regeo?key=71418a16a248f775c03ad7a5517d44a9&location=118.7945,32.03899&s=rsx&platform=WXJS&appname=71418a16a248f775c03ad7a5517d44a9&sdkversion=1.2.0&logversion=2.0');//高德->根据坐标定位城市
const buildPhone = (params) => wxRequest(params,apiMall +'/api-sso/api/v1/cust/binding');//用户手机号绑定
const buildCode = (params) => wxRequest(params,apiMall +'/api-sso/api/v1/cust/buildVerifCode');//生成验证码

// 业务接口
const getAdList = (params) => wxRequest(params, apiMall + '/api-sku/api/mp/product/carousel'); // 获取home 轮播
const getProductList = (params) => wxRequest(params, apiMall + '/api-sku/api/mp/product/list'); //获取产品list
const getProductInfo = (params) => wxRequest(params,apiMall + '/api-sku/api/mp/product/detail'); //获取产品详情
//订单列表 order
const getOrderList=(params) => wxRequest(params, apiMall + '/api-oms/api/mp/order/list');
const getProjectSelectList = (params) => wxRequest(params, apiMall + '/api-ser/api/mp/enterTicket/project/list');
const getBillDetail = (params) => wxRequest(params, apiMall + '/api-zpc/api/pay/bill/detail');
//进退场
const postEnterTicket=(params) => wxRequest(params, apiMall + '/api-ser/api/mp/enterTicket/create');//提交进场单
const getEnterList=(params) => wxRequest(params, apiMall + '/api-ser/api/mp/enterTicket/product/list');//进场单展示数据
const getEnterRecords=(params) => wxRequest(params, apiMall + '/api-ser/api/mp/enterTicket/records/all');//进退场记录
const uploadPayVoucher = (params) => wxRequest(params, apiMall + '/api-oms/api/mp/order/uploadPayVoucher');//上传支付凭证
const getBillOrderRuslt = (params) => wxRequest(params, apiMall + '/api-oms/api/mp/order/getPayVoucher');
const getExitDevList = (params) => wxRequest(params, apiMall + '/api-ser/api/mp/exitTicket/product/list');//退租设备列表
const submitExitTiket =(params) => wxRequest(params, apiMall + '/api-ser/api/mp/exitTicket/create');//提交进场单

// 快速下单
const getCalcPrice = (params) => wxRequest(params,apiMall +'/api-oms/api/mp/order/calcPrice'); // 计算费用
const createOrder = (params) => wxRequest(params,apiMall +'/api-oms/api/mp/order/create'); // 创建订单
const getOrderDetaial = (params) => wxRequest(params,apiMall +'/api-oms/api/mp/order/detail'); // 获取订单详情
const cancelOrder = (params) => wxRequest(params,apiMall +'/api-oms/api/mp/order/cancel'); // 取消订单

// v2.0.0
//个人信息
// const getCertification = (params) => wxRequest(params,apiMall +'/api-vip/api/user/profiles'); //  get 获取个人信息
const getCertification = (params) => wxRequest(params,apiMall +'/api-crm/api/v2/auth/profiles'); //  get 获取个人信息
// const ocrIDCard = (params) => wxRequest(params,apiMall +'/api-vip/api/user/verify/ocrIDCard'); //  上传身份证获取个人信息
const ocrIDCard = (params) => wxRequest(params,apiMall +'/api-crm/api/v2/auth/user/verify/ocrIDCard'); //  上传身份证获取个人信息
// const identityd = (params) => wxRequest(params,apiMall +'/api-vip/api/user/verify/identity'); //  个人信息提交
const identityd = (params) => wxRequest(params,apiMall +'/api-crm/api/v2/auth/user/verify/wxidentity'); //  个人信息提交
// const enterpriseOcrIDCard = (params) => wxRequest(params,apiMall +'/api-tpi/api/v1/credential/enterprise/verify/ocrIDCard'); //  根据照片查询企业要素
const enterpriseOcrIDCard = (params) => wxRequest(params,apiMall +'/api-crm/api/v2/auth/enterprise/verify/ocrIDCard'); //  根据照片查询企业要素
const searchEnterprise = (params) => wxRequest(params,apiMall +'/api-tpi/api/enterprise/getDetails'); //  根据企业名称查询企业要素
// const enIdentityd = (params) => wxRequest(params,apiMall +'/api-vip/api/enterprise/verify/identity'); //  企业信息提交
const enIdentityd = (params) => wxRequest(params,apiMall +'/api-crm/api/v2/auth/enterprise/verify/wxidentity'); //  企业信息提交


const setInvitationCode = (params) => wxRequest(params,apiMall +'/api-sso/api/v1/cust/setInvitationCode'); //  保存邀请码
const freightRuleDesc = (params) => wxRequest(params,apiMall +'/api-oms/api/mp/order/freightRuleDesc'); //  获取运费规则
const getPayMessage = (params) => wxRequest(params,apiMall +'/api-zpc/api/pay/buildPreBill');//获取支付信息
const getOrderBillMessage = (params) => wxRequest(params,apiMall +'/api-zpc/api/pay/bill/detail');//获取支付账单信息
const  checkPayOrderStatus = (params) => wxRequest(params,apiMall +'/api-zpc/api/pay/get/result');//查询支付的订单状态
const  signUrl = (params) => wxRequest(params,apiMall +'/api-oms/api/mp/order/contract/signUrl');//生成电子合同
const  confirmOrder = (params) => wxRequest(params,apiMall +'/api-oms/api/mp/order/confirmOrder');//进退场确认单
const  getSignWeb =(params) => wxRequest(params,apiMall +'/api-oms/api/mp/order/contract/previewUrl');//查看接口
const  confirmSign =(params) => wxRequest(params,apiMall +'/api-oms/api/mp/order/contract/confirmSign');//确认合同签约状态
const  contactInfo =(params) => wxRequest(params,apiMall +'/api-vip/api/contact/contactInfo');//手机号查询用户信息
const  getUserInfo =(params) => wxRequest(params,apiMall +'/api-sso/api/v1/cust/getUserInfo');//手机号查询用户信息

//v2.1.0 优惠券
const  closeTips =(params) => wxRequest(params,apiMall +'/api-cps/api/coupon/closeTips');// 关闭优惠券弹出
const  getCouponList =(params) => wxRequest(params,apiMall +'/api-cps/api/coupon/list');// 查询优惠券列表
const  getRegCouponList =(params) => wxRequest(params,apiMall +'/api-cps/api/coupon/regCouponList');// 查询注册券提醒
const  getCouponCount =(params) => wxRequest(params,apiMall +'/api-cps/api/coupon/count');// 查询可用优惠券数量
const  useCoupon =(params) => wxRequest(params,apiMall +'/api-zpc/api/pay/payZero');// 支付0元接口
const  getShareInfo =(params) => wxRequest(params,apiMall +'/api-cps/api/coupon/get');// 分享界面 分享详情信息
const  getConfig =(params) => wxRequest(params,apiMall +'/api-cps/api/coupon/config');// 配置接口 分享界面活动规则及 优惠券使用规则

//2.2.0 订单流程改造
const getAddressList = (params) => wxRequest(params,apiMall +'/api-oms/api/mp/order/carAddress/CarAddressList');// 获取用车地址列表
const updateAddress = (params) => wxRequest(params,apiMall +'/api-oms/api/mp/order/carAddress/updateCarAddress');// 更新用车地址
const addAddress = (params) => wxRequest(params,apiMall +'/api-oms/api/mp/order/carAddress/createCarAddress');// 更新用车地址
const getDeviceDetailList = (params) => wxRequest(params,apiMall +'/api-ser/api/enter_exit/demand/equipmentDetails');// 获取设备明细接口
const paymentCountdown = (params) => wxRequest(params,apiMall +'/api-oms/api/mp/order/paymentCountdown');// 获取付款倒计时
const getHistoryList = (params) => wxRequest(params,apiMall +'/api-oms/api/mp/order/contract/histrySignList');// 获取历史签约人列表
const orderDelete = (params) => wxRequest(params,apiMall +'/api-oms/api/mp/order/orderDelete');// 订单删除

//v2.2.4 红包功能
const getInvited = (params) => wxRequest(params,apiMall +'/api-cps/api/invite/querySuccessInvited');// 获取落地页信息
const createQrCode = (params) => wxRequest(params,apiMall +'/api-vip/api/v1/qrcode/createInviteQrCode');// 生成二维码
const inviteLog = (params) => wxRequest(params,apiMall +'/api-vip/api/v1/inviteLog/createInviteLog');// 记录分享、点击链接日志信息
const inviteMapping = (params) => wxRequest(params,apiMall +'/api-cps/api/invite/inviteMapping');// 邀请映射关系记录
const loadInvitePicture = (params) => wxRequest(params,apiMall +'/api-cps/api/invite/loadInvitePicture');// 获取我的“邀请活动”图片
const popupInviteTips = (params) => wxRequest(params,apiMall +'/api-cps/api/invite/popupInviteTips');// 首页pop弹窗图片
const closeInviteTips = (params) => wxRequest(params,apiMall +'/api-cps/api/invite/closeInviteTips');// 首页pop弹窗图片


//v2.2.6
const isQueryPromotionInviteUser = (params) => wxRequest(params,apiMall +'/api-cps/api/invite/queryPromotionInviteUser');// 检查是否有活动资格
const isInLeaderboard = (params) => wxRequest(params,apiMall +'/api-cps/api/invite/isInLeaderboard');// 检查是否有活动资格
const sendWxMsg = (params) => wxRequest(params,apiMall +'/api-vip/api/v1/notify/send');// 发送微信通知

// v2.2.7
const getCustMangerCode = (params) => wxRequest(params,apiMall +'/api-vip/api/v1/invite/bind');// 获取客户经理邀请码，判断是否客户经理

//logs
const logs = (params) => wxRequest(params,apiMall + '/api-msc/api/v1/pipeline/collectWechatLog/wx.log');

//12月
const getActivity = (params) => wxRequest(params,apiMall +'/api-cps/api/praise/homepage');// 活动主页
const postPraise = (params) => wxRequest(params,apiMall +'/api-cps/api/praise/add');// 活动点赞

//v2.3.0
const statementApproveInfo = (params) => wxRequest(params,apiMall +'/api-fms/api/statement/wx/statementApproveInfo');//对账那单信息
// const statementApproveInfo = (params) => wxRequest(params,'http://192.168.2.246:3000/mock/315/api-fms/api/statement/wx/statementApproveInfo');//对账那单信息

const settleApproveInfo = (params) => wxRequest(params,apiMall +'/api-fms/api/settle/wx/settleApproveInfo');//租赁账单
const incomeList = (params) => wxRequest(params,apiMall +'/api-fbi/api/fin/v1/order/wx/dev/income/list');//费用日历

const getCouponInfo = (params) => wxRequest(params,apiMall +'/api-cps/api/coupon/getCouponInfo');//费用日历
// const getCouponInfo = (params) => wxRequest(params,'http://192.168.2.246:3000/mock/315/api/coupon/getCouponInfo');//费用日历

const getCouponByOldUser = (params) => wxRequest(params,apiMall +'/api-cps/api/coupon/loginTips');//登录领券提醒

//设备报修--报修地址
const getRepairAddress = (params) => wxRequest(params,apiMall +'/api-oms/api/mp/order/projectOfOrder');
//设备报修--设备故障类型
const getFaultTypes = (params) => wxRequest(params,apiMall +'/api-vip/sysDictList');
//设备报修提交
const postRepairAdd = (params) => wxRequest(params,apiMall +'/api-ser/api/mp/repair/repairAdd');

const getRepairRecord = (params) => wxRequest(params,apiMall +'/api-ser/api/mp/repair/repairRecord');//报修记录
// const getRepairRecord = (params) => wxRequest(params,'http://192.168.2.246:3000/mock/339/api-ser/api/mp/repair/repairRecord');//报修记录
const getRepairDetail =(params) => wxRequest(params,apiMall +'/api-ser/api/mp/repair/repairDetail');//报修详情
// const getRepairDetail =(params) => wxRequest(params,'http://192.168.2.246:3000/mock/339/api-ser/api/mp/repair/repairDetail');//报修详情
const getSysDictList = (params) => wxRequest(params, apiMall +'/api-vip/sysDictList');//故障类型字典


// 存表单id /api-vip/api/user/sysUserOfFormAdd
const saveFormId = (params) => wxRequest(params,apiMall +'/api-vip/api/user/sysUserOfFormAdd');
const getMyDoingProject = (params) => wxRequest(params,apiMall +'/api-ser/api/mp/repair/projectOfOrder');

// TODO
const uploadFile = (params) => wxUploadFile(params,apiMall +'/api-oss/api/v2/oss/upload');
//v2.3.5
// const getPersonalCreditInfo = (params) => wxRequest(params,'http://192.168.2.246:3000/mock/217' +'/api-cis/api/v2/credit/personal/info');//获取个人征信信息
const getPersonalCreditInfo = (params) => wxRequest(params,apiMall +'/api-cis/api/v2/credit/personal/info');//获取个人征信信息
// const getEquityInfo = (params) => wxRequest(params,'http://192.168.2.246:3000/mock/217' +'/api-cis/api/v1/zhongneng/credit/personal/equityInfo');//获取个人权益
const getEquityInfo = (params) => wxRequest(params,apiMall +'/api-cis/api/v1/zhongneng/credit/personal/equityInfo');//获取个人权益



module.exports = {
  setApiMall,
  znSetStorageSync,
  znGetStorageSync,
  apiMall,
  uploadFile,
  // home
  getAdList,
  getProductList,
  getProductInfo,
  //城市列表
  getCityList,
  //查询订单列表
  getOrderList,
  // 查询可选工程列表
  getProjectSelectList,
  //查看订单详情
  getBillDetail,
  //创建进场单
  postEnterTicket,
  getEnterRecords,
  getEnterList,
  //上传凭证
  uploadPayVoucher,
  getFileId,
  uploadFinal,
  //获取支付凭证
  getBillOrderRuslt,
  getshowImage,
  getCalcPrice,
  createOrder,
  getCityInService,
  getCityInfo,
  getSessionInfo,
  buildPhone,
  buildCode,
  getOrderDetaial,
  cancelOrder,
  getExitDevList,
  submitExitTiket,
  getCertification,
  ocrIDCard,
  identityd,
  enterpriseOcrIDCard,
  searchEnterprise,
  freightRuleDesc,
  getPayMessage,
  getOrderBillMessage,
  checkPayOrderStatus,
  setInvitationCode,
  enIdentityd,
  signUrl,
  confirmOrder,
  getSignWeb,
  confirmSign,
  contactInfo,
  getUserInfo,
  closeTips,
  getCouponList,
  getCouponCount,
  useCoupon,
  getShareInfo,
  getConfig,
  getRegCouponList,
  getAddressList,
  updateAddress,
  addAddress,
  getDeviceDetailList,
  paymentCountdown,
  getHistoryList,
  orderDelete,

  getInvited,
  createQrCode,
  inviteLog,
  inviteMapping,
  loadInvitePicture,
  popupInviteTips,
  closeInviteTips,

  logs,
  isQueryPromotionInviteUser,
  isInLeaderboard,
  sendWxMsg,

  getCustMangerCode,
  getActivity,
  postPraise

  ,incomeList
  ,settleApproveInfo
  ,statementApproveInfo
  ,getCouponInfo
  ,getCouponByOldUser

  ,getRepairAddress
  ,getFaultTypes
  ,postRepairAdd
  ,getRepairRecord

  ,saveFormId
  ,getRepairDetail
  ,getSysDictList
  ,getMyDoingProject


  ,getPersonalCreditInfo
  ,getEquityInfo
};
