namespace java com.sankuai.meituan.finance.mis.web.account.vo

struct ForbiddenAccountVo {
      1:string accountId;
      2:i32 forbiddenSource;
      3:string reason;
      4:i32 operatorId;
      5:i32 type;
      6:i32 createTime;
      7:list<string> accountIds;
      8:string operator;
}