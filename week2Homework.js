let pizzaPlace = "MarkieMark's Pizza";
let numberOfToppings = 20;
console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);
console.log(
  `Welcome to ${pizzaPlace}, where we have ${numberOfToppings} toppings to put on your pizza!`
);
let qualQuan = "Quality, not quantity";
let lotOfPizza = "A whole lot of pizza";
if (numberOfToppings <= 10) {
  console.log(qualQuan);
} else {
  console.log(lotOfPizza);
}

// Bonus Challenge
for (let i = 2; i <= numberOfToppings; i += 2) {
  console.log(i);
}
