export class StringRecursive {
  myCopy = (s1 = 'Kaushik', s2 = '', count = 0) => {
    if (s1.length === count) return s2;

    s2 += s1[count];
    count++;
    return this.myCopy(s1, s2, count);
  };

  printPowerSet = (set = ['a', 'b', 'c'], length = set.length) => {
    const powerOfSet = +Math.pow(2, length);
    const arr = [];

    for (let i = 0; i < powerOfSet; i++) {
      let s = '';
      for (let j = 0; j < length; j++) {
        // tslint:disable-next-line:no-bitwise
        if ((i & (1 << j)) > 0) {
          s += set[j];
        }
      }
      arr.push(s);
    }
    return arr;
  };

  countConsonent = (s: string) => {
    if (!s) return 0;
    s = s.toLowerCase();
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    const countConsonentRecursive = (i: number) => {
      if (s.length === i) return;

      if (!vowels.has(s[i])) count++;

      i++;
      countConsonentRecursive(i);
    };

    countConsonentRecursive(1);
    return count;
  };
}

const stringRecursive = new StringRecursive();
console.log(stringRecursive.myCopy());
console.log(stringRecursive.printPowerSet());
console.log(stringRecursive.countConsonent('abcde'));
