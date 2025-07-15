// Func to update clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const amPm = hours >= 12 ? "PM" : "AM";

    // Convert 24h to 12h format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    hours = String(hours).padStart(2, "0");

    const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
    document.getElementById ("clock").textContent = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); //call

// Theme toggle
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
