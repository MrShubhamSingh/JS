
// function getActiveElement(){
//     console.log(document.activeElement);
//     const activeTag = document.activeElement.tagName;
//     document.getElementById("content").innerHTML = activeTag;
// }


function pressSwitch(){
   var switchText  = document.getElementById("content").innerHTML;
    if(switchText==="Switch Off"){
        document.getElementById("content").innerHTML="Switch On"
        document.getElementById("bulb").innerHTML =  "<img width=\"100\" height=\"100\" src=\"https://www.pngfind.com/pngs/m/80-805591_light-bulb-icon-png-transparent-png.png\">"
    }
    else{
        document.getElementById("content").innerHTML="Switch Off"
        document.getElementById("bulb").innerHTML =  "<img width=\"100\" height=\"100\" src=\"https://static.wixstatic.com/media/2cd43b_31844ce00cf04315a0e69681e3f97740~mv2.png/v1/fill/w_256,h_256,q_90/2cd43b_31844ce00cf04315a0e69681e3f97740~mv2.png\">"
    }
}
// document.getElementById("content").addEventListener("click",()=>{
//     console.log("Div is clicked")
// })