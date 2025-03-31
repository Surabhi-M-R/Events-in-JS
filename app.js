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
