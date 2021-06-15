const cipher = {
encode(offset,string){
  if (offset === null || offset === 0 ) {
    throw new TypeError();
  }
  let newWord = "";
  let n="";
  for (let i=0; i< string.length; i++) {
    let strCharCode = string.charCodeAt(i);
    if (strCharCode>64 && strCharCode<91){
     n = (strCharCode - 65 + offset%26) % 26 + 65;
    }else if (strCharCode>96 && strCharCode<123) {
     n = (strCharCode - 97 + offset%26) % 26 + 97;
    }else {
     n = strCharCode;
    }
  let str2 = String.fromCharCode(n);
  newWord += str2
  }
  return newWord;
},
decode(offset,string){
  if (offset === null || offset === 0 ) {
    throw new TypeError();
  }
  let newWord = "";
  let n="";
  for (let i=0; i< string.length; i++) {
    let strCharCode = string.charCodeAt(i);
    if (strCharCode>64 && strCharCode<91){
      n = (string.charCodeAt(i) - 39 - offset%26)%26 + 65;
     }else if (strCharCode>96 && strCharCode<123) {
      n = (string.charCodeAt(i) - 71 - offset%26)%26 + 97;
     }else {
      n = strCharCode;
     }
  let str2 = String.fromCharCode(n);
  newWord += str2
  }
  //let changeNewWord = newWord.replace(/:/g," ")
  return newWord;
}
};
export default cipher;