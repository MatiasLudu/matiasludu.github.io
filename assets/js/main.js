$(document).ready(function(){
  $(this).scrollTop(0);
});

const height = window.innerHeight;
const abilities = height * 1;
const projects = height * 2;
const contact = height * 3;

function goToAbilities(){
    window.scrollTo(0, abilities);
}

function goToProjects(){
    window.scrollTo( 0, projects );
}

function goToContact(){
    window.scrollTo( 0, contact );
}


toTop = document.getElementById("upArrow");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >= height || document.documentElement.scrollTop >= height) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}


function goToTop() {
  document.documentElement.scrollTop = 0;
}


$(window).scroll(function () {
  if ($(document).scrollTop() <= 400) {
    $("#target1").addClass("active");
    $("#target2").removeClass("active");
    $("#target3").removeClass("active");
    $("#target4").removeClass("active");
  }
  if ($(document).scrollTop() >= 750 && $(document).scrollTop() <= 1200) {
    $("#target2").addClass("active");
    $("#target1").removeClass("active");
    $("#target3").removeClass("active");
    $("#target4").removeClass("active");
  }
  if ($(document).scrollTop() >= 1700 && $(document).scrollTop() <= 2000) {
    $("#target3").addClass("active");
    $("#target1").removeClass("active");
    $("#target2").removeClass("active");
    $("#target4").removeClass("active");
  }
  if ($(document).scrollTop() >= 2650) {
    $("#target4").addClass("active");
    $("#target1").removeClass("active");
    $("#target2").removeClass("active");
    $("#target3").removeClass("active");
  }
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () =>{
  document.body.classList.toggle('fondoCodigo');
  btnSwitch.classList.toggle('active');
});






