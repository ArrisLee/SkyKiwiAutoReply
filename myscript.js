console.log("Process start...");
//initial reply message(s)
var dataset = ["your messages one","your messages two"];

//set minumun and maxiam waiting time for autoreply
var max = 300000;
var min = 120000;
var pause = Math.random() * (max - min) + min;

//randomly selected a reply message from dataset
var index = Math.floor(Math.random() * dataset.length);
var msg = dataset[index];
console.log("msg: |"+ msg + "| will be posted after " + (pause/1000).toFixed(1) + " seconds");

//auto answer verify question
setTimeout(function(){
  var x = document.getElementsByClassName('p_pop p_opt');
  if (x.length != 0) {
    var question = x[0].textContent.substr(9,7);
    var answer = eval(question);
    document.getElementsByName("secanswer")[0].value = answer;
    console.log("Question: " + question + "\nAnswer: " + answer);
  } else {
    console.log('No question identified.');
  }
}, 3500);

//set time out and submit the reply
setTimeout(function(){
  document.getElementById('fastpostmessage').value = msg;
  document.getElementById("fastpostform").submit();
}, pause);
