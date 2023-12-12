import { Selector, t } from "testcafe";

class PageObject {
  constructor() {
    this.setNameInput = Selector("#developer-name");
    this.remoteTestingCheckbox = Selector(`label[for='remote-testing']`);
    this.reuseJSCheckbox = Selector(`label[for='reusing-js-code']`);
    this.parallelTestingCheckbox = Selector(
      `label[for='background-parallel-testing']`
    );
    this.continousIntegrationCheckbox = Selector(
      `label[for='continuous-integration-embedding']`
    );
    this.trafficMarkupCheckbox = Selector(
      `label[for='traffic-markup-analysis']`
    );
    this.triedTestCaffeCheckbox = Selector(`label[for='tried-test-cafe']`);
    this.slider = Selector("div > span[class~='ui-slider-handle']");
    this.rateNumber = Selector("div[class='slider-value']");
    this.comment = Selector("textarea[name='comments']");
    this.interfaces = Selector("#preferred-interface");
    this.submitButton = Selector("#submit-button");
    this.thankYouMessage = Selector("article-header");
  }

  //text input
  async setName(name) {
    await t.typeText(this.setNameInput, name);
  }

  async clickRemoteTestingCheckbox() {
    await t.click(this.remoteTestingCheckbox);
  }
  async clickReuseJSCheckbox() {
    await t.click(this.reuseJSCheckbox);
  }
  async clickParallelTestingCheckbox() {
    await t.click(this.parallelTestingCheckbox);
  }
  async clickContinousIntegrationCheckbox() {
    await t.click(this.continousIntegrationCheckbox);
  }
  async clickTrafficMarkupCheckbox() {
    await t.click(this.trafficMarkupCheckbox);
  }
  async clickITriedTestCaffeCheckbox() {
    await t.click(this.triedTestCaffeCheckbox);
  }

  //Drag element usage
  async moveRateSlider(rate) {
    var rateValue = this.rateNumber.withExactText(rate);

    await t.dragToElement(this.slider, rateValue);
  }

  async setComment(text) {
    await t.typeText(this.comment, text);
  }

  async chooseOS(system) {
    await t.click(await Selector(`input[value='${system}']`));
  }

  //Dropdown handling
  async chooseInterface(option) {
    const interfaceSelect = this.interfaces;
    const interfaceOption = interfaceSelect.find("option");

    await t.click(interfaceSelect).click(interfaceOption.withText(option));
  }

  async clickSubmitButton() {
    await t.click(this.submitButton);
  }

  //Iterate through element list
  async getFeaturesName() {
    var elements = await Selector('p > label:has(input[type = "checkbox"])');
    var elementsNumber = await elements.count;

    var fieldsName = [];
    for (let i = 0; i < elementsNumber; i++) {
      var element =  elements.nth(i);

      console.log(await element.textContent)
      fieldsName[i] = await element.textContent;
    }

    return fieldsName;
  }


  // async getFeaturesNameFalsePositive() {
  //   var elements = await Selector('p > label:has(input[type = "checkbox"])');
  //   var elementsNumber = await elements.count;

  //   var fieldsName = [];
  //   for (let i = 0; i < elementsNumber; i++) {
  //     var element =  elements.nth(i);

  //     console.log(await element.textContent)
  //     fieldsName[i] = await element.textContent;
  //   }

  //   return fieldsName;
  // }
}

export default new PageObject();

export async function getFeaturesName() {
  var elements = await Selector('p > label:has(input[type = "checkbox"])');
  //  var element2 = await Selector(`label[for='remote-testing']`).textContent
  var elementsNumber = await elements.count;

  //  console.log(element2)

  var element;

  await t.click(elements.nth(1));

  console.log(element.count);
  console.log(await element.textContent);

  var fieldsName = [];
  for (let i = 0; i < elementsNumber; i++) {
    var element = await elements.nth(i);
    var selector = await element();
    console.log(await selector.textContent);
    console.log(selector.innerText);
    fieldsName[i] = await element.textContent;
  }

  console.log(fieldsName);
  return fieldsName;
}
