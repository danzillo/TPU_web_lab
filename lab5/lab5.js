var a = 626;
var b = 5;
var checkA = typeof(a);
var checkB = typeof(b);

if(a != null && b != null && checkA == 'number' && checkB == 'number' )
function stepenBotA(chisloA){
console.log('Чтобы получить число ' + chisloA +
' необходимо возвести число ' + b +
' в ' + Math.log(a)/Math.log(b) + ' степень.');
}
else console.log('проверьте даные');

stepenBotA(a);