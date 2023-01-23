let origArray = [2,3,4];

document.addEventListener("DOMContentLoaded", function (event) {

    /**** INITIAL TEXTBOX POPULATION ****/
    document.getElementById("textbox1").value = origArray[0];
    document.getElementById("textbox2").value = origArray[1];
    document.getElementById("textbox3").value = origArray[2];
    console.log("After DOM Successful");


    /**** BUTTON 2 ANONYMOUS FUNTION ****/
    document.getElementById("button2").addEventListener("click", function () {

        // Populate Motified Funcation
        let cubedArray = origArray.map(function(number){
            return number * number * number;
        });

        // Display Motified Funcation
        document.getElementById("textbox1").value = cubedArray[0];
        document.getElementById("textbox2").value = cubedArray[1];
        document.getElementById("textbox3").value = cubedArray[2];

        //Console Log Success
        console.log("Button 2 (Cubed) Successful");
    });

    /**** BUTTON 3 CALLING NAMED FUNTION ****/
    document.getElementById("button3").addEventListener("click", quartic);
    
});


/**** BUTTON 1 ONCLICK FUNTION ****/
function squared() {
    
    // Populate Motified Funcation
    let squaredArray = origArray.map(function(number){
        return number * number;
    });

    // Display Motified Funcation
    document.getElementById("textbox1").value = squaredArray[0];
    document.getElementById("textbox2").value = squaredArray[1];
    document.getElementById("textbox3").value = squaredArray[2];

    //Console Log Success
    console.log("Button 1 (Squared) Successful"); 
  }

/**** BUTTON 3 QUARTIC FUNTION ****/
function quartic() {
    
    // Populate Motified Funcation
    let quarticArray = origArray.map(function(number){
        return number * number * number * number;
    });

    // Display Motified Funcation
    document.getElementById("textbox1").value = quarticArray[0];
    document.getElementById("textbox2").value = quarticArray[1];
    document.getElementById("textbox3").value = quarticArray[2];

    //Console Log Success
    console.log("Button 3 (Quartic) Successful");
  }