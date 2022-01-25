
// ------------------- Drag & Drop ------------------------

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

var userScore = 0;
var cpuScore = 0;

var win;
var loose;


target.addEventListener('dragover', function (ev) {
    ev.preventDefault();
})


//   ------------------------Changement de couleur----------------------
target.addEventListener('dragenter', function (e) {
    e.preventDefault();
    this.style.borderColor = "red";
})
target.addEventListener('dragleave', function (a) {
    a.preventDefault();
    this.style.borderColor = "#212529"
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
    computerChoice = random();
    cpusign.className = `.sign-${computerChoice}`
    winner(signsCpu[random(0, 2)], target.firstChild.id);
})
// -------------------------- Apparition jeu CPU ---------------------------
// cpu.addEventListener('drop', function (r) {
//     r.preventDefault();

//     winner(signsCpu[random(0, 2)], target2.firstChild.id);
// })



// -------------------------- Win / Loose / Egality ---------------------------





// -------------------------- Game ---------------------------
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function winner(cpu, user) {

    if (cpu == "rock") {
        if (user == "paper") {
            document.getElementById('content').style.display = 'none';
            document.getElementById('result').outerHTML += `You WIN`;
            document.getElementById('resultat').style.display = 'block';
            userScore++;
        } else if (user == "scissors") {
            document.getElementById('content').style.display = 'none';
            document.getElementById('result').outerHTML += `You LOOSE`;
            document.getElementById('resultat').style.display = 'block';
            cpuScore++;
        }
    } else if (cpu == "paper") {
        if (user == "rock") {
            document.getElementById('content').style.display = 'none';
            document.getElementById('result').outerHTML += `You LOOSE`;
            document.getElementById('resultat').style.display = 'block';
            cpuScore++;
        } else if (user == "scissors") {
            document.getElementById('content').style.display = 'none';
            document.getElementById('result').outerHTML += `You LOOSE`;
            document.getElementById('resultat').style.display = 'block';
            userScore++;
        }
    } else if (cpu == "scissors") {
        if (user == "rock") {
            document.getElementById('content').style.display = 'none';
            document.getElementById('result').outerHTML += `You LOOSE`;
            document.getElementById('resultat').style.display = 'block';
            userScore++;
        } else if (user == "paper") {
            document.getElementById('content').style.display = 'none';
            document.getElementById('result').outerHTML += `You LOOSE`;
            document.getElementById('resultat').style.display = 'block';
            cpuScore++;
        }
        // Egalite
    } if (cpu == "scissors") {
        if (user == "scissors") {
            document.getElementById('content').style.display = 'none';
            document.getElementById('result').outerHTML += `Egality`;
            document.getElementById('resultat').style.display = 'block';
        }
    } if (cpu == "paper") {
        if (user == "paper") {
            document.getElementById('content').style.display = 'none';
            document.getElementById('result').outerHTML += `Egality`;
            document.getElementById('resultat').style.display = 'block';
        }
    } if (cpu == "rock") {
        if (user == "rock") {
            document.getElementById('content').style.display = 'none';
            document.getElementById('result').outerHTML += `Egality`;
            document.getElementById('resultat').style.display = 'block';
        }
    }
}




// -------------------------- Score ---------------------------


putUserScore.innerHTML = userScore;
putCpuScore.innerHTML = cpuScore;
