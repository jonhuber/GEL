import React from 'react';
import { Button, ButtonWrap } from '../src';

export default () => (
	<>
		<p>
			Active state styling is provided with a <code>:active</code> pseudo-class. The following
			examples have been programatically forced via use of an <code>active</code> class.
		</p>

		<h2>
			Active buttons with a <code>&lt;button&gt;</code> tag
		</h2>
		<h3>Standard</h3>
		<ButtonWrap>
			<Button appearance="primary">Primary default</Button>
			<Button appearance="hero">Hero default</Button>
			<Button appearance="neutral">Neutral default</Button>
			<Button appearance="faint">Faint default</Button>
		</ButtonWrap>
		<br />
		<br />
		<ButtonWrap>
			<Button appearance="primary" className="active">
				Primary active
			</Button>
			<Button appearance="hero" className="active">
				Hero active
			</Button>
			<Button appearance="neutral" className="active">
				Neutral active
			</Button>
			<Button appearance="faint" className="active">
				Faint active
			</Button>
		</ButtonWrap>
		<h3>Soft</h3>
		<ButtonWrap>
			<Button appearance="primary" isSoft>
				Primary soft default
			</Button>
			<Button appearance="hero" isSoft>
				Hero soft default
			</Button>
			<Button appearance="neutral" isSoft>
				Neutral soft default
			</Button>
			<Button appearance="faint" isSoft>
				Faint soft default
			</Button>
		</ButtonWrap>
		<br />
		<br />
		<ButtonWrap>
			<Button appearance="primary" className="active" isSoft>
				Primary soft active
			</Button>
			<Button appearance="hero" className="active" isSoft>
				Hero soft active
			</Button>
			<Button appearance="neutral" className="active" isSoft>
				Neutral soft active
			</Button>
			<Button appearance="faint" className="active" isSoft>
				Faint soft active
			</Button>
		</ButtonWrap>

		<hr />

		<h2>
			Active buttons with an <code>&lt;a&gt;</code> tag
		</h2>
		<h3>Standard</h3>
		<ButtonWrap>
			<Button href="#0" appearance="primary">
				Primary default
			</Button>
			<Button href="#0" appearance="hero">
				Hero default
			</Button>
			<Button href="#0" appearance="neutral">
				Neutral default
			</Button>
			<Button href="#0" appearance="faint">
				Faint default
			</Button>
		</ButtonWrap>
		<br />
		<br />
		<ButtonWrap>
			<Button href="#0" appearance="primary" className="active">
				Primary active
			</Button>
			<Button href="#0" appearance="hero" className="active">
				Hero active
			</Button>
			<Button href="#0" appearance="neutral" className="active">
				Neutral active
			</Button>
			<Button href="#0" appearance="faint" className="active">
				Faint active
			</Button>
		</ButtonWrap>
		<h3>Soft</h3>
		<ButtonWrap>
			<Button href="#0" appearance="primary" isSoft>
				Primary soft default
			</Button>
			<Button href="#0" appearance="hero" isSoft>
				Hero soft default
			</Button>
			<Button href="#0" appearance="neutral" isSoft>
				Neutral soft default
			</Button>
			<Button href="#0" appearance="faint" isSoft>
				Faint soft default
			</Button>
		</ButtonWrap>
		<br />
		<br />
		<ButtonWrap>
			<Button href="#0" appearance="primary" className="active" isSoft>
				Primary soft active
			</Button>
			<Button href="#0" appearance="hero" className="active" isSoft>
				Hero soft active
			</Button>
			<Button href="#0" appearance="neutral" className="active" isSoft>
				Neutral soft active
			</Button>
			<Button href="#0" appearance="faint" className="active" isSoft>
				Faint soft active
			</Button>
		</ButtonWrap>
	</>
);
