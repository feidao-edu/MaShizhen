//函数声明式定义
function add1(x: number, y: number) {
	return x + y;
}
//函数表达式定义
const add2 = function (x: number, y: number) {
	return x + y;
};
//自执行函数/匿名函数
const add3 = (function (x: number, y: number) {
	return x + y;
}(2, 3));
const add4 = (function (x: number, y: number) {
	return x + y;
})(2, 3);
//普通箭头函数
const add5: (x: number, y: number) => number =
	function (x: number, y: number) { return x + y; };
const add6: (baseValue: number, increment: number) => number =
	function (x: number, y: number) { return x + y; };
//使用实参对象
function add(...args: number[]) {
	return args.reduce((pre, cur) => {
		return pre + cur;
	}, 0);
}
//使用class类
class Add {
	constructor(public num1: number, public num2: number) { }
	growOld = () => {
		console.log(this.num1 + ' ' + this.num2);
		return this.num1 + this.num2;
	}
}
// var sum = new Add(1, 2);
//使用对象和方法
// const sum = {
// 	add: function () {
// 		console.log(this.num1);
// 		return this.num1 + this.num2;
// 	}
// }
// sum.num1 = 3;
// sum.num2 = 5;
// sum.add()