module.exports = {
    default: {
      formatOptions: {
        snippetInterface: "async-await"
      },
      requireModule: [
        "ts-node/register"
      ],
      require: [
        "src/test/stepDefinitions/**/*.ts",
        "src/test/hooks/**/*.ts",
        "src/test/support/**/*.ts"
      ],
      paths: [
        "src/test/features/**/*.feature"
      ],
      publishQuiet: true,
      dryRun: false,
      format: [
        "progress",
        "html:reports/cucumber-report.html",
        "json:reports/cucumber-report.json",
        "rerun:@rerun.txt"
      ]
    },
};