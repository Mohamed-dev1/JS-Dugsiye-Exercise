//Exercise 9

//methods in object
let car = {
  name: "toyota corolla",
  model: "Gli",
  year: 2022,
  start: function () {
    console.log(`The car has started:`, this.model);
  },
};

car.start();
