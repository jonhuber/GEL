/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { useBrandSwitcher } from '../providers/brand-switcher';

import { useRouter } from 'next/router';

const BrandSwitcher = () => {
	const { brands, setBrand } = useBrandSwitcher();
	return (
		<ul css={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', padding: 0 }}>
			{Object.entries(brands).map((brand, i) => {
				return <BrandButton key={i} brand={brand} setBrand={setBrand} />;
			})}
		</ul>
	);
};

const BrandButton = ({ brand: [brandName, brandData], setBrand }) => {
	const { brand: currentBrandName } = useBrandSwitcher();

	const router = useRouter();

	return (
		<li>
			<button
				css={{
					border: 'none',
					height: 40,
					width: 40,
					fontSize: 12,
					backgroundColor: brandName === currentBrandName ? '#cbffc3' : '#f7f7f7',
					margin: 2,
					':hover': {
						backgroundColor: brandName === currentBrandName ? '#b2f7a7' : '#e7e7e7',
						cursor: 'pointer',
					},
				}}
				onClick={() => {
					console.log({ router });
					setBrand(brandName);
					router.push(router.route, router.asPath, { query: { brand: brandName } });
				}}
			>
				{brandName}
			</button>
		</li>
	);
};

export default BrandSwitcher;