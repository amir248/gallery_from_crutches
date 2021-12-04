console.log('vse-ok!');
// document.querySelector('#json-holder').innerHTML =JSON.stringify(IMG);
console.log(JSON.stringify(IMG));

document.addEventListener("DOMContentLoaded",GoClick);
window.addEventListener("hashchange",GoClick);

function GoClick(){
  for(let aj=0;aj<IMG.length;aj++){
    if(window.location.hash=='#'+IMG[aj].hash){
      console.log(IMG[aj]);
    document.querySelector('img').src=IMG[aj].src;
    document.querySelector('img').setAttribute('alt',IMG[aj].alt);
      if(IMG[aj].srcset==0){
        console.log('pusto');
      }else{
        document.querySelector('img').srcset=IMG[aj].srcset;
        console.log("nePsto");
      }
    }
  }
}
