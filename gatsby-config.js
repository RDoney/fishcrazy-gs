module.exports = {
	siteMetadata: {
<<<<<<< HEAD
		title: "Fishcrazy Guide Service",
		author: "Ryan Doney",
		imageUrl: "https://i.imgur.com/Vz81GEl.png",
		description: "A Project to bootstrap your next Gatsby + Bulma site.",
		keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
		twitter: "https://twitter.com/amanhimself",
		github: `https://github.com/amandeepmittal`,
		medium: "https://medium.com/@amanhimself",
		gatsby: "https://www.gatsbyjs.org/",
		bulma: "https://bulma.io/",
=======
		title: 'Fishcrazy Guide Service',
		author: 'Aman Mittal',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'The Best Smallmouth Bass Fishing Guide in Door County, WI',
		keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
>>>>>>> 08bdb312a7ca0069d0eb45a33fd7056075604eeb
		siteUrl: `https://www.example.com`
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "Makefolio",
				short_name: "Makefolio",
				start_url: "/",
				background_color: "#2980b9",
				theme_color: "#2980b9",
				display: "standalone",
				icon: "src/images/gatsby-icon.png",
				orientation: "portrait"
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-XXXXXXXX-X",
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `gallery`,
				path: `${__dirname}/src/images/gallery`
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
