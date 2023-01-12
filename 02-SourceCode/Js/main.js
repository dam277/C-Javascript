let myName = prompt('Veuillez saisir votre nom.');
localStorage.setItem('nom', myName);
document.querySelector("p").textContent = myName;