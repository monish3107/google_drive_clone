import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			...colors,
  			brand: {
  				'100': '#2563EB',
  				DEFAULT: '#3F83F8'
  			},
  			'pixel-blue': '#3F83F8',
  			'pixel-blue-dark': '#2563EB',
  			'pixel-blue-light': '#93C5FD',
  			'pixel-black': '#0F172A',
  			'pixel-white': '#FFFFFF',
  			red: colors.red,
  			green: '#10B981',
  			blue: '#3F83F8',
  			light: {
  				'100': '#0F172A',
  				'200': '#64748B',
  				'300': '#E2E8F0',
  				'400': '#F8FAFC'
  			},
  			dark: {
  				'100': '#0F172A',
  				'200': '#1E293B'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			'red-100': '#fee2e2'
  		},
  		fontFamily: {
  			moono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
  			sans: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
  		},
  		boxShadow: {
  			'pixel': '4px 4px 0px #0F172A',
  			'pixel-hover': '6px 6px 0px #0F172A',
  			'drop-1': '0px 10px 30px 0px rgba(66, 71, 97, 0.1)',
  			'drop-2': '0 8px 30px 0 rgba(65, 89, 214, 0.3)',
  			'drop-3': '0 8px 30px 0 rgba(65, 89, 214, 0.1)'
  		},
  		borderRadius: {
  			'none': '0px',
  			'sm': '0px',
  			'md': '0px',
  			'lg': '0px',
  			'xl': '0px',
  			'full': '0px'
  		},
  		keyframes: {
  			'caret-blink': {
  				'0%,70%,100%': {
  					opacity: '1'
  				},
  				'20%,50%': {
  					opacity: '0'
  				}
  			}
  		},
  		animation: {
  			'caret-blink': 'caret-blink 1.25s ease-out infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate",)],
};
export default config;