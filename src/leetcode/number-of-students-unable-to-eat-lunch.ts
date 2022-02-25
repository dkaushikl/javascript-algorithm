var countStudents = function(students, sandwiches) {
  console.log(students);
  console.log(sandwiches);

  let i = 0;
  let n = students.length;
  let count = 0;
  while (i < n || students.length > 0) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      i++;
      count = 0;
    } else {
      students.push(students.shift());
      count++;
      if (count === students.length) break;
    }
  }

  return n - i;
};

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
console.log(countStudents([1, 1, 1], [0, 0, 0]));
