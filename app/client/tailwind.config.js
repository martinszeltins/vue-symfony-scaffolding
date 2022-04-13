module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            boxShadow: {
                'header': 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 0px -1px, rgba(0, 0, 0, 0.1) 0px -3px 4px -2px',
            }
        },
    },

    plugins: [],
}
