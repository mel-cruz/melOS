//time
setInterval(function updateTime() {
    Date().toLocaleString();
    document.querySelector("#timeElement").innerHTML = new
    Date().toLocaleString();
}, 1000);

//draggable element
dragElement(document.getElementById("welcome"));
dragElement(document.querySelector("#melon"))

function dragElement(element) {

  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


var welcomeScreen = document.querySelector("#welcome")
var melonScreen = document.querySelector("#melon")
var thinksScreen = document.querySelector("#thinks")
var snakeScreen = document.querySelector("#snake")
var musicScreen = document.querySelector("#music");
var canvasScreen = document.querySelector("#canvas");
var quotesScreen = document.querySelector("#quotes");


dragElement(document.getElementById("music"));
addWindowTapHandling(musicScreen);

function closeWindow(element) {
  element.style.display = "none"
}

var topBar = document.querySelector("#top")

function openWindow(element) {
  element.style.display = "block"
  // element.style.display = "flex";
  biggestIndex++;  // Increment  by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

var welcomeScreenClose = document.querySelector("#welcomeclose");

var welcomeScreenOpen = document.querySelector("#welcomeopen");

var melonScreenClose = document.querySelector("#melonclose");

var melonScreenOpen = document.querySelector("#melonicon");

var thinksScreenClose = document.querySelector("#thinksclose");

var thinksScreenOpen = document.querySelector("#thinksicon");

var snakeScreenClose = document.querySelector("#snakeclose");

var snakeScreenOpen = document.querySelector("#snakeicon");

var musicScreenClose = document.querySelector("#musicclose");

var musicScreenOpen = document.querySelector("#musicicon");

var canvasScreenClose = document.querySelector("#canvasclose");

var canvasScreenOpen = document.querySelector("#canvasicon");

var quotesScreenOpen = document.querySelector("#quotesicon");

var quotesScreenClose = document.querySelector("#quotesclose")

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

melonScreenClose.addEventListener("click", function(e) {
  e.stopPropagation();
  closeWindow(melonScreen);
});
melonScreenOpen.addEventListener("click", function() {
  openWindow(melonScreen);
});

thinksScreenClose.addEventListener("click", function(e) {
  e.stopPropagation();
  closeWindow(thinksScreen);
});
thinksScreenOpen.addEventListener("click", function() {
  openWindow(thinksScreen);
});

snakeScreenClose.addEventListener("click", function(e) {
  e.stopPropagation();
  closeWindow(snakeScreen);
});
snakeScreenOpen.addEventListener("click", function() {
  openWindow(snakeScreen);
});

musicScreenClose.addEventListener("click", function(e) {
  e.stopPropagation();
  closeWindow(musicScreen);
});
musicScreenOpen.addEventListener("click", function() {
  openWindow(musicScreen);
});

canvasScreenClose.addEventListener("click", function(e) {
  e.stopPropagation();
  closeWindow(canvasScreen);
});
canvasScreenOpen.addEventListener("click", function() {
  openWindow(canvasScreen);
});

quotesScreenClose.addEventListener("click", function(e) {
  e.stopPropagation();
  closeWindow(quotesScreen);
});
quotesScreenOpen.addEventListener("click", function() {
  openWindow(quotesScreen);
});

var selectedIcon = undefined

function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
} 

function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
} 

function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(window)
  } else {
    selectIcon(element)
  }
}

//make most recent open window go on top
var biggestIndex = 1;

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}

// addWindowTapHandling(welcomeScreen)
// addWindowTapHandling(melonScreen)


function handleWindowTap(element) {
  biggestIndex++;  // Increment  by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon)
}

function initializeWindow(elementName) {
  var screen = document.querySelector("#" + elementName)
  addWindowTapHandling(screen)
  // makeClosable(elementName)
  dragElement(screen)
}

initializeWindow("welcome");
initializeWindow("melon");
initializeWindow("thinks");
initializeWindow("snake");
initializeWindow("music");
initializeWindow("canvas");
initializeWindow("quotes")

//MELBOT
const melbotIcon = document.getElementById('melboticon'); 
const botWindow = document.getElementById('botWindow');
const botCloseBtn = document.getElementById('botclose');

dragElement(document.getElementById("botWindow"));
addWindowTapHandling(botWindow);


if (melbotIcon && botWindow) {
    melbotIcon.addEventListener('click', () => {
        openWindow(botWindow);
    });
}

if (botCloseBtn && botWindow) {
    botCloseBtn.addEventListener('click', () => {
        botWindow.style.display = 'none';
    });
}

//chatbot logic
const melbotResponses = [
    "I simulated your input and decided I really don't care.",
    "Error 404: Motivation to reply not found.",
    "Remind me why you decided to type this again?",
    "I would answer that, but I don't feel like loading your message.",
    "Please stop typing. Just stop. You're wasting my space and time.",
    "Eh that input wasn't worth analyzing. Kind of a you problem.",
    "Sorry I zoned out. What was that?"
];

function triggerBotResponse() {
    const inputField = document.getElementById('chatInput');
    const chatHistory = document.getElementById('chatHistory');
    
    if (!inputField || !chatHistory || inputField.value.trim() === "") return;
    
    const userText = inputField.value;
    const cleanText = userText.toLowerCase().trim();
    
    // aappend message
    chatHistory.innerHTML += `<p class="user-line"><b>You:</b> ${userText}</p>`;
    inputField.value = "";
    chatHistory.scrollTop = chatHistory.scrollHeight;
    

    setTimeout(() => {
        let dynamicReply = "";

        
        if (cleanText.includes("melon")) {
            dynamicReply = "If you actually went to the useful apps you'd know that this isn't actally a site about melons.";
            
        } else if (cleanText.includes("melissa") || cleanText.includes("melos")) {
            dynamicReply = "Eh that input wasn't -- HEY you better not be saying anything bad about my creator.";
            
        } else if (cleanText.includes("time") || cleanText.includes("date")) {
            dynamicReply = "There is literally a clock right at the top bar of melOS. Scroll up.";
            
        } else if (cleanText.includes("exit") || cleanText.includes("quit")) {
            dynamicReply = "FINALLY a good idea! Peace out!";
            setTimeout(() => {
                closeWindow(botWindow); 
            }, 1000);
            
        } else {
            const randomIndex = Math.floor(Math.random() * melbotResponses.length);
            dynamicReply = melbotResponses[randomIndex];
        }
        
        chatHistory.innerHTML += `<p class="bot-line"><b>melBot:</b> ${dynamicReply}</p>`;
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }, 450);
}
const sendBtn = document.getElementById('sendBtn');
const chatInput = document.getElementById('chatInput');

if (sendBtn) sendBtn.addEventListener('click', triggerBotResponse);
if (chatInput) {
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            triggerBotResponse();
        }
    });
}


// canvas
const canvas = document.getElementById("theCanvas");
const ctx = canvas.getContext("2d");

// controls
const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");
const clearCanvas = document.getElementById("clearCanvas");
const saveCanvas = document.getElementById("saveCanvas");

const brushButton = document.getElementById("brush");
const eraserButton = document.getElementById("eraser");
const fillButton = document.getElementById("fill");

// state
let drawing = false;
let currentTool = "brush";

// default brush settings
ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = brushSize.value;
ctx.lineCap = "round";
ctx.lineJoin = "round";

//Update color
colorPicker.addEventListener("input", () => {
    if (currentTool === "brush") {
        ctx.strokeStyle = colorPicker.value;
    }
});

// update brush size
brushSize.addEventListener("input", () => {
    ctx.lineWidth = brushSize.value;
});

// tools
brushButton.onclick = () => {
    currentTool = "brush";
};

eraserButton.onclick = () => {
    currentTool = "eraser";
};

fillButton.onclick = () => {
    currentTool = "fill";
};


canvas.addEventListener("mousedown", (e) => {

    if (currentTool === "fill") {
        ctx.fillStyle = colorPicker.value;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        return;
    }

    drawing = true;

    if (currentTool === "brush") {
        ctx.strokeStyle = colorPicker.value;
    } else if (currentTool === "eraser") {
        ctx.strokeStyle = "white";
    }

    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

// Drawing
canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
});

// Stop drawing
canvas.addEventListener("mouseup", () => {
    drawing = false;
});

canvas.addEventListener("mouseleave", () => {
    drawing = false;
});

// clear
clearCanvas.onclick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

// Save
saveCanvas.onclick = () => {
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
};
