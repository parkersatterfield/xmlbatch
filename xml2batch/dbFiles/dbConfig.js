require('dotenv/config')

const config = {
    user: process.env.XML_DB_USER,
    password: process.env.XML_DB_PASS,
    server: "DESKTOP-TFOVMKC",
    database: "Test",
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: "SQLEXPRESS"
    },
    port: 1433
}

module.exports = config;