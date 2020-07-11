import Head from 'next/head'

export default function DocumentMeta(props) {
  const { title = 'Way Art' } = props
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover" />
    </Head>
  )
}