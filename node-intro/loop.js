for (let i=1; i<=20; i++) {
  if (i %2 === 0) {
    console.log(`${i} is even`)
  } else {
    console.log(`${i} is odd`)
  }
}

arr = [1,2,3,4,5,6,7,8,9,10];

let result = 0;

arr.forEach(element => {
  result += element;
});

console.log(result);