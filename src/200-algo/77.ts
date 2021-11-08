const numUniqueEmails = emails => {
  const map = {};
  let count = 0;
  for (const email of emails) {
    const str = email.split('@');
    let result = str[0]
      .replace(/[.]/g, '')
      .split('+')
      .shift();

    let finalEmail = result.concat(`@${str[1]}`);
    if (!map[finalEmail]) {
      count++;
      map[finalEmail];
    }
  }

  return count;
};

console.log(
  numUniqueEmails(['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'])
);
