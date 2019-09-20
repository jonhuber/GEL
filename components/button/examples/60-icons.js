import React from 'react';
import { Button, ButtonWrap } from '../src';
import {
	HouseIcon,
	AlertIcon,
	ChatIcon,
	AccessibilityIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	StarIcon,
} from '@westpac/icon';

export default () => (
	<>
		<h2>Icon after</h2>
		<ButtonWrap>
			<Button appearance="primary" size="small" iconAfter={HouseIcon}>
				Small
			</Button>{' '}
			<Button appearance="primary" size="medium" iconAfter={AlertIcon}>
				Medium
			</Button>{' '}
			<Button appearance="primary" size="large" iconAfter={ChatIcon}>
				Large
			</Button>{' '}
			<Button appearance="primary" size="xlarge" iconAfter={AccessibilityIcon}>
				Extra large
			</Button>
		</ButtonWrap>
		<br />
		<br />
		<ButtonWrap>
			<Button appearance="primary" size="xlarge" iconAfter={ArrowRightIcon} isBlock>
				Extra large block
			</Button>
		</ButtonWrap>
		<br />
		<ButtonWrap>
			<Button appearance="primary" size="small" iconAfter={ArrowRightIcon} isBlock isJustify>
				Small block justify
			</Button>
		</ButtonWrap>
		<br />
		<ButtonWrap>
			<Button appearance="primary" size="medium" iconAfter={ArrowRightIcon} isBlock isJustify>
				Medium block justify
			</Button>
		</ButtonWrap>
		<br />
		<ButtonWrap>
			<Button appearance="primary" size="large" iconAfter={ArrowRightIcon} isBlock isJustify>
				Large block justify
			</Button>
		</ButtonWrap>
		<br />
		<ButtonWrap>
			<Button appearance="primary" size="xlarge" iconAfter={ArrowRightIcon} isBlock isJustify>
				Extra large block justify
			</Button>
		</ButtonWrap>

		<hr />

		<h2>Icon before</h2>
		<ButtonWrap>
			<Button appearance="primary" size="small" iconBefore={HouseIcon}>
				Small
			</Button>{' '}
			<Button appearance="primary" size="medium" iconBefore={AlertIcon}>
				Medium
			</Button>{' '}
			<Button appearance="primary" size="large" iconBefore={ChatIcon}>
				Large
			</Button>{' '}
			<Button appearance="primary" size="xlarge" iconBefore={AccessibilityIcon}>
				Extra large
			</Button>
		</ButtonWrap>
		<br />
		<br />
		<ButtonWrap>
			<Button appearance="primary" size="xlarge" iconBefore={ArrowLeftIcon} isBlock>
				Extra large block
			</Button>
		</ButtonWrap>
		<br />
		<ButtonWrap>
			<Button appearance="primary" size="small" iconBefore={ArrowLeftIcon} isBlock isJustify>
				Small block justify
			</Button>
		</ButtonWrap>
		<br />
		<ButtonWrap>
			<Button appearance="primary" size="medium" iconBefore={ArrowLeftIcon} isBlock isJustify>
				Medium block justify
			</Button>
		</ButtonWrap>
		<br />
		<ButtonWrap>
			<Button appearance="primary" size="large" iconBefore={ArrowLeftIcon} isBlock isJustify>
				Large block justify
			</Button>
		</ButtonWrap>
		<br />
		<ButtonWrap>
			<Button appearance="primary" size="xlarge" iconBefore={ArrowLeftIcon} isBlock isJustify>
				Extra large block justify
			</Button>
		</ButtonWrap>

		<hr />

		<h2>Icon only (no text)</h2>
		<ButtonWrap>
			<Button appearance="primary" size="small" iconBefore={StarIcon} />{' '}
			<Button appearance="primary" size="medium" iconBefore={StarIcon} />{' '}
			<Button appearance="primary" size="large" iconBefore={StarIcon} />{' '}
			<Button appearance="primary" size="xlarge" iconBefore={StarIcon} />
		</ButtonWrap>
		<br />
		<br />
		<ButtonWrap>
			<Button appearance="primary" size="xlarge" iconBefore={StarIcon} isBlock />
		</ButtonWrap>
	</>
);
