const reverse = (x) => {
  const xx = Math.abs(x)
    .toString()
    .split('')
    .reverse()
    .join('');

  const yy = x >= 0 ? parseInt(xx) : -parseInt(xx);

  return yy > Math.pow(2, 31) - 1 || yy < -Math.pow(2, 31) ? 0 : yy;
};

console.log(reverse(1534236469));
console.log(reverse(-123));
console.log(reverse(-120));
console.log(reverse(1200));
console.log(reverse(0));
