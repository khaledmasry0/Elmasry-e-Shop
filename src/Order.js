import React, { useState, useEffect } from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./Checkoutproduct";
import CurrencyFormat from "react-currency-format";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./config";
import { useStateValue } from "./StateProvider";

const Order = ({ order }) => {
  //   console.log(order.data);
  //   console.log(moment.unix(order.data.created));
  const [{ basket, user }, dispatch] = useStateValue();
  const [cre, setCre] = useState("");

  //   console.log(order);
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user && user.uid}`), (snapshot) => {
      // console.log(snapshot.data().basket.map((doc) => doc));
      // console.log(snapshot.data().created);
      user && setCre(snapshot.data().created);
      // console.log(orders);
    });
  }, []);
  return (
    <div className="order">
      <h2>Order</h2>
      {/*<p>{moment.unix(cre).format("MMMM Do YYYY, h:mma")}</p>*/}
      <p className="order__id">
        <small>{order.id}</small>
      </p>

      <CheckoutProduct
        id={order.id}
        title={order.title}
        image={order.image}
        price={order.price}
        rating={order.rating}
        hideButton
      />
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Cost: {value}</h3>
        )}
        decimalScale={2}
        value={order.price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;
