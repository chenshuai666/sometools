import axios from "axios";

class Myrequest {
  constructor(baseURL, timeout) {
    this.request = axios.create({
      baseURL,
      timeout,
    });
  }
}
