// //Регулярные выражения
// 5.	Создайте функцию, которая принимает массив из двух строк 
// и проверяет, присутствуют ли буквы из второй строки в первой строке.
let arr=['Первая stroka', 'rer'];

function reg(array){
    let str1 = array[0];
    let str2 = new RegExp('\['+array[1]+'\]','gi');
    if(str2.test(str1))
    console.log('Найдены совпадения.')
    else console.log('Совпадений нет.')
}
if( Array.isArray(arr) && arr.length == 2 && arr != null && typeof(arr[0]) == 'string' && typeof(arr[1]) == 'string' )
reg(arr)
else console.log('Проверьте входные данные.');
