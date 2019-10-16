/** @jsx jsx */

import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, useMediaQuery } from '@westpac/core';
import { SrSkipLink } from '@westpac/accessibility-helpers';
import { useTemplateContext } from './Template';

// ==============================
// Context and consumer hook
// ==============================

const SidebarContext = createContext();

export const useSidebarContext = () => {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error('Sidebar children should be wrapped in a <Sidebar>.');
	}
	return context;
};

// ==============================
// Component
// ==============================

export const Sidebar = ({
	position,
	srSkipLinkText,
	srSkipLinkHref,
	tag: Tag,
	onClick,
	children,
	...props
}) => {
	const { COLORS, LAYOUT } = useTheme();
	const mq = useMediaQuery();
	const [open, setOpen] = useState(false);

	const handleClick = event => {
		setOpen(!open);
	};

	const maxWidth = width => `@media (max-width: ${width}px)`;
	const minWidth = width => `@media (min-width: ${width}px)`;

	return (
		<SidebarContext.Provider value={{ open, handleClick }}>
			<Tag
				css={mq({
					position: 'relative', //for SrSkipLink positioning

					// XS & SM
					[maxWidth(LAYOUT.breakpoints.md - 1)]: {
						position: 'sticky',
						zIndex: 10,
						top: 0,
					},

					// MD+
					[minWidth(LAYOUT.breakpoints.md)]: {
						position: 'fixed',
						zIndex: 1035, //on top of header (to cover its shadow)
						width: '18.75rem',
						top: 0,
						bottom: 0,
						left: 'auto', //no left setting, kinda provides us with a relative left position
						backfaceVisibility: 'hidden',

						...(position === 'left' && {
							borderRight: `1px solid ${COLORS.border}`,
						}),
						...(position === 'right' && {
							borderLeft: `1px solid ${COLORS.border}`,
							right: 0,
						}),
					},
				})}
				{...props}
			>
				{srSkipLinkText && <SrSkipLink href={srSkipLinkHref}>{srSkipLinkText}</SrSkipLink>}
				{children}
			</Tag>
		</SidebarContext.Provider>
	);
};

// ==============================
// Types
// ==============================

Sidebar.propTypes = {
	/**
	 * Sidebar position
	 */
	position: PropTypes.oneOf(['left', 'right']),

	/**
	 * Screen reader skip link text
	 */
	srSkipLinkText: PropTypes.string,

	/**
	 * Screen reader skip link href attribute value
	 */
	srSkipLinkHref: PropTypes.string,

	/**
	 * Sidebar tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

	/**
	 * The onClick handler for this switch
	 */
	onClick: PropTypes.func,

	/**
	 * Component children
	 */
	children: PropTypes.node.isRequired,
};

Sidebar.defaultProps = {
	position: 'right',
	srSkipLinkText: 'Skip to main content',
	srSkipLinkHref: '#content',
	open: false,
	tag: 'div',
};
