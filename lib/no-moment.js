
module.exports = {
    meta: {
      type: "problem",
      docs: {
        description: "Disallow the use of moment library",
        category: "Best Practices",
        recommended: true,
      },
      schema: [] 
    },
    create(context) {
      return {
        ImportDeclaration(node) {
          if (node.source && node.source.value === "moment") {
            context.report({
              node,
              message: "Using 'moment' library is forbidden. Please use a modern alternative."
            });
          }
        },
        CallExpression(node) {
          if (
            node.callee.name === "require" &&
            node.arguments.length === 1 &&
            node.arguments[0].value === "moment"
          ) {
            context.report({
              node,
              message: "Using 'moment' library is forbidden. Please use a modern alternative."
            });
          }
        }
      };
    }
  };
  