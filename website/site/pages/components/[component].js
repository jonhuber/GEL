/** @jsx jsx */
import { Fragment, useMemo } from 'react';
import { jsx } from '@westpac/core';
import { Tab, Tabcordion } from '@westpac/tabcordion';
import dynamic from 'next/dynamic';

import ReactLive from '../../ui/react-live';
import ChangelogWrapper from '../../ui/changelog';

let Component = ({ name }) => {
	let DataComponent = useMemo(() => {
		return dynamic(() =>
			Promise.all([
				import(`@westpac/${name}/website`),
				import(`@westpac/${name}/CHANGELOG.md`).then(x => x.default),
			]).then(modules => ({ children }) => children(modules))
		);
	}, [name]);

	return (
		<DataComponent>
			{([examples, changelog]) => (
				<div css={{ maxWidth: 700 }}>
					<h1>{name}</h1>
					<p>This is the intro text. It will probably come from Keystone.</p>{' '}
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos quae nulla dicta. Iure
						laudantium neque numquam omnis voluptates tempore alias animi porro, placeat eius
						dignissimos repellendus, excepturi obcaecati voluptatum nihil.
					</p>
					<h2>Code examples</h2>
					<Tabcordion mode="tabs" appearance="soft">
						{Object.entries(examples).map(([name, snippets]) => (
							<Tab
								key={name}
								label={name.charAt(0).toUpperCase() + name.slice(1).replace('_', ' ')}
							>
								<ExamplesGroup key={name} snippets={snippets} />
							</Tab>
						))}
					</Tabcordion>
					<div css={{ height: 40 }} />
					<h2>Changelog</h2>
					<ChangelogWrapper data={changelog}></ChangelogWrapper>
				</div>
			)}
		</DataComponent>
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

Component.getInitialProps = async ({ query: { component } }) => {
	return { name: component };
};

export default Component;
