import React from "react";
import moment from "moment";

const formatDateDay = (date) => moment(date).format("ll");
const formatDateTime = (date) => moment(date).format("LT");

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">
        {formatDateDay(time).split(",").slice(0, 1).reverse()}
      </span>
      <span className="transaction__time">
        {formatDateTime(time).split(" ").slice(0, 1)}
      </span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">
        {new Intl.NumberFormat('en-GB', {style: 'decimal'}).format(rate)}
      </span>
      <span className="transaction__amount">
        {new Intl.NumberFormat("en-GB", { maximumSignificantDigits: 3 }).format(
          amount
        )}
      </span>
    </li>
  );
};

export default Transaction;
