// 2.	Создайте функцию, которая принимает массив чисел 
// от 1 до 10 (исключая одно число) и возвращает отсутствующее число.
var arr=[5,8,3,4,1,6,7,2,10];
var check=true;

if(Array.isArray(arr)  && arr != null)
function mySort(sortArr){
    for(let j = 0; j<sortArr.length;j++){
        for(let u = 0; u<sortArr.length;u ++){
            if(sortArr[j]<sortArr[u]){
                let arrJ = sortArr[j];
                sortArr[j] = sortArr[u];
                sortArr[u] = arrJ;
            }
        }
    }
}
mySort(arr);
 for(let y =0; y<arr.length-1; y++)
if(Array.isArray(arr)  && arr != null  && arr.length == 9&& (arr[y]<arr[y+1])&& arr[y]!=arr[y+1]&&arr[y+1]<=10&&arr[y]>0)
function foundNum(array){

    for(let i = 0; i<array.length; i++){
        if(array[i]!= i+1){
            console.log('Отсутствующее число: '+ (i+1));
        break;
        }
         else  if (arr[i]==9&&array[i]== i+1) console.log('Отсутствующее число: '+(i+2));//!!!
    }

}
else check=false;

if(check)
foundNum(arr);
else console.log("проверьте введенный массив");
