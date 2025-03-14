export function SQLChampions() {

    return {
        command: `WITH WINNER_PRODUCERS AS ( 
        SELECT YEAR, TRIM(PRODUCER) AS PRODUCER
        FROM CHAMPIONS
        CROSS JOIN UNNEST(STRING_TO_ARRAY(PRODUCERS, ',')) AS PRODUCER
        WHERE WINNER = 'YES'
        ),
        PRODUCER_INTERVALS AS ( 
            SELECT 
            PRODUCER,
            LAG(YEAR) OVER (PARTITION BY PRODUCER ORDER BY YEAR) AS PREVIOUSWIN,
            YEAR AS FOLLOWINGWIN,
            YEAR - LAG(YEAR) OVER (PARTITION BY PRODUCER ORDER BY YEAR) AS PRODUCER_INTERVALS
            FROM WINNER_PRODUCERS
        )
        (
        SELECT 'MAX' AS TYPE, PRODUCER, PRODUCER_INTERVALS, PREVIOUSWIN, FOLLOWINGWIN
            FROM PRODUCER_INTERVALS
            WHERE PRODUCER_INTERVALS IS NOT NULL
            ORDER BY PRODUCER_INTERVALS DESC
            LIMIT 1
        )
        UNION ALL
        (
            SELECT 'MIN' AS TYPE, PRODUCER, PRODUCER_INTERVALS, PREVIOUSWIN, FOLLOWINGWIN
            FROM PRODUCER_INTERVALS
            WHERE PRODUCER_INTERVALS IS NOT NULL
            ORDER BY PRODUCER_INTERVALS ASC
            LIMIT 1
        );`
    }
}