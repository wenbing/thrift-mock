const path = require('path');
const R = require('ramda');
const recursiveParser = require('../recursiveParser');
const generate = require('../generate');
const thriftFile = './idl/TClearingService.thrift';

const pickFunc = R.compose(
  ast => R.map(R.evolve({
    functions: R.map(item => R.assoc('mock', generate(ast, item.type), item)),
  }))(ast.service),
  recursiveParser,
  path.resolve
);

const pickAst = R.compose(
  recursiveParser,
  path.resolve
);

const result = pickFunc(thriftFile);
console.log(JSON.stringify(result, null, 2));

