function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i += 1) {
    console.log('numbers[i]', numbers[i]);
    for (let j = i + 1; j < numbers.length; j += 1) {
      console.log('numbers[j]', numbers[j]);
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

twoSum([1, 2, 3, 4, 5, 6], 11);
