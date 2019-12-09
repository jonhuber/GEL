/** @jsx jsx */

import { forwardRef, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { jsx, useBrand, merge } from '@westpac/core';
import { Body } from '@westpac/body';
import { CloseIcon } from '@westpac/icon';
import { Button } from '@westpac/button';
// import ScrollLock from 'react-scrolllock';
import pkg from '../package.json';

export const PopoverPanel = forwardRef(({ open, title, content, position, ...props }, ref) => {
	const { [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		Panel,
	};

	merge(overrides, overridesWithTokens);

	return (
		open &&
		ReactDOM.createPortal(
			<Fragment>
				<overrides.Panel
					position={position}
					title={title}
					content={content}
					ref={ref}
					css={{
						position: 'fixed',
						top: 0,
						left: 0,
						transform: `translate(${position.left}rem, ${position.top}rem)`,
					}}
					{...props}
				/>
			</Fragment>,
			document.body
		)
	);
});

// ==============================
// Override Component
// ==============================
const Panel = forwardRef(({ title, content, position, handleClose, ...props }, ref) => {
	const { SPACING, COLORS } = useBrand();
	return (
		<div
			ref={ref}
			tabIndex="-1"
			aria-label="Use the ESC key to close"
			css={{
				boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
				border: `1px solid ${COLORS.muted}`,
				borderRadius: 3,
				width: '17.625rem',
				backgroundColor: '#fff',
				pointerEvents: 'all',
				textAlign: 'left',

				'::before': {
					content: '""',
					position: 'absolute',
					[position.placement === 'top' ? 'bottom' : 'top']: '-0.8125rem',
					left: '50%',
					marginLeft: '-0.5rem',
					width: 0,
					[position.placement === 'top'
						? 'borderTop'
						: 'borderBottom']: `0.75rem solid ${COLORS.muted}`,
					borderRight: '0.5rem solid transparent',
					borderLeft: '0.5rem solid transparent',
					fontSize: 0,
					lineHeight: 0,
				},

				...(position.placement === 'top' && {
					'::after': {
						content: '""',
						position: 'absolute',
						bottom: '-0.6875rem',
						left: '50%',
						marginLeft: '-0.5rem',
						width: 0,
						borderTop: '0.75rem solid #fff',
						borderRight: '0.5rem solid transparent',
						borderLeft: '0.5rem solid transparent',
						fontSize: 0,
						lineHeight: 0,
					},
				}),
			}}
			{...props}
		>
			<p
				css={{
					margin: 0,
					padding: '0.625rem 0.75rem',
					backgroundColor: COLORS.muted,
					color: '#fff',
					fontSize: '1rem',
				}}
			>
				{title}
			</p>
			<Body css={{ margin: 0, padding: '0.625rem 0.75rem', color: COLORS.neutral }}>{content}</Body>
			<CloseBtn
				onClose={handleClose}
				icon={CloseIcon}
				css={{
					position: 'absolute',
					top: 0,
					right: SPACING(1),
					color: '#fff',
					':hover svg': {
						opacity: 0.5,
					},
				}}
			/>
		</div>
	);
});

const CloseBtn = ({ onClose, icon, ...props }) => (
	<Button onClick={() => onClose()} iconAfter={icon} look="link" {...props} />
);
