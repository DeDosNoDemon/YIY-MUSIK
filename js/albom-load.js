let search = new URLSearchParams(window.location.search);
let get_i = search.get(`i`);
let get_l = search.get(`l`);
let get_c = search.get(`c`);
let img_html = document.querySelector(`.alb-img`);
let name_html = document.querySelector(`.alb-name`);
let des_html = document.querySelector(`.alb-des`);
let likes_html = document.querySelector(`.likes_count`);
let date_html = document.querySelector(`.alb-date`);
let songs_group = document.querySelector(`.songs-group`);
let like_btn = document.querySelector(`.like_btn`);
let like=document.querySelector(`.like`);
let uMenu_img=document.querySelector(`.uMenu-img`);
let pages_names = [
    `ISKRA`,`NOVINKI-FM`,`ELEKTRONNAYA-ODESEYA`,`KLASSIKA`,`RICK_ROLL`
]
let page_name = ``;
let alboms = [
    {
        img: 1,
        name: `Искра`,
        des: ``,
        date: `11:02:2023`,
        songs: [
            {
                title: `Fuckboys`,
                author:`Lead Horizon`,
                time: `3:24`
            },
            {
                title: `SUPER SONIC`,
                author:`Tanya Tekis`,
                time: `2:57`
            },
            {
                title: `WAKARIMASEN`,
                author:`КУОК`,
                time: `2:05`
            },
            {
                title: `Katana`,
                author:`Lead Horizon`,
                time: `2:27`
            }
        ]
    },
    {
        img: 2,
        name: `Новинки FM`,
        des: ``,
        date: `18:10:2015`,
        songs: [
            {
                title: `Ты со мной или нет`,
                author:`DJ SMASH, Марина Кравец`,
                time: `2:11`
            },
            {
                title: `Lux Æterna (Full speed or nothing)`,
                author:`Рик Эстли`,
                time: `3:26`
            },
            {
                title: `Shakira: Bzrp Music Sessions, Vol. 53`,
                author:`Dj Venot, Dj Limbo Latino, Natalia Nekare`,
                time: `3:38`
            }
        ]
    },
    {
        img: 3,
        name: `Электронная одессея`,
        des: ``,
        date: `22:02:2022`,
        songs: [
            {
                title: `Ageispolis`,
                author:`Э́йфекс Твин`,
                time: `5:23`
            },
            {
                title: `Walking on a dream`,
                author:`Empire of the Sun`,
                time: `5:23`
            },
            {
                title: `Teardrop`,
                author:`Massive Attack`,
                time: `5:31`
            }
        ]
    },
    {
        img: 4,
        name: `Классика`,
        des: ``,
        date: `21:04:1734`,
        songs:[
            {
                title: `Турецкий марш`,
                author:`Alex Tor, Вольфганг Амадей Моцарт`,
                time: `3:29`
            },
            {
                title: `Сунный свет`,
                author:`Misha Fomin, Клод Дебюсси`,
                time: `5:11`
            },
            {
                title: `Аллегро кон спирито`,
                author:`Louise Jones, Malcolm Miller`,
                time: `8:10`
            },
            {
                title: `Лунная соната`,
                author:`Misha Fomin, Людвиг ван Бетховен`,
                time: `5:32`
            }
        ]
    },
    {
        img: 5,
        name: `Рик ролл`,
        des: `Обычный Рик-Ролл`,
        date: `01.01.0001`,
        songs: [
            {
                title: `Never gonna give you up`,
                author:`Рик Эстли`,
                time: `6:07`
            },
            {
                title: `Never gonna give you up`,
                author:`Рик Эстли`,
                time: `6:07`
            },
            {
                title: `Never gonna give you up`,
                author:`Рик Эстли`,
                time: `6:07`
            },
            {
                title: `Never gonna give you up`,
                author:`Рик Эстли`,
                time: `6:07`
            },
            {
                title: `Never gonna give you up`,
                author:`Рик Эстли`,
                time: `6:07`
            }
        ]
    }
]

img_html.src = `../assets/${alboms[get_i].img}.jpg`;
uMenu_img.src = `../assets/${alboms[get_i].img}.jpg`;
name_html.innerHTML = alboms[get_i].name;
des_html.innerHTML = alboms[get_i].des;
likes_html.innerHTML = get_l;
date_html.innerHTML = `Создано: `+alboms[get_i].date;
page_name = pages_names[get_i];

if(get_c == `true`){
    like_btn.checked = true;
    like.style.backgroundColor = `rgb(255,0,0)`;
}

for(let i=0;i<alboms[get_i].songs.length; i++){
    let song=alboms[get_i].songs[i];
    songs_group.innerHTML+=`
    <li class="list-group-item song">
        <label class="d-flex align-items-center">
        <audio class="audio d-none" src="../assets/MUSIK/${page_name}_${i+1}.mp3"></audio>
        <input class="d-none song-btn" type="checkbox"><img src="../assets/play.png" class="me-3 song-btn-img" height="32px">
        <div>
            <div>${song.title}</div>
            <div class="text-secondary">${song.author}</div>
        </div>
        <div class="ms-auto">${song.time}</div>
        </label>
    </li>
    `;
}