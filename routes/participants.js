import { ParticipantsServices } from '../services/participants.services.js'

export function Routes(app) {

    /**
     * @swagger
     * 
     * /participants/v1/champion:
     *  get:
     *    tags:  
     *      - Participants  
     *    description: Obter o produtor com maior intervalo entre dois prêmios consecutivos, e o que obteve dois prêmios mais rápido
     *    responses:    
     *      200:
     *        description: success
     *      400:
     *        description: Bad Request
     *      500:
     *        description: Internal Server Error
     * 
     */
    app.get('/participants/v1/champion', async (req, res) => {
        res.send(await ParticipantsServices())
            .status(200)
    })
}