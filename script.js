const video = document.querySelector('video');
const sfondo = document.querySelector('.sfondo');
function adjustSfondo() {
    if(window.matchMedia("(min-width: 1024px)").matches){
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar.offsetHeight;
        const viewportHeight = document.documentElement.clientHeight;
        sfondo.style.top = `${navbarHeight}px`;
        sfondo.style.height = `${viewportHeight - navbarHeight}px`;
    }
    else{
        const navbar = document.querySelector('header');
        const navbarHeight = navbar.offsetHeight;
        const viewportHeight = document.documentElement.clientHeight;
        sfondo.style.top = `${navbarHeight}px`;
        sfondo.style.height = `${viewportHeight - navbarHeight}px`;
    }
}
function SlittaBox(numero, box){
    if (numero < 0 || numero >= box.length) return;
    box[numero].style.transform = 'translateX(0px)';
    setTimeout(() =>{if (numero === box.length - 1) {document.querySelector('button').classList.add('mostra');}},800);
}
function CambiaSfondo(callback) {
    let box = document.querySelectorAll('.box-testo');
    video.style.display = 'none';
    sfondo.classList.add('mostra-sfondo');
    if(callback){
        sfondo.addEventListener('transitionend', () =>{
            for (let i=0; i<box.length; i++){
                setTimeout(() =>callback(i, box),400 * i)
            }
        }, {once: true});          
    }
}
window.addEventListener('load', adjustSfondo);
window.addEventListener('resize', adjustSfondo);
video.addEventListener('ended', () => CambiaSfondo(SlittaBox));


