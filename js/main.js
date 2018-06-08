window.addEventListener("load", init);

function init(){
    for (let i = 0; i < 100; i ++){
        createFish();
        createBubble();
    }

    let fishes = document.getElementsByTagName("fish");
    for (let i = 0; i < fishes.length; i++){
        fishes[i].addEventListener("click", clickHandler);
    }

}


//
// maak vis
//
function createFish(){
    let createFish = document.createElement('fish')
        let xy = getRandomPosition(createFish); //positie
        let color = getRandomColor(createFish); //kleur
        createFish.style.top = xy[0] + 'px';
        createFish.style.left = xy[1] + 'px';
        createFish.style.filter = "hue-rotate(" + color + "deg)"
    document.body.appendChild(createFish)    
    
}


//
// maak bubble
//
function createBubble(){
    let createBubble = document.createElement('bubble')
        let xy = getRandomPosition(createBubble); //positie
        createBubble.style.top = xy[0] + 'px';
        createBubble.style.left = xy[1] + 'px';
    document.body.appendChild(createBubble)
}

function clickHandler(o){
    let clickedItem = o.target;
    clickedItem.classList.add("dead");
}


//
// krijg random vis positie
//
function getRandomPosition(element) {
	let x = (window.innerHeight - 130)
	let y = (window.innerWidth - 110)
	let randomX = Math.floor(Math.random()*x);
	let randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}


//
// krijg random vis kleur
//
function getRandomColor(color) {
    let number = Math.random() * 361;
    return number;
}
