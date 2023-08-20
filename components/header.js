import Link from "next/link";
import styles from "./indexHeader.module.css";

export default function Header(){
    return(
        <section id="header">
						<h1 className={styles.navbarHeader}><Link href="/">5-S Cleaners</Link></h1>

						<nav id="nav">
							<ul>
								<li className="current"><Link href="/">Home</Link></li>
								<li><Link href="/services">Service And Bookings</Link></li>
								<li><Link href="/contact">Contact us</Link></li>
							</ul>
						</nav>

						<section id="banner">
							<header>
								<h2>Welcome to 5-S</h2>
								<p>your satisfaction is our priority</p>
							</header>
						</section>

						<section id="intro" className="container">
							<div className="row">
								<div className="col-4 col-12-medium">
									<section className="first">
										<i className="icon solid featured fa-cog"></i>
										<header>
											<h2>Exceptional Cleaning</h2>
										</header>
										<p>We provide pristine cleaning services</p>
									</section>
								</div>
								<div className="col-4 col-12-medium">
									<section className="middle">
										<i className="icon solid featured alt fa-bolt"></i>
										<header>
											<h2>Seamless Service</h2>
										</header>
										<p>Getting an appointment is easy and stress free</p>
									</section>
								</div>
								<div className="col-4 col-12-medium">
									<section className="last">
										<i className="icon solid featured alt2 fa-star"></i>
										<header>
											<h2>Top Quality</h2>
										</header>
										<p>Our quality is backed up by our track record and reviews</p>
									</section>
								</div>
							</div>
							<footer>
								<ul className="actions">
									<li><a href="#" className="button large">Book Now</a></li>
								</ul>
							</footer>
						</section>
				</section>
    )
}