let lists = document.querySelectorAll(".list");
let leftbox = document.querySelector(".left");
let rightbox = document.querySelector(".right");


for (list of lists) {
    list.addEventListener("dragstart", (e) => {
        let selected = e.target;
        //  drag to left  and drop in right 
        rightbox.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        rightbox.addEventListener("drop", (e) => {
            rightbox.appendChild(selected);
            selected = null;
        });


        // drag to right and drop in left ; 
        leftbox.addEventListener("dragover", (e) => {
            e.preventDefault();
        })

        leftbox.addEventListener("drop", () => {
            leftbox.appendChild(selected);
            selected = null;
        });

    });
}