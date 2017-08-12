const path = require('path');
const recursiveParser = require('../recursiveParser');
const thriftFile = '../idl/TClearingService.thrift';

const result = recursiveParser(path.resolve(thriftFile));
console.log(JSON.stringify(result, null, 2));
