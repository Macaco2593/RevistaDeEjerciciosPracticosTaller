const input = document.getElementById('input') //input 
const numbers = document.getElementById('numbers') //secction que contiene los numeros
const suma = document.getElementById('suma')
const resta = document.getElementById('resta')
const multiplicacion = document.getElementById('multiplicacion')
const division = document.getElementById('division')

//const handleClick = () => {}

/*ok, esto tampoco lo sabia, acabo de descubbrir que si le colocas el add event listener 
a una zona grande se puede acceder o todo lo que contiene (en este caso en un section)

revisa eso*/
numbers.addEventListener("click",(e) =>{
     console.log('a punto de entrar al if', e) //revisa un poco el e es el evento que optiene el add event listener
     if(e.target.className === 'numberInput'){
          console.log('funciona')
     input.value = `${input.value}${e.target.value}`}
})
/*el value del input es sencillamente value (input.value) en los botones tambien solo que 
hace rato estabas accediendo a los valores directamente. Te lo notificare en el github.

cuando captural el evento (e) para acceder al valor debes de ir al target, revisa el
console.log del evento te daras cuenta de todas las propiedades que posee*/

// recuerda eliminar los console.logs al subir tus ramas.
// en un proyecto profesional esta mal visto
//como es de practica puedes hacerlo asi 
//solo borralos para hacer merge
console.log(input)
suma.addEventListener("click",(s) =>{
     let i = 0, num1, num2;
     if(i==0){
          num1 = parseInt(input.value)
     }
     if(i>0){
          num2 = parseInt(input.value)
          s = num1 + num2;
          input.value = s
     }
     i++

     
})
