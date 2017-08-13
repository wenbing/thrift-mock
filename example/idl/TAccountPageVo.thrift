namespace java com.sankuai.meituan.finance.mis.web.account.vo

include "TAccountVo.thrift"

struct TAccountPageVo{
     1:list<TAccountVo.TAccountVo> tAccountVo;
     2:i32 total;
}