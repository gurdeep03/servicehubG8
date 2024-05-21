let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    if (!scrollProgress) {
        console.error("Error: scrollProgress element not found");
        return;
    }

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let ScrollValue = Math.round((pos * 100) / calcHeight);
    scrollProgress.addEventListener('scroll', () => {
        const scrollValue = (scrollProgress.scrollTop / (scrollProgress.scrollHeight - scrollProgress.clientHeight)) * 100;
        if (scrollValue < 0) {
          scrollProgress.style.transform = `translateY(0%)`;
        } else if (scrollValue > 100) {
          scrollProgress.style.transform = `translateY(-100%)`;
        } else {
          scrollProgress.style.transform = `translateY(${-scrollValue}%)`;
        }
    });

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    if (scrollProgress.style) {
        scrollProgress.style.background = `conic-gradient(#522522 ${ScrollValue}%, #d7d7d7 ${ScrollValue}%)`;
    }
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;