namespace java com.sankuai.meituan.finance.mis.web.account.vo

include "ForbiddenAccountVo.thrift"
struct ForbiddenAccountHistoryVo {
     1:list<ForbiddenAccountVo.ForbiddenAccountVo>  forbiddenAccountVos;
     2:string partnerName;
     3:string accountName;
}