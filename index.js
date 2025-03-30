
module.exports = {
    rules: {
      "no-moment": require("./lib/no-moment")
    },
    configs: {
      recommended: {
        plugins: ["no-moment"],
        rules: {
          "no-moment/no-moment": "error"
        }
      }
    }
  };
  