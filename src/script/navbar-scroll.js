export const navbarscroll = (window.onscroll = function () {
  myFunction();
});

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").classList.add("bg-dark");
    document.getElementById("navbar").classList.add("position-fixed");
  } else {
    document.getElementById("navbar").classList.remove("bg-dark");
    document.getElementById("navbar").classList.remove("position-fixed");
  }
}
