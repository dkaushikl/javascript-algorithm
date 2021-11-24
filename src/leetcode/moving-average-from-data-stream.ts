// https://evelynn.gitbooks.io/google-interview/content/moving_average_from_data_stream.html

class MovingAverage {
  size: number;
  queue: Array<number>;
  isFull: boolean;
  constructor(size) {
    this.queue = [];
    this.size = size;
    this.isFull = false;
  }

  next(val: number) {
    if (this.queue.length === 0) {
      this.queue.push(val);
      return val;
    }

    if (this.queue.length === 1) {
      this.queue.push(val);
      return (this.queue[0] + this.queue[1]) / 2;
    }

    if (this.queue.length >= 2) {
      if (this.isFull) {
        this.queue[0] = val;
      } else {
        this.queue.push(val);
        this.isFull = true;
      }
      return (this.queue[0] + this.queue[1] + this.queue[2]) / 3;
    }
  }
}

const m = new MovingAverage(3);
console.log(m.next(1));
console.log(m.next(10));
console.log(m.next(3));
console.log(m.next(5));
