const Immutable = require('immutable')


module.exports = () => {

	// Empty List.
	const list = Immutable.List()

	console.log(list)

	let iterableString = Immutable.List('this string is iterable')

	// .... 
	const avengersArray = ['ironMan', 'capinainAmerica']

	const avengersList = Immutable.List(avengersArray)

	console.log(avengersList._tail.array)

	// console.log(iterableString._tail.array)
}