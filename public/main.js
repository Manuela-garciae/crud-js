

//fetch get
fetch('http://localhost:3000/infojson')

//el response lo trasforma a json
.then(response => response.json())
//  lanzar el dato  a la consola 
.then((data) => {
    data.map((res) =>{
       // if (res.nombre == 'Macarena'){ //por si es para un solo objeto
            let elemPersona = document.getElementById('persona')
            // crear un elemento li para cada propiedad
            let nombre = document.createElement('li');
            nombre.textContent = `Nombre: ${res.nombre}`;
            let edad = document.createElement('li');
            edad.textContent = `Edad: ${res.edad}`;
            let email = document.createElement('li');
            email.textContent = `Email: ${res.email}`;

            //agregar los nuevos elementos li al elemento ul
            elemPersona.appendChild(nombre);
            elemPersona.appendChild(edad);
            elemPersona.appendChild(email);
            //agregar una linea para separar cada objeto
            linea = document.createElement('hr')
            elemPersona.appendChild(linea);
        //} 
    });
    
})


.catch(error => console.log(error));