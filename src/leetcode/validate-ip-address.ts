const validIPAddress = function(queryIP) {
  const isValidIPV4 = (arr) => {
    let i = 0;
    let j = arr.length - 1;
    const regex = /^[0-9.]+$/;
    while (i < j) {
      const numStr1 = `${arr[i]}`;
      const numStr2 = `${arr[j]}`;

      if (!numStr1.match(regex) || !numStr2.match(regex)) return false;
      if (numStr1.length > 3 || numStr2.length > 3) return false;
      if (arr[i] >= 256 || arr[j] >= 256) return false;
      if (arr[i][0] == 0 && arr[i].length > 1) return false;
      if (arr[j][0] == 0 && arr[j].length > 1) return false;

      i++;
      j--;
    }
    return true;
  };

  const isValidIPV6 = (arr) => {
    let i = 0;
    let j = arr.length - 1;
    const regex = /^[0-9A-Fa-f.]+$/;
    while (i < j) {
      const numStr1 = `${arr[i]}`;
      const numStr2 = `${arr[j]}`;

      if (!numStr1.match(regex) || !numStr2.match(regex)) return false;
      if (numStr1.length > 4 || numStr2.length > 4) return false;

      i++;
      j--;
    }
    return true;
  };

  let arr = [];
  if (queryIP.includes('.')) {
    arr = queryIP.split('.');
  } else {
    arr = queryIP.split(':');
  }

  if (arr.length === 4) {
    return isValidIPV4(arr) ? 'IPv4' : 'Neither';
  } else if (arr.length === 8) {
    return isValidIPV6(arr) ? 'IPv6' : 'Neither';
  } else {
    return 'Neither';
  }
};

console.log(validIPAddress('172.16.25.1'));
console.log(validIPAddress('172.16.254.1'));
console.log(validIPAddress('192.168.01.121'));
console.log(validIPAddress('255.255.255.255'));
console.log(validIPAddress('1e1.4.5.6'));
console.log(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334'));
console.log(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334:'));
console.log(validIPAddress('2001:0db8:85a3::0:0:8A2E:0370:7334'));
console.log(validIPAddress('2001:@db8:85a3:0:0:8A2E:0370:7334'));
