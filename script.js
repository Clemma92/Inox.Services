let transitioned = false;
const video = document.querySelector('video');
const sfondo = document.querySelector('.sfondo');
// function adjustSfondo() {
//     if(window.matchMedia("(min-width: 1024px)").matches){
//         const navbar = document.querySelector('nav');
//         const navbarHeight = navbar.offsetHeight;
//         const viewportHeight = document.documentElement.clientHeight;
//         sfondo.style.top = `${navbarHeight}px`;
//         sfondo.style.height = `${viewportHeight - navbarHeight}px`;
//     }
//     else{
//         const navbar = document.querySelector('header');
//         const navbarHeight = navbar.offsetHeight;
//         const viewportHeight = document.documentElement.clientHeight;
//         sfondo.style.top = `${navbarHeight}px`;
//         sfondo.style.height = `${viewportHeight - navbarHeight}px`;
//     }
// }

function SlittaBox(numero, box){
    if (numero < 0 || numero >= box.length) return;
    box[numero].style.transform = 'translateX(0)';
    setTimeout(() =>{if (numero === box.length - 1) {document.querySelector('.btn').classList.add('mostra');}},800);
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
    transitioned = true;
}

function animateOut(){
    let navBar = document.querySelector('nav');
    let boxContainer = document.querySelectorAll('.box-testo');
    let logoN = document.querySelector('.logo');
    let btnmove = document.querySelector('.btn');
    logoN.style.transition = 'transform 0.8s ease-in-out';
    btnmove.style.transition = 'transform 0.8s ease-in-out, scale 0.4s ease-in-out';
    if (transitioned===true){
            setTimeout(() => {
                boxContainer.forEach((boxContainer) =>{
                boxContainer.style.transform='translateX(10vw)';
            });},300);
            setTimeout(()=>{
                logoN.style.transform='translate(10vw)';
            },300);
            setTimeout(()=>{
                navBar.style.transform='translate(-80vw)';
            },300);
            setTimeout(()=>{
                btnmove.style.transform='translate(10vw)';
            },300);
        transitioned=false;
    }
}
function animateIn(e){
    if(!window.matchMedia(("(min-width: 1024)").matches)){
        let boxContainer = document.querySelectorAll('.box-testo');
        let logoN = document.querySelector('.logo');
        let btnmove = document.querySelector('.btn');
        let navBar = document.querySelector('nav');
        let menubtn = document.querySelector('.menu-btn');
        if(!navBar.contains(e.target) && !menubtn.contains(e.target)){
            for (let i=0; i<boxContainer.length; i++){
                    setTimeout(() =>SlittaBox(i, boxContainer),100 * i);
            }
            setTimeout(()=>{
                    btnmove.style.transform='translate(0)';
            },100);
                setTimeout(()=>{
                    logoN.style.transform='translate(0)';
            },100);
                navBar.style.transform='translate(-100vw)';
                transitioned=true;
        }
    }
}

video.addEventListener('ended', () => CambiaSfondo(SlittaBox));
document.querySelector('.menu-btn').addEventListener('click', animateOut);
document.addEventListener('click', animateIn);


