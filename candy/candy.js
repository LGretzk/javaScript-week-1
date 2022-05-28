const searchCandies = (str, num) => {
  const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
  ];

  let result = candies.filter(obj => obj.name.includes(str));

  let result2 = result.filter(obj => (obj.price < num));

  return result2.map(obj => obj.name);
};

const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

class ShoppingBasket {
  constructor(candies) {
    this.discount = 0;
    this.candies = candies;
    this.totalPrice = 0;
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    // let totalPrice = 0;
    this.candies.forEach((candy) => {
      this.totalPrice += candy.price;
    });

    return this.totalPrice - this.discount;
  }
}

const basket = new ShoppingBasket(candies);

basket.applyDiscount(5);

console.log(basket.getTotalPrice());


module.exports = ShoppingBasket;