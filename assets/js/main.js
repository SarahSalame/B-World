const body = document.querySelector("body");
const modeSwitchBtn = document.querySelectorAll(".modeSwitchBtn");
const listBtn = document.querySelectorAll(".menuBtn");
const dataTheme = localStorage.getItem("themeMode");
const logo = document.querySelector(".logo");
const nav = document.querySelector("nav");
const sideBar = document.querySelector(".sideBar");
const closeBtn = document.querySelectorAll(".closeBtn");
const switchInput = document.querySelector(".switch");
const switchInputIcn = document.querySelector(".switchIcn");
const modeSwitchContent = document.querySelector(".modeSwitchBtn p");
switchInputIcn.style.display = "block";

window.onscroll = () => {
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};

window.onresize = () => {
  if (window.innerWidth > 630) {
    sideBar.style.transform = "translateX(200%)";
  }
};

body.setAttribute("data-theme", dataTheme ?? "light");
localStorage.setItem("themeMode", body.getAttribute("data-theme"));

const repoPath = window.location.pathname.includes("/repo-name") ? "/repo-name" : "";
logo.src = dataTheme === "dark"
  ? `${repoPath}/assets/images/dark-Logo.svg`
  : `${repoPath}/assets/images/Logo.svg`;


modeSwitchBtn[0].innerHTML =
  dataTheme === "dark"
    ? "<img src='./assets/images/sun.svg' /> Light mode"
    : "<img src='./assets/images/moon.svg' /> Dark mode";

modeSwitchContent.innerHTML = dataTheme == "dark" ? "Light mode" : "Dark mode";

switchInputIcn.style.transform = dataTheme === "dark" ? "translateX(100%)" : "";

modeSwitchBtn.forEach((mode) => {
  mode.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    switchInputIcn.style.transform =
      newTheme === "dark" ? "translateX(100%)" : "";

    localStorage.setItem("themeMode", newTheme);
    body.setAttribute("data-theme", newTheme);

    logo.src =
      newTheme === "dark"
        ? "/B-World/assets/images/dark-Logo.svg"
  : "/B-World/assets/images/Logo.svg";

    modeSwitchBtn[0].innerHTML =
      newTheme === "dark"
        ? "<img src='./assets/images/sun.svg' /> Light mode"
        : "<img src='./assets/images/moon.svg'/> Dark mode";

    modeSwitchContent.innerHTML =
      newTheme == "dark" ? "Light mode" : "Dark mode";
  });
});

listBtn.forEach((menu) => {
  menu.addEventListener("click", () => {
    sideBar.style.transform = "translateX(0)";
  });
});

closeBtn.forEach((close) => {
  close.addEventListener("click", () => {
    sideBar.style.transform = "translateX(200%)";
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const booksContainer = document.getElementById("books-container");

    fetch("https://example-data.draftbit.com/books?_limit=8")
        .then(response => response.json())
        .then(books => {
            booksContainer.innerHTML = ""; 
            books.forEach(book => {
                const bookElement = document.createElement("div");
                bookElement.classList.add("book-card");
                bookElement.innerHTML = `
                    <img src="${book.image_url}" alt="${book.title}" class="book-image">
                    <h3 class="book-author">${book.authors}</h3>
                    <div class="book-info">
                        <div class="moredetails"><img src="assets/images/icons/bookIcon.png"/> <p>${book.num_pages} Pages </p></div>
                        <div class="moredetails"> <img src="assets/images/icons/starIcon.png"/><p>${book.rating}</p></div>
                    </div>
                    <button class="details-button" data-id="${book.id}">
                        Show Details
                    </button>
                `;
                booksContainer.appendChild(bookElement);
            });
            document.querySelectorAll(".details-button").forEach(button => {
                button.addEventListener("click", function () {
                    const bookId = this.getAttribute("data-id");
                    localStorage.setItem("selectedBookId", bookId);
                    window.location.href = "book-details.html";
                });
            });
        })
        .catch(err => console.log(err));
});














