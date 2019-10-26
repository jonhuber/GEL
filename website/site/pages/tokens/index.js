/** @jsx jsx */
import { useEffect, useState } from 'react';
import { jsx } from '@westpac/core';

import Heading from '../../components/heading';
import { Colors, Spacing, Type, Packs } from '../../components/tokens';

import ColorsExample from './examples/00-tokens-colors';

// import { ColorsExample } from '@westpac/core';

const TokensPage = () => {
	// const [ready, setReady] = useState(false);

	// if (!ready) {
	// 	return <p>loading...</p>;
	// }
	return (
		<div>
			<ColorsExample></ColorsExample>
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

const Spacer = () => <div css={{ height: 60 }}></div>;

export default TokensPage;
