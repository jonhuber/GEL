import React from 'react';
import { FormCheck, Item } from '../src';

export default () => (
	<>
		<h2>Inline via component</h2>

		<h3>Medium</h3>
		<FormCheck type="checkbox" name="example-checkbox-medium-inline" size="medium" inline>
			<Item value="1">Option 1</Item>
			<Item value="2">Option 2</Item>
			<Item value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</Item>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-radio-medium-inline" size="medium" inline>
			<Item value="1">Option 1</Item>
			<Item value="2">Option 2</Item>
			<Item value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</Item>
		</FormCheck>

		<h3>Large</h3>
		<FormCheck type="checkbox" name="example-checkbox-large-inline" size="large" inline>
			<Item value="1">Option 1</Item>
			<Item value="2">Option 2</Item>
			<Item value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</Item>
		</FormCheck>
		<br />
		<FormCheck type="radio" name="example-radio-large-inline" size="large" inline>
			<Item value="1">Option 1</Item>
			<Item value="2">Option 2</Item>
			<Item value="3">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit labore illo sint tempora
				magnam modi nesciunt consectetur vitae maiores itaque reiciendis sunt nisi ullam officiis,
				provident fugiat, esse iste adipisci repellat! Incidunt delectus, pariatur quaerat vitae
				aspernatur eveniet libero.
			</Item>
		</FormCheck>
	</>
);
