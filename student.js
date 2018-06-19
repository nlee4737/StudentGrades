var $ = function(id) {
    return document.getElementById(id);
};
function clrscrn() {
    $("form1").reset();
    $("StudentNo").focus();
    $("results").innerHTML = "";
}
window.onload = function () {
    $("btnCalc").onclick = calculate;
    $("btnClr").onclick = clrscrn;
    $("StudentNo").focus();
};

function calculate() {
    if ($("StudentNo").value === "") {
        alert("Please enter a student number");
        $("StudentNo").focus;
        return;
    } 
    if ($("LastName").value === "") {
        alert("Please enter the last name");
        $("LastName").focus;
        return;
    }
    if ($("FirstName").value === "") {
        alert("Please enter the first name");
        $("FirstName").focus;
        return;
    }
    //alert("Student header ok.");
    var q1 = valdateScore("Q1");
        if(q1 === -1) { return; }
    var q2 = valdateScore("Q2");
        if(q2 === -1) { return; }
    var q3 = valdateScore("Q3");
        if(q3 === -1) { return; }
    var q4 = valdateScore("Q4");
        if(q4 === -1) { return; }
    var q5 = valdateScore("Q5");
        if(q5 === -1) { return; }
    var qm = valdateScore("QM");
        if(qm === -1) { return; }
        
    var qavg = quizAverage(q1,q2,q3,q4,q5,qm);
    //complete course average and letter grade calculations
    
    $("results").innerHTML = "Quiz Average =" + qavg;
        
       
}
function validateScore(id) {
    var x  = parseFloat($(id).value);
    if (isNaN(x) || x <0 || x > 100) {
        alert(id + " must be a number from 0 to 100");
        $(id).focus();
        x = -1;
    }
}
function quizAverage(q1,q2,q3,q4,q5,qm) {
    var qa = [q1,q2,q3,q4,q5,qm];
    qa.sort ( function(a,b) {return a-b;} );
    var qavg = (qa[2] + qa[3] + qa[4] +qa[5]) / 4.0;
    return qavg;
}