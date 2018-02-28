/**
 * Created by Joakim on 2018-02-28.
 */


var numberPersons = 1;

function addPersonHandler(){
    addPerson();
    return false;
}


function calculateHandler(){
    resetExpenses();

    if($("#person1").val() === "" && $("#person2").val() === ""){
        console.log("persons empty");
        $("#alert").fadeIn(1000).delay(2000).fadeOut(2000);
    }

    for(var i = 1; i <= numberPersons; i++){
        var person = $("#person" + i).val();
        if(person === ""){
          //   $("#calculateButton").popover("show");
            continue;
        }
        var amount = $("#person" + i + "Amt").val();
        amount = parseInt(amount);

        if(isNaN(amount)){
            amount = 0;
        }

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
    i = numberPersons +1;
    numberPersons = i;
    var html = '<div class="form-group col-xl-3 pull-left person-input" id="addPersonDiv'+i+'"><label class="person-label" for="person' + i + '">Person '+i+'</label> <input type="text" class="form-control form-control-lg" ' +
        'id="person' + i + '"aria-describedby="" placeholder="Person ' + i + '"> <input type="number" class="form-control form-control-lg" ' +
        'id="person' + i + 'Amt" aria-describedby="" placeholder="0 kr"> </div>';


    $("#addPersonDiv").remove();
    persons.append(html);
    var addPersonDiv = '<div class="form-group col-sm-3 pull-left person-input text-center" id=addPersonDiv>' +
        '<p id="addPersonText" onclick="addPersonHandler()" class="fa fa-plus-square fa-5x"></p></div>';
    persons.append(addPersonDiv);

    $("#addPersonDiv" +i).hide();
    console.log("hiding  addpersonDiv "+ i);
    $("#addPersonDiv" +i).fadeIn(300);

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