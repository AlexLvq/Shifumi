
// ------------------- Drag & Drop ------------------------

var target = document.getElementById('lerond');
var target2 = document.getElementById('lerond2');
var sign = document.getElementById('paper');
var sign2 = document.getElementById('rock');
var sign3 = document.getElementById('scissors');
var signsCpu = ['rock', 'paper', 'scissors'];
var cpu = ['rock', 'paper', 'scissors'];


target.addEventListener('dragover', function (ev) {
    ev.preventDefault();
})

//   ------------------------Rock----------------------
sign2.addEventListener('dragstart', function (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
})

//   ------------------------Paper----------------------
sign.addEventListener('dragstart', function (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
})

//   ------------------------Scissors----------------------
sign3.addEventListener('dragstart', function (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
})

target.addEventListener('drop', function (ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
})




// ------------------- Lancement Game ------------------------
target.addEventListener('drop', function (e) {
    e.preventDefault();
    winner(signsCpu[random(0, 2)], target.firstChild.id);
})


// -------------------------- Game ---------------------------
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function winner(cpu, user) {

    console.log('cpu', cpu)
    console.log('user', user)
}


// -------------------------- Apparition jeu CPU ---------------------------
cpu.addEventListener('drop', function (r){
    r.preventDefault();
    winner(signsCpu[random(0,2)], target2.firstChild.id);
})


var win;
var loose;

function win() {
    if ((you == "rock") && (computerChoice == "scissors")(you == "paper") && (computerChoice == "rock")(you == "scissors") && (computerChoice == "paper"));
    alert('YOU WIN');
}

function loose() {
    if ((computerChoice == "rock") && (you == "scissors")(computerChoice == "paper") && (you == "rock")(computerChoice == "scissors") && (you == "paper"));
    alert('YOU LOOSE');
}

    // if (cpu == "rock") {
    //     if (user == "paper") {
    //         userScore++;
    //         changeColor('lerond');
    //     } else if (user == "scissors") {
    //         computerScore++;
    //         changeColor('computer')
    //     }
    // } else if (cpu == "paper") {
    //     if (user == "rock") {
    //         computerScore++;
    //         changeColor('computer')
    //     } else if (user == "scissors") {
    //         userScore++;
    //         changeColor('lerond')
    //     }
    // } else if (cpu == "scissors") {
    //     if (user == "rock") {
    //         userScore++;
    //         changeColor('lerond')
    //     } else if (user == "paper") {
    //         computerScore++;
    //         changeColor('computer')
    //     }
    // }

console.log()