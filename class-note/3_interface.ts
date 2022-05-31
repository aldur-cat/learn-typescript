// interface User {
//   age: number;
//   name: string;
// }

// // 변수에 인터페이스 활용
// let aldur: User = {
//   age: 9,
//   name: '미역',
// };

// // 함수에 인터페이스 활용
// function getUser(user: User): void {
//   console.log(user);
// }

// getUser({ age: 4, name: '시마' });

// // 함수의 스펙(구조)에 인터페이스를 활용
// interface SumFunction {
//   (a: number, b: number): number;
// }

// let sum: SumFunction;
// sum = function (a: number, b: number): number {
//   return a + b;
// };

// // 인덱싱
// interface StringArray {
//   [index: number]: string;
// }

// let arr: StringArray = ['a', 'b', 'c'];
// // arr[0] = 10;

// // 딕셔너리 패턴
// interface StringRegexDictionary {
//   [key: string]: RegExp;
// }

// let obj: StringRegexDictionary = {
//   // sth: /abc/,
//   cssFile: /\.css$/,
//   jsFile: /\.js$/,
// };

// Object.keys(obj).forEach(function (value) {});

// interface Person {
//   name: string;
//   age: number;
// }

// interface Developer extends Person {
//   name: string;
//   age: number;
//   language: string;
// }

// let sima: Developer = {
//   language: 'ts',
//   age: 4,
//   name: '시마',
// };
