import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import FoodList from "../components/FoodList";
import styles from "../styles/Home.module.css";

export default function Home({ foodList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food Hub</title>
        <meta name="description" content="Food Hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <FoodList foodList={foodList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      foodList: res.data,
    },
  };
};
