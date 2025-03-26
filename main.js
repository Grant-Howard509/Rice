const openBtnWhite = document.getElementById("open-hamburger-button-white");
const openBtnBlack = document.getElementById("open-hamburger-button-black");
const closeBtn = document.getElementById("close-hamburger-button");
const mobileLogo = document.querySelector(".mobile-logo a");
const mobileMenu = document.querySelector(".mobile-list");

const navLinks = document.querySelectorAll("nav ul a");
const musicSection = document.querySelector(".music-section");
const dateSection = document.querySelector(".dates-section");


// New Declarations
const navList = document.querySelector("nav ul");
let isOverlapping = false;
// 


openBtnWhite.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    openBtnWhite.style.display = "none";
    closeBtn.style.display = "block";
});

openBtnBlack.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    openBtnBlack.style.display = "none";
    closeBtn.style.display = "block"; 
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");

    if (isOverlapping) 
    {
        openBtnBlack.style.display = "block";
    } else 
    {
        openBtnWhite.style.display = "block";
    }

    closeBtn.style.display = "none"; 
});


const checkOverlap = () => {
    const navRect = navList.getBoundingClientRect();
    const sectionRect = musicSection.getBoundingClientRect();

    isOverlapping = navRect.top < sectionRect.bottom && navRect.bottom > sectionRect.top;

    if (isOverlapping) {
        navLinks.forEach(link => link.classList.add("music-color-black"));
        mobileLogo.classList.add("music-color-black");
        openBtnWhite.style.display = 'none';
        openBtnBlack.style.display = 'block';
    } else {
        navLinks.forEach(link => link.classList.remove("music-color-black"));
        mobileLogo.classList.remove("music-color-black");
        openBtnWhite.style.display = 'block';
        openBtnBlack.style.display = 'none';
    }

    if (window.innerWidth > 750) 
    {
        openBtnWhite.style.display = 'none';
        openBtnBlack.style.display = 'none';
    }
};

window.addEventListener("scroll", checkOverlap);

checkOverlap();

function handleResize() 
{
    if (window.innerWidth > 750) 
    {
        mobileMenu.classList.remove("active");
        openBtnWhite.style.display = "none";
        openBtnBlack.style.display = "none";
        closeBtn.style.display = "none";
    } 
    else 
    {
        if (!mobileMenu.classList.contains("active")) 
        {
            openBtnWhite.style.display = isOverlapping ? "none" : "block";
            openBtnBlack.style.display = isOverlapping ? "block" : "none";
            closeBtn.style.display = "none";
        } else {
            closeBtn.style.display = "block";
        }
    }
}

handleResize();
window.addEventListener("resize", handleResize);