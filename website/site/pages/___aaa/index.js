import { useRouter } from 'next/router';

const Homepage = () => {
	const router = useRouter();
	const {
		query: { brand },
	} = router;

	return (
		<div>
			<h1
				css={`
					color: red;
					font-size: 30px;
				`}
			>
				This is the {brand} landing page, welcome! 👋
			</h1>
			<p>Please select your brand!</p>
			<p>
				It's so lovely to see you here. No, really. Look at you! Have fun visiting our website.
				Please leave a message in the guestbook!
			</p>
		</div>
	);
};

export default Homepage;
