const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');
const forget = document.getElementById('forget');

signupBtn.onclick = function() {
    title.innerHTML = "Sign Up"; // change into signup
    nameField.style.display  = "block"; // click on signup then display name
}

signinBtn.onclick = function() {
    title.innerHTML = "Login"; // change into signup
    nameField.style.display  = "none"; // click on signup then display name
}

forget.onclick = function() {
    nameField.style.display  = "block";
}

