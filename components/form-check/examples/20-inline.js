import React from 'react';
import { FormCheck, FormCheckItem } from '../src';
import { Form } from '@westpac/form';

export default () => (
	<>
		<h2>Medium</h2>
		<h3>Using prop passed to this component</h3>
		<FormCheck
			type="checkbox"
			name="example-checkbox-medium-inline-via-prop"
			size="medium"
			isInline
		>
			<FormCheckItem value="1">Option 1</FormCheckItem>
			<FormCheckItem value="2">Option 2</FormCheckItem>
			<FormCheckItem value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-radio-medium-inline-via-prop" size="medium" isInline>
			<FormCheckItem value="1">Option 1</FormCheckItem>
			<FormCheckItem value="2">Option 2</FormCheckItem>
			<FormCheckItem value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>

		<h3>Using prop passed to Form</h3>
		<Form isInline>
			<FormCheck type="checkbox" name="example-checkbox-medium-inline-via-context" size="medium">
				<FormCheckItem value="1">Option 1</FormCheckItem>
				<FormCheckItem value="2">Option 2</FormCheckItem>
				<FormCheckItem value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</FormCheckItem>
			</FormCheck>
			<br />
			<FormCheck type="radio" name="example-radio-medium-inline-via-context" size="medium">
				<FormCheckItem value="1">Option 1</FormCheckItem>
				<FormCheckItem value="2">Option 2</FormCheckItem>
				<FormCheckItem value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</FormCheckItem>
			</FormCheck>
		</Form>

		<hr />

		<h2>Large</h2>
		<h3>Using prop passed to this component</h3>
		<FormCheck type="checkbox" name="example-checkbox-large-inline-via-prop" size="large" isInline>
			<FormCheckItem value="1">Option 1</FormCheckItem>
			<FormCheckItem value="2">Option 2</FormCheckItem>
			<FormCheckItem value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-radio-large-inline-via-prop" size="large" isInline>
			<FormCheckItem value="1">Option 1</FormCheckItem>
			<FormCheckItem value="2">Option 2</FormCheckItem>
			<FormCheckItem value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>

		<h3>Using prop passed to Form</h3>
		<Form isInline>
			<FormCheck type="checkbox" name="example-checkbox-large-inline-via-context" size="large">
				<FormCheckItem value="1">Option 1</FormCheckItem>
				<FormCheckItem value="2">Option 2</FormCheckItem>
				<FormCheckItem value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</FormCheckItem>
			</FormCheck>
			<br />
			<FormCheck type="radio" name="example-radio-large-inline-via-context" size="large">
				<FormCheckItem value="1">Option 1</FormCheckItem>
				<FormCheckItem value="2">Option 2</FormCheckItem>
				<FormCheckItem value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</FormCheckItem>
			</FormCheck>
		</Form>
	</>
);
