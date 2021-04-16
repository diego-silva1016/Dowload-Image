const loader = document.querySelector(".loader");
const form = document.querySelector(".formTeste");
const button = document.querySelector(".dowloading")
const progressBar = document.querySelector(".progressBar")
const finish = document.querySelector(".finish")

setTimeout(function(){ 
  loader.style.display = "none";
  form.style.display = "flex"; 
  form.style.flexDirection = "column";
  form.style.alignItems = "center"; 
}, 3500)

button.addEventListener("click", function(){
  button.style.display = "none";
  progressBar.style.display = "inherit";

  setTimeout(function(){ 
    form.style.display = "none";

    finish.style.display = "flex"; 
    finish.style.flexDirection = "column";
    finish.style.alignItems = "center"; 
    finish.style.justifyContent = "center"; 
  }, 3500)
})