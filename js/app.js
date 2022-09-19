const openMenu = (e, className) => {
    // console.log(className);
    let content;
    content = document.getElementsByClassName("title")
    // console.log(content[0].attributes)
    for( let i = 0; i < content.length; i++){
        content[i].setAttribute("hidden", true)
    }

    let showContent
    showContent = document.getElementById(className)
    showContent.removeAttribute("hidden")
}