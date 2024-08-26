let number = document.getElementById("number");
let cnt = 0;
setInterval(() => {
    if (cnt == 65) {
        clearInterval();
    } else {
        cnt++;
        number.innerHTML = cnt + "%";
    }

}, 30);


let css = document.getElementById("css");
let count = 0;
setInterval(() => {
    if (count == 75) {
        clearInterval();
    } else {
        count++;
        css.innerHTML = count + "%";
    }

}, 25);


let js = document.getElementById("js");
let counter = 0;
setInterval(() => {
    if (counter == 50) {
        clearInterval();
    } else {
        counter++;
        js.innerHTML = counter + "%";
    }
}, 40)   ;
