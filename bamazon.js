const Inquirer = require ('inquirer');
const bamazonConnection = require ('./bamazonConnection');
const Promises = require('bluebird');
var Store = require('./store');


var store = new Store(bamazonConnection.homework);


store.displayGoods().then(

function prompts(){
let Questions = [
				{
				name: "ID",
				message: "What's the ID of the product you want to buy?",
				type: "input"
				},
				{
				name: "quantity",
				message: "How many would you like to buy",
				type: "input"
				}
				];
Inquirer.prompt(Questions).then(data => store.update(data.ID, data.quantity));})
