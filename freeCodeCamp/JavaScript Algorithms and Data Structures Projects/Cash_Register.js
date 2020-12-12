/**
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.


 */
var denom = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
  ];
  
  function checkCashRegister(price, cash, cid) {
    var output = { status: null, change: [] };
    var change = cash - price;
    let return_customer= cash-price;
    let sum=[];
    let add=0;
    for(let i=0;i<cid.length;i++){
      add=add+parseFloat(cid[i][1])
    }
    add=add.toFixed(2)
    if(add<return_customer){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }else if(add==return_customer){
      return {status: "CLOSED", change: cid}
    }
    var register = cid.reduce(
      function(acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
      },
      { total: 0 }
    );
     var change_arr = denom.reduce(function(acc, curr) {
      var value = 0;
      while (register[curr.name] > 0 && change >= curr.val) {
        change -= curr.val;
        register[curr.name] -= curr.val;
        value += curr.val;
  

        change = Math.round(change * 100) / 100;
      }
      if (value > 0) {
        acc.push([curr.name, value]);
      }
      return acc; 
    }, []);
   if (change_arr.length < 1 || change > 0) {
      output.status = "INSUFFICIENT_FUNDS";
      return output;
    }
  

    output.status = "OPEN";
    output.change = change_arr;
    return output;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  