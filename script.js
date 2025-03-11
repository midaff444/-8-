document.getElementById('heartButton').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('greetingText').style.display = 'block';
    document.getElementById('clickSound').play();
});
