// 10.	Создайте функцию, которая инвертирует значения RGB
//  данного кортежа (примеры: [0, 0, 0]) ➞ [255, 255, 255], [165, 170, 221]) ➞ [90, 85, 34].

function newCortez(cortez,dlina){
for(let i =0; i<dlina;i++){
    cortez[i] = 255-cortez[i];
}
return console.log(cortez);
}

const color = [1,1,1];
if(color != null  && Array.isArray(color) && color.length == 3){
    var check =0;
    for(let i =0; i< color.length; i++)
    if(color[i] >= 0 && color[i] <= 255 && typeof(color[i]) == 'number')
    check +=check;
    else check+=check+1;
}

if(check == 0)
newCortez(color, color.length);
else console.log('check data');
