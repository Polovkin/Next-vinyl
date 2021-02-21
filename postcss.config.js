const sortCSSmq = require('sort-css-media-queries');

module.exports = {
    plugins:
            process.env.NODE_ENV === 'production' ?
                    [
                        'postcss-flexbugs-fixes',
                        'postcss-sort-media-queries',

                        [
                            'postcss-preset-env',
                            {
                                autoprefixer: {
                                    flexbox: 'no-2009',
                                    grid: true,
                                },
                                stage: 3,
                                features: {
                                    'custom-properties': false,
                                },
                            },
                        ],
                    ] :
                    [
                        'postcss-flexbugs-fixes',
                        'postcss-sort-media-queries',

                        [
                            'postcss-preset-env',
                            {
                                autoprefixer: {
                                    flexbox: 'no-2009',
                                    grid: true,
                                },
                                stage: 3,
                                features: {
                                    'custom-properties': false,
                                },
                            },
                        ],
                    ],
}
