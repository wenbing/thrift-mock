namespace java com.sankuai.meituan.finance.mis.web.clearing.vo


struct AdjustingEntryRequest {
     1: i32 status;
     2: i32 type;
     3: i32 partnerId;
     4: string contractNum;
     5: i32 poiId;
     6: bool forCheck;
     7: i32 operator;
     8: i32 offset;
     9: i32 limit;
}
