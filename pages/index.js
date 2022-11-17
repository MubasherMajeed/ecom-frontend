import Head from "next/head";
import Link from "next/link";
import Content from "../components/Content";
import Newsletter from "../components/Newsletter";
import { fetcher } from "../lib/api";


export async function getServerSideProps() {
  let headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImlhdCI6MTY2ODYwODg1NywiZXhwIjoxNjcxMjAwODU3fQ.GeghwTu1m3bVJIrOGmWMYPQjN6OJK7vxsjXhswflSIU",
  };
  let products= await fetcher(
    "http://localhost:1337/api/products?populate=*",
    { headers: headers }
  );
  return {
    props: { products },
  };
}

export default function Home({ products, addToCart }) {
  return (
    <div>
      <Head>
        <title>Bagagge | Home</title>
      </Head>
      <div className="container py-5">
        <h3 className="title-wthree mb-lg-5 mb-4 text-center">Shop Now</h3>
        <div className="row shop-wthree-info text-center">
          {products &&
            products.data.map((product) => {
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
                        <Link href={`/product/${product.attributes.p_Id}`}>
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
                          )
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
      <Content />
      <Newsletter />
    </div>
  );
}
