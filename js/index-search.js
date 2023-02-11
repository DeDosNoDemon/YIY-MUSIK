let All_cards = document.querySelectorAll(`.card`);
let card_names = document.querySelectorAll(`.card-name`)
let input = document.querySelector(`.input`);

input.addEventListener(`input`, function(e){
    for(let i=0; i<cards.length; i++){
        let name = card_names[i].innerHTML.toLowerCase();
        if(name.includes(e.target.value.toLowerCase())){
            All_cards[i].classList.remove(`d-none`);
            setTimeout(`All_cards[${i}].classList.add('card-open')`, 10);
        }else{
            All_cards[i].classList.remove(`card-open`);
            setTimeout(check, 350, i);
        }
    }
});
function check(i){
    if(All_cards[i].style.width == 0 && !All_cards[i].classList.contains(`card-open`)){
        All_cards[i].classList.add(`d-none`);
    }else{
        All_cards[i].classList.remove(`d-none`);
    }
}