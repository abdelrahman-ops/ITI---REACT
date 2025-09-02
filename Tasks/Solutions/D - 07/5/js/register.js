document.addEventListener('DOMContentLoaded', () => {
    const maleOption = document.getElementById('maleOption');
    const femaleOption = document.getElementById('femaleOption');
    const registerButton = document.getElementById('registerButton');

    maleOption.addEventListener('click', () => {
        maleOption.classList.add('selected');
        femaleOption.classList.remove('selected');
        maleOption.querySelector('input').checked = true;
    });

    femaleOption.addEventListener('click', () => {
        femaleOption.classList.add('selected');
        maleOption.classList.remove('selected');
        femaleOption.querySelector('input').checked = true;
    });

    registerButton.addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const genderInput = document.querySelector('input[name="gender"]:checked');
        const favoriteColor = document.getElementById('favoriteColor').value;

        if (!name || !genderInput) {
            alert("Please enter your name and select a gender.");
            return;
        }

        const userData = {
            name: name,
            gender: genderInput.value,
            color: favoriteColor
        };

        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location.href = 'registered.html';
    });
});
