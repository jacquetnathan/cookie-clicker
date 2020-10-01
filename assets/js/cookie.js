
// Functions
document.querySelector('body').style.backgroundColor = "blue";

// Function to display the current cookies number and the total of the cookies
function displayScore() {
    document.getElementById("score").innerHTML = `IceCream: ${cookies}`;
    document.getElementById("totalcookies").innerHTML = `${totalcookies} €uros`;
  }


// Function to increase the number of cookie, and if bonusok true then clickValue is 200%
function IncreaseScore() {
    if (bonusok == true){
        cookies += (clickValue * 2);
        totalcookies += (clickValue *2);
    } else {
        cookies += clickValue;
        totalcookies += clickValue;
    }
    if (totalcookies>=100){
        document.querySelector('body').style.backgroundColor = "#1698A7";
    }
     if (totalcookies>=200) {
        document.querySelector('body').style.backgroundColor = "#074850";
     }
     if (totalcookies>=300) {
        document.querySelector('body').style.backgroundColor = "#0C4C36";
     }
     if (totalcookies>=400) {
        document.querySelector('body').style.backgroundColor = "#022B1D";
     }
     if (totalcookies>=500) {
        document.querySelector('body').style.backgroundColor = "#270B62";
     }
     
    
    displayScore();
    EnableButtons();

}

// Function to increase the step of number of click per click
function IncreaseByMultiplier() {
    cookies -= costmulti;
    clickValue = 2 * clickValue;
    costmulti *= 2;
    multiclick.innerHTML = `Multi: ${costmulti} €`;
    EnableButtons();
    displayScore();

}

// Function to increase automatically the number of cookies
function IncreaseByAuto() {
    cookies -= costauto;
    autoclickInterval = window.setInterval(IncreaseScore, 1000);
    costauto *= 2;
    autoclick.innerHTML = `Auto: ${costauto} €`;
    EnableButtons();
    displayScore();
}

// Function to decrease the time and clear the setInterval when is done
function BonusWaitTime() {
    if (bonusTime == 1) {
        bonusok = false;
        bonusclick.innerHTML = `Bonus: ${costbonus} €`;
        clearInterval(interval);
    }else {
        bonusok = true;
        bonusTime--;
        bonusclick.innerHTML = `${bonusTime} sec`
        console.log(bonusTime + " sec");
    }
}

// Function to set the bonus time to 30s and call 
function IncreaseByBonus() {
    cookies -= costbonus;
    bonusTime = 30;
    interval = setInterval(BonusWaitTime, 1000);
    costbonus *= 2;
    EnableButtons();
    displayScore();
}


// Function to call EnableButton with right parameters
function EnableButtons() {
    EnableButton(costmulti, multiclick);
    EnableButton(costauto, autoclick);
    EnableButton(costbonus, bonusclick, bonusok);
}

// Function to check if there is enough cookies to enable the button
function EnableButton(cost, functionname, bonusok = false) {
    if ((cookies >= cost) && (bonusok == false)) {
        functionname.disabled = false;
    } else {
        functionname.disabled = true;
    }

}



// Define button variables
let cookieclick = document.getElementById("cookieclick");
let multiclick = document.getElementById("multiclick");
let autoclick = document.getElementById("autoclick");
let bonusclick = document.getElementById("bonusclick");
// Disable button by default
multiclick.disabled = true;
autoclick.disabled = true;
bonusclick.disabled = true;

// Init of variable
let cookies = 0;
let totalcookies = 0
let clickValue = 1;
let multiplier = 2
let costmulti = 10;
let costauto = 20;
let costbonus = 30;
let bonusok = false;


// Main program
cookieclick.addEventListener('click', IncreaseScore);
multiclick.addEventListener('click', IncreaseByMultiplier);
autoclick.addEventListener('click', IncreaseByAuto);
bonusclick.addEventListener('click', IncreaseByBonus);

