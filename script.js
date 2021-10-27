let button = document.querySelector('#submit')
let input = document.querySelector('#dob')

let yr = document.querySelector('#year')
let mon = document.querySelector('#month')
let weak = document.querySelector('#week')
let dt = document.querySelector('#day')



button.addEventListener('click',()=>{
  setInterval(()=>{
    let dob = input.value,
   day = new Date(dob),
  today = new Date(),
  time = day.getTime(),
  timenow = today.getTime(),
  value = timenow - time,
  // sec = Math.floor(value/1000),
  // minute = Math.floor(value/(1000*60)),
  // hour = Math.floor(value/(1000*60*60)),
  date = Math.floor(value/(1000*60*60*24)),
  week = Math.floor(value/(1000*60*60*24*7)),
month =Math.floor(value/(1000*60*60*24*30.4375)),
year  = Math.floor(value/(1000*60*60*24*365.25));

yr.innerHTML = year ;
mon.innerHTML = month ;
weak.innerHTML = week ;
dt.innerHTML = date;

},1000)

})
