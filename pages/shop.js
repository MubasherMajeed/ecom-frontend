import React from "react";
import Link from "next/link";
import Head from "next/head";
import { fetcher } from "../lib/api";
import Newsletter from "../components/Newsletter";

export async function getServerSideProps() {
  let totebags = await fetcher(
    "http://localhost:1337/api/products?filters[product_category][c_Id][$eq]=Tote&populate=*"
  );
  let handbags = await fetcher(
    "http://localhost:1337/api/products?filters[product_category][c_Id][$eq]=HB&populate=*"
  );
  let crossbodybags = await fetcher(
    "http://localhost:1337/api/products?filters[product_category][c_Id][$eq]=CB&populate=*"
  );
  let laptopbags = await fetcher(
    "http://localhost:1337/api/products?filters[product_category][c_Id][$eq]=LP&populate=*"
  );

  let categories = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/product-categories?populate=*`
  );

  return {
    props: { totebags, handbags, crossbodybags, laptopbags, categories },
  };
}

export default function shop({
  totebags,
  handbags,
  crossbodybags,
  laptopbags,
  addToCart,
  categories,
}) {
  return (
    <div>
      <Head>
        <title>Baggage | Shop</title>
      </Head>

      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Collections</li>
      </ol>

      <section className="banner-bottom py-5">
        <div className="container py-5">
          {categories &&
            categories.data.map((category) => (
              <div key={category.attributes.c_Id}>
                <h3 className="title-wthree mb-lg-5 mb-4 mt-lg-5 text-center">
                  {category.attributes.name}
                </h3>
                <div className="row shop-wthree-info text-center">
                  {category.attributes.products.data.map((product) => {
                    // console.log(product);
                    if (product.attributes.image_name != null){
                      const myArray = product.attributes.image_name.split(".");
                      console.log(myArray[0])
                    }

                    return (
                      <div
                        key={product.attributes.p_Id}
                        className="col-lg-3 shop-info-grid text-center mt-4"
                      >
                        <div className="product-shoe-info shoe">
                          <div className="men-thumb-item">
                            <Link href={`/product/${product.attributes.p_Id}`}>
                              <a>
                                <img
                                  src={`http://localhost:1337/uploads/${product.attributes?.image_name}`}
                                  width={250}
                                  height={250}
                                  className="img-fluid"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="item-info-product">
                            <h4>
                              <Link href="/single">
                                <a>{product.attributes.name}</a>
                              </Link>
                            </h4>
                            <div className="product_price">
                              <div className="grid-price">
                                <span className="money">
                                  ${product.attributes.price}
                                </span>
                              </div>
                            </div>
                            <button
                              onClick={() => {
                                addToCart(
                                  product.attributes.p_Id,
                                  1,
                                  product.attributes.price,
                                  product.attributes.name,
                                  product.attributes.description,
                                  product.attributes.image_name
                                );
                              }}
                              className="btn btn-success mt-1"
                            >
                              Add to Cart{" "}
                              <span
                                className="fa fa-shopping-bag"
                                aria-hidden="true"
                              ></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          {/* <h3 className="title-wthree mb-lg-5 mb-4 text-center">Tote Bags</h3>
          <div className="row shop-wthree-info text-center">
            {totebags &&
              totebags.data.map((totebag) => (
                <div
                  key={totebag.attributes.p_Id}
                  className="col-lg-3 shop-info-grid text-center mt-4"
                >
                  <div className="product-shoe-info shoe">
                    <div className="men-thumb-item">
                      <img
                        src={`http://localhost:1337${totebag.attributes?.images?.data?.attributes?.formats?.thumbnail?.url}`}
                        width={250}
                        height={250}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="item-info-product">
                      <h4>
                        <Link href="/single">
                          <a>{totebag.attributes.name}</a>
                        </Link>
                      </h4>
                      <div className="product_price">
                        <div className="grid-price">
                          <span className="money">
                            ${totebag.attributes.price}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          addToCart(
                            totebag.attributes.p_Id,
                            1,
                            totebag.attributes.price,
                            totebag.attributes.name,
                            totebag.attributes.description,
                            totebag.attributes?.images?.data?.attributes
                              ?.formats?.thumbnail?.url
                          );
                        }}
                        className="btn btn-success mt-1"
                      >
                        Add to Cart{" "}
                        <span
                          className="fa fa-shopping-bag"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div> */}

          {/* <h3 className="title-wthree mb-lg-5 mb-4 text-center">Tote Bags</h3>
            <div className="row shop-wthree-info text-center">
              {totebags &&
                totebags.data.map((totebag) => (
                  <div
                    key={totebag.attributes.p_Id}
                    className="col-lg-3 shop-info-grid text-center mt-4"
                  >
                    <div className="product-shoe-info shoe">
                      <div className="men-thumb-item">
                        <img
                          src={`http://localhost:1337${totebag.attributes?.images?.data?.attributes?.formats?.thumbnail?.url}`}
                          width={250}
                          height={250}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="item-info-product">
                        <h4>
                          <Link href="/single">
                            <a>{totebag.attributes.name}</a>
                          </Link>
                        </h4>
                        <div className="product_price">
                          <div className="grid-price">
                            <span className="money">
                              ${totebag.attributes.price}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            addToCart(
                              totebag.attributes.p_Id,
                              1,
                              totebag.attributes.price,
                              totebag.attributes.name,
                              totebag.attributes.description,
                              totebag.attributes?.images?.data?.attributes
                                ?.formats?.thumbnail?.url
                            );
                          }}
                          className="btn btn-success mt-1"
                        >
                          Add to Cart{" "}
                          <span
                            className="fa fa-shopping-bag"
                            aria-hidden="true"
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <h3 className="title-wthree mb-lg-5 mb-4 mt-5 text-center">
              Handbags
            </h3>
            <div className="row shop-wthree-info text-center">
              {handbags &&
                handbags.data.map((handbag) => (
                  <div
                    key={handbag.attributes.p_Id}
                    className="col-lg-3 shop-info-grid text-center mt-4"
                  >
                    <div className="product-shoe-info shoe">
                      <div className="men-thumb-item">
                        <img
                          src={`http://localhost:1337${handbag.attributes?.images?.data?.attributes?.formats?.thumbnail?.url}`}
                          width={250}
                          height={250}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="item-info-product">
                        <h4>
                          <Link href="/single">
                            <a>{handbag.attributes.name}</a>
                          </Link>
                        </h4>
                        <div className="product_price">
                          <div className="grid-price">
                            <span className="money">
                              ${handbag.attributes.price}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            addToCart(
                              handbag.attributes.p_Id,
                              1,
                              handbag.attributes.price,
                              handbag.attributes.name,
                              handbag.attributes.description,
                              handbag.attributes?.images?.data?.attributes
                                ?.formats?.thumbnail?.url
                            );
                          }}
                          className="btn btn-success mt-1"
                        >
                          Add to Cart{" "}
                          <span
                            className="fa fa-shopping-bag"
                            aria-hidden="true"
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <h3 className="title-wthree mb-lg-5 mb-4 mt-5 text-center">
              CrosBody Bags
            </h3>
            <div className="row shop-wthree-info text-center">
              {crossbodybags &&
                crossbodybags.data.map((crossbodybag) => (
                  <div
                    key={crossbodybag.attributes.p_Id}
                    className="col-lg-3 shop-info-grid text-center mt-4"
                  >
                    <div className="product-shoe-info shoe">
                      <div className="men-thumb-item">
                        <img
                          src={`http://localhost:1337${crossbodybag.attributes?.images?.data?.attributes?.formats?.thumbnail?.url}`}
                          width={250}
                          height={250}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="item-info-product">
                        <h4>
                          <Link href="/single">
                            <a>{crossbodybag.attributes.name}</a>
                          </Link>
                        </h4>
                        <div className="product_price">
                          <div className="grid-price">
                            <span className="money">
                              ${crossbodybag.attributes.price}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            addToCart(
                              crossbodybag.attributes.p_Id,
                              1,
                              crossbodybag.attributes.price,
                              crossbodybag.attributes.name,
                              crossbodybag.attributes.description,
                              crossbodybag.attributes?.images?.data?.attributes?.formats?.thumbnail?.url
                            );
                          }}
                          className="btn btn-success mt-1"
                        >
                          Add to Cart{" "}
                          <span
                            className="fa fa-shopping-bag"
                            aria-hidden="true"
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <h3 className="title-wthree mb-lg-5 mb-4 mt-5 text-center">
              Laptop Bags
            </h3>
            <div className="row shop-wthree-info text-center">
              {laptopbags &&
                laptopbags.data.map((laptopbag) => (
                  <div
                    key={laptopbag.attributes.p_Id}
                    className="col-lg-3 shop-info-grid text-center mt-4"
                  >
                    <div className="product-shoe-info shoe">
                      <div className="men-thumb-item">
                        <img
                          src={`http://localhost:1337${laptopbag.attributes?.images?.data?.attributes?.formats?.thumbnail?.url}`}
                          width={250}
                          height={250}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="item-info-product">
                        <h4>
                          <Link href="/single">
                            <a>{laptopbag.attributes.name}</a>
                          </Link>
                        </h4>
                        <div className="product_price">
                          <div className="grid-price">
                            <span className="money">
                              ${laptopbag.attributes.price}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            addToCart(
                              laptopbag.attributes.p_Id,
                              1,
                              laptopbag.attributes.price,
                              laptopbag.attributes.name,
                              laptopbag.attributes.description,
                              laptopbag.attributes?.images?.data?.attributes?.formats?.thumbnail?.url
                            );
                          }}
                          className="btn btn-success mt-1"
                        >
                          Add to Cart{" "}
                          <span
                            className="fa fa-shopping-bag"
                            aria-hidden="true"
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div> */}

          <nav aria-label="Page navigation example mt-5">
            <ul className="pagination">
              <li className="page-item">
                <Link href="#">
                  <a className="page-link">Previous</a>
                </Link>
              </li>
              <li className="page-item">
                <Link href="#">
                  <a className="page-link">1</a>
                </Link>
              </li>
              <li className="page-item">
                <Link href="#">
                  <a className="page-link">2</a>
                </Link>
              </li>
              <li className="page-item">
                <Link href="#">
                  <a className="page-link">3</a>
                </Link>
              </li>
              <li className="page-item">
                <Link href="#">
                  <a className="page-link">Next</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <Newsletter />
    </div>
  );
}
