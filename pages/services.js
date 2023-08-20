import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ServiceCards from '../components/serviceCards';
import BookingForm from '../components/bookNow';

export default function Home() {
  const pageTitle = 'Services And Bookings';
  return (
    <div id="page-wrapper">
      <Head>
        <title>{pageTitle}</title>
        <body className="no-sidebar is-preload" />
      </Head>
      <Navbar></Navbar>
      <ServiceCards></ServiceCards>
      <BookingForm></BookingForm>
      <Footer></Footer>
    </div>
  )
}
