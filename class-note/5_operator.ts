// // function logMessage(value: any) {
// //   console.log(value);
// // }

// // logMessage('hello');
// // logMessage(100);

// function logMessage(value: string | number): void {
//   // 타입 가드
//   if (typeof value === 'number') {
//     value.toLocaleString();
//   }
//   if (typeof value === 'string') {
//     value.toString();
//   }
//   throw new TypeError('value must be string or number');
// }

// logMessage('hello');
// logMessage(100);

// interface Developer {
//   name: string;
//   skill: string;
// }

// interface Person {
//   name: string;
//   age: number;
// }

// // function askSomeone(someone: Developer | Person): void {
// //   // someone.name;
// //   // someone.skill;
// //   // someone.age;
// // }

// // askSomeone({ name: '개발자', skill: '웹 개발' });
// // askSomeone({ name: '퍼블리셔', age: 38 });

// // function askSomeone(someone: Developer & Person): void {
// //   // someone.name;
// //   // someone.skill;
// //   // someone.age;
// // }

// // askSomeone({ name: '개발자', skill: '웹 개발' });
// // askSomeone({ name: '퍼블리셔', age: 38 });

// // let aldur: string | number | boolean;
// // let sima: string & number & boolean;
