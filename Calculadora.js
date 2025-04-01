const teclasN = [...document.querySelectorAll('.botao')];
const display = document.querySelector('.display');
const limpatudo = document.querySelector('#tc');
const teclasOp = document.querySelectorAll('#op');
const igual = document.querySelector('#tigual');
const ponto = document.querySelector('#tponto');
const tOn = document.querySelector('#On');

let sinal = false; 
let valor = "";
display.addEventListener("input", () => {
    display.value = display.value.replace(/[^-9+\-*/.%]/g, "");
display.addEventListener("paste", (event) => {
    event.preventDefault();
    let pasteData = (event.clipboardData || window.clipboardData).getData("text");
    let sanitizedData = pasteData.replace(/[^0-9+\-*/.%]/g, ""); 
    display.value += sanitizedData;
});
});

teclasN.forEach((evt) => {
    evt.addEventListener('click', (evt) => {
        const num = evt.target.textContent;
        if (!isNaN(num)) { 
            sinal = false;
            display.value += num;
            valor += num;
        }
    });
});

teclasOp.forEach((el) => {
    el.addEventListener('click', (evt) => {
        if (!sinal && display.value.length > 0) {
            sinal = true;
            let operador = evt.target.innerHTML;

            if (operador === 'x') {
                operador = '*';
            }

            display.value += operador;
            valor += operador;
        }
    });
});

limpatudo.addEventListener('click', () => {
    display.value = "";
    valor = "";
    sinal = false;
});

ponto.addEventListener('click', () => {
    if (!sinal && !display.value.endsWith('.')) {
        display.value += '.';
        valor += '.';
        sinal = true; 
    }
});
igual.addEventListener('click',()=>{
    display.value = eval(display.value.replace('x','*').split('=').join('')) 

});

const divBtn = [...document.getElementById('divBtn').children];
divBtn.forEach((e) => {
    e.addEventListener('click', (evt) => {
        valor += evt.target.innerText;
    });
});

tOn.addEventListener("click", () => {
    if (tOn.innerHTML === "ON") {
        tOn.innerHTML = "OFF";
    } else {
        tOn.innerHTML = "ON"; 
    }
});
