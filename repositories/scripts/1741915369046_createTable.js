/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('champions', {
        year: { type: 'int', notNull: true },
        title: { type: 'varchar(1000)', notNull: true },
        studios: { type: 'varchar(1000)', notNull: true },
        producers: { type: 'varchar(1000)', notNull: true },
        winner: { type: 'boolean', notNull: false }
    });
};

exports.down = pgm => { };
