import React from 'react';
import { Button, ButtonWrap } from '../src';

export default () => (
	<>
		<h2>
			Button with an <code>&lt;a&gt;</code> tag
		</h2>
		<ButtonWrap>
			<Button href="#0">Link</Button>
			<Button href="#0" appearance="link">
				Link
			</Button>
		</ButtonWrap>

		<hr />

		<h2>
			Button with a <code>&lt;button&gt;</code> tag
		</h2>
		<ButtonWrap>
			<Button type="button">Button</Button>
			<Button type="reset">Reset</Button>
			<Button type="submit">Submit</Button>
		</ButtonWrap>

		<hr />

		<h2>
			Button with an <code>&lt;input&gt;</code> tag
		</h2>
		<ButtonWrap>
			<Button tag="input" type="button" value="Button" />
			<Button tag="input" type="reset" value="Reset" />
			<Button tag="input" type="submit" value="Submit" />
		</ButtonWrap>
	</>
);
