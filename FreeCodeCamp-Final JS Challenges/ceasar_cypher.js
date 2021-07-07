function rot13(str) {
// pega codigo ASCII somente de [A-Z]
  let min = 65;
  let max = 90;
//cria Array para receber em decimal
  let decimalArr = [];
//cria Array para receber final convertido em letra apos aplicao do rot13
  let strConvArr = [];
// percorre os elementos da string e joga para decimalArray em forma de ASC II 
  for(let i = 0; i < str.length; i++){
    decimalArr.push(str.charCodeAt(i))
  }
//percorre os elementos de decimalArr e aplica a transformacao rot13 aos elementos
  for(let j = 0; j < decimalArr.length; j++){
    if(decimalArr[j]>=min && decimalArr[j]<=90){
      decimalArr.splice([j],1,decimalArr[j]+13)  
    }
// se passar do caracter [Z] retorna ao [A] e soma o que faltou
    if(decimalArr[j] > max){
      decimalArr[j] = ((decimalArr[j] - max) + (min-1))
    }
// apos aplicao do rot13 passa os elementos convertidos em letra para o array strConvArr
    strConvArr.push(String.fromCharCode(decimalArr[j])) 
  }
// transforma o array em uma string 
  return strConvArr.join("")
}

const b = rot13("SERR YBIR?");

