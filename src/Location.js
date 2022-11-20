import React, { useState } from "react";
import "./Location.css";

const Location = ({ street, country, showModal }) => {
  const [modal, setModal] = useState(true);
  const [st, setSt] = useState("");
  const [co, setCo] = useState("");
  //   console.log(street);
  const handleS = (e) => {
    setSt(e.target.value);
    // street = st;
    // console.log(street);
  };
  const handlec = (e) => {
    setCo(e.target.value);
    // street = st;
    // console.log(street);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    country.setCountry(co);
    street.setStreet(st);
    setModal(false);
    showModal.setShowModal(false);
  };

  return (
    <>
      {modal && (
        <div className="ddd">
          <div className="layout"></div>
          <form className="modalForm">
            <label className="formLabel">Enter your adress</label>
            <input
              className="formInput"
              type="text"
              value={st}
              onChange={handleS}
              placeholder="Ex: 2'st alhoria, faisal"
            />
            <label className="formLabel">Enter your city & country</label>
            <input
              className="formInput"
              type="text"
              value={co}
              onChange={handlec}
              placeholder="Ex: Cairo, Egypt"
            />
            <input
              type="submit"
              onClick={handleSubmit}
              className="formSubmit"
            />
          </form>
        </div>
      )}
    </>
  );
};

export default Location;
