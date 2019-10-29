import React from 'react';
import App from 'next/app';

import { BrandSwitcherProvider } from '../ui/brand-switcher-provider';
import Layout from '../ui/layout';

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
