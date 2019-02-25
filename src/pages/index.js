import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => (
	<Layout>
		<section className="section">
			<div className="container">
				<div className="columns">
					<div className="column">
						<h2 className="is-size-3">
							Chris Johnson <br />
							Professional Guide and Tournament Angler
						</h2>
						<p>
							Captain Chris Johnson of Fishcrazy Guide Service is the go-to
							guide if you are looking to experience the best bass fishing
							Sturgeon Bay and Door County have to offer. Captain Chris does not
							run walleye, salmon, or trout charters just to make ends meet or
							fill out a schedule; we only guide for smallmouth bass, and no one
							does it better in and around Door County!
						</p>
						<Link to="/contact" className="button is-primary">
							Book Your Trip Today
						</Link>
					</div>
					<div className="column">
						<img src="https://via.placeholder.com/350x350" alt="" />
					</div>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="columns">
					<div className="column">
						<img src="https://via.placeholder.com/350" alt="" />
					</div>
					<div className="column">
						<h2 className="is-size-3">Social media feed section</h2>
						<p>
							During your day on the water, Captain Chris will provide a
							complete outdoor experience that you’ll remember fondly for many
							years to come. He’ll spare no effort to produce fish, with a
							never-say-die, can-do attitude. Besides catching fish, you will
							receive on-the-water education with the latest tournament
							techniques, tips, and proven seasonal patterns that he has
							developed over the years guaranteed to help you catch more
							smallmouth anywhere in the country, and most certainly on your
							local waters. A day on the water should be as much about learning,
							laughing, and enjoying each others’ company surrounded by the
							spectacular scenery while catching the wildly acrobatic, hard
							fighting smallmouth bass.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="columns">
					<div className="column has-text-centered">
						<h2 className="title">About Fishcrazy Guide Service</h2>
					</div>
				</div>
				<div className="columns">
					<div className="column">
						<div className="card">
							<div className="card-image">
								<figure className="image is-4by3">
									<img src="https://bulma.io/images/placeholders/1280x960.png" />
								</figure>
							</div>
							<div className="card-content">
								<h3>Meet The Captain</h3>
								<div className="content">
									Captain Chris Johnson’s statewide tournament success and
									unique ability to consistently find and catch fish around the
									state, especially Door County’s Smallmouth has earned him a
									reputation as one of the best anglers in the state. <br />
									<Link to="/meet-the-captain" className="button">
										Learn More
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="column">
						<div className="card">
							<div className="card-image">
								<figure className="image is-4by3">
									<img src="https://bulma.io/images/placeholders/1280x960.png" />
								</figure>
							</div>
							<div className="card-content">
								<h3>Gallery</h3>
								<div className="content">
									From novices to old pros, families and friends or even
									tournament anglers, everyone will enjoy a day in the boat with
									Chris. He will follow the fish and take advantage of hot bites
									on Sturgeon Bay, Green Bay or Lake Michigan.
									<br />
									<Link to="/gallery" className="button">
										View Gallery
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="column">
						<div className="card">
							<div className="card-image">
								<figure className="image is-4by3">
									<img src="https://bulma.io/images/placeholders/1280x960.png" />
								</figure>
							</div>
							<div className="card-content">
								<h3>Contact</h3>
								<div className="content">
									What are you waiting for? Contact us today and prepare to have
									your line yanked! <br />
									<Link to="/contact" className="button">
										Contact Us
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container">
				<div className="columns">
					<div className="column">
						<img src="https://via.placeholder.com/1600x900" />
					</div>
				</div>
			</div>
		</section>
		<section className="section">
			<div className="container has-text-centered">
				<div className="columns">
					<div className="column">
						<p>Ready to get started?</p>
						<Link to="/contact" className="button">
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default IndexPage;
