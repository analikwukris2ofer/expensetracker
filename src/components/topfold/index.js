import React, { useState } from "react";
import styles from "./topfold.module.css";

const TopFold = () => {
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
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
          <div className={styles["add-button"]}>
            <i class="fi fi-rr-add"></i>
            <label>Add</label>
          </div>
        </div>
      ) : (
        <div className={styles["add-topfold"]}>
          <div className={styles["add-topfold-button"]}>
            <i class="fi fi-sr-angle-left"></i>
            <label>Back</label>
          </div>
          <div className={styles["add-topfold-button"]}>
            <i class="fi fi-rr-cross-circle"></i>
            <label>Cancel</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopFold;
