//Форматирование
// 8.	Создайте функцию, которая принимает массив из 10 чисел (от 0 до 9) 
// и возвращает строку этих чисел, отформатированных как номер телефона (например, (555) 555-5555).

let arr = [0,2,3,4,5,6,7,'b',6,5];
let mark = true;

function phoneNumber(numbers){
    let phone = '';
    for( j = 0; j < numbers.length; j++){
   
    switch(j){
        case 0: phone = phone.concat('+7 (', numbers[0])
        break;
        case 2: phone = phone.concat( numbers[2], ') ')
        break;
        case 5: phone = phone.concat( numbers[5], '-')
        break;
        default:phone = phone.concat( numbers[j])
        break;

    } 
}
    console.log("Номер ---> "+phone);
}
if(arr != null && Array.isArray(arr) != true   && arr.lenght == 10){
    for(let i =0; i < arr.length; i++)
    if(arr[i]>9 || arr[i]<0 || arr == null ||  typeof(arr[i]) != 'number'){
        mark = false;
    }
}
else mark = false;

    if(mark)
    phoneNumber(arr)
    else console.log('check data');
