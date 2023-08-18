import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Review from '../components/reviews';

export default function Home() {
  return (
    <div id="page-wrapper">
      <Head>
        <title>5-S Cleaners 5UP+NEXT</title>
      </Head>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  )
}
