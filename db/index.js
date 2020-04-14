const { Pool } = require('pg');
//const config = require('')
pool = new Pool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'steam',
    port: 5432,
    max:1000,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});
pool.connect()
    .catch(err => console.error('error connecting', err.stack))

module.exports.retrieveGameContent = (gameId) => {
    return pool.query('SELECT * FROM games WHERE gameid = $1', [gameId])
}
