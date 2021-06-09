const cipher = {
encode(offset,string){
  let newWord = "";
  for (let i=0; i< string.length; i++) {
  let n = (string.charCodeAt(i) - 65 + offset) % 26 + 65;
  let str2 = String.fromCharCode(n);
  newWord += str2
  };
  document.getElementById("boxEncode2").innerHTML = newWord;
},
decode(offset,string){
  let newWord = "";
  for (let i=0; i< string.length; i++) {
  let n = (string.charCodeAt(i) - 39 - (offset%26))%26 + 65;
  let str2 = String.fromCharCode(n);
  newWord += str2
  };
  let changeNewWord = newWord.replace(/:/g," ")
  document.getElementById("boxDecode2").innerHTML = changeNewWord;
}
};
export default cipher;












/*offset,string*/


/*let string = document.getElementById("boxEncode1").value;  // Llamado a caja 1
  let result = "";
  let offset = document.getElementById("textOffsetEncode").value; // Llamado al offset
  for (let i=0; i<string.length; i++) {
   let n = (string.charCodeAt(i)- 65 + offset) % 26 + 65; // Pasar de letras a ACSII con el offset
   let stringConvert = String.fromCharCode(n); // Pasar de ACSII a letras normales
   result += stringConvert; // uniendo las letras en el resultado
   document.getElementById("boxEncode2").innerHTML = result; // ingresando el resultado a la caja 2
   }*/
/*},
decode(offset,string){
  /*let string = document.getElementById("boxEncode1").value; 
  let result = "";
  let offset = document.getElementById("textOffsetEncode").value;
  for (let i=0; i<string.length; i++) {
   let n = (string.charCodeAt(i)- 65 + offset) % 26 + 65;
   let stringConvert = String.fromCharCode(n);
   result += stringConvert;
   document.getElementById("boxEncode2").innerHTML = result;
   }
}*/