import React from 'react';
import { Button, ButtonWrap } from '../src';

// Examples
const sizes = [
	['small', 'medium', 'large', 'xlarge'],
	['large', 'medium'],
	['small', null, 'large'],
];
const blocks = [[true, false, true, false], [true, false], [true, null, false]];

export default () => (
	<>
		<h2>Responsive sizing</h2>
		<ButtonWrap>
			{sizes.map((s, i) => (
				<React.Fragment key={i}>
					<Button appearance="primary" size={s}>
						[{s.map(v => String(v)).join(', ')}]
					</Button>
					<br />
					<br />
				</React.Fragment>
			))}
		</ButtonWrap>

		<hr />

		<h2>Responsive block</h2>
		<ButtonWrap>
			{blocks.map((b, i) => (
				<React.Fragment key={i}>
					<Button appearance="primary" size="xlarge" isBlock={b}>
						[{b.map(v => String(v)).join(', ')}]
					</Button>
					<br />
					<br />
				</React.Fragment>
			))}
		</ButtonWrap>
	</>
);
