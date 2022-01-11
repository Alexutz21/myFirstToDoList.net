
function myFunction() {
    let userConfirms = confirm("Hello\nPress ok to continue ?!")
    //we create a constant array where we store our new intros
    const ToDoList = ["Learn C#", "Learn JavaScript", "Learn Python", "Learn C++", "Console Relaxation"];
    if (userConfirms) {
    
        let userInput = prompt("What yould you like to do: \
                            \nnew / n  - Add new\nlist   / l   - List all\ndel  / d  - Remove item\nquit / q - Quit App");
        while (userInput !== "quit" && userInput !== "q") {
            if (userInput === "list" || userInput === "l") {
                console.log("***************************")
                for (let i = 0; i < ToDoList.length; i++) {
                    console.log(`${i} : ${ToDoList[i]}`)
                }
                console.log("***************************")
            } else if (userInput === "new" || userInput === "n") {
                const addNewToDo = prompt("Ok, what would you like to add yo your list ?")
                ToDoList.push(addNewToDo);
                console.log(`${addNewToDo} added to the list !`)
            } else if (userInput === "del" || userInput === "d") {
                let delIndex = parseInt(prompt("Enter a index to delete: "))
                if (!Number.isNaN(delIndex)) {
                    // console.log(alert("Not valid index !"))
                    console.log(delIndex)
                    const deleted = ToDoList.splice(delIndex, 1)
                    console.log(`Ok, i've deleted the ${deleted[0]}`)
                } else {
                    console.log(alert("Unknown index"))
                }
            }
            // else (userInput === "quit" || userInput === "q") 
            //     console.log(alert("Thank you for your time! \nHate to see you go!"))
            //     break;
            userInput = prompt("What yould you like to do: \
                            \nnew / n  - Add new\nlist   / l   - List all\ndel  / d - Remove item\nquit / q - Quit App");
       
        } //console.log = (alert("Thank you. \nHave a nice day"))
    }
    else if (!userConfirms) {
        console.log = (alert("Maybe next time. \nHave a nice day. \nBye !"))
    }
}