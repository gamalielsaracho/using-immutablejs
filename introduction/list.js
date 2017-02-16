const Immutable = require('immutable')

module.exports = function () {

	var collection = Immutable.List.of('cat')

	var newCollection = collection.push('dog')

	var collection3 = newCollection.push('mouse')

		
	console.log(collection._tail.array)

	console.log(newCollection._tail.array)

	console.log(collection3._tail.array)
}
