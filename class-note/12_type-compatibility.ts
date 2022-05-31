// // 인터페이스

// interface Developer {
//   name: string;
//   skill: string;
// }

// // interface Person {
// //   name: string;
// // }

// class Person {
//   name: string;
// }

// let developer: Developer;
// let person: Person;

// person = developer; // 호환 가능
// // developer = person; // 호환 불가능

// // 함수
// let add = function (a: number) {
//   // ...
// };

// let sum = function (a: number, b: number) {
//   // ...
// };

// sum = add; // 호환 가능
// // add = sum; // 호환 불가능

// // 제네릭
// interface Empty<T> {
//   // ...
// }

// let empty1: Empty<string>;
// let empty2: Empty<number>;
// empty1 = empty2;
// empty2 = empty1;

// interface NotEmpty<T> {
//   data: T;
// }
// let notEmpty1: NotEmpty<string>;
// let notEmpty2: NotEmpty<number>;
// notEmpty1 = notEmpty2;
// notEmpty2 = notEmpty1;
