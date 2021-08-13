export function formatPrice(price) {
  return price.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  });
}

export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.png",
    section: "Suggested For You..",
    price: 100
  },
 /* {
    img: "/img/burger.jpeg",
    name: "Burger",
    section: "Suggested For You..",
    price: 150
  },*/
  /*{
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpeg",
    section: "Suggested For You..",
    price: 200
  },*/
  /*{
    name: "Pepperoni Pizza",
    img: "/img/pizza2.jpeg",
    section: "Suggested For You..",
    price: 150
  }, 
  {
    img: "/img/sandwich.jpeg",
    name: "Shrimp PoBoy",
    section: "Suggested For You..",
    price: 120
  },
  {
    img: "/img/coke.jpg",
    price: 50,
    name: "Soda",
    section: "Suggested For You..",
    choices: ["Coke", "Sprite", "Fanta"]
  },*/
  {
    name: "Cheese Pizza",
    img: "/img/pizza.png",
    section: "Pizza",
    price: 100
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pizza2.jpeg",
    section: "Pizza",
    price: 150
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizza",
    price: 200
  },
  {
    img: "/img/healthy-pizza.jpeg",
    name: "Veggie Pizza",
    section: "Pizza",
    price: 200
  },
  {
    img: "/img/burger.jpeg",
    name: "Burger",
    section: "Sandwich",
    price: 150
  },
  { img: "/img/gyro.jpeg", name: "Gyro", section: "Sandwich", price: 100 },
  {
    img: "/img/sandwich.jpeg",
    name: "Shrimp PoBoy",
    section: "Sandwich",
    price: 120
  },
  {
    img: "/img/fries.jpeg",
    name: "Fries",
    section: "Sides",
    price: 70
  },
  {
    img: "/img/coke.jpg",
    price: 50,
    name: "Soda",
    section: "Drinks",
    choices: ["Coke", "Sprite", "Fanta"]
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
