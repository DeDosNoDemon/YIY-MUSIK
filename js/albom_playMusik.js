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

for(let i=0; i<BTNs.length; i++){
    allSongs[i].volume = 0.5;
    BTNs[i].addEventListener(`change`, function(e){
        let song = allSongs[i];
        if(e.target.checked) {
            audioCheck(i);
            BTN_imgs[i].src = `../assets/pause.png`;
            song.play();
            menuChangeUp(i);
        }
        else {
            BTN_imgs[i].src = `../assets/play.png`;
            song.pause(); song.currentTime = 0;
            menuChangeDown(i);
        };
    });
    allSongs[i].addEventListener(`ended`, function(e){
        if(loopBTN.checked){
            allSongs[i].currentTime = 0;
            allSongs[i].play();
        }else{
            BTN_imgs[i].src=`../assets/play.png`
            BTNs[i].checked = false;
            allSongs[i].currentTime = 0;
            if(allSongs[i+1]){
                BTNs[i+1].checked = true;
                allSongs[i+1].play();
                BTN_imgs[i+1].src=`../assets/pause.png`
                UM_name.innerHTML = alboms[get_i].songs[i+1].title;
                UM_ath.innerHTML = alboms[get_i].songs[i+1].author;
            }else if(infBTN.checked && !allSongs[i+1]){
                BTNs[0].checked = true;
                allSongs[0].play();
                BTN_imgs[0].src=`../assets/pause.png`
            }
        }
    });
}
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
