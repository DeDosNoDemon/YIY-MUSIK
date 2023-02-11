let BTNs = document.querySelectorAll(`.song-btn`);
let BTN_imgs = document.querySelectorAll(`.song-btn-img`);
let allSongs = document.querySelectorAll(`.audio`);
let volume = document.querySelector(`.volumeInp`);
let volume_txt = document.querySelector(`.volumeNum`);
let under_menu = document.querySelector(`.under-menu`);
let UM_name = document.querySelector(`.UM_name`);
let UM_ath = document.querySelector(`.UM_ath`);
let loop = document.querySelector(`.loop`);
let loopBTN = document.querySelector(`.loop-inp`);
let inf = document.querySelector(`.inf`);
let infBTN = document.querySelector(`.inf-inp`);
let cross = document.querySelector(`.cross`);
let crossBTN = document.querySelector(`.cross-inp`);
let PR_bar = document.querySelector(`.progress_bar`);
let PR_time = document.querySelector(`.time`);
let prBTN = document.querySelector(`.pause-inp`);
let prIMG = document.querySelector(`.pause-img`);
let T = 0;

function audioCheck(a){
    for(let i=0;i<allSongs.length;i++){
        allSongs[i].pause(); allSongs[i].currentTime = 0;
        BTN_imgs[i].src = `../assets/play.png`;
        if(i!=a)BTNs[i].checked = false;
    }
}
function menuChangeUp(i){
    UM_name.innerHTML = alboms[get_i].songs[i].title;
    UM_ath.innerHTML = alboms[get_i].songs[i].author;
    under_menu.classList.remove(`hiden`);
}
function menuChangeDown(i){
    UM_name.innerHTML = `Название`;
    UM_ath.innerHTML = `Автор(ы)`;
    under_menu.classList.add(`hiden`);
}
function setTime(){
    if(PR_bar.value != getNum()) PR_bar.value = getNum();
    let timeD = ``;
    if(Math.round(allSongs[T].duration/60)<10){
        timeD+=`0`;
    } timeD+= Math.round(allSongs[T].duration/60)+`:`;
    if(Math.round(allSongs[T].duration%60)<10){
        timeD+=`0`;
    }timeD+= Math.round(allSongs[T].duration%60);

    let timeN = ``;
    if(Math.round(getNum()/60)<10){
        timeN+=`0`;
    } timeN+= Math.round(getNum()/60)+`:`;
    if(Math.round(getNum()%60)<10){
        timeN+=`0`;
    }timeN+= Math.round(getNum()%60);
    PR_time.innerHTML = timeN+`/`+timeD
    window.requestAnimationFrame(setTime);
}
function getNum(){
    return Math.round(allSongs[T].currentTime);
}
function playMusic(i){
    audioCheck(i);
    allSongs[i].currentTime = 0;
    BTNs[i].checked = true;
    BTN_imgs[i].src = `../assets/pause.png`;
    allSongs[i].play();
    menuChangeUp(i);
    prIMG.src=`../assets/pause.png`
    prBTN.checked = true;
    PR_bar.value = 0;
    PR_bar.max = allSongs[i].duration;
    T = i;
    setTime();
}
function stopMusic(i){
    BTN_imgs[i].src = `../assets/play.png`;
    allSongs[i].pause(); allSongs[i].currentTime = 0;
    BTNs[i].checked = false;
    menuChangeDown(i);    
}
function resumeMusic(i){
    prIMG.src=`../assets/pause.png`;
    allSongs[i].play();
}
function pauseMusik(i){
    prIMG.src=`../assets/play.png`;
    allSongs[i].pause();
}

for(let i=0; i<BTNs.length; i++){
    allSongs[i].volume = 0.5;
    BTNs[i].addEventListener(`change`, function(e){
        let song = allSongs[i];
        if(e.target.checked) {
            playMusic(i);
        }
        else {
            stopMusic(i);
        };
    });
    allSongs[i].addEventListener(`ended`, function(e){
        if(loopBTN.checked){
            stopMusic(i);
        }else{
            BTN_imgs[i].src=`../assets/play.png`
            allSongs[i].currentTime = 0;
            if(allSongs[i+1]){
                playMusic(i+1);
            }else if(infBTN.checked && !allSongs[i+1]){
                playMusic(0);
            }
        }
    });
}
prBTN.addEventListener(`click`,function(){
    if (prBTN.checked) pauseMusik(T);
    else resumeMusic(T);
    prBTN.checked = !prBTN.checked;
});
volume.addEventListener(`input`, function(e){
    volume_txt.innerHTML=e.target.value+`%`
    for(let i=0;i<allSongs.length;i++){
        allSongs[i].volume = e.target.value/100;
    }
});
loopBTN.addEventListener(`click`, function(evt){
    let e=evt.target.checked
    loop.style.backgroundColor = `rgb(255,111,0)`;
    cross.style.backgroundColor = `rgb(255,212,179)`;
    inf.style.backgroundColor = `rgb(255,212,179)`;
});
infBTN.addEventListener(`click`, function(evt){
    let e=evt.target.checked
    inf.style.backgroundColor = `rgb(255,111,0)`;
    cross.style.backgroundColor = `rgb(255,212,179)`;
    loop.style.backgroundColor = `rgb(255,212,179)`;
});
crossBTN.addEventListener(`click`, function(evt){
    let e=evt.target.checked
    cross.style.backgroundColor = `rgb(255,111,0)`;
    inf.style.backgroundColor = `rgb(255,212,179)`;
    loop.style.backgroundColor = `rgb(255,212,179)`;
});