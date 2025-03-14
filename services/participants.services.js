import { getProducersChampions } from '../repositories/champions.repository.js'

export async function ParticipantsServices() {

    try {

        return getProducersChampions()

    } catch (error) {
        console.log(error)
        throw new Error('Bad Request')
    }
}