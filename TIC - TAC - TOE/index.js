let box = document.querySelectorAll(".box");
let turn = "X";
let isgameover = false;

box.forEach((em) => {
    em.innerText = "";
    em.addEventListener("click", () => {
        if (!isgameover && em.innerText === "") {
            em.innerText = turn;
            checkwin();
            checkDraw();
            changeTurn();
        }
    });
});

function changeTurn() {
    if (turn === "X") {
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
    } else {
        turn = "X";
        document.querySelector(".bg").style.left = "0";

    }
}

function checkwin() {
    let winCondition = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winCondition.length; i++) {
        let v0 = box[winCondition[i][0]].innerHTML;
        let v1 = box[winCondition[i][1]].innerHTML;
        let v2 = box[winCondition[i][2]].innerHTML;

        if (v0 != "" && v0 === v1 && v0 === v2) {
            isgameover = true;
            document.querySelector(".result").innerText = turn + " Win";
            document.querySelector(".play-again").style.display = "inline";


            for (let j = 0; j < 3; j++) {
                box[winCondition[i][j]].style.backgroundColor = "#08D9D6";


                box[winCondition[i][j]].style.
                    color = "#000";
            }
        }
    }


}


function checkDraw() {
    let isdraw = false;

    if (!isgameover) {
        isdraw = true;
        box.forEach(e => {
            if (e.innerHTML === "") isdraw = false;
        })

        if (isdraw) {
            isgameover = true;
            document.querySelector(".result").innerText = " Draw";
            document.querySelector(".play-again").style.display = "inline";

        }
    }

}
  // restart game ; 
document.querySelector(".play-again").addEventListener("click", () => {
    isgameover = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector(".result").innerHTML = "";
    document.querySelector(".play-again").style.display = "none";
    box.forEach(e => {
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff";
    })
})



