// mdn HashMap;
interface IHashMap {
  set(key: string, value: any);
  get(key: string);
}

export class HashMap implements IHashMap {
  data = [];

  constructor() {
    this.data = [];
  }

  set = (key: string, value: any): any => {
    if (!this.data[key]) {
      this.data[key] = [];
      this.data[key] = value;
      return;
    }

    this.data[key] = value;
  };

  get = (key: string): any => {
    return this.data[key];
  };
}
