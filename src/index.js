import cipher from './cipher.js';
function home(){
document.getElementById("encodeBox").style.display = "none"
document.getElementById("decodeBox").style.display = "none"
document.getElementById("bienvenida").style.display = "block"
}

document.getElementById("home1").addEventListener("click", home)
document.getElementById("home2").addEventListener("click", home)


function startEncode() {
document.getElementById("encodeBox").style.display = "block"
document.getElementById("decodeBox").style.display = "none"
document.getElementById("bienvenida").style.display = "none"
}

document.getElementById("btnEncodeStart").addEventListener("click", startEncode)
document.getElementById("btnEncode").addEventListener("click", startEncode)

function startDecode() {
 document.getElementById("decodeBox").style.display = "block"
 document.getElementById("encodeBox").style.display = "none"
 document.getElementById("bienvenida").style.display = "none"
 }
    
 document.getElementById("btnDecodeStart").addEventListener("click", startDecode)
 document.getElementById("btnDecode").addEventListener("click", startDecode)

const capturarInputEncode = () => {
let offset = parseInt(document.getElementById("textOffsetEncode").value);
let str = document.getElementById("boxEncode1").value;
document.getElementById("boxEncode2").innerHTML = cipher.encode(offset,str);
};

document.getElementById("btnOffsetEncode").addEventListener("click", ()=> capturarInputEncode());

const capturarInputDecode = () => {
let offset = parseInt(document.getElementById("textOffsetDecode").value);
let str = document.getElementById("boxDecode1").value;
document.getElementById("boxDecode2").innerHTML = cipher.decode(offset,str);

};

document.getElementById("btnOffsetDecode").addEventListener("click", ()=> capturarInputDecode());


