/**
 * Created by Joakim on 2018-02-28.
 */


var numberPersons = 0;

function addPersonHandler(){
    addPerson();
    return false;
}


function calculateHandler(){
    resetExpenses();
    for(var i = 1; i <= numberPersons; i++){
        var person = $("#person" + i).val();
        if(person === ""){
          //   $("#calculateButton").popover("show");
            continue;
        }
        var amount = $("#person" + i + "Amt").val();
        amount = parseInt(amount);

        //Ensure correct sign on input format
        amount = -1 * Math.abs(amount);

        addExpense(person, amount);
    }

    calculateTransactions();

    $("#transactionHistory").html(getHistoryString());
    $("#myModal").modal("show");



    return false;
}

function addPerson(){
    var persons = $("#formPersons");
    numberPersons++;
    i = numberPersons +1;
    var html = '<div class="form-group col-sm-3 pull-left person-input"><label class="person-label" for="person' + i + '">Person '+i+'</label> <input type="text" class="form-control form-control-lg" ' +
        'id="person' + i + '"aria-describedby="" placeholder="Person ' + i + '"> <input type="number" class="form-control form-control-lg" ' +
        'id="person' + i + 'Amt" aria-describedby="" placeholder="0 kr"> </div>';
    $("#addPersonDiv").remove();
    persons.append(html);
    var addPersonDiv = '<div onclick="addPersonHandler()" class="form-group col-sm-3 pull-left person-input" id=addPersonDiv>' +
        '<p id="addPersonText" class="fa fa-plus-square fa-5x"></p></div>';
    persons.append(addPersonDiv);

}


function initPersons(){
    var persons = $("#mainrow");

    var html = "";

    for(var i = 0; i < 3; i++) {
       addPerson();
}


    return false;

}

function printTransactions(){
    $("#main").hide();
    $("#header").hide();
    print();
    $("#main").show();
    $("#header").show();
    return false;
}