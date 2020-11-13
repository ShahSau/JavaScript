/**
In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
 */
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  var result;
  // Only change code below this line
  if(strokes==1){
    result = names[0];
  }else if(strokes<= par - 2){
    result = names[1];
  }
  else if(strokes==par - 1){
    result = names[2];
  }
  else if(strokes==par){
    result = names[3];
  }
  else if(strokes==par + 1){
    result = names[4];
  }
  else if(strokes==par + 2){
    result = names[5];
  }
  else if(strokes>= par + 3){
    result = names[6];
  }

  return result;
  // Only change code above this line
}

golfScore(5, 4);

