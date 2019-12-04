/**
 * 一、基础类型
 * Typescript 简单定义类型
 * 2019-12-4 09:35:09
 * author: JY 
 */
let flag: boolean = true // false    定义布尔值类型
let num: number = 1 //   定义数字类型
let str: string = 'JY'  // 定义字符串
let arr1:number[] = [0,1,2,3]  //数组类型  每一项是数字类型
let arr2: Array<number> = [0,1,2,3] //数组类型（泛型）  每一项是数字类型
let arr3: [string, number, boolean] = ['JY', 26, true] //元组类型tuple 定义数组每一项的类型与长度 (元组可以理解为长度、类型固定好的数组)
// arr3[0].slice() // 'JY'字符串方法成立
// arr3[1].slice() // 26为数字 字符串方法不成立 报错
// arr3[3] = 'football'  //  Typescript 3.0版本后   已不允许元组添加越界元素会报错
let arr4: Array<any> = [1, 'dsad', {name: 'JY'}, undefined, false, null, [0,1,2]] // [any]  定义数组类型 每一项为任意类型
 enum Color { //此处定义枚举值
     red = '红色',
     blue = '蓝色',
     yellow = '黄色'
 }
let c: Color = Color.red; // 定义变量Color并在Color这个枚举值类型中取值   近似于对象中取属性的书写方法 .
console.log(c); // >>> 红色
let c1: string = Color['红色'];
console.log(c1);  // >>> undefined
enum Size {  
    one = 1,
    two = 2
}
let s: string = Size[1];  // 枚举值类型已key/value键值对的形式存在所以通过value反查key
console.log(s);
let job: any = 'web'  // 定义任意类型  如果所有的类型都用 就跳过语法检查 any实际于正常的javascript写法就一样的 所以要慎用
let noType: void = undefined  // null   定义没有类型与any相反
function noTypeFun(): void {  // 一般给函数的返回值定义此类型
    console.log('this is my warming message');
}
let u: undefined = undefined // null 无意义
let n: null = null  // undefined  无意义
// let num1: number = 3
// let num1: number | undefined | null = 3   // 定义联合类型 严格模式下  此处不报错
// num1 = null    // 开启严格模式检查    tsc index.ts --strictNullChecks   此处报错  
// num1 = undefined  // 开启严格模式检查    tsc index.ts --strictNullChecks   此处报错
function error(meg: string): never {  //定义不存在的类型  一般用于函数无返回值的 不能结束的  抛出异常的 是任何类型的子类型
    throw Error(meg);
}
let o: object = {name: 'JY', job: 'web'}  //定义对象类型
let someValue: any = 'This is a string'
// someValue.length   此时是没有length方法的   应为类型any   不是string
let someLen: number = (<string>someValue).length   // 类型断言   强制转换为字符串类型   此时拥有length 方法  
// let someLen: number = (someValue as string).length  // 类型断言另一种写法








/**
 * Typescript 简单定义类型
 * 2019-12-4 10:45:31
 * author: JY 
 */
function a(name: string) {   //定义字符串类型   其他类型编译报错
    return 'Hello ' + name;
}
let user = 'JY';
// let user = [0,1,2];  //定义为字符串   实际为数组   编译报错

// console.log(a(user, 1));   //参数个数限制   不符合变异报错
console.log(a(user));


/**
 * Typescript 定义接口类型
 * 2019-12-4 10:53:59
 * author: JY
 */
//定义ts接口（给对象中具体的属性方法定义类型）
interface Person {
    firstName: string,
    lastName: string
}

function b(name: Person) {  //此处相当于定义了  参数类型为object并对具体的属性进行了类型定义
    return 'Hello ' + name.firstName + ' ' + name.lastName;
}

let namePub: Person = {
    firstName: 'JY',
    lastName: 'JP'
}

console.log(b(namePub));



/**
 * Typescript class类的使用
 * 2019-12-4 11:07:37
 * author: JY
 */
class User {
    firstName: string
    lastName: string
    fullName: string

    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + ' ' + this.lastName;
    }
}

let classUser = new User('JY','JP')
console.log(classUser);
// >>> User {       此处输出
//     firstName: 'JY',
//     lastName: 'JP',
//     fullName: 'JY JP'
// }




