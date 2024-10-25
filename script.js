// //ETAPES 1+2+3 
//function giveANumber() 
// {
//     const givenNumber = prompt("Saisir un nombre :");
    
//     return givenNumber;
// }



// function didIWin(givenNumber) 
// {

// //Si le givenNumber est 22 on affichera “Bravo ! Vous avez deviné le nombre”.-true
//              if (givenNumber == 22) {
            
//                 alert("Bravo ! Vous avez deviné le nombre")
//                 return true}
            
// //Si le givenNumber est plus petit que 22, on affichera à l’utilisateur “Plus grand”.-false
//             else if (givenNumber < 22) {
   
//                 alert("Vous cherchez un nombre plus grand")
//                 return false}
            
// //Si le givenNumber est plus quand que 22 on affichera à l’utilisateur “Plus petit”.-false
//             else if (givenNumber > 22) {  

//                 alert("Vous cherchez un nombre plus petit")
//                 return false}

// }




// function gamePlay()
// {
    
//     // const winner = true;

//     let number = giveANumber()
//     let winner = didIWin(number)
 
//     while (!winner) 
//         {
//             number = giveANumber()
//             winner = didIWin(number)

//         }
       
// }
// gamePlay()


//ETAPE 4 
//Créer une fonction qui demande au joueur 1 de fournir un nombre à deviner compris entre 0 et 50 tant qu’il ne respecte pas ce range.
function giveANumberPlayer1() 
{
  return parseInt(prompt("Faire deviner un nombre :"))

}

function didPlayer1Win(givenNumber)
{

   if (0 <= givenNumber && givenNumber <= 50) 
    {
    alert("Bravo ! Votre nombre est bien compris entre 0 et 50")
    return true
    }

    else (0 >= givenNumber && givenNumber >= 50) 
    {
    alert("Attention ! Votre nombre ne respecte pas le bon range. ")
    return false
    }

}


function gamePlay()
{
 let givenNumber = giveANumberPlayer1()
    while (didPlayer1Win(givenNumber)==false) 
    {
        givenNumber = giveANumberPlayer1()
    }
       
}
gamePlay()
