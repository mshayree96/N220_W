function enterRoom(){
    alert("it is really dark and the growl is getting louder.");

    if(tool.toUpperCase()=="SHOVEL"){
        alert("luckily you chose the shovel. You were able to defeat the beast")
    }else if(toUpperCase()=="LADDER"){
        alert("You tried to climb your"+ tool+ "But the best dragger you down and devour you.")

    }else if (tool.toUpperCase()=="FLASHLIGHT"){
        alert("You were able to escape");
        let alertAC=prompt("Do you tell aurthorities about the ebast alert or home");
    }
    if (alertAC.toUpperCase=="ALERT"){
        alertAControl();

    }else{
        goHome();
    }


}
function goHome(){
    alert("You go Home")
}



function leaveRoom(){
    alert("You chose to leave. chicken");
}




function startGame(){
    let player=prompt("welcome to my choose-your-own adventure game.please start by enteringyour name")
    alert(" Welcome"+ player + "!Today we are going on a campus adventure? are you ready to brgin")
    let tool = prompt("To begin your adventure, you nedd to select a tool.Please pick your tool of choice ladder, flashlight, or shovel");
    let room =prompt("You are walking throgh the campus center and hear a menacing growl coming from another room. Do you enter or leave");


    if(room.toUpperCase()=="ENTER"){
        enterRoom();
        
    }else{
        leaveRoom();
    }
}