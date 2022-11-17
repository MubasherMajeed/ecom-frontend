import React from 'react'

export default function Newsletter() {
    return (
        <section className="newsletter-w3pvt py-5">
            <div className="container py-md-5">
                <form method="post" action="#">
                    <p className="text-center">Subscribe to the Handbags Store mailing list to receive updates on new arrivals, special offers and other discount information.</p>
                    <div className="row subscribe-sec">
                        <div className="col-md-9">
                            <input type="email" className="form-control" id="email" placeholder="Enter Your Email.." name="email" required="" />

                        </div>
                        <div className="col-md-3">

                            <button type="submit" className="btn submit">Subscribe</button>
                        </div>

                    </div>
                </form>
            </div>
        </section>
    )
}
