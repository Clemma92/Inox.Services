let transitioned = false;
const video = document.querySelector('video');
const sfondo = document.querySelector('.sfondo');
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
}
function animateOut(e){
    let spostaCnt = document.querySelectorAll('.spostamento');
    if (transitioned===true){
        transitioned=false;
        spostaCnt.forEach((spostaCnt) =>{
            spostaCnt.style.transform='translateX(0vw)';
        })
    }
}
function animateIn(e){
    let spostaCnt = document.querySelectorAll('.spostamento');
    transitioned=true;
        spostaCnt.forEach((spostaCnt) =>{
            spostaCnt.style.transform='translateX(10vw)';
    });
}
function spostaNav(e, callback){
    if(transitioned===false){
        const navBar = document.querySelector('nav');
        navBar.style.transform='translate(-80vw)';
        transitioned=true;
        callback(e, navBar);
    }
}
function ritraiNav(e, callback){
    const navBar = document.querySelector('nav');
    const menubtn = document.querySelector('.menu-btn');
    if(transitioned===true && !navBar.contains(e.target) && !menubtn.contains(e.target)){
        navBar.style.transform='translate(-100vw)';
    callback(e, navBar);
    }
}


function ridimensionamento(){
    let navBar = document.querySelector('nav');
    if (window.matchMedia("(min-width: 1024px)").matches){
        navBar.style.transform='translate(0vw)';
    }
    else{
        navBar.style.transform='translate(-100vw)';
    }
}
function parallasse(){
let sfondo2 = document.getElementsByClassName('sfondo2');
}

if(video){video.addEventListener('ended', () => CambiaSfondo(SlittaBox))};
document.querySelector('.menu-btn').addEventListener('click',(event)=> spostaNav(event, animateIn));
document.addEventListener('click',(event)=>ritraiNav(event, animateOut));
window.addEventListener("resize", ridimensionamento);
window.addEventListener('scroll', parallasse);

