function narcissistic(value) {
  // Create digits
  const numberDigits = value.toString().length;
  console.log(numberDigits);
  // Convert the number to an array of digits
  const numberArray = value.toString().split('');
  console.log(numberArray);
  //
  const numberNarcissistic = numberArray.reduce((acc, digit) => {
    return acc + Math.pow(parseInt(digit), numberDigits);
  }, 0);
  console.log(numberNarcissistic);
}
narcissistic(153);
