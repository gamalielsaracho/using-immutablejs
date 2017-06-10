const Immutable = require('immutable')


module.exports = () => {

	// Empty Map.
	const map = Immutable.Map()
	console.log(map)


	let persona = Immutable.Map({
		nombre: 'Rie',
		apellido: 'Motomori',
		edad: 20
	})

	console.log(persona)

	console.log(persona.nombre) // undefined

	// OBTENEMOS los valores del objeto persona por medio de get.
	console.log(persona.get('nombre')+' '+persona.get('apellido'))
	console.log('Edad: '+persona.get('edad'))

	// CAMBIAR datos del objeto.
	persona = persona.set('edad', 19)

		// OBTENEMOS los valores del objeto persona por medio de get.
		console.log(persona.get('nombre')+' '+persona.get('apellido'))
		console.log('Edad: '+persona.get('edad'))


	// ITERABLE. tanto como Map y List
	// usando .map(), .filter(), .reduce()
	var cont = 0
	persona.map(function (l) {
		cont++
		console.log(cont+': '+l)
		// body...
	})

	// -----------------------------------------------------------------------------
	console.log('-----------------------------------------------------------------------------')

	let libro = Immutable.fromJS({
		titulo: 'Sql para todos.',
		isbn: '043235674',
		series: 'consultas avanzadas',
		autor: {
			nombre: 'pedro',
			apellido: 'kendal'
		},
		generos:['ciencia', 'ingenieria', 'informatica'],
		tiendas:[
			{ id_tienda: 'amazon', precio: 4000 },
			{ id_tienda: 'M++', precio: 323 },
			{ id_tienda: 'biblio', precio: 600 },
			{ id_tienda: 'bookStore', precio: 40.1 }
		]
	})

	console.log(libro.get('titulo'))

	// OBTENER datos anidados del objeto libro.
		// console.log(libro.get('autor').get('nombre')+'  '+libro.get('autor').get('apellido'))

		// Un mejor metodo que nos da immutable.
		console.log(libro.getIn(['autor', 'nombre']))
		console.log(libro.getIn(['autor', 'apellido']))

	// MODIFICAR.
	libro = libro.setIn(['autor', 'nombre'], 'eduardo')

		console.log(libro.getIn(['autor', 'nombre']))
		console.log(libro.getIn(['autor', 'apellido']))

	// ELIMINAR la clave(key) titulo con su valor.
	// libro = libro.delete('titulo')

	// ACTUALIZAR el valor de la clave(key).
		// similar a set.
	// libro = libro.update('titulo', value => 'nodejs')

		// Actualizar una colección dentro de una estructura de datos
	let state = Immutable.Map({
		usuarios: Immutable.List([
			{
				correo:'hola@gmail.com',
				nombreUsuario: 'elcmasmas'
			}
		])
	})

	state.update('usuarios', usuarios => usuarios.push({ 
													correo:'pock@gmail.com',
													nombreUsuario: 'torito'
												 }))
	console.log(state)
	// -----------------------------------------------------------------------------
	console.log('-----------------------------------------------------------------------------')

	// MOSTRAR datos de la lista que esta dentro de la estructura.
	console.log(libro.getIn(['generos', 0]))

	console.log(libro.get('generos')._tail.array) // muestra todo el array de generos.

	// obtener el valor de una clave de un objeto que esta dentro del array.
	console.log(libro.getIn(['tiendas', 0, 'precio']))


	// console.log(iterableString._tail.array)
}