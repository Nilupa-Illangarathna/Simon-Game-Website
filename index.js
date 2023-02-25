//To start the game
var Start=true;

//this array consists of IDs of 16 buttons
var IdArray=[
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen"
]

//This array stores the sequence
var array =[];


document.addEventListener("click", event => {
    
  if(Start){
    var temp=Math.ceil(16*Math.random());
    array.push(temp);
    ShowThePlayerNextButton(NextButtonProvider(temp));
    Start=false;
  }
    // if     (event.keyCode == 87) {  //W = 87
    //     playSound("sounds\\crash.mp3");
    // }
    // else{
    //     return;
    // }
  });

  // function PlayGame(){
  //   var tempArray=array;

  //   document.addEventListener("click", event => {
    
  //     console.log(event.ID);
  //       if     (event.ID != NextButtonProvider(tempArray[0]) ) {  //W = 87
  //           playSound("sounds\\wrong.mp3");
  //       }
  //       // else{
  //       //     return;
  //       // }
  //     });
  // }
  // PlayGame();

  // This function will show the player next button to be consider
  function ShowThePlayerNextButton(ID){
  var activeButton = document.querySelector("#" + ID);
    activeButton.classList.add("ShowThePlayer");
    setTimeout(function() {
      activeButton.classList.remove("ShowThePlayer");
      setTimeout(function() {
        activeButton.classList.add("ShowThePlayer");
        setTimeout(function() {
          activeButton.classList.remove("ShowThePlayer");
        }, 100);
      }, 100);
    }, 100);
  }
  
  // This function will provide the corresponding ID of the button as a string
  function NextButtonProvider(ButtonNumber){
    switch(ButtonNumber){
        case 1  : return IdArray[0] ;break;
        case 2  : return IdArray[1] ;break;
        case 3  : return IdArray[2] ;break;
        case 4  : return IdArray[3] ;break;
        case 5  : return IdArray[4] ;break;
        case 6  : return IdArray[5] ;break;
        case 7  : return IdArray[6] ;break;
        case 8  : return IdArray[7] ;break;
        case 9  : return IdArray[8] ;break;
        case 10 : return IdArray[9] ;break;
        case 11 : return IdArray[10] ;break;
        case 12 : return IdArray[11] ;break;
        case 13 : return IdArray[12] ;break;
        case 14 : return IdArray[13] ;break;
        case 15 : return IdArray[14] ;break;
        case 16 : return IdArray[15] ;break;
    }  
}





// Adding sounds when clicking
function SoundByClicking(Letter){
    switch(Letter){
        case '1'  : playSound("sounds\\one.mp3");break;
        case '2'  : playSound("sounds\\two.wav");break;
        case '3'  : playSound("sounds\\three.wav");break;
        case '4'  : playSound("sounds\\four.wav");break;
        case '5'  : playSound("sounds\\five.wav");break;
        case '6'  : playSound("sounds\\six.wav");break;
        case '7'  : playSound("sounds\\seven.wav");break;
        case '8'  : playSound("sounds\\eight.wav");break;
        case '9'  : playSound("sounds\\nine.wav");break;
        case '10' : playSound("sounds\\ten.wav");break;
        case '11' : playSound("sounds\\eleven.mp3");break;
        case '12' : playSound("sounds\\twelve.mp3");break;
        case '13' : playSound("sounds\\thirteen.mp3");break;
        case '14' : playSound("sounds\\fourteen.mp3");break;
        case '15' : playSound("sounds\\fifteen.wav");break;
        case '16' : playSound("sounds\\sixteen.wav");break;
        default: playSound("sounds\\wrong.mp3");break;
    }  
}


//This function will get the address of the sound track and play it
function playSound(address){
    // Assigning the sound track to a variable
    var snd = new Audio(address);
    // Playing the sound track
    snd.play();
}