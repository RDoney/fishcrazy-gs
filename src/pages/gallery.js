import React from "react";

import Layout from "../components/layout";
import { graphql } from "gatsby";

const Gallery = () => <Layout />;

export const query = graphql`
	query {
		allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
			edges {
				node {
					relativePath
					childImageSharp {
						id
					}
				}
			}
		}
	}
`;

export default Gallery;
