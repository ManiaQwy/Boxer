let punchPower = 999;
let timeouted = 1;
let dividleft = "";
let dividright = "";
let score = -2000;


function powerUp() {
    //document.getElementById("placeholder").innerHTML = dividleft + Math.abs(punchPower) + dividright;
    document.getElementById("arrow").style.top = ((punchPower / 2.5)+400) + "px";
    punchPower = punchPower - 9;
    if (punchPower <= -1000) {
        punchPower = 999;
    }
}

function powerDown() {
    document.getElementById("arrow").style.top = ((punchPower / 1.30)) + "px";
    punchPower = punchPower + 9;
    if (punchPower >= 1000) {
        punchPower = -999;
        powerUp()
    }
}

function working() {
    function updatePower() {
        if ((punchPower >= 900 && punchPower <= 999) || (punchPower >= -999 && punchPower <= -900)) {
            timeouted = 20;
            dividleft = "<span style='color:red;'>";
            dividright = "</span>";}
        else if ((punchPower >= 500 && punchPower <= 999) || (punchPower >= -999 && punchPower <= -500)) {
            timeouted = 12;
            dividleft = "<span style='color:red;'>";
            dividright = "</span>";
        } else if ((punchPower >= 100 && punchPower <= 499) || (punchPower >= -500 && punchPower <= -100)) {
            timeouted = 6;
            dividleft = "<span style='color:orange;'>";
            dividright = "</span>";
        } else if ((punchPower >= 0 && punchPower <= 99) || (punchPower >= -100 && punchPower <= 0)) {
            timeouted = 2;
            dividleft = "<span style='color:green;'>";
            dividright = "</span>";
        }

        setTimeout(function () {
            if (score != -2000) {
                return
            } else {
                powerUp();
            }
            updatePower();
        }, timeouted);
    }
    
    updatePower();
}

working();

function ani() {
    document.getElementById('img').className = 'classname';
    score = 999 - Math.abs(punchPower)
    setTimeout(sleep,50)
    
}

function sleep() {
    document.getElementById('bag').className = 'swing';
    console.log("YOU SCORED: " + score + "(weakling)" )
    setTimeout(sleep1,1500)}

function sleep1(){
    toString(score);
    if(score < 10){
    document.getElementById('wynik').innerHTML = "00" + score;}
    else if(score < 100){
    document.getElementById('wynik').innerHTML = "0" + score;}
    else if(score < 1000){
    document.getElementById('wynik').innerHTML = score;}
    else if(score>999){
    document.getElementById('wynik').innerHTML = 999;}
}
