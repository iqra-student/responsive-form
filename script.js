const mobilenav = document.querySelector(".mobile-navbar-icon");
const headerEle = document.querySelector(".header");
const showpopup = document.querySelector(".login-btn");
const formpopup = document.querySelector(".form-popup");
const hidepopup = document.querySelector(".form-popup .close-btn");
const loginsignuplink = document.querySelectorAll(".form-box .bottom-links a");

showpopup.addEventListener("click",()  => {
    document.body.classList.toggle("show-popup")
})

hidepopup.addEventListener("click", () => showpopup.click());

loginsignuplink.forEach(link => {
    link.addEventListener("click", (e) =>{
        e.preventDefault();
        formpopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    })
})


mobilenav.addEventListener("click", () =>{
    headerEle.classList.toggle("active");
})

