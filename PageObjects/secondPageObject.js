import { Selector } from "testcafe";

class SecondPageObject {
  constructor() {
    this.thankYouMessage = Selector("#article-header");
  }

  async getHeader(){
    return await this.thankYouMessage.textContent;
  }

}

export default new SecondPageObject();