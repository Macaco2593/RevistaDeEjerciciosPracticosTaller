const input = document.getElementById('input') 
const numbers = document.getElementById('numbers') 
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


/*let number=0,operacion, result=0;
suma.addEventListener("click",() =>{
          number = parseInt(input.value);
          operacion = "+";
          input.value = ("")
})

resta.addEventListener("click", () =>{
     number = parseInt(input.value);
     operacion = "-";
     input.value = ("")
})
multiplicacion.addEventListener("click", () =>{
     number = parseInt(input.value);
     operacion = "*";
     input.value = ("")
})

division.addEventListener("click", () =>{
     number = parseInt(input.value);
     operacion = "/";
     input.value = ("")
})

resultado.addEventListener("click",()=>{
      result = parseInt(input.value)
      switch(operacion){
           case "+":
               result = parseInt(number) + parseInt(result)
               break;
          case "-":
               result = parseInt(number) - parseInt(result)
               break;
          case "*":
               result = parseInt(number) * parseInt(result)
               break;
          case "/":
               result = parseInt(number) / parseInt(result)   
               break;  
      }
      input.value = result
 }) */

 suma.addEventListener("click",() =>{
     input.value = input.value + suma.value
})

resta.addEventListener("click",() =>{
     input.value = input.value + resta.value
})

multiplicacion.addEventListener("click",() =>{
     input.value = input.value + multiplicacion.value
})

division.addEventListener("click",() =>{
     input.value = input.value + division.value
})

resultado.addEventListener("click",()=>{
     input.value = eval(input.value)
})
 borrar.addEventListener("click",()=>{
     input.value = ""
     /*number = 0;
     result = 0;*/
})