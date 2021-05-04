function a()
{
    x=localStorage.getItem("player1-name")
    y=localStorage.getItem("player2-name")
    player1score=0;
    player2score=0;
    document.getElementById("player1_name").innerHTML=x+":";
    document.getElementById("player2_name").innerHTML=y+":";
    document.getElementById("player1_score").innerHTML=player1score;
    document.getElementById("player2_score").innerHTML=player2score;
    document.getElementById("player_question").innerHTML="Question turn -"+x;
    document.getElementById("player_answer").innerHTML="Answer turn -"+y;
}

function send()
{
    number1=document.getElementById("number1_input").value;
    number2=document.getElementById("number2_input").value;
    actual_answer=parseInt(number1) * parseInt(number2);
    question_number="<h4>"+ number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn="player1";
answer_turn="player2";

function check()
{
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actual_answer)
    {
        if(answer_turn=="player1")
        {
            player1score=player1score+1;
            document.getElementById("player1_score").innerHTML=player1score;
        }
        else
        {
            player2score=player2score+1;
            document.getElementById("player2_score").innerHTML=player2score;
        }
    }   
       if(question_turn=="player1")
       {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn- " + y;
       }
       else
      {
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn- " + x;
      }

      if(answer_turn=="player1")
      {
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn- " + y;
     }
     else
     {
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn- " + x;
     }
     document.getElementById("output").innerHTML="";
}