// 14.	Создайте функцию, которая принимает строку 
// в качестве аргумента и возвращает эквивалент кода Морзе.

var str = 'Политех лучше всех';
var checkStr = typeof(str);


if(str != null && checkStr == "string")
{
    var newStr = '';
    function strToMorze(stroka){

    stroka = String(stroka);
    stroka = stroka.toLowerCase();
   
    for(let i = 0; i < stroka.length; i++){
    
        switch(stroka[i]){
        case 'а':
            newStr+='•– ';
        break;
        case 'б':
            newStr+='–••• ';
        break;
        case 'в':
            newStr+='•–– ';
        break;
        case 'г':
            newStr+='––• ';
        break;
        case 'д':
            newStr+='–•• ';
        break;
        case 'е':
            newStr+='• ';
        break;
        case 'ж':
            newStr+='•••– ';
        break;
        case 'з':
            newStr+='––•• ';
        break;
        case 'и':
            newStr+='•• ';
        break;
        case 'й':
            newStr+='•––– ';
        break;
        case 'к':
            newStr+='–•– ';
        break;
        case 'л':
            newStr+='•–•• ';
        break;
        case 'м':
            newStr+='–– ';
        break;
        case 'н':
            newStr+='–• ';
        break;
        case 'о':
            newStr+='––– ';
        break;
        case 'п':
            newStr+='•––• ';
        break;
        case 'р':
            newStr+='•–• ';
        break;
        case 'с':
            newStr+='• ';
        break;
        case 'т':
            newStr+='– ';
        break;
        case 'у':
            newStr+='••– ';
        break;
        case 'ф':
            newStr+='••–• ';
        break;
        case 'х':
            newStr+='•••• ';
        break;
        case 'ц':
            newStr+='–•–• ';
        break;
        case 'ч':
            newStr+='–––• ';
        break;
        case 'ш':
            newStr+='–––– ';
        break;
        case 'щ':
            newStr+='––•– ';
        break;
        case 'ъ':
            newStr+='•––•–• ';
        break;
        case 'ы':
            newStr+='–•–– ';
        break;
        case 'ь':
            newStr+='–••– ';
        break;
        case 'э':
            newStr+='•••–••• ';
        break;
        case 'ю':
            newStr+='••–– ';
        break;
        case 'я':
            newStr+='•–•– ';
        break;
    

    }

}
console.log(newStr);
}
}
else console.log('Проверьте ваши данные');

strToMorze(str);


