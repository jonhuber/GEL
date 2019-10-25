/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@emotion/core';
import Normalize from './normalize';

import { GEL } from '../core';

import Footer from '../footer';
import Sidebar from '../sidebar';

import { useCurrentBrand } from '../brand-provider';

const Layout = ({ children }) => {
	const { currentBrand } = useCurrentBrand();
	return (
		<GEL brand={currentBrand}>
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
