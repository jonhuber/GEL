import React from 'react';
import { Switch } from '../src';
import { Form } from '@westpac/form';

export default () => (
	<>
		<h2>Small</h2>
		<h3>Using prop passed to this component</h3>
		<Switch name="example-small-via-prop" size="small">
			Turn notifications
		</Switch>

		<h3>Using prop passed to Form</h3>
		<Form size="small">
			<Switch name="example-small-via-context">Turn notifications</Switch>
		</Form>

		<hr />

		<h2>Medium</h2>
		<h3>Using prop passed to this component</h3>
		<Switch name="example-medium-via-prop" size="medium">
			Turn notifications
		</Switch>

		<h3>Using prop passed to this component</h3>
		<Form size="medium">
			<Switch name="example-medium-via-context" size="medium">
				Turn notifications
			</Switch>
		</Form>

		<hr />

		<h2>Large</h2>
		<h3>Using prop passed to this component</h3>
		<Switch name="example-large-via-prop" size="large">
			Turn notifications
		</Switch>

		<h3>Using prop passed to Form</h3>
		<Form size="large">
			<Switch name="example-large-via-context">Turn notifications</Switch>
		</Form>

		<hr />

		<h2>Extra large</h2>
		<h3>Using prop passed to this component</h3>
		<Switch name="example-xlarge-via-prop" size="xlarge">
			Turn notifications
		</Switch>

		<h3>Using prop passed to Form</h3>
		<Form size="xlarge">
			<Switch name="example-xlarge-via-context">Turn notifications</Switch>
		</Form>
	</>
);
