import React from 'react'
import Content from '../components/Content'
import Newsletter from '../components/Newsletter'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function about() {
    return (
        <>
            <Head>
                <title>Baggage | About</title>
            </Head>

            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">About Us</li>
            </ol>

            <div className="row grids-wthree-info">
                <div className="col-lg-6 bag-img mt-4">
                    <Image src="/images/bag1.png" width="600" height="500" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 ab-info-con ab-inf-page text-left">
                    <h4>About Our Baggage</h4>
                    <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                    <Link href="/single"><a className="btn shop mt-4">Read More</a></Link>
                </div>
            </div>
            <Content />
            <Newsletter />
        </>
    )
}
