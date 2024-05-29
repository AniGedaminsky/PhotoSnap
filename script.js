var pictures = document.querySelector(".photo1")
pictures.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 20 * dx / window.innerWidth / 2
    let angleY = 20 * dy / window.innerHeight / 2
    block.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
})

console.log("hello world", pictures)