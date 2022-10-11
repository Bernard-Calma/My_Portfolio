const openMenu = (e, className) => {
    // console.log(className);
    let content;
    content = document.getElementsByClassName("title")
    // console.log(content[0].attributes)
    for( let i = 0; i < content.length; i++){
        content[i].setAttribute("hidden", true)
        content[i].className = content[i].className + " slideUp"
    }

    let showContent
    showContent = document.getElementById(className)
    showContent.removeAttribute("hidden")
}

document.body.style.height = window.height
footer = document.querySelector("footer")
// console.log(footer.getBoundingClientRect().top)


window.onscroll = () => {
    // console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 350) {
        footer.style.color = "white";
        footer.className = "slideUp";
        // console.log(footer.getBoundingClientRect())
    } else {
        footer.style.color = "black";
        footer.className = "slideDown";
    }
}

//Projects
let projectShow = 0;
let arrProjects = ["tamagotchi", "floating-shoe","spentrace"]
// Tamagochi Project
const openProjectsRight = () => {
    for( let i = 0; i < arrProjects.length; i++){
        // console.log(document.querySelector(`.${arrProjects[i]}`))
        document.querySelector(`.${arrProjects[i]}`).setAttribute("hidden", true)
    }
    if (projectShow === 2) {
        projectShow = 0;
    } else {
        projectShow += 1;
    }
    console.log(projectShow)
    // console.log(document.querySelector(`.${arrProjects[projectShow]}`))
    document.querySelector(`.${arrProjects[projectShow]}`).removeAttribute("hidden")
}

const openProjectsLeft = () => {   
    for( let i = 0; i < arrProjects.length; i++){
        // console.log(document.querySelector(`.${arrProjects[i]}`))
        document.querySelector(`.${arrProjects[i]}`).setAttribute("hidden", true)
    }
    if (projectShow === 0) {
        projectShow = 2;
    } else {
        projectShow -= 1;
    }
    console.log(projectShow)
    // console.log(document.querySelector(`.${arrProjects[projectShow]}`))
    document.querySelector(`.${arrProjects[projectShow]}`).removeAttribute("hidden")
}