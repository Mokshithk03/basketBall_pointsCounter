homeEle = document.getElementById("home-display")
guestEle = document.getElementById("guest-display")

let homePoints = 0
let guestPoints = 0

function increment1ToHome () 
{
    homePoints += 1
    homeEle.textContent = homePoints
}
function increment2ToHome () 
{
    homePoints += 2
    homeEle.textContent = homePoints
}
function increment3ToHome () 
{
    homePoints += 3
    homeEle.textContent = homePoints
}

function increment1ToGuest () 
{
    guestPoints += 1
    guestEle.textContent = guestPoints
}
function increment2ToGuest () 
{
    guestPoints += 2
    guestEle.textContent = guestPoints
}
function increment3ToGuest () 
{
    guestPoints += 3
    guestEle.textContent = guestPoints
}