import { useCurrentBrand } from '../brand-provider';

const BrandPicker = ({ onClick }) => {
	const { brands } = useCurrentBrand();
	return (
		<div>
			<h2>Pick your brand!</h2>
			<ul>
				{Object.entries(brands).map(([brandName, brand], i) => {
					return (
						<li key={i}>
							<button onClick={() => onClick(brandName, brand)}>{brandName}</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default BrandPicker;
