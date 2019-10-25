import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';
// import Pagination from '@atlaskit/pagination';
import filterChangelog from '../utils/filter-changelog';
import divideChangelog from '../utils/divide-changelog';

function getVersion(str) {
	return str.match(/^(\d+\.\d+\.\d+)/);
}
const Heading = ({ children, href }) => {
	const childrenArray = React.Children.toArray(children);
	const title = childrenArray[0];
	const version = getVersion(title.toString());

	// wrap children if they can't be rendered e.g. array
	if (childrenArray.length !== 1) return <div>{children}</div>;
	if (typeof title !== 'string') return <div>{children}</div>;
	if (!version) return <div>{children}</div>;

	const versionNumber = version[1];
	const versionDate = version[2];
	const anchorProps = {
		href: href || '',
		rel: 'noopener noreferrer',
		style: { fontWeight: 500 },
		target: '_blank',
	};
	return (
		<h3>
			{href ? <a {...anchorProps}>{versionNumber}</a> : versionNumber}
			{versionDate ? <small> &mdash; {versionDate}</small> : null}
		</h3>
	);
};

const LogItem = styled.div`
	margin-bottom: 1em;
	${p =>
		p.major
			? `
          &:not(:first-of-type) {
            border-top: 2px solid red;
            margin-top: 20px;
            padding-top: 20px;
          }
        `
			: null};
`;

const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const NoMatch = styled.div`
	align-items: center;
	background-color: red;
	border-radius: 4px;
	color: blue;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 20px;
	min-height: 120px;
`;

export default class Changelog extends React.Component {
	state = {
		currentPage: 1,
	};

	static defaultProps = {
		getUrl: () => null,
		changelog: '',
	};

	handlePageChange = (_e, newPage) => {
		this.setState({ currentPage: newPage });
	};

	render() {
		const { changelog, getUrl, range, packageName, entriesPerPage } = this.props;
		const logs = divideChangelog(changelog);
		let filteredLogs = filterChangelog(logs, range);

		let pages = [];

		if (entriesPerPage) {
			const numPages = Math.ceil(filteredLogs.length / entriesPerPage);
			pages = Array.from({ length: numPages }, (_v, i) => i + 1);
			const { currentPage } = this.state;

			filteredLogs = filteredLogs.filter(
				(_v, i) => i >= (currentPage - 1) * entriesPerPage && i < currentPage * entriesPerPage
			);
		}

		let currentMajor = '0';

		return (
			<div>
				{!filteredLogs.length ? (
					<NoMatch>No matching versions &mdash; please try again.</NoMatch>
				) : (
					filteredLogs.map((v, i) => {
						const major = v.version.substr(0, 1);
						const majorHasChanged = currentMajor !== major;
						currentMajor = major;
						const href = getUrl(v.version);

						return (
							/* eslint-disable react/no-array-index-key */
							<LogItem key={`${v.version}-${i}`} major={majorHasChanged}>
								<ReactMarkdown
									escapeHtml
									source={v.md}
									renderers={{
										Heading: props => <Heading packageName={packageName} href={href} {...props} />,
									}}
								/>
							</LogItem>
						);
					})
				)}
			</div>
		);
	}
}
