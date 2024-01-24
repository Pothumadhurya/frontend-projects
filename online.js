var questions=[
    "the father of c,c++ & unix is",
    "the open source among following is",
    "pancake sorting algorithm and basic interpreter was written by",
    "larry page and sergei brinn on co-founders of",
    "the first computer to defeat chess grandmaster was "

]
questionNo=0;
choosed=false;
noofquestions=questions.length;
answers=new Array(noofquestions);
correctanswers=new Array(noofquestions);
marks=0;
answer=5
for (var i=0; i< noofquestions; i++){
    answers[i] = new Array(4);

}
answers[0][0] = "Forouzan";
answers[0][1] = "Dennis Ritchie";
answers[0][2] = "Andrew Tenenbaum";
answers[0][3] = "Dijkstra";
correctanswers[0]=2;

answers[1][0] = "Windows XP";
answers[1][1] = "Mac OS X";
answers[1][2] = "Linux Ubuntu";
answers[1][3] = "Sun Solaris";
correctanswers[1]=4;

answers[2][0] = "Steve Jobs";
answers[2][1] = "Steve William";
answers[2][2] = "Bill Gates";
answers[2][3] = "Jerry yang";
correctanswers[2]=3;

answers[3][0] = "Yahoo";
answers[3][1] = "Rediff";
answers[3][2] = "Google";
answers[3][3] = "Apple";
correctanswers[3]=3;

answers[4][0] = "Chess Zeus";
answers[4][1] = "Armageddon";
answers[4][2] = "White Knight";
answers[4][3] = "Deep Blue";
correctanswers[4] = 4;

function answerchoosed(ans){
    answer=ans;
    choosed=true;
    //alert(ans);
    //alert(answer);
}

function show(){
    
    document.getElementById("question").innerHTML="("+(questionNo+1)+")"+questions[questionNo];


      document.getElementById("Option0").innerHTML = 
              answers[questionNo][0];
      document.getElementById("Option1").innerHTML = 
              answers[questionNo][1];
      document.getElementById("Option2").innerHTML = 
              answers[questionNo][2];
      document.getElementById("Option3").innerHTML = 
              answers[questionNo][3];
      document.getElementById("Opt1").checked = false;	
      document.getElementById("Opt2").checked = false;	
      document.getElementById("Opt3").checked = false;	
      document.getElementById("Opt4").checked = false;
          
  }
  
  function NextQuestion() {
    if (correctanswers[questionNo]==answer){
        //alert(correct);
        marks++;
    }
    questionNo++;
    if (questionNo==noofquestions){
        alert("total score is "+marks);
      }
      show();
  }