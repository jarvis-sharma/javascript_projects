window.addEventListener("keydown", playy,false);

function playy(key){
    if(key.keyCode===65){
        p1();
    }
    else if(key.keyCode===83){
        p2();
    }
    else if(key.keyCode===68){
        p3();
    }
    else if(key.keyCode===70){
        p4();
    }
    else if(key.keyCode===71){
        p5();
    }
    else if(key.keyCode===72){
        p6();
    }
    else if(key.keyCode===74){
        p7();
    }
    else if(key.keyCode===75){
        p8();
    }
}


function p1(){
    let x=new Audio("sound_files/01 - JavaScript Drum Kit_sounds_boom.wav");
    x.play();
}

function p2(){
    let x=new Audio("sound_files/01 - JavaScript Drum Kit_sounds_clap.wav");
    x.play();   
}

function p3(){
    let x=new Audio("sound_files/01 - JavaScript Drum Kit_sounds_hihat.wav");
    x.play();
}

function p4(){
    let x=new Audio("sound_files/01 - JavaScript Drum Kit_sounds_kick.wav");
    x.play();   
}

function p5(){
    let x=new Audio("sound_files/01 - JavaScript Drum Kit_sounds_openhat.wav");
    x.play();   
}

function p6(){
    let x=new Audio("sound_files/01 - JavaScript Drum Kit_sounds_snare.wav");
    x.play();   
}

function p7(){
    let x=new Audio("sound_files/01 - JavaScript Drum Kit_sounds_tink.wav");
    x.play();   
}

function p8(){
    let x=new Audio("sound_files/01 - JavaScript Drum Kit_sounds_tom.wav");
    x.play();   
}