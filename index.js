var clock = document.querySelector('.clock');
var hourHand = clock.querySelector('.arrows .hour');
var minuteHand = clock.querySelector('.arrows .minute');
var secondHand = clock.querySelector('.arrows .second');

function updateClock() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  hourHand.style.transform = 'rotate(' + (hour * 30) + 'deg)';
  minuteHand.style.transform = 'rotate(' + (minute * 6) + 'deg)';
  secondHand.style.transform = 'rotate(' + (second * 6) + 'deg)';
}

setInterval(updateClock, 1000);
