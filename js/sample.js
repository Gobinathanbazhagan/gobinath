// preloader

// buffle.js

const text =  baffle(".data");
text.set({
  
  characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
        speed: 120
});

text.start();
text.reveal(4000);

const iamharsh =  baffle("#name");
iamharsh.set({
  
   characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
         speed: 120
 });

 iamharsh.start();
 iamharsh.reveal(4000);

 var overlay = document.getElementById("preloader");
 window.addEventListener('load', function(){
 	setTimeout(function(){
overlay.style.display = 'none';
 	},2000)
 
 })
