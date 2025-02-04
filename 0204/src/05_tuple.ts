/*
  tuple
  다양한 타입에 데이터를 배열 형태로 유지

  변수명:[타입1, 타입2, ...]=[값1, 값2, ...]      // 값의 개수는 선언한 타입의 개수와 순서가 동일해야 함.
*/

const myTuple:[string, number] = ['lec', 27];
console.log('myTuple: ', myTuple);
// 다양한 타입을 받지만 내가 지정한 타입만 들어오도록 하기 위해 튜플 사용
// 더 추가 못하게 하기 위해 readonly      const myTuple:readonly[] = []; 이런식으로 사용하기
// readonly가 없다면 데이터를 추가할 수 있다. 그러나 튜플의 목적에 맞지 않음.
// myTuple.push('kkkk');

// 함수에서 튜플을 인자로 받을 수 있다.
function printMyTuple(name:string, info:[string, number]):void {
  console.log(`[${name}]`, ...info);
}

printMyTuple('튜플테스트', myTuple);


// 튜플을 반환하는 함수
function fetchUser():[string, number] {
  return ['uplus', 2]
}

console.log(fetchUser());


let returnTuple = fetchUser();
console.log(returnTuple);


// 튜플의 결과값을 분해해서 받을 수 있다. - 구조분해할당?
const [nameT, ageT] = fetchUser();
console.log(`name:${nameT}, age:${ageT}`);