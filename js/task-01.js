const exampleString = 'This is an example!';

function reverseWords(str) {
  const reverseString = str
    .split(' ')
    .map(word => word.split('').reverse().join(''));
  return reverseString.join(' ');
}

reverseWords(exampleString);

console.log(reverseWords(exampleString));
