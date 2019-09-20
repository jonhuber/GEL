import React from 'react';
import { FormCheck, FormCheckItem } from '../src';
import { Form } from '@westpac/form';

export default () => (
	<>
		<h2>Medium</h2>
		<h3>Using prop passed to this component</h3>
		<FormCheck type="checkbox" name="example-checkbox-medium-via-prop" size="medium">
			<FormCheckItem value="1">Option 1</FormCheckItem>
			<FormCheckItem value="2">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<FormCheck type="radio" name="example-radio-medium-via-prop" size="medium">
			<FormCheckItem value="1">Option 1</FormCheckItem>
			<FormCheckItem value="2">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>

		<h3>Using prop passed to Form</h3>
		<Form size="medium">
			<FormCheck type="checkbox" name="example-checkbox-medium-via-context">
				<FormCheckItem value="1">Option 1</FormCheckItem>
				<FormCheckItem value="2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</FormCheckItem>
			</FormCheck>
			<FormCheck type="radio" name="example-radio-medium-via-context">
				<FormCheckItem value="1">Option 1</FormCheckItem>
				<FormCheckItem value="2">
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
		<FormCheck type="checkbox" name="example-checkbox-large-via-prop" size="large">
			<FormCheckItem value="1">Option 1</FormCheckItem>
			<FormCheckItem value="2">Option 2</FormCheckItem>
			<FormCheckItem value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</FormCheckItem>
		</FormCheck>
		<FormCheck type="radio" name="example-radio-large-via-prop" size="large">
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
		<Form size="large">
			<FormCheck type="checkbox" name="example-checkbox-large-via-context">
				<FormCheckItem value="1">Option 1</FormCheckItem>
				<FormCheckItem value="2">Option 2</FormCheckItem>
				<FormCheckItem value="3">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
					magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
					provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
					aspernatur eveniet libero.
				</FormCheckItem>
			</FormCheck>
			<FormCheck type="radio" name="example-radio-large-via-context">
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
