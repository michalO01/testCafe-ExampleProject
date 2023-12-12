//.testcaferc.js or .testcaferc.cjs

let os = require("os"); // Import any Node.js module you want.

module.exports = { // Settings go inside the module.exports statement.
    src: "./Tests", // Tests
    browsers: ["chrome"], // Browsers
    baseUrl: "https://devexpress.github.io/testcafe/example", // URL
    skipJsErrors: false, // Ignores JavaScript errors
    hostname: os.hostname(), // Node.js dynamically calculates the value of this parameter.
    concurrency: 1
}