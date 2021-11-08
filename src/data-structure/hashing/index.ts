class Hashing {
  table;
  constructor(table) {
    this.table = table;
  }

  put(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
  }

  betterHash(string) {
    const H = 37;
    let total = 0;

    for (var i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i);
    }

    total = total % this.table.length;

    if (total < 0) {
      total += this.table.length - 1;
    }

    return +total;
  }

  simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
      if (this.table[i] != undefined) {
        console.log(i + ': ' + this.table[i]);
      }
    }
  }
}

let hTable = new Hashing(new Array(137));
var someNames = [
  'David',
  'David',
  'Jennifer',
  'Donnie',
  'Raymond',
  'Cynthia',
  'Mike',
  'Clayton',
  'Danny',
  'Jonathan'
];

for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}
hTable.showDistro();
