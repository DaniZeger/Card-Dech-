let suitNames = ["Spade", "Club", "Hart", "Diamond"];
let suits = ["&#9824;", "&#9827;", "&#9829;", "&#9830;"];

for (let x = 1 ; x <= 4 ; x++){

    for (let card = 1 ; card <= 13 ; card++ ){

        if (card.toString() === "1"){
            console.log("A" + " " + suitNames[0]);
            document.write("A" + " " + suits[0] + "<br>"); 
        
        }else if (card.toString() === "11"){
            console.log("J" + " " + suitNames[0]);
            document.write("J" + " " + suits[0] + "<br>"); 
        
        }else if (card.toString() === "12") {
            console.log("Q" + " " + suitNames[0]);
            document.write("Q" + " " + suits[0] + "<br>"); 
            
        
        }else if (card.toString() === "13") {
            console.log("K" + " " + suitNames[0]);
            document.write("K" + " " + suits[0] + "<br>");
        
        }else{
            console.log(card + " " + suitNames[0]);
            document.write(card + " " + suits[0] + "<br>");
        }
    }
    
    suitNames.splice(0 , 1);
    suits.splice(0 , 1);
}