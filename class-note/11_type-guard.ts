// interface Developer {
//   name: string;
//   skill: string;
// }

// interface Person {
//   name: string;
//   age: number;
// }

// function introduce(): Developer | Person {
//   return { name: '미역', age: 8, skill: 'qute' };
// }

// let aldur = introduce();
// console.log(aldur.skill);

// if ((aldur as Developer).skill) {
//   let skill = (aldur as Developer).skill;
//   console.log(skill);
// } else if ((aldur as Person).age) {
//   let age = (aldur as Person).age;
//   console.log(age);
// }

// // 타입 가드 정의
// function isDeveloper(target: Developer | Person): target is Developer {
//   return (target as Developer).skill !== undefined;
// }

// if (isDeveloper(aldur)) {
//   aldur.skill;
// } else {
//   aldur.age;
// }
