function checkCashRegister(price, cash, cid) {
    /*Cria uma variavel com todo dinheiro do caixa e outra trocando o [nome, valor total de cada unidade] por [valor unidade , numero de notas]*/
      let totalCash = sumCash(cid);
      let unitAndTotalAmmount = namesForValues(cid);
      let change = cash - price
    //Variavel para receber o array com nome e valor total da unidade dada de troco
      let nameAndTotalGiven = []
    //Objeto que recebera a resposta
      let result = {status: null, change: []};
      
    //Se total em caixa for menor que o troco devido ja para por aqui e retorna o objeto com a modificação abaixo
      if(totalCash < change){
        result.status = "INSUFFICIENT_FUNDS"
    
    // Se o total em caixa for igual ao troco devido para aqui e retorna o objeto com as modificações abaixo
      }else if(totalCash === change){
        result.status = "CLOSED"
        result.change = cid
    
    //Se total em caixa for maior que o troco devido 
      }else if (totalCash > change){
    //Laço do array [valor da unidade, numero de notas], do maior valor da unidade para o menor
        for(let i = unitAndTotalAmmount.length -1; i>=0; i--){
    //Atribui valor da unidade e numero de unidades a constantes
          let currentChangeUnit = unitAndTotalAmmount[i][0];
          let numOfBills= unitAndTotalAmmount[i][1];
    //Cria letante para armazenar o numero de notas dada.
          let numOfBillsGiven = 0
    //Enquanto troco for maior que o valor da unidade atual e o numero de notas da mesma unidade for maior que zero, da mais uma nota e retira uma nota do numero de notas que se possui no caixa da respectiva unidade. Ao mesmo tempo vai recalculando o troco devido apos dar uma nota.
          while(change >= currentChangeUnit && numOfBills >0){
            numOfBills--
            numOfBillsGiven++
            change = Math.round((change - currentChangeUnit)*100)/100
          }
    // Cria a letante com o total do troco dado ao final do processo
          let totalOfCurrentCurrencyGiven = 1
          totalOfCurrentCurrencyGiven = numOfBillsGiven*currentChangeUnit
    //Se o total do troco dado for maior que o troco devido, joga pro array nameAndTotalGiven o [nome da unidade, valor total dessa unidade dada de troco]. E no final retorna o objeto com as seguintes modificações
          if(totalOfCurrentCurrencyGiven > change){
          nameAndTotalGiven.push([cid[i][0],totalOfCurrentCurrencyGiven])
          
            result.status = "OPEN"
            result.change = nameAndTotalGiven
    //Caso o troco total dado seja menor que o troco devido, retorna o objeto abaixo
          }else if (totalOfCurrentCurrencyGiven < change){
            
            result.status = "INSUFFICIENT_FUNDS"
          }
        }  
      }
      return result
    }
    
    // soma todo o dinheiro do caixa
    function sumCash(arr) {
      return arr
      .flat()
      .filter(values => typeof values === "number")
      .reduce((sumOfAll, sum) => (sumOfAll + sum))
    }
    
    // cria um novo array mudando o nome da moeda para o seu respectivo valor e muda o valor total em caixa para numero de unidades daquele valor em caixa
    function namesForValues(arr) {
      let currencyUnit = {
        "PENNY": 0.01,
        "NICKEL":0.05,
        "DIME": 0.1,
        "QUARTER":0.25,
        "ONE":1,
        "FIVE":5,
        "TEN":10,
        "TWENTY":20,
        "ONE HUNDRED":100
      };
      
        let currencyUnitAndAmmount = arr.map(([x,y]) => {
        let currentCurrencyUnit = currencyUnit[x];
        let currentCurrencyAmmount = Math.round(y/currencyUnit[x]);
    
        return [currentCurrencyUnit,currentCurrencyAmmount];
      })
    
      return currencyUnitAndAmmount
    }
    
    const a = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
    const b = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
    
    console.log(a)
    console.log(b)