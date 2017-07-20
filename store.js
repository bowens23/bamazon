
class Store{
	constructor(connection){
		this.connection = connection;
	}

	displayGoods(){
		let query = `
			SELECT *
			FROM bamazon
		`;
		return this.connection
			.queryAsync( query)
			.then(data => { 
				console.log("What We Have in Our Store:");
				console.log("==============");
				data.forEach( item => console.log(`${item.item_id}`, `${item.product_name}`, 
					`${item.department_name}`, `${item.price}`, `${item.stock_quantity}`) ) 
			})
			// .then( () => this.connection.end() );
	}

	update(idToUpdate, number){
		return this.connection
				.queryAsync(
					"select stock_quantity, price from bamazon where item_id=?",
					[idToUpdate]
				)
											.then( (data) => { 
											var updateNum = +data[0].stock_quantity - number;
											var price = data[0].price;
											var cost = price*number;
											console.log (cost);
											if(updateNum<0){console.log ("We're sold out of that")}
												else{
											return this.connection
											.queryAsync(
											"UPDATE bamazon SET stock_quantity=? WHERE item_id = ?", 
											[updateNum, idToUpdate]).then(console.log ("the cost is " + cost+ " dollars."))
											this.connection.end();}
											} )
						
								// 	console.log("Record Updated!");
								// .catch( err => { throw err });	
							}
}								

module.exports = Store;