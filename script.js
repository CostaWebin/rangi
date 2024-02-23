function openModal() {
    document.getElementById("overlay").style.display = "block";
    document.addEventListener("click", closeModalOutside);
    document.addEventListener("keydown", closeModalEsc);
    document.body.classList.add("modal-open"); 
    
}

function closeModalOutside(event) {
    if (event.target === document.getElementById("overlay")) {
        closeModal();
    }
}

function closeModalEsc(event) {
    if (event.key === "Escape") {
        closeModal();
    }
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
    document.removeEventListener("click", closeModalOutside);
    document.removeEventListener("keydown", closeModalEsc);
    document.body.classList.remove("modal-open");
}
