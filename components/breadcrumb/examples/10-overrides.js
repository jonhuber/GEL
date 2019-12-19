/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Breadcrumb, Crumb } from '@westpac/breadcrumb';
import { HouseIcon } from '@westpac/icon';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

const AssistiveText = ({ children, look }) => (
	<span css={{ verticalAlign: 'middle' }}>{children}</span>
);

const Icon = ({ current, assistiveText, ...props }) => <HouseIcon {...props} />;

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/breadcrumb'] = {
		styles: styles => ({
			...styles,
			outline: '1px solid red',
		}),
		subComponent: {
			Icon: {
				component: Icon,
			},
			AssistiveText: {
				component: AssistiveText,
			},
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Intopia ignore />

			<h2>With overrides applied</h2>
			<Breadcrumb>
				<Crumb href="#/" text="Home" />
				<Crumb href="#/personal-banking/" text="Personal" />
				<Crumb href="#/credit-cards/" text="Credit cards" />
			</Breadcrumb>

			<hr />

			<Breadcrumb
				data={[
					{ href: '#/', text: 'Home' },
					{ href: '#/personal-banking/', text: 'Personal' },
					{ href: '#/credit-cards/', text: 'Credit cards' },
				]}
			/>

			<h2>With overrides and component overrides</h2>
			<Breadcrumb
				overrides={{
					subComponent: {
						Crumb: {
							styles: styles => ({
								...styles,
								outline: '3px dotted green',
							}),
						},
					},
				}}
			>
				<Crumb href="#/" text="Home" />
				<Crumb href="#/personal-banking/" text="Personal" />
				<Crumb href="#/credit-cards/" text="Credit cards" />
			</Breadcrumb>

			<hr />

			<Breadcrumb
				overrides={{
					subComponent: {
						Crumb: {
							styles: styles => ({
								...styles,
								outline: '3px dotted green',
							}),
						},
					},
				}}
				data={[
					{ href: '#/', text: 'Home' },
					{ href: '#/personal-banking/', text: 'Personal' },
					{ href: '#/credit-cards/', text: 'Credit cards' },
				]}
			/>
		</GEL>
	);
}

export default Example;