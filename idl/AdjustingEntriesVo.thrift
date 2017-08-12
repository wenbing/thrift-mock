namespace java com.sankuai.meituan.finance.mis.web.clearing.vo

include "AdjustingEntryVo.thrift"

struct AdjustingEntriesVo {
    1: list<AdjustingEntryVo.AdjustingEntryVo> data; // 调账申请记录列表
    2: i32 offset;
    3: i32 limit;
    4: i32 total; // 满足查询条件的总记录数
}
