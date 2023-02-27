let clickCount = 0;
let clickCheck = 0;
const width = -241.5;




function forwardFunction () {
    clickCount++;
    if(clickCount > 2) {
        clickCount = 0;
        clickCheck = 0;
    }

    translateX = clickCount * width;

    document.getElementById("we_manufacture_slide_container_inner").style.transform = 
    'translateX(' + translateX+ 'px)';
    
    if(clickCheck == 1)  {
        document.getElementById("we_manufacture_slide_container_inner").style.transition = "200ms ease";
        clickCheck = 0;
        } else {
        document.getElementById("we_manufacture_slide_container_inner").style.transition = "1000ms ease";
        }
}

document.getElementById("greater_than").onclick = function() {
    clickCheck = 1;
    forwardFunction ()
    clearInterval (intervalID)
    intervalID = setInterval (forwardFunction, 2000);
};




document.getElementById("lower_than").onclick = function() {
    clickCheck = 1;
    clickCount--;
    if(clickCount < 0) {
        clickCount = 2;
        clickCheck = 0;
    }

    translateX = clickCount * width;

    document.getElementById("we_manufacture_slide_container_inner").style.transform = 
    'translateX(' + translateX+ 'px)';
   
    if(clickCheck == 1) {
        document.getElementById("we_manufacture_slide_container_inner").style.transition = "200ms ease";
        clickCheck = 0;
        } else {
        document.getElementById("we_manufacture_slide_container_inner").style.transition = "1000ms ease";
        } 

    clearInterval (intervalID)
    intervalID = setInterval (forwardFunction, 2000);
}



var intervalID = setInterval (forwardFunction, 2000);




    