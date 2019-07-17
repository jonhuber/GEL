import React from 'react';
import { Alert } from '../src';

import { InfoIcon, AlertIcon } from '../../icon/src'; //until icon package is published

export default () => (
	<>
		<Alert appearance="success" icon={InfoIcon} closable>
			<strong>Well done!</strong> You successfully read this important alert message. Lorem ipsum
			dolor sit amet, consectetur adipisicing elit. Quo dolor provident quasi nisi officia tempore
			fuga autem, animi iste molestiae, qui omnis doloribus aliquid ipsam rem fugiat veniam
			voluptatem accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, unde
			quis, molestias nisi quae voluptates nemo quaerat nihil, consequuntur nobis ratione rerum
			asperiores eveniet dicta maiores quia nostrum. Pariatur, natus. Lorem ipsum dolor sit amet,
			consectetur adipisicing elit. Fuga, magnam illum harum consequatur, quo sunt impedit quam
			minus eaque saepe voluptas corrupti voluptatum, sapiente dolor sequi tempore maxime?
			Neque,obcaecati. <a href="#">Link</a>
		</Alert>
		<Alert appearance="information" icon={InfoIcon} closable>
			<strong>Heads up!</strong> This alert needs your attention, but it’s not super important.{' '}
			<a href="#">Link</a>
		</Alert>
		<Alert appearance="warning" icon={AlertIcon} closable>
			<strong>Warning!</strong> Better check yourself, you’re not looking too good.{' '}
			<a href="#">Link</a>
		</Alert>
		<Alert appearance="danger" icon={AlertIcon} closable>
			<strong>Oh snap!</strong> Change a few things up and try submitting again.{' '}
			<a href="#">Link</a>
		</Alert>
		<Alert appearance="system" icon={InfoIcon} closable>
			<strong>System Error 8942:</strong> The server is no responding. Please try again later. Sorry
			for the inconvenience. <a href="#">Link</a>
		</Alert>
		<Alert appearance="success">
			<strong>Well done!</strong> You successfully read this important alert message, but you can't
			close it. <a href="#">Link</a>
		</Alert>
	</>
);
