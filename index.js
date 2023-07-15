/*

let a = ''; // первое число
let b = ''; // второе число
let sign = ''; // знак операции
let finish =- false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-', '+', 'X', '/'];

//экран
const out = document.qeruSelector('.calc-screen p');

function clearAll () {
    a = ''; // первое число и результат
    b = ''; // второе число и результат
    sign = ''; // знак
    finish = false;
    out.textContent = 0;


}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    /* buttons это блок в который вложены все кнопки
    надо определить нажата ли кнопк либо просто в промежутке
    было нажато */



/*