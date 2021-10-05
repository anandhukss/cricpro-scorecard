let buttons = document.querySelectorAll("a");
let player = document.getElementById("player");
let overlay = document.getElementById("overlay");

let images = {
    0: "assets/sehwag.png",
    1: "assets/sachin.png",
    2: "assets/gambhir.png",
    3: "assets/kohli.png",
    4: "assets/dhoni.png",
    5: "assets/yuvi.png",
    6: "assets/raina.jpg",
    7: "assets/harbhajan.jpg",
    8: "assets/munaf.jpg",
    9: "assets/zaheer.jpg",
    10: "assets/sree.jpg",
};

buttons.forEach((item, index) => {
    item.addEventListener("click", () => {
        console.log(item.innerHTML, index);
        player.style.backgroundImage = `url('${images[index]}')`;
        overlay.style.display = "block"
        player.style.display = "block"
    });
});

overlay.addEventListener("click", () => {
    player.style.display = "none"
    overlay.style.display = "none"
})