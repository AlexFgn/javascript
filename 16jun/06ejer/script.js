//1. definir numero de cuenta 
let numeroCuenta = "12345"
let dinero= 200; //monto que quremos depositar


//2. definimos un saldo inicial
let saldo = 1000 //saldo previo


//3.definimos la cuenta
const cuentaValida = "12345"
  

//4. Comparamos
if (numeroCuenta === cuentaValida){
  saldo = saldo + dinero;
  console.log("Deposito exitoso, Nuevo saldo es:", saldo);
}else{
  console.log("cuenta no valida. Regrese dinero :(",dinero);
}