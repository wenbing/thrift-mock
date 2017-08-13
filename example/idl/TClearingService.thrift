namespace java com.sankuai.meituan.finance.mis.web.clearing.service

include "AdjustingEntriesVo.thrift"
include "AdjustingEntryVo.thrift"
include "BuyPriceChangeRequest.thrift"
include "BuyPriceChangeResult.thrift"
include "BuyPriceChangeVo.thrift"
include "BuyPriceStepVo.thrift"
include "AdjustingEntriesVo.thrift"
include "AdjustingEntryRequest.thrift"
include "MisTException.thrift"

service TClearingService {
     AdjustingEntriesVo.AdjustingEntriesVo getAdjustingEntryList(1: AdjustingEntryRequest.AdjustingEntryRequest request) throws (1:MisTException.MisTException e);
     bool approveAdjustById(1:string id, 2:i32 operator) throws (1:MisTException.MisTException e);
     bool rejectAdjustById(1:string id, 2:i32 operator) throws (1:MisTException.MisTException e);
     bool submitAdjustApply(1:AdjustingEntryVo.AdjustingEntryVo apply) throws (1:MisTException.MisTException e);
     bool submitAdjustBuyPriceApply(1: BuyPriceChangeRequest.BuyPriceChangeRequest request, 2:list<BuyPriceChangeVo.BuyPriceChangeVo> changes) throws (1:MisTException.MisTException e);
     list<BuyPriceStepVo.BuyPriceStepVo> getBuyPriceStepBydealId(1:i32 dealId, 2:i32 buyTimeBegin, 3:i32 buyTimeEnd) throws (1:MisTException.MisTException e);
     BuyPriceChangeResult.BuyPriceChangeResult getBuyPriceChangeResult(1:i32 dealId, 2:list<BuyPriceChangeVo.BuyPriceChangeVo> changes) throws (1:MisTException.MisTException e);
}