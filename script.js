const secretPassword = "test"; // Mot de passe easter egg a modifier

const input = document.getElementById("secret-input");
const button = document.getElementById("secret-btn");
const result = document.getElementById("secret-result");

// Vérification du mot de passe (seulement si les éléments existent)
if (button && input && result) {
    button.addEventListener("click", () => {
        if (input.value.toLowerCase() === secretPassword) {
            window.location.href = "easter-egg-page.html"; 
        } else {
            result.style.color = "red";
            result.textContent = "Mot de passe incorrect ❌";
        }
    });

    
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            button.click(); 
        }
    });
}

// Fonctionnalité du bouton Non qui s'échappe
const noBtn = document.getElementById("no");

if (noBtn) {
    let hasMovedOnce = false;
    let isMoving = false; 
    
    // Fonction pour déplacer le bouton
    function moveButton() {
        if (isMoving) return; // Si déjà en mouvement on ignore
        
        isMoving = true;
        
        
        if (!hasMovedOnce) {
            hasMovedOnce = true;
            noBtn.style.position = "fixed";
        }
        
        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
        
        // Réautoriser le mouvement après un délai
        setTimeout(() => {
            isMoving = false;
        }, 300); 
    }

    // Déplacement au survol
    noBtn.addEventListener("mouseenter", moveButton);
    
    // Déplacement au focus (clavier)
    noBtn.addEventListener("focus", moveButton);
    

    noBtn.addEventListener("click", (e) => {
        e.preventDefault();
        moveButton();
    });
    
    // Déplacement quand on s'approche
    let lastMoveTime = 0;
    
    document.addEventListener("mousemove", (e) => {
        const now = Date.now();
        

        if (now - lastMoveTime < 300) return;
        
        const rect = noBtn.getBoundingClientRect();
        const distance = 80; // Distance de détection en pixels
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Calculer si la souris est proche
        const closeX = mouseX > rect.left - distance && 
                       mouseX < rect.right + distance;
        const closeY = mouseY > rect.top - distance && 
                       mouseY < rect.bottom + distance;
        
        if (closeX && closeY) {
            lastMoveTime = now;
            moveButton();
        }
    });
}

// Pluie de cœurs
if (document.getElementById('container2')) {
    // Fonction pour créer un cœur qui tombe
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        

        const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💞', '💝'];
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        

        heart.style.left = Math.random() * 100 + 'vw';
        

        const size = Math.random() * 15 + 15;
        heart.style.fontSize = size + 'px';
        

        const duration = Math.random() * 3 + 3; 
        heart.style.animationDuration = duration + 's';
        

        heart.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(heart);
        

        setTimeout(() => {
            heart.remove();
        }, (duration + 2) * 1000);
    }


    for (let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 200);
    }
    

    setInterval(createHeart, 300);
}