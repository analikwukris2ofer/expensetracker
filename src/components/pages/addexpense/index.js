import React from "react";
import AddForm from "../../addForm";
import TopFold from "../../topfold";
import styles from "./expense.module.css";

const AddExpense = () => {
  return (
    <div className={styles.expense}>
      <TopFold />
      <AddForm />
    </div>
  );
};

export default AddExpense;
