  (function() {

    var hamburger = {
      navToggle: document.querySelector('.nav-toggle'),
      nav: document.querySelector('nav'),
  
      doToggle: function(e) {
        e.preventDefault();
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('show');
      }
    };
  
    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
    hamburger.nav.addEventListener('dblclick', function(e) { hamburger.doToggle(e); });
  
  }());


  function myFunction() {
    document.getElementById("nav2").classList.toggle("show2");
  }
function myFunction1() {
  document.getElementById("nav3").classList.toggle("show3");
}
function myFunction2() {
  document.getElementById("nav4").classList.toggle("show4");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('#nav-toggle3')) {
  var dropdowns = document.getElementsByClassName("nav3-elements");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show3')) {
      openDropdown.classList.remove('show3');
    }
  }
}
}