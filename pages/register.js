import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { setToken } from "../lib/auth";
import { fetcher } from "../lib/api";

export default function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    contact: "",
    address: "",
    area: "",
    city: "",
    state: "",
    country: "",
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
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password,
            gender: data.gender,
            contact: data.contact,
            address: data.address,
            area: data.area,
            city: data.city,
            state: data.state,
            country: data.country,
          }),
        }
      );
      const emailRes = await fetcher(`http://localhost:1337/api/emails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
        }),
      });
      console.log(emailRes);
      setToken(responseData);
      Swal.fire("Authentication", "Please check your email to register yourself", "success");
    } catch (error) {
      console.error(error);
    }
  };

  const validate = (values) => {
    const formErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      formErrors.username = "Username is required!";
    }
    if (!values.email) {
      formErrors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      formErrors.email = "Invalid email format!";
    }
    if (!values.password) {
      formErrors.password = "Password is required!";
    }
    if (!values.contact) {
      formErrors.contact = "Contact is required!";
    }
    if (!values.address) {
      formErrors.address = "Address is required!";
    }
    if (!values.area) {
      formErrors.area = "Area is required!";
    }
    if (!values.city) {
      formErrors.city = "City name is required!";
    }
    if (!values.state) {
      formErrors.state = "State name is required!";
    }
    if (!values.country) {
      formErrors.country = "Country name is required!";
    }

    return formErrors;
  };

  return (
    <>
      <Head>
        <title>Baggage | Login</title>
      </Head>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Registration</li>
      </ol>

      <section className="banner-bottom py-5">
        <div className="container">
          <div className="content-grid">
            <div className="text-center icon">
              <span className="fa fa-user-circle-o fa-2x"></span>
            </div>
            <div className="content-bottom">
              <form onSubmit={handleSubmit}>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      name="username"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <p className="text-danger mb-2">{errors.username}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Gender</label>
                    <select
                      name="gender"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Mobile Number</label>
                    <input
                      name="contact"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <p className="text-danger mb-2">{errors.contact}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-8">
                    <label className="labels">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <p className="text-danger mb-2">{errors.email}</p>
                  </div>
                  <div className="col-md-8">
                    <label className="labels">Password</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <p className="text-danger mb-2">{errors.password}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Address</label>
                    <input
                      name="address"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <p className="text-danger mb-2">{errors.address}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Area</label>
                    <input
                      name="area"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <p className="text-danger mb-2">{errors.area}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="labels">City</label>
                    <input
                      name="city"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <p className="text-danger mb-2">{errors.city}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="labels">State</label>
                    <input
                      name="state"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <p className="text-danger mb-2">{errors.state}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Country</label>
                    <input
                      name="country"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <p className="text-danger mb-2">{errors.country}</p>
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
