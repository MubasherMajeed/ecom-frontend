import Head from 'next/head'
import React from 'react'
import Router from 'next/router';
import { useState } from 'react';
import { fetcher } from '../lib/api';
import { getTokenFromServerCookie } from '../lib/auth';

export async function getServerSideProps({ req }) {
    const jwt = getTokenFromServerCookie(req);
    let headers = { Authorization: `Bearer ${jwt}` }
    let userResponse = await fetch(`http://localhost:1337/api/users/me`, { headers: headers });
    let user = await userResponse.json()
    return {
      props: { user },
    };
  }

export default function setProfile({user}) {

    const [data, setData] = useState();
    
      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          let userData = await fetcher(`http://localhost:1337/api/users/${user.id}`,
            {
              method: 'PUT',
              headers: {
                Authorization: "Bearer 68259be489838433056497d6730fa5dbb58db413ee5554bd518d3355e842b47261245e51b8cf9f1b91b51ea0c83014e92603a68a508cb98ef27e6970a6b893cf82c7460c08fbcd7248f33ec3eef183daa0aa30c2a6129d693e312106a4de5c23c4ddb627869147cd11ffa1323781254909976c59059b3bcb74967a972b18daf0",
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                contact: data.contact,
                address: data.address,
                area: data.area,
                city: data.city,
                state: data.state,
                country: data.country,
              }),
            }
          );
          Swal.fire("Your profile has been updated successfully!", "success");
          Router.push("/profile");
        }
        catch (error) {
          console.error(error);
        }
      };

  return (
    <>
      <Head>
        <title>Bagagge | Set Profile</title>
      </Head>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-5 offset-3">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="text-right">Update Your Profile</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      name="username"
                      type="text"
                      className="form-control"
                      value={user.username}
                      disabled
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Gender</label>
                    <input
                      name="gender"
                      type="text"
                      className="form-control"
                      value={user.gender}
                      disabled
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Mobile Number</label>
                    <input
                      name="contact"
                      type="text"
                      className="form-control"
                      placeholder={user.contact}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      value={user.email}
                      disabled
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Address</label>
                    <input
                      name="address"
                      type="text"
                      className="form-control"
                      placeholder={user.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Area</label>
                    <input
                      name="area"
                      type="text"
                      className="form-control"
                      placeholder={user.area}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">City</label>
                    <input
                      name="city"
                      type="text"
                      className="form-control"
                      placeholder={user.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">State</label>
                    <input
                      name="state"
                      type="text"
                      className="form-control"
                      placeholder={user.state}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Country</label>
                    <input
                      name="country"
                      type="text"
                      className="form-control"
                      placeholder={user.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
