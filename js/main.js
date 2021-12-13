function returnDateString() {
  let newDate = new Date();
  return newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
}
function returnTimeString(){
  let newDate = new Date(),
  adjustedMinutes = newDate.getMinutes();
  if(adjustedMinutes<10){
    adjustedMinutes = '0'+adjustedMinutes;
  }
  let adjustedSecs = newDate.getSeconds();
  if (adjustedSecs<10){
    adjustedSecs = '0'+adjustedSecs;
  }
  return newDate.getHours() + ':' + adjustedMinutes + ':' + adjustedSecs;
}


console.log(returnDateString() + ' ' + returnTimeString());

let p = document.createElement('p');
p.innerHTML = `${returnDateString()} ${returnTimeString()}`
let body = document.body;

body.appendChild(p);