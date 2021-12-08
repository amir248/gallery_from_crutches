document.querySelector('#buttonLeft').addEventListener('click',()=>{
  // console.log("buttonLeftClick");
  CountClick--;
  if(CountClick<=-1){
    CountClick=IMG.length;
    // console.log(CountClick<IMG.length);
  }
    // console.log("coutnClick"+'__'+CountClick);
    for(let newi=0;newi<IMG.length;newi++){
      if(IMG[newi].count==CountClick){
        // console.log('nu vot'+IMG[newi].count+'__'+CountClick);
        document.querySelector('img').src=IMG[newi].src;
        document.querySelector('img').setAttribute('alt',IMG[newi].alt);
          window.location.hash='#'+IMG[newi].hash;
      }
    }
});
document.querySelector('#buttonRight').addEventListener('click',()=>{
  // console.log("buttonRightClick");
  CountClick++;
  if(CountClick>=IMG.length){
    CountClick=0;
  }
    // console.log("coutnClick"+'__'+CountClick);
    for(let newi=0;newi<IMG.length;newi++){
      if(IMG[newi].count==CountClick){
        // console.log('nu vot'+IMG[newi].count+'__'+CountClick);
        document.querySelector('img').src=IMG[newi].src;
        document.querySelector('img').setAttribute('alt',IMG[newi].alt);
          window.location.hash='#'+IMG[newi].hash;
      }
    }
});
