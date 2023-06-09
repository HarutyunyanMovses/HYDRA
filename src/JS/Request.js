class Request {
  constructor(url) {
    this.url = url;

  }
  async get(path,body) {
    const url = `${this.url}/${path}`;
    return this.request("GET", url, body);
  }

  put(path, body) {
    const url = `${this.url}/${path}`;
    return this.request("PUT", url, body);
  }

  async post(path, body) {
    const url = `${this.url}/${path}`;
    return this.request("POST", url, body);
  }

  delete(path, body) {
    const url = `${this.url}/${path}`;
    return this.request("DELETE", url, body);
  }

  request(method, url, body) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.responseType = "json";
      xhr.setRequestHeader("Content-Type", 'application/json',);
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*',);
      xhr.setRequestHeader("authorization", `Bearer ${JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")).token : null}`);
      xhr.onload = () => { xhr.status >= 400 ? reject("not found") : resolve(xhr.response) };
      xhr.send(JSON.stringify(body));
    });
  }
}

const R = new Request("https://hydra-machtech-back.herokuapp.com");
export default R