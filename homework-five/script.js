function startGame() {
    let player = prompt("Welcome to my choose-your-own adventure game. Please start by entering your name");
    alert("Welcome, " + player + "! Today we are going on a campus adventure. Are you ready to begin?");
    let tool = prompt("To begin your adventure, you need to select a tool. Please pick your tool of choice: ladder, flashlight, or shovel");
    let decision1 = prompt("You are walking through the campus center and hear a menacing growl coming from another room. Do you want to enter (1) or leave (2)?");

    if (decision1 === "1") {
        let decision2 = prompt("You enter the room and see three doors - red (1), blue (2), and green (3). Which door do you choose?");
        if (decision2 === "1") {
            alert("You find a treasure chest behind the red door. Congratulations, you win!");
        } else if (decision2 === "2") {
            let decision3 = prompt("Behind the blue door, you find a riddle. Solve it (1) or ignore it and keep exploring (2)?");
            if (decision3 === "1") {
                alert("You solve the riddle and gain access to a secret library with valuable knowledge. Well done!");
            } else {
                alert("You ignore the riddle and continue exploring. You find a map leading to hidden treasures!");
            }
        } else if (decision2 === "3") {
            let decision4 = prompt("You step into a portal behind the green door. It leads to a magical forest. Explore (1) or turn back (2)?");
            if (decision4 === "1") {
                alert("You explore the magical forest and befriend a mythical creature. You both embark on a legendary quest!");
            } else {
                alert("You turn back from the magical forest and find a hidden cave with ancient artifacts. Great discovery!");
            }
        } else {
            alert("Invalid choice. You stand there and nothing happens. The adventure ends.");
        }
    } else if (decision1 === "2") {
        alert("You decide to leave the campus center. As you walk away, you find a hidden path leading to a magical forest. You venture into the forest and begin a new adventure.");
    } else {
        alert("Invalid choice. The adventure ends.");
    }
}



// Call the startGame() function to begin the adventure
startGame();
document.getElementById("startGame").addEventListener("click", startGame);

         
        




