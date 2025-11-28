let barsi=document.getElementById('barsi');
let lift_div=document.getElementById('lift_div');


barsi.onclick = function() {
    if (lift_div.style.display === "flex") {
    lift_div.style.display = "none";
  } else {
    lift_div.style.display = "flex";
  }
};
