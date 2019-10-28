/** @jsx jsx */
import { useEffect, useState } from 'react';
import { jsx, useBrand } from '@westpac/core';

import Heading from '../../components/heading';

const TokensPage = () => {
	const brand = useBrand();
	return (
		<div>
			<p>tokens</p>
		</div>
	);
};

const Spacer = () => <div css={{ height: 60 }}></div>;

export default TokensPage;
