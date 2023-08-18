import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ServiceCards from '../components/serviceCards';
import BookingForm from '../components/bookNow';

export default function Home() {
  return (
    <div id="page-wrapper">
      <Head>
        <title>5-S Cleaners 5UP+NEXT</title>
        <body className="no-sidebar is-preload" />
      </Head>
      <Navbar></Navbar>
      <ServiceCards></ServiceCards>
      <BookingForm></BookingForm>
      <Footer></Footer>
    </div>
  )
}
