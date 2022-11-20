import React from "react";
import { toast } from "react-toastify";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

// Array(10)
//   .fill()
//   .map((_, i) =>
//     // <p key={i}>🌟</p>
//     console.log(5)
//   );
// console.log(
//   Array(10)
//     .fill()
//     .map((_, i) => 5)
// );

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);

  const removeFromBasket = () => {
    // remove the item from the basket
    toast.info("Removed From Basket", {
      position: "bottom-right",
      autoClose: 1900,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(() => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    }, 300);
  };

  //

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              // <p key={i}>🌟</p>
              <p key={i}>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
