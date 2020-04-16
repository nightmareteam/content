const { Pool } = require('pg');
const dbConfig = require('../config/config.js')
pool = new Pool({
    host: dbConfig.host,
    user: dbConfig.user,
    database: dbConfig.database,
    port: dbConfig.port,
});
pool.connect()
    .catch(err => console.error('error connecting', err.stack))

module.exports.retrieveGameContent = (gameId) => {
    return pool.query('SELECT * FROM games WHERE gameid = $1', [gameId])
}
