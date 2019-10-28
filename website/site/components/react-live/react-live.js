/** @jsx jsx */
import { jsx } from '@emotion/core';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const ReactLive = ({
	code = `<p>Add your own code in <ReactLive/>'s "code" prop!</p>`,
	scope = {},
}) => (
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

export default ReactLive;
