/* eslint prefer-template: 0 */
const R = require('ramda');
const faker = require('faker');
const { getRandomInt } = require('./util');

// thrift types: https://thrift.apache.org/docs/types
const BASE_TYPES = ['bool', 'byte', 'i16', 'i32', 'i64', 'double', 'string'];

// const UNMATCHED = { '@@generate/unmatched': true }; // reference to ramda R.__ & _isPlaceholder
const UNMATCHED = { '@@generate/unmatched': true };
const isUnMatched = R.allPass([
  R.complement(R.isNil),
  R.is(Object),
  R.where(UNMATCHED),
]);

const isBaseTypes = R.contains(R.__, BASE_TYPES);

const generateBaseType = R.cond([
  [R.contains(R.__, ['byte', 'i16', 'i32', 'i64']), () => faker.random.number()],
  [R.equals('string'), () => faker.random.word()],
  [R.equals('double'), () => faker.random.number()],
  [R.equals('bool'), () => faker.random.boolean()],
  [R.T, () => R.always(UNMATCHED)],
]);

const getStruct = R.curry((ast, type) => R.compose(
  R.ifElse(
    R.whereEq({ length: 1 }),
    () => ({ struct: ast.struct[type], ast }),
    R.converge(
      getStruct,
      [R.compose(R.prop(R.__, ast.include), R.head), R.compose(R.join('.'), R.tail)]
    )
  ),
  R.split('.')
)(type));

const generate = R.curry((ast, type) => R.cond([
  [
    R.is(String),
    R.ifElse(
      isBaseTypes,
      generateBaseType,
      R.compose(
        next => R.transduce(
          R.map(
            R.converge(R.objOf, [R.prop('name'), R.compose(generate(next.ast), R.prop('type'))])
          ),
          R.merge,
          {},
          next.struct
        ),
        getStruct(ast)
      )
    ),
  ],
  [
    R.is(Object),
    typeIn => R.cond([
      [
        R.contains(R.__, ['set', 'list']),
        () => R.compose(
          R.map(() => generate(ast, typeIn.valueType))
        )(R.range(0, getRandomInt(3, 6))),
      ],
      [R.equals('map'), R.identity],
      [
        R.T,
        () => {
          throw new Error(
            typeIn.valueType.toString() + 'OBJECT type.valueType should be one of set/list or map'
          ); },
      ],
    ])(typeIn.name),
  ],
  [R.T, R.identity],
])(type));

module.exports = generate;
