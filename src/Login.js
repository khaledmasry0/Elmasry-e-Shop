import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./config";
import logo1 from "./images/logo1.png";
import "./Login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const notify = () => toast("Login succeeded");
  const signIn = (e) => {
    e.preventDefault();
    //##########

    setTimeout(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          toast.success("LogIn Succesfully", { autoClose: 2000 });
          setTimeout(() => {
            navigate("/");
          }, 500);
        })
        .catch((error) => {
          // alert(error.message);
          toast.error("Login Error: check your Email & Password");
        });
    }, 200);
  };

  const register = (e) => {
    e.preventDefault();
    //##########
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <ToastContainer />
      <Link to="/">
        <img alt="" className="login__logo" src={logo1} />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Conditions of Use & Sale, If you didn't
          signed in before click create an Account with the same Email &
          Password..
        </p>
        <button onClick={register} className="login__registerButton">
          Create an Account
        </button>
      </div>
    </div>
  );
};

export default Login;
