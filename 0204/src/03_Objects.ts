/*

  let                   타입 선언부            객체
  const       변수명:{속성명:타입, .....} = {속성명:값}
  var

*/

let myInfo:{
  name:string,
  height:number,
  isConditionGood:boolean,    // 필수 속성을 안 쓸 경우 error
  gender?:string              // 선택적 속성, 해당 속성이 없을 경우 값은 undefined 된다.
}={
  name:'lec',
  height:155,
  isConditionGood:true,
};

console.log('myInfo:', myInfo);
console.log('myInfo.gender: ', myInfo.gender);

/*

  interface (자바의 고유 기법)
  인터페이스는 타입을 정의한 규칙을 의미한다. 타입을 재사용 가능

  형식] 
  interface 인터페이스이름 {
    속성명:타입,
    ...
  }

  사용]
  let,const,var   변수명:인터페이스 이름 = {...}

*/

interface User{
  age:number,
  name:string,
}

var p1:User={age:2, name:'Uplus'}

let p2:User={age:17, name:'lsc'}

function getUser(user:User):void {
  console.log(user)
}

getUser(p1);

/*
  
  인터페이스 확장
  기존의 인터페이스의 속성을 재사용하여 원하는 속성을 추가해서 새로운 인터페이스를 생성
  
  interface 이름 extends 확장받을이름{
  }

*/

interface Vip extends User {  // Vip는 User를 상속 받음
  hobby:string                // 추가할 속성만 작성
}

var cust:Vip={
  age:30,
  name:'zz',
  hobby:'coding'
}

console.log(cust);