// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// Time Complexity - o(n) = o(n)
// Space Complexity - (1 + n) = o(n)
function defangIPaddress(address) {
  let result = '';

  for (let i = 0; i < address.length; i++)
    result += address[i] === '.' ? '[.]' : address[i];

  return result;
}

function defangIPaddress2(address) {
  return address.split('.').join('[.]');
}

function defangIPaddress3(address) {
  return address.replace(new RegExp('\\.', 'g'), '[.]');
}

console.log(defangIPaddress3('1.1.1.1'));
console.log(defangIPaddress3('255.100.50.0'));
