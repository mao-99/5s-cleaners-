import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import Script from 'next/script';
import '../styles/globals.css'; // Your custom global CSS file, if any


  

export default function App({ Component, pageProps }) {
    useEffect(() => {
        typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
    }, [])
    useEffect(() => {
        // Load Google Maps API script here
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=&libraries=places&callback=Function.prototype`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }, []);
    

    return (
        <div>

            <Component {...pageProps} />
        </div>
    );
}
