// button with badge toggle
const toggleBtn = document.querySelector("#toggle-btn");
const badge = toggleBtn.querySelector(".btn-right-badge");

const hideBadge = () => {
  badge.toggleAttribute("hidden");
}

toggleBtn.addEventListener("click", hideBadge);


// dynamically add chip
const chipContainer = document.querySelector("#chip_container");
const chipInput = document.querySelector("#chip_input");

const deleteChip = (event)=>{
  event.target.parentElement.remove();
}

const addChip = (event)=>{
  if(event.code == "Enter"){
    let span = document.createElement("span");
    let icon = document.createElement("i");
    icon.setAttribute("class", "chip-cross fas fa-times-circle");
    icon.addEventListener("click", deleteChip);
    span.innerText = event.target.value;
    span.setAttribute("class", "chip");
    span.append(icon);
    chipContainer.prepend(span);
    event.target.value = "";
  }
}

chipInput.addEventListener("keydown", addChip);