
let resetScoreHome = 0
let resetScoreAway = 0

document.getElementById("home-score").textContent = resetScoreHome
document.getElementById("away-score").textContent = resetScoreAway

let scoreHome = document.getElementById("home-score")
let scoreAway = document.getElementById("away-score")

let point1 = 1
let point2 = 2
let point3 = 3

// SCORE HOME SETTING

function onePoint(){
// resetScore=+
resetScoreHome += 1
scoreHome.textContent = resetScoreHome
}

function twoPoint(){
    // resetScore++
    resetScoreHome += 2
    scoreHome.textContent = resetScoreHome
}

function threePoint(){
    // resetScore++
    resetScoreHome += 3
    scoreHome.textContent = resetScoreHome
}

function onePoint(){
// resetScore=+
resetScoreHome += 1
scoreHome.textContent = resetScoreHome
}

function twoPoint(){
    // resetScore++
    resetScoreHome += 2
    scoreHome.textContent = resetScoreHome
}

function threePoint(){
    // resetScore++
    resetScoreHome += 3
    scoreHome.textContent = resetScoreHome
}

// SCORE AWAY SETTINGS

function onePointAway(){
    // resetScore=+
    resetScoreAway += 1
    scoreAway.textContent = resetScoreAway    
}
    
    function twoPointAway(){
        // resetScore++
        resetScoreAway += 2
        scoreAway.textContent = resetScoreAway    
    }
    
    function threePointAway(){
        // resetScore++
        resetScoreAway += 3
        scoreAway.textContent = resetScoreAway   
     }


     // RESET ALL POINTS


     function resetPointsAll(){

        resetScoreAway = 0
        resetScoreHome = 0
        scoreAway.textContent = resetScoreAway
        scoreHome.textContent = resetScoreHome

     }