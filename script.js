window.addEventListener('keydown', function (e){
    // console.log(e.code) shows the keydown
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    const key = document.querySelector(`.key[data-key=${e.code}]`);
    if (!audio) return; //avoid a error if the key isnt setted up
    audio.currentTime = 0; //go back to start (don't wait until the sound is comp. executed)
    audio.play();
    key.classList.add('playing');

    function removeTransition(e){
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');
        console.log(this);
    }
    const keys = document.querySelectorAll('.key');
   
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    // console.log(key); shows wich code correspon to each key

})
    