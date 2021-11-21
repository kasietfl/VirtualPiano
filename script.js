document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "a":
            let audioA = new Audio("white_keys/A.mp3");
            audioA.play();
            break;
        case "s":
            let audioS = new Audio("white_keys/S.mp3");
            audioS.play();
            break;
        case "d":
            let audioD = new Audio("white_keys/D.mp3");
            audioD.play();
            break;
        case "f":
            let audioF = new Audio("white_keys/F.mp3");
            audioF.play();
            break;
        case "g":
            let audioG = new Audio("white_keys/G.mp3");
            audioG.play();
            break;
        case "h":
            let audioH = new Audio("white_keys/H.mp3");
            audioH.play();
            break;
        case "j":
            let audioJ = new Audio("white_keys/A.mp3");
            audioJ.play();
            break;
        case "w":
            let audioW = new Audio("black_keys/W.mp3");
            audioW.play();
            break;
        case "e":
            let audioE = new Audio("black_keys/E.mp3");
            audioE.play();
            break;
        case "t":
            let audioT = new Audio("black_keys/T.mp3");
            audioT.play();
            break;
        case "y":
            let audioY = new Audio("black_keys/Y.mp3");
            audioY.play();
            break;
        case "u":
            let audioU = new Audio("black_keys/U.mp3");
            audioU.play();
            break;
        default:
            console.log('Err');
    }
});