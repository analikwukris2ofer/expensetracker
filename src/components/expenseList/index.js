import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Card from "./Card";
import styles from "./expenselist.module.css";

const ExpenseList = () => {
  // const list = [
  //   {
  //     title: "Made a purchase",
  //     logo: "hello",
  //     createdAt: Date.now(),
  //     amount: 1234,
  //   },
  //   {
  //     title: "Made a purchase",
  //     logo: "hello",
  //     createdAt: Date.now(),
  //     amount: 1234,
  //   },
  // ];
  const { expensesList: list } = useSelector((state) => state.expenses);
  const notifySuccess = () => toast.success("Expense Deleted");

  return (
    <div className={styles.expenselist}>
      <ToastContainer
        position="bottom-left"
        autoClose={1600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {list.length ? (
        list.map((item) => <Card item={item} notifySuccess={notifySuccess} />)
      ) : (
        <div className={styles.emptystate}>
          <img
            src={require("../assets/empty.png")}
            alt="Empty List"
            className={styles.emptyimage}
          />
          <label>Uh Oh! Your expense list is empty</label>
        </div>
      )}
      {/* this checks if the list has at least one item in it and then it maps through it */}
    </div>
  );
};

export default ExpenseList;
