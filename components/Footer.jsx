import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/bg.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>Yes, We did it!</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find Our Restaurants</h1>
          <p className={styles.text}>
            Ramanthapur
            <br /> Hyderabad, 500013
            <br /> (91) 961 864 2576
          </p>
          <p className={styles.text}>
            Ramanthapur
            <br /> Hyderabad, 500013
            <br /> (91) 961 864 2576
          </p>
          <p className={styles.text}>
            Ramanthapur
            <br /> Hyderabad, 500013
            <br /> (91) 961 864 2576
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working Hours</h1>
          <p className={styles.text}>
            Monday Until Friday
            <br /> 9:00 - 21:00
          </p>
          <p className={styles.text}>
            Sunday
            <br /> 10:00 - 21:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
