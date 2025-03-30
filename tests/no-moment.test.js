const { RuleTester } = require("eslint");
const rule = require("../lib/no-moment");

const ruleTester = new RuleTester();

ruleTester.run("no-moment", rule, {
  valid: [
    "import dayjs from 'dayjs';",
    "const dayjs = require('dayjs');"
  ],
  invalid: [
    {
      code: "import moment from 'moment';",
      errors: [{ message: "Using 'moment' library is forbidden. Please use a modern alternative." }]
    },
    {
      code: "const moment = require('moment');",
      errors: [{ message: "Using 'moment' library is forbidden. Please use a modern alternative." }]
    }
  ]
});
