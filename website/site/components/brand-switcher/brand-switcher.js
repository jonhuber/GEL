/** @jsx jsx */
import { jsx } from '../core';
import { useBrandSwitcher } from '../brand-switcher-provider';

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

const BrandButton = ({ brand: [brandName, brand], setBrand }) => {
	const { brand: currentBrand } = useBrandSwitcher();
	return (
		<li>
			<button
				css={{
					border: 'none',
					height: 40,
					width: 40,
					fontSize: 12,
					backgroundColor: brand === currentBrand ? '#cbffc3' : '#f7f7f7',
					margin: 2,
					':hover': {
						backgroundColor: brand === currentBrand ? '#b2f7a7' : '#e7e7e7',
						cursor: 'pointer',
					},
				}}
				onClick={() => setBrand(brandName)}
			>
				{brandName}
			</button>
		</li>
	);
};

export default BrandSwitcher;
