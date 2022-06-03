import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { categories } from "../constants/categories";
import { addExpense } from "../redux/actions/expenses";
import styles from "./addform.module.css";

const AddForm = () => {
  const ExpenseCategory = categories;
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };
  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };
  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      // this means if any of this fields are empty
      console.log("No data");
      return;
    }
    const data = {
      title: title,
      amount: amount,
      category: category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
  };
  return (
    <div className={styles.addform}>
      <div className={styles.formitem}>
        <label>Title</label>
        <input
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className={styles.formitem}>
        <label>Amount $</label>
        <input
          placeholder="Enter Amount"
          value={amount}
          className={styles.amountinput}
          onChange={(e) => handleAmount(e)}
        />
      </div>
      <div className={styles.categoryparent}>
        <div className={styles.category}>
          <div
            className={styles.categorydropdown}
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <i class="fi fi-rr-angle-small-down"></i>
          </div>
          {categoryOpen && (
            <div className={styles.categorycontainer}>
              {ExpenseCategory.map((category) => (
                <div
                  className={styles.categoryitem}
                  style={{ borderRight: `5px solid ${category.color}` }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <label>{category.title}</label>
                  <img src={category.icon} alt={category.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.formaddbutton}>
        <div onClick={handleSubmit}>
          Add
          <i class="fi fi-rr-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
