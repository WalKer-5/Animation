function Stars(){
    let count = 500;
    let Scene = document.querySelector('.scenes')
    let p = 0;
    while(p < count){
        let Star = document.createElement('i');
        //Create HTML Element 
        let X = Math.floor(Math.random()* window.innerHeight)
        let Y = Math.floor(Math.random()* window.innerHeight)
        let Duration = Math.floor(Math.random()*10)
        let Size = Math.random() * 2;
        Star.style.left = X + 'px';
        Star.style.top = Y + 'px';
        Star.style.width = 1 + Size + 'px'
        Star.style.animationDuration = 5 + Duration +'s'
        Star.style.animationDelay = Duration +"s"
        Scene.appendChild(Star);
        p++;
    }
}
Stars();