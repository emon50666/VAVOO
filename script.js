// toggle menu in mobile

document.querySelector(".toggle_menu").addEventListener("click", function () {
    let mobile_menu = document.querySelector(".mobile_menu");
    if (mobile_menu.style.display === "none") {
      mobile_menu.style.display = "block";
      mobile_menu.style.top = "15%";
    } else {
      mobile_menu.style.display = "none";
    }
  });
  // scroll down to fixed header
  window.addEventListener("scroll", function () {
    let header = document.querySelector(".myHeader");
  
    if (window.scrollY >= 100) {
      // Add the 'fixed-header' class to make the header sticky
      header.classList.add("fixed-header");
    } else {
      // Remove the 'fixed-header' class to unstick the header
      header.classList.remove("fixed-header");
    }
  });
  