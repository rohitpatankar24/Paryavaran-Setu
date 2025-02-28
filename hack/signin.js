function redirectToSignup() {
    window.location.href = "signup.html";}

const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobileNumber');

const emailSelectionBtn = document.querySelector('.email-selection');
const mobileSelectionBtn = document.querySelector('.mobile-selection');


emailSelectionBtn.addEventListener('click', () => {
emailInput.style.display = 'block';
mobileInput.style.display = 'none';
});

mobileSelectionBtn.addEventListener('click', () => {
emailInput.style.display = 'none';
mobileInput.style.display = 'block';
});



emailSelectionBtn.addEventListener('click', () => {
emailSelectionBtn.classList.add('selected');
mobileSelectionBtn.classList.remove('selected');
emailInput.style.display = 'block';
mobileInput.style.display = 'none';
});

mobileSelectionBtn.addEventListener('click', () => {
mobileSelectionBtn.classList.add('selected');
emailSelectionBtn.classList.remove('selected');
emailInput.style.display = 'none';
mobileInput.style.display = 'block';
});