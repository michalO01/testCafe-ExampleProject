import pageObject from "../PageObjects/pageObject";
import finalPageObject from "../PageObjects/secondPageObject";
import API from "../API/API";
const { Selector } = require("testcafe");

fixture("Getting Started").page("./").beforeEach(async t => {
  console.log("Action that are executed before each test");
}).afterEach(async t => {
  console.log("After each test action is performed");
});

test("Example test", async (t) => {
  const userName = "Test user";
  var fieldName = await Selector(`label[for='remote-testing']`).textContent; //using locator directly in test to get text from element. (example only, page objects recomended)
  await t.expect(fieldName).eql("Support for testing on remote devices");    // assertion of string value

  await pageObject.setName(userName); // set text
  await pageObject.clickRemoteTestingCheckbox();
  await pageObject.clickReuseJSCheckbox();
  await pageObject.clickParallelTestingCheckbox();
  await pageObject.clickContinousIntegrationCheckbox();
  await pageObject.clickTrafficMarkupCheckbox();
  await pageObject.clickITriedTestCaffeCheckbox();
  await pageObject.moveRateSlider("9"); //drag element
  await pageObject.setComment("test comment");
  await pageObject.chooseOS("Windows"); //checkbox
  await pageObject.chooseInterface("Command Line"); // dropdown
  await pageObject.clickSubmitButton();

  var message = await finalPageObject.getHeader();
  await t.expect(message).eql(`Thank you, ${userName}!`);
});

test("Get API data", async (t) => {
  const response = await API.getDataFromAPI();

  await t.expect(response.status).eql(200);
  await t.expect(response.body.title).eql("delectus aut autem");
});

test("Check list", async (t) => {
  var expectedFeatures = [
    "Support for testing on remote devices",
    "Re-using existing JavaScript code for testing",
    "Running tests in background and/or in parallel in multiple browsers",
    "Easy embedding into a Continuous integration system",
    "Advanced traffic and markup analysis",
  ];

  var actualFeatures = await pageObject.getFeaturesName(); //Iterate through element list

  console.log(actualFeatures);
  await t.expect(expectedFeatures).eql(actualFeatures); // compare two arrays
});
