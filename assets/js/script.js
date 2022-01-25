
// ------------------- Drag & Drop ------------------------

var target = document.getElementById('lerond');
var sign = document.getElementById('paper');
var sign2 = document.getElementById('rock');
var sign3 = document.getElementById('scissors');
console.log('target')

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
