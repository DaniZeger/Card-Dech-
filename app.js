let suitNames = ["Spade", "Club", "Hart", "Diamond"];
let suits = ["&#9824;", "&#9827;", "&#9829;", "&#9830;"];

for (let x = 1 ; x <= 4 ; x++){
    for (let card = 1 ; card <= 13 ; card++ ){
        console.log(card + " " + suitNames[0]);
        document.write(card + " " + suits[0] + "<br>")

    }
    suitNames.splice(0 , 1);
    suits.splice(0 , 1);
}