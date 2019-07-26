/** @jsx jsx */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';

/**
 * switch: Switch component for the Westpac GEL
 */

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Switch = ({ name, srOnly, text, children }) => {
	const { switchControl } = useTheme();
	const common = {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		marginRight: '18px',
		height: '36px',
		paddingRight: '80px',
		borderRadius: '36px',
		height: '36px',
		marginBottom: '6px',

		'&:hover': {
			cursor: 'pointer',
		},

		input: {
			position: 'absolute',
			zIndex: -1,
			opacity: 0,
		},
	};

	const srOnlyCss = {
		position: 'absolute',
		height: 1,
		width: 1,
		overflow: 'hidden',
		clip: 'rect(1px 1px 1px 1px)',
	};

	const textCss = {
		paddingRight: 6,
	};

	const toggleCss = {
		borderRadius: 36,
		height: 36,
		width: 80,
		display: 'block',
		position: 'absolute',
		right: 0,
		top: 0,
		zIndex: 1,
		overflow: 'hidden',
		lineHeight: 1.5,
		transition: 'border .3s ease,background .3s ease',
		border: `${switchControl.borderWidth} solid`,
		borderColor: switchControl.appearance.borderColor,
		backgroundColor: switchControl.appearance.backgroundColor,

		'&::after': {
			content: '""',
			height: 32,
			width: 32,
			display: 'block',
			position: 'absolute',
			left: 0,
			top: 0,
			borderRadius: '50%',
			boxShadow: '3px 0 6px 0 rgba(0,0,0,0.3)',
			transition: 'all .3s ease',
			backgroundColor: switchControl.appearance.backgroundColor,
		},
	};

	const toggleOnCss = {
		borderColor: '#621a4b',
		backgroundColor: '#621a4b',

		'&::after': {
			left: '100%',
			transform: 'translateX(-100%)',
			boxShadow: '-3px 0 6px 0 rgba(0,0,0,0.3)',
			content: '""',
			height: 32,
			width: 32,
			display: 'block',
			position: 'absolute',
			top: 0,
			borderRadius: '50%',
			backgroundColor: switchControl.appearance.backgroundColor,
			transition: 'all .3s ease',
		},
	};

	const textParamCss = {
		position: 'absolute',
		textAlign: 'center',
		lineHeight: 2,
		fontSize: switchControl.fontSize,
		width: 44,
		width: 'calc(100% - 32px)',
	};

	const textParamOnCss = {
		left: 0,
		color: '#fff',
	};

	const textParamOffCss = {
		right: 0,
	};

	const [on, setOn] = useState(false);
	const toggle = () => setOn(!on);

	const textParam = text.map((t, i) => (
		<>
			{i === 0 ? (
				<span key={i} css={{ ...textParamCss, ...textParamOnCss }}>
					{t}
				</span>
			) : (
				<span key={i} css={{ ...textParamCss, ...textParamOffCss }}>
					{t}
				</span>
			)}
		</>
	));

	return (
		<label css={common} onChange={toggle}>
			<input type="checkbox" name={name} id={name} />
			{srOnly ? <span css={srOnlyCss}>{children}</span> : <span css={textCss}>{children}</span>}

			{on ? (
				<span css={{ ...toggleCss, ...toggleOnCss }}>{textParam}</span>
			) : (
				<span css={toggleCss}>{textParam}</span>
			)}
		</label>
	);
};

// ==============================
// Types
// ==============================

Switch.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
};

Switch.defaultProps = {
	text: ['On', 'Off'],
};
