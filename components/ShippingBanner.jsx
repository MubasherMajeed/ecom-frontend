import React from 'react'

export default function ShippingBanner() {
  return (
    <section className="shipping-wthree">
        <div className="shiopping-grids d-lg-flex">
            <div className="col-lg-4 shiopping-w3pvt-gd text-center">
                <div className="icon-gd"><span className="fa fa-truck" aria-hidden="true"></span>
                </div>
                <div className="icon-gd-info">
                    <h3>FREE SHIPPING</h3>
                    <p>On all order over $2000</p>
                </div>
            </div>
            <div className="col-lg-4 shiopping-w3pvt-gd sec text-center">
                <div className="icon-gd"><span className="fa fa-bullhorn" aria-hidden="true"></span></div>
                <div className="icon-gd-info">
                    <h3>FREE RETURN</h3>
                    <p>On 1st exchange in 30 days</p>
                </div>
            </div>
            <div className="col-lg-4 shiopping-w3pvt-gd text-center">
                <div className="icon-gd"> <span className="fa fa-gift" aria-hidden="true"></span></div>
                <div className="icon-gd-info">
                    <h3>MEMBER DISCOUNT</h3>
                    <p>Register &amp; save up to $29%</p>
                </div>

            </div>
        </div>

    </section>
  )
}
