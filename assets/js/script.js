// var entrer = document.getElementById('paper');

// entrer.addEventListener('click', function () {
//     document.getElementById('result').outerHTML += `You Win !`;
// })

// paper.addEventListener('click', function () {
//     document.getElementById('content').style.display = 'none';
// })








// -------------------Drag & Drop ------------------------
var target = document.getElementById('lerond');
var sign = document.getElementById('paper');
var sign2 = document.getElementById('rock');
var sign3 = document.getElementById('scissors');
console.log('target')

target.addEventListener ('dragover', function(ev) {
    console.log('inDragOver')
    ev.preventDefault();
  })


  //   ------------------------Paper----------------------
sign.addEventListener('dragstart', function(ev) {
    console.log('inDragStart')
    ev.dataTransfer.setData("text", ev.target.id);
  })

    //   ------------------------Rock----------------------
sign2.addEventListener('dragstart', function(ev) {
    console.log('inDragStart')
    ev.dataTransfer.setData("text", ev.target.id);
  })

    //   ------------------------Scissors----------------------
sign3.addEventListener('dragstart', function(ev) {
    console.log('inDragStart')
    ev.dataTransfer.setData("text", ev.target.id);
  })
  
  target.addEventListener('drop', function(ev) {
      console.log('inDrop')
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  })