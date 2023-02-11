

let container = document.querySelector(`.cards-container`);
let cards = [
    {
        name: `Искра`,
        url: 1,
        likes: 40320
    },
    {
        name: `Новинки FM`,
        url: 2,
        likes: 22101
    },
    {
        name: `Электронная одессея`,
        url: 3,
        likes: 40492
    },
    {
        name:`Классика`,
        url: 4,
        likes: 10351
    },
    {
        name:`Рик ролл`,
        url: 5,
        likes: 101001
    }
];

for(let i=0; i<cards.length; i++){
    container.innerHTML+=`
    <div class="card card-open">
        <a class="d-block alb-url" href="html/ALBOMS.html?i=${i}&l=${cards[i].likes}&c=false"><img class="card-img" src="assets/${cards[i].url}.jpg"></a>
        <div class="card-name">${cards[i].name}</div>
        <div class="card-likes">
            <input type="checkbox" id="like${i}" class="like_btn d-none"><label for="like${i}"><img class="like" src="assets/like.png"></label>
            <span class="likes_count">${cards[i].likes}</span>
        </div>
    </div>
    `
}
console.log(`Load is done!`);