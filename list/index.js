const Immutable = require('immutable')


module.exports = () => {

	// Empty List.
	const list = Immutable.List()

	console.log(list)

	let iterableString = List('this string is iterable')

	console.log(iterableString)
}