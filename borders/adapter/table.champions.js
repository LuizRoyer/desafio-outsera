export function AdapterTableChampions(dbRow) {

    return {
        producer: dbRow.producer,
        interval: dbRow.producer_intervals,
        previousWin: dbRow.previouswin,
        followingWin: dbRow.followingwin
    }
}