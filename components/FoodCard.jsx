import React from "react";
import styles from "../styles/FoodCard.module.css";
import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${food._id}`} passHref>
        <Image src={food.img} alt="" width="300px" height="300px" />
      </Link>
      <h1 className={styles.title}>{food.title}</h1>
      <span className={styles.price}>₹{food.price}.00</span>
      <p className={styles.desc}>{food.desc}</p>
    </div>
  );
};

export default FoodCard;
