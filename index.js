var noOfDrumButton=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfDrumButton;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;
    buttonAnimation(buttonInnerHTML);

    switch (buttonInnerHTML) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var a = new Audio('sounds/kick-bass.mp3');
            a.play();
            break;
        case "s":
            var au = new Audio('sounds/snare.mp3');
            au.play();
            break;
        case "d":
            var aud = new Audio('sounds/tom-1.mp3');
            aud.play();
            break;
        case "j":
            var audi = new Audio('sounds/tom-2.mp3');
            audi.play();
            break;
        case "k":
            var audioo = new Audio('sounds/tom-2.mp3');
            audioo.play();
            break;
        case "l":
            var audios = new Audio('sounds/tom-2.mp3');
            audios.play();
            break;

        default:
            console.log("hello");
            break;
    }

});
}

document.addEventListener("keypress",function(event) {
    buttonAnimation(event.key);

    switch (event.key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var a = new Audio('sounds/kick-bass.mp3');
            a.play();
            break;
        case "s":
            var au = new Audio('sounds/snare.mp3');
            au.play();
            break;
        case "d":
            var aud = new Audio('sounds/tom-1.mp3');
            aud.play();
            break;
        case "j":
            var audi = new Audio('sounds/tom-2.mp3');
            audi.play();
            break;
        case "k":
            var audioo = new Audio('sounds/tom-2.mp3');
            audioo.play();
            break;
        case "l":
            var audios = new Audio('sounds/tom-2.mp3');
            audios.play();
            break;

        default:
            console.log("hello");
            break;
    }
});

function buttonAnimation(currentKey){
    var activeKey= document.querySelector("."+ currentKey);
    activeKey.classList.add("pressed");

    setTimeout(function(){activeKey.classList.remove("pressed")},100);
}

