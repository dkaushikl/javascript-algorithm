function solution(x, y, z) {
    if (y < x) return 0;

    const a = Math.floor(x / z);
    const b = Math.ceil(y / z);
    return b - a;
}

console.log(solution(10, 85, 30));
console.log(solution(0, 85, 30));
console.log(solution(30, 85, 30));
console.log(solution(60, 85, 30));
console.log(solution(84, 85, 30));
console.log(solution(86, 85, 30));
