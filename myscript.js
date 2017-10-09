console.log("Process start...");
//initial reply selections
var dataset = ["your messages one","your messages two"];

//set min max waiting time for autoreply
var max = 60000;
var min = 30000;
var pause = Math.random() * (max - min) + min;

//randomly selected a reply from dataset
var index = Math.floor(Math.random() * dataset.length);
var msg = dataset[index];

console.log("msg: |"+ msg + "| will be posted after " + (pause/1000).toFixed(1) + " seconds");

//set time out
setTimeout(function(){
  document.getElementById('fastpostmessage').value = msg;
  document.getElementById("fastpostform").submit();
}, pause);
