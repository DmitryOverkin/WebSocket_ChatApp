const ws = new WebSocket("ws://localhost:3000");

ws.onmessage = async (event) => {
  const chat = document.getElementById("chat");
  const message = document.createElement("div");
  message.classList.add("alert", "alert-secondary", "text-wrap");

  const reader = new FileReader();
  reader.onload = () => {
    message.textContent = reader.result;
    chat.insertBefore(message, chat.firstChild);
    chat.scrollTop = chat.scrollHeight;
  };
  reader.readAsText(event.data);
};

document.getElementById("send").onclick = () => {
  const messageInput = document.getElementById("message");
  const message = messageInput.value;
  if (message.length === 0) {
    return
  } else {
    ws.send(message);
    messageInput.value = "";
  }
};


