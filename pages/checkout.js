import React from 'react'
import Head from 'next/head';
import Link from 'next/link';

export default function checkout() {
  return (
    <>
      <Head>
        <title>Baggage | Checkout</title>
      </Head>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Checkout</li>
      </ol>
      <div>checkout</div>
      <div>Your Order has been placed</div>
    </>
  );
}
