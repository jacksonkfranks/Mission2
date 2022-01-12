/*/*Use jQuery selectors($) and calculate final grade by alerting on page.*/

/*onClick, perform function of retrieving input values*/
$("#btnSend").click(function () {
    var assign = parseInt($("#assign").val())
    var project = parseInt($("#project").val())
    var quiz = parseInt($("#quiz").val())
    var exam = parseInt($("#exam").val())
    var intex = parseInt($("#intex").val())

    /*calculate final score as a percent*/
    var finalScore = (assign * .55) + (project * .05) + (quiz * .1) + (exam * .2) + (intex * .1)

    /*display final percentage and final letter grade in the class*/
    if (finalScore >= 94) {
        alert("Final percentage in course: " + finalScore + "%" + "\nThat is a(n) " + "A");
    } else if (finalScore >= 90) {
        alert("Final percentage in course: " + finalScore + "%" + "\nThat is a(n) " + "A-");
    } else if (finalScore >= 87) {
        alert("Final percentage in course: " + finalScore + "%" + "\nThat is a(n) " + "B+");
    } else if (finalScore >= 84) {
        alert("Final percentage in course: " + finalScore + "%" + "\nThat is a(n) " + "B");
    } else if (finalScore >= 80) {
        alert("Final percentage in course: " + finalScore + "%" + "\nThat is a(n) " + "B-");
    } else if (finalScore >= 77) {
        alert("Final percentage in course: " + finalScore + "%" + "\nThat is a(n) " + "C+");
    } else if (finalScore >= 74) {
        alert("Final percentage in course: " + finalScore + "%" + "\nThat is a(n) " + "C");
    } else if (finalScore >= 70) {
        alert("Final percentage in course: " + finalScore + "%" + "\nThat is a(n) " + "C-");
    } else if (finalScore >= 67) {
        alert("Final percentage in course: " + finalScore + "%" + "\nThat is a(n) " + "D+");
    } else if (finalScore >= 64) {
        alert("Final percentage in course: " + finalScore + "%" + "\nThat is a(n) " + "D");
    } else if (finalScore >= 60) {
        alert("Final percentage in course: " + finalScore + "%" + "\nThat is a(n) " + "D-");
    } else {
        alert("Final percentage in course: " + finalScore + "%" + "\nThat is a(n) " +"E");
    }
})