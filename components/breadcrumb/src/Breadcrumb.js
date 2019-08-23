/** @jsx jsx */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { SrOnly } from '../../accessibility-helpers/src';
import { ArrowRightIcon } from '../../icon/src';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

/**
 * Breadcrumb: Breadcrumbs are styled navigational links used to indicate a user journey or path. They are a simple, effective and proven method to aid orientation.
 */
export const Breadcrumb = ({ children, ...props }) => {
	const { breadcrumb } = useTheme();

	const common = {
		padding: breadcrumb.padding,
		marginBottom: breadcrumb.marginBottom,
		fontSize: breadcrumb.fontSize,
		listStyle: 'none',
	};

	return (
		<div {...props}>
			<SrOnly>Page navigation:</SrOnly>

			<ol css={common}>{children}</ol>
		</div>
	);
};

// ==============================
// Types
// ==============================

Breadcrumb.propTypes = {
	/**
	 * The breadcrumbs list with the name and corresponding link
	 * We are expecting an array of strings, within an array.
	 */
};

Breadcrumb.defaultProps = {};
