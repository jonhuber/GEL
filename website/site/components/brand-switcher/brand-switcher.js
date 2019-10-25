/** @jsx jsx */
import { jsx } from '../core';
import { useCurrentBrand } from '../brand-provider';

const BrandSwitcher = () => {
	const { brands, setCurrentBrand } = useCurrentBrand();
	return (
		<ul css={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', padding: 0 }}>
			{Object.entries(brands).map((brand, i) => {
				return <BrandButton key={i} brand={brand} setCurrentBrand={setCurrentBrand} />;
			})}
		</ul>
	);
};

const BrandButton = ({ brand: [brandName, brand], setCurrentBrand }) => {
	const { currentBrand } = useCurrentBrand();
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
				onClick={() => setCurrentBrand(brand)}
			>
				{brandName}
			</button>
		</li>
	);
};

export default BrandSwitcher;
