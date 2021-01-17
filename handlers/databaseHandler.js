const mysql = require("mysql");
const sqlstring = require("sqlstring");
const config = require("../config.json");

const pool = mysql.createPool({
    host: config.db.host,
    port: config.db.port,
    user: config.db.username,
    password: config.db.password,
    database: config.db.database
});

const query = async (sql, ...args) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                reject(error);
                connection.release();
            }
            else {
                connection.query(sqlstring.format(sql, args), (error, result) => {
                    if (error) {
                        reject(error);
                        connection.release();
                    }
                    else {
                        resolve(result);
                        connection.release();
                    };
                });
            }
        });
    });
};

module.exports = {
    query
};
