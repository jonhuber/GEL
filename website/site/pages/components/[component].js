/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, useBrand } from '@westpac/core';
import { Alert } from '@westpac/alert';

import { warning, danger, system } from '@westpac/alert/website';
import ReactLive from '../../ui/react-live';
import Changelog from '../../ui/changelog';

const Component = ({ name }) => {
	return (
		<Fragment>
			<h1>{name}</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit magni, doloremque
				quod cum ex iure excepturi earum beatae, ipsa optio, sunt quis perferendis illum! Distinctio
				sed qui molestiae sunt saepe.
			</p>
			<h2>Live Code examples</h2>
			<ReactLive code={`<p>Code comes here</p>`}></ReactLive>
			<h2>Changelog</h2>
			<Changelog></Changelog>
		</Fragment>
	);
};

Component.getInitialProps = async ({ query: { component } }) => {
	return { name: component };
	// return {
	// 	name: Router.query.component,
	// };
};

export default Component;
