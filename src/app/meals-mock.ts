import { Category, Menu } from "./mealTypes";
import { Ingredient, Burger } from "./ingredient";

const salad = new Ingredient("Salade");
const tomato = new Ingredient("Tomate");
const ketchup = new Ingredient("Ketchup");
const gherkin = new Ingredient("Cornichon");
const cheese = new Ingredient("Fromage");
const mayonnaise = new Ingredient("Mayonnaise");
const bacon = new Ingredient("Bacon");
const burger = new Ingredient("Burger");
const fish = new Ingredient("Poisson Pané");
const doubleBurger = new Ingredient("Double Burger");
const chicken = new Ingredient("Poulet Frit");

const classicBurger = new Burger("Classic", [burger, salad, tomato, gherkin])
const baconBurger = new Burger("Bacon", [burger, cheese, bacon, salad, tomato])
const bigBurger = new Burger("Big Burger", [doubleBurger, cheese, gherkin, tomato])
const chickenBurger = new Burger("Chicken", [chicken, tomato, salad, mayonnaise])
const fishBurger = new Burger("Fish", [fish, salad, mayonnaise, gherkin])
const doubleSteakBurger = new Burger("Double Steak", [doubleBurger, salad, mayonnaise, gherkin])


export const MENUS:Menu[] = [
  {
    id: 1,
    meal: "Menu Classic",
    description:
      "Sandwich: Burger, Salade, Tomate, Cornichon + Frites + Boisson",
    price: 8.9,
    image: "/assets/images/m1.png",
    category: 1,
  },
  {
    id: 2,
    meal: "Menu Bacon",
    description:
      "Sandwich: Burger, Fromage, Bacon, Salade, Tomate + Frites + Boisson",
    price: 9.5,
    image: "/assets/images/m2.png",
    category: 1,
  },
  {
    id: 3,
    meal: "Menu Big",
    description:
      "Sandwich: Double Burger, Fromage, Cornichon, Salade + Frites + Boisson",
    price: 10.9,
    image: "/assets/images/m3.png",
    category: 1,
  },
  {
    id: 4,
    meal: "Menu Chicken",
    description:
      "Sandwich: Poulet Frit, Tomate, Salade, Mayonnaise + Frites + Boisson",
    price: 9.9,
    image: "/assets/images/m4.png",
    category: 1,
  },
  {
    id: 5,
    meal: "Menu Fish",
    description:
      "Sandwich: Poisson, Salade, Mayonnaise, Cornichon + Frites + Boisson",
    price: 10.9,
    image: "/assets/images/m5.png",
    category: 1,
  },
  {
    id: 6,
    meal: "Menu Double Steak",
    description:
      "Sandwich: Double Burger, Fromage, Bacon, Salade, Tomate + Frites + Boisson",
    price: 11.9,
    image: "/assets/images/m6.png",
    category: 1,
  },
  {
    id: 7,
    meal: "Classic",
    description: "Sandwich: Burger, Salade, Tomate, Cornichon",
    price: 5.9,
    image: "/assets/images/b1.png",
    category: 2,
  },
  {
    id: 8,
    meal: "Bacon",
    description: "Sandwich: Burger, Fromage, Bacon, Salade, Tomate",
    price: 6.5,
    image: "/assets/images/b2.png",
    category: 2,
  },
  {
    id: 9,
    meal: "Big",
    description: "Sandwich: Double Burger, Fromage, Cornichon, Salade",
    price: 6.9,
    image: "/assets/images/b3.png",
    category: 2,
  },
  {
    id: 10,
    meal: "Chicken",
    description: "Sandwich: Poulet Frit, Tomate, Salade, Mayonnaise",
    price: 5.9,
    image: "/assets/images/b4.png",
    category: 2,
  },
  {
    id: 11,
    meal: "Fish",
    description: "Sandwich: Poisson Pané, Salade, Mayonnaise, Cornichon",
    price: 6.5,
    image: "/assets/images/b5.png",
    category: 2,
  },
  {
    id: 12,
    meal: "Double Steak",
    description: "Sandwich: Double Burger, Fromage, Bacon, Salade, Tomate",
    price: 7.5,
    image: "/assets/images/b6.png",
    category: 2,
  },
  {
    id: 13,
    meal: "Frites",
    description: "Pommes de terre frites",
    price: 3.9,
    image: "/assets/images/s1.png",
    category: 3,
  },
  {
    id: 14,
    meal: "Onion Rings",
    description: "Rondelles d'oignon frits",
    price: 3.4,
    image: "/assets/images/s2.png",
    category: 3,
  },
  {
    id: 15,
    meal: "Nuggets",
    description: "Nuggets de poulet frits",
    price: 5.9,
    image: "/assets/images/s3.png",
    category: 3,
  },
  {
    id: 16,
    meal: "Nuggets Fromage",
    description: "Nuggets de fromage frits",
    price: 3.5,
    image: "/assets/images/s4.png",
    category: 3,
  },
  {
    id: 17,
    meal: "Ailes de Poulet",
    description: "Ailes de poulet Barbecue",
    price: 5.9,
    image: "/assets/images/s5.png",
    category: 3,
  },
  {
    id: 18,
    meal: "Cæsar Poulet Pané",
    description: "Poulet Pané, Salade, Tomate et la fameuse sauce Cæsar",
    price: 8.9,
    image: "/assets/images/sa1.png",
    category: 4,
  },
  {
    id: 19,
    meal: "Cæsar Poulet Grillé",
    description: "Poulet Grillé, Salade, Tomate et la fameuse sauce Cæsar",
    price: 8.9,
    image: "/assets/images/sa2.png",
    category: 4,
  },
  {
    id: 20,
    meal: "Salade Light",
    description: "Salade, Tomate, Concombre, Maïs et Vinaigre balsamique",
    price: 5.9,
    image: "/assets/images/sa3.png",
    category: 4,
  },
  {
    id: 21,
    meal: "Poulet Pané",
    description: "Poulet Pané, Salade, Tomate et la sauce de votre choix",
    price: 7.9,
    image: "/assets/images/sa4.png",
    category: 4,
  },
  {
    id: 22,
    meal: "Poulet Grillé",
    description: "Poulet Grillé, Salade, Tomate et la sauce de votre choix",
    price: 7.9,
    image: "/assets/images/sa5.png",
    category: 4,
  },
  {
    id: 23,
    meal: "Coca-Cola",
    description: "Au choix: Petit, Moyen ou Grand",
    price: 1.9,
    image: "/assets/images/bo1.png",
    category: 5,
  },
  {
    id: 24,
    meal: "Coca-Cola Light",
    description: "Au choix: Petit, Moyen ou Grand",
    price: 1.9,
    image: "/assets/images/bo2.png",
    category: 5,
  },
  {
    id: 25,
    meal: "Coca-Cola Zéro",
    description: "Au choix: Petit, Moyen ou Grand",
    price: 1.9,
    image: "/assets/images/bo3.png",
    category: 5,
  },
  {
    id: 26,
    meal: "Fanta",
    description: "Au choix: Petit, Moyen ou Grand",
    price: 1.9,
    image: "/assets/images/bo4.png",
    category: 5,
  },
  {
    id: 27,
    meal: "Sprite",
    description: "Au choix: Petit, Moyen ou Grand",
    price: 1.9,
    image: "/assets/images/bo5.png",
    category: 5,
  },
  {
    id: 28,
    meal: "Nestea",
    description: "Au choix: Petit, Moyen ou Grand",
    price: 1.9,
    image: "/assets/images/bo6.png",
    category: 5,
  },
  {
    id: 29,
    meal: "Fondant au chocolat",
    description: "Au choix: Chocolat Blanc ou au lait",
    price: 4.9,
    image: "/assets/images/d1.png",
    category: 6,
  },
  {
    id: 30,
    meal: "Muffin",
    description: "Au choix: Au fruits ou au chocolat",
    price: 2.9,
    image: "/assets/images/d2.png",
    category: 6,
  },
  {
    id: 31,
    meal: "Beignet",
    description: "Au choix: Au chocolat ou Ã  la vanille",
    price: 2.9,
    image: "/assets/images/d3.png",
    category: 6,
  },
  {
    id: 32,
    meal: "Milkshake",
    description: "Au choix: Fraise, Vanille ou Chocolat",
    price: 3.9,
    image: "/assets/images/d4.png",
    category: 6,
  },
  {
    id: 33,
    meal: "Sundae",
    description: "Au choix: Fraise, Caramel ou Chocolat",
    price: 4.9,
    image: "/assets/images/d5.png",
    category: 6,
  },
];

export const CATEGORIES:Category[] = [
    { id: 1, label: 'Menus', isActive:true },
    { id: 2, label: 'Burgers' },
    { id: 3, label: 'Snacks' },
    { id: 4, label: 'Salades' },
    { id: 5, label: 'Boissons' },
    { id: 6, label: 'Desserts' },
  ];