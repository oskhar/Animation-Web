// Variable
var udah = false;

// Method
function loop() {
  // Untuk mengganti nama element dari box setiap setengah putaran
  if (udah) {
    document.querySelector('#latar').innerHTML = '<div class="box box1"><div></div></div><div class="box box2"><div></div></div><div class="box box3"><div></div></div><div class="box box4"><div></div></div><div class="box box5"><div></div></div>';
    udah = false;
  }else{
    document.querySelector('#latar').innerHTML = '<div class="boxN boxN1"><div></div></div><div class="boxN boxN2"><div></div></div><div class="boxN boxN3"><div></div></div><div class="boxN boxN4"><div></div></div><div class="boxN boxN5"><div></div></div>';
    udah = true;
  }
}

// Memulai method loop
setInterval(loop, 2500);