import React, { Fragment } from 'react';
import LogList from './log-list';

function Changelog({ data }) {
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
			<LogList changelog={data} range={range} />
		</Fragment>
	);
}

export default Changelog;
