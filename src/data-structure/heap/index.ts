class Heap {
  items = [];

  swap = (index1: string | number, index2: string | number) => {
    [this.items[index1], this.items[index2]] = [
      this.items[index2],
      this.items[index1]
    ];
  };

  peek = () => {
    return this.items[0];
  };

  size = () => {
    return this.items.length;
  };
}

const heap = new Heap();
