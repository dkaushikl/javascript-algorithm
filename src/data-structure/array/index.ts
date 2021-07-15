// mdn Array;
interface IArray {
  get(index): any;
  push(item: any): number;
  pop(): any;
  delete(index: number): any;
  shift(index: number): number;
  unshift(item: any, index: number): number;
}

export class Array implements IArray {
  length: number;
  data: object;
  value: number;

  constructor() {
    this.length = 0;
    this.data = {};
    this.value = 0;
  }

  get = (index): any => {
    return this.data[index];
  };

  push = (item): number => {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  };

  pop = (): any => {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  };

  delete = (index: number): any => {
    const item = this.data[index];
    this.shift(index);
    return item;
  };

  shift = (index: number = 0): number => {
    for (let i = index; i < this.length - 1; i++)
      this.data[i] = this.data[i + 1];
    delete this.data[this.length - 1];
    this.length--;
    return this.length;
  };

  unshift = (item: string, index = 0): number => {
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.length;
  };

  iterate = () => this;

  concat = (items: string | number | string[] | number[]) => {
    if (items) {
      if (typeof items === 'string') {
        this.push(items);
        return this;
      }

      if (typeof items === 'number') {
        this.push(items);
        return this;
      }

      if (typeof items === 'object') {
        for (const item of items) this.push(item);

        return this;
      }
    }
  };

  entries = () => {
    return this;
  };

  next = () => {
    const holdingParameter = { value: this.data[this.value] };
    if (this.length > this.value) this.value++;
    return holdingParameter;
  };

  every = (func: (element: any) => boolean) => {
    for (let i = 0; i < this.length; i++) if (!func(this.data[i])) return false;

    return true;
  };

  fill = (val: any, index: any, position: number) => {
    if (this.length === 0) {
      for (let i = 0; i < position; i++) this.push(val);

      return this;
    }
  };
}

const newArr = new Array();
newArr.push('2');
newArr.push('3');
newArr.push('4');
newArr.concat(5);
newArr.concat('6');
newArr.concat(['7', '8', '9']);
newArr.concat([10, 11, 12]);

const data = newArr.entries();
console.log(data.next().value);

function isBigEnough(element) {
  return element > 1;
}

console.log(newArr);
console.log(newArr.every(isBigEnough));
