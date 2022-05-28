const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

const  cohort = {
  name: 'May2022',
  id: 1234,
  students: ['Luiza', 'Erlantz', 'Jimmy', 'Alex']
};

const message = (obj) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`);
};

const checkLength = (str_num) => {
  if (str_num.length <= 10) {
    return true;
  } else {
    return false;
  };
};

const filterLongNumbers = (arr) => {
  return arr.filter(checkLength);
};

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla',discount:  6 }
];

const generateMessages = (arr) => {
  return arr.map((obj) => {
    console.log(`Hi ${obj.name}! ${obj.discount} off our best candies for you today!`);
  });
};

