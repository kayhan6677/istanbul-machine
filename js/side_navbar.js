const btn = document.getElementById ("main_container");
const styles = getComputedStyle(btn);
let left = styles.getPropertyValue("left");


document.getElementById("navbar_button").onclick = function() {myFunction()};

function myFunction () {
  if (left == "0px") {
    document.getElementById("main_container").style.left = "50%";
    document.getElementById("main_container").style.padding = "0 0 0 15px";
    document.getElementById("left_side_container").style.left = "0";
    left = "50%";
  } else {
    document.getElementById("main_container").style.left = "0px";
    document.getElementById("main_container").style.padding = "0 0 0 0";
    document.getElementById("left_side_container").style.left = "-50%";
    left = "0px";
  }
};

document.getElementById("sidebar_button").onclick = function() {myFunction2()};

function myFunction2 () {
    document.getElementById("main_container").style.left = "0px";
    document.getElementById("main_container").style.padding = "0 0 0 0";
    document.getElementById("left_side_container").style.left = "-50%";
    left = "0px";
};