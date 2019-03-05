<<<<<<< HEAD
import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const RatesAndInfo = () => (
	<Layout>
		<section className="section">
			<div className="container">
				<div className="columns has-text-centered">
					<div className="column">
						<h2>Fishcrazy Guide Service Rates</h2>
						<p>
							Rates include up to 2 guests. Additional persons may be added for
							$50 each
						</p>
						<h3>Half Day: 4 hour trip</h3>
						<p>$350</p>
						<h3>Full Day: 8 hour trip</h3>
						<p>$500</p>
						<Link to="/contact">Book Your Trip</Link>
						<hr />
						<p>Need bait &amp; tackle on your way?</p>
						<a href="http://www.howiestackle.com/">Visit Howie's Tackle</a>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="columns">
					<div className="column">
						<h2>Launch Locations</h2>
						<img src="https://via.placeholder.com/350x350" alt="" />
					</div>
					<div className="column">
						<h2>What to Expect</h2>
						<p>
							Fishcrazy Guide Service will accommodate you requests and can fish
							anywhere around Door County to meet your request. This includes
							the waters of Green Bay, Lake Michigan and around Washington
							Island. We can pick you up at your location or meet you at any of
							the boat ramps in the listed locations. You will be fishing with
							top of the line equipment and all required lures and baits are
							provided. Enjoy the best ride in the bass boat industry aboard the
							most stable fishing platform available anywhere in a fully rigged
							Triton TR21XS powered by a Mercury 250 Pro XS. You will need a
							Wisconsin fishing license, and are encouraged to bring a number of
							personal items on your trip to make your time more enjoyable and
							productive, these items include:
						</p>
						<h2>Places to Eat</h2>
						<ul>
							<li>Soft Soled Shoes (required)</li>
							<li>Sunglasses and Sunscreen</li>
							<li>Seasonal clothing with hat</li>
							<li>Rain Suit (just in case!)</li>
							<li>Camera</li>
							<li>Food and beverages</li>
						</ul>
					</div>
				</div>
				<div className="columns">
					<div className="column">
						<h2>Places to Eat</h2>
						<ul>
							<li>
								<a href="http://greystonecastlebar.com/">Greystone Castle</a>
							</li>
							<li>
								<a href="http://www.sonnyspizzeria.com/">Sonny's Pizzeria</a>
							</li>
							<li>
								<a href="http://nightingalesupperclub.com/">
									Nightingale Supper Club
								</a>
							</li>
							<li>
								<a href="http://www.villaggios-doorcounty.com/">Villaggio's</a>
							</li>
							<li>
								<a href="http://www.aljohnsons.com/">Al Johnson's</a>
							</li>
							<li>
								<a href="http://fredandfuzzys.com/">Fred and Fuzzy's</a>
							</li>
						</ul>
						<h2>Places to Stay</h2>
						<ul>
							<li>
								<a href="http://www.americinn.com/hotels/wi/sturgeonbay?utm_source=google&utm_medium=local_listing&utm_campaign=google_local_page&chebs=ai_gl">
									AmericInn Sturgeon Bay
								</a>
							</li>
							<li>
								<a href="http://www.stoneharbor-resort.com/">
									Stone Harbor Resort
								</a>
							</li>
						</ul>
					</div>
					<div className="column">
						<img src="https://via.placeholder.com/350x350" alt="" />
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default RatesAndInfo;
=======
import React from 'react';

import Layout from '../components/layout';

const RatesAndInfo = () => <Layout />;

export default RatesAndInfo
>>>>>>> 08bdb312a7ca0069d0eb45a33fd7056075604eeb
