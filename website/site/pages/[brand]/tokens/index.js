/** @jsx jsx */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { jsx } from '@emotion/core';

import Heading from '../../../components/heading';
import { Colors, Spacing, Type, Packs } from '../../../components/tokens';

const TokensPage = () => {
	const [ready, setReady] = useState(false);
	const router = useRouter();

	// useEffect(() => {
	// 	// Check for preferred brand in localStorage
	// 	const selectedBrand = localStorage.getItem('gel-selectedBrand');
	// 	if (selectedBrand) {
	// 		router.push(`/tokens/${selectedBrand}`);
	// 	} else {
	// 		console.log('no favourite brand yet - show the selector!');
	// 	}
	// });

	if (!ready) {
		return <p>loading...</p>;
	}
	return (
		<div>
			<Heading>You need to select a brand to see this!</Heading>
			<Heading>Colors</Heading>
			<Colors />

			{/* 😱 spacer-gif */}
			<Spacer />

			<Heading>Spacing</Heading>
			<Spacing />

			{/* 😱 spacer-gif */}
			<Spacer />

			<Heading>Type</Heading>
			<Type />

			{/* 😱 spacer-gif */}
			<Spacer />

			<Heading>Packs</Heading>
			<Packs />
		</div>
	);
};

export default TokensPage;
