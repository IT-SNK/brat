const input = document.querySelector('.age');

const btn = document.querySelector('.btn');
let nau = document.querySelector('.nau');
let rus = document.querySelector('.rus');
let out1 = document.querySelector('.out');
let art = document.querySelector('.art');
let tim = document.querySelector('.tim');
let samr = document.querySelector('.samr');
let kabl = document.querySelector('.kabl');
let eroha = document.querySelector('.eroha');
let bau = document.querySelector('.bau');
// let bak = document.querySelector('.bak');
let kukish = document.querySelector('.kukish');

let photo = '';
btn.onclick = function () {
    let num = input.value;
    if (num == 'nauken'){nau.classList.toggle('nau');}
    if(num == 'ruslan' || num == 'Руслан' || num == 'Ruslan' || num =='руслан'){rus.classList.toggle('rus');}
    if(num == 'artur' || num == 'Artur' || num == 'Артур' || num == 'артур'){art.classList.toggle('art');}
    if(num == 'timur' || num == 'Timur' || num == 'Тимур'|| num == 'тимур'){tim.classList.toggle('tim');}
    if(num == 'samrat' || num == 'Samrat' || num == 'Самрат' || num == 'самрат'){samr.classList.toggle('samr');}
    if(num == 'kabyl' || num == 'Kabyl' || num == 'Кабыл' || num == 'кабыл'){kabl.classList.toggle('kabl');}
    if(num == 'eroha' || num == 'Eroha' || num == 'Ermaganbet' || num == 'Ермаганбет' || num == 'ермаганбет'){eroha.classList.toggle('eroha');}
    if(num == 'bauyrzhan' || num == 'Bauyrzhan' || num == 'bau' || num == 'Bau' || num == 'Бауыржан' || num == 'бауыржан'){bau.classList.toggle('bau');}
    // if(num == 'baglan' || num == 'Баглан' || 'Baglan' || num == 'Бакош' || num == 'баглан'){bak.classList.toggle('bak');}
else {
    kukish.classList.toggle('kukish');
}
    // out1.innerHTML = photo;
}


