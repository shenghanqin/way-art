import Head from 'next/head'

export default function ContactUs(props) {
  const { title } = props

  return (
    <div className="container">
      <Head>
        <title>Contact - Way Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        联系我们
      </main>
    </div>
  )
}