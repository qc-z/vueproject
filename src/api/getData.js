import fetch from '../components/config/fetch'


/**
 * 得到首页轮播图
 */

export const getAdvertisementList = () => fetch('getAdvertisementList');
/**
 * 明星面对面提交数据
 */

export const starTestUrl = data => fetch('starTestUrl',data,'POST');