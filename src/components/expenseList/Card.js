import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../redux/actions/expenses";
import styles from "./card.module.css";

const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteExpense(item));
    notifySuccess();
  };
  return (
    <div
      className={styles.card}
      style={{ borderRight: `6px solid ${item.category.color}` }}
    >
      <div className={styles.cardimagecontainer}>
        <img
          src={item.category.icon}
          alt={item.category.title}
          className={styles.cardimage}
        />
      </div>
      <div className={styles.cardinfo}>
        <label className={styles.cardtitle}>{item.title}</label>
        <label className={styles.cardtime}>{time}</label>
      </div>
      <div className={styles.cardright}>
        <div>
          <label className={styles.cardamount}>${item.amount}</label>
        </div>
        <div className={styles.deleteicon} onClick={handleDelete}>
          <i class="fi fi-rr-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
