const openBtnWhite = document.getElementById("open-hamburger-button-white");
const openBtnBlack = document.getElementById("open-hamburger-button-black");
const closeBtn = document.getElementById("close-hamburger-button");
const mobileLogo = document.querySelector(".mobile-logo a");
const mobileMenu = document.querySelector(".mobile-list");
const navLinks = document.querySelectorAll("nav ul a");
const musicSection = document.querySelector(".music-section");
const dateSection = document.querySelector(".dates-section");

let isIntersecting = false;

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

    if (isIntersecting) 
    {
        openBtnBlack.style.display = "block";
    } else 
    {
        openBtnWhite.style.display = "block";
    }

    closeBtn.style.display = "none"; 
});


const observer = new IntersectionObserver( entries => 
    {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.9) 
            {
                navLinks.forEach(link => link.classList.add("music-color-black"));                
                openBtnWhite.style.display = "none";
                openBtnBlack.style.display = "block";     
                isIntersecting = true;
                mobileLogo.classList.add("music-color-black");
            } else if (entry.isIntersecting && entry.target.getBoundingClientRect().top < 0){
                navLinks.forEach(link => link.classList.add("music-color-black"));
                openBtnWhite.style.display = "none";
                openBtnBlack.style.display = "block";
                isIntersecting = true;
                mobileLogo.classList.add("music-color-black");
            } else {
                navLinks.forEach(link => link.classList.remove("music-color-black"));
                openBtnWhite.style.display = "block";
                openBtnBlack.style.display = "none";
                mobileLogo.classList.remove("music-color-black");
                isIntersecting = false;
            }


            if (window.innerWidth > 750) 
            {
                openBtnWhite.style.display = "none";
                openBtnBlack.style.display = "none";
            }
        });
    }, { threshold: [0.1, 0.9], rootMargin: "0px" });

observer.observe(musicSection);

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
            openBtnWhite.style.display = isIntersecting ? "none" : "block";
            openBtnBlack.style.display = isIntersecting ? "block" : "none";
            closeBtn.style.display = "none";
        } else {
            closeBtn.style.display = "block";
        }
    }
}

handleResize();
window.addEventListener("resize", handleResize);