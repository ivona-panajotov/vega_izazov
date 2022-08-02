(function(){
    function invoke(params){
        Promise.resolve()
        .then(()=>console.log(params))
    }
  console.log(1)
  setTimeout(function(){console.log(2),0});
  invoke(3)
  setTimeout(function(){console.log(4),100})
  process.nextTick(function(){console.log(5)},0)
  console.log(6)

})()