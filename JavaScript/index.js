function Stars(){
    let count = 500;
    let scene = document.querySelector('.scene');
    let h = 0;
    //ციკლი
    while ( h < count){
        let Star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth)
        let y = Math.floor(Math.random() * window.innerHeight)
        let Duration = Math.random () * 10;
        let size = Math.random() * 2;
        //Element Style
        Star.style.left = x + 'px'
        Star.style.top = y + 'px'
        Star.style.width = 1 + size + 'px'
        Star.style.height = 1 + size + 'px'
        //Animation
        Star.style.animationDuration = 3 + Duration + "s";
        Star.style.animationDelay = Duration + 's'
        //Appendchild HTML element 'I'
        scene.appendChild(Star)
        h++;
    }
}
Stars();
//function Start