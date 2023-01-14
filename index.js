window.onload = function () {
  
    let seconds = 00; 
    let tens = 00; 
    let docTens = document.getElementById("tens")
    let docSeconds = document.getElementById("seconds")
    let startButton = document.getElementById('start-button');
    let stopButton = document.getElementById('stop-button');
    let resetButton = document.getElementById('reset-button');
    let Interval = '';
  
    startButton.onclick = () => {
       clearInterval(Interval);
       Interval = setInterval(runTimer, 10);
    }
    
      stopButton.onclick = () => {
         clearInterval(Interval);
    }
    
  
    resetButton.onclick = () => {
       clearInterval(Interval);
        tens = "00";
        seconds = "00";
        docTens.innerHTML = tens;
        docSeconds.innerHTML = seconds;
    }
    
     
    
    function runTimer () {
      tens++; 
      
      if(tens <= 9){
        docTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        docTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        seconds++;
        docSeconds.innerHTML = "0" + seconds;
        tens = 0;
        docTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        docSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }