import React from "react";
import TopFold from "../../topfold";
import styles from "./home.module.css";
import ExpenseList from "../../expenseList";

const Home = () => {
  return (
    <div className={styles.home}>
      <TopFold />
      <ExpenseList />
    </div>
  );
};

export default Home;
