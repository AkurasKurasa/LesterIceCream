const submit = document.querySelector("#form-submit")
const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const input3 = document.querySelector("#input3")
const input4 = document.querySelector("#input4")

submit.addEventListener('click', (e) => {
  window.alert(`Message successfully sent!\nName of sender: ${input1.value} ${input2.value}\nEmail: ${input3.value}\nMessage: ${input4.value}`)
})

$('.menu-toggle').click(function(){
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
  });