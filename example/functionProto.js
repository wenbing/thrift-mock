const service = {
  TClearingService: {
    functions: {
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
};

const recursiveData = {
  namespace: {
    java: {
      serviceName: "com.sankuai.meituan.finance.mis.web.clearing.service",
    },
  },
  include: {
    AdjustingEntriesVo: {
      path: "AdjustingEntriesVo.thrift",
      namespace: {
        java: {
          serviceName: "com.sankuai.meituan.finance.mis.web.clearing.vo",
        },
      },
      include: {
        AdjustingEntryVo: {
          path: "AdjustingEntryVo.thrift",
          namespace: {
            java: {
              serviceName: "com.sankuai.meituan.finance.mis.web.clearing.vo",
            },
          },
          struct: {
            AdjustingEntryVo: [
              {
                type: "string",
                name: "id",
                id: 1,
                option: "optional",
              },
              {
                type: "i32",
                name: "type",
                id: 2,
              },
              {
                type: "string",
                name: "partnerName",
                id: 3,
                option: "optional",
              },
              {
                type: "string",
                name: "increaseAccountId",
                id: 4,
                option: "optional",
              },
              {
                type: "string",
                name: "increaseAccount",
                id: 5,
                option: "optional",
              },
              {
                type: "string",
                name: "decreaseAccountId",
                id: 6,
                option: "optional",
              },
              {
                type: "string",
                name: "decreaseAccount",
                id: 7,
                option: "optional",
              },
              {
                type: "double",
                name: "adjustingAmount",
                id: 8,
                option: "optional",
              },
              {
                type: "i32",
                name: "status",
                id: 9,
              },
              {
                type: "i32",
                name: "adder",
                id: 10,
              },
              {
                type: "string",
                name: "adderName",
                id: 11,
                option: "optional",
              },
              {
                type: "i32",
                name: "checker",
                id: 12,
                option: "optional",
              },
              {
                type: "string",
                name: "checkerName",
                id: 13,
                option: "optional",
              },
              {
                type: "string",
                name: "increaseReason",
                id: 14,
                option: "optional",
              },
              {
                type: "string",
                name: "decreaseReason",
                id: 15,
                option: "optional",
              },
              {
                type: "string",
                name: "misReason",
                id: 16,
              },
              {
                type: "i32",
                name: "createTime",
                id: 17,
                option: "optional",
              },
            ],
          },
        },
      },
      struct: {
        AdjustingEntriesVo: [
          {
            type: {
              name: "list",
              valueType: "AdjustingEntryVo.AdjustingEntryVo",
            },
            name: "data",
            id: 1,
          },
          {
            type: "i32",
            name: "offset",
            id: 2,
          },
          {
            type: "i32",
            name: "limit",
            id: 3,
          },
          {
            type: "i32",
            name: "total",
            id: 4,
          },
        ],
      },
    },
    AdjustingEntryVo: {
      path: "AdjustingEntryVo.thrift",
      namespace: {
        java: {
          serviceName: "com.sankuai.meituan.finance.mis.web.clearing.vo",
        },
      },
      struct: {
        AdjustingEntryVo: [
          {
            type: "string",
            name: "id",
            id: 1,
            option: "optional",
          },
          {
            type: "i32",
            name: "type",
            id: 2,
          },
          {
            type: "string",
            name: "partnerName",
            id: 3,
            option: "optional",
          },
          {
            type: "string",
            name: "increaseAccountId",
            id: 4,
            option: "optional",
          },
          {
            type: "string",
            name: "increaseAccount",
            id: 5,
            option: "optional",
          },
          {
            type: "string",
            name: "decreaseAccountId",
            id: 6,
            option: "optional",
          },
          {
            type: "string",
            name: "decreaseAccount",
            id: 7,
            option: "optional",
          },
          {
            type: "double",
            name: "adjustingAmount",
            id: 8,
            option: "optional",
          },
          {
            type: "i32",
            name: "status",
            id: 9,
          },
          {
            type: "i32",
            name: "adder",
            id: 10,
          },
          {
            type: "string",
            name: "adderName",
            id: 11,
            option: "optional",
          },
          {
            type: "i32",
            name: "checker",
            id: 12,
            option: "optional",
          },
          {
            type: "string",
            name: "checkerName",
            id: 13,
            option: "optional",
          },
          {
            type: "string",
            name: "increaseReason",
            id: 14,
            option: "optional",
          },
          {
            type: "string",
            name: "decreaseReason",
            id: 15,
            option: "optional",
          },
          {
            type: "string",
            name: "misReason",
            id: 16,
          },
          {
            type: "i32",
            name: "createTime",
            id: 17,
            option: "optional",
          },
        ],
      },
    },
    BuyPriceChangeRequest: {
      path: "BuyPriceChangeRequest.thrift",
      namespace: {
        java: {
          serviceName: "com.sankuai.meituan.finance.mis.web.clearing.vo",
        },
      },
      include: {
        BuyPriceChangeVo: {
          path: "BuyPriceChangeVo.thrift",
          namespace: {
            java: {
              serviceName: "com.sankuai.meituan.finance.mis.web.clearing.vo",
            },
          },
          struct: {
            BuyPriceChangeVo: [
              {
                type: "i32",
                name: "buyTimeBegin",
                id: 1,
              },
              {
                type: "i32",
                name: "buyTimeEnd",
                id: 2,
              },
              {
                type: "double",
                name: "oldBuyPrice",
                id: 3,
              },
              {
                type: "double",
                name: "newBuyPrice",
                id: 4,
              },
            ],
          },
        },
      },
      struct: {
        BuyPriceChangeRequest: [
          {
            type: "i32",
            name: "dealId",
            id: 1,
          },
          {
            type: "string",
            name: "ecomReason",
            id: 2,
          },
          {
            type: "string",
            name: "misReason",
            id: 3,
          },
          {
            type: "i32",
            name: "operator",
            id: 4,
          },
        ],
      },
    },
    BuyPriceChangeResult: {
      path: "BuyPriceChangeResult.thrift",
      namespace: {
        java: {
          serviceName: "com.sankuai.meituan.finance.mis.web.clearing.vo",
        },
      },
      include: {
        BuyPriceChangePoiVo: {
          path: "BuyPriceChangePoiVo.thrift",
          namespace: {
            java: {
              serviceName: "com.sankuai.meituan.finance.mis.web.clearing.vo",
            },
          },
          struct: {
            BuyPriceChangePoiVo: [
              {
                type: "i32",
                name: "poiId",
                id: 1,
              },
              {
                type: "double",
                name: "amount",
                id: 2,
              },
              {
                type: "string",
                name: "poiName",
                id: 3,
              },
            ],
          },
        },
      },
      struct: {
        BuyPriceChangeResult: [
          {
            type: "double",
            name: "totalAmount",
            id: 1,
          },
          {
            type: {
              name: "list",
              valueType: "BuyPriceChangePoiVo.BuyPriceChangePoiVo",
            },
            name: "detail",
            id: 2,
          },
        ],
      },
    },
    BuyPriceChangeVo: {
      path: "BuyPriceChangeVo.thrift",
      namespace: {
        java: {
          serviceName: "com.sankuai.meituan.finance.mis.web.clearing.vo",
        },
      },
      struct: {
        BuyPriceChangeVo: [
          {
            type: "i32",
            name: "buyTimeBegin",
            id: 1,
          },
          {
            type: "i32",
            name: "buyTimeEnd",
            id: 2,
          },
          {
            type: "double",
            name: "oldBuyPrice",
            id: 3,
          },
          {
            type: "double",
            name: "newBuyPrice",
            id: 4,
          },
        ],
      },
    },
    BuyPriceStepVo: {
      path: "BuyPriceStepVo.thrift",
      namespace: {
        java: {
          serviceName: "com.sankuai.meituan.finance.mis.web.clearing.vo",
        },
      },
      struct: {
        BuyPriceStepVo: [
          {
            type: "i32",
            name: "buyTimeBegin",
            id: 1,
          },
          {
            type: "i32",
            name: "buyTimeEnd",
            id: 2,
          },
          {
            type: "double",
            name: "buyPrice",
            id: 3,
          },
          {
            type: "i32",
            name: "saleCount",
            id: 4,
          },
          {
            type: "i32",
            name: "upSaleCount",
            id: 5,
          },
          {
            type: "i32",
            name: "consumeCount",
            id: 6,
          },
        ],
      },
    },
    AdjustingEntryRequest: {
      path: "AdjustingEntryRequest.thrift",
      namespace: {
        java: {
          serviceName: "com.sankuai.meituan.finance.mis.web.clearing.vo",
        },
      },
      struct: {
        AdjustingEntryRequest: [
          {
            type: "i32",
            name: "status",
            id: 1,
          },
          {
            type: "i32",
            name: "type",
            id: 2,
          },
          {
            type: "i32",
            name: "partnerId",
            id: 3,
          },
          {
            type: "string",
            name: "contractNum",
            id: 4,
          },
          {
            type: "i32",
            name: "poiId",
            id: 5,
          },
          {
            type: "bool",
            name: "forCheck",
            id: 6,
          },
          {
            type: "i32",
            name: "operator",
            id: 7,
          },
          {
            type: "i32",
            name: "offset",
            id: 8,
          },
          {
            type: "i32",
            name: "limit",
            id: 9,
          },
        ],
      },
    },
    MisTException: {
      path: "MisTException.thrift",
      namespace: {
        java: {
          serviceName: "com.sankuai.meituan.finance.mis.web",
        },
      },
      exception: {
        MisTException: [
          {
            type: "i32",
            name: "code",
            id: 1,
          },
          {
            type: "string",
            name: "message",
            id: 2,
          },
        ],
      },
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
