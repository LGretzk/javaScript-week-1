const fizzbuzz = (num) => {
  if ((num %3 === 0) && (num %5 === 0)) {
    return 'FizzBuzz';
  } else if (num %3 === 0) {
    return 'Fizz'; 
  } else if (num %5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }
};

const fizzbuzzUntil = (int) => {
  for (let num = 1; num <= int; num++) {
    if ((num %3 === 0) && (num %5 === 0)) {
      console.log('FizzBuzz');
    } else if (num %3 === 0) {
      console.log('Fizz'); 
    } else if (num %5 === 0) {
      console.log('Buzz');
    } else {
      console.log(num);
    };
  };
};

module.exports = fizzbuzz;
// module.exports = fizzbuzzUntil;