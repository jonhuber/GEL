/** @jsx jsx */
import { useEffect, useState } from 'react';
import { jsx, useBrand } from '@westpac/core';

import { Alert } from '@westpac/alert';
import ReactLive from '../../../components/react-live';

import { BOM, warning, danger, system } from '../../../../../components/alert/website';

const scope = { Alert };
console.log({ scope });
const TokensPage = () => {
	const brand = useBrand();

	return (
		<div>
			<ReactLive code={BOM} scope={scope} />
			<hr />
			<ReactLive code={warning} scope={scope} />
			<hr />
			<ReactLive code={danger} scope={scope} />
			<hr />
			<ReactLive code={system} scope={scope} />
		</div>
	);
};

const Spacer = () => <div css={{ height: 60 }}></div>;

export default TokensPage;
