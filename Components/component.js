// button with badge toggle
const toggleButtonBadge = () => {
  const toggleBtn = document.querySelector("#toggle-btn");
  const badge = toggleBtn.querySelector(".btn-right-badge");
  
  const hideBadge = () => {
    badge.toggleAttribute("hidden");
  }
  
  toggleBtn.addEventListener("click", hideBadge);
}

// modal 
const actionOnModal = () => {
  const modalOpenBtn = document.querySelector("#open-modal");
  const modalBox = document.querySelector("#modal-box");
  const modalActionBtn = document.querySelectorAll(".modal-action-btn");
  const overlayDiv = document.querySelector("#disable-bg");
  
  const openmodal = () => {
    console.log(overlayDiv);
    modalBox.style.display = "flex";
    document.body.style.overflow = "hidden";
    overlayDiv.classList.add("overlay");
  }
  const closemodal = () => {
    modalBox.style.display = "none";
    document.body.style.overflow  = "visible";
    overlayDiv.classList.remove("overlay");
  }
  
  modalOpenBtn.addEventListener("click", openmodal);
  modalActionBtn.forEach(btn => btn.addEventListener("click", closemodal));
  items.forEach(item => item.addEventListener("click", closemodal));
}

// snackbar
const actionOnSnackbar = ()=>{
  console.log("event firedd");
  const snackbarBtns = document.querySelectorAll(".snackbar-button");

  const showSnackbar = (event) => {
    const btnId = event.target.id.split("-");
    document.querySelector(`#${btnId[0]}-${btnId[1]}`).style.display = "flex";
    setTimeout(() => {
    document.querySelector(`#${btnId[0]}-${btnId[1]}`).style.display = "none";
    }, 5000);
  }

  snackbarBtns.forEach(btn => btn.addEventListener("click", showSnackbar));
}

const checkElementPresent = () =>{
  if(document.querySelector("#toggle-btn"))
    toggleButtonBadge();
  else if(document.querySelector("#open-modal"))
    actionOnModal();
  else if(document.querySelectorAll(".snackbar-button"))
    actionOnSnackbar();
}

checkElementPresent();