//counter design
document.addEventListener("DOMContentLoaded", ()=>{
  function counter(id,start,end,duration) {
      let obj = document.getElementById(id),
      current = start,
      range = end-start,
      increment = end> start ? 1 :-1,
      step = Math.abs(Math.floor(duration/range)),
      timer = setInterval(()=> {
          current += increment;
          obj.textContent = current;
          if(current == end){
              clearInterval(timer);
          }
      },step);   
  }
  counter("count1",0,68,1000);
  counter("count2",0,26,1000);
  counter("count3",0,10000,1000);
  counter("count4",0,13000,1000);
  counter("count5",0,11,1000);
  counter("count6",0,900000,500);
})