export default (() => {
  let store = {};

  return class LocalStorage {
    constructor(str = {}) {
      store = str;
    };

    getItem(key) {
      let item = store[key]
      if(item === null || item === undefined)
        return null;
      return item;
    };

    setItem(key, value)  {
      store[key] = value.toString();
    };

    removeItem(key) {
      delete store[key];
    };

    clear() {
      store = {};
    };
  }
  
})()