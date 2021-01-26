import Head from 'next/head'

export default function Home({ title, bg }) {
  return (
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content={bg} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
      </Head>
  )
}