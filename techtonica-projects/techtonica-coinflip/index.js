const whichSide = document.getElementById("donutImg");
// const myText1 = document.getElementById("myTextInput1")
// const myText2 = document.getElementById("myTextInput2")
// const myScore1 = document.getElementById("myScore1");
// const myScore2 = document.getElementById("myScore2");
function donutFlip(){   
    function chocOrVanilla(){
     return Math.floor(Math.random() * (3 - 1)) + 1;
    }    
    const chooseSides = chocOrVanilla();
    //Chocolate is equal to 1 
    //Vanilla is equal to 2
        if (chooseSides === 1){
    whichSide.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeficj07b-Onr5Cyicm5uYlWbocB8dwkC_sd6_B9uo1iviw5_pSskLcsmkqkz9ExK8u5oIdZqp&usqp=CAc";   
    } else if (chooseSides === 2){
    whichSide.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTFAlbe49RlU4f4nb73Zgo-qNiJUcr1MGtHRPJIR2rwIVvaUEnnpe_7AxOgPlgqqFJm6ClbE&usqp=CAc"
     
    }
    const myText1 = document.getElementById("myTextInput1").value
    const myText2 = document.getElementById("myTextInput2").value
    console.log(myText1)
    if(myText1 === "Chocolate" && chooseSides === 1){
    console.log("you got it!!")
    const myScore1 = document.getElementById("myScore1");
    // console.log(parseInt(myScore1.innerText));
    let newScore = parseInt(myScore1.innerText) + 1;
    myScore1.innerHTML = newScore


    } else if (myText2 === "Chocolate" && chooseSides === 1){
    console.log("you got it!!")
    const myScore2 = document.getElementById("myScore2");
    let newScore1 = parseInt(myScore2.innerText) + 1; 
    myScore2.innerHTML = newScore1
    }

     if (myText1 === "Vanilla" && chooseSides === 2){
    console.log("you got it!!")
    const myScore1 = document.getElementById("myScore1");
    console.log(parseInt(myScore1.innerText));
    let newScore = parseInt(myScore1.innerText) + 1;
    myScore1.innerHTML = newScore
    
     } else if (myText2 === "Vanilla" && chooseSides === 2){
    console.log("you got it!!")
    const myScore2 = document.getElementById("myScore2");
    console.log("you got it!!")
    let newScore1 = parseInt(myScore2.innerText) + 1; 
    myScore2.innerHTML = newScore1
    }

}
// const myScore1 = document.getElementById("myScore1");
// let newScore = myScore1.value + 1;
// myScore1.innerHTML(newScore)



// if (player1Score is > player2Score){
//      alert("Winner Winner Chicker Dinner!! Player 1 Wins)
// } else if  (player2Score is > player1Score) {
//     alert("Winner Winner Chicker Dinner!! Player 2 Wins)

