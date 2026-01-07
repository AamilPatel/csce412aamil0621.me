if(localStorage.getItem("theme") == "dark")
    dark_mode();


if(localStorage.getItem("theme") == "light")
    light_mode();

function light_mode(){
    document.getElementById("css").setAttribute("href", "style2.css")
    localStorage.setItem("theme", "light")
}

function dark_mode(){
    document.getElementById("css").setAttribute("href", "style.css")
    localStorage.setItem("theme", "dark")
}