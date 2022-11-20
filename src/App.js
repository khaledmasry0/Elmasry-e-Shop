import "./App.css";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./config";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders";
import Footer from "./Footer";
import Prime from "./Prime";
import Contact from "./Contact";

const promise = loadStripe(
  "pk_test_51M3rkEIMAD5fKj4SJBluilSV72xmzplMi9P6siQIzLSqMacpWkGtoR9GdDe8DneDm7MR3gsa0XbaeLR4luYQKLZ200UEBnqbiF"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS : ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home /> <Footer />
            </>
          }
        />
        <Route path="/:id" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/prime" element={<Prime />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
