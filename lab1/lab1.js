let a = 'oone';
function check(word){
    for (let i = 0; i <= word.length; i++) {
        for(let b = 0; b <= word.length; b++){
            if(word.charAt(i)==word.charAt(b)&& i!=b)
           return false;     
        }
    }
    return true;
}
if(typeof a ==='string' || a instanceof String)
console.log(check(a))
else
console.log('проверьте введенные данные')