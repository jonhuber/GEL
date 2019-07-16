import Color from 'color';

const COLORS = {
	background: '#F1F1EF',
	border: '#D6D5D0',
	heading: '#004833',
	hero: '#78BE20',
	light: '#F8F8F7',
	muted: '#757463',
	neutral: '#757463',
	primary: '#E30000',
	text: '#004833',

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
			foreground: COLORS.text,
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
