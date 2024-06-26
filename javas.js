

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', handleScroll);
window.addEventListener('scroll', handleScroll);


function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show");
}


