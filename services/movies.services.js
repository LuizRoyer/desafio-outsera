import { getChampions } from '../repositories/champions.repository.js'

export async function MoviesServices() {

    try {

        return getChampions()

    } catch (error) {
        console.log(error)
        throw new Error('Bad Request')
    }
}