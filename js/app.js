const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) => {
	e.preventDefault();

// Escribir Filas
	// try {
	// 	const respuesta = await fetch('https://sheet.best/api/sheets/e1bf0443-8bca-42a4-afc2-4f36b4e8fbd5', {
	// 		method: 'POST',
	// 		mode: 'cors',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify({
	// 			"Nombre": formulario.nombre.value,
	// 			"Correo": formulario.correo.value,
	// 			"Telefono": formulario.telefono.value
	// 		})
	// 	});

	// 	const contenido = await respuesta.json();
	// 	console.log(contenido);
	// } catch(error){
	// 	console.log(error);
	// }

// Leer Filas
	// try {
	// 	const respuesta = await fetch('https://sheet.best/api/sheets/e1bf0443-8bca-42a4-afc2-4f36b4e8fbd5');

	// 	const contenido = await respuesta.json();
	// 	console.log(contenido);
	// } catch(error){
	// 	console.log(error);
	// }


// Eliminar Filas
	// try {
	// 	const respuesta = await fetch('https://sheet.best/api/sheets/e1bf0443-8bca-42a4-afc2-4f36b4e8fbd5/0', {
	// 		method: 'DELETE'
	// 	});

	// 	const contenido = await respuesta.json();
	// 	console.log(contenido);
	// } catch(error){
	// 	console.log(error);
	// }


// Actualizar Filas
	try {
		const respuesta = await fetch('https://sheet.best/api/sheets/90e5ba64-2847-4b00-a0b0-d7caa9a2041c',{
			// method: 'PATCH',
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"Nombre Completo": formulario.nombre.value,
				"Apellido de Casada": formulario.apellidocasada.value,
				"Correo 1": formulario.correo.value,
				"Correo 2": formulario.correo2.value,
				"Teléfono 1": formulario.telefono.value,
				"Teléfono 2": formulario.telefono2.value
			})
		});

		const contenido = await respuesta.json();
		console.log(contenido);
	} catch(error){
		console.log(error);
	}


	registro.classList.remove('activo');
	exito.classList.add('activo');
});