/**
 * 
 * @param {string} numbers 
 * @returns 
 */
function iqTestWithForEach(numbers) {
  let nums = numbers.split(' ');
  let numberOfEven = 0;
  let numberOfOdd = 0;
  let locationOfLastOdd;
  let locationOfLastEven;

  let theDifferentOne;

  let i = 1;
  nums.forEach(num => {
    if(num % 2 === 0) {
      numberOfEven += 1;
      locationOfLastEven = i;
    } else {
      numberOfOdd += 1;
      locationOfLastOdd = i;
    }

    if (numberOfEven > 1 && numberOfOdd === 1) {
      theDifferentOne = locationOfLastOdd;
    } else if (numberOfOdd > 1 && numberOfEven === 1) {
      theDifferentOne = locationOfLastEven;
    }

    i++;
  });

  return theDifferentOne;
}

/**
 * 
 * @param {string} numbers 
 */
function iqTestWithMap(numbers) {
  numbers = numbers.split(' ').map(x => parseInt(x));

  let evens = numbers.filter(x => x % 2 === 0);
  let odds = numbers.filter(x => x % 2 === 1);

  return evens.length < odds.length 
      ? numbers.lastIndexOf(evens[0]) + 1
      : numbers.lastIndexOf(odds[0]) + 1;
}


console.log(iqTestWithForEach("2 4 5 6 10"));
console.log(iqTestWithForEach("1 3 5 6 7 9"));