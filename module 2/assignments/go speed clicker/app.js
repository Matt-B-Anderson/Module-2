const btn = document.querySelector("#clicker");
let startingClicks = 1;

btn.addEventListener("click", () => {
    startingClicks++;
    const numClicks = document.querySelector("#clicks");
    numClicks.innerText = "Number of clicks: " + startingClicks;

    localStorage.setItem("clicks", startingClicks);
    const clicks = localStorage.getItem("clicks");
    console.log(clicks);
})