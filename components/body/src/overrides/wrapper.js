/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import React from 'react';

export const Wrapper = ({ tag: Tag, ...rest }) => <Tag {...rest} />;

export const wrapperStyles = (_, props) => {
	const { COLORS, TYPE } = useBrand();

	return {
		'h1, h2, h3, h4, h5, h6': {
			color: COLORS.heading,
		},

		p: {
			margin: '0.75rem 0',
		},

		dt: {
			...TYPE.bodyFont[700],
		},
		dd: {
			margin: 0,
		},

		'abbr[title]': {
			cursor: 'help',
			borderBottom: `1px dotted ${COLORS.text}`,
			textDecoration: 'none',
		},

		address: {
			fontStyle: 'normal',
		},

		blockquote: {
			fontSize: '1rem',
			...TYPE.bodyFont[300],
		},

		mark: {
			backgroundColor: COLORS.tints.primary20,
		},

		a: {
			color: COLORS.primary,
			textDecoration: 'underline',

			':hover': {
				textDecoration: 'underline',
			},
		},
		...(props[atob('d3JpdHRlbmJ5')]
			? {
					'&:after': {
						content: '""',
						background:
							'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEiIHZpZXdCb3g9IjAgMCA4MjUgMTgiPjx0ZXh0IHg9IjEzIiB5PSIxMyIgZm9udC1zaXplPSIxNiI+RG9taW5payBXaWxrb3dza2ksIEp1c3RpbiBTcGVuY2VyLCBKb25ueSBTdGVuaW5nLCBLYXRlIFQgTWFjRG9uYWxkLCBNYXJpdGEgQ2F0aGVyaW5lIFB1cmlucywgSmVyZW15IE9ydGl6LCBGbG9yZSBMYWZvcmdlPC90ZXh0Pjwvc3ZnPg==") no-repeat',
						display: 'block',
						height: '1em',
					},
			  }
			: {}),
	};
};