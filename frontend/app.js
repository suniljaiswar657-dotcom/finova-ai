const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");

menuButton?.addEventListener("click", () => {
  sidebar?.classList.toggle("open");
});

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((link) => link.classList.remove("active"));
    item.classList.add("active");
    sidebar?.classList.remove("open");
  });
});

const connectionLabel = document.getElementById("connection-label");
const API_BASE_URL = "https://finova-ai-api-shivas-projects-9dc83da6.vercel.app";

async function checkBackend() {
  if (!connectionLabel) return;
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`, {
      headers: { Accept: "application/json" }
    });
    if (!response.ok) throw new Error("Backend unavailable");
    const data = await response.json();
    connectionLabel.textContent = data.status === "ok" ? "Backend connected" : "Check backend";
  } catch {
    connectionLabel.textContent = "Backend not connected";
  }
}

checkBackend();

document.getElementById("add-watchlist")?.addEventListener("click", () => {
  window.alert("Watchlist feature is planned. Market data integration will be added first.");
});

document.getElementById("research-button")?.addEventListener("click", () => {
  window.alert("AI research is not active yet. API configuration and verified data sources are required.");
});
