const happyFace = document.querySelector('.happy');
const sadFace = document.querySelector('.sad');

//Add event listener
happyFace.addEventListener('click', () => {
    if(sadFace.classList.contains('sad')) {
        sadFace.classList.add('activ');
        happyFace.classList.remove('activ');
    }
});

sadFace.addEventListener('click', () => {
    if(happyFace.classList.contains('happy')) {
        happyFace.classList.add('activ');
        sadFace.classList.remove('activ');
    }
});