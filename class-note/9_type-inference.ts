// // 타입 추론 기본 1
// let a = 'abc';

// function getB(b = 10) {
//   let c = 'hi';
//   return b + c;
// }

// // 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// let shoppingItem: Dropdown<string> = {
//   value: '1',
//   title: '캣휠',
// };

// // 타입 추론 기본 3
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// interface DetailedDropdown<K> extends Dropdown<K> {
//   description: string;
//   tag: K;
// }

// let detailedShoppingItem: DetailedDropdown<string> = {
//   value: '1',
//   title: '캣휠',
//   description: '캣휠짱',
//   tag: '짱짱캣휠',
// };

// console.log(detailedShoppingItem);

// // Best Common Type
// let arr = [1, '2', true, [1, 'a']];
