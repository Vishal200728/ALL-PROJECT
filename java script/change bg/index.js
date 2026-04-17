let button = document.getElementById("btn")
let body = document.body

let colors = ['black','white','green','yellow','blue','orange']
button.addEventListener('click',ChangeBaground);

function ChangeBaground() {
    let colorIndex = Math.floor(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
}