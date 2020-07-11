import Head from 'next/head'

export default function Home(props) {
  const { title } = props

  return (
    <div className="container">
      <Head>
        <title>About - Way Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        关于我们
      </main>
    </div>
  )
}