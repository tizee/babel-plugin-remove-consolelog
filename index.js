const helper = require('@babel/types');

const removeConsolePlugin = ({ types: t }) => {
  return {
    visitor: {
      ExpressionStatement(path, state) {
        if (
          helper.isCallExpression(path.node.expression) &&
          helper.isMemberExpression(path.node.expression.callee) &&
          path.node.expression.callee.object.name == 'console' &&
          path.node.expression.callee.property.name == 'log'
        ) {
          path.remove();
        }
      },
    },
  };
};

module.exports = removeConsolePlugin;
