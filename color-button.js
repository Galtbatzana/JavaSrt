

const btn = document.getElementById('btn');
const colorText = document.getElementById('color');
 let generatedColor = ``;

function colorGenerate() {
        return Math.round(Math.random()*255);
}

function clickHadler() {
    generatedColor = `rgb(${colorGenerate()},${colorGenerate()},${colorGenerate()}`;


    document.body.style.backgroundColor = generatedColor;

    colorText.innerText = generatedColor;
}


btn.onclick = clickHadler;


// 1. body baij awaad yamarch hamaagui ungu
// 2. button hiigeed, darah ued console hewleh
// 3. button darah ued random too hewleh
// 4. random toogooroo body-iin ungu uurchluh

 