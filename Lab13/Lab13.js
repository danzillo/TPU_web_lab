// 6.	Напишите программу для удаления элементов из выпадающего списка. 

let select = document.querySelector('#select');
button.addEventListener('click', delSel);

function delSel(){
    if(select.selectedIndex == -1 ) alert("Список пуст, больше нечего удалять.")
    else{
        console.log("Будет удалено : "+ select.value);
        select.remove(select.selectedIndex);}
    }
