const licenseKeyFormatting = (s: string, k: number): string => {
  s = s
    .toUpperCase()
    .split('-')
    .join('');
  if (s.length < k) return s;

  const devide = s.length % k;
  const regex = '.{1,' + k + '}';

  if (devide === 0) return s.match(new RegExp(regex, 'g')).join('-');

  const b = s.substr(devide, s.length - 1);
  return s
    .substr(0, devide)
    .concat(`-${b.match(new RegExp(regex, 'g')).join('-')}`);
};

console.log(licenseKeyFormatting('2', 2));
