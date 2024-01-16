document.addEventListener('DOMContentLoaded', function () {
    // Your code here

    // Define the number of boxes and buttons per box

    var numBoxes = 9;
    var numButtons = 9;
let flag = "X"
    // Array to store box objects
    var boxes = [];
    var j;
    let winnerScore = document.querySelector("h1")
    // Loop to dynamically generate box objects
    for (var i = 1; i <= numBoxes; i++) {
        var box = {
            id: 'box' + i,
            btnIds: []
        };

        // Loop to dynamically generate button IDs for each box
        for (j = 1; j <= numButtons; j++) {
            var b = j.toString()
      
            box.btnIds.push(b);
        }
numButtons = numButtons + 9;
        // Push the box object to the array
        boxes.push(box);
    }
    const resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener("click",()=>{
        buttons.forEach((btn)=>{
            btn.innerHTML = "";

        })

        for(let i=0;i<9;i++){
            document.getElementById(boxes[i].id).style.visibility = "visible"
        }

        winnerScore.textContent = "Winner :"
    })
let divs = document.querySelectorAll(".box");
var buttons = document.querySelectorAll('.grid');
clicking();
// Add click event listener to each button
function clicking(){
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
         if(flag == "X"){
            button.textContent = flag;
            flag = "O";
            let parentBox = button.parentElement;
            checkInBox(parentBox);
         setTimeout(function(){
            reVisible(parentBox,button.id)

            
            restrictOtherBox(parentBox,button.id);
         },500);

          
         }
         else{
            let parentBox = button.parentElement;
            button.textContent = flag;
            flag = "X";
            checkInBox(parentBox);

            setTimeout(function(){
                reVisible(parentBox,button.id)
    
                
                restrictOtherBox(parentBox,button.id);
             },500);

      
           
         }
        });
    });
}
function checkInBox(parentBox) {
    for (let i = 0; i < boxes.length; i++) {
        if (parentBox.id === boxes[i].id) {
            let btn = boxes[i].btnIds
          checkWinning(btn,i,parentBox.id);
          
        }
    }
}
function checkWinning(btnArray, i, parentID) {
    let j = i * 9;
    let numberOnBox = (i + 1) * 9;
    // Check if three buttons in the first row have the same text content ("X")
    if (
        document.getElementById(btnArray[j]).textContent == "X" &&
        document.getElementById(btnArray[j + 1]).textContent == "X" &&
        document.getElementById(btnArray[j + 2]).textContent == "X"
    ) {
        
    
        document.getElementById(parentID).textContent = "X";
        checkBox(parentID)
        console.log("X wins");
    }
    else if (
        document.getElementById(btnArray[j + 3]).textContent == "X" &&
        document.getElementById(btnArray[j + 4]).textContent == "X" &&
        document.getElementById(btnArray[j + 5]).textContent == "X"
    ) {
        document.getElementById(parentID).textContent = "X";
        checkBox(parentID)
        console.log("X wins");
    }
    else if (
        document.getElementById(btnArray[j + 6]).textContent == "X" &&
        document.getElementById(btnArray[j + 7]).textContent == "X" &&
        document.getElementById(btnArray[j + 8]).textContent == "X"
    ) {
        document.getElementById(parentID).textContent = "X";
        checkBox(parentID)
        console.log("X wins");
    }
    else if (
        document.getElementById(btnArray[j]).textContent == "X" &&
        document.getElementById(btnArray[j + 3]).textContent == "X" &&
        document.getElementById(btnArray[j + 6]).textContent == "X"
    ) {
        document.getElementById(parentID).textContent = "X";
        checkBox(parentID)
        console.log("X wins");
    }
    else if (
        document.getElementById(btnArray[j]).textContent == "X" &&
        document.getElementById(btnArray[j + 4]).textContent == "X" &&
        document.getElementById(btnArray[j + 8]).textContent == "X"
    ) {
        document.getElementById(parentID).textContent = "X";
        checkBox(parentID)
        console.log("X wins");
    }
    else if (
        document.getElementById(btnArray[j + 1]).textContent == "X" &&
        document.getElementById(btnArray[j + 4]).textContent == "X" &&
        document.getElementById(btnArray[j + 7]).textContent == "X"
    ) {
        document.getElementById(parentID).textContent = "X";
        checkBox(parentID)
        console.log("X wins");
    }
    else if (
        document.getElementById(btnArray[j + 2]).textContent == "X" &&
        document.getElementById(btnArray[j + 5]).textContent == "X" &&
        document.getElementById(btnArray[j + 8]).textContent == "X"
    ) {
        document.getElementById(parentID).textContent = "X";
        checkBox(parentID)
        console.log("X wins");
    }
    else if (
        document.getElementById(btnArray[j + 2]).textContent == "X" &&
        document.getElementById(btnArray[j + 4]).textContent == "X" &&
        document.getElementById(btnArray[j + 6]).textContent == "X"
    ) {
        document.getElementById(parentID).textContent = "X";
        checkBox(parentID)
        console.log("X wins");
    }

    else if (
        document.getElementById(btnArray[j]).textContent == "O" &&
        document.getElementById(btnArray[j + 1]).textContent == "O" &&
        document.getElementById(btnArray[j + 2]).textContent == "O"
    ) {
        document.getElementById(parentID).textContent = "O";
        console.log("O wins");
    }
    else if (
        document.getElementById(btnArray[j + 3]).textContent == "O" &&
        document.getElementById(btnArray[j + 4]).textContent == "O" &&
        document.getElementById(btnArray[j + 5]).textContent == "O"
    ) {
        document.getElementById(parentID).textContent = "O";
        console.log("O wins");
    }
    else if (
        document.getElementById(btnArray[j + 6]).textContent == "O" &&
        document.getElementById(btnArray[j + 7]).textContent == "O" &&
        document.getElementById(btnArray[j + 8]).textContent == "O"
    ) {
        document.getElementById(parentID).textContent = "O";
        console.log("O wins");
    }
    else if (
        document.getElementById(btnArray[j]).textContent == "O" &&
        document.getElementById(btnArray[j + 3]).textContent == "O" &&
        document.getElementById(btnArray[j + 6]).textContent == "O"
    ) {
        document.getElementById(parentID).textContent = "O";
        console.log("O wins");
    }
    else if (
        document.getElementById(btnArray[j]).textContent == "O" &&
        document.getElementById(btnArray[j + 4]).textContent == "O" &&
        document.getElementById(btnArray[j + 8]).textContent == "O"
    ) {
        document.getElementById(parentID).textContent = "O";
        console.log("O wins");
    }
    else if (
        document.getElementById(btnArray[j + 1]).textContent == "O" &&
        document.getElementById(btnArray[j + 4]).textContent == "O" &&
        document.getElementById(btnArray[j + 7]).textContent == "O"
    ) {
        document.getElementById(parentID).textContent = "O";
        console.log("O wins");
    }
    else if (
        document.getElementById(btnArray[j + 2]).textContent == "O" &&
        document.getElementById(btnArray[j + 5]).textContent == "O" &&
        document.getElementById(btnArray[j + 8]).textContent == "O"
    ) {
        document.getElementById(parentID).textContent = "O";
        console.log("O wins");
    }
    else if (
        document.getElementById(btnArray[j + 2]).textContent == "O" &&
        document.getElementById(btnArray[j + 4]).textContent == "O" &&
        document.getElementById(btnArray[j + 6]).textContent == "O"
    ) {
        document.getElementById(parentID).textContent = "O";
        console.log("O wins");
    }
}

function checkBox(btnDiv){
    let divInboxes = []
    for(let i = 0;i<9;i++){
        divInboxes.push(boxes[i].id)
        
    }

    if (
        document.getElementById(divInboxes[0]).textContent == "X" &&
        document.getElementById(divInboxes[1]).textContent == "X" &&
        document.getElementById(divInboxes[2]).textContent == "X"
    ) {
        
       winnerScore.textContent = "Winner : X"
        console.log("X wins");
    }
    else if (
        document.getElementById(divInboxes[1]).textContent == "X" &&
        document.getElementById(divInboxes[4]).textContent == "X" &&
        document.getElementById(divInboxes[7]).textContent == "X"
    ) {
        winnerScore.textContent = "Winner : X"

        console.log("X wins");
    }
    else if (
        document.getElementById(divInboxes[2]).textContent == "X" &&
        document.getElementById(divInboxes[5]).textContent == "X" &&
        document.getElementById(divInboxes[8]).textContent == "X"
    ) {
        winnerScore.textContent = "Winner : X"

        console.log("X wins");
    }
    else if (
        document.getElementById(divInboxes[0]).textContent == "X" &&
        document.getElementById(divInboxes[3]).textContent == "X" &&
        document.getElementById(divInboxes[6]).textContent == "X"
    ) {
        winnerScore.textContent = "Winner : X"

        console.log("X wins");
    }
  else if (
        document.getElementById(divInboxes[0]).textContent == "X" &&
        document.getElementById(divInboxes[4]).textContent == "X" &&
        document.getElementById(divInboxes[8]).textContent == "X"
    ) {
        winnerScore.textContent = "Winner : X"

        console.log("X wins");
    }
    else if (
        document.getElementById(divInboxes[3]).textContent == "X" &&
        document.getElementById(divInboxes[4]).textContent == "X" &&
        document.getElementById(divInboxes[5]).textContent == "X"
    ) {
        winnerScore.textContent = "Winner : X"

        console.log("X wins");
    }
     else if (
        document.getElementById(divInboxes[6]).textContent == "X" &&
        document.getElementById(divInboxes[7]).textContent == "X" &&
        document.getElementById(divInboxes[8]).textContent == "X"
    ) {
        winnerScore.textContent = "Winner : X"

        console.log("X wins");
    }
    else if (
        document.getElementById(divInboxes[2]).textContent == "X" &&
        document.getElementById(divInboxes[4]).textContent == "X" &&
        document.getElementById(divInboxes[6]).textContent == "X"
    ) {
        winnerScore.textContent = "Winner : X"

        console.log("X wins");
    }
    if (
        document.getElementById(divInboxes[0]).textContent == "O" &&
        document.getElementById(divInboxes[1]).textContent == "O" &&
        document.getElementById(divInboxes[2]).textContent == "O"
    ) {
        
        winnerScore.textContent = "Winner : O"

        console.log("O wins");
    }
    else if (
        document.getElementById(divInboxes[1]).textContent == "O" &&
        document.getElementById(divInboxes[4]).textContent == "O" &&
        document.getElementById(divInboxes[7]).textContent == "O"
    ) {
        winnerScore.textContent = "Winner : O"

        console.log("O wins");
    }
    else if (
        document.getElementById(divInboxes[2]).textContent == "O" &&
        document.getElementById(divInboxes[5]).textContent == "O" &&
        document.getElementById(divInboxes[8]).textContent == "O"
    ) {
        winnerScore.textContent = "Winner : O"

        console.log("O wins");
    }
    else if (
        document.getElementById(divInboxes[0]).textContent == "O" &&
        document.getElementById(divInboxes[3]).textContent == "O" &&
        document.getElementById(divInboxes[6]).textContent == "O"
    ) {
        winnerScore.textContent = "Winner : O"

        console.log("O wins");
    }
  else if (
        document.getElementById(divInboxes[0]).textContent == "O" &&
        document.getElementById(divInboxes[4]).textContent == "O" &&
        document.getElementById(divInboxes[8]).textContent == "O"
    ) {
        winnerScore.textContent = "Winner : O"

        console.log("O wins");
    }
    else if (
        document.getElementById(divInboxes[3]).textContent == "O" &&
        document.getElementById(divInboxes[4]).textContent == "O" &&
        document.getElementById(divInboxes[5]).textContent == "O"
    ) {
        winnerScore.textContent = "Winner : O"

        console.log("O wins");
    }
     else if (
        document.getElementById(divInboxes[6]).textContent == "O" &&
        document.getElementById(divInboxes[7]).textContent == "O" &&
        document.getElementById(divInboxes[8]).textContent == "O"
    ) {
        winnerScore.textContent = "Winner : O"

        console.log("O wins");
    }
    else if (
        document.getElementById(divInboxes[2]).textContent == "O" &&
        document.getElementById(divInboxes[4]).textContent == "O" &&
        document.getElementById(divInboxes[6]).textContent == "O"
    ) {
        winnerScore.textContent = "Winner : O"

        console.log("O wins");
    }
}

function reVisible(parentBox,currentBtn){
       for(let i=0;i<9;i++){
        // if(boxes[i].id === parentBox.id){
        //     console.log(parentBox.id);
        //     let j = (i)*9;
        //     j = parseInt(currentBtn, 10) - j;
          
        //     continue;
        // }
        document.getElementById(boxes[i].id).style.visibility = "visible";

    }
}

function restrictOtherBox(parentBox,currentBtn){
    for(let i=0;i<9;i++){
        if(boxes[i].id === parentBox.id){
            console.log(parentBox.id);
            let j = (i)*9;
            j = parseInt(currentBtn, 10) - j;
            console.log(j);
          for(let k = 0;k<9;k++){
            if(k!=j-1){
                document.getElementById(boxes[k].id).style.visibility = "hidden";
            }
          }
            break;
        }

    }
 

}


// function checkWinning(parentBox) {
//     for (let i = 0; i < boxes.length; i++) {
//         if (parentBox.id === boxes[i].id) {
//             let btnIdss = boxes[i].btnIds;
//             // let firstButtonText = document.getElementById(btnIdss[0]).textContent;

//             for(let i=0;i<9;i++){
//                 if(btnIdss[i].textContent ==="X"){
//                     console.log(i);
//                 }
//             }

//             if (isWinner) {
//                 console.log('Winner in ' + parentBox.id);
//                 // You can perform additional actions for a winner here
//             }
//             break;
//         }
//     }
// }


// function checkWinning(parentBox){
//     for(let i=0;i<9;i++){
//         if(parentBox.id == boxes[i].id){
//             boxes[i].btnIds
//         }
//     }
// }
    // Accessing and logging the data
    // boxes.forEach(function (box) {
    //     console.log('Box ID:', box.id);
    //     console.log('Button IDs:', box.btnIds);
    //     console.log('----------------------');
    // });


});