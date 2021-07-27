/*
Cash RegisterPassed
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument 
(price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you 
cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal 
to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest 
to lowest order, as the value of the change key.

*/

function checkCashRegister(price, cash, cid) {
//Total cash and transform [name, total] to [unit value, numb of bills]

      let totalCash = sumCash(cid);
      let unitAndTotalAmmount = namesForValues(cid);
      let change = cash - price
//Creates array to receive name and total ammount given in change
      let nameAndTotalGiven = []
//Object which will receive the answer
      let result = {status: null, change: []};
      
//If total cash < change stops here
      if(totalCash < change){
        result.status = "INSUFFICIENT_FUNDS"
    
//If total cash === change stops here
      }else if(totalCash === change){
        result.status = "CLOSED"
        result.change = cid
    
//If total cash > change 
      }else if (totalCash > change){
        for(let i = unitAndTotalAmmount.length -1; i>=0; i--){
    
          let currentChangeUnit = unitAndTotalAmmount[i][0];
          let numOfBills= unitAndTotalAmmount[i][1];
          let numOfBillsGiven = 0
//While change > than value of current unit and numb of bills > 0, gives one more bill and subtract from the total ammount available also recalculates the curren owned change 
          while(change >= currentChangeUnit && numOfBills >0){
            numOfBills--
            numOfBillsGiven++
            change = Math.round((change - currentChangeUnit)*100)/100
          }

          let totalOfCurrentCurrencyGiven = 1
          totalOfCurrentCurrencyGiven = numOfBillsGiven * currentChangeUnit
    
          if(totalOfCurrentCurrencyGiven > change){
          nameAndTotalGiven.push([cid[i][0],totalOfCurrentCurrencyGiven])
          
            result.status = "OPEN"
            result.change = nameAndTotalGiven
    
          }else if (totalOfCurrentCurrencyGiven < change){
            
            result.status = "INSUFFICIENT_FUNDS"
          }
        }  
      }
      return result
    }
    
    //Helper function to sum all total available cash
    function sumCash(arr) {
      return arr
      .flat()
      .filter(values => typeof values === "number")
      .reduce((sumOfAll, sum) => (sumOfAll + sum))
    }
    
    // Change name of each the bill for its unitary value and change the total ammount of that unit for the respective numbers of bill 
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