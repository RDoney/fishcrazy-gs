import React from "react";

import Layout from "../components/layout";
import { graphql } from "gatsby";

const Gallery = ({ data }) => (
	<Layout>
		<section className="section">
			<div className="container">
				{data.allFile.edges.map(({ node }, index) => (
					<img key={index} src={node.childImageSharp.resize.src} />
				))}
			</div>
		</section>
	</Layout>
);

export const query = graphql`
	query {
		allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
			edges {
				node {
					relativePath
					childImageSharp {
						id
						resize {
							src
						}
					}
				}
			}
		}
	}
`;

export default Gallery;
