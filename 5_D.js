//  dependency inversion principle

class Fetch {
  request() {
    //  return fetch(url).then((r) => r.json());
    return Promise.resolve("data from fetch");
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = "data from local storage";
    //  return localStorage.getItem("key");
    return dataFromLocalStorage;
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  clientGet() {
    return this.fetch.request("vk.com");
  }
}

class LocalStorageClient {
  constructor() {
    this.LocalStorage = new LocalStorage();
  }

  clientGet(key) {
    return this.LocalStorage.get(key);
  }
}

class DataBase {
  constructor(client) {
    //  this.fetch = new Fetch();
    //  this.LocalStorage = new LocalStorage();

    this.client = client;
  }

  getData() {
    //  return this.fetch.request("vk.com");
    //  return this.LocalStorage.get("ls key");

    return this.client.clientGet("vk.com");
  }
}

// const db = new DataBase(new FetchClient());
const db = new DataBase(new LocalStorageClient());
console.log(db.getData("rand"));
// console.log(db.getData());
