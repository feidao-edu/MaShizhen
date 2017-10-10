"use strict";
//函数声明式定义
function add1(x, y) {
    return x + y;
}
//函数表达式定义
var add2 = function (x, y) {
    return x + y;
};
//自执行函数/匿名函数
var add3 = (function (x, y) {
    return x + y;
}(2, 3));
var add4 = (function (x, y) {
    return x + y;
})(2, 3);
//普通箭头函数
var add5 = function (x, y) { return x + y; };
var add6 = function (x, y) { return x + y; };
//使用实参对象
function add() {
    var sum = 0;
    for (var j = 0; j < arguments.length; j++) {
        sum = sum + arguments[j];
    }
    return sum;
}
//使用class类
var Add = /** @class */ (function () {
    function Add(num1, num2) {
        var _this = this;
        this.num1 = num1;
        this.num2 = num2;
        this.growOld = function () {
            console.log(_this.num1 + ' ' + _this.num2);
            return _this.num1 + _this.num2;
        };
    }
    return Add;
}());
// var sum = new Add(1, 2);
//使用对象和方法
var sum = {
    add: function () {
        console.log(this.num1);
        return this.num1 + this.num2;
    }
};
// sum.num1 = 3;
// sum.num2 = 5;
// sum.add() 
