import React from "react";
import TopFold from "../../topfold";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <TopFold />
      <div>ExpenseList</div>
    </div>
  );
};

export default Home;
