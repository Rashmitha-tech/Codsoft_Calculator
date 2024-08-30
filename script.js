function clearScreen() {
    document.getElementById('screen').value = '';
}

function append(value) {
    playSound(); // Play sound on button click
    document.getElementById('screen').value += value;
}

function backspace() {
    playSound(); // Play sound on button click
    let screen = document.getElementById('screen').value;
    document.getElementById('screen').value = screen.substring(0, screen.length - 1);
}

function calculate() {
    playSound(); // Play sound on button click
    try {
        let result = eval(document.getElementById('screen').value);
        document.getElementById('screen').value = result;
    } catch (error) {
        document.getElementById('screen').value = 'Error';
    }
}

function toggleTheme() {
    playSound(); // Play sound on button click
    document.body.classList.toggle('dark-mode');
}

function playSound() {
    let audio = new Audio('click-sound.mp3'); // Replace with the path to your sound file
    audio.play();
}