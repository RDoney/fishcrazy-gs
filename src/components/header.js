import React from "react";
import "./style.scss";
import Navbar from "./navbar";

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-fullheight-with-navbar">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<div className="media-content">
						<div className="content has-text-centered">
							<h1 className="is-uppercase is-size-1 has-text-white">
								Experience the best bass fishing Door County has to offer
							</h1>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
