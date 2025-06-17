// ===================== All Documentation
// main manu document
let manu = document.querySelector("#game_manu")
let game_area = document.querySelector("#game_area .container")
let start = document.querySelector(".buttons .start_btn")
let quit = document.querySelector(".buttons .quit_btn")
let restart = document.querySelector(".restart_btn")
let area = document.querySelector(".input_area")
// players document
let player1 = document.querySelector(".player1")
let player2 = document.querySelector(".player2")
let player3 = document.querySelector(".player3")
let player4 = document.querySelector(".player4")
// players input 
let player1_input = document.querySelector(".player1_input")
let player2_input = document.querySelector(".player2_input")
let player3_input = document.querySelector(".player3_input")
let player4_input = document.querySelector(".player4_input")
// players button 
let player1_btn = document.querySelector(".player1_btn")
let player2_btn = document.querySelector(".player2_btn")
let player3_btn = document.querySelector(".player3_btn")
let player4_btn = document.querySelector(".player4_btn")
// ======= Result Part Document
let result_info = document.querySelector("#result .win_part")
let reveal = document.querySelector(".reveal")
let chearing = document.querySelector(".chearing")
// players win part
let player1_win = document.querySelector(".player1_win")
let player2_win = document.querySelector(".player2_win")
let player3_win = document.querySelector(".player3_win")
let player4_win = document.querySelector(".player4_win")
// players lost part
let player1_lost = document.querySelector(".player1Lost")
let player2_lost = document.querySelector(".player2Lost")
let player3_lost = document.querySelector(".player3Lost")
let player4_lost = document.querySelector(".player4Lost")
// error tooltips 
let error = document.querySelector(".error")
// guessig checkbook
let guess = document.querySelector(".guess")
let terms_miss = document.querySelector(".terms_miss")
let i = 0
terms_miss.innerHTML = i

// ===================== Functions Part Start
 
// function for limit value 
function inputLimit() {
    error.style.display = "block"
    error.style.width = "250px"
    error.innerHTML = "Please input value between 1-10"
}

// function for empty input
function inputEmpty() {
    error.style.display = "block"
    error.style.width = "200px"
    error.innerHTML = "Please Put A Value!"
}

// function for result information
function outcome() {
    result_info.style.display = "block"
    result_info.style.display = "flex"
    game_area.style.display = "none"
    reveal.innerHTML = "The Value Was" + "<br>" + player1_input.value
    chearing.style.display = "block"
    manu.style.display = "block"
    restart.style.display = "block"
    start.style.display = "none"
}

// ===================== Functions part End

// ===================== TRansition From Manu to Game
start.addEventListener("click", () => {
    
    manu.style.display = "none"
    game_area.style.display = "block"
})

// ===================== Player 1 moment
player1_btn.addEventListener("click", () => {
    
    error.style.display = "none"

    if (player1_input.value == "") {

        inputEmpty() /*Tooltips*/
    } else {

        if (player1_input.value < 1 , player1_input.value > 10) {

            inputLimit() /*Tooltips*/
        } else {
            player1.style.display = "none"
            player2.style.display = "block"
            player2.style.display = "flex"
            guess.style.display = "block"
            guess.style.display = "flex"
        }
    }
})

// ===================== Player 2 moment
player2_btn.addEventListener("click", () => {

    error.style.display = "none"

    if (player2_input.value == "") {

        inputEmpty() /*Tooltips*/
    } else {

        if (player2_input.value < 1 , player2_input.value > 10) {

            inputLimit() /*Tooltips*/
        } else {

            if (player2_input.value == player1_input.value) {

                outcome()
                player2_win.style.display = "block"
                player2_win.style.display = "flex"
                player1_lost.style.display = "block"
                player2_lost.style.display = "none"
                player3_lost.style.display = "block"
                player4_lost.style.display = "block"

            } else {

                i++
                terms_miss.innerHTML = i
                if (i == 5) {
                    player2.style.display = "none"
                    player3.style.display = "block"
                    player3.style.display = "flex"
                    guess.style.display = "block"
                    guess.style.display = "flex"
                    terms_miss.innerHTML = 0
                    i = 0
                }
            }
        }
    }
})

// ===================== Player 3 moment
player3_btn.addEventListener("click", () => {

    error.style.display = "none"

    if (player3_input.value == "") {
        inputEmpty() /*Tooltips*/
    } else {

        if (player3_input.value < 1 , player3_input.value > 10) {

            inputLimit() /*Tooltips*/
        } else {

            if (player3_input.value == player1_input.value) {

                outcome()
                player3_win.style.display = "block"
                player1_lost.style.display = "block"
                player2_lost.style.display = "block"
                player3_lost.style.display = "none"
                player4_lost.style.display = "block"

            } else {

                i++
                terms_miss.innerHTML = i
                if (i == 5) {
                    player3.style.display = "none"
                    player4.style.display = "block"
                    player4.style.display = "flex"
                    guess.style.display = "block"
                    guess.style.display = "flex"
                    terms_miss.innerHTML = 0
                    i = 0
                }
            }
        }
    }
})

// ===================== Player 4 moment
player4_btn.addEventListener("click", () => {

    error.style.display = "none"

    if (player4_input.value == "") {

        inputEmpty() /*Tooltips*/
    } else {

        if (player4_input.value < 1 , player4_input.value > 10) {

            inputLimit() /*Tooltips*/
        } else {

            if (player4_input.value == player1_input.value) {

                outcome()
                player4_win.style.display = "block"
                player1_lost.style.display = "block"
                player2_lost.style.display = "block"
                player3_lost.style.display = "block"
                player4_lost.style.display = "none"

            } else {

                i++
                terms_miss.innerHTML = i
                if (i == 5) {

                    outcome()
                    player1_win.style.display = "block"
                    player1_lost.style.display = "none"
                    player2_lost.style.display = "block"
                    player3_lost.style.display = "block"
                    player4_lost.style.display = "block"
                }
            }
        }
    }
})

// ===================== Restart button part
restart.addEventListener("click", () => {

    window.location.reload(true)

})

// ===================== Quit button part
quit.addEventListener("click", () => {

    window.close(true)
})

