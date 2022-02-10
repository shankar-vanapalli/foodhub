import React from "react";
import styles from "../styles/FoodList.module.css";
import FoodCard from "./FoodCard";

const FoodList = ({ foodList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Spicy Food</h1>
      <p className={styles.desc}>Spicy Food for Spicy lovers!</p>
      <div className={styles.wrapper}>
        {foodList.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
