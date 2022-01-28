
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
var userChoice;
var putUserScore = document.querySelector('.user-score');
var putCpuScore = document.querySelector('.cpu-score');

var playAgain = document.getElementById('playagain');

var result = document.getElementById('result');

var userScore = 0;
var cpuScore = 0;



// easter egg music
var logo = document.getElementById('logo');
logo.addEventListener('click', function () {
    JouerSon();
});

function JouerSon() {
    var sound = document.getElementById("music");
    if (sound.paused) {
        sound.play();
    }
    else {
        sound.pause();
    }
}
// easter egg music

const ms = window.matchMedia("(min-width: 901px)");

// if (ms.matches) {
//     //   ------------------------Modal---------------------
//     var myModal = document.getElementById('myModal');
//     window.addEventListener('DOMContentLoaded', function () {
//         myModal.style.display = "block";
//         // alert('Click the sign of your choice !')

//         window.addEventListener('click', function () {
//             myModal.style.display = "none";
//         })
//     })
// }

//   --------------------------------------------------------
//   ------------------------MatchMedia----------------------
//   --------------------------Phone-------------------------
//   --------------------------------------------------------
const mq = window.matchMedia("(max-width: 900px)");

if (mq.matches) {

    var lesign = document.querySelectorAll('.sign');
    function eventClick(ev) {
        userChoice = lesign
        if (ev.target.id === 'paper') {
            target.innerHTML = '<img draggable="true" src="assets/img/paper.png" id="paper" alt="paper" class="sign sign-paper espacesign">';
        } else if (ev.target.id === 'rock') {
            target.innerHTML = '<img draggable="true" id="rock" alt="rock" class="sign sign-rock" src="assets/img/rock.png">';
        } else if (ev.target.id === 'scissors') {
            target.innerHTML = '<img draggable="true" id="scissors" alt="scissors" class="sign sign-scissors" src="assets/img/scissors.png">';
        }
        ev.target.removeEventListener('click', eventClick);

        computerChoice = signsCpu[random(0, 2)]
        if (computerChoice === 'paper') {
            target2.innerHTML = '<img draggable="true" src="assets/img/paper.png" id="paper" alt="paper" class="sign sign-paper espacesign">';
        } else if (computerChoice === 'rock') {
            target2.innerHTML = '<img draggable="true" id="rock" alt="rock" class="sign sign-rock" src="assets/img/rock.png">';
        } else if (computerChoice === 'scissors') {
            target2.innerHTML = '<img draggable="true" id="scissors" alt="scissors" class="sign sign-scissors" src="assets/img/scissors.png">';
        }
        setTimeout(function () {
            ev.target.addEventListener('click', eventClick);
            winner(computerChoice, target.firstChild.id);
        }, 700);
    }
    lesign.forEach(function (g) {
        g.addEventListener('click', eventClick);
    })

    //   ------------------------Modal---------------------
    // var tooltip = document.getElementById('anim');
    // tooltip.addEventListener('click', function () {
    //     innerHTML = `blblblblblbl`
    //     // alert('Click the sign of your choice !')

    //     document.addEventListener('click', function () {
    //         tooltip.style.display = "none";
    //     })
    // })

}
//   --------------------------------------------------------
//   ------------------------MatchMedia----------------------
//   --------------------------------------------------------


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
        target2.innerHTML = '<img draggable="true" src="assets/img/paper.png" id="paper" alt="paper" class="sign sign-paper espacesign">';
    } else if (computerChoice === 'rock') {
        target2.innerHTML = '<img draggable="true" id="rock" alt="rock" class="sign sign-rock" src="assets/img/rock.png">';
    } else if (computerChoice === 'scissors') {
        target2.innerHTML = '<img draggable="true" id="scissors" alt="scissors" class="sign sign-scissors" src="assets/img/scissors.png">';
    }
    setTimeout(function () {
        winner(computerChoice, target.firstChild.id);
    }, 700);
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
            result.setAttribute("style", "color:#318e36")
            userScore++;
            putUserScore.innerHTML = userScore;
        } else if (user == "scissors") {
            document.getElementById('result').innerHTML += `You LOSE`;
            result.setAttribute("style", "color:#f53b23")
            cpuScore++;
            putCpuScore.innerHTML = cpuScore;
        }
    } else if (cpu == "paper") {
        if (user == "rock") {
            document.getElementById('result').innerHTML += `You LOSE`;
            result.setAttribute("style", "color:#f53b23")
            cpuScore++;
            putCpuScore.innerHTML = cpuScore;
        } else if (user == "scissors") {
            document.getElementById('result').innerHTML += `You WIN`;
            result.setAttribute("style", "color:#318e36")
            userScore++;
            putUserScore.innerHTML = userScore;
        }
    } else if (cpu == "scissors") {
        if (user == "rock") {
            document.getElementById('result').innerHTML += `You WIN`;
            result.setAttribute("style", "color:#318e36")
            userScore++;
            putUserScore.innerHTML = userScore;
        } else if (user == "paper") {
            document.getElementById('result').innerHTML += `You LOSE`;
            result.setAttribute("style", "color:#f53b23")
            cpuScore++;
            putCpuScore.innerHTML = cpuScore;
        }
        // Egalite
    } if (cpu == "scissors") {
        if (user == "scissors") {
            document.getElementById('result').innerHTML += `Egality`;
            result.setAttribute("style", "color:black")

        }
    } if (cpu == "paper") {
        if (user == "paper") {
            document.getElementById('result').innerHTML += `Egality`;
            result.setAttribute("style", "color:black")
        }
    } if (cpu == "rock") {
        if (user == "rock") {
            document.getElementById('result').innerHTML += `Egality`;
            result.setAttribute("style", "color:black")
        }
    }

    var pourcent = 0;
    var pourcent = document.querySelector('.pourcent');
    if ((userScore + cpuScore) != 0) {
        pourcent.innerHTML = Math.round(userScore / (userScore + cpuScore) * 100) + '%';
    }

    document.getElementById('resultat').style.display = 'block';
    document.getElementById('content').style.opacity = '30%';

    // playAgain.addEventListener('load', function () {
    //     reset();
    //     document.getElementById('content').style.display = 'block';
    //     document.getElementById('resultat').style.display = 'none';
    // })
    setTimeout(function () {
        reset();
        document.getElementById('content').style.opacity = '100%';
        document.getElementById('resultat').style.display = 'none';
    }, 700);
}

console.log('┏━━━┓┏┓━━━━━━━┏┓━━━━━━━━━━━━━━━━━━━┏┓━┏┓━━━━━━━━━━┏┓━━━━━━━━━━━━━━━━━━━\n┃┏━┓┃┃┃━━━━━━━┃┃━━━━━━━━━━━━━━━━━━┏┛┗┓┃┃━━━━━━━━━━┃┃━━━━━━━━━━━━━━━━━━━\n┃┃━┗┛┃┃━┏┓┏━━┓┃┃┏┓━━━━┏━━┓┏━┓━━━━━┗┓┏┛┃┗━┓┏━━┓━━━━┃┃━┏━━┓┏━━┓┏━━┓━━━━━━\n┃┃━┏┓┃┃━┣┫┃┏━┛┃┗┛┛━━━━┃┏┓┃┃┏┓┓━━━━━┃┃━┃┏┓┃┃┏┓┃━━━━┃┃━┃┏┓┃┃┏┓┃┃┏┓┃━━━━━━\n┃┗━┛┃┃┗┓┃┃┃┗━┓┃┏┓┓━━━━┃┗┛┃┃┃┃┃━━━━━┃┗┓┃┃┃┃┃┃━┫━━━━┃┗┓┃┗┛┃┃┗┛┃┃┗┛┃┏┓┏┓┏┓\n┗━━━┛┗━┛┗┛┗━━┛┗┛┗┛━━━━┗━━┛┗┛┗┛━━━━━┗━┛┗┛┗┛┗━━┛━━━━┗━┛┗━━┛┗━┓┃┗━━┛┗┛┗┛┗┛\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┏━┛┃━━━━━━━━━━\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┗━━┛━━━━━━━━━━')

console.log('\n────────────────────▒████▒\n─────────────────░█████▓███░\n───────────────░███▒░░░░░░██\n──────────────▒██▒░░░▒▓▓▓▒░██\n─────────────▓██░░░▒▓█▒▒▒▓▒▓█\n────────────▓█▓─░▒▒▓█─────▓▓█░\n───────────▓█▒░▒▒▒▒█──▓▓▒▒─▓█▒\n──────────▒█▒░▒▒▒▒▓▒─▒▓▒▓▓─▒█░\n──────────█▓░▒▒▒▒▒▓░─▓▒──░░▒█░\n─────────██░▒▒▒▒▒▒█──▓──░▓████████\n────────░█▒▒▒▒▒▒▒▒▓░─█▓███▓▓▓▓██─█▓\n──────▒▓█▓▒▒▒▒▒▒▒▒▓███▓▓████▓▓██──█\n────░███▓▒▒▒▒▓▒▒▒████▒▒░░──████░──██░\n────██▒▒▒▒▒▒▒▒▒▓██▒────────▒██▓────▓█\n───▓█▒▒▒▒▒▒▒▒▓█▓─────▓───▒░░▓──▓────▓█\n───██▒▓▒▒▒▒▒█▓──────▒█▓──▓█░▒──▒░────█\n───██▒▒▓▓▓▒█▓▓───░──▓██──▓█▓▓▓█▓─────█\n───▓█▒██▓▓█▒▒▓█─────░█▓──▒░───░█▓────█\n───░██▓───▓▓▒▒▓▓─────░─────────▒▒─░─░█\n────▓█──▒░─█▒▓█▓──▒───────░─░───█▒──█▒\n─────█──░█░░█▓▒──▓██▒░─░─░─░─░░░█▒███\n─────█▒──▒▒──────▓██████▓─░░░░─▒██▓░\n─────▓█──────────░██▓▓▓██▒─░──░█▒\n──────██▒─────░───░██▓▓▓██▓▒▒▓█▒\n───────░████▒──░───▒█▓▓▓▓▓████▓\n──────▒▓██▓██▒──░───▓█████▓███\n────▒██▓░░░░▓█▓░────░█▒█▒─▒▓█▓\n───▓█▒░░▒▒▒▒▒▓███▓░──▓█▒─▒▓▓█\n──░█▒░▒████▓██▓▓▓██▒───░▓█▓█░\n──▓█▒▒█░─▒───▓█▓▓▓▓▓▓▒▒▓█▓█▓\n──▓█▒█░───────██▓▓▓▓▓█▓▓█▓██\n──▒█▓▓────────░██▓██▓▓▓▓▓▓▓▓█\n───██░────▓▓────█░─█▓▓▓▓▓▓▓─▒█████\n───██░───░──────▓░─▓▓▓▓▓▓▓█─▒█▒░▒██\n──▓█░▓░──▓▓────▒█░─█▓▓▓▓▓▓▓█▒─░░░▒██\n──█─▒██─░──────████▓▓▓▓▓▓▓█▓─░▒▒█▓▓█░\n─▓█─▓▒▓▒░░────▓█▓▓▓▓▓▓▓▓▓▓█░░▒▓█░──▒█\n─▒█░█▒▒█▒───░▓█▓▓▓▓▓▓▓▓▓▓█▓░▒▓▓──▓█▓█\n─█▓▒▓▒▒▓██████▓▓▓▓▓▓▓▓▓▓▓█▒▒▓▓─░█▓▒▒█░\n─█░▓▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▓─▒█▒▒▒▒█\n▒█─█▒▒▒▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓─▒█▒▒▒▒██\n▓█─█▒▒▒▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▓▒░█▒▒▒░▓█\n▓█─█▒▓▒▒▓█▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▒▓░▓░░░░▒█░\n▒█─▓▓▓▓▒▓█▓▓▓▓▓▓▓▓█████▓▓▓▓▒▓░░─▒█▒\n─█▒▓▓▓▓▓▒▓██████████░░██▓█─▒█▓▒▓█░\n─▓█▒█▓▓▓▓▒▓██░─░▒░─────██▒░▓▓▓▒██\n──████▓▓▓██░───────────▓█░▓▒░░▓█░\n────░█████░─────────────██▓─▒██░\n─────────────────────────▓███▒')