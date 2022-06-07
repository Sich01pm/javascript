'use strict';
/**
 * 
 * @param {Number} x-основание степени
 * @param {Number} n-показатель степени
 * @returns возводит в степень x^n
 */
function pow(x,n){
  return x**n;  
}
/**
 * 
 * @param {Number} n - количество чисел
 * @returns возвращает сумму от 1 до N
 */
function sumTo(n){
  let sum=0;
  for(let i=1;i<=n;i++){
    sum+=i;
  }
  return sum;
}
/**
 * 
 * @param {Number} n - основание факториала 
 * @returns возвращает n-ый факториал
 */
function factorial(n){
 if(n>0)
   return (n*factorial(n-1));
   else 
     return 1;
  }
/**
 * 
 * @param {Number} n - ое число число Фибоначчи
 * @returns возвращает n-oe число Фибоначчи
 */
 function fib(n) {
  let a = 1n;
  let b = 1n;
 if (n==0) return 0;
 if (n==1) return 1;
 if (n==2) return 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
/**
 * 
 * @param {Number} x - одно из ставниваемых чисел
 * @returns функцию
 */
function compare(x){
  let res=function(){
    let y=prompt('Введите число y');
    if (y>x) return true
      else if (y<x) return false
	else return null;
    
  }
  return res();
  
}
