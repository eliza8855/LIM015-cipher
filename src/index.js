import cipher from './cipher.js';
const capturarInputEncode = () => {
let offset = parseInt(document.getElementById("textOffsetEncode").value);
let str = document.getElementById("boxEncode1").value;
cipher.encode(offset,str)
};

document.getElementById("btnOffsetEncode").addEventListener("click", ()=> capturarInputEncode());

const capturarInputDecode = () => {
    let offset = parseInt(document.getElementById("textOffsetDecode").value);
    let str = document.getElementById("boxDecode1").value;
    cipher.decode(offset,str)
    };
    
    document.getElementById("btnOffsetDecode").addEventListener("click", ()=> capturarInputDecode());


