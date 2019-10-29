import React from 'react';
import Nav from '../nav';
import BrandSwitcher from '../brand-switcher';

const Sidebar = () => {
	return (
		<div>
			<p>Brand logo</p>
			<BrandSwitcher />
			<Nav />
		</div>
	);
};

export default Sidebar;
