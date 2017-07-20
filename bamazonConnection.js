const Promises = require('bluebird');
const MySQL = require('mysql');

Promises.promisifyAll(require("mysql/lib/Connection").prototype);
Promises.promisifyAll(require("mysql/lib/Pool").prototype);

let bamazonConnection = MySQL.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "homework"
});

let allConnections = {
	'homework' : bamazonConnection
};

module.exports = allConnections;