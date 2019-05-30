/*Задание - создать строковый буфер, с функцией добавления, вывода значений и очистки буфера*/
'use strict'
function makeBuffer(){
    var txt = '';
    function buffer(t){
        if(arguments.length == 0){
            return txt;
        }
        txt += t;
    }
    buffer.clear = function(){
        txt = '';
    }
    return buffer;
}

var buffer = makeBuffer();

buffer('один');
buffer(' два ');
buffer(3)
alert( buffer());
buffer.clear();

alert( buffer() );
