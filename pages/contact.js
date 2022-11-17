import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Newsletter from '../components/Newsletter'

export default function contact() {
    return (
        <div>
            <Head>
                <title>Baggage | Contact</title>
            </Head>

            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Contact Us</li>
            </ol>

            <section className="banner-bottom py-5">
                <div className="container py-md-5">
                    <h3 className="title-wthree mb-lg-5 mb-4 text-center">Contact Us </h3>
                    <div className="row contact_information">
                        <div className="col-md-6">
                            <div className="contact_right p-lg-5 p-4">
                                <form action="#" method="post">
                                    <div className="field-group">

                                        <div className="content-input-field">
                                            <input name="text1" id="text1" type="text" placeholder="User Name" required="" />
                                        </div>
                                    </div>
                                    <div className="field-group">

                                        <div className="content-input-field">
                                            <input name="text1" id="text1" type="email" placeholder="User Email" required="" />
                                        </div>
                                    </div>
                                    <div className="field-group">

                                        <div className="content-input-field">
                                            <input name="text1" id="text3" type="text" placeholder="User Phone" required="" />
                                        </div>
                                    </div>
                                    <div className="field-group">
                                        <div className="content-input-field">
                                            <input name="password" id="myInput" type="Password" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="field-group">
                                        <div className="content-input-field">
                                            <textarea placeholder="Your Message Here..." required=""></textarea>
                                        </div>
                                    </div>
                                    <div className="content-input-field">
                                        <button type="submit" className="btn">Submit</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 contact_left p-4">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6350041.310790406!2d30.68773492426509!3d39.0014851732576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2sTurkey!5e0!3m2!1sen!2sin!4v1522753415269"></iframe>
                        </div>

                        <div className="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
                            <div className="mt-5 information-wthree">
                                <h4 className="text-uppercase mb-4"><span className="fa fa-comments"></span> Communication</h4>
                                <p className="cont-wthree-para mb-3 text-capitalize">for general queries, including property Sales and constructions, please email us at <Link href="mailto:info@example.com">info@example.com</Link></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
                            <div className="mt-5 information-wthree">
                                <h4 className="text-uppercase mb-4"><span className="fa fa-life-ring"></span> Technical Support</h4>
                                <p className="cont-wthree-para mb-3 text-capitalize">we are ready to help! if you have any queries or issues, contact us for support <label>+12 388 455 6789</label>.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-4 contact-inn-w3pvt">
                            <div className="mt-5 information-wthree">
                                <h4 className="text-uppercase mb-4"><span className="fa fa-map"></span> Others</h4>
                                <p className="cont-wthree-para mb-3 text-capitalize">we are ready to help! if you have any queries or issues, contact us for support <label>+12 388 455 6789</label>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Newsletter />
        </div>
    )
}
