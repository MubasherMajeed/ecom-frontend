import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useUser } from "../lib/authContext";
import { fetcher } from "../lib/api";
import { getTokenFromServerCookie } from "../lib/auth";

export async function getServerSideProps({ req }) {
  const jwt = getTokenFromServerCookie(req);
  let headers = { Authorization: `Bearer ${jwt}` };
  let User = await fetcher(`http://localhost:1337/api/users/me`, {
    headers: headers,
  });
  return {
    props: { User },
  };
}

export default function cart({
  rkey,
  cart,
  addToCart,
  delFromCart,
  clearCart,
  total,
  User,
}) {
  const [payType, setPayType] = useState({
    pay_type: "",
  });
  const { user, loading } = useUser();

  const handleChange = (e) => {
    setPayType(e.target.value);
  };

  const handleSubmit = async (e) => {
    let total;
    try {
      if (typeof window !== undefined) {
        total = JSON.parse(localStorage.getItem("Total"));
        console.log(total);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      const order = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/orders`,
        {
          method: "POST",
          headers: {
            'authorization':
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImlhdCI6MTY2ODYwODg1NywiZXhwIjoxNjcxMjAwODU3fQ.GeghwTu1m3bVJIrOGmWMYPQjN6OJK7vxsjXhswflSIU",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              user_id: User.username,
              grand_total: localStorage.getItem("Total").toString(),
              pay_type: payType,
            },
          }),
        }
      );
      console.log(order);
      console.log("Your order has been posted");

      // Order Details Post Request
      try {
        const order_detail = await fetcher(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/order-details`,
            {
              method: "POST",
              headers: {
                'authorization':
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImlhdCI6MTY2ODYwODg1NywiZXhwIjoxNjcxMjAwODU3fQ.GeghwTu1m3bVJIrOGmWMYPQjN6OJK7vxsjXhswflSIU",
                "Content-Type": "application/json",
              },

              body: JSON.stringify({
                data: {
                  order_id: order.data.id,
                  SubTotal : order.data.attributes.grand_total,
                },
              }),
            }
        );
        console.log(order_detail);
        console.log("Your order details has been posted");
      } catch (error) {
        console.error(error);
      }


    } catch (error) {
      console.error(error);
    }
  };



  return (
    <>
      <Head>
        <title>Baggage | Shopping Cart</title>
      </Head>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item active"> Shopping Cart</li>
      </ol>

      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b className="bold">Shopping Cart</b>
                  </h4>
                </div>
                {/* <div className="col align-self-center text-right text-muted">
                  3 items
                </div> */}
              </div>
            </div>
            {Object.keys(cart).length == 0 && (
              <div className="row">
                <div className="col offset-8">
                  <b className="text-red">Cart is empty!</b>
                </div>
              </div>
            )}
            <ol>
              {Object.keys(cart).map((item) => {
                return (
                  <li key={item}>
                    <div className="row border-top border-bottom">
                      <div className="col">
                        <img
                          width="250px"
                          height="250px"
                          className="img-fluid"
                          src={`http://localhost:1337/uploads/${cart[item].image}`}
                          alt=""
                        />
                      </div>
                      <div className="col">
                        <div className="row text-bold mt-1">
                          {cart[item].name}
                        </div>
                        <div className="row">{cart[item].description}</div>
                      </div>
                      <div className="col m-auto offset-3">
                        <div className="row">
                          <span
                            onClick={() => {
                              delFromCart(
                                item,
                                1,
                                cart[item].price,
                                cart[item].name,
                                cart[item].description,
                                cart[item].image
                              );
                            }}
                            className="fa fa-minus-circle mt-1 offset-2"
                          ></span>
                          <span className="mx-2">{cart[item].qty}</span>
                          <span
                            onClick={() => {
                              addToCart(
                                item,
                                1,
                                cart[item].price,
                                cart[item].name,
                                cart[item].description,
                                cart[item].image
                              );
                            }}
                            className="fa fa-plus-circle mt-1"
                          ></span>
                        </div>
                      </div>
                      <div className="col my-auto">$ {cart[item].subTotal}</div>
                      {/* <span className="fa fa-close my-auto"></span> */}
                    </div>
                  </li>
                );
              })}
            </ol>

            <Link href="/shop">
              <div className="back-to-shop">
                <span className="fa fa-arrow-left"></span>
                <span className="text-muted red-hover"> Back to Shop</span>
              </div>
            </Link>
          </div>
          {Object.keys(cart).length != 0 && (
            <div className="col-md-4 summary">
              <div>
                <h5>Summary</h5>
              </div>
              <hr></hr>
              <div className="row">
                <div className="col">TOTAL</div>
                <div className="col text-right">$ {total}</div>
              </div>
              <form id="cart-form">
                <p>SHIPPING</p>
                <select name="pay_type" onChange={handleChange}>
                  <option className="text-muted">COD</option>
                  <option className="text-muted">Stripe</option>
                  <option className="text-muted">Easypaisa</option>
                </select>

                <div className="row">
                  <div className="col">TOTAL PRICE</div>
                  <div className="col text-right">$ {total + 5}</div>
                </div>
                <div className="content-input-field">
                  {!loading && user ? (
                    <Link href="/checkout">
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="btn"
                      >
                        CHECKOUT
                      </button>
                    </Link>
                  ) : (
                    ""
                  )}
                  {!loading && !user ? (
                    <Link href="/login">
                      <button className="btn">CHECKOUT</button>
                    </Link>
                  ) : (
                    ""
                  )}

                  <button onClick={clearCart} className="btn mt-2">
                    CLEAR CART
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
