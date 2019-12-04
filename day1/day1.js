/**
 * 一、基础类型
 * Typescript 简单定义类型
 * 2019-12-4 09:35:09
 * author: JY
 */
var flag = true; // false    定义布尔值类型
var num = 1; //   定义数字类型
var str = 'JY'; // 定义字符串
var arr1 = [0, 1, 2, 3]; //数组类型  每一项是数字类型
var arr2 = [0, 1, 2, 3]; //数组类型（泛型）  每一项是数字类型
var arr3 = ['JY', 26, true]; //元组类型tuple 定义数组每一项的类型与长度 (元组可以理解为长度、类型固定好的数组)
// arr3[0].slice() // 'JY'字符串方法成立
// arr3[1].slice() // 26为数字 字符串方法不成立 报错
// arr3[3] = 'football'  //  Typescript 3.0版本后   已不允许元组添加越界元素会报错
var arr4 = [1, 'dsad', { name: 'JY' }, undefined, false, null, [0, 1, 2]]; // [any]  定义数组类型 每一项为任意类型
var Color;
(function (Color) {
    Color["red"] = "\u7EA2\u8272";
    Color["blue"] = "\u84DD\u8272";
    Color["yellow"] = "\u9EC4\u8272";
})(Color || (Color = {}));
var c = Color.red; // 定义变量Color并在Color这个枚举值类型中取值   近似于对象中取属性的书写方法 .
console.log(c); // >>> 红色
var c1 = Color['红色'];
console.log(c1); // >>> undefined
var Size;
(function (Size) {
    Size[Size["one"] = 1] = "one";
    Size[Size["two"] = 2] = "two";
})(Size || (Size = {}));
var s = Size[1]; // 枚举值类型已key/value键值对的形式存在所以通过value反查key
console.log(s);
var job = 'web'; // 定义任意类型  如果所有的类型都用 就跳过语法检查 any实际于正常的javascript写法就一样的 所以要慎用
var noType = undefined; // null   定义没有类型与any相反
function noTypeFun() {
    console.log('this is my warming message');
}
var u = undefined; // null 无意义
var n = null; // undefined  无意义
// let num1: number = 3
// let num1: number | undefined | null = 3   // 定义联合类型 严格模式下  此处不报错
// num1 = null    // 开启严格模式检查    tsc index.ts --strictNullChecks   此处报错  
// num1 = undefined  // 开启严格模式检查    tsc index.ts --strictNullChecks   此处报错
function error(meg) {
    throw Error(meg);
}
var o = { name: 'JY', job: 'web' }; //定义对象类型
var someValue = 'This is a string';
// someValue.length   此时是没有length方法的   应为类型any   不是string
var someLen = someValue.length; // 类型断言   强制转换为字符串类型   此时拥有length 方法  
// let someLen: number = (someValue as string).length  // 类型断言另一种写法
/**
 * Typescript 简单定义类型
 * 2019-12-4 10:45:31
 * author: JY
 */
function a(name) {
    return 'Hello ' + name;
}
var user = 'JY';
// let user = [0,1,2];  //定义为字符串   实际为数组   编译报错
// console.log(a(user, 1));   //参数个数限制   不符合变异报错
console.log(a(user));
function b(name) {
    return 'Hello ' + name.firstName + ' ' + name.lastName;
}
var namePub = {
    firstName: 'JY',
    lastName: 'JP'
};
console.log(b(namePub));
/**
 * Typescript class类的使用
 * 2019-12-4 11:07:37
 * author: JY
 */
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + ' ' + this.lastName;
    }
    return User;
}());
var classUser = new User('JY', 'JP');
console.log(classUser);
// >>> User {       此处输出
//     firstName: 'JY',
//     lastName: 'JP',
//     fullName: 'JY JP'
// }
