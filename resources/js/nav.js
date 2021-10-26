window.addEventListener("scroll", function() {
    var logo = document.getElementById("logo");
    var navbar = document.getElementById("content-navbar");
    var content = document.getElementById("content");
  
    if (logo.getBoundingClientRect().bottom < 0) {
        navbar.classList.add("is-fixed-top");
        content.style.marginTop = navbar.getBoundingClientRect().height + "px";
    } else {
        navbar.classList.remove("is-fixed-top");
        content.style.marginTop = "0px";
    }
  });