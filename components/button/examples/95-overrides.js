/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Button, ButtonGroup } from '@westpac/button';
import { HouseIcon } from '@westpac/icon';
import { Fragment } from 'react';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

const TextWrapper = ({ children, ...rest }) => (
	<Fragment>
		{children}
		<HouseIcon size="small" color="currentColor" css={{ marginLeft: '0.5em' }} />
	</Fragment>
);

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/button'] = {
		styles: styles => ({
			...styles,
			outline: '1px dotted blue',
		}),

		subComponent: {
			ButtonGroup: {
				styles: styles => ({
					...styles,
					outline: `4px solid green`,
				}),
			},
			TextWrapper: {
				component: TextWrapper,
			},
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Intopia ignore />
			<h2>With overrides applied</h2>
			<Button>Default standard</Button> <Button look="primary">Primary standard</Button>{' '}
			<Button look="hero">Hero standard</Button> <Button look="faint">Faint standard</Button>{' '}
			<Button look="link">Link</Button>
			<hr />
			<ButtonGroup block>
				<Button>Left</Button>
				<Button>Middle</Button>
				<Button>Right</Button>
			</ButtonGroup>
			<hr />
			<ButtonGroup
				block
				data={[
					{ children: 'Left', value: 'left' },
					{ children: 'Middle', value: 'middle' },
					{ children: 'Right', value: 'right' },
				]}
			/>
			<h2>With overrides and component overrides</h2>
			<ButtonGroup
				overrides={{
					subComponent: {
						ButtonGroup: {
							styles: styles => ({
								...styles,
								outline: `5px solid rebeccapurple`,
							}),
						},
					},
				}}
			>
				<Button>Left</Button>
				<Button>Middle</Button>
				<Button>Right</Button>
			</ButtonGroup>
			<hr />
			<ButtonGroup
				overrides={{
					subComponent: {
						ButtonGroup: {
							styles: styles => ({
								...styles,
								outline: `5px solid hotpink`,
							}),
						},
					},
				}}
				data={[
					{ children: 'Left', value: 'left' },
					{ children: 'Middle', value: 'middle' },
					{ children: 'Right', value: 'right' },
				]}
			/>
		</GEL>
	);
}

export default Example;