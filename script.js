const dropdbtn = document.querySelector(".dropdown button")
const dropcontent = document.querySelector(".dropdown-content ")
const toggle = document.querySelector(".toggle")
const body = document.querySelector("body")
const navknapper = document.querySelectorAll("h1, button, a")
let btnopen = false
let Darkmode = false

console.log(dropdbtn)
dropdbtn.addEventListener("click", showDropdownContent)

function showDropdownContent(){
    if (dropcontent.style.display == "flex"){
        dropcontent.style.display = "none"
    } else{
        dropcontent.style.display = "flex"
    }

}
if (toggle.style.backgroundColor === "white"){
    toggle.addEventListener("mouseover", () =>{
        toggle.style.backgroundColor = "black"
        toggle.style.color = "white"
        toggle.style.borderColor = "white"
    })
    toggle.addEventListener("mouseout", () =>{
        toggle.style.backgroundColor = "white"
        toggle.style.color = "black"
    })
}else{
    toggle.addEventListener("mouseover", () => {
        toggle.style.backgroundColor = "white"
        toggle.style.color = "black"
    })
    toggle.addEventListener("mouseout", () =>{
        toggle.style.backgroundColor = "black"
        toggle.style.color = "white"
    })
}
toggle.addEventListener("click", function(){
    console.log("skift til mørk")
    if(Darkmode){
        Darkmode = false
        toggle.innerHTML = "Darkmode"
        body.style.backgroundColor = "white"
        body.style.color = "black"
        navknapper.forEach(knapp => {
            knapp.style.backgroundColor = "white"
            knapp.style.color = "black"
            knapp.style.borderColor = "black"
        })
    }else{
        Darkmode = true
        toggle.innerHTML = "Lightmode"
        body.style.backgroundColor = "black"
        body.style.color = "white"
        navknapper.forEach(knapp => {
            knapp.style.backgroundColor = "black"
            knapp.style.color = "white"
            knapp.style.borderColor = "white"
        })
    }

})
