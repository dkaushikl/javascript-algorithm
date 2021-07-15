export class Node {
  value: number;
  next: any;

  constructor(val: any, next = null) {
    this.value = val;
    this.next = next;
  }
}
