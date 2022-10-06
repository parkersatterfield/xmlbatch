const config = require('./dbConfig');
const sql = require('mssql');

const getDatabases = async() => {
    try {
        let pool = await sql.connect(config);
        // let databases = pool.request().query("SELECT * FROM sys.databases");
        // return databases;
    } catch (err) {
        return err;
    }
}

module.exports = {
    getDatabases,
}