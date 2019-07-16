/* @jsx jsx */

import React, { useState } from 'react';
import { css, jsx, useTheme, paint } from '@westpac/core';

import { Button } from '../../button/src'; //until button package is published
import { CloseIcon } from '../../icon/src'; //until icon package is published
import { CSSTransition } from 'react-transition-group';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

export const Alert = ({ appearance, icon: Icon, closable, children }) => {
	const [open, setOpen] = useState(true);
	const [animAlert, setAnim] = useState(true);

	const { breakpoints, alert } = useTheme();
	const mq = paint(breakpoints);

	// Common styling
	const styleCommon = {
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
		marginBottom: '21px',
		zIndex: '1',
		padding: '18px 34px 18px 18px',

		a: {
			color: 'inherit',
		},
	};

	// Alert appearance styling
	const styleAppearance = {
		color: appearance === 'system' ? 'black' : alert.appearance[appearance].color,
		backgroundColor:
			appearance === 'system' ? 'yellow' : alert.appearance[appearance].backgroundColor,
		borderTop: `${alert.borderWidth} solid`,
		borderBottom: `${alert.borderWidth} solid`,
		borderColor: appearance === 'system' ? 'yellow' : alert.appearance[appearance].borderColor,

		// display: 'flex',
		// alignItems: 'center',

		/*'& > .icon': {
			marginRight: '6px',
			marginTop: '1px',
			float: 'left',
		},

		'& > .icon-alert': {
			marginRight: '4px',
		},*/

		/*a: {
			color: 'inherit',
		},*/
	};

	/*const styleBox = appearance => {
		const { colors, alert } = useTheme();

		return {
			display: 'block',
			position: 'relative',
			marginBottom: '21px',
			zIndex: '1',
			padding: '18px 34px 18px 18px',

			opacity: '1',
			transition: 'opacity 0.3s ease-in-out',

			button: {
				color: colors[appearance],
				background: 'none',
				border: 'none',
				position: 'absolute',
				right: '0',
				top: '15px',
				padding: '5px 12px',

				'&:hover': {
					cursor: 'pointer',
					opacity: '0.5',
				},
			},
			'.alert-box': {
				position: 'relative',
				flex: 1,
			},

			'&.anim-exit-active': {
				opacity: 0,
			},
		};
	};*/

	return (
		<>
			{open && (
				<CSSTransition
					in={animAlert}
					classNames="anim"
					timeout={400}
					onExited={() => setOpen(false)}
				>
					<div css={mq({ ...styleCommon, ...styleAppearance })}>
						{Icon && <Icon />}
						<div className="alert-body">{children}</div>
						{closable && (
							<Button
								icon={CloseIcon}
								onClick={() => {
									setAnim(false);
								}}
							/>
						)}
					</div>
				</CSSTransition>
			)}
		</>
	);
};

// ==============================
// Types
// ==============================
Alert.defaultProps = {
	closable: true,
};
