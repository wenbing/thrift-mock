namespace java com.sankuai.meituan.finance.mis.web.clearing.vo

include "BuyPriceChangePoiVo.thrift"

struct BuyPriceChangeResult {
    1: double totalAmount; // 总调账金额
    2: list<BuyPriceChangePoiVo.BuyPriceChangePoiVo> detail; // 各门店调账金额
}
