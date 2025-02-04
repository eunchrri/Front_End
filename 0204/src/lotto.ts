document.querySelector("#btn")?.addEventListener("click", game);
function game():void {
  // lotto 번호를 위한 배열 선언
  let lotto: number[]=[];
  while(lotto.length<6) {
    let num:number = parseInt(Math.random() * 45 + ''); // 1 ~ 45 사이의 난수 발생 시키기
    // 같은 수 배제하기
    if(lotto.indexOf(num) == -1) lotto.push(num)
  }

  lotto.sort(function(a, b) {
    return a - b
  })

  let view:string = '';
  let i:number = 0;

  let intervalId = setInterval(function(){
    if(lotto.length == i) {
      clearInterval(intervalId)
      return
    }
    view += `<div class="ball ball${parseInt(lotto[i]/10+'')}">${lotto[i++]}</div>`
    let viewDiv = document.querySelector('#view');
    viewDiv == null?'': viewDiv.innerHTML=view;
  }, 1000) // 1초마다

}
/* 
document.querySelector('#btn')?.addEventListener('click', game);
function game():void{
  let lotto:number[] = [];
  while(lotto.length < 6){
    let num:number = Math.floor(Math.random() * 45 + 1);
    if(lotto.indexOf(num) == -1) lotto.push(num);
  }
  lotto.sort(function(a:number, b:number){return a - b});
  let view:Node|string|any="";
  let i: number = 0;
  let intervalId = setInterval(function(){
    if(lotto.length == i){
      clearInterval(intervalId);
      return;
    }
    else{
      view = document.createElement("div");
      view.className = `ball ball${Math.floor(lotto[i] / 10)}`;
      view.innerText = lotto[i++];
      // `<div class="ball ball${lotto[i] / 10}">${lotto[i++]}</div>`;
    }
  document.querySelector("#view")?.appendChild(view);
  }, 1000)
}
*/