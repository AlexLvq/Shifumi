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
console.log('target')

target.addEventListener ('dragover', function(ev) {
    console.log('inDragOver')
    ev.preventDefault();
  })
  
sign.addEventListener('dragstart', function(ev) {
    console.log('inDragStart')
    ev.dataTransfer.setData("text", ev.target.id);
  })
  
  target.addEventListener('drop', function(ev) {
      console.log('inDrop')
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  })