/* FUNCION DONDE SOLO SE MANDA A IMPRIMIR*/
function imprimirmsj(){
    console.log('ESTA ES UNA FUNCION');
}
imprimirmsj();

/*FUNCION PARA CALCULAR UNA SUMA*/

function suma(num1,num2){
    let sum=(num1+num2);
    console.log('la suma es:');
    return sum;
}

console.log(suma(5,2));

/*FUNCION COMO PARAMETRO*/
const avisar =(fun, x) =>{
    alert(fun(x));
}

const saludo = (nombre='Mundo') =>{
    return `Hola ${nombre}`;
}

avisar(saludo);