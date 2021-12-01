// 7.	Для заданного числа верните разницу между максимальным и минимальным числами, 
// которые могут быть образованы при перестановке цифр.

var chislo = -11 ;

function maxValue(num){
    value = String(num);
    arr = value.split('');
    arr = arr.sort();
    let min = Number(arr.join(''));
    let max = Number(arr.reverse().join(''));
    return max - min;
}
function isNumber(isNum){
    return typeof isNum == "number" || console.log('Введено не число.');
   }
   
   function isNull(isNull){
      return isNull != null || console.log('Ничего не введено.');
   }
   
   
   function isInteger(isInt){
       return Number.isInteger(isInt) || console.log('Введенное число является дробным.')
   }

   function isPositive(isPos){
    return isPos>0 || console.log('Введено отрицательное число.');
}

if(isNull(chislo) && isNumber(chislo) && isInteger(chislo) && isPositive(chislo)){ 
console.log("Разница между максимальным и минимальным числами " + maxValue(chislo));}  