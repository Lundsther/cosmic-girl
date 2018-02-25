console.log("Hey there!")
startTime() //Starting the clock and rendering



function startBomb(){ //Starta bomben
  var bombSeconds = 10 //Bomben startar på 10 s
  tick(bombSeconds) //Bomben börjar ticka
}

function tick(bombSeconds){ //Definiera nedräkningen
  console.log(bombSeconds);
  bombSeconds = bombSeconds - 1 //Räknar ner en sekund
  setTimeout(function(){ //Kollar av tiden på nedräkningen
    if(bombSeconds === 0){
      $("#bomb").html("BOOM!") //Smäller om nedräknad till 0
    }else{
      tick(bombSeconds) //Fortsätter ticka om ej 0
      $("#bomb").html(bombSeconds)
    }
  }, 1000) //Upprepar funktionen varje 1000:e millisekund
}


function startTime(){
  var today = new Date();
  var h = today.getHours()
  var m = today.getMinutes()
  var s = today.getSeconds()

  m = checkTime(m)
  s = checkTime(s)

  $("#clock").html(h + ":" + m + ":" + s)

  setTimeout(startTime,500) //Ropar startTime varje 500 millisekund
}


function checkTime(number){ //Lägger till en extra 0:a för siffror under 10
    if (number < 10) {
      number = "0" + number
    }
    return number
}


function changeColor() {
  console.log("I clicked!")
  $("body").css("background-color", "pink")

}
