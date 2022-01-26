
// ------------------- Var ------------------------
var target = document.getElementById('lerond');
var target2 = document.getElementById('lerond2');
var sign = document.getElementById('paper');
var sign2 = document.getElementById('rock');
var sign3 = document.getElementById('scissors');
var signsCpu = ['rock', 'paper', 'scissors'];
var cpu = ['rock', 'paper', 'scissors'];
var cpusign = document.querySelectorAll('.sign-')
var computerChoice;
var putUserScore = document.querySelector('.user-score');
var putCpuScore = document.querySelector('.cpu-score');

var playAgain = document.getElementById('playagain');

var imgDrag = document.getElementById('lerond2');

var result = document.getElementById('result');

var userScore = 0;
var cpuScore = 0;

var win;
var lose;

//   ------------------------DragnDrop----------------------
target.addEventListener('dragover', function (ev) {
    ev.preventDefault();
})


//-------Changement de couleur----
target.addEventListener('dragenter', function (e) {
    e.preventDefault();
    this.style.borderColor = "#ffd500";
})
target.addEventListener('dragleave', function (a) {
    a.preventDefault();
    this.style.borderColor = "#000000"
})

//------------Rock-------
sign2.addEventListener('dragstart', function (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
})

//------------Paper---------
sign.addEventListener('dragstart', function (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
})

//-----------Scissors----------
sign3.addEventListener('dragstart', function (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
})

target.addEventListener('drop', function (ev) {
    ev.preventDefault();
    this.style.borderColor = "#000000"
    var data = ev.dataTransfer.getData("text");
    ev.target.innerHTML = document.getElementById(data).outerHTML;



    computerChoice = signsCpu[random(0, 2)]
    if (computerChoice === 'paper') {
        imgDrag.innerHTML = '<img draggable="true" src="assets/img/paper.png" id="paper" alt="paper" class="sign sign-paper espacesign">';
    } else if (computerChoice === 'rock') {
        imgDrag.innerHTML = '<img draggable="true" id="rock" alt="rock" class="sign sign-rock" src="assets/img/rock.png">';
    } else if (computerChoice === 'scissors') {
        imgDrag.innerHTML = '<img draggable="true" id="scissors" alt="scissors" class="sign sign-scissors" src="assets/img/scissors.png">';
    }
    setTimeout(function () {
        winner(computerChoice, target.firstChild.id);
    }, 1000);
})
function reset() {
    target.innerHTML = '';
    target2.innerHTML = '';
    result.innerHTML = '';
}


// -------------------------- Game ---------------------------
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function winner(cpu, user) {

    if (cpu == "rock") {
        if (user == "paper") {
            document.getElementById('result').innerHTML += `You WIN`;
            userScore++;
            putUserScore.innerHTML = userScore;
        } else if (user == "scissors") {
            document.getElementById('result').innerHTML += `You LOSE`;
            cpuScore++;
            putCpuScore.innerHTML = cpuScore;
        }
    } else if (cpu == "paper") {
        if (user == "rock") {
            document.getElementById('result').innerHTML += `You LOSE`;
            cpuScore++;
            putCpuScore.innerHTML = cpuScore;
        } else if (user == "scissors") {
            document.getElementById('result').innerHTML += `You WIN`;
            userScore++;
            putUserScore.innerHTML = userScore;
        }
    } else if (cpu == "scissors") {
        if (user == "rock") {
            document.getElementById('result').innerHTML += `You WIN`;
            userScore++;
            putUserScore.innerHTML = userScore;
        } else if (user == "paper") {
            document.getElementById('result').innerHTML += `You LOSE`;
            cpuScore++;
            putCpuScore.innerHTML = cpuScore;
        }
        // Egalite
    } if (cpu == "scissors") {
        if (user == "scissors") {
            document.getElementById('result').innerHTML += `Egality`;
        }
    } if (cpu == "paper") {
        if (user == "paper") {
            document.getElementById('result').innerHTML += `Egality`;
        }
    } if (cpu == "rock") {
        if (user == "rock") {
            document.getElementById('result').innerHTML += `Egality`;
        }
    }


    document.getElementById('resultat').style.display = 'block';
    document.getElementById('content').style.display = 'none';

    playAgain.addEventListener('click', function () {
        reset();
        document.getElementById('content').style.display = 'block';
        document.getElementById('resultat').style.display = 'none';
    })
}