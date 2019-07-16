import Color from 'color';

const COLORS = {
	background: '#F0F1F1',
	border: '#D3D4D5',
	heading: '#002F6C',
	hero: '#002F6C',
	light: '#F8F8F8',
	muted: '#6C7074',
	neutral: '#6C7074',
	primary: '#D81B2B',
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
