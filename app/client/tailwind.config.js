module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                "neutral-750": "#323232"
            },

            fontFamily: {
                "pseudo-apl": "PseudoApl",
            },

            backgroundImage: {
                "field": "url('/src/assets/img/bg/field.jpg')",
            },

            boxShadow: {
                "beneath": "0 1px #dadada",
                "beneath-darker": "0 1px #c4c4c4",
            },
        },
    },

    plugins: [],
}
