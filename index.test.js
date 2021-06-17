const babel = require('@babel/core');
const removeConsole = require('./index');

const testCode = `
  console.log("hello");
  console.log("hello");
  console.log("hello");
  console.log("hello");
  function foo(){
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
  }
  const bar = ()=> {
    console.log("hello");
  }
  const fooBar = console.log;
  fooBar();
`;

it('Test removeConsole', () => {
  const { code } = babel.transform(testCode, {
    plugins: [removeConsole],
  });
  expect(code).toMatchSnapshot();
});
