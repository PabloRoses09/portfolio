// GatoRutinas.js - lógica del juego
class GatoRutinas {
    constructor() {
        this.tableroGato = [
            ["-", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"]
        ];
        this.turno = true; // true=X, false=0
        this.GanoX = false;
        this.Gano0 = false;
        this.Tablleno = false;
    }

    movLetraXY(x, y) {
        if (this.tableroGato[x][y] !== "-" || this.GanoX || this.Gano0 || this.Tablleno) {
            return null; // celda ocupada o juego terminado
        }
        this.tableroGato[x][y] = this.turno ? "X" : "0";
        this.turno = !this.turno;
        this.compruebaX();
        this.comprueba0();
        this.tablerolleno();
        return this.tableroGato[x][y];
    }

    compruebaX() {
        const b = this.tableroGato;
        const combos = [
            [b[0][0], b[0][1], b[0][2]],
            [b[1][0], b[1][1], b[1][2]],
            [b[2][0], b[2][1], b[2][2]],
            [b[0][0], b[1][0], b[2][0]],
            [b[0][1], b[1][1], b[2][1]],
            [b[0][2], b[1][2], b[2][2]],
            [b[0][0], b[1][1], b[2][2]],
            [b[0][2], b[1][1], b[2][0]]
        ];
        this.GanoX = combos.some(c => c.every(v => v === "X"));
    }

    comprueba0() {
        const b = this.tableroGato;
        const combos = [
            [b[0][0], b[0][1], b[0][2]],
            [b[1][0], b[1][1], b[1][2]],
            [b[2][0], b[2][1], b[2][2]],
            [b[0][0], b[1][0], b[2][0]],
            [b[0][1], b[1][1], b[2][1]],
            [b[0][2], b[1][2], b[2][2]],
            [b[0][0], b[1][1], b[2][2]],
            [b[0][2], b[1][1], b[2][0]]
        ];
        this.Gano0 = combos.some(c => c.every(v => v === "0"));
    }

    tablerolleno() {
        this.Tablleno = this.tableroGato.flat().every(c => c !== "-");
    }

    LimpiarTab() {
        this.tableroGato = [
            ["-", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"]
        ];
        this.GanoX = false;
        this.Gano0 = false;
        this.Tablleno = false;
        this.turno = true;
    }
}