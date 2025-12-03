let firesound = new Audio('../media/furnace_sound.ogg');
let r = 0;
let rotation = function(){};
let played = false;

function rotate(elem){
    rotation = 0;
    rotation = setInterval(() => {
        if (r<=358) {
            elem.style.transform = "rotate(" + r + "deg)";
            //r = r + 60;
            r = r + 2;
            } else {
            //clearInterval(rotation); -> this is for if I wanted it to stop and not make a full rotation after it leaves
            elem.style.transform = "rotate(" + r + "deg)";
            r = 2;
        }
    },5);
}

function stopRotate(elem) {
    clearInterval(rotation);
}

function fireBread(elem1,elem2) {
    let inter;
    let inter2;
    if (played == false) {
        played = true;
        elem1.style.display = "block";
        elem2.style.transition = "3s ease-in";
        elem2.style.opacity = "0";
        firesound.play();
        inter = setInterval(() => {
            elem2.src = "../media/bread2.jpg";
            elem2.alt = "2 cooked breads!";
            clearInterval(inter);
            elem2.style.opacity = "100";
            inter2 = setInterval(() => {
                elem2.style.transition = "";
                clearInterval(inter2);
            },3000);
        },3000);
    }
}
