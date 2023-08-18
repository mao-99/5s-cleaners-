import Link from "next/link";
export default function Footer(){
    return (
        <div>
            <section id="footer">
					<div className="container">
						<div className="row">
							<div className="col-12">
									<div id="copyright">
										<ul className="links">
											<li>&copy; 5-S Cleaners LLC. All rights reserved.</li><li>Design: <Link href="http://html5up.net">HTML5 UP</Link></li>
										</ul>
									</div>
							</div>
						</div>
					</div>
				</section>
        </div>
    )
}