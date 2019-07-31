/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const FormChitChat = ({ tag: Tag, size, spacing, inline, ...props }) => {
	const { breakpoints, form } = useTheme();
	const mq = paint(breakpoints);

	// Common styling
	const styleCommon = {
		...form.chitchat,
	};

	return <Tag css={mq({ ...styleCommon })} {...props} />;
};

// ==============================
// Types
// ==============================

FormChitChat.propTypes = {
	/**
	 * The component tag.
	 *
	 * Defaults to "p"
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

FormChitChat.defaultProps = {
	tag: 'p',
};
