/* eslint no-console: 0 */
const path = require('path');

const config = {
  entry: {
    accountService: require.resolve('../idl/TAccountService.thrift'),
  },
  output: {
    path: path.resolve(__dirname, 'mockapi'),
  },
};

module.exports = config;

if (require.main === module) {
  console.info(module.exports);
}

