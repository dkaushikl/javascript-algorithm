const editDistance = (s = 'ecfbefdcfca', t = 'badfcbebbf') => {
  if (s.length == 0) return t.length;

  if (t.length == 0) return s.length;

  const sMap = {};
  for (const item of s) sMap[item] = sMap[item] + 1 || 1;

  const tMap = {};
  for (const item of t) tMap[item] = tMap[item] ? tMap[item] + 1 : 1;

  console.log(sMap);
  console.log(tMap);

  for (const item in tMap) {
    if (sMap[item]) {
      let qty = sMap[item] > tMap[item] ? tMap[item] : sMap[item];
      console.log(qty);

      tMap[item] = Math.abs(tMap[item] - qty);
      sMap[item] = Math.abs(sMap[item] - qty);

      if (tMap[item] === 0) delete tMap[item];
      if (sMap[item] === 0) delete sMap[item];
    }
  }

  console.log(sMap);
  console.log(tMap);

  const tMapLength = Object.keys(tMap).length;
  const sMapLength = Object.keys(sMap).length;

  return sMapLength >= tMapLength ? sMapLength : tMapLength;
};

console.log(editDistance());
