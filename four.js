/*Задание - создать функцию sum, которая складывает числа при вызове с неограниченным количеством элементов в скобках*/
function sum(a){
    var sumCount = a;
    function s(b){
        sumCount += b;
        return s;
    }
    s.toString = function(){
        return sumCount;
    }
    return s;
}
alert( sum(1)(2) ); 
alert( sum(5)(-1)(2) ); 
alert( sum(6)(-1)(-2)(-3) ); 
alert( sum(0)(1)(2)(3)(4)(5) ); 
