/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@emotion/core';

import { GEL } from '@westpac/core';

import Footer from '../footer';
import Normalize from './normalize';
import Sidebar from '../sidebar';

import { useBrandSwitcher } from '../brand-switcher-provider';

const Layout = ({ children }) => {
	const { brands, brand } = useBrandSwitcher();
	return (
		<GEL brand={brands[brand]}>
			<Normalize />
			<GridContainer>
				<SidebarContainer>
					<Sidebar />
				</SidebarContainer>
				<MainContainer>
					{children}
					<Footer />
				</MainContainer>
			</GridContainer>
		</GEL>
	);
};

const GridContainer = props => (
	<div
		css={{
			fontFamily:
				'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
			display: 'grid',
			width: '100vw',
			height: '100vh',
			gridTemplateColumns: '270px auto',
			gridColumnGap: 20,
		}}
		{...props}
	/>
);

const SidebarContainer = props => (
	<div
		css={{
			gridColumnStart: 1,
			gridColumnEnd: 2,
		}}
		{...props}
	/>
);

const MainContainer = props => (
	<div
		css={{
			gridColumnStart: 2,
			gridColumnEnd: 3,
			overflowY: 'scroll',
			padding: 10,
		}}
		{...props}
	/>
);

export default Layout;
