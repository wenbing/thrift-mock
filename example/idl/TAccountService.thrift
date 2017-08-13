namespace java com.sankuai.meituan.finance.mis.web.account.service

include "TAccountPageVo.thrift"
include "AccountSearchRequest.thrift"
include "ForbiddenAccountVo.thrift"
include "ForbiddenAccountHistoryVo.thrift"
include "MisTException.thrift"

service TAccountService {
       TAccountPageVo.TAccountPageVo search(1:AccountSearchRequest.AccountSearchRequest accountSearchRequest) throws (1:MisTException.MisTException e) ;

       ForbiddenAccountHistoryVo.ForbiddenAccountHistoryVo getByAccountId(1:string accountId, 2:i32 offset, 3:i32 limit) throws (1:MisTException.MisTException e);

       bool stopAccountPay(1:ForbiddenAccountVo.ForbiddenAccountVo forbiddenAccountVo) throws (1:MisTException.MisTException e);

       bool resumeAccountPay(1:ForbiddenAccountVo.ForbiddenAccountVo forbiddenAccountVo) throws (1:MisTException.MisTException e);
}