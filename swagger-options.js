
export const options = {
    swaggerDefinition: {
        info: {
            title: 'Golden Raspberry Awards',
            version: '1.0.0'
        }
    },
    apis: ['./routes/participants.js',
        './routes/movies.js'
    ]
}