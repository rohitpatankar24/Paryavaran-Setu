const now = new Date();

const date = document.getElementById("current-date").textContent= now.toLocaleDateString(); // Get current date in a readable format
const time = document.getElementById("current-time").textContent =
  now.toLocaleTimeString(); // Get current time in a readable format
console.log("Current Date:", date);
console.log("Current Time:", time);

const logoutbtn =
  document.getElementById("logoutbtn").onclick = function change(){
    window.location.href ="/signup/index.html";
  }