/** @jsx jsx */
import { Fragment, useState } from 'react';
import { jsx, useBrand } from '@westpac/core';
import { Alert } from '@westpac/alert';
import { Tab, Tabcordion } from '@westpac/tabcordion';
import { HelpIcon } from '@westpac/icon';

// import { warning, danger, system, what } from '@westpac/alert/website';
import * as examples from '@westpac/alert/website';
import ReactLive from '../../../ui/react-live';

const scope = { Alert, HelpIcon };

const TokensPage = () => (
	<div css={{ maxWidth: 700 }}>
		<h1>Alerts</h1>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quae nulla dicta. Iure
			laudantium neque numquam omnis voluptates tempore alias animi porro, placeat eius dignissimos
			repellendus, excepturi obcaecati voluptatum nihil.
		</p>
		<h2>Code examples</h2>
		<Tabcordion mode="tabs" appearance="soft">
			{Object.entries(examples).map(([name, snippets]) => (
				<Tab key={name} label={name.charAt(0).toUpperCase() + name.slice(1)}>
					<ExamplesGroup key={name} snippets={snippets} />
				</Tab>
			))}
		</Tabcordion>
		<h2>Changelog</h2>
	</div>
);

const ExamplesGroup = ({ snippets }) =>
	Object.entries(snippets).map(([name, code]) => {
		return <Example key={name} name={name} code={code} />;
	});

const Example = ({ name, code }) => (
	<Fragment>
		<ReactLive code={code} scope={scope}></ReactLive>
	</Fragment>
);

export default TokensPage;
