import { Fragment } from 'react';

import VisuallyHiddenExample from './examples/00-VisuallyHidden';
import SkipLinkExample from './examples/10-SkipLink.js';

const A11yPage = () => (
	<Fragment>
		<VisuallyHiddenExample></VisuallyHiddenExample>
		<SkipLinkExample></SkipLinkExample>
	</Fragment>
);

export default A11yPage;
