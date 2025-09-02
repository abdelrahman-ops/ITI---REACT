
document.addEventListener('DOMContentLoaded', () => {
    const characterImage = document.getElementById('characterImage');
    const startButton = document.getElementById('startButton');
    const pauseButton = document.getElementById('pauseButton');
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    
    const images = [
        "../images/1.jpg",
        "../images/2.jpg",
        "../images/3.jpg",
        "../images/4.jpg",
        "../images/5.jpg",
        "../images/6.jpg",
        "../images/7.jpg",
        "../images/8.jpg",
    ];
    
    let currentIndex = 0;
    let intervalId = null;

    function showImage(index) {
        characterImage.style.opacity = 0;
        setTimeout(() => {
            characterImage.src = images[index];
            characterImage.style.opacity = 1;
        }, 500);
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function startSlider() {
        if (!intervalId) {
            intervalId = setInterval(nextImage, 2000); 
        }
    }

    function pauseSlider() {
        clearInterval(intervalId);
        intervalId = null;
    }

    nextButton.addEventListener('click', () => {
        pauseSlider();
        nextImage();
    });

    prevButton.addEventListener('click', () => {
        pauseSlider();
        prevImage();
    });

    startButton.addEventListener('click', startSlider);
    pauseButton.addEventListener('click', pauseSlider);

    // Show first image immediately
    showImage(currentIndex);
});
