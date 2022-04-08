import React from "react";
import styles from "./Home.module.css";
import backGround from "../../assets/1.jpg";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.h1}>Shopping Store</h1>
      <img src={backGround} alt="" className={styles.img}/>
    </div>
  );
};

export default Home;
