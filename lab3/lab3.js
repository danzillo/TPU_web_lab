// Создайте функцию, которая добавляет пробелы 
// перед каждой заглавной буквой в слове. 
// После этого уберите заглавные буквы из всей строки.

var stroka = 'HПполитехЛРУГлучшеЛОРШвсех';
var type = typeof(stroka);
var newStroka='';

if(type == 'string'||stroka !=null)
function delBukva(strochka){
    for(var i=0; i<strochka.length; i++){
        if( !!(strochka[i].toLocaleUpperCase()==strochka[i])){
            newStroka+=' ';
        }
        else newStroka+=strochka[i];
    }
}
else console.log('Ошибка введенных данных');

delBukva(stroka);
  console.log(newStroka);