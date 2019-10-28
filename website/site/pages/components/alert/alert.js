/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Alert } from '@westpac/alert';

import { warning, danger, system } from '../../../../../components/alert/website';
import ReactLive from '../../../components/react-live';

// TODO: scope doesn't seem to work
const scope = { Alert };

const TokensPage = () => (
	<div>
		<ReactLive code={warning} scope={scope} />
		<Spacer />
		<ReactLive code={danger} scope={scope} />
		<Spacer />
		<ReactLive code={system} scope={scope} />
	</div>
);

const Spacer = () => <div css={{ height: 60 }}></div>;

export default TokensPage;
