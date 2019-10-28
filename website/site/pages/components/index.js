import React, { Fragment } from 'react';
import Changelog from '../../components/changelog';
import ReactLive from '../../components/react-live';

const data = `# This package itself
## 2.0.0
- [major] This is absolutely a great idea
## 1.0.0
- [major] 24601
## 0.5.0
- [minor] Who am I?
## 0.4.3
- [patch] And so, Honor, you see it's true,
- [minor] That man bears no more guilt than you!
## 0.4.2
- [patch] Who am I?
- [patch] I am Jean Valjean!`;

export default function Components() {
	return (
		<Fragment>
			<h1>This is the components page!</h1>
			<ReactLive />
			{/* lol,lazy spacer below */}
			<br />
			<br />
			<br />
			<hr />
			<br />
			<br />
			<br />
			<Log />
		</Fragment>
	);
}

function Log() {
	const [range, updateRange] = React.useState('');

	const handleChange = event => {
		updateRange(event.target.value);
	};

	return (
		<Fragment>
			<input
				type="text"
				onChange={handleChange}
				placeholder={'Semver Range: e.g. "> 1.0.6 <= 3.0.2"'}
				value={range}
			/>
			<Changelog changelog={data} range={range} />
		</Fragment>
	);
}
