let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainerElement = document.getElementById('chatContainer');

counter = 0;

let inputElement = document.getElementById("userInput");
let buttonElement = document.getElementById("sendMsgBtn");

buttonElement.onclick = function() {

    let inputText = inputElement.value;
    let chatBotMessage = chatbotMsgList[Math.ceil(Math.random() * chatbotMsgList.length) - 1];



    let userchatContainer = document.createElement("div");
    userchatContainer.classList.add("msg-to-chatbot-container");
    chatContainerElement.appendChild(userchatContainer);

    let textEnteredElement = document.createElement("span");
    textEnteredElement.classList.add("msg-to-chatbot");
    textEnteredElement.textContent = inputText;
    userchatContainer.appendChild(textEnteredElement);

    inputElement.value = "";

    let chatboxTextContainer = document.createElement("div");
    chatboxTextContainer.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(chatboxTextContainer);

    let chatbotTextElement = document.createElement("span");
    chatbotTextElement.classList.add("msg-from-chatbot");
    chatbotTextElement.textContent = chatBotMessage;
    chatboxTextContainer.appendChild(chatbotTextElement);
}