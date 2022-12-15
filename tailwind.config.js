module.exports = {
    purge: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}' ],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                sans: [ 'Poppins', 'sans-serif' ]
            }
        },
    },
    variants: {
        extend: {}
    },
    plugins: []
}