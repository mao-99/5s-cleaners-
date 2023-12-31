import Link from "next/link";
import { useRouter } from 'next/router';

export default function Navbar(){
    const router = useRouter();
    return(
        <section id="header">
						<h1 className="navbarHeader"><Link href="/index">5-S Cleaners</Link></h1>

						<nav id="nav">
							<ul>
								<li className={router.pathname === '/' ? 'current' : ''}><Link href="/">Home</Link></li>
								<li className={router.pathname === '/services' ? 'current' : ''}><Link href="/services">Service And Bookings</Link></li>
								<li className={router.pathname === '/contact' ? 'current' : ''}><Link href="/contact">Contact us</Link></li>
							</ul>
						</nav>

				</section>
    )
}