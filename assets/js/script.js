let userChoice = ''
let opponentChoice = ''
let winner = ''
let counter_user = 0
let counter_opponent = 0
let button_accessibility = true


function startGame() {
    document.getElementById("initial_start").style.display = 'none'
    document.getElementById("after_start_1").style.display = 'grid'
    document.getElementById("after_start_2").style.display = 'flex'
    document.getElementById("message_result").style.display = 'flex'
    document.getElementById("message_result").innerText = "What's your choice ?"
}


function restartGame() {
    document.getElementById("initial_start").style.display = 'flex'
    document.getElementById("after_start_1").style.display = 'none'
    document.getElementById("after_start_2").style.display = 'none'
    document.getElementById("message_result").style.display = 'none'
    counter_user = 0
    counter_opponent = 0
    document.getElementById('score_user').innerText = counter_user
    document.getElementById('score_opponent').innerText = counter_opponent
    document.getElementById('screen_user').innerHTML = ''
    document.getElementById('screen_opponent').innerHTML = ''
    document.getElementById('message_result').innerText = ''
    colorizeStatus('')
}


function switchAccessibilityButtons() {
    button_accessibility == true ? disableButtons() : enableButtons()
}
function disableButtons() {
    document.getElementById('buttonUserFist').disabled = true
    document.getElementById('buttonUserPalm').disabled = true
    document.getElementById('buttonUserScissors').disabled = true
    document.getElementById('buttonUserFist').style.backgroundColor = 'oklch(55.6% 0 0)'
    document.getElementById('buttonUserPalm').style.backgroundColor = 'oklch(55.6% 0 0)'
    document.getElementById('buttonUserScissors').style.backgroundColor = 'oklch(55.6% 0 0)'
    button_accessibility = false
}
function enableButtons() {
    document.getElementById('buttonUserFist').disabled = false
    document.getElementById('buttonUserPalm').disabled = false
    document.getElementById('buttonUserScissors').disabled = false
    document.getElementById('buttonUserFist').style.backgroundColor = 'oklch(82.7% 0.119 306.383)'
    document.getElementById('buttonUserPalm').style.backgroundColor = 'oklch(82.7% 0.119 306.383)'
    document.getElementById('buttonUserScissors').style.backgroundColor = 'oklch(82.7% 0.119 306.383)'
    button_accessibility = true
}


function getChoice(choice) {
    let html_element
    userChoice = choice
    switch (userChoice) {
        case 'fist':
            // html_element = "<button class='btn border border-1 aspect-square rounded-md bg-purple-300 w-[70%] flex justify-center items-center'><img class='w-4/5 h-4/5' src='assets/icons/hand-back-fist-regular.svg' alt='Rock'></button>"
            html_element = "<button class='btn border border-1 aspect-square rounded-md bg-purple-300 w-[58%] flex justify-center items-center'><img class='w-4/5 h-4/5 rotate-90' src='assets/icons/hand-back-fist-regular.svg' alt='Rock'></button>"
            break
        case 'palm':
            // html_element = "<button class='btn border border-1 aspect-square rounded-md bg-purple-300 w-[70%] flex justify-center items-center'><img class='w-4/5 h-4/5' src='assets/icons/hand-regular.svg' alt='Paper'></button>"
            html_element = "<button class='btn border border-1 aspect-square rounded-md bg-purple-300 w-[58%] flex justify-center items-center'><img class='w-4/5 h-4/5 rotate-90' src='assets/icons/hand-regular.svg' alt='Paper'></button>"
            break
        case "scissors":
            // html_element = "<button class='btn border border-1 aspect-square rounded-md bg-purple-300 w-[70%] flex justify-center items-center'><img class='w-4/5 h-4/5' src='assets/icons/hand-scissors-regular.svg' alt='Scissors'></button>"
            html_element = "<button class='btn border border-1 aspect-square rounded-md bg-purple-300 w-[58%] flex justify-center items-center'><img class='w-4/5 h-4/5 transform scale-x-[-1]' src='assets/icons/hand-scissors-regular.svg' alt='Scissors'></button>"
            break
    }
    document.getElementById('screen_user').innerText = userChoice
    document.getElementById('screen_user').innerHTML = html_element
    html_element_opponent = getRandomChoiceOpponent()
    message = comparisonElement(userChoice, opponentChoice)
    document.getElementById('message_result').innerText = 'Waiting for opponent'
    document.getElementById('message_result').style.backgroundColor = 'oklch(95.4% 0.038 75.164)'
    document.getElementById('message_result').style.color = 'oklch(27.9% 0.077 45.635)'
    document.getElementById('screen_opponent').innerHTML = ''
    switchAccessibilityButtons()
    setTimeout(() => {
        displayOpponentChoiceAndStatus(html_element_opponent, message, counter_user, counter_opponent)
    }, 500)
}


function displayOpponentChoiceAndStatus(html_element, message, counter_user, counter_opponent) {
    document.getElementById('screen_opponent').innerHTML = html_element
    document.getElementById('message_result').innerText = message
    document.getElementById('score_user').innerText = counter_user
    document.getElementById('score_opponent').innerText = counter_opponent
    colorizeStatus(message)
    switchAccessibilityButtons()
}


function colorizeStatus(status) {
    switch (status) {
        case 'VICTORY':
            document.getElementById('message_result').style.backgroundColor = 'green'
            document.getElementById('message_result').style.color = 'white'
            document.getElementById('message_result').style.borderTop = '3px solid oklch(27.9% 0.077 45.635)'
            incrementScoreAnimation('player')
            break
        case 'DEFEAT':
            document.getElementById('message_result').style.backgroundColor = 'red'
            document.getElementById('message_result').style.color = 'white'
            document.getElementById('message_result').style.borderTop = '3px solid oklch(27.9% 0.077 45.635)'
            incrementScoreAnimation('opponent')
            break
        default: // in case of equality
            document.getElementById('message_result').style.backgroundColor = 'oklch(95.4% 0.038 75.164)'
            document.getElementById('message_result').style.color = 'oklch(27.9% 0.077 45.635)'
            break
    }
}


function getRandomChoiceOpponent() {
    let html_element
    getRandomInt = (max) => Math.floor(Math.random() * max)
    let randomInt = getRandomInt(3)
    switch (randomInt) {
        case 0:
            opponentChoice = "fist"
            // html_element = "<button class='btn border border-1 aspect-square rounded-md bg-red-300 w-[70%] flex justify-center items-center'><img class='w-4/5 h-4/5' src='assets/icons/hand-back-fist-regular.svg' alt='Rock'></button>"
            html_element = "<button class='btn border border-1 aspect-square rounded-md bg-red-300 w-[58%] flex justify-center items-center'><img class='w-4/5 h-4/5 rotate-270 transform scale-x-[-1]' src='assets/icons/hand-back-fist-regular.svg' alt='Rock'></button>"
            break
        case 1:
            opponentChoice = "palm"
            // html_element = "<button class='btn border border-1 aspect-square rounded-md bg-red-300 w-[70%] flex justify-center items-center'><img class='w-4/5 h-4/5' src='assets/icons/hand-regular.svg' alt='Paper'></button>"
            html_element = "<button class='btn border border-1 aspect-square rounded-md bg-red-300 w-[58%] flex justify-center items-center'><img class='w-4/5 h-4/5 rotate-270 transform scale-x-[-1]' src='assets/icons/hand-regular.svg' alt='Paper'></button>"
            break
        case 2:
            opponentChoice = "scissors"
            // html_element = "<button class='btn border border-1 aspect-square rounded-md bg-red-300 w-[70%] flex justify-center items-center'><img class='w-4/5 h-4/5' src='assets/icons/hand-scissors-regular.svg' alt='Scissors'></button>"
            html_element = "<button class='btn border border-1 aspect-square rounded-md bg-red-300 w-[58%] flex justify-center items-center'><img class='w-4/5 h-4/5' src='assets/icons/hand-scissors-regular.svg' alt='Scissors'></button>"
            break
        default:
            break
    }
    return html_element
}


function comparisonElement(userChoice, opponentChoice) {
    switch (userChoice) {
        case 'fist':
            if (opponentChoice == 'fist') { winner = 'equality' }
            if (opponentChoice == 'palm') { winner = 'opponent' }
            if (opponentChoice == 'scissors') { winner = 'user' }
            break
        case 'palm':
            if (opponentChoice == 'fist') { winner = 'user' }
            if (opponentChoice == 'palm') { winner = 'equality' }
            if (opponentChoice == 'scissors') { winner = 'opponent' }
            break
        case 'scissors':
            if (opponentChoice == 'fist') { winner = 'opponent' }
            if (opponentChoice == 'palm') { winner = 'user' }
            if (opponentChoice == 'scissors') { winner = 'equality' }
            break
        default:
            break
    }
    if (winner == 'user') {
        counter_user += 1
        message = 'VICTORY'
    } else if (winner == 'opponent') {
        counter_opponent += 1
        message = 'DEFEAT'
    } else {
        message = 'EQUALITY'
    }
    return message
}


function incrementScoreAnimation(Player_or_Opponent) {
    let plusOne
    if (Player_or_Opponent == 'player') {
        plusOne = document.getElementById("plus_one_user");
    }
    if (Player_or_Opponent == 'opponent') {
        plusOne = document.getElementById("plus_one_opponent");
    }
    // reinitialise animation
    plusOne.style.transition = "none";
    plusOne.style.opacity = "0";
    plusOne.style.transform = "translateY(0)";
    void plusOne.offsetWidth;
    // launch animation
    plusOne.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
    plusOne.style.opacity = "1";
    plusOne.style.transform = "translateY(-20px)";
    // stop animation
    setTimeout(() => {
        plusOne.style.opacity = "0";
    }, 500);
}