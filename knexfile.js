const config = require('./src/config')

module.exports = {

    development: {
        client: process.env.DBCLIENT,
        connection: {
            host: process.env.DBHOST,
            user: process.env.DBUSERNAME,
            password: process.env.DBPASS,
            database: process.env.DBNAME
        },
        migrations: {
            directory: './src/database/migrations'
        }
    }
};