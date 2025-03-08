/* Using iteration */
console.log("\niterative approach:\n");
function fibs(num) {
  if (num === 1) {
    return [0];
  } else if (num == 2) {
    return [0, 1];
  }
  
  let arr = [0, 1];
  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}
console.log(fibs(8));


/* Using recursion */
/* Approach 1 */
console.log("\nrecursive approach 1:\n");
function fibsRec(num) {
  console.log("This was printed recursively");
  if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  }
  let prev = fibsRec(num - 1);
  let prevLen = prev.length;
  let current = prev[prevLen - 1] + prev[prevLen - 2];
  prev.push(current);
  return prev;
}
console.log(fibsRec(8));

/* Approach 2 */
console.log("\nrecursive approach 2:\n");
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return (fibonacci(n - 1) + fibonacci(n - 2));
}

function fibsRec2(num) {
  if (num < 0) return null;
  let arr = [];

  for (let i = 0; i < num; i++) {
    console.log("This was printed recursively");
    arr.push(fibonacci(i));
  }
  return arr;
}
console.log(fibsRec2(8));