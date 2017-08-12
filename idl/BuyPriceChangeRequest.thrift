namespace java com.sankuai.meituan.finance.mis.web.clearing.vo

include "BuyPriceChangeVo.thrift"

struct BuyPriceChangeRequest {
     1: i32 dealId;
     2: string ecomReason; // 调整结算价原因(展示给商家)
     3: string misReason; // 调整结算价原因(不展示给商家)
     4: i32 operator; // 调整人
}
