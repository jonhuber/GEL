/** @jsx jsx */

import React, { useState } from 'react';
import { jsx, useTheme, paint } from '@westpac/core';

import { SrOnly } from './SrOnly'; //TODO: move to Core

// ==============================
// Utils
// ==============================

const asArray = val => (Array.isArray(val) ? val : [val]);

// ==============================
// Component
// ==============================

export const FormSwitchText = ({ block, flip, srOnlyText, ...props }) => {
	const { breakpoints, formSwitch } = useTheme();
	const mq = paint(breakpoints);

	const styleText = {
		flex: block ? 1 : null,
		...(gap => (flip ? { paddingLeft: gap } : { paddingRight: gap }))(formSwitch.text.gap),
	};

	return srOnlyText ? <SrOnly {...props} /> : <span css={mq(styleText)} {...props} />;
};

export const FormSwitchToggle = ({ size, toggleText, ...props }) => {
	const { breakpoints, formSwitch } = useTheme();
	const mq = paint(breakpoints);

	const styleResponsive = () => {
		const sizeArr = asArray(size);

		return {
			borderRadius: sizeArr.map(s => s && formSwitch.size[s].borderRadius),
			width: sizeArr.map(s => s && formSwitch.size[s].width),
			height: sizeArr.map(s => s && formSwitch.size[s].height),
			fontSize: sizeArr.map(s => s && formSwitch.size[s].fontSize),
		};
	};

	// On/off toggle switch styling
	const styleToggle = {
		borderRadius: styleResponsive().borderRadius,
		width: styleResponsive().width,
		height: styleResponsive().height,
		position: 'relative',
		zIndex: 1,
		border: `${formSwitch.borderWidth}px solid`,
		borderColor: formSwitch.borderColor,
		backgroundColor: formSwitch.backgroundColor,
		overflow: 'hidden',
		lineHeight: 1.5,
		transition: 'border .3s ease, background .3s ease',
		userSelect: 'none',

		// Checked state
		'input:checked ~ &': {
			...formSwitch.toggle.checked,
		},

		// Knob
		'::after': {
			content: '""',
			display: 'block',
			position: 'absolute',
			left: 0,
			top: 0,
			borderRadius: '50%',
			boxShadow: '3px 0 6px 0 rgba(0,0,0,0.3)',
			transition: 'all .3s ease',
			backgroundColor: formSwitch.backgroundColor,
			...(val => ({ width: val, height: val }))(
				styleResponsive().height.map(h => h && h - formSwitch.borderWidth * 2)
			),

			// Checked state
			'input:checked ~ &': {
				left: '100%',
				transform: 'translateX(-100%)',
			},
		},

		'input:disabled ~ &': {
			cursor: 'not-allowed',
			opacity: 0.5,
		},
	};

	// On/off text styling
	const styleToggleText = {
		position: 'absolute',
		right: 0,
		textAlign: 'center',
		fontSize: styleResponsive().fontSize,
		lineHeight: styleResponsive().height.map(h => h && `${h - formSwitch.borderWidth * 2}px`),
		width: styleResponsive().height.map(
			h => h && `calc(100% - ${h - formSwitch.borderWidth * 2}px)`
		),
		...formSwitch.toggleText.default,
	};

	const styleToggleTextOff = {
		right: 0,

		// Checked state
		'input:checked ~ span &': {
			opacity: 0, //hide
		},
	};
	const styleToggleTextOn = {
		opacity: 0, //hide (default)
		left: 0,
		...formSwitch.toggleText.checked,

		// Checked state
		'input:checked ~ span &': {
			opacity: 1, //show
		},
	};

	return (
		<span css={mq(styleToggle)} {...props}>
			{toggleText && (
				<>
					<span css={mq({ ...styleToggleText, ...styleToggleTextOff })}>{toggleText[1]}</span>
					<span css={mq({ ...styleToggleText, ...styleToggleTextOn })}>{toggleText[0]}</span>
				</>
			)}
		</span>
	);
};