import React from "react";
import MealItem from "../MealItem/MealItem";
import Card from "../../UI/Card/Card";
import styles from './AvailableMeals.module.css'

export default function AvailableMeals() {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        description={meal.description}
        name={meal.name}
        price={meal.price}
      />
    );
  });
  return (
    <Card className={styles['available-meals']}>
      <ul>{mealsList}</ul>
    </Card>
  );
}
