import React from 'react';
import Link from 'next/link';

export default function Nav() {
	return (
		<ul>
			<LinkItem name="Welcome!" path="/" />
			<LinkItem name="Tokens" path="/tokens" />
			<LinkItem name="A11y" path="/components/a11y" />
			<LinkItem name="Alert" path="/components/alert" />
		</ul>
	);
}

function LinkItem({ name, path }) {
	return (
		<li>
			<Link href={path}>
				<a>{name}</a>
			</Link>
		</li>
	);
}
