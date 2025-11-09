let count = 0;
const span = document.getElementById("count");
document.getElementById("btnAdd").onclick = () => (span.textContent = ++count);
document.getElementById("btnSub").onclick = () => (span.textContent = --count);
document.getElementById("btnReset").onclick = () => (span.textContent = count = 0);

function updateClock() {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString("pt-BR");
}
setInterval(updateClock, 1000);
updateClock();

