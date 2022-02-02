// button with badge toggle
const toggleBtn = document.querySelector("#toggle-btn");
const badge = toggleBtn.querySelector(".btn-right-badge");

const hideBadge = () => {
  badge.toggleAttribute("hidden");
}

toggleBtn.addEventListener("click", hideBadge);