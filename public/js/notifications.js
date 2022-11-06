const statusDisplay = document.getElementById("ONLINE_OFFLINE");
window.addEventListener("offline", (event) => {
    if (event.type === "offline") {
        statusDisplay.style.cssText = `position:fixed;width:100vw;height:100vh;position:fixed;z-index:3000;background-color:#151719; text-align:center;display:flex;justify-content:center;align-items:center;`
        statusDisplay.innerHTML = `
            <span style="--i:1">O</span>
            <span style="--i:2">F</span>
            <span style="--i:4">F</span>
            <span style="--i:5">L</span>
            <span style="--i:6">I</span>
            <span style="--i:7">N</span>
            <span style="--i:7">E</span>`;
        return;
    }
});
window.addEventListener("online", (event) => {
    if (event.type === "online") {
        statusDisplay.innerHTML = `
            <span style="--i:1">O</span>
            <span style="--i:2">N</span>
            <span style="--i:4">L</span>
            <span style="--i:5">I</span>
            <span style="--i:6">N</span>
            <span style="--i:7">E</span>`;
        setTimeout(() => statusDisplay.style = "display:none", 2000);
        return;
    }
});