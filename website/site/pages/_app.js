import React from 'react';
import App from 'next/app';

import { BrandSwitcherProvider } from '../components/brand-switcher-provider';
import Layout from '../components/layout';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<BrandSwitcherProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</BrandSwitcherProvider>
		);
	}
}

export default MyApp;
