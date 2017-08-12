const ThriftMocker = require('thrift-mocker');

const thriftMocker = new ThriftMocker({
  service: "./TClearingService.thrift",
  models: [
    require("./AdjustingEntriesVo.thrift"),
    require("./AdjustingEntryVo.thrift"),
    require("./BuyPriceChangeRequest.thrift"),
    require("./BuyPriceChangeResult.thrift"),
    require("./BuyPriceChangeVo.thrift"),
    require("./BuyPriceStepVo.thrift"),
    require("./AdjustingEntriesVo.thrift"),
    require("./AdjustingEntryRequest.thrift"),
    require("./MisTException.thrift"),
  ],   // more than one model thrift file.
  commonData: {
    code: 200,
    message: "success"
  },
  boundary: false, // generate data maybe really long, null, empty string, etc. 
  cache: true,  // if not cache, will generate different data at each time. Your choice. 
  serviceName: "YourSeviceName" // If your thrift service has more than one service, you have to indicate the service you need! 
});

thriftMocker.exec('Reserved argument!', methodName, ...args).then(console.log);
