namespace java com.sankuai.meituan.finance.mis.web.clearing.vo

struct BuyPriceChangeVo {
    1: i32 buyTimeBegin; // 购买时间begin(闭)
    2: i32 buyTimeEnd; // 购买时间end(闭)
    3: double oldBuyPrice; // 原结算价
    4: double newBuyPrice; // 新结算价
}
