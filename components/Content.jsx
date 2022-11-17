import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Content() {
    return (
        <>
            <section className="banner-bottom py-5">
                <div className="container py-md-3">
                    <hr></hr>
                    <div className="row grids-wthree-info text-center">
                        <div className="col-lg-4 ab-content">
                            <div className="ab-info-con">
                                <h4>Fast & Free Delivery</h4>
                                <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 ab-content">
                            <div className="ab-info-con">
                                <h4>Safe & Secure Payments</h4>
                                <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 ab-content">
                            <div className="ab-info-con">
                                <h4>100% Money Back Guarantee</h4>
                                <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="collections">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 ab-content-img">

                        </div>
                        <div className="col-md-4 ab-content text-center p-lg-5 p-3 my-lg-5">
                            <h4>Travel Must Haves</h4>
                            <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                            <Link href="/shop"><a className="btn shop mt-3">Shop Now</a></Link>

                        </div>
                    </div>
                </div>
            </section>

            <section className="banner-bottom py-5">
                <div className="container py-md-5">

                    <h3 className="title-wthree mb-lg-5 mb-4 text-center">Safety Meets Style </h3>
                    <div className="row text-center">


                        <div className="col-md-4 content-gd-wthree">
                            <Image src="/images/c1.jpg" width="400" height="550" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-4 content-gd-wthree ab-content py-lg-5 my-lg-5">
                            <h4>Need Extra Space ?</h4>
                            <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                            <Link href="/shop"><a className="btn shop mt-3">Shop Now</a></Link>

                        </div>
                        <div className="col-md-4 content-gd-wthree">
                            <Image src="/images/c2.jpg" width="400" height="550" className="img-fluid" alt="" />
                        </div>
                    </div>

                </div>
            </section>

            <section className="banner-bottom py-5">
                <div className="container py-md-5">
                    <div className="row">
                        <div className="col-lg-4 gallery-content-info text-center mt-lg-5">
                            <h3 className="title-wthree mb-lg-5 mb-4">Trending Now </h3>
                            <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                            <Link href="/shop"><a className="btn shop mt-3">Shop Now</a></Link>

                        </div>
                        <div className="col-lg-8 gallery-content">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 gal-img">
                                    <Link href="#gal1"><Image src="/images/g1.jpg" width="450" height="400" alt="Baggage" className="img-fluid mt-4" /></Link>
                                </div>
                                <div className="col-md-4 col-sm-6 gal-img">
                                    <Link href="#gal2"><Image src="/images/g2.jpg" width="450" height="400" alt="Baggage" className="img-fluid mt-4" /></Link>
                                </div>
                                <div className="col-md-4 col-sm-6 gal-img">
                                    <Link href="#gal3"><Image src="/images/g3.jpg" width="450" height="400" alt="Baggage" className="img-fluid mt-4" /></Link>
                                </div>
                                <div className="col-md-4 col-sm-6 gal-img">
                                    <Link href="#gal1"><Image src="/images/g4.jpg" width="450" height="400" alt="Baggage" className="img-fluid mt-4" /></Link>
                                </div>
                                <div className="col-md-4 col-sm-6 gal-img">
                                    <Link href="#gal2"><Image src="/images/g5.jpg" width="450" height="400" alt="Baggage" className="img-fluid mt-4" /></Link>
                                </div>
                                <div className="col-md-4 col-sm-6 gal-img">
                                    <Link href="#gal3"><Image src="/images/g6.jpg" width="450" height="400" alt="Baggage" className="img-fluid mt-4" /></Link>
                                </div>

                            </div>
                            {/* <!-- gallery popups --> */}
                            {/* <!-- popup--> */}
                            <div id="gal1" className="popup-effect">
                                <div className="popup">
                                    <Image src="/images/g1.jpg" width="450" height="400" alt="Popup image" className="img-fluid mt-4" />
                                    <Link href="#gallery"><a className="close">&times;</a></Link>
                                </div>
                            </div>
                            {/* <!-- //popup --> */}
                            {/* <!-- popup--> */}
                            <div id="gal2" className="popup-effect">
                                <div className="popup">
                                    <Image src="/images/g2.jpg" width="450" height="400" alt="Popup image" className="img-fluid mt-4" />
                                    <Link href="#gallery"><a className="close">&times;</a></Link>
                                </div>
                            </div>
                            {/* <!-- //popup --> */}
                            {/* <!-- popup--> */}
                            <div id="gal3" className="popup-effect">
                                <div className="popup">
                                    <Image src="/images/g3.jpg" width="450" height="400" alt="Popup image" className="img-fluid mt-4" />
                                    <Link href="#gallery"><a className="close">&times;</a></Link>
                                </div>
                            </div>
                            {/* <!-- //popup --> */}
                            {/* <!-- //gallery popups --> */}

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
