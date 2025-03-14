

import csv from 'csv-parser';
import fs from 'fs'

const filePath = './public/movielist.csv'


export function copyFile() {
    let csvData = "";
    return new Promise(resolve => {
        fs.createReadStream(filePath)
            .pipe(csv({ separator: ';' }))
            .on('data', (data) => {

                csvData += `(${data.year},`
                csvData += `'${data.title.replace('\'', '').trim()}',`
                csvData += `'${data.studios.replace('\'').trim()}' ,`
                csvData += `'${data.producers.replace('\'').trim()}'`
                csvData += `,${data.winner == "yes" ? true : false}),`
                return csvData

            })
            .on('end', () => {
                resolve(csvData)
            });
    })
}