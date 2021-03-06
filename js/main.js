function returnDateString() {
  let newDate = new Date();
  return newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate();
}

function returnTimeString() {

  let newDate = new Date(),
    adjustedMinutes = newDate.getMinutes();
  if (adjustedMinutes < 10) {
    adjustedMinutes = '0' + adjustedMinutes;
  }

  let adjustedSecs = newDate.getSeconds();
  if (adjustedSecs < 10) {
    adjustedSecs = '0' + adjustedSecs;
  }

  return newDate.getHours() + ':' + adjustedMinutes;
}


function timeClock() {

  let clock = document.getElementById('jsClock'),
    ellipsis = document.getElementById('jsEllipsis');

  setInterval(function () {
    if (ellipsis.innerHTML.length > 2) {
      ellipsis.innerHTML = '';
    } else {
      ellipsis.innerHTML = ellipsis.innerHTML + `.`
    }
    clock.innerHTML = `${returnDateString()} ${returnTimeString()}`;
  }, 1000)
}

function logThis(event){
  console.log(event.target.classList);
}
function addClockEventListener() {
  let clock = document.querySelectorAll('.bi-clock')[0];
  clock.addEventListener("click", function(e){
    logThis(e);
  })
}
function createInput(){
  console.log(event.currentTarget);
}

function addEventlistenerToElement(elementId, evType, fn){
  document.getElementById(elementId).addEventListener(evType, function(){
    fn(event);
  })
}

function functionNexus(){
  addStringToArray(event, 'moInput');
}

function addStringToArray(event, inputId){
  let inputField = document.getElementById(inputId);
  let str = inputField.value;;
  let para = createParagraph(str, 'momento');
  let firstNode = document.getElementById('firstNode');
  firstNode.appendChild(para);
}
function createParagraph(string, classNames){
  let para = document.createElement('p');
  para.innerHTML = string;
  para.classList.add(classNames);
  return para;
}
// FuncMaster 
timeClock()
addClockEventListener();
addEventlistenerToElement('addButton', 'click', functionNexus);

