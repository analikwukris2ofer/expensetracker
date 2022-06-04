import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { categories } from "../constants/categories";
import { addExpense } from "../redux/actions/expenses";
import "react-toastify/dist/ReactToastify.css";
import styles from "./addform.module.css";
import SuccessModal from "./success-modal";

const AddForm = () => {
  const ExpenseCategory = categories;
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [modalOpen, setModalOpen] = useState(false);
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
      const notify = () => toast("Please enter complete data");
      notify();
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
    setModalOpen(true);
  };
  return (
    <div className={styles.addform}>
      <ToastContainer
        position="bottom-left"
        autoClose={1600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {/* container called in handleSubmit to show if there was an error in the input */}
      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
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
            {categoryOpen ? (
              <i class="fi fi-rr-angle-small-down"></i>
            ) : (
              <i class="fi fi-rr-angle-small-right"></i>
            )}
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
