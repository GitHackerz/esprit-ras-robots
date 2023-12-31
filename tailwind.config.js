/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')

module.exports = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            keyframes: {
                slideDown: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0)' }
                },
                slideUp: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-100%)' }
                }
            },
            animation: {
                'slide-down': 'slideDown 0.3s ease-out forwards',
                'slide-up': 'slideUp 0.3s ease-out forwards'
            },
            colors: {
                primary: '#F73B3B',
                secondary: '#1A1A1A',
                background: '#141414',
                icon: '#FA8585',
                'light-gray': '#999999',
                gray: '#262626'
            }
        }
    },
    darkMode: 'class',
    plugins: [nextui()]
}
