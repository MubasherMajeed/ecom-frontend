import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useUser } from '../lib/authContext';
import { unsetToken } from '../lib/auth';

export default function Header({ cart }) {
	
  const { user, loading } = useUser();

  const logout = () => {
    unsetToken();
    Swal.fire("Goodbye!", "You have signed out successfully!", "success");
  };

  return (
    <div className="main-sec inner-page">
      <header className="py-sm-3 pt-3 pb-2" id="home">
        <div className="container">
          {/* <!-- nav --> */}
          <div className="top-w3pvt d-flex">
            <div id="logo">
              <Link href="/">
                <a>
                  <Image src="/logo.png" width={100} height={100} alt="logo" />
                </a>
              </Link>
              <h1>
                <Link href="/">
                  <a>
                    <span className="log-w3pvt">B</span>aggage
                  </a>
                </Link>
                <label className="sub-des">Online Store</label>
              </h1>
            </div>

            <div className="forms ml-auto">
              {!loading && !user ? (
                <>
                  <Link href="/login">
                    <a className="btn">
                      <span className="fa fa-sign-in"></span> Sign In
                    </a>
                  </Link>

                  <Link href="/register">
                    <a className="btn">
                      <span className="fa fa-pencil-square-o"></span> Sign Up
                    </a>
                  </Link>
                </>
              ) : (
                ""
              )}

              {!loading &&
                (user ? (
                  <>
                    <Link href="/profile">
                      <a className="btn">
                        <span className="fa fa-user-circle-o"></span> Profile
                      </a>
                    </Link>

                    <a className="btn" onClick={logout}>
                      <span className="fa fa-sign-out"></span> Sign Out
                    </a>
                  </>
                ) : (
                  ""
                ))}
            </div>
          </div>
          <div className="nav-top-wthree">
            <nav>
              <label htmlFor="drop" className="toggle">
                <span className="fa fa-bars"></span>
              </label>
              <input type="checkbox" id="drop" />
              <ul className="menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/shop">
                    <a>Shop</a>
                  </Link>
                </li>
                <li>
                  <Link href="/cart">
                    <a>
                      Cart({Object.keys(cart).length}) <span className="fa fa-shopping-bag" aria-hidden="true"></span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            {/* <!-- //nav --> */}
            <div className="search-form ml-auto">
              <div className="form-w3layouts-grid">
                <form action="#" method="post" className="newsletter">
                  <input
                    className="search"
                    type="search"
                    placeholder="Search here..."
                    required=""
                  />
                  <button className="form-control btn" value="">
                    <span className="fa fa-search"></span>
                  </button>
                </form>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </header>
    </div>
  );
}