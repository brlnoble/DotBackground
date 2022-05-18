var size = 0;
var colors = ['#053043','#F37247','#F7C881'];

function randInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randColor() {
    return colors[randInt(0,colors.length-1)];
}

for(var i=0; i<750;i++) {
    var dot = document.createElement("span");
    size = randInt(5,40);
    dot.classList.add("dot");
    dot.style.width = size + "px";
    dot.style.height = size + "px";
    dot.style.top = randInt(0,100) + "%";
    dot.style.left = randInt(0,100) + "%";
    dot.style.backgroundColor = randColor();
    document.body.appendChild(dot);
}


function refresh() {
    location.reload();
}

var button = document.getElementById('refresh');
button.addEventListener('click', refresh);
