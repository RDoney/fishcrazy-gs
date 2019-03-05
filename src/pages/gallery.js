<<<<<<< HEAD
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
=======
import React from 'react';

import Layout from '../components/layout';

const Gallery = () => <Layout />;

export default Gallery;
>>>>>>> 08bdb312a7ca0069d0eb45a33fd7056075604eeb
