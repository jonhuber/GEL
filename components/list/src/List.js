/* @jsx jsx */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { jsx, css } from '@westpac/core';
import { ListItem } from './ListItem';

// ==============================
// Component
// ==============================
export const List = ({ children, ...props }) => {
	const childrenWithProps = Children.map(children, child =>
		child.props.type === 'icon' && child.props.icon
			? cloneElement(child, { ...props, icon: child.props.icon })
			: cloneElement(child, props)
	);

	const { type } = props;
	const ListType = type === 'ordered' ? 'ol' : 'ul';
	return (
		<ListType css={{ margin: 0, padding: type === 'ordered' ? '0 0 0 20px' : 0 }}>
			{childrenWithProps}
		</ListType>
	);
};

// ==============================
// Types
// ==============================
List.propTypes = {
	/** The type of the list */
	type: PropTypes.oneOf(['bullet', 'link', 'tick', 'unstyled', 'icon', 'ordered']),
	/** The appearance of the bullet */
	appearance: PropTypes.oneOf(['primary', 'hero', 'neutral']),
	/** The spacing of space between list elements */
	spacing: PropTypes.oneOf(['medium', 'large']),
	/** The icon for list */
	icon: PropTypes.func,
	/**  Children of List should be ListItem*/
	children: PropTypes.oneOfType([PropTypes.arrayOf(ListItem), ListItem]),
};

List.defaultProps = {
	type: 'bullet',
	appearance: 'primary',
	spacing: 'medium',
};
