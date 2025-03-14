const express = require('express')
const swaggerJs = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerOptions = require('./swagger-options')
const movies = require('./routes/movies')
const participants = require('./routes/participants')

const app = express()

const swaggerDocs = swaggerJs(swaggerOptions.options)
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

participants.Routes(app)
movies.Routes(app)


app.get("/", async (req, res) => {
    res.send("Welcome ").status(200)
})


app.listen(5000, console.log(`listen on ${process.env.URL}/swagger`))