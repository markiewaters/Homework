const pizzaToppings = ["Ham", "Cheese", "Onions", "Olives"];

function greetCustomer() {
  console.log(
    "Welcome to Pizza Parlor! Here are the available toppings we have: "
  );
  for (let name of pizzaToppings) {
    console.log(name);
  }
}
greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size} ${crust} pizza with ${toppings} coming right up!`);
  return [size, crust, toppings];
}

getPizzaOrder("large", "thick", pizzaToppings);

function preparePizza([size, crust, pizzaToppings]) {
  console.log("...Cooking pizza...");
  const pizzaType = {
    size: size,
    crust: crust,
    toppings: pizzaToppings
  };
  return pizzaType;
}

let orderType = preparePizza(getPizzaOrder("large", "thick", pizzaToppings));

function servePizza(pizzaType) {
  console.log(
    `Order up! Here's your ${pizzaType.size} ${pizzaType.crust} with ${pizzaType.toppings}. Enjoy!`
  );
  return pizzaType;
}
servePizza(orderType);
