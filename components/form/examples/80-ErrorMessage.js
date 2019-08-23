import React from 'react';
import { Box } from './_utils';

import { Form, FormGroup, ErrorMessage } from '../src';

export default () => (
	<>
		<h2>Single error message</h2>
		<Form>
			<FormGroup>
				<ErrorMessage>This is an error message</ErrorMessage>
				<Box>Form input here</Box>
			</FormGroup>
		</Form>

		<hr />

		<h2>Multiple error messages (list)</h2>
		<Form>
			<FormGroup>
				<ErrorMessage tag="ul">
					<li>This is an error message</li>
					<li>This is another error message</li>
				</ErrorMessage>
				<Box>Form input here</Box>
			</FormGroup>
		</Form>
	</>
);