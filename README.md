# Prerequisites 
Node.js - last stable version
npm - package manager (curl -qL https://www.npmjs.com/install.sh | sh)

# Getting Started

1.	Install Test Cafe: "npm i testcafe" or "npm install -g testcafe"
    [Instalation guides](https://testcafe.io/documentation/402834/guides/basic-guides/install-testcafe)
2.	Run tests: testcafe <browsers> <test files> <options>  
    - testcafe chrome test.js : run all test from test.js file on chrome browser
    - testcafe "chrome:emulation:device=iphone X" test.js -e : run all test from test.js file on chrome browser using emulated iphone X
    - testcafe : run all test basing on configuration file .testcaferc.cjs
    [Run tests](https://testcafe.io/documentation/402830/guides/basic-guides/run-tests)

# Configuraton
    Configuration is stored in ".testcaferc.cjs" file

    
    >     src: "./Tests", // Path to test files
    >     browsers: ["chrome"], // Browsers 
    >     baseUrl: "https://devexpress.github.io/testcafe/example", // Application URL
    >     skipJsErrors: false, // Ignores JavaScript errors
    >     hostname: os.hostname(), // Node.js dynamically calculates the value of this parameter.
    >     concurrency: 1    // number of concurency users


    skipJsErrors is by default 'true' and this could cause false positive outcom, recomend to set it to 'false'
   [Confguration guides](https://testcafe.io/documentation/402638/reference/configuration-file)

# Useful test-cafe code examples
    Test cafe GitHub repository with helpful framework usage examples
   [Example repo](https://github.com/DevExpress/testcafe-examples/tree/master/examples)