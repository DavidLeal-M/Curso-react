 

// Funciones en JS
//Funcion normal y recomendada
 const saludar = function(nombre ) {
return `hola, ${nombre}`;
} 

//Funcion de flecha
const saludar2 = (nombre ) =>{
    return `hola, ${nombre}`; 
}
// Lo mismo pero sin el return, la funcion funciona igual
  const saludar3 = (nombre) =>`hola, ${nombre}`;

 //Funcion para devolver un objeto
  const getUser =()=>{
      return {
          uid:'ABC123',
          username: 'David_lM'
      }
  }
//Lo Mismo pero sin el return, devulve el objeto de manera implicita
  const getUser2 =()=>
  ({
      uid:'ABC123',
      username: 'David_lM'
  });

  console.log(getUser());
  console.table(getUser2());
  console.log(saludar('Goku') );
  console.log(saludar2('Vegueta') );
  console.log(saludar3('Gohan') );

//Tarea
// 1.Transformar a una funcion de flecha 
// 2.Tiene que retonar un objeto implicito
function getUsuarioActivo(nombre){
    return{
        uid:'DCF321',
        username:nombre
    }
};
const usuarioActivo= getUsuarioActivo('DavidLeal');
console.log(usuarioActivo);

//Respuesta
const getUsuarioActivo2= (nombre)=>({
        uid:'DCF3225',
        username:nombre 
});

const usuarioActivo2= getUsuarioActivo2('DavidLealm');
console.table(usuarioActivo2);
