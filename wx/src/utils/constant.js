/**
 * 用户code 换取 session_key
 * @type {String}
 */
export const USER_SPECICAL_INFO = "userSpecialInfo";

/**
 * 用户信息
 * @type {String}
 */
export const USER_INFO = "userInfo";

export const USER_PHONE = "userPhone"; //手机号码

/**
 * 用户城市
 * @type {String}
 */
export const USER_CITY = "userCity";

/**
 * 系统信息
 * @type {String}
 */
export const SYSTEM_INFO = "systemInfo";


export const ADDRESS_ID = "addressId";

export const SEL_CLASS_CODE = "selClassCode";

// 本地缓存 购物车
export const SHOPPING_CARS = "shoppingCars";

// 本地缓存 下单页面数据
export const INVITER  = "inviter";

// 本地缓存 下单页面数据
export const ORDER_PARAMS = "orderParams";

/*
orderParams:{
  usesDays:0, //用车天数
  addressParams:{
    isShowAddressInfo:false, // 默认展示点击选择用车地址按钮
    selectedId:0, // 选中的地址id
    userName:'', // 用车联系人
    userPhone:'', // 用车联系人手机
    userAddress:'', // 用车地址
    carAddressCode: "", // 用车地址编码
    userCity:'', // 用车城市
    userLat:'', // 用车地址纬度
    userLon:'', // 用车地址经度
    storeName:'', // 仓库名称
    storeAddress:'', // 仓库地址
    storeLat:'', // 仓库地址纬度
    storeLon:'', // 仓库地址经度
    storeCode: "", // 仓库编码
  },
  projectName:'', // 项目名称
  totalMileage:'', // 公里数
  sendType: 1, // 配送方式 1 配送 0自提
  freight:0, // 运费
  rent:0, // 租金
  totalPrice:0, // 总费用
  beginUseDate:{
    fullDate:'',
    date:'', // 日期 例：07月28日
    time:'', // 时间 例：08：00
    week:''  // 星期 例：周六
  }, // 开始用车时间
  remarks:"", // 备注
}
*/
