import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Review from '../components/reviews';

export default function Home() {
  const pageTitle = '5S Cleaners';
  return (
    <div id="page-wrapper">
      <Head>
        <title>{pageTitle}</title>
        <body className="is-preload" />
      </Head>
      <Header></Header>
      <Review></Review>
      <Footer></Footer>
    </div>
  )
}
