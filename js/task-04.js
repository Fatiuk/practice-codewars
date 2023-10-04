function getSum(a, b) {
  // Find the minimum and maximum values
  const min = Math.min(a, b);
  console.log(min);
  const max = Math.max(a, b);
  console.log(max);

  // Initialize summury
  let sum = 0;

  for (let i = min; i <= max; i += 1) {
    sum += i;
  }

  console.log('sum', sum);
  return sum;
}

getSum(-1, 2);
