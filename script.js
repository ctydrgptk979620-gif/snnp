// ===== ELEMENTE DE BAZĂ =====
const usernameInput = document.getElementById("username-input");
const connectingUsername = document.getElementById("connecting-username");
const connectedUsername = document.getElementById("connected-username");

const idleState = document.getElementById("idle-state");
const connectingState = document.getElementById("connecting-state");
const connectedState = document.getElementById("connected-state");

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupUsername = document.getElementById("popup-username");
const popupIcon = document.getElementById("popup-icon");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

// ===== FEATURES =====
const features = [
  { title: "Best Friend List", icon: "💖" },
  { title: "Snapping With Mod", icon: "🧐" },
  { title: "My Eyes Only", icon: "🖼️" },
  { title: "Snap Score", icon: "👀" },
  { title: "Chat History", icon: "💬" },
  { title: "Snap Recap 2025", icon: "📱" }
];

// ===== CONNECT FLOW =====
function handleConnect() {
  const username = usernameInput.value.trim();
  if (!username) return;

  idleState.classList.add("hidden");
  connectingState.classList.remove("hidden");
  connectingUsername.textContent = username;

  setTimeout(() => {
    connectingState.classList.add("hidden");
    connectedState.classList.remove("hidden");
    connectedUsername.textContent = username;
  }, 2000);
}

function handleChange() {
  connectedState.classList.add("hidden");
  idleState.classList.remove("hidden");
  usernameInput.value = "";
}

// ===== FEATURE CLICK =====
function handleFeatureClick(index) {
  if (!connectedUsername.textContent) return;

  const feature = features[index];

  popupTitle.textContent = feature.title;
  popupIcon.textContent = feature.icon;
  popupUsername.textContent = connectedUsername.textContent;

  progressFill.style.width = "0%";
  progressText.textContent = "0%";

  popup.classList.remove("hidden");

  simulateProgress();
}

// ===== PROGRESS SIMULATION =====
function simulateProgress() {
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 3; // random realism

    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
    }

    progressFill.style.width = progress + "%";
    progressText.textContent = progress + "%";
  }, 180);
}

// ===== CLOSE POPUP =====
function closePopup() {
  popup.classList.add("hidden");
}
