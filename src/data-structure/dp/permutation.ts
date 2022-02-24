const permutation = str => {
  const helper = (arr, perms = [], result = []) => {
    if (arr.length === 0) {
      if (!result.some(a => [...perms].every((v, i) => v === a[i])))
        result.push([...perms]);
      return result;
    }
    for (let i = 0; i < arr.length; i++) {
      perms.push(arr[i]);

      if (!result.some(a => [...perms].every((v, i) => v === a[i])))
        result.push([...perms]);

      const rest = arr.filter((_, index) => i !== index);
      helper(rest, perms, result);

      perms.pop();
    }
    return result;
  };

  return helper(str.split('')).length;
};

console.log(permutation('aab'));
console.log(permutation('AAABBC'));
console.log(permutation('V'));
