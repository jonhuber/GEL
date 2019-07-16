import Color from 'color';

const COLORS = {
	background: '#F9F9F9',
	border: '#E0E0E0',
	heading: '#2574A9',
	hero: '#2574A9',
	light: '#FCFCFC',
	muted: '#666666',
	neutral: '#637b98',
	primary: '#9E005D',
	text: '#333333',

	// reserved
	success: '#008000',
	information: '#0074C4',
	warning: '#C53B00',
	danger: '#C40000',
};

const BREAK_POINTS = { sm: 768, md: 992, lg: 1200 };

export default {
	breakpoints: BREAK_POINTS,
	colors: {
		...COLORS,
		hero: {
			default: COLORS.hero,
			foreground: 'white',
		},
		primary: {
			default: COLORS.primary,
			foreground: 'white',
		},
	},
	type: {},
	spacing: {},

	alert: {
		borderWidth: '1px',

		appearance: {
			success: {
				color: COLORS.success,
				backgroundColor: Color('white')
					.mix(Color(COLORS.success), 0.1)
					.hex(),
				borderColor: Color('white')
					.mix(Color(COLORS.success), 0.5)
					.hex(),
			},
			information: {
				color: COLORS.information,
				backgroundColor: Color('white')
					.mix(Color(COLORS.information), 0.1)
					.hex(),
				borderColor: Color('white')
					.mix(Color(COLORS.information), 0.5)
					.hex(),
			},
			warning: {
				color: COLORS.warning,
				backgroundColor: Color('white')
					.mix(Color(COLORS.warning), 0.1)
					.hex(),
				borderColor: Color('white')
					.mix(Color(COLORS.warning), 0.5)
					.hex(),
			},
			danger: {
				color: COLORS.danger,
				backgroundColor: Color('white')
					.mix(Color(COLORS.danger), 0.1)
					.hex(),
				borderColor: Color('white')
					.mix(Color(COLORS.danger), 0.5)
					.hex(),
			},
		},
	},
};
