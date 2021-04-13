let count = 0;
var t;
let timer_is_on = 0;

function timeCount(){
  document.getElementById('stop_watch').innerHTML = count;
  count = count + 1;
  t = setTimeout(timeCount, 1000);
}

//startCount 함수 만들기
function startCount() {
  if (timer_is_on == 0) {
    timer_is_on = 1;
    timeCount(); //타이머 호출
  }
}

//pauseCount 함수 만들기
function pauseCount() {
  timer_is_on = 0;
  clearTimeout(t);
}

function clearCount(){
  timer_is_on = 0;
  clearTimeout(t);
  count = 0;
  document.getElementById('stop_watch').innerHTML = "START!";
}
