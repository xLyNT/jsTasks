/*Задание - создать функцию фильтрации массива, которая получает массив, и возвращает элементы массива, для которых 
func возвращает true. Создать набор готовых фильтров inBeetween и inArray, возвращающих соответственно значения между a и b 
и значения входящие в массив*/
'use strict'
function filter(arr, func){
    var result = [];
        for (var i = 0; i < arr.length; i++){
            var n = arr[i];
            if(func(n)){
                result.push(n);
            }
         }
         return result;
}
var arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a,b){
    return function(x){
        return x <= b && x >= a;
    };
}
function inArray(arr){
    return function (x){
        return arr.indexOf(x) != -1;
    };
}
alert(filter(arr, function(a) {
  return a % 2 == 0
}))
alert(filter(arr,inBetween(2,4)));
alert(filter(arr,inArray([3,5,7])));
