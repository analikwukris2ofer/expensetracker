import React from "react";
import Card from "./Card";
import styles from "./expenselist.module.css";

const ExpenseList = () => {
  const list = [
    {
      title: "Made a purchase",
      logo: "hello",
      createdAt: Date.now(),
      amount: 1234,
    },
    {
      title: "Made a purchase",
      logo: "hello",
      createdAt: Date.now(),
      amount: 1234,
    },
  ];
  return (
    <div className={styles.expenselist}>
      {list.length ? list.map((item) => <Card item={item} />) : null}
    </div>
  );
};

export default ExpenseList;
