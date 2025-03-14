import { query } from '../configurations/database.js'
import { AdapterTableChampions } from '../borders/adapter/table.champions.js'
import { SQLChampions } from './sql/commands/champions.js'

export async function getChampions() {

    const champions = await query("SELECT YEAR, TITLE, STUDIOS, PRODUCERS, WINNER FROM CHAMPIONS")
    return champions.rows
}

export async function getProducersChampions() {

    const bdRows = await query(SQLChampions().command)

    let min = new Array(), max = new Array()
    for await (const champion of bdRows.rows) {

        if (champion.type == 'MIN')
            min.push(AdapterTableChampions(champion))

        if (champion.type == 'MAX')
            max.push(AdapterTableChampions(champion))
    }

    return { min, max }
}
