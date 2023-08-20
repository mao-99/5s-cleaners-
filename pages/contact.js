import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ContactForm from '../components/contactForm';

export default function Home() {
  const pageTitle = 'Contact Us';
  return (
    <div id="page-wrapper">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Navbar></Navbar>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  )
}
