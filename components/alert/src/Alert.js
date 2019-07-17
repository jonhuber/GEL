/* @jsx jsx */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

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

	const getPaddingSM = () =>
		closable ? `${alert.padding} 30px ${alert.padding} ${alert.padding}` : alert.padding;

	// Common styling
	const styleCommon = {
		display: [null, 'flex'],
		position: 'relative',
		marginBottom: alert.marginBottom,
		zIndex: 1,
		padding: [alert.padding, getPaddingSM()],
		opacity: 1,
		transition: 'opacity 0.3s ease-in-out',

		'a, h1, h2, h3, h4, h5, h6, ol, ul': {
			color: 'inherit',
		},
		'&.anim-exit-active': {
			opacity: 0,
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
	};

	const styleClose = {
		position: ['relative', 'absolute'],
		color: 'inherit',
		zIndex: 1,
		top: '3px',
		right: 0,
		float: ['right', 'none'],
		marginTop: ['-18px', 0], //pull
		marginRight: ['-18px', 0], //pull

		':hover': {
			opacity: 0.5,
		},
	};
	const styleIcon = {
		float: ['left', 'none'],
		flex: ['none'],
		marginRight: ['6px', '12px'], //gap
	};
	const styleBody = {
		position: 'relative',
		flex: 1,
		top: Icon ? '2px' : null, //tweak
	};

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
						{closable && (
							<Button
								appearance="link"
								icon={CloseIcon}
								onClick={() => {
									setAnim(false);
								}}
								css={mq({ ...styleClose })}
							/>
						)}
						{Icon && <Icon css={mq({ ...styleIcon })} />}
						<div css={mq({ ...styleBody })}>{children}</div>
					</div>
				</CSSTransition>
			)}
		</>
	);
};

// ==============================
// Types
// ==============================

const options = {
	appearance: ['success', 'information', 'warning', 'danger', 'system'],
};

Alert.propTypes = {
	/**
	 * The button appearance.
	 *
	 * Defaults to "primary"
	 */
	appearance: PropTypes.oneOf(options.appearance),

	/**
	 * Close button option.
	 *
	 * Defaults to "false"
	 */
	closable: PropTypes.bool,

	/**
	 * Alert icon.
	 */
	icon: PropTypes.func,

	/**
	 * The content for this button.
	 */
	children: PropTypes.node,
};

Alert.defaultProps = {
	appearance: 'information',
	closable: false,
};
