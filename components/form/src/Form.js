/** @jsx jsx */

import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import { FormProvider } from './Form.context';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Form = ({ size, spacing, inline, children, ...props }) => {
	return (
		<FormProvider value={{ size, spacing, inline }}>
			<form {...props}>{children}</form>
		</FormProvider>
	);
};

// ==============================
// Types
// ==============================

const options = {
	size: ['small', 'medium', 'large', 'xlarge'],
	spacing: ['medium', 'large'],
};

Form.propTypes = {
	/**
	 * Size of children.
	 *
	 * This prop is available to children via `FormContext`.
	 *
	 * Defaults to "medium"
	 */
	size: PropTypes.oneOf(options.size),

	/**
	 * Vertical spacing of children.
	 *
	 * This prop is available to children via `FormContext`.
	 *
	 * Defaults to "medium"
	 */
	spacing: PropTypes.oneOf(options.spacing),

	/**
	 * Inline children mode (SM+).
	 *
	 * This prop is available to children via `FormContext`.
	 *
	 * Defaults to "false"
	 */
	inline: PropTypes.bool,

	/**
	 * Form children.
	 */
	children: PropTypes.node,
};

Form.defaultProps = {
	spacing: 'medium',
	inline: false,
};