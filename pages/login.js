import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { fetcher } from "../lib/api";
import { setToken } from "../lib/auth";

export default function Login() {
  const [data, setData] = useState({
    identifier: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(data));
    setIsSubmit(true);

    try {
      const responseData = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: data.identifier,
            password: data.password,
          }),
        }
      );
      setToken(responseData);
      Swal.fire("Welcome!", "You have signed in successfully!", "success");
    } catch (error) {
      console.log(error);
      if (Object.keys(errors).length === 0 && isSubmit) {
        Swal.fire({
          icon: "error",
          text: "Incorrect username or password!",
        });
      }
    }
  };

  const validate = (values) => {
    const formErrors = {}

    if(!values.identifier) {
      formErrors.identifier = "Username is required!"
    }
     if (!values.password) {
       formErrors.password = "Password is required!";
     }

     return formErrors;
  }

  return (
    <>
      <Head>
        <title>Baggage | Login</title>
      </Head>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Login</li>
      </ol>

      <section className="banner-bottom py-5">
        <div className="container">
          <div className="content-grid">
            <div className="text-center icon">
              <span className="fa fa-unlock-alt"></span>
            </div>
            <div className="content-bottom">
              <form onSubmit={handleSubmit}>
                <div className="field-group">
                  <div className="content-input-field">
                    <input
                      name="identifier"
                      id="text1"
                      type="text"
                      placeholder="Username"
                      onChange={handleChange}
                    />
                  </div>
                  <p className="text-danger mb-2">{errors.identifier}</p>
                </div>
                <div className="field-group">
                  <div className="content-input-field">
                    <input
                      name="password"
                      id="myInput"
                      type="Password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                  </div>
                  <p className="text-danger mt-0 mb-2">{errors.password}</p>
                </div>
                <div className="content-input-field">
                  <button type="submit" className="btn">
                    Sign In
                  </button>
                </div>
                {/* <ul className="list-login">
                  <li className="switch-slide">
                      <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                          keep Logged in
                      </label>
                  </li>
                  <li>
                      <Link href="#"><a className="text-right">Forgot password?</a></Link>
                  </li>
                  <li className="clearfix"></li>
                  </ul>
                  <ul className="list-login-bottom">
                      <li className="">
                          <Link href="/register"><a className="">Don&#39;t have an Account?</a></Link>
                      </li>
                      <li className="">
                          <Link href="#"><a className="text-right">Need Help?</a></Link>
                      </li>
                      <li className="clearfix"></li>
                  </ul> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
