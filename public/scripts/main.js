const ws = new WebSocket("ws://localhost:3000");

ws.onmessage = async (event) => {
  const chat = document.getElementById("chat");
  const message = document.createElement("div");
  message.classList.add("alert", "alert-secondary");

  const reader = new FileReader();
  reader.onload = () => {
    message.textContent = reader.result;
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
  };
  reader.readAsText(event.data);
};

document.getElementById("send").onclick = () => {
  const messageInput = document.getElementById("message");
  const message = messageInput.value;
  ws.send(message);
  messageInput.value = "";
};
