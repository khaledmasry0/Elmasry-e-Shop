import React, { useState, useEffect } from "react";
import { db } from "./config";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import { doc, onSnapshot } from "firebase/firestore";
import Order from "./Order";
import CurrencyFormat from "react-currency-format";
import { orderBy } from "firebase/firestore";
import { getBasketTotal } from "./reducer";

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  const [amounts, setAmounts] = useState("");

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user && user.uid}`), (snapshot) => {
        //   onSnapshot(doc(db, "users", `${user && user.uid}`, "orders", ()), (snapshot) => {
        // console.log(snapshot.data().basket.map((doc) => doc));
        // console.log(snapshot.data());
        setOrders(
          //   snapshot.data().basket.map((doc) => ({ id: doc.id, data: doc }))
          snapshot.data().basket
        );
        setAmounts(
          snapshot.data().basket.reduce((a, e) => (a = a + e.price), 0)
        );
        // console.log(orders);
        // dispatch({
        //   type: "EMPTY_BASKET",
        // });

        // console.log(
        //   snapshot.data().basket.reduce((a, e) => (a = a + e.price), 0)
        // );
      });
    } else {
      setOrders([]);
    }
  }, [user]);
  // console.log(amounts);

  return (
    <div className="orders">
      <h1>{user ? "Your Completed Orders" : "Sign In First"}</h1>
      {user && (
        <CurrencyFormat
          renderText={(value) => (
            <h3 className="order__total">Total Cost: {value}</h3>
          )}
          decimalScale={2}
          value={amounts}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      )}
      <div className="orders__order">
        {orders?.map((order, i) => (
          <Order key={i} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
