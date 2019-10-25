/** @jsx jsx */
import { jsx } from '@emotion/core';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const code = `
<div>
  <h2>Hi, I am some live code - edit me!</h2>
</div>
`;

export default function LiveCode() {
	return (
		<LiveProvider code={code}>
			<div css={{ display: 'flex' }}>
				<LiveEditor
					css={{
						background: '#3b3b3b',
						padding: 40,
						fontSize: 18,
						borderRadius: 4,
						marginRight: 20,
					}}
				/>
				<LiveError />
				<LivePreview />
			</div>
		</LiveProvider>
	);
}
