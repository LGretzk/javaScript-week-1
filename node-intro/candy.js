class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    console.log(this.name);
  }

  getPrice() {
    console.log(this.price);
  }
};

class ShoppingBasket {
  constructor() {
    this.items = [];
  }

  getTotalPrice() {
    this.total = 0;
    this.items.map(item => this.total += item.getPrice());
    console.log(this.total);
  }

  addItem(item) {
    this.items.push(item);
  }
};