// 13.	Учитывая известное количество уникальных предметов, сколькими
// способами мы можем расположить их в ряд? Создайте функцию, которая принимает целое число
// n и возвращает количество цифр числа возможных перестановок для n уникальных элементов.
// Например, 5 уникальных предметов можно расположить
//  120 уникальными способами. 120 состоит из 3 цифр, поэтому возвращается целое число 3.

var myNum = -1;
var result = 1;

function recursion(num){
    if(num == 1) return console.log(result.toString().length);
    else {  
        result*=num;
        num--;
        recursion(num);
    }

}
function isNumber(isNum){
 return typeof isNum == "number" || console.log('Введено не число.');
}

function isntNull(isNull){
   return isNull != null || console.log('Ничего не введено.');
}


function isInteger(isInt){
    return Number.isInteger(isInt) || console.log('Введенное число является дробным.')
}

function isPositive(isPos){
    return isPos>0 || console.log('Введено отрицательное число.');
}

if(isntNull(myNum) && isNumber(myNum) && isInteger(myNum) && isPositive(myNum))
recursion(myNum);
