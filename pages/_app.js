import Layout from "../components/Layout";
import { useFetchUser } from "../lib/authContext";
import { useEffect, useState } from "react";
import "../public/css/bootstrap.css";
import "../public/css/font-awesome.css";
import "../public/css/style.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  const { user, loading } = useFetchUser();

  useEffect(() => {
    return () => {
      console.log("I am useEffect from _app.js");

      try {
        if (localStorage.getItem("cart")) {
          setCart(JSON.parse(localStorage.getItem("cart")));
        }
      } catch (error) {
        console.error(error);
        localStorage.clear();
      }
    };
  }, [])

  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0.0);
  const [reloadKey, setReloadKey] = useState(1);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let Tot = 0.0;
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      Tot += myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setTotal(Tot);
    localStorage.setItem("Total", JSON.stringify(Tot))
  }

  const addToCart = (item, qty, price, name, description, image) => {
    let newCart = cart
    let subTot = 0.0;
    if (item in cart) {
      newCart[item].qty = cart[item].qty + qty
    } else {
      newCart[item] = { qty: 1, price, name, description, image }
    }
    subTot = newCart[item].qty * newCart[item].price;
    newCart[item].subTotal = subTot;
    console.log(newCart)
    setCart(newCart)
    setReloadKey(Math.random())
    saveCart(newCart)
  }

  const delFromCart = (item, qty, price, name, description, image) => {
    let newCart = cart
    let subTot = 0.0;
    if (item in cart) {
      newCart[item]["qty"] = cart[item].qty - qty;
      subTot = newCart[item].qty * newCart[item].price;
      newCart[item].subTotal = subTot;
    }
    if (newCart[item].qty <= 0) {
      delete newCart[item]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
    setTotal(0.0)
  }

  return (
    <Layout
      user={user}
      rkey={reloadKey}
      cart={cart}
      addToCart={addToCart}
      delFromCart={delFromCart}
      clearCart={clearCart}
      total={total}
    >
      <Component
        rkey={reloadKey}
        cart={cart}
        addToCart={addToCart}
        delFromCart={delFromCart}
        clearCart={clearCart}
        total={total}
        {...pageProps}
      />
    </Layout>
  );
}

export default MyApp;
