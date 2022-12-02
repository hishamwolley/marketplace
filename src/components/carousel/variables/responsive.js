import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export const responsiveNav = {
	xl: {
		breakpoint: {
			max: parseInt(fullConfig.theme.screens["2xl"]),
			min: parseInt(fullConfig.theme.screens.xl),
		},
		items: 10,
	},
	lg: {
		breakpoint: {
			max: parseInt(fullConfig.theme.screens.xl),
			min: parseInt(fullConfig.theme.screens.lg),
		},
		items: 8,
	},
	md: {
		breakpoint: {
			max: parseInt(fullConfig.theme.screens.lg),
			min: parseInt(fullConfig.theme.screens.md),
		},
		items: 7,
	},

	sm: {
		breakpoint: {
			max: parseInt(fullConfig.theme.screens.md),
			min: parseInt(fullConfig.theme.screens.sm),
		},
		items: 6,
	},

	xs1: {
		breakpoint: {
			max: parseInt(fullConfig.theme.screens.sm),
			min: parseInt(fullConfig.theme.screens.xs),
		},
		items: 5,
	},

	xs: {
		breakpoint: { max: parseInt(fullConfig.theme.screens.xs), min: 0 },
		items: 4,
	},
};

export const responsiveProduct = {
	xl: {
		breakpoint: {
			max: parseInt(fullConfig.theme.screens["2xl"]),
			min: parseInt(fullConfig.theme.screens.xl),
		},
		items: 1,
	},
	lg: {
		breakpoint: {
			max: parseInt(fullConfig.theme.screens.xl),
			min: parseInt(fullConfig.theme.screens.lg),
		},
		items: 1,
	},
	md: {
		breakpoint: {
			max: parseInt(fullConfig.theme.screens.lg),
			min: parseInt(fullConfig.theme.screens.md),
		},
		items: 1,
	},

	sm: {
		breakpoint: {
			max: parseInt(fullConfig.theme.screens.md),
			min: parseInt(fullConfig.theme.screens.sm),
		},
		items: 1,
	},

	xs1: {
		breakpoint: {
			max: parseInt(fullConfig.theme.screens.sm),
			min: parseInt(fullConfig.theme.screens.xs),
		},
		items: 1,
	},

	xs: {
		breakpoint: { max: parseInt(fullConfig.theme.screens.xs), min: 0 },
		items: 1,
	},
};
