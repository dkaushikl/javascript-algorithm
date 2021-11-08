const backspaceCompare = (s: string, t: string): boolean => {
  let a = '';
  for (const char of s)
    a = char !== '#' ? a + char : a.length >= 1 ? a.substr(0, a.length - 1) : a;

  let b = '';
  for (const char of t)
    b = char !== '#' ? b + char : b.length >= 1 ? b.substr(0, b.length - 1) : b;

  return a === b;
};

console.log(backspaceCompare('a##c', '#a#c'));
