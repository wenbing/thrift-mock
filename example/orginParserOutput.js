const data = {
  namespace: {
    java: {
      serviceName: "com.sankuai.meituan.finance.mis.web.clearing.service",
    },
  },
  include: {
    AdjustingEntriesVo: {
      path: "AdjustingEntriesVo.thrift",
    },
    AdjustingEntryVo: {
      path: "AdjustingEntryVo.thrift",
    },
    BuyPriceChangeRequest: {
      path: "BuyPriceChangeRequest.thrift",
    },
    BuyPriceChangeResult: {
      path: "BuyPriceChangeResult.thrift",
    },
    BuyPriceChangeVo: {
      path: "BuyPriceChangeVo.thrift",
    },
    BuyPriceStepVo: {
      path: "BuyPriceStepVo.thrift",
    },
    AdjustingEntryRequest: {
      path: "AdjustingEntryRequest.thrift",
    },
    MisTException: {
      path: "MisTException.thrift",
    },
  },
  service: {
    TClearingService: {
      functions: {
        getAdjustingEntryList: {
          type: "AdjustingEntriesVo.AdjustingEntriesVo",
          name: "getAdjustingEntryList",
          args: [
            {
              type: "AdjustingEntryRequest.AdjustingEntryRequest",
              name: "request",
              id: 1,
            },
          ],
          throws: [
            {
              type: "MisTException.MisTException",
              name: "e",
              id: 1,
            },
          ],
          oneway: false,
        },
        approveAdjustById: {
          type: "bool",
          name: "approveAdjustById",
          args: [
            {
              type: "string",
              name: "id",
              id: 1,
            },
            {
              type: "i32",
              name: "operator",
              id: 2,
            },
          ],
          throws: [
            {
              type: "MisTException.MisTException",
              name: "e",
              id: 1,
            },
          ],
          oneway: false,
        },
        rejectAdjustById: {
          type: "bool",
          name: "rejectAdjustById",
          args: [
            {
              type: "string",
              name: "id",
              id: 1,
            },
            {
              type: "i32",
              name: "operator",
              id: 2,
            },
          ],
          throws: [
            {
              type: "MisTException.MisTException",
              name: "e",
              id: 1,
            },
          ],
          oneway: false,
        },
        submitAdjustApply: {
          type: "bool",
          name: "submitAdjustApply",
          args: [
            {
              type: "AdjustingEntryVo.AdjustingEntryVo",
              name: "apply",
              id: 1,
            },
          ],
          throws: [
            {
              type: "MisTException.MisTException",
              name: "e",
              id: 1,
            },
          ],
          oneway: false,
        },
        submitAdjustBuyPriceApply: {
          type: "bool",
          name: "submitAdjustBuyPriceApply",
          args: [
            {
              type: "BuyPriceChangeRequest.BuyPriceChangeRequest",
              name: "request",
              id: 1,
            },
            {
              type: {
                name: "list",
                valueType: "BuyPriceChangeVo.BuyPriceChangeVo",
              },
              name: "changes",
              id: 2,
            },
          ],
          throws: [
            {
              type: "MisTException.MisTException",
              name: "e",
              id: 1,
            },
          ],
          oneway: false,
        },
        getBuyPriceStepBydealId: {
          type: {
            name: "list",
            valueType: "BuyPriceStepVo.BuyPriceStepVo",
          },
          name: "getBuyPriceStepBydealId",
          args: [
            {
              type: "i32",
              name: "dealId",
              id: 1,
            },
            {
              type: "i32",
              name: "buyTimeBegin",
              id: 2,
            },
            {
              type: "i32",
              name: "buyTimeEnd",
              id: 3,
            },
          ],
          throws: [
            {
              type: "MisTException.MisTException",
              name: "e",
              id: 1,
            },
          ],
          oneway: false,
        },
        getBuyPriceChangeResult: {
          type: "BuyPriceChangeResult.BuyPriceChangeResult",
          name: "getBuyPriceChangeResult",
          args: [
            {
              type: "i32",
              name: "dealId",
              id: 1,
            },
            {
              type: {
                name: "list",
                valueType: "BuyPriceChangeVo.BuyPriceChangeVo",
              },
              name: "changes",
              id: 2,
            },
          ],
          throws: [
            {
              type: "MisTException.MisTException",
              name: "e",
              id: 1,
            },
          ],
          oneway: false,
        },
      },
    },
  },
};
