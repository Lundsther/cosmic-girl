console.log("Hey there!")

startTime() //Starting the clock and rendering it


function startTime(){
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  var s = today.getSeconds()

  m = checkTime(m)
  s = checkTime(s)

  $ ("#clock").html(h + ":" + m + ":" + s)
  setTimeout(startTime, 500)

}

function checkTime(number) {
  if(number < 10){
    number = "0"+number
  }
  return number

}
//Starting the bomb funtion (will start on click)
function startBomb() {
  //Bomb will tick 10 second
  var bombSeconds = 10
  //Start the first tick
  tick(bombSeconds)
}

function tick(bombSeconds) {
  //Remove a second
bombSeconds = bombSeconds - 1
//Set timeout for 1 second
setTimeout(function(){
  //When one second has passes
  //- check if the bombSeconds is 0 - BOOM
  //If not, then continue to tick
  if(bombSeconds === 0){
    $("#bomb").html("BOOM!")
  }
  else {
    tick(bombSeconds)
    //write out new bombSeconds
    $("#bomb").html(bombSeconds)
}

}, 1000)
}
