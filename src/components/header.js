import React from "react";
import { FaGithub } from "react-icons/fa";

import "./style.scss";

import gatsbyLogo from "../images/gatsby-icon.png";
import bulmaLogo from "../images/bulma-logo.png";
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
<<<<<<< HEAD
								Experience the best bass fishing Door County has to offer
=======
							Experience the best bass fishing Door County has to offer with Chris Johnson’s Fishcrazy Guide Service!
>>>>>>> 08bdb312a7ca0069d0eb45a33fd7056075604eeb
							</h1>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
