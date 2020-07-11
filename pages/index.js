import React, { Fragment } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home(props) {
  const { title } = props

  return (
    <Fragment>
      <div className="container">
        <Head>
          <title>Way Art</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <h1 className="title">
          {title}
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          <br />
          <Link href="./about-us.html"><a>关于我们</a></Link>
          <Link href="./contact-us.html"><a>联系我们</a></Link>
        </h1>

      </div>

        <Footer />
    </Fragment>
  )
}


export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = {}

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      title: 123
    }
  }
}