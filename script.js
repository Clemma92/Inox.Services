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
    if (transitioned===true){
        boxContainer.forEach((boxContainer) =>{boxContainer.style.transition= 'transform 0.4s ease-in-out, scale 0.3s ease-in-out'});
        boxContainer.forEach((boxContainer) =>{boxContainer.style.transform='translateX(-5vw)'});
        boxContainer[0].addEventListener('transitionend', () => {

            boxContainer.forEach((boxContainer) =>{
                boxContainer.style.transform='translateX(10vw)'
            });
            setTimeout(()=>{
                navBar.style.transform='translate(-80vw)';

            },150);

        },{once:true});
        boxContainer.forEach((boxContainer) =>{
            boxContainer.style.transition= 'transform 0.8s ease-in-out, scale 0.3s ease-in-out'
        });
        transitioned=false;
    }
    else{
            for (let i=0; i<boxContainer.length; i++){
                setTimeout(() =>SlittaBox(i, boxContainer),400 * i);
            }
            navBar.style.transform='translate(-100vw)';
            sfondo.addEventListener('click', ()=>{navBar.style.transform='translate(-100vw)';});
            transitioned=true;
        }
}

video.addEventListener('ended', () => CambiaSfondo(SlittaBox));
document.querySelector('.menu-btn').addEventListener('click', animateOut);



