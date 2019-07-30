/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, css, useTheme } from '@westpac/core';
import { List } from './List';

// ==============================
// Utils
// ==============================
const getListIcon = ({ type, appearance, icon: Icon }) => {
	const { list } = useTheme();

	const style = {
		position: 'absolute',
		left: 0,
		top: 2,
	};

	switch (type) {
		case 'bullet':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					css={style}
				>
					<circle
						r="4"
						cx="8"
						cy="8"
						stroke={`${list[type][appearance].color}`}
						strokeWidth="1"
						fill={`${list[type][appearance].color}`}
					/>
				</svg>
			);

		case 'link':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					css={style}
				>
					<polygon
						fill={`${list[type].color}`}
						fillRule="evenodd"
						points="14.588 12 8 18.588 9.412 20 17.412 12 9.412 4 8 5.412"
					/>
				</svg>
			);

		case 'tick':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					css={style}
				>
					<polygon
						fill={`${list[type].color}`}
						points="8.6 15.6 4.4 11.4 3 12.8 8.6 18.4 20.6 6.4 19.2 5"
					/>
				</svg>
			);
		case 'unstyled':
			return;
		case 'icon':
			return <Icon size="small" css={style} appearance={list[type].color} />;
	}
};

// ==============================
// Component
// ==============================
export const ListItem = ({ type, appearance, icon, spacing, children, ...props }) => {
	const childrenWithProps = Children.map(children, child =>
		child && child.type && child.type === List
			? cloneElement(child, {
					type,
					appearance,
					icon,
					spacing,
					props,
			  })
			: child
	);

	const common = {
		margin: spacing === 'large' ? '12px 0' : '6px 0',
		// display: 'block',
		listStyle: type !== 'ordered' ? 'none' : null,
		paddingLeft: type !== 'ordered' ? 0 : null,
		position: 'relative',
	};

	const styles = {
		bullet: {
			paddingLeft: 19,

			'& & circle': {
				fill: 'transparent',
			},
		},
		link: {
			paddingLeft: 19,
		},
		tick: {
			paddingLeft: 19,
		},
		unstyled: {
			paddingLeft: 0,

			li: {
				paddingLeft: 19,
			},
		},
		icon: {
			paddingLeft: 23,
		},
		ordered: {
			// display: 'list-item',
		},
	};

	return (
		<li css={{ ...common, ...styles[type] }} {...props}>
			{getListIcon({ type, appearance, icon })}
			{childrenWithProps}
		</li>
	);
};

// ==============================
// Types
// ==============================
ListItem.propTypes = {
	/** The type of the list item */
	type: PropTypes.oneOf(['bullet', 'link', 'tick', 'unstyled', 'icon', 'ordered']),
	/** The appearance of the bullet */
	appearance: PropTypes.oneOf(['primary', 'hero', 'neutral']),
	/** The spacing of space between list elements */
	spacing: PropTypes.oneOf(['medium', 'large']),
	/** The icon for list item */
	icon: PropTypes.func,
	/** Any renderable content */
	children: PropTypes.node,
};
