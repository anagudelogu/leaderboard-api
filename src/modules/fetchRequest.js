export default class FetchRequest {
  method;

  body;

  headers = {
    'Content-type': 'application/json; charset=UTF-8',
  };

  url;

  constructor({ method = 'GET', body, url = '' } = {}) {
    this.method = method;
    this.body = body;
    this.url = url;
  }

  async call() {
    try {
      const options = {
        method: this.method,
        body: JSON.stringify(this.body),
        headers: this.headers,
      };
      const response = await fetch(this.url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
