namespace java com.sankuai.meituan.finance.mis.web.clearing.vo

struct AdjustingEntryVo {
    1: optional string id; // 调账ID
    2: i32 type; // 调账类型
    3: optional string partnerName; // 合作商
    4: optional string increaseAccountId; // 调增账户ID
    5: optional string increaseAccount; // 调增账户名称
    6: optional string decreaseAccountId; // 调减账户ID
    7: optional string decreaseAccount; // 调减账户名称
    8: optional double adjustingAmount; // 调账金额
    9: i32 status; // 调账状态
    10: i32 adder; // 申请人ID
    11: optional string adderName; //申请人
    12: optional i32 checker; // 审核人ID
    13: optional string checkerName; // 审核人
    14: optional string increaseReason; // 调增原因(展示给商家)
    15: optional string decreaseReason; // 调减原因(展示给商家)
    16: string misReason; // 调账原因(不展示给商家)
    17: optional i32 createTime; // 提交调账申请时间
}
