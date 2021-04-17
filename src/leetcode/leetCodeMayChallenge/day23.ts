/* Question no:23 Interval List Intersections (May23th 2020)

Given two lists of closed intervals, each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

(Formally, a closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.  The intersection of two closed intervals is a set of real numbers that is either empty, or can be represented as a closed interval.  For example, the intersection of [1, 3] and [2, 4] is [2, 3].)

Input: A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
Reminder: The inputs and the desired output are lists of Interval objects, and not arrays or lists.
*/

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
  const output = [];
  var i = 0,
    j = 0;
  while (i < A.length && j < B.length) {
    if (isOverlap(A[i], B[j])) {
      const merged = [Math.max(A[i][0], B[j][0]), Math.min(A[i][1], B[j][1])];
      output.push(merged);
    }
    if (A[i][1] < B[j][1]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return output;
};

function isOverlap([s1, e1], [s2, e2]) {
  return (s2 <= e1 && e2 >= s1) || (s1 <= e2 && e1 >= s2);
}
