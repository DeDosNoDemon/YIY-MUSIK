let urls = document.querySelectorAll(`.alb-url`);
let like_btns = document.querySelectorAll(`.like_btn`);
let like_counts = document.querySelectorAll(`.likes_count`)
let likes = document.querySelectorAll(`.like`);

for(let i=0; i<like_btns.length; i++){
    like_btns[i].addEventListener(`change`, function(e){
        let t = !e.target.checked;
        likes[i].style.backgroundColor = `rgb(255,${255*t},${255*t})`;
        like_counts[i].innerHTML = Number(like_counts[i].innerHTML)+(-2*t+1);
        urls[i].href = `html/ALBOMS.html?i=${i}&l=${Number(like_counts[i].innerHTML)}&c=${!t}`
    })
}