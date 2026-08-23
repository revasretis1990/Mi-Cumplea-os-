function actualizarCountdown() {

    const fechaEvento = new Date("2026-10-19T00:00:00");

    const ahora = new Date();

    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
    }

    const diasFaltantes = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horasFaltantes = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutosFaltantes = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundosFaltantes = Math.floor(
        (diferencia / 1000) % 60
    );

    document.getElementById("dias").textContent =
        String(diasFaltantes).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horasFaltantes).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutosFaltantes).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundosFaltantes).padStart(2, "0");
}

actualizarCountdown();

setInterval(actualizarCountdown, 1000);
/* =========================
   EXPLOSIÓN DE CONFETI
========================= */

function lanzarConfeti() {

    const contenedor = document.getElementById("confeti");

    for (let i = 0; i < 80; i++) {

        const confeti = document.createElement("div");

        confeti.classList.add("confeti-pieza");

        // Posición horizontal aleatoria
        confeti.style.left = Math.random() * 100 + "%";

        // Tamaño aleatorio
        const tamaño = Math.random() * 6 + 5;

        confeti.style.width = tamaño + "px";
        confeti.style.height = tamaño * 1.5 + "px";

        // Colores aleatorios
        const colores = [
            "#ff0055",
            "#00e5ff",
            "#ffe600",
            "#00ff88",
            "#ff7b00",
            "#ffffff",
            "#ff4bff"
        ];

        confeti.style.backgroundColor =
            colores[Math.floor(Math.random() * colores.length)];

        // Velocidad aleatoria
        confeti.style.animationDuration =
            (Math.random() * 3 + 3) + "s";

        // Retraso aleatorio
        confeti.style.animationDelay =
            Math.random() * 0.5 + "s";

        contenedor.appendChild(confeti);

        // Eliminarlo después de la animación
        setTimeout(() => {
            confeti.remove();
        }, 6000);
    }
}


/* Primera explosión */

lanzarConfeti();


/* Nueva explosión cada 5 segundos */

setInterval(() => {

    lanzarConfeti();

}, 5000);