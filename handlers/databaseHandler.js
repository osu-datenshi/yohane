const mysql = require("mysql");
const sqlstring = require("sqlstring");
const config = require("../config.json");

const pool = mysql.createConnection({
    host: config.db.host,
    port: config.db.port,
    user: config.db.username,
    password: config.db.password,
    database: config.db.database
});

pool.connect((err) => {
    if (err) throw new Error(err);
    console.log("Connected to database!");
});

module.exports = {
    pool
};
