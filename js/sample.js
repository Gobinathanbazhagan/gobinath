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


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);