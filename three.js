/*Задание - сделать калькулятор на основе объекта и его методов, запрашивающий 2 числа и выводящий их сумму и произведение*/
var a,b;
var calculator = {
    sum : function(){
        return this.a + this.b;
    },
    mul : function(){
        return this.a * this.b;
    },
    read : function(){
        this.a = +prompt('Введите первое число',0);
        this.b = +prompt('Введите второе число',0);
    }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
