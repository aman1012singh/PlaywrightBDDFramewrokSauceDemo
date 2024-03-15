const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "test-results",
    reportPath: "./",
    reportName: "Playwright-BDD Automation Report",
    pageTitle: "Sauce Demo test report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "aman.singh2 - PC",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Sauce Demo Application" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});
 
    
      