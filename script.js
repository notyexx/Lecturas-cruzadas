const intro = document.getElementById("intro");
const setup = document.getElementById("setup");
const avatarPicker = document.getElementById("avatarPicker");
const lobby = document.getElementById("lobby");
const gameShell = document.querySelector(".game-shell");
const startButton = document.getElementById("startButton");
const backButton = document.getElementById("backButton");
const closePickerButton = document.getElementById("closePickerButton");
const lobbyBackButton = document.getElementById("lobbyBackButton");
const nameForm = document.getElementById("nameForm");
const playerName = document.getElementById("playerName");
const localPlayerNameInput = document.getElementById("localPlayerName");
const localPlayerAvatarSelect = document.getElementById("localPlayerAvatar");
const lobbyGreeting = document.getElementById("lobbyGreeting");
const lobbyAvatar = document.getElementById("lobbyAvatar");
const characterGrid = document.getElementById("characterGrid");
const avatarPreview = document.getElementById("avatarPreview");
const playerCount = document.getElementById("playerCount");
const playerList = document.getElementById("playerList");
const startGameButton = document.getElementById("startGameButton");
const gamePage = document.getElementById("gamePage");
const musicToggleButton = document.getElementById("musicToggleButton");
const musicStatus = document.getElementById("musicStatus");
const gameEyebrow = document.getElementById("gameEyebrow");
const gameTitle = document.getElementById("gameTitle");
const gameInfo = document.getElementById("gameInfo");
const cardRound = document.getElementById("cardRound");
const cardOptions = document.getElementById("cardOptions");
const nextCardButton = document.getElementById("nextCardButton");
const drawingBoard = document.getElementById("drawingBoard");
const boardPrompt = document.getElementById("boardPrompt");
const targetSilhouette = document.getElementById("targetSilhouette");
const drawingCanvas = document.getElementById("drawingCanvas");
const drawingSurface = document.getElementById("drawingSurface");
const selectedColorSwatch = document.getElementById("selectedColorSwatch");
const selectedColorName = document.getElementById("selectedColorName");
const brushSize = document.getElementById("brushSize");
const brushIntensity = document.getElementById("brushIntensity");
const brushIntensityValue = document.getElementById("brushIntensityValue");
const selectedCardList = document.getElementById("selectedCardList");
const drawingTools = document.getElementById("drawingTools");
const stickerTray = document.getElementById("stickerTray");
const graphicStickerButton = document.getElementById("graphicStickerButton");
const graphicStickerIcon = document.getElementById("graphicStickerIcon");
const graphicStickerName = document.getElementById("graphicStickerName");
const drawingToolButtons = document.querySelectorAll(".drawing-tool-button");
const drawTimerDisplay = document.getElementById("drawTimer");
const finishDrawingButton = document.getElementById("finishDrawingButton");
const guessingPhase = document.getElementById("guessingPhase");
const guessingEyebrow = document.getElementById("guessingEyebrow");
const guessingTitle = document.getElementById("guessingTitle");
const guessTurnPrompt = document.getElementById("guessTurnPrompt");
const guessInstructions = document.getElementById("guessInstructions");
const intentChoices = document.getElementById("intentChoices");
const guessActionButton = document.getElementById("guessActionButton");
const guessResults = document.getElementById("guessResults");
const guessCorrectAnswer = document.getElementById("guessCorrectAnswer");
const guessResultsList = document.getElementById("guessResultsList");
const scoreboardRows = document.getElementById("scoreboardRows");
const newGameButton = document.getElementById("newGameButton");
const optionsPanel = document.getElementById("optionsPanel");
const closeOptionsButton = document.getElementById("closeOptionsButton");
const languageSelect = document.getElementById("languageSelect");
const cardsByType = {
  outline: [
    { icon: "👤", es: "Persona", en: "Person" },
    { icon: "🧒", es: "Niño", en: "Child" },
    { icon: "👵", es: "Persona mayor", en: "Older person" },
    { icon: "🧑‍🍳", es: "Cocinero", en: "Cook" },
    { icon: "🧑‍🚀", es: "Astronauta", en: "Astronaut" },
    { icon: "🐶", es: "Perro", en: "Dog" },
    { icon: "🐈", es: "Gato", en: "Cat" },
    { icon: "🐰", es: "Conejo", en: "Rabbit" },
    { icon: "🐦", es: "Pájaro", en: "Bird" },
    { icon: "🐟", es: "Pez", en: "Fish" },
    { icon: "🐢", es: "Tortuga", en: "Turtle" },
    { icon: "🦋", es: "Mariposa", en: "Butterfly" },
    { icon: "🐘", es: "Elefante", en: "Elephant" },
    { icon: "🐎", es: "Caballo", en: "Horse" },
    { icon: "☕", es: "Taza", en: "Cup" },
    { icon: "📚", es: "Libros", en: "Books" },
    { icon: "🏠", es: "Casa", en: "House" },
    { icon: "🌳", es: "Árbol", en: "Tree" },
    { icon: "🚲", es: "Bicicleta", en: "Bicycle" },
    { icon: "☂️", es: "Paraguas", en: "Umbrella" },
  ],
  color: [
    { es: "Rojo", en: "Red", color: "#e95f5f" },
    { es: "Coral", en: "Coral", color: "#ff806b" },
    { es: "Naranja", en: "Orange", color: "#f5a142" },
    { es: "Amarillo", en: "Yellow", color: "#f6d565" },
    { es: "Lima", en: "Lime", color: "#b7d96c" },
    { es: "Verde", en: "Green", color: "#5ebc78" },
    { es: "Menta", en: "Mint", color: "#78d7bc" },
    { es: "Turquesa", en: "Turquoise", color: "#54c9c4" },
    { es: "Cian", en: "Cyan", color: "#64bde0" },
    { es: "Azul cielo", en: "Sky blue", color: "#73a9ed" },
    { es: "Azul", en: "Blue", color: "#5079d5" },
    { es: "Índigo", en: "Indigo", color: "#6d64bf" },
    { es: "Violeta", en: "Violet", color: "#9764c5" },
    { es: "Lila", en: "Lilac", color: "#c293df" },
    { es: "Rosa", en: "Pink", color: "#ec86b8" },
    { es: "Fucsia", en: "Magenta", color: "#d958a1" },
    { es: "Beige", en: "Beige", color: "#dcc49b" },
    { es: "Marrón", en: "Brown", color: "#9b6b50" },
    { es: "Gris", en: "Gray", color: "#929eaa" },
    { es: "Negro", en: "Black", color: "#394553" },
  ],
  graphic: [
    { icon: "☁️", es: "Nube", en: "Cloud" },
    { icon: "🌧️", es: "Lluvia", en: "Rain" },
    { icon: "⚡", es: "Rayo", en: "Lightning" },
    { icon: "⭐", es: "Estrella", en: "Star" },
    { icon: "🌙", es: "Luna", en: "Moon" },
    { icon: "☀️", es: "Sol", en: "Sun" },
    { icon: "🌸", es: "Flor", en: "Flower" },
    { icon: "🍃", es: "Hoja", en: "Leaf" },
    { icon: "💖", es: "Corazón", en: "Heart" },
    { icon: "🌀", es: "Espiral", en: "Spiral" },
    { icon: "🔵", es: "Puntos", en: "Dots" },
    { icon: "〰️", es: "Líneas curvas", en: "Curved lines" },
    { icon: "🔺", es: "Triángulos", en: "Triangles" },
    { icon: "🎊", es: "Confeti", en: "Confetti" },
    { icon: "◯", es: "Burbujas", en: "Bubbles" },
    { icon: "🔥", es: "Fuego", en: "Fire" },
    { icon: "💨", es: "Viento", en: "Wind" },
    { icon: "💧", es: "Agua", en: "Water" },
    { icon: "🌫️", es: "Niebla", en: "Fog" },
    { icon: "✨", es: "Destellos", en: "Sparkles" },
  ],
  intent: [
    { icon: "😄", es: "Alegría", en: "Joy" },
    { icon: "😢", es: "Tristeza", en: "Sadness" },
    { icon: "😲", es: "Sorpresa", en: "Surprise" },
    { icon: "😨", es: "Miedo", en: "Fear" },
    { icon: "😌", es: "Calma", en: "Calm" },
    { icon: "😠", es: "Enojo", en: "Anger" },
    { icon: "🌱", es: "Esperanza", en: "Hope" },
    { icon: "🔎", es: "Curiosidad", en: "Curiosity" },
    { icon: "🥰", es: "Ternura", en: "Affection" },
    { icon: "🏆", es: "Orgullo", en: "Pride" },
    { icon: "😳", es: "Vergüenza", en: "Embarrassment" },
    { icon: "🤝", es: "Confianza", en: "Trust" },
    { icon: "💭", es: "Nostalgia", en: "Nostalgia" },
    { icon: "🙏", es: "Gratitud", en: "Gratitude" },
    { icon: "😣", es: "Frustración", en: "Frustration" },
    { icon: "🦸", es: "Valentía", en: "Courage" },
    { icon: "🕵️", es: "Misterio", en: "Mystery" },
    { icon: "🫶", es: "Amistad", en: "Friendship" },
    { icon: "🎉", es: "Celebrar", en: "Celebrate" },
    { icon: "🛡️", es: "Proteger", en: "Protect" },
  ],
};

const translations = {
  es: {
    gameAria: "Partida",
    gameTitle: "Elige tus cartas",
    chooseHint: "Elige una de las tres cartas para revelarla.",
    cardStep: "TIPO {number} DE 4",
    choose_outline: "Elige un contorno",
    choose_color: "Elige un color",
    choose_graphic: "Elige un elemento gráfico",
    choose_intent: "Elige una intención o emoción",
    choiceAria: "Opción {number}",
    revealed: "Elegiste: {name}",
    nextCard: "Continuar",
    openBoard: "Abrir tablero",
    boardTitle: "¡Ahora a dibujar!",
    boardEyebrow: "TU TABLERO",
    drawerTurn: "Turno de {name} para dibujar.",
    boardPrompt: "Dibuja el contorno de: {name}",
    boardHint: "El contorno ya está dibujado. Exprésate con el color y el elemento gráfico.",
    drawingResultPrompt: "Dibujo terminado: {name}",
    selectedCardsTitle: "Tus cartas",
    selectedColor: "Color elegido",
    selectedColorLabel: "Color fijo: {color}",
    musicEnable: "Activar música ambiental",
    musicDisable: "Desactivar música ambiental",
    musicOn: "Música ambiental activada.",
    musicOff: "Música ambiental desactivada.",
    musicUnsupported: "Este navegador no admite música ambiental.",
    musicError: "No se pudo iniciar la música ambiental.",
    drawingTools: "Herramientas de dibujo",
    pencilTool: "Lápiz",
    markerTool: "Marcador",
    eraserTool: "Borrador",
    brushIntensity: "Intensidad",
    addGraphicSticker: "Añadir {name} como sticker",
    stickerHint: "Toca o arrastra el sticker al tablero.",
    moveGraphicSticker: "Mover sticker de {name}",
    timeRemaining: "Tiempo restante",
    finishDrawing: "Terminar dibujo",
    guessingAria: "Adivina la intención",
    guessingEyebrow: "FASE DE ADIVINANZA",
    guessTitle: "¿Qué intención quiso transmitir?",
    guessInstructions: "Pasa el dispositivo al jugador indicado y elige una respuesta. Nadie verá la solución hasta que todos hayan adivinado.",
    soloGuesser: "Turno de práctica en solitario.",
    soloGuessInstructions: "No hay otros jugadores; haz una adivinanza de práctica.",
    guessTurn: "Turno de {name}.",
    guessActionNext: "Siguiente jugador",
    guessActionResults: "Ver resultado",
    guessResultsTitle: "Resultado",
    guessCorrectAnswer: "La intención era: {name}",
    guessCorrect: "Adivinó",
    guessIncorrect: "No adivinó",
    guessResultLine: "{player}: {guess} — {result}",
    resultsEyebrow: "RESULTADO",
    resultsTitle: "Intención revelada",
    scoreboardTitle: "Tabla de puntajes",
    scoreboardLabel: "Clasificación de jugadores",
    scoreRank: "Puesto",
    scorePlayer: "Jugador",
    scorePoints: "Puntos",
    scoreRule: "Cada acierto vale 1 punto; quien dibuja recibe 1 si alguien acierta.",
    newGame: "Nueva partida",
    brushColor: "Color",
    brushSize: "Grosor",
    clearDrawing: "Borrar dibujo",
    drawingCanvas: "Lienzo para dibujar",
    backLobby: "Volver a jugadores",
    cardOutline: "Contorno",
    cardColor: "Color",
    cardGraphic: "Elemento gráfico",
    cardIntent: "Intención o emoción",
    playerCount: "Jugadores: {count} / 10",
    playerLimit: "Entre 1 y 10 jugadores.",
    startGame: "Iniciar partida",
    cardPrompt: "Dibuja o representa:",
    profileAria: "Crea tu perfil",
    avatarPickerAria: "Elige tu avatar",
    avatarGroup: "Elige entre 50 avatares",
    lobbyAria: "Lista de jugadores",
    tagline: "¡Deja hablar a tus emociones!",
    chooseAvatar: "Elegir avatar",
    profileEyebrow: "PERSONALIZA TU PERFIL",
    profileTitle: "Crea tu perfil",
    profileStep: "2 / 3",
    avatarHelp: "Toca tu avatar para cambiarlo",
    nameLabel: "Escribe tu nombre",
    namePlaceholder: "Escribe tu nombre",
    continue: "Continuar",
    avatarOptions: "50 OPCIONES",
    avatarTitle: "Elige tu avatar",
    lobbyEyebrow: "TU PERFIL ESTÁ LISTO",
    lobbyIntro: "¡Juega con tus amigos!",
    localGameTitle: "Jugar en este dispositivo",
    localGameInfo: "Agrega a quienes jugarán y pasen el dispositivo por turnos.",
    localPlayerNameLabel: "Nombre del jugador",
    localPlayerNamePlaceholder: "Nombre",
    localPlayerAvatarLabel: "Avatar",
    addLocalPlayer: "Añadir jugador",
    localNote: "Partida local: todo se guarda en este dispositivo.",
    optionsTitle: "Opciones",
    options: "Opciones",
    closeOptions: "Cerrar opciones",
    languageLabel: "Idioma",
    back: "Volver",
    backProfile: "Volver a tu perfil",
    hello: "¡Hola, {name}!",
    avatar: "Avatar",
    selectedAvatar: "Cambiar avatar. Seleccionado: avatar {number}",
    emptyName: "Necesitamos tu nombre",
  },
  en: {
    gameAria: "Game",
    gameTitle: "Choose your cards",
    chooseHint: "Choose one of the three cards to reveal it.",
    cardStep: "TYPE {number} OF 4",
    choose_outline: "Choose an outline",
    choose_color: "Choose a color",
    choose_graphic: "Choose a graphic element",
    choose_intent: "Choose an intention or emotion",
    choiceAria: "Option {number}",
    revealed: "You chose: {name}",
    nextCard: "Continue",
    openBoard: "Open drawing board",
    boardTitle: "Now let's draw!",
    boardEyebrow: "YOUR DRAWING BOARD",
    drawerTurn: "{name}'s turn to draw.",
    boardPrompt: "Draw the outline of: {name}",
    boardHint: "The outline is already drawn. Express yourself with the color and graphic element.",
    drawingResultPrompt: "Drawing complete: {name}",
    selectedCardsTitle: "Your cards",
    selectedColor: "Chosen color",
    selectedColorLabel: "Fixed color: {color}",
    musicEnable: "Turn on ambient music",
    musicDisable: "Turn off ambient music",
    musicOn: "Ambient music is on.",
    musicOff: "Ambient music is off.",
    musicUnsupported: "This browser does not support ambient music.",
    musicError: "Ambient music could not be started.",
    drawingTools: "Drawing tools",
    pencilTool: "Pencil",
    markerTool: "Marker",
    eraserTool: "Eraser",
    brushIntensity: "Intensity",
    addGraphicSticker: "Add {name} as a sticker",
    stickerHint: "Tap or drag the sticker onto the board.",
    moveGraphicSticker: "Move {name} sticker",
    timeRemaining: "Time remaining",
    finishDrawing: "Finish drawing",
    guessingAria: "Guess the intention",
    guessingEyebrow: "GUESSING PHASE",
    guessTitle: "What intention was being expressed?",
    guessInstructions: "Pass the device to the named player and choose an answer. The solution stays hidden until everyone has guessed.",
    soloGuesser: "Solo practice turn.",
    soloGuessInstructions: "There are no other players; try a practice guess.",
    guessTurn: "{name}'s turn.",
    guessActionNext: "Next player",
    guessActionResults: "Show result",
    guessResultsTitle: "Results",
    guessCorrectAnswer: "The intention was: {name}",
    guessCorrect: "Guessed correctly",
    guessIncorrect: "Did not guess correctly",
    guessResultLine: "{player}: {guess} — {result}",
    resultsEyebrow: "RESULT",
    resultsTitle: "Intention revealed",
    scoreboardTitle: "Scoreboard",
    scoreboardLabel: "Player ranking",
    scoreRank: "Place",
    scorePlayer: "Player",
    scorePoints: "Points",
    scoreRule: "Each correct guess earns 1 point; the artist earns 1 if anyone guesses correctly.",
    newGame: "New game",
    brushColor: "Color",
    brushSize: "Brush size",
    clearDrawing: "Clear drawing",
    drawingCanvas: "Drawing canvas",
    backLobby: "Back to players",
    cardOutline: "Outline",
    cardColor: "Color",
    cardGraphic: "Graphic element",
    cardIntent: "Intention or emotion",
    playerCount: "Players: {count} / 10",
    playerLimit: "Between 1 and 10 players.",
    startGame: "Start game",
    cardPrompt: "Draw or represent:",
    profileAria: "Create your profile",
    avatarPickerAria: "Choose your avatar",
    avatarGroup: "Choose from 50 avatars",
    lobbyAria: "Player list",
    tagline: "Let your feelings speak!",
    chooseAvatar: "Choose avatar",
    profileEyebrow: "PERSONALIZE YOUR PROFILE",
    profileTitle: "Create your profile",
    profileStep: "2 / 3",
    avatarHelp: "Tap your avatar to change it",
    nameLabel: "Enter your name",
    namePlaceholder: "Enter your name",
    continue: "Continue",
    avatarOptions: "50 OPTIONS",
    avatarTitle: "Choose your avatar",
    lobbyEyebrow: "YOUR PROFILE IS READY",
    lobbyIntro: "Play with your friends!",
    localGameTitle: "Play on this device",
    localGameInfo: "Add all players, then pass the device between turns.",
    localPlayerNameLabel: "Player name",
    localPlayerNamePlaceholder: "Name",
    localPlayerAvatarLabel: "Avatar",
    addLocalPlayer: "Add player",
    localNote: "Local game: everything stays on this device.",
    optionsTitle: "Options",
    options: "Options",
    closeOptions: "Close options",
    languageLabel: "Language",
    back: "Back",
    backProfile: "Back to your profile",
    hello: "Hello, {name}!",
    avatar: "Avatar",
    selectedAvatar: "Change avatar. Selected: avatar {number}",
    emptyName: "Your name is required",
  },
};

const avatarOptions = [
  "👦🏻", "👦🏼", "👦🏽", "👦🏾", "👦🏿",
  "👧🏻", "👧🏼", "👧🏽", "👧🏾", "👧🏿",
  "🧑🏻", "🧑🏼", "🧑🏽", "🧑🏾", "🧑🏿",
  "👩🏻", "👩🏼", "👩🏽", "👩🏾", "👩🏿",
  "👨🏻", "👨🏼", "👨🏽", "👨🏾", "👨🏿",
  "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯",
  "🦁", "🐮", "🐷", "🐸", "🐵", "🐔", "🐧", "🦆", "🦉", "🦇",
  "🐺", "🐴", "🦄", "🐝", "🦋",
];

let selectedLanguage = "es";
let selectedAvatar = { emoji: avatarOptions[0], number: 1, hue: 0 };
let optionsReturnFocus = null;
let localPlayers = [];
let currentChoices = [];
let currentCategoryIndex = 0;
let selectedChoiceIndex = null;
let selectedCards = {};
let drawingContext = null;
let isDrawing = false;
let gamePhase = "cards";
let currentDrawer = null;
let drawingDeadline = 0;
let drawingTimerInterval = null;
let guessPlayers = [];
let guessTurnIndex = 0;
let currentGuessChoiceIndex = null;
let guessRecords = [];
let activeDrawingTool = "pencil";
let draggedSticker = null;
let previousDrawingPoint = null;
let musicAudioContext = null;
let musicMasterGain = null;
let musicLoopTimer = null;
let musicEnabled = false;
let musicStarting = false;
let musicStatusKey = "";
const activeMusicOscillators = new Set();

function translate(key) {
  return translations[selectedLanguage][key];
}

function updateMusicButton(statusKey) {
  if (statusKey !== undefined) {
    musicStatusKey = statusKey;
  }
  const label = translate(musicEnabled ? "musicDisable" : "musicEnable");
  musicToggleButton.textContent = musicEnabled ? "♫" : "♪";
  musicToggleButton.setAttribute("aria-label", label);
  musicToggleButton.title = label;
  musicToggleButton.setAttribute("aria-pressed", String(musicEnabled));
  musicToggleButton.classList.toggle("is-playing", musicEnabled);
  musicToggleButton.disabled = musicStarting;
  musicStatus.hidden = !musicStatusKey;
  if (musicStatusKey) {
    musicStatus.textContent = translate(musicStatusKey);
  }
}

function playAmbientTone(frequency, startAt, duration, volume) {
  const oscillator = musicAudioContext.createOscillator();
  const envelope = musicAudioContext.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, startAt);
  envelope.gain.setValueAtTime(0.0001, startAt);
  envelope.gain.linearRampToValueAtTime(volume, startAt + 0.55);
  envelope.gain.setValueAtTime(volume, startAt + duration - 0.65);
  envelope.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  oscillator.connect(envelope);
  envelope.connect(musicMasterGain);
  oscillator.onended = () => {
    activeMusicOscillators.delete(oscillator);
    oscillator.disconnect();
    envelope.disconnect();
  };
  activeMusicOscillators.add(oscillator);
  oscillator.start(startAt);
  oscillator.stop(startAt + duration + 0.02);
}

function playAmbientPhrase() {
  if (!musicEnabled || !musicAudioContext || musicAudioContext.state !== "running") {
    return;
  }
  const chords = [
    [130.81, 164.81, 196],
    [110, 164.81, 220],
    [87.31, 130.81, 174.61],
    [98, 146.83, 196],
  ];
  const melody = [523.25, 440, 349.23, 392];
  const phraseStart = musicAudioContext.currentTime + 0.05;
  chords.forEach((chord, chordIndex) => {
    const chordStart = phraseStart + chordIndex * 4;
    chord.forEach((frequency, noteIndex) => {
      playAmbientTone(frequency, chordStart + noteIndex * 0.12, 3.8, [0.012, 0.008, 0.006][noteIndex]);
    });
    playAmbientTone(melody[chordIndex], chordStart + 1.05, 2.4, 0.008);
  });
}

async function startMusic() {
  if (musicEnabled || musicStarting) {
    return;
  }
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) {
    updateMusicButton("musicUnsupported");
    return;
  }

  musicStarting = true;
  updateMusicButton();
  try {
    if (!musicAudioContext) {
      musicAudioContext = new AudioContextConstructor();
    }
    if (!musicMasterGain) {
      musicMasterGain = musicAudioContext.createGain();
      musicMasterGain.gain.value = 0.0001;
      musicMasterGain.connect(musicAudioContext.destination);
    }
    await musicAudioContext.resume();
  } catch (error) {
    console.error("Could not initialize ambient music.", error);
    musicStarting = false;
    updateMusicButton("musicError");
    return;
  }

  musicStarting = false;
  musicEnabled = true;
  const now = musicAudioContext.currentTime;
  musicMasterGain.gain.cancelScheduledValues(now);
  musicMasterGain.gain.setValueAtTime(0.0001, now);
  musicMasterGain.gain.linearRampToValueAtTime(0.7, now + 0.5);
  updateMusicButton("musicOn");
  playAmbientPhrase();
  musicLoopTimer = window.setInterval(playAmbientPhrase, 16000);
}

function stopMusic() {
  musicEnabled = false;
  if (musicLoopTimer !== null) {
    window.clearInterval(musicLoopTimer);
    musicLoopTimer = null;
  }
  if (musicAudioContext && musicMasterGain) {
    const now = musicAudioContext.currentTime;
    musicMasterGain.gain.cancelScheduledValues(now);
    musicMasterGain.gain.setTargetAtTime(0.0001, now, 0.08);
    activeMusicOscillators.forEach((oscillator) => oscillator.stop(now + 0.3));
  }
  updateMusicButton("musicOff");
}

function applyLanguage() {
  document.documentElement.lang = selectedLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = translate(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll(".character-card").forEach((card) => {
    const number = Number(card.dataset.avatarNumber);
    card.setAttribute("aria-label", `${translate("avatar")} ${number}`);
    card.querySelector(".avatar-label").textContent = `${translate("avatar")} ${String(number).padStart(2, "0")}`;
  });
  avatarPreview.setAttribute("aria-label", translate("selectedAvatar").replace("{number}", selectedAvatar.number));
  if (playerName.value.trim()) {
    lobbyGreeting.textContent = translate("hello").replace("{name}", playerName.value.trim());
  }
  languageSelect.value = selectedLanguage;
  updateMusicButton();
  updateSelectedColorDisplay();
  updateGraphicSticker();
  renderPlayerList();
  if (gamePhase === "cards" && currentChoices.length && !cardRound.hidden) {
    renderCategory();
  } else if (gamePhase === "drawing") {
    updateDrawingHeader();
    updateDrawingTimer();
    updateDrawingTarget();
    renderSelectedCardPrompts();
  } else if (gamePhase === "guessing") {
    updateGuessingHeader();
    updateDrawingTarget();
    renderSelectedCardPrompts();
    renderGuessTurn();
  } else if (gamePhase === "results") {
    updateResultsHeader();
    updateDrawingTarget();
    renderSelectedCardPrompts(true);
    renderGuessResults();
  }
}

function openProfile() {
  intro.classList.add("is-hidden");
  setup.classList.remove("is-hidden");
  gameShell.scrollLeft = 0;
}

function openAvatarMenu() {
  setup.classList.add("is-hidden");
  avatarPicker.classList.remove("is-hidden");
  gameShell.scrollLeft = 0;
  closePickerButton.focus({ preventScroll: true });
}

function closeAvatarMenu() {
  avatarPicker.classList.add("is-hidden");
  setup.classList.remove("is-hidden");
  gameShell.scrollLeft = 0;
  avatarPreview.focus({ preventScroll: true });
}

function updateAvatarPreview() {
  avatarPreview.textContent = selectedAvatar.emoji;
  avatarPreview.style.setProperty("--avatar-hue", `${selectedAvatar.hue}`);
  avatarPreview.setAttribute("aria-label", translate("selectedAvatar").replace("{number}", selectedAvatar.number));
}

function openOptions(button) {
  optionsReturnFocus = button;
  optionsPanel.classList.remove("is-hidden");
  gameShell.scrollLeft = 0;
  closeOptionsButton.focus({ preventScroll: true });
}

function closeOptions() {
  optionsPanel.classList.add("is-hidden");
  gameShell.scrollLeft = 0;
  if (optionsReturnFocus) {
    optionsReturnFocus.focus({ preventScroll: true });
  }
}

function getPlayerName(player) {
  return player.name;
}

function renderPlayerList() {
  playerCount.textContent = translate("playerCount").replace("{count}", localPlayers.length);
  playerList.innerHTML = "";

  localPlayers.forEach((player) => {
    const item = document.createElement("li");
    const avatar = document.createElement("span");
    const name = document.createElement("span");
    avatar.className = "player-avatar-small";
    avatar.textContent = player.avatar;
    name.textContent = getPlayerName(player);
    item.append(avatar, name);
    playerList.append(item);
  });

  const atPlayerLimit = localPlayers.length >= MAX_PLAYERS;
  localPlayerNameInput.disabled = atPlayerLimit;
  localPlayerAvatarSelect.disabled = atPlayerLimit;
  document.getElementById("addLocalPlayerButton").disabled = atPlayerLimit;
  startGameButton.disabled = localPlayers.length < MIN_PLAYERS || localPlayers.length > MAX_PLAYERS;
}

const MIN_PLAYERS = 1;
const MAX_PLAYERS = 10;
const cardCategories = ["outline", "color", "graphic", "intent"];

function createLocalPlayer(name, avatar) {
  return { name, avatar, score: 0 };
}

function populateLocalAvatarOptions() {
  localPlayerAvatarSelect.innerHTML = "";
  avatarOptions.forEach((emoji, index) => {
    const option = document.createElement("option");
    option.value = emoji;
    option.textContent = `${emoji} ${translate("avatar")} ${index + 1}`;
    localPlayerAvatarSelect.append(option);
  });
}

function randomChoices(cards, count) {
  const shuffled = [...cards];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled.slice(0, count);
}

function renderChoiceFace(type, card) {
  if (type === "color") {
    return `<span class="choice-color-swatch" style="--swatch-color:${card.color}"></span>`;
  }
  return `<span class="choice-card-icon${type === "outline" ? " outline-icon" : ""}">${card.icon}</span>`;
}

function renderCategory() {
  const type = cardCategories[currentCategoryIndex];
  const choices = currentChoices[currentCategoryIndex];
  const isRevealed = selectedChoiceIndex !== null;

  gameEyebrow.textContent = translate("cardStep").replace("{number}", currentCategoryIndex + 1);
  gameTitle.textContent = translate(`choose_${type}`);
  gameInfo.hidden = false;
  gameInfo.textContent = isRevealed
    ? translate("revealed").replace("{name}", choices[selectedChoiceIndex][selectedLanguage])
    : translate("chooseHint");
  cardOptions.innerHTML = "";

  choices.forEach((card, index) => {
    const button = document.createElement("button");
    const isSelected = isRevealed && index === selectedChoiceIndex;
    button.className = `choice-card${isSelected ? " flipped" : ""}`;
    button.type = "button";
    button.setAttribute("aria-label", isSelected
      ? `${translate("choiceAria").replace("{number}", index + 1)}: ${card[selectedLanguage]}`
      : translate("choiceAria").replace("{number}", index + 1));
    button.disabled = isRevealed;
    const frontVisibility = isSelected ? "" : 'aria-hidden="true"';
    button.innerHTML = `
      <span class="choice-card-inner">
        <span class="choice-card-face choice-card-back" aria-hidden="true"><span>?</span></span>
        <span class="choice-card-face choice-card-front" ${frontVisibility}>
          ${renderChoiceFace(type, card)}
          <span class="choice-card-label">${card[selectedLanguage]}</span>
        </span>
      </span>`;
    button.addEventListener("click", () => chooseCard(index));
    cardOptions.append(button);
  });

  nextCardButton.hidden = !isRevealed;
  nextCardButton.disabled = false;
  nextCardButton.textContent = translate(currentCategoryIndex === cardCategories.length - 1 ? "openBoard" : "nextCard");
}

function chooseCard(index) {
  if (selectedChoiceIndex !== null) {
    return;
  }

  selectedChoiceIndex = index;
  const type = cardCategories[currentCategoryIndex];
  selectedCards[type] = currentChoices[currentCategoryIndex][index];
  const buttons = cardOptions.querySelectorAll(".choice-card");
  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === index) {
      button.classList.add("flipped");
      button.querySelector(".choice-card-front").removeAttribute("aria-hidden");
      button.setAttribute("aria-label", `${translate("choiceAria").replace("{number}", index + 1)}: ${selectedCards[type][selectedLanguage]}`);
    } else {
      button.classList.add("not-selected");
    }
  });

  gameInfo.textContent = translate("revealed").replace("{name}", selectedCards[type][selectedLanguage]);
  nextCardButton.textContent = translate(currentCategoryIndex === cardCategories.length - 1 ? "openBoard" : "nextCard");
  nextCardButton.hidden = false;
  nextCardButton.disabled = true;
  window.setTimeout(() => {
    nextCardButton.disabled = false;
  }, 650);
}

function startCardSelection() {
  stopDrawingTimer();
  newGameButton.hidden = true;
  gamePhase = "cards";
  currentChoices = cardCategories.map((type) => randomChoices(cardsByType[type], 3));
  currentCategoryIndex = 0;
  selectedChoiceIndex = null;
  currentGuessChoiceIndex = null;
  currentDrawer = null;
  selectedCards = {};
  guessRecords = [];
  isDrawing = false;
  previousDrawingPoint = null;
  if (drawingContext) {
    drawingContext.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  }
  drawingSurface.querySelectorAll(".placed-sticker").forEach((sticker) => sticker.remove());
  draggedSticker = null;
  cardRound.hidden = false;
  drawingBoard.hidden = true;
  drawingTools.hidden = false;
  stickerTray.hidden = true;
  guessingPhase.hidden = true;
  gamePage.classList.remove("is-guessing");
  gamePage.classList.remove("is-drawing");
  renderCategory();
}

function updateDrawingHeader() {
  gameEyebrow.textContent = translate("boardEyebrow");
  gameTitle.textContent = translate("boardTitle");
  gameInfo.hidden = false;
  gameInfo.textContent = translate("drawerTurn").replace("{name}", getPlayerName(currentDrawer));
}

function updateGuessingHeader() {
  gameEyebrow.textContent = translate("guessingEyebrow");
  gameTitle.textContent = translate("guessTitle");
  guessingEyebrow.textContent = translate("guessingEyebrow");
  guessingTitle.textContent = translate("guessTitle");
  gameInfo.hidden = true;
}

function updateResultsHeader() {
  gameEyebrow.textContent = translate("resultsEyebrow");
  gameTitle.textContent = translate("resultsTitle");
  guessingEyebrow.textContent = translate("resultsEyebrow");
  guessingTitle.textContent = translate("resultsTitle");
  gameInfo.hidden = true;
}

function updateDrawingTarget() {
  const outlineCard = selectedCards.outline;
  if (!outlineCard) {
    return;
  }
  targetSilhouette.textContent = outlineCard.icon;
  targetSilhouette.setAttribute("aria-label", outlineCard[selectedLanguage]);
  const promptKey = gamePhase === "guessing" || gamePhase === "results"
    ? "drawingResultPrompt"
    : "boardPrompt";
  boardPrompt.textContent = translate(promptKey).replace("{name}", outlineCard[selectedLanguage]);
}

function updateSelectedColorDisplay() {
  const colorCard = selectedCards.color;
  if (!colorCard) {
    return;
  }
  selectedColorSwatch.style.setProperty("--swatch-color", colorCard.color);
  selectedColorSwatch.setAttribute("aria-label", translate("selectedColorLabel").replace("{color}", colorCard[selectedLanguage]));
  selectedColorName.textContent = colorCard[selectedLanguage];
}

function updateGraphicSticker() {
  const graphicCard = selectedCards.graphic;
  if (!graphicCard) {
    return;
  }
  graphicStickerIcon.textContent = graphicCard.icon;
  graphicStickerName.textContent = graphicCard[selectedLanguage];
  graphicStickerButton.setAttribute("aria-label", translate("addGraphicSticker").replace("{name}", graphicCard[selectedLanguage]));
  graphicStickerButton.title = translate("addGraphicSticker").replace("{name}", graphicCard[selectedLanguage]);
  drawingSurface.querySelectorAll(".placed-sticker").forEach((sticker) => {
    const label = translate("moveGraphicSticker").replace("{name}", graphicCard[selectedLanguage]);
    sticker.setAttribute("aria-label", label);
    sticker.title = label;
  });
}

function setDrawingTool(tool) {
  activeDrawingTool = tool;
  drawingSurface.dataset.tool = tool;
  drawingToolButtons.forEach((button) => {
    const isSelected = button.dataset.tool === tool;
    button.classList.toggle("selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function updateBrushIntensity() {
  brushIntensityValue.textContent = `${brushIntensity.value}%`;
}

function renderSelectedCardPrompts(revealIntent) {
  const categoryLabels = {
    outline: "cardOutline",
    color: "cardColor",
    graphic: "cardGraphic",
    intent: "cardIntent",
  };
  selectedCardList.innerHTML = "";
  cardCategories.filter((type) => revealIntent || type !== "intent").forEach((type) => {
    const card = selectedCards[type];
    const item = document.createElement("span");
    item.className = "selected-card-chip";
    const icon = document.createElement("span");
    icon.className = "selected-card-chip-icon";
    if (type === "color") {
      icon.classList.add("selected-card-chip-color");
      icon.style.setProperty("--swatch-color", card.color);
    } else {
      icon.textContent = card.icon;
      if (type === "outline") {
        icon.classList.add("outline-icon");
      }
    }
    const label = document.createElement("span");
    label.textContent = `${translate(categoryLabels[type])}: ${card[selectedLanguage]}`;
    item.append(icon, label);
    selectedCardList.append(item);
  });
}

function showDrawingBoard() {
  if (!selectedCards.outline || Object.keys(selectedCards).length !== cardCategories.length) {
    return;
  }
  if (!localPlayers.length) {
    return;
  }
  currentDrawer = localPlayers[Math.floor(Math.random() * localPlayers.length)];
  cardRound.hidden = true;
  drawingBoard.hidden = false;
  guessingPhase.hidden = true;
  drawingTools.hidden = false;
  stickerTray.hidden = false;
  gamePhase = "drawing";
  gamePage.classList.remove("is-guessing");
  gamePage.classList.add("is-drawing");
  updateDrawingHeader();
  brushIntensity.value = "100";
  updateBrushIntensity();
  setDrawingTool("pencil");
  updateDrawingTarget();
  updateSelectedColorDisplay();
  updateGraphicSticker();
  renderSelectedCardPrompts();
  resizeDrawingCanvas();
  startDrawingTimer();
}

function startDrawingTimer(deadline) {
  stopDrawingTimer();
  drawingDeadline = deadline || Date.now() + 4 * 60 * 1000;
  updateDrawingTimer();
  drawingTimerInterval = window.setInterval(updateDrawingTimer, 1000);
}

function stopDrawingTimer() {
  if (drawingTimerInterval !== null) {
    window.clearInterval(drawingTimerInterval);
    drawingTimerInterval = null;
  }
}

function updateDrawingTimer() {
  if (gamePhase !== "drawing" || !drawingDeadline) {
    return;
  }

  const secondsLeft = Math.max(0, Math.ceil((drawingDeadline - Date.now()) / 1000));
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  drawTimerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  drawTimerDisplay.classList.toggle("is-low-time", secondsLeft <= 60);
  if (secondsLeft === 0) {
    beginGuessing();
  }
}

function beginGuessing() {
  if (gamePhase !== "drawing") {
    return;
  }

  stopDrawingTimer();
  isDrawing = false;
  previousDrawingPoint = null;
  draggedSticker = null;
  gamePhase = "guessing";
  gamePage.classList.remove("is-drawing");
  gamePage.classList.add("is-guessing");
  drawingTools.hidden = true;
  stickerTray.hidden = true;
  guessingPhase.hidden = false;
  guessResults.hidden = true;
  guessTurnPrompt.hidden = false;
  guessInstructions.hidden = false;
  guessTurnIndex = 0;
  currentGuessChoiceIndex = null;
  guessRecords = [];
  guessPlayers = localPlayers.filter((player) => player !== currentDrawer);
  if (!guessPlayers.length) {
    guessPlayers = [{ practice: true }];
  }
  updateGuessingHeader();
  updateDrawingTarget();
  renderSelectedCardPrompts();
  renderGuessTurn();
  guessingPhase.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function guessPlayerName(player) {
  if (player.practice) {
    return translate("soloGuesser");
  }
  return getPlayerName(player);
}

function renderGuessTurn() {
  if (gamePhase !== "guessing") {
    return;
  }
  const guesser = guessPlayers[guessTurnIndex];
  if (!guesser) {
    return;
  }
  const practiceTurn = Boolean(guesser.practice);
  guessTurnPrompt.textContent = practiceTurn
    ? translate("soloGuesser")
    : translate("guessTurn").replace("{name}", guessPlayerName(guesser));
  guessInstructions.textContent = translate(practiceTurn ? "soloGuessInstructions" : "guessInstructions");
  intentChoices.innerHTML = "";

  cardsByType.intent.forEach((card, index) => {
    const button = document.createElement("button");
    const isSelected = index === currentGuessChoiceIndex;
    button.className = `intent-choice${isSelected ? " selected-guess" : ""}`;
    button.type = "button";
    button.disabled = currentGuessChoiceIndex !== null;
    button.setAttribute("aria-label", `${card.icon} ${card[selectedLanguage]}`);
    button.setAttribute("aria-pressed", String(isSelected));
    button.innerHTML = `<span class="intent-choice-icon" aria-hidden="true">${card.icon}</span><span>${card[selectedLanguage]}</span>`;
    button.addEventListener("click", () => selectIntentGuess(index));
    intentChoices.append(button);
  });

  guessActionButton.hidden = currentGuessChoiceIndex === null;
  const isLastGuesser = guessTurnIndex === guessPlayers.length - 1;
  guessActionButton.textContent = translate(isLastGuesser ? "guessActionResults" : "guessActionNext");
}

function selectIntentGuess(index) {
  if (gamePhase !== "guessing" || currentGuessChoiceIndex !== null) {
    return;
  }
  currentGuessChoiceIndex = index;
  renderGuessTurn();
}

function advanceGuessTurn() {
  if (gamePhase !== "guessing" || currentGuessChoiceIndex === null) {
    return;
  }
  const player = guessPlayers[guessTurnIndex];
  const guess = cardsByType.intent[currentGuessChoiceIndex];
  guessRecords.push({
    player,
    guess,
    correct: guess.es === selectedCards.intent.es,
  });

  if (guessTurnIndex < guessPlayers.length - 1) {
    guessTurnIndex += 1;
    currentGuessChoiceIndex = null;
    renderGuessTurn();
    return;
  }
  showGuessResults();
}

function addPlayerPoint(player) {
  player.score = (Number.isFinite(player.score) ? player.score : 0) + 1;
}

function resetPlayerScores() {
  localPlayers.forEach((player) => {
    player.score = 0;
  });
}

function awardRoundPoints() {
  const correctRecords = guessRecords.filter((record) => record.correct);
  if (guessPlayers.some((player) => player.practice)) {
    if (correctRecords.length && currentDrawer) {
      addPlayerPoint(currentDrawer);
    }
    return;
  }

  correctRecords.forEach((record) => addPlayerPoint(record.player));
  if (correctRecords.length && currentDrawer) {
    addPlayerPoint(currentDrawer);
  }
}

function showGuessResults() {
  if (gamePhase !== "guessing") {
    return;
  }
  awardRoundPoints();
  gamePhase = "results";
  guessingPhase.hidden = false;
  guessTurnPrompt.hidden = true;
  guessInstructions.hidden = true;
  intentChoices.innerHTML = "";
  guessActionButton.hidden = true;
  guessResults.hidden = false;
  newGameButton.hidden = false;
  updateResultsHeader();
  updateDrawingTarget();
  renderSelectedCardPrompts(true);
  renderGuessResults();
  guessResults.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderGuessResults() {
  if (gamePhase !== "results") {
    return;
  }
  guessCorrectAnswer.textContent = translate("guessCorrectAnswer")
    .replace("{name}", selectedCards.intent[selectedLanguage]);
  guessResultsList.innerHTML = "";
  guessRecords.forEach(({ player, guess, correct }) => {
    const item = document.createElement("li");
    item.textContent = translate("guessResultLine")
      .replace("{player}", guessPlayerName(player))
      .replace("{guess}", guess[selectedLanguage])
      .replace("{result}", translate(correct ? "guessCorrect" : "guessIncorrect"));
    guessResultsList.append(item);
  });
  renderScoreboard();
}

function renderScoreboard() {
  scoreboardRows.innerHTML = "";
  const rankedPlayers = localPlayers
    .map((player, originalPosition) => ({ player, originalPosition }))
    .sort((a, b) => {
      const scoreDifference = (b.player.score || 0) - (a.player.score || 0);
      return scoreDifference || a.originalPosition - b.originalPosition;
    });

  rankedPlayers.forEach(({ player }, index) => {
    const row = document.createElement("tr");
    const rank = document.createElement("td");
    const name = document.createElement("td");
    const score = document.createElement("td");
    rank.textContent = String(index + 1);
    name.textContent = `${player.avatar ? `${player.avatar} ` : ""}${getPlayerName(player)}`;
    score.textContent = String(Number.isFinite(player.score) ? player.score : 0);
    row.append(rank, name, score);
    scoreboardRows.append(row);
  });
}

function resizeDrawingCanvas() {
  const rect = drawingCanvas.getBoundingClientRect();
  if (!rect.width || !rect.height) {
    return;
  }
  const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
  drawingCanvas.width = Math.round(rect.width * ratio);
  drawingCanvas.height = Math.round(rect.height * ratio);
  drawingContext = drawingCanvas.getContext("2d");
  drawingContext.lineCap = "round";
  drawingContext.lineJoin = "round";
}

function drawingPoint(event) {
  const rect = drawingCanvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) * drawingCanvas.width / rect.width,
    y: (event.clientY - rect.top) * drawingCanvas.height / rect.height,
  };
}

function colorWithOpacity(hexColor, opacity) {
  const red = Number.parseInt(hexColor.slice(1, 3), 16);
  const green = Number.parseInt(hexColor.slice(3, 5), 16);
  const blue = Number.parseInt(hexColor.slice(5, 7), 16);
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}

function drawingToolSettings() {
  if (activeDrawingTool === "eraser") {
    return { composite: "destination-out", color: "rgba(0, 0, 0, 1)", widthMultiplier: 2 };
  }
  const intensity = Number(brushIntensity.value) / 100;
  const opacity = activeDrawingTool === "marker" ? intensity * 0.48 : intensity;
  return {
    composite: "source-over",
    color: colorWithOpacity(selectedCards.color.color, opacity),
    widthMultiplier: activeDrawingTool === "marker" ? 1.8 : 0.65,
  };
}

function updateStickerPosition(sticker, clientX, clientY) {
  const rect = drawingSurface.getBoundingClientRect();
  const left = Math.min(92, Math.max(8, (clientX - rect.left) / rect.width * 100));
  const top = Math.min(90, Math.max(10, (clientY - rect.top) / rect.height * 100));
  sticker.style.left = `${left}%`;
  sticker.style.top = `${top}%`;
}

function startStickerMove(event) {
  if (gamePhase !== "drawing" || event.button !== 0) {
    return;
  }
  event.preventDefault();
  draggedSticker = event.currentTarget;
  draggedSticker.setPointerCapture(event.pointerId);
  updateStickerPosition(draggedSticker, event.clientX, event.clientY);
}

function continueStickerMove(event) {
  if (gamePhase === "drawing" && draggedSticker === event.currentTarget) {
    updateStickerPosition(draggedSticker, event.clientX, event.clientY);
  }
}

function stopStickerMove(event) {
  if (draggedSticker === event.currentTarget) {
    draggedSticker = null;
  }
}

function moveStickerWithKeyboard(event) {
  const movements = {
    ArrowUp: [0, -3],
    ArrowDown: [0, 3],
    ArrowLeft: [-3, 0],
    ArrowRight: [3, 0],
  };
  const movement = movements[event.key];
  if (gamePhase !== "drawing" || !movement) {
    return;
  }
  event.preventDefault();
  const sticker = event.currentTarget;
  const left = Number.parseFloat(sticker.style.left) + movement[0];
  const top = Number.parseFloat(sticker.style.top) + movement[1];
  sticker.style.left = `${Math.min(92, Math.max(8, left))}%`;
  sticker.style.top = `${Math.min(90, Math.max(10, top))}%`;
}

function addGraphicSticker(left, top) {
  if (gamePhase !== "drawing" || !selectedCards.graphic) {
    return;
  }
  if (left === undefined || top === undefined) {
    const count = drawingSurface.querySelectorAll(".placed-sticker").length;
    left = 50 + ((count % 3) - 1) * 12;
    top = 50 + (Math.floor(count / 3) % 3 - 1) * 12;
  }

  const sticker = document.createElement("button");
  sticker.className = "placed-sticker";
  sticker.type = "button";
  sticker.textContent = selectedCards.graphic.icon;
  sticker.style.left = `${left}%`;
  sticker.style.top = `${top}%`;
  sticker.setAttribute("aria-label", translate("moveGraphicSticker").replace("{name}", selectedCards.graphic[selectedLanguage]));
  sticker.title = translate("moveGraphicSticker").replace("{name}", selectedCards.graphic[selectedLanguage]);
  sticker.addEventListener("pointerdown", startStickerMove);
  sticker.addEventListener("pointermove", continueStickerMove);
  sticker.addEventListener("pointerup", stopStickerMove);
  sticker.addEventListener("pointercancel", stopStickerMove);
  sticker.addEventListener("keydown", moveStickerWithKeyboard);
  drawingSurface.append(sticker);
  sticker.focus({ preventScroll: true });
}

function startDrawing(event) {
  if (gamePhase !== "drawing" || !drawingContext) {
    return;
  }
  event.preventDefault();
  isDrawing = true;
  drawingCanvas.setPointerCapture(event.pointerId);
  const point = drawingPoint(event);
  drawingContext.beginPath();
  previousDrawingPoint = point;
}

function continueDrawing(event) {
  if (gamePhase !== "drawing" || !isDrawing || !drawingContext || !previousDrawingPoint) {
    return;
  }
  const point = drawingPoint(event);
  const rect = drawingCanvas.getBoundingClientRect();
  const settings = drawingToolSettings();
  drawingContext.beginPath();
  drawingContext.globalCompositeOperation = settings.composite;
  drawingContext.strokeStyle = settings.color;
  drawingContext.lineWidth = Number(brushSize.value) * settings.widthMultiplier * drawingCanvas.width / rect.width;
  drawingContext.moveTo(previousDrawingPoint.x, previousDrawingPoint.y);
  drawingContext.lineTo(point.x, point.y);
  drawingContext.stroke();
  previousDrawingPoint = point;
}

function stopDrawing() {
  isDrawing = false;
  previousDrawingPoint = null;
}

function advanceCardSelection() {
  if (selectedChoiceIndex === null) {
    return;
  }
  if (currentCategoryIndex === cardCategories.length - 1) {
    showDrawingBoard();
    return;
  }
  currentCategoryIndex += 1;
  selectedChoiceIndex = null;
  renderCategory();
}

function startGame() {
  if (localPlayers.length < MIN_PLAYERS || localPlayers.length > MAX_PLAYERS) {
    return;
  }
  resetPlayerScores();
  lobby.classList.add("is-hidden");
  gamePage.classList.remove("is-hidden");
  gameShell.scrollLeft = 0;
  startMusic();
  startCardSelection();
}

avatarOptions.forEach((emoji, index) => {
  const number = index + 1;
  const card = document.createElement("button");
  card.className = "character-card";
  card.type = "button";
  card.setAttribute("role", "radio");
  card.setAttribute("aria-checked", number === 1 ? "true" : "false");
  card.dataset.avatarNumber = String(number);
  card.style.setProperty("--avatar-hue", `${(index * 47) % 360}`);
  card.innerHTML = `<span class="avatar-emoji" aria-hidden="true">${emoji}</span><span class="avatar-label"></span>`;

  if (number === 1) {
    card.classList.add("selected");
  }

  card.addEventListener("click", () => {
    characterGrid.querySelectorAll(".character-card").forEach((item) => {
      item.classList.remove("selected");
      item.setAttribute("aria-checked", "false");
    });
    card.classList.add("selected");
    card.setAttribute("aria-checked", "true");
    selectedAvatar = { emoji, number, hue: (index * 47) % 360 };
    updateAvatarPreview();
    lobbyAvatar.textContent = emoji;
    lobbyAvatar.style.setProperty("--avatar-hue", `${selectedAvatar.hue}`);
    closeAvatarMenu();
  });

  characterGrid.append(card);
});

populateLocalAvatarOptions();
updateAvatarPreview();
applyLanguage();

startButton.addEventListener("click", openProfile);
avatarPreview.addEventListener("click", openAvatarMenu);

backButton.addEventListener("click", () => {
  setup.classList.add("is-hidden");
  intro.classList.remove("is-hidden");
});

closePickerButton.addEventListener("click", closeAvatarMenu);

document.querySelectorAll(".options-button").forEach((button) => {
  button.addEventListener("click", () => openOptions(button));
});

closeOptionsButton.addEventListener("click", closeOptions);
languageSelect.addEventListener("change", () => {
  selectedLanguage = languageSelect.value;
  applyLanguage();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !optionsPanel.classList.contains("is-hidden")) {
    closeOptions();
  }
});

window.addEventListener("resize", () => {
  gameShell.scrollLeft = 0;
});

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = playerName.value.trim();
  if (!name) {
    playerName.focus();
    playerName.placeholder = translate("emptyName");
    return;
  }

  lobbyGreeting.textContent = translate("hello").replace("{name}", name);
  lobbyAvatar.textContent = selectedAvatar.emoji;
  lobbyAvatar.style.setProperty("--avatar-hue", `${selectedAvatar.hue}`);
  if (localPlayers.length) {
    localPlayers[0].name = name;
    localPlayers[0].avatar = selectedAvatar.emoji;
  } else {
    localPlayers.push(createLocalPlayer(name, selectedAvatar.emoji));
  }
  localPlayerAvatarSelect.value = selectedAvatar.emoji;
  renderPlayerList();
  setup.classList.add("is-hidden");
  lobby.classList.remove("is-hidden");
  gameShell.scrollLeft = 0;
});

document.getElementById("addLocalPlayerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = localPlayerNameInput.value.trim();
  if (!name || localPlayers.length >= MAX_PLAYERS) {
    localPlayerNameInput.focus();
    return;
  }
  localPlayers.push(createLocalPlayer(name, localPlayerAvatarSelect.value));
  localPlayerNameInput.value = "";
  localPlayerAvatarSelect.value = selectedAvatar.emoji;
  renderPlayerList();
  localPlayerNameInput.focus();
});

lobbyBackButton.addEventListener("click", () => {
  lobby.classList.add("is-hidden");
  setup.classList.remove("is-hidden");
  gameShell.scrollLeft = 0;
});

startGameButton.addEventListener("click", startGame);
nextCardButton.addEventListener("click", advanceCardSelection);
finishDrawingButton.addEventListener("click", beginGuessing);
guessActionButton.addEventListener("click", advanceGuessTurn);
newGameButton.addEventListener("click", () => {
  resetPlayerScores();
  startCardSelection();
  gamePage.scrollTo({ top: 0, behavior: "smooth" });
  const firstCard = cardOptions.querySelector(".choice-card");
  if (firstCard) {
    firstCard.focus();
  }
});
document.getElementById("clearDrawingButton").addEventListener("click", () => {
  if (gamePhase === "drawing" && drawingContext) {
    drawingContext.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
    drawingSurface.querySelectorAll(".placed-sticker").forEach((sticker) => sticker.remove());
    draggedSticker = null;
  }
});
drawingCanvas.addEventListener("pointerdown", startDrawing);
drawingCanvas.addEventListener("pointermove", continueDrawing);
drawingCanvas.addEventListener("pointerup", stopDrawing);
drawingCanvas.addEventListener("pointercancel", stopDrawing);
brushIntensity.addEventListener("input", updateBrushIntensity);
drawingToolButtons.forEach((button) => {
  button.addEventListener("click", () => setDrawingTool(button.dataset.tool));
});
graphicStickerButton.addEventListener("click", () => addGraphicSticker());
graphicStickerButton.addEventListener("dragstart", (event) => {
  event.dataTransfer.effectAllowed = "copy";
  event.dataTransfer.setData("text/plain", "graphic-sticker");
});
drawingSurface.addEventListener("dragover", (event) => {
  if (gamePhase === "drawing") {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }
});
drawingSurface.addEventListener("drop", (event) => {
  event.preventDefault();
  if (gamePhase !== "drawing" || event.dataTransfer.getData("text/plain") !== "graphic-sticker") {
    return;
  }
  const rect = drawingSurface.getBoundingClientRect();
  const left = Math.min(92, Math.max(8, (event.clientX - rect.left) / rect.width * 100));
  const top = Math.min(90, Math.max(10, (event.clientY - rect.top) / rect.height * 100));
  addGraphicSticker(left, top);
});
document.getElementById("backToLobbyButton").addEventListener("click", () => {
  stopDrawingTimer();
  stopMusic();
  gamePhase = "cards";
  gamePage.classList.remove("is-guessing", "is-drawing");
  gamePage.classList.add("is-hidden");
  lobby.classList.remove("is-hidden");
  gameShell.scrollLeft = 0;
});
musicToggleButton.addEventListener("click", () => {
  if (musicEnabled) {
    stopMusic();
  } else {
    startMusic();
  }
});
