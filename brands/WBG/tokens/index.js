import { tint } from './utils';

const COLORS = {
	background: '#F3F5F6',
	border: '#CFD8DC',
	borderDark: '#91979A',
	focus: '#E45C78',
	heading: '#000000',
	hero: '#495761',
	light: '#F9FAFB',
	muted: '#5B6871',
	neutral: '#263238',
	primary: '#D5002B',
	text: '#000000',

	// reserved
	success: '#008000',
	information: '#0074C4',
	warning: '#C53B00',
	danger: '#C40000',
	system: 'yellow',
};

const FONT = (folder = '../font') => ({});

const BREAK_POINTS = { sm: 768, md: 992, lg: 1200 };

const CONTAINER_MAXWIDTH = 1320;
const CONTAINER_PADDING = [12, 36, 48, 60];

export default {
	breakpoints: BREAK_POINTS,
	colors: {
		...COLORS,
		primary: {
			default: COLORS.primary,
			foreground: 'white',
		},
		hero: {
			default: COLORS.hero,
			foreground: 'white',
		},
		neutral: {
			default: COLORS.neutral,
			foreground: 'white',
		},
		faint: {
			default: COLORS.light,
			foreground: COLORS.muted,
		},
		success: {
			default: COLORS.success,
			foreground: 'white',
		},
		information: {
			default: COLORS.information,
			foreground: 'white',
		},
		warning: {
			default: COLORS.warning,
			foreground: 'white',
		},
		danger: {
			default: COLORS.danger,
			foreground: 'white',
		},
	},
	font: FONT(),
	typography: {
		fontSize: 10,
		body: {
			fontFamily:
				'-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
			fontSize: '1.4rem',
			color: COLORS.text,
			fontWeight: 400,
			lineHeight: 1.428571429,
		},
		brand: {
			fontFamily: '"Times New Roman", "Times", serif',
		},
		headings: {
			color: COLORS.heading,
		},
		p: {
			margin: '0.8571428572rem 0',
		},
		dl: {},
		dt: {
			fontWeight: 700,
		},
		dd: {
			margin: 0,
		},
		abbr: {
			cursor: 'help',
			borderBottom: `1px dotted ${COLORS.text}`,
			textDecoration: 'none',
		},
		address: {
			fontStyle: 'normal',
		},
		blockquote: {
			fontSize: '1.6rem',
			fontWeight: 300,
		},
		mark: {
			backgroundColor: tint(COLORS.primary, 0.2),
		},
		selection: {
			backgroundColor: tint(COLORS.primary, 0.2),
		},
		lead: {
			marginBottom: '2.1rem',
			fontSize: ['1.6rem', '1.8rem'],
			fontWeight: 300,
			lineHeight: 1.4,
		},
		link: {
			default: {
				color: COLORS.primary,
				textDecoration: 'underline',
			},
			hover: {
				textDecoration: 'underline',
			},
			focus: {
				outline: `2px solid ${COLORS.focus}`,
				outlineOffset: 3,
			},
		},
	},
	spacing: {},

	badge: {
		minWidth: '10px',
		minWidth: '10px',
		padding: '4px 7px',
		lineHeight: 1,
		fontWeight: 700,
		fontSize: '14px',
		borderRadius: '12px',
		borderWidth: '1px',
	},

	button: {
		borderRadius: '3px',
		borderWidth: '1px',
		fontWeight: 400,
		lineHeight: 1.5,

		appearance: {
			primary: {
				standard: {
					default: {
						color: '#fff',
						backgroundColor: COLORS.primary,
						borderColor: COLORS.primary,
					},
					hover: {
						color: null,
						backgroundColor: tint(COLORS.primary, 0.7),
						borderColor: null,
					},
					active: {
						color: '#fff',
						backgroundColor: tint(COLORS.primary, 0.5),
						borderColor: null,
					},
				},
				soft: {
					default: {
						color: COLORS.text,
						backgroundColor: '#fff',
						borderColor: COLORS.primary,
					},
					hover: {
						color: '#fff',
						backgroundColor: tint(COLORS.primary, 0.7),
						borderColor: null,
					},
					active: {
						color: '#fff',
						backgroundColor: tint(COLORS.primary, 0.5),
						borderColor: null,
					},
				},
			},
			hero: {
				standard: {
					default: {
						color: '#fff',
						backgroundColor: COLORS.hero,
						borderColor: COLORS.hero,
					},
					hover: {
						color: null,
						backgroundColor: tint(COLORS.hero, 0.7),
						borderColor: null,
					},
					active: {
						color: '#fff',
						backgroundColor: tint(COLORS.hero, 0.5),
						borderColor: null,
					},
				},
				soft: {
					default: {
						color: COLORS.text,
						backgroundColor: '#fff',
						borderColor: COLORS.hero,
					},
					hover: {
						color: '#fff',
						backgroundColor: tint(COLORS.hero, 0.7),
						borderColor: null,
					},
					active: {
						color: '#fff',
						backgroundColor: tint(COLORS.hero, 0.5),
						borderColor: null,
					},
				},
			},
			neutral: {
				standard: {
					default: {
						color: '#fff',
						backgroundColor: COLORS.neutral,
						borderColor: COLORS.neutral,
					},
					hover: {
						color: null,
						backgroundColor: tint(COLORS.neutral, 0.7),
						borderColor: null,
					},
					active: {
						color: '#fff',
						backgroundColor: tint(COLORS.neutral, 0.5),
						borderColor: null,
					},
				},
				soft: {
					default: {
						color: COLORS.text,
						backgroundColor: '#fff',
						borderColor: COLORS.neutral,
					},
					hover: {
						color: '#fff',
						backgroundColor: tint(COLORS.neutral, 0.7),
						borderColor: null,
					},
					active: {
						color: '#fff',
						backgroundColor: tint(COLORS.neutral, 0.5),
						borderColor: null,
					},
				},
			},
			faint: {
				standard: {
					default: {
						color: COLORS.muted,
						backgroundColor: COLORS.light,
						borderColor: COLORS.border,
					},
					hover: {
						color: null,
						backgroundColor: '#fff',
						borderColor: null,
					},
					active: {
						color: COLORS.muted,
						backgroundColor: '#fff',
						borderColor: null,
					},
				},
				soft: {
					default: {
						color: COLORS.muted,
						backgroundColor: '#fff',
						borderColor: COLORS.border,
					},
					hover: {
						color: null,
						backgroundColor: COLORS.light,
						borderColor: null,
					},
					active: {
						color: null,
						backgroundColor: COLORS.light,
						borderColor: null,
					},
				},
			},
			link: {
				standard: {
					default: {
						color: COLORS.primary,
						backgroundColor: 'transparent',
						borderColor: 'transparent',
					},
					hover: {
						color: null,
						backgroundColor: null,
						borderColor: null,
					},
					active: {
						color: null,
						backgroundColor: null,
						borderColor: null,
					},
				},
				soft: {},
			},
		},
		size: {
			small: {
				padding: ['3px', '9px', '4px'],
				fontSize: '14px',
				height: '30px',
			},
			medium: {
				padding: ['5px', '12px'],
				fontSize: '16px',
				height: '36px',
			},
			large: {
				padding: ['8px', '15px'],
				fontSize: '16px',
				height: '42px',
			},
			xlarge: {
				padding: ['9px', '18px', '10px'],
				fontSize: '18px',
				height: '48px',
			},
		},
	},

	formInput: {
		lineHeight: 1.5,
		fontWeight: 400,
		color: COLORS.text,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderRadius: 3,
		fontXFactor: 1.81,
		appearance: {
			default: {
				borderColor: COLORS.borderDark,
			},
			invalid: {
				borderColor: COLORS.danger,
			},
		},
		size: {
			small: {
				padding: ['3px', '9px', '4px'],
				fontSize: 14,
				height: 30,
			},
			medium: {
				padding: ['5px', '12px'],
				fontSize: 16,
				height: 36,
			},
			large: {
				padding: ['8px', '15px'],
				fontSize: 16,
				height: 42,
			},
			xlarge: {
				padding: ['9px', '18px', '10px'],
				fontSize: 18,
				height: 48,
			},
		},
		disabled: {
			backgroundColor: COLORS.light,
			color: COLORS.muted,
		},
		placeholder: {
			fontWeight: 300,
			color: tint(COLORS.Text, 0.5),
		},
		select: {
			caretGap: 8,
		},
		textarea: {
			size: {
				small: {
					minHeight: 54,
				},
				medium: {
					minHeight: 60,
				},
				large: {
					minHeight: 66,
				},
				xlarge: {
					minHeight: 72,
				},
			},
		},
	},

	grid: {
		container: {
			maxWidth: CONTAINER_MAXWIDTH,
			padding: CONTAINER_PADDING,
		},
	},

	label: {
		borderRadius: '2px',
		borderWidth: '1px',
		fontSize: '12px',
		padding: '1px 6px',
		fontWeight: 400,
		lineHeight: 1,

		appearance: {
			primary: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.primary,
					borderColor: COLORS.primary,
				},
				hover: {
					color: null,
					backgroundColor: tint(COLORS.primary, 0.5),
					borderColor: tint(COLORS.primary, 0.5),
				},
			},
			hero: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.hero,
					borderColor: COLORS.hero,
				},
				hover: {
					color: null,
					backgroundColor: tint(COLORS.hero, 0.5),
					borderColor: tint(COLORS.hero, 0.5),
				},
			},
			neutral: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.neutral,
					borderColor: COLORS.neutral,
				},
				hover: {
					color: null,
					backgroundColor: tint(COLORS.neutral, 0.5),
					borderColor: tint(COLORS.neutral, 0.5),
				},
			},
			faint: {
				default: {
					color: COLORS.muted,
					backgroundColor: COLORS.light,
					borderColor: COLORS.border,
				},
				hover: {
					color: null,
					backgroundColor: '#fff',
					borderColor: null,
				},
			},
			success: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.success,
					borderColor: COLORS.success,
				},
				hover: {
					color: null,
					backgroundColor: tint(COLORS.success, 0.5),
					borderColor: tint(COLORS.success, 0.5),
				},
			},
			information: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.information,
					borderColor: COLORS.information,
				},
				hover: {
					color: null,
					backgroundColor: tint(COLORS.information, 0.5),
					borderColor: tint(COLORS.information, 0.5),
				},
			},
			warning: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.warning,
					borderColor: COLORS.warning,
				},
				hover: {
					color: null,
					backgroundColor: tint(COLORS.warning, 0.5),
					borderColor: tint(COLORS.warning, 0.5),
				},
			},
			danger: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.danger,
					borderColor: COLORS.danger,
				},
				hover: {
					color: null,
					backgroundColor: tint(COLORS.danger, 0.5),
					borderColor: tint(COLORS.danger, 0.5),
				},
			},
		},
	},

	panel: {
		backgroundColor: '#fff',
		borderWidth: '1px',
		borderRadius: '3px',
		appearance: {
			hero: {
				borderColor: COLORS.hero,
			},
			faint: {
				borderColor: COLORS.border,
			},
		},
		header: {
			padding: {
				default: '10px 12px',
				responsive: ['10px 12px', '10px 24px'],
			},
			appearance: {
				hero: {
					color: '#fff',
					backgroundColor: COLORS.hero,
					borderColor: COLORS.hero,
				},
				faint: {
					color: COLORS.text,
					backgroundColor: COLORS.background,
					borderColor: COLORS.border,
				},
			},
		},
		body: {
			padding: {
				default: '12px',
				responsive: ['12px', '24px'],
			},
		},
		footer: {
			padding: {
				default: '10px 12px',
				responsive: ['10px 12px', '10px 24px'],
			},
			backgroundColor: COLORS.light,
			borderColor: COLORS.border,
		},
	},

	table: {
		borderWidth: '1px',
		marginBottom: '21px',
		backgroundColor: '#fff',

		caption: {
			fontWeight: '300',
			fontSize: '18px',
			marginBottom: '12px',
			padding: '12px',
		},
		tr: {
			hover: {
				backgroundColor: COLORS.background,
			},
		},
		th: {
			fontWeight: 500,
			borderBottomWidth: '3px',
			borderColor: COLORS.hero,
			color: COLORS.text,
		},
		td: {
			padding: '12px',
			borderWidth: '1px',
			borderColor: COLORS.border,
		},
		striped: {
			backgroundColor: COLORS.light,
		},
		highlight: {
			borderColor: COLORS.primary,
		},
		bordered: {
			th: {
				borderBottomWidth: '2px',
			},
			borderColor: COLORS.border,
		},
		responsive: {
			borderWidth: '1px',
			borderColor: COLORS.border,
			caption: {
				padding: '12px',
			},
		},
	},

	well: {
		borderRadius: '3px',
		borderWidth: '1px',
		backgroundColor: COLORS.light,
		borderColor: COLORS.border,
		padding: {
			default: '12px',
			responsive: [12, 24],
		},
		marginBottom: '18px',
	},

	alert: {
		padding: '18px',
		marginBottom: '21px',
		borderWidth: '1px',

		appearance: {
			success: {
				color: COLORS.success,
				backgroundColor: tint(COLORS.success, 0.05),
				borderColor: tint(COLORS.success, 0.5),
			},
			information: {
				color: COLORS.information,
				backgroundColor: tint(COLORS.information, 0.05),
				borderColor: tint(COLORS.information, 0.5),
			},
			warning: {
				color: COLORS.warning,
				backgroundColor: tint(COLORS.warning, 0.05),
				borderColor: tint(COLORS.warning, 0.5),
			},
			danger: {
				color: COLORS.danger,
				backgroundColor: tint(COLORS.danger, 0.05),
				borderColor: tint(COLORS.danger, 0.5),
			},
			system: {
				color: 'black',
				backgroundColor: COLORS.system,
				borderColor: COLORS.system,
			},
		},
	},
};
