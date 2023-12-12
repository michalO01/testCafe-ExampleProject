import { t } from "testcafe";

class API {
  constructor() {}

  async getDataFromAPI() {
    const response = await t.request({
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
    });
    return response;
  }
}

export default new API();
