import { Selector } from "testcafe";

class FinalPageObject {
  constructor() {
    this.thankYouMessage = Selector("#article-header");
  }

  async getHeader(){
    return await this.thankYouMessage.textContent;
  }

}

export default new FinalPageObject();