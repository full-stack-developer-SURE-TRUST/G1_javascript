const colors =["#e1864a", "#cfa387", "#abcf87","#87cfb1", "#2257c3", "#7022c3","#c32279"];

const btn = document.getElementById("btn");
const color = document.getElementById(".color");


btn.addEventListener("click",function(){
  const randomNumber = getrandomNumber();

  document.body.style.background = colors[randomNumber];
  // color.textContent = colors[randomNumber];
})

function getrandomNumber() {
  return Math.floor(Math.random()*colors.length);
}
