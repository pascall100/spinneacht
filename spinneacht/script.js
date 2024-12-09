document.addEventListener('DOMContentLoaded', () => {
    console.log("Schwarzer Hintergrund und schwebende Wolken sind aktiv!");

    const warnButton = document.getElementById('warnButton');
    const stopButton = document.getElementById('stopButton');
    const spinButton = document.getElementById('spinButton');
    const speechBubble = document.getElementById('speechBubble');
    const background = document.getElementById('background');

    // Funktion für die Warnung
    warnButton.addEventListener('click', () => {
        const speech = new SpeechSynthesisUtterance("Komm mir bloß nicht zu nahe du Pfeife");
        speech.lang = 'de-DE';
        window.speechSynthesis.speak(speech);
    });

    // Funktion für die Sprechblase
    stopButton.addEventListener('click', () => {
        speechBubble.classList.remove('hidden');
        setTimeout(() => {
            speechBubble.classList.add('hidden');
        }, 2000); // Sprechblase verschwindet nach 2 Sekunden
    });

    // Maus-Effekt (Schwebende Bewegung der Spinne)
    document.addEventListener('mousemove', (e) => {
        background.style.transform = `translate(${e.clientX / 100}px, ${e.clientY / 100}px)`;
    });

    // Zustand der Animation
    let isSpinning = false;

    // Button „Drehen“: Startet/stoppt die Drehung
    spinButton.addEventListener('click', () => {
        if (isSpinning) {
            background.style.animationPlayState = 'paused';
            isSpinning = false;
        } else {
            background.classList.add('spin');
            background.style.animationPlayState = 'running';
            isSpinning = true;
        }
    });

    // Doppelklick: Stoppt die Drehung
    background.addEventListener('dblclick', () => {
        background.style.animationPlayState = 'paused'; // Drehung stoppen
        isSpinning = false;
        console.log("Drehung durch Doppelklick gestoppt!");
    });

    // Jumpscare (zufällige Anzeige)
    setInterval(() => {
        const jumpscare = document.getElementById('jumpscare');
        jumpscare.classList.remove('hidden');
        setTimeout(() => jumpscare.classList.add('hidden'), 500);
    }, Math.random() * 20000 + 10000); // Jumpscare alle 10-30 Sekunden
});
