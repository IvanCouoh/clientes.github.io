const mysql = require('promise-mysql');
// HOST=localhost
// DATABASE=app_celulares_v1_dev
// USER=root
// PASSWORD=
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'app_celulares_v1_dev',
    user: 'root',
    password: ''
});

const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
}