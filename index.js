var a, b, c

let homeNum = document.getElementById("home-num")
let awayNum = document.getElementById("away-num")

let homeNumValue = 0
let awayNumValue = 0

homeNum.setAttribute("value", homeNumValue)
awayNum.setAttribute("value", awayNumValue)

function increaseScore(a,b){
    if(b < 1){
        homeNumValue += a
        homeNum.setAttribute("value", homeNumValue)
    }
    else{
        awayNumValue += a
        awayNum.setAttribute("value", awayNumValue)
    }
}





let foulCountHome = document.getElementById('foul-count-home')
let foulCountAway = document.getElementById('foul-count-away')

let foulHome = 0
let foulAway = 0

foulCountHome.textContent = foulHome
foulCountAway.textContent = foulAway


function foulPlus(c){
    if(c < 1){
        foulHome++
        foulCountHome.textContent = foulHome
    }
    else{
        foulAway++
        foulCountAway.textContent = foulAway
    }
}


// console.log(homeNum.getAttribute("value"))
// console.log(awayNum.getAttribute("value"))
console.log("go")
console.log(homeNumValue)