import { useEffect, useState, useCallback } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [foodMenu, setFoodMenu] = useState([]);

  const fetchMeals = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
       const response = await fetch(
        "https://food-order-app-a3d39-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went Wrong");
      }

      const data = await response.json();

      const menuOption = [];

      for (let key in data) {
        menuOption.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setFoodMenu(menuOption);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  let toRender;

  if (isLoading) {
    toRender = <p>Loading ...</p>;
  }

  if (error) {
    toRender = <p>{error}</p>;
  }

  if (foodMenu.length > 0) {
    toRender = foodMenu.map((item) => {
      return (
        <MealItem
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      );
    });
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{toRender}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
