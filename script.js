let modalWrapper = document.querySelector(".modal-wrapper");
let modal = document.querySelector(".modal");
let modalClose = document.querySelector(".modal__close");
let modalButton = document.querySelector(".modal__button");

let modalP = document.querySelector(".modal__p");

let closeModal = () => (modalWrapper.style.display = "none");

document.querySelectorAll(".btn").forEach((btn) => {
    btn.onclick = function (event) {
        modalWrapper.style.display = "block";
        modal.style.display = "block";
    };
});

modalWrapper.addEventListener("click", (event) => {
    if (event.target == event.currentTarget) closeModal();
});


document.addEventListener("keyup", (e) => {
    if (e.key == "Escape") {
        closeModal();
    }
});


modalClose.onclick = function () {
    closeModal();
};

let userLogin = "Alice";
let userPassword = "12345";

let resualt = document.querySelector("#resualt");
modalButton.onclick = function () {
    let modalLogin = document.querySelector(".modal__login").value;
    let modalPassword = document.querySelector(".modal__password").value;
    console.log(modalLogin);
    console.log(modalPassword);
    if (userLogin == modalLogin && userPassword == modalPassword) {
        closeModal();

        localStorage.setItem("key", "value");
    } else {
        modalP.textContent = "Не правильный логин или пароль";
    }
};
localStorage.getItem("key");