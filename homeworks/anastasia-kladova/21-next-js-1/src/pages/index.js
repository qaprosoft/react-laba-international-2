import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Avatar App | HOME</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="main">
      <section className="home">
        <div className="container home__container">
        <h1 className='home__header'>Welcome to Avatar App</h1>
        </div>
      </section>
      </main>
    </>
  )
}
