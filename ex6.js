var addClosure = (() =>{
  var counter = 0;
  reture () =>{
    conuter +=1;
    console.log(counter);
  }
})();
addClosure();
addClosure();
addClosure();
