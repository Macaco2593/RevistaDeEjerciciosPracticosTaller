const input = document.getElementById('input') //input 
const numbers = document.getElementById('numbers') //secction que contiene los numeros
const suma = document.getElementById('suma')
const resta = document.getElementById('resta')
const multiplicacion = document.getElementById('multiplicacion')
const division = document.getElementById('division')
const resultado = document.getElementById('resultado')
const borrar = document.getElementById('borrar')


numbers.addEventListener("click",(e) =>{
     if(e.target.className === 'numberInput'){
     input.value = `${input.value}${e.target.value}`}
})


let number=0,adicion=0, sustraccion=0, result=0;
     
suma.addEventListener("click",() =>{
          number = parseInt(input.value);
          adicion = number + parseInt(input.value); // No se me ocurre nada aqui, para hacer una pausa y pedir otro numero, despues de eso sigo con la resta
          result = adicion
          input.value = ("")
})

resta.addEventListener("click", () =>{
     number = number + parseInt(input.value);
     sustraccion = result - parseInt(input.value);
     result = sustraccion;
     input.value = ("")
})
 resultado.addEventListener("click",()=>{
      input.value = result
 })
 borrar.addEventListener("click",()=>{
     document.getElementById('input').value = ""
})