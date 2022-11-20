import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./Checkoutproduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import Location from "./Location";

// import { async } from "@firebase/util";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  // const [modals, setModals] = useState(false);
  const [street, setStreet] = useState("123 react street");
  const [country, setCountry] = useState("Cairo, Egypt");
  const [disabled, setDisabled] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  // if you want to activate the stripe client processing .... fire all fire state
  // and npm firebase emulators:start & all will be fine

  // useEffect(() => {                                               fire all useEffect
  //   const getClientSecret = async () => {
  //     const response = await axios({
  //       method: "post",
  //       url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
  //     });
  //     setClientSecret(response.data.clientSecret);
  //   };
  //   getClientSecret();
  // }, [basket]);

  // console.log("sad", clientSecret);

  const handleSubmit = async (event) => {
    //######
    event.preventDefault();
    setProcessing(true);

    // const payload = await stripe                      fire
    //   .confirmCardPayment(clientSecret, {             fire
    //     payment_method: {                             fire
    //       card: elements.getElement(CardElement),     fire
    //     },                                            fire
    //   })                                              fire
    //   .then(({ paymentIntent }) => {                  fire

    //#########

    // db.collection("users")
    //   .doc(user?.uid)
    //   .collection("orders")
    //   .doc(paymentIntent.id)
    //   .set({
    //     basket: basket,
    //     amount: paymentIntent.amount,
    //     created: paymentIntent.created,
    //   });

    setDoc(
      //   doc(db, "users", `${user && user.uid}`, "orders", paymentIntent.id),
      doc(db, "users", `${user && user.uid}`),
      {
        basket: basket,
        // amount: paymentIntent.amount,
        // created: paymentIntent.created,
      }
    );

    setSucceeded(true);
    setError(null);
    setProcessing(true);

    setTimeout(() => {
      navigate("/orders");
      dispatch({
        type: "EMPTY_BASKET",
      });
    }, 2000);

    // });                                     fire
  };
  const handleChange = (event) => {
    //##########
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      {showModal && (
        <Location
          showModal={{ showModal, setShowModal }}
          street={{ street, setStreet }}
          country={{ country, setCountry }}
          className="lol"
        />
      )}
      <div className="payment__container">
        <h1>
          Checkout ({" "}
          <Link to="/checkout">{basket && basket.length} items </Link>)
        </h1>
        <div className="payment__section payment__section-first">
          <div className="payment__title">
            <h3>Delivery Address</h3>
            <button className="setAdress" onClick={() => setShowModal(true)}>
              Set adress
            </button>
          </div>

          <div className="payment__address">
            <p>{user && user.email}</p>
            <p>{street}</p>
            <p>{country}</p>
          </div>
        </div>

        <div className="payment__section payment__section-sec">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item, i) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={i}
              />
            ))}
          </div>
        </div>
        <div className="payment__section payment__section-last">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
