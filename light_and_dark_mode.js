let modeBtn=document.querySelector("#mode");
let currentMode=" light";

modeBtn.addEventListener("click",()=>{
    if(currentMode==="light"){
        currentMode="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("h1").style.backgroundColor="white";
    }else{
        currentMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currentMode);
    
})