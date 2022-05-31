// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10); // 숫자 10
// logText('안녕'); // 문자열 하이
// logText(true); // 진위값 true

// // 호출하는 시점에 타입을 넘겨서 사용 가능
// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText<string>('하이');

// function logText(text: string): any {
//   console.log(text);
//   text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number): any {
//   console.log(num);
//   return num;
// }

// function logText(text: string | number): string | number {
//   console.log(text);
//   // text.
//   return text;
// }

// const a = logText('안녕');
// a.split('');

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// const str = logText<string>('abc');
// str.split('');
// const flag = logText<boolean>(true);
// !flag;

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 'abc', selected: false };

// interface Dropdown<T> {
//   value: T;
//   selected: boolean;
// }

// const obj: Dropdown<string> = { value: 'abc', selected: false };

// // 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function(text) {
//     console.log(text)
//   })
//   return text;
// }

// logTextLength<string>(['hi']);

// 제네릭의 타입 제한2 - 정의된 타입 이용하기
// interface LengthType {
//   length: number;
// }

// function logTextLength<T extends LengthType>(text: T): T {
//   text.length;
//   return text;
// }

// logTextLength('a');
// logTextLength({ length: 10 });
// logTextLength(10);
// logTextLength({ leng: 10 });

// // 제네릭의 타입 제한3 - keyof
// interface ShoppingItem {
//   name: string;
//   price: number;
//   stock: number;
// }

// function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
//   return itemOption;
// }

// // getShoppingItemOption('10');
// // getShoppingItemOption<number>(10);
// // getShoppingItemOption<string>('a');
// getShoppingItemOption('name');
