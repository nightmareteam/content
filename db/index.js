const { Pool } = require('pg');
const config = require('../config/config.js')
pool = new Pool({
    host: config.host,
    user: config.user,
    database: config.database,
    port: config.port,
    max:1000,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});
pool.connect()
    .catch(err => console.error('error connecting', err.stack))

module.exports.retrieveGameContent = (gameId) => {
    return pool.query('SELECT * FROM games WHERE gameid = $1', [gameId])
}
