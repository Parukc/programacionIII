class Figura {
    constructor(divId) {
        this.div = document.getElementById(divId);
    }

    cambiarColor(nuevoColor) {
        this.div.style.backgroundColor = nuevoColor;
    }

    cambiarTexto(nuevoTexto) {
        this.div.innerHTML = nuevoTexto;
    }
}

// Crear una instancia de la clase Figura
const figura = new Figura("miDiv");

// Función para cambiar el color de fondo
function cambiarColor() {
    const colores = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    figura.cambiarColor(colorAleatorio);
}

// Función para cambiar el texto
function cambiarTexto() {
    const textos = ["Texto Modificado", "¡Hola Mundo!", "Nuevo Mensaje", "Cambio Exitoso"];
    const textoAleatorio = textos[Math.floor(Math.random() * textos.length)];
    figura.cambiarTexto(textoAleatorio);
}