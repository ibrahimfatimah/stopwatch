let startEl = document.getElementById("start-el");
let stopEl = document.getElementById("stop-el");
let resetEl = document.getElementById("reset-el");

let hour = 00;
let minute = 00;
let second = 00;
let millisecond = 00;

let interval;

function start() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
};
function stop() {
    clearInterval(interval);
};
function reset() {
    clearInterval(interval);
    clearFields();
}

function startTimer(){
   if (interval) {
    millisecond++;
       
        if (millisecond == 100){
            second++;
            millisecond = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
        
        let hourEl = hour;
        let minuteEl = minute;
        let secondEl = second;
        let milliEl = millisecond;


        if (hour < 10) {
            hourEl = "0" + hourEl;
        }

        if (minute < 10) {
            minuteEl = "0" + minuteEl;
            
       }

        if (second < 10) {
            secondEl = "0" + secondEl;
            
        }

        if (millisecond < 10) {
            milliEl = "0" + milliEl
            
        }

        document.getElementById("hr").innerHTML = hourEl;
        document.getElementById("min").innerHTML = minuteEl;
        document.getElementById("sec").innerHTML = secondEl;
        document.getElementById("mill").innerHTML = milliEl
        
        // console.log(hourEl)
        // console.log(minuteEl)
        // console.log(secondEl)
        // console.log(milliEl)

   }
    
}

function clearFields(){
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
    
        document.getElementById("hr").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
        document.getElementById("mill").innerHTML = "00"
        
  
}