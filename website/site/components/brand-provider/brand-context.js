import { createContext, useContext, useState } from 'react';

import bomBrand from '../../stub/brands/bom';
import bsaBrand from '../../stub/brands/bsa';
import btfgBrand from '../../stub/brands/btfg';
import stgBrand from '../../stub/brands/stg';
import wbcBrand from '../../stub/brands/wbc';
import wbgBrand from '../../stub/brands/wbg';

// ==============================
// Get the data
// ==============================

const BRANDS = {
	BOM: bomBrand,
	BSA: bsaBrand,
	BTFG: btfgBrand,
	STG: stgBrand,
	WBC: wbcBrand,
	WBG: wbgBrand,
};

const BrandContext = createContext();

const BrandProvider = ({ children }) => {
	const [currentBrand, setCurrentBrand] = useState(BRANDS.BOM);
	return (
		<BrandContext.Provider
			value={{
				brands: BRANDS,
				currentBrand,
				setCurrentBrand,
			}}
		>
			{children}
		</BrandContext.Provider>
	);
};

const useCurrentBrand = () => {
	const context = useContext(BrandContext);
	if (!context) {
		throw new Error('Trying to use the BrandContext outside of a <BrandProvider>.');
	}
	return context;
};

export { BrandProvider, useCurrentBrand };
