class Usuario{
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre; 
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    addMascota(nombre){
        this.mascotas.push(nombre);
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }

    addBook(titulo, autor){
        this.libros.push({nombre:titulo,autor:autor})
    }

    getBookNames(){
        let nombresLibros = this.libros.map((libro)=>{
            return libro.nombre;
        })
        return nombresLibros;
    }

    countMascotas(){
        return this.mascotas.length;
    }
}


//CREO LA INSTANCIA DE USUARIO , CON NOMBRE ELON Y APELLIDO MUSK , LE PASO ARRAYS VACIOS ASI SE LOS AGREGO MEDIANTE LAS FUNCIONES
let ElonMusk = new Usuario('Elon','Musk',[],[]);

console.log(ElonMusk.getFullName());

//le agrego dos libros a la instacia de la clase usuario
ElonMusk.addBook('El senior de los anillos','felipe');
ElonMusk.addBook('caperucita roja','gabriel');

//mustro los libros agregados anteriormente
console.log(ElonMusk.getBookNames());

ElonMusk.addMascota('firulais');
ElonMusk.addMascota('tobi');
ElonMusk.addMascota('michi');

//muestro las mascotas agregadas anteriormente
console.log(ElonMusk.countMascotas());




