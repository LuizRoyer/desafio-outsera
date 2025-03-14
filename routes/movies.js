import { MoviesServices } from '../services/movies.services.js'

export function Routes(app) {

    /**
     * @swagger
     * 
     * /movies/v1/nominated/category:
     *  get:
     *    tags:  
     *      - Movies  
     *    description: Get nominated of category
     *    responses:
     *      200:
     *        description: success
     *      400:
     *        description: Bad Request
     *      500:
     *        description: Internal Server Error
     */
    app.get('/movies/v1/nominated/category', async (req, res) => {

        let response = await MoviesServices()
        res.send(response).status(200)
    })
}