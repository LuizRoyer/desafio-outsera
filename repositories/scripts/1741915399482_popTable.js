/* eslint-disable camelcase */
const csv = require('./../../services/csv')

exports.shorthands = undefined;

exports.up = async (pgm) => {
    let insertLines = await csv.copyFile()

    pgm.sql(`INSERT INTO champions (year, title, studios, producers, winner) VALUES
        ${insertLines.slice(0, -1) + ''};`)
};

exports.down = pgm => { };
