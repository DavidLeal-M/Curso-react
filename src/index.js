
//Desestructuracion objetos

 const persona ={
     nombre: 'tony',
     edad:45,
     clave:'ironman',
     hijos :{
         numero:1,
         edadHijo:13,
         Sexo: 'Masculino'
     }
 };
/*  
const {nombre,edad,clave,rango='Almirante',hijos:{numero}}=persona; // permite crear una variable
                                                                    //  y asignarle un valor. Tambiens e puede ingresar a objetos aninados como "hijos".                                               
console.log(nombre,edad,clave,rango,numero);  */
 
//Desestructuracion funciones 

const printPersona= function( {nombre, edad,hijos:{numero,Sexo}}) {
    console.log( `${edad}`,`${nombre}`,`${numero}`,`${Sexo}`);
}
printPersona(persona);

//Desestructuracion arreglos

const arreglo=[1,2,4,5,6];
const[x,y,,z,l]= arreglo;
console.log(x,y,z,l);

