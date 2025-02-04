/*

  배열 선언
  1. 변수명:타입 = [값1, 값2, ...]
  2. 변수명:Array<타입> = [값1, 값2, ...]

*/

const number1:number[] = [1, 2, 3, 4];
const number2:Array<number> = [1, 2, 3, 4];


// 객체 배열
const idols:{name:string, group:string}[] = [
  {name:'장원영', group:'ive'},
  {name:'제니', group:'blackpink'},
  {name:'카리나', group:'aespa'}
]

const members:Array<{name:string, group:string}>=[
  {name:'장원영', group:'ive'},
  {name:'제니', group:'blackpink'},
  {name:'카리나', group:'aespa'}
];