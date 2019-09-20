import React from 'react';
import { Button, ButtonWrap } from '../src';

export default () => (
	<>
		<ButtonWrap>
			<Button appearance="primary" disabled>
				Primary
			</Button>
			<Button appearance="hero" disabled>
				Hero
			</Button>
			<Button appearance="neutral" disabled>
				Neutral
			</Button>
			<Button appearance="faint" disabled>
				Faint
			</Button>
			<Button appearance="link" disabled>
				Link
			</Button>
		</ButtonWrap>
		<br />
		<br />
		<ButtonWrap>
			<Button appearance="primary" isSoft disabled>
				Primary soft
			</Button>
			<Button appearance="hero" isSoft disabled>
				Hero soft
			</Button>
			<Button appearance="neutral" isSoft disabled>
				Neutral soft
			</Button>
			<Button appearance="faint" isSoft disabled>
				Faint soft
			</Button>
		</ButtonWrap>
	</>
);
