//time
setInterval(function updateTime() {
    Date().toLocaleString();
    document.querySelector("#timeElement").innerHTML = new
    Date().toLocaleString();
}, 1000);

//draggable element
dragElement(document.getElementById("welcome"));
dragElement(document.querySelector("#melon"))

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
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

// Mount draggable utility and depth layer tap listeners
dragElement(document.getElementById("music"));
addWindowTapHandling(musicScreen);

function closeWindow(element) {
  element.style.display = "none"
}

var topBar = document.querySelector("#top")

function openWindow(element) {
  element.style.display = "block"
  // element.style.display = "flex";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

var melonScreenClose = document.querySelector("#melonclose")

var melonScreenOpen = document.querySelector("#melonicon")

var thinksScreenClose = document.querySelector("#thinksclose")

var thinksScreenOpen = document.querySelector("#thinksicon")

var snakeScreenClose = document.querySelector("#snakeclose")

var snakeScreenOpen = document.querySelector("#snakeicon")

var musicScreenClose = document.querySelector("#musicclose")

var musicScreenOpen = document.querySelector("#musicicon")


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
  biggestIndex++;  // Increment biggestIndex by 1
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

initializeWindow("welcome")
initializeWindow("melon")
initializeWindow("thinks")
initializeWindow("snake")

//MELBOT
const melbotIcon = document.getElementById('melboticon'); 
const botWindow = document.getElementById('botWindow');
const botCloseBtn = document.getElementById('botclose');

dragElement(document.getElementById("botWindow"));
addWindowTapHandling(botWindow);

// Open window when icon is clicked
// Native melBot integration into your window events
if (melbotIcon && botWindow) {
    melbotIcon.addEventListener('click', () => {
        openWindow(botWindow); // Leverages your core layer architecture 
    });
}

// Close window when button is clicked
if (botCloseBtn && botWindow) {
    botCloseBtn.addEventListener('click', () => {
        botWindow.style.display = 'none';
    });
}

//chatbot logic
const melbotResponses = [
    "I simulated your input and decided I simply don't care.",
    "Error 404: Motivation to reply not found.",
    "Remind me why you decided to type this again?",
    "I would answer that, but I don't feel like loading your message.",
    "Please stop typing. You are wasting my space and time.",
    "Eh that input wasn't worth analyzing. Kind of a you problem.",
    "Sorry I zoned out. What was that?"
];

function triggerBotResponse() {
    const inputField = document.getElementById('chatInput');
    const chatHistory = document.getElementById('chatHistory');
    
    if (!inputField || !chatHistory || inputField.value.trim() === "") return;
    
    // 1. Capture and save the lowercase text input to read it easily
    const userText = inputField.value;
    const cleanText = userText.toLowerCase().trim();
    
    // Append your message
    chatHistory.innerHTML += `<p class="user-line"><b>You:</b> ${userText}</p>`;
    inputField.value = "";
    chatHistory.scrollTop = chatHistory.scrollHeight;
    
    // Simulate thinking delay
    setTimeout(() => {
        let dynamicReply = "";

        // 2. SECRET KEYWORD SCANNER (Intercepts random replies)
        if (cleanText.includes("melon")) {
            dynamicReply = "If you actually went to the useful apps you'd know that this isn't actally a site about melons.";
            
        } else if (cleanText.includes("melissa") || cleanText.includes("melos")) {
            dynamicReply = "You better not be saying anything bad about my creator.";
            
        } else if (cleanText.includes("time") || cleanText.includes("date")) {
            dynamicReply = "There is literally a clock right at the top bar of melOS. Scroll up.";
            
        } else if (cleanText.includes("exit") || cleanText.includes("quit")) {
            dynamicReply = "FINALLY a good idea! Peace out!";
            // automatically exit
            setTimeout(() => {
                closeWindow(botWindow); 
            }, 1000);
            
        } else {
            // 3. Fallback to your signature random list if no keyword matches
            const randomIndex = Math.floor(Math.random() * melbotResponses.length);
            dynamicReply = melbotResponses[randomIndex];
        }
        
        chatHistory.innerHTML += `<p class="bot-line"><b>melBot:</b> ${dynamicReply}</p>`;
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }, 450);
}
// Attach event listeners for sending text
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