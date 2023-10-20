import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 3090,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 2250,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 3450,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 2750,
  },
  {
    id: "m5",
    name: "Chicken Parmesan",
    description: "Italian classic with chicken and cheese",
    price: 2890,
  },
  {
    id: "m6",
    name: "Seafood Paella",
    description: "Spanish delight with a variety of seafood",
    price: 3150,
  },
  {
    id: "m7",
    name: "Vegetable Curry",
    description: "Spicy and flavorful vegetarian dish",
    price: 2590,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
