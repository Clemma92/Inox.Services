const video = document.querySelector('video');
const sfondo = document.querySelector('.sfondo');
video.playbackRate = 5;
function adjustSfondo() {
const navbar = document.querySelector('nav');
const navbarHeight = navbar.offsetHeight;
const viewportHeight = document.documentElement.clientHeight;
sfondo.style.top = `${navbarHeight}px`;
sfondo.style.height = `${viewportHeight - navbarHeight}px`;
}
function SlittaBox(numero){
    let box = document.querySelectorAll('.box-testo');
    if (numero < 0 || numero >= box.length) return;
    box[numero].style.transform = 'translateX(0px)';
    setTimeout(() =>{if (numero === box.length - 1) {document.querySelector('button').classList.add('mostra');}},1000);
}
function CambiaSfondo(callback) {
    video.style.display = 'none';
    sfondo.classList.add('mostra-sfondo');
    if(callback){
        let i=0;
        sfondo.addEventListener('transitionend', () => callback(i++));
    }
}
window.addEventListener('load', adjustSfondo);
window.addEventListener('resize', adjustSfondo);
video.addEventListener('ended', () => CambiaSfondo(SlittaBox));


