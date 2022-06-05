const themeButton = document.getElementById("themeButton");
let theme = localStorage.getItem('theme');

const enableLightTheme=()=>{
    document.body.classList.add("light-theme");
    localStorage.setItem('theme', 'light');
}

const disableLightTheme=()=>{
    document.body.classList.remove("light-theme");
    localStorage.setItem('theme', null);
}

if(theme=="light"){
    enableLightTheme();
}


themeButton.addEventListener("click", ()=>{
    theme = localStorage.getItem("theme");
    if(theme!="light"){
        enableLightTheme();
    }
    else{
        disableLightTheme();
    }
});

function bodyShadowOn(){
    document.body.style.backgroundColor="rgba(0,0,0,0.3)";
}

function bodyShadowOff(){
    document.body.style.backgroundColor="rgba(0,0,0,0)";
}