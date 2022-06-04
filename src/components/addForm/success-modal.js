import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import styles from "./success.module.css";

const SuccessModal = ({ modalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#d29594",
      borderRadius: "12px",
    },
  };
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className={styles.innermodal}>
        <label>Expense Added Successfully</label>
        <img
          src={require("../assets/payment.png")}
          alt="Expense Added"
          className={styles.addedimage}
        />
        <Link to="/">
          <div className={styles.takehomebutton}>
            <i class="fi fi-sr-home"></i>
            Home
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
