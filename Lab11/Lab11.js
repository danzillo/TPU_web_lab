// 9.	Создайте функцию, которая преобразует 12-часовое время 
// в 24-часовое или наоборот. Вернуть результат в виде строки.

let time = new Date();

function timeChange(date){
    
    var options12Hour = { 
        weekday: 'short', 
        year: 'numeric',
        month: 'short', 
        day: 'numeric' , 
        hour:  'numeric', 
        hour12 : true, // время в AM-PM формате
        minute : 'numeric'
    };

    var options24Hour = { 
    weekday: 'short', 
    year: 'numeric',
    month: 'short', 
    day: 'numeric' , 
    hour:  'numeric', 
    hour12 : false, 
    minute : 'numeric'
};

console.log('Время в 12 часовом формате: '+date.toLocaleString('ru-RU', options12Hour))
console.log('Время в 24 часовом формате: '+date.toLocaleString('ru-RU', options24Hour))
}

function isNull(isNull){
    return isNull != null || console.log('Ничего не введено.');
}

function isDate(isDate){
    return Object.prototype.toString.call(isDate) == "[object Date]" || console.log('Объект не явлется датой.')
}

if( isNull(time) && isDate(time) )
timeChange(time);