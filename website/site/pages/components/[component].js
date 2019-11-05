/** @jsx jsx */
import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';

import { jsx } from '@westpac/core';
import { Tab, Tabcordion } from '@westpac/tabcordion';
import { Heading } from '@westpac/heading';
import { Alert } from '@westpac/alert';

import ReactLive from '../../ui/react-live';
import ChangelogWrapper from '../../ui/changelog';

let Component = ({ name }) => {
	let DataComponent = useMemo(() => {
		return dynamic(
			() =>
				Promise.all([
					import(`@westpac/${name}/website`),
					import(`@westpac/${name}/CHANGELOG.md`).then(x => x.default),
				])
					.then(modules => ({ children }) => children(modules))
					.catch(error => () => <p>{JSON.stringify(error, null, 4)}</p>),
			{
				loading: () => <p>loading...</p>,
			}
		);
	}, [name]);

	return (
		<DataComponent>
			{([examples, changelog]) => {
				return (
					<div css={{ maxWidth: 700 }}>
						<Heading size={1} css={{ textTransform: 'capitalize' }}>
							{name}
						</Heading>
						<p>
							This is the intro text for the {name} component. It will probably come from Keystone.
						</p>{' '}
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quae nulla dicta. Iure
							laudantium neque numquam omnis voluptates tempore alias animi porro, placeat eius
							dignissimos repellendus, excepturi obcaecati voluptatum nihil.
						</p>
						<Heading tag="h2" size={6} css={{ marginTop: 40, marginBottom: 10 }}>
							Code examples
						</Heading>
						<Examples examples={examples} name={name} />
						<Heading tag="h2" size={6} css={{ marginTop: 40, marginBottom: 10 }}>
							Changelog
						</Heading>
						<ChangelogWrapper data={changelog}></ChangelogWrapper>
					</div>
				);
			}}
		</DataComponent>
	);
};

Component.getInitialProps = async ({ query: { component } }) => {
	return { name: component };
};

// ==============================
// Examples
// ==============================

const Examples = ({ examples, name }) => {
	// Bail out if there are no examples in the snippets folder
	if (!Object.keys(examples).length > 0 || Object.keys(examples)[0] === 'default') {
		return (
			<Alert look="warning">
				No live code examples for this component. They can be added in{' '}
				<code>
					@westpac/{name}
					/website/snippets
				</code>
				.
			</Alert>
		);
	}

	// If we have examples, display each group (file) in a Tab
	return (
		<Tabcordion mode="tabs" appearance="soft">
			{Object.entries(examples).map(([name, snippets]) => (
				<Tab key={name} label={name.charAt(0).toUpperCase() + name.slice(1).replace('_', ' ')}>
					<ExamplesGroup key={name} snippets={snippets} />
				</Tab>
			))}
		</Tabcordion>
	);
};

const ExamplesGroup = ({ snippets }) => {
	return Object.entries(snippets).map(([name, code]) => {
		if (name !== 'scope') {
			return <Example key={name} name={name} code={code} scope={snippets.scope} />;
		}
	});
};

const Example = ({ code, scope }) => <ReactLive code={code} scope={scope}></ReactLive>;

export default Component;
