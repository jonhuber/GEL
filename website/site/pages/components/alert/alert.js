/** @jsx jsx */
import { useEffect, useState } from 'react';
import { jsx, useBrand } from '@westpac/core';

import { Alert } from '@westpac/alert';
import ReactLive from '../../../components/react-live';

import { BOM, system, warning, danger } from '../../../../../components/alert/website';

const scope = { Alert };
console.log({ scope });
const TokensPage = () => {
	const brand = useBrand();

	return (
		<div>
			<ReactLive code={warning} scope={scope} />
			<div>{warning}</div>
			<div>{danger}</div>
		</div>
	);
};

const Spacer = () => <div css={{ height: 60 }}></div>;

export default TokensPage;
