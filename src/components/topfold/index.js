import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchExpense } from "../redux/actions/expenses";
import styles from "./topfold.module.css";

const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div className={styles.topfold}>
      {window.location.pathname === "/" ? (
        <div className={styles["home-topfold"]}>
          <div className={styles.searchbar}>
            <i class="fi fi-rr-search"></i>
            <input
              placeholder="Search for expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/addexpense">
            <div className={styles["add-button"]}>
              <i class="fi fi-rr-add"></i>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className={styles["add-topfold"]}>
          <Link to="/">
            <div className={styles["add-topfold-button"]}>
              <i class="fi fi-sr-angle-left"></i>
              <label>Back</label>
            </div>
          </Link>
          <Link to="/">
            <div className={styles["add-topfold-button"]}>
              <i class="fi fi-rr-cross-circle"></i>
              <label>Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopFold;
