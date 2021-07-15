export class Array {
  length: number;
  data: object;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get = index => {
    return this.data[index];
  };

  push = item => {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  };
}

const newArr = new Array();
newArr.push('1');
newArr.push('2');

newArr.get(0);
