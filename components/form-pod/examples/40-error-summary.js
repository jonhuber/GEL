import React from 'react';

import { Global, useTheme } from '@westpac/core';

import {
	FormPod,
	FormPodPanel,
	FormPodPanelBody,
	FormPodPanelFooter,
	FormPodContactList,
	FormPodIndicator,
	FormPodActions,
} from '../src';
import { Alert, AlertHeading } from '@westpac/alert';
import { List, ListItem } from '@westpac/list';
import { HeadsetIcon } from '@westpac/icon';
import { Button } from '@westpac/button';

export default () => {
	const {
		template: { wrapper },
	} = useTheme();

	// Contact detail data
	const contactItems = [
		{
			icon: HeadsetIcon,
			text: '1300 888 888',
			url: 'tel:1300888888',
			onClick: () => {},
		},
	];

	return (
		<>
			<Global
				styles={{
					// Lets apply a background to simulate being inside the Template component
					body: {
						backgroundColor: wrapper.backgroundColor,
					},
				}}
			/>

			<FormPod preheading="Preheading" heading="Heading">
				<FormPodPanel isNoBorderTop>
					<Alert appearance="danger">
						{/* Nb. Tabindex="-1" for programmatically set focus */}
						<AlertHeading tag="h3" tabIndex="-1">
							Please fix the 4 errors listed below
						</AlertHeading>

						<List type="unstyled">
							<ListItem>
								<a href="#title">Select a title</a>
							</ListItem>
							<ListItem>
								<a href="#given-name">Enter your given name</a>
							</ListItem>
							<ListItem>
								<a href="#family-name">Enter your family name</a>
							</ListItem>
						</List>
					</Alert>
					<FormPodPanelBody>[PANEL CONTENT]</FormPodPanelBody>
					<FormPodPanelFooter
						left={<FormPodContactList items={contactItems} />}
						right={<FormPodIndicator />}
					/>
				</FormPodPanel>
				<FormPodActions
					primary={
						<>
							<Button appearance="primary" isSoft size="large" isBlock={[true, false]}>
								Back
							</Button>
							<Button appearance="primary" size="large" isBlock={[true, false]}>
								Next
							</Button>
						</>
					}
					secondary={
						<Button appearance="faint" isSoft size="large" isBlock={[true, false]}>
							Cancel
						</Button>
					}
				/>
			</FormPod>
		</>
	);
};
