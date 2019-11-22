let choice = document.getElementById("bloc_choice");
let title = document.getElementById("title");
let stats = document.getElementById("stats");
let speak_box = document.getElementById("speak_box");
let speak = document.getElementById('speak');
let pic = document.getElementById('pic');
let x = 1+Math.floor(Math.random()*100);
let submit = document.getElementById('submit');
let retry = document.getElementById('retry');
let enterNB = document.getElementById('choosen_number');
let tapedNB = document.getElementById('taped_nb');
let indice = document.getElementById('indice');
let round1 = document.getElementById('round1');
let cache = document.getElementById('block_cache');
var click = 0;

click_counter = 10;
document.getElementById('time_remain').innerHTML=click_counter;
document.getElementById('answer_hidden').innerHTML=x;

document.getElementById("try").addEventListener("click", function(){
    this.style.display='none';
    title.style.display='none';
    choice.style.display='block';
    speak_box.style.display='block';
    stats.style.display='block';
    round1.style.display='block';
});

document.getElementById("game_name").addEventListener("click", function(){
    document.getElementById('answer_hidden').style.display='block';})


function subAnswer()
{
    click_counter = click_counter-1;
    document.getElementById('time_remain').innerHTML = click_counter; {
        if (click_counter===9) {
            speak.innerHTML ='Sorry, you wrong !';
        }else if (click_counter===8) {
            speak.innerHTML ='Still wrong, mate !';
        }else if (click_counter===7) {
            speak.innerHTML ='Come on, do your best !';
        }else if (click_counter===6) {
            speak.innerHTML ='Nope !';
        }else if (click_counter===5) {
            speak.innerHTML ='You make me laugh !';
        }else if (click_counter===4) {
            speak.innerHTML ='Crap, are you mad ?';
            pic.style.backgroundImage= 'url("faces/face_desesp.png")';
        }else if (click_counter===3) {
            speak.innerHTML ='I`m talking with a no brain';
        }else if (click_counter===2) {
            speak.innerHTML ='Two tests remains, two chances to prove that you`re not a little bitch !';
        }else if (click_counter===1) {
            speak.innerHTML ='Are you serious ?! If you`re wrong one time again, I`ll fuck you, asshole !';
            pic.style.backgroundImage= 'url("faces/face_cry.png")';
        }else if (click_counter<= 0) {
            speak.innerHTML ='God ... what I`m gonna do with you ... so, prepare your anus ! Or retry it, bitch !';
            pic.style.backgroundImage= 'url("faces/face_rage.png")';
            document.getElementById('time_remain').innerHTML='None';
        }
        submitResult();

}
}

function submitResult() {
    var nb = enterNB.value;
    tabRom(nb);
    if (nb < x){
        indice.innerHTML= 'C`est plus !';
    }
    else if (nb > x){
        indice.innerHTML= 'C`est moins !';
    }
    else if (nb == x){
        indice.innerHTML= 'Bingo !';
        speak.innerHTML ='You won, finally you`re not a little pussy !';
        pic.style.backgroundImage= 'url("faces/face_happy.png")';
        submit.style.display='none';
        cache.style.display='block';
    }
}

function tabRom(nb) {
    tapedNB.innerHTML+= " " + nb;
}

function refreshGame() {
    window.location.reload();
    this.style.display='none';
    title.style.display='none';
    choice.style.display='block';
    speak_box.style.display='block';
    stats.style.display='block';
}

function tapPic()
{
    if (click === 1){
        speak.innerHTML = 'Don`t touch me, bro';
    }
    else if (click === 3){
        speak.innerHTML = 'Hey, what`s wrong with you ? Do you think I`m gay ?!';
    }
    else if (click === 5){
        speak.innerHTML = 'Fuck you bitch, one more, and you`ll lose this fuckin`game !';
        pic.style.backgroundImage= 'url("faces/face_rage.png")';
    }
    else if (click === 7){
        speak.innerHTML = 'Riolu leaved the game ...';
        pic.style.backgroundImage= 'none';
        document.getElementById('time_remain').innerHTML='None';
        submit.style.display='none';
        indice.innerHTML= 'Wasted !';

    }
    click++;
}

pic.addEventListener('click', tapPic);

function clickR1() {
    document.getElementById('round2').style.display='block';
}

function clickR2() {
    document.getElementById('round3').style.display='block';
}

function clickR3() {
    document.getElementById('round1').style.display='block';
    document.getElementById('round2').style.display='block';
    document.getElementById('round3').style.display='block';
    indice.innerHTML= 'Congratulations ! Riolu evolved to Lucario !';
    speak.innerHTML ='Woh ! Your power make me evolved ! Thanks bro !';
    pic.style.backgroundImage= 'url("faces/face_evolved.png")';
    submit.style.display='none';
    cache.style.display='block';
}