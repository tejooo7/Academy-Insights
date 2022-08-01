// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// first message
function firstBotMessage() {
    let firstMessage = "Hi, it's great to see you!"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}



firstBotMessage();

// 
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "Help! ";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}
//redirect
function redirect1()
{
window.location="file:///C:/Users/User/Desktop/PROJECT/templates/c&c++.html"
}
function redirect2()
{
window.location="file:///C:/Users/User/Desktop/PROJECT/templates/AWT.html"
}
function redirect3()
{
window.location="file:///C:/Users/User/Desktop/PROJECT/templates/DSA.html"
}
function redirect4()
{
window.location="file:///C:/Users/User/Desktop/PROJECT/templates/Dotnet.html"
}
function redirect5()
{
window.location="file:///C:/Users/User/Desktop/PROJECT/templates/DM.html"
}

function redirect6()
{
window.location="file:///C:/Users/User/Desktop/PROJECT/templates/TOC.html"
}
function redirect7()
{
window.location="file:///C:/Users/User/Desktop/PROJECT/templates/ADBMS.html"
}function redirect8()
{
window.location="file:///C:/Users/User/Desktop/PROJECT/templates/DCCN.html"
}
function redirect9(){
window.location="file:///C:/Users/User/Desktop/PROJECT/templates/ISCL.html"
}
function redirect10()
{
window.location="file:///C:/Users/User/Desktop/PROJECT/templates/datascience.html"
}

  



// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

   
}

function sendButton() {
    getResponse("");
}

function heartButton() {
    buttonSendText("❤️ ")
    
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
}
);