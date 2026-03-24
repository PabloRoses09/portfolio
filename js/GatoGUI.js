// GatoGUI.js - interfaz y eventos
const game = new GatoRutinas();
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const status = document.getElementById("status");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

const cellSize = canvas.width / 3;

// Dibujar tablero y fichas
function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000";

    // Líneas verticales
    ctx.beginPath();
    ctx.moveTo(cellSize, 0); ctx.lineTo(cellSize, canvas.height);
    ctx.moveTo(cellSize*2, 0); ctx.lineTo(cellSize*2, canvas.height);
    // Líneas horizontales
    ctx.moveTo(0, cellSize); ctx.lineTo(canvas.width, cellSize);
    ctx.moveTo(0, cellSize*2); ctx.lineTo(canvas.width, cellSize*2);
    ctx.stroke();

    // Dibujar X y 0
    for (let y=0; y<3; y++){
        for (let x=0; x<3; x++){
            const value = game.tableroGato[y][x];
            if (value !== "-"){
                ctx.font = "60px Arial";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(value, x*cellSize + cellSize/2, y*cellSize + cellSize/2);
            }
        }
    }
}

// Actualiza el estado del juego
function updateStatus(){
    if (game.GanoX) status.textContent = "¡Gana X!";
    else if (game.Gano0) status.textContent = "¡Gana 0!";
    else if (game.Tablleno) status.textContent = "Empate";
    else status.textContent = `Turno de ${game.turno ? "X" : "0"}`;
}

// Manejo de clics sobre el canvas
canvas.addEventListener("click", (e) => {
    if (game.GanoX || game.Gano0 || game.Tablleno) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / cellSize);
    const y = Math.floor((e.clientY - rect.top) / cellSize);

    game.movLetraXY(y, x); // fila = y, columna = x
    updateStatus();
    drawBoard();
});

// Botón Iniciar Juego
startBtn.addEventListener("click", () => {
    game.LimpiarTab();
    updateStatus();
    drawBoard();
});

// Botón Reiniciar Juego
resetBtn.addEventListener("click", () => {
    game.LimpiarTab();
    updateStatus();
    drawBoard();
});

// Inicializar
drawBoard();
updateStatus();