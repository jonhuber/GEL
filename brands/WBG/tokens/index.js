const COLORS = {
	background: '#F4F3F0',
	border: '#D7D2CB',
	heading: '#621A4B',
	hero: '#621A4B',
	light: '#F9F9F8',
	muted: '#575F65',
	neutral: '#2D373E',
	primary: '#D5002B',
	text: '#2D373E',

	// reserved
	success: '#008000',
	information: '#0074C4',
	warning: '#C53B00',
	danger: '#C40000',
};

const BREAK_POINTS = { xs: 576, sm: 768, md: 992, lg: 1200 };

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
};
