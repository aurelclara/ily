// TYPEWRITER TEXT
const text = "Do you still love me?"
let index = 0

function typeWriter(){
    if(index < text.length){
        document.getElementById("text").innerHTML += text.charAt(index)
        index++
        setTimeout(typeWriter,80)
    }
}

typeWriter()


// FLOATING HEARTS
function createHeart(){

    const heart = document.createElement("div")
    heart.classList.add("heart")
    heart.innerHTML = "❤"

    heart.style.left = Math.random()*100 + "vw"
    heart.style.fontSize = Math.random()*20 + 10 + "px"
    heart.style.animationDuration = 3 + Math.random()*3 + "s"

    document.querySelector(".hearts").appendChild(heart)

    setTimeout(()=>{
        heart.remove()
    },6000)

}

setInterval(createHeart,300)


// RUNNING NO BUTTON
const noBtn = document.getElementById("no")

noBtn.addEventListener("mouseover",()=>{

    const x = Math.random()*window.innerWidth
    const y = Math.random()*window.innerHeight

    noBtn.style.position="absolute"
    noBtn.style.left=x+"px"
    noBtn.style.top=y+"px"

})


// YES BUTTON
const yesBtn = document.getElementById("yes")

yesBtn.addEventListener("click", () => {

    // sembunyikan semua elemen lama
    document.getElementById("text").style.display = "none"
    document.getElementById("rose").style.display = "none"
    document.getElementById("buttons").style.display = "none"

    // ubah background jadi pink glow
    document.body.classList.add("love-bg")

    // tampilkan pesan
    const msg = document.getElementById("message")
    msg.innerHTML = "I knew it ❤️"
    msg.style.display = "block"

})