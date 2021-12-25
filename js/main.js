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

  return newDate.getHours() + ':' + adjustedMinutes + ':' + adjustedSecs;
}


function timeClock() {

  let clock = document.getElementById('jsClock'),
    tagline = document.getElementById('textContainer'),
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

// FuncMaster 
timeClock()