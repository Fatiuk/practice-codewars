function narcissistic(value) {
  // Create digits
  const numberDigits = value.toString().length;
  console.log(numberDigits);
  // Convert the number to an array of digits
  const numberArray = value.toString().split('');
  console.log(numberArray);
  //
}
narcissistic(153);
