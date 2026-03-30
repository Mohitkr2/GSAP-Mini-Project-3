function breakTheText(){
var h1 = document.querySelector("h1")

var h1Text = h1.textContent

var splittedText = h1Text.split("")
var clutter = ""

var halfValue = splittedText.length/2

splittedText.forEach((e,idx)=>{
    if(idx < halfValue){
        // console.log("e")
        clutter += `<span class="a">${e}</span>`

    } else{
        // console.log("lol",e)
        clutter += `<span class="b">${e}</span>`

    }
})

h1.innerHTML = clutter
}

breakTheText()

gsap.from("h1 .a",{
    y: 80,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.15,
})
gsap.from("h1 .b",{
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: -0.15,
})