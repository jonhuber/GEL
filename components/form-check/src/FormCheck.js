/** @jsx jsx */

import React, { Children, cloneElement, isValidElement, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import { FormCheckItem } from './FormCheckItem';
import { FormContext } from '@westpac/form';

// ==============================
// Component
// ==============================

export const FormCheck = ({ type, name, size, isInline, isFlipped, children, ...props }) => {
	const formContext = useContext(FormContext);

	// Pass the selected props on to children
	const childrenWithProps = Children.map(children, child => {
		if (isValidElement(child) && child.type && child.type === FormCheckItem) {
			return cloneElement(child, {
				type,
				name,
				size: formContext.size || size,
				isInline: formContext.isInline || isInline,
				isFlipped,
			});
		}
	});

	return <div {...props}>{childrenWithProps}</div>;
};

// ==============================
// Types
// ==============================

const options = {
	type: ['checkbox', 'radio'],
	size: ['medium', 'large'],
};

FormCheck.propTypes = {
	/**
	 * Form check type.
	 *
	 * This prop is passed to children.
	 */
	type: PropTypes.oneOf(options.type),

	/**
	 * The form check input element’s name.
	 *
	 * This prop is passed to children.
	 */
	name: PropTypes.string.isRequired,

	/**
	 * Form check size.
	 *
	 * This prop is passed to children and may be set via `FormContext`.
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * Enable inline mode.
	 *
	 * This prop is passed to children and may be set via `FormContext`.
	 */
	isInline: PropTypes.bool,

	/**
	 * Form check orientation (control on the right).
	 *
	 * This prop is passed to children.
	 */
	isFlipped: PropTypes.bool,

	/**
	 * Form check item(s)
	 */
	children: PropTypes.node.isRequired,
};

FormCheck.defaultProps = {
	type: 'checkbox',
	size: 'medium',
	isInline: false,
	isFlipped: false,
};
