/**
 * Created by Joakim on 2018-02-27.
 */

window.onload = function(){
    initPersons();
//    init();

};


Array.prototype.last = function() {
    return this[this.length-1];
};

Array.prototype.first = function(){
    return this[0];
};

var expenses = [];
var transactions = [];
var finished = false;

function init(){
  /*
    for(var i = 0; i < 3; i++){
        expenses.push({name:"Person" + i, cost:-100*i, paidOff:false});
    }
    */
  expenses.push({name:"A", cost:-1234, paidOff:false});
  expenses.push({name:"B", cost:-5489, paidOff:false});
  expenses.push({name:"C", cost:0, paidOff:false});
  expenses.push({name:"D", cost:-2305, paidOff:false});
  expenses.push({name:"E", cost:-123, paidOff:false});
  expenses.push({name:"F", cost:-9585, paidOff:false});
  expenses.push({name:"G", cost:-23, paidOff:false});
  expenses.push({name:"H", cost:-864, paidOff:false});
}

function getAvg(){
    var totCost = 0;
    var totPers = 0;
    for(var i = 0; i < expenses.length; i++){
        p = expenses[i];
        totCost += p.cost;
        totPers++;
    }

    return totCost/totPers;
}

function costSorter(a,b){
    return a.cost - b.cost;
}

function displayHistory(){
    for(var i = 0; i < transactions.length; i++){
        console.log(transactions[i]);
    }
}

function payTo(payer, payee, amount){
    payer.cost -= amount;
    payee.cost += amount;
    transactions.push(payer.name + " swishar " + Math.ceil(amount) + " kr till " + payee.name);
}

function checkIfDone(){
    for(var i = 0; i < expenses.length; i++){
        if(!(expenses[i].paidOff)) return false;
    }
    return true;
}


function calculateTransactions(){
    var avg = getAvg();

    while(!finished){
        expenses.sort(costSorter);

        var currPerson = expenses.last();
        //Last person in array (lowest expense) pays diff from avg to top payer.
        var amtToPay = currPerson.cost - avg;
       // amtToPay = Math.ceil(amtToPay);
        payTo(currPerson, expenses.first(), amtToPay);

        expenses.pop();
        finished = checkIfDone();
    }
    displayHistory();
}

function addExpense(person, expense){
    console.log("Adding expense " + person + " : " + expense + " kr");
    expenses.push({name:person, cost:expense, paidOff:false});

}

function getHistoryString(){
    var s= "";
    for(var i = 0; i < transactions.length; i++){
        s += '<p>' +  transactions[i] + '</p>';

    }
    return s;
}