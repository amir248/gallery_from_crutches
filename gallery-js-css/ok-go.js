console.log('vse-ok!');
// document.querySelector('#json-holder').innerHTML =JSON.stringify(IMG);
console.log(JSON.stringify(IMG));

document.addEventListener("DOMContentLoaded",GoClick);
window.addEventListener("hashchange",GoClick);
document.querySelector('img').addEventListener('click',Plus);
let CountClick=+0;
function Plus(){
  CountClick++;
  if(CountClick>=IMG.length){
    CountClick=0;
  }
    console.log("coutnClick"+'__'+CountClick);
    for(let newi=0;newi<IMG.length;newi++){
      if(IMG[newi].count==CountClick){
        console.log('nu vot'+IMG[newi].count+'__'+CountClick);
        document.querySelector('img').src=IMG[newi].src;
        document.querySelector('img').setAttribute('alt',IMG[newi].alt);
          window.location.hash='#'+IMG[newi].hash;
      }
    }
}

function GoClick(){
  for(let aj=0;aj<IMG.length;aj++){
    if(window.location.hash=='#'+IMG[aj].hash){
    document.querySelector('img').src=IMG[aj].src;
    document.querySelector('img').setAttribute('alt',IMG[aj].alt);
      console.log(IMG[aj].count+"_"+IMG[aj].hash);
      // if(IMG[aj].srcset==0){
      //   console.log('pusto');
      // }else{
      //   document.querySelector('img').srcset=IMG[aj].srcset;
      //   console.log("nePusto");
      // }
      // localStorage.setItem(CountClick,IMG[aj].count);
    }
  }
}
