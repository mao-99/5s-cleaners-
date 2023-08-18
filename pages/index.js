import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Review from '../components/reviews';

export default function Home() {
  return (
    <div id="page-wrapper">
      <Head>
        <title>5-S Cleaners 5UP+NEXT</title>
        <body className="is-preload" />
      </Head>
      <Header></Header>
      <Review></Review>
      <Footer></Footer>
    </div>
  )
}
