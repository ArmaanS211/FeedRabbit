function setup(){
    createCanvas(400, 400);

    heading1 = createElement("h4", "Enter the alphabet");
    heading1.position(5, 20)

    inp = createInput()
    inp.position(5, 60);


}

function draw(){
    background("gray");

    alphabet = inp.value();

    switch (alphabet) {
        case "a":
            console.log("vowel");
            break;
        case "e":
            console.log("vowel");
            break;
        case "i":
            console.log("vowel");
            break;
        case "o":
            console.log("vowel");
            break;
        case "u":
            console.log("vowel");
            break;

        case "":
            break;
        default:
            console.log("consonant");
            break;
    }
    
}