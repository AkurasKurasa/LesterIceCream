let containers = document.querySelectorAll('.container')

containers.forEach((container) => {
  container.addEventListener("click", () => {
    container.classList.toggle('active');
  });
});

$('.menu-toggle').click(function(){
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});