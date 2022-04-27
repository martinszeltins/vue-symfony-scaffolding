module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],

    darkMode: 'class',
    important: true,

    theme: {
        extend: {
            colors: {
                'purple-750': '#7625b9',
                'gray-750': '#253040',
            },

            transitionProperty: {
                'height': 'height',
            },

            height: {
                'mobile-sidebar': 'calc(100vh - 64px)',
                'sidebar-items': 'calc(100vh - 140px)',
            },

            boxShadow: {
                'input-gray-700': '0 0 0 0.2rem #445065',
            }
        },

        containerQuery: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px'
        },
    },

    plugins: [
        require('tailwind-scrollbar'),
        require('tailwindcss-container-query'),
    ],
}
