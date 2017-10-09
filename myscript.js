console.log("Process start...");
//initial reply selections
var dataset = ["国庆特惠: 所有新客户皆可享受85折优惠！","我们期待为您提供高质量、高性价比的服务！"];

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
