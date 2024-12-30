const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');

// Ndërro mes "Play" dhe "Pause"
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Ndal playback kur audio mbaron
audioPlayer.addEventListener('ended', () => {
    playPauseBtn.textContent = 'Play';
});
