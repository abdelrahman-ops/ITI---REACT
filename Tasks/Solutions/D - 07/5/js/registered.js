
document.addEventListener('DOMContentLoaded', () => {
    const data = JSON.parse(sessionStorage.getItem('userData'));
    if (!data) {
        document.body.innerHTML = "<h2>No user data found. Please register first.</h2>";
        return;
    }

    const genderImage = document.getElementById('genderImage');
    const userName = document.getElementById('userName');

    if (data.gender === "male") {
        genderImage.src = "../images/male.jpg";
    } else {
        genderImage.src = "../images/OIP.webp";
    }

    userName.textContent = data.name;
    userName.style.color = data.color;
});
