//Node.event=()=>{
//   handle here
//}
let btn=document.querySelector("#ap");
btn.onclick=()=>{
    alert( 'welcome to learning');
    console.log(" button was clicked");
}
btn.onclick=(evt)=>{// event object 
    alert( 'welcome to events');
    console.log(" button was clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
    console.log(evt.composed);
    console.log(evt.pointerType);   
}
// event Listeners
// note: " inline handling will make the html code bulky"
// Js node.event =()={}  : we can only write one function at a time
// so we introduced event listeners
//  syntax:::::::node.addEventListener(event,callback)
// syntax:::::node.removeEventListener(event,callback)

let evt_lis=document.querySelector("#big_btn");
evt_lis.addEventListener("click",()=>{
    console.log(" learning event Listening1");
    alert(" hey!! event 1");
})
evt_lis.addEventListener("click",()=>{
    console.log(" learning event2");
    alert(" hey!! event 2");
})
evt_lis.addEventListener("click",()=>{
    console.log(" learning event Listening3");
    alert(" hey!! event 3");
})
evt_lis.removeEventListener("click",()=>{
    console.log(" learning event Listening3");
    alert(" hey!! event 3");
})

const event4=()=>{
    console.log(" learning event Listening3");
    alert(" hey!! event 4");
}
evt_lis.addEventListener("click",event4);

evt_lis.removeEventListener(" click",event4);







