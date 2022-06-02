import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles.header}>
        <div className={styles.headerlogo}>
          XTracker <i class="fi fi-sr-credit-card"></i>
        </div>
        <div className={styles.headerbutton}>
          <a
            href="https://github.com/analikwukris2ofer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="devicon-github-original"></i>Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
