var player1_name = localStorage.getItem("player_1")
var player2_name = localStorage.getItem("player_2")
var player1score = 0;
var player2score = 0;
document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;
document.getElementById("player1_score").innerHTML=":"+player1score;
document.getElementById("player2_score").innerHTML=":"+player2score;
document.getElementById("player_question").innerHTML="Question Turn:"+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn:"+player2_name;
function send() {
    number1=document.getElementById("no1").value;
    number2=document.getElementById("no2").value;
    actual_answer=parseInt(no1)*parseInt(no2);
    question_number="<h4>"+number1+"X" +number2+"</h4>";
    input_box="<br><br>Answer:<input type='text' id='input_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("no1").value="";
    document.getElementById("no2").value="";
}
