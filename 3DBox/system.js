var penanda = 10,
   pin1 = true;
 function scrollFun(PSS) {
   if ((PSS-500) > penanda) {
     document.querySelector('content').style.transform = 'rotatex('+(0-(((PSS-500)-((PSS-500)%penanda))/penanda))+'deg) rotateY('+(0+(((PSS-500)-((PSS-500)%penanda))/penanda))+'deg)';
   }
 }
 window.scrollTo(0,0);
 window.onscroll = function() {myFunction()};
 function myFunction() { 
     if (window.pageYOffset > 200 && pin1) {
       document.querySelector('content').style.animation = 'muter1 1200ms forwards 500ms';
       document.getElementById('depan').style.animation = 'muter2 1200ms forwards 500ms';
       document.getElementById('bawah').style.animation = 'muter2 1200ms forwards 500ms';
       document.getElementById('kanan').style.animation = 'muter2 1200ms forwards 500ms';
       document.getElementById('kiri').style.animation = 'muter2 1200ms forwards 500ms';
       document.getElementById('atas').style.animation = 'muter2 1200ms forwards 500ms';
       document.getElementById('belakang').style.animation = 'muter2 1200ms forwards 500ms';
     window.scrollTo(0,0);
       pin1 = false;
     }
   if (window.pageYOffset > 500) { scrollFun(window.pageYOffset); }else if(pin1 == false){document.querySelector('content').style.transform = 'rotatex(0deg) rotateY(0deg)';}
 }