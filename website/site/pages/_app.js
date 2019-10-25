import React from 'react';
import App from 'next/app';
import cookie from 'cookie';
import Router from 'next/router';

import { BrandProvider } from '../components/brand-provider';
import Layout from '../components/layout';

const setCookie = (res, name, value) => {
	res.setHeader(
		'Set-Cookie',
		cookie.serialize(name, value, {
			httpOnly: true,
			path: '/',
			maxAge: 60 * 60 * 24 * 7, // 1 week
		})
	);
};

const getCookieByName = (cookieString, name) => {
	const cookies = cookie.parse(cookieString);
	return cookies[name];
};

class MyApp extends App {
	static async getInitialProps({ router, ctx: { req, res } }) {
		// Get first segment of path...
		const { asPath, route } = router;
		const firstSegment = asPath.split('/')[1];

		// Check if it matches a brand...
		const brandsList = ['BOM', 'BSA', 'BTFG', 'STG', 'WBC', 'WBG'];
		const brandMatch = brandsList.find(b => b === firstSegment.toUpperCase());

		if (brandMatch) {
			console.log(`request brand is ${brandMatch}! all good!`);
			// Update the cookie with brand value
			setCookie(res, 'gel_selected_brand', brandMatch);
			return { showBrandPicker: false };
		}

		// If no match...
		console.log("no brand found in path, let's deal with that");
		// Check if the brand exists in a cookie...
		const selectedBrandCookie = getCookieByName(req.headers.cookie, 'gel_selected_brand');
		// If yes, redirect to the brand path
		if (selectedBrandCookie) {
			console.log(`found cookie: ${selectedBrandCookie}`);
			const brandMatch = brandsList.find(b => {
				return b === selectedBrandCookie.toUpperCase();
			});
			console.log({ brandMatch });
			if (brandMatch) {
				console.log(`cookie matches brand! - let's go to ${brandMatch}`);
				const destination = route.replace('[brand]', selectedBrandCookie);
				// Route the user to the destination
				// TODO: using router serverside won't work in getInitialProps,
				// leaving it as placeholder for now
				// Router.push(destination);
				// Have also tried with the below, but breaks on certain routes. Things to discuss on Monday!
				// if (res) {
				// 	res.writeHead(302, { Location: destination });
				// 	res.end();
				// } else {
				// 	Router.push(destination);
				// }
			} else {
				// If no, display brand picker
				console.log(`cookie found, but not matching any brand! (${selectedBrandCookie})`);
				return { showBrandPicker: true };
			}
		} else {
			// If no, display brand picker
			console.log(`no cookie found`);
			return { showBrandPicker: true };
		}
		return {};
	}
	render() {
		const { Component, pageProps } = this.props;

		// Brand picker will come here if user needs to pick a brand
		if (this.props.showBrandPicker) {
			return <p>brand picker!</p>;
		}

		return (
			<BrandProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</BrandProvider>
		);
	}
}

export default MyApp;
