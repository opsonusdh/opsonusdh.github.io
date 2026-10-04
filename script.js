function toggleMenu() {
    const holder = document.getElementById("link-holder");
    if (holder.classList.contains("open") && !holder.classList.contains("closed")) {
        document.getElementById("menu-toggle").innerHTML = "&#9776;";
        holder.classList.remove("open");
        holder.classList.add("closing");
        setTimeout(() => {holder.classList.remove("closing"); holder.classList.add("closed");}, 1200);
    }
    else if (holder.classList.contains("closed") && !holder.classList.contains("open")) {
        document.getElementById("menu-toggle").innerHTML = "&#10006;";
        holder.classList.remove("closed");
        holder.classList.add("open");
        holder.focus();
    }
}

window.onload = () => {
    const holder = document.getElementById("link-holder");
    holder.classList.add("closed");
    holder.addEventListener('blur', (event) => {
        if (event.relatedTarget && (event.relatedTarget.id === "menu-toggle" || event.relatedTarget.classList.contains("navigation-link"))) {
            return; 
        }
        if (holder.classList.contains("open")) {
            toggleMenu();
        }
    });
    document.addEventListener("scroll", () => {
        if (holder.classList.contains("open")) {
            toggleMenu();
        }
    });
}