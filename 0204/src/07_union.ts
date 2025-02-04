/*
  union
  변수의 값이 지정한 여러개의 타입 중 한 개의 타입의 값을 저장할 수 있다.

  변수명:타입1|타입2|... 
*/

// ts는 같은 폴더에서 같은 변수 쓰지 말자 같은 html에 들어갈 수 있기 때문에
let anyVal: number|string|boolean = 10;           // 이 시점에서 anyVal은 number 타입

anyVal = 'hello';                                 // anyVal: string 타입
anyVal = false;                                   // anyVal: boolean 타입
// anyVal = {name:'hello'}                        // 변수 선언 시 지정한 타입이 아니므로 오류

let lateVal:string|undefined|null = undefined;

lateVal = 'hello';

/*
  자주 사용하는 유니온 타입들은 별칭으로 지정해서 재사용하기
  type 타입명 = 타입1|타입2|...
*/

type nsb = number|string|boolean;

let anyV:nsb = 10;
anyV = 'hello';
anyV = false;


// 타입 별칭 추가 가능
type nullNsb = nsb|null;

let nullAbleValue: nullNsb = null;

